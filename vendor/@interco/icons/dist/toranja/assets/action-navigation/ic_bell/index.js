function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBell = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M12 2c-1.666 0-3.069 1.217-3.3 2.825A6.999 6.999 0 0 0 5 11v1.337A3.5 3.5 0 0 0 6.5 19h1.626a4.002 4.002 0 0 0 7.748 0H17.5a3.5 3.5 0 0 0 1.5-6.663V11c0-2.674-1.5-4.996-3.7-6.174C15.07 3.216 13.667 2 12 2Zm1.732 17a2 2 0 0 1-3.464 0h3.464Zm3.768-2a1.5 1.5 0 0 0 .301-2.97 1 1 0 0 1-.801-.98V11a5.002 5.002 0 0 0-3.061-4.61 1 1 0 0 1-.61-.998c.003-.032.005-.065.005-.098C13.334 4.595 12.753 4 12 4c-.752 0-1.333.595-1.333 1.294 0 .033.001.066.004.098a1 1 0 0 1-.61.997A5.002 5.002 0 0 0 7 11v2.05a1 1 0 0 1-.801.98A1.5 1.5 0 0 0 6.5 17h11Z",
  clipRule: "evenodd"
}));
export default ComponenticBell;