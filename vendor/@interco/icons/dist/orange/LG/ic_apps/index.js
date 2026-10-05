function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticApps = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("ellipse", {
  cx: 16,
  cy: 7.333,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 3.333,
  ry: 3.333,
  transform: "rotate(-90 16 7.333)"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 16,
  cy: 24.667,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 3.333,
  ry: 3.333,
  transform: "rotate(-90 16 24.667)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 24.667,
  cy: 16,
  r: 3.333,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  transform: "rotate(-90 24.667 16)"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 7.333,
  cy: 16,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 3.333,
  ry: 3.333,
  transform: "rotate(-90 7.333 16)"
}));
export default ComponenticApps;