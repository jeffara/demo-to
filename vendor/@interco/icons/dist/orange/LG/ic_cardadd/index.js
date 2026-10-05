function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCardadd = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M28 14.75V9.167a2.5 2.5 0 0 0-2.5-2.5h-19a2.5 2.5 0 0 0-2.5 2.5v13.666a2.5 2.5 0 0 0 2.5 2.5h8.167M9.334 20h5.333"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M4 12H28V16H4z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M24 20v8M20 24h8"
}));
export default ComponenticCardadd;