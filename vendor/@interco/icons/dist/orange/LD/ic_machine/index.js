function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMachine = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M8 18.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666ZM8 22.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666ZM12 20a1.333 1.333 0 1 1 2.667 0A1.333 1.333 0 0 1 12 20ZM13.333 22.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666ZM17.333 20A1.333 1.333 0 1 1 20 20a1.333 1.333 0 0 1-2.667 0ZM18.667 22.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  d: "M24 9.333h4A2.667 2.667 0 0 1 30.667 12v10.667A2.667 2.667 0 0 1 28 25.333h-4m5.333-10.666H24M5.333 29.333h16A2.667 2.667 0 0 0 24 26.667V5.333a2.667 2.667 0 0 0-2.667-2.666h-16a2.667 2.667 0 0 0-2.666 2.666v21.334a2.667 2.667 0 0 0 2.666 2.666Zm4-14.666h8c.737 0 1.334-.597 1.334-1.334v-4c0-.736-.597-1.333-1.334-1.333h-8C8.597 8 8 8.597 8 9.333v4c0 .737.597 1.334 1.333 1.334Z"
}));
export default ComponenticMachine;