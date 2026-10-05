> Referência histórica da base anterior. Para a versão 2.0, siga README.md, docs/DEPLOY-V2.md e docs/REVISAO-V2.html.

# Guia Completo de Desenvolvimento AEM Edge Delivery Services (EDS)
## Da Concepção ao Deploy, Validação de Core Web Vitals e Ajustes Contínuos

> **Projeto de Referência:** Banco Inter — Design System Toranja (`aem-eds-inter-toranja`)  
> **Arquitetura Base:** Adobe Experience Manager Edge Delivery Services (Boilerplate XWalk / Crosswalk com suporte a Universal Editor e Google Docs / SharePoint)  
> **Versão:** 1.0.0 — Outubro de 2026

---

## 1. Visão Geral da Arquitetura AEM Edge Delivery Services

O **AEM Edge Delivery Services (EDS)** é uma arquitetura moderna orientada a borda (*edge-native*) desenvolvida pela Adobe para entregar experiências digitais com foco estrito em **pontuação 100 no Google Lighthouse / Core Web Vitals**. 

Ao contrário dos CMSs monolíticos tradicionais, o EDS opera sob três princípios fundamentais:
1. **Desacoplamento de Conteúdo e Código:** O conteúdo é redigido em ferramentas corporativas já existentes (Google Docs ou Microsoft Word no SharePoint) ou no **Adobe Universal Editor**, enquanto a engenharia de interface vive inteiramente em um repositório Git padrão (HTML semântico, Vanilla JavaScript moderno ES Modules e CSS puro).
2. **Pipeline sem Servidor de Build Lento:** Não há Webpack, Vite, Docker ou pipeline de build de 20 minutos rodando em CI/CD para compilar páginas. O código versionado na branch `main` do GitHub é entregue de forma quase instantânea aos nós de borda (Fastly CDN / Edge Workers).
3. **Renderização Progressiva e Otimizada:** O HTML inicial gerado pelo conversor do EDS é puro e semântico. Os blocos modulares (`blocks/`) são carregados assincronamente por demanda, sem frameworks pesados no cliente, garantindo LCP (*Largest Contentful Paint*) inferior a 2,5 segundos e CLS (*Cumulative Layout Shift*) igual a 0.

---

## 2. Tabela Sequencial de Ferramentas (Core Pipeline Toolchain)

A tabela abaixo estabelece a ordem cronológica e a ferramenta exata empregada em cada etapa do ciclo de vida de uma aplicação AEM EDS:

| Ordem | Etapa do Ciclo | Ferramenta / Tecnologia | Função Primordial | Comandos / Interface de Operação | Artefatos Gerados ou Consumidos |
|:---:|---|---|---|---|---|
| **01** | **Scaffolding Inicial** | **GitHub Template / AEM Boilerplate XWalk** | Criação do repositório base com a estrutura padronizada Adobe EDS e suporte a Universal Editor. | `gh repo create <nome> --template adobe/aem-boilerplate-xwalk` | `fstab.yaml`, `scripts/`, `styles/`, `blocks/` |
| **02** | **Conexão de Conteúdo** | **Helix Mountpoint Config (`fstab.yaml`)** | Mapeamento do ponto de montagem entre o repositório de código e a pasta de autoria no Google Drive ou SharePoint. | Configuração declarativa via arquivo YAML | `fstab.yaml` |
| **03** | **Ambiente Local** | **AEM CLI (`@adobe/aem-cli`)** | Emulador local do pipeline EDS com recarregamento em tempo real (LiveReload) e simulação do conversor de markdown. | `npm install -g @adobe/aem-cli`<br>`aem up` (Porta padrão: `3000`) | Servidor local em `http://localhost:3000` |
| **04** | **Engenharia de Tokens** | **CSS Variables / Design System Tokens** | Transposição dos tokens de marca (cores, tipografia Citrina/Inter, raios de borda, sombras e espaçamentos). | Edição direta em CSS | `styles/styles.css`, `styles/fonts/` |
| **05** | **Construção de Blocos** | **Vanilla ES Modules & CSS BEM** | Desenvolvimento modular da lógica de decodificação e estilização de cada componente de página. | Criação dos pares `.js` e `.css` sob `blocks/<nome>/` | `blocks/<nome>/<nome>.js`<br>`blocks/<nome>/<nome>.css` |
| **06** | **Modelagem Universal Editor** | **Adobe XWalk JSON Schemas** | Definição dos contratos de componentes, campos, tipos de dados e containers para edição visual WYSIWYG. | Configuração declarativa de JSONs | `component-models.json`<br>`component-definition.json`<br>`component-filters.json` |
| **07** | **Governança de Autoria** | **Guia de Autoria & Sidekick Library Plugin** | Padronização dos schemas de tabelas para redatores e catálogo inserível direto no Sidekick. | Markdown de documentação e JSON de blocos do Sidekick | `authoring-guide.md`<br>`tools/sidekick/library/plugins/blocks/blocks.json` |
| **08** | **Deploy Contínuo (CI/CD)** | **GitHub Integration + AEM Code Sync** | Deploy automatizado no Edge CDN acionado por commits/merges na branch do repositório. | `git push origin main` | Roteamento automático para `*.aem.page` e `*.aem.live` |
| **09** | **Publicação de Conteúdo** | **AEM Sidekick Browser Extension** | Publicação das páginas redigidas nos ambientes de Preview (Staging) e Live (Produção). | Botões **Preview** e **Publish** no navegador | Conversão de docx/Google Doc em HTML semântico |
| **10** | **Validação & Métricas** | **Google Lighthouse & AEM RUM** | Aferição contínua de Core Web Vitals, acessibilidade e telemetria de usuários reais sem cookies. | Chrome DevTools (Lighthouse)<br>AEM RUM Dashboard | `scripts/aem.js` (`sampleRUM`), Relatórios CWV |

---

## 3. Ferramentas Complementares e Ecossistema Auxiliar

Além do pipeline principal, as seguintes ferramentas compõem a governança profissional do ecossistema:

### 3.1. Qualidade de Código e Padronização
* **ESLint (`eslint-config-airbnb-base`):** Garante conformidade estrita com o padrão ES6+ sem bibliotecas desnecessárias, impedindo variáveis globais soltas e imports malformados.
* **Stylelint (`stylelint-config-standard`):** Valida boas práticas de CSS moderno, verificando aninhamento correto, compatibilidade de propriedades e organização de regras de mídia.

### 3.2. Operações de CDN e Invalidação de Cache
* **AEM Admin API (`https://admin.hlx.page`):** Interface RESTful que permite disparar purga de cache e status de indexação programaticamente via pipelines externos:
  * Preview: `POST https://admin.hlx.page/preview/{owner}/{repo}/{branch}/{path}`
  * Live (Produção): `POST https://admin.hlx.page/live/{owner}/{repo}/{branch}/{path}`
  * Indexação: `POST https://admin.hlx.page/index/{owner}/{repo}/{branch}/{path}`

### 3.3. Motor de Busca e Índices no Edge
* **Query Index Generator (`helix-query.yaml`):** Cria índices leves em formato JSON (`query-index.json`) gerados no Edge CDN a partir dos metadados das páginas, permitindo busca instantânea no portal (como a utilizada no componente `search-bar`).

### 3.4. Ferramental de Tipografia e Ativos
* **Subsetting e Conversão WOFF2:** Assegura que fontes pesadas (como a família Citrina e Inter) sejam servidas exclusivamente em formato `.woff2`, com cabeçalho de carregamento `font-display: swap`.
* **SVG Optimization (SVGO):** Higienização de ícones para eliminar metadados proprietários do Figma/Illustrator e viabilizar colorização contextual com `currentColor`.

---

## 4. Sequência Detalhada de Desenvolvimento Passo a Passo (Do Zero ao Deploy)

### Etapa 1: Setup Inicial e Conexão de Repositório

1. **Clonar ou Criar Repositório a partir do Boilerplate XWalk:**
   ```bash
   git clone https://github.com/adobe/aem-boilerplate-xwalk.git meu-projeto-eds
   cd meu-projeto-eds
   npm install
   ```

2. **Configurar o Ponto de Montagem (`fstab.yaml`):**
   O arquivo `fstab.yaml` conecta a raiz do site à pasta compartilhada na nuvem onde os autores criarão os documentos:
   ```yaml
   mountpoints:
     /: https://drive.google.com/drive/folders/1aBcDeFgHiJkLmNoPqRsTuVwXyZ
   ```
   *(Ou para Microsoft SharePoint: `https://<tenant>.sharepoint.com/sites/<site>/Shared%20Documents/<pasta>`)*

3. **Verificar Desafio de Segurança Cloud Manager:**
   O arquivo `.well-known/adobe/cloud-manager-challenge` deve existir na raiz com a chave fornecida pelo Adobe Experience Manager Cloud Service para validar a propriedade do domínio.

4. **Instalar a CLI e Rodar Localmente:**
   ```bash
   npm install -g @adobe/aem-cli
   aem up
   ```
   A aplicação será iniciada em `http://localhost:3000`. Toda alteração em arquivos `.js` ou `.css` recarrega o navegador em milissegundos.

---

### Etapa 2: Fundação Visual e Injeção de Design Tokens

1. **Definir Tokens Globais em `styles/styles.css`:**
   Mapeie as variáveis corporativas na pseudo-classe `:root`:
   ```css
   :root {
     /* Breakpoints Canônicos */
     --breakpoint-sm: 600px;
     --breakpoint-md: 905px;
     --breakpoint-lg: 1240px;
     --breakpoint-xl: 1440px;

     /* Paleta de Cores da Marca */
     --inter-orange: #EA7100;
     --inter-orange-hover: #D66300;
     --inter-sand: #FDF8EE;
     --inter-black: #161616;
     --inter-graphite: #3C3331;
     --inter-gray: #EBEBEB;
     --inter-white: #FFFFFF;

     /* Tipografia */
     --font-display: 'Citrina', Georgia, serif;
     --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

     /* Raios e Sombras */
     --radius-sm: 8px;
     --radius-md: 16px;
     --radius-lg: 24px;
     --radius-full: 9999px;
     --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
     --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.08);
   }
   ```

2. **Carregar Fontes Locais com WOFF2:**
   Aloque os arquivos de fonte em `styles/fonts/` e declare-os com `font-display: swap` para eliminar bloqueios de renderização (FOIT):
   ```css
   @font-face {
     font-family: 'Citrina';
     src: url('fonts/citrina.woff2') format('woff2');
     font-weight: 400;
     font-display: swap;
   }
   ```

3. **Configurar Tematização via Atributos de Metadados:**
   No `scripts/scripts.js`, leia os metadados da página para aplicar temas dinâmicos (ex: Pessoa Física vs Pessoa Jurídica):
   ```javascript
   const theme = getMetadata('theme') || 'pf-light';
   document.documentElement.setAttribute('toranja-theme', theme);
   ```

---

### Etapa 3: Arquitetura e Engenharia de Blocos (Blocks)

Cada componente do EDS é implementado como um bloco isolado dentro do diretório `blocks/`.

#### 3.1. Estrutura de Arquivos de um Bloco
```text
blocks/
└── meu-bloco/
    ├── meu-bloco.js    # Função de decodificação e interatividade
    └── meu-bloco.css   # Estilos escopados e responsivos
```

#### 3.2. Mecânica de Decodificação (`decorate`)
Quando o EDS processa o HTML gerado a partir de uma tabela do Google Docs/Word:
* O bloco é entregue como uma `<div>` com a classe do bloco (e classes de variantes).
* As linhas da tabela original viram `<div>` filhas imediatas.
* As colunas da tabela viram `<div>` netas.

**Exemplo de Implementação de Bloco Resiliente (`blocks/simulator/simulator.js`):**
```javascript
export default function decorate(block) {
  const rows = [...block.children];

  // Leitura defensiva de parâmetros da tabela
  const title = rows[0]?.textContent?.trim() || 'Título Padrão';
  const subtitle = rows[1]?.textContent?.trim() || 'Descrição Padrão';

  // Configuração numérica da 3ª linha
  let defVal = 10000;
  let min = 500;
  let max = 100000;
  let cdiRate = 0.1075;

  if (rows[2]) {
    const cols = [...rows[2].children];
    if (cols[0]) defVal = parseFloat(cols[0].textContent.replace(/[^\d.,]/g, '').replace(',', '.')) || defVal;
    if (cols[1]) min = parseFloat(cols[1].textContent.replace(/[^\d.,]/g, '').replace(',', '.')) || min;
    if (cols[2]) max = parseFloat(cols[2].textContent.replace(/[^\d.,]/g, '').replace(',', '.')) || max;
    if (cols[3]) cdiRate = (parseFloat(cols[3].textContent.replace(/[^\d.,]/g, '').replace(',', '.')) || 10.75) / 100;
  }

  // Criação do DOM enriquecido
  const container = document.createElement('div');
  container.className = 'toranja-simulator-inner';
  container.innerHTML = `
    <div class="sim-header">
      <h3 class="sim-title">${title}</h3>
      <p class="sim-subtitle">${subtitle}</p>
    </div>
    <div class="sim-controls">
      <div class="sim-val-row">
        <span>Valor Guardado:</span>
        <strong id="simDisplay">R$ ${defVal.toLocaleString('pt-BR')}</strong>
      </div>
      <input type="range" class="sim-slider" min="${min}" max="${max}" step="500" value="${defVal}" aria-label="Valor de simulação" />
    </div>
  `;

  // Limpa o conteúdo bruto e anexa o componente final
  block.textContent = '';
  block.append(container);

  // Vincula ouvintes de eventos reativos
  const slider = container.querySelector('.sim-slider');
  slider.addEventListener('input', (e) => {
    container.querySelector('#simDisplay').textContent = `R$ ${Number(e.target.value).toLocaleString('pt-BR')}`;
  });
}
```

#### 3.3. Boas Práticas na Engenharia de Blocos
* **Sem Frameworks Pesados:** Use manipulação nativa do DOM (`document.createElement`, `classList`, `addEventListener`).
* **Suporte a Variantes por Classe:** Leia modificadores de estilo direto da lista de classes do bloco:
  ```javascript
  const portalVariant = ['arch', 'pill', 'asymmetric', 'rounded'].find((v) => block.classList.contains(v)) || 'asymmetric';
  portal.className = `portal-frame ${portalVariant}`;
  ```
* **Imagens Responsivas:** Preserve os elementos `<picture>` gerados pelo AEM, aproveitando a otimização de imagens em WebP/AVIF na borda.

---

### Etapa 4: Modelagem para o Universal Editor (XWalk)

Para permitir que editores alterem propriedades via interface visual do Adobe Universal Editor sem editar o documento bruto, configure a tríade de arquivos JSON na raiz:

#### 1. `component-models.json` (Campos e Tipos Editáveis)
Declara os campos que aparecem no painel lateral de propriedades do Universal Editor:
```json
[
  {
    "id": "hero",
    "fields": [
      {
        "component": "text",
        "name": "eyebrow",
        "label": "Chapéu / Eyebrow"
      },
      {
        "component": "text",
        "name": "headline",
        "label": "Título Principal (Citrina)"
      },
      {
        "component": "richtext",
        "name": "description",
        "label": "Descrição / Subtítulo"
      },
      {
        "component": "reference",
        "name": "image",
        "label": "Fotografia do Portal Visual"
      },
      {
        "component": "select",
        "name": "portalVariant",
        "label": "Formato do Portal Visual",
        "options": [
          { "name": "Assimétrico (Padrão)", "value": "asymmetric" },
          { "name": "Arco Clássico (Arch)", "value": "arch" },
          { "name": "Pílula Horizontal (Pill)", "value": "pill" }
        ]
      }
    ]
  }
]
```

#### 2. `component-definition.json` (Registro de Componentes)
Mapeia o componente para o recurso AEM XWalk correspondente:
```json
[
  {
    "title": "Toranja: Hero",
    "id": "hero",
    "plugins": {
      "xwalk": {
        "page": {
          "resourceType": "core/franklin/components/block/v1/block",
          "template": {
            "name": "Hero",
            "model": "hero"
          }
        }
      }
    }
  }
]
```

#### 3. `component-filters.json` (Zonas de Inserção)
Define onde cada bloco pode ser inserido (corpo da página, seções, cabeçalho ou rodapé):
```json
[
  {
    "id": "main",
    "components": ["hero", "cards", "simulator", "accordion", "cta-banner", "tabs"]
  },
  {
    "id": "header",
    "components": ["header", "breadcrumb"]
  },
  {
    "id": "footer",
    "components": ["footer"]
  }
]
```

---

### Etapa 5: Documentação de Autoria e Sidekick Library

1. **Guia de Autoria (`authoring-guide.md`):**
   * Deve conter a sintaxe exata das tabelas Markdown/Docs para cada um dos blocos.
   * Redatores não devem adivinhar nomes de colunas ou formatos de imagem.
   * Documente todas as classes modificadoras entre parênteses: `| Hero (light, arch) |`, `| Cards (metallic) |`, `| Accordion (multi-open) |`.

2. **Sidekick Library (`tools/sidekick/library/plugins/blocks/blocks.json`):**
   Permite que autores copiem e colem blocos prontos com design pré-formatado diretamente do painel lateral do AEM Sidekick.

---

### Etapa 6: Pipeline de Deploy e Ambientes (Local, Preview, Live)

No AEM Edge Delivery Services, o fluxo de ambientes opera com três camadas bem delimitadas:

```text
[Desenvolvedor]                [Redator / Conteúdo]
       │                                │
  git push main                Google Docs / Word
       │                                │
       ▼                                ▼
[GitHub Repo]                     [AEM Sidekick]
       │                                │
       ├──────────────► [Preview] ◄─────┤ (Botão Preview)
       │          *.aem.page / *.hlx.page
       │                                │
       └──────────────►  [Live]   ◄─────┘ (Botão Publish)
                  *.aem.live / *.hlx.live (Produção)
```

1. **Deploy de Código (JS / CSS / JSONs):**
   * Basta fazer `git commit` e `git push` para a branch `main`.
   * O Edge CDN do EDS sincroniza o repositório em menos de 10 segundos.
   * **Não há build step.** Se o JS for ES Module válido e o CSS estiver correto, ele já estará em execução.

2. **Deploy de Conteúdo:**
   * O redator altera o documento na nuvem e clica em **Preview** no Sidekick.
   * O documento é convertido instantaneamente e exibido na URL de teste (`https://main--<repo>--<owner>.aem.page/<pagina>`).
   * Após revisão e validação pelo time de qualidade, o redator clica em **Publish**, promovendo a página para a URL de produção (`https://main--<repo>--<owner>.aem.live/<pagina>`).

---

### Etapa 7: Validação de Performance, Core Web Vitals e RUM

A meta técnica inegociável de qualquer projeto AEM EDS é **100/100 no Lighthouse**:

1. **Largest Contentful Paint (LCP < 2.5s):**
   * Carregamento da imagem do Hero com prioridade alta (`eager`):
     ```javascript
     // No scripts.js / aem.js
     createOptimizedPicture(src, alt, true); // true = eager loading
     ```
   * Nunca utilize lazy-loading na imagem principal da primeira dobra.

2. **Cumulative Layout Shift (CLS = 0):**
   * Imagens com proporção explícita (`aspect-ratio` no CSS).
   * Sem elementos que surgem abruptamente empurrando o conteúdo para baixo.
   * Dimensões de fontes correspondentes via fallback de métricas para evitar FOUT (*Flash of Unstyled Text*).

3. **Interaction to Next Paint (INP < 200ms):**
   * Ouvintes de eventos leves (`passive: true` para eventos de scroll).
   * Lógica pesada diferida (*debounced*) em buscas e simuladores.

4. **Telemetria RUM (Real User Monitoring):**
   * Ativada nativamente no `scripts/aem.js` via função `sampleRUM`.
   * Coleta métricas de performance reais dos visitantes sem utilizar cookies de rastreamento invasivos, mantendo total conformidade com a LGPD e o GDPR.

---

### Etapa 8: Ciclo de Ajustes Contínuos, Troubleshooting e Governança

Ao realizar manutenções ou adicionar novas variantes em blocos já existentes:

1. **Garantir Retrocompatibilidade (*Backward Compatibility*):**
   * Nunca altere a assinatura de colunas de um bloco sem fornecer um valor padrão (*fallback*).
   * Se um autor preencheu uma tabela com 2 colunas no passado e o bloco novo aceita 4 colunas, o código do bloco deve verificar `cols.length` e tratar ausências sem quebrar a execução da página:
     ```javascript
     const subtitle = cols[1] ? cols[1].textContent.trim() : '';
     ```

2. **Ajustes de Modelo no Universal Editor:**
   * Qualquer nova propriedade requer atualização em `component-models.json`.
   * Para visualizar os novos campos na interface de edição, execute um **Hard Refresh** (`Cmd + Shift + R`) na URL do Universal Editor para descartar o cache de esquema do navegador.

3. **Invalidação Forçada de Cache de Borda (Purge):**
   * Se um arquivo JS/CSS não atualizar imediatamente no CDN de produção, dispare a purga via Admin API no terminal:
     ```bash
     curl -X POST "https://admin.hlx.page/live/<owner>/<repo>/main/<caminho-da-pagina>"
     ```

---

## 5. Matriz de Resolução de Problemas (Troubleshooting Runbook)

| Sintoma Observado | Causa Mais Provável | Procedimento de Resolução Imediata |
|---|---|---|
| **O bloco aparece como tabela bruta não estilizada** | Erro de digitação no nome da pasta/arquivo (`blocks/nome/nome.js`) ou falha de sintaxe JS no arquivo do bloco. | 1. Abra o DevTools (Console) e verifique se há erros 404 ao buscar o `.js` ou erro de sintaxe.<br>2. Verifique se o nome na primeira linha da tabela no documento corresponde exatamente ao nome da pasta do bloco em minúsculas (kebab-case). |
| **Estilos novos não aparecem após git push** | Cache local do navegador ou cache intermediário do Edge CDN retendo a versão antiga do CSS. | 1. Execute **Hard Refresh** no navegador (`Cmd + Shift + R` no Mac ou `Ctrl + F5` no Windows).<br>2. Abra uma janela anônima para testar a resposta pura do CDN. |
| **Universal Editor não exibe novos campos** | Inconsistência de sintaxe ou campo faltante no arquivo `component-models.json`. | 1. Valide o JSON com linter (`python3 -m json.tool component-models.json`).<br>2. Verifique se o `id` do modelo corresponde exatamente ao `model` declarado em `component-definition.json`. |
| **Queda na pontuação de LCP (< 90 no Lighthouse)** | Imagem da dobra de abertura (Hero) sendo carregada com `loading="lazy"`. | Certifique-se de que a primeira imagem da página seja criada com `eager=true` na função `createOptimizedPicture` e que fontes WOFF2 possuam `font-display: swap`. |
| **Erro 404 em fragmentos `/nav.plain.html` ou `/footer.plain.html`** | Documentos `/nav` ou `/footer` não foram publicados via Sidekick no ambiente atual. | Abra o documento `nav` e `footer` no Google Docs / SharePoint e clique no botão **Publish** do AEM Sidekick. |

---

## 6. Checklist de Homologação (Definition of Done)

Antes de considerar qualquer novo bloco ou ajuste concluído em ambiente de produção:

- [ ] O bloco possui os arquivos `.js` e `.css` correspondentes sob `blocks/<nome>/`.
- [ ] O bloco possui tratamento defensivo para colunas ou dados ausentes sem lançar exceções não tratadas no console.
- [ ] O bloco adapta-se perfeitamente aos breakpoints oficiais Toranja (393px, 600px, 905px, 1240px, 1440px).
- [ ] O modelo do bloco foi cadastrado em `component-models.json` com rótulos amigáveis em português e tipos adequados.
- [ ] O bloco foi registrado em `component-definition.json` e liberado no container apropriado em `component-filters.json`.
- [ ] A tabela de exemplo e variantes do bloco foram documentadas no `authoring-guide.md`.
- [ ] A página atinge pontuação **98 a 100** em Performance, Acessibilidade e Melhores Práticas no Google Lighthouse.
- [ ] As fontes utilizadas utilizam exclusivamente o formato WOFF2 com `font-display: swap`.
