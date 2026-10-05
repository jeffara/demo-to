function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPetdog = props => /*#__PURE__*/React.createElement("svg", _extends({
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
  d: "M8 17.333v4a4 4 0 1 0 8 0 4 4 0 1 0 8 0v-4M8 22.667H6.636c-2.657 0-4.576-2.544-3.846-5.1l2.771-9.699A5.333 5.333 0 0 1 10.69 4h10.62a5.333 5.333 0 0 1 5.129 3.868l2.77 9.7c.73 2.555-1.188 5.099-3.845 5.099H24m-13.333 2.666a4 4 0 0 0 4 4h2.666a4 4 0 0 0 4-4"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#EA7100",
  d: "M12.943 19.61 16 22.666l3.057-3.058c.84-.84.245-2.276-.942-2.276h-4.23c-1.187 0-1.782 1.436-.942 2.276ZM22 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM14 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
}));
export default ComponenticPetdog;