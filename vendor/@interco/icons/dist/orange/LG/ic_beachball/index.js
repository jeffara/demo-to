function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBeachball = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 16,
  cy: 16,
  r: 13.333,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 13.333,
  cy: 12,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 4,
  ry: 4
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M15.333 16s.425 3.779 1.334 6c1.066 2.606 4 6 4 6M17.333 12.667s4.275-.395 6.667.666c2.194.974 4.667 4 4.667 4M15.333 8s.973-1.867 2-2.666c1.3-1.011 4-1.334 4-1.334M10.667 8.667s-.225-1.306-.667-2c-.395-.622-1.333-1.334-1.333-1.334M9.333 12s-2.115.14-3.333.667c-1.53.662-3.333 2.666-3.333 2.666M10 15.333S8.452 18.07 8 20c-.594 2.535 0 6.667 0 6.667"
}));
export default ComponenticBeachball;