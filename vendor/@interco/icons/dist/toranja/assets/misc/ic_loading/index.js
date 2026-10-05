function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLoading = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "#FED9B2",
  fillRule: "evenodd",
  d: "M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#EA7100",
  fillRule: "evenodd",
  d: "M11 4a1 1 0 0 1 1-1 9 9 0 1 1-4.5 16.795 1 1 0 1 1 1-1.73A7 7 0 1 0 12 5a1 1 0 0 1-1-1.001Z",
  clipRule: "evenodd"
}));
export default ComponenticLoading;