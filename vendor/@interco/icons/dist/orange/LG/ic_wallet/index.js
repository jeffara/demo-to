function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticWallet = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M25.333 21.333V25.5a2.5 2.5 0 0 1-2.5 2.5H6.5A2.5 2.5 0 0 1 4 25.5V11.833a2.5 2.5 0 0 1 2.5-2.5h16.333a2.5 2.5 0 0 1 2.5 2.5V16M21.067 7.537v1.796H6L17.732 5.18a2.5 2.5 0 0 1 3.335 2.357Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 13.333,
  height: 5.333,
  x: 14.666,
  y: 16,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 2.667
}));
export default ComponenticWallet;