function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTeeth = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M11.333 2C10.267 2 9 2.667 8 2.667S5.667 2 4.667 2 2 2.667 2 6.667C2 9.667 4 14 5.333 14 7 14 6 11.333 8 11.333c2 0 1 2.667 2.667 2.667C12.333 14 14 9.667 14 6.667 14 2.667 12.333 2 11.333 2Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M5.333 4.667s1 .666 2.667.666c1.667 0 2.667-.666 2.667-.666"
}));
export default ComponenticTeeth;