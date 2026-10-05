function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticRec = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M4 9.333V6.5A2.5 2.5 0 0 1 6.5 4h2.833M4 22.667V25.5A2.5 2.5 0 0 0 6.5 28h2.833M28 9.333V6.5A2.5 2.5 0 0 0 25.5 4h-2.833M28 22.667V25.5a2.5 2.5 0 0 1-2.5 2.5h-2.833"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M12 20.09v-7.918c0-1.206 1.35-1.919 2.345-1.24l6.334 4.319a1.5 1.5 0 0 1-.104 2.543l-6.334 3.6A1.5 1.5 0 0 1 12 20.088Z"
}));
export default ComponenticRec;