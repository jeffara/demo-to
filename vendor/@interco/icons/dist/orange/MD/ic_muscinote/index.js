function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMuscinote = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M21 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0V5.36a2 2 0 0 0-2.329-1.972l-8 1.333A2 2 0 0 0 9 6.694V19m0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#EA7100",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M21 8 9 10"
}));
export default ComponenticMuscinote;