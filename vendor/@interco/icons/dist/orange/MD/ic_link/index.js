function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLink = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M10.05 13.95a4 4 0 0 0 5.657 0l4.242-4.243a4 4 0 0 0-5.656-5.657L13 5.343"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M13.95 10.05a4 4 0 0 0-5.657 0L4.05 14.293a4 4 0 1 0 5.657 5.657L11 18.657"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 13.9,
  cy: 10,
  r: 1,
  fill: props.color
}), /*#__PURE__*/React.createElement("circle", {
  cx: 10.1,
  cy: 14,
  r: 1,
  fill: props.color
}));
export default ComponenticLink;