function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticAccessibility = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("ellipse", {
  cx: 16,
  cy: 5.333,
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2.5,
  rx: 1.333,
  ry: 1.333
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2.5,
  d: "M13.333 10.666H18.666V19.999000000000002H13.333z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2.5,
  d: "M28 8.416c-2.504.75-8.016 2.25-12 2.25s-9.496-1.5-12-2.25M18.667 20v8M13.333 20v8"
}));
export default ComponenticAccessibility;