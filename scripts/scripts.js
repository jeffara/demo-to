import {
  sampleRUM,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  loadBlock,
  loadBlocks,
  loadCSS,
  getMetadata,
} from './aem.js';

/**
 * Mapa Canônico de Classificação Atômica do Design System Toranja
 * Categoriza cada componente como Átomo, Molécula ou Organismo
 */
const COMPONENT_ATOMIC_MAP = {
  // Átomos (elementos indivisíveis de interface)
  tooltip: { type: 'Átomo', title: 'Glossário & Dica Flutuante', classSuffix: 'is-atomo' },

  // Moléculas (composição de átomos funcionais)
  banner: { type: 'Molécula', title: 'Aviso Promocional / Alerta', classSuffix: 'is-molecula' },
  breadcrumb: { type: 'Molécula', title: 'Trilha de Navegação & SEO', classSuffix: 'is-molecula' },
  'search-bar': { type: 'Molécula', title: 'Busca Instantânea no Portal', classSuffix: 'is-molecula' },
  'alert-inline': { type: 'Molécula', title: 'Aviso Contextual de Segurança', classSuffix: 'is-molecula' },
  'quick-moment-rail': { type: 'Molécula', title: 'Trilho de Navegação Rápida', classSuffix: 'is-molecula' },
  'stats-counter': { type: 'Molécula', title: 'Métricas de Impacto com Contagem', classSuffix: 'is-molecula' },
  'in-page-nav': { type: 'Molécula', title: 'Sumário de Âncoras & Scroll Spy', classSuffix: 'is-molecula' },
  pagination: { type: 'Molécula', title: 'Paginação de Notícias & RI', classSuffix: 'is-molecula' },
  accordion: { type: 'Molécula', title: 'Gavetas Expansíveis para FAQ', classSuffix: 'is-molecula' },
  tabs: { type: 'Molécula', title: 'Navegação Horizontal por Abas', classSuffix: 'is-molecula' },

  // Organismos (seções completas de experiência e conversão)
  header: { type: 'Organismo', title: 'Cabeçalho Institucional & Drawer', classSuffix: 'is-organismo' },
  footer: { type: 'Organismo', title: 'Rodapé Regulatório BACEN/FDIC/NASDAQ', classSuffix: 'is-organismo' },
  hero: { type: 'Organismo', title: 'Palco Principal com Portal Assimétrico', classSuffix: 'is-organismo' },
  cards: { type: 'Organismo', title: 'Ecossistema 360° & Badges Semânticas', classSuffix: 'is-organismo' },
  carousel: { type: 'Organismo', title: 'Vitrines Deslizantes com Swipe', classSuffix: 'is-organismo' },
  'comparison-table': { type: 'Organismo', title: 'Tabela Comparativa de Tarifas', classSuffix: 'is-organismo' },
  simulator: { type: 'Organismo', title: 'Calculadora Reativa a 102% CDI', classSuffix: 'is-organismo' },
  'video-player': { type: 'Organismo', title: 'Vídeo Institucional com Portal Arch', classSuffix: 'is-organismo' },
  flywheel: { type: 'Organismo', title: 'Ciclo Virtuoso Inter Loop', classSuffix: 'is-organismo' },
  timeline: { type: 'Organismo', title: 'Passo a Passo com Nós Numerados', classSuffix: 'is-organismo' },
  testimonials: { type: 'Organismo', title: 'Prova Social & Depoimentos 5 Estrelas', classSuffix: 'is-organismo' },
  'contact-channels': { type: 'Organismo', title: 'Canais Oficiais BACEN & Ouvidoria', classSuffix: 'is-organismo' },
  'app-download': { type: 'Organismo', title: 'Conversão Mobile com QR Code', classSuffix: 'is-organismo' },
  'cta-banner': { type: 'Organismo', title: 'Fechamento de Alta Conversão', classSuffix: 'is-organismo' },
  manifesto: { type: 'Organismo', title: 'Manifesto com Citrina Light', classSuffix: 'is-organismo' },
  'moments-journey': { type: 'Organismo', title: 'Scrollytelling com Portais', classSuffix: 'is-organismo' },
  'segment-showcase': { type: 'Organismo', title: 'Showcase dos 4 Segmentos (Digital a Win)', classSuffix: 'is-organismo' },
  teaser: { type: 'Organismo', title: 'Dobra Bilateral com Portal Pílula', classSuffix: 'is-organismo' },
  form: { type: 'Organismo', title: 'Formulário de Contato CRM / Salesforce', classSuffix: 'is-organismo' },
  modal: { type: 'Organismo', title: 'Diálogo Acessível Regulatório', classSuffix: 'is-organismo' },
};

/**
 * Injeta badges de identificação e classificação atômica acima de cada componente
 */
function decorateComponentSpecBadges(main) {
  main.querySelectorAll('div.block').forEach((block) => {
    const blockName = block.dataset.blockName || block.classList[0];
    const info = COMPONENT_ATOMIC_MAP[blockName] || { type: 'Componente', title: blockName, classSuffix: 'is-molecula' };

    const wrapper = block.parentElement;
    if (wrapper && !wrapper.querySelector('.component-spec-badge-wrapper')) {
      const badgeContainer = document.createElement('div');
      badgeContainer.className = 'component-spec-badge-wrapper';
      badgeContainer.innerHTML = `
        <span class="component-spec-badge ${info.classSuffix}">
          <span class="badge-type">${info.type}</span>
          <span class="badge-name">${blockName}</span>
          <span class="badge-title">· ${info.title}</span>
        </span>
      `;
      wrapper.prepend(badgeContainer);
    }
  });
}

/**
 * Configura o ambiente oficial do Design System Toranja
 */
function initToranjaEnvironment() {
  const html = document.documentElement;
  const theme = getMetadata('toranja-theme') || getMetadata('theme') || 'pf-light';
  const surface = getMetadata('toranja-surface') || getMetadata('surface') || 'desktop';

  html.setAttribute('toranja-theme', theme);
  html.setAttribute('toranja-surface', surface);

  const fontPreconnect1 = document.createElement('link');
  fontPreconnect1.rel = 'preconnect';
  fontPreconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(fontPreconnect1);

  const fontPreconnect2 = document.createElement('link');
  fontPreconnect2.rel = 'preconnect';
  fontPreconnect2.href = 'https://fonts.gstatic.com';
  fontPreconnect2.crossOrigin = 'anonymous';
  document.head.appendChild(fontPreconnect2);

  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=Sora:wght@400..600&family=Roboto+Mono:wght@400;700&display=swap';
  document.head.appendChild(fontLink);
}

/**
 * Decorates Toranja Badges and Tokens (Non-destructive)
 */
function decorateToranjaTokens(main) {
  main.querySelectorAll('p, span').forEach((el) => {
    if (el.children.length === 0 && el.textContent.includes('[tag-')) {
      el.innerHTML = el.innerHTML.replace(/\[tag-(orange|blue|green|dark|win):([^\]]+)\]/g, '<span class="tag tag-$1">$2</span>');
    }
  });

  main.querySelectorAll('p.eyebrow, span.eyebrow').forEach((eyebrow) => {
    eyebrow.classList.add('eyebrow');
  });
}

/**
 * Garante decoração de botões Toranja
 */
function decorateToranjaButtons(main) {
  main.querySelectorAll('a').forEach((a) => {
    if (!a.querySelector('img')) {
      const up = a.parentElement;
      if (up && up.tagName === 'STRONG') {
        a.className = 'button primary';
      } else if (up && up.tagName === 'EM') {
        a.className = 'button secondary';
      }
    }
  });
}

/**
 * Builds synthetic blocks if needed
 */
function buildAutoBlocks(main) {
  try {
    // Auto blocking if needed
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 */
export function decorateMain(main) {
  decorateButtons(main);
  decorateToranjaButtons(main);
  decorateIcons(main);
  decorateToranjaTokens(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
  decorateComponentSpecBadges(main);
}

/**
 * Loads header block com badge de especificação.
 */
async function loadHeader(header) {
  const badgeContainer = document.createElement('div');
  badgeContainer.className = 'component-spec-badge-wrapper';
  badgeContainer.style.background = 'var(--theme-surface-subtle)';
  badgeContainer.style.padding = '6px 0';
  badgeContainer.style.margin = '0';
  badgeContainer.innerHTML = `
    <span class="component-spec-badge is-organismo">
      <span class="badge-type">Organismo</span>
      <span class="badge-name">header</span>
      <span class="badge-title">· Cabeçalho Institucional & Mobile Drawer</span>
    </span>
  `;
  header.prepend(badgeContainer);

  const headerBlock = document.createElement('div');
  headerBlock.classList.add('header', 'block');
  headerBlock.dataset.blockName = 'header';
  headerBlock.dataset.blockStatus = 'initialized';
  header.append(headerBlock);
  await loadBlock(headerBlock);
}

/**
 * Loads footer block com badge de especificação.
 */
async function loadFooter(footer) {
  const badgeContainer = document.createElement('div');
  badgeContainer.className = 'component-spec-badge-wrapper';
  badgeContainer.style.padding = '16px 0 0 0';
  badgeContainer.innerHTML = `
    <span class="component-spec-badge is-organismo">
      <span class="badge-type">Organismo</span>
      <span class="badge-name">footer</span>
      <span class="badge-title">· Rodapé Institucional Regulatório com Selos BACEN/FDIC</span>
    </span>
  `;
  footer.prepend(badgeContainer);

  const footerBlock = document.createElement('div');
  footerBlock.classList.add('footer', 'block');
  footerBlock.dataset.blockName = 'footer';
  footerBlock.dataset.blockStatus = 'initialized';
  footer.append(footerBlock);
  await loadBlock(footerBlock);
}

/**
 * Loads page lifecycle.
 */
async function loadPage() {
  initToranjaEnvironment();

  const main = document.querySelector('main');
  if (main) {
    decorateMain(main);
    await loadBlocks(main);
  }

  const header = document.querySelector('header');
  if (header) {
    await loadHeader(header);
  }

  const footer = document.querySelector('footer');
  if (footer) {
    await loadFooter(footer);
  }

  loadCSS('/styles/styles.css');
  sampleRUM('lazy');
}

loadPage();
