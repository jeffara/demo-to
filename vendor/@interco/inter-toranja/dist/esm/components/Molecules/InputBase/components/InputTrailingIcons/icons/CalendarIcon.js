import { jsx as n } from "react/jsx-runtime";
import { NeutralIconButton as t } from "../../../../../Atoms/NeutralIconButton/NeutralIconButton.js";
const d = ({ onOpenDatePicker: o, isDisabled: a }) => /* @__PURE__ */ n(
  t,
  {
    onClick: () => {
      o();
    },
    icon: "ic_calendar",
    "data-testid": "calendar-icon",
    tabIndex: 0,
    disabled: a
  }
);
export {
  d as CalendarIcon
};
