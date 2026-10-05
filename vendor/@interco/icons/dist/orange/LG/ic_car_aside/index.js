function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCarAside = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M6.667 21.334h-1.5a2.5 2.5 0 0 1-2.5-2.5v-3.328a6 6 0 0 1 1.39-3.841l1.193-1.432a2.5 2.5 0 0 1 1.921-.9h9.127a2.5 2.5 0 0 1 1.768.733L20.6 12.6a2.5 2.5 0 0 0 1.768.732h4.464a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-1.5"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 9.333,
  cy: 21.333,
  r: 2.667,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5
}), /*#__PURE__*/React.createElement("circle", {
  cx: 22.667,
  cy: 21.333,
  r: 2.667,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M12 21.334h8"
}));
export default ComponenticCarAside;