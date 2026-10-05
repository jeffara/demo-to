function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticAccessibility = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("ellipse", {
  cx: 36,
  cy: 12,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 5,
  rx: 3,
  ry: 3
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 5,
  d: "M30 24H42V45H30z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 5,
  d: "M63 18.935C57.366 20.622 44.965 24 36 24s-21.366-3.378-27-5.065M42 45v18M30 45v18"
}));
export default ComponenticAccessibility;