function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticPill = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M11.293 4.222a6 6 0 0 1 8.485 8.485l-7.071 7.07a6 6 0 1 1-8.485-8.485l7.07-7.07Zm-5.657 8.485a4 4 0 0 0 5.657 5.657l2.829-2.828-5.658-5.658-2.828 2.829Zm12.728-7.07a4 4 0 0 0-5.658 0L9.879 8.463l5.658 5.658 2.828-2.83a4 4 0 0 0 0-5.656Z"
}));
export default ComponenticPill;