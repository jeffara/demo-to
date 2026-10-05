function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticWallet = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M57 48v10a5 5 0 0 1-5 5H14a5 5 0 0 1-5-5V26a5 5 0 0 1 5-5h38a5 5 0 0 1 5 5v10M46.9 16.074V21H13l27.231-9.64c3.254-1.151 6.669 1.262 6.669 4.714Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 30,
  height: 12,
  x: 33,
  y: 36,
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  rx: 6
}));
export default ComponenticWallet;