function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMessageEllipsis = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M7 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18.5 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM12 12a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M4 2a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h1.5v2.546c0 1.21 1.359 1.922 2.354 1.233L13.312 19H20a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H4ZM3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-7a1 1 0 0 0-.57.178L7.5 20.59V18a1 1 0 0 0-1-1H4a1 1 0 0 1-1-1V5Z",
  clipRule: "evenodd"
}));
export default ComponenticMessageEllipsis;