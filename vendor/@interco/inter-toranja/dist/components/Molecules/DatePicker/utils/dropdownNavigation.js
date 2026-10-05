const s = (e) => e.findIndex((n) => !n.isDisabled), c = (e) => {
  for (let n = e.length - 1; n >= 0; n -= 1)
    if (!e[n].isDisabled)
      return n;
  return -1;
}, I = (e) => {
  const n = e.findIndex((t) => t.isSelected);
  if (n >= 0)
    return n;
  const d = s(e);
  return d >= 0 ? d : 0;
}, o = (e, n, d) => {
  const t = e.length;
  for (let i = 1; i <= t; i += 1) {
    const r = (n + d * i + t) % t;
    if (!e[r].isDisabled)
      return r;
  }
  return n;
}, l = {
  ArrowDown: 1,
  ArrowUp: -1
}, a = (e) => l[e];
export {
  s as findFirstEnabledIndex,
  I as findInitialActiveIndex,
  c as findLastEnabledIndex,
  o as findNextEnabledIndex,
  a as getVerticalNavigationDirection
};
