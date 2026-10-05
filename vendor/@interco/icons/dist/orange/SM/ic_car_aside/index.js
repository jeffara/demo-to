function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCarAside = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M3.333 10.666h-.5a1.5 1.5 0 0 1-1.5-1.5V7.753a3 3 0 0 1 .696-1.92l.521-.627a1.5 1.5 0 0 1 1.152-.54h4.343a1.5 1.5 0 0 1 1.06.44l1.122 1.121a1.5 1.5 0 0 0 1.06.44h1.88a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 4.667,
  cy: 10.667,
  r: 1.333,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5
}), /*#__PURE__*/React.createElement("circle", {
  cx: 11.333,
  cy: 10.667,
  r: 1.333,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M6 10.666h4"
}));
export default ComponenticCarAside;