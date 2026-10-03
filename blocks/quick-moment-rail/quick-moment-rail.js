export default function decorate(block) {
  const rows = [...block.children];
  const bar = document.createElement('div');
  bar.className = 'quick-moment-bar';

  // Row 1: Label
  let labelText = 'Momentos de Vida';
  if (rows[0] && rows[0].textContent.trim()) {
    labelText = rows[0].textContent.trim();
  }

  const labelDiv = document.createElement('span');
  labelDiv.className = 'rail-label';
  labelDiv.textContent = labelText;
  bar.append(labelDiv);

  // Row 2: Links
  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'rail-items';

  const links = rows[1] ? rows[1].querySelectorAll('a') : block.querySelectorAll('a');
  links.forEach((a, idx) => {
    const item = document.createElement('a');
    item.href = a.getAttribute('href');
    item.className = `rail-item ${idx === 0 ? 'active' : ''}`;
    item.textContent = a.textContent;
    itemsContainer.append(item);
  });

  bar.append(itemsContainer);
  block.innerHTML = '';
  block.append(bar);

  // Highlight active moment item on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        itemsContainer.querySelectorAll('.rail-item').forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('section[id], div[id]').forEach((section) => {
    observer.observe(section);
  });
}
