function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLuggage = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  strokeWidth: 2,
  d: "M8 29.333H4A1.333 1.333 0 0 1 2.667 28V10.666c0-.736.596-1.333 1.333-1.333h4m5.333 0H16m-2.667 0V4c0-.737-.597-1.333-1.333-1.333H9.333C8.597 2.667 8 3.263 8 4v5.333m5.333 0H8m0 0v4"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M16 17.334h-2.667c-.736 0-1.333.596-1.333 1.333V28c0 .736.597 1.334 1.333 1.334H16m0-12v12m0-12h1.333m-1.333 12h9.333m0-12H28c.736 0 1.333.596 1.333 1.333V28c0 .736-.597 1.334-1.333 1.334h-2.667m0-12v12m0-12H24m0 0v-2.667c0-.737-.597-1.333-1.333-1.333h-4c-.737 0-1.334.596-1.334 1.333v2.667m6.667 0h-6.667"
}));
export default ComponenticLuggage;