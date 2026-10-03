/**
 * Bloco: In-Page Navigation (Table of Contents / Âncoras da Página)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const nav = document.createElement('nav');
  nav.className = 'toranja-in-page-nav';
  nav.setAttribute('aria-label', 'Sumário de seções');

  const linksContainer = document.createElement('div');
  linksContainer.className = 'in-page-nav-links';

  // Se o autor informou links manuais
  const manualLinks = block.querySelectorAll('a');
  if (manualLinks.length > 0) {
    manualLinks.forEach((a) => {
      const link = document.createElement('a');
      link.href = a.getAttribute('href');
      link.className = 'in-page-nav-item';
      link.textContent = a.textContent.trim();
      linksContainer.append(link);
    });
  } else {
    // Auto-descoberta dos h2 presentes na página
    const headings = document.querySelectorAll('main h2');
    headings.forEach((h2, idx) => {
      let id = h2.id;
      if (!id) {
        id = `secao-${idx + 1}`;
        h2.id = id;
      }
      const link = document.createElement('a');
      link.href = `#${id}`;
      link.className = 'in-page-nav-item';
      link.textContent = h2.textContent.trim();
      linksContainer.append(link);
    });
  }

  nav.append(linksContainer);
  block.textContent = '';
  block.append(nav);

  // Scroll spy ativo
  const navItems = linksContainer.querySelectorAll('.in-page-nav-item');
  window.addEventListener('scroll', () => {
    let currentId = '';
    document.querySelectorAll('main h2').forEach((h2) => {
      const rect = h2.getBoundingClientRect();
      if (rect.top <= 140) currentId = `#${h2.id}`;
    });
    navItems.forEach((item) => {
      item.classList.toggle('active', item.getAttribute('href') === currentId);
    });
  }, { passive: true });
}
