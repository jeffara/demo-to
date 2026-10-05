import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { CalendarHeaderDropdown as l } from "./CalendarHeaderDropdown.js";
import { SELECT_MONTH_LABEL as O, SELECT_YEAR_LABEL as M, PREVIOUS_MONTH_LABEL as y, NEXT_MONTH_LABEL as g } from "../constants.js";
import { useCalendarHeader as R } from "../hooks/useCalendarHeader.js";
import { Chip as s } from "../../Chip/Chip.js";
import { STATE as o } from "../../../../utils/pattern.js";
import { NeutralIconButton as h } from "../../../Atoms/NeutralIconButton/NeutralIconButton.js";
const q = ({
  monthLabel: _,
  yearLabel: m,
  monthTitleId: E,
  showPrevious: L,
  showNext: k,
  isDisabled: t,
  openDropdown: v,
  monthOptions: C,
  yearOptions: I,
  onPreviousMonth: N,
  onNextMonth: S,
  onMonthChipClick: w,
  onYearChipClick: f,
  onMonthSelect: A,
  onYearSelect: D,
  onCloseDropdown: B
}) => {
  const d = t ? o.DISABLED : o.ENABLED, n = t ? o.DISABLED : o.ENABLED, {
    headerRef: T,
    monthChipId: b,
    yearChipId: x,
    monthDropdownId: c,
    yearDropdownId: p,
    isMonthDropdownOpen: r,
    isYearDropdownOpen: i,
    handleMonthSelect: u,
    handleYearSelect: H
  } = R({
    monthTitleId: E,
    openDropdown: v,
    onCloseDropdown: B,
    onMonthSelect: A,
    onYearSelect: D
  });
  return /* @__PURE__ */ a("div", { ref: T, className: "date-picker__header", children: [
    /* @__PURE__ */ a("div", { className: "date-picker__header-chips", children: [
      /* @__PURE__ */ a("div", { className: "date-picker__header-chip-wrapper", children: [
        /* @__PURE__ */ e(
          s,
          {
            id: b,
            label: _,
            state: d,
            trailingIcon: "ic_chevron_down",
            selected: r,
            "aria-label": O,
            "aria-expanded": r,
            "aria-haspopup": "listbox",
            "aria-controls": r ? c : void 0,
            "data-testid": "date-picker-month-chip",
            onClick: w
          }
        ),
        r && /* @__PURE__ */ e(
          l,
          {
            id: c,
            testId: "date-picker-month-dropdown",
            options: C,
            onSelect: u
          }
        )
      ] }),
      /* @__PURE__ */ a("div", { className: "date-picker__header-chip-wrapper", children: [
        /* @__PURE__ */ e(
          s,
          {
            id: x,
            label: m,
            state: d,
            trailingIcon: "ic_chevron_down",
            selected: i,
            "aria-label": M,
            "aria-expanded": i,
            "aria-haspopup": "listbox",
            "aria-controls": i ? p : void 0,
            "data-testid": "date-picker-year-chip",
            onClick: f
          }
        ),
        i && /* @__PURE__ */ e(
          l,
          {
            id: p,
            testId: "date-picker-year-dropdown",
            options: I,
            onSelect: H
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a("div", { className: "date-picker__nav", children: [
      L && /* @__PURE__ */ e(
        h,
        {
          icon: "ic_chevron_left",
          size: "small",
          state: n,
          "aria-label": y,
          onClick: N
        }
      ),
      k && /* @__PURE__ */ e(
        h,
        {
          icon: "ic_chevron_right",
          size: "small",
          state: n,
          "aria-label": g,
          onClick: S
        }
      )
    ] })
  ] });
};
export {
  q as CalendarHeader
};
