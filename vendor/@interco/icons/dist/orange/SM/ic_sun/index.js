function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSun = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 8,
  r: 2.667,
  stroke: props.color,
  strokeWidth: 1.5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 1.5,
  d: "m7.982 12.667.018 2m-3.47-3.561-1.522 1.446M3.333 8h-2m3.485-3.356L3.295 3.197m4.723.136-.018-2m3.82 3.56 1.523-1.446M12.56 8h2.106m-3.134 3.356 1.523 1.447"
}));
export default ComponenticSun;