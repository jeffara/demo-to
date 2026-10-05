function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHellipsis = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("ellipse", {
  cx: 3.333,
  cy: 8,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  rx: 0.667,
  ry: 0.667,
  transform: "rotate(-90 3.333 8)"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 8,
  r: 0.667,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  transform: "rotate(-90 8 8)"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 12.667,
  cy: 8,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  rx: 0.667,
  ry: 0.667,
  transform: "rotate(-90 12.667 8)"
}));
export default ComponenticHellipsis;