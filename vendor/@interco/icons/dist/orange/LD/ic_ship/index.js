function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticShip = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  strokeWidth: 2,
  d: "m26.667 27.733 2.508-6.083a1.6 1.6 0 0 0-.925-2.233l-8.877-2.96c-2.19-.73-4.557-.73-6.746 0l-8.877 2.96a1.6 1.6 0 0 0-.925 2.233L6 27.733m-.667-9.066V9.333C5.333 8.597 5.93 8 6.667 8h4m16 10.667V9.333c0-.736-.597-1.333-1.334-1.333h-4M10.667 8h10.666M10.667 8c0-2.21 1.96-4 5.333-4s5.333 1.79 5.333 4m-16 4h21.334m-3.334 10.667-2-.667"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M2.667 28c8 0 8-2.666 13.333-2.666S21.333 28 29.333 28"
}));
export default ComponenticShip;