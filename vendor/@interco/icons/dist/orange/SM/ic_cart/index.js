function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCart = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M2 2h1.333l1.15 8.046a1.5 1.5 0 0 0 1.485 1.287h5.469a1.5 1.5 0 0 0 1.47-1.206L14 4.667H3.714"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 5,
  cy: 13.667,
  r: 1,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 11.666,
  cy: 13.667,
  r: 1,
  fill: props.color
}));
export default ComponenticCart;