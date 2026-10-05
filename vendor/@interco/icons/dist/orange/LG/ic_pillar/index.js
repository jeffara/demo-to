function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPillar = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 24,
  height: 5.333,
  x: 4,
  y: 2.667,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 2.667
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M8 8H24V24H8z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 24,
  height: 5.333,
  x: 4,
  y: 24,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 2.667
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M13.333 13.333v5.334M18.667 13.333v5.334"
}));
export default ComponenticPillar;