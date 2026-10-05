function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCalculator = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 21.333,
  height: 26.667,
  x: 5.333,
  y: 2.667,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 2.5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M10.666 8H21.333V16H10.666z"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 10.667,
  cy: 21.333,
  fill: props.color,
  rx: 1.333,
  ry: 1.333
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 16,
  cy: 21.333,
  fill: props.color,
  rx: 1.333,
  ry: 1.333
}), /*#__PURE__*/React.createElement("circle", {
  cx: 21.333,
  cy: 21.333,
  r: 1.333,
  fill: props.color
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 10.667,
  cy: 25.333,
  fill: props.color,
  rx: 1.333,
  ry: 1.333
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 16,
  cy: 25.333,
  fill: props.color,
  rx: 1.333,
  ry: 1.333
}), /*#__PURE__*/React.createElement("circle", {
  cx: 21.333,
  cy: 25.333,
  r: 1.333,
  fill: props.color
}));
export default ComponenticCalculator;