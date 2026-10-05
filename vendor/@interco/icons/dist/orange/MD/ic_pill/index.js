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
  d: "M9.242 7.828a1 1 0 1 0-1.414 1.414l1.414-1.414Zm9.122 3.465-7.071 7.07 1.414 1.415 7.071-7.071-1.414-1.414ZM5.636 12.707l7.071-7.071-1.414-1.414-7.071 7.07 1.414 1.415Zm0 5.657a4 4 0 0 1 0-5.657l-1.414-1.414a6 6 0 0 0 0 8.485l1.414-1.414Zm5.657 0a4 4 0 0 1-5.657 0l-1.414 1.414a6 6 0 0 0 8.485 0l-1.414-1.414Zm7.07-12.728a4 4 0 0 1 0 5.657l1.415 1.414a6 6 0 0 0 0-8.485l-1.414 1.414Zm1.415-1.414a6 6 0 0 0-8.485 0l1.414 1.414a4 4 0 0 1 5.657 0l1.414-1.414Zm-3.535 10.606-7-7-1.415 1.414 7 7 1.415-1.414Z"
}));
export default ComponenticPill;