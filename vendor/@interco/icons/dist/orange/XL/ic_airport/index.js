function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticAirport = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "M33 39H6v12m0 12V51m0 0h27M33 63V36m24 27V36m0 0 9-15H24l9 15m24 0H33m4.5-15 3 15m12-15-3 15M63 21 56.381 7.41A3 3 0 0 0 53.837 6H36.163a3 3 0 0 0-2.544 1.41L27 21"
}));
export default ComponenticAirport;