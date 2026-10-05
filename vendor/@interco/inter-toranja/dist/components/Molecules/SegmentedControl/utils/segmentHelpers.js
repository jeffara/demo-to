import e from "react";
const i = (n, o) => {
  const l = "label" in n && n.label ? n.label.replace(/\s+/g, "") : "", c = "icon" in n && e.isValidElement(n.icon) && typeof n.icon.type != "string" ? n.icon.type.name : "";
  return `${o}-${l}${c}`;
}, t = (n) => "icon" in n && n.icon ? n.icon : "", b = (n) => "label" in n ? n.label ?? "" : "", r = (n) => !!("icon" in n && n.icon && !("label" in n && n.label));
export {
  t as getSegmentIconName,
  i as getSegmentKey,
  b as getSegmentLabel,
  r as isIconOnlySegment
};
