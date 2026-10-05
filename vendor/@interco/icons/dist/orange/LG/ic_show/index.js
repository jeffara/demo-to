function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticShow = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2.5,
  d: "M27.702 18.667C26.49 13.323 21.711 9.333 16 9.333s-10.49 3.99-11.703 9.334"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 16,
  cy: 18.667,
  stroke: props.color,
  strokeWidth: 2.5,
  rx: 4,
  ry: 4
}));
export default ComponenticShow;