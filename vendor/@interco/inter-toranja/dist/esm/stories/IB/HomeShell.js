import { jsx as i, jsxs as l } from "react/jsx-runtime";
import { HOME_IB_CHECKLIST as c } from "./home-ib-checklist.js";
import { ListItemGeneral as h } from "../../components/Molecules/ListItemGeneral/ListItemGeneral.js";
import '../../assets/stories/IB/HomeShell.modules.css';/* empty css                       */
import { Text as p } from "../../components/Atoms/Text/Text.js";
import { TextSize as S, TextType as m } from "../../components/Atoms/Text/types.js";
const d = "home-shell", f = {
  label: "Exclusivo para Desktop",
  color: "orange",
  hierarchy: "soft"
}, E = {
  label: "Adaptado para Desktop",
  color: "green",
  hierarchy: "soft"
}, a = {
  label: "Pendente",
  color: "neutral",
  hierarchy: "soft"
}, u = {
  EXISTS_IDENTICAL: { tag: E, isReady: !0 },
  NEW_DESKTOP_ONLY: { tag: f, isReady: !0 },
  EXISTS_NEEDS_RESPONSIVE: { tag: a, isReady: !1 },
  EXISTS_NEEDS_VARIANT: { tag: a, isReady: !1 },
  NEW_PARALLEL: { tag: a, isReady: !1 },
  NEW: { tag: a, isReady: !1 }
}, T = (e) => u[e], _ = (e) => {
  const t = e.charCodeAt(0), s = t >= 48 && t <= 57, o = t >= 97 && t <= 122;
  return s || o;
}, I = (e) => {
  const t = [];
  let s = !0;
  for (const o of e.toLowerCase())
    _(o) ? (t.push(o), s = !1) : s || (t.push("-"), s = !0);
  return t[t.length - 1] === "-" && t.pop(), t.join("");
}, A = ({
  item: e,
  isLast: t
}) => {
  const { tag: s, isReady: o } = T(e.status), r = e.issueHint ? ` · ${e.issueHint}` : "", n = o ? `${e.name}, ${s.label.toLowerCase()}` : `${e.name}, pendente`;
  return /* @__PURE__ */ i(
    h,
    {
      interactive: !1,
      showDivider: !t,
      testId: `home-shell-item-${I(e.name)}`,
      label: e.name,
      paragraph: `${e.path}${r}`,
      tags: [s],
      leadingProps: {
        type: "icon",
        iconProps: {
          asset: o ? "ic_check_circle_fill" : "ic_info_circle_fill",
          size: "medium",
          color: o ? "Icon/Accent/Green/Default" : "Icon/Neutral/Secondary",
          contentDescription: n
        }
      }
    }
  );
}, x = () => /* @__PURE__ */ i("main", { className: d, children: c.map((e) => /* @__PURE__ */ l("div", { children: [
  /* @__PURE__ */ i(p, { as: "h2", textType: m.Title, textSize: S.Medium, children: e.title }),
  e.items.map((t, s) => /* @__PURE__ */ i(
    A,
    {
      item: t,
      isLast: s === e.items.length - 1
    },
    t.name
  ))
] }, e.title)) });
export {
  x as HomeShell
};
