function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticAirport = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M11 13H2v4m0 4v-4m0 0h9M11 21v-9m8 9v-9m0 0 3-5H8l3 5m8 0h-8m1.5-5 1 5m4-5-1 5M21 7l-2.206-4.53a1 1 0 0 0-.848-.47h-5.892a1 1 0 0 0-.848.47L9 7"
}));
export default ComponenticAirport;