function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPillar = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 18,
  height: 4,
  x: 3,
  y: 2,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  rx: 2
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M6 6H18V18H6z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 18,
  height: 4,
  x: 3,
  y: 18,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  rx: 2
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M10 10v4M14 10v4"
}));
export default ComponenticPillar;