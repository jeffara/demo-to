export default async function decorate(block) {
  block.innerHTML = `
    <div class="footer-inner container">
      <div class="footer-top">
        <div class="footer-col footer-brand-col">
          <img src="/assets/brand/logo.svg" alt="Banco Inter" class="footer-logo" width="108" height="30" />
          <p class="footer-desc">
            Inter. O Super App da sua vida financeira. Soluções completas e integradas para pessoas físicas e empresas no Brasil e no mundo.
          </p>
          <div class="footer-badges-list">
            <span class="footer-pill-badge">NASDAQ: INTR</span>
            <span class="footer-pill-badge">Autorizado Banco Central</span>
            <span class="footer-pill-badge">Garantia FGC & FDIC</span>
          </div>
        </div>

        <div class="footer-col">
          <h4>Pra Você</h4>
          <ul>
            <li><a href="/conta-digital">Conta Digital Grátis</a></li>
            <li><a href="/cartoes">Cartões Mastercard</a></li>
            <li><a href="/investimentos">Meu Porquinho & Invest</a></li>
            <li><a href="/credito">Crédito & Financiamento</a></li>
            <li><a href="/global-account">Global Account (Dólar)</a></li>
            <li><a href="/inter-shop">Inter Shop & Cashback</a></li>
            <li><a href="/inter-loop">Programa de Pontos Loop</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Empresas</h4>
          <ul>
            <li><a href="/empresas/conta-pj">Conta PJ Digital</a></li>
            <li><a href="/empresas/credito">Crédito para Empresas</a></li>
            <li><a href="/empresas/maquininha">Maquininha de Cartão</a></li>
            <li><a href="/empresas/folha">Folha de Pagamento</a></li>
            <li><a href="/empresas/cambio">Câmbio Comercial</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Institucional</h4>
          <ul>
            <li><a href="/sobre">Sobre o Inter</a></li>
            <li><a href="/ri">Relações com Investidores</a></li>
            <li><a href="/carreiras">Trabalhe Conosco</a></li>
            <li><a href="/imprensa">Sala de Imprensa</a></li>
            <li><a href="/sustentabilidade">Sustentabilidade & ESG</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Ajuda & Contato</h4>
          <ul>
            <li><a href="/ajuda">Central de Ajuda</a></li>
            <li><a href="/ouvidoria">Ouvidoria: 0800 940 7772</a></li>
            <li><a href="/telefones">Capitais: 3003 4070</a></li>
            <li><a href="/seguranca">Segurança Digital</a></li>
            <li><a href="/termos">Termos & Privacidade</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-legal-notice">
          Banco Inter S.A. — CNPJ: 00.416.968/0001-01. Av. Barbacena, 1219 - Santo Agostinho, Belo Horizonte - MG, CEP: 30190-131.<br />
          Serviços de investimento oferecidos pela Inter DTVM Ltda. Nos EUA, contas correntes são oferecidas pelo Evolve Bank & Trust, membro FDIC. 
          Investimentos no exterior são oferecidos pela Inter Securities LLC, membro FINRA e SIPC.
        </p>
        <div class="footer-copyright-row">
          <span>&copy; ${new Date().getFullYear()} Banco Inter S.A. Todos os direitos reservados.</span>
          <div class="footer-social-links">
            <a href="https://instagram.com/interbr" aria-label="Instagram">Instagram</a>
            <a href="https://linkedin.com/company/banco-inter" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://twitter.com/interbr" aria-label="Twitter">X / Twitter</a>
            <a href="https://youtube.com/bancointer" aria-label="YouTube">YouTube</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
