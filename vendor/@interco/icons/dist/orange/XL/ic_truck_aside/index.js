function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTruckAside = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M48 45V20a5 5 0 0 0-5-5H11a5 5 0 0 0-5 5v26a5 5 0 0 0 5 5h4M48 24h6.755a5 5 0 0 1 3.737 1.678l6.245 7.026A5 5 0 0 1 66 36.026V46a5 5 0 0 1-5 5h-4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 21,
  cy: 51,
  r: 6,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5
}), /*#__PURE__*/React.createElement("circle", {
  cx: 51,
  cy: 51,
  r: 6,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M6 33h42M45 51H27"
}));
export default ComponenticTruckAside;