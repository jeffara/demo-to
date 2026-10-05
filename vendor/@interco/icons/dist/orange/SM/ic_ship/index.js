function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticShip = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "m13.334 13.867 1.254-3.042a.8.8 0 0 0-.463-1.117l-4.438-1.48a5.333 5.333 0 0 0-3.373 0l-4.439 1.48a.8.8 0 0 0-.462 1.117L3 13.867m-.333-4.534V4.667c0-.369.298-.667.666-.667h2m8 5.333V4.667A.667.667 0 0 0 12.668 4h-2M5.333 4h5.334M5.333 4c0-1.105.98-2 2.667-2 1.687 0 2.667.895 2.667 2m-8 2h10.667m-1.667 5.333-1-.333"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  d: "M1.333 14c4 0 4-1.334 6.667-1.334S10.667 14 14.667 14"
}));
export default ComponenticShip;