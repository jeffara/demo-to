function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCarAside = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M15 48h-4a5 5 0 0 1-5-5v-7.57a15 15 0 0 1 3.477-9.602L12 22.799A5 5 0 0 1 15.84 21H36.93a5 5 0 0 1 3.535 1.465l6.072 6.07A5 5 0 0 0 50.07 30H61a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-4"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 21,
  cy: 48,
  r: 6,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 5
}), /*#__PURE__*/React.createElement("circle", {
  cx: 51,
  cy: 48,
  r: 6,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 5
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M27 48h18"
}));
export default ComponenticCarAside;