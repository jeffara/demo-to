function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticExplore = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M29.333 16c0 7.364-5.97 13.333-13.333 13.333M29.333 16c0-7.364-5.97-13.334-13.333-13.334M29.333 16h-2.666M16 29.333c-7.364 0-13.334-5.97-13.334-13.333M16 29.333v-2.666M2.666 16C2.666 8.636 8.636 2.666 16 2.666M2.666 16h2.667M16 2.666v2.667"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "m14 14-4.666 8.667L18 18l4.667-8.666L14 14Z"
}));
export default ComponenticExplore;