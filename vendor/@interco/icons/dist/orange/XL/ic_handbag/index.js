function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHandbag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M21 21v36M51 21v36"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 5,
  d: "M6 54.5v-31A2.5 2.5 0 0 1 8.5 21h55a2.5 2.5 0 0 1 2.5 2.5v31a2.5 2.5 0 0 1-2.5 2.5h-55A2.5 2.5 0 0 1 6 54.5ZM48 21c0-6.627-5.373-12-12-12s-12 5.373-12 12"
}));
export default ComponenticHandbag;