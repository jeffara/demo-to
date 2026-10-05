function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDoorlock = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 18.667,
  height: 26.667,
  x: 6.667,
  y: 2.667,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 9.333
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M17.193 15.72a2.667 2.667 0 1 0-2.386 0l-1.902 3.804a1.25 1.25 0 0 0 1.118 1.81h3.954a1.25 1.25 0 0 0 1.119-1.81l-1.903-3.805Z",
  clipRule: "evenodd"
}));
export default ComponenticDoorlock;