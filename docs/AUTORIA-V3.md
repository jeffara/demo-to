# Guia de autoria V3

## Começar

Abra `/showcase/v3` para exemplos de formulários, controles, composição, gráficos, ações e vídeo. O catálogo `/demo-toranja` e as 64 páginas individuais continuam disponíveis. Os exemplos são conteúdo demonstrativo: textos legais, taxas e ofertas precisam da revisão editorial da organização antes do uso público.

## Campos e propriedades

O grupo **Toranja oficial** reúne os 64 componentes do snapshot 1.13.3. O modo básico prioriza campos frequentes; o modo avançado apresenta os demais campos aplicáveis. Campos condicionais dependem da variante escolhida. Ícones são selecionados do catálogo oficial. Tipografia, superfícies, estados e cores semânticas usam os tokens Toranja; tema de página aceita PF/PJ claro/escuro.

Props que são funções React não se tornam caixas de JavaScript no editor. Elas são implementadas como comportamento, evento ou ação configurável. Props técnicas (classes livres, IDs de teste) não são oferecidas como opções de estilo. Consulte `toranja-contract.json`, `property-mapping.json` e `cobertura-propriedades.csv` para rastreabilidade. Inventário completo não significa testar exaustivamente todas as combinações.

## Itens, listas e composição

Selecione o componente e adicione seu tipo de item. **Tipo de item** escolhe a coleção (opções, mensagens, tags, categorias etc.); os campos correspondentes aparecem. Você pode reordenar e excluir itens sem editar JSON. Propriedades legadas ficam ocultas, preservadas para compatibilidade.

Gráficos de barra, rosca e medidor oferecem uma linha com rótulo, valor e cor opcional, mantendo as séries alinhadas. Sem cor forçada, o DS define a paleta. Listas simples aceitam entradas múltiplas. Mensagens `hints` respeitam o limite de três.

Card, Accordion, BottomSheet, Widget, FeedbackScreen, Banner e Carousel oferecem composição tipada nos slots suportados: texto, imagem, botão, divisor ou cartão, conforme o componente. Isso respeita o modelo de linhas/colunas XWalk; não implementa aninhamento ilimitado de qualquer componente React.

Para objetos opcionais, preencha suas propriedades e use o controle Exibir. ListItem permite escolher explicitamente os elementos inicial/final. Não deixe configurações contraditórias entre escolha de variante e campos antigos. O modo automático preserva o conteúdo legado.

## Ações

Cada ação tem tipo próprio. Para navegar, selecione página AEM ou URL externa; para abrir painel, use o mesmo identificador do painel. Para enviar/limpar um formulário, informe seu ID. IDs precisam ser únicos dentro da página. Ações externas ficam suprimidas durante a edição para evitar navegar ou enviar ao selecionar um bloco.

## Formulário

Cada campo é um item editável. `Nome` é a chave enviada ao backend e deve ser único. `Exibir quando` usa o nome de outro campo e o valor esperado; isso não impede selecionar/editar o campo no Universal Editor. Campos invisíveis e desabilitados não são enviados. O formulário valida os campos antes de tentar a integração. A identificação da integração é configurável; a conexão efetiva depende do time técnico.

## Limites de validação

Foram exercitados Chromium local, desktop/mobile, modelos, conteúdo e eventos Universal Editor simulados. Persistência real no AEM, políticas de acesso, indexação remota, Preview/Live e integrações produtivas dependem da homologação da instância descrita em DEPLOY-V3.md. Não interprete o relatório local como aprovação automática do ambiente remoto.
