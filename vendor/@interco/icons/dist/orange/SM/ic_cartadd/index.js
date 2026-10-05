function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCartadd = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "m14 4.667-1.092 5.46a1.5 1.5 0 0 1-1.471 1.206h-5.47a1.5 1.5 0 0 1-1.484-1.287L3.333 2H2"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 5,
  cy: 13.667,
  r: 1,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 11.666,
  cy: 13.667,
  r: 1,
  fill: props.color
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m10.666 4-2 2-2-2M8.666 6V2"
}));
export default ComponenticCartadd;