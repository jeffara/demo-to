import { jsx as l } from "react/jsx-runtime";
import { Button as m } from "../../../../Button/Button.js";
import { mapStateToSTATE as h } from "../../../utils/stateMapper.js";
import { SIZE as d, HIERARCHY as u } from "../../../../../../utils/pattern.js";
const S = (t, a, i, r) => {
  const e = h(a), n = t.size ?? d.SMALL, c = (o) => {
    o.stopPropagation(), i && i({
      ComponentProperties: {
        component_name: "Button",
        variant: t.variant ?? void 0,
        size: n,
        hierarchy: "hierarchy" in t ? t.hierarchy : void 0,
        state: e,
        label: t.label,
        leading_icon: "icon" in t && t.icon ? "icon" : void 0
      },
      ProductProperties: {
        nested_in: "ListItemAction",
        nested_label: r
      }
    }), t.onClick && t.onClick(o);
  };
  return /* @__PURE__ */ l(
    m,
    {
      label: t.label,
      variant: t.variant,
      hierarchy: t.hierarchy ?? u.PRIMARY,
      size: n,
      hug: !0,
      onClick: c,
      state: e
    }
  );
};
export {
  S as renderButton
};
