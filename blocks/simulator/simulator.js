export default function decorate(block) {
  const rows = [...block.children];
  let title = 'Simule seu Rendimento no Meu Porquinho';
  let subtitle = 'Rendimento automático a 102% do CDI com liquidez diária.';
  let min = 500;
  let max = 100000;
  let defVal = 10000;
  let cdiRate = 0.1075; // 10.75% a.a.

  if (rows[0]) title = rows[0].textContent.trim();
  if (rows[1]) subtitle = rows[1].textContent.trim();

  const cta = block.querySelector('.button-container, a.button');

  const container = document.createElement('div');
  container.className = 'mini-simulator';

  container.innerHTML = `
    <div class="sim-header">
      <h3 class="sim-title">${title}</h3>
      <p class="sim-subtitle">${subtitle}</p>
    </div>

    <div class="sim-controls">
      <div class="sim-row">
        <span>Quanto você quer guardar?</span>
        <strong id="sim-display-val">R$ 10.000</strong>
      </div>
      <input type="range" class="sim-slider" min="${min}" max="${max}" step="500" value="${defVal}" aria-label="Valor a guardar" />
    </div>

    <div class="sim-results">
      <div class="sim-res-col highlight">
        <span>No Inter (102% CDI em 1 ano):</span>
        <strong id="sim-inter-res">R$ 11.096,50</strong>
        <small class="sim-badge">+ R$ 1.096,50 de rendimento</small>
      </div>
      <div class="sim-res-col">
        <span>Na Poupança tradicional:</span>
        <strong id="sim-poup-res">R$ 10.617,00</strong>
        <small class="sim-diff-note">Você ganha R$ 479,50 a mais no Inter</small>
      </div>
    </div>
  `;

  if (cta) {
    container.append(cta);
  }

  block.innerHTML = '';
  block.append(container);

  const slider = container.querySelector('.sim-slider');
  const displayVal = container.querySelector('#sim-display-val');
  const interRes = container.querySelector('#sim-inter-res');
  const poupRes = container.querySelector('#sim-poup-res');
  const badgeNote = container.querySelector('.sim-badge');
  const diffNote = container.querySelector('.sim-diff-note');

  function updateCalc(val) {
    const interYield = val * (1 + (cdiRate * 1.02));
    const poupYield = val * (1 + 0.0617);
    const diff = interYield - poupYield;

    const fmt = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    displayVal.textContent = fmt(val);
    interRes.textContent = fmt(interYield);
    poupRes.textContent = fmt(poupYield);
    badgeNote.textContent = `+ ${fmt(interYield - val)} de rendimento`;
    diffNote.textContent = `Você ganha ${fmt(diff)} a mais no Inter`;
  }

  slider.addEventListener('input', (e) => {
    updateCalc(Number(e.target.value));
  });
}
