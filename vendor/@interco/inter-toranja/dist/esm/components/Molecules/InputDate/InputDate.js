import { jsxs as C, jsx as e } from "react/jsx-runtime";
import { useInputDate as I } from "./hooks/useInputDate.js";
import { DATE_PICKER_POPOVER_VARIANTS as T } from "./utils/pickerAnimation.js";
import { DatePicker as R } from "../DatePicker/DatePicker.js";
import { InputBase as x } from "../InputBase/InputBase.js";
import { MaskType as v, InputType as A } from "../InputBase/utils/inputEnums.js";
import '../../../assets/components/Molecules/InputDate/InputDate.modules.css';/* empty css                       */
import { AnimatePresence as E } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as g } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const w = (o) => {
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
    /* @__PURE__ */ e(x, { ...f, label: i, type: A.TEXT, mask: v.DATE }),
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
  w as InputDate
};
