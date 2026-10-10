const f = (i, n, t) => {
  if (t <= 0)
    return { initial: 0, final: 0 };
  const a = i * n + 1, c = Math.min((i + 1) * n, t);
  return { initial: a, final: c };
};
export {
  f as calculatePageOffset
};
