function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTempoDeEntrega = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M15 15h-3m3 42h-3M6 36H3m36-12v12l7.5 7.5"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M33 4.5a1.5 1.5 0 0 0 0 3v-3Zm12 3a1.5 1.5 0 0 0 0-3v3ZM61.5 36c0 12.426-10.074 22.5-22.5 22.5v3c14.083 0 25.5-11.417 25.5-25.5h-3ZM39 58.5c-12.426 0-22.5-10.074-22.5-22.5h-3c0 14.083 11.417 25.5 25.5 25.5v-3ZM16.5 36c0-12.426 10.074-22.5 22.5-22.5v-3c-14.083 0-25.5 11.417-25.5 25.5h3ZM39 13.5c12.426 0 22.5 10.074 22.5 22.5h3c0-14.083-11.417-25.5-25.5-25.5v3Zm-6-6h12v-3H33v3ZM37.5 6v6h3V6h-3Z"
}));
export default ComponenticTempoDeEntrega;