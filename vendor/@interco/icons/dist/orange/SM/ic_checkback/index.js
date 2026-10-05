function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCheckback = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  strokeWidth: 1.5,
  d: "M4.5 13.333h7a2.5 2.5 0 0 0 2.5-2.5v-4.5A2.333 2.333 0 0 0 11.667 4H4.5A2.5 2.5 0 0 0 2 6.5v4.333a2.5 2.5 0 0 0 2.5 2.5ZM4.445 10.222h.666M7.111 10.222h4.445"
}));
export default ComponenticCheckback;