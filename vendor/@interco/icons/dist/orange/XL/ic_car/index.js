function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCar = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M15.068 15.813A5 5 0 0 1 19.925 12h32.15a5 5 0 0 1 4.857 3.813l2.64 10.803c.063.254.172.494.322.708l3.315 4.71A15.32 15.32 0 0 1 66 40.85v12.317a6.833 6.833 0 0 1-13.667 0V51H19.667v2.167a6.833 6.833 0 0 1-13.667 0V40.85c0-3.156.975-6.235 2.791-8.816l3.315-4.71c.15-.214.26-.454.321-.708l2.641-10.803ZM18 39h6M48 39h6M6 27h60"
}));
export default ComponenticCar;