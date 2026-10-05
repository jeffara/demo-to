function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticList = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M14 8H5M14 4H5M14 12H5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 2,
  cy: 4,
  r: 1,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 2,
  cy: 8,
  r: 1,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 2,
  cy: 12,
  r: 1,
  fill: props.color
}));
export default ComponenticList;