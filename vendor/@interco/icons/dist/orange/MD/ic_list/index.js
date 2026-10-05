function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticList = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M21 12H8M21 6H8M21 18H8"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 3.5,
  cy: 6,
  r: 1.5,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 3.5,
  cy: 12,
  r: 1.5,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 3.5,
  cy: 18,
  r: 1.5,
  fill: props.color
}));
export default ComponenticList;