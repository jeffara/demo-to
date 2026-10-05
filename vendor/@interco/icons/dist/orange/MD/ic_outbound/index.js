function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticOutbound = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M6 20h12"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M9.023 10.368 4.955 6.209a1.145 1.145 0 0 1 0-1.52.992.992 0 0 1 .256-.2l.637-.348c.366-.2.798-.187 1.153.035l7.112 3.975c.055.031.12.035.179.01l6.48-2.705c.83-.351 1.774.076 2.107.956.345.914-.073 1.952-.935 2.321l-16.7 7.16a1.2 1.2 0 0 1-1.377-.28l-2.5-2.646a1.377 1.377 0 0 1 0-1.87c.487-.516 1.024-.516 1.767 0l1.352.963a1.84 1.84 0 0 0 1.866.175l2.621-1.479a.251.251 0 0 0 .05-.388Z",
  clipRule: "evenodd"
}));
export default ComponenticOutbound;