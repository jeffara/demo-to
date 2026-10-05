import { useState as b, useRef as k, useCallback as a, useEffect as S } from "react";
const A = ({
  show: s,
  displayDuration: i,
  animationDuration: l,
  onClose: o
}) => {
  const e = "snackbar", f = "--hidden", [u, m] = b(!1), [R, d] = b(e), r = k(null), n = k(null), c = a(() => {
    r.current && (clearTimeout(r.current), r.current = null), n.current && (clearTimeout(n.current), n.current = null);
  }, []), t = a(() => {
    d(`${e}${f}`), n.current = setTimeout(() => {
      m(!1), o();
    }, l);
  }, [e, f, l, o]), T = a(() => {
    c(), m(!0), d(e), r.current = setTimeout(() => {
      t();
    }, i);
  }, [c, e, t, i]);
  return S(() => (s ? T() : !s && u && t(), () => c()), [s, u, T, t, c]), { isRendered: u, classAnimation: R, hideSnackbar: t };
};
export {
  A as default
};
