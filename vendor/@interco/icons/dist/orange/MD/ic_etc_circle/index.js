function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEtcCircle = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10,
  stroke: props.color,
  strokeWidth: 2
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 16,
  height: 16,
  x: 4,
  y: 4,
  fill: "#F56A50",
  rx: 8
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#fff",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M9.5 8.5H12a3.5 3.5 0 1 1 0 7H9.5v-7Z"
}));
export default ComponenticEtcCircle;