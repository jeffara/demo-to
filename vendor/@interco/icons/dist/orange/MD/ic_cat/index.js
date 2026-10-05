function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticCat = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M13.063 12h-2.085a.75.75 0 0 0-.605 1.193l1.069 1.46a.75.75 0 0 0 1.22-.015l1.017-1.46A.75.75 0 0 0 13.063 12Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "m7 10.5.106-.053a2 2 0 0 1 1.788 0L9 10.5M15 10.5l.106-.053a2 2 0 0 1 1.788 0L17 10.5M19 3l-3 2.5S14.74 5 12 5c-2.5 0-4 .5-4 .5L5 3"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 2,
  d: "M5 3c-.71 1.483-2 5.385-2 7.778C3 16.423 5 21 12 21s9-4.577 9-10.222C21 8.385 19.71 4.483 19 3"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M8 15.664a2.25 2.25 0 0 0 4-1.414v-.75M16 15.664a2.25 2.25 0 0 1-4-1.414v-.75"
}));
export default ComponenticCat;