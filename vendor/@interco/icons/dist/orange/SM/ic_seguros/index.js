function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSeguros = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  d: "M8 7.333v6a1.333 1.333 0 0 1-2.667 0M8 2v-.667"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M8 2a6.667 6.667 0 0 0-6.667 6.667l.115-.115a2.667 2.667 0 0 1 3.77 0l.115.115 1.067-.8a2.667 2.667 0 0 1 3.2 0l1.067.8.114-.115a2.667 2.667 0 0 1 3.771 0l.115.115A6.667 6.667 0 0 0 8 2Z"
}));
export default ComponenticSeguros;