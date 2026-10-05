import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { Button as I } from "../../Molecules/Button/Button.js";
import { Badge as _ } from "../Badge/Badge.js";
import { STATE as b, TAGGING_EVENT as N } from "../../../utils/pattern.js";
import '../../../assets/IconChip.css';const A = (l) => {
  const { variant: a, count: n, state: e, icon: t, selected: o, showBadge: r = !1, onClick: d, onTag: s } = l, c = o === !1 || e !== b.ENABLED || r === !1, m = "btn-icon-chip__general", p = o ? `--${e} selected` : `--${e}`, C = (g) => {
    s && s((f) => ({
      ...f,
      name: N.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "IconChip",
        selected: o,
        state: e,
        icon: t,
        show_badge: !c,
        badge_variant: a,
        badge_label: n
      }
    })), d(g);
  };
  return /* @__PURE__ */ h("div", { "data-testid": "IconChip", className: "container", children: [
    !c && /* @__PURE__ */ i(
      _,
      {
        variant: a,
        count: n,
        "data-large": n && n >= 100 ? "true" : "false"
      }
    ),
    /* @__PURE__ */ i(
      I,
      {
        className: `${m}${p}`,
        leadingIcon: t,
        onClick: C,
        size: "small",
        state: e,
        typeButton: "btn-icon-chip"
      }
    )
  ] });
};
export {
  A as IconChip
};
