function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFullscreen = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M2 6V3.5A1.5 1.5 0 0 1 3.5 2H6M2 10v2.5A1.5 1.5 0 0 0 3.5 14H6M14 6V3.5A1.5 1.5 0 0 0 12.5 2H10M14 10v2.5a1.5 1.5 0 0 1-1.5 1.5H10"
}));
export default ComponenticFullscreen;