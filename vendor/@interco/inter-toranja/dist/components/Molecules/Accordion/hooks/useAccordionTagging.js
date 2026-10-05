import { STATE as o, TAGGING_EVENT as d } from "../../../../utils/pattern.js";
const p = (r, n) => {
  if (!r || !n)
    return {};
  const t = {
    leading_variant: n.variant
  };
  return n.variant === "icon" ? {
    ...t,
    leading_icon_variant: n.icon
  } : n.variant === "avatar" ? {
    ...t,
    leading_avatar_variant: n.avatar.variant
  } : t;
}, T = (r, n) => r ? "disabled" : n ? "skeleton" : "enabled", l = ({
  state: r,
  title: n,
  description: t,
  isExpanded: s,
  showLeading: c = !1,
  leading: u,
  onTag: e
}) => {
  const a = r === o.DISABLED, i = r === o.SKELETON;
  return {
    handleTagging: () => {
      if (!e || a || i)
        return;
      const g = p(c, u);
      e((v) => ({
        ...v,
        name: d.INTERACTION_CLICK,
        ComponentProperties: {
          component_name: "Accordion",
          title: n,
          state: T(a, i),
          expand: s,
          description: t,
          ...g
        }
      }));
    }
  };
};
export {
  T as getCurrentState,
  p as getLeadingProperties,
  l as useAccordionTagging
};
