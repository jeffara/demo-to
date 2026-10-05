function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBasket = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  strokeWidth: 2,
  d: "M2 7.333h12M5.689 3.755a1.5 1.5 0 0 1 1.442-1.088h1.737a1.5 1.5 0 0 1 1.443 1.088l1.022 3.578H4.666L5.69 3.755Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "m2.667 7.333 1.072 4.826a1.5 1.5 0 0 0 1.464 1.174h5.594a1.5 1.5 0 0 0 1.464-1.174l1.072-4.826"
}));
export default ComponenticBasket;