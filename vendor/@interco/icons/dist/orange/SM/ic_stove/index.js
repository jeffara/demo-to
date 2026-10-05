function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticStove = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M3.333 6h9.334v5.167a1.5 1.5 0 0 1-1.5 1.5H4.833a1.5 1.5 0 0 1-1.5-1.5V6Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M4.667 14v-1.333M11.333 14v-1.333M2 6h12M8 2v1.333M10.667 2v.667M5.333 2v.667M6.667 8.667h2.666"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M5.333 4.667C4.597 4.667 4 5.264 4 6h2.667c0-.736-.597-1.333-1.334-1.333ZM8 4.667c-.736 0-1.333.597-1.333 1.333h2.666c0-.736-.597-1.333-1.333-1.333ZM10.667 4.667c-.737 0-1.334.597-1.334 1.333H12c0-.736-.597-1.333-1.333-1.333Z"
}));
export default ComponenticStove;