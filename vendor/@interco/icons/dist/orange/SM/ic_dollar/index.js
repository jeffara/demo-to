function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDollar = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: "#161616",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5
}, /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 8,
  r: 6.667
}), /*#__PURE__*/React.createElement("path", {
  d: "M10 6H7a1 1 0 0 0 0 2h2a1 1 0 0 1 0 2H6M8 6V4.667M8 11.333V10"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 0H16V16H0z"
}))));
export default ComponenticDollar;