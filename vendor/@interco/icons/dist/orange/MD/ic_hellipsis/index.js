function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHellipsis = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 5,
  cy: 12,
  r: 1,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  transform: "rotate(-90 5 12)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 1,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  transform: "rotate(-90 12 12)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 19,
  cy: 12,
  r: 1,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  transform: "rotate(-90 19 12)"
}));
export default ComponenticHellipsis;