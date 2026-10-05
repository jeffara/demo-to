function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDoctor = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M6.667 4.5v2.167H4.5a.5.5 0 0 0-.5.5v1.666a.5.5 0 0 0 .5.5h2.167V11.5a.5.5 0 0 0 .5.5h1.666a.5.5 0 0 0 .5-.5V9.333H11.5a.5.5 0 0 0 .5-.5V7.167a.5.5 0 0 0-.5-.5H9.333V4.5a.5.5 0 0 0-.5-.5H7.167a.5.5 0 0 0-.5.5Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 12,
  height: 12,
  x: 2,
  y: 2,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  rx: 1.5
}));
export default ComponenticDoctor;