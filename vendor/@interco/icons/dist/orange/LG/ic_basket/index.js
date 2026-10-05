function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBasket = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M4 14.667h24M11.482 7.147a2.5 2.5 0 0 1 2.404-1.814h4.228a2.5 2.5 0 0 1 2.404 1.814l2.149 7.52H9.333l2.15-7.52ZM5.333 14.667l2.232 10.042a2.5 2.5 0 0 0 2.44 1.958h11.99a2.5 2.5 0 0 0 2.44-1.958l2.232-10.042"
}));
export default ComponenticBasket;