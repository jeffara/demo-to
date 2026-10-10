import { STATE as r, TAGGING_EVENT as u } from "../../../../utils/pattern.js";
import { resolveContentProps as D } from "../utils/resolveContentProps.js";
import { resolveSizeProps as y } from "../utils/resolveSizeProps.js";
import { getInitials as L } from "../utils/getInitials.js";
import { getInitialTypographyClassName as S, getFlagClassName as v, getAvatarClassName as w, getContainerClassName as G } from "../utils/class-names.js";
const H = "ic_edit", O = 100, U = (l) => {
  var f;
  const { variant: i, state: t = r.ENABLED, size: s, color: g, onClick: c, onTag: d } = l, n = t === r.ENABLED, N = t === r.DISABLED, C = t === r.SKELETON, E = n && !C, o = D(l), a = y(l), m = !!(a.edit && a.onEdit && n), p = !!(a.canShowFlag && a.flag && n && !m), h = !!(a.hasBadge && n && a.badgeProps), A = !!((f = a.badgeProps) != null && f.count && a.badgeProps.count >= O), T = o.category && o.label ? L(o.category, o.label) : null, I = o.label ?? o.alt ?? "", b = (e) => {
    d && d((B) => ({
      ...B,
      name: u.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Avatar",
        variant: i,
        size: s,
        state: t,
        color: g,
        icon: o.iconAsset ?? "",
        label: o.label ?? "",
        show_edit: a.edit,
        show_badge: a.hasBadge,
        badge_variant: a.badgeProps ? a.badgeProps.variant : !1,
        badge_label: a.badgeProps ? a.badgeProps.count : !1,
        flag: p ? a.flag ?? "" : ""
      }
    })), E && (c == null || c(e));
  }, P = (e) => {
    b(e);
  }, _ = (e) => {
    e.key !== "Enter" && e.key !== " " || (e.key === " " && e.preventDefault(), b(e));
  };
  return {
    variant: i,
    state: t,
    iconAsset: o.iconAsset,
    src: o.src,
    alt: o.alt,
    onError: o.onError,
    badgeProps: a.badgeProps,
    isBadgeLarge: A,
    editIcon: a.editIcon,
    flag: a.flag,
    onEdit: a.onEdit,
    shouldShowEdit: m,
    shouldShowFlag: p,
    shouldShowBadge: h,
    isDisabled: N,
    isInteractive: E,
    containerClassName: G(),
    avatarClassName: w({ variant: i, size: s, state: t, color: g }),
    flagClassName: v(s),
    initials: T,
    initialTypographyClassName: S(s),
    ariaLabel: I,
    handleClick: P,
    handleKeyDown: _
  };
};
export {
  H as DEFAULT_EDIT_ICON,
  U as useAvatar
};
