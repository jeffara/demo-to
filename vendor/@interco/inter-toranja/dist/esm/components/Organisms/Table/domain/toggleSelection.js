const g = () => ({
  selectedIds: /* @__PURE__ */ new Set(),
  allSelected: !1,
  indeterminate: !1
}), i = (e, t) => e.map((n, s) => t(n, s)), S = (e, t) => t ? e.filter((n) => t(n)) : e, a = (e, t, n, s) => {
  const o = i(S(t, s), n), l = o.filter((d) => e.has(d)).length, r = o.length > 0 && l === o.length, c = l > 0 && !r;
  return {
    selectedIds: e,
    allSelected: r,
    indeterminate: c
  };
}, f = (e, t, n, s, o, l) => {
  if (l && !l(t))
    return e;
  const r = o(t, n), c = new Set(e.selectedIds);
  return c.has(r) ? c.delete(r) : c.add(r), a(c, s, o, l);
}, h = (e, t, n, s) => {
  const o = S(t, s), l = i(o, n), r = l.length > 0 && l.every((d) => e.selectedIds.has(d)), c = new Set(e.selectedIds);
  return r ? l.forEach((d) => {
    c.delete(d);
  }) : l.forEach((d) => {
    c.add(d);
  }), a(c, t, n, s);
}, m = (e) => ({
  checked: e.allSelected,
  indeterminate: e.indeterminate
});
export {
  g as createEmptySelectionState,
  m as resolveSelectionHeaderState,
  h as toggleAllSelection,
  f as toggleRowSelection
};
