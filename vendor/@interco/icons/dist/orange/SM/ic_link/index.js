function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLink = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M6.7 9.3a2.667 2.667 0 0 0 3.771 0L13.3 6.47a2.667 2.667 0 1 0-3.772-3.77l-.862.861"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M9.3 6.7a2.667 2.667 0 0 0-3.772 0L2.7 9.53a2.667 2.667 0 1 0 3.771 3.77l.862-.861"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 9.35,
  cy: 6.75,
  fill: props.color,
  rx: 0.75,
  ry: 0.75
}), /*#__PURE__*/React.createElement("circle", {
  cx: 6.75,
  cy: 9.35,
  r: 0.75,
  fill: props.color
}));
export default ComponenticLink;