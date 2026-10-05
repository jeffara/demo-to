function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticConfig = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M2.497 8.795a1.5 1.5 0 0 1 0-1.59l2.396-3.833a1.5 1.5 0 0 1 1.272-.705h3.67a1.5 1.5 0 0 1 1.272.705l2.396 3.833a1.5 1.5 0 0 1 0 1.59l-2.396 3.833a1.5 1.5 0 0 1-1.272.705h-3.67a1.5 1.5 0 0 1-1.272-.705L2.497 8.795Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 8,
  r: 2,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5
}));
export default ComponenticConfig;