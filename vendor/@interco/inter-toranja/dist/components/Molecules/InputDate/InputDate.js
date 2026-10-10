import { jsxs as C, jsx as e } from "react/jsx-runtime";
import { useInputDate as I } from "./hooks/useInputDate.js";
import { DATE_PICKER_POPOVER_VARIANTS as T } from "./utils/pickerAnimation.js";
import { DatePicker as R } from "../DatePicker/DatePicker.js";
import { InputBase as x } from "../InputBase/InputBase.js";
import { MaskType as A, InputType as v } from "../InputBase/utils/inputEnums.js";
import { A as E } from "../../../index-CDYq4efL.js";
import { m as g } from "../../../proxy-BBnpZ6GV.js";
import '../../../assets/InputDate.css';const M = (o) => {
  const { label: i = "Texto", ...t } = o, {
    rootClasses: r,
    pickerClasses: a,
    rootRef: s,
    pickerRef: n,
    isPickerOpen: p,
    isDesktop: l,
    pickerId: m,
    pickerValue: c,
    minDate: d,
    maxDate: k,
    locale: u,
    inputBaseProps: f,
    handleRootClick: h,
    handlePickerChange: P
  } = I({ ...t, label: i }), D = l && p;
  return /* @__PURE__ */ C("div", { ref: s, className: r, "data-testid": "InputDate", onClick: h, children: [
    /* @__PURE__ */ e(x, { ...f, label: i, type: v.TEXT, mask: A.DATE }),
    /* @__PURE__ */ e(E, { children: D && /* @__PURE__ */ e(
      g.div,
      {
        ref: n,
        id: m,
        className: a,
        role: "dialog",
        "aria-label": i,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        variants: T,
        children: /* @__PURE__ */ e(
          R,
          {
            value: c,
            selectionMode: "single",
            showControls: !0,
            minDate: d,
            maxDate: k,
            locale: u,
            onChange: P
          }
        )
      },
      "input-date-picker"
    ) })
  ] });
};
export {
  M as InputDate
};
