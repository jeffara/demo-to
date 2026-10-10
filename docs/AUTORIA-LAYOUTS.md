# Diagramar páginas com o Toranja

O Universal Editor oferece a interface visual. Esta versão configura os controles de seção e a apresentação EDS sem acrescentar componentes de design ao catálogo oficial.

## Configurar a seção

Selecione a Section pela árvore de conteúdo e ajuste:

| Controle | Opções |
|---|---|
| Layout | Uma coluna; 50/50; 33/67; 67/33; 25/75; 75/25; três ou quatro colunas; Hero; linha de ações; destaque; rodapé |
| Distribuição | Grade automática ou colunas independentes |
| Largura | Leitura (760px), padrão (1180px), ampla (1440px), toda a largura disponível com margem lateral |
| Espaço entre elementos | 16, 24 ou 40px; o amplo se adapta no mobile |
| Espaçamento vertical | Nenhum, compacto, padrão ou amplo |
| Alinhamento vertical | Topo, centro, base ou mesma altura |
| Fundo | Página, superfície neutra ou marca suave, usando os tokens oficiais |
| Ordem no mobile | Primeira ou última coluna primeiro; aplica-se às colunas independentes |

O Hero define duas colunas e tratamento de imagem. A linha de ações organiza componentes em uma linha que quebra quando necessário. A opção de rodapé é utilizada no fragmento de rodapé.

## Exemplo: imagem + título + texto + botão

1. Adicione uma seção e selecione **Duas colunas · 50/50**.
2. Em Distribuição, escolha **Colunas independentes**.
3. Adicione um componente **DS oficial: Image**.
4. Nas propriedades da imagem, escolha **Layout — coluna na seção → Coluna 1**.
5. Adicione dois componentes **DS oficial: Text**, configurando um como título e outro como texto.
6. Adicione **DS oficial: Button**, com sua ação e destino.
7. Nos três últimos componentes, escolha **Coluna 2**.
8. Na seção, escolha alinhamento Centro e espaço Amplo.

Cada componente mantém seu próprio modelo e propriedades. Para trocar o componente de coluna, use o campo de coluna; para reordenar os componentes, use os recursos de movimentação do editor. O campo de coluna é respeitado apenas no modo Colunas independentes. No modo automático, os itens são distribuídos na grade.

O texto padrão da seção ocupa a largura total, funcionando como introdução. Para distribuir textos dentro de colunas, use o componente Text oficial. A opção Automática atribui os blocos às colunas em sequência; use uma coluna explícita para fixar o agrupamento. Se uma coluna configurada não existir no layout escolhido, o componente fica na última coluna disponível.

## Mobile e leitura

Até 760px, as grades passam para uma coluna. Em Colunas independentes, é possível inverter a ordem das colunas. A ordem do DOM também é atualizada, mantendo leitura e sequência de teclado coerentes. A ordem dos componentes dentro de cada coluna é preservada.

Entre 761 e 1000px, a grade de quatro colunas usa duas colunas. Seções de largura total mantêm margens laterais para não encostar o conteúdo na borda.

## Consistência visual

Use fundo suave para destacar uma seção, em vez de colocar uma caixa em cada texto. Mantenha o texto de leitura em largura menor; prefira padrão/ampla para coleções. Agrupe CTA e texto na mesma coluna. Rótulos curtos evitam truncamento nos tamanhos de botão definidos pelo DS.

A nova home demonstra uma composição. `/showcase/layouts` demonstra todas as proporções, grades e inversão mobile. `/demo-toranja` organiza os exemplos por Átomos, Moléculas e Templates conforme os diretórios do snapshot oficial.

## O que é técnico

- `models/_section.json`: propriedades de layout no editor.
- `classes_layoutColumn` nos modelos dos 73 blocos: classe de posicionamento, sem ser passada como prop ao React oficial.
- `scripts/layout.js`: agrupamento visual e ordem responsiva.
- `styles/layout.css`: apresentação das seções.
- `scripts/editor-support.js`: reaplicação do layout após atualização de componente pelo editor.

Não há criação de contêineres arbitrários aninhados no repositório AEM. As colunas são agrupamentos visuais e a seção continua sendo o contêiner autorável. Isso respeita o modelo de conteúdo EDS de um nível de seção/blocos.

As verificações de autoria são simuladas localmente. Após instalar, valide salvar e reabrir as propriedades na sua instância.

Referência: [Content modeling for AEM authoring projects](https://www.aem.live/developer/component-model-definitions#sections-and-section-metadata).

