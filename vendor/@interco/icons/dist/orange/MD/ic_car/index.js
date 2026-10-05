function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCar = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M4.96 5.525A2 2 0 0 1 6.904 4h10.194a2 2 0 0 1 1.942 1.525l.825 3.372a.56.56 0 0 0 .086.19l1.533 2.178A2.84 2.84 0 0 1 22 12.899v4.823a2.278 2.278 0 1 1-4.556 0V17H6.556v.722a2.278 2.278 0 1 1-4.556 0V12.9c0-.585.18-1.156.517-1.634L4.05 9.087a.563.563 0 0 0 .086-.19l.825-3.372ZM6 13h2M16 13h2M2 9h20"
}));
export default ComponenticCar;