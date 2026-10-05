function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMuscinote = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M14 11.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0V3.771a1.5 1.5 0 0 0-1.747-1.48l-5 .833A1.5 1.5 0 0 0 6 4.604v8.063m0 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 5.333 6 6.667"
}));
export default ComponenticMuscinote;