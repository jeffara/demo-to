function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCoupon = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M4 21.333v2.834a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5V7.833a2.5 2.5 0 0 0-2.5-2.5h-19a2.5 2.5 0 0 0-2.5 2.5v2.834"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 14.666,
  cy: 12.667,
  r: 2,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 21.334,
  cy: 19.333,
  r: 2,
  fill: props.color
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "m22 12-8 8M4 21.333a5.333 5.333 0 1 0 0-10.666"
}));
export default ComponenticCoupon;