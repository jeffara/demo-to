import {
  sampleRUM,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  loadBlocks,
  loadCSS,
  getMetadata,
} from './aem.js';

/**
 * Configura o ambiente oficial do Design System Toranja
 * Define toranja-theme e toranja-surface no elemento <html> conforme o Getting Started
 */
function initToranjaEnvironment() {
  const html = document.documentElement;
  const theme = getMetadata('toranja-theme') || getMetadata('theme') || 'pf-light';
  const surface = getMetadata('toranja-surface') || getMetadata('surface') || 'desktop';

  html.setAttribute('toranja-theme', theme);
  html.setAttribute('toranja-surface', surface);

  // Carrega fontes oficiais do Toranja recomendadas no Getting Started
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
 * Decorates Toranja Badges and Eyebrows
 */
function decorateToranjaTokens(main) {
  // Convert standard strong/em tags with [tag-*] syntax to Toranja badges
  main.querySelectorAll('p, div, span').forEach((el) => {
    if (el.textContent.includes('[tag-')) {
      el.innerHTML = el.innerHTML.replace(/\[tag-(orange|blue|green|dark|win):([^\]]+)\]/g, '<span class="tag tag-$1">$2</span>');
    }
  });

  // Decorate eyebrow classes if specified
  main.querySelectorAll('p.eyebrow, span.eyebrow').forEach((eyebrow) => {
    eyebrow.classList.add('eyebrow');
  });
}

/**
 * Builds synthetic blocks if needed
 */
function buildAutoBlocks(main) {
  try {
    // If there is an h1 with no hero block in section 1, we can leave as default content
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
  decorateIcons(main);
  decorateToranjaTokens(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads header block.
 */
async function loadHeader(header) {
  const headerBlock = document.createElement('div');
  headerBlock.classList.add('header');
  header.append(headerBlock);
  decorateBlocks(header);
  await loadBlocks(header);
}

/**
 * Loads footer block.
 */
async function loadFooter(footer) {
  const footerBlock = document.createElement('div');
  footerBlock.classList.add('footer');
  footer.append(footerBlock);
  decorateBlocks(footer);
  await loadBlocks(footer);
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
