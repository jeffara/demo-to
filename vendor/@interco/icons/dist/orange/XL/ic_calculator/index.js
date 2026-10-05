function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCalculator = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 48,
  height: 60,
  x: 12,
  y: 6,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  rx: 5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M24 18H48V36H24z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 24,
  cy: 48,
  r: 3,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 36,
  cy: 48,
  r: 3,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 48,
  cy: 48,
  r: 3,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 24,
  cy: 57,
  r: 3,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 36,
  cy: 57,
  r: 3,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 48,
  cy: 57,
  r: 3,
  fill: props.color
}));
export default ComponenticCalculator;