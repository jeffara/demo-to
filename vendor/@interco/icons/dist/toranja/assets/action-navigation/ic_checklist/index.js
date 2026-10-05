function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticChecklist = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "m19.707 6.707-4 4a1 1 0 0 1-1.39.024l-2-1.867a1 1 0 1 1 1.365-1.462l1.294 1.208 3.317-3.317a1 1 0 1 1 1.414 1.414Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M16 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M3 5a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2H3ZM3 10a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
}));
export default ComponenticChecklist;