function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTravel = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  d: "M4 13.333h8"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  d: "M6.015 6.912 3.303 4.139a.763.763 0 0 1 0-1.013c.05-.054.108-.1.171-.134l.425-.231a.755.755 0 0 1 .768.023l4.741 2.65c.037.02.08.023.12.007l4.32-1.803c.554-.235 1.183.05 1.404.636.23.61-.048 1.302-.623 1.548L3.495 10.595a.8.8 0 0 1-.917-.187L.91 8.646a.918.918 0 0 1 0-1.247c.325-.344.683-.344 1.178 0l.901.642c.371.264.838.308 1.244.117l1.748-.986a.167.167 0 0 0 .033-.26Z",
  clipRule: "evenodd"
}));
export default ComponenticTravel;