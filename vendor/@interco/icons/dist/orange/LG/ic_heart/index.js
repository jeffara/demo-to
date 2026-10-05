function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHeart = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M16 26.667 6.815 19.6A7.215 7.215 0 0 1 4 13.882v-.718a6.497 6.497 0 0 1 12-3.456 6.497 6.497 0 0 1 12 3.456v.718c0 2.24-1.04 4.352-2.815 5.718L16 26.667Z",
  clipRule: "evenodd"
}));
export default ComponenticHeart;