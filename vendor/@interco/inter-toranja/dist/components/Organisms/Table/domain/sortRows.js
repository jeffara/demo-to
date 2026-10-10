import { findColumnById as y, resolveColumnValue as l } from "./resolveColumnValue.js";
const u = (n) => n == null, c = (n) => {
  if (n instanceof Date)
    return n.getTime();
  if (typeof n == "string" && n.length > 0) {
    const t = Date.parse(n);
    return Number.isNaN(t) ? null : t;
  }
  return null;
}, b = (n) => {
  const t = n.filter((e) => !u(e));
  return t.length === 0 ? "text" : t.every((e) => typeof e == "number") ? "number" : t.every((e) => c(e) !== null) ? "date" : "text";
}, N = (n, t) => u(n) && u(t) ? 0 : u(n) ? 1 : u(t) ? -1 : null, C = (n, t, e) => {
  const r = N(n, t);
  if (r !== null)
    return r;
  if (e === "number" && typeof n == "number" && typeof t == "number")
    return n - t;
  if (e === "date") {
    const o = c(n), s = c(t);
    if (o !== null && s !== null)
      return o - s;
  }
  return String(n).localeCompare(String(t), void 0, {
    numeric: !0,
    sensitivity: "base"
  });
}, V = (n, t, e) => {
  if (!e)
    return [...n];
  const r = y(t, e.columnId);
  if (!r)
    return [...n];
  const o = r.sortAccessor ?? r.accessor, s = n.map((i) => l(i, o)), m = b(s), a = e.direction === "asc" ? 1 : -1;
  return [...n].sort((i, f) => {
    const p = l(i, o), d = l(f, o);
    return C(p, d, m) * a;
  });
};
export {
  V as sortRows
};
