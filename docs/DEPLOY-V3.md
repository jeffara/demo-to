# Deploy V3 — site existente

Não recrie o site e não apague o conteúdo do AEM. Código, conteúdo e configuração do site têm ciclos separados. Git push atualiza código; não importa nem republica conteúdo.

## 1. Backup e preparação

1. Crie um branch no clone Git existente (`git switch -c upgrade/toranja-v3`) e salve o estado atual.
2. Exporte no Package Manager um backup do conteúdo editorial e dos assets que serão alterados. Preserve esse ZIP intacto.
3. Copie os arquivos da V3 para o clone, preservando `.git`, configurações específicas do ambiente e arquivos de outros projetos. Não copie `node_modules`. Compare `git diff --stat` e `git status`.
4. Confirme `fstab.yaml`, `head.html`, configuração do site XWalk e `content/aem-config.json`. A raiz desta entrega é `/content/demo-to`; a raiz DAM é `/content/dam/toranja-eds-demo`.
5. Se trocar a raiz, atualize `content/aem-config.json`, reconstrua código/conteúdo e ajuste o site AEM e fstab. O arquivo `scripts/site-config.js` é gerado: não alterá-lo manualmente.

## 2. Construção e Git

Requisitos: Node >=22.12, Python 3. O runtime compilado já está incluído.

```bash
npm ci
npm run build
npm run check
npm run export:aem
python3 tools/audit-package.py
git add .
git diff --cached --stat
git commit -m "feat: Toranja EDS V3 e autoria flexível"
git push -u origin upgrade/toranja-v3
```

Revise/integre o branch ao branch usado pelo site (atualmente `main`). Confirme a entrega de `component-definition.json`, `component-models.json`, `component-filters.json`, `scripts/site-config.js` e `scripts/ds-runtime/` no host do branch. O AEM Code Sync precisa ter acesso ao repositório. Não apagar `.git` nem o site para publicar.

## 3. Escolha a origem do conteúdo

**Demonstração desta entrega:** instale `content/demo-to-content.zip` no Package Manager do site existente. São 113 páginas e 11 assets. A instalação escreve nas mesmas URLs do showcase/home/nav/footer: se já foram editadas, não importe sobre elas sem comparar o backup.

**Conteúdo editorial existente:** converta uma cópia do backup exportado do AEM:

```bash
python3 tools/migrate-aem-package.py --input backup-aem.zip --output backup-aem-v3.zip
python3 tests/migration-v3.py backup-aem.zip backup-aem-v3.zip
```

Revise o filtro FileVault do pacote antes de instalar. A ferramenta preserva caminhos e binários, marca apenas os blocos deste projeto e converte listas JSON conhecidas em itens tipados. Ela não conecta ao AEM. O teste compara os nós/propriedades; não substitui homologação no editor.

Não importe o backup convertido e o pacote completo de demonstração sobre as mesmas páginas sem selecionar quais alterações devem prevalecer. Para incluir só os novos exemplos, use um pacote com filtro restrito a `/content/demo-to/showcase/v3` e assets correspondentes.

## 4. Importar, reabrir e publicar

1. Instale o pacote escolhido e aguarde o processamento dos assets no DAM.
2. Reabra o Universal Editor sem cache antigo dos modelos.
3. Verifique adição, edição, reordenação e exclusão de blocos e itens; salve, feche e reabra a página para provar persistência.
4. Reenvie **todas as páginas afetadas** para Preview. O contrato V3 acrescenta `schemaVersion` e novas colunas: Git push sozinho não regenera o HTML entregue pelo AEM.
5. Valide a lista de URLs no Preview; então publique para Live conforme o fluxo habilitado na instância. Não presuma que selecionar a raiz inclui descendentes: confira a lista efetiva e o status dos jobs.

## 5. Rotas corretas

| Página | Author | EDS Preview |
|---|---|---|
| Home | `/content/demo-to/index.html` | `/` |
| Catálogo | `/content/demo-to/demo-toranja.html` | `/demo-toranja` |
| Novidades | `/content/demo-to/showcase/v3.html` | `/showcase/v3` |
| Formulário | `/content/demo-to/showcase/v3/formulario.html` | `/showcase/v3/formulario` |
| Vídeo | `/content/demo-to/showcase/v3/video.html` | `/showcase/v3/video` |

Host Preview configurado anteriormente: `https://main--demo-to--jeffara.aem.page`. O Author usa `.html`; os links públicos gerados são sem extensão. O mapeamento da home exige exportar a página `index` na raiz correta do site. O servidor local aceita/normaliza `/index.html`, mas isso **não comprova um redirect no CDN**. Se precisar preservar URLs públicas antigas com `.html`, configure e valide redirects na camada de entrega da instância.

## 6. Homologação necessária na instância

- Preview `/` e `/demo-toranja` retornam 200 e carregam o runtime V3.
- Criar página com o template XWalk; adicionar seção e novos componentes do catálogo.
- Editar propriedades básicas/avançadas, listas de itens e links AEM/externos; reordenar/remover/salvar/reabrir.
- Verificar imagens DAM, herança de nav/footer, quatro temas e visualização mobile.
- Reindexar/publicar páginas e validar `/query-index.json`: título, descrição, corpo e exclusões.
- Validar os mesmos casos em Preview e Live, incluindo URLs, CSP e vídeo externo se usado.
- Validar endpoints reais depois que o time fornecer contratos, autenticação e ambiente de teste.

Esses passos não foram executados em sessão AEM autenticada nesta entrega. Não há certificação de 100% em produção sem essa evidência.
