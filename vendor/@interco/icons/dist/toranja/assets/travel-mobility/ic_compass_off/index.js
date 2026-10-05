function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCompassOff = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M2.1 7.2a1 1 0 1 1 1.8.873A8.933 8.933 0 0 0 3.054 11H4a1 1 0 1 1 0 2h-.945A9.004 9.004 0 0 0 11 20.945V20a1 1 0 1 1 2 0v.945a8.933 8.933 0 0 0 2.927-.844 1 1 0 0 1 .874 1.798A10.96 10.96 0 0 1 12 23C5.925 23 1 18.075 1 12c0-1.72.395-3.349 1.1-4.8ZM12 1c6.075 0 11 4.925 11 11a10.96 10.96 0 0 1-2.547 7.04l1.254 1.253a1 1 0 1 1-1.414 1.414l-18-18a1 1 0 1 1 1.414-1.414l1.254 1.254A10.96 10.96 0 0 1 12 1ZM8.12 12.812a1 1 0 0 1 1.76.948l-.42.78.78-.42a1 1 0 0 1 .948 1.76l-3.714 2a1 1 0 0 1-1.355-1.354l2-3.714ZM13 4a1 1 0 1 1-2 0v-.945a8.954 8.954 0 0 0-4.618 1.913l4.299 4.299 5.845-3.148a1 1 0 0 1 1.355 1.355l-3.148 5.845 4.3 4.3A8.953 8.953 0 0 0 20.944 13H20a1 1 0 1 1 0-2h.945A9.004 9.004 0 0 0 13 3.055V4Zm-.843 6.743 1.1 1.1 1.282-2.382-2.382 1.282Z"
}));
export default ComponenticCompassOff;