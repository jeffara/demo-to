function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTempoDeEntrega = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M3.333 3.333h-.667m.667 9.334h-.667M1.334 8H.667m8-2.667V8l1.666 1.667"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M7.333.833a.5.5 0 1 0 0 1v-1Zm2.667 1a.5.5 0 0 0 0-1v1ZM13.5 8a4.833 4.833 0 0 1-4.833 4.833v1A5.833 5.833 0 0 0 14.5 8h-1Zm-4.833 4.833A4.833 4.833 0 0 1 3.834 8h-1a5.833 5.833 0 0 0 5.833 5.833v-1ZM3.834 8a4.833 4.833 0 0 1 4.833-4.833v-1A5.833 5.833 0 0 0 2.834 8h1Zm4.833-4.833A4.833 4.833 0 0 1 13.5 8h1a5.833 5.833 0 0 0-5.833-5.833v1ZM7.334 1.833H10v-1H7.333v1Zm.833-.5v1.334h1V1.333h-1Z"
}));
export default ComponenticTempoDeEntrega;