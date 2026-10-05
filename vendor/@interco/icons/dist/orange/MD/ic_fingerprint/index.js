function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFingerprint = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M4.859 5A9.97 9.97 0 0 1 12 2c5.523 0 10 4.477 10 10a9.99 9.99 0 0 1-.458 3M2.458 9A9.996 9.996 0 0 0 2 12c0 1.045.16 2.053.458 3M6 12v8m12-8v8"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M14 22V12a2 2 0 1 0-4 0v1m0 9v-5M18 12a5.972 5.972 0 0 0-.803-3M6 12a6 6 0 0 1 8-5.659"
}));
export default ComponenticFingerprint;