import { getInitials as T } from "./components/Molecules/Avatar/utils/getInitials.js";
import { resolveContentProps as w } from "./components/Molecules/Avatar/utils/resolveContentProps.js";
import { getFlagClassName as L, getAvatarClassName as F, getContainerClassName as y } from "./components/Molecules/Avatar/utils/class-names.js";
import { SIZE as I, STATE as i, TAGGING_EVENT as G } from "./utils/pattern.js";
const z = (e) => e.size === I.LARGE ? e.edit === !0 ? {
  hasBadge: !1,
  badgeProps: void 0,
  edit: !0,
  onEdit: e.onEdit,
  editIcon: e.editIcon ?? l,
  flag: void 0,
  canShowFlag: !1
} : {
  hasBadge: !1,
  badgeProps: void 0,
  edit: !1,
  onEdit: void 0,
  editIcon: l,
  flag: e.flag,
  canShowFlag: !0
} : e.size === I.MEDIUM ? {
  hasBadge: !!e.hasBadge,
  badgeProps: e.badgeProps,
  edit: !1,
  onEdit: void 0,
  editIcon: l,
  flag: e.flag,
  canShowFlag: !0
} : {
  hasBadge: !!e.hasBadge,
  badgeProps: e.badgeProps,
  edit: !1,
  onEdit: void 0,
  editIcon: l,
  flag: void 0,
  canShowFlag: !1
}, l = "ic_edit", O = 100, U = (e) => {
  var B;
  const { variant: d, state: s = i.ENABLED, size: r, color: c, onClick: g, onTag: f } = e, n = s === i.ENABLED, P = s === i.DISABLED, m = s === i.SKELETON, E = n && !m, o = w(e), a = z(e), b = !!(a.edit && a.onEdit && n), h = !!(a.canShowFlag && a.flag && n && !b), A = !!(a.hasBadge && n && a.badgeProps), N = !!((B = a.badgeProps) != null && B.count && a.badgeProps.count >= O), S = o.category && o.label ? T(o.category, o.label) : null, v = o.label ?? o.alt ?? "", u = (t) => {
    f && f((_) => ({
      ..._,
      name: G.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Avatar",
        variant: d,
        size: r,
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
  }, C = (t) => {
    u(t);
  }, D = (t) => {
    t.key !== "Enter" && t.key !== " " || (t.key === " " && t.preventDefault(), u(t));
  };
  return {
    variant: d,
    state: s,
    iconAsset: o.iconAsset,
    src: o.src,
    alt: o.alt,
    onError: o.onError,
    badgeProps: a.badgeProps,
    isBadgeLarge: N,
    editIcon: a.editIcon,
    flag: a.flag,
    onEdit: a.onEdit,
    shouldShowEdit: b,
    shouldShowFlag: h,
    shouldShowBadge: A,
    isDisabled: P,
    isInteractive: E,
    containerClassName: y(),
    avatarClassName: F({ variant: d, size: r, state: s, color: c }),
    flagClassName: L(r),
    initials: S,
    ariaLabel: v,
    handleClick: C,
    handleKeyDown: D
  };
};
export {
  l as D,
  z as r,
  U as u
};
