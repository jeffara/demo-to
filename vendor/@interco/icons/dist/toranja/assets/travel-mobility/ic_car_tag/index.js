function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCarTag = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M15 1a1 1 0 1 0 0 2 7 7 0 0 1 7 7 1 1 0 1 0 2 0 9 9 0 0 0-9-9Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M15 5a1 1 0 1 0 0 2 3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 0 0-5-5Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M5.571 9.59C6.471 9.351 8.436 9 10.5 9a1 1 0 1 0 0-2c-2.254 0-4.39.378-5.441.657-.913.242-1.57.957-1.82 1.804L2.485 12H1a1 1 0 1 0 0 2h.247l-.219.266A4.528 4.528 0 0 0 0 17.142V22a1 1 0 1 0 2 0v-4.858c0-.588.204-1.156.573-1.605L3.837 14h13.326l1.264 1.537c.37.449.573 1.017.573 1.605V22a1 1 0 1 0 2 0v-4.858c0-1.049-.363-2.067-1.028-2.876l-.22-.266H20a1 1 0 1 0 0-2H4.572l.584-1.971c.072-.244.24-.393.415-.439Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M5 16a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H5ZM15 16a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1ZM6 19.5a2 2 0 0 0-2 2v.5a1 1 0 1 0 2 0v-.5h9v.5a1 1 0 1 0 2 0v-.5a2 2 0 0 0-2-2H6ZM15 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
}));
export default ComponenticCarTag;