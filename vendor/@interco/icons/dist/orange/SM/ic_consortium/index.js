function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticConsortium = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M2 2v3.158h2V8h2.667v2.333a3.667 3.667 0 1 0 3.666-3.666h-1.4L5.167 2H2Z"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 10.2,
  cy: 10.2,
  fill: props.color,
  rx: 1.333,
  ry: 1.333
}));
export default ComponenticConsortium;