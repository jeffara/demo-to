function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDislikeOutline = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "m2 14 4-.011v-11L2 3v11ZM17.15 19.483c0 1.831-3.15 1.831-3.15.915.244-4.22-1.873-6.16-3.464-7.103a1.065 1.065 0 0 1-.536-.908V4.5a1 1 0 0 1 1-1h7.5c1 0 2.169 1.243 2.5 2.5.331 1.257 1 4.584 1 5.5 0 .916-.1 2.489-1.9 2.489h-1.951a.999.999 0 0 0-.999 1v4.494Z"
}));
export default ComponenticDislikeOutline;