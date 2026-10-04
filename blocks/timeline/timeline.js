/**
 * Bloco: Timeline (Passo a Passo e Linha do Tempo)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const isHorizontal = block.classList.contains('horizontal');
  const track = document.createElement('div');
  track.className = `toranja-timeline-track ${isHorizontal ? 'horizontal' : 'vertical'}`;

  const rows = [...block.children];
  rows.forEach((row, idx) => {
    const cols = [...row.children];
    const stepNumber = String(idx + 1).padStart(2, '0');
    let title = '';
    let desc = '';

    if (cols.length >= 2) {
      title = cols[0].textContent.trim();
      desc = cols[1].innerHTML;
    } else if (cols.length === 1) {
      const h3 = cols[0].querySelector('h3, h4, strong');
      title = h3 ? h3.textContent.trim() : `Etapa ${idx + 1}`;
      desc = cols[0].innerHTML;
    }

    const item = document.createElement('div');
    item.className = 'toranja-timeline-item';
    item.innerHTML = `
      <div class="timeline-node">
        <span class="timeline-number">${stepNumber}</span>
      </div>
      <div class="timeline-content">
        <h3 class="timeline-step-title">${title}</h3>
        <div class="timeline-step-desc">${desc}</div>
      </div>
    `;
    track.append(item);
  });

  block.textContent = '';
  block.append(track);
}
