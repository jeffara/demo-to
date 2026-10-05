import { jsxs as _, jsx as o } from "react/jsx-runtime";
import { CLEAR_SELECTION_LABEL as a, DATE_PICKER_CLEAR_BUTTON_TEST_ID as i, APPLY_SELECTION_LABEL as A, DATE_PICKER_APPLY_BUTTON_TEST_ID as L } from "../constants.js";
import { HIERARCHY as d, SIZE as s, VARIANT as l } from "../../../../utils/pattern.js";
import { Button as r } from "../../Button/Button.js";
const E = {
  variant: l.DEFAULT,
  size: s.SMALL,
  hierarchy: d.TERTIARY,
  hug: !0
}, R = ({ isDisabled: t, onClear: e, onApply: T }) => /* @__PURE__ */ _("div", { className: "date-picker__footer", children: [
  /* @__PURE__ */ o(
    r,
    {
      ...E,
      "data-testid": i,
      label: a,
      disabled: t,
      onClick: e
    }
  ),
  /* @__PURE__ */ o(
    r,
    {
      ...E,
      "data-testid": L,
      label: A,
      disabled: t,
      onClick: T
    }
  )
] });
export {
  R as CalendarFooter
};
