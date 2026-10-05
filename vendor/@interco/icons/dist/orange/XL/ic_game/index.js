function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticGame = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeWidth: 5,
  d: "M29.398 16.624c-4.84-1.417-9.986-2.924-13.793.27-6.978 5.85-13.956 34.275-6.203 39.29 4.396 2.844 10.088-2.36 14.32-6.229 1.74-1.59 3.233-2.956 4.288-3.443 2.896-1.337 6.619-1.812 7.99-1.865 1.371.053 5.094.528 7.99 1.865 1.055.487 2.548 1.852 4.288 3.443 4.232 3.87 9.924 9.073 14.32 6.23 7.753-5.016.775-33.44-6.203-39.292-3.807-3.193-8.953-1.686-13.793-.27-2.333.684-4.595 1.346-6.602 1.451-2.007-.105-4.27-.767-6.602-1.45Z"
}), /*#__PURE__*/React.createElement("path", {
  fill: "#EA7100",
  d: "M48 30a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM48 42a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM45 33a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM54 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM24 27c-1.105 0-2 .89-2 1.986V31h-1.986A2.007 2.007 0 0 0 18 33c0 1.105.902 2 2.014 2H22v2.014c0 1.097.895 1.986 2 1.986 1.104 0 2-.89 2-1.986V35h1.986A2.007 2.007 0 0 0 30 33c0-1.105-.902-2-2.014-2H26v-2.014A1.993 1.993 0 0 0 24 27Z"
}));
export default ComponenticGame;