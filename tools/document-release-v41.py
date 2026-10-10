"""Update the deploy handbook with the power-user reference and measured release evidence."""
from pathlib import Path
import json,re,html
root=Path(__file__).resolve().parents[1]
def read(name):return json.loads((root/name).read_text())
s=(root/'docs/EDS_AEM_Universal_Editor_Arquitetura_Deploy_4.0.0_FINAL.html').read_text()
coverage=read('docs/eds-reference-coverage.json');perf=read('docs/performance-v4.1.0/summary.json');tests=read('docs/component-reference-validation-v4.1.0.json')
def replace(s,tag,id,body):
 m=re.search('<'+tag+r'\b[^>]*\bid="'+re.escape(id)+r'"[^>]*>',s);assert m,id
 depth=1
 for t in re.finditer(r'</?'+tag+r'\b[^>]*>',s[m.end():]):
  depth+=-1 if t.group().startswith('</') else 1
  if not depth:return s[:m.start()]+body+s[m.end()+t.end():]
 raise ValueError(id)
rows=''.join('<tr><td>'+html.escape(x['route'])+'</td><td>'+x['profile']+'</td>'+''.join('<td>'+str(round(x['scores'][k]))+'</td>'for k in ['performance','accessibility','best-practices','seo'])+'</tr>'for x in perf['results'])
base=f'''<section id="baseline"><div class="eyebrow">ENTREGA 4.1.0 · REFERÊNCIA PARA AUTORIA</div><h2>O showcase também explica como configurar cada componente</h2>
<p><strong>Código 4.1.0 · Conteúdo 4.0.0 · Toranja 2.0.1.</strong> A nova seção <strong>Propriedades no EDS</strong> aparece abaixo dos exemplos de cada componente. O público são power users que montam, revisam e mantêm páginas no Universal Editor.</p>
<div class="benefits"><article><h3>77 referências</h3><p>73 componentes oficiais e quatro composições do projeto.</p></article><article><h3>{coverage['fields']:,} campos de autoria</h3><p>Campos dos componentes e dos itens internos, com nomes do painel e orientação de uso.</p></article><article><h3>Consulta sob demanda</h3><p>Busca com InputSearch oficial; os dados são carregados ao abrir a referência.</p></article></div>
<p>Os 4.230 arquivos do fornecedor permanecem intactos. O modelo editorial e o pacote de conteúdo são os mesmos da versão 4.0.0. Não foram alterados tokens, fontes, variantes ou DOM interno dos exemplos para adicionar a documentação.</p>
<h3>O que aparece em cada campo</h3><ul><li>Nome usado no painel do Universal Editor e nome técnico como referência secundária.</li><li>O que a opção muda e quando usar, em linguagem de autoria.</li><li>Localização: propriedades, opções avançadas ou itens de uma coleção.</li><li>Condição de exibição, opções permitidas, formato e validações do editor.</li><li>Valor definido pelo modelo ao inserir um componente novo.</li></ul>
<p><strong>Valor inicial do EDS não é sinônimo de padrão do componente React.</strong> Quando o modelo não define um valor, a referência informa isso explicitamente. O comportamento final também considera os demais campos e as regras do componente.</p>
<h3>Como consultar durante a autoria</h3><ol><li>Abra a página do componente no showcase, por exemplo <code>/showcase/button</code>.</li><li>Abaixo dos exemplos, abra <strong>Propriedades no EDS → Consultar campos e orientações de uso</strong>.</li><li>Busque pelo nome no painel ou pelo efeito desejado: tamanho, imagem, destino, seleção ou coluna.</li><li>Abra o grupo de opções avançadas ou de itens quando necessário. A busca também encontra campos desses grupos.</li><li>No Universal Editor, selecione o componente ou seu item correspondente e aplique a configuração. Valide o resultado antes de publicar.</li></ol>
<h3>Exemplos de orientação para power users</h3><div class="table"><table><thead><tr><th>Componente</th><th>Campo</th><th>Como usar</th></tr></thead><tbody>
<tr><td>Button</td><td>Rótulo / Destino padrão</td><td>Defina a ação com um texto claro e escolha a página de destino.</td></tr>
<tr><td>Button</td><td>hug / fill</td><td>Use hug para ajustar ao rótulo ou fill para preencher a largura disponível; não ative ambos.</td></tr>
<tr><td>Select</td><td>Itens → options</td><td>Adicione uma opção por item: label é o texto visível e value identifica a escolha.</td></tr>
<tr><td>Table</td><td>Itens → columns</td><td>header identifica a coluna; accessor aponta para a chave correspondente nos dados de cada linha.</td></tr>
<tr><td>Painéis</td><td>Identificador do painel</td><td>Use o mesmo identificador no painel e na ação de abertura configurada em outro componente.</td></tr>
</tbody></table></div>
<h3>Como a referência se mantém atualizada</h3><p>O build cruza <code>component-models.json</code>, o mapeamento do adaptador e o contrato do Toranja com as orientações de autoria em <code>tools/reference-copy.mjs</code>. O comando <code>npm run build:reference</code> já faz parte do build principal e interrompe a geração se faltar descrição. Opções, condições e valores iniciais são extraídos dos modelos, evitando manter listas paralelas manualmente.</p>
<p>A seção é gerada pelo código e fica fora da área de conteúdo autorado. Ela não cria um novo bloco editorial, não é salva como conteúdo da página e não exige republicação sobre a baseline 4.0.0. Para atualizar seu texto, altere a fonte de orientação e gere uma nova versão do código.</p>
<h3>Validação da entrega</h3><p>{sum(x['pass']for x in tests['checks'])}/{len(tests['checks'])} verificações da referência aprovadas: cobertura dos modelos, carregamento sob demanda, busca, teclado e layout em 393 e 1440 px. Também foram verificadas integridade do fornecedor, enumerações e dependências dos arquivos publicados. A persistência autenticada no Universal Editor continua sendo uma etapa de homologação no tenant.</p>
<h3>Lighthouse — medianas de três execuções</h3><div class="table"><table><thead><tr><th>Página</th><th>Perfil</th><th>Performance</th><th>Acessibilidade</th><th>Boas práticas</th><th>SEO</th></tr></thead><tbody>{rows}</tbody></table></div>
<p><strong>{'Meta de performance ≥98 atendida nas seis medianas locais.' if all(x['passesPerformanceGoal']for x in perf['results']) else 'A meta de performance ≥98 continua pendente em mobile.'}</strong> Lighthouse 13.5.0, Chromium 153 headless, servidor local com gzip, 18 auditorias sem concorrência com testes de browser. Relatórios em <code>docs/performance-v4.1.0/</code>. As notas do site publicado podem variar com CDN, latência e conteúdo.</p>
<p>Acessibilidade e boas práticas são notas distintas. Os relatórios mantêm visíveis as limitações de contraste, ARIA e SVG dos componentes. Esta referência não representa certificação de todas as combinações do design system.</p></section>'''
s=replace(s,'section','baseline',base)
deploy='''<article class="file-chapter" id="deploy-v315"><div class="file-tag">DEPLOY 4.1.0</div><h3>Atualização de código sobre o conteúdo 4.0.0</h3>
<p><strong>Se o conteúdo 4.0.0 já estiver instalado e publicado, não há reimportação nem republicação para adicionar a referência de propriedades.</strong></p>
<ol><li>Preserve o commit anterior e crie uma branch de homologação.</li><li>Extraia <code>aem-eds-inter-toranja_v4.1.0.zip</code>. Revise a sincronização com <code>python3 tools/sync-baseline.py --target /caminho/do/clone</code> e aplique com <code>--apply</code>.</li><li>Revise o diff e faça commit/push do código compilado, modelos, estilos, chunks, <code>scripts/eds-reference.json</code>, <code>.hlxignore</code>, <code>head.html</code> e <code>version.json</code>. Preserve as configurações do ambiente.</li><li>Aguarde Code Sync. Confirme código <code>4.1.0</code>, conteúdo <code>4.0.0</code> e DS <code>2.0.1</code> no manifesto.</li><li>Abra os showcases de Button, Select, Table e Formulário; teste a consulta e a busca em desktop e mobile. Homologue também edição, salvar e reabrir propriedades no Universal Editor.</li><li>Valide Preview/Live e execute Lighthouse no domínio publicado antes de promover a branch.</li></ol>
<h4>Se o conteúdo ainda for anterior à 4.0.0</h4><p>A migração anterior continua necessária. Faça backup de <code>/content/demo-to</code>, assets e edições existentes. Instale <code>demo-to-content-4.0.0.zip</code> pelo Package Manager, <strong>sem uninstall/delete</strong>. O filtro replace pode sobrescrever edições e remover páginas ausentes da baseline; migre conteúdo de negócio seletivamente quando necessário.</p><p>Homologue e execute Preview/Publish das 128 páginas, incluindo Home, nav e footer, e dos assets necessários. Instalar no Author não publica no EDS. O ZIP interno <code>content/demo-to-content.zip</code> permanece idêntico ao da entrega 4.0.0.</p>
<h4>Reconstrução</h4><pre>npm ci
npm run build
node tests/component-reference.mjs
npm run test:compliance</pre><p>Use Node 24. Os testes de browser usam Chromium instalado pelo Playwright ou <code>PLAYWRIGHT_CHROMIUM_EXECUTABLE</code>. O build compilado já acompanha o ZIP para deploy.</p>
<h4>Lighthouse no Mac</h4><pre>AUDIT_RUNS=3 MIN_PERFORMANCE=98 npm run test:performance -- https://main--demo-to--jeffara.aem.live/</pre>
<h4>Rollback</h4><p>Para desfazer somente a referência de propriedades, restaure o commit de código 4.0.0. Se também migrou conteúdo de uma versão anterior, considere o backup editorial dessa migração e execute novamente Preview/Publish.</p></article>'''
s=replace(s,'article','deploy-v315',deploy)
s=s.replace('V4.0.0','V4.1.0').replace('v4.0.0','v4.1.0').replace('Documento v4.0','Documento v4.1').replace('Código atualizado: 4.0.0','Código atualizado: 4.1.0')
s=s.replace('V4.1.0 no código e no conteúdo importável; DS React 2.0.1.','V4.1.0 no código; conteúdo importável 4.0.0; DS React 2.0.1.')
s=s.replace('Na V4.1.0, o ciclo de código deve ser acompanhado pela migração e publicação do conteúdo descritas no procedimento de deploy. O runtime compilado acompanha a entrega.','Na V4.1.0, atualizar o código é suficiente quando o conteúdo 4.0.0 já está publicado. Para conteúdo anterior, siga a migração descrita no procedimento de deploy. O runtime compilado acompanha a entrega.')
s=s.replace('CATÁLOGO 4.0.0','CATÁLOGO · TORANJA 2.0.1')
s=s.replace('pacote 4.0.0','pacote 4.1.0').replace('10/10/2026','09/10/2026').replace('10 out 2026','09 out 2026')
(root/'docs/EDS_AEM_Universal_Editor_Arquitetura_Deploy_4.1.0_FINAL.html').write_text(s)
(root/'docs/release-4.1.0.json').write_text(json.dumps({'version':'4.1.0','contentVersion':'4.0.0','designSystem':'2.0.1','reference':coverage,'referenceValidation':tests,'performance':perf,'packageAudit':read('docs/package-audit.json'),'contentReimportRequiredFrom4':False,'remoteDeploymentPerformed':False,'remoteUEPersistenceTested':False},ensure_ascii=False,indent=2))
print('Guide 4.1.0 and release report generated.')
