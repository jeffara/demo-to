function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBus = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M3 22V5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v17M2 6v3m20-3v3M3 13s4 .5 9 .5 9-.5 9-.5M7 22v-.5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v.5"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M7 17h1m8 0h1"
}));
export default ComponenticBus;