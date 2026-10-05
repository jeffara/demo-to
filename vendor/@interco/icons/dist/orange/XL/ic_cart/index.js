function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCart = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M9 9h6l5.387 37.707A5 5 0 0 0 25.337 51H52.9a5 5 0 0 0 4.903-4.02L63 21H16.714"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 22.5,
  cy: 61.5,
  r: 4.5,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 52.5,
  cy: 61.5,
  r: 4.5,
  fill: props.color
}));
export default ComponenticCart;