function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPrinter = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M17 2a1 1 0 0 1 1 1v4h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2H5a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h1V3a1 1 0 0 1 1-1h10ZM8 15v5h8v-5H8ZM5 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H5Zm3-2h8V4H8v3Z"
}));
export default ComponenticPrinter;