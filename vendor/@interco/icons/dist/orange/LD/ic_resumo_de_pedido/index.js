function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticResumoDePedido = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M26.667 22.667v-16A2.666 2.666 0 0 0 24 4H8a2.666 2.666 0 0 0-2.667 2.667V24a4 4 0 0 0 4 4m17.334-5.333H13.333V24a4 4 0 0 1-4 4m17.334-5.333h2.666v2.666A2.666 2.666 0 0 1 26.668 28H9.333"
}));
export default ComponenticResumoDePedido;