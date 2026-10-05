function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHamburguer = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  d: "M2 6.667h12m-12 0C2 5.11 2 2 5.333 2h5.333C14 2 14 5.111 14 6.667m-12 0a1.333 1.333 0 1 0 0 2.666m12-2.666a1.333 1.333 0 1 1 0 2.666m0 0V10c0 1.333 0 4-3.334 4H5.333C2 14 2 11.333 2 10v-.667m12 0H7.755a.306.306 0 0 0-.287.404c.26.778-.315 1.596-1.135 1.596-.82 0-1.394-.818-1.134-1.596a.306.306 0 0 0-.287-.404H2"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 8.667,
  cy: 4,
  fill: props.color,
  rx: 0.667,
  ry: 0.667
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 11.333,
  cy: 4.667,
  fill: props.color,
  rx: 0.667,
  ry: 0.667
}));
export default ComponenticHamburguer;