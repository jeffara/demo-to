import { jsx as a } from "react/jsx-runtime";
import { DATE_PICKER_DAY_TEST_ID_PREFIX as s } from "../constants.js";
const d = ({ day: e, onDayClick: i, onDayKeyDown: l }) => /* @__PURE__ */ a(
  "button",
  {
    type: "button",
    role: "gridcell",
    className: e.dayClasses,
    tabIndex: e.tabIndex,
    disabled: e.isDisabled,
    "aria-disabled": e.isDisabled,
    "aria-selected": e.isSelected,
    "aria-current": e.isToday ? "date" : void 0,
    "aria-label": e.ariaLabel,
    "data-testid": `${s}-${e.isoDate}`,
    onClick: () => i(e.date),
    onKeyDown: l,
    children: /* @__PURE__ */ a("span", { className: "date-picker__day-label", children: e.dayNumber })
  }
);
export {
  d as CalendarDayCell
};
