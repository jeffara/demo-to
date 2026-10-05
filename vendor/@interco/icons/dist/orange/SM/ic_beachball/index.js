function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBeachball = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("g", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5
}, /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 8,
  r: 6.667
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 6.667,
  cy: 6,
  fill: props.color,
  rx: 2,
  ry: 2
}), /*#__PURE__*/React.createElement("path", {
  d: "M7.667 8s.212 1.89.666 3c.534 1.303 2 3 2 3M8.667 6.333s2.137-.197 3.333.334c1.097.486 2.333 2 2.333 2M7.667 4s.486-.934 1-1.333c.65-.506 2-.667 2-.667M5.333 4.333s-.112-.652-.333-1c-.198-.31-.667-.666-.667-.666M4.667 6S3.609 6.07 3 6.333c-.765.331-1.667 1.334-1.667 1.334M5 7.667S4.226 9.035 4 10c-.297 1.268 0 3.333 0 3.333"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 0H16V16H0z"
}))));
export default ComponenticBeachball;