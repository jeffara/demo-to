function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBeachball = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 12,
  cy: 12,
  r: 10,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2
}), /*#__PURE__*/React.createElement("circle", {
  cx: 10,
  cy: 9,
  r: 3,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M11.5 12s.318 2.834 1 4.5c.8 1.955 3 4.5 3 4.5M13 9.5s3.206-.296 5 .5c1.645.73 3.5 3 3.5 3M11.5 6s.73-1.4 1.5-2c.975-.758 3-1 3-1M8 6.5s-.168-.98-.5-1.5c-.297-.466-1-1-1-1M7 9s-1.586.105-2.5.5c-1.147.497-2.5 2-2.5 2M7.5 11.5S6.34 13.552 6 15c-.446 1.901 0 5 0 5"
}));
export default ComponenticBeachball;