function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMic = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M8 6a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0V6Zm4-2a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M5 10a1 1 0 0 1 1 1v1a6 6 0 0 0 12 0v-1a1 1 0 1 1 2 0v1a8.001 8.001 0 0 1-7 7.938V21a1 1 0 1 1-2 0v-1.062A8.001 8.001 0 0 1 4 12v-1a1 1 0 0 1 1-1Z"
}));
export default ComponenticMic;