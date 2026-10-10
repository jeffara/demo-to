# Atualização V3.1.6 — performance com o adaptador React

O Toranja React 1.13.3 continua sendo o componente renderizado. O vendor, os modelos e o conteúdo 3.1.1 estão byte a byte iguais à entrega 3.1.5.

## Alterações

- Componentes oficiais sob demanda e ícones separados em 24 grupos assíncronos. Os 64 exports continuam disponíveis. O CSS dos componentes continua compartilhado; não há promessa de eliminar todo CSS sem uso.
- Fontes Citrina Medium externas, sem base64 duplicado no CSS. Tokens globais carregados uma vez; Inter/Citrina/Roboto Mono preservadas.
- Cabeçalho e primeira seção montados em paralelo; apresentação após o commit inicial do React e carregamento do CSS. Demais seções continuam depois. Reserva de proporção da imagem do hero, preload derivado do conteúdo e prioridade alta.
- Cards editoriais deixam de ser botões sem ação. Cards explicitamente selecionáveis usam aria-pressed. Links internos preservam navegação e teclado.
- Botões primários nos temas claros usam o token oficial color-background-brand-strong, com texto branco. O laranja fica mais escuro para resolver contraste; demais temas e estados oficiais são preservados.
- SVGs usam dimensões válidas. Favicon SVG incluído. Os patches de compatibilidade são aplicados no build e falham se o contrato do vendor mudar.
- Menu mobile, link da logo para a Home, DatePicker, abas e correções anteriores preservados.

## Deploy de uma instalação existente

1. Extraia aem-eds-inter-toranja_v3.1.6.zip fora do clone do site.
2. Execute o sincronizador inicialmente sem --apply, apontando para seu clone real:

```bash
python3 tools/sync-baseline.py --target /caminho/real/do/clone
python3 tools/sync-baseline.py --target /caminho/real/do/clone --apply
```

3. No clone, revise git diff e git status. Faça commit e push na branch conectada ao EDS. O runtime já está compilado: inclua todos os novos arquivos em scripts/ds-runtime, além de head.html, fontes, favicon, scripts e estilos.
4. Confira /version.json em Preview e Live e compare os hashes dos arquivos publicados com o manifesto. Verifique Home, página interna, menu mobile, logo, botões, formulários e abas. Limpe o cache do navegador para a medição de laboratório.

Não instalar um novo pacote no Package Manager, não fazer uninstall/delete, não reimportar e não republicar páginas por causa desta atualização de código. content/demo-to-content.zip continua na versão 3.1.1. Alterações editoriais independentes continuam exigindo seu fluxo de publicação. Nenhum deploy remoto foi executado nesta entrega.

Para alterar o código-fonte e recompilar: npm ci && npm run build:runtime. Não remova arquivos de chunks por achar que não são usados na Home; outros componentes dependem deles. O sincronizador remove chunks antigos da cópia local gerenciada. A propagação do Code Bus deve terminar antes de validar recursos; erros de chunks durante a propagação exigem conferir a sincronização e atualizar a página.

## Validação desta entrega

- 64 testes de renderização dos componentes oficiais, 24 de aceitação e 25 de responsividade aprovados em Chromium local.
- Verificações específicas da Home a 390 e 1280 px: sem overflow, sem erros JS/SVG, cards editoriais sem role de botão, imagem prioritária, logo para / e abrir/fechar menu com Escape e retorno de foco.
- Contratos e auditoria do pacote aprovados: 68 blocos, 101 modelos, 2.273 campos, 119 páginas. Vendor, conteúdo e modelos comparados por bytes e preservados.
- Não equivale a homologação no iPhone/Safari físico, UE autenticado ou ambiente EDS remoto.

## Lighthouse: antes/depois local

Lighthouse 13.5.0, Chromium 153, uma execução por perfil/versão, em servidor local com gzip. Desktop e mobile usam configurações distintas. A fixture utiliza assets locais e não o Media Bus. Os relatórios JSON estão em docs/performance-v3.1.6. Não comparar essas notas diretamente às medianas dos seis relatórios do domínio público: rede, cache, imagens e ambiente são diferentes.

| Métrica | Desktop 3.1.5 → 3.1.6 | Mobile 3.1.5 → 3.1.6 |
| --- | --- | --- |
| Performance | 88 → 97 | 66 → 78 |
| Acessibilidade | 88 → 100 | 88 → 100 |
| Boas práticas | 96 → 100 | 96 → 100 |
| LCP | 1,33 s → 1,19 s | 6,70 s → 4,85 s |
| CLS | 0,170 → 0,013 | 0,001 → 0 |

Inventário local separado, somando gzip dos arquivos JS/CSS solicitados pela Home: no mobile, JS 410.778 → 248.569 bytes (-39,5%) e CSS 398.905 → 49.495 bytes (-87,6%); no desktop, JS 410.778 → 231.156 bytes (-43,7%). São tamanhos calculados dos arquivos solicitados, sem cabeçalhos HTTP, não uma promessa de transferência idêntica em produção.

O LCP mobile continua acima do desejado nesta simulação. Permanecem oportunidades de reduzir dependências iniciais e CSS compartilhado; o insight de prioridade da imagem ainda merece checagem no EDS. Nenhuma pontuação 90+ mobile é garantida. SEO local não é evidência do ambiente público: noindex/robots do demo não foram alterados.

Depois do deploy, repetir três execuções desktop e três mobile headless na mesma URL e comparar medianas. Manter Lighthouse/Chrome/configuração iguais e evitar outros trabalhos pesados no Mac. Usar as novas execuções para decidir a próxima rodada, sem converter os componentes para EDS nativo.
