const c = [
  "leading_variant",
  "leading_avatar_variant",
  "leading_avatar_icon",
  "leading_flag",
  "leading_icon",
  "leading_paymentMethod"
], i = [
  "label",
  "label_icon",
  "paragraph",
  "paragraph_support",
  "tag_label"
], l = (e, t) => {
  const a = { ...e };
  return t.forEach((n) => {
    delete a[n];
  }), a;
}, o = (e) => Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0)), s = (e, t) => {
  const a = Object.keys(e), n = Object.keys(t);
  return a.length !== n.length ? !1 : a.every((r) => e[r] === t[r]);
}, g = (e, t, a) => {
  const n = {
    ...l(e, t),
    ...o(a)
  };
  return s(e, n) ? e : n;
};
export {
  i as CONTENT_TAG_KEYS,
  c as LEADING_TAG_KEYS,
  g as mergeTagSlice,
  o as omitUndefinedValues,
  l as removeTagKeys
};
