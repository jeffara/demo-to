function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSimcard = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M2.667 13.167V2.833a1.5 1.5 0 0 1 1.5-1.5h4.545a1.5 1.5 0 0 1 1.06.44l3.122 3.12a1.5 1.5 0 0 1 .44 1.062v7.212a1.5 1.5 0 0 1-1.5 1.5H4.166a1.5 1.5 0 0 1-1.5-1.5Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M5.333 9.333V12M8 9.333V12M10.667 9.333V12"
}));
export default ComponenticSimcard;