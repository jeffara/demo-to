/**
 * Bloco: Contact Channels (Canais de Atendimento & Ouvidoria BACEN)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const grid = document.createElement('div');
  grid.className = 'toranja-contacts-grid';

  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 2) {
      const channel = cols[0].textContent.trim();
      const info = cols[1].innerHTML;
      const hours = cols.length > 2 ? cols[2].textContent.trim() : '';

      const card = document.createElement('div');
      card.className = 'toranja-contact-card';
      card.innerHTML = `
        <div class="contact-header">
          <span class="contact-badge">Oficial</span>
          <h3 class="contact-name">${channel}</h3>
        </div>
        <div class="contact-info">${info}</div>
        ${hours ? `<div class="contact-hours">${hours}</div>` : ''}
      `;
      grid.append(card);
    }
  });

  block.textContent = '';
  block.append(grid);
}
