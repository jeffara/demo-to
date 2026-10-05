function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticEllipsisVertical = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M12 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
}));
export default ComponenticEllipsisVertical;