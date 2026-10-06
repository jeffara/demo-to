# Procedência

- `@interco/inter-toranja` 1.13.3: snapshot do ZIP `@interco.zip` fornecido pelo usuário; package.json declara MIT. Componentes e estilos preservados. Foram recuperados três nomes de arquivo UTF-8 que estavam gravados no ZIP sem a indicação correta de codificação.
- `@interco/icons`: snapshot fornecido no mesmo ZIP. Os ícones consumidos pelo Toranja são incorporados ao build oficial.
- React e React DOM 18.3.1: MIT.
- Vite 8.3.2: MIT. Ferramenta de build, não executada no servidor AEM.
- TypeScript 5.7.2: Apache-2.0. Usado apenas para inventariar os contratos oficiais.
- Playwright 1.62.1: Apache-2.0. Usado nos testes locais.
- Inter variável e Roboto Mono variável: Google Fonts, licença SIL OFL 1.1 incluída em `fonts/`. Subconjuntos latino e latino estendido hospedados no EDS; URLs e hashes em `docs/font-sources.json`.
- Citrina Regular: arquivo do CDN oficial Banco Inter, referenciado pelo CSS oficial de Citrina. Citrina Medium continua vindo do snapshot React fornecido. O alias `Citrina VF` é preservado para os tokens do Toranja; os arquivos Citrina usados são estáticos.

As adaptações da integração são externas ao código dos componentes: propriedades AEM, conteúdo rich text, eventos, destinos de links, IDs únicos, semântica de abas, teclado, contêineres responsivos e fechamento dos painéis.

Na V3.1.2, `src/native-date-anchor.js` ancora o calendário temporário do InputDate. `tools/toranja-date-compat.mjs` aplica, somente durante o build, duas correções verificadas no formato US do InputBase 1.13.3 (máscara e regex). O build falha se os trechos esperados mudarem. Os 9.822 arquivos do vendor permanecem intactos.

As licenças, avisos e condições de marca/fontes do material fornecido continuam aplicáveis. A licença do pacote não substitui os direitos de uso da marca.
