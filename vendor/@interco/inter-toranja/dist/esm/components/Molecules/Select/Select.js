import { jsxs as R, jsx as e } from "react/jsx-runtime";
import { SelectOptionsPanel as O } from "./components/SelectOptionsPanel.js";
import { useSelect as k } from "./hooks/useSelect.js";
import { InputBase as v } from "../InputBase/InputBase.js";
import { InputType as x } from "../InputBase/utils/inputEnums.js";
import { DATE_PICKER_POPOVER_VARIANTS as E } from "../InputDate/utils/pickerAnimation.js";
import '../../../assets/components/Molecules/Select/Select.modules.css';/* empty css                    */
import { AnimatePresence as A } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as N } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
const L = (i) => {
  var r;
  const {
    rootClasses: s,
    triggerClasses: n,
    panelClasses: l,
    rootRef: a,
    panelRef: p,
    triggerRef: c,
    isPanelOpen: m,
    hasDesktopPicker: d,
    panelId: f,
    listboxId: P,
    triggerId: g,
    selectedValue: u,
    options: o,
    handleTriggerClick: h,
    handleHelperClick: T,
    handleOptionSelect: S,
    inputBaseProps: t,
    label: C
  } = k(i), I = d && m;
  return /* @__PURE__ */ R("div", { ref: a, className: s, "data-testid": "Select", children: [
    /* @__PURE__ */ e("div", { ref: c, className: n, onClick: h, children: /* @__PURE__ */ e(
      v,
      {
        ...t,
        label: C,
        type: x.SELECT,
        readOnly: !0,
        id: g,
        onHelper: T,
        customTagProps: {
          ...t.customTagProps,
          customProperties: {
            ...(r = t.customTagProps) == null ? void 0 : r.customProperties,
            component_name: "Select"
          }
        }
      }
    ) }),
    /* @__PURE__ */ e(A, { children: I && o && /* @__PURE__ */ e(
      N.div,
      {
        ref: p,
        id: f,
        className: l,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        variants: E,
        children: /* @__PURE__ */ e(
          O,
          {
            id: P,
            options: o,
            selectedValue: u,
            onSelect: S,
            onTag: t.onTag
          }
        )
      },
      "select-options-panel"
    ) })
  ] });
};
export {
  L as Select
};
