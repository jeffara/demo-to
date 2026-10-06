> Para atualizar a V3.1.1 para a V3.1.2, siga `ATUALIZACAO-V3.1.2.md`. As etapas abaixo documentam a instalação completa da baseline; não reimporte o conteúdo para corrigir fontes/calendário.

# Implantar exclusivamente a V3 baseline

Entrega técnica 3.1.1 para `jeffara/demo-to`, com 64 componentes oficiais, quatro blocos DS Toranja Custom e layouts editoriais nas seções. Este procedimento substitui código e conteúdo; não recria o site e não remove a configuração de publicação ou a conta técnica existente.

## 1. Guardar o estado atual

No clone Git, confira `git status`. Salve alterações locais importantes, registre o commit atual e mantenha uma branch ou tag de retorno. Não apague `.git`.

No AEM Package Manager, crie e construa um backup de `/content/demo-to` e dos assets em `/content/dam/toranja-eds-demo`. Faça download. Preserve também a configuração do site em `/conf/demo-to` como backup separado. Evite edição simultânea durante a substituição.

O pacote novo substitui **todos os descendentes** do site, não apenas os componentes de demonstração. Alterações editoriais atuais nessas páginas serão substituídas. O `jcr:content` da raiz do site é excluído do filtro de substituição.

## 2. Identificar páginas que deixarão de existir

Na pasta extraída desta baseline:

```bash
python3 tools/plan-content-reset.py --backup /caminho/backup-do-aem.zip --output plano-reset.json
```

A ferramenta só compara arquivos; não altera o AEM. Leia `unpublishBeforeImport`. Se houver páginas nessa lista, despublique-as no site atual **antes da reimportação**, com o destino Live, e acompanhe a conclusão. As páginas removidas no repositório AEM podem continuar disponíveis no EDS se não forem despublicadas. O resultado depende da cobertura do backup fornecido.

Se houver URLs históricas publicadas que já não existem no Author/backup, inventarie-as e remova-as com a administração EDS autorizada. O pacote não enumera nem apaga automaticamente cópias remotas desconhecidas.

## 3. Substituir os arquivos do clone

Extraia esta entrega em uma pasta separada do clone. Copiar por cima não remove arquivos antigos. O utilitário abaixo compara as pastas e mostra as exclusões necessárias:

```bash
python3 /caminho/baseline/tools/sync-baseline.py --target /caminho/clone-demo-to
```

Depois de conferir o plano, aplique-o:

```bash
python3 /caminho/baseline/tools/sync-baseline.py --target /caminho/clone-demo-to --apply
cd /caminho/clone-demo-to
```

Ele remove arquivos obsoletos das pastas de implementação gerenciadas, copia a baseline e preserva `.git`, `node_modules`, `fstab.yaml`, configurações existentes em `config/` e `.well-known`, além dos arquivos de ignore existentes. Arquivos particulares fora dessas pastas são preservados: revise-os para verificar se existe alguma implementação adicional que não fazia parte da versão anterior fornecida.

Confira as configurações preservadas: Author, organização `jeffara`, repositório `demo-to`, branch `main`, raiz `/content/demo-to` e mapeamento público da raiz para `/`. `config/public-paths.json` é uma referência; subir esse arquivo não modifica a configuração EDS remota.

```bash
npm ci
npm run build
npm run check
npm run export:aem
python3 tools/audit-package.py
python3 tests/baseline-package.py

git status --short
git diff --stat
git add -A
git diff --cached --stat
git commit -m "Estabelece baseline V3 exclusiva do Toranja EDS"
git push origin main
```

Os comandos pressupõem que `main` é sua branch de publicação. Use o fluxo de PR do repositório se houver proteção de branch. `git add -A` registra também as exclusões. Não execute `git rm` sobre todo o projeto; o histórico não precisa ser apagado.

Se `node_modules` já estava versionado, antes do commit use `git rm -r --cached --ignore-unmatch node_modules` e confira se `node_modules/` está no `.gitignore`. Caso contrário, não é necessário esse comando.

## 4. Importar o conteúdo

No Package Manager da instância existente, envie **somente o ZIP interno** `content/demo-to-content.zip`, versão 3.1.1. O ZIP externo é o projeto completo e não é um pacote AEM.

Antes de instalar, examine os filtros:

- `/content/demo-to`: modo `replace`, inclui descendentes e exclui `/content/demo-to/jcr:content` e sua árvore.
- Assets: filtros exatos apenas para os 11 assets entregues.
- Não há filtro para `/conf` ou `/apps`.

Instale e confira o log completo. A instalação não deve ser tratada como concluída apenas porque foi iniciada. Os filtros foram inspecionados localmente; o comportamento de importação precisa ser conferido no seu AEM. Não mude o filtro para substituir a raiz inteira.

O pacote remove conteúdo antigo coberto pelo filtro, inclusive nós de componentes antigos dentro das páginas. As entradas históricas de pacotes no Package Manager não são componentes ativos. Não desinstale pacotes antigos depois da baseline: uma desinstalação pode restaurar estados anteriores. Arquive os backups necessários.

## 5. Conferir a autoria

Reabra o Universal Editor após a atualização de código e conteúdo. O catálogo esperado contém (64 blocos oficiais e quatro blocos Custom):

- Estrutura e conteúdo.
- Toranja — componentes oficiais.
- **DS Toranja Custom**: formulário, busca, vídeo e simulador.
- Toranja — itens dos componentes, disponíveis nos contêineres correspondentes.

Não deve existir o grupo antigo com os 31 blocos nativos. Se aparecer, confira no Network do navegador qual URL está fornecendo `component-definition.json`, `component-models.json` e `component-filters.json`. Valide organização, repo e branch e reabra a sessão; não presuma que é apenas cache.

Abra `/content/demo-to/index.html`, `/content/demo-to/demo-toranja.html` e `/content/demo-to/showcase/v3.html` no Author. Valide salvar/reabrir propriedades; adicionar, reordenar e remover itens; links internos e externos; abas; campos oficiais; formulário Custom e campos condicionais; busca; player com legendas; simulador; menu mobile e edição de nav/footer. Os testes locais simulam eventos de edição, mas não exercitam a persistência real da sua instância.

## 6. Publicar as 119 páginas

Faça Preview dos conteúdos e depois publique no destino Live, incluindo todas as páginas descendentes, `nav`, `footer` e referências de assets. Se usar Manage Publication, confira explicitamente a inclusão de filhos e referências; selecionar só a raiz não é prova de que toda a árvore foi publicada.

A publicação em Preview atualiza `aem.page`; Live atualiza os destinos de entrega correspondentes. Acompanhe a tarefa até terminar. O `git push` publica código; o conteúdo AEM precisa desse fluxo separado.

Valide:

- Preview: `https://main--demo-to--jeffara.aem.page/`
- Catálogo: `https://main--demo-to--jeffara.aem.page/demo-toranja`
- Custom: `https://main--demo-to--jeffara.aem.page/showcase/custom`
- Showcase: `https://main--demo-to--jeffara.aem.page/showcase/v3`
- Live: `https://main--demo-to--jeffara.aem.live/`
- Índice: `/query-index.json`, após a configuração e indexação real do conteúdo.

A home pública é `/`; `/index.html` não é o link canônico. O Author continua usando `.html`. Se `/` falhar mesmo após publicar o index, confira o mapeamento do conteúdo no EDS e os logs da publicação, além de testar a URL de Preview do próprio index. O servidor local normaliza aliases; ele não configura redirects no EDS remoto.

A conta técnica já adicionada deve continuar com as permissões necessárias no projeto EDS. Importar conteúdo não corrige ACLs da publicação. Se o erro de permissões persistir, confira a identidade usada pela instância e as permissões no projeto `jeffara/demo-to`.

Confirme também `/showcase/layouts`: alterar proporção, coluna de cada bloco, espaçamento e ordem no mobile; salvar, reabrir e publicar.

## 7. Critério de conclusão

O ambiente estará somente com a baseline quando o commit estiver ativo, o pacote tiver sido instalado sem erro, os antigos componentes tiverem desaparecido do catálogo e do conteúdo, todas as páginas esperadas estiverem publicadas e as URLs retiradas tiverem sido despublicadas. Confirme também salvar/reabrir no Universal Editor e as funcionalidades no Preview/Live.

O pacote entregue não executa essas operações remotamente. Integrações produtivas permanecem desativadas. Esta versão restaura formulário, busca, vídeo e simulador no grupo DS Toranja Custom. O envio de formulário aguarda configuração técnica; a busca depende do índice EDS; o simulador usa taxas editoriais.

Para retorno, reverta o commit e restaure o backup de conteúdo/configuração que corresponde à versão anterior; depois publique novamente os caminhos afetados. Não basta reverter apenas o Git.

Referências: [filtros FileVault](https://jackrabbit.apache.org/filevault/filter.html), [publicação a partir do Author](https://www.aem.live/docs/publishing-from-authoring), [projeto XWalk/Universal Editor](https://www.aem.live/developer/ue-tutorial).
