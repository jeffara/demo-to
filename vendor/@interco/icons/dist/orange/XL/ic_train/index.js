function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTrain = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 3,
  d: "M15 66h42M21 48h1.5m27 0H51M21 66v-3m30 3v-3"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 3,
  d: "M63 18H36m0 0H9m27 0v21m0 0h27m-27 0H9m6 18h42a6 6 0 0 0 6-6V21c0-8.284-6.716-15-15-15H24C15.716 6 9 12.716 9 21v30a6 6 0 0 0 6 6Z"
}));
export default ComponenticTrain;