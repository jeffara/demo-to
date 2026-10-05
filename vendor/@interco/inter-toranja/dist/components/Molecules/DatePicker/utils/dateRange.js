const l = (t) => new Date(t.getFullYear(), t.getMonth(), t.getDate()), a = (t, e) => t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate(), i = (t, e) => l(t).getTime() < l(e).getTime(), c = (t, e) => l(t).getTime() > l(e).getTime(), d = (t) => !!t && !(t instanceof Date), S = (t) => {
  const e = t.getFullYear(), n = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0");
  return `${e}-${n}-${r}`;
}, f = (t, e) => !!(t && e && c(t, e)), M = (t, e) => {
  var n;
  return e.disabled || f(e.minDate, e.maxDate) || e.minDate && i(t, e.minDate) || e.maxDate && c(t, e.maxDate) ? !0 : !!((n = e.disabledDates) != null && n.call(e, t));
}, D = (t, e, n, r) => e && a(t, e) ? "selected" : r ? "outside-month" : n ? "today" : "unselected", y = (t, e, n) => c(t, e) && i(t, n), m = (t, e, n) => e && n && a(e, n) && a(t, e) ? "selected" : e && a(t, e) ? "start" : n && a(t, n) ? "end" : null, o = (t, e, n, r) => {
  const { start: u, end: s } = e, g = m(t, u, s);
  return g || (u && s && y(t, u, s) ? n ? "middle-today" : "middle" : D(t, null, n, r));
}, h = (t, e) => {
  const n = a(t, e.today);
  if (e.selectionMode === "range" && d(e.value))
    return o(t, e.value, n, e.isOutsideMonth);
  const r = e.value instanceof Date ? e.value : null;
  return D(t, r, n, e.isOutsideMonth);
}, T = /* @__PURE__ */ new Set([
  "selected",
  "start",
  "end",
  "middle",
  "middle-today"
]), C = (t) => T.has(t);
export {
  h as getCellType,
  c as isAfterDay,
  i as isBeforeDay,
  M as isDateDisabled,
  d as isDateRange,
  f as isMinAfterMax,
  a as isSameDay,
  C as isSelectedCell,
  l as startOfDay,
  S as toIsoDate
};
