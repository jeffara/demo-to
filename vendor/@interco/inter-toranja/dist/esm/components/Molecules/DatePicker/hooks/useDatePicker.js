import { useId as ye, useState as M, useEffect as Ce, useCallback as o, useMemo as x } from "react";
import { DEFAULT_SELECTION_MODE as ge, DEFAULT_LOCALE as be, DEFAULT_WEEK_STARTS_ON as Me, DATE_PICKER_ROOT as U } from "../constants.js";
import { useCalendarKeyboard as ke } from "./useCalendarKeyboard.js";
import { applyRangeConnectorClasses as Ve } from "../utils/applyRangeConnectorClasses.js";
import { startOfMonth as y, shiftFocusIntoMonth as Oe, addMonths as $, getWeekdayLabels as Ee, buildCalendarGrid as we, formatDayLabel as Ie, formatYearLabel as Le, formatMonthLabel as Se } from "../utils/buildCalendarGrid.js";
import { buildMonthOptions as Te, buildYearOptions as Ae } from "../utils/buildHeaderOptions.js";
import { startOfDay as D, isDateDisabled as z, toIsoDate as Fe, getCellType as Ne, isSameDay as W, isSelectedCell as Re, isDateRange as Y } from "../utils/dateRange.js";
import { classNamesMerge as Z } from "../../../../utils/classNamesMerge.js";
import { TAGGING_EVENT as Ye } from "../../../../utils/pattern.js";
const Ke = (e) => e instanceof Date ? y(e) : Y(e) && e.start ? y(e.start) : null, Pe = (e, s) => e instanceof Date ? D(e) : Y(e) && e.start ? D(e.start) : D(s), Ge = (e, s) => !e.start || e.end ? { start: s, end: null } : s.getTime() < e.start.getTime() ? { start: s, end: e.start } : { start: e.start, end: s }, B = (e) => e === "range" ? { start: null, end: null } : null, He = (e, s) => Z("date-picker__day", "type-label-medium-regular", {
  "date-picker__day--today": e === "today",
  "date-picker__day--unselected": e === "unselected",
  "date-picker__day--outside-month": e === "outside-month",
  "date-picker__day--selected": e === "selected",
  "date-picker__day--start": e === "start",
  "date-picker__day--middle": e === "middle",
  "date-picker__day--end": e === "end",
  "date-picker__day--middle-today": e === "middle-today",
  "date-picker__day--disabled": s
}), Je = (e) => {
  const {
    value: s,
    defaultValue: K = null,
    onChange: k,
    selectionMode: i = ge,
    minDate: h,
    maxDate: p,
    disabledDates: w,
    visibleMonth: V,
    onVisibleMonthChange: O,
    disabled: c = !1,
    locale: _ = be,
    weekStartsOn: I = Me,
    id: j,
    onTag: L,
    showControls: q = !1,
    showButtons: u = !1
  } = e, E = D(/* @__PURE__ */ new Date()), v = ye(), P = j ?? `${U}-${v.replace(/[^a-zA-Z0-9_-]/g, "-")}`, S = s !== void 0, T = V !== void 0, [J, Q] = M(K), m = S ? s : J, [C, G] = M(() => m ?? K), X = u ? C : m;
  Ce(() => {
    u && G(m ?? B(i));
  }, [m, u, i]);
  const [ee, te] = M(() => V ? y(V) : Ke(m) ?? y(E)), n = T ? y(V) : ee, [H, A] = M(
    () => Pe(m, E)
  ), [ne, F] = M(
    null
  ), r = o(() => {
    F(null);
  }, []), f = o(
    (t) => {
      S || Q(t), k == null || k(t);
    },
    [S, k]
  ), l = o(
    (t) => {
      const a = y(t);
      T || te(a), A((d) => Oe(d, a)), O == null || O(a);
    },
    [T, O]
  ), g = o((t) => {
    G(t);
  }, []), N = o(
    (t) => {
      if (c || z(t, { disabled: c, minDate: h, maxDate: p, disabledDates: w }))
        return;
      if (L && L((d) => ({
        ...d,
        name: Ye.INTERACTION_CLICK,
        ComponentProperties: {
          component_name: "DatePicker",
          selection_mode: i,
          value: Fe(t)
        }
      })), i === "range") {
        const d = u ? C : m, b = Y(d) ? d : { start: null, end: null }, R = Ge(b, D(t));
        if (u) {
          g(R);
          return;
        }
        f(R);
        return;
      }
      const a = D(t);
      if (u) {
        g(a);
        return;
      }
      f(a);
    },
    [
      f,
      c,
      w,
      C,
      p,
      h,
      L,
      m,
      i,
      u,
      g
    ]
  ), ae = o(() => {
    const t = B(i);
    g(t), f(t);
  }, [f, i, g]), oe = o(() => {
    f(C);
  }, [f, C]), { handleDayKeyDown: se } = ke({
    focusedDate: H,
    onFocusedDateChange: A,
    visibleMonth: n,
    onVisibleMonthChange: l,
    weekStartsOn: I,
    isDisabled: c,
    onSelect: N
  }), re = o(
    (t) => {
      A(D(t)), N(t);
    },
    [N]
  ), le = o(() => {
    r(), l($(n, -1));
  }, [r, l, n]), de = o(() => {
    r(), l($(n, 1));
  }, [r, l, n]), ie = o(() => {
    F((t) => t === "month" ? null : "month");
  }, []), ce = o(() => {
    F((t) => t === "year" ? null : "year");
  }, []), ue = o(
    (t) => {
      l(new Date(n.getFullYear(), t, 1)), r();
    },
    [r, l, n]
  ), me = o(
    (t) => {
      l(new Date(t, n.getMonth(), 1)), r();
    },
    [r, l, n]
  ), he = x(
    () => Te(
      _,
      n.getMonth(),
      n.getFullYear(),
      h,
      p
    ),
    [n, _, p, h]
  ), pe = x(
    () => Ae(n.getFullYear(), h, p),
    [n, p, h]
  ), fe = Ee(_, I), De = Ve(
    we(n, I).map(
      (t) => t.map((a) => {
        const d = z(a.date, {
          disabled: c,
          minDate: h,
          maxDate: p,
          disabledDates: w
        }), b = Ne(a.date, {
          selectionMode: i,
          value: X,
          today: E,
          isOutsideMonth: a.isOutsideMonth
        });
        return {
          ...a,
          dayNumber: a.date.getDate(),
          cellType: b,
          isDisabled: d,
          isToday: W(a.date, E),
          isSelected: Re(b),
          tabIndex: W(a.date, H) && !c ? 0 : -1,
          dayClasses: He(b, d),
          ariaLabel: Ie(a.date, _)
        };
      })
    )
  ), _e = [
    {
      month: n,
      monthLabel: Se(n, _),
      yearLabel: Le(n, _),
      monthTitleId: `${P}-month-0`,
      weeks: De
    }
  ];
  return {
    rootClasses: Z(U, {
      "date-picker--disabled": c
    }),
    pickerId: P,
    disabled: c,
    weekdayLabels: fe,
    months: _e,
    openHeaderDropdown: ne,
    monthOptions: he,
    yearOptions: pe,
    handleDayClick: re,
    handleDayKeyDown: se,
    handlePreviousMonth: le,
    handleNextMonth: de,
    handleMonthChipClick: ie,
    handleYearChipClick: ce,
    handleMonthSelect: ue,
    handleYearSelect: me,
    handleCloseHeaderDropdown: r,
    showControls: q,
    showButtons: u,
    handleClear: ae,
    handleApply: oe
  };
};
export {
  Je as useDatePicker
};
