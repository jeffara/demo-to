function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPaste = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M10 3.333h1.167a1.5 1.5 0 0 1 1.5 1.5V12.5a1.5 1.5 0 0 1-1.5 1.5H4.833a1.5 1.5 0 0 1-1.5-1.5V4.833a1.5 1.5 0 0 1 1.5-1.5H6"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M6 3.333v2h4v-2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 3.333,
  r: 1.333,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5
}));
export default ComponenticPaste;