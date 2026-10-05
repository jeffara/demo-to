function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSecurity = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 16,
  height: 10,
  x: 4,
  y: 11,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  rx: 2
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M8 11V7a4 4 0 1 1 8 0v4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 16,
  r: 2,
  fill: props.color
}));
export default ComponenticSecurity;