import { jsx as l } from "react/jsx-runtime";
import { Button as m } from "../../../../Button/Button.js";
import { mapStateToSTATE as h } from "../../../utils/stateMapper.js";
import { SIZE as a, HIERARCHY as d } from "../../../../../../utils/pattern.js";
const S = (i, o, t, r) => {
  const e = h(o), c = (n) => {
    n.stopPropagation(), t && t({
      ComponentProperties: {
        component_name: "Button",
        variant: i.variant ?? void 0,
        size: i.size ?? a.SMALL,
        hierarchy: "hierarchy" in i ? i.hierarchy : void 0,
        state: e,
        label: i.label,
        leading_icon: "icon" in i && i.icon ? "icon" : void 0
      },
      ProductProperties: {
        nested_in: "ListItemAction",
        nested_label: r
      }
    }), i.onClick && i.onClick(n);
  };
  return /* @__PURE__ */ l(
    m,
    {
      label: i.label,
      variant: i.variant,
      hierarchy: i.hierarchy ?? d.PRIMARY,
      size: i.size ?? a.SMALL,
      onClick: c,
      state: e
    }
  );
};
export {
  S as renderButton
};
