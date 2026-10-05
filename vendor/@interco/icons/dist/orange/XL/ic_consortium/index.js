function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticConsortium = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  strokeWidth: 5,
  d: "M9 9v14.21h9V36h12v10.5C30 55.613 37.387 63 46.5 63S63 55.613 63 46.5 55.613 30 46.5 30h-6.3L23.25 9H9Z"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: 45.9,
  cy: 45.9,
  fill: props.color,
  rx: 6,
  ry: 6
}));
export default ComponenticConsortium;