function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticSimCard = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M9 14a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 13a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM17 14a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  fillRule: "evenodd",
  d: "M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8.828a3 3 0 0 0-.879-2.12l-4.828-4.83A3 3 0 0 0 13.172 1H6ZM5 4a1 1 0 0 1 1-1h7.172a1 1 0 0 1 .707.293l4.828 4.828a1 1 0 0 1 .293.707V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Z",
  clipRule: "evenodd"
}));
export default ComponenticSimCard;