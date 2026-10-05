function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBoxFill = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M17.645 2a3 3 0 0 1 2.787 1.886l.924 2.312A9.002 9.002 0 0 1 22 9.541V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9.541c0-1.145.218-2.28.644-3.343l.924-2.312A3 3 0 0 1 6.354 2h11.291ZM10 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4ZM6.354 4a1 1 0 0 0-.928.629L4.5 6.94 4.478 7H11V4H6.354ZM13 4v3h6.523l-.024-.059-.925-2.312A1 1 0 0 0 17.645 4H13Z"
}));
export default ComponenticBoxFill;