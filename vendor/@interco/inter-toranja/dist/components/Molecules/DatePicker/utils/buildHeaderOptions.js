import { DEFAULT_YEAR_RANGE_BEFORE as u, DEFAULT_YEAR_RANGE_AFTER as A } from "../constants.js";
import { capitalizeFirstLetter as p } from "./capitalize-first-letter.js";
import { startOfDay as f } from "./dateRange.js";
const R = (r, e, o, n, i) => Array.from({ length: 12 }, (a, s) => {
  const l = new Date(o, s, 1), t = new Date(o, s + 1, 0), E = !!(n && t < f(n)), c = !!(i && l > f(i));
  return {
    value: s,
    label: p(
      new Intl.DateTimeFormat(r, { month: "long" }).format(l),
      r
    ),
    isDisabled: E || c,
    isSelected: s === e
  };
}), g = (r, e, o, n = u, i = A) => {
  const a = (e == null ? void 0 : e.getFullYear()) ?? r - n, s = (o == null ? void 0 : o.getFullYear()) ?? r + i, l = [];
  for (let t = a; t <= s; t += 1)
    l.push({
      value: t,
      label: String(t),
      isDisabled: !1,
      isSelected: t === r
    });
  return l;
};
export {
  R as buildMonthOptions,
  g as buildYearOptions
};
