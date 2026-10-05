function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSeguros = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 3,
  d: "M36 33v27a6 6 0 0 1-12 0M36 9V6"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "M36 9C19.431 9 6 22.431 6 39l.515-.515c4.686-4.686 12.284-4.686 16.97 0L24 39l4.8-3.6a12 12 0 0 1 14.4 0L48 39l.515-.515c4.686-4.686 12.284-4.686 16.97 0L66 39C66 22.431 52.569 9 36 9Z"
}));
export default ComponenticSeguros;