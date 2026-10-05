function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPendingFill = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "#161616",
  d: "M66 36c0 16.569-13.431 30-30 30C19.431 66 6 52.569 6 36 6 19.431 19.431 6 36 6c16.569 0 30 13.431 30 30Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M36 21v16.615L45 45m21-9c0 16.569-13.431 30-30 30C19.431 66 6 52.569 6 36 6 19.431 19.431 6 36 6c16.569 0 30 13.431 30 30Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 48,
  height: 48,
  x: 12,
  y: 12,
  fill: "#F56A50",
  rx: 24
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M28.5 25.5H36c5.799 0 10.5 4.701 10.5 10.5S41.799 46.5 36 46.5h-7.5v-21Z"
}));
export default ComponenticPendingFill;