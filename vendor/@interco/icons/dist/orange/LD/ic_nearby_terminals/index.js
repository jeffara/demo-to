function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticNearbyTerminals = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M24.6 16c1.217 0 2.279.823 2.582 2l2.063 8a2.667 2.667 0 0 1-2.582 3.333H5.356a2.667 2.667 0 0 1-2.584-3.328l2.048-8A2.667 2.667 0 0 1 7.403 16m15.264-6.667c0 4.01-5.215 9.333-6.667 9.333s-6.667-5.324-6.667-9.333c0-3.266 3.037-6.667 6.667-6.667s6.667 3.4 6.667 6.667Zm-4.49.178a2.178 2.178 0 1 1-4.355 0 2.178 2.178 0 0 1 4.356 0Z"
}));
export default ComponenticNearbyTerminals;