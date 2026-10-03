/**
 * Bloco: Stats Counter (Métricas & Indicadores de Credibilidade)
 * Toranja Design System - Banco Inter
 * Realiza contagem animada via IntersectionObserver para impacto visual.
 */
export default function decorate(block) {
  const grid = document.createElement('div');
  grid.className = 'toranja-stats-grid';

  const rows = [...block.children];
  rows.forEach((row) => {
    const cols = [...row.children];
    if (cols.length >= 2) {
      const valueText = cols[0].textContent.trim();
      const labelText = cols[1].innerHTML;

      const card = document.createElement('div');
      card.className = 'toranja-stat-card';

      card.innerHTML = `
        <div class="stat-number" data-target="${valueText}">${valueText}</div>
        <div class="stat-label">${labelText}</div>
      `;
      grid.append(card);
    }
  });

  block.textContent = '';
  block.append(grid);

  // Animação de contagem ao rolar a página
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  block.querySelectorAll('.toranja-stat-card').forEach((card) => observer.observe(card));
}
