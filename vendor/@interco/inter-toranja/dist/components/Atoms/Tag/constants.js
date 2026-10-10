const e = [
  "blue",
  "brand",
  "brown",
  "cyan",
  "gold",
  "green",
  "mint",
  "neutral",
  "orange",
  "pink",
  "purple",
  "red",
  "yellow"
], s = [
  "pf-prime",
  "pf-digital",
  "pf-one",
  "pf-win",
  "pj-corporate",
  "pj-digital",
  "pj-enterprise",
  "pj-middle",
  "pj-pro",
  "pj-win"
], i = (r) => r, l = i([...e, ...s]), c = new Set(l), p = (r) => typeof r == "string" && c.has(r), a = (r) => r.startsWith("pf-") || r.startsWith("pj-"), g = (r) => r === "strong" || r === "soft", f = (r) => r === "small" || r === "large" || r === "extraLarge", T = (r) => typeof r == "string" ? r : typeof r == "number" || typeof r == "boolean" ? String(r) : "", b = (r, t) => a(r) ? "strong" : g(t) ? t : "soft", y = (r) => {
  if (typeof r != "object" || r === null || !("label" in r))
    return null;
  const t = r, n = T(t.label);
  if (n.length === 0)
    return null;
  const o = p(t.color) ? t.color : "neutral";
  return {
    label: n,
    color: o,
    hierarchy: b(o, t.hierarchy),
    size: f(t.size) ? t.size : "small"
  };
};
export {
  e as TAG_ACCENT_COLORS,
  l as TAG_COLORS,
  s as TAG_SEGMENT_COLORS,
  a as isSegmentTagColor,
  p as isTagColor,
  y as parseTagAccessor
};
