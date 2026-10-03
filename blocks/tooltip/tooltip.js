/**
 * Bloco: Tooltip (Dicas de Contexto e Glossário Financeiro Acessível)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'toranja-tooltip-container';

  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 2) {
      const term = cols[0].textContent.trim();
      const definition = cols[1].textContent.trim();

      const item = document.createElement('span');
      item.className = 'toranja-tooltip-trigger';
      item.setAttribute('tabindex', '0');
      item.innerHTML = `
        <span class="tooltip-term">${term}</span>
        <span class="tooltip-badge">?</span>
        <span class="toranja-tooltip-popup" role="tooltip">${definition}</span>
      `;
      container.append(item);
    }
  });

  block.textContent = '';
  block.append(container);
}
