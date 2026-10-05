function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticRoomService = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeWidth: 2,
  d: "M2 8v-.292c0-1.635.996-3.108 2.57-3.555C6.487 3.608 9.243 3 12 3c2.756 0 5.512.608 7.43 1.153C21.005 4.6 22 6.073 22 7.708V8M9 7l1.685-.28a8 8 0 0 1 2.63 0L15 7M6 9v.667a4 4 0 0 1-.8 2.4l-1.4 1.866a4 4 0 0 0-.8 2.4V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.667a4 4 0 0 0-.8-2.4l-1.4-1.866a4 4 0 0 1-.8-2.4V9m-3 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
}));
export default ComponenticRoomService;