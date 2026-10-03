/**
 * Bloco: App Download (Conversão do Super App com QR Code)
 * Toranja Design System - Banco Inter
 */
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'toranja-app-download-card';

  const rows = [...block.children];
  let title = 'Baixe o Super App do Inter';
  let subtitle = 'Aponte a câmera do seu celular para o QR Code e abra sua conta gratuita em poucos minutos.';
  let qrCodeImg = '/assets/brand/qr-code.svg';
  let appleStoreUrl = 'https://apps.apple.com/br/app/inter/id1071477797';
  let googlePlayUrl = 'https://play.google.com/store/apps/details?id=br.com.intermedium';

  rows.forEach((row, i) => {
    const text = row.textContent.trim();
    const link = row.querySelector('a');
    if (i === 0 && text) title = text;
    if (i === 1 && text) subtitle = text;
    if (link) {
      if (link.href.includes('apple') || link.href.includes('ios')) appleStoreUrl = link.href;
      if (link.href.includes('google') || link.href.includes('play')) googlePlayUrl = link.href;
    }
  });

  container.innerHTML = `
    <div class="app-download-info">
      <span class="eyebrow">Praticidade na palma da mão</span>
      <h2 class="app-download-title">${title}</h2>
      <p class="app-download-subtitle">${subtitle}</p>
      <div class="app-download-buttons">
        <a href="${appleStoreUrl}" target="_blank" rel="noopener noreferrer" class="store-badge apple-badge" aria-label="Baixar na Apple App Store">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-.99 1.68-.86 2.69 1.01.08 2.03-.51 2.55-1.18z"/></svg>
          <div>
            <span class="badge-sub">Disponível na</span>
            <span class="badge-main">App Store</span>
          </div>
        </a>
        <a href="${googlePlayUrl}" target="_blank" rel="noopener noreferrer" class="store-badge google-badge" aria-label="Baixar no Google Play">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186c-.19-.18-.31-.44-.31-.75V2.564c0-.31.12-.57.309-.75zm11.397 11.397l2.583 2.583-11.83 6.82 9.247-9.403zm2.583-2.583l-2.583 2.583-9.247-9.403 11.83 6.82zm1.222.706l2.84 1.638c.68.39.68 1.03 0 1.42l-2.84 1.64-2.197-2.35 2.197-2.348z"/></svg>
          <div>
            <span class="badge-sub">Disponível no</span>
            <span class="badge-main">Google Play</span>
          </div>
        </a>
      </div>
    </div>
    <div class="app-download-qr">
      <div class="qr-card">
        <div class="qr-placeholder">
          <!-- QR Code SVG Dinâmico do Inter -->
          <svg width="140" height="140" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0 0h30v30H0zM5 5h20v20H5zM10 10h10v10H10zM70 0h30v30H70zM75 5h20v20H75zM80 10h10v10H80zM0 70h30v30H0zM5 75h20v20H5zM10 80h10v10H10zM40 10h10v10H40zM50 20h10v10H50zM40 30h20v10H40zM70 40h10v20H70zM80 50h20v10H80zM40 70h10v30H40zM60 80h20v20H60zM80 90h20v10H80zM20 40h20v20H20zM30 50h10v10H30z"/>
          </svg>
        </div>
        <span class="qr-caption">Aponte a câmera</span>
      </div>
    </div>
  `;

  block.textContent = '';
  block.append(container);
}
