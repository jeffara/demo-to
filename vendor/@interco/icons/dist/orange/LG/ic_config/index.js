function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticConfig = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M4.828 17.325a2.5 2.5 0 0 1 0-2.65l5.104-8.167a2.5 2.5 0 0 1 2.12-1.175h7.896a2.5 2.5 0 0 1 2.12 1.175l5.104 8.167a2.5 2.5 0 0 1 0 2.65l-5.104 8.167a2.5 2.5 0 0 1-2.12 1.175h-7.896a2.5 2.5 0 0 1-2.12-1.175l-5.104-8.167Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 16,
  cy: 16,
  r: 4,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5
}));
export default ComponenticConfig;