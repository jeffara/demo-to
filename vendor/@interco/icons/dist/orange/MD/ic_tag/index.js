function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M10.765 3.336 3.1 11a2 2 0 0 0 0 2.829l7.071 7.07a2 2 0 0 0 2.829 0l7.664-7.664a2 2 0 0 0 .516-1.94l-1.515-5.556a2 2 0 0 0-1.404-1.403L12.705 2.82a2 2 0 0 0-1.94.516Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 15.829,
  cy: 8.172,
  r: 1.5,
  fill: props.color,
  transform: "rotate(45 15.829 8.172)"
})), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "a"
}, /*#__PURE__*/React.createElement("path", {
  fill: "#fff",
  d: "M0 0H24V24H0z"
}))));
export default ComponenticTag;