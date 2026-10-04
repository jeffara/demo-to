# Toranja · Edge Delivery Services + Universal Editor

Versão 2.0.1 — correção do projeto fornecido, com JavaScript nativo, CSS e conteúdo AEM XWalk. Sem React e sem build de aplicação para a entrega EDS.

O pacote contém **31 tipos de bloco**, **17 tipos de item filho** e o conteúdo demonstrativo de **index**, **demo-toranja**, **nav** e **footer**. Os tokens, fontes Citrina/CitrinaText/Inter, ícones e estilos Toranja do projeto original foram mantidos, com ajustes de integração e responsividade.

## Rodar as duas páginas

Requisito: Node.js 20+.

```sh
npm run preview
```

Abra `http://127.0.0.1:4173/index.html` e `http://127.0.0.1:4173/demo-toranja.html`.

O preview e a geração dos JSONs não precisam de dependências npm. Para os testes de navegador:

```sh
npm ci
npx playwright install chromium
npm test
```

`PLAYWRIGHT_CHROMIUM_EXECUTABLE` pode apontar para um Chromium já instalado. Os testes geram `docs/validation/browser-results.json`.

## O que é código e o que é conteúdo

- `blocks/`, `scripts/`, `styles/`, `icons/`, `head.html` e os três `component-*.json`: código e contratos entregues pelo repositório EDS.
- `models/_*.json` e `blocks/*/_*.json`: fontes dos contratos. Depois de editar, execute `npm run build` e versione também os JSONs agregados.
- `content/aem-config.json`: configuração do destino AEM (`/content/demo-to`), pasta DAM e nome do pacote.
- `content/pages.json`: representação transportável das páginas fornecidas, usada para gerar fixtures e o pacote inicial de conteúdo.
- `drafts/index.html`, `drafts/demo-toranja.html`, `drafts/nav.html` e `drafts/footer.html`: fixtures locais geradas. Em produção, essas páginas vêm do AEM, com recursos e instrumentação reais.
- `content/demo-to-content.zip`: pacote FileVault de demonstração para `/content/demo-to`. **É pacote de conteúdo, não é Site Template.**

Os HTMLs estáticos foram retirados da raiz do código. Deixar `index.html` no Git não cria recursos editáveis no AEM. As páginas no Universal Editor precisam existir na árvore de conteúdo do site XWalk e usar os modelos desta versão.

## Colocar no AEM

Siga [MIGRACAO-AEM.md](docs/MIGRACAO-AEM.md) antes de importar. O pacote de exemplo substitui as quatro páginas de demonstração e a pasta DAM dedicada que constam em seu `filter.xml`. Não instala configuração de site, não altera `/conf` e não foi instalado remotamente.

O destino já está configurado como `/content/demo-to` em `content/aem-config.json`. Para regenerar o pacote de importação:

```sh
npm run export:aem
```

Não importe sobre conteúdo existente sem revisar os caminhos e manter uma versão recuperável. O conteúdo de demonstração usa um modelo novo; páginas antigas não são convertidas automaticamente apenas pela publicação do JavaScript.

## Evidências e limites

- [Diagnóstico e correções](docs/DIAGNOSTICO.md)
- [Matriz de propriedades e itens](docs/MATRIZ-COMPONENTES.md)
- [Guia de autoria](authoring-guide.md)
- [Resultados dos testes locais](docs/validation/browser-results.json)

O código foi exercitado com fixtures locais e eventos simulados de atualização do Universal Editor. Salvar, reabrir, publicar e conferir o resultado no ambiente AEM real continuam sendo etapas de homologação. Não há credenciais, publicação remota nem configuração de serviços de formulário neste pacote.
