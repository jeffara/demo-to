function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEtcCircle = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 36,
  cy: 36,
  r: 30,
  stroke: props.color,
  strokeWidth: 3
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M21 39a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM51 39a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM36 39a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 48,
  height: 48,
  x: 12,
  y: 12,
  fill: "#F56A50",
  rx: 24
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#fff",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M28.5 25.5H36c5.799 0 10.5 4.701 10.5 10.5S41.799 46.5 36 46.5h-7.5v-21Z"
}));
export default ComponenticEtcCircle;