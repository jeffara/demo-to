const M = (t) => t.startsWith("top"), L = (t) => t.startsWith("right"), R = (t) => t.startsWith("right") || t.startsWith("left"), d = (t) => t.endsWith("end"), b = (t) => t === "top" || t === "bottom", z = (t) => t === "right" || t === "left", T = (t, o, n) => Math.min(Math.max(o, t), n), q = (t, o, n) => b(t) ? o.left + o.width / 2 - n / 2 : d(t) ? o.right - n : o.left, w = (t, o, n) => z(t) ? o.top + o.height / 2 - n / 2 : d(t) ? o.bottom - n : o.top, B = ({
  trigger: t,
  panelHeight: o,
  panelWidth: n,
  placement: a,
  offset: c,
  viewport: h
}) => {
  const s = M(a), p = o + c, e = h.height - t.bottom, i = t.top, l = s && p > i && e > i, m = !s && p > e && i > e, u = s && !l || m ? t.top - c - o : t.bottom + c, f = q(a, t, n), r = Math.max(0, h.width - n);
  return {
    top: Math.max(0, u),
    left: T(f, 0, r)
  };
}, C = ({
  trigger: t,
  panelHeight: o,
  panelWidth: n,
  placement: a,
  offset: c,
  viewport: h
}) => {
  const s = L(a), p = n + c, e = h.width - t.right, i = t.left, l = s && p > e && i > e, m = !s && p > i && e > i, u = s && !l || m ? t.right + c : t.left - c - n, f = w(a, t, o), r = Math.max(0, h.height - o), x = Math.max(0, h.width - n);
  return {
    top: T(f, 0, r),
    left: T(u, 0, x)
  };
}, U = (t) => R(t.placement) ? C(t) : B(t);
export {
  U as computeMenuPopupPosition
};
