function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticResumoDePedido = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  d: "M13.333 11.333v-8C13.333 2.597 12.736 2 12 2H4c-.737 0-1.333.597-1.333 1.333V12a2 2 0 0 0 2 2m8.666-2.667H6.666V12a2 2 0 0 1-2 2m8.667-2.667h1.333v1.334c0 .736-.596 1.333-1.333 1.333H4.667"
}));
export default ComponenticResumoDePedido;