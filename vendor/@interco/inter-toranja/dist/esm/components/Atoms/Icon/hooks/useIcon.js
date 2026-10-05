import { useLazyIconSvg as I } from "./useLazyIconSvg.js";
import { IconColors as L } from "../constants/iconColors.js";
import { classNamesMerge as g } from "../../../../utils/classNamesMerge.js";
import { STATE as o, SIZE as r } from "../../../../utils/pattern.js";
import { getIconSize as D } from "../utils/sizeUtils.js";
import { getDisabledIconColor as d, getIconColor as f } from "../utils/colorUtils.js";
const B = ({
  asset: e,
  size: n = r.MEDIUM,
  state: c = o.ENABLED,
  color: m = L.Neutral.Primary,
  isFlag: t = !1
}) => {
  const { iconSvgSrc: l, isLoading: s } = I({ name: e }), i = D(n, t), E = c === o.DISABLED ? d() : f(m), a = g("icon", {
    "icon--small": n === r.SMALL,
    "icon--medium": n === r.MEDIUM,
    "icon--large": n === r.LARGE,
    "icon--enabled": c === o.ENABLED,
    "icon--disabled": c === o.DISABLED,
    "icon--skeleton": c === o.SKELETON
  }), S = {
    ...E,
    width: i,
    height: i
  };
  return {
    iconSvgSrc: l,
    isLoading: s,
    iconClasses: a,
    containerStyles: S
  };
};
export {
  B as useIcon
};
