function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCheckLineBottom = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: "#161616",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M3.333 13.333H10m-7.333-6L6 10.667l7.333-7.334"
}), /*#__PURE__*/React.createElement("rect", {
  width: 10.667,
  height: 10.667,
  x: 2.667,
  y: 2.667,
  fill: "#F56A50",
  rx: 5.333
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#fff",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M6.333 5.667H8a2.333 2.333 0 1 1 0 4.666H6.333V5.667Z"
}));
export default ComponenticCheckLineBottom;