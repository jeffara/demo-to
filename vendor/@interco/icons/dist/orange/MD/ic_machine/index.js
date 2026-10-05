function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMachine = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M6 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM9 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM10 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM13 15a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM14 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M18 7h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3m4-8h-4M4 22h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Zm3-11h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Z"
}));
export default ComponenticMachine;