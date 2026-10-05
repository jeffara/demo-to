function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSun = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 36,
  cy: 36,
  r: 12,
  stroke: props.color,
  strokeWidth: 5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 5,
  d: "M35.921 57 36 66M20.387 49.977l-6.851 6.509M15 36H6m15.68-15.104-6.851-6.509m21.25.613L36 6m17.192 16.023 6.851-6.509M56.526 36H66M51.9 51.104l6.85 6.508"
}));
export default ComponenticSun;