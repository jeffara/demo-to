import { jsxs as h, jsx as i } from "react/jsx-runtime";
import '../../../assets/components/Atoms/IconChip/IconChip.modules.css';/* empty css                      */
import { Button as I } from "../../Molecules/Button/Button.js";
import { Badge as _ } from "../Badge/Badge.js";
import { STATE as b, TAGGING_EVENT as N } from "../../../utils/pattern.js";
const $ = (l) => {
  const { variant: t, count: o, state: e, icon: a, selected: n, showBadge: r = !1, onClick: d, onTag: s } = l, c = n === !1 || e !== b.ENABLED || r === !1, m = "btn-icon-chip__general", p = n ? `--${e} selected` : `--${e}`, C = (g) => {
    s && s((f) => ({
      ...f,
      name: N.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "IconChip",
        selected: n,
        state: e,
        icon: a,
        show_badge: !c,
        badge_variant: t,
        badge_label: o
      }
    })), d(g);
  };
  return /* @__PURE__ */ h("div", { "data-testid": "IconChip", className: "container", children: [
    !c && /* @__PURE__ */ i(
      _,
      {
        variant: t,
        count: o,
        "data-large": o && o >= 100 ? "true" : "false"
      }
    ),
    /* @__PURE__ */ i(
      I,
      {
        className: `${m}${p}`,
        leadingIcon: a,
        onClick: C,
        size: "small",
        state: e,
        typeButton: "btn-icon-chip"
      }
    )
  ] });
};
export {
  $ as IconChip
};
