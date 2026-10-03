export default function decorate(block) {
  const rows = [...block.children];
  const dialog = document.createElement('dialog');
  dialog.className = 'toranja-dialog';

  let modalId = 'default-modal';
  let contentHtml = '';

  rows.forEach((row, idx) => {
    if (idx === 0 && row.textContent.includes('modal-id:')) {
      modalId = row.textContent.replace('modal-id:', '').trim();
    } else {
      contentHtml += row.innerHTML;
    }
  });

  dialog.id = modalId;
  dialog.innerHTML = `
    <div class="dialog-header">
      <div class="dialog-brand-badge">Inter Informa</div>
      <button class="dialog-close-btn" aria-label="Fechar modal">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <div class="dialog-content">
      ${contentHtml}
    </div>
  `;

  block.innerHTML = '';
  block.append(dialog);

  // Close handlers
  const closeBtn = dialog.querySelector('.dialog-close-btn');
  closeBtn.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) dialog.close();
  });

  // Global trigger listener for any link pointing to #modalId or data-modal-open
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest(`a[href="#${modalId}"], [data-modal-open="${modalId}"]`);
    if (trigger) {
      e.preventDefault();
      dialog.showModal();
    }
  });
}
