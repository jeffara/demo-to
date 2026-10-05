const o = (t) => t.split("-").map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "), s = (t) => Object.entries(t).reduce(
  (e, [c]) => ({
    ...e,
    [c]: { label: o(c) }
  }),
  {}
);
export {
  s as createSelectOptions,
  o as formatKeyToLabel
};
