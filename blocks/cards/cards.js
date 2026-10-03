export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.className = 'cards-list';

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'cards-card';

    // Move row children into li
    while (row.firstElementChild) {
      li.append(row.firstElementChild);
    }

    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture, img')) {
        div.className = 'cards-card-image';
      } else if (div.children.length === 1 && div.querySelector('.icon')) {
        div.className = 'cards-card-icon';
      } else {
        div.className = 'cards-card-body';
        // Add toranja badge styling if present
        const h3 = div.querySelector('h3, h4, h5');
        if (h3) h3.className = 'cards-card-title';
      }
    });

    ul.append(li);
  });

  block.textContent = '';
  block.append(ul);
}
