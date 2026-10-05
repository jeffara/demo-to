function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBathtub = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M6.667 14.667h18.666v8.166a2.5 2.5 0 0 1-2.5 2.5H9.167a2.5 2.5 0 0 1-2.5-2.5v-8.166Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M9.333 28v-2.667M22.667 28v-2.667M4 14.667h24M6.667 14.667V7.333a3.333 3.333 0 0 1 6.666 0V8M10.667 9.333H16"
}));
export default ComponenticBathtub;