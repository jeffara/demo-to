export default function decorate(block) {
  const rows = [...block.children];
  const container = document.createElement('div');
  container.className = 'manifesto-container';

  let quoteText = '';
  let attribution = 'Manifesto Oficial Inter';

  if (rows[0]) {
    quoteText = rows[0].innerHTML;
  }
  if (rows[1]) {
    attribution = rows[1].textContent.trim();
  }

  // Replace strong/em with manifesto-highlight
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = quoteText;
  tempDiv.querySelectorAll('strong, em').forEach((el) => {
    const span = document.createElement('span');
    span.className = 'manifesto-highlight';
    span.textContent = el.textContent;
    el.replaceWith(span);
  });

  container.innerHTML = `
    <blockquote class="manifesto-text">
      ${tempDiv.innerHTML}
    </blockquote>
    <div class="manifesto-footer">
      <div class="manifesto-divider"></div>
      <span>${attribution}</span>
      <div class="manifesto-divider"></div>
    </div>
  `;

  block.innerHTML = '';
  block.append(container);
}
