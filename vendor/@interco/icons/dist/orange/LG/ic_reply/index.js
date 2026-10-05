function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticReply = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M15 5 3 15.5 15 26v-6h2.493a14 14 0 0 1 11.121 5.496L29 26v-1c0-7.732-6.268-14-14-14V5Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 15,
  cy: 11,
  r: 1.25,
  fill: props.color
}));
export default ComponenticReply;