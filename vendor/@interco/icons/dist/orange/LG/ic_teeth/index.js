function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTeeth = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M22.667 4C20.533 4 18 5.333 16 5.333S11.333 4 9.333 4 4 5.333 4 13.333C4 19.333 8 28 10.667 28 14 28 12 22.667 16 22.667S18 28 21.333 28C24.667 28 28 19.333 28 13.333 28 5.333 24.667 4 22.667 4Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M10.667 9.333s2 1.334 5.333 1.334 5.333-1.334 5.333-1.334"
}));
export default ComponenticTeeth;