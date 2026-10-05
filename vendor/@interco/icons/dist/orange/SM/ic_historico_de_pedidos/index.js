function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHistoricoDePedidos = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M10 8.667H6M10 6H6m7.333 8-2.667-1.333-2.666 2-2.667-2L2.666 14V3.333C2.667 2.597 3.264 2 4 2h8c.736 0 1.333.597 1.333 1.333V14Z"
}));
export default ComponenticHistoricoDePedidos;