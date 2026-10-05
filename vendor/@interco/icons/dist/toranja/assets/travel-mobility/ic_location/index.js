function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticLocation = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M12 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z",
  clipRule: "evenodd"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M12 2C5.94 2 2.2 8.61 5.316 13.804l4.252 7.087c1.101 1.836 3.762 1.836 4.863 0l4.252-7.087C21.8 8.61 18.058 2 12 2ZM7.03 12.775C4.714 8.913 7.496 4 12 4c4.503 0 7.285 4.913 4.968 8.775l-4.252 7.087a.836.836 0 0 1-1.433 0l-4.252-7.087Z",
  clipRule: "evenodd"
}));
export default ComponenticLocation;