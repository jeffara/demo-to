function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCartadd = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "m21 7-1.678 8.392A2 2 0 0 1 17.36 17H8.735a2 2 0 0 1-1.98-1.717L5 3H3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 7.5,
  cy: 20.5,
  r: 1.5,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 17.5,
  cy: 20.5,
  r: 1.5,
  fill: props.color
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "m16 6-3 3-3-3M13 9V3"
}));
export default ComponenticCartadd;