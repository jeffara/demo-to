# Diagnóstico e correções — Toranja EDS

## Resultado

Atualização 2.0.1: destino fixado em `/content/demo-to` via `content/aem-config.json`, com pacote `content/demo-to-content.zip` regenerado e referências de navegação/rodapé ajustadas. Validação desta alteração em `docs/validation/deployment-target-results.json`.

A versão entregue corrige os bloqueios identificados no projeto fornecido e prepara as duas páginas para autoria AEM XWalk. A validação realizada é local; a instalação e a persistência/publicação no Universal Editor real ainda precisam ser confirmadas no ambiente.

## Achados confirmados no original

| Prioridade | Problema | Correção |
|---|---|---|
| Bloqueante | JavaScript inválido em hero, carousel, teaser e video-player | Módulos reescritos e validados sintaticamente |
| Bloqueante | `component-definition.json` era um array sem grupos | Estrutura `groups` com componentes de estrutura, blocos e itens |
| Bloqueante | Modelos e leitura das células discordavam | Contratos gerados dos modelos; leitura sequencial de propriedades e células por item |
| Bloqueante | Listas sem modelos filhos | 17 tipos de item e filtros correspondentes |
| Bloqueante | Decoração descartava instrumentação de autoria | Nós e atributos de recursos/campos preservados durante movimentação |
| Bloqueante | Ausência de suporte de atualização do editor | Editor support e rich text support do boilerplate oficial |
| Bloqueante | Runtime reduzido identificava wrappers como blocos e não carregava simulator | Runtime `aem.js` oficial e carregamento padrão por seção |
| Bloqueante | Demo era markup pré-decorado com script inline | As duas páginas agora usam o mesmo loader e os mesmos 31 módulos EDS |
| Alto | Cabeçalho/rodapé e parte do conteúdo eram fixos em JavaScript | Conteúdo em páginas compartilhadas e modelos filhos |
| Alto | Campos não chegavam à interface: limites do simulador, texto de envio, tooltips e variantes | Modelos e decoração alinhados; testes de comportamento |
| Alto | Campos conflitavam com nomes/sufixos reservados do renderizador | `fieldName`, `kind`, `label`, `trigger` e `copyright`; sufixos de link/imagem/título só com origem correspondente |
| Alto | Assets externos não são equivalentes a referências DAM | Conteúdo de importação usa imagens DAM, com binários e MIME types |
| Alto | Formulário simulava sucesso sem backend e QR era decorativo | Envio só com endpoint configurado; QR fornecido por asset real |
| Alto | IDs globais e listeners persistentes comprometiam múltiplas instâncias | IDs por instância; descarte de listeners, observers e timers |
| Médio | Overflow de segmentos e paginação, menu incompleto, controles de teclado | Ajustes CSS, disclosure/menu, tabs/accordion/dialog nativos e foco visível |

## Estrutura final

- 31 blocos Toranja nativos: JS, CSS e modelos; nenhum runtime React.
- 17 tipos de item filho, usando recursos XWalk de item de bloco.
- 53 modelos e 220 campos no catálogo completo, incluindo seção e propriedades da página.
- Quatro páginas de conteúdo: index, demo-toranja, nav e footer.
- Tokens e arquivos de fonte recebidos preservados; ajustes de layout e comportamento sobre a base existente.
- Definições parciais são a fonte dos JSONs agregados, com geração determinística.
- Pacote FileVault gerado com quatro páginas e oito assets; não instalado remotamente.

## Validação executada

`docs/validation/browser-results.json` contém **64 verificações aprovadas** em Chromium:

- Duas páginas em 390, 768 e 1440 pixels, sem erro JavaScript/HTTP de assets/blocos, IDs duplicados ou overflow horizontal da página.
- 31 tipos de bloco em múltiplas instâncias, verificando preservação dos recursos dos itens.
- Edição, reordenação e adição simuladas para os 17 contêineres.
- Hero, abas com teclado, accordion, simulador, carrossel, modal, formulário com serviço interceptado, busca com índice interceptado e menu mobile.
- Evento simulado `aue:content-update` aplicado pelo editor-support oficial sem recarregar a página.

Os testes de contrato verificam unicidade de IDs, referências dos filtros, campos reservados, sufixos colapsados, correspondência conteúdo/modelos e sintaxe JavaScript. Capturas locais ficam em `docs/validation/`.

As fixtures representam o contrato de markup esperado, não uma resposta real do renderizador AEM. Os testes de serviço usam respostas interceptadas, sem envio de dados reais. O pacote FileVault foi verificado como ZIP/XML, não por instalação num Author.

## O que falta para declarar o fluxo integral homologado

1. Associar esta versão do código à branch/site corretos.
2. Criar/importar o conteúdo em um site XWalk configurado e verificar assets DAM.
3. Executar os critérios de aceite de `MIGRACAO-AEM.md`: editar, salvar, reabrir, adicionar/mover/duplicar/excluir e publicar no ambiente real.
4. Configurar endpoints de formulário e índice de busca; revisar destinos de demonstração.

Esses pontos dependem do repositório e do AEM real. “Todos os testes locais passaram” não equivale a “100% homologado no Universal Editor”. O escopo desta entrega é o catálogo de 31 blocos encontrado no ZIP; não houve comparação com um inventário externo completo do design system.

## Origem técnica

Runtime `scripts/aem.js`, `editor-support.js`, `editor-support-rte.js` e DOMPurify recuperados do boilerplate Adobe XWalk, com licença preservada. A modelagem segue os contratos documentados em https://www.aem.live/developer/component-model-definitions e a preservação de instrumentação em https://www.aem.live/developer/universal-editor-blocks. As fotos já referenciadas no conteúdo recebido foram materializadas; origens em `content/image-sources.json`.
