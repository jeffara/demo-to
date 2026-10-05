import { jsxs as i, jsx as a } from "react/jsx-runtime";
import { CalendarDayCell as v } from "./CalendarDayCell.js";
import { CalendarHeader as g } from "./CalendarHeader.js";
const f = ({
  monthView: e,
  weekdayLabels: t,
  showControls: d,
  showPrevious: n,
  showNext: s,
  isDisabled: o,
  openHeaderDropdown: c,
  monthOptions: m,
  yearOptions: p,
  onPreviousMonth: y,
  onNextMonth: _,
  onMonthChipClick: b,
  onYearChipClick: h,
  onMonthSelect: k,
  onYearSelect: L,
  onCloseHeaderDropdown: I,
  onDayClick: N,
  onDayKeyDown: T
}) => {
  const $ = d ? `${e.monthTitleId}-month ${e.monthTitleId}-year` : e.monthTitleId;
  return /* @__PURE__ */ i("div", { className: "date-picker__month", children: [
    d ? /* @__PURE__ */ a(
      g,
      {
        monthLabel: e.monthLabel,
        yearLabel: e.yearLabel,
        monthTitleId: e.monthTitleId,
        showPrevious: n,
        showNext: s,
        isDisabled: o,
        openDropdown: c,
        monthOptions: m,
        yearOptions: p,
        onPreviousMonth: y,
        onNextMonth: _,
        onMonthChipClick: b,
        onYearChipClick: h,
        onMonthSelect: k,
        onYearSelect: L,
        onCloseDropdown: I
      }
    ) : /* @__PURE__ */ a("span", { id: e.monthTitleId, className: "sr-only", children: `${e.monthLabel} ${e.yearLabel}` }),
    /* @__PURE__ */ i(
      "div",
      {
        className: "date-picker__grid",
        role: "grid",
        "aria-labelledby": $,
        "aria-disabled": o,
        children: [
          /* @__PURE__ */ a("div", { className: "date-picker__weekdays", role: "row", children: t.map((r, l) => /* @__PURE__ */ a(
            "div",
            {
              className: "date-picker__weekday type-label-medium-regular",
              role: "columnheader",
              children: r
            },
            `${r}-${l}`
          )) }),
          e.weeks.map((r) => /* @__PURE__ */ a("div", { className: "date-picker__week", role: "row", children: r.map((l) => /* @__PURE__ */ a(
            v,
            {
              day: l,
              onDayClick: N,
              onDayKeyDown: T
            },
            l.isoDate
          )) }, r[0].isoDate))
        ]
      }
    )
  ] });
};
export {
  f as CalendarMonth
};
