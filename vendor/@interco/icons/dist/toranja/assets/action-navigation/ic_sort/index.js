function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSort = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M8 16a1 1 0 0 0 1-1V5.414l2.293 2.293a1 1 0 1 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 1 0 1.414 1.414L7 5.414V15a1 1 0 0 0 1 1Zm7.293 5.707a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L17 18.586V9a1 1 0 1 0-2 0v9.586l-2.293-2.293a1 1 0 1 0-1.414 1.414l4 4Z"
}));
export default ComponenticSort;