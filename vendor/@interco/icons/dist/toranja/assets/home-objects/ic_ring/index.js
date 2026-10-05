function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticRing = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M6.982.469a1 1 0 0 1 .944-.03l3.231 1.598a1 1 0 0 1 .392 1.447L10.46 5.131A9 9 0 1 1 3 14a8.97 8.97 0 0 1 2.441-6.166l-1.596.097a1 1 0 0 1-1.058-1.063l.233-3.599a1 1 0 0 1 .498-.801l3.463-2ZM12 7a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM4.981 3.934l-.124 1.933 2.834-.17 1.565-2.37-1.737-.858L4.98 3.934Z"
}));
export default ComponenticRing;