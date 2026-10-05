function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLink = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M20.657 3.343a5 5 0 0 0-7.071 0l-1.293 1.293a1 1 0 0 0 1.414 1.414L15 4.757A3 3 0 1 1 19.243 9L15 13.243a3 3 0 0 1-4.243 0 1 1 0 1 0-1.387 1.44 5 5 0 0 0 7.044-.027l4.243-4.242a5 5 0 0 0 0-7.07Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M9 10.757a3 3 0 0 1 4.243 0 1 1 0 1 0 1.414-1.414l-.028-.028a5 5 0 0 0-7.043.028l-4.243 4.243a5 5 0 1 0 7.071 7.07l1.293-1.292a1 1 0 1 0-1.414-1.414L9 19.243A3 3 0 1 1 4.757 15L9 10.757Z"
}));
export default ComponenticLink;