function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHandbag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M9.333 9.334v16M22.667 9.334v16"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2.5,
  d: "M2.667 24.334v-14a1 1 0 0 1 1-1h24.666a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3.667a1 1 0 0 1-1-1ZM21.333 9.333a5.333 5.333 0 1 0-10.666 0"
}));
export default ComponenticHandbag;