const o = (t) => !t.disabled && !t.skeleton, c = (t) => t.length > 0 ? 0 : -1, I = (t) => t.length > 0 ? t.length - 1 : -1, s = (t, e, r) => {
  const n = t.length;
  return n === 0 ? e : (e + r + n) % n;
}, i = {
  ArrowDown: 1,
  ArrowUp: -1
}, a = (t) => i[t];
export {
  c as findFirstInteractiveIndex,
  I as findLastInteractiveIndex,
  s as findNextInteractiveIndex,
  a as getVerticalNavigationDirection,
  o as isMenuPopupItemInteractive
};
