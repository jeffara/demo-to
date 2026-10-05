function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFlashlight = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M3.333 3.5a1.5 1.5 0 0 1 1.5-1.5h6.334a1.5 1.5 0 0 1 1.5 1.5v1.48a1.5 1.5 0 0 1-.159.67l-1.016 2.033a1.5 1.5 0 0 0-.159.671V12.5a1.5 1.5 0 0 1-1.5 1.5H6.167a1.5 1.5 0 0 1-1.5-1.5V8.354a1.5 1.5 0 0 0-.159-.67L3.492 5.65a1.5 1.5 0 0 1-.159-.67V3.5Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M3.333 5.333h9.334"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M8 8.667v2"
}));
export default ComponenticFlashlight;