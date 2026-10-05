import { SIZE as n } from "../../../../utils/pattern.js";
const M = {
  [n.SMALL]: 16,
  [n.MEDIUM]: 24,
  [n.LARGE]: 40
}, o = {
  [n.SMALL]: 24,
  [n.MEDIUM]: 40,
  [n.LARGE]: 80
}, A = (r) => r === n.LARGE ? n.MEDIUM : n.SMALL, L = (r) => r === n.SMALL ? n.SMALL : n.MEDIUM, E = (r, t) => t === "btn-neutral" ? L(r) : r === n.LARGE ? n.MEDIUM : n.SMALL, S = (r, t = !1) => {
  const e = t ? o : M;
  return e[r] ?? e[n.MEDIUM];
};
export {
  S as getIconSize,
  A as resolveButtonIconSize,
  E as resolveButtonSpinnerSize,
  L as resolveNeutralIconButtonIconSize
};
