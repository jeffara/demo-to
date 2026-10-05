import { jsxs as N, jsx as o } from "react/jsx-runtime";
import { DATE_PICKER_TEST_ID as S } from "./constants.js";
import { useDatePicker as _ } from "./hooks/useDatePicker.js";
import { CalendarMonth as b } from "./components/CalendarMonth.js";
import { CalendarFooter as I } from "./components/CalendarFooter.js";
import '../../../assets/DatePicker.css';const K = (r) => {
  const {
    rootClasses: s,
    pickerId: h,
    disabled: n,
    weekdayLabels: i,
    months: a,
    openHeaderDropdown: d,
    monthOptions: p,
    yearOptions: c,
    handleDayClick: C,
    handleDayKeyDown: m,
    handlePreviousMonth: D,
    handleNextMonth: k,
    handleMonthChipClick: y,
    handleYearChipClick: w,
    handleMonthSelect: M,
    handleYearSelect: u,
    handleCloseHeaderDropdown: P,
    showControls: e,
    showButtons: f,
    handleClear: v,
    handleApply: x
  } = _(r);
  return /* @__PURE__ */ N("div", { id: h, className: s, "data-testid": S, children: [
    /* @__PURE__ */ o("div", { className: "date-picker__months", children: a.map((t, l) => /* @__PURE__ */ o(
      b,
      {
        monthView: t,
        weekdayLabels: i,
        showControls: e,
        showPrevious: e && l === 0,
        showNext: e && l === a.length - 1,
        isDisabled: n,
        openHeaderDropdown: d,
        monthOptions: p,
        yearOptions: c,
        onPreviousMonth: D,
        onNextMonth: k,
        onMonthChipClick: y,
        onYearChipClick: w,
        onMonthSelect: M,
        onYearSelect: u,
        onCloseHeaderDropdown: P,
        onDayClick: C,
        onDayKeyDown: m
      },
      t.monthTitleId
    )) }),
    f && /* @__PURE__ */ o(I, { isDisabled: n, onClear: v, onApply: x })
  ] });
};
export {
  K as DatePicker
};
