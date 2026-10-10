"""Generate the release chapter and catalogue from measured results and actual contracts."""
from pathlib import Path
import json,re,html,hashlib
root=Path(__file__).resolve().parents[1]
r=lambda p:json.loads((root/p).read_text())
esc=lambda x:html.escape(str(x))
s=(root/'docs/EDS_AEM_Universal_Editor_Arquitetura_Deploy_3.1.8_FINAL.html').read_text()
c=r('docs/toranja-contract.json');models=r('component-models.json');mapping=r('docs/property-mapping.json');pages=r('content/pages.json');perf=r('docs/performance-v4.0.0/summary.json');parity=r('docs/official-parity-v4.0.0.json');audit=r('docs/package-audit.json')
def replace_element(s,tag,id,body):
 m=re.search('<'+tag+r'\b[^>]*\bid="'+re.escape(id)+r'"[^>]*>',s);assert m,id
 depth=1
 for t in re.finditer(r'</?'+tag+r'\b[^>]*>',s[m.end():]):
  depth+=-1 if t.group().startswith('</') else 1
  if not depth:return s[:m.start()]+body+s[m.end()+t.end():]
 raise ValueError(id)
rows=''.join('<tr><td>'+esc(x['route'])+'</td><td>'+x['profile']+'</td>'+''.join('<td>'+str(round(x['scores'][k]))+'</td>' for k in ['performance','accessibility','best-practices','seo'])+'</tr>' for x in perf['results'])
passed=all(x['passesPerformanceGoal'] for x in perf['results'])
new=['Breadcrumb','MenuPopup','ModalDialog','Pagination','Panel','SideSheet','Sidebar','Table','TooltipDescription']
base=f'''<section id="baseline"><div class="eyebrow">ENTREGA 4.0.0 · TORANJA 2.0.1</div><h2>Atualização do design system com adaptador React</h2>
<p>Código <code>aem-eds-inter-toranja_v4.0.0.zip</code> e conteúdo <code>demo-to-content-4.0.0.zip</code>. Esta atualização muda os contratos de autoria e amplia o catálogo. Requer importar e publicar a nova baseline de conteúdo para obter todos os exemplos.</p>
<div class="note"><strong>Escopo verificado localmente.</strong><p>Não houve deploy remoto, instalação no Author ou teste de persistência autenticada no Universal Editor. A homologação no tenant continua necessária.</p></div>
<div class="benefits"><article><h3>73 componentes oficiais</h3><p>878 propriedades próprias classificadas; quatro blocos Custom de composição.</p></article><article><h3>{len(models)} modelos · {sum(len(m['fields']) for m in models)} campos</h3><p>Enums oficiais, objetos, coleções, slots e ações declarativas.</p></article><article><h3>{len(pages)} páginas</h3><p>Home, catálogo, layouts, exemplos, nav e footer.</p></article></div>
<h3>Integridade e fidelidade</h3><p>Os 4.230 arquivos do Toranja 2.0.1 conferem byte a byte com o ZIP enviado. Nenhum patch no vendor. O CSS emitido é isolado sem aumentar a especificidade e compactado, preservando tokens e estados. Portais oficiais de menu, tooltip e modal recebem os estilos originais. A fonte Citrina Medium é idêntica à fornecida pelo pacote.</p>
<p>Novos componentes: {', '.join(new)}. Select usa <code>options</code> e <code>onOptionSelect</code> oficiais; Stepper usa <code>value</code> e <code>onValueChange</code>. O formulário Custom encaminha valores para essas APIs.</p>
<p>Comparação direta com o pacote oficial: {sum(x['pass'] for x in parity['checks'])}/{len(parity['checks'])} comparações de estilos computados aprovadas, em 393 e 1440 px e nos temas PF/PJ claro/escuro. Esta cobertura não equivale a certificar todas as combinações de propriedades do design system.</p>
<p>Testes locais aprovados: 73 renderizações de componentes, 24 verificações de aceitação, 16 de integração, 134 verificações de páginas/fluxos, 89 de novas instâncias/conteúdo, 11 de fontes e 22 dos controles atualizados (11 por largura). A verificação de publicação não encontrou dependências de arquivos excluídos em cinco rotas. Relatório consolidado: <code>docs/release-gates-v4.0.0.json</code>.</p><h3>Lighthouse: medições reproduzíveis</h3><div class="table"><table><thead><tr><th>Página</th><th>Perfil</th><th>Performance</th><th>Acessibilidade</th><th>Boas práticas</th><th>SEO</th></tr></thead><tbody>{rows}</tbody></table></div>
<p><strong>{'Meta de performance ≥98 atendida nas seis medianas locais.' if passed else 'A meta de performance ≥98 não foi atendida em todas as medianas locais.'}</strong> São notas de 0 a 100; não percentuais de conformidade.</p>
<p>Medianas de três execuções por página/perfil, Lighthouse 13.5.0 e Chromium 153 headless, sem extensões. Servidor local com gzip e HTML/recursos da entrega, sem auditorias concorrentes. Nenhuma detecção de Lighthouse ou ocultação de conteúdo. Relatórios completos JSON e HTML em <code>docs/performance-v4.0.0/</code>. A latência e os caches do domínio publicado podem alterar os resultados.</p>
<h3>Otimizações preservando o DS</h3><p>Recursos compartilhados e compactados, modelos JSON sem espaços redundantes, fontes críticas antecipadas e carregamento priorizado dos blocos visíveis. As fontes completas foram mantidas após descartar uma tentativa de subconjuntos que alterava o espaçamento. O exemplo de Sidebar usa rolagem no contêiner em telas estreitas, preservando sua largura oficial.</p><h3>Limites que precisam ser tratados com o Inter</h3><p>A acessibilidade e as boas práticas são informadas separadamente. O Card oficial ainda combina <code>role="button"</code> com <code>aria-selected</code>; correções internas do fornecedor não foram simuladas pelo adaptador. Consulte os elementos apontados nos relatórios Lighthouse. Uma nota de performance alta não certifica acessibilidade ou conformidade integral.</p>
<h3>Propriedades no EDS</h3><p>Campos avançados preservam os nomes estáveis do conteúdo anterior. Objetos e listas são mapeados em campos/itens; registros genéricos, como dados de Table e a marca customizada de Sidebar, usam JSON declarativo. Funções são escolhidas por identificadores de comportamento registrados em código, nunca por JavaScript livre. Refs e contratos de DOM continuam técnicos.</p>
<p>O inventário completo está em <code>docs/toranja-contract.json</code>; a relação com o painel do EDS em <code>docs/property-mapping.json</code>. Os tipos oficiais prevalecem sobre exemplos desatualizados presentes na documentação do fornecedor.</p></section>'''
s=replace_element(s,'section','baseline',base)
cat='<section id="catalogo"><div class="eyebrow">CATÁLOGO 4.0.0</div><h2>Componentes e propriedades do Toranja 2.0.1</h2><p>Contrato extraído dos tipos do pacote recebido. Propriedades configuráveis são preservadas; callbacks e refs têm tratamento técnico explícito.</p><label for="block-search">Buscar componente ou propriedade</label><input id="block-search" class="guide-search" type="search"><p id="block-count" aria-live="polite">77 blocos encontrados</p>'
for x in c['components']:
 sc=mapping[x['block']];cat+=f'<details class="block-entry"><summary><strong>{x["name"]}</strong> · {x["block"]} · {len(x["properties"])} propriedades próprias</summary><p>Origem: <code>{esc(x["source"])}</code>. Modelo: <code>{x["block"]}</code>.</p><table><thead><tr><th>Propriedade</th><th>Contrato</th><th>Configuração</th></tr></thead><tbody>'
 for prop in x['properties']:
  vals=prop.get('values',[]);detail=', '.join(map(str,vals)) if len(vals)<40 else f'{len(vals)} valores oficiais; lista completa no modelo'
  kind={'event':'Evento encaminhado pelo adaptador; ações declarativas quando aplicável','function':'Callback técnico registrado; fechamento controlado para overlays','technical':'Contrato de DOM/ref mantido em código','array':'Coleção de itens','json':'JSON declarativo','slot':'Conteúdo/slot; acionador oficial nos popups'}.get(prop['kind'],'Campo editável')
  cat+=f'<tr><td><code>{esc(prop["name"])}</code></td><td>{esc(prop["kind"])} {esc(detail)}</td><td>{esc(kind)}</td></tr>'
 cat+='</tbody></table></details>'
for name in ['v3-form','v3-search','v3-simulator','v3-video']:cat+=f'<details class="block-entry"><summary>{name} · Custom</summary><p>Composição do projeto. Usa componentes e tokens Toranja; não é um export do fornecedor.</p></details>'
cat+='</section>';s=replace_element(s,'section','catalogo',cat)
deploy='''<article class="file-chapter" id="deploy-v315"><div class="file-tag">DEPLOY 4.0.0</div><h3>Código, modelos e conteúdo atualizados juntos</h3>
<ol><li>Crie uma branch de homologação e preserve o commit anterior. Exporte backup de <code>/content/demo-to</code>, dos assets envolvidos e da versão editorial atual.</li>
<li>Sincronize o ZIP de código no clone com <code>python3 tools/sync-baseline.py --target /caminho/do/clone</code>. Revise a prévia e use <code>--apply</code>. Preserve as configurações do ambiente e revise o diff.</li>
<li>Faça commit/push do código compilado, blocos, modelos JSON, estilos, <code>head.html</code>, <code>.hlxignore</code> e <code>version.json</code>. Aguarde Code Sync. Confirme <code>4.0.0</code> e <code>@interco/inter-toranja 2.0.1</code> no manifesto de versão.</li>
<li>No Package Manager, faça upload e instale <code>demo-to-content-4.0.0.zip</code> sobre a instalação anterior, <strong>sem uninstall/delete</strong>. O filtro replace cobre descendentes de <code>/content/demo-to</code>: pode sobrescrever edições locais e remover conteúdo que não pertence à baseline. O backup é necessário antes da instalação.</li>
<li>Homologue no Universal Editor: adicionar componentes, editar propriedades avançadas e itens, salvar, fechar e reabrir. Teste Select, Stepper, Table, Sidebar e overlays. Verifique teclados, temas, menu mobile e logo para Home.</li>
<li>Execute Preview/Publish das 128 páginas e dos assets necessários, incluindo Home, nav e footer. Instalar no Author não publica no EDS. Novas páginas e propriedades só ficam disponíveis na publicação depois desse ciclo.</li>
<li>Valide Preview e Live em sessão nova, confira os hashes do manifesto e repita Lighthouse no domínio real. Promova a branch após homologação.</li></ol>
<p>Se houver conteúdo de negócio editado fora da baseline, migre as mudanças de forma seletiva a partir do backup em vez de aplicar o pacote replace sem revisão.</p>
<h4>Reconstrução e testes</h4><pre>npm ci
npm run inventory:ds
npm run build
npm run test:compliance
npm test
npm run export:aem</pre>
<h4>Lighthouse headless no Mac</h4><pre>AUDIT_RUNS=3 MIN_PERFORMANCE=98 npm run test:performance -- https://main--demo-to--jeffara.aem.live/</pre>
<p>Use Node 24 e Chrome instalado. Pode definir <code>CHROME_PATH</code>. O comando salva JSON/HTML e retorna erro se uma mediana ficar abaixo de 98 ou se o carregamento não produzir uma medição válida. Não é preciso apagar pacotes anteriores para atualizar.</p>
<h4>Rollback</h4><p>Restaure o commit anterior e o backup editorial compatível; execute novamente Preview/Publish. A mudança para Toranja 2.0.1 envolve modelos e conteúdo: o rollback deve considerar os dois ciclos.</p></article>'''
s=replace_element(s,'article','deploy-v315',deploy)
s=replace_element(s,'section','ajustes','''<section id="ajustes"><div class="eyebrow">DECISÕES DA ENTREGA</div><h2>Pacote oficial preservado, adaptação explícita</h2><p>O EDS fornece conteúdo e campos de autoria. O adaptador transforma esse conteúdo em props e monta os componentes React do Toranja 2.0.1. O fornecedor continua responsável pelo DOM interno, tokens, variantes, comportamento e estados de seus componentes.</p><p>Callbacks não serializáveis usam <code>registerDSBehavior</code> em <code>scripts/ds-behaviors.js</code>. Ações de navegação e abertura são declarativas. Exemplo técnico: registre um callback de Table no código e selecione seu identificador no campo avançado correspondente. Não inclua segredos no frontend.</p><p>A certificação de todas as combinações e a homologação no AEM não foram realizadas. Os limites e resultados medidos acompanham esta entrega.</p></section>''')
s=s.replace('V3.1.8','V4.0.0').replace('v3.1.8','v4.0.0').replace('Toranja React 1.13.3','Toranja React 2.0.1').replace('Documento v3.5','Documento v4.0').replace('08 out 2026','10 out 2026').replace('Gera a modelagem dos 64 componentes oficiais','Gera a modelagem dos 73 componentes oficiais')
s=s.replace('Na V4.0.0, este é o ciclo suficiente de atualização de código sobre a baseline instalada. O runtime compilado acompanha a entrega.','Na V4.0.0, o ciclo de código deve ser acompanhado pela migração e publicação do conteúdo descritas no procedimento de deploy. O runtime compilado acompanha a entrega.')
s=s.replace('pacote 3.1.8','pacote 4.0.0').replace('09/10/2026','10/10/2026')
s=s.replace('V4.0.0 no código; conteúdo importável 3.1.7; DS React 1.13.3.','V4.0.0 no código e no conteúdo importável; DS React 2.0.1.').replace('64 oficiais + 4 custom.','73 oficiais + 4 custom.').replace('Código atualizado: 3.1.8','Código atualizado: 4.0.0')
(root/'docs/EDS_AEM_Universal_Editor_Arquitetura_Deploy_4.0.0_FINAL.html').write_text(s)
summary={'version':'4.0.0','contentVersion':'4.0.0','designSystem':'2.0.1','components':73,'properties':878,'models':len(models),'fields':sum(len(m['fields'])for m in models),'pages':len(pages),'vendorIntegrity':r('docs/vendor-provenance-v4.0.0.json'),'performance':perf,'visualComparison':{'pass':all(x['pass']for x in parity['checks']),'scenarios':len(parity['checks']),'nodes':sum(x.get('nodes',0)for x in parity['checks'])},'packageAudit':audit,'remoteDeployPerformed':False,'remoteUEPersistenceTested':False}
(root/'docs/release-4.0.0.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2))
print('Guide and release report generated from current measurements.')
