/** Compatibilidade restrita ao snapshot Toranja 1.13.3; não modifica o vendor. */
export function toranjaDateCompat() {
  const base = '/vendor/@interco/inter-toranja/dist/components/Molecules/InputBase/';
  return {
    name: 'toranja-1.13.3-date-compat',
    enforce: 'pre',
    transform(code, id) {
      const file = id.replaceAll('\\', '/').split('?')[0];
      let before; let after;
      if (file.endsWith(base + 'utils/inputUtils.js')) {
        // O placeholder e as conversões já usam MM/DD/YYYY, mas a máscara usava YYYY/MM/DD.
        before = 'return s === a.BR ? p(n) : d(n);';
        after = 'return p(n);';
      } else if (file.endsWith(base + 'hooks/useInputHandlers.js')) {
        before = String.raw`[n.DATE]: f === x.BR ? /^\d{2}\/\d{2}\/\d{4}$/ : /^\d{4}\/\d{2}\/\d{2}$/`;
        after = String.raw`[n.DATE]: /^\d{2}\/\d{2}\/\d{4}$/`;
      } else return null;
      if (code.split(before).length !== 2) {
        this.error('Contrato do patch de datas Toranja mudou. Revise a compatibilidade antes de compilar: ' + file);
      }
      return {code: code.replace(before, after), map: null};
    },
  };
}
