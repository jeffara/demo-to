import { jsx as i, jsxs as n } from "react/jsx-runtime";
import { HOME_IB_CHECKLIST as r } from "./home-ib-checklist.js";
import { ListItemGeneral as c } from "../../components/Molecules/ListItemGeneral/ListItemGeneral.js";
import { Text as l } from "../../components/Atoms/Text/Text.js";
import { TextSize as a, TextType as h } from "../../components/Atoms/Text/types.js";
import '../../assets/HomeShell.css';const m = "home-shell", p = "EXISTS_IDENTICAL", d = {
  label: "Disponível em Desktop",
  color: "green",
  hierarchy: "soft"
}, u = {
  label: "Pendente",
  color: "neutral",
  hierarchy: "soft"
}, f = (e) => e === p, T = (e) => {
  const t = e.charCodeAt(0), s = t >= 48 && t <= 57, o = t >= 97 && t <= 122;
  return s || o;
}, S = (e) => {
  const t = [];
  let s = !0;
  for (const o of e.toLowerCase())
    T(o) ? (t.push(o), s = !1) : s || (t.push("-"), s = !0);
  return t[t.length - 1] === "-" && t.pop(), t.join("");
}, I = ({
  item: e,
  isLast: t
}) => {
  const s = f(e.status), o = e.issueHint ? ` · ${e.issueHint}` : "";
  return /* @__PURE__ */ i(
    c,
    {
      interactive: !1,
      showDivider: !t,
      testId: `home-shell-item-${S(e.name)}`,
      label: e.name,
      paragraph: `${e.path}${o}`,
      tags: [s ? d : u],
      leadingProps: {
        type: "icon",
        iconProps: {
          asset: s ? "ic_check_circle" : "ic_clock",
          size: "medium",
          color: "Icon/Neutral/Primary",
          contentDescription: s ? `${e.name}, disponível em desktop` : `${e.name}, pendente`
        }
      }
    }
  );
}, L = () => /* @__PURE__ */ i("main", { className: m, children: r.map((e) => /* @__PURE__ */ n("div", { children: [
  /* @__PURE__ */ i(l, { as: "h2", textType: h.Title, textSize: a.Medium, children: e.title }),
  e.items.map((t, s) => /* @__PURE__ */ i(
    I,
    {
      item: t,
      isLast: s === e.items.length - 1
    },
    t.name
  ))
] }, e.title)) });
export {
  L as HomeShell
};
