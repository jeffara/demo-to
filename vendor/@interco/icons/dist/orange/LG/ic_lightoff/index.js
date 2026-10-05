function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLightoff = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  strokeWidth: 2.5,
  d: "M11.207 11.059a5.298 5.298 0 0 0 .67-1.731C12.02 8.605 12.597 8 13.333 8h5.334c.736 0 1.313.605 1.456 1.328.674 3.383 3.877 3.76 3.877 7.339 0 2.355-.616 4.196-1.607 5.565m-5.06 3.001c-.44.067-.887.1-1.333.1-4 0-8-2.666-8-8.666 0-.236.014-.458.04-.667"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2.5,
  d: "M12 3.5h8m-1.333-2.167h-5.334M4 4l24 24"
}));
export default ComponenticLightoff;