function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLuggage = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M4 14.667H2A.667.667 0 0 1 1.333 14V5.334c0-.369.299-.667.667-.667h2m2.667 0H8m-1.333 0V2A.667.667 0 0 0 6 1.333H4.667A.667.667 0 0 0 4 2v2.667m2.667 0H4m0 0v2"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  d: "M8 8.666H6.667A.667.667 0 0 0 6 9.333V14c0 .368.298.666.667.666H8m0-6v6m0-6h.667m-.667 6h4.667m0-6H14c.368 0 .667.299.667.667V14a.667.667 0 0 1-.667.666h-1.333m0-6v6m0-6H12m0 0V7.333a.667.667 0 0 0-.667-.667h-2a.667.667 0 0 0-.666.667v1.333m3.333 0H8.667"
}));
export default ComponenticLuggage;