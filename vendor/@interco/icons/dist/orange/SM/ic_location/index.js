function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLocation = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m11.884 8.86-2.835 4.724a1.224 1.224 0 0 1-2.098 0L4.116 8.86C2.305 5.84 4.479 2 8 2c3.52 0 5.695 3.84 3.884 6.86Z"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 8,
  cy: 6.667,
  fill: props.color,
  rx: 2,
  ry: 2
}));
export default ComponenticLocation;