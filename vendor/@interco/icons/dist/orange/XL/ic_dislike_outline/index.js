function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDislikeOutline = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "m6 42 12-.034v-33L6 9v33ZM51.45 58.449c0 5.494-9.45 5.494-9.45 2.747.732-12.664-5.618-18.48-10.391-21.312C30.639 39.31 30 38.29 30 37.162V13.501c0-1.657 1.342-3 2.999-3H55.5c3 0 6.507 3.727 7.5 7.5.994 3.772 3 13.752 3 16.5 0 2.747-.3 7.465-5.7 7.465h-5.853a2.997 2.997 0 0 0-2.997 3V58.45Z"
}));
export default ComponenticDislikeOutline;