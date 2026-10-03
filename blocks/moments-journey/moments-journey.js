export default function decorate(block) {
  const rows = [...block.children];
  const grid = document.createElement('div');
  grid.className = 'chapter-grid';

  const visualCol = document.createElement('div');
  visualCol.className = 'chapter-visual';

  const contentCol = document.createElement('div');
  contentCol.className = 'chapter-content';

  let imageFound = null;
  let overlayBadgeText = '';

  rows.forEach((row) => {
    const pic = row.querySelector('picture, img');
    if (pic && !imageFound) {
      imageFound = pic;
      // If there was text alongside image in the same row, use as badge
      const otherCol = row.querySelector('p:not(:has(img)), span');
      if (otherCol) overlayBadgeText = otherCol.textContent.trim();
      row.remove();
    } else {
      // Content items
      const h2 = row.querySelector('h1, h2, h3');
      if (h2) h2.classList.add('chapter-title');

      const disclaimer = row.querySelector('em, small');
      if (disclaimer && row.textContent.startsWith('*')) {
        row.classList.add('disclaimer-note');
      }

      contentCol.append(row);
    }
  });

  // Assemble Visual Portal
  const portalMask = block.classList.contains('arch') ? 'arch' : (block.classList.contains('pill') ? 'pill' : 'asymmetric');
  const portalDiv = document.createElement('div');
  portalDiv.className = `portal-frame ${portalMask}`;

  if (imageFound) {
    portalDiv.append(imageFound);
  } else {
    // Placeholder image
    const img = document.createElement('img');
    img.src = '/icons/house.svg';
    img.alt = 'Momento Banco Inter';
    img.className = 'portal-img';
    portalDiv.append(img);
  }

  if (overlayBadgeText) {
    const badge = document.createElement('div');
    badge.className = 'portal-overlay-badge';
    badge.innerHTML = `<span class="badge-icon">●</span> <span>${overlayBadgeText}</span>`;
    portalDiv.append(badge);
  }

  visualCol.append(portalDiv);

  grid.append(visualCol, contentCol);
  block.innerHTML = '';
  block.append(grid);
}
