function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMessage = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  strokeWidth: 2,
  d: "M10.667 10.667H22M10.667 16H16M4 26.667v-20A2.667 2.667 0 0 1 6.667 4h18.666A2.667 2.667 0 0 1 28 6.667V20a2.667 2.667 0 0 1-2.667 2.667h-15.11c-.483 0-.955.13-1.366.376-.098.058-.194.118-.293.173-.13.073-.258.148-.375.238L4 26.667Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 21.333,
  height: 21.333,
  x: 5.333,
  y: 5.333,
  fill: "#F56A50",
  rx: 10.667
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#fff",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M12.666 11.333H16a4.667 4.667 0 1 1 0 9.334h-3.334v-9.334Z"
}));
export default ComponenticMessage;