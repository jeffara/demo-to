function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBasket = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M3 11h18M8.586 5.45A2 2 0 0 1 10.509 4h2.982a2 2 0 0 1 1.923 1.45L17 11H7l1.586-5.55ZM4 11l1.652 7.434A2 2 0 0 0 7.604 20h8.792a2 2 0 0 0 1.952-1.566L20 11"
}));
export default ComponenticBasket;