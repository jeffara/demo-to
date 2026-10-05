function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHeart = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "m12 20-6.888-5.3A5.411 5.411 0 0 1 3 10.411v-.538a4.873 4.873 0 0 1 9-2.592 4.873 4.873 0 0 1 9 2.592v.538c0 1.68-.78 3.265-2.111 4.29L12 20Z",
  clipRule: "evenodd"
}));
export default ComponenticHeart;