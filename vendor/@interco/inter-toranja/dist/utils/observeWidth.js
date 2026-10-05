function c(e, o) {
  const r = new ResizeObserver((n) => {
    for (const t of n)
      if (t.target === e) {
        const { width: s } = t.contentRect;
        o(s);
      }
  });
  return r.observe(e), r;
}
export {
  c as observeWidth
};
