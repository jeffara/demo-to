function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLocation = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M28 13.333c0 7.364-9.333 16-12 16s-12-8.636-12-16c0-6 5.333-10.666 12-10.666s12 4.666 12 10.666Z"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 16,
  cy: 13.334,
  stroke: props.color,
  strokeWidth: 2,
  rx: 4,
  ry: 4
}));
export default ComponenticLocation;