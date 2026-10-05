import { jsx as T } from "react/jsx-runtime";
import { Button as p } from "../Button.js";
import { SIZE as s, VARIANT as A, STATE as C, TAGGING_EVENT as l } from "../../../../utils/pattern.js";
const h = (a) => {
  const {
    size: n = s.LARGE,
    variant: o = A.DEFAULT,
    hierarchy: t,
    state: e = C.ENABLED,
    icon: i,
    onClick: r,
    onTag: c,
    ...m
  } = a;
  return /* @__PURE__ */ T(
    p,
    {
      ...m,
      hierarchy: t,
      leadingIcon: i,
      onClick: (E) => {
        c && c((I) => ({
          ...I,
          name: l.INTERACTION_CLICK,
          ComponentProperties: {
            component_name: "IconButton",
            variant: o,
            size: n,
            hierarchy: t,
            state: e,
            icon: i
          }
        })), r && r(E);
      },
      size: n,
      state: e,
      typeButton: "btn-icon",
      variant: o
    }
  );
};
export {
  h as IconButton
};
