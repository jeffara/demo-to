function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCar = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M3.276 3.81a1.5 1.5 0 0 1 1.457-1.143h6.534a1.5 1.5 0 0 1 1.457 1.143l.518 2.121c.011.045.031.088.058.127l1.1 1.564c.174.246.267.54.267.84v3.353a1.519 1.519 0 0 1-3.037 0v-.482H4.37v.482a1.519 1.519 0 0 1-3.037 0V8.462c0-.3.093-.594.266-.84l1.1-1.564a.375.375 0 0 0 .058-.127l.519-2.12ZM4 8.666h1.333M10.667 8.666H12M1.333 6h13.334"
}));
export default ComponenticCar;