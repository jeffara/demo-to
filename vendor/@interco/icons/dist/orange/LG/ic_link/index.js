function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLink = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M13.4 18.6a5.333 5.333 0 0 0 7.543 0l5.657-5.657A5.333 5.333 0 0 0 19.057 5.4l-1.723 1.724"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M18.6 13.4a5.333 5.333 0 0 0-7.543 0l-5.656 5.657a5.333 5.333 0 1 0 7.542 7.543l1.724-1.724"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 18.45,
  cy: 13.25,
  fill: props.color,
  rx: 1.25,
  ry: 1.25
}), /*#__PURE__*/React.createElement("circle", {
  cx: 13.383,
  cy: 18.583,
  r: 1.25,
  fill: props.color
}));
export default ComponenticLink;