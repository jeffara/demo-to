function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticList = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M28 16H11M28 8H11M28 24H11"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 5,
  cy: 8,
  r: 2,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 5,
  cy: 16,
  r: 2,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 5,
  cy: 24,
  r: 2,
  fill: props.color
}));
export default ComponenticList;