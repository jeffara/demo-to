function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLighton = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M45.278 20.987C44.954 19.362 43.657 18 42 18H30c-1.657 0-2.954 1.362-3.278 2.987C25.206 28.6 18 29.447 18 37.5 18 51 27 57 36 57s18-6 18-19.5c0-8.053-7.206-8.9-8.722-16.513Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 5,
  d: "M36 69v-3m21-9 3 3m3-21h3m-9-18 3-3m-45 3-3-3M9 39H6m6 21 3-3M27 8h18m-3-5H30"
}));
export default ComponenticLighton;