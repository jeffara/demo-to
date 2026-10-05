function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticReply = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M7 3 2 8l5 5v-3h.983A7.534 7.534 0 0 1 14 13a7 7 0 0 0-7-7V3Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 14,
  cy: 13,
  r: 0.75,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 7,
  cy: 6,
  r: 0.75,
  fill: props.color
}));
export default ComponenticReply;