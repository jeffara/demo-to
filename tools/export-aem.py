#!/usr/bin/env python3
"""Gera conteúdo FileVault para um site XWalk EXISTENTE. Não instala nem publica."""
import argparse
import json
import mimetypes
import re
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
NS = {'jcr': 'http://www.jcp.org/jcr/1.0', 'nt': 'http://www.jcp.org/jcr/nt/1.0',
      'sling': 'http://sling.apache.org/jcr/sling/1.0', 'cq': 'http://www.day.com/jcr/cq/1.0',
      'dam': 'http://www.day.com/dam/1.0', 'dc': 'http://purl.org/dc/elements/1.1/',
      'oak': 'http://jackrabbit.apache.org/oak/ns/1.0'}
for prefix, uri in NS.items():
    ET.register_namespace(prefix, uri)


def attr_name(name):
    if ':' in name:
        prefix, local = name.split(':', 1)
        return '{' + NS[prefix] + '}' + local
    return name


def node(name, props=None, parent=None):
    values = {}
    for key, value in (props or {}).items():
        if isinstance(value, bool):
            value = '{Boolean}' + str(value).lower()
        elif isinstance(value, int):
            value = '{Long}' + str(value)
        elif isinstance(value, float):
            value = '{Double}' + str(value)
        else:
            value = str(value)
            if value.startswith(('[', '{')):
                value = '\\' + value
        values[attr_name(key)] = value
    el = ET.Element(attr_name(name), values)
    if parent is not None:
        parent.append(el)
    return el


def xml(el):
    # Prefixes in typed values also need declarations in Document View XML.
    if el.tag == attr_name('jcr:root'):
        used = {key.split('}')[0][1:] for n in el.iter() for key in [n.tag, *n.attrib] if key.startswith('{')}
        for prefix, uri in NS.items():
            if uri not in used:
                el.set('xmlns:' + prefix, uri)
    ET.indent(el)
    return ET.tostring(el, encoding='utf-8', xml_declaration=True)


def main():
    config = json.loads((ROOT / 'content/aem-config.json').read_text())
    version = json.loads((ROOT / 'package.json').read_text())['version']
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--site-root', default=config['siteRoot'], help='Raiz AEM; padrão definido em content/aem-config.json')
    parser.add_argument('--output', type=Path, default=ROOT / 'content' / (config['packageName'] + '.zip'))
    args = parser.parse_args()
    site = args.site_root.rstrip('/')
    if not re.fullmatch(r'/content/(?!dam(?:/|$))[a-zA-Z0-9_/-]+', site) or '..' in site:
        parser.error('--site-root deve ser um caminho de site /content/...')
    pages = json.loads((ROOT / 'content/pages.json').read_text())
    definitions = {d['id']: d for g in json.loads((ROOT / 'component-definition.json').read_text())['groups'] for d in g['components']}
    models = {m['id']: m for m in json.loads((ROOT / 'component-models.json').read_text())}
    contracts = json.loads((ROOT / 'content/contracts.json').read_text())
    dam_root = config['damRoot']
    assets = {}

    def rewrite(value):
        if not isinstance(value, str):
            return value
        for ref in re.findall(r'/assets/[a-zA-Z0-9_./-]+', value):
            source = ROOT / ref.lstrip('/')
            if not source.is_file():
                raise ValueError('Asset local ausente: ' + ref)
            dest = dam_root + '/' + ref.split('/assets/', 1)[1]
            assets[dest] = source
            value = value.replace(ref, dest)
        return value

    def component(parent, tag, model, properties, items=None):
        config = definitions[model]['plugins']['xwalk']['page']
        props = dict(config.get('template', {}))
        for field in models.get(model, {}).get('fields', []):
            props.setdefault(field['name'], field.get('value', ''))
        props.update(properties)
        props.update({'jcr:primaryType': 'nt:unstructured', 'sling:resourceType': config['resourceType']})
        n = node(tag, {key: rewrite(val) for key, val in props.items()}, parent)
        for i, item in enumerate(items or []):
            component(n, 'item_' + str(i), contracts['containers'][model], item)

    args.output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(args.output, 'w', zipfile.ZIP_DEFLATED) as archive:
        roots = []
        for name, page in pages.items():
            page_path = site + '/' + name
            roots.append(page_path)
            doc = node('jcr:root', {'jcr:primaryType': 'cq:Page'})
            content = node('jcr:content', {'jcr:primaryType': 'cq:PageContent', 'jcr:title': page['title'],
                'jcr:description': page.get('description', ''), 'cq:template': '/libs/core/franklin/templates/page',
                'sling:resourceType': 'core/franklin/components/page/v1/page', 'toranjaTheme': 'pf-light',
                'toranjaSurface': 'desktop', 'nav': 'none' if name in ['nav','footer'] else site+'/nav',
                'footer': 'none' if name in ['nav','footer'] else site+'/footer'}, doc)
            root = node('root', {'jcr:primaryType': 'nt:unstructured', 'sling:resourceType': 'core/franklin/components/root/v1/root'}, content)
            for i, section in enumerate(page['sections']):
                s = node('section_' + str(i), {'jcr:primaryType': 'nt:unstructured',
                    'sling:resourceType': 'core/franklin/components/section/v1/section', 'model': 'section',
                    'filter': 'section', 'id': section.get('id',''), 'style': section.get('style','')}, root)
                for j, item in enumerate(section['content']):
                    if 'block' in item:
                        component(s, item['block'].replace('-','_')+'_'+str(j), item['block'], item['properties'], item.get('items'))
                    else:
                        component(s, 'text_'+str(j), 'text', {'text':item.get('text','')})
            archive.writestr('jcr_root' + page_path + '/.content.xml', xml(doc))
        if assets:
            roots.append(dam_root)
            folders = {str(Path(dest).parent) for dest in assets} | {dam_root}
            for folder in sorted(folders):
                directory = node('jcr:root', {'jcr:primaryType':'sling:OrderedFolder'})
                node('jcr:content', {'jcr:primaryType':'nt:unstructured','jcr:title':Path(folder).name}, directory)
                archive.writestr('jcr_root'+folder+'/.content.xml', xml(directory))
        for dest, source in assets.items():
            mime = mimetypes.guess_type(source.name)[0] or 'application/octet-stream'
            data = source.read_bytes()
            if data[:3] == b'\xff\xd8\xff': mime = 'image/jpeg'
            elif data[:4] == b'RIFF': mime = 'image/webp'
            asset = node('jcr:root', {'jcr:primaryType':'dam:Asset'})
            content = node('jcr:content', {'jcr:primaryType':'dam:AssetContent'}, asset)
            node('metadata', {'jcr:primaryType':'nt:unstructured','dc:format':mime}, content)
            node('renditions', {'jcr:primaryType':'nt:folder'}, content)
            archive.writestr('jcr_root'+dest+'/.content.xml', xml(asset))
            original = node('jcr:root', {'jcr:primaryType':'nt:file'})
            node('jcr:content', {'jcr:primaryType':'oak:Resource','jcr:mimeType':mime}, original)
            base = 'jcr_root'+dest+'/_jcr_content/renditions/original'
            archive.writestr(base, data)
            archive.writestr(base+'.dir/.content.xml', xml(original))
        filter_xml = ET.Element('workspaceFilter', {'version':'1.0'})
        for root_path in roots:
            ET.SubElement(filter_xml,'filter',{'root':root_path,'mode':'replace'})
        archive.writestr('META-INF/vault/filter.xml',xml(filter_xml))
        props = ET.Element('properties')
        for key,val in {'group':'toranja-demo','name':config['packageName'],'version':version,'packageType':'content',
                        'description':'Páginas demonstrativas Toranja. Substitui apenas os caminhos explícitos no filter.xml.'}.items():
            ET.SubElement(props,'entry',{'key':key}).text=val
        property_xml = xml(props).replace(b'<properties>', b'<!DOCTYPE properties SYSTEM "http://java.sun.com/dtd/properties.dtd">\n<properties>', 1)
        archive.writestr('META-INF/vault/properties.xml', property_xml)
        for name in ['config.xml','settings.xml']:
            archive.writestr('META-INF/vault/'+name, (ROOT/'tools/vault'/name).read_bytes())
        archive.writestr('META-INF/MANIFEST.MF','Manifest-Version: 1.0\nContent-Package-Type: content\n\n')
    print(f'{args.output}: {len(pages)} páginas; {len(assets)} assets. Destino: {site}. NÃO instalado.')


if __name__ == '__main__':
    main()
