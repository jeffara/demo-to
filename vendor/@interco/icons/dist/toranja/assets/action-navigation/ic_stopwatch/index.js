function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticStopwatch = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M14 8a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.5 2.5a1 1 0 0 0 1.414-1.414L14 11.586V8Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M11 1a1 1 0 1 0 0 2h1v.055A9.001 9.001 0 0 0 13 21a9 9 0 0 0 1-17.945V3h1a1 1 0 1 0 0-2h-4ZM6 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M4 4a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2H4ZM1 11a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H1ZM4 18a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H4Z"
}));
export default ComponenticStopwatch;