function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHamburguer = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "M9 30h54M9 30C9 23 9 9 24 9h24c15 0 15 14 15 21M9 30a6 6 0 0 0 0 12m54-12a6 6 0 0 1 0 12m0 0v3c0 6 0 18-15 18H24C9 63 9 51 9 45v-3m54 0H34.897c-.933 0-1.587.932-1.291 1.817C34.772 47.317 32.19 51 28.5 51s-6.273-3.682-5.106-7.183c.296-.885-.358-1.817-1.291-1.817H9"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 39,
  cy: 18,
  r: 3,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 51,
  cy: 21,
  r: 3,
  fill: props.color
}));
export default ComponenticHamburguer;