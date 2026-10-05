import { jsxs as B, jsx as a } from "react/jsx-runtime";
import { IconButton as u } from "../../../../Button/IconButton/IconButton.js";
import { mapStateToSTATE as h } from "../../../utils/stateMapper.js";
import { SIZE as i } from "../../../../../../utils/pattern.js";
const L = (t, d, c, m) => {
  const o = h(d), e = (s) => (r) => {
    r.stopPropagation();
    const n = s === 1 ? t.iconButton : t.iconButtonSecond;
    n && (c && c({
      ComponentProperties: {
        component_name: "IconButton",
        variant: n.variant ?? void 0,
        size: i.SMALL,
        hierarchy: n.hierarchy ?? void 0,
        state: o,
        icon: n.icon ?? void 0
      },
      ProductProperties: {
        nested_in: "ListItemAction",
        nested_label: m
      }
    }), n.onClick && n.onClick(r));
  };
  return /* @__PURE__ */ B("div", { className: "iconButtonTrailing", "data-testid": "iconButtonTrailing", children: [
    /* @__PURE__ */ a(
      u,
      {
        icon: t.iconButton.icon,
        variant: t.iconButton.variant,
        hierarchy: t.iconButton.hierarchy,
        onClick: e(1),
        state: o,
        size: i.SMALL
      }
    ),
    t.iconButtonSecond && /* @__PURE__ */ a(
      u,
      {
        icon: t.iconButtonSecond.icon,
        variant: t.iconButtonSecond.variant,
        hierarchy: t.iconButtonSecond.hierarchy,
        onClick: e(2),
        state: o,
        size: i.SMALL
      }
    )
  ] });
};
export {
  L as renderIconButton
};
