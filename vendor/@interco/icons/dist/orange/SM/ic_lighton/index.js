function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLighton = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 17",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M10.062 4.747c-.072-.36-.36-.663-.729-.663H6.667c-.369 0-.657.302-.729.663C5.601 6.44 4 6.627 4 8.417c0 3 2 4.333 4 4.333s4-1.333 4-4.333c0-1.79-1.601-1.978-1.938-3.67Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "M8 15.417v-.667m4.667-2 .666.667M14 8.75h.667m-2-4 .666-.667m-10 .667-.666-.667M2 8.75h-.667m1.334 4.667.666-.667M6 2.083h4M9.333.75H6.667"
}));
export default ComponenticLighton;