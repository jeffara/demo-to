function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticListcheck = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "M2 4h2M2 7.333h1.333M2 10.667h4M2 14h12"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M8.566 5.556 9.9 6.8l2.666-2.666"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 10.567,
  cy: 5.467,
  r: 4.667,
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 1.5
}));
export default ComponenticListcheck;