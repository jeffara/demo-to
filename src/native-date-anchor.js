/**
 * Toranja 1.13.3: InputDate abre um input[type=date] temporário no body.
 * Ancora esse input ao campo visível antes de o vendor chamar showPicker().
 * Não altera o vendor, os valores, a máscara, os limites ou os callbacks.
 */
export function anchorNativeDatePicker(host) {
  const doc = host.ownerDocument;
  const view = doc.defaultView;
  let observer;
  let timeout;
  let picker;

  const stopWaiting = () => {
    observer?.disconnect();
    observer = undefined;
    view.clearTimeout(timeout);
  };

  const onClick = (event) => {
    const button = event.target.closest?.('[data-testid="calendar-icon"]');
    if (!button || !host.contains(button) || button.disabled) return;
    const field = button.closest('fieldset');
    const input = field?.querySelector('input');
    const anchor = field?.querySelector('.fieldset__container') || input;
    if (!input || !anchor || input.disabled || input.readOnly) return;

    stopWaiting();
    // O callback da MutationObserver roda antes do setTimeout do vendor (10 ms).
    observer = new view.MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node.nodeType !== 1 || !node.matches('input[type="date"][aria-hidden="true"]')
            || node.style.position !== 'fixed' || node.style.opacity !== '0') continue;
          const rect = anchor.getBoundingClientRect();
          const width = Math.min(rect.width, doc.documentElement.clientWidth);
          const left = Math.max(0, Math.min(rect.left, doc.documentElement.clientWidth - width));
          Object.assign(node.style, {
            left: `${left}px`, top: `${rect.top}px`, width: `${width}px`,
            height: `${rect.height}px`, margin: '0', padding: '0', border: '0',
            boxSizing: 'border-box',
          });
          node.tabIndex = -1;
          node.dataset.toranjaDateAnchor = input.id;
          picker = node;
          stopWaiting();
          return;
        }
      }
    });
    observer.observe(doc.body, {childList: true});
    timeout = view.setTimeout(stopWaiting, 250);
  };

  host.addEventListener('click', onClick, true);
  return () => {
    stopWaiting();
    host.removeEventListener('click', onClick, true);
    // Remoção/recriação do bloco no UE não deve deixar um campo órfão no body.
    picker?.remove();
    picker = undefined;
  };
}
