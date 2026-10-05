function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import * as React from "react";
var ComponenticBookFlip = props => /*#__PURE__*/React.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  color: props.color
}, props), /*#__PURE__*/React.createElement("path", {
  fill: props.color,
  d: "M4.44 1.172a1 1 0 0 1 .931-.1l.848.338A12.764 12.764 0 0 1 12.6 7H22a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H12c-.45 0-.83-.296-.956-.704a7.713 7.713 0 0 0-.07-.201 8.997 8.997 0 0 1-2.21.567l-2.64.33A1 1 0 0 1 5 20v-2H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2V2a1 1 0 0 1 .44-.828ZM13 9v10h8V9h-8Zm-6 9v.867l1.517-.19a6.996 6.996 0 0 0 1.527-.368A7.807 7.807 0 0 0 9.817 18H7Zm11-3a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2ZM6 13.236l.187.051A9.862 9.862 0 0 1 11 16.291v-8.05a10.763 10.763 0 0 0-5-4.748v9.743ZM3 16h4.535a7.859 7.859 0 0 0-1.875-.783l-.923-.252A1 1 0 0 1 4 14V5H3v11Zm15-5a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2h2Z"
}));
export default ComponenticBookFlip;