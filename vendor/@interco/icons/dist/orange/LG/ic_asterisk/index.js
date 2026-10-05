function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticAsterisk = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M16 13.333v5.334M25.333 13.333v5.334M13.333 17.54l5.333-3.08M22.667 17.54 28 14.46M18.667 17.54l-5.333-3.08M28 17.54l-5.333-3.08M6.667 13.333v5.334M4 17.54l5.333-3.08M9.333 17.54 4 14.46"
}));
export default ComponenticAsterisk;