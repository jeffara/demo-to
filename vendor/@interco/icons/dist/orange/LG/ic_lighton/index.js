function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLighton = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M20.123 9.328C19.98 8.605 19.403 8 18.667 8h-5.334c-.736 0-1.313.605-1.456 1.328C11.203 12.71 8 13.088 8 16.667c0 6 4 8.666 8 8.666s8-2.666 8-8.666c0-3.58-3.203-3.956-3.877-7.34Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2.5,
  d: "M16 30.667v-1.334m9.333-4 1.334 1.334M28 17.333h1.333m-4-8L26.667 8m-20 1.333L5.333 8M4 17.333H2.667m2.666 9.334 1.334-1.334M12 3.5h8m-1.333-2.167h-5.334"
}));
export default ComponenticLighton;