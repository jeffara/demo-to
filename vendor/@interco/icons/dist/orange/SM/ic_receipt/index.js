function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticReceipt = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M2.667 3.5a1.5 1.5 0 0 1 1.5-1.5h5.212a1.5 1.5 0 0 1 1.06.44l2.455 2.454a1.5 1.5 0 0 1 .44 1.06V12.5a1.5 1.5 0 0 1-1.5 1.5H4.166a1.5 1.5 0 0 1-1.5-1.5v-9Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M5.333 8.667h5.334M5.333 6h1.334M5.333 11.333h5.334"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M9.334 4.5V2l4 4h-2.5a1.5 1.5 0 0 1-1.5-1.5Z"
}));
export default ComponenticReceipt;