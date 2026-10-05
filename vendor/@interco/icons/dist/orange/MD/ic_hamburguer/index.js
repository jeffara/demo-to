function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHamburguer = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M3 10h18M3 10c0-2.333 0-7 5-7h8c5 0 5 4.667 5 7M3 10a2 2 0 1 0 0 4m18-4a2 2 0 1 1 0 4m0 0v1c0 2 0 6-5 6H8c-5 0-5-4-5-6v-1m18 0h-9.367a.46.46 0 0 0-.431.606C11.59 15.773 10.73 17 9.5 17s-2.09-1.227-1.702-2.394a.46.46 0 0 0-.43-.606H3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 13,
  cy: 6,
  r: 1,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 17,
  cy: 7,
  r: 1,
  fill: props.color
}));
export default ComponenticHamburguer;