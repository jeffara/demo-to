function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticShare = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M10.23 11.07 5.783 8.904m0-1.81 4.445-2.164M6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
}));
export default ComponenticShare;