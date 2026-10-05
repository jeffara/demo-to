function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticWithdraw = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M3.333 2h9.334v10.5a1.5 1.5 0 0 1-1.5 1.5H4.833a1.5 1.5 0 0 1-1.5-1.5V2Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M10 6H7a1 1 0 0 0 0 2h2a1 1 0 0 1 0 2H6M8 6V4.667M8 11.333V10M2 2h12"
}));
export default ComponenticWithdraw;