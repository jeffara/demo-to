function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFlashlight = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M15 14a5 5 0 0 1 5-5h32a5 5 0 0 1 5 5v8.82c0 .776-.18 1.541-.528 2.236l-4.944 9.888A4.999 4.999 0 0 0 51 37.18V58a5 5 0 0 1-5 5H26a5 5 0 0 1-5-5V37.18c0-.776-.18-1.541-.528-2.236l-4.944-9.888A4.999 4.999 0 0 1 15 22.82V14Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M15 24h42"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M36 39v9"
}));
export default ComponenticFlashlight;