function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEtcCircle = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("circle", {
  cx: 16,
  cy: 16,
  r: 13.333,
  stroke: props.color,
  strokeWidth: 2
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M9.333 17.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM22.667 17.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666ZM16 17.333a1.333 1.333 0 1 0 0-2.666 1.333 1.333 0 0 0 0 2.666Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 21.333,
  height: 21.333,
  x: 5.333,
  y: 5.333,
  fill: "#F56A50",
  rx: 10.667
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#fff",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M12.667 11.333H16a4.667 4.667 0 1 1 0 9.334h-3.333v-9.334Z"
}));
export default ComponenticEtcCircle;