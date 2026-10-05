function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCar = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M6.645 7.24a2.5 2.5 0 0 1 2.429-1.907h13.853a2.5 2.5 0 0 1 2.428 1.907l1.13 4.623a.751.751 0 0 0 .115.253l1.894 2.692c.546.776.84 1.701.84 2.65v6.172a3.037 3.037 0 1 1-6.075 0v-.963H8.741v.963a3.037 3.037 0 0 1-6.074 0v-6.172c0-.949.293-1.874.839-2.65L5.4 12.116a.75.75 0 0 0 .115-.253l1.13-4.623ZM8 17.334h2.667M21.333 17.334H24M2.667 12h26.666"
}));
export default ComponenticCar;