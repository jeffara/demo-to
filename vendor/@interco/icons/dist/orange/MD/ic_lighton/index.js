function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLighton = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M15.093 6.996C14.985 6.454 14.553 6 14 6h-4c-.552 0-.985.454-1.093.996C8.402 9.533 6 9.816 6 12.5 6 17 9 19 12 19s6-2 6-6.5c0-2.684-2.402-2.967-2.907-5.504Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M12 23v-1m7-3 1 1m1-7h1m-3-6 1-1M5 7 4 6m-1 7H2m2 7 1-1M9 3h6m-1-2h-4"
}));
export default ComponenticLighton;