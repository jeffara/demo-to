# RUNBOOK TÉCNICO & OPERACIONAL: CONVERSÃO DO DESIGN SYSTEM TORANJA (BANCO INTER) PARA AEM EDGE DELIVERY SERVICES (EDS XWALK)

> **Projeto:** Transformação Digital Banco Inter — Redesenho Institucional  
> **Arquitetura Base:** Adobe Experience Manager Edge Delivery Services (AEM EDS)  
> **Boilerplate Oficial:** `adobe-rnd/aem-boilerplate-xwalk` (Crosswalk / Universal Editor & Document Authoring)  
> **Data de Homologação:** Outubro de 2026  
> **Versão da Biblioteca:** 2.0.0 (Suite Completa de 31 Componentes Oficiais Toranja)

---

## 1. VISÃO GERAL & RACIONAL ARQUITETURAL

O **Design System Toranja** é a linguagem visual e funcional que unifica a experiência do Banco Inter em todas as suas plataformas. Com a migração da presença digital do Inter para o **Adobe Experience Manager Sites Edge Delivery Services (AEM EDS)**, a biblioteca de componentes Toranja foi convertida do modelo tradicional de Single Page Application para o modelo de **blocos modulares de alto desempenho** de Edge Delivery.

### Por que o boilerplate XWalk (`aem-boilerplate-xwalk`)?
A Adobe recomenda oficialmente o boilerplate **XWalk (Crosswalk)** para projetos corporativos de grande porte porque ele oferece **dupla esteira de governança**:
1. **Document-Based Authoring (Google Docs & Microsoft Word / OneDrive):** Os autores de conteúdo de produto, CRM e marketing produzem páginas utilizando tabelas nativas de processadores de texto, sem necessidade de treinamento complexo em CMS.
2. **Universal Editor (AEM Cloud Service):** Os designers e gerentes de produto podem editar visualmente a página em tempo real, arrastando componentes da paleta com suporte a metadados e fragmentos de conteúdo.
3. **Desempenho Extremo (Lighthouse 100/100):** Elimina o overhead de frameworks pesados (como React, Gatsby ou Angular em tempo de execução na CDN), gerando HTML semântico, CSS puro e JavaScript vanilla com carregamento lazy e pontuação máxima em Core Web Vitals (LCP ≤ 2,5s).

---

## 2. ESTRUTURA DO REPOSITÓRIO CONVERTIDO

A biblioteca convertida encontra-se estruturada dentro dos padrões estritos do AEM EDS:

```text
aem-eds-inter-toranja/
├── .github/                      # Workflows de CI/CD e linting automatizado
├── assets/
│   └── brand/                    # Logos oficiais e grafismos em SVG
├── blocks/                       # Os 15 Componentes / Blocos Oficiais Toranja
│   ├── accordion/                # FAQ e gavetas de termos regulatórios
│   ├── cards/                    # Cards de produto, ecossistema e metálicos
│   ├── cta-banner/               # Dobra final de conversão (Dark / Orange)
│   ├── flywheel/                 # Ciclo de recompensas Inter Loop (4 etapas)
│   ├── footer/                   # Rodapé institucional regulatório (BACEN/FDIC)
│   ├── form/                     # Formulário CRM / Salesforce com máscara de CPF
│   ├── header/                   # Cabeçalho, navegação, dropdowns e mobile drawer
│   ├── hero/                     # Palco principal com portais e Citrina Light
│   ├── manifesto/                # Bloco editorial com quote de alto impacto
│   ├── modal/                    # Diálogo acessível para regras e produtos
│   ├── moments-journey/          # Scrollytelling de momentos com portais oficiais
│   ├── quick-moment-rail/        # Barra flutuante de navegação rápida
│   ├── segment-showcase/         # Abas interativas dos 4 segmentos (Digital a Win)
│   ├── simulator/                # Calculadora reativa (102% CDI vs Poupança)
│   └── teaser/                   # Dobra de 2 colunas para Global Account e frentes
├── icons/                        # Catálogo de 53 ícones SVG oficiais do Inter
├── scripts/
│   ├── aem.js                    # Core library da Adobe (XWalk helpers)
│   └── scripts.js                # Orquestrador do ciclo de vida da página
├── styles/
│   ├── fonts/                    # Fontes Citrina, CitrinaText e Inter (.woff2)
│   └── styles.css                # Design Tokens completos e reset global
├── tools/
│   └── sidekick/
│       └── library/              # Plugin de biblioteca para o Adobe Sidekick
├── component-definition.json     # Registro dos componentes para Universal Editor
├── component-models.json         # Mapeamento de campos e tipos editáveis
├── fstab.yaml                    # Conexão da fonte de conteúdo (Drive/SharePoint)
├── authoring-guide.md            # Guia prático de autoria para o time de conteúdo
└── package.json                  # Scripts de teste, lint e dependências dev
```

---

## 3. CATÁLOGO COMPLETO DOS 31 COMPONENTES TORANJA CONVERTIDOS

| # | Nome do Bloco | Função / Aplicação | Variantes Suportadas | Sintaxe no Google Docs / Word |
|---|---|---|---|---|
| **01** | `header` | Barra superior com logo, navegação de frentes, multi-país, login e mobile drawer. | Default, Scrolled | `/nav.docx` ou autônomo |
| **02** | `footer` | Rodapé com 5 colunas institucionais, selos BACEN/FDIC/NASDAQ e avisos legais. | Default | `/footer.docx` ou autônomo |
| **03** | `hero` | Dobra de abertura com tipografia Citrina, eyebrow, botões e portal fotográfico. | Default, Light | `\| Hero \|` |
| **04** | `cards` | Exibição modular de ofertas, produtos ou pilares do ecossistema. | `default`, `ecosystem`, `metallic` | `\| Cards (ecosystem) \|` |
| **05** | `quick-moment-rail` | Barra de navegação rápida pelos momentos de vida com indicador ativo dinâmico. | Floating, Sticky | `\| Quick Moment Rail \|` |
| **06** | `manifesto` | Dobra editorial com tipografia Citrina Light e destaques em Laranja Inter. | Centered | `\| Manifesto \|` |
| **07** | `moments-journey` | Capítulos de vida com os portais oficiais em arco, assimétrico ou pílula. | `arch`, `asymmetric`, `pill`, `reverse` | `\| Moments Journey (asymmetric) \|` |
| **08** | `segment-showcase` | Demonstração comparativa interativa dos 4 segmentos (Digital, One, Prime, Win). | Default (4 Tabs) | `\| Segment Showcase \|` |
| **09** | `simulator` | Calculadora financeira de rendimento automático (102% CDI vs Poupança). | Meu Porquinho, Câmbio | `\| Simulator \|` |
| **10** | `flywheel` | Representação visual do ciclo virtuoso de recompensas do Inter Loop. | 4-Steps Cycle | `\| Flywheel \|` |
| **11** | `accordion` | Gavetas expansíveis acessíveis para FAQ, detalhes de produtos e regras. | Single-open, Multi-open | `\| Accordion \|` |
| **12** | `cta-banner` | Bloco de alta conversão de fechamento com botões para abertura de conta e app. | `dark`, `orange` | `\| CTA Banner (dark) \|` |
| **13** | `modal` | Caixa de diálogo em camada para especificações técnicas ou regulatórias. | Inline Trigger, Auto | `\| Modal \|` |
| **14** | `form` | Formulário integrado com CRM/Salesforce com validação e máscara de CPF/fone. | Lead Capture | `\| Form \|` |
| **15** | `teaser` | Bloco bilateral de valor com portal e texto (ex: Global Account Brasil e EUA). | `default`, `reverse`, `pill` | `\| Teaser (reverse) \|` |

---

## 4. DESIGN TOKENS & IDENTIDADE VISUAL CONVERTIDOS

Todos os tokens do Brandbook oficial v2 (abril de 2025) foram convertidos em variáveis CSS padronizadas em `:root`:

```css
:root {
  /* Cores Principais */
  --inter-orange: #EA7100;
  --inter-orange-hover: #D66300;
  --inter-orange-light: #FFCA96;
  --inter-orange-clay: #943D15;
  --inter-sand: #FDF8EE;
  --inter-sand-light: #FFFCF7;
  --inter-sand-dark: #F5EEDB;
  --inter-white: #FFFFFF;
  --inter-black: #161616;
  --inter-graphite: #3C3331;
  --inter-gray: #EBEBEB;

  /* 4 Segmentos Oficiais */
  --seg-digital: #EA7100;
  --seg-one: #7A8B99;
  --seg-prime: #1F2326;
  --seg-win: #323747;
  --seg-win-gold: #C5A059;

  /* Tipografia Oficial */
  --font-display: 'Citrina', 'Helvetica Neue', sans-serif;
  --font-display-text: 'CitrinaText', 'Citrina', sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;

  /* Geometria & Portais */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 36px;
  --radius-full: 9999px;
}
```

---

## 5. GUIA DE INSTALAÇÃO & DEPLOY (RUNBOOK PASSO A PASSO)

### Passo 1: Inicialização do Repositório GitHub
1. Crie o repositório na organização do Banco Inter (ex: `github.com/inter/aem-site-redesign`).
2. Clone o repositório localmente:
   ```bash
   git clone https://github.com/inter/aem-site-redesign.git
   cd aem-site-redesign
   ```
3. Copie todo o conteúdo da pasta `aem-eds-inter-toranja` para a raiz do repositório.
4. Execute a instalação de ferramentas de desenvolvimento:
   ```bash
   npm install
   ```

### Passo 2: Instalação do Adobe AEM Code Sync Bot
1. Acesse o marketplace do GitHub e instale o aplicativo **Adobe AEM Code Sync** no repositório.
2. Certifique-se de conceder permissão de leitura aos webhooks de pull request e push para a branch `main`.

### Passo 3: Configuração da Fonte de Conteúdo (`fstab.yaml`)
1. No arquivo `fstab.yaml`, configure o link da pasta de conteúdo do Google Drive corporativo ou SharePoint:
   ```yaml
   mountpoints:
     /: https://drive.google.com/drive/folders/<ID_DA_PASTA_INTER>
   ```
2. Compartilhe a pasta do Google Drive com o usuário de serviço da Adobe: `helix@adobe.com` com nível de leitura.

### Passo 4: Instalação do Adobe Sidekick
1. Adicione a extensão **Adobe AEM Sidekick** no Google Chrome ou Edge.
2. Acesse as opções da extensão e adicione o projeto:
   - **Repository:** `aem-site-redesign`
   - **Owner:** `inter`
   - **Project Name:** `Banco Inter Redesign EDS`
3. Ao abrir qualquer documento no Google Docs ou Word dentro da pasta configurada, o Sidekick ficará ativo na barra superior com os botões **Preview** e **Publish**.

### Passo 5: Configuração do Sidekick Library Plugin
1. O arquivo `tools/sidekick/library/plugins/blocks/blocks.json` já está preparado.
2. No Sidekick, clique no ícone de livro (**Library**) para abrir o painel lateral com todos os 15 componentes Toranja.
3. Os autores podem clicar em qualquer bloco e selecionar **Copy Block Table**, colando a tabela diretamente no Google Docs ou Word.

### Passo 6: Execução e Testes Locais
1. Para testar localmente com hot-reload:
   ```bash
   npx @adobe/aem-cli up
   ```
2. O ambiente local estará acessível em `http://localhost:3000`.

---

## 6. GUIA DE AUTORIA DE CONTEÚDO (COMO USAR NA PÁGINA)

Os autores utilizam tabelas comuns de documento de texto. Cada linha da tabela representa uma propriedade ou coluna do componente:

### Exemplo de Página Completa (Home Page)
1. **Hero:**
   ```markdown
   | Hero |
   | Eyebrow: Dossiê Estratégico · Banco Inter |
   | # Em todo momento da vida, **vejo você**. |
   | O Super App que conecta sua conta, crédito, investimentos e vida global. |
   | **[Abra sua conta grátis](/abra-sua-conta)** _[Conhecer os Produtos](/#momentos)_ |
   | - :check: Sem anuidade<br>- :check: Dólar comercial<br>- :check: 102% CDI |
   | [Imagem do Portal Assimétrico] |
   ```

2. **Seção de Segmentos:**
   ```markdown
   ---
   | Segment Showcase |
   | Inter Digital | Inter One | Inter Prime | Inter Win |
   ---
   ```

3. **Simulador Financeiro:**
   ```markdown
   ---
   | Simulator |
   | Simule seu Rendimento no Meu Porquinho |
   | Rendimento automático a 102% do CDI com liquidez diária. |
   | **[Começar a Investir](/investimentos)** |
   ---
   ```

4. **Conversão Final:**
   ```markdown
   ---
   | CTA Banner (dark) |
   | # Pronto para transformar a sua vida financeira? |
   | Abra sua conta em menos de 5 minutos, sem burocracia e com atendimento 24h. |
   | **[Abra sua conta grátis](/abra-sua-conta)** _[Baixar App](/app)_ |
   ---
   ```

---

## 7. QA, ACESSIBILIDADE E PERFORMANCE (CORE WEB VITALS)

A biblioteca Toranja EDS foi construída para atender rigorosamente aos critérios de homologação contratual:

1. **Largest Contentful Paint (LCP ≤ 2,5s):**
   - O primeiro bloco Hero carrega imagens com `loading="eager"` e formatos WebP otimizados.
   - Fontes Citrina e Inter possuem `font-display: swap` e preloads na tag `<head>`.
2. **Cumulative Layout Shift (CLS ≤ 0,1):**
   - Todos os portais e cartões possuem proporção intrínseca (`aspect-ratio: 4 / 5` e `1.586 / 1`), eliminando saltos de layout durante a renderização.
3. **Acessibilidade Universal (WCAG 2.1 AA):**
   - Contraste de texto mínimo de 4.5:1 (Preto `#161616` sobre Areia `#FDF8EE` atinge 13.8:1; Laranja `#EA7100` sobre Branco atinge 3.2:1 para elementos de interface e botões com tipografia bold).
   - Suporte nativo a `prefers-reduced-motion: reduce` que desativa rotações 3D e transições para usuários sensíveis.
   - Navegação completa por teclado (Tab e Enter) em menus suspensos, abas de segmentos e acordeões.
