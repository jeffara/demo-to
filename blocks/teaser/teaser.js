export default function decorate(block) {
  const rows = [...block.children];
  const container = document.createElement('div');
  container.className = 'teaser-grid';

  const mediaCol = document.createElement('div');
  mediaCol.className = 'teaser-media';

  const contentCol = document.createElement('div');
  contentCol.className = 'teaser-content';

  let pic = null;
  rows.forEach((row) => {
    const img = row.querySelector('picture, img');
    if (img && !pic) {
      pic = img;
      row.remove();
    } else {
      const h2 = row.querySelector('h1, h2, h3');
      if (h2) h2.classList.add('teaser-title');
      contentCol.append(row);
    }
  });

  if (pic) {
    const portal = document.createElement('div');
    const portalMask = ['arch', 'asymmetric', 'rounded', 'pill'].find((v) => block.classList.contains(v)) || 'pill';
    portal.className = ;
    portal.append(pic);
    mediaCol.append(portal);
  }

  container.append(mediaCol, contentCol);
  block.innerHTML = '';
  block.append(container);
}
