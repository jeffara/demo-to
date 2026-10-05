function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLocation = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "m23.768 17.72-5.67 9.449c-.95 1.584-3.246 1.584-4.197 0l-5.67-9.45C4.61 11.683 8.959 4 16 4c7.041 0 11.39 7.682 7.768 13.72Z"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 16,
  cy: 13.333,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 4,
  ry: 4
}));
export default ComponenticLocation;