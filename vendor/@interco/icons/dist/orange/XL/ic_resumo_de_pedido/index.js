function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticResumoDePedido = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 3,
  d: "M60 51V15c0-3.315-2.685-6-6-6H18c-3.315 0-6 2.685-6 6v39a9 9 0 0 0 9 9m39-12H30v3a9 9 0 0 1-9 9m39-12h6v6c0 3.315-2.685 6-6 6H21"
}));
export default ComponenticResumoDePedido;