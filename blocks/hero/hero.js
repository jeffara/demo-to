export default function decorate(block) {
  const rows = [...block.children];
  const heroGrid = document.createElement('div');
  heroGrid.className = 'hero-grid';

  const contentCol = document.createElement('div');
  contentCol.className = 'hero-content';

  const visualCol = document.createElement('div');
  visualCol.className = 'hero-visual';

  // Find image / media if present in any row
  let mediaFound = null;
  const contentElements = [];

  rows.forEach((row) => {
    const pic = row.querySelector('picture, img');
    if (pic && !mediaFound) {
      mediaFound = pic;
      // remove row
      row.remove();
    } else {
      contentElements.push(row);
    }
  });

  // Assemble content column
  contentElements.forEach((row) => {
    // Check if row contains heading or eyebrow
    const h = row.querySelector('h1, h2, h3');
    if (h) {
      h.classList.add('hero-headline');
      // Highlight last phrase or span in orange if author wrapped with strong or em
      h.querySelectorAll('strong, em').forEach((el) => {
        const span = document.createElement('span');
        span.className = 'text-orange';
        span.textContent = el.textContent;
        el.replaceWith(span);
      });
    }

    const p = row.querySelector('p');
    if (p && !p.classList.contains('button-container') && !h) {
      p.classList.add('hero-description');
    }

    // Buttons
    const buttons = row.querySelectorAll('.button-container, a.button');
    if (buttons.length > 0) {
      row.classList.add('hero-actions');
    }

    // Lists / feature tags
    const ul = row.querySelector('ul');
    if (ul) {
      ul.classList.add('hero-tags');
      ul.querySelectorAll('li').forEach((li) => {
        li.classList.add('hero-tag-item');
      });
    }

    contentCol.append(row);
  });

  // Visual column assembly
  if (mediaFound) {
    const portal = document.createElement('div');
    portal.className = 'portal-frame asymmetric';
    portal.append(mediaFound);
    visualCol.append(portal);
  } else {
    // Fallback card or graphic if no image is authored
    visualCol.innerHTML = `
      <div class="hero-card-showcase">
        <div class="metallic-card card-digital">
          <div class="card-top">
            <div class="card-chip"></div>
            <span class="card-brand-tag">Inter</span>
          </div>
          <div class="card-bottom">
            <span class="card-holder">CLIENTE INTER</span>
            <span class="card-tier-label">Mastercard Black</span>
          </div>
        </div>
      </div>
    `;
  }

  heroGrid.append(contentCol, visualCol);
  block.innerHTML = '';
  block.append(heroGrid);
}
