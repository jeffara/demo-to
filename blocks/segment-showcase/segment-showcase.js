export default function decorate(block) {
  const rows = [...block.children];

  const segments = [
    {
      id: 'digital',
      name: 'Inter Digital',
      criteria: 'Sem exigência de investimentos',
      tier: 'Mastercard Gold',
      perks: [
        'Conta 100% digital e gratuita com Pix ilimitado',
        'Cartão de crédito sem anuidade com cashback',
        'Investimentos a partir de R$ 1 no Meu Porquinho',
        'Acesso completo ao Inter Shop com cashback em compras'
      ],
      ctaText: 'Abrir Conta Digital',
      ctaUrl: '/abra-sua-conta'
    },
    {
      id: 'one',
      name: 'Inter One',
      criteria: 'A partir de R$ 50 mil investidos',
      tier: 'Mastercard Platinum',
      perks: [
        'Advisor de investimentos dedicado para a sua carteira',
        'Cartão Mastercard Platinum com pontuação turbinada no Loop',
        'Taxas de câmbio diferenciadas na Global Account',
        'Atendimento prioritário 24 horas'
      ],
      ctaText: 'Quero ser Inter One',
      ctaUrl: '/segmentos/one'
    },
    {
      id: 'prime',
      name: 'Inter Prime',
      criteria: 'A partir de R$ 250 mil investidos',
      tier: 'Mastercard Black',
      perks: [
        'Banker exclusivo e assessoria patrimonial personalizada',
        'Cartão Mastercard Black com acesso a salas VIP LoungeKey',
        'Pontuação máxima no Inter Loop (1 ponto a cada R$ 2,50)',
        'Isenção de tarifas de corretagem e fundos exclusivos'
      ],
      ctaText: 'Conhecer Inter Prime',
      ctaUrl: '/segmentos/prime'
    },
    {
      id: 'win',
      name: 'Inter Win',
      criteria: 'A partir de R$ 1 milhão investidos',
      tier: 'Mastercard Black Metal',
      perks: [
        'Family Office, gestão patrimonial e planejamento sucessório',
        'Cartão de Metal exclusivo com benefícios ultraluxo',
        'Acesso a fundos offshore e investimentos em Wall Street',
        'Concierge internacional e eventos de alta gastronomia'
      ],
      ctaText: 'Falar com um Banker Win',
      ctaUrl: '/segmentos/win'
    }
  ];

  // Render Tabs Nav
  const tabsNav = document.createElement('div');
  tabsNav.className = 'segment-tabs-nav';

  segments.forEach((seg, idx) => {
    const tabBtn = document.createElement('button');
    tabBtn.className = `seg-tab ${idx === 0 ? 'active' : ''}`;
    tabBtn.dataset.segment = seg.id;
    tabBtn.textContent = seg.name;
    tabsNav.append(tabBtn);
  });

  // Render Showcase Container
  const showcase = document.createElement('div');
  showcase.className = 'segment-showcase';

  segments.forEach((seg, idx) => {
    const view = document.createElement('div');
    view.className = `seg-card-view ${idx === 0 ? 'active' : ''}`;
    view.dataset.segment = seg.id;

    view.innerHTML = `
      <div class="card-visual-box">
        <div class="metallic-card card-${seg.id}">
          <div class="card-top">
            <div class="card-chip"></div>
            <span class="card-brand-tag">Inter</span>
          </div>
          <div class="card-bottom">
            <span class="card-holder">SEU NOME AQUI</span>
            <span class="card-tier-label">${seg.tier}</span>
          </div>
        </div>
      </div>

      <div class="seg-details">
        <span class="seg-criteria">${seg.criteria}</span>
        <h3 class="seg-title font-display">${seg.name}</h3>
        <ul class="seg-perks-list">
          ${seg.perks.map((p) => `<li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${p}</span></li>`).join('')}
        </ul>
        <div class="button-container">
          <a href="${seg.ctaUrl}" class="button primary">${seg.ctaText}</a>
        </div>
      </div>
    `;

    showcase.append(view);
  });

  block.innerHTML = '';
  block.append(tabsNav, showcase);

  // Tab switching logic
  tabsNav.querySelectorAll('.seg-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      const segId = btn.dataset.segment;
      tabsNav.querySelectorAll('.seg-tab').forEach((t) => t.classList.remove('active'));
      btn.classList.add('active');

      showcase.querySelectorAll('.seg-card-view').forEach((v) => {
        if (v.dataset.segment === segId) {
          v.classList.add('active');
        } else {
          v.classList.remove('active');
        }
      });
    });
  });
}
