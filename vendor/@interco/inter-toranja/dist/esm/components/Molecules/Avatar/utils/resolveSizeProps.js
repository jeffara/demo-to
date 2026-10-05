import { DEFAULT_EDIT_ICON as a } from "../hooks/useAvatar.js";
import { SIZE as d } from "../../../../utils/pattern.js";
const t = (e) => e.size === d.LARGE ? e.edit === !0 ? {
  hasBadge: !1,
  badgeProps: void 0,
  edit: !0,
  onEdit: e.onEdit,
  editIcon: e.editIcon ?? a,
  flag: void 0,
  canShowFlag: !1
} : {
  hasBadge: !1,
  badgeProps: void 0,
  edit: !1,
  onEdit: void 0,
  editIcon: a,
  flag: e.flag,
  canShowFlag: !0
} : e.size === d.MEDIUM ? {
  hasBadge: !!e.hasBadge,
  badgeProps: e.badgeProps,
  edit: !1,
  onEdit: void 0,
  editIcon: a,
  flag: e.flag,
  canShowFlag: !0
} : {
  hasBadge: !!e.hasBadge,
  badgeProps: e.badgeProps,
  edit: !1,
  onEdit: void 0,
  editIcon: a,
  flag: void 0,
  canShowFlag: !1
};
export {
  t as resolveSizeProps
};
