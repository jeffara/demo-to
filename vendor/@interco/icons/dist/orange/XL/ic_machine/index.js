function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMachine = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 72 72",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M18 42a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM18 51a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM27 45a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM30 51a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM39 45a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM42 51a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 3,
  d: "M54 21h9a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6h-9m12-24H54M12 66h36a6 6 0 0 0 6-6V12a6 6 0 0 0-6-6H12a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6Zm9-33h18a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H21a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3Z"
}));
export default ComponenticMachine;