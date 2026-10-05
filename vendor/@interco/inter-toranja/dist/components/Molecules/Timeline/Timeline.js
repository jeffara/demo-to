import { jsx as i } from "react/jsx-runtime";
import { TimelineItem as l } from "./TimelineItemComponent/TimelineItem.js";
import { classNamesMerge as n } from "../../../utils/classNamesMerge.js";
const f = ({ items: o, state: e, onTag: r }) => {
  const m = "timeline", s = n(m, `${m}--${e}`);
  return /* @__PURE__ */ i("div", { className: s, children: o.map((t) => /* @__PURE__ */ i(l, { ...t, state: e, onTag: r })) });
};
export {
  f as Timeline
};
