function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFingerprint = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M14.576 15C20.02 9.446 27.608 6 36 6c16.569 0 30 13.431 30 30 0 3.136-.481 6.159-1.374 9M7.373 27A29.987 29.987 0 0 0 6 36c0 3.136.481 6.159 1.373 9M18 36v24m36-24v24"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M42 66V36a6 6 0 0 0-12 0v3m0 27V51M54 36c0-3.279-.877-6.352-2.408-9M18 36c0-9.941 8.059-18 18-18 2.104 0 4.123.36 6 1.024"
}));
export default ComponenticFingerprint;