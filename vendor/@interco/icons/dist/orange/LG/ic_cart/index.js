function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCart = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M4 4h2.667l2.36 16.52a2.5 2.5 0 0 0 2.475 2.147h11.782a2.5 2.5 0 0 0 2.451-2.01L28 9.333H7.429"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 10,
  cy: 27.333,
  r: 2,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 23.334,
  cy: 27.333,
  r: 2,
  fill: props.color
}));
export default ComponenticCart;