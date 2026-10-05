function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCoupon = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M9 48v7a5 5 0 0 0 5 5h44a5 5 0 0 0 5-5V17a5 5 0 0 0-5-5H14a5 5 0 0 0-5 5v7"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 33,
  cy: 28.5,
  r: 4.5,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 48,
  cy: 43.5,
  r: 4.5,
  fill: props.color
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "m49.5 27-18 18M9 48c6.627 0 12-5.373 12-12S15.627 24 9 24"
}));
export default ComponenticCoupon;