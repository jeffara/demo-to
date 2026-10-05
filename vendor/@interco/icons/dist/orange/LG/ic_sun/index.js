function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSun = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 16,
  cy: 16,
  r: 5.333,
  stroke: props.color,
  strokeWidth: 2.5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2.5,
  d: "m15.965 25.333.035 4m-6.94-7.12-3.044 2.892M6.666 16h-4m6.97-6.713L6.59 6.395m9.445.272-.035-4m7.64 7.121 3.046-2.893M25.123 16h4.21m-6.267 6.713 3.045 2.893"
}));
export default ComponenticSun;