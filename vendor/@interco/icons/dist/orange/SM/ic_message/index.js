function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMessage = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: "#161616",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M5.333 5.333H11M5.333 8H8m-6 5.333v-10C2 2.597 2.597 2 3.333 2h9.334C13.403 2 14 2.597 14 3.333V10c0 .736-.597 1.333-1.333 1.333H5.11c-.241 0-.477.066-.683.188l-.05.03c-.127.077-.254.154-.372.244L2 13.333Z"
}), /*#__PURE__*/React.createElement("rect", {
  width: 10.667,
  height: 10.667,
  x: 2.667,
  y: 2.667,
  fill: "#F56A50",
  rx: 5.333
}), /*#__PURE__*/React.createElement("path", {
  stroke: "#fff",
  strokeLinejoin: "round",
  strokeWidth: 1.5,
  d: "M6.333 5.667H8a2.333 2.333 0 1 1 0 4.666H6.333V5.667Z"
}));
export default ComponenticMessage;