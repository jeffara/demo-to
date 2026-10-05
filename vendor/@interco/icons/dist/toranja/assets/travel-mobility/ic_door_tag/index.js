function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticDoorTag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M12 0c2.656 0 4.445.935 5.557 2.222C18.637 3.472 19 4.965 19 6v15a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6a5 5 0 0 1 5-5h3V7.009l-.001-.024a1.458 1.458 0 0 0-.144-.538.758.758 0 0 0-.253-.302C12.502 6.078 12.325 6 12 6c-.325 0-.502.078-.602.145a.758.758 0 0 0-.253.302 1.458 1.458 0 0 0-.144.538L11 7.011A1 1 0 0 1 10 8H6a1 1 0 0 1-1-1c0-1.16.34-2.878 1.389-4.334C7.474 1.159 9.274 0 12 0Zm0 2c-2.074 0-3.274.842-3.988 1.834-.492.683-.774 1.47-.91 2.166h2.07c.047-.143.107-.294.183-.447.185-.369.477-.768.934-1.073C10.752 4.172 11.325 4 12 4s1.248.172 1.71.48c.458.305.75.704.934 1.073A3.458 3.458 0 0 1 15 6.944v.012l.001.023V12h-5a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6c0-.632-.237-1.639-.957-2.472C15.354 2.732 14.143 2 12 2Zm0 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
}));
export default ComponenticDoorTag;