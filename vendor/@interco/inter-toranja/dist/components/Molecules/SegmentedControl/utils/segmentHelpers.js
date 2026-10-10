import { SegmentedControlDensityEnum as e } from "../enums.js";
import { SIZE as o } from "../../../../utils/pattern.js";
const r = (n, l) => {
  const c = "label" in n && n.label ? n.label.replace(/\s+/g, "") : "", i = "icon" in n && n.icon ? n.icon : "";
  return `${l}-${c}${i}`;
}, S = (n) => "icon" in n && n.icon ? n.icon : "", b = (n) => "label" in n ? n.label ?? "" : "", s = (n) => !!("icon" in n && n.icon && !("label" in n && n.label)), g = (n) => n === e.COMPACT ? o.MEDIUM : o.SMALL, I = (n) => n ?? e.DEFAULT;
export {
  S as getSegmentIconName,
  r as getSegmentKey,
  b as getSegmentLabel,
  s as isIconOnlySegment,
  g as resolveSegmentIconSize,
  I as resolveSegmentedControlDensity
};
