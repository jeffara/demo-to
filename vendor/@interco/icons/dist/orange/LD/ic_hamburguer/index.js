function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHamburguer = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M4 13.333h24m-24 0C4 10.223 4 4 10.667 4h10.667C28 4 28 10.222 28 13.333m-24 0a2.667 2.667 0 0 0 0 5.334m24-5.334a2.667 2.667 0 0 1 0 5.334m0 0V20c0 2.667 0 8-6.666 8H10.667C4 28 4 22.667 4 20v-1.333m24 0H15.51a.612.612 0 0 0-.574.807c.519 1.556-.63 3.193-2.27 3.193-1.639 0-2.787-1.637-2.268-3.193a.612.612 0 0 0-.574-.807H4"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 17.333,
  cy: 8,
  fill: props.color,
  rx: 1.333,
  ry: 1.333
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 22.667,
  cy: 9.333,
  fill: props.color,
  rx: 1.333,
  ry: 1.333
}));
export default ComponenticHamburguer;