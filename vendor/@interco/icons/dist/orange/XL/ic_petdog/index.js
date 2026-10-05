function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPetdog = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 5,
  d: "M18 39v9a9 9 0 1 0 18 0 9 9 0 1 0 18 0v-9M18 51h-3.068c-5.98 0-10.297-5.723-8.654-11.472l6.236-21.825A12 12 0 0 1 24.052 9h23.897a12 12 0 0 1 11.538 8.703l6.235 21.825C67.365 45.277 63.048 51 57.07 51H54m-30 6a9 9 0 0 0 9 9h6a9 9 0 0 0 9-9"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#EA7100",
  d: "M29.122 44.121 36 51l6.879-6.879c1.89-1.89.551-5.121-2.121-5.121h-9.515c-2.673 0-4.011 3.231-2.121 5.121ZM49.5 31.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM31.5 31.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
}));
export default ComponenticPetdog;