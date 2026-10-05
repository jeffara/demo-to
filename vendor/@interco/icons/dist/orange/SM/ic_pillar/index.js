function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPillar = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 12,
  height: 2.667,
  x: 2,
  y: 1.333,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  rx: 1.333
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M4 4H12V12H4z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 12,
  height: 2.667,
  x: 2,
  y: 12,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  rx: 1.333
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M6.667 6.667v2.666M9.333 6.667v2.666"
}));
export default ComponenticPillar;