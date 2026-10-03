export default function decorate(block) {
  const items = [...block.children];
  const list = document.createElement('div');
  list.className = 'accordion-list';

  items.forEach((item, idx) => {
    const cols = [...item.children];
    const questionText = cols[0] ? cols[0].textContent.trim() : '';
    const answerContent = cols[1] ? cols[1].innerHTML : '';

    const detail = document.createElement('details');
    detail.className = 'accordion-item';

    const summary = document.createElement('summary');
    summary.className = 'accordion-summary';
    summary.innerHTML = `
      <span class="accordion-title">${questionText}</span>
      <span class="accordion-icon" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    `;

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.innerHTML = answerContent;

    detail.append(summary, body);
    list.append(detail);
  });

  block.innerHTML = '';
  block.append(list);
}
