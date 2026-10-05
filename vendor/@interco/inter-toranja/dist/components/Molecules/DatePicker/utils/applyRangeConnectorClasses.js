import { classNamesMerge as c } from "../../../../utils/classNamesMerge.js";
const l = /* @__PURE__ */ new Set([
  "middle",
  "middle-today",
  "end"
]), d = /* @__PURE__ */ new Set([
  "middle",
  "middle-today",
  "start"
]), o = (s, e) => ({
  ...s,
  dayClasses: c(s.dayClasses, e)
}), _ = (s) => s.map(
  (e) => e.map((t, n) => {
    const a = e[n + 1], r = e[n - 1];
    return t.cellType === "start" && a && l.has(a.cellType) ? o(t, "date-picker__day--range-connector-start") : t.cellType === "end" && r && d.has(r.cellType) ? o(t, "date-picker__day--range-connector-end") : t;
  })
);
export {
  _ as applyRangeConnectorClasses
};
