function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticReceipt = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M5.333 6.5a2.5 2.5 0 0 1 2.5-2.5h11.132a2.5 2.5 0 0 1 1.767.732l5.203 5.202a2.5 2.5 0 0 1 .732 1.768V25.5a2.5 2.5 0 0 1-2.5 2.5H7.833a2.5 2.5 0 0 1-2.5-2.5v-19Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M10.666 17.333h10.667M10.666 12h2.667M10.666 22.667h10.667M18.666 4v5.5a2.5 2.5 0 0 0 2.5 2.5h5.5"
}));
export default ComponenticReceipt;