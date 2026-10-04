# Guia de Autoria AEM EDS — Biblioteca Completa de Componentes Toranja (Banco Inter)

Este guia apresenta a sintaxe exata de tabelas de autoria (Google Docs / Microsoft Word) e os parâmetros configuráveis no Universal Editor para todos os **31 componentes oficiais do Design System Toranja** convertidos para o **Adobe Experience Manager Edge Delivery Services** (Boilerplate XWalk).

---

## 1. Hero Toranja (`hero`)
Dobra principal com tipografia Citrina, eyebrow, portal visual assimétrico e botões de conversão.

| Hero |
| --- |
| Eyebrow: Dossiê Estratégico · Banco Inter |
| # Em todo momento da vida, **vejo você**. |
| O Super App financeiro que conecta conta corrente, investimentos, cartões, seguros, compras com cashback e conta internacional em dólar. |
| **[Abra sua conta grátis](/abra-sua-conta)** _[Conhecer os Produtos](/#momentos)_ |
| - :check: Sem taxa de manutenção<br>- :check: Cartão de crédito sem anuidade<br>- :check: Global Account em dólar |
| https://images.unsplash.com/photo-1573496359142-b8d87734a5a2 |

*Variantes Suportadas:* `hero (asymmetric)`, `hero (arch)`, `hero (pill)`, `hero (rounded)`, `hero (light)`

---

## 2. Barra de Momentos (`quick-moment-rail`)
Trilho flutuante para navegação rápida entre os capítulos da página.

| Quick Moment Rail |
| --- |
| Momentos de Vida |
| [Começar](#comecar) \| [Conquistar](#conquistar) \| [Construir](#construir) \| [Cuidar](#cuidar) \| [Descobrir](#descobrir) \| [Viver Mais](#viver-mais) |

*Variantes Suportadas:* `quick-moment-rail (floating)`, `quick-moment-rail (sticky)`, `quick-moment-rail (inline)`

---

## 3. Cards de Produtos & Ecossistema (`cards`)

### Variante A: Cards de Produto (Padrão)
| Cards | |
| --- | --- |
| https://images.unsplash.com/photo-1559526324-4b87b5e36e44 | ### Conta Digital Grátis<br>[tag-green:Sem Tarifas]<br>Pix gratuito e ilimitado, saques na rede Banco24Horas e cartão de débito internacional.<br><br>- TEDs e Pix 100% gratuitos<br>- Plataforma aberta de investimentos<br><br>**[Abrir Conta](/conta)** |
| https://images.unsplash.com/photo-1563986768609-322da13575f3 | ### Cartão Mastercard Black<br>[tag-orange:Acumule Pontos]<br>Pontos que nunca expiram no Inter Loop, cashback na fatura e acesso ilimitado a salas VIP LoungeKey.<br><br>- 1 ponto a cada R$ 2,50 gastos<br>- Seguro viagem e concierge<br><br>**[Pedir Cartão](/cartoes)** |

### Variante B: Ecossistema Super App 360° (`cards (ecosystem)`)
| Cards (ecosystem) | |
| --- | --- |
| :credit_card: | ### Dia a Dia & Pagamentos<br>Conta digital completa, Pix sem limites, pagamento de boletos, recarga e débito automático. |
| :coin_chart: | ### Investimentos & Wealth<br>Renda fixa a 102% CDI, ações no Brasil e em Wall Street na mesma tela. |
| :shopping_bag: | ### Inter Shop & Cashback<br>Mais de 500 lojas parceiras com dinheiro de volta direto no saldo da sua conta. |
| :globe: | ### Global Account (EUA)<br>Dólar comercial, cartão internacional e proteção FDIC de até US$ 250 mil. |

### Variante C: Cartões Metálicos Mastercard (`cards (metallic)`)
| Cards (metallic) | |
| --- | --- |
| | ### Inter Gold<br>Gratuito para todos os correntistas, cashback e tecnologia por aproximação. |
| | ### Inter Platinum<br>Para clientes Inter One (R$ 50k+), pontuação turbinada e concierge. |
| | ### Inter Black<br>Para clientes Inter Prime (R$ 250k+), acesso LoungeKey ilimitado. |
| | ### Inter Win Metal<br>Para clientes Private Win (R$ 1M+), cartão de metal exclusivo e Family Office. |

---

## 4. Manifesto Editorial (`manifesto`)
Dobra editorial com tipografia Citrina Light de alto impacto.

| Manifesto |
| --- |
| "Acreditamos que a vida financeira não precisa ser complicada, fria ou distante. Ela precisa ser **humana, transparente e presente** em cada momento de realização." |
| Manifesto Oficial do Banco Inter |

*Variantes Suportadas:* `manifesto (center)`, `manifesto (left)`

---

## 5. Jornada de Momentos (`moments-journey`)
Capítulo de scrollytelling com máscara oficial de portal (arco, assimétrico ou pílula).

| Moments Journey (asymmetric) | |
| --- | --- |
| https://images.unsplash.com/photo-1522202176988-66273c2fd55f | Começar: Autonomia e Faculdade |
| ## Vejo você conquistando a sua independência financeira. | |
| Toda conquista começa com o primeiro passo. No Inter, estudantes e jovens profissionais têm conta sem taxa de manutenção, cartão com limite garantido pelo Meu Porquinho e cashback em compras no Inter Shop. | |
| **[Abra sua conta grátis](/abra-sua-conta)** | |
| *Sujeito à análise cadastral e termos de abertura.* | |

*Variantes Suportadas:* `moments-journey (asymmetric)`, `moments-journey (arch)`, `moments-journey (pill)`, `moments-journey (reverse)`

---

## 6. Showcase de Segmentos (`segment-showcase`)
Apresentação interativa com 4 abas para a régua de relacionamento do Inter (Digital, One, Prime, Win).

| Segment Showcase |
| --- |
| Inter Digital \| Inter One \| Inter Prime \| Inter Win |

---

## 7. Mini Simulador Financeiro (`simulator`)
Calculadora reativa com slider que demonstra os ganhos de rentabilidade no Inter (102% CDI vs Poupança).

| Simulator | | | |
| --- | --- | --- | --- |
| Simule seu Rendimento no Meu Porquinho | | | |
| Rendimento automático a 102% do CDI com liquidez diária e resgate a qualquer momento. | | | |
| 10000 | 500 | 100000 | 10.75 |
| **[Começar a Investir](/investimentos)** | | | |

*Parâmetros da 3ª linha:* `[Valor Inicial | Valor Mínimo | Valor Máximo | Taxa CDI % a.a.]`

---

## 8. Ciclo Flywheel do Inter Loop (`flywheel`)
Demonstração das 4 etapas de valor acumulado do programa de pontos.

| Flywheel | | |
| --- | --- | --- |
| 1 | Cartão & Compras no Super App | Use seu cartão de crédito sem anuidade no dia a dia e acumule pontos a cada compra. |
| 2 | Pontos Loop que Não Expiram | Seus pontos não têm prazo de validade. Acumule com total tranquilidade. |
| 3 | Cashback na Conta ou Milhas | Troque pontos por dinheiro na conta corrente, desconto na fatura ou milhas aéreas. |
| 4 | Reinvestimento & Mais Vantagens | Reinvista o cashback no Meu Porquinho ou atinja categorias superiores (One, Prime, Win). |

---

## 9. Acordeão de Dúvidas & Termos (`accordion`)
Gavetas expansíveis para FAQ, detalhes de produtos e termos legais.

| Accordion | |
| --- | --- |
| A conta digital do Inter tem tarifas de manutenção? | Não, a conta digital é 100% gratuita para sempre. Sem taxas de manutenção, sem anuidade no cartão e com Pix ilimitado. |
| Como funciona a Global Account em dólar? | A Global Account é uma conta corrente sediada nos EUA através do Evolve Bank & Trust, com garantia do FDIC de até US$ 250 mil. |
| Como funciona o CDB Mais Limite de Crédito? | O valor que você guarda no CDB Mais Limite é convertido instantaneamente em limite no seu cartão de crédito, enquanto continua rendendo CDI. |

*Variantes Suportadas:* `accordion` (single-open / exclusivo padrão), `accordion (multi-open)`

---

## 10. Banner de Conversão Final (`cta-banner`)
Dobra final de fechamento com alto contraste visual e múltiplos botões.

| CTA Banner (dark) |
| --- |
| # Pronto para transformar a sua vida financeira? |
| Abra sua conta em menos de 5 minutos, direto pelo celular, sem tarifas e com atendimento 24 horas. |
| **[Abra sua conta grátis](/abra-sua-conta)** _[Baixar o Super App](/app)_ |

*Variantes Suportadas:* `cta-banner (dark)`, `cta-banner (orange)`

---

## 11. Formulário de Captura CRM / Salesforce (`form`)
Formulário com validação e máscaras automáticas de CPF e Telefone.

| Form |
| --- |
| Fale com um Especialista do Inter |
| Preencha seus dados para receber uma consultoria exclusiva sobre contas, investimentos ou crédito. |

---

## 12. Teaser em Destaque (`teaser`)
Dobra de duas colunas com portal em pílula e texto explicativo.

| Teaser (pill) | |
| --- | --- |
| https://images.unsplash.com/photo-1507679799987-c73779587ccf | Eyebrow: Vida Global Sem Fronteiras |
| ## Uma só marca. Duas moedas. Zero barreiras. | |
| O saldo em reais é convertido em dólares comerciais com IOF reduzido em segundos, abastecendo tanto o cartão internacional para despesas de viagem quanto a custódia em Wall Street. | |
| **[Conhecer a Global Account](/global)** | |

*Variantes Suportadas:* `teaser (pill)`, `teaser (arch)`, `teaser (asymmetric)`, `teaser (reverse)`

---

## 13. Modal Informativo (`modal`)
Caixa de diálogo acessível para especificações técnicas ou regulatórias.

| Modal |
| --- |
| modal-id: garantia-fgc |
| ### Proteção Regulatória do FGC e FDIC |
| Os depósitos em conta corrente e investimentos em CDB/LCI no Brasil contam com a proteção ordinária do FGC de até R$ 250.000 por CPF. Nos EUA, as contas contam com garantia do FDIC de até US$ 250.000 através do Evolve Bank & Trust. |

---

## 14. Banner Informativo & Promocional (`banner`)
Avisos de novidades, alertas e campanhas com gradiente oficial Toranja.

### Variante Padrão (Informativo)
| Banner | | |
| --- | --- | --- |
| :sparkle: | #### Novidade na Global Account<br>Agora você pode investir em ações dos EUA sem taxa de corretagem. | [Saiba mais](/global) |

### Variante Promocional (Gradiente Toranja)
| Banner (promo) | | |
| --- | --- | --- |
| :ic_piggy_bank: | #### Inter Loop Turbinado<br>Ganhe 2x pontos em compras no Inter Shop até domingo! | [Aproveitar oferta](/loop) |

*Variantes Suportadas:* `banner (promo)`, `banner (info)`, `banner (alert)`, `banner (dark)`

---

## 15. Abas de Conteúdo (`tabs`)
Navegação por abas horizontais com sublinhado laranja animado.

| Tabs | |
| --- | --- |
| Conta PF | ### Conta Completa para o seu Dia a Dia<br>Pix gratuito, cartão de débito internacional e saques na rede Banco24Horas.<br><br>**[Abrir Conta PF](/abra-sua-conta)** |
| Conta PJ | ### Gestão Financeira para sua Empresa<br>Emissão gratuita de boletos, folha de pagamento automática e maquininha com taxa zero.<br><br>**[Abrir Conta PJ](/empresas/conta-pj)** |
| Global Account | ### Dólar Comercial sem IOF abusivo<br>Envie e receba transferências internacionais, gaste no exterior e invista em Wall Street.<br><br>**[Abrir Global Account](/global)** |

---

## 16. Trilha de Navegação (`breadcrumb`)
Navegação hierárquica com microdados Schema.org para indexação e SEO.

| Breadcrumb | |
| --- | --- |
| Início | / |
| Pra Você | /pra-voce |
| Conta Digital & Super App | |

---

## 17. Tabela Comparativa (`comparison-table`)
Matriz comparativa de produtos, tarifas e concorrentes com coluna Inter destacada.

| Comparison Table | | | |
| --- | --- | --- | --- |
| **Recursos e Vantagens** | **Banco Inter** | **Bancos Tradicionais** | **Outras Fintechs** |
| Taxa de manutenção de conta | R$ 0 / mês | R$ 35 a R$ 80 / mês | R$ 0 / mês |
| Anuidade do cartão de crédito | R$ 0 para sempre | R$ 300 a R$ 1.200 / ano | R$ 0 básico |
| Transferências Pix e TED | [check] Gratuitas e Ilimitadas | [x] Tarifadas ou limitadas | [check] Gratuitas |
| Rendimento automático no cofrinho | [check] 102% CDI diário | [x] 70% CDI ou poupança | [x] Poupança |
| Global Account em dólar integrada | [check] Gratuita no mesmo app | [x] Não disponível | [x] Exige app separado |
| Pontos que nunca expiram | [check] Inter Loop | [x] Expiram em 2 anos | [x] Não possui |

*Tags especiais de status nas células:* `[check]` para item incluso (verde), `[x]` para item não incluso (cinza).

---

## 18. Download do Super App (`app-download`)
Conversão mobile com QR Code dinâmico e selos oficiais das lojas de aplicativo.

| App Download |
| --- |
| Baixe o Super App do Inter |
| Aponte a câmera do seu celular para o QR Code e abra sua conta gratuita em poucos minutos. |
| [Baixar no iOS](https://apps.apple.com/br/app/inter/id1071477797) |
| [Baixar no Android](https://play.google.com/store/apps/details?id=br.com.intermedium) |

---

## 19. Métricas de Impacto (`stats-counter`)
Métricas corporativas e números de prova social com contagem animada na rolagem.

| Stats Counter | |
| --- | --- |
| +33M | Clientes ativos no Brasil e nos EUA |
| R$ 100B+ | Em ativos sob custódia global |
| 102% CDI | Rendimento com liquidez diária |
| R$ 0 | De anuidade no cartão e tarifa de conta |

*Variantes Suportadas:* `stats-counter (default)`, `stats-counter (cards)`, `stats-counter (minimal)`

---

## 20. Prova Social & Depoimentos (`testimonials`)
Depoimentos avaliados com 5 estrelas e identificação do cliente.

| Testimonials | | |
| --- | --- | --- |
| A Global Account mudou minha rotina de viagens. Converto dólares em segundos sem taxas escondidas e uso o cartão no mundo todo com total segurança. | Carlos E. Mendes | Cliente Inter Black |
| O rendimento diário de 102% CDI no Meu Porquinho rende mais que a poupança do meu banco antigo sem eu precisar fazer nada. O app é completo! | Roberta S. Faria | Cliente Inter One |
| Concentro a folha da minha empresa, as maquininhas e meus investimentos pessoais no mesmo ecossistema. A economia de tarifas foi gigantesca. | Marcos Vinicius | Cliente Inter PJ & Prime |

---

## 21. Linha do Tempo & Passo a Passo (`timeline`)
Fluxo sequencial numerado para tutoriais e processos.

| Timeline | |
| --- | --- |
| Baixe o App & Inicie o Cadastro | Faça o download gratuito na App Store ou Google Play e inicie o cadastro com seu CPF e dados básicos. |
| Validação Biométrica i-safe | Tire uma selfie para biometria facial e foto de um documento oficial (RG ou CNH) para validação antifraude. |
| Conta Aprovada & Acesso Imediato | Sua conta é ativada em poucos minutos. Você já pode criar chaves Pix, aplicar no Meu Porquinho e pedir seu cartão. |

*Variantes Suportadas:* `timeline (vertical)` (padrão), `timeline (horizontal)`

---

## 22. Carrossel de Vitrines (`carousel`)
Vitrines horizontais interativas com suporte a swipe, teclado e indicadores por pontos.

| Carousel |
| --- |
| ### CDB Meu Porquinho<br>Renda fixa com liquidez diária a 102% do CDI. Resgate a qualquer momento direto na conta.<br><br>[Investir Agora](/cdb) |
| ### Inter Shop Cashback<br>Mais de 500 lojas parceiras. Receba dinheiro de volta direto na conta corrente.<br><br>[Conhecer o Shop](/shop) |
| ### Câmbio Comercial<br>Envie e receba transferências internacionais com a menor taxa do mercado e IOF reduzido.<br><br>[Simular Câmbio](/cambio) |

*Variantes Suportadas:* `carousel` (manual), `carousel (autoplay)`

---

## 23. Player de Vídeo Institucional (`video-player`)
Moldura de vídeo com portal oficial Toranja (arch, asymmetric ou pill) e overlay de play.

| Video Player (arch) |
| --- |
| https://images.unsplash.com/photo-1551836022-d5d88e9218df |
| [Assistir Vídeo](https://www.youtube.com/watch?v=dQw4w9WgXcQ) |
| Manifesto: Em todo momento da vida, vejo você |
| Conheça a história e o ecossistema do Banco Inter em 2 minutos. |

*Variantes Suportadas:* `video-player (arch)`, `video-player (asymmetric)`, `video-player (pill)`, `video-player (rounded)`

---

## 24. Sumário de Âncoras (`in-page-nav`)
Barra de âncoras na página com ScrollSpy que acompanha e destaca a seção visualizada.

| In-Page Nav |
| --- |
| [Benefícios](#beneficios) \| [Simulador](#simulador) \| [Comparativo](#comparativo) \| [Depoimentos](#depoimentos) \| [Dúvidas](#faq) |

*Variantes Suportadas:* `in-page-nav (sticky)` (padrão), `in-page-nav (inline)`

---

## 25. Paginação de Conteúdo (`pagination`)
Controles de navegação para listagens de notícias, comunicados e artigos de blog.

| Pagination | | |
| --- | --- | --- |
| 1 | 5 | ?pagina= |

*Parâmetros:* `[Página Atual | Total de Páginas | URL Base com Parâmetro]`  
*Variantes Suportadas:* `pagination (numeric)` (padrão), `pagination (compact)`, `pagination (dots)`

---

## 26. Barra de Busca Instantânea (`search-bar`)
Campo de pesquisa com ícone, botão de limpar e dropdown de sugestões em tempo real.

| Search Bar | |
| --- | --- |
| O que você procura no Inter? (ex: Pix, Cartão Black, Investimentos) | /query-index.json |

*Parâmetros:* `[Placeholder | Endpoint do Índice de Busca]`

---

## 27. Canais Oficiais de Atendimento (`contact-channels`)
Cards oficiais de suporte para conformidade regulatória com BACEN e Ouvidoria.

| Contact Channels | | |
| --- | --- | --- |
| Central de Relacionamento | **3003 4070** (Capitais) \| **0800 940 0007** (Demais regiões) | Atendimento humano de segunda a sábado das 8h às 20h. |
| SAC Geral | **0800 979 7099** | Disponível 24 horas por dia, 7 dias por semana. |
| Ouvidoria BACEN | **0800 940 7772** | De segunda a sexta das 9h às 18h. |
| Deficientes Auditivos | **0800 979 7099** | Canal acessível com suporte a Libras e texto. |

---

## 28. Alerta Contextual Inline (`alert-inline`)
Avisos contextuais para segurança, orientações fiscais ou comunicados de manutenção.

| Alert Inline (warning) |
| --- |
| **Aviso de Segurança Importante:** O Banco Inter nunca solicita senhas, tokens i-safe ou transferências por telefone, SMS ou WhatsApp. Em caso de dúvidas, utilize apenas os canais oficiais do app. |

*Variantes Suportadas:* `alert-inline (warning)`, `alert-inline (info)`, `alert-inline (success)`, `alert-inline (error)`, `alert-inline (dismissible)`

---

## 29. Glossário & Dica Flutuante (`tooltip`)
Dica explicativa flutuante ativada por hover ou toque para esclarecer termos financeiros.

| Tooltip | |
| --- | --- |
| CDI | Certificado de Depósito Interbancário: taxa média de juros das operações entre bancos no Brasil, usada como índice de referência para renda fixa. |
| FGC | Fundo Garantidor de Créditos: entidade privada que protege investidores em até R$ 250 mil por CPF em caso de intervenção bancária. |
| FDIC | Federal Deposit Insurance Corporation: agência federal dos EUA que garante depósitos da Global Account em até US$ 250 mil. |

*Variantes Suportadas:* `tooltip (top)`, `tooltip (bottom)`, `tooltip (left)`, `tooltip (right)`

---

## 30. Cabeçalho Institucional (`header`)
Barra de navegação superior completa, multi-segmento e mobile drawer.

Autoria via fragmento `/nav.docx` ou autônomo na página:

| Header | |
| --- | --- |
| Logo | /assets/brand/logo.svg |
| Links | [Pra Você](/pra-voce) \| [Empresas](/empresas) \| [Investimentos](/investimentos) \| [Global Account](/global) |
| Ações | [Acessar Conta](/login) \| **[Abra sua conta](/abra-sua-conta)** |

*Variantes Suportadas:* `header (default)`, `header (transparent)`, `header (scrolled)`

---

## 31. Rodapé Regulatório (`footer`)
Rodapé institucional completo com colunas de navegação, selos BACEN/FDIC/NASDAQ, redes sociais e avisos legais.

Autoria via fragmento `/footer.docx` ou autônomo na página:

| Footer |
| --- |
| Colunas: Institucional, Produtos, Ajuda, Segurança, Carreiras |
| Selos: NASDAQ: INTR, Autorizado Banco Central do Brasil, Garantia FGC & FDIC |
| Legal: Banco Inter S.A. CNPJ: 00.416.968/0001-01. Av. Barbacena, 1219 - Santo Agostinho, Belo Horizonte - MG. |

---

## 32. Configuração de Metadados de Página (Temas & Canais)
Tabela inserida no início ou fim do documento para controlar os contratos oficiais do Toranja:

| Metadata | |
| --- | --- |
| Title | Banco Inter — Conta Digital, Investimentos e Global Account |
| Description | O Super App financeiro completo para sua vida e seus negócios. |
| Theme | `pf-light` *(Opções: pf-light, pf-dark, pj-light, pj-dark)* |
| Surface | `desktop` *(Opções: desktop, webview)* |
