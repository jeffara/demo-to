function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticScissors = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M2.414 3.414A4 4 0 0 1 9.106 7.28l1.854 1.853 5.596-5.597a4 4 0 0 1 5.657 0l-8.425 8.425 8.425 8.425a4 4 0 0 1-5.656 0l-5.597-5.597-1.854 1.854a4 4 0 1 1-2.828-2.828l1.854-1.854-1.854-1.853a4 4 0 0 1-3.864-6.692Zm4.242 12.85a2 2 0 1 0-2.828 2.827 2 2 0 0 0 2.828-2.827Zm0-11.436a2 2 0 1 0-2.828 2.829 2 2 0 0 0 2.828-2.829Z"
}));
export default ComponenticScissors;