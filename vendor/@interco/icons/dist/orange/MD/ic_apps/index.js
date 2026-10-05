function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticApps = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("ellipse", {
  cx: 12,
  cy: 5.5,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  rx: 2.5,
  ry: 2.5,
  transform: "rotate(-90 12 5.5)"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 12,
  cy: 18.5,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  rx: 2.5,
  ry: 2.5,
  transform: "rotate(-90 12 18.5)"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 18.5,
  cy: 12,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  rx: 2.5,
  ry: 2.5,
  transform: "rotate(-90 18.5 12)"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 5.5,
  cy: 12,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  rx: 2.5,
  ry: 2.5,
  transform: "rotate(-90 5.5 12)"
}));
export default ComponenticApps;