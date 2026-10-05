function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticWithdraw = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M6.667 4h18.666v21.5a2.5 2.5 0 0 1-2.5 2.5H9.167a2.5 2.5 0 0 1-2.5-2.5V4Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M20 12h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4h-6M16 12V9.333M16 22.667V20M4 4h24"
}));
export default ComponenticWithdraw;