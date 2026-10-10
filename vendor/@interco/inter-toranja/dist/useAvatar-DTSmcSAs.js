import { getInitials as _ } from "./components/Molecules/Avatar/utils/getInitials.js";
import { resolveContentProps as w } from "./components/Molecules/Avatar/utils/resolveContentProps.js";
import { getInitialTypographyClassName as L, getFlagClassName as y, getAvatarClassName as F, getContainerClassName as p } from "./components/Molecules/Avatar/utils/class-names.js";
import { SIZE as B, STATE as l, TAGGING_EVENT as G } from "./utils/pattern.js";
const z = (e) => e.size === B.LARGE ? e.edit === !0 ? {
  hasBadge: !1,
  badgeProps: void 0,
  edit: !0,
  onEdit: e.onEdit,
  editIcon: e.editIcon ?? d,
  flag: void 0,
  canShowFlag: !1
} : {
  hasBadge: !1,
  badgeProps: void 0,
  edit: !1,
  onEdit: void 0,
  editIcon: d,
  flag: e.flag,
  canShowFlag: !0
} : e.size === B.MEDIUM ? {
  hasBadge: !!e.hasBadge,
  badgeProps: e.badgeProps,
  edit: !1,
  onEdit: void 0,
  editIcon: d,
  flag: e.flag,
  canShowFlag: !0
} : {
  hasBadge: !!e.hasBadge,
  badgeProps: e.badgeProps,
  edit: !1,
  onEdit: void 0,
  editIcon: d,
  flag: void 0,
  canShowFlag: !1
}, d = "ic_edit", O = 100, H = (e) => {
  var u;
  const { variant: r, state: s = l.ENABLED, size: n, color: c, onClick: g, onTag: f } = e, i = s === l.ENABLED, I = s === l.DISABLED, P = s === l.SKELETON, E = i && !P, o = w(e), a = z(e), b = !!(a.edit && a.onEdit && i), h = !!(a.canShowFlag && a.flag && i && !b), N = !!(a.hasBadge && i && a.badgeProps), A = !!((u = a.badgeProps) != null && u.count && a.badgeProps.count >= O), C = o.category && o.label ? _(o.category, o.label) : null, S = o.label ?? o.alt ?? "", m = (t) => {
    f && f((D) => ({
      ...D,
      name: G.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Avatar",
        variant: r,
        size: n,
        state: s,
        color: c,
        icon: o.iconAsset ?? "",
        label: o.label ?? "",
        show_edit: a.edit,
        show_badge: a.hasBadge,
        badge_variant: a.badgeProps ? a.badgeProps.variant : !1,
        badge_label: a.badgeProps ? a.badgeProps.count : !1,
        flag: h ? a.flag ?? "" : ""
      }
    })), E && (g == null || g(t));
  }, v = (t) => {
    m(t);
  }, T = (t) => {
    t.key !== "Enter" && t.key !== " " || (t.key === " " && t.preventDefault(), m(t));
  };
  return {
    variant: r,
    state: s,
    iconAsset: o.iconAsset,
    src: o.src,
    alt: o.alt,
    onError: o.onError,
    badgeProps: a.badgeProps,
    isBadgeLarge: A,
    editIcon: a.editIcon,
    flag: a.flag,
    onEdit: a.onEdit,
    shouldShowEdit: b,
    shouldShowFlag: h,
    shouldShowBadge: N,
    isDisabled: I,
    isInteractive: E,
    containerClassName: p(),
    avatarClassName: F({ variant: r, size: n, state: s, color: c }),
    flagClassName: y(n),
    initials: C,
    initialTypographyClassName: L(n),
    ariaLabel: S,
    handleClick: v,
    handleKeyDown: T
  };
};
export {
  d as D,
  z as r,
  H as u
};
