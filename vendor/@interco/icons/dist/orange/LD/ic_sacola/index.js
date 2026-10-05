function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSacola = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  strokeWidth: 2,
  d: "M10.667 9.333H8.899a2.667 2.667 0 0 0-2.625 2.198l-2.24 12.55A3.333 3.333 0 0 0 7.313 28h17.372a3.333 3.333 0 0 0 3.28-3.92l-2.24-12.549a2.667 2.667 0 0 0-2.625-2.198H16"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M21.333 12V8a5.333 5.333 0 0 0-10.666 0v4m0 10.667h10.666"
}));
export default ComponenticSacola;