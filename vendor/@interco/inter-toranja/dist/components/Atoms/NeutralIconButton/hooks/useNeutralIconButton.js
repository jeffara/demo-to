import { STATE as r, SIZE as I, TAGGING_EVENT as g } from "../../../../utils/pattern.js";
const m = (i) => {
  const {
    icon: o,
    state: e = r.ENABLED,
    size: t = I.MEDIUM,
    showBadge: u = !1,
    variant: a = "label",
    count: n = 0,
    onTag: s,
    onClick: c,
    ...E
  } = i, l = e === r.ENABLED && u, d = !!(n && n >= 100);
  return {
    icon: o,
    state: e,
    size: t,
    variant: a,
    count: n,
    rest: E,
    shouldShowBadge: l,
    isLargeBadge: d,
    containerClasses: "container-neutralIconButton",
    handleClick: (B) => {
      s && s((C) => ({
        ...C,
        name: g.INTERACTION_CLICK,
        ComponentProperties: {
          component_name: "NeutralIconButton",
          state: e,
          size: t,
          icon: o,
          show_badge: l,
          badge_variant: a,
          badge_label: n
        }
      })), c && c(B);
    }
  };
};
export {
  m as useNeutralIconButton
};
