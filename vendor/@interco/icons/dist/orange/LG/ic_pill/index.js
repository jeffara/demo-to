function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPill = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M12.264 10.497a1.25 1.25 0 0 0-1.767 1.768l1.767-1.768Zm12.28 4.62-9.428 9.427 1.768 1.768 9.428-9.428-1.768-1.768ZM7.456 16.883l9.428-9.428-1.768-1.768-9.428 9.428 1.768 1.768Zm0 7.66a5.417 5.417 0 0 1 0-7.66l-1.768-1.768a7.917 7.917 0 0 0 0 11.196l1.768-1.768Zm7.66 0a5.417 5.417 0 0 1-7.66 0l-1.768 1.768a7.917 7.917 0 0 0 11.196 0l-1.768-1.768Zm9.428-17.088a5.417 5.417 0 0 1 0 7.66l1.768 1.768a7.917 7.917 0 0 0 0-11.196l-1.768 1.768Zm1.768-1.768a7.917 7.917 0 0 0-11.196 0l1.768 1.768a5.417 5.417 0 0 1 7.66 0l1.768-1.768ZM21.598 19.83l-9.334-9.333-1.767 1.768 9.333 9.333 1.768-1.768Z"
}));
export default ComponenticPill;