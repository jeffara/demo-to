function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticMusicNote = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M18.507 2.402A3 3 0 0 1 22 5.361V17a4 4 0 1 1-2-3.465V9.18l-10 1.667V19a4 4 0 1 1-2-3.465v-8.84a3 3 0 0 1 2.507-2.96l8-1.333ZM6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.836-10.625-8 1.333a1 1 0 0 0-.836.986V8.82l10-1.667V5.361a1 1 0 0 0-1.164-.986Z"
}));
export default ComponenticMusicNote;