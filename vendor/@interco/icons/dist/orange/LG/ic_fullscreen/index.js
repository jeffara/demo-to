function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticFullscreen = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M4 12V6.5A2.5 2.5 0 0 1 6.5 4H12M4 20v5.5A2.5 2.5 0 0 0 6.5 28H12M28 12V6.5A2.5 2.5 0 0 0 25.5 4H20M28 20v5.5a2.5 2.5 0 0 1-2.5 2.5H20"
}));
export default ComponenticFullscreen;