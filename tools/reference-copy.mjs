/** Orientações de autoria: linguagem de operação, mantendo os nomes reais do painel. */
export const glossary = Object.fromEntries(`
label|Texto que a pessoa vê no componente. Prefira uma mensagem curta e clara; em ações, use um verbo que explique o próximo passo.
title|Título exibido nesta área. Use para apresentar o assunto antes do conteúdo complementar.
subtitle|Texto de apoio ao título. Acrescente contexto sem repetir a mesma informação.
description|Descrição complementar exibida no componente. Use para explicar a informação ou orientar a próxima ação.
paragraph|Texto principal de apoio. Use para desenvolver a informação apresentada no rótulo.
paragraphSupport|Texto adicional de orientação, abaixo do conteúdo principal.
paragraphTrailing|Texto de apoio exibido na área final do item.
additionalText|Informação complementar exibida junto ao conteúdo do item.
children|Conteúdo inserido dentro do componente. Use o editor de texto ou os itens de conteúdo disponíveis neste bloco.
slot|Área de conteúdo complementar do componente. Configure somente os formatos oferecidos pelo editor.
webContent|Conteúdo exibido na variante web do componente; combine com a variante correspondente.
value|Valor usado pelo componente. Em campos de entrada, representa o valor preenchido; nos itens de seleção, é o identificador da opção.
defaultValue|Valor inicial usado antes da interação da pessoa. Não representa um valor já enviado ao servidor.
state|Estado de apresentação do componente. Use enabled no uso normal; skeleton para demonstrar carregamento e disabled quando a interação estiver indisponível, se essas opções existirem neste campo.
variant|Escolhe uma das apresentações oficiais deste componente. Compare os exemplos e use apenas as opções oferecidas no painel.
size|Ajusta o tamanho usando a escala oficial do componente, sem definir medidas livres.
hierarchy|Define o destaque da ação. Use primary para a ação principal e as opções secundárias ou terciárias para ações de apoio.
leadingIcon|Ícone antes do conteúdo principal. Escolha no catálogo oficial um símbolo que reforce o significado da ação.
trailingIcon|Ícone na área final do componente, depois do conteúdo principal.
icon|Ícone do catálogo oficial do Toranja. Escolha pelo significado da informação ou ação.
IconSvg|Referência de ícone do componente. Prefira as opções do catálogo oficial disponíveis no painel.
iconFlag|Bandeira usada como elemento visual; selecione a opção oficial correspondente ao país.
flag|Bandeira associada à informação ou ao país do item.
flagIcon|Ícone de bandeira exibido no componente.
leadingFlag|Bandeira exibida no início do item.
leadingPaymentMethod|Meio de pagamento apresentado na área inicial do item.
leadingLabel|Texto da área inicial do componente.
leadingValue|Valor apresentado antes do conteúdo principal.
trailingLabel|Texto da área final do componente.
trailingValue|Valor apresentado na área final do componente.
trailing|Conteúdo da área final, usado para informações ou ações complementares.
labelTrailing|Rótulo complementar exibido na área final do item.
labelIcon|Ícone que acompanha o rótulo.
labelButton|Texto do botão associado ao componente. Descreva a ação que será realizada.
hug|Ajusta a largura do botão ao seu conteúdo. Use quando ele não deve ocupar toda a linha; não ative junto com fill.
fill|Faz o botão ocupar a largura disponível. Use quando a ação precisa preencher a área; não ative junto com hug.
fillWidth|Ocupa a largura disponível no contêiner. Evite combinar com uma largura fixa.
fillHeight|Ocupa a altura disponível no contêiner. O contêiner precisa ter uma altura definida; evite combinar com altura fixa.
fullWidth|Expande o componente para a largura disponível na área em que foi inserido.
width|Define a largura do elemento. Verifique o resultado no mobile antes de publicar uma medida fixa.
height|Define a altura do elemento. Use uma medida compatível com o conteúdo e confira os diferentes tamanhos de tela.
minWidth|Largura mínima permitida para este elemento ou coluna.
minHeight|Altura mínima da área, mesmo quando há pouco conteúdo.
ratio|Proporção entre largura e altura. Preserve a proporção adequada à imagem ou ao vídeo; as opções e o formato aparecem abaixo.
radius|Arredondamento dos cantos conforme as opções oficiais do componente.
borderWeight|Espessura da borda na escala oficial. Combine com uma cor de borda disponível no painel.
borderColor|Cor da borda definida pelos tokens oficiais. Evite cores livres para manter a consistência entre temas.
contentScale|Define o encaixe da imagem: FILL preenche e pode recortar; FIT preserva a imagem inteira e pode deixar espaço livre.
contentDescription|Texto alternativo da imagem para leitores de tela. Descreva a informação relevante, sem começar com “imagem de”.
alt|Texto alternativo da imagem. Descreva o conteúdo que precisa ser entendido sem enxergar a imagem.
src|Origem da imagem ou mídia. Selecione um asset aprovado ou informe a referência solicitada pelo campo.
asset|Asset usado pelo componente. Selecione o arquivo correspondente no DAM.
local|Referência prioritária da imagem. Quando preenchida, tem preferência sobre as imagens remotas de tema claro/escuro.
light|Imagem usada no tema claro quando não há uma imagem local configurada.
dark|Imagem alternativa para o tema escuro. Configure quando a imagem do tema claro não funcionar nesse fundo.
url|Endereço do recurso usado pelo componente. Informe uma URL válida e acessível ao público da página.
href|Destino do link: página interna, endereço externo ou âncora existente na página.
target|Define se o destino abre na aba atual (_self) ou em uma nova aba (_blank).
placeholder|Exemplo ou orientação exibida quando o campo está vazio. Não substitui o rótulo do campo.
hint|Mensagem curta de ajuda para orientar o preenchimento.
hints|Mensagens de ajuda do campo. Edite pelos itens da coleção; respeite o limite indicado.
error|Mensagens apresentadas no estado de erro. Explique como corrigir o preenchimento.
helper|Configuração da ajuda associada ao campo ou componente.
hasError|Ativa a apresentação de erro. Use junto de uma mensagem que explique o que precisa ser corrigido.
success|Ativa a indicação de sucesso quando o componente oferece esse estado.
disabled|Desabilita a interação. Use quando a ação estiver temporariamente indisponível e mantenha uma explicação no contexto da página.
loading|Apresenta o estado de carregamento enquanto uma operação está em andamento.
isLoading|Indica que os dados ou o conteúdo ainda estão sendo carregados.
skeleton|Exibe a representação de carregamento do componente, sem o conteúdo final.
checked|Define a seleção inicial de um controle, como checkbox ou switch.
isChecked|Define se o controle começa marcado.
selected|Define se este item começa selecionado.
isSelected|Define se o item aparece selecionado.
indeterminate|Mostra seleção parcial, útil quando apenas alguns itens de um grupo estão marcados.
active|Indica que o item está ativo no contexto atual.
readOnly|Permite consultar o valor sem alterá-lo.
required|Indica preenchimento obrigatório. Confira também as regras de validação do formulário.
min|Menor valor permitido pelo controle.
max|Maior valor permitido pelo controle.
step|Quantidade acrescentada ou retirada a cada interação com o controle numérico.
minValue|Menor valor aceito neste intervalo ou cenário.
maxValue|Maior valor aceito neste intervalo ou cenário.
minLength|Quantidade mínima de caracteres no preenchimento.
maxLength|Limite de caracteres aceitos pelo campo.
maxLines|Limita a quantidade de linhas de texto exibidas, conforme o comportamento oficial do componente.
maxResults|Limita quantos resultados de busca aparecem na página.
minChars|Quantidade mínima de caracteres necessária para iniciar a busca.
autoComplete|Indica ao navegador o tipo de informação que pode ser sugerida no preenchimento automático.
inputMode|Sugere o teclado mais adequado no celular, como numérico ou e-mail. Não substitui a validação do campo.
name|Nome do campo ou controle. Em integrações, mantenha o identificador acordado com o time técnico.
id|Identificador único do elemento. Não repita o mesmo valor em componentes da mesma página.
aria-label|Nome anunciado por leitores de tela. Use especialmente quando o componente exibe apenas um ícone.
ariaLabel|Nome acessível anunciado por leitores de tela.
aria-describedby|Identificador de um elemento com a descrição complementar. O elemento precisa existir na mesma página.
tabIndex|Controla a participação na navegação por teclado. Evite valores positivos; ajuste somente com orientação de acessibilidade.
as|Elemento HTML usado para o texto. Escolha o nível adequado à estrutura da página, sem usar a semântica para alterar o visual.
textType|Escolhe a categoria tipográfica oficial, conforme a função do texto na página.
textSize|Escolhe o tamanho de texto na escala oficial do Toranja.
textWeight|Escolhe o peso tipográfico permitido pelo componente.
sizeTitle|Tamanho do título na escala oferecida pelo componente.
color|Cor ou tratamento de cor permitido pelo componente. Use as opções oficiais de acordo com o significado e o tema.
background|Fundo do componente, conforme as opções oficiais disponíveis.
colorScheme|Esquema de cores aplicado ao componente.
colorVariant|Variação de cor dentro das opções oficiais.
colorStrong|Define o tratamento de cor forte quando oferecido pelo componente.
colorLabel|Cor do rótulo, seguindo os tokens disponíveis.
labelTrailingColor|Cor do rótulo da área final do item.
valueColor|Cor usada para destacar o valor exibido.
tagColor|Cor da tag associada ao item.
classColor|Classe de cor oferecida pelo componente. Use somente valores previstos no design system.
classStyle|Estilo de apresentação previsto pelo componente. Alterações fora das opções oficiais exigem revisão técnica.
className|Classe CSS de integração. Campo técnico; não use para criar estilos fora do Toranja.
style|Estilos técnicos em objeto JSON. Não use para sobrescrever tokens ou padrões oficiais do design system.
testId|Identificador para testes automatizados; não altera a apresentação.
data-testid|Identificador usado por testes automatizados; não altera a apresentação.
component_name|Nome utilizado na identificação do componente em medições ou integrações.
orientation|Direção de apresentação do elemento, conforme as opções disponíveis.
direction|Sentido em que o conteúdo ou a navegação é organizado.
align|Alinhamento do conteúdo na área disponível.
alignRight|Alinha o conteúdo à direita quando essa opção está ativa.
alignmentTrailingMode|Define como a área final se alinha ao restante do item.
position|Posição inicial ou localização do elemento. Observe as combinações permitidas com outras opções deste componente.
placement|Localização do popup ou tooltip em relação ao seu acionador.
offset|Distância adicional entre o elemento flutuante e seu acionador.
openOnHover|Permite abrir o conteúdo flutuante ao passar o cursor sobre o acionador.
isOpen|Define se o painel começa aberto. Abertura e fechamento posteriores seguem as ações configuradas.
defaultOpen|Estado inicial de abertura quando não existe um estado controlado configurado.
expand|Define se a área expansível começa aberta.
expansion|Estado de expansão controlado do componente.
defaultExpansion|Estado de expansão usado na inicialização.
expansible|Permite expandir o painel por arraste. Desativado, o BottomSheet usa a posição HUG.
overlay|Exibe a camada de fundo atrás do painel, destacando-o em relação à página.
restoreFocusId|Identificador do elemento que deve receber o foco quando o painel fecha. O elemento precisa existir na página.
scrollable|Permite rolagem dentro da área do componente.
bodyPadding|Espaçamento interno da área de conteúdo, respeitando as opções oficiais.
shouldFillHeight|Faz a área de conteúdo preencher a altura disponível.
shouldRender|Controla se o conteúdo desta área deve ser renderizado.
hidden|Oculta a área ou elemento correspondente.
show|Define se o componente é apresentado.
interactive|Habilita interação e estados de foco, hover e pressionado quando suportados pelo componente.
selectable|Permite selecionar os itens ou linhas apresentados.
selectedValue|Valor da opção selecionada. Use um valor que exista na lista de opções.
selectedCountryValue|Código/valor do país selecionado. Deve corresponder a um dos países configurados.
selectionMode|Modo de seleção: por exemplo, data única ou intervalo, conforme as opções do componente.
date|Data associada ao conteúdo. Use o formato indicado pelo componente.
minDate|Primeira data permitida para seleção.
maxDate|Última data permitida para seleção.
visibleMonth|Mês exibido inicialmente no calendário.
weekStartsOn|Dia usado para iniciar a semana no calendário, conforme as opções disponíveis.
locale|Localidade usada na apresentação de datas, números ou textos do componente.
language|Idioma das mensagens e rótulos internos oferecidos pelo componente.
dateType|Formato ou tipo de data apresentado pelo componente.
timeAgo|Apresenta a data como tempo decorrido, conforme o comportamento oficial.
currency|Moeda usada na formatação dos valores.
decimals|Quantidade de casas decimais exibidas.
mask|Ativa a formatação com máscara do valor.
maskType|Escolhe o tipo de máscara aplicada ao valor, entre as opções oficiais.
prefix|Texto ou símbolo antes do valor, como uma indicação de unidade.
suffix|Texto ou símbolo depois do valor, como uma unidade de medida.
phoneType|Tipo de telefone usado para definir a apresentação ou máscara.
fixedIncrementValue|Valor fixo acrescentado pela ação de incremento.
fixedDecrementValue|Valor fixo retirado pela ação de decremento.
enableInput|Permite digitar o valor diretamente no controle, além de usar os botões.
hasBorder|Exibe a borda do campo; no Stepper, essa opção é independente de permitir digitação.
enableZoom|Habilita o recurso de ampliação oferecido pelo componente de imagem.
hideLabelWhenFilled|No Select desktop com opções, oculta o rótulo visual após a seleção e mantém o nome acessível. Não se aplica ao modo webview.
suppressVisualLabel|Uso interno do Select desktop. Não use como configuração genérica de formulários; mantenha o padrão sem orientação técnica.
suppressNativeDatePicker|Suprime o seletor de data nativo do navegador. Use somente quando o fluxo já oferece uma seleção de data acessível.
count|Quantidade apresentada pelo contador ou badge.
counter|Valor do contador associado ao componente.
badgeValue|Valor mostrado no indicador de quantidade.
hasBadge|Exibe o indicador de quantidade ou notificação associado ao item.
progress|Progresso apresentado visualmente. Confira a escala do componente e os valores permitidos abaixo.
steps|Quantidade de etapas representadas pelo componente.
activeSegments|Quantidade ou seleção dos segmentos ativos, conforme o formato indicado.
segments|Segmentos exibidos no controle. Adicione e ordene os itens conforme a navegação desejada.
items|Itens que compõem a lista ou sequência. Adicione, edite e ordene pelos itens do componente no editor.
values|Valores que alimentam o componente. Mantenha a ordem alinhada aos rótulos correspondentes.
valueLabels|Rótulos apresentados para os valores das séries.
categories|Rótulos das categorias apresentadas no gráfico ou lista.
category|Categoria associada a este item.
bars|Configuração das barras do gráfico.
chartWidth|Largura usada na área do gráfico. Confira o encaixe em telas estreitas.
chartHeight|Altura usada na área do gráfico.
forceColor|Cores das séries do gráfico. Mantenha a ordem correspondente aos dados e use tokens oficiais.
forceIndex|Índice da série ou elemento que recebe o destaque previsto pelo componente.
legend|Configuração da legenda que identifica os dados apresentados.
legendOrientation|Direção em que os itens da legenda são organizados.
palette|Paleta usada na representação dos dados, entre as opções previstas pelo componente.
othersColor|Cor usada para agrupar ou representar os demais valores.
stacked|Empilha as séries do gráfico para mostrar a composição do total.
slice|Configuração das fatias do gráfico.
filling|Preenchimento da área do gráfico conforme o tratamento oficial.
threshold|Valor de referência usado para separar ou destacar faixas de dados.
yAxisPosition|Lado em que o eixo vertical é apresentado.
xLabelInterval|Intervalo entre os rótulos apresentados no eixo horizontal.
yLabelInterval|Intervalo entre os rótulos apresentados no eixo vertical.
yLabels|Rótulos usados no eixo vertical.
total|Total apresentado pelo componente.
totalItems|Quantidade total de registros, usada na paginação.
totalValue|Valor total destacado no componente.
totalLabel|Rótulo que identifica o total apresentado.
pageIndex|Índice da página atual, começando em zero: 0 representa a primeira página.
pageSize|Quantidade de registros exibidos por página.
pageCount|Quantidade total de páginas disponíveis.
pageSizeOptions|Quantidades que a pessoa pode escolher para exibir por página.
initialPageSize|Quantidade de registros por página usada na primeira exibição.
manualPagination|Indica paginação controlada por uma integração. Não ativa uma busca no servidor por si só; alinhe a fonte de dados com o time técnico.
pagination|Configuração de paginação do componente.
pageWidth|Largura usada para as páginas do carrossel quando a prévia está ativa.
pageSpacing|Espaçamento entre páginas ou slides do carrossel.
timer|Intervalo em segundos entre slides automáticos; valores menores que 1 desativam a reprodução automática.
snapToGrid|Ajusta a rolagem do carrossel ao item mais próximo. No modo page-view, o ajuste já faz parte do comportamento.
data|Registros apresentados pela tabela. Cada objeto representa uma linha e suas chaves devem corresponder às colunas configuradas.
selectedRowIds|Mapa JSON dos identificadores de linhas selecionadas, como {"0":true}. Se houver identificação customizada de linhas, use as mesmas chaves da integração.
columnId|Identificador da coluna referenciada pela configuração.
accessor|Chave do dado que será exibido nesta coluna. Deve existir nos objetos das linhas da tabela.
sortAccessor|Chave do dado usada para ordenar a coluna quando for diferente do valor apresentado.
sortable|Permite ordenar os registros por esta coluna.
cellType|Tipo de conteúdo da célula, como texto, valor, status ou ação. Use dados compatíveis com o tipo escolhido.
header|Texto ou conteúdo que identifica a coluna ou a área superior.
hideHeader|Oculta o cabeçalho da tabela. Verifique se as colunas continuam compreensíveis e acessíveis.
striped|Alterna o fundo das linhas para facilitar a leitura de tabelas extensas.
isSelectionSticky|Mantém a área de seleção fixa durante a rolagem horizontal da tabela.
enableStatus|Habilita o indicador de status das linhas. A definição de cor por linha depende do comportamento registrado pela integração.
searchTerm|Termo de busca aplicado ao conteúdo do componente.
initialSearchTerm|Termo de busca usado na primeira exibição.
isSearchOpen|Define se a área de busca começa aberta.
searchPlaceholder|Orientação apresentada quando a busca está vazia.
filter|Configuração de filtro do conteúdo exibido.
emptyMessage|Mensagem apresentada quando não há itens para exibir.
emptyFeedback|Apresentação usada quando o componente não encontra conteúdo ou registros.
feedbackTitle|Título da mensagem de retorno do componente.
feedbackDescription|Explicação complementar da mensagem de retorno.
feedbackType|Tipo de retorno apresentado, como informação, sucesso ou erro, conforme as opções disponíveis.
status|Status apresentado pelo componente; use uma opção coerente com a situação real do conteúdo.
brand|Configuração da marca na navegação. Use o formato JSON previsto e assets oficiais aprovados.
logo|Logo apresentada pelo componente, conforme as opções oficiais.
footer|Conteúdo ou configuração da área inferior do componente.
start|Configuração da área inicial do componente.
end|Configuração da área final do componente.
leading|Configuração do elemento que aparece antes do conteúdo principal.
trailingType|Tipo de conteúdo apresentado na área final.
trailingVariant|Variante da área final do item. A escolha determina quais configurações complementares ficam disponíveis.
contentVariant|Variação de apresentação do conteúdo interno.
avatarVariant|Tipo de apresentação do avatar.
signalVariant|Variação do indicador visual de status ou informação.
variantNumeric|Formato de apresentação numérica oferecido pelo componente.
typeValue|Tipo de formatação aplicada ao valor apresentado.
valueType|Tipo de valor apresentado; use dados compatíveis com o formato selecionado.
iconState|Estado visual do ícone associado.
isFlag|Indica que o elemento visual representa uma bandeira.
flagProps|Configuração da bandeira; use o formato e as opções previstos pelo componente.
paymentMethod|Meio de pagamento representado visualmente.
paymentMethodProps|Configuração do meio de pagamento exibido pelo componente.
edit|Habilita a opção de edição oferecida pelo componente.
editIcon|Ícone da ação de edição.
isSensitiveText|Marca o texto como informação sensível, seguindo o comportamento de proteção visual oferecido pelo componente.
linkTriggers|Configuração dos acionadores de links do componente.
rows|Quantidade de linhas de texto visíveis no campo.
cols|Largura de referência do campo em colunas de caracteres.
tag|Tag associada ao conteúdo.
tagLabel|Texto exibido na tag.
tags|Tags associadas ao item. Configure pelos itens correspondentes quando houver coleção.
contents|Conteúdo que compõe o item.
body|Texto do item de conteúdo. Use o editor para compor a informação que será exibida.
kind|Tipo de item. A escolha determina como o conteúdo será apresentado e quais campos devem ser preenchidos.
panelContent|Conteúdo exibido no painel associado a esta aba.
allTitle|Título do grupo que reúne todos os itens.
featuredTitle|Título do grupo de itens em destaque.
featuredItems|Itens apresentados no grupo de destaque.
featuredCountryItems|Países apresentados em destaque, antes da lista completa.
bottomSheetTitle|Título do painel de seleção que se abre a partir do campo.
countryAllTitle|Título da lista completa de países.
countryFeaturedTitle|Título do grupo de países em destaque.
countrySearchPlaceholder|Orientação exibida na busca de países.
fieldName|Nome enviado pela integração para identificar este campo. Combine o valor com o time responsável pelo destino dos dados.
titleType|Nível do título na estrutura da página. Mantenha a hierarquia de títulos consistente.
submitLabel|Texto do botão que envia o formulário.
successMessage|Mensagem apresentada após a confirmação de envio bem-sucedido.
failureMessage|Mensagem apresentada quando o envio falha. Oriente a pessoa sobre como tentar novamente.
consent|Texto e link do consentimento. Use a redação aprovada para o formulário.
integrationId|Nome da integração cadastrada para receber os dados. O time técnico precisa configurá-la antes de o formulário poder enviar informações.
formId|Identificador do formulário, usado para relacionar ações e integrações. Deve ser único na página.
options|Opções oferecidas no campo. Cada opção tem um rótulo visível e um valor usado pela integração.
errorMessage|Orientação apresentada quando o valor não atende à validação. Explique como corrigir o preenchimento.
pattern|Expressão regular usada para validar o formato. Peça ao time técnico um padrão testado antes de configurá-lo.
showWhenField|Nome de outro campo do formulário que controla a exibição deste item.
showWhenValue|Valor usado na comparação para decidir se este campo aparece.
showWhenOperator|Regra usada para comparar o campo de referência com o valor configurado.
indexEndpoint|Endereço do índice de busca do site. Use o endpoint definido pelo time técnico, compatível com o formato da busca.
searchRoot|Limita a busca a esta área do site, como /showcase. Use o caminho público, sem o domínio.
annualRate|Taxa anual do cenário, em percentual, usada na simulação. Trata-se de uma configuração demonstrativa.
referenceRate|Taxa anual de referência, em percentual, usada na comparação da simulação.
resultLabel|Nome apresentado para identificar o resultado do cenário simulado.
referenceLabel|Nome apresentado para identificar o resultado da referência.
disclaimer|Observação exibida junto da simulação. Esclareça as condições e o caráter demonstrativo dos valores.
cta|Destino da ação apresentada no componente.
ctaText|Texto da ação apresentada no componente.
videoUrl|Endereço do vídeo MP4 ou YouTube, de acordo com o formato selecionado.
posterImage|Imagem exibida antes da reprodução do vídeo.
posterImageAlt|Descrição alternativa da imagem de capa do vídeo.
caption|Texto de apoio apresentado abaixo do vídeo.
videoUrlTarget|Configuração de abertura do endereço do vídeo quando utilizada como link.
videoFormat|Formato de reprodução: escolha a opção correspondente ao endereço informado.
captionsUrl|Endereço do arquivo de legendas WebVTT do vídeo MP4.
captionsLanguage|Código do idioma das legendas, como pt-BR.
captionsLabel|Nome do idioma apresentado no seletor de legendas.
itemLink|Destino da ação deste item. Use para tornar o item navegável quando o componente oferece uma ação.
itemTarget|Define se a ação do item abre na mesma aba ou em uma nova aba.
collection|Tipo de item a configurar. Escolha primeiro a coleção para que o editor mostre os campos correspondentes.
classes_layoutColumn|Coluna da seção em que o bloco será posicionado no modo Colunas independentes.
classes_instant-search|Inicia a busca durante a digitação, respeitando a quantidade mínima de caracteres.
`.trim().split('\n').map(line=>{const n=line.indexOf('|');return [line.slice(0,n),line.slice(n+1)]}));
export const shows = {AdditionalContent:'o conteúdo complementar',Badge:'o indicador de quantidade/notificação',ButtonSnackbar:'a ação do Snackbar',Buttons:'os botões de navegação',Clear:'a ação de limpar o valor',CloseButton:'o botão de fechar',Content:'a área de conteúdo',Controls:'os controles de navegação',Counter:'o contador',CountryFeatured:'os países em destaque',CountrySearch:'a busca de países',CrossSelling:'a área de oferta complementar',Date:'a data',DefaultLegend:'a legenda padrão',Description:'a descrição',Divider:'o divisor visual',Dots:'os indicadores de posição',EndIcon:'o ícone final',Featured:'o grupo de destaque',Flag:'a bandeira',FooterDivider:'o divisor acima do rodapé',ForceBar:'a barra indicadora de força',GridLines:'as linhas de referência do gráfico',Header:'o cabeçalho',Helper:'a ajuda do campo',Hint:'a mensagem de orientação',Icon:'o ícone',Leading:'o elemento inicial',Legend:'a legenda',Link:'o link de apoio',Line:'a linha que conecta os itens',MiddleIcon:'o ícone intermediário',PoweredBy:'a assinatura de marca prevista pelo componente',Preview:'a prévia dos próximos slides',Search:'a busca',StartIcon:'o ícone inicial',Tag:'a tag',Tooltip:'o tooltip de detalhes',Trailing:'o elemento final',XAxis:'o eixo horizontal',YAxis:'o eixo vertical'};
export const specific = {
 'Header.type':'Escolhe a composição do cabeçalho: título, busca, logo, avatar ou uma das combinações disponíveis. Preencha os campos correspondentes ao tipo escolhido.',
 'Panel.type':'Escolhe o conteúdo principal do painel: slot para conteúdo configurado e feedback para uma mensagem de retorno. Configure os campos correspondentes à opção escolhida.',
 'InputText.type':'Escolhe entre entrada de texto (text) e numérica (number). Combine com rótulo, limites e validação coerentes.',
 'Button.type':'Define a função do botão: button para uma ação comum, submit para envio e reset para limpar um formulário. O envio depende de um formulário e de uma integração configurados.',
 'Button.typeButton':'Identifica a família visual interna do botão. Para autoria comum, mantenha o tipo do bloco inserido e use os componentes específicos de ícone ou ação flutuante quando necessário.',
 'FloatingActionButton.behavior':'Define a reação à rolagem: comportamento padrão, recolhimento do rótulo ou retorno ao topo, conforme a opção selecionada.',
 'Table.data':'Linhas da tabela em JSON. Exemplo: [{"nome":"Conta Digital","valor":100}]. As chaves nome e valor precisam corresponder aos acessos configurados nas colunas.',
 'Table.accessor':'Chave do dado usado nesta coluna. Exemplo: nome para mostrar o campo nome de cada registro; não é o título visível da coluna.',
 'Table.sortAccessor':'Chave alternativa usada na ordenação. Útil quando a apresentação da célula é diferente do valor que deve ser comparado.',
 'Select.value':'Valor da opção selecionada. Deve corresponder ao campo value de um dos itens da coleção options; o rótulo visível vem do item.',
 'Stepper.value':'Número exibido inicialmente pelo controle. Mantenha dentro de min e max; os botões e a digitação atualizam esse valor durante a interação.',
 'SegmentedControl.density':'Densidade de apresentação do controle segmentado. Escolha entre as opções oficiais para ajustar o espaço ocupado pelo conjunto.',
 'SectionTitle.icon':'Ícone do título na variante padrão. Na variante navigation, o componente usa o chevron oficial de navegação.',
 'BottomSheet.position':'Posição inicial do painel. Com expansible desativado, use HUG. Com expansão e overlay, use MIDDLE ou EXPANDED; sem overlay, COLLAPSED também é permitido.',
 'BottomSheetCountry.position':'Posição inicial do painel. Com expansible desativado, use HUG. Com expansão e overlay, use MIDDLE ou EXPANDED; sem overlay, COLLAPSED também é permitido.',
};
export const recipes = {
 Button:['Escolha Rótulo e Destino padrão para criar uma ação de navegação.','Use Opções do painel → advanced para ajustar hierarchy, hug ou fill. Ative apenas uma das duas opções de largura.','Configure Ação ao clicar → Tipo de ação quando precisar abrir um painel, acionar um formulário ou usar uma ação cadastrada.'],
 Image:['Escolha a imagem e preencha content Description com uma descrição útil.','Para imagem responsiva, use fill Width e uma proporção; evite combinar com largura fixa.','Confira o enquadramento em FILL e FIT antes de publicar.'],
 Select:['Adicione itens da coleção options e preencha label e value de cada opção.','O rótulo é o texto visível; o valor identifica a escolha na integração.','A seleção oficial depende da superfície desktop. No modo webview, valide a ação de abertura prevista para seu fluxo.'],
 Table:['Adicione itens da coleção data; cada item contém uma linha no formato JSON.','Adicione itens da coleção columns: header é o título da coluna e accessor identifica o campo de cada registro.','Use comportamento cadastrado quando precisar de identificação de linhas, status ou regras de seleção customizados.'],
 Stepper:['Defina min, max, step e value para o intervalo desejado.','Use enable Input para permitir digitação; a borda é configurada separadamente em has Border.'],
 DatePicker:['Escolha selection Mode antes de preencher as datas.','No modo de data única, use Data inicial única no formato AAAA-MM-DD. No modo de intervalo, configure os valores de início e fim.'],
 'v3-form':['Configure a Integração cadastrada fornecida pelo time técnico.','Adicione um item por campo, com Nome técnico, Rótulo e Tipo.','Teste validação, consentimento e retorno de sucesso/falha antes de publicar.'],
 'v3-search':['Informe o índice de busca e a área pública pesquisada.','Use Mínimo de caracteres e Quantidade de resultados para controlar a experiência.'],
 'v3-simulator':['Defina o intervalo de valores e as taxas do cenário e da referência.','Preencha a observação deixando claras as condições da simulação.'],
 'v3-video':['Escolha o formato e informe a URL correspondente.','Inclua imagem de capa e descrição. Para MP4, configure também as legendas WebVTT.'],
};
