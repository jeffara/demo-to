export default function decorate(block) {
  const rows = [...block.children];
  let formTitle = 'Solicite contato de um especialista Inter';
  let formSubtitle = 'Preencha seus dados para receber uma proposta personalizada em até 24 horas.';

  if (rows[0] && rows[0].textContent.trim()) formTitle = rows[0].textContent.trim();
  if (rows[1] && rows[1].textContent.trim()) formSubtitle = rows[1].textContent.trim();

  const formEl = document.createElement('form');
  formEl.className = 'toranja-form';
  formEl.innerHTML = `
    <div class="form-header">
      <span class="eyebrow">Atendimento Exclusivo</span>
      <h3 class="form-title font-display">${formTitle}</h3>
      <p class="form-subtitle">${formSubtitle}</p>
    </div>

    <div class="form-grid">
      <div class="form-group">
        <label for="lead-name">Nome Completo *</label>
        <input type="text" id="lead-name" name="name" required placeholder="Digite seu nome completo" />
      </div>

      <div class="form-group">
        <label for="lead-email">E-mail *</label>
        <input type="email" id="lead-email" name="email" required placeholder="seuemail@exemplo.com" />
      </div>

      <div class="form-group">
        <label for="lead-cpf">CPF *</label>
        <input type="text" id="lead-cpf" name="cpf" required placeholder="000.000.000-00" maxlength="14" />
      </div>

      <div class="form-group">
        <label for="lead-phone">Telefone / WhatsApp *</label>
        <input type="tel" id="lead-phone" name="phone" required placeholder="(00) 00000-0000" maxlength="15" />
      </div>

      <div class="form-group full-width">
        <label for="lead-product">Qual produto é do seu interesse? *</label>
        <select id="lead-product" name="product" required>
          <option value="" disabled selected>Selecione uma opção</option>
          <option value="conta-pj">Conta PJ Digital & Empresas</option>
          <option value="one">Segmento Inter One (A partir de R$ 50k)</option>
          <option value="prime">Segmento Inter Prime (A partir de R$ 250k)</option>
          <option value="win">Inter Win / Wealth & Family Office (R$ 1M+)</option>
          <option value="credito">Financiamento Imobiliário & Crédito com Garantia</option>
          <option value="global">Global Account & Investimentos Internacionais</option>
        </select>
      </div>

      <div class="form-group full-width checkbox-group">
        <label class="checkbox-label">
          <input type="checkbox" name="lgpd" required />
          <span>Concordo com os <a href="/termos" target="_blank">Termos de Uso</a> e autorizo o Banco Inter a entrar em contato conforme a LGPD.</span>
        </label>
      </div>

      <div class="form-group full-width">
        <button type="submit" class="btn btn-primary" style="width: 100%; min-height: 54px;">
          Enviar Solicitação ↗
        </button>
      </div>
    </div>

    <div class="form-status" style="display: none;" role="alert"></div>
  `;

  // Masks
  const cpfInput = formEl.querySelector('#lead-cpf');
  cpfInput.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d)/, '$1.$2');
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = v;
  });

  const phoneInput = formEl.querySelector('#lead-phone');
  phoneInput.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.slice(0, 11);
    v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
    v = v.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = v;
  });

  // Submission simulation with CRM webhook
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = formEl.querySelector('button[type="submit"]');
    const status = formEl.querySelector('.form-status');

    btn.disabled = true;
    btn.textContent = 'Enviando dados com segurança...';

    setTimeout(() => {
      formEl.querySelector('.form-grid').style.display = 'none';
      status.style.display = 'block';
      status.className = 'form-status success';
      status.innerHTML = `
        <div class="success-icon">✓</div>
        <h4>Solicitação Recebida com Sucesso!</h4>
        <p>Um de nossos assessores especializados entrará em contato em breve através do telefone e e-mail informados.</p>
      `;
    }, 1000);
  });

  block.innerHTML = '';
  block.append(formEl);
}
