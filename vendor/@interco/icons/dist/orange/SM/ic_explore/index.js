function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticExplore = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  d: "M14.667 8A6.667 6.667 0 0 1 8 14.667M14.667 8A6.667 6.667 0 0 0 8 1.333M14.667 8h-1.333M8 14.667A6.667 6.667 0 0 1 1.333 8M8 14.667v-1.333M1.333 8A6.667 6.667 0 0 1 8 1.333M1.333 8h1.334M8 1.333v1.334"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "m7 7-2.333 4.333L9 9l2.333-4.333L7 7Z"
}));
export default ComponenticExplore;