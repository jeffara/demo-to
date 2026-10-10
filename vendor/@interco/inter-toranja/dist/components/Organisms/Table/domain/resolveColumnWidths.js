const i = (o, r) => {
  const t = o.reduce(
    (e, n) => e + (n.minWidth ?? 0),
    0
  );
  return {
    totalMinWidth: t,
    requiresHorizontalScroll: t > r
  };
};
export {
  i as resolveColumnWidths
};
