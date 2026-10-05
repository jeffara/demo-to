function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTravel = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M8 26.667h16"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M12.03 13.823 6.607 8.28a1.526 1.526 0 0 1 0-2.026c.1-.11.215-.2.341-.269l.85-.463a1.51 1.51 0 0 1 1.537.046l9.482 5.301c.074.042.16.047.238.014l8.64-3.607c1.109-.469 2.367.101 2.81 1.274.46 1.219-.096 2.603-1.246 3.096L6.99 21.19a1.6 1.6 0 0 1-1.835-.374L1.821 17.29a1.836 1.836 0 0 1 0-2.494c.65-.688 1.366-.688 2.357 0l1.802 1.284a2.452 2.452 0 0 0 2.488.233l3.496-1.972a.335.335 0 0 0 .065-.518Z",
  clipRule: "evenodd"
}));
export default ComponenticTravel;