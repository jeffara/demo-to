export default async function decorate(block) {
  // Check if there is nav content from authoring
  let navHtml = '';
  try {
    const resp = await fetch('/nav.plain.html');
    if (resp.ok) {
      navHtml = await resp.text();
    }
  } catch (e) {
    // fallback to inline/default
  }

  block.innerHTML = `
    <div class="header-inner container">
      <div class="header-brand">
        <a href="/" aria-label="Ir para a página inicial do Banco Inter">
          <img src="/assets/brand/logo.svg" alt="Banco Inter" class="brand-logo" width="108" height="30" />
        </a>
        <span class="brand-tag">Super App</span>
      </div>

      <nav class="main-nav" aria-label="Navegação Principal">
        <div class="nav-item">
          <a href="/#momentos" class="nav-link">Pra Você</a>
        </div>
        <div class="nav-item nav-dropdown">
          <button class="nav-link nav-dropdown-trigger" aria-expanded="false" aria-haspopup="true">
            Empresas
            <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          <div class="nav-dropdown-menu" role="menu">
            <a href="/empresas/conta-pj" class="dropdown-item" role="menuitem">Conta PJ Digital</a>
            <a href="/empresas/credito" class="dropdown-item" role="menuitem">Crédito Empresarial</a>
            <a href="/empresas/maquininha" class="dropdown-item" role="menuitem">Inter Pag / Granito</a>
          </div>
        </div>
        <div class="nav-item">
          <a href="/#segmentos" class="nav-link">Segmentos</a>
        </div>
        <div class="nav-item">
          <a href="/#global" class="nav-link">Global Account 🇺🇸</a>
        </div>
        <div class="nav-item">
          <a href="/#loop" class="nav-link">Inter Loop</a>
        </div>
      </nav>

      <div class="header-actions">
        <a href="https://internetbanking.bancointer.com.br" class="btn btn-outline login-btn" style="min-height: 40px; padding: 6px 16px; font-size: 0.8125rem;">
          Acessar Conta
        </a>
        <a href="/abra-sua-conta" class="btn btn-primary cta-btn" style="min-height: 40px; padding: 6px 18px; font-size: 0.8125rem;">
          Abra sua conta
        </a>
        <button class="mobile-toggle" aria-label="Abrir menu de navegação" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer" aria-hidden="true">
      <div class="mobile-nav-links">
        <a href="/#momentos" class="mobile-nav-link">Pra Você</a>
        <a href="/empresas" class="mobile-nav-link">Empresas</a>
        <a href="/#segmentos" class="mobile-nav-link">Segmentos (Digital a Win)</a>
        <a href="/#global" class="mobile-nav-link">Global Account (Dólar)</a>
        <a href="/#loop" class="mobile-nav-link">Inter Loop</a>
      </div>
      <div class="mobile-actions">
        <a href="/abra-sua-conta" class="btn btn-primary" style="width: 100%;">Abra sua conta grátis</a>
        <a href="https://internetbanking.bancointer.com.br" class="btn btn-secondary" style="width: 100%; margin-top: 1rem;">Já sou cliente</a>
      </div>
    </div>
  `;

  // Scroll effect on header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      block.classList.add('scrolled');
    } else {
      block.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  const toggleBtn = block.querySelector('.mobile-toggle');
  const drawer = block.querySelector('.mobile-drawer');
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
      drawer.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });
  }
}
