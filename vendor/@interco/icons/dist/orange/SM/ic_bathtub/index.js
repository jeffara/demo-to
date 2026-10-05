function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBathtub = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M3.333 7.333h9.334v3.834a1.5 1.5 0 0 1-1.5 1.5H4.833a1.5 1.5 0 0 1-1.5-1.5V7.333Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M4.667 14v-1.333M11.333 14v-1.333M2 7.333h12M3.333 7.333V3.667a1.667 1.667 0 1 1 3.334 0V4M5.333 4.667H8"
}));
export default ComponenticBathtub;