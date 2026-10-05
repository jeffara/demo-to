function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLikeOutline = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "m2 10 4 .011v11L2 21V10ZM17.15 4.517c0-1.831-3.15-1.831-3.15-.916.244 4.222-1.873 6.16-3.464 7.104a1.065 1.065 0 0 0-.536.908V19.5a1 1 0 0 0 1 1h7.5c1 0 2.169-1.242 2.5-2.5.331-1.258 1-4.584 1-5.5 0-.916-.1-2.489-1.9-2.489h-1.951a1 1 0 0 1-.999-1V4.517Z"
}));
export default ComponenticLikeOutline;