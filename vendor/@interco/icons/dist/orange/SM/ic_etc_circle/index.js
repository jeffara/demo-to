function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEtcCircle = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 8,
  r: 6.667,
  stroke: props.color
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M4.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM11.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  d: "M4.667 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM11.333 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334ZM8 8.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 10.667,
  height: 10.667,
  x: 2.667,
  y: 2.667,
  fill: "#F56A50",
  rx: 5.333
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#fff",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M6.333 5.667H8a2.333 2.333 0 1 1 0 4.666H6.333V5.667Z"
}));
export default ComponenticEtcCircle;