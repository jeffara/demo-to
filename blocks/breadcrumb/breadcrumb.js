/**
 * Bloco: Breadcrumb (Trilha de Navegação)
 * Toranja Design System - Banco Inter
 * Suporta geração dinâmica automática baseada na URL atual e fallback para tabela de autoria.
 * Injeta microdados semânticos schema.org/BreadcrumbList para SEO no Google.
 */
export default async function decorate(block) {
  const customItems = [];
  // Verifica se o autor passou itens manuais na tabela
  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 2) {
      const label = cols[0].textContent.trim();
      const link = cols[1].querySelector('a') ? cols[1].querySelector('a').getAttribute('href') : cols[1].textContent.trim();
      if (label) customItems.push({ label, url: link || null });
    } else if (cols.length === 1) {
      const a = cols[0].querySelector('a');
      if (a) {
        customItems.push({ label: a.textContent.trim(), url: a.getAttribute('href') });
      } else {
        const text = cols[0].textContent.trim();
        if (text) customItems.push({ label: text, url: null });
      }
    }
  });

  let items = [];

  if (customItems.length > 0) {
    items = customItems;
  } else {
    // Geração dinâmica com base em window.location.pathname
    items.push({ label: 'Início', url: '/' });
    const segments = window.location.pathname.split('/').filter(Boolean);
    let accumPath = '';

    segments.forEach((seg, idx) => {
      accumPath += `/${seg}`;
      const isLast = idx === segments.length - 1;
      // Formata slug para visual amigável (ex: conta-pj -> Conta PJ)
      const formattedLabel = seg
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(/\b(Pj|Pf|Mei|Cdi|Cdb|Ted|Pix|Ted|Eua|Ted|Usd|Ted)\b/gi, (m) => m.toUpperCase());

      items.push({
        label: formattedLabel,
        url: isLast ? null : accumPath,
      });
    });
  }

  // Cria estrutura HTML acessível
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Trilha de Navegação (Breadcrumb)');
  nav.className = 'toranja-breadcrumb-nav';

  const ol = document.createElement('ol');
  ol.className = 'toranja-breadcrumb-list';
  ol.setAttribute('itemscope', '');
  ol.setAttribute('itemtype', 'https://schema.org/BreadcrumbList');

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'toranja-breadcrumb-item';
    li.setAttribute('itemprop', 'itemListElement');
    li.setAttribute('itemscope', '');
    li.setAttribute('itemtype', 'https://schema.org/ListItem');

    const isLast = index === items.length - 1;

    if (!isLast && item.url) {
      const a = document.createElement('a');
      a.className = 'toranja-breadcrumb-link';
      a.href = item.url;
      a.setAttribute('itemprop', 'item');

      const span = document.createElement('span');
      span.setAttribute('itemprop', 'name');
      span.textContent = item.label;
      a.append(span);

      li.append(a);
    } else {
      const span = document.createElement('span');
      span.className = 'toranja-breadcrumb-current';
      span.setAttribute('aria-current', 'page');
      span.setAttribute('itemprop', 'name');
      span.textContent = item.label;
      li.append(span);
    }

    const metaPos = document.createElement('meta');
    metaPos.setAttribute('itemprop', 'position');
    metaPos.content = String(index + 1);
    li.append(metaPos);

    if (!isLast) {
      const separator = document.createElement('span');
      separator.className = 'toranja-breadcrumb-separator';
      separator.setAttribute('aria-hidden', 'true');
      separator.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
      li.append(separator);
    }

    ol.append(li);
  });

  nav.append(ol);
  block.textContent = '';
  block.append(nav);
}
