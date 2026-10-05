function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticResumoDePedido = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M20 17V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3m13-4H10v1a3 3 0 0 1-3 3m13-4h2v2a2 2 0 0 1-2 2H7"
}));
export default ComponenticResumoDePedido;