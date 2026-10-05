function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLikeOutline = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "m6 30 12 .034v33L6 63V30ZM51.45 13.551c0-5.494-9.45-5.494-9.45-2.747.732 12.664-5.618 18.48-10.391 21.312-.97.575-1.609 1.594-1.609 2.722v23.661c0 1.657 1.342 3 2.999 3H55.5c3 0 6.507-3.727 7.5-7.5.994-3.772 3-13.752 3-16.5 0-2.747-.3-7.465-5.7-7.465h-5.853a2.997 2.997 0 0 1-2.997-3V13.55Z"
}));
export default ComponenticLikeOutline;