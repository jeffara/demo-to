function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticOrange = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2.5,
  d: "M25.333 18.667c0 5.89-4.775 10.666-10.666 10.666S4 24.558 4 18.667 8.776 8 14.667 8c5.89 0 10.666 4.776 10.666 10.667Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  stroke: props.color,
  strokeWidth: 2.5,
  d: "M27.007 6.87a4.8 4.8 0 0 1-5.957 2.047 4.8 4.8 0 0 1 5.957-2.047ZM19.744 8.01a3.841 3.841 0 0 1-.43-4.613 3.841 3.841 0 0 1 .43 4.613Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M14.667 13.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0ZM12 16.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
}));
export default ComponenticOrange;