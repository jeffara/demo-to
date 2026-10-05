function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPlaneDeparture = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M5.37 3.263a2.133 2.133 0 0 1 2.137.05l6.757 3.777 6.118-2.555c1.39-.588 2.913.151 3.432 1.523.522 1.381-.089 3-1.476 3.595L5.645 16.809a2.2 2.2 0 0 1-2.505-.51l-2.5-2.644a2.377 2.377 0 0 1 0-3.245c.377-.4.88-.7 1.515-.7.583 0 1.106.258 1.55.566l.01.007 1.35.962a.84.84 0 0 0 .834.097l1.726-.973-3.385-3.46a2.144 2.144 0 0 1-.022-2.894c.147-.162.32-.299.514-.405l.637-.347Zm.957 1.756A.138.138 0 0 1 6.4 5c.02 0 .045.006.073.024l.041.025 7.112 3.975c.32.18.708.204 1.052.06l6.485-2.707c.27-.114.635.001.781.388.17.448-.055.904-.393 1.05l-16.7 7.159-.02.008a.186.186 0 0 1-.116.014.229.229 0 0 1-.12-.07L2.092 12.28a.378.378 0 0 1 0-.497.55.55 0 0 1 .079-.071c.042.01.163.047.387.202l1.347.96a2.839 2.839 0 0 0 2.937.23l2.622-1.478c.601-.34.768-1.07.506-1.623a1.24 1.24 0 0 0-.233-.336l-4.05-4.14a.134.134 0 0 1-.021-.079c0-.046.016-.074.025-.084h.001l.634-.346Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M6 19a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H6Z"
}));
export default ComponenticPlaneDeparture;