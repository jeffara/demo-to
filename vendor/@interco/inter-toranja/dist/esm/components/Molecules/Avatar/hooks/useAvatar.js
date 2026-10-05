import { STATE as n, TAGGING_EVENT as u } from "../../../../utils/pattern.js";
import { resolveContentProps as D } from "../utils/resolveContentProps.js";
import { resolveSizeProps as L } from "../utils/resolveSizeProps.js";
import { getInitials as S } from "../utils/getInitials.js";
import { getFlagClassName as v, getAvatarClassName as w, getContainerClassName as y } from "../utils/class-names.js";
const R = "ic_edit", G = 100, H = (r) => {
  var p;
  const { variant: l, state: t = n.ENABLED, size: i, color: g, onClick: c, onTag: d } = r, s = t === n.ENABLED, A = t === n.DISABLED, N = t === n.SKELETON, E = s && !N, o = D(r), a = L(r), b = !!(a.edit && a.onEdit && s), m = !!(a.canShowFlag && a.flag && s && !b), C = !!(a.hasBadge && s && a.badgeProps), h = !!((p = a.badgeProps) != null && p.count && a.badgeProps.count >= G), P = o.category && o.label ? S(o.category, o.label) : null, _ = o.label ?? o.alt ?? "", f = (e) => {
    d && d((T) => ({
      ...T,
      name: u.INTERACTION_CLICK,
      ComponentProperties: {
        component_name: "Avatar",
        variant: l,
        size: i,
        state: t,
        color: g,
        icon: o.iconAsset ?? "",
        label: o.label ?? "",
        show_edit: a.edit,
        show_badge: a.hasBadge,
        badge_variant: a.badgeProps ? a.badgeProps.variant : !1,
        badge_label: a.badgeProps ? a.badgeProps.count : !1,
        flag: m ? a.flag ?? "" : ""
      }
    })), E && (c == null || c(e));
  }, B = (e) => {
    f(e);
  }, I = (e) => {
    e.key !== "Enter" && e.key !== " " || (e.key === " " && e.preventDefault(), f(e));
  };
  return {
    variant: l,
    state: t,
    iconAsset: o.iconAsset,
    src: o.src,
    alt: o.alt,
    onError: o.onError,
    badgeProps: a.badgeProps,
    isBadgeLarge: h,
    editIcon: a.editIcon,
    flag: a.flag,
    onEdit: a.onEdit,
    shouldShowEdit: b,
    shouldShowFlag: m,
    shouldShowBadge: C,
    isDisabled: A,
    isInteractive: E,
    containerClassName: y(),
    avatarClassName: w({ variant: l, size: i, state: t, color: g }),
    flagClassName: v(i),
    initials: P,
    ariaLabel: _,
    handleClick: B,
    handleKeyDown: I
  };
};
export {
  R as DEFAULT_EDIT_ICON,
  H as useAvatar
};
