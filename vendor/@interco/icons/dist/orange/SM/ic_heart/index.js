function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHeart = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M8 13.333 3.408 9.8A3.608 3.608 0 0 1 2 6.94v-.358a3.249 3.249 0 0 1 6-1.728 3.249 3.249 0 0 1 6 1.728v.359c0 1.12-.52 2.176-1.408 2.86L8 13.332Z",
  clipRule: "evenodd"
}));
export default ComponenticHeart;