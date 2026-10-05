function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLuggage = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M6 22H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3m4 0h2m-2 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4m4 0H6m0 0v3"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M12 13h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2m0-9v9m0-9h1m-1 9h7m0-9h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2m0-9v9m0-9h-1m0 0v-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2m5 0h-5"
}));
export default ComponenticLuggage;