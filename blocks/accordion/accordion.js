/**
 * Bloco: Accordion (Gavetas Expansíveis para FAQ e Termos)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const isMultiOpen = block.classList.contains('multi-open');
  const groupName = `toranja-accordion-${Math.random().toString(36).substring(2, 9)}`;

  const items = [...block.children];
  const list = document.createElement('div');
  list.className = 'accordion-list';

  items.forEach((item) => {
    const cols = [...item.children];
    const questionText = cols[0] ? cols[0].textContent.trim() : '';
    const answerContent = cols[1] ? cols[1].innerHTML : '';

    const detail = document.createElement('details');
    detail.className = 'accordion-item';
    if (!isMultiOpen) {
      detail.name = groupName;
    }

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

    // Fallback para fechar outros se single-open em navegadores mais antigos
    if (!isMultiOpen) {
      detail.addEventListener('toggle', () => {
        if (detail.open) {
          list.querySelectorAll('details.accordion-item').forEach((other) => {
            if (other !== detail && other.open) {
              other.removeAttribute('open');
            }
          });
        }
      });
    }

    list.append(detail);
  });

  block.innerHTML = '';
  block.append(list);
}
