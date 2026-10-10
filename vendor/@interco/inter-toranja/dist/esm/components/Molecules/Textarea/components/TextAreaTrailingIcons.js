import { jsxs as I, jsx as t } from "react/jsx-runtime";
import { getIconWrapperClassName as f } from "../utils/classNames.js";
import { NeutralIconButton as e } from "../../../Atoms/NeutralIconButton/NeutralIconButton.js";
import { STATE as _ } from "../../../../utils/pattern.js";
import { getClearFieldAriaLabel as u } from "../../../../utils/accessibility/formFieldAccessibility.js";
const h = ({
  hasTrailingIcons: c,
  isDisabled: i,
  isReadOnly: l,
  value: n,
  isEnabled: s,
  showHelper: d,
  currentState: m,
  label: o,
  onFocusField: x,
  handleClear: b,
  onHelper: a,
  onTag: r
}) => /* @__PURE__ */ I(
  "div",
  {
    className: f({ isDisabled: i, isReadOnly: l }),
    "data-empty": !c,
    tabIndex: -1,
    onClick: x,
    children: [
      n && s && /* @__PURE__ */ t(
        e,
        {
          onClick: b,
          onTag: (p) => {
            r && r((C) => ({
              ...C,
              ...p(),
              CustomParameters: {
                nested_in: "Textarea",
                nested_label: o
              }
            }));
          },
          icon: "ic_close_circle",
          "data-testid": "close-icon",
          "aria-label": u(o),
          tabIndex: 0
        }
      ),
      d && /* @__PURE__ */ t(
        e,
        {
          "data-testid": "helper-button",
          onClick: () => a == null ? void 0 : a(),
          icon: "ic_help_circle",
          "aria-label": "Ajuda",
          tabIndex: 0,
          disabled: i
        }
      ),
      m === _.LOADING && /* @__PURE__ */ t(e, { state: "loading", onClick: () => {
      } })
    ]
  }
);
export {
  h as TextAreaTrailingIcons
};
