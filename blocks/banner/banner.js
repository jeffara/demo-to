export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;

  const cols = [...row.children];
  const bannerWrapper = document.createElement('div');
  bannerWrapper.className = 'toranja-banner-container';

  let iconCol = null;
  let textCol = null;
  let actionCol = null;

  if (cols.length === 3) {
    [iconCol, textCol, actionCol] = cols;
  } else if (cols.length === 2) {
    [textCol, actionCol] = cols;
  } else {
    [textCol] = cols;
  }

  // Icon / Graphic slot
  const iconDiv = document.createElement('div');
  iconDiv.className = 'toranja-banner-icon';
  if (iconCol && iconCol.querySelector('img, svg, picture, .icon')) {
    iconDiv.append(...iconCol.childNodes);
  } else {
    // Default info icon
    iconDiv.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>';
  }
  bannerWrapper.appendChild(iconDiv);

  // Content slot
  const contentDiv = document.createElement('div');
  contentDiv.className = 'toranja-banner-content';
  if (textCol) {
    contentDiv.innerHTML = textCol.innerHTML;
  }
  bannerWrapper.appendChild(contentDiv);

  // Action / CTA slot
  if (actionCol && actionCol.textContent.trim()) {
    const actionDiv = document.createElement('div');
    actionDiv.className = 'toranja-banner-action';
    actionDiv.innerHTML = actionCol.innerHTML;
    // ensure button styling
    const link = actionDiv.querySelector('a');
    if (link && !link.classList.contains('button')) {
      link.classList.add('button', 'secondary');
    }
    bannerWrapper.appendChild(actionDiv);
  }

  // Dismiss / Close button
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.className = 'toranja-banner-close';
  closeBtn.setAttribute('aria-label', 'Fechar aviso');
  closeBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
  closeBtn.addEventListener('click', () => {
    block.style.opacity = '0';
    block.style.transform = 'translateY(-8px)';
    setTimeout(() => block.remove(), 250);
  });
  bannerWrapper.appendChild(closeBtn);

  block.textContent = '';
  block.appendChild(bannerWrapper);
}
