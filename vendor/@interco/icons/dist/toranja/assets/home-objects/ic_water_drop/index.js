function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticWaterDrop = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M18 13.5a1 1 0 0 1 .759.35l2.386 2.782a3.556 3.556 0 0 1-2.7 5.868h-.89a3.555 3.555 0 0 1-2.7-5.868l2.386-2.782A1 1 0 0 1 18 13.5ZM10 2a1 1 0 0 1 .79.386l6 7.715a1 1 0 1 1-1.58 1.227L10 4.628l-4.799 6.17A5.702 5.702 0 0 0 9.701 20H11a1 1 0 1 1 0 2H9.701A7.701 7.701 0 0 1 3.622 9.571l5.589-7.185A1 1 0 0 1 10 2Z"
}));
export default ComponenticWaterDrop;