function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPlug = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M15.293 2.293a1 1 0 1 1 1.414 1.414l-2.375 2.376 3.585 3.585 2.376-2.375a1 1 0 1 1 1.414 1.414l-2.375 2.376.328.328a1 1 0 0 1 0 1.414l-2.418 2.417a6 6 0 0 1-7.719.649l-5.816 5.816a1 1 0 1 1-1.414-1.414l5.816-5.816a6 6 0 0 1 .649-7.72l2.417-2.417a1 1 0 0 1 1.414 0l.328.328 2.376-2.375Zm-5.121 5.879a4 4 0 1 0 5.656 5.656l1.711-1.71-5.657-5.657-1.71 1.71Z"
}));
export default ComponenticPlug;