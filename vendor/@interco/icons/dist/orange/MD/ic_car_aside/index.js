function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCarAside = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M5 16H4a2 2 0 0 1-2-2v-2.19a5 5 0 0 1 1.159-3.2l.741-.89A2 2 0 0 1 5.437 7h6.735a2 2 0 0 1 1.414.586l1.828 1.828a2 2 0 0 0 1.414.586H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
}), /*#__PURE__*/React.createElement("circle", {
  cx: 7,
  cy: 16,
  r: 2,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2
}), /*#__PURE__*/React.createElement("circle", {
  cx: 17,
  cy: 16,
  r: 2,
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M9 16h6"
}));
export default ComponenticCarAside;