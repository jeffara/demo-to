function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticAccessibility = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("ellipse", {
  cx: 8,
  cy: 2.667,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 1.5,
  rx: 0.667,
  ry: 0.667
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "M6.667 5.333H9.334V10H6.667z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "M14 4.208c-1.252.375-4.008 1.125-6 1.125s-4.748-.75-6-1.125M9.333 10v4M6.667 10v4"
}));
export default ComponenticAccessibility;