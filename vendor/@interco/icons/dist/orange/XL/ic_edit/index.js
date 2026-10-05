function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEdit = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M9 63V51.571a5 5 0 0 1 1.464-3.535l36.81-36.81a5 5 0 0 1 7.252.191l6.742 7.492a5 5 0 0 1-.245 6.944L23.953 61.6A5 5 0 0 1 20.482 63H9ZM40.5 18l12 13.5M39 63h24"
}));
export default ComponenticEdit;