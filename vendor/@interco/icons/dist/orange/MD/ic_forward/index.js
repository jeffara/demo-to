function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticForward = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M3 18.563V5.784c0-1.607 1.8-2.557 3.127-1.652l10.223 6.97a2 2 0 0 1-.139 3.392L5.988 20.302C4.655 21.06 3 20.097 3 18.563Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M21 4v16"
}));
export default ComponenticForward;