export default function decorate(block) {
  const rows = [...block.children];
  if (!rows.length) return;

  const tabList = document.createElement('div');
  tabList.className = 'toranja-tablist';
  tabList.setAttribute('role', 'tablist');

  const panelsWrapper = document.createElement('div');
  panelsWrapper.className = 'toranja-tabpanels';

  rows.forEach((row, idx) => {
    const [labelCol, contentCol] = [...row.children];
    const tabId = `tab-${idx + 1}`;
    const panelId = `panel-${idx + 1}`;
    const isActive = idx === 0;

    // Tab Button
    const tabButton = document.createElement('button');
    tabButton.type = 'button';
    tabButton.className = `toranja-tab-btn ${isActive ? 'active' : ''}`;
    tabButton.id = tabId;
    tabButton.setAttribute('role', 'tab');
    tabButton.setAttribute('aria-selected', isActive ? 'true' : 'false');
    tabButton.setAttribute('aria-controls', panelId);
    tabButton.tabIndex = isActive ? 0 : -1;
    tabButton.textContent = labelCol ? labelCol.textContent.trim() : `Aba ${idx + 1}`;

    // Tab Panel
    const panel = document.createElement('div');
    panel.className = `toranja-tabpanel ${isActive ? 'active' : ''}`;
    panel.id = panelId;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tabId);
    if (!isActive) panel.setAttribute('hidden', '');
    if (contentCol) {
      panel.innerHTML = contentCol.innerHTML;
    }

    // Click interaction
    tabButton.addEventListener('click', () => {
      // Deactivate all
      tabList.querySelectorAll('.toranja-tab-btn').forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
        btn.tabIndex = -1;
      });
      panelsWrapper.querySelectorAll('.toranja-tabpanel').forEach((p) => {
        p.classList.remove('active');
        p.setAttribute('hidden', '');
      });

      // Activate clicked
      tabButton.classList.add('active');
      tabButton.setAttribute('aria-selected', 'true');
      tabButton.tabIndex = 0;
      panel.classList.add('active');
      panel.removeAttribute('hidden');
    });

    tabList.appendChild(tabButton);
    panelsWrapper.appendChild(panel);
  });

  block.textContent = '';
  block.append(tabList, panelsWrapper);
}
