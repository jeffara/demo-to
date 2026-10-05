function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticOccult = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M15 14.576C20.411 9.27 27.824 6 36 6c16.569 0 30 13.431 30 30 0 8.176-3.271 15.589-8.576 21"
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#FF7A00",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "m9 9 54 54"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M7.373 27A29.987 29.987 0 0 0 6 36c0 16.569 13.431 30 30 30 3.136 0 6.159-.481 9-1.373"
}));
export default ComponenticOccult;