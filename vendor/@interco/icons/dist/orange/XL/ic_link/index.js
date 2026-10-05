function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLink = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M30.151 41.85c4.686 4.685 12.284 4.685 16.97 0L59.85 29.12c4.687-4.686 4.687-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0L39 16.029"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M41.85 30.15c-4.687-4.686-12.285-4.686-16.971 0L12.151 42.88c-4.686 4.686-4.686 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0l3.88-3.878"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 41.65,
  cy: 29.95,
  fill: props.color,
  rx: 2.5,
  ry: 2.5
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 30,
  cy: 41.7,
  fill: props.color,
  rx: 2.5,
  ry: 2.5
}));
export default ComponenticLink;