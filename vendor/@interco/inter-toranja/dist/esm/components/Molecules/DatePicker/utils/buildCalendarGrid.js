import { DAYS_IN_WEEK as a, WEEKS_IN_GRID as g } from "../constants.js";
import { capitalizeFirstLetter as f } from "./capitalize-first-letter.js";
import { startOfDay as h, toIsoDate as d } from "./dateRange.js";
const m = (t, e) => {
  const n = h(t);
  return n.setDate(n.getDate() + e), n;
}, w = (t, e) => {
  const n = new Date(t.getFullYear(), t.getMonth() + e, 1), o = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
  return n.setDate(Math.min(t.getDate(), o)), h(n);
}, c = (t) => new Date(t.getFullYear(), t.getMonth(), 1), y = (t, e) => t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth(), D = (t, e) => {
  const n = (t.getDay() - e + a) % a;
  return m(t, -n);
}, b = (t, e) => m(D(t, e), a - 1), Y = (t, e) => {
  const n = c(t), o = D(n, e), r = [];
  for (let s = 0; s < g; s += 1) {
    const u = [];
    for (let l = 0; l < a; l += 1) {
      const i = m(o, s * a + l);
      u.push({
        date: i,
        isoDate: d(i),
        isOutsideMonth: !y(i, n)
      });
    }
    r.push(u);
  }
  return r;
}, k = (t, e) => {
  const n = new Date(2026, 2, 1), o = new Intl.DateTimeFormat(t, { weekday: "narrow" });
  return Array.from(
    { length: a },
    (r, s) => o.format(m(n, e + s))
  );
}, p = (t, e) => {
  const o = new Intl.DateTimeFormat(e, { month: "short" }).format(t).replace(/\.$/u, "");
  return f(o, e);
}, S = (t, e) => new Intl.DateTimeFormat(e, { year: "numeric" }).format(t), x = (t, e) => new Intl.DateTimeFormat(e, {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}).format(t), E = (t, e) => {
  const n = c(e), o = w(n, 1);
  return t >= n && t < o ? n : c(t);
}, L = (t, e) => {
  const n = c(e), o = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate(), r = Math.min(t.getDate(), o);
  return h(new Date(n.getFullYear(), n.getMonth(), r));
};
export {
  m as addDays,
  w as addMonths,
  Y as buildCalendarGrid,
  b as endOfWeek,
  x as formatDayLabel,
  p as formatMonthLabel,
  S as formatYearLabel,
  k as getWeekdayLabels,
  y as isSameMonth,
  L as shiftFocusIntoMonth,
  E as shiftVisibleMonthToInclude,
  c as startOfMonth,
  D as startOfWeek
};
