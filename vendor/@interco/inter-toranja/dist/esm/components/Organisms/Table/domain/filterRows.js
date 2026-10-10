import { resolveColumnValue as a } from "./resolveColumnValue.js";
const c = /* @__PURE__ */ new Set(["text", "value", "status", "tags"]), f = (t) => t.trim().toLowerCase(), u = (t) => t.filter((r) => r.cellType === void 0 ? !0 : c.has(r.cellType)), l = (t) => typeof t == "object" && t !== null && !(t instanceof Date), g = (t) => {
  const r = Array.isArray(t.tags) ? t.tags.filter(l).map((e) => String(e.label ?? "")).filter((e) => e.length > 0).join(" ") : "";
  return [t.label, t.value, t.description, r].flatMap((e) => e == null ? [] : [String(e)]).join(" ");
}, s = (t) => t == null ? "" : t instanceof Date ? t.toISOString() : Array.isArray(t) ? t.map((r) => s(r)).join(" ") : l(t) ? g(t) : String(t), m = (t, r, n) => r.some((e) => s(a(t, e.accessor)).toLowerCase().includes(n)), y = (t, r, n) => {
  const e = f(n);
  if (e.length === 0)
    return [...t];
  const i = u(r);
  return i.length === 0 ? [] : t.filter((o) => m(o, i, e));
};
export {
  y as filterRows
};
