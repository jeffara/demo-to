function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticConstrucasa = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "m16 5 13 8"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeDasharray: "2.5 4",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M16 5 3 13"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M26 11.5v13a2.5 2.5 0 0 1-2.5 2.5H16M6 17v2m10 8h-2.429M6 24.143V25.5A1.5 1.5 0 0 0 7.5 27h1.357M16 2v28"
}));
export default ComponenticConstrucasa;