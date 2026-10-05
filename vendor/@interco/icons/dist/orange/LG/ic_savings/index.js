function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSavings = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M28 21.333v-8.666c0-5.523-4.477-10-10-10h-2M4 5.333l2.641 8.452a6.561 6.561 0 0 0 2.623 3.502l5.33 3.553a3.481 3.481 0 0 0 4.105-5.614l-3.694-2.956a.9.9 0 0 1 .562-1.603H20"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M14.666 21.333a6.667 6.667 0 1 0 4.299-6.233"
}));
export default ComponenticSavings;