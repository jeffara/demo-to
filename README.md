# Toranja EDS — V3 baseline

Baseline exclusiva do projeto XWalk para AEM Author, Universal Editor e Edge Delivery Services. Versão técnica **3.0.1**; referência **@interco/inter-toranja 1.13.3**, fornecida no pacote oficial. Conteúdo em `/content/demo-to`.

## Conteúdo desta entrega

- **64/64 componentes públicos oficiais**, no grupo “Toranja — componentes oficiais”.
- **751 propriedades próprias classificadas**, entre campos editoriais, coleções, ações e contratos técnicos. Funções React e referências técnicas não são código livre no editor.
- **4 funcionalidades V3**: formulário configurável, busca, vídeo responsivo e simulador demonstrativo.
- **113 páginas**, incluindo home, demo-toranja, exemplos individuais, composições, destinos, nav, footer e showcase V3.
- **31 implementações antigas removidas**. Seus 67 usos nas páginas foram migrados; navegação e rodapé agora usam composições de componentes oficiais.
- Pacote de reimportação `content/demo-to-content.zip`, com 113 páginas e 11 assets.

Comece por **`docs/DEPLOY-V3-BASELINE.md`**. O relatório está em `docs/AUDITORIA-V3-BASELINE.html`; os contratos e testes reproduzíveis também estão no projeto.

**A instalação do pacote substitui os descendentes de `/content/demo-to`, inclusive removendo páginas que não existem nesta baseline. Faça backup antes da instalação.** A configuração `jcr:content` da raiz, `/conf`, outros sites e assets alheios ao pacote não fazem parte dessa substituição.

A cobertura 64/64 significa que todos os exports públicos do snapshot estão representados. Não equivale a testar todas as combinações de propriedades ou certificar a persistência no Universal Editor remoto. Os testes são locais; importação, permissões, publicação e edição na instância precisam de homologação.

## Arquitetura

O EDS entrega HTML, blocos, modelos XWalk e recursos estáticos. Os blocos `ds-*` montam os componentes React oficiais em ilhas; não há SPA ou roteador React. Formulário, busca, simulador e menu também reutilizam controles oficiais. O vídeo usa mídia HTML nativa ou incorporação YouTube. Layouts de seção e estilos auxiliares usam os tokens oficiais.

O snapshot em `vendor/` não foi modificado. `src/` contém os adaptadores e `scripts/ds-runtime/` contém o runtime compilado. `.hlxignore` exclui fontes e ferramentas da entrega pelo Code Bus. O DS inclui adaptações de integração e correções externas ao vendor; elas não são o catálogo antigo.

`nav` e `footer` são páginas compartilhadas editáveis, compostas de blocos oficiais e carregadas por `scripts/site-shell.js`. Não existem blocos antigos `header`/`footer` no catálogo.

## Desenvolvimento

Requisitos: Node 22.12+, Python 3 e Git.

```bash
npm ci
npm run preview
```

Abra `http://127.0.0.1:4173/` ou `/demo-toranja`.

```bash
npm run build
npm run export:aem
npm run check
```

`content/pages.json` é a fonte dos exemplos entregues. `build:content` regenera os showcases V3 e as fixtures de `drafts/`; a exportação produz o ZIP interno para o Package Manager. O conteúdo posteriormente editado no AEM fica no AEM: antes de reimportar, preserve alterações editoriais que deseja manter.

Para executar as duas rodadas de testes de navegador:

```bash
npx playwright install chromium
npm test
```

É possível definir `PLAYWRIGHT_CHROMIUM_EXECUTABLE` para usar um Chromium existente. `npm test` reconstrói o projeto e o conteúdo antes das duas rodadas.

## Pontos de configuração

| Arquivo | Finalidade |
|---|---|
| `fstab.yaml` | Mountpoint do Author atual |
| `config/public-paths.json` | Referência de mapeamento da configuração EDS; não se aplica automaticamente por Git |
| `content/aem-config.json` | Raiz e nome do pacote de conteúdo |
| `scripts/site-config.js` | Raiz usada pelos links e busca |
| `helix-query.yaml` | Definição do índice de busca |
| `scripts/integration-setup.js` | Registro posterior dos serviços |
| `component-definition.json`, `component-models.json`, `component-filters.json` | Catálogo gerado do Universal Editor |

Na entrega EDS, os links usam `/` e rotas sem `.html`. No Author, as URLs de edição continuam com `.html`. As verificações locais de rotas não são prova de configuração remota do site.

Nenhum endpoint produtivo, analytics ou envio real de formulário foi ativado. Veja `docs/INTEGRACOES-V3.md`.
