function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSacola = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M5.333 4.667H4.45c-.646 0-1.2.463-1.313 1.099l-1.12 6.274A1.667 1.667 0 0 0 3.657 14h8.686a1.667 1.667 0 0 0 1.64-1.96l-1.12-6.274a1.333 1.333 0 0 0-1.313-1.1H8"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  d: "M10.667 6V4a2.667 2.667 0 1 0-5.333 0v2m0 5.333h5.333"
}));
export default ComponenticSacola;