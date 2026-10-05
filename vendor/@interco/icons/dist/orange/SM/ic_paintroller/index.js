function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPaintroller = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  strokeWidth: 2,
  d: "M4.667 3.333h-2A.667.667 0 0 0 2 4v3.333c0 .368.298.667.667.667h6c.368 0 .666.298.666.667v2"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M8 10.667H10.667V14.667H8z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 9.333,
  height: 4,
  x: 4.667,
  y: 1.333,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  rx: 1.5
}));
export default ComponenticPaintroller;