const s = (e, r) => {
  if (!e)
    return r;
  const { paddingLeft: o, paddingRight: n } = getComputedStyle(e), t = Number.parseFloat(o) + Number.parseFloat(n);
  return Number.isFinite(t) && t > 0 ? t : r;
};
export {
  s as resolveCarouselScrollEndSpacing
};
