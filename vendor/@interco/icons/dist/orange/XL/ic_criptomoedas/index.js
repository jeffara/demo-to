function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCriptomoedas = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 36,
  cy: 36,
  r: 30,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 5,
  d: "M29.25 36H40.5a4.5 4.5 0 1 0 0-9H29.25M29.25 47.25h12.375a5.625 5.625 0 0 0 0-11.25H29.25M31.5 27v20.25"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 5,
  d: "M33.75 20.25V27M27 27h6.75M27 47.25h6.75M33.75 47.25V54M40.5 20.25V27M40.5 47.25V54"
}));
export default ComponenticCriptomoedas;