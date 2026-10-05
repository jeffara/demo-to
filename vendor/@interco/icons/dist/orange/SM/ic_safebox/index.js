function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSafebox = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("rect", {
  width: 12,
  height: 11.333,
  x: 2,
  y: 2,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  rx: 1.5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M12 13.333V14M4 13.333V14"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 8,
  cy: 7.69,
  r: 2,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "m6.586 6.276-.943-.943M6.586 9.105l-.943.942M10.357 10.047l-.943-.942"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M10.887 5.864a.75.75 0 1 0-1.06-1.061l1.06 1.06Zm-2.003-.118a.75.75 0 0 0 1.06 1.06l-1.06-1.06Zm.943-.943-.943.943 1.06 1.06.943-.942-1.06-1.061Z"
}));
export default ComponenticSafebox;