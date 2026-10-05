function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticStarhalf = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "m16 4 3.914 7.9 8.753 1.267-6.334 6.15L23.83 28 16 23.9 8.172 28l1.495-8.683-6.333-6.15 8.752-1.267L16 4Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M8.172 28 16 23.9V4l-3.914 7.9-8.753 1.267 6.334 6.15L8.172 28Z"
}));
export default ComponenticStarhalf;