function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticArrowUpload = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M11.3 2.286a.996.996 0 0 1 1.407.007l5 5a1 1 0 0 1-1.414 1.414L13 5.414V16a1 1 0 1 1-2 0V5.414L7.707 8.707a1 1 0 0 1-1.414-1.414l4.999-5 .008-.007Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M4 17a1 1 0 1 0-2 0v2a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2a1 1 0 1 0-2 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2Z"
}));
export default ComponenticArrowUpload;