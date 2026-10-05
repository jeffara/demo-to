function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticHeartFill = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M16 3a6 6 0 0 1 6 6c0 2.928-1.888 5.428-3.867 7.344-1.978 1.913-4.36 3.518-5.508 4.437a1 1 0 0 1-1.249 0c-1.149-.919-3.531-2.523-5.509-4.437C3.887 14.428 2 11.928 2 9a6 6 0 0 1 6-6c1.538 0 2.94.581 4 1.531A5.977 5.977 0 0 1 16 3Z"
}));
export default ComponenticHeartFill;