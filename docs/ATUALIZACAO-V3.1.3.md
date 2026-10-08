# V3.1.3 — espaçamento e navegação mobile

Projeto completo baseado na V3.1.2, com Toranja React 1.13.3. Este ZIP externo é código-fonte, não um pacote para instalar no Package Manager.

## Correções

- Rodapé: os cards usados como grupos de links deixam de recortar os títulos nos cantos arredondados. Removida a altura mínima desnecessária nesses grupos.
- Accordion: o estilo do header do site fica restrito ao header principal, sem afetar o cabeçalho interno do componente. Conteúdo expandido ganha espaçamento entre título, parágrafos, listas e links.
- Abas roláveis: controles “Mostrar abas anteriores/próximas”, com estado desabilitado nos limites. A aba selecionada fica visível após seleção por clique ou teclado e redimensionamento. O gesto horizontal continua disponível; uma aba ainda não selecionada pode aparecer parcialmente na borda, sinalizando a continuação da faixa.
- Abas sem rolagem: rótulos podem quebrar linha e os itens se distribuem em mais de uma linha no mobile.
- Ritmo vertical: reduzido o espaçamento padrão das seções no mobile de 32 para 24 px por extremidade. As opções explícitas de espaçamento configuradas pelo autor continuam sendo respeitadas.

O snapshot oficial, as fontes, os modelos do Universal Editor e os arquivos de conteúdo permanecem idênticos à V3.1.2. O pacote de conteúdo continua na versão 3.1.1. As correções do calendário e da tipografia da V3.1.2 estão incluídas.

## Instalação sobre a versão anterior

1. Extraia o ZIP em uma pasta separada do clone Git. Salve alterações locais pendentes antes da sincronização.
2. Na pasta extraída, visualize a comparação:

```bash
python3 tools/sync-baseline.py --target /caminho/do/clone-demo-to
```

3. Confira o plano e aplique a atualização:

```bash
python3 tools/sync-baseline.py --target /caminho/do/clone-demo-to --apply
cd /caminho/do/clone-demo-to
git status --short
git diff --stat
git diff --check
git add -A
git commit -m "fix: espacamento mobile, abas e recortes do rodape"
git push
```

Use a branch conectada ao EDS e o fluxo de PR do seu projeto, quando aplicável. O sincronizador preserva `.git`, o `fstab.yaml` existente e configurações de ambiente. O runtime compilado já está incluído; não precisa instalar dependências para publicar estes arquivos.

**Não apague o repositório e não reimporte o pacote de conteúdo para esta atualização.** Não há mudança editorial nem de modelos que exija reinstalação no AEM. O código atualizado será usado pelas páginas já publicadas quando a sincronização do EDS terminar.

4. Recarregue a raiz em Preview e Live e o Universal Editor. No iPhone, teste as abas com gesto horizontal e com as setas, selecione a última opção, abra/feche os accordions e confira os grupos do rodapé.
5. Caso uma seção tenha espaçamento explicitamente configurado no Universal Editor, esse valor continua tendo prioridade sobre o novo padrão mobile.

## Evidências e limites

- `mobile-spacing-v3.1.3.json`: 25 verificações específicas em 320, 390, 430, 768 e 1280 px; seleção e foco por teclado, clique, redimensionamento, quebra de abas sem rolagem, ausência de overflow da página, espaçamento e recorte.
- `acceptance-v313.json`: 24 verificações de interação, links e eventos de autoria simulados.
- `layout-v313.json`: 21 verificações de layouts e autoria simulada.
- `baseline-v313-mobile.json` e `baseline-v313-desktop.json`: 125 verificações por rodada, incluindo as 119 páginas, em 390 e 1280 px.
- Capturas dos componentes corrigidos: pasta `mobile-v3.1.3`.
- Contratos e auditoria do pacote: 68 blocos, 101 modelos, 2.273 campos; referências e XML válidos; Code Bus dentro dos limites verificados pelo auditor do projeto.

Os testes foram executados localmente em Chromium. Não representam teste em um iPhone físico/Safari nem homologação autenticada de salvar e reabrir conteúdo no Universal Editor. Esta entrega não altera automaticamente o GitHub ou o ambiente publicado. Relatórios de publicação de versões anteriores são históricos; não houve nova checagem remota nesta correção.

## Reexecutar

Com Node >=22.12.0 e dependências instaladas (`npm ci`):

```bash
npm run build:runtime
node tests/mobile-spacing.mjs
QA_ROUND=v313 node tests/acceptance.mjs
QA_ROUND=v313 node tests/layout.mjs
QA_ROUND=v313-mobile QA_WIDTH=390 node tests/baseline.mjs
QA_ROUND=v313-desktop QA_WIDTH=1280 node tests/baseline.mjs
npm run check
python3 tools/audit-package.py
```

Instale o Chromium do Playwright (`npx playwright install chromium`) ou defina `PLAYWRIGHT_CHROMIUM_EXECUTABLE` com o caminho de um Chromium compatível.
