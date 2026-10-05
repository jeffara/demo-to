function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticAccessibility = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 4,
  r: 1,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M10 8H14V15H10z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M21 6.312C19.122 6.874 14.988 8 12 8 9.012 8 4.878 6.874 3 6.312M14 15v6M10 15v6"
}));
export default ComponenticAccessibility;