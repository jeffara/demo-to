function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticTicket = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 32 32",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: "#EA7100",
  d: "M21.323 14.726a.193.193 0 0 0-.153-.136l-3.454-.527-1.545-3.285a.188.188 0 0 0-.17-.111.19.19 0 0 0-.172.111l-1.545 3.286-3.454.526a.193.193 0 0 0-.154.136.207.207 0 0 0 .049.206l2.499 2.556-.59 3.611a.205.205 0 0 0 .075.196c.06.045.138.051.202.015L16 19.606l3.089 1.704a.184.184 0 0 0 .2-.014.206.206 0 0 0 .077-.197l-.59-3.61 2.499-2.557a.205.205 0 0 0 .047-.206Z"
}), /*#__PURE__*/React.createElement("path", {
  stroke: props.color,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2.5,
  d: "M26.667 5.333H5.333A2.667 2.667 0 0 0 2.667 8v4a4 4 0 0 1 0 8v4a2.667 2.667 0 0 0 2.666 2.667h21.334A2.667 2.667 0 0 0 29.333 24v-4a4 4 0 1 1 0-8V8a2.667 2.667 0 0 0-2.666-2.667Z"
}));
export default ComponenticTicket;