function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHeart = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M36 60 15.335 44.1A16.234 16.234 0 0 1 9 31.234v-1.615C9 21.545 15.545 15 23.619 15c5.242 0 9.803 2.748 12.381 6.843C38.578 17.748 43.139 15 48.381 15 56.455 15 63 21.545 63 29.619v1.615c0 5.04-2.34 9.793-6.335 12.866L36 60Z",
  clipRule: "evenodd"
}));
export default ComponenticHeart;