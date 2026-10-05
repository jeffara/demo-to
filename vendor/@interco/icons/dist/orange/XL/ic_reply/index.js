function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticReply = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M34 12 7 35.5 34 59V45.571h4.92a32 32 0 0 1 25.45 12.602L65 59v-3c0-17.12-13.88-31-31-31V12Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 34,
  cy: 25,
  r: 2.5,
  fill: props.color
}));
export default ComponenticReply;