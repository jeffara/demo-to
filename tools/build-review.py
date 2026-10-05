"""Consolida a evidência executada; falha se um relatório de QA não foi aprovado."""
from pathlib import Path
import csv, html, json
root = Path(__file__).resolve().parents[1]
read = lambda p: json.loads((root/p).read_text())
esc = lambda x: html.escape(str(x))
contract = read('docs/toranja-contract.json')
mapping = read('docs/property-mapping.json')
rounds = []
for round_no in [1, 2]:
    suites = []
    for prefix in ['validation', 'native', 'acceptance']:
        filename = f'{prefix}-round-{round_no}.json'
        data = read('docs/'+filename)
        assert all(t['pass'] for t in data['tests']), filename
        suites.append((filename, len(data['tests'])))
    rounds.append(suites)
audit = read('docs/package-audit.json')['checks']
assert all(c['pass'] for c in audit)
rows = []
for component in contract['components']:
    schema = mapping[component['block']]
    for prop in component['properties']:
        name = prop['name']
        fields = [d for d in schema['descriptors'] if d['path'][0] == name]
        if schema.get('item', {}).get('property') == name:
            mode = 'Itens filhos: adicionar, remover e reordenar'
            field_names = [d['key'] for d in schema['item']['descriptors']]
        elif prop['kind'] == 'event':
            mode = 'Callback implementado no runtime; evento de integração'
            field_names = [d['key'] for d in schema['descriptors'] if d['path'][:1] == ['$eventLinks'] and name in d['path'][-1]]
        elif name == 'disabledDates' and prop['kind'] == 'function':
            mode = 'Adaptado: lista JSON de datas bloqueadas'
            field_names = ['disabledDates']
        elif name == 'scrollContainer':
            mode = 'Adaptado: seletor CSS do contêiner'
            field_names = ['scrollContainerSelector']
        elif prop['kind'] == 'function':
            mode = 'Função de fechamento implementada no runtime'
            field_names = []
        else:
            field_names = [d['key'] for d in fields]
            kinds = {d['kind'] for d in fields}
            mode = 'Campo editorial'
            if kinds & {'array','json'}: mode += ' / estrutura JSON'
            if 'slot' in kinds: mode += ' / rich text ou ícone'
            if prop['kind'] == 'object': mode += ' / subpropriedades'
        rows.append([component['name'], component['block'], name, prop['type'], mode, ', '.join(field_names), component['source']])
with (root/'docs/cobertura-propriedades.csv').open('w',encoding='utf-8-sig',newline='') as out:
    writer=csv.writer(out);writer.writerow(['Componente','Bloco','Propriedade oficial','Tipo oficial','Tratamento EDS','Campos no modelo','Declaração de origem']);writer.writerows(rows)
component_rows=''.join(f'<tr><td>{esc(c["name"])}</td><td><code>{esc(c["block"])}</code></td><td>{len(c["properties"])}</td><td><code>/showcase/{esc(c["block"][3:])}</code></td><td>Incluído</td></tr>' for c in contract['components'])
prop_rows=''.join('<tr>'+''.join(f'<td>{esc(cell)}</td>' for cell in r[:5])+'</tr>' for r in rows)
round_rows=''.join('<tr><td>Rodada '+str(i+1)+'</td>'+''.join(f'<td><a href="{f}">{n}/{n}</a></td>' for f,n in suite)+'</tr>' for i,suite in enumerate(rounds))
check_rows=''.join(f'<li><strong>Aprovado:</strong> {esc(c["name"])} — {esc(c["detail"])}</li>' for c in audit)
page='''<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Toranja EDS 2.0 — revisão e cobertura</title>
<style>:root{font-family:system-ui,sans-serif;color:#232323;background:#faf8f4}body{margin:0}main{max-width:1180px;margin:auto;padding:40px 24px}h1{font-size:clamp(32px,5vw,54px);line-height:1.05;letter-spacing:-2px}h2{margin-top:48px;font-size:27px}p,li{line-height:1.6}a{color:#a34600}code{overflow-wrap:anywhere}.eyebrow{font-weight:700;color:#a34600}.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.card{border:1px solid #ded8cf;background:white;border-radius:16px;padding:22px}.card b{display:block;font-size:34px}.notice{border-left:5px solid #ec7000;padding:12px 20px;background:#fff0df}.scroll{overflow:auto}table{border-collapse:collapse;width:100%;font-size:14px;background:white}th,td{text-align:left;padding:12px;border-bottom:1px solid #ddd;vertical-align:top}th{background:#ece8e1}input{box-sizing:border-box;width:100%;padding:14px;font:inherit;border:1px solid #aaa;border-radius:8px;margin:12px 0}details{margin:25px 0}summary{cursor:pointer;font-weight:700}footer{margin-top:50px;color:#666}img{max-width:100%;border-radius:12px}@media(max-width:700px){.cards{grid-template-columns:repeat(2,1fr)}main{padding:24px 16px}td,th{padding:8px}}@media print{input{display:none}details{display:block}.scroll{overflow:visible}}</style>
<main><p class="eyebrow">TORANJA / EDGE DELIVERY SERVICES / VERSÃO 2.0</p><h1>64 componentes oficiais.<br>Autoria rastreável no EDS.</h1>
<p>Revisão do ZIP <code>@interco</code> e evolução do projeto 1.0. Referência: <strong>@interco/inter-toranja 1.13.3</strong>. Este relatório acompanha o código e o pacote de conteúdo entregues.</p>
<div class="cards"><div class="card"><b>64/64</b>componentes públicos</div><div class="card"><b>751</b>propriedades próprias inventariadas</div><div class="card"><b>105</b>páginas importáveis</div><div class="card"><b>2</b>rodadas locais aprovadas</div></div>
<p class="notice"><strong>Limite do aceite:</strong> cobertura do catálogo não significa teste de todas as combinações de propriedades. Os testes de Universal Editor foram simulados localmente. Persistência, seletor de páginas, permissões e publicação precisam de homologação autenticada no AEM de destino.</p>
<h2>O que mudou</h2><ul><li>64 blocos oficiais <code>ds-*</code>, além dos 31 blocos de composição existentes. Os modelos e filtros distinguem blocos de itens filhos pelo resource type, incluindo corretamente ListItem e MenuItem.</li><li>Campos de variantes, estados, tamanhos, textos, imagens, objetos e destinos. Listas principais possuem itens filhos; estruturas secundárias possuem JSON. Callbacks ficam no código.</li><li>Links internos do AEM convertidos para caminhos públicos, com suporte a URL externa, âncora e nova aba. Home pública em <code>/</code>; Author mantém <code>index.html</code>.</li><li>Catálogo <code>/demo-toranja</code>, páginas individuais <code>/showcase/*</code>, composições em <code>/composicoes</code>, destinos de demonstração, QR Code funcional, navegação e rodapé revisados.</li><li>Correções de SVGs com IDs repetidos, atualização de blocos, limpeza de instâncias React, estados vazios, Select, teclado das abas, fechamento de painéis, links desabilitados e overflow em mobile.</li></ul>
<h2>Como os componentes são entregues</h2><p>O documento é uma página EDS/XWalk. Cada bloco oficial monta uma ilha React com o código original do Toranja, mantendo os estilos e as fontes fornecidos. As 31 composições continuam em JavaScript nativo. A página não usa roteador React nem se transforma em SPA.</p><p>O runtime compartilhado só é solicitado quando há um bloco oficial na página: aproximadamente 1,64 MB de JavaScript e 861 kB de CSS, antes de compressão. O snapshot de desenvolvimento fica em <code>vendor/</code> e é excluído do Code Bus. Essa escolha tem custo de download; não é uma certificação de performance/Core Web Vitals.</p>
<h2>Duas rodadas de validação</h2><div class="scroll"><table><thead><tr><th>Rodada</th><th>DS oficial</th><th>Composições / layout</th><th>Aceitação / interação</th></tr></thead><tbody>ROUND_ROWS</tbody></table></div><p>Primeira rodada: DS em 1280 px. Segunda: DS em 390 px. A suíte das composições verifica 390, 768 e 1440 px em ambas. Aceitação cobre rotas, links, campos, seleção, teclado, estados desabilitados e eventos de atualização/inclusão/reordenação/remoção do editor.</p><ul>CHECK_ROWS</ul>
<h2>Autoria: campos e adaptações</h2><p>Há 125 modelos e 1.718 campos no conjunto do projeto. O mapeamento dos blocos oficiais contém 1.468 descritores editoriais, incluindo subpropriedades e opções de integração. Estes números contam coisas diferentes: os 751 itens abaixo são propriedades próprias no nível superior dos contratos TypeScript.</p><p>Slots React usam rich text seguro ou nomes de ícones; funções arbitrárias e JSX não são conteúdo editorial. Listas principais são itens filhos. Séries e estruturas secundárias usam JSON. Eventos disparam <code>toranja:interaction</code>; integrações de negócio/CRM continuam exigindo o endpoint real. Não são enviados dados de teste a serviços externos.</p><p>As uniões condicionais do DS continuam valendo: uma combinação pode exigir propriedades adicionais. A ausência de um campo opcional preserva o comportamento padrão do componente oficial. Atributos HTML herdados estão no contrato completo; não são todos expostos indiscriminadamente no painel.</p>
<h2>Catálogo completo</h2><label for="search">Buscar componente ou propriedade</label><input id="search" type="search" placeholder="Ex.: Button, href, disabled, ChartLine" autocomplete="off"><div class="scroll"><table id="components"><thead><tr><th>Componente</th><th>Bloco EDS</th><th>Props próprias</th><th>Showcase</th><th>Entrega</th></tr></thead><tbody>COMPONENT_ROWS</tbody></table></div>
<details><summary>Matriz das 751 propriedades próprias</summary><p><a href="cobertura-propriedades.csv">Abrir CSV completo</a> · <a href="property-mapping.json">Mapeamento detalhado</a> · <a href="toranja-contract.json">Contrato TypeScript extraído</a></p><div class="scroll"><table id="properties"><thead><tr><th>Componente</th><th>Bloco</th><th>Propriedade</th><th>Tipo</th><th>Tratamento</th></tr></thead><tbody>PROP_ROWS</tbody></table></div></details>
<h2>Home e publicação</h2><p>No diagnóstico remoto, <code>/scripts/aem.js</code> retornou 200, enquanto <code>/</code> e <code>/demo-toranja</code> retornaram 404 ao buscar conteúdo no Content Bus. <code>/index.html</code> tentou buscar um arquivo de código. Isso requer conferir o mapeamento e publicar o conteúdo para Preview; um redirect JavaScript não resolve uma página que não carregou.</p><p><strong>Não é necessário recriar o site.</strong> Faça backup das páginas de demonstração já editadas, atualize o código, confira a configuração, importe <code>content/demo-to-content.zip</code>, processe os assets e publique as páginas para Preview. O pacote contém conteúdo; o site/template XWalk deve existir previamente.</p><p><a href="DEPLOY-V2.md">Instruções completas de deployment e importação</a> · <a href="remote-route-diagnostic.json">Diagnóstico remoto</a> · <a href="THIRD-PARTY.md">Procedência e licenças</a></p>
<h2>Aceite na instância de destino</h2><ol><li>Salvar e reabrir propriedades de Button, incluindo seletor de página interna e URL externa.</li><li>Criar uma seção e adicionar blocos do grupo Toranja oficial.</li><li>Adicionar, reordenar e excluir itens em Tabs, Timeline e Carousel.</li><li>Alterar imagem, textos, estado e tamanho; confirmar persistência.</li><li>Publicar nav, footer, home e catálogo para Preview; testar URLs sem extensão.</li><li>Validar as integrações configuradas e só então publicar para Live.</li></ol><footer>Entrega 2.0 · Evidência local reprodutível em Chromium. Os relatórios JSON são a fonte dos resultados desta página.</footer></main><script>document.querySelector('#search').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('tbody tr').forEach(row=>{if(row.closest('#components,#properties'))row.hidden=!row.textContent.toLowerCase().includes(q)});if(q)document.querySelector('details').open=true;});</script></html>'''
for key,value in [('ROUND_ROWS',round_rows),('CHECK_ROWS',check_rows),('COMPONENT_ROWS',component_rows),('PROP_ROWS',prop_rows)]:page=page.replace(key,value)
(root/'docs/REVISAO-V2.html').write_text(page)
print(f'Relatório gerado: {len(contract["components"])} componentes, {len(rows)} propriedades, 2 rodadas aprovadas.')
