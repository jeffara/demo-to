function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticRec = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M9 21v-7a5 5 0 0 1 5-5h7M9 51v7a5 5 0 0 0 5 5h7M63 21v-7a5 5 0 0 0-5-5h-7M63 51v7a5 5 0 0 1-5 5h-7"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M27 46.704V25.73c0-2.008 2.249-3.197 3.908-2.065l16.78 11.44c1.528 1.042 1.434 3.326-.174 4.24l-16.779 9.533C29.068 49.825 27 48.62 27 46.704Z"
}));
export default ComponenticRec;