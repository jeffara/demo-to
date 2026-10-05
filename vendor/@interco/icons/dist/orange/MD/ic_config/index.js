function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticConfig = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M3.663 13.06a2 2 0 0 1 0-2.12l3.75-6A2 2 0 0 1 9.107 4h5.784a2 2 0 0 1 1.695.94l3.75 6a2 2 0 0 1 0 2.12l-3.75 6a2 2 0 0 1-1.695.94H9.108a2 2 0 0 1-1.696-.94l-3.75-6Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 3,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2
}));
export default ComponenticConfig;