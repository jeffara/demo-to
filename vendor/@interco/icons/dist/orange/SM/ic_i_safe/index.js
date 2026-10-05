function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticISafe = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 16 16",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "m8 15.333-.28-.107C.342 12.399 1.377 4.312 1.388 4.23l.05-.352S5.332 2.667 8 .667c2.667 2 6.562 3.212 6.562 3.212l.05.352c.01.081 1.045 8.168-6.33 10.995L8 15.333Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinejoin: "round",
  d: "M6.667 7.333V6a1.333 1.333 0 0 1 2.666 0v1.333M6 10.667h4a.667.667 0 0 0 .667-.667V8A.667.667 0 0 0 10 7.333H6A.667.667 0 0 0 5.333 8v2c0 .368.299.667.667.667Z"
}));
export default ComponenticISafe;