function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBus = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M4 29.333V6.667a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v22.666M2.667 8v4m26.666-4v4M4 17.333S9.333 18 16 18s12-.667 12-.667m-18.667 12v-.666c0-.737.597-1.334 1.334-1.334h10.666c.737 0 1.334.597 1.334 1.334v.666"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M9.333 22.666h1.334m10.666 0h1.334"
}));
export default ComponenticBus;