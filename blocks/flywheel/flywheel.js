export default function decorate(block) {
  const steps = [...block.children];
  const container = document.createElement('div');
  container.className = 'flywheel-grid';

  const leftCol = document.createElement('div');
  leftCol.className = 'flywheel-info';
  leftCol.innerHTML = `
    <span class="eyebrow">Programa de Recompensas</span>
    <h2 class="font-display">O Ciclo de Valor Virtuoso do Inter Loop</h2>
    <p>Quanto mais você usa o Super App para pagar contas, fazer compras e investir, mais valor retorna diretamente para o seu patrimônio. Sem pegadinhas, sem pontos expirando.</p>
    <div class="button-container">
      <a href="/inter-loop" class="button primary">Conhecer o Inter Loop</a>
    </div>
  `;

  const rightCol = document.createElement('div');
  rightCol.className = 'flywheel-cycle';

  steps.forEach((step, idx) => {
    const cols = [...step.children];
    const card = document.createElement('div');
    card.className = 'flywheel-step';

    const num = cols[0] ? cols[0].textContent.trim() : `${idx + 1}`;
    const title = cols[1] ? cols[1].textContent.trim() : '';
    const desc = cols[2] ? cols[2].textContent.trim() : '';

    card.innerHTML = `
      <div class="step-num">ETAPA 0${num}</div>
      <h3 class="step-title">${title}</h3>
      <p class="step-desc">${desc}</p>
    `;

    rightCol.append(card);
  });

  container.append(leftCol, rightCol);
  block.innerHTML = '';
  block.append(container);
}
