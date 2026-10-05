function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSacola = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "M24 21h-3.976a6 6 0 0 0-5.907 4.945L9.075 54.181C8.254 58.78 11.788 63 16.458 63h39.084c4.67 0 8.204-4.221 7.383-8.818l-5.042-28.237A6 6 0 0 0 51.977 21H36"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 3,
  d: "M48 27v-9c0-6.627-5.373-12-12-12s-12 5.373-12 12v9m0 24h24"
}));
export default ComponenticSacola;