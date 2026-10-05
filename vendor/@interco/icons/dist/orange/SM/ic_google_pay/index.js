function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticGooglePay = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  d: "M10.683 6.049 2.667 1.333v13.334l8.016-4.716M2.667 1.333l8.016 8.618m-8.016 4.716 8.016-8.618m0 0 1.852 1.089a1 1 0 0 1 0 1.724l-1.852 1.09"
}));
export default ComponenticGooglePay;