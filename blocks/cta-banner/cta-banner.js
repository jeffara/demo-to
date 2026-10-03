export default function decorate(block) {
  const rows = [...block.children];
  const container = document.createElement('div');
  container.className = 'cta-banner-inner container';

  let titleHtml = '';
  let descHtml = '';
  let actionsRow = null;

  rows.forEach((row) => {
    const h = row.querySelector('h1, h2, h3');
    if (h) {
      h.classList.add('cta-banner-title');
      titleHtml = row.innerHTML;
    } else if (row.querySelector('.button-container, a.button')) {
      actionsRow = row;
    } else if (row.textContent.trim()) {
      descHtml += `<p class="cta-banner-desc">${row.innerHTML}</p>`;
    }
  });

  container.innerHTML = `
    <div class="cta-banner-content">
      ${titleHtml}
      ${descHtml}
      <div class="cta-banner-actions"></div>
    </div>
  `;

  if (actionsRow) {
    const actionsBox = container.querySelector('.cta-banner-actions');
    actionsRow.querySelectorAll('.button-container, a.button').forEach((btn) => {
      actionsBox.append(btn);
    });
  }

  block.innerHTML = '';
  block.append(container);
}
