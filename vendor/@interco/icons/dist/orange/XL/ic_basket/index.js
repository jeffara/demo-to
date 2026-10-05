function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBasket = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M9 33h54M25.964 15.626A5 5 0 0 1 30.772 12h10.456a5 5 0 0 1 4.808 3.626L51 33H21l4.964-17.374ZM12 33l5.13 23.085A5 5 0 0 0 22.01 60h27.98a5 5 0 0 0 4.88-3.915L60 33"
}));
export default ComponenticBasket;