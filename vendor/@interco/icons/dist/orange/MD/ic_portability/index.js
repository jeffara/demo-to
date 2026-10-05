function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPortability = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M8 6H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2M18 3l3 3-3 3M6 15l-3 3 3 3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 16,
  cy: 6,
  r: 0.5,
  fill: props.color,
  stroke: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 18,
  r: 0.5,
  fill: props.color,
  stroke: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 6,
  r: 0.5,
  fill: props.color,
  stroke: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 18,
  r: 0.5,
  fill: props.color,
  stroke: props.color
}));
export default ComponenticPortability;