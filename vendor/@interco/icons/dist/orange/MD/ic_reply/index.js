function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticReply = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "m11 4.5-8 7 8 7v-4h2.96a8 8 0 0 1 6.266 3.025L21 18.5c0-5.523-4.477-10-10-10v-4Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 11,
  cy: 8.5,
  r: 1,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 21,
  cy: 18.5,
  r: 1,
  fill: props.color
}));
export default ComponenticReply;