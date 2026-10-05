function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBus = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M2 14.667V3.333a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v11.334M1.333 4v2m13.334-2v2M2 8.667S4.667 9 8 9s6-.333 6-.333m-9.333 6v-.333c0-.369.298-.667.666-.667h5.334c.368 0 .666.298.666.667v.333"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  d: "M4.667 11.334h.666m5.334 0h.666"
}));
export default ComponenticBus;