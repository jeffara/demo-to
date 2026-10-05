function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticContract = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M7 12a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1ZM16 11a1 1 0 1 1-2 0V7a1 1 0 1 1 2 0v4ZM11 12a1 1 0 0 0 1-1V7a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M2 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v11h1a1 1 0 0 1 1 1v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm5.83 15H19a1 1 0 0 0 1-1v-1H8v1c0 .35-.06.687-.17 1ZM18 16H7a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v11Z",
  clipRule: "evenodd"
}));
export default ComponenticContract;