function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFlashlight = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M6.667 6.5a2.5 2.5 0 0 1 2.5-2.5h13.666a2.5 2.5 0 0 1 2.5 2.5v3.576c0 .389-.09.771-.264 1.118l-2.139 4.278c-.173.347-.264.73-.264 1.118v8.91a2.5 2.5 0 0 1-2.5 2.5h-8.333a2.5 2.5 0 0 1-2.5-2.5v-8.91a2.5 2.5 0 0 0-.264-1.118L6.93 11.195a2.5 2.5 0 0 1-.263-1.119V6.5Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M6.667 10.667h18.666"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M16 17.333v4"
}));
export default ComponenticFlashlight;