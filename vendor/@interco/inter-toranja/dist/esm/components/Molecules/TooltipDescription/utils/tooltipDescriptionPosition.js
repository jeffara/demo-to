const a = 280, p = 16, u = 16, A = 16, r = (t, T, o) => Math.min(Math.max(T, t), o), E = (t, T, o, I) => t === "top" ? T.top - o - I : T.bottom + o, C = (t, T, o) => t >= 0 && t + T <= o, L = (t, T, o, I, n) => {
  const O = E(t, T, o, I);
  if (C(O, I, n))
    return t;
  const c = t === "top" ? "bottom" : "top", _ = E(c, T, o, I);
  return C(_, I, n) ? c : t;
}, N = (t, T) => t === "left" ? 24 : t === "right" ? T - 16 - 8 : T / 2, f = ({
  trigger: t,
  panelHeight: T,
  panelWidth: o,
  align: I,
  placement: n,
  offset: O,
  viewport: c
}) => {
  const _ = N(I, o), e = t.left + t.width / 2 - _, s = L(
    n,
    t,
    O,
    T,
    c.height
  ), S = E(s, t, O, T), R = Math.max(0, c.width - o), m = Math.max(0, c.height - T), P = r(e, 0, R);
  return {
    top: r(S, 0, m),
    left: P,
    caretShift: e - P,
    placement: s
  };
};
export {
  u as TOOLTIP_DESCRIPTION_CARET_INSET,
  p as TOOLTIP_DESCRIPTION_CARET_SIZE,
  A as TOOLTIP_DESCRIPTION_DEFAULT_OFFSET,
  a as TOOLTIP_DESCRIPTION_PANEL_WIDTH,
  f as computeTooltipDescriptionPosition,
  N as resolveCaretCenterX
};
