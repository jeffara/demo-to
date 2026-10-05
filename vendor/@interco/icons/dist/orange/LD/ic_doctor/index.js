function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDoctor = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M13.333 9.5v3.833H9.5a1.5 1.5 0 0 0-1.5 1.5v2.334a1.5 1.5 0 0 0 1.5 1.5h3.833V22.5a1.5 1.5 0 0 0 1.5 1.5h2.334a1.5 1.5 0 0 0 1.5-1.5v-3.833H22.5a1.5 1.5 0 0 0 1.5-1.5v-2.334a1.5 1.5 0 0 0-1.5-1.5h-3.833V9.5a1.5 1.5 0 0 0-1.5-1.5h-2.334a1.5 1.5 0 0 0-1.5 1.5Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 24,
  height: 24,
  x: 4,
  y: 4,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  rx: 2.5
}));
export default ComponenticDoctor;