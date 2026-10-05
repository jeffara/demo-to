import { jsx as I } from "react/jsx-runtime";
import { Button as T } from "../Button.js";
import { SIZE as s, VARIANT as A, STATE as C, TAGGING_EVENT as l } from "../../../../utils/pattern.js";
import '../../../../assets/components/Molecules/Button/Button.modules.css';/* empty css                     */
const k = (m) => {
  const {
    size: o = s.LARGE,
    variant: n = A.DEFAULT,
    hierarchy: t,
    state: i = C.ENABLED,
    icon: e,
    onClick: r,
    onTag: c,
    ...a
  } = m;
  return /* @__PURE__ */ I(
    T,
    {
      ...a,
      hierarchy: t,
      leadingIcon: e,
      onClick: (p) => {
        c && c((E) => ({
          ...E,
          name: l.INTERACTION_CLICK,
          ComponentProperties: {
            component_name: "IconButton",
            variant: n,
            size: o,
            hierarchy: t,
            state: i,
            icon: e
          }
        })), r && r(p);
      },
      size: o,
      state: i,
      typeButton: "btn-icon",
      variant: n
    }
  );
};
export {
  k as IconButton
};
