import { jsxs as R, jsx as e } from "react/jsx-runtime";
import { SelectOptionsPanel as O } from "./components/SelectOptionsPanel.js";
import { useSelect as k } from "./hooks/useSelect.js";
import { InputBase as v } from "../InputBase/InputBase.js";
import { InputType as x } from "../InputBase/utils/inputEnums.js";
import { DATE_PICKER_POPOVER_VARIANTS as A } from "../InputDate/utils/pickerAnimation.js";
import { A as E } from "../../../index-CDYq4efL.js";
import { m as N } from "../../../proxy-BBnpZ6GV.js";
import '../../../assets/Select.css';const K = (s) => {
  var r;
  const {
    rootClasses: i,
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
  } = k(s), I = d && m;
  return /* @__PURE__ */ R("div", { ref: a, className: i, "data-testid": "Select", children: [
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
    /* @__PURE__ */ e(E, { children: I && o && /* @__PURE__ */ e(
      N.div,
      {
        ref: p,
        id: f,
        className: l,
        initial: "hidden",
        animate: "visible",
        exit: "hidden",
        variants: A,
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
  K as Select
};
