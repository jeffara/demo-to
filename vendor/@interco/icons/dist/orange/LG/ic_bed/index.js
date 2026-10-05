function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBed = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M2.667 17.167a2.5 2.5 0 0 1 2.5-2.5h21.666a2.5 2.5 0 0 1 2.5 2.5V24H2.667v-6.833ZM5.333 7.833a2.5 2.5 0 0 1 2.5-2.5h16.334a2.5 2.5 0 0 1 2.5 2.5v6.834H5.333V7.833ZM29.333 26.667V24M2.667 26.667V24"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M16 13.333a4 4 0 1 0-8 0M24 13.333a4 4 0 1 0-8 0"
}));
export default ComponenticBed;