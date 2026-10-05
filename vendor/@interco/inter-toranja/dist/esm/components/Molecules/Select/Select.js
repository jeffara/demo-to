import { jsx as l } from "react/jsx-runtime";
import '../../../assets/components/Molecules/Select/Select.modules.css';/* empty css                    */
import { InputBase as f } from "../InputBase/InputBase.js";
import { InputType as C } from "../InputBase/utils/inputEnums.js";
import { STATE as n } from "../../../utils/pattern.js";
const L = (e) => {
  const {
    label: s = "Texto",
    state: o = n.ENABLED,
    hints: a,
    onClick: r,
    onClickHelper: i,
    ...c
  } = e, p = (t) => {
    const d = e.disabled ?? o === n.DISABLED, E = e.readOnly ?? o === n.READ_ONLY, T = o === n.SKELETON;
    !d && !E && !T && r && r(t);
  }, m = (t) => {
    t && t.stopPropagation(), i && i();
  };
  return /* @__PURE__ */ l("div", { className: "select-wrapper", onClick: p, children: /* @__PURE__ */ l(
    f,
    {
      hints: a,
      label: s,
      onTag: e.onTag,
      state: o,
      type: C.SELECT,
      readOnly: !0,
      onHelper: m,
      customTagProps: {
        customProperties: {
          component_name: "Select"
        }
      },
      ...c
    }
  ) });
};
export {
  L as Select
};
