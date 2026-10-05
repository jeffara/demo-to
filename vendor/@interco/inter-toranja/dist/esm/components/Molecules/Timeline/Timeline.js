import { jsx as i } from "react/jsx-runtime";
import { TimelineItem as l } from "./TimelineItemComponent/TimelineItem.js";
import { classNamesMerge as n } from "../../../utils/classNamesMerge.js";
import '../../../assets/components/Molecules/Timeline/Timeline.modules.css';/* empty css                      */
const N = ({ items: o, state: e, onTag: r }) => {
  const m = "timeline", s = n(m, `${m}--${e}`);
  return /* @__PURE__ */ i("div", { className: s, children: o.map((t) => /* @__PURE__ */ i(l, { ...t, state: e, onTag: r })) });
};
export {
  N as Timeline
};
