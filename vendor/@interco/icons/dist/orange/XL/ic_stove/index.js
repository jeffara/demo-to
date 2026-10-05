function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticStove = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: "#FF7A00",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M15 27h42v25a5 5 0 0 1-5 5H20a5 5 0 0 1-5-5V27Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M21 63v-6M51 63v-6M9 27h54M36 9v6M48 9v3M24 9v3M30 39h12"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M24 21a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6ZM36 21a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6ZM48 21a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Z"
}));
export default ComponenticStove;