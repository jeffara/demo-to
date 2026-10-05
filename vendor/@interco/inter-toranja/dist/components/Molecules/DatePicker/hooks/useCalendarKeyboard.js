import { useRef as y, useEffect as E, useCallback as d } from "react";
import { DATE_PICKER_DAY_TEST_ID_PREFIX as p } from "../constants.js";
import { shiftVisibleMonthToInclude as D, addMonths as l, endOfWeek as w, startOfWeek as T, addDays as n } from "../utils/buildCalendarGrid.js";
import { toIsoDate as A } from "../utils/dateRange.js";
const _ = {
  ArrowLeft: (r) => n(r, -1),
  ArrowRight: (r) => n(r, 1),
  ArrowUp: (r) => n(r, -7),
  ArrowDown: (r) => n(r, 7),
  Home: (r, t) => T(r, t),
  End: (r, t) => w(r, t),
  PageUp: (r) => l(r, -1),
  PageDown: (r) => l(r, 1)
}, R = ({
  focusedDate: r,
  onFocusedDateChange: t,
  visibleMonth: f,
  onVisibleMonthChange: s,
  weekStartsOn: m,
  isDisabled: a,
  onSelect: c
}) => {
  const u = y(!1);
  E(() => {
    if (!u.current)
      return;
    u.current = !1;
    const e = document.querySelector(
      `[data-testid="${p}-${A(r)}"]`
    );
    e instanceof HTMLElement && e.focus();
  }, [r]);
  const i = d(
    (e) => {
      u.current = !0, t(e);
      const o = D(e, f);
      o.getTime() !== f.getTime() && s(o);
    },
    [t, s, f]
  );
  return { handleDayKeyDown: d(
    (e) => {
      if (a)
        return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault(), c(r);
        return;
      }
      const o = _[e.key];
      o && (e.preventDefault(), i(o(r, m)));
    },
    [r, a, i, c, m]
  ) };
};
export {
  R as useCalendarKeyboard
};
