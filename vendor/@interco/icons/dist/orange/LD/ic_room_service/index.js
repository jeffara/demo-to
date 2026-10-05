function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticRoomService = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M2.667 10.667v-.39c0-2.18 1.328-4.143 3.426-4.74C8.65 4.81 12.325 4 16 4s7.35.81 9.907 1.537c2.098.597 3.426 2.56 3.426 4.74v.39M12 9.333l2.246-.374a10.667 10.667 0 0 1 3.508 0L20 9.333M8 12v.889a5.333 5.333 0 0 1-1.067 3.2l-1.866 2.489A5.333 5.333 0 0 0 4 21.778v3.555A2.667 2.667 0 0 0 6.667 28h18.666A2.667 2.667 0 0 0 28 25.333v-3.555a5.333 5.333 0 0 0-1.067-3.2l-1.866-2.49a5.333 5.333 0 0 1-1.067-3.2V12m-4 6.667a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
}));
export default ComponenticRoomService;