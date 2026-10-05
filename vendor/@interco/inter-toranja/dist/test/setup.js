var jb = Object.defineProperty;
var Db = (e, t, r) => t in e ? jb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Y = (e, t, r) => Db(e, typeof t != "symbol" ? t + "" : t, r);
import { g as as, c as lu } from "../_commonjsHelpers-DaMA6jEr.js";
var Ps, uu;
function Fb() {
  return uu || (uu = 1, Ps = (e) => {
    const t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  }), Ps;
}
var Ts, cu;
function Lb() {
  if (cu) return Ts;
  cu = 1;
  const e = /* @__PURE__ */ Fb();
  return Ts = (t) => {
    const r = e(t);
    if (r === 0)
      return t;
    const n = new RegExp(`^[ \\t]{${r}}`, "gm");
    return t.replace(n, "");
  }, Ts;
}
var _s, du;
function Bb() {
  return du || (du = 1, _s = (e, t = 1, r) => {
    if (r = {
      indent: " ",
      includeEmptyLines: !1,
      ...r
    }, typeof e != "string")
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``
      );
    if (typeof t != "number")
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``
      );
    if (typeof r.indent != "string")
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``
      );
    if (t === 0)
      return e;
    const n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  }), _s;
}
var qs, fu;
function Hb() {
  if (fu) return qs;
  fu = 1;
  const e = /* @__PURE__ */ Lb(), t = /* @__PURE__ */ Bb();
  return qs = (r, n = 0, o) => t(e(r), n, o), qs;
}
var Vb = /* @__PURE__ */ Hb();
const pu = /* @__PURE__ */ as(Vb);
class Ub extends Error {
  constructor(r, n, o, i, s) {
    super(`${r}:${o}:${i}: ${n}`);
    Y(this, "reason");
    Y(this, "filename");
    Y(this, "line");
    Y(this, "column");
    Y(this, "source");
    this.reason = n, this.filename = r, this.line = o, this.column = i, this.source = s;
  }
}
class zb {
  constructor(t, r, n) {
    Y(this, "start");
    Y(this, "end");
    Y(this, "source");
    this.start = t, this.end = r, this.source = n;
  }
}
var Pe;
(function(e) {
  e.stylesheet = "stylesheet", e.rule = "rule", e.declaration = "declaration", e.comment = "comment", e.container = "container", e.charset = "charset", e.document = "document", e.customMedia = "custom-media", e.fontFace = "font-face", e.host = "host", e.import = "import", e.keyframes = "keyframes", e.keyframe = "keyframe", e.layer = "layer", e.media = "media", e.namespace = "namespace", e.page = "page", e.startingStyle = "starting-style", e.supports = "supports";
})(Pe || (Pe = {}));
const hu = (e, t, r) => {
  let n = r, o = 1e4;
  do {
    const i = t.map((u) => e.indexOf(u, n));
    i.push(e.indexOf("\\", n));
    const s = i.filter((u) => u !== -1);
    if (s.length === 0) return -1;
    const a = Math.min(...s);
    if (e[a] !== "\\") return a;
    n = a + 2, o--;
  } while (o > 0);
  throw new Error("Too many escaping");
}, ba = (e, t, r) => {
  let n = r, o = 1e4;
  do {
    const i = t.map((u) => e.indexOf(u, n));
    i.push(e.indexOf("(", n)), i.push(e.indexOf('"', n)), i.push(e.indexOf("'", n)), i.push(e.indexOf("\\", n));
    const s = i.filter((u) => u !== -1);
    if (s.length === 0) return -1;
    const a = Math.min(...s);
    switch (e[a]) {
      case "\\":
        n = a + 2;
        break;
      case "(":
        {
          const u = ba(e, [")"], a + 1);
          if (u === -1) return -1;
          n = u + 1;
        }
        break;
      case '"':
        {
          const u = hu(e, ['"'], a + 1);
          if (u === -1) return -1;
          n = u + 1;
        }
        break;
      case "'":
        {
          const u = hu(e, ["'"], a + 1);
          if (u === -1) return -1;
          n = u + 1;
        }
        break;
      default:
        return a;
    }
    o--;
  } while (o > 0);
  throw new Error("Too many escaping");
}, $s = /\/\*[^]*?(?:\*\/|$)/g;
function Xe(e) {
  return e ? e.trim() : "";
}
function ya(e, t) {
  const r = e && typeof e.type == "string", n = r ? e : t;
  for (const o in e) {
    const i = e[o];
    Array.isArray(i) ? i.forEach((s) => {
      ya(s, n);
    }) : i && typeof i == "object" && ya(i, n);
  }
  return r && Object.defineProperty(e, "parent", { configurable: !0, writable: !0, enumerable: !1, value: t || null }), e;
}
const Wb = (e, t) => {
  t = t || {};
  let r = 1, n = 1;
  function o() {
    const v = { line: r, column: n };
    return (R) => (R.position = new zb(v, { line: r, column: n }, (t == null ? void 0 : t.source) || ""), d(), R);
  }
  const i = [];
  function s(v) {
    const R = new Ub((t == null ? void 0 : t.source) || "", v, r, n, e);
    if (!(t != null && t.silent)) throw R;
    i.push(R);
  }
  function a() {
    const v = /^{\s*/.exec(e);
    return !!v && (c(v), !0);
  }
  function u() {
    const v = /^}/.exec(e);
    return !!v && (c(v), !0);
  }
  function l() {
    let v;
    const R = [];
    for (d(), f(R); e.length && e.charAt(0) !== "}" && (v = T() || P(), v); ) R.push(v), f(R);
    return R;
  }
  function c(v) {
    const R = v[0];
    return (function(I) {
      const S = I.match(/\n/g);
      S && (r += S.length);
      const A = I.lastIndexOf(`
`);
      n = ~A ? I.length - A : n + I.length;
    })(R), e = e.slice(R.length), v;
  }
  function d() {
    const v = /^\s*/.exec(e);
    v && c(v);
  }
  function f(v) {
    v = v || [];
    let R = p();
    for (; R; ) v.push(R), R = p();
    return v;
  }
  function p() {
    const v = o();
    if (e.charAt(0) !== "/" || e.charAt(1) !== "*") return;
    const R = /^\/\*[^]*?\*\//.exec(e);
    return R ? (c(R), v({ type: Pe.comment, comment: R[0].slice(2, -2) })) : s("End of comment missing");
  }
  function g() {
    const v = /^([^{]+)/.exec(e);
    if (v)
      return c(v), ((R, I) => {
        const S = [];
        let A = 0;
        for (; A < R.length; ) {
          const V = ba(R, I, A);
          if (V === -1) return S.push(R.substring(A)), S;
          S.push(R.substring(A, V)), A = V + 1;
        }
        return S;
      })(Xe(v[0]).replace($s, ""), [","]).map((R) => Xe(R));
  }
  function h() {
    const v = o(), R = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/.exec(e);
    if (!R) return;
    c(R);
    const I = Xe(R[0]), S = /^:\s*/.exec(e);
    if (!S) return s("property missing ':'");
    c(S);
    let A = "";
    const V = ba(e, [";", "}"]);
    V !== -1 && (A = e.substring(0, V), c([A]), A = Xe(A).replace($s, ""));
    const L = v({ type: Pe.declaration, property: I.replace($s, ""), value: A }), U = /^[;\s]*/.exec(e);
    return U && c(U), L;
  }
  function b() {
    const v = [];
    if (!a()) return s("missing '{'");
    f(v);
    let R = h();
    for (; R; ) v.push(R), f(v), R = h();
    return u() ? v : s("missing '}'");
  }
  function m() {
    const v = [], R = o();
    let I = /^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/.exec(e);
    for (; I; ) {
      const S = c(I);
      v.push(S[1]);
      const A = /^,\s*/.exec(e);
      A && c(A), I = /^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/.exec(e);
    }
    if (v.length) return R({ type: Pe.keyframe, values: v, declarations: b() || [] });
  }
  const E = C("import"), $ = C("charset"), _ = C("namespace");
  function C(v) {
    const R = new RegExp("^@" + v + `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`);
    return () => {
      const I = o(), S = R.exec(e);
      if (!S) return;
      const A = c(S), V = { type: v };
      return V[v] = A[1].trim(), I(V);
    };
  }
  function T() {
    if (e[0] === "@") return (function() {
      const v = o(), R = /^@([-\w]+)?keyframes\s*/.exec(e);
      if (!R) return;
      const I = c(R)[1], S = /^([-\w]+)\s*/.exec(e);
      if (!S) return s("@keyframes missing name");
      const A = c(S)[1];
      if (!a()) return s("@keyframes missing '{'");
      let V = f(), L = m();
      for (; L; ) V.push(L), V = V.concat(f()), L = m();
      return u() ? v({ type: Pe.keyframes, name: A, vendor: I, keyframes: V }) : s("@keyframes missing '}'");
    })() || (function() {
      const v = o(), R = /^@media *([^{]+)/.exec(e);
      if (!R) return;
      const I = Xe(c(R)[1]);
      if (!a()) return s("@media missing '{'");
      const S = f().concat(l());
      return u() ? v({ type: Pe.media, media: I, rules: S }) : s("@media missing '}'");
    })() || (function() {
      const v = o(), R = /^@custom-media\s+(--\S+)\s+([^{;\s][^{;]*);/.exec(e);
      if (!R) return;
      const I = c(R);
      return v({ type: Pe.customMedia, name: Xe(I[1]), media: Xe(I[2]) });
    })() || (function() {
      const v = o(), R = /^@supports *([^{]+)/.exec(e);
      if (!R) return;
      const I = Xe(c(R)[1]);
      if (!a()) return s("@supports missing '{'");
      const S = f().concat(l());
      return u() ? v({ type: Pe.supports, supports: I, rules: S }) : s("@supports missing '}'");
    })() || E() || $() || _() || (function() {
      const v = o(), R = /^@([-\w]+)?document *([^{]+)/.exec(e);
      if (!R) return;
      const I = c(R), S = Xe(I[1]), A = Xe(I[2]);
      if (!a()) return s("@document missing '{'");
      const V = f().concat(l());
      return u() ? v({ type: Pe.document, document: A, vendor: S, rules: V }) : s("@document missing '}'");
    })() || (function() {
      const v = o(), R = /^@page */.exec(e);
      if (!R) return;
      c(R);
      const I = g() || [];
      if (!a()) return s("@page missing '{'");
      let S = f(), A = h();
      for (; A; ) S.push(A), S = S.concat(f()), A = h();
      return u() ? v({ type: Pe.page, selectors: I, declarations: S }) : s("@page missing '}'");
    })() || (function() {
      const v = o(), R = /^@host\s*/.exec(e);
      if (!R) return;
      if (c(R), !a()) return s("@host missing '{'");
      const I = f().concat(l());
      return u() ? v({ type: Pe.host, rules: I }) : s("@host missing '}'");
    })() || (function() {
      const v = o(), R = /^@font-face\s*/.exec(e);
      if (!R) return;
      if (c(R), !a()) return s("@font-face missing '{'");
      let I = f(), S = h();
      for (; S; ) I.push(S), I = I.concat(f()), S = h();
      return u() ? v({ type: Pe.fontFace, declarations: I }) : s("@font-face missing '}'");
    })() || (function() {
      const v = o(), R = /^@container *([^{]+)/.exec(e);
      if (!R) return;
      const I = Xe(c(R)[1]);
      if (!a()) return s("@container missing '{'");
      const S = f().concat(l());
      return u() ? v({ type: Pe.container, container: I, rules: S }) : s("@container missing '}'");
    })() || (function() {
      const v = o(), R = /^@starting-style\s*/.exec(e);
      if (!R) return;
      if (c(R), !a()) return s("@starting-style missing '{'");
      const I = f().concat(l());
      return u() ? v({ type: Pe.startingStyle, rules: I }) : s("@starting-style missing '}'");
    })() || (function() {
      const v = o(), R = /^@layer *([^{;@]+)/.exec(e);
      if (!R) return;
      const I = Xe(c(R)[1]);
      if (!a()) {
        const A = /^[;\s]*/.exec(e);
        return A && c(A), v({ type: Pe.layer, layer: I });
      }
      const S = f().concat(l());
      return u() ? v({ type: Pe.layer, layer: I, rules: S }) : s("@layer missing '}'");
    })();
  }
  function P() {
    const v = o(), R = g();
    return R ? (f(), v({ type: Pe.rule, selectors: R, declarations: b() || [] })) : s("selector missing");
  }
  return ya((function() {
    const v = l();
    return { type: Pe.stylesheet, stylesheet: { source: t == null ? void 0 : t.source, rules: v, parsingErrors: i } };
  })());
};
var Jb = Object.prototype.toString;
function Xb(e) {
  return typeof e == "function" || Jb.call(e) === "[object Function]";
}
function Gb(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var Kb = Math.pow(2, 53) - 1;
function Yb(e) {
  var t = Gb(e);
  return Math.min(Math.max(t, 0), Kb);
}
function et(e, t) {
  var r = Array, n = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var o = Yb(n.length), i = Xb(r) ? Object(new r(o)) : new Array(o), s = 0, a; s < o; )
    a = n[s], i[s] = a, s += 1;
  return i.length = o, i;
}
function si(e) {
  "@babel/helpers - typeof";
  return si = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, si(e);
}
function Zb(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qb(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ah(n.key), n);
  }
}
function ey(e, t, r) {
  return t && Qb(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function ty(e, t, r) {
  return t = Ah(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ah(e) {
  var t = ry(e, "string");
  return si(t) === "symbol" ? t : String(t);
}
function ry(e, t) {
  if (si(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (si(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ny = /* @__PURE__ */ (function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    Zb(this, e), ty(this, "items", void 0), this.items = t;
  }
  return ey(e, [{
    key: "add",
    value: function(r) {
      return this.has(r) === !1 && this.items.push(r), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(r) {
      var n = this.items.length;
      return this.items = this.items.filter(function(o) {
        return o !== r;
      }), n !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(r) {
      var n = this;
      this.items.forEach(function(o) {
        r(o, o, n);
      });
    }
  }, {
    key: "has",
    value: function(r) {
      return this.items.indexOf(r) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), e;
})();
const oy = typeof Set > "u" ? Set : ny;
function Ie(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var iy = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
}, sy = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  none: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function ay(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-description",
    "aria-describedby",
    "aria-details",
    // "disabled",
    "aria-dropeffect",
    // "errormessage",
    "aria-flowto",
    "aria-grabbed",
    // "haspopup",
    "aria-hidden",
    // "invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ].some(function(r) {
    var n;
    return e.hasAttribute(r) && !((n = sy[t]) !== null && n !== void 0 && n.has(r));
  });
}
function Ih(e, t) {
  return ay(e, t);
}
function ly(e) {
  var t = cy(e);
  if (t === null || va.indexOf(t) !== -1) {
    var r = uy(e);
    if (va.indexOf(t || "") === -1 || Ih(e, r || ""))
      return r;
  }
  return t;
}
function uy(e) {
  var t = iy[Ie(e)];
  if (t !== void 0)
    return t;
  switch (Ie(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !Ih(e, "img") ? "presentation" : "img";
    case "input": {
      var r = e, n = r.type;
      switch (n) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return n;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function cy(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0)
      return r;
  }
  return null;
}
var va = ["presentation", "none"];
function me(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Nh(e) {
  return me(e) && Ie(e) === "caption";
}
function Ni(e) {
  return me(e) && Ie(e) === "input";
}
function dy(e) {
  return me(e) && Ie(e) === "optgroup";
}
function fy(e) {
  return me(e) && Ie(e) === "select";
}
function py(e) {
  return me(e) && Ie(e) === "table";
}
function hy(e) {
  return me(e) && Ie(e) === "textarea";
}
function my(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function gy(e) {
  return me(e) && Ie(e) === "fieldset";
}
function by(e) {
  return me(e) && Ie(e) === "legend";
}
function yy(e) {
  return me(e) && Ie(e) === "slot";
}
function vy(e) {
  return me(e) && e.ownerSVGElement !== void 0;
}
function wy(e) {
  return me(e) && Ie(e) === "svg";
}
function Ry(e) {
  return vy(e) && Ie(e) === "title";
}
function Wi(e, t) {
  if (me(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "), n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r.map(function(o) {
      return n.getElementById(o);
    }).filter(
      function(o) {
        return o !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function ht(e, t) {
  return me(e) ? t.indexOf(ly(e)) !== -1 : !1;
}
function Cy(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function xy(e, t) {
  if (!me(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function Ey(e) {
  return ht(e, ["button", "combobox", "listbox", "textbox"]) || kh(e, "range");
}
function kh(e, t) {
  if (!me(e))
    return !1;
  switch (t) {
    case "range":
      return ht(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function mu(e, t) {
  var r = et(e.querySelectorAll(t));
  return Wi(e, "aria-owns").forEach(function(n) {
    r.push.apply(r, et(n.querySelectorAll(t)));
  }), r;
}
function Sy(e) {
  return fy(e) ? e.selectedOptions || mu(e, "[selected]") : mu(e, '[aria-selected="true"]');
}
function Py(e) {
  return ht(e, va);
}
function Ty(e) {
  return Nh(e);
}
function _y(e) {
  return ht(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function qy(e) {
  return !1;
}
function $y(e) {
  return Ni(e) || hy(e) ? e.value : e.textContent || "";
}
function gu(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function jh(e) {
  var t = Ie(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function Dh(e) {
  if (jh(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && me(r)) {
      var n = Dh(r);
      n !== null && (t = n);
    }
  }), t;
}
function Oy(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : Dh(e);
}
function My(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return et(t);
  if (!jh(e))
    return null;
  var r = e.ownerDocument;
  return et(r.querySelectorAll("label")).filter(function(n) {
    return Oy(n) === e;
  });
}
function Ay(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? et(e.childNodes) : t;
}
function Fh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new oy(), n = my(e), o = t.compute, i = o === void 0 ? "name" : o, s = t.computedStyleSupportsPseudoElements, a = s === void 0 ? t.getComputedStyle !== void 0 : s, u = t.getComputedStyle, l = u === void 0 ? n.getComputedStyle.bind(n) : u, c = t.hidden, d = c === void 0 ? !1 : c;
  function f(m, E) {
    var $ = "";
    if (me(m) && a) {
      var _ = l(m, "::before"), C = gu(_);
      $ = "".concat(C, " ").concat($);
    }
    var T = yy(m) ? Ay(m) : et(m.childNodes).concat(Wi(m, "aria-owns"));
    if (T.forEach(function(R) {
      var I = b(R, {
        isEmbeddedInLabel: E.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), S = me(R) ? l(R).getPropertyValue("display") : "inline", A = S !== "inline" ? " " : "";
      $ += "".concat(A).concat(I).concat(A);
    }), me(m) && a) {
      var P = l(m, "::after"), v = gu(P);
      $ = "".concat($, " ").concat(v);
    }
    return $.trim();
  }
  function p(m, E) {
    var $ = m.getAttributeNode(E);
    return $ !== null && !r.has($) && $.value.trim() !== "" ? (r.add($), $.value) : null;
  }
  function g(m) {
    return me(m) ? p(m, "title") : null;
  }
  function h(m) {
    if (!me(m))
      return null;
    if (gy(m)) {
      r.add(m);
      for (var E = et(m.childNodes), $ = 0; $ < E.length; $ += 1) {
        var _ = E[$];
        if (by(_))
          return b(_, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (py(m)) {
      r.add(m);
      for (var C = et(m.childNodes), T = 0; T < C.length; T += 1) {
        var P = C[T];
        if (Nh(P))
          return b(P, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (wy(m)) {
      r.add(m);
      for (var v = et(m.childNodes), R = 0; R < v.length; R += 1) {
        var I = v[R];
        if (Ry(I))
          return I.textContent;
      }
      return null;
    } else if (Ie(m) === "img" || Ie(m) === "area") {
      var S = p(m, "alt");
      if (S !== null)
        return S;
    } else if (dy(m)) {
      var A = p(m, "label");
      if (A !== null)
        return A;
    }
    if (Ni(m) && (m.type === "button" || m.type === "submit" || m.type === "reset")) {
      var V = p(m, "value");
      if (V !== null)
        return V;
      if (m.type === "submit")
        return "Submit";
      if (m.type === "reset")
        return "Reset";
    }
    var L = My(m);
    if (L !== null && L.length !== 0)
      return r.add(m), et(L).map(function(H) {
        return b(H, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(H) {
        return H.length > 0;
      }).join(" ");
    if (Ni(m) && m.type === "image") {
      var U = p(m, "alt");
      if (U !== null)
        return U;
      var k = p(m, "title");
      return k !== null ? k : "Submit Query";
    }
    if (ht(m, ["button"])) {
      var B = f(m, {
        isEmbeddedInLabel: !1
      });
      if (B !== "")
        return B;
    }
    return null;
  }
  function b(m, E) {
    if (r.has(m))
      return "";
    if (!d && xy(m, l) && !E.isReferenced)
      return r.add(m), "";
    var $ = me(m) ? m.getAttributeNode("aria-labelledby") : null, _ = $ !== null && !r.has($) ? Wi(m, "aria-labelledby") : [];
    if (i === "name" && !E.isReferenced && _.length > 0)
      return r.add($), _.map(function(S) {
        return b(S, {
          isEmbeddedInLabel: E.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var C = E.recursion && Ey(m) && i === "name";
    if (!C) {
      var T = (me(m) && m.getAttribute("aria-label") || "").trim();
      if (T !== "" && i === "name")
        return r.add(m), T;
      if (!Py(m)) {
        var P = h(m);
        if (P !== null)
          return r.add(m), P;
      }
    }
    if (ht(m, ["menu"]))
      return r.add(m), "";
    if (C || E.isEmbeddedInLabel || E.isReferenced) {
      if (ht(m, ["combobox", "listbox"])) {
        r.add(m);
        var v = Sy(m);
        return v.length === 0 ? Ni(m) ? m.value : "" : et(v).map(function(S) {
          return b(S, {
            isEmbeddedInLabel: E.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (kh(m, "range"))
        return r.add(m), m.hasAttribute("aria-valuetext") ? m.getAttribute("aria-valuetext") : m.hasAttribute("aria-valuenow") ? m.getAttribute("aria-valuenow") : m.getAttribute("value") || "";
      if (ht(m, ["textbox"]))
        return r.add(m), $y(m);
    }
    if (_y(m) || me(m) && E.isReferenced || Ty(m) || qy()) {
      var R = f(m, {
        isEmbeddedInLabel: E.isEmbeddedInLabel
      });
      if (R !== "")
        return r.add(m), R;
    }
    if (m.nodeType === m.TEXT_NODE)
      return r.add(m), m.textContent || "";
    if (E.recursion)
      return r.add(m), f(m, {
        isEmbeddedInLabel: E.isEmbeddedInLabel
      });
    var I = g(m);
    return I !== null ? (r.add(m), I) : (r.add(m), "");
  }
  return Cy(b(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: i === "description",
    recursion: !1
  }));
}
function ai(e) {
  "@babel/helpers - typeof";
  return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ai(e);
}
function bu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bu(Object(r), !0).forEach(function(n) {
      Iy(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Iy(e, t, r) {
  return t = Ny(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ny(e) {
  var t = ky(e, "string");
  return ai(t) === "symbol" ? t : String(t);
}
function ky(e, t) {
  if (ai(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (ai(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Wi(e, "aria-describedby").map(function(i) {
    return Fh(i, yu(yu({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (r === "") {
    var n = e.getAttribute("aria-description");
    r = n === null ? "" : n;
  }
  if (r === "") {
    var o = e.getAttribute("title");
    r = o === null ? "" : o;
  }
  return r;
}
function Dy(e) {
  return ht(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "none", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function Fy(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Dy(e) ? "" : Fh(e, t);
}
var He = {}, ir = {}, Ei = {}, sr = {}, vu;
function Ly() {
  if (vu) return sr;
  vu = 1, Object.defineProperty(sr, "__esModule", {
    value: !0
  }), sr.default = void 0;
  function e() {
    var t = this, r = 0, n = {
      "@@iterator": function() {
        return n;
      },
      next: function() {
        if (r < t.length) {
          var i = t[r];
          return r = r + 1, {
            done: !1,
            value: i
          };
        } else
          return {
            done: !0
          };
      }
    };
    return n;
  }
  return sr.default = e, sr;
}
var wu;
function fi() {
  if (wu) return Ei;
  wu = 1, Object.defineProperty(Ei, "__esModule", {
    value: !0
  }), Ei.default = n;
  var e = t(/* @__PURE__ */ Ly());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function r(o) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, r(o);
  }
  function n(o, i) {
    return typeof Symbol == "function" && r(Symbol.iterator) === "symbol" && Object.defineProperty(o, Symbol.iterator, {
      value: e.default.bind(i)
    }), o;
  }
  return Ei;
}
var Ru;
function By() {
  if (Ru) return ir;
  Ru = 1, Object.defineProperty(ir, "__esModule", {
    value: !0
  }), ir.default = void 0;
  var e = t(/* @__PURE__ */ fi());
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c, d) {
    return a(c) || s(c, d) || o(c, d) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(c, d) {
    if (c) {
      if (typeof c == "string") return i(c, d);
      var f = {}.toString.call(c).slice(8, -1);
      return f === "Object" && c.constructor && (f = c.constructor.name), f === "Map" || f === "Set" ? Array.from(c) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? i(c, d) : void 0;
    }
  }
  function i(c, d) {
    (d == null || d > c.length) && (d = c.length);
    for (var f = 0, p = Array(d); f < d; f++) p[f] = c[f];
    return p;
  }
  function s(c, d) {
    var f = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (f != null) {
      var p, g, h, b, m = [], E = !0, $ = !1;
      try {
        if (h = (f = f.call(c)).next, d === 0) {
          if (Object(f) !== f) return;
          E = !1;
        } else for (; !(E = (p = h.call(f)).done) && (m.push(p.value), m.length !== d); E = !0) ;
      } catch (_) {
        $ = !0, g = _;
      } finally {
        try {
          if (!E && f.return != null && (b = f.return(), Object(b) !== b)) return;
        } finally {
          if ($) throw g;
        }
      }
      return m;
    }
  }
  function a(c) {
    if (Array.isArray(c)) return c;
  }
  var u = [["aria-activedescendant", {
    type: "id"
  }], ["aria-atomic", {
    type: "boolean"
  }], ["aria-autocomplete", {
    type: "token",
    values: ["inline", "list", "both", "none"]
  }], ["aria-braillelabel", {
    type: "string"
  }], ["aria-brailleroledescription", {
    type: "string"
  }], ["aria-busy", {
    type: "boolean"
  }], ["aria-checked", {
    type: "tristate"
  }], ["aria-colcount", {
    type: "integer"
  }], ["aria-colindex", {
    type: "integer"
  }], ["aria-colspan", {
    type: "integer"
  }], ["aria-controls", {
    type: "idlist"
  }], ["aria-current", {
    type: "token",
    values: ["page", "step", "location", "date", "time", !0, !1]
  }], ["aria-describedby", {
    type: "idlist"
  }], ["aria-description", {
    type: "string"
  }], ["aria-details", {
    type: "id"
  }], ["aria-disabled", {
    type: "boolean"
  }], ["aria-dropeffect", {
    type: "tokenlist",
    values: ["copy", "execute", "link", "move", "none", "popup"]
  }], ["aria-errormessage", {
    type: "id"
  }], ["aria-expanded", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-flowto", {
    type: "idlist"
  }], ["aria-grabbed", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-haspopup", {
    type: "token",
    values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
  }], ["aria-hidden", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-invalid", {
    type: "token",
    values: ["grammar", !1, "spelling", !0]
  }], ["aria-keyshortcuts", {
    type: "string"
  }], ["aria-label", {
    type: "string"
  }], ["aria-labelledby", {
    type: "idlist"
  }], ["aria-level", {
    type: "integer"
  }], ["aria-live", {
    type: "token",
    values: ["assertive", "off", "polite"]
  }], ["aria-modal", {
    type: "boolean"
  }], ["aria-multiline", {
    type: "boolean"
  }], ["aria-multiselectable", {
    type: "boolean"
  }], ["aria-orientation", {
    type: "token",
    values: ["vertical", "undefined", "horizontal"]
  }], ["aria-owns", {
    type: "idlist"
  }], ["aria-placeholder", {
    type: "string"
  }], ["aria-posinset", {
    type: "integer"
  }], ["aria-pressed", {
    type: "tristate"
  }], ["aria-readonly", {
    type: "boolean"
  }], ["aria-relevant", {
    type: "tokenlist",
    values: ["additions", "all", "removals", "text"]
  }], ["aria-required", {
    type: "boolean"
  }], ["aria-roledescription", {
    type: "string"
  }], ["aria-rowcount", {
    type: "integer"
  }], ["aria-rowindex", {
    type: "integer"
  }], ["aria-rowspan", {
    type: "integer"
  }], ["aria-selected", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-setsize", {
    type: "integer"
  }], ["aria-sort", {
    type: "token",
    values: ["ascending", "descending", "none", "other"]
  }], ["aria-valuemax", {
    type: "number"
  }], ["aria-valuemin", {
    type: "number"
  }], ["aria-valuenow", {
    type: "number"
  }], ["aria-valuetext", {
    type: "string"
  }]], l = {
    entries: function() {
      return u;
    },
    forEach: function(d) {
      for (var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, p = 0, g = u; p < g.length; p++) {
        var h = r(g[p], 2), b = h[0], m = h[1];
        d.call(f, m, b, u);
      }
    },
    get: function(d) {
      var f = u.filter(function(p) {
        return p[0] === d;
      })[0];
      return f && f[1];
    },
    has: function(d) {
      return !!l.get(d);
    },
    keys: function() {
      return u.map(function(d) {
        var f = r(d, 1), p = f[0];
        return p;
      });
    },
    values: function() {
      return u.map(function(d) {
        var f = r(d, 2), p = f[1];
        return p;
      });
    }
  };
  return ir.default = (0, e.default)(l, l.entries()), ir;
}
var ar = {}, Cu;
function Hy() {
  if (Cu) return ar;
  Cu = 1, Object.defineProperty(ar, "__esModule", {
    value: !0
  }), ar.default = void 0;
  var e = t(/* @__PURE__ */ fi());
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c, d) {
    return a(c) || s(c, d) || o(c, d) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(c, d) {
    if (c) {
      if (typeof c == "string") return i(c, d);
      var f = {}.toString.call(c).slice(8, -1);
      return f === "Object" && c.constructor && (f = c.constructor.name), f === "Map" || f === "Set" ? Array.from(c) : f === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(f) ? i(c, d) : void 0;
    }
  }
  function i(c, d) {
    (d == null || d > c.length) && (d = c.length);
    for (var f = 0, p = Array(d); f < d; f++) p[f] = c[f];
    return p;
  }
  function s(c, d) {
    var f = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (f != null) {
      var p, g, h, b, m = [], E = !0, $ = !1;
      try {
        if (h = (f = f.call(c)).next, d === 0) {
          if (Object(f) !== f) return;
          E = !1;
        } else for (; !(E = (p = h.call(f)).done) && (m.push(p.value), m.length !== d); E = !0) ;
      } catch (_) {
        $ = !0, g = _;
      } finally {
        try {
          if (!E && f.return != null && (b = f.return(), Object(b) !== b)) return;
        } finally {
          if ($) throw g;
        }
      }
      return m;
    }
  }
  function a(c) {
    if (Array.isArray(c)) return c;
  }
  var u = [["a", {
    reserved: !1
  }], ["abbr", {
    reserved: !1
  }], ["acronym", {
    reserved: !1
  }], ["address", {
    reserved: !1
  }], ["applet", {
    reserved: !1
  }], ["area", {
    reserved: !1
  }], ["article", {
    reserved: !1
  }], ["aside", {
    reserved: !1
  }], ["audio", {
    reserved: !1
  }], ["b", {
    reserved: !1
  }], ["base", {
    reserved: !0
  }], ["bdi", {
    reserved: !1
  }], ["bdo", {
    reserved: !1
  }], ["big", {
    reserved: !1
  }], ["blink", {
    reserved: !1
  }], ["blockquote", {
    reserved: !1
  }], ["body", {
    reserved: !1
  }], ["br", {
    reserved: !1
  }], ["button", {
    reserved: !1
  }], ["canvas", {
    reserved: !1
  }], ["caption", {
    reserved: !1
  }], ["center", {
    reserved: !1
  }], ["cite", {
    reserved: !1
  }], ["code", {
    reserved: !1
  }], ["col", {
    reserved: !0
  }], ["colgroup", {
    reserved: !0
  }], ["content", {
    reserved: !1
  }], ["data", {
    reserved: !1
  }], ["datalist", {
    reserved: !1
  }], ["dd", {
    reserved: !1
  }], ["del", {
    reserved: !1
  }], ["details", {
    reserved: !1
  }], ["dfn", {
    reserved: !1
  }], ["dialog", {
    reserved: !1
  }], ["dir", {
    reserved: !1
  }], ["div", {
    reserved: !1
  }], ["dl", {
    reserved: !1
  }], ["dt", {
    reserved: !1
  }], ["em", {
    reserved: !1
  }], ["embed", {
    reserved: !1
  }], ["fieldset", {
    reserved: !1
  }], ["figcaption", {
    reserved: !1
  }], ["figure", {
    reserved: !1
  }], ["font", {
    reserved: !1
  }], ["footer", {
    reserved: !1
  }], ["form", {
    reserved: !1
  }], ["frame", {
    reserved: !1
  }], ["frameset", {
    reserved: !1
  }], ["h1", {
    reserved: !1
  }], ["h2", {
    reserved: !1
  }], ["h3", {
    reserved: !1
  }], ["h4", {
    reserved: !1
  }], ["h5", {
    reserved: !1
  }], ["h6", {
    reserved: !1
  }], ["head", {
    reserved: !0
  }], ["header", {
    reserved: !1
  }], ["hgroup", {
    reserved: !1
  }], ["hr", {
    reserved: !1
  }], ["html", {
    reserved: !0
  }], ["i", {
    reserved: !1
  }], ["iframe", {
    reserved: !1
  }], ["img", {
    reserved: !1
  }], ["input", {
    reserved: !1
  }], ["ins", {
    reserved: !1
  }], ["kbd", {
    reserved: !1
  }], ["keygen", {
    reserved: !1
  }], ["label", {
    reserved: !1
  }], ["legend", {
    reserved: !1
  }], ["li", {
    reserved: !1
  }], ["link", {
    reserved: !0
  }], ["main", {
    reserved: !1
  }], ["map", {
    reserved: !1
  }], ["mark", {
    reserved: !1
  }], ["marquee", {
    reserved: !1
  }], ["menu", {
    reserved: !1
  }], ["menuitem", {
    reserved: !1
  }], ["meta", {
    reserved: !0
  }], ["meter", {
    reserved: !1
  }], ["nav", {
    reserved: !1
  }], ["noembed", {
    reserved: !0
  }], ["noscript", {
    reserved: !0
  }], ["object", {
    reserved: !1
  }], ["ol", {
    reserved: !1
  }], ["optgroup", {
    reserved: !1
  }], ["option", {
    reserved: !1
  }], ["output", {
    reserved: !1
  }], ["p", {
    reserved: !1
  }], ["param", {
    reserved: !0
  }], ["picture", {
    reserved: !0
  }], ["pre", {
    reserved: !1
  }], ["progress", {
    reserved: !1
  }], ["q", {
    reserved: !1
  }], ["rp", {
    reserved: !1
  }], ["rt", {
    reserved: !1
  }], ["rtc", {
    reserved: !1
  }], ["ruby", {
    reserved: !1
  }], ["s", {
    reserved: !1
  }], ["samp", {
    reserved: !1
  }], ["script", {
    reserved: !0
  }], ["section", {
    reserved: !1
  }], ["select", {
    reserved: !1
  }], ["small", {
    reserved: !1
  }], ["source", {
    reserved: !0
  }], ["spacer", {
    reserved: !1
  }], ["span", {
    reserved: !1
  }], ["strike", {
    reserved: !1
  }], ["strong", {
    reserved: !1
  }], ["style", {
    reserved: !0
  }], ["sub", {
    reserved: !1
  }], ["summary", {
    reserved: !1
  }], ["sup", {
    reserved: !1
  }], ["table", {
    reserved: !1
  }], ["tbody", {
    reserved: !1
  }], ["td", {
    reserved: !1
  }], ["textarea", {
    reserved: !1
  }], ["tfoot", {
    reserved: !1
  }], ["th", {
    reserved: !1
  }], ["thead", {
    reserved: !1
  }], ["time", {
    reserved: !1
  }], ["title", {
    reserved: !0
  }], ["tr", {
    reserved: !1
  }], ["track", {
    reserved: !0
  }], ["tt", {
    reserved: !1
  }], ["u", {
    reserved: !1
  }], ["ul", {
    reserved: !1
  }], ["var", {
    reserved: !1
  }], ["video", {
    reserved: !1
  }], ["wbr", {
    reserved: !1
  }], ["xmp", {
    reserved: !1
  }]], l = {
    entries: function() {
      return u;
    },
    forEach: function(d) {
      for (var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, p = 0, g = u; p < g.length; p++) {
        var h = r(g[p], 2), b = h[0], m = h[1];
        d.call(f, m, b, u);
      }
    },
    get: function(d) {
      var f = u.filter(function(p) {
        return p[0] === d;
      })[0];
      return f && f[1];
    },
    has: function(d) {
      return !!l.get(d);
    },
    keys: function() {
      return u.map(function(d) {
        var f = r(d, 1), p = f[0];
        return p;
      });
    },
    values: function() {
      return u.map(function(d) {
        var f = r(d, 2), p = f[1];
        return p;
      });
    }
  };
  return ar.default = (0, e.default)(l, l.entries()), ar;
}
var lr = {}, ur = {}, cr = {}, xu;
function Vy() {
  if (xu) return cr;
  xu = 1, Object.defineProperty(cr, "__esModule", {
    value: !0
  }), cr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  };
  return cr.default = e, cr;
}
var dr = {}, Eu;
function Uy() {
  if (Eu) return dr;
  Eu = 1, Object.defineProperty(dr, "__esModule", {
    value: !0
  }), dr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  };
  return dr.default = e, dr;
}
var fr = {}, Su;
function zy() {
  if (Su) return fr;
  Su = 1, Object.defineProperty(fr, "__esModule", {
    value: !0
  }), fr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "input"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  };
  return fr.default = e, fr;
}
var pr = {}, Pu;
function Wy() {
  if (Pu) return pr;
  Pu = 1, Object.defineProperty(pr, "__esModule", {
    value: !0
  }), pr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return pr.default = e, pr;
}
var hr = {}, Tu;
function Jy() {
  if (Tu) return hr;
  Tu = 1, Object.defineProperty(hr, "__esModule", {
    value: !0
  }), hr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuemax": null,
      "aria-valuemin": null,
      "aria-valuenow": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return hr.default = e, hr;
}
var mr = {}, _u;
function Xy() {
  if (_u) return mr;
  _u = 1, Object.defineProperty(mr, "__esModule", {
    value: !0
  }), mr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {
      "aria-atomic": null,
      "aria-busy": null,
      "aria-controls": null,
      "aria-current": null,
      "aria-describedby": null,
      "aria-details": null,
      "aria-dropeffect": null,
      "aria-flowto": null,
      "aria-grabbed": null,
      "aria-hidden": null,
      "aria-keyshortcuts": null,
      "aria-label": null,
      "aria-labelledby": null,
      "aria-live": null,
      "aria-owns": null,
      "aria-relevant": null,
      "aria-roledescription": null
    },
    relatedConcepts: [{
      concept: {
        name: "role"
      },
      module: "XHTML"
    }, {
      concept: {
        name: "type"
      },
      module: "Dublin Core"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  };
  return mr.default = e, mr;
}
var gr = {}, qu;
function Gy() {
  if (qu) return gr;
  qu = 1, Object.defineProperty(gr, "__esModule", {
    value: !0
  }), gr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "frontmatter"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "SMIL"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return gr.default = e, gr;
}
var br = {}, $u;
function Ky() {
  if ($u) return br;
  $u = 1, Object.defineProperty(br, "__esModule", {
    value: !0
  }), br.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return br.default = e, br;
}
var yr = {}, Ou;
function Yy() {
  if (Ou) return yr;
  Ou = 1, Object.defineProperty(yr, "__esModule", {
    value: !0
  }), yr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
  };
  return yr.default = e, yr;
}
var vr = {}, Mu;
function Zy() {
  if (Mu) return vr;
  Mu = 1, Object.defineProperty(vr, "__esModule", {
    value: !0
  }), vr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  };
  return vr.default = e, vr;
}
var wr = {}, Au;
function Qy() {
  if (Au) return wr;
  Au = 1, Object.defineProperty(wr, "__esModule", {
    value: !0
  }), wr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  };
  return wr.default = e, wr;
}
var Rr = {}, Iu;
function ev() {
  if (Iu) return Rr;
  Iu = 1, Object.defineProperty(Rr, "__esModule", {
    value: !0
  }), Rr.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-modal": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  };
  return Rr.default = e, Rr;
}
var Nu;
function tv() {
  if (Nu) return ur;
  Nu = 1, Object.defineProperty(ur, "__esModule", {
    value: !0
  }), ur.default = void 0;
  var e = f(/* @__PURE__ */ Vy()), t = f(/* @__PURE__ */ Uy()), r = f(/* @__PURE__ */ zy()), n = f(/* @__PURE__ */ Wy()), o = f(/* @__PURE__ */ Jy()), i = f(/* @__PURE__ */ Xy()), s = f(/* @__PURE__ */ Gy()), a = f(/* @__PURE__ */ Ky()), u = f(/* @__PURE__ */ Yy()), l = f(/* @__PURE__ */ Zy()), c = f(/* @__PURE__ */ Qy()), d = f(/* @__PURE__ */ ev());
  function f(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var p = [["command", e.default], ["composite", t.default], ["input", r.default], ["landmark", n.default], ["range", o.default], ["roletype", i.default], ["section", s.default], ["sectionhead", a.default], ["select", u.default], ["structure", l.default], ["widget", c.default], ["window", d.default]];
  return ur.default = p, ur;
}
var Cr = {}, xr = {}, ku;
function rv() {
  if (ku) return xr;
  ku = 1, Object.defineProperty(xr, "__esModule", {
    value: !0
  }), xr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "assertive"
    },
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return xr.default = e, xr;
}
var Er = {}, ju;
function nv() {
  if (ju) return Er;
  ju = 1, Object.defineProperty(Er, "__esModule", {
    value: !0
  }), Er.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
  };
  return Er.default = e, Er;
}
var Sr = {}, Du;
function ov() {
  if (Du) return Sr;
  Du = 1, Object.defineProperty(Sr, "__esModule", {
    value: !0
  }), Sr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return Sr.default = e, Sr;
}
var Pr = {}, Fu;
function iv() {
  if (Fu) return Pr;
  Fu = 1, Object.defineProperty(Pr, "__esModule", {
    value: !0
  }), Pr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "article"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  };
  return Pr.default = e, Pr;
}
var Tr = {}, Lu;
function sv() {
  if (Lu) return Tr;
  Lu = 1, Object.defineProperty(Tr, "__esModule", {
    value: !0
  }), Tr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "header"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Tr.default = e, Tr;
}
var _r = {}, Bu;
function av() {
  if (Bu) return _r;
  Bu = 1, Object.defineProperty(_r, "__esModule", {
    value: !0
  }), _r.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "blockquote"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return _r.default = e, _r;
}
var qr = {}, Hu;
function lv() {
  if (Hu) return qr;
  Hu = 1, Object.defineProperty(qr, "__esModule", {
    value: !0
  }), qr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-pressed": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "button"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "image"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "reset"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "submit"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "button"
      },
      module: "HTML"
    }, {
      concept: {
        name: "trigger"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  };
  return qr.default = e, qr;
}
var $r = {}, Vu;
function uv() {
  if (Vu) return $r;
  Vu = 1, Object.defineProperty($r, "__esModule", {
    value: !0
  }), $r.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "caption"
      },
      module: "HTML"
    }],
    requireContextRole: ["figure", "grid", "table"],
    requiredContextRole: ["figure", "grid", "table"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return $r.default = e, $r;
}
var Or = {}, Uu;
function cv() {
  if (Uu) return Or;
  Uu = 1, Object.defineProperty(Or, "__esModule", {
    value: !0
  }), Or.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-colspan": null,
      "aria-rowindex": null,
      "aria-rowspan": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has table role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Or.default = e, Or;
}
var Mr = {}, zu;
function dv() {
  if (zu) return Mr;
  zu = 1, Object.defineProperty(Mr, "__esModule", {
    value: !0
  }), Mr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "checkbox"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  };
  return Mr.default = e, Mr;
}
var Ar = {}, Wu;
function fv() {
  if (Wu) return Ar;
  Wu = 1, Object.defineProperty(Ar, "__esModule", {
    value: !0
  }), Ar.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "code"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Ar.default = e, Ar;
}
var Ir = {}, Ju;
function pv() {
  if (Ju) return Ir;
  Ju = 1, Object.defineProperty(Ir, "__esModule", {
    value: !0
  }), Ir.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "col"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "colgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  };
  return Ir.default = e, Ir;
}
var Nr = {}, Xu;
function hv() {
  if (Xu) return Nr;
  Xu = 1, Object.defineProperty(Nr, "__esModule", {
    value: !0
  }), Nr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-expanded": "false",
      "aria-haspopup": "listbox"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "multiple"
        }, {
          constraints: ["undefined"],
          name: "size"
        }],
        constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-expanded": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  };
  return Nr.default = e, Nr;
}
var kr = {}, Gu;
function mv() {
  if (Gu) return kr;
  Gu = 1, Object.defineProperty(kr, "__esModule", {
    value: !0
  }), kr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element", "scoped to the main element"],
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return kr.default = e, kr;
}
var jr = {}, Ku;
function gv() {
  if (Ku) return jr;
  Ku = 1, Object.defineProperty(jr, "__esModule", {
    value: !0
  }), jr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "footer"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return jr.default = e, jr;
}
var Dr = {}, Yu;
function bv() {
  if (Yu) return Dr;
  Yu = 1, Object.defineProperty(Dr, "__esModule", {
    value: !0
  }), Dr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dd"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Dr.default = e, Dr;
}
var Fr = {}, Zu;
function yv() {
  if (Zu) return Fr;
  Zu = 1, Object.defineProperty(Fr, "__esModule", {
    value: !0
  }), Fr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "del"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Fr.default = e, Fr;
}
var Lr = {}, Qu;
function vv() {
  if (Qu) return Lr;
  Qu = 1, Object.defineProperty(Lr, "__esModule", {
    value: !0
  }), Lr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dialog"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "window"]]
  };
  return Lr.default = e, Lr;
}
var Br = {}, ec;
function wv() {
  if (ec) return Br;
  ec = 1, Object.defineProperty(Br, "__esModule", {
    value: !0
  }), Br.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      module: "DAISY Guide"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  };
  return Br.default = e, Br;
}
var Hr = {}, tc;
function Rv() {
  if (tc) return Hr;
  tc = 1, Object.defineProperty(Hr, "__esModule", {
    value: !0
  }), Hr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }, {
      concept: {
        name: "html"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return Hr.default = e, Hr;
}
var Vr = {}, rc;
function Cv() {
  if (rc) return Vr;
  rc = 1, Object.defineProperty(Vr, "__esModule", {
    value: !0
  }), Vr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "em"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Vr.default = e, Vr;
}
var Ur = {}, nc;
function xv() {
  if (nc) return Ur;
  nc = 1, Object.defineProperty(Ur, "__esModule", {
    value: !0
  }), Ur.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["article"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  };
  return Ur.default = e, Ur;
}
var zr = {}, oc;
function Ev() {
  if (oc) return zr;
  oc = 1, Object.defineProperty(zr, "__esModule", {
    value: !0
  }), zr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "figure"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return zr.default = e, zr;
}
var Wr = {}, ic;
function Sv() {
  if (ic) return Wr;
  ic = 1, Object.defineProperty(Wr, "__esModule", {
    value: !0
  }), Wr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "name"
        }],
        name: "form"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Wr.default = e, Wr;
}
var Jr = {}, sc;
function Pv() {
  if (sc) return Jr;
  sc = 1, Object.defineProperty(Jr, "__esModule", {
    value: !0
  }), Jr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        name: "area"
      },
      module: "HTML"
    }, {
      concept: {
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        name: "b"
      },
      module: "HTML"
    }, {
      concept: {
        name: "bdo"
      },
      module: "HTML"
    }, {
      concept: {
        name: "body"
      },
      module: "HTML"
    }, {
      concept: {
        name: "data"
      },
      module: "HTML"
    }, {
      concept: {
        name: "div"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "footer"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "header"
      },
      module: "HTML"
    }, {
      concept: {
        name: "hgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "i"
      },
      module: "HTML"
    }, {
      concept: {
        name: "pre"
      },
      module: "HTML"
    }, {
      concept: {
        name: "q"
      },
      module: "HTML"
    }, {
      concept: {
        name: "samp"
      },
      module: "HTML"
    }, {
      concept: {
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "small"
      },
      module: "HTML"
    }, {
      concept: {
        name: "span"
      },
      module: "HTML"
    }, {
      concept: {
        name: "u"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return Jr.default = e, Jr;
}
var Xr = {}, ac;
function Tv() {
  if (ac) return Xr;
  ac = 1, Object.defineProperty(Xr, "__esModule", {
    value: !0
  }), Xr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-multiselectable": null,
      "aria-readonly": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
  };
  return Xr.default = e, Xr;
}
var Gr = {}, lc;
function _v() {
  if (lc) return Gr;
  lc = 1, Object.defineProperty(Gr, "__esModule", {
    value: !0
  }), Gr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-selected": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
  };
  return Gr.default = e, Gr;
}
var Kr = {}, uc;
function qv() {
  if (uc) return Kr;
  uc = 1, Object.defineProperty(Kr, "__esModule", {
    value: !0
  }), Kr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "details"
      },
      module: "HTML"
    }, {
      concept: {
        name: "fieldset"
      },
      module: "HTML"
    }, {
      concept: {
        name: "optgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "address"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Kr.default = e, Kr;
}
var Yr = {}, cc;
function $v() {
  if (cc) return Yr;
  cc = 1, Object.defineProperty(Yr, "__esModule", {
    value: !0
  }), Yr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-level": "2"
    },
    relatedConcepts: [{
      concept: {
        name: "h1"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h2"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h3"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h4"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h5"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h6"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-level": "2"
    },
    superClass: [["roletype", "structure", "sectionhead"]]
  };
  return Yr.default = e, Yr;
}
var Zr = {}, dc;
function Ov() {
  if (dc) return Zr;
  dc = 1, Object.defineProperty(Zr, "__esModule", {
    value: !0
  }), Zr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        name: "imggroup"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Zr.default = e, Zr;
}
var Qr = {}, fc;
function Mv() {
  if (fc) return Qr;
  fc = 1, Object.defineProperty(Qr, "__esModule", {
    value: !0
  }), Qr.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "ins"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Qr.default = e, Qr;
}
var en = {}, pc;
function Av() {
  if (pc) return en;
  pc = 1, Object.defineProperty(en, "__esModule", {
    value: !0
  }), en.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "area"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  };
  return en.default = e, en;
}
var tn = {}, hc;
function Iv() {
  if (hc) return tn;
  hc = 1, Object.defineProperty(tn, "__esModule", {
    value: !0
  }), tn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menu"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ol"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ul"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["listitem"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return tn.default = e, tn;
}
var rn = {}, mc;
function Nv() {
  if (mc) return rn;
  mc = 1, Object.defineProperty(rn, "__esModule", {
    value: !0
  }), rn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: [">1"],
          name: "size"
        }],
        constraints: ["the size attribute value is greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "multiple"
        }],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "datalist"
      },
      module: "HTML"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["option", "group"], ["option"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  };
  return rn.default = e, rn;
}
var nn = {}, gc;
function kv() {
  if (gc) return nn;
  gc = 1, Object.defineProperty(nn, "__esModule", {
    value: !0
  }), nn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"],
        name: "li"
      },
      module: "HTML"
    }, {
      concept: {
        name: "item"
      },
      module: "XForms"
    }],
    requireContextRole: ["directory", "list"],
    requiredContextRole: ["directory", "list"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return nn.default = e, nn;
}
var on = {}, bc;
function jv() {
  if (bc) return on;
  bc = 1, Object.defineProperty(on, "__esModule", {
    value: !0
  }), on.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-live": "polite"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return on.default = e, on;
}
var sn = {}, yc;
function Dv() {
  if (yc) return sn;
  yc = 1, Object.defineProperty(sn, "__esModule", {
    value: !0
  }), sn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "main"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return sn.default = e, sn;
}
var an = {}, vc;
function Fv() {
  if (vc) return an;
  vc = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: [],
    props: {
      "aria-braillelabel": null,
      "aria-brailleroledescription": null,
      "aria-description": null
    },
    relatedConcepts: [{
      concept: {
        name: "mark"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return an.default = e, an;
}
var ln = {}, wc;
function Lv() {
  if (wc) return ln;
  wc = 1, Object.defineProperty(ln, "__esModule", {
    value: !0
  }), ln.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return ln.default = e, ln;
}
var un = {}, Rc;
function Bv() {
  if (Rc) return un;
  Rc = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "math"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return un.default = e, un;
}
var cn = {}, Cc;
function Hv() {
  if (Cc) return cn;
  Cc = 1, Object.defineProperty(cn, "__esModule", {
    value: !0
  }), cn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        name: "MENU"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }, {
      concept: {
        name: "sidebar"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  };
  return cn.default = e, cn;
}
var dn = {}, xc;
function Vv() {
  if (xc) return dn;
  xc = 1, Object.defineProperty(dn, "__esModule", {
    value: !0
  }), dn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "toolbar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
  };
  return dn.default = e, dn;
}
var fn = {}, Ec;
function Uv() {
  if (Ec) return fn;
  Ec = 1, Object.defineProperty(fn, "__esModule", {
    value: !0
  }), fn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "MENU_ITEM"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  };
  return fn.default = e, fn;
}
var pn = {}, Sc;
function zv() {
  if (Sc) return pn;
  Sc = 1, Object.defineProperty(pn, "__esModule", {
    value: !0
  }), pn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
  };
  return pn.default = e, pn;
}
var hn = {}, Pc;
function Wv() {
  if (Pc) return hn;
  Pc = 1, Object.defineProperty(hn, "__esModule", {
    value: !0
  }), hn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
  };
  return hn.default = e, hn;
}
var mn = {}, Tc;
function Jv() {
  if (Tc) return mn;
  Tc = 1, Object.defineProperty(mn, "__esModule", {
    value: !0
  }), mn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null,
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        name: "meter"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"]]
  };
  return mn.default = e, mn;
}
var gn = {}, _c;
function Xv() {
  if (_c) return gn;
  _c = 1, Object.defineProperty(gn, "__esModule", {
    value: !0
  }), gn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "nav"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return gn.default = e, gn;
}
var bn = {}, qc;
function Gv() {
  if (qc) return bn;
  qc = 1, Object.defineProperty(bn, "__esModule", {
    value: !0
  }), bn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  };
  return bn.default = e, bn;
}
var yn = {}, $c;
function Kv() {
  if ($c) return yn;
  $c = 1, Object.defineProperty(yn, "__esModule", {
    value: !0
  }), yn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return yn.default = e, yn;
}
var vn = {}, Oc;
function Yv() {
  if (Oc) return vn;
  Oc = 1, Object.defineProperty(vn, "__esModule", {
    value: !0
  }), vn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [{
      concept: {
        name: "item"
      },
      module: "XForms"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  };
  return vn.default = e, vn;
}
var wn = {}, Mc;
function Zv() {
  if (Mc) return wn;
  Mc = 1, Object.defineProperty(wn, "__esModule", {
    value: !0
  }), wn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "p"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return wn.default = e, wn;
}
var Rn = {}, Ac;
function Qv() {
  if (Ac) return Rn;
  Ac = 1, Object.defineProperty(Rn, "__esModule", {
    value: !0
  }), Rn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "alt",
          value: ""
        }],
        name: "img"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return Rn.default = e, Rn;
}
var Cn = {}, Ic;
function ew() {
  if (Ic) return Cn;
  Ic = 1, Object.defineProperty(Cn, "__esModule", {
    value: !0
  }), Cn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "progress"
      },
      module: "HTML"
    }, {
      concept: {
        name: "status"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  };
  return Cn.default = e, Cn;
}
var xn = {}, Nc;
function tw() {
  if (Nc) return xn;
  Nc = 1, Object.defineProperty(xn, "__esModule", {
    value: !0
  }), xn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "radio"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  };
  return xn.default = e, xn;
}
var En = {}, kc;
function rw() {
  if (kc) return En;
  kc = 1, Object.defineProperty(En, "__esModule", {
    value: !0
  }), En.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        name: "list"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["radio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  };
  return En.default = e, En;
}
var Sn = {}, jc;
function nw() {
  if (jc) return Sn;
  jc = 1, Object.defineProperty(Sn, "__esModule", {
    value: !0
  }), Sn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "Device Independence Glossart perceivable unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Sn.default = e, Sn;
}
var Pn = {}, Dc;
function ow() {
  if (Dc) return Pn;
  Dc = 1, Object.defineProperty(Pn, "__esModule", {
    value: !0
  }), Pn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-expanded": null,
      "aria-level": null,
      "aria-posinset": null,
      "aria-rowindex": null,
      "aria-selected": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "tr"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
  };
  return Pn.default = e, Pn;
}
var Tn = {}, Fc;
function iw() {
  if (Fc) return Tn;
  Fc = 1, Object.defineProperty(Tn, "__esModule", {
    value: !0
  }), Tn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "tbody"
      },
      module: "HTML"
    }, {
      concept: {
        name: "tfoot"
      },
      module: "HTML"
    }, {
      concept: {
        name: "thead"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "table", "treegrid"],
    requiredContextRole: ["grid", "table", "treegrid"],
    requiredOwnedElements: [["row"]],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return Tn.default = e, Tn;
}
var _n = {}, Lc;
function sw() {
  if (Lc) return _n;
  Lc = 1, Object.defineProperty(_n, "__esModule", {
    value: !0
  }), _n.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "scope",
          value: "row"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "rowgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row", "rowgroup"],
    requiredContextRole: ["row", "rowgroup"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  };
  return _n.default = e, _n;
}
var qn = {}, Bc;
function aw() {
  if (Bc) return qn;
  Bc = 1, Object.defineProperty(qn, "__esModule", {
    value: !0
  }), qn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-valuetext": null,
      "aria-orientation": "vertical",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  };
  return qn.default = e, qn;
}
var $n = {}, Hc;
function lw() {
  if (Hc) return $n;
  Hc = 1, Object.defineProperty($n, "__esModule", {
    value: !0
  }), $n.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return $n.default = e, $n;
}
var On = {}, Vc;
function uw() {
  if (Vc) return On;
  Vc = 1, Object.defineProperty(On, "__esModule", {
    value: !0
  }), On.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input", "textbox"]]
  };
  return On.default = e, On;
}
var Mn = {}, Uc;
function cw() {
  if (Uc) return Mn;
  Uc = 1, Object.defineProperty(Mn, "__esModule", {
    value: !0
  }), Mn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": null,
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "hr"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  };
  return Mn.default = e, Mn;
}
var An = {}, zc;
function dw() {
  if (zc) return An;
  zc = 1, Object.defineProperty(An, "__esModule", {
    value: !0
  }), An.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-valuetext": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "range"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  };
  return An.default = e, An;
}
var In = {}, Wc;
function fw() {
  if (Wc) return In;
  Wc = 1, Object.defineProperty(In, "__esModule", {
    value: !0
  }), In.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-valuetext": null,
      "aria-valuenow": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "number"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  };
  return In.default = e, In;
}
var Nn = {}, Jc;
function pw() {
  if (Jc) return Nn;
  Jc = 1, Object.defineProperty(Nn, "__esModule", {
    value: !0
  }), Nn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "polite"
    },
    relatedConcepts: [{
      concept: {
        name: "output"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Nn.default = e, Nn;
}
var kn = {}, Xc;
function hw() {
  if (Xc) return kn;
  Xc = 1, Object.defineProperty(kn, "__esModule", {
    value: !0
  }), kn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "strong"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return kn.default = e, kn;
}
var jn = {}, Gc;
function mw() {
  if (Gc) return jn;
  Gc = 1, Object.defineProperty(jn, "__esModule", {
    value: !0
  }), jn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sub"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return jn.default = e, jn;
}
var Dn = {}, Kc;
function gw() {
  if (Kc) return Dn;
  Kc = 1, Object.defineProperty(Dn, "__esModule", {
    value: !0
  }), Dn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sup"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Dn.default = e, Dn;
}
var Fn = {}, Yc;
function bw() {
  if (Yc) return Fn;
  Yc = 1, Object.defineProperty(Fn, "__esModule", {
    value: !0
  }), Fn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "button"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"]]
  };
  return Fn.default = e, Fn;
}
var Ln = {}, Zc;
function yw() {
  if (Zc) return Ln;
  Zc = 1, Object.defineProperty(Ln, "__esModule", {
    value: !0
  }), Ln.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [],
    requireContextRole: ["tablist"],
    requiredContextRole: ["tablist"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
  };
  return Ln.default = e, Ln;
}
var Bn = {}, Qc;
function vw() {
  if (Qc) return Bn;
  Qc = 1, Object.defineProperty(Bn, "__esModule", {
    value: !0
  }), Bn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-colcount": null,
      "aria-rowcount": null
    },
    relatedConcepts: [{
      concept: {
        name: "table"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Bn.default = e, Bn;
}
var Hn = {}, ed;
function ww() {
  if (ed) return Hn;
  ed = 1, Object.defineProperty(Hn, "__esModule", {
    value: !0
  }), Hn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-multiselectable": null,
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      module: "DAISY",
      concept: {
        name: "guide"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["tab"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"]]
  };
  return Hn.default = e, Hn;
}
var Vn = {}, td;
function Rw() {
  if (td) return Vn;
  td = 1, Object.defineProperty(Vn, "__esModule", {
    value: !0
  }), Vn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Vn.default = e, Vn;
}
var Un = {}, rd;
function Cw() {
  if (rd) return Un;
  rd = 1, Object.defineProperty(Un, "__esModule", {
    value: !0
  }), Un.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dfn"
      },
      module: "HTML"
    }, {
      concept: {
        name: "dt"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Un.default = e, Un;
}
var zn = {}, nd;
function xw() {
  if (nd) return zn;
  nd = 1, Object.defineProperty(zn, "__esModule", {
    value: !0
  }), zn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-multiline": null,
      "aria-placeholder": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "type"
        }, {
          constraints: ["undefined"],
          name: "list"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "input"
      },
      module: "XForms"
    }, {
      concept: {
        name: "textarea"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input"]]
  };
  return zn.default = e, zn;
}
var Wn = {}, od;
function Ew() {
  if (od) return Wn;
  od = 1, Object.defineProperty(Wn, "__esModule", {
    value: !0
  }), Wn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "time"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Wn.default = e, Wn;
}
var Jn = {}, id;
function Sw() {
  if (id) return Jn;
  id = 1, Object.defineProperty(Jn, "__esModule", {
    value: !0
  }), Jn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "status"]]
  };
  return Jn.default = e, Jn;
}
var Xn = {}, sd;
function Pw() {
  if (sd) return Xn;
  sd = 1, Object.defineProperty(Xn, "__esModule", {
    value: !0
  }), Xn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "menubar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  };
  return Xn.default = e, Xn;
}
var Gn = {}, ad;
function Tw() {
  if (ad) return Gn;
  ad = 1, Object.defineProperty(Gn, "__esModule", {
    value: !0
  }), Gn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Gn.default = e, Gn;
}
var Kn = {}, ld;
function _w() {
  if (ld) return Kn;
  ld = 1, Object.defineProperty(Kn, "__esModule", {
    value: !0
  }), Kn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  };
  return Kn.default = e, Kn;
}
var Yn = {}, ud;
function qw() {
  if (ud) return Yn;
  ud = 1, Object.defineProperty(Yn, "__esModule", {
    value: !0
  }), Yn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
  };
  return Yn.default = e, Yn;
}
var Zn = {}, cd;
function $w() {
  if (cd) return Zn;
  cd = 1, Object.defineProperty(Zn, "__esModule", {
    value: !0
  }), Zn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [],
    requireContextRole: ["group", "tree"],
    requiredContextRole: ["group", "tree"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": null
    },
    superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
  };
  return Zn.default = e, Zn;
}
var dd;
function Ow() {
  if (dd) return Cr;
  dd = 1, Object.defineProperty(Cr, "__esModule", {
    value: !0
  }), Cr.default = void 0;
  var e = F(/* @__PURE__ */ rv()), t = F(/* @__PURE__ */ nv()), r = F(/* @__PURE__ */ ov()), n = F(/* @__PURE__ */ iv()), o = F(/* @__PURE__ */ sv()), i = F(/* @__PURE__ */ av()), s = F(/* @__PURE__ */ lv()), a = F(/* @__PURE__ */ uv()), u = F(/* @__PURE__ */ cv()), l = F(/* @__PURE__ */ dv()), c = F(/* @__PURE__ */ fv()), d = F(/* @__PURE__ */ pv()), f = F(/* @__PURE__ */ hv()), p = F(/* @__PURE__ */ mv()), g = F(/* @__PURE__ */ gv()), h = F(/* @__PURE__ */ bv()), b = F(/* @__PURE__ */ yv()), m = F(/* @__PURE__ */ vv()), E = F(/* @__PURE__ */ wv()), $ = F(/* @__PURE__ */ Rv()), _ = F(/* @__PURE__ */ Cv()), C = F(/* @__PURE__ */ xv()), T = F(/* @__PURE__ */ Ev()), P = F(/* @__PURE__ */ Sv()), v = F(/* @__PURE__ */ Pv()), R = F(/* @__PURE__ */ Tv()), I = F(/* @__PURE__ */ _v()), S = F(/* @__PURE__ */ qv()), A = F(/* @__PURE__ */ $v()), V = F(/* @__PURE__ */ Ov()), L = F(/* @__PURE__ */ Mv()), U = F(/* @__PURE__ */ Av()), k = F(/* @__PURE__ */ Iv()), B = F(/* @__PURE__ */ Nv()), H = F(/* @__PURE__ */ kv()), Q = F(/* @__PURE__ */ jv()), ye = F(/* @__PURE__ */ Dv()), qe = F(/* @__PURE__ */ Fv()), we = F(/* @__PURE__ */ Lv()), Ce = F(/* @__PURE__ */ Bv()), Ne = F(/* @__PURE__ */ Hv()), W = F(/* @__PURE__ */ Vv()), xe = F(/* @__PURE__ */ Uv()), ge = F(/* @__PURE__ */ zv()), st = F(/* @__PURE__ */ Wv()), De = F(/* @__PURE__ */ Jv()), ft = F(/* @__PURE__ */ Xv()), Ee = F(/* @__PURE__ */ Gv()), Fe = F(/* @__PURE__ */ Kv()), Ft = F(/* @__PURE__ */ Yv()), X = F(/* @__PURE__ */ Zv()), O = F(/* @__PURE__ */ Qv()), N = F(/* @__PURE__ */ ew()), j = F(/* @__PURE__ */ tw()), z = F(/* @__PURE__ */ rw()), x = F(/* @__PURE__ */ nw()), K = F(/* @__PURE__ */ ow()), ne = F(/* @__PURE__ */ iw()), ee = F(/* @__PURE__ */ sw()), re = F(/* @__PURE__ */ aw()), G = F(/* @__PURE__ */ lw()), D = F(/* @__PURE__ */ uw()), J = F(/* @__PURE__ */ cw()), Z = F(/* @__PURE__ */ dw()), le = F(/* @__PURE__ */ fw()), he = F(/* @__PURE__ */ pw()), Ze = F(/* @__PURE__ */ hw()), Le = F(/* @__PURE__ */ mw()), Se = F(/* @__PURE__ */ gw()), Me = F(/* @__PURE__ */ bw()), Je = F(/* @__PURE__ */ yw()), Be = F(/* @__PURE__ */ vw()), at = F(/* @__PURE__ */ ww()), ke = F(/* @__PURE__ */ Rw()), Ri = F(/* @__PURE__ */ Cw()), nr = F(/* @__PURE__ */ xw()), or = F(/* @__PURE__ */ Ew()), Ci = F(/* @__PURE__ */ Sw()), $t = F(/* @__PURE__ */ Pw()), Mb = F(/* @__PURE__ */ Tw()), Ab = F(/* @__PURE__ */ _w()), Ib = F(/* @__PURE__ */ qw()), Nb = F(/* @__PURE__ */ $w());
  function F(xi) {
    return xi && xi.__esModule ? xi : { default: xi };
  }
  var kb = [["alert", e.default], ["alertdialog", t.default], ["application", r.default], ["article", n.default], ["banner", o.default], ["blockquote", i.default], ["button", s.default], ["caption", a.default], ["cell", u.default], ["checkbox", l.default], ["code", c.default], ["columnheader", d.default], ["combobox", f.default], ["complementary", p.default], ["contentinfo", g.default], ["definition", h.default], ["deletion", b.default], ["dialog", m.default], ["directory", E.default], ["document", $.default], ["emphasis", _.default], ["feed", C.default], ["figure", T.default], ["form", P.default], ["generic", v.default], ["grid", R.default], ["gridcell", I.default], ["group", S.default], ["heading", A.default], ["img", V.default], ["insertion", L.default], ["link", U.default], ["list", k.default], ["listbox", B.default], ["listitem", H.default], ["log", Q.default], ["main", ye.default], ["mark", qe.default], ["marquee", we.default], ["math", Ce.default], ["menu", Ne.default], ["menubar", W.default], ["menuitem", xe.default], ["menuitemcheckbox", ge.default], ["menuitemradio", st.default], ["meter", De.default], ["navigation", ft.default], ["none", Ee.default], ["note", Fe.default], ["option", Ft.default], ["paragraph", X.default], ["presentation", O.default], ["progressbar", N.default], ["radio", j.default], ["radiogroup", z.default], ["region", x.default], ["row", K.default], ["rowgroup", ne.default], ["rowheader", ee.default], ["scrollbar", re.default], ["search", G.default], ["searchbox", D.default], ["separator", J.default], ["slider", Z.default], ["spinbutton", le.default], ["status", he.default], ["strong", Ze.default], ["subscript", Le.default], ["superscript", Se.default], ["switch", Me.default], ["tab", Je.default], ["table", Be.default], ["tablist", at.default], ["tabpanel", ke.default], ["term", Ri.default], ["textbox", nr.default], ["time", or.default], ["timer", Ci.default], ["toolbar", $t.default], ["tooltip", Mb.default], ["tree", Ab.default], ["treegrid", Ib.default], ["treeitem", Nb.default]];
  return Cr.default = kb, Cr;
}
var Qn = {}, eo = {}, fd;
function Mw() {
  if (fd) return eo;
  fd = 1, Object.defineProperty(eo, "__esModule", {
    value: !0
  }), eo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "abstract [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return eo.default = e, eo;
}
var to = {}, pd;
function Aw() {
  if (pd) return to;
  pd = 1, Object.defineProperty(to, "__esModule", {
    value: !0
  }), to.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "acknowledgments [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return to.default = e, to;
}
var ro = {}, hd;
function Iw() {
  if (hd) return ro;
  hd = 1, Object.defineProperty(ro, "__esModule", {
    value: !0
  }), ro.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "afterword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return ro.default = e, ro;
}
var no = {}, md;
function Nw() {
  if (md) return no;
  md = 1, Object.defineProperty(no, "__esModule", {
    value: !0
  }), no.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "appendix [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return no.default = e, no;
}
var oo = {}, gd;
function kw() {
  if (gd) return oo;
  gd = 1, Object.defineProperty(oo, "__esModule", {
    value: !0
  }), oo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "referrer [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  };
  return oo.default = e, oo;
}
var io = {}, bd;
function jw() {
  if (bd) return io;
  bd = 1, Object.defineProperty(io, "__esModule", {
    value: !0
  }), io.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "EPUB biblioentry [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-bibliography"],
    requiredContextRole: ["doc-bibliography"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  };
  return io.default = e, io;
}
var so = {}, yd;
function Dw() {
  if (yd) return so;
  yd = 1, Object.defineProperty(so, "__esModule", {
    value: !0
  }), so.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "bibliography [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-biblioentry"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return so.default = e, so;
}
var ao = {}, vd;
function Fw() {
  if (vd) return ao;
  vd = 1, Object.defineProperty(ao, "__esModule", {
    value: !0
  }), ao.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "biblioref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  };
  return ao.default = e, ao;
}
var lo = {}, wd;
function Lw() {
  if (wd) return lo;
  wd = 1, Object.defineProperty(lo, "__esModule", {
    value: !0
  }), lo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "chapter [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return lo.default = e, lo;
}
var uo = {}, Rd;
function Bw() {
  if (Rd) return uo;
  Rd = 1, Object.defineProperty(uo, "__esModule", {
    value: !0
  }), uo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "colophon [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return uo.default = e, uo;
}
var co = {}, Cd;
function Hw() {
  if (Cd) return co;
  Cd = 1, Object.defineProperty(co, "__esModule", {
    value: !0
  }), co.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "conclusion [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return co.default = e, co;
}
var fo = {}, xd;
function Vw() {
  if (xd) return fo;
  xd = 1, Object.defineProperty(fo, "__esModule", {
    value: !0
  }), fo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "cover [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  };
  return fo.default = e, fo;
}
var po = {}, Ed;
function Uw() {
  if (Ed) return po;
  Ed = 1, Object.defineProperty(po, "__esModule", {
    value: !0
  }), po.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credit [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return po.default = e, po;
}
var ho = {}, Sd;
function zw() {
  if (Sd) return ho;
  Sd = 1, Object.defineProperty(ho, "__esModule", {
    value: !0
  }), ho.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credits [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return ho.default = e, ho;
}
var mo = {}, Pd;
function Ww() {
  if (Pd) return mo;
  Pd = 1, Object.defineProperty(mo, "__esModule", {
    value: !0
  }), mo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "dedication [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return mo.default = e, mo;
}
var go = {}, Td;
function Jw() {
  if (Td) return go;
  Td = 1, Object.defineProperty(go, "__esModule", {
    value: !0
  }), go.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-endnotes"],
    requiredContextRole: ["doc-endnotes"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  };
  return go.default = e, go;
}
var bo = {}, _d;
function Xw() {
  if (_d) return bo;
  _d = 1, Object.defineProperty(bo, "__esModule", {
    value: !0
  }), bo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnotes [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-endnote"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return bo.default = e, bo;
}
var yo = {}, qd;
function Gw() {
  if (qd) return yo;
  qd = 1, Object.defineProperty(yo, "__esModule", {
    value: !0
  }), yo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epigraph [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return yo.default = e, yo;
}
var vo = {}, $d;
function Kw() {
  if ($d) return vo;
  $d = 1, Object.defineProperty(vo, "__esModule", {
    value: !0
  }), vo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epilogue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return vo.default = e, vo;
}
var wo = {}, Od;
function Yw() {
  if (Od) return wo;
  Od = 1, Object.defineProperty(wo, "__esModule", {
    value: !0
  }), wo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "errata [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return wo.default = e, wo;
}
var Ro = {}, Md;
function Zw() {
  if (Md) return Ro;
  Md = 1, Object.defineProperty(Ro, "__esModule", {
    value: !0
  }), Ro.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Ro.default = e, Ro;
}
var Co = {}, Ad;
function Qw() {
  if (Ad) return Co;
  Ad = 1, Object.defineProperty(Co, "__esModule", {
    value: !0
  }), Co.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "footnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Co.default = e, Co;
}
var xo = {}, Id;
function eR() {
  if (Id) return xo;
  Id = 1, Object.defineProperty(xo, "__esModule", {
    value: !0
  }), xo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "foreword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return xo.default = e, xo;
}
var Eo = {}, Nd;
function tR() {
  if (Nd) return Eo;
  Nd = 1, Object.defineProperty(Eo, "__esModule", {
    value: !0
  }), Eo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossary [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["definition"], ["term"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Eo.default = e, Eo;
}
var So = {}, kd;
function rR() {
  if (kd) return So;
  kd = 1, Object.defineProperty(So, "__esModule", {
    value: !0
  }), So.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  };
  return So.default = e, So;
}
var Po = {}, jd;
function nR() {
  if (jd) return Po;
  jd = 1, Object.defineProperty(Po, "__esModule", {
    value: !0
  }), Po.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "index [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  };
  return Po.default = e, Po;
}
var To = {}, Dd;
function oR() {
  if (Dd) return To;
  Dd = 1, Object.defineProperty(To, "__esModule", {
    value: !0
  }), To.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "introduction [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return To.default = e, To;
}
var _o = {}, Fd;
function iR() {
  if (Fd) return _o;
  Fd = 1, Object.defineProperty(_o, "__esModule", {
    value: !0
  }), _o.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "noteref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  };
  return _o.default = e, _o;
}
var qo = {}, Ld;
function sR() {
  if (Ld) return qo;
  Ld = 1, Object.defineProperty(qo, "__esModule", {
    value: !0
  }), qo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "notice [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  };
  return qo.default = e, qo;
}
var $o = {}, Bd;
function aR() {
  if (Bd) return $o;
  Bd = 1, Object.defineProperty($o, "__esModule", {
    value: !0
  }), $o.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "pagebreak [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "separator"]]
  };
  return $o.default = e, $o;
}
var Oo = {}, Hd;
function lR() {
  if (Hd) return Oo;
  Hd = 1, Object.defineProperty(Oo, "__esModule", {
    value: !0
  }), Oo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: [],
    props: {
      "aria-braillelabel": null,
      "aria-brailleroledescription": null,
      "aria-description": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Oo.default = e, Oo;
}
var Mo = {}, Vd;
function uR() {
  if (Vd) return Mo;
  Vd = 1, Object.defineProperty(Mo, "__esModule", {
    value: !0
  }), Mo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: [],
    props: {
      "aria-braillelabel": null,
      "aria-brailleroledescription": null,
      "aria-description": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Mo.default = e, Mo;
}
var Ao = {}, Ud;
function cR() {
  if (Ud) return Ao;
  Ud = 1, Object.defineProperty(Ao, "__esModule", {
    value: !0
  }), Ao.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "page-list [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  };
  return Ao.default = e, Ao;
}
var Io = {}, zd;
function dR() {
  if (zd) return Io;
  zd = 1, Object.defineProperty(Io, "__esModule", {
    value: !0
  }), Io.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "part [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return Io.default = e, Io;
}
var No = {}, Wd;
function fR() {
  if (Wd) return No;
  Wd = 1, Object.defineProperty(No, "__esModule", {
    value: !0
  }), No.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "preface [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return No.default = e, No;
}
var ko = {}, Jd;
function pR() {
  if (Jd) return ko;
  Jd = 1, Object.defineProperty(ko, "__esModule", {
    value: !0
  }), ko.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "prologue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  };
  return ko.default = e, ko;
}
var jo = {}, Xd;
function hR() {
  if (Xd) return jo;
  Xd = 1, Object.defineProperty(jo, "__esModule", {
    value: !0
  }), jo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "pullquote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["none"]]
  };
  return jo.default = e, jo;
}
var Do = {}, Gd;
function mR() {
  if (Gd) return Do;
  Gd = 1, Object.defineProperty(Do, "__esModule", {
    value: !0
  }), Do.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "qna [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  };
  return Do.default = e, Do;
}
var Fo = {}, Kd;
function gR() {
  if (Kd) return Fo;
  Kd = 1, Object.defineProperty(Fo, "__esModule", {
    value: !0
  }), Fo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "subtitle [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"]]
  };
  return Fo.default = e, Fo;
}
var Lo = {}, Yd;
function bR() {
  if (Yd) return Lo;
  Yd = 1, Object.defineProperty(Lo, "__esModule", {
    value: !0
  }), Lo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "help [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  };
  return Lo.default = e, Lo;
}
var Bo = {}, Zd;
function yR() {
  if (Zd) return Bo;
  Zd = 1, Object.defineProperty(Bo, "__esModule", {
    value: !0
  }), Bo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "toc [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  };
  return Bo.default = e, Bo;
}
var Qd;
function vR() {
  if (Qd) return Qn;
  Qd = 1, Object.defineProperty(Qn, "__esModule", {
    value: !0
  }), Qn.default = void 0;
  var e = W(/* @__PURE__ */ Mw()), t = W(/* @__PURE__ */ Aw()), r = W(/* @__PURE__ */ Iw()), n = W(/* @__PURE__ */ Nw()), o = W(/* @__PURE__ */ kw()), i = W(/* @__PURE__ */ jw()), s = W(/* @__PURE__ */ Dw()), a = W(/* @__PURE__ */ Fw()), u = W(/* @__PURE__ */ Lw()), l = W(/* @__PURE__ */ Bw()), c = W(/* @__PURE__ */ Hw()), d = W(/* @__PURE__ */ Vw()), f = W(/* @__PURE__ */ Uw()), p = W(/* @__PURE__ */ zw()), g = W(/* @__PURE__ */ Ww()), h = W(/* @__PURE__ */ Jw()), b = W(/* @__PURE__ */ Xw()), m = W(/* @__PURE__ */ Gw()), E = W(/* @__PURE__ */ Kw()), $ = W(/* @__PURE__ */ Yw()), _ = W(/* @__PURE__ */ Zw()), C = W(/* @__PURE__ */ Qw()), T = W(/* @__PURE__ */ eR()), P = W(/* @__PURE__ */ tR()), v = W(/* @__PURE__ */ rR()), R = W(/* @__PURE__ */ nR()), I = W(/* @__PURE__ */ oR()), S = W(/* @__PURE__ */ iR()), A = W(/* @__PURE__ */ sR()), V = W(/* @__PURE__ */ aR()), L = W(/* @__PURE__ */ lR()), U = W(/* @__PURE__ */ uR()), k = W(/* @__PURE__ */ cR()), B = W(/* @__PURE__ */ dR()), H = W(/* @__PURE__ */ fR()), Q = W(/* @__PURE__ */ pR()), ye = W(/* @__PURE__ */ hR()), qe = W(/* @__PURE__ */ mR()), we = W(/* @__PURE__ */ gR()), Ce = W(/* @__PURE__ */ bR()), Ne = W(/* @__PURE__ */ yR());
  function W(ge) {
    return ge && ge.__esModule ? ge : { default: ge };
  }
  var xe = [["doc-abstract", e.default], ["doc-acknowledgments", t.default], ["doc-afterword", r.default], ["doc-appendix", n.default], ["doc-backlink", o.default], ["doc-biblioentry", i.default], ["doc-bibliography", s.default], ["doc-biblioref", a.default], ["doc-chapter", u.default], ["doc-colophon", l.default], ["doc-conclusion", c.default], ["doc-cover", d.default], ["doc-credit", f.default], ["doc-credits", p.default], ["doc-dedication", g.default], ["doc-endnote", h.default], ["doc-endnotes", b.default], ["doc-epigraph", m.default], ["doc-epilogue", E.default], ["doc-errata", $.default], ["doc-example", _.default], ["doc-footnote", C.default], ["doc-foreword", T.default], ["doc-glossary", P.default], ["doc-glossref", v.default], ["doc-index", R.default], ["doc-introduction", I.default], ["doc-noteref", S.default], ["doc-notice", A.default], ["doc-pagebreak", V.default], ["doc-pagefooter", L.default], ["doc-pageheader", U.default], ["doc-pagelist", k.default], ["doc-part", B.default], ["doc-preface", H.default], ["doc-prologue", Q.default], ["doc-pullquote", ye.default], ["doc-qna", qe.default], ["doc-subtitle", we.default], ["doc-tip", Ce.default], ["doc-toc", Ne.default]];
  return Qn.default = xe, Qn;
}
var Ho = {}, Vo = {}, ef;
function wR() {
  if (ef) return Vo;
  ef = 1, Object.defineProperty(Vo, "__esModule", {
    value: !0
  }), Vo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-object"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "article"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  };
  return Vo.default = e, Vo;
}
var Uo = {}, tf;
function RR() {
  if (tf) return Uo;
  tf = 1, Object.defineProperty(Uo, "__esModule", {
    value: !0
  }), Uo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-document"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "group"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "GRAPHICS",
      concept: {
        name: "graphics-symbol"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  };
  return Uo.default = e, Uo;
}
var zo = {}, rf;
function CR() {
  if (rf) return zo;
  rf = 1, Object.defineProperty(zo, "__esModule", {
    value: !0
  }), zo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  };
  return zo.default = e, zo;
}
var nf;
function xR() {
  if (nf) return Ho;
  nf = 1, Object.defineProperty(Ho, "__esModule", {
    value: !0
  }), Ho.default = void 0;
  var e = n(/* @__PURE__ */ wR()), t = n(/* @__PURE__ */ RR()), r = n(/* @__PURE__ */ CR());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = [["graphics-document", e.default], ["graphics-object", t.default], ["graphics-symbol", r.default]];
  return Ho.default = o, Ho;
}
var of;
function el() {
  if (of) return lr;
  of = 1, Object.defineProperty(lr, "__esModule", {
    value: !0
  }), lr.default = void 0;
  var e = i(/* @__PURE__ */ tv()), t = i(/* @__PURE__ */ Ow()), r = i(/* @__PURE__ */ vR()), n = i(/* @__PURE__ */ xR()), o = i(/* @__PURE__ */ fi());
  function i(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function s(h, b) {
    var m = typeof Symbol < "u" && h[Symbol.iterator] || h["@@iterator"];
    if (!m) {
      if (Array.isArray(h) || (m = l(h)) || b) {
        m && (h = m);
        var E = 0, $ = function() {
        };
        return { s: $, n: function() {
          return E >= h.length ? { done: !0 } : { done: !1, value: h[E++] };
        }, e: function(v) {
          throw v;
        }, f: $ };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var _, C = !0, T = !1;
    return { s: function() {
      m = m.call(h);
    }, n: function() {
      var v = m.next();
      return C = v.done, v;
    }, e: function(v) {
      T = !0, _ = v;
    }, f: function() {
      try {
        C || m.return == null || m.return();
      } finally {
        if (T) throw _;
      }
    } };
  }
  function a(h, b) {
    return f(h) || d(h, b) || l(h, b) || u();
  }
  function u() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function l(h, b) {
    if (h) {
      if (typeof h == "string") return c(h, b);
      var m = {}.toString.call(h).slice(8, -1);
      return m === "Object" && h.constructor && (m = h.constructor.name), m === "Map" || m === "Set" ? Array.from(h) : m === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(m) ? c(h, b) : void 0;
    }
  }
  function c(h, b) {
    (b == null || b > h.length) && (b = h.length);
    for (var m = 0, E = Array(b); m < b; m++) E[m] = h[m];
    return E;
  }
  function d(h, b) {
    var m = h == null ? null : typeof Symbol < "u" && h[Symbol.iterator] || h["@@iterator"];
    if (m != null) {
      var E, $, _, C, T = [], P = !0, v = !1;
      try {
        if (_ = (m = m.call(h)).next, b === 0) {
          if (Object(m) !== m) return;
          P = !1;
        } else for (; !(P = (E = _.call(m)).done) && (T.push(E.value), T.length !== b); P = !0) ;
      } catch (R) {
        v = !0, $ = R;
      } finally {
        try {
          if (!P && m.return != null && (C = m.return(), Object(C) !== C)) return;
        } finally {
          if (v) throw $;
        }
      }
      return T;
    }
  }
  function f(h) {
    if (Array.isArray(h)) return h;
  }
  var p = [].concat(e.default, t.default, r.default, n.default);
  p.forEach(function(h) {
    var b = a(h, 2), m = b[1], E = s(m.superClass), $;
    try {
      for (E.s(); !($ = E.n()).done; ) {
        var _ = $.value, C = s(_), T;
        try {
          var P = function() {
            var R = T.value, I = p.filter(function(U) {
              var k = a(U, 1), B = k[0];
              return B === R;
            })[0];
            if (I)
              for (var S = I[1], A = 0, V = Object.keys(S.props); A < V.length; A++) {
                var L = V[A];
                Object.prototype.hasOwnProperty.call(m.props, L) || (m.props[L] = S.props[L]);
              }
          };
          for (C.s(); !(T = C.n()).done; )
            P();
        } catch (v) {
          C.e(v);
        } finally {
          C.f();
        }
      }
    } catch (v) {
      E.e(v);
    } finally {
      E.f();
    }
  });
  var g = {
    entries: function() {
      return p;
    },
    forEach: function(b) {
      var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, E = s(p), $;
      try {
        for (E.s(); !($ = E.n()).done; ) {
          var _ = a($.value, 2), C = _[0], T = _[1];
          b.call(m, T, C, p);
        }
      } catch (P) {
        E.e(P);
      } finally {
        E.f();
      }
    },
    get: function(b) {
      var m = p.filter(function(E) {
        return E[0] === b;
      })[0];
      return m && m[1];
    },
    has: function(b) {
      return !!g.get(b);
    },
    keys: function() {
      return p.map(function(b) {
        var m = a(b, 1), E = m[0];
        return E;
      });
    },
    values: function() {
      return p.map(function(b) {
        var m = a(b, 2), E = m[1];
        return E;
      });
    }
  };
  return lr.default = (0, o.default)(g, g.entries()), lr;
}
var Wo = {}, sf;
function ER() {
  if (sf) return Wo;
  sf = 1, Object.defineProperty(Wo, "__esModule", {
    value: !0
  }), Wo.default = void 0;
  var e = r(/* @__PURE__ */ fi()), t = r(/* @__PURE__ */ el());
  function r(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function n(C, T) {
    return u(C) || a(C, T) || i(C, T) || o();
  }
  function o() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function i(C, T) {
    if (C) {
      if (typeof C == "string") return s(C, T);
      var P = {}.toString.call(C).slice(8, -1);
      return P === "Object" && C.constructor && (P = C.constructor.name), P === "Map" || P === "Set" ? Array.from(C) : P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P) ? s(C, T) : void 0;
    }
  }
  function s(C, T) {
    (T == null || T > C.length) && (T = C.length);
    for (var P = 0, v = Array(T); P < T; P++) v[P] = C[P];
    return v;
  }
  function a(C, T) {
    var P = C == null ? null : typeof Symbol < "u" && C[Symbol.iterator] || C["@@iterator"];
    if (P != null) {
      var v, R, I, S, A = [], V = !0, L = !1;
      try {
        if (I = (P = P.call(C)).next, T === 0) {
          if (Object(P) !== P) return;
          V = !1;
        } else for (; !(V = (v = I.call(P)).done) && (A.push(v.value), A.length !== T); V = !0) ;
      } catch (U) {
        L = !0, R = U;
      } finally {
        try {
          if (!V && P.return != null && (S = P.return(), Object(S) !== S)) return;
        } finally {
          if (L) throw R;
        }
      }
      return A;
    }
  }
  function u(C) {
    if (Array.isArray(C)) return C;
  }
  for (var l = [], c = t.default.keys(), d = 0; d < c.length; d++) {
    var f = c[d], p = t.default.get(f);
    if (p)
      for (var g = [].concat(p.baseConcepts, p.relatedConcepts), h = function() {
        var T = g[b];
        if (T.module === "HTML") {
          var P = T.concept;
          if (P) {
            var v = l.filter(function(A) {
              return E(A[0], P);
            })[0], R;
            v ? R = v[1] : R = [];
            for (var I = !0, S = 0; S < R.length; S++)
              if (R[S] === f) {
                I = !1;
                break;
              }
            I && R.push(f), v || l.push([P, R]);
          }
        }
      }, b = 0; b < g.length; b++)
        h();
  }
  var m = {
    entries: function() {
      return l;
    },
    forEach: function(T) {
      for (var P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, v = 0, R = l; v < R.length; v++) {
        var I = n(R[v], 2), S = I[0], A = I[1];
        T.call(P, A, S, l);
      }
    },
    get: function(T) {
      var P = l.filter(function(v) {
        return T.name === v[0].name && _(T.attributes, v[0].attributes);
      })[0];
      return P && P[1];
    },
    has: function(T) {
      return !!m.get(T);
    },
    keys: function() {
      return l.map(function(T) {
        var P = n(T, 1), v = P[0];
        return v;
      });
    },
    values: function() {
      return l.map(function(T) {
        var P = n(T, 2), v = P[1];
        return v;
      });
    }
  };
  function E(C, T) {
    return C.name === T.name && $(C.constraints, T.constraints) && _(C.attributes, T.attributes);
  }
  function $(C, T) {
    if (C === void 0 && T !== void 0 || C !== void 0 && T === void 0)
      return !1;
    if (C !== void 0 && T !== void 0) {
      if (C.length !== T.length)
        return !1;
      for (var P = 0; P < C.length; P++)
        if (C[P] !== T[P])
          return !1;
    }
    return !0;
  }
  function _(C, T) {
    if (C === void 0 && T !== void 0 || C !== void 0 && T === void 0)
      return !1;
    if (C !== void 0 && T !== void 0) {
      if (C.length !== T.length)
        return !1;
      for (var P = 0; P < C.length; P++) {
        if (C[P].name !== T[P].name || C[P].value !== T[P].value || C[P].constraints === void 0 && T[P].constraints !== void 0 || C[P].constraints !== void 0 && T[P].constraints === void 0)
          return !1;
        if (C[P].constraints !== void 0 && T[P].constraints !== void 0) {
          if (C[P].constraints.length !== T[P].constraints.length)
            return !1;
          for (var v = 0; v < C[P].constraints.length; v++)
            if (C[P].constraints[v] !== T[P].constraints[v])
              return !1;
        }
      }
    }
    return !0;
  }
  return Wo.default = (0, e.default)(m, m.entries()), Wo;
}
var Jo = {}, af;
function SR() {
  if (af) return Jo;
  af = 1, Object.defineProperty(Jo, "__esModule", {
    value: !0
  }), Jo.default = void 0;
  var e = r(/* @__PURE__ */ fi()), t = r(/* @__PURE__ */ el());
  function r(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function n(_, C) {
    return u(_) || a(_, C) || i(_, C) || o();
  }
  function o() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function i(_, C) {
    if (_) {
      if (typeof _ == "string") return s(_, C);
      var T = {}.toString.call(_).slice(8, -1);
      return T === "Object" && _.constructor && (T = _.constructor.name), T === "Map" || T === "Set" ? Array.from(_) : T === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T) ? s(_, C) : void 0;
    }
  }
  function s(_, C) {
    (C == null || C > _.length) && (C = _.length);
    for (var T = 0, P = Array(C); T < C; T++) P[T] = _[T];
    return P;
  }
  function a(_, C) {
    var T = _ == null ? null : typeof Symbol < "u" && _[Symbol.iterator] || _["@@iterator"];
    if (T != null) {
      var P, v, R, I, S = [], A = !0, V = !1;
      try {
        if (R = (T = T.call(_)).next, C === 0) {
          if (Object(T) !== T) return;
          A = !1;
        } else for (; !(A = (P = R.call(T)).done) && (S.push(P.value), S.length !== C); A = !0) ;
      } catch (L) {
        V = !0, v = L;
      } finally {
        try {
          if (!A && T.return != null && (I = T.return(), Object(I) !== I)) return;
        } finally {
          if (V) throw v;
        }
      }
      return S;
    }
  }
  function u(_) {
    if (Array.isArray(_)) return _;
  }
  for (var l = [], c = t.default.keys(), d = 0; d < c.length; d++) {
    var f = c[d], p = t.default.get(f), g = [];
    if (p) {
      for (var h = [].concat(p.baseConcepts, p.relatedConcepts), b = 0; b < h.length; b++) {
        var m = h[b];
        if (m.module === "HTML") {
          var E = m.concept;
          E != null && g.push(E);
        }
      }
      g.length > 0 && l.push([f, g]);
    }
  }
  var $ = {
    entries: function() {
      return l;
    },
    forEach: function(C) {
      for (var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, P = 0, v = l; P < v.length; P++) {
        var R = n(v[P], 2), I = R[0], S = R[1];
        C.call(T, S, I, l);
      }
    },
    get: function(C) {
      var T = l.filter(function(P) {
        return P[0] === C;
      })[0];
      return T && T[1];
    },
    has: function(C) {
      return !!$.get(C);
    },
    keys: function() {
      return l.map(function(C) {
        var T = n(C, 1), P = T[0];
        return P;
      });
    },
    values: function() {
      return l.map(function(C) {
        var T = n(C, 2), P = T[1];
        return P;
      });
    }
  };
  return Jo.default = (0, e.default)($, $.entries()), Jo;
}
var lf;
function PR() {
  if (lf) return He;
  lf = 1, Object.defineProperty(He, "__esModule", {
    value: !0
  }), He.roles = He.roleElements = He.elementRoles = He.dom = He.aria = void 0;
  var e = i(/* @__PURE__ */ By()), t = i(/* @__PURE__ */ Hy()), r = i(/* @__PURE__ */ el()), n = i(/* @__PURE__ */ ER()), o = i(/* @__PURE__ */ SR());
  function i(s) {
    return s && s.__esModule ? s : { default: s };
  }
  return He.aria = e.default, He.dom = t.default, He.roles = r.default, He.elementRoles = n.default, He.roleElements = o.default, He;
}
var tl = /* @__PURE__ */ PR(), Si = { exports: {} }, uf;
function TR() {
  if (uf) return Si.exports;
  uf = 1;
  var e = String, t = function() {
    return { isColorSupported: !1, reset: e, bold: e, dim: e, italic: e, underline: e, inverse: e, hidden: e, strikethrough: e, black: e, red: e, green: e, yellow: e, blue: e, magenta: e, cyan: e, white: e, gray: e, bgBlack: e, bgRed: e, bgGreen: e, bgYellow: e, bgBlue: e, bgMagenta: e, bgCyan: e, bgWhite: e, blackBright: e, redBright: e, greenBright: e, yellowBright: e, blueBright: e, magentaBright: e, cyanBright: e, whiteBright: e, bgBlackBright: e, bgRedBright: e, bgGreenBright: e, bgYellowBright: e, bgBlueBright: e, bgMagentaBright: e, bgCyanBright: e, bgWhiteBright: e };
  };
  return Si.exports = t(), Si.exports.createColors = t, Si.exports;
}
var _R = /* @__PURE__ */ TR();
const qR = /* @__PURE__ */ as(_R);
var ki = { exports: {} };
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var $R = ki.exports, cf;
function OR() {
  return cf || (cf = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n(r);
    })(typeof lu < "u" ? lu : $R, function(r) {
      if (r.CSS && r.CSS.escape)
        return r.CSS.escape;
      var n = function(o) {
        if (arguments.length == 0)
          throw new TypeError("`CSS.escape` requires an argument.");
        for (var i = String(o), s = i.length, a = -1, u, l = "", c = i.charCodeAt(0); ++a < s; ) {
          if (u = i.charCodeAt(a), u == 0) {
            l += "�";
            continue;
          }
          if (
            // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
            // U+007F, […]
            u >= 1 && u <= 31 || u == 127 || // If the character is the first character and is in the range [0-9]
            // (U+0030 to U+0039), […]
            a == 0 && u >= 48 && u <= 57 || // If the character is the second character and is in the range [0-9]
            // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
            a == 1 && u >= 48 && u <= 57 && c == 45
          ) {
            l += "\\" + u.toString(16) + " ";
            continue;
          }
          if (
            // If the character is the first character and is a `-` (U+002D), and
            // there is no second character, […]
            a == 0 && s == 1 && u == 45
          ) {
            l += "\\" + i.charAt(a);
            continue;
          }
          if (u >= 128 || u == 45 || u == 95 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122) {
            l += i.charAt(a);
            continue;
          }
          l += "\\" + i.charAt(a);
        }
        return l;
      };
      return r.CSS || (r.CSS = {}), r.CSS.escape = n, n;
    });
  })(ki)), ki.exports;
}
var MR = /* @__PURE__ */ OR();
const AR = /* @__PURE__ */ as(MR);
class Lh extends Error {
  constructor(t, r, n, o) {
    super(), Error.captureStackTrace && Error.captureStackTrace(this, n);
    let i = "";
    try {
      i = o.utils.printWithType(
        "Received",
        r,
        o.utils.printReceived
      );
    } catch {
    }
    this.message = [
      o.utils.matcherHint(
        `${o.isNot ? ".not" : ""}.${n.name}`,
        "received",
        ""
      ),
      "",
      // eslint-disable-next-line new-cap
      `${o.utils.RECEIVED_COLOR(
        "received"
      )} value must ${t}.`,
      i
    ].join(`
`);
  }
}
class df extends Lh {
  constructor(...t) {
    super("be an HTMLElement or an SVGElement", ...t);
  }
}
class ff extends Lh {
  constructor(...t) {
    super("be a Node", ...t);
  }
}
function Bh(e, t, ...r) {
  if (!e || !e.ownerDocument || !e.ownerDocument.defaultView)
    throw new t(e, ...r);
}
function IR(e, ...t) {
  Bh(e, ff, ...t);
  const r = e.ownerDocument.defaultView;
  if (!(e instanceof r.Node))
    throw new ff(e, ...t);
}
function ae(e, ...t) {
  Bh(e, df, ...t);
  const r = e.ownerDocument.defaultView;
  if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement))
    throw new df(e, ...t);
}
class NR extends Error {
  constructor(t, r, n) {
    super(), Error.captureStackTrace && Error.captureStackTrace(this, r), this.message = [
      t.message,
      "",
      // eslint-disable-next-line new-cap
      n.utils.RECEIVED_COLOR("Failing css:"),
      // eslint-disable-next-line new-cap
      n.utils.RECEIVED_COLOR(`${t.css}`)
    ].join(`
`);
  }
}
function kR(e, ...t) {
  const r = Wb(`selector { ${e} }`, { silent: !0 }).stylesheet;
  if (r.parsingErrors && r.parsingErrors.length > 0) {
    const { reason: o, line: i } = r.parsingErrors[0];
    throw new NR(
      {
        css: e,
        message: `Syntax error parsing expected css: ${o} on line: ${i}`
      },
      ...t
    );
  }
  return r.rules[0].declarations.filter((o) => o.type === "declaration").reduce(
    (o, { property: i, value: s }) => Object.assign(o, { [i]: s }),
    {}
  );
}
function pf(e, t) {
  return typeof t == "string" ? t : e.utils.stringify(t);
}
function Te(e, t, r, n, o, i) {
  return [
    `${t}
`,
    // eslint-disable-next-line new-cap
    `${r}:
${e.utils.EXPECTED_COLOR(
      pu(pf(e, n), 2)
    )}`,
    // eslint-disable-next-line new-cap
    `${o}:
${e.utils.RECEIVED_COLOR(
      pu(pf(e, i), 2)
    )}`
  ].join(`
`);
}
function jR(e, t) {
  return t instanceof RegExp ? t.test(e) : e.includes(String(t));
}
function ls(e, t) {
  console.warn(
    `Warning: ${e} has been deprecated and will be removed in future updates.`,
    t
  );
}
function us(e) {
  return e.replace(/\s+/g, " ").trim();
}
function Rt(e) {
  return e.tagName && e.tagName.toLowerCase();
}
function DR({ multiple: e, options: t }) {
  const r = [...t].filter((n) => n.selected);
  if (e)
    return [...r].map((n) => n.value);
  if (r.length !== 0)
    return r[0].value;
}
function FR(e) {
  switch (e.type) {
    case "number":
      return e.value === "" ? null : Number(e.value);
    case "checkbox":
      return e.checked;
    default:
      return e.value;
  }
}
const LR = ["meter", "progressbar", "slider", "spinbutton"];
function BR(e) {
  if (LR.includes(e.getAttribute("role")))
    return Number(e.getAttribute("aria-valuenow"));
}
function Hh(e) {
  if (e)
    switch (e.tagName.toLowerCase()) {
      case "input":
        return FR(e);
      case "select":
        return DR(e);
      default:
        return e.value ?? BR(e);
    }
}
function HR(e, { wordConnector: t = ", ", lastWordConnector: r = " and " } = {}) {
  return [e.slice(0, -1).join(t), e[e.length - 1]].join(
    e.length > 1 ? r : ""
  );
}
function rl(e, t) {
  return Array.isArray(e) && Array.isArray(t) ? [...new Set(e)].every((r) => new Set(t).has(r)) : e === t;
}
function wa(e, t) {
  return ls(
    "toBeInTheDOM",
    "Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container."
  ), e && ae(e, wa, this), t && ae(t, wa, this), {
    pass: t ? t.contains(e) : !!e,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeInTheDOM`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(
        e && e.cloneNode(!1)
      )}`
    ].join(`
`)
  };
}
function Vh(e) {
  (e !== null || !this.isNot) && ae(e, Vh, this);
  const t = e === null ? !1 : e.ownerDocument === e.getRootNode({ composed: !0 }), r = () => `expected document not to contain element, found ${this.utils.stringify(
    e.cloneNode(!0)
  )} instead`, n = () => "element could not be found in the document";
  return {
    pass: t,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeInTheDocument`,
        "element",
        ""
      ),
      "",
      // eslint-disable-next-line new-cap
      this.utils.RECEIVED_COLOR(this.isNot ? r() : n())
    ].join(`
`)
  };
}
function Uh(e) {
  return ls(
    "toBeEmpty",
    "Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM."
  ), ae(e, Uh, this), {
    pass: e.innerHTML === "",
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeEmpty`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(e.innerHTML)}`
    ].join(`
`)
  };
}
function zh(e) {
  return ae(e, zh, this), {
    pass: VR(e),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBeEmptyDOMElement`,
        "element",
        ""
      ),
      "",
      "Received:",
      `  ${this.utils.printReceived(e.innerHTML)}`
    ].join(`
`)
  };
}
function VR(e) {
  return [...e.childNodes].filter((r) => r.nodeType !== 8).length === 0;
}
function Ra(e, t) {
  return ae(e, Ra, this), t !== null && ae(t, Ra, this), {
    pass: e.contains(t),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toContainElement`,
        "element",
        "element"
      ),
      "",
      // eslint-disable-next-line new-cap
      this.utils.RECEIVED_COLOR(`${this.utils.stringify(
        e.cloneNode(!1)
      )} ${this.isNot ? "contains:" : "does not contain:"} ${this.utils.stringify(t && t.cloneNode(!1))}
        `)
    ].join(`
`)
  };
}
function UR(e, t) {
  const r = e.ownerDocument.createElement("div");
  return r.innerHTML = t, r.innerHTML;
}
function Wh(e, t) {
  if (ae(e, Wh, this), typeof t != "string")
    throw new Error(`.toContainHTML() expects a string value, got ${t}`);
  return {
    pass: e.outerHTML.includes(UR(e, t)),
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toContainHTML`,
        "element",
        ""
      ),
      "Expected:",
      // eslint-disable-next-line new-cap
      `  ${this.utils.EXPECTED_COLOR(t)}`,
      "Received:",
      `  ${this.utils.printReceived(e.cloneNode(!0))}`
    ].join(`
`)
  };
}
function Jh(e, t, r = { normalizeWhitespace: !0 }) {
  IR(e, Jh, this);
  const n = r.normalizeWhitespace ? us(e.textContent) : e.textContent.replace(/\u00a0/g, " "), o = n !== "" && t === "";
  return {
    pass: !o && jR(n, t),
    message: () => {
      const i = this.isNot ? "not to" : "to";
      return Te(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveTextContent`,
          "element",
          ""
        ),
        o ? "Checking with empty string will always match, use .toBeEmptyDOMElement() instead" : `Expected element ${i} have text content`,
        t,
        "Received",
        n
      );
    }
  };
}
function Ca(e, t) {
  ae(e, Ca, this);
  const r = jy(e), n = arguments.length === 1;
  let o = !1;
  return n ? o = r !== "" : o = t instanceof RegExp ? t.test(r) : this.equals(
    r,
    t
  ), {
    pass: o,
    message: () => {
      const i = this.isNot ? "not to" : "to";
      return Te(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${Ca.name}`,
          "element",
          ""
        ),
        `Expected element ${i} have accessible description`,
        t,
        "Received",
        r
      );
    }
  };
}
const Xo = "aria-invalid", zR = ["false"];
function Xh(e, t) {
  var l;
  ae(e, Xh, this);
  const r = this.isNot ? "not to" : "to", n = this.isNot ? ".not.toHaveAccessibleErrorMessage" : ".toHaveAccessibleErrorMessage", o = e.getAttribute("aria-errormessage");
  if (!!o && /\s+/.test(o))
    return {
      pass: !1,
      message: () => Te(
        this,
        this.utils.matcherHint(n, "element"),
        "Expected element's `aria-errormessage` attribute to be empty or a single, valid ID",
        "",
        "Received",
        `aria-errormessage="${o}"`
      )
    };
  const s = e.getAttribute(Xo);
  if (!e.hasAttribute(Xo) || zR.includes(s))
    return {
      pass: !1,
      message: () => Te(
        this,
        this.utils.matcherHint(n, "element"),
        "Expected element to be marked as invalid with attribute",
        `${Xo}="${String(!0)}"`,
        "Received",
        e.hasAttribute("aria-invalid") ? `${Xo}="${e.getAttribute(Xo)}` : null
      )
    };
  const u = us(
    ((l = e.ownerDocument.getElementById(o)) == null ? void 0 : l.textContent) ?? ""
  );
  return {
    pass: t === void 0 ? !!u : t instanceof RegExp ? t.test(u) : this.equals(u, t),
    message: () => Te(
      this,
      this.utils.matcherHint(n, "element"),
      `Expected element ${r} have accessible error message`,
      t ?? "",
      "Received",
      u
    )
  };
}
const WR = GR(tl.elementRoles);
function xa(e, t) {
  ae(e, xa, this);
  const r = JR(e);
  return {
    pass: r.some((o) => o === t),
    message: () => {
      const o = this.isNot ? "not to" : "to";
      return Te(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${xa.name}`,
          "element",
          ""
        ),
        `Expected element ${o} have role`,
        t,
        "Received",
        r.join(", ")
      );
    }
  };
}
function JR(e) {
  return e.hasAttribute("role") ? e.getAttribute("role").split(" ").filter(Boolean) : XR(e);
}
function XR(e) {
  for (const { match: t, roles: r } of WR)
    if (t(e))
      return [...r];
  return [];
}
function GR(e) {
  function t({ name: s, attributes: a }) {
    return `${s}${a.map(({ name: u, value: l, constraints: c = [] }) => c.indexOf("undefined") !== -1 ? `:not([${u}])` : l ? `[${u}="${l}"]` : `[${u}]`).join("")}`;
  }
  function r({ attributes: s = [] }) {
    return s.length;
  }
  function n({ specificity: s }, { specificity: a }) {
    return a - s;
  }
  function o(s) {
    let { attributes: a = [] } = s;
    const u = a.findIndex(
      (c) => c.value && c.name === "type" && c.value === "text"
    );
    u >= 0 && (a = [
      ...a.slice(0, u),
      ...a.slice(u + 1)
    ]);
    const l = t({ ...s, attributes: a });
    return (c) => u >= 0 && c.type !== "text" ? !1 : c.matches(l);
  }
  let i = [];
  for (const [s, a] of e.entries())
    i = [
      ...i,
      {
        match: o(s),
        roles: Array.from(a),
        specificity: r(s)
      }
    ];
  return i.sort(n);
}
function Ea(e, t) {
  ae(e, Ea, this);
  const r = Fy(e), n = arguments.length === 1;
  let o = !1;
  return n ? o = r !== "" : o = t instanceof RegExp ? t.test(r) : this.equals(r, t), {
    pass: o,
    message: () => {
      const i = this.isNot ? "not to" : "to";
      return Te(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.${Ea.name}`,
          "element",
          ""
        ),
        `Expected element ${i} have accessible name`,
        t,
        "Received",
        r
      );
    }
  };
}
function hf(e, t, r) {
  return r === void 0 ? t : `${t}=${e(r)}`;
}
function KR(e, t, r) {
  return r === void 0 ? `element.hasAttribute(${e(t)})` : `element.getAttribute(${e(t)}) === ${e(r)}`;
}
function Gh(e, t, r) {
  ae(e, Gh, this);
  const n = r !== void 0, o = e.hasAttribute(t), i = e.getAttribute(t);
  return {
    pass: n ? o && this.equals(i, r) : o,
    message: () => {
      const s = this.isNot ? "not to" : "to", a = o ? hf(this.utils.stringify, t, i) : null, u = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveAttribute`,
        "element",
        this.utils.printExpected(t),
        {
          secondArgument: n ? this.utils.printExpected(r) : void 0,
          comment: KR(
            this.utils.stringify,
            t,
            r
          )
        }
      );
      return Te(
        this,
        u,
        `Expected the element ${s} have attribute`,
        hf(this.utils.stringify, t, r),
        "Received",
        a
      );
    }
  };
}
function YR(e) {
  const t = e.pop();
  let r, n;
  return typeof t == "object" && !(t instanceof RegExp) ? (r = e, n = t) : (r = e.concat(t), n = { exact: !1 }), { expectedClassNames: r, options: n };
}
function mf(e) {
  return e ? e.split(/\s+/).filter((t) => t.length > 0) : [];
}
function gf(e, t) {
  return e.every(
    (r) => typeof r == "string" ? t.includes(r) : t.some((n) => r.test(n))
  );
}
function Kh(e, ...t) {
  ae(e, Kh, this);
  const { expectedClassNames: r, options: n } = YR(t), o = mf(e.getAttribute("class")), i = r.reduce(
    (a, u) => a.concat(
      typeof u == "string" || !u ? mf(u) : u
    ),
    []
  ), s = i.some((a) => a instanceof RegExp);
  if (n.exact && s)
    throw new Error("Exact option does not support RegExp expected class names");
  return n.exact ? {
    pass: gf(i, o) && i.length === o.length,
    message: () => {
      const a = this.isNot ? "not to" : "to";
      return Te(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveClass`,
          "element",
          this.utils.printExpected(i.join(" "))
        ),
        `Expected the element ${a} have EXACTLY defined classes`,
        i.join(" "),
        "Received",
        o.join(" ")
      );
    }
  } : i.length > 0 ? {
    pass: gf(i, o),
    message: () => {
      const a = this.isNot ? "not to" : "to";
      return Te(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveClass`,
          "element",
          this.utils.printExpected(i.join(" "))
        ),
        `Expected the element ${a} have class`,
        i.join(" "),
        "Received",
        o.join(" ")
      );
    }
  } : {
    pass: this.isNot ? o.length > 0 : !1,
    message: () => this.isNot ? Te(
      this,
      this.utils.matcherHint(".not.toHaveClass", "element", ""),
      "Expected the element to have classes",
      "(none)",
      "Received",
      o.join(" ")
    ) : [
      this.utils.matcherHint(".toHaveClass", "element"),
      "At least one expected class must be provided."
    ].join(`
`)
  };
}
function ZR(e, t) {
  const r = {}, n = e.createElement("div");
  return Object.keys(t).forEach((o) => {
    n.style[o] = t[o], r[o] = n.style[o];
  }), r;
}
function QR(e, t) {
  return !!Object.keys(e).length && Object.entries(e).every(([r, n]) => {
    const o = r.startsWith("--"), i = [r];
    return o || i.push(r.toLowerCase()), i.some(
      (s) => t[s] === n || t.getPropertyValue(s) === n
    );
  });
}
function bf(e) {
  return Object.keys(e).sort().map((t) => `${t}: ${e[t]};`).join(`
`);
}
function eC(e, t, r) {
  const n = Array.from(r).filter((i) => t[i] !== void 0).reduce(
    (i, s) => Object.assign(i, { [s]: r.getPropertyValue(s) }),
    {}
  );
  return e(bf(t), bf(n)).replace(`${qR.red("+ Received")}
`, "");
}
function Sa(e, t) {
  ae(e, Sa, this);
  const r = typeof t == "object" ? t : kR(t, Sa, this), { getComputedStyle: n } = e.ownerDocument.defaultView, o = ZR(e.ownerDocument, r), i = n(e);
  return {
    pass: QR(o, i),
    message: () => {
      const s = `${this.isNot ? ".not" : ""}.toHaveStyle`;
      return [
        this.utils.matcherHint(s, "element", ""),
        eC(this.utils.diff, o, i)
      ].join(`

`);
    }
  };
}
function Yh(e) {
  return ae(e, Yh, this), {
    pass: e.ownerDocument.activeElement === e,
    message: () => [
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveFocus`,
        "element",
        ""
      ),
      "",
      ...this.isNot ? [
        "Received element is focused:",
        `  ${this.utils.printReceived(e)}`
      ] : [
        "Expected element with focus:",
        `  ${this.utils.printExpected(e)}`,
        "Received element with focus:",
        `  ${this.utils.printReceived(
          e.ownerDocument.activeElement
        )}`
      ]
    ].join(`
`)
  };
}
function tC(e) {
  const t = [...new Set(e.map((r) => r.type))];
  if (t.length !== 1)
    throw new Error(
      "Multiple form elements with the same name must be of the same type"
    );
  switch (t[0]) {
    case "radio": {
      const r = e.find((n) => n.checked);
      return r ? r.value : void 0;
    }
    case "checkbox":
      return e.filter((r) => r.checked).map((r) => r.value);
    default:
      return e.map((r) => r.value);
  }
}
function rC(e, t) {
  const r = [...e.querySelectorAll(`[name="${AR(t)}"]`)];
  if (r.length !== 0)
    switch (r.length) {
      case 1:
        return Hh(r[0]);
      default:
        return tC(r);
    }
}
function nC(e) {
  return /\[\]$/.test(e) ? e.slice(0, -2) : e;
}
function oC(e) {
  return Array.from(e.elements).map((r) => r.name).reduce(
    (r, n) => ({
      ...r,
      [nC(n)]: rC(e, n)
    }),
    {}
  );
}
function Zh(e, t) {
  if (ae(e, Zh, this), !e.elements)
    throw new Error("toHaveFormValues must be called on a form or a fieldset");
  const r = oC(e);
  return {
    pass: Object.entries(t).every(
      ([n, o]) => rl(r[n], o)
    ),
    message: () => {
      const n = this.isNot ? "not to" : "to", o = `${this.isNot ? ".not" : ""}.toHaveFormValues`, i = Object.keys(r).filter((s) => t.hasOwnProperty(s)).reduce((s, a) => ({ ...s, [a]: r[a] }), {});
      return [
        this.utils.matcherHint(o, "element", ""),
        `Expected the element ${n} have form values`,
        this.utils.diff(t, i)
      ].join(`

`);
    }
  };
}
function iC(e) {
  const { getComputedStyle: t } = e.ownerDocument.defaultView, { display: r, visibility: n, opacity: o } = t(e);
  return r !== "none" && n !== "hidden" && n !== "collapse" && o !== "0" && o !== 0;
}
function sC(e, t) {
  let r;
  return t ? r = e.nodeName === "DETAILS" && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0 : r = e.nodeName === "DETAILS" ? e.hasAttribute("open") : !0, !e.hasAttribute("hidden") && r;
}
function Qh(e, t) {
  return iC(e) && sC(e, t) && (!e.parentElement || Qh(e.parentElement, e));
}
function em(e) {
  ae(e, em, this);
  const t = e.ownerDocument === e.getRootNode({ composed: !0 }), r = t && Qh(e);
  return {
    pass: r,
    message: () => {
      const n = r ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeVisible`,
          "element",
          ""
        ),
        "",
        `Received element ${n} visible${t ? "" : " (element is not in the document)"}:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const aC = [
  "fieldset",
  "input",
  "select",
  "optgroup",
  "option",
  "button",
  "textarea"
];
function lC(e, t) {
  return Rt(e) === "legend" && Rt(t) === "fieldset" && e.isSameNode(
    Array.from(t.children).find((r) => Rt(r) === "legend")
  );
}
function uC(e, t) {
  return rm(t) && !lC(e, t);
}
function cC(e) {
  return e.includes("-");
}
function tm(e) {
  const t = Rt(e);
  return aC.includes(t) || cC(t);
}
function rm(e) {
  return tm(e) && e.hasAttribute("disabled");
}
function nm(e) {
  const t = e.parentElement;
  return !!t && (uC(e, t) || nm(t));
}
function om(e) {
  return tm(e) && (rm(e) || nm(e));
}
function im(e) {
  ae(e, im, this);
  const t = om(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeDisabled`,
          "element",
          ""
        ),
        "",
        `Received element ${r} disabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function sm(e) {
  ae(e, sm, this);
  const t = !om(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeEnabled`,
          "element",
          ""
        ),
        "",
        `Received element ${r} enabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const dC = ["select", "textarea"], fC = ["input", "select", "textarea"], pC = [
  "color",
  "hidden",
  "range",
  "submit",
  "image",
  "reset"
], hC = [
  "checkbox",
  "combobox",
  "gridcell",
  "listbox",
  "radiogroup",
  "spinbutton",
  "textbox",
  "tree"
];
function mC(e) {
  return dC.includes(Rt(e)) && e.hasAttribute("required");
}
function gC(e) {
  return Rt(e) === "input" && e.hasAttribute("required") && (e.hasAttribute("type") && !pC.includes(e.getAttribute("type")) || !e.hasAttribute("type"));
}
function bC(e) {
  return e.hasAttribute("aria-required") && e.getAttribute("aria-required") === "true" && (fC.includes(Rt(e)) || e.hasAttribute("role") && hC.includes(e.getAttribute("role")));
}
function am(e) {
  ae(e, am, this);
  const t = mC(e) || gC(e) || bC(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeRequired`,
          "element",
          ""
        ),
        "",
        `Received element ${r} required:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
const yC = ["form", "input", "select", "textarea"];
function vC(e) {
  return e.hasAttribute("aria-invalid") && e.getAttribute("aria-invalid") !== "false";
}
function wC(e) {
  return yC.includes(Rt(e));
}
function lm(e) {
  const t = vC(e);
  return wC(e) ? t || !e.checkValidity() : t;
}
function um(e) {
  ae(e, um, this);
  const t = lm(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeInvalid`,
          "element",
          ""
        ),
        "",
        `Received element ${r} currently invalid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function cm(e) {
  ae(e, cm, this);
  const t = !lm(e);
  return {
    pass: t,
    message: () => {
      const r = t ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeValid`,
          "element",
          ""
        ),
        "",
        `Received element ${r} currently valid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function dm(e, t) {
  if (ae(e, dm, this), e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type))
    throw new Error(
      "input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead"
    );
  const r = Hh(e), n = t !== void 0;
  let o = t, i = r;
  return t == r && t !== r && (o = `${t} (${typeof t})`, i = `${r} (${typeof r})`), {
    pass: n ? rl(r, t) : !!r,
    message: () => {
      const s = this.isNot ? "not to" : "to", a = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveValue`,
        "element",
        t
      );
      return Te(
        this,
        a,
        `Expected the element ${s} have value`,
        n ? o : "(any)",
        "Received",
        i
      );
    }
  };
}
function fm(e, t) {
  ae(e, fm, this);
  const r = e.tagName.toLowerCase();
  if (!["select", "input", "textarea"].includes(r))
    throw new Error(
      ".toHaveDisplayValue() currently supports only input, textarea or select elements, try with another matcher instead."
    );
  if (r === "input" && ["radio", "checkbox"].includes(e.type))
    throw new Error(
      `.toHaveDisplayValue() currently does not support input[type="${e.type}"], try with another matcher instead.`
    );
  const n = RC(r, e), o = CC(t), i = o.filter(
    (u) => n.some(
      (l) => u instanceof RegExp ? u.test(l) : this.equals(l, String(u))
    )
  ).length, s = i === n.length, a = i === o.length;
  return {
    pass: s && a,
    message: () => Te(
      this,
      this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveDisplayValue`,
        "element",
        ""
      ),
      `Expected element ${this.isNot ? "not " : ""}to have display value`,
      t,
      "Received",
      n
    )
  };
}
function RC(e, t) {
  return e === "select" ? Array.from(t).filter((r) => r.selected).map((r) => r.textContent) : [t.value];
}
function CC(e) {
  return e instanceof Array ? e : [e];
}
function pm(e) {
  ae(e, pm, this);
  const t = () => e.tagName.toLowerCase() === "input" && ["checkbox", "radio"].includes(e.type), r = () => hm(e.getAttribute("role")) && ["true", "false"].includes(e.getAttribute("aria-checked"));
  if (!t() && !r())
    return {
      pass: !1,
      message: () => `only inputs with type="checkbox" or type="radio" or elements with ${xC()} and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead`
    };
  const n = () => t() ? e.checked : e.getAttribute("aria-checked") === "true";
  return {
    pass: n(),
    message: () => {
      const o = n() ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBeChecked`,
          "element",
          ""
        ),
        "",
        `Received element ${o} checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function xC() {
  return HR(
    EC().map((e) => `role="${e}"`),
    { lastWordConnector: " or " }
  );
}
function EC() {
  return tl.roles.keys().filter(hm);
}
function hm(e) {
  var t;
  return ((t = tl.roles.get(e)) == null ? void 0 : t.props["aria-checked"]) !== void 0;
}
function mm(e) {
  ae(e, mm, this);
  const t = () => e.tagName.toLowerCase() === "input" && e.type === "checkbox", r = () => e.getAttribute("role") === "checkbox";
  if (!t() && !r())
    return {
      pass: !1,
      message: () => 'only inputs with type="checkbox" or elements with role="checkbox" and a valid aria-checked attribute can be used with .toBePartiallyChecked(). Use .toHaveValue() instead'
    };
  const n = () => {
    const o = e.getAttribute("aria-checked") === "mixed";
    return t() && e.indeterminate || o;
  };
  return {
    pass: n(),
    message: () => {
      const o = n() ? "is" : "is not";
      return [
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toBePartiallyChecked`,
          "element",
          ""
        ),
        "",
        `Received element ${o} partially checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`
      ].join(`
`);
    }
  };
}
function gm(e, t) {
  ls(
    "toHaveDescription",
    "Please use toHaveAccessibleDescription."
  ), ae(e, gm, this);
  const r = t !== void 0, o = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
  let i = "";
  if (o.length > 0) {
    const s = e.ownerDocument, a = o.map((u) => s.getElementById(u)).filter(Boolean);
    i = us(a.map((u) => u.textContent).join(" "));
  }
  return {
    pass: r ? t instanceof RegExp ? t.test(i) : this.equals(i, t) : !!i,
    message: () => {
      const s = this.isNot ? "not to" : "to";
      return Te(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveDescription`,
          "element",
          ""
        ),
        `Expected the element ${s} have description`,
        this.utils.printExpected(t),
        "Received",
        this.utils.printReceived(i)
      );
    }
  };
}
function bm(e, t) {
  if (ls("toHaveErrorMessage", "Please use toHaveAccessibleErrorMessage."), ae(e, bm, this), !e.hasAttribute("aria-invalid") || e.getAttribute("aria-invalid") === "false") {
    const s = this.isNot ? ".not" : "";
    return {
      pass: !1,
      message: () => Te(
        this,
        this.utils.matcherHint(`${s}.toHaveErrorMessage`, "element", ""),
        "Expected the element to have invalid state indicated by",
        'aria-invalid="true"',
        "Received",
        e.hasAttribute("aria-invalid") ? `aria-invalid="${e.getAttribute("aria-invalid")}"` : this.utils.printReceived("")
      )
    };
  }
  const r = t !== void 0, o = (e.getAttribute("aria-errormessage") || "").split(/\s+/).filter(Boolean);
  let i = "";
  if (o.length > 0) {
    const s = e.ownerDocument, a = o.map((u) => s.getElementById(u)).filter(Boolean);
    i = us(
      a.map((u) => u.textContent).join(" ")
    );
  }
  return {
    pass: r ? t instanceof RegExp ? t.test(i) : this.equals(i, t) : !!i,
    message: () => {
      const s = this.isNot ? "not to" : "to";
      return Te(
        this,
        this.utils.matcherHint(
          `${this.isNot ? ".not" : ""}.toHaveErrorMessage`,
          "element",
          ""
        ),
        `Expected the element ${s} have error message`,
        this.utils.printExpected(t),
        "Received",
        this.utils.printReceived(i)
      );
    }
  };
}
function SC(e) {
  const t = e.ownerDocument.getSelection();
  if (["input", "textarea"].includes(e.tagName.toLowerCase()))
    return ["radio", "checkbox"].includes(e.type) ? "" : e.value.toString().substring(e.selectionStart, e.selectionEnd);
  if (t.anchorNode === null || t.focusNode === null)
    return "";
  const r = t.getRangeAt(0), n = e.ownerDocument.createRange();
  if (t.containsNode(e, !1))
    n.selectNodeContents(e), t.removeAllRanges(), t.addRange(n);
  else if (!(e.contains(t.anchorNode) && e.contains(t.focusNode))) {
    const i = e === r.startContainer || e.contains(r.startContainer), s = e === r.endContainer || e.contains(r.endContainer);
    t.removeAllRanges(), (i || s) && (n.selectNodeContents(e), i && n.setStart(
      r.startContainer,
      r.startOffset
    ), s && n.setEnd(
      r.endContainer,
      r.endOffset
    ), t.addRange(n));
  }
  const o = t.toString();
  return t.removeAllRanges(), t.addRange(r), o;
}
function ym(e, t) {
  ae(e, ym, this);
  const r = t !== void 0;
  if (r && typeof t != "string")
    throw new Error("expected selection must be a string or undefined");
  const n = SC(e);
  return {
    pass: r ? rl(n, t) : !!n,
    message: () => {
      const o = this.isNot ? "not to" : "to", i = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toHaveSelection`,
        "element",
        t
      );
      return Te(
        this,
        i,
        `Expected the element ${o} have selection`,
        r ? t : "(any)",
        "Received",
        n
      );
    }
  };
}
function vm(e) {
  ae(e, vm, this);
  const t = (e.getAttribute("role") || "").split(" ").map((s) => s.trim()), r = e.tagName.toLowerCase() === "button" || e.tagName.toLowerCase() === "input" && e.type === "button" || t.includes("button"), n = e.getAttribute("aria-pressed");
  return !r || !(n === "true" || n === "false") ? {
    pass: !1,
    message: () => 'Only button or input with type="button" or element with role="button" and a valid aria-pressed attribute can be used with .toBePressed()'
  } : {
    pass: r && n === "true",
    message: () => {
      const s = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBePressed`,
        "element",
        ""
      );
      return Te(
        this,
        s,
        "Expected element to have",
        `aria-pressed="${this.isNot ? "false" : "true"}"`,
        "Received",
        `aria-pressed="${n}"`
      );
    }
  };
}
function wm(e) {
  ae(e, wm, this);
  const t = (e.getAttribute("role") || "").split(" ").map((s) => s.trim()), r = e.tagName.toLowerCase() === "button" || e.tagName.toLowerCase() === "input" && e.type === "button" || t.includes("button"), n = e.getAttribute("aria-pressed");
  return !r || !(n === "true" || n === "false" || n === "mixed") ? {
    pass: !1,
    message: () => 'Only button or input with type="button" or element with role="button" and a valid aria-pressed attribute can be used with .toBePartiallyPressed()'
  } : {
    pass: r && n === "mixed",
    message: () => {
      const s = this.isNot ? "not to" : "to", a = this.utils.matcherHint(
        `${this.isNot ? ".not" : ""}.toBePartiallyPressed`,
        "element",
        ""
      );
      return Te(
        this,
        a,
        `Expected element ${s} have`,
        'aria-pressed="mixed"',
        "Received",
        `aria-pressed="${n}"`
      );
    }
  };
}
const PC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  toBeChecked: pm,
  toBeDisabled: im,
  toBeEmpty: Uh,
  toBeEmptyDOMElement: zh,
  toBeEnabled: sm,
  toBeInTheDOM: wa,
  toBeInTheDocument: Vh,
  toBeInvalid: um,
  toBePartiallyChecked: mm,
  toBePartiallyPressed: wm,
  toBePressed: vm,
  toBeRequired: am,
  toBeValid: cm,
  toBeVisible: em,
  toContainElement: Ra,
  toContainHTML: Wh,
  toHaveAccessibleDescription: Ca,
  toHaveAccessibleErrorMessage: Xh,
  toHaveAccessibleName: Ea,
  toHaveAttribute: Gh,
  toHaveClass: Kh,
  toHaveDescription: gm,
  toHaveDisplayValue: fm,
  toHaveErrorMessage: bm,
  toHaveFocus: Yh,
  toHaveFormValues: Zh,
  toHaveRole: xa,
  toHaveSelection: ym,
  toHaveStyle: Sa,
  toHaveTextContent: Jh,
  toHaveValue: dm
}, Symbol.toStringTag, { value: "Module" }));
var TC = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}, _C = Object.entries(TC);
function nl(e) {
  return String(e);
}
nl.open = "";
nl.close = "";
function qC(e = !1) {
  let t = typeof process < "u" ? process : void 0, r = (t == null ? void 0 : t.env) || {}, n = (t == null ? void 0 : t.argv) || [];
  return !("NO_COLOR" in r || n.includes("--no-color")) && ("FORCE_COLOR" in r || n.includes("--color") || (t == null ? void 0 : t.platform) === "win32" || e && r.TERM !== "dumb" || "CI" in r) || typeof window < "u" && !!window.chrome;
}
function $C(e = !1) {
  let t = qC(e), r = (s, a, u, l) => {
    let c = "", d = 0;
    do
      c += s.substring(d, l) + u, d = l + a.length, l = s.indexOf(a, d);
    while (~l);
    return c + s.substring(d);
  }, n = (s, a, u = s) => {
    let l = (c) => {
      let d = String(c), f = d.indexOf(a, s.length);
      return ~f ? s + r(d, a, u, f) + a : s + d + a;
    };
    return l.open = s, l.close = a, l;
  }, o = {
    isColorSupported: t
  }, i = (s) => `\x1B[${s}m`;
  for (let [s, a] of _C)
    o[s] = t ? n(
      i(a[0]),
      i(a[1]),
      a[2]
    ) : nl;
  return o;
}
var OC = $C();
function Rm(e, t) {
  return t.forEach(function(r) {
    r && typeof r != "string" && !Array.isArray(r) && Object.keys(r).forEach(function(n) {
      if (n !== "default" && !(n in e)) {
        var o = Object.getOwnPropertyDescriptor(r, n);
        Object.defineProperty(e, n, o.get ? o : {
          enumerable: !0,
          get: function() {
            return r[n];
          }
        });
      }
    });
  }), Object.freeze(e);
}
function MC(e, t) {
  const r = Object.keys(e), n = t === null ? r : r.sort(t);
  if (Object.getOwnPropertySymbols)
    for (const o of Object.getOwnPropertySymbols(e))
      Object.getOwnPropertyDescriptor(e, o).enumerable && n.push(o);
  return n;
}
function pi(e, t, r, n, o, i, s = ": ") {
  let a = "", u = 0, l = e.next();
  if (!l.done) {
    a += t.spacingOuter;
    const c = r + t.indent;
    for (; !l.done; ) {
      if (a += c, u++ === t.maxWidth) {
        a += "…";
        break;
      }
      const d = i(l.value[0], t, c, n, o), f = i(l.value[1], t, c, n, o);
      a += d + s + f, l = e.next(), l.done ? t.min || (a += ",") : a += `,${t.spacingInner}`;
    }
    a += t.spacingOuter + r;
  }
  return a;
}
function ol(e, t, r, n, o, i) {
  let s = "", a = 0, u = e.next();
  if (!u.done) {
    s += t.spacingOuter;
    const l = r + t.indent;
    for (; !u.done; ) {
      if (s += l, a++ === t.maxWidth) {
        s += "…";
        break;
      }
      s += i(u.value, t, l, n, o), u = e.next(), u.done ? t.min || (s += ",") : s += `,${t.spacingInner}`;
    }
    s += t.spacingOuter + r;
  }
  return s;
}
function Ji(e, t, r, n, o, i) {
  let s = "";
  e = e instanceof ArrayBuffer ? new DataView(e) : e;
  const a = (l) => l instanceof DataView, u = a(e) ? e.byteLength : e.length;
  if (u > 0) {
    s += t.spacingOuter;
    const l = r + t.indent;
    for (let c = 0; c < u; c++) {
      if (s += l, c === t.maxWidth) {
        s += "…";
        break;
      }
      (a(e) || c in e) && (s += i(a(e) ? e.getInt8(c) : e[c], t, l, n, o)), c < u - 1 ? s += `,${t.spacingInner}` : t.min || (s += ",");
    }
    s += t.spacingOuter + r;
  }
  return s;
}
function il(e, t, r, n, o, i) {
  let s = "";
  const a = MC(e, t.compareKeys);
  if (a.length > 0) {
    s += t.spacingOuter;
    const u = r + t.indent;
    for (let l = 0; l < a.length; l++) {
      const c = a[l], d = i(c, t, u, n, o), f = i(e[c], t, u, n, o);
      s += `${u + d}: ${f}`, l < a.length - 1 ? s += `,${t.spacingInner}` : t.min || (s += ",");
    }
    s += t.spacingOuter + r;
  }
  return s;
}
const AC = typeof Symbol == "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 1267621, Pi = " ", IC = (e, t, r, n, o, i) => {
  const s = e.toString();
  if (s === "ArrayContaining" || s === "ArrayNotContaining")
    return ++n > t.maxDepth ? `[${s}]` : `${s + Pi}[${Ji(e.sample, t, r, n, o, i)}]`;
  if (s === "ObjectContaining" || s === "ObjectNotContaining")
    return ++n > t.maxDepth ? `[${s}]` : `${s + Pi}{${il(e.sample, t, r, n, o, i)}}`;
  if (s === "StringMatching" || s === "StringNotMatching" || s === "StringContaining" || s === "StringNotContaining")
    return s + Pi + i(e.sample, t, r, n, o);
  if (typeof e.toAsymmetricMatcher != "function")
    throw new TypeError(`Asymmetric matcher ${e.constructor.name} does not implement toAsymmetricMatcher()`);
  return e.toAsymmetricMatcher();
}, NC = (e) => e && e.$$typeof === AC, kC = {
  serialize: IC,
  test: NC
}, jC = " ", Cm = /* @__PURE__ */ new Set(["DOMStringMap", "NamedNodeMap"]), DC = /^(?:HTML\w*Collection|NodeList)$/;
function FC(e) {
  return Cm.has(e) || DC.test(e);
}
const LC = (e) => e && e.constructor && !!e.constructor.name && FC(e.constructor.name);
function BC(e) {
  return e.constructor.name === "NamedNodeMap";
}
const HC = (e, t, r, n, o, i) => {
  const s = e.constructor.name;
  return ++n > t.maxDepth ? `[${s}]` : (t.min ? "" : s + jC) + (Cm.has(s) ? `{${il(BC(e) ? [...e].reduce((a, u) => (a[u.name] = u.value, a), {}) : { ...e }, t, r, n, o, i)}}` : `[${Ji([...e], t, r, n, o, i)}]`);
}, VC = {
  serialize: HC,
  test: LC
};
function xm(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function sl(e, t, r, n, o, i, s) {
  const a = n + r.indent, u = r.colors;
  return e.map((l) => {
    const c = t[l];
    let d = s(c, r, a, o, i);
    return typeof c != "string" && (d.includes(`
`) && (d = r.spacingOuter + a + d + r.spacingOuter + n), d = `{${d}}`), `${r.spacingInner + n + u.prop.open + l + u.prop.close}=${u.value.open}${d}${u.value.close}`;
  }).join("");
}
function al(e, t, r, n, o, i) {
  return e.map((s) => t.spacingOuter + r + (typeof s == "string" ? Em(s, t) : i(s, t, r, n, o))).join("");
}
function Em(e, t) {
  const r = t.colors.content;
  return r.open + xm(e) + r.close;
}
function UC(e, t) {
  const r = t.colors.comment;
  return `${r.open}<!--${xm(e)}-->${r.close}`;
}
function ll(e, t, r, n, o) {
  const i = n.colors.tag;
  return `${i.open}<${e}${t && i.close + t + n.spacingOuter + o + i.open}${r ? `>${i.close}${r}${n.spacingOuter}${o}${i.open}</${e}` : `${t && !n.min ? "" : " "}/`}>${i.close}`;
}
function ul(e, t) {
  const r = t.colors.tag;
  return `${r.open}<${e}${r.close} …${r.open} />${r.close}`;
}
const zC = 1, Sm = 3, Pm = 8, Tm = 11, WC = /^(?:(?:HTML|SVG)\w*)?Element$/;
function JC(e) {
  try {
    return typeof e.hasAttribute == "function" && e.hasAttribute("is");
  } catch {
    return !1;
  }
}
function XC(e) {
  const t = e.constructor.name, { nodeType: r, tagName: n } = e, o = typeof n == "string" && n.includes("-") || JC(e);
  return r === zC && (WC.test(t) || o) || r === Sm && t === "Text" || r === Pm && t === "Comment" || r === Tm && t === "DocumentFragment";
}
const GC = (e) => {
  var t;
  return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && XC(e);
};
function KC(e) {
  return e.nodeType === Sm;
}
function YC(e) {
  return e.nodeType === Pm;
}
function Os(e) {
  return e.nodeType === Tm;
}
const ZC = (e, t, r, n, o, i) => {
  if (KC(e))
    return Em(e.data, t);
  if (YC(e))
    return UC(e.data, t);
  const s = Os(e) ? "DocumentFragment" : e.tagName.toLowerCase();
  return ++n > t.maxDepth ? ul(s, t) : ll(s, sl(Os(e) ? [] : Array.from(e.attributes, (a) => a.name).sort(), Os(e) ? {} : [...e.attributes].reduce((a, u) => (a[u.name] = u.value, a), {}), t, r + t.indent, n, o, i), al(Array.prototype.slice.call(e.childNodes || e.children), t, r + t.indent, n, o, i), t, r);
}, QC = {
  serialize: ZC,
  test: GC
}, ex = "@@__IMMUTABLE_ITERABLE__@@", tx = "@@__IMMUTABLE_LIST__@@", rx = "@@__IMMUTABLE_KEYED__@@", nx = "@@__IMMUTABLE_MAP__@@", yf = "@@__IMMUTABLE_ORDERED__@@", ox = "@@__IMMUTABLE_RECORD__@@", ix = "@@__IMMUTABLE_SEQ__@@", sx = "@@__IMMUTABLE_SET__@@", ax = "@@__IMMUTABLE_STACK__@@", Xt = (e) => `Immutable.${e}`, cs = (e) => `[${e}]`, li = " ", vf = "…";
function lx(e, t, r, n, o, i, s) {
  return ++n > t.maxDepth ? cs(Xt(s)) : `${Xt(s) + li}{${pi(e.entries(), t, r, n, o, i)}}`;
}
function ux(e) {
  let t = 0;
  return { next() {
    if (t < e._keys.length) {
      const r = e._keys[t++];
      return {
        done: !1,
        value: [r, e.get(r)]
      };
    }
    return {
      done: !0,
      value: void 0
    };
  } };
}
function cx(e, t, r, n, o, i) {
  const s = Xt(e._name || "Record");
  return ++n > t.maxDepth ? cs(s) : `${s + li}{${pi(ux(e), t, r, n, o, i)}}`;
}
function dx(e, t, r, n, o, i) {
  const s = Xt("Seq");
  return ++n > t.maxDepth ? cs(s) : e[rx] ? `${s + li}{${e._iter || e._object ? pi(e.entries(), t, r, n, o, i) : vf}}` : `${s + li}[${e._iter || e._array || e._collection || e._iterable ? ol(e.values(), t, r, n, o, i) : vf}]`;
}
function Ms(e, t, r, n, o, i, s) {
  return ++n > t.maxDepth ? cs(Xt(s)) : `${Xt(s) + li}[${ol(e.values(), t, r, n, o, i)}]`;
}
const fx = (e, t, r, n, o, i) => e[nx] ? lx(e, t, r, n, o, i, e[yf] ? "OrderedMap" : "Map") : e[tx] ? Ms(e, t, r, n, o, i, "List") : e[sx] ? Ms(e, t, r, n, o, i, e[yf] ? "OrderedSet" : "Set") : e[ax] ? Ms(e, t, r, n, o, i, "Stack") : e[ix] ? dx(e, t, r, n, o, i) : cx(e, t, r, n, o, i), px = (e) => e && (e[ex] === !0 || e[ox] === !0), hx = {
  serialize: fx,
  test: px
};
function _m(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ti = { exports: {} }, de = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wf;
function mx() {
  if (wf) return de;
  wf = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.view_transition"), p = Symbol.for("react.client.reference");
  function g(h) {
    if (typeof h == "object" && h !== null) {
      var b = h.$$typeof;
      switch (b) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case u:
            case l:
            case f:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case a:
                case d:
                case c:
                  return h;
                case i:
                  return h;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return de.ContextConsumer = i, de.ContextProvider = s, de.Element = e, de.ForwardRef = a, de.Fragment = r, de.Lazy = d, de.Memo = c, de.Portal = t, de.Profiler = o, de.StrictMode = n, de.Suspense = u, de.SuspenseList = l, de.isContextConsumer = function(h) {
    return g(h) === i;
  }, de.isContextProvider = function(h) {
    return g(h) === s;
  }, de.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, de.isForwardRef = function(h) {
    return g(h) === a;
  }, de.isFragment = function(h) {
    return g(h) === r;
  }, de.isLazy = function(h) {
    return g(h) === d;
  }, de.isMemo = function(h) {
    return g(h) === c;
  }, de.isPortal = function(h) {
    return g(h) === t;
  }, de.isProfiler = function(h) {
    return g(h) === o;
  }, de.isStrictMode = function(h) {
    return g(h) === n;
  }, de.isSuspense = function(h) {
    return g(h) === u;
  }, de.isSuspenseList = function(h) {
    return g(h) === l;
  }, de.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === u || h === l || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === c || h.$$typeof === s || h.$$typeof === i || h.$$typeof === a || h.$$typeof === p || h.getModuleId !== void 0);
  }, de.typeOf = g, de;
}
var fe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rf;
function gx() {
  return Rf || (Rf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h) {
      if (typeof h == "object" && h !== null) {
        var b = h.$$typeof;
        switch (b) {
          case t:
            switch (h = h.type, h) {
              case n:
              case i:
              case o:
              case l:
              case c:
              case p:
                return h;
              default:
                switch (h = h && h.$$typeof, h) {
                  case a:
                  case u:
                  case f:
                  case d:
                    return h;
                  case s:
                    return h;
                  default:
                    return b;
                }
            }
          case r:
            return b;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), a = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    fe.ContextConsumer = s, fe.ContextProvider = a, fe.Element = t, fe.ForwardRef = u, fe.Fragment = n, fe.Lazy = f, fe.Memo = d, fe.Portal = r, fe.Profiler = i, fe.StrictMode = o, fe.Suspense = l, fe.SuspenseList = c, fe.isContextConsumer = function(h) {
      return e(h) === s;
    }, fe.isContextProvider = function(h) {
      return e(h) === a;
    }, fe.isElement = function(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }, fe.isForwardRef = function(h) {
      return e(h) === u;
    }, fe.isFragment = function(h) {
      return e(h) === n;
    }, fe.isLazy = function(h) {
      return e(h) === f;
    }, fe.isMemo = function(h) {
      return e(h) === d;
    }, fe.isPortal = function(h) {
      return e(h) === r;
    }, fe.isProfiler = function(h) {
      return e(h) === i;
    }, fe.isStrictMode = function(h) {
      return e(h) === o;
    }, fe.isSuspense = function(h) {
      return e(h) === l;
    }, fe.isSuspenseList = function(h) {
      return e(h) === c;
    }, fe.isValidElementType = function(h) {
      return typeof h == "string" || typeof h == "function" || h === n || h === i || h === o || h === l || h === c || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === d || h.$$typeof === a || h.$$typeof === s || h.$$typeof === u || h.$$typeof === g || h.getModuleId !== void 0);
    }, fe.typeOf = e;
  })()), fe;
}
var Cf;
function bx() {
  return Cf || (Cf = 1, process.env.NODE_ENV === "production" ? Ti.exports = mx() : Ti.exports = gx()), Ti.exports;
}
var qm = bx(), yx = /* @__PURE__ */ _m(qm), vx = /* @__PURE__ */ Rm({
  __proto__: null,
  default: yx
}, [qm]), _i = { exports: {} }, ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xf;
function wx() {
  if (xf) return ue;
  xf = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(b) {
    if (typeof b == "object" && b !== null) {
      var m = b.$$typeof;
      switch (m) {
        case e:
          switch (b = b.type, b) {
            case r:
            case o:
            case n:
            case l:
            case c:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case a:
                case s:
                case u:
                case f:
                case d:
                case i:
                  return b;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return ue.ContextConsumer = s, ue.ContextProvider = i, ue.Element = e, ue.ForwardRef = u, ue.Fragment = r, ue.Lazy = f, ue.Memo = d, ue.Portal = t, ue.Profiler = o, ue.StrictMode = n, ue.Suspense = l, ue.SuspenseList = c, ue.isAsyncMode = function() {
    return !1;
  }, ue.isConcurrentMode = function() {
    return !1;
  }, ue.isContextConsumer = function(b) {
    return h(b) === s;
  }, ue.isContextProvider = function(b) {
    return h(b) === i;
  }, ue.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, ue.isForwardRef = function(b) {
    return h(b) === u;
  }, ue.isFragment = function(b) {
    return h(b) === r;
  }, ue.isLazy = function(b) {
    return h(b) === f;
  }, ue.isMemo = function(b) {
    return h(b) === d;
  }, ue.isPortal = function(b) {
    return h(b) === t;
  }, ue.isProfiler = function(b) {
    return h(b) === o;
  }, ue.isStrictMode = function(b) {
    return h(b) === n;
  }, ue.isSuspense = function(b) {
    return h(b) === l;
  }, ue.isSuspenseList = function(b) {
    return h(b) === c;
  }, ue.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === o || b === n || b === l || b === c || b === p || typeof b == "object" && b !== null && (b.$$typeof === f || b.$$typeof === d || b.$$typeof === i || b.$$typeof === s || b.$$typeof === u || b.$$typeof === g || b.getModuleId !== void 0);
  }, ue.typeOf = h, ue;
}
var ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ef;
function Rx() {
  return Ef || (Ef = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), g = !1, h = !1, b = !1, m = !1, E = !1, $;
    $ = Symbol.for("react.module.reference");
    function _(X) {
      return !!(typeof X == "string" || typeof X == "function" || X === r || X === o || E || X === n || X === l || X === c || m || X === p || g || h || b || typeof X == "object" && X !== null && (X.$$typeof === f || X.$$typeof === d || X.$$typeof === i || X.$$typeof === s || X.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      X.$$typeof === $ || X.getModuleId !== void 0));
    }
    function C(X) {
      if (typeof X == "object" && X !== null) {
        var O = X.$$typeof;
        switch (O) {
          case e:
            var N = X.type;
            switch (N) {
              case r:
              case o:
              case n:
              case l:
              case c:
                return N;
              default:
                var j = N && N.$$typeof;
                switch (j) {
                  case a:
                  case s:
                  case u:
                  case f:
                  case d:
                  case i:
                    return j;
                  default:
                    return O;
                }
            }
          case t:
            return O;
        }
      }
    }
    var T = s, P = i, v = e, R = u, I = r, S = f, A = d, V = t, L = o, U = n, k = l, B = c, H = !1, Q = !1;
    function ye(X) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function qe(X) {
      return Q || (Q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function we(X) {
      return C(X) === s;
    }
    function Ce(X) {
      return C(X) === i;
    }
    function Ne(X) {
      return typeof X == "object" && X !== null && X.$$typeof === e;
    }
    function W(X) {
      return C(X) === u;
    }
    function xe(X) {
      return C(X) === r;
    }
    function ge(X) {
      return C(X) === f;
    }
    function st(X) {
      return C(X) === d;
    }
    function De(X) {
      return C(X) === t;
    }
    function ft(X) {
      return C(X) === o;
    }
    function Ee(X) {
      return C(X) === n;
    }
    function Fe(X) {
      return C(X) === l;
    }
    function Ft(X) {
      return C(X) === c;
    }
    ce.ContextConsumer = T, ce.ContextProvider = P, ce.Element = v, ce.ForwardRef = R, ce.Fragment = I, ce.Lazy = S, ce.Memo = A, ce.Portal = V, ce.Profiler = L, ce.StrictMode = U, ce.Suspense = k, ce.SuspenseList = B, ce.isAsyncMode = ye, ce.isConcurrentMode = qe, ce.isContextConsumer = we, ce.isContextProvider = Ce, ce.isElement = Ne, ce.isForwardRef = W, ce.isFragment = xe, ce.isLazy = ge, ce.isMemo = st, ce.isPortal = De, ce.isProfiler = ft, ce.isStrictMode = Ee, ce.isSuspense = Fe, ce.isSuspenseList = Ft, ce.isValidElementType = _, ce.typeOf = C;
  })()), ce;
}
var Sf;
function Cx() {
  return Sf || (Sf = 1, process.env.NODE_ENV === "production" ? _i.exports = wx() : _i.exports = Rx()), _i.exports;
}
var $m = Cx(), xx = /* @__PURE__ */ _m($m), Ex = /* @__PURE__ */ Rm({
  __proto__: null,
  default: xx
}, [$m]);
const Sx = [
  "isAsyncMode",
  "isConcurrentMode",
  "isContextConsumer",
  "isContextProvider",
  "isElement",
  "isForwardRef",
  "isFragment",
  "isLazy",
  "isMemo",
  "isPortal",
  "isProfiler",
  "isStrictMode",
  "isSuspense",
  "isSuspenseList",
  "isValidElementType"
], Ot = Object.fromEntries(Sx.map((e) => [e, (t) => Ex[e](t) || vx[e](t)]));
function Om(e, t = []) {
  if (Array.isArray(e))
    for (const r of e)
      Om(r, t);
  else e != null && e !== !1 && e !== "" && t.push(e);
  return t;
}
function Pf(e) {
  const t = e.type;
  if (typeof t == "string")
    return t;
  if (typeof t == "function")
    return t.displayName || t.name || "Unknown";
  if (Ot.isFragment(e))
    return "React.Fragment";
  if (Ot.isSuspense(e))
    return "React.Suspense";
  if (typeof t == "object" && t !== null) {
    if (Ot.isContextProvider(e))
      return "Context.Provider";
    if (Ot.isContextConsumer(e))
      return "Context.Consumer";
    if (Ot.isForwardRef(e)) {
      if (t.displayName)
        return t.displayName;
      const r = t.render.displayName || t.render.name || "";
      return r === "" ? "ForwardRef" : `ForwardRef(${r})`;
    }
    if (Ot.isMemo(e)) {
      const r = t.displayName || t.type.displayName || t.type.name || "";
      return r === "" ? "Memo" : `Memo(${r})`;
    }
  }
  return "UNDEFINED";
}
function Px(e) {
  const { props: t } = e;
  return Object.keys(t).filter((r) => r !== "children" && t[r] !== void 0).sort();
}
const Tx = (e, t, r, n, o, i) => ++n > t.maxDepth ? ul(Pf(e), t) : ll(Pf(e), sl(Px(e), e.props, t, r + t.indent, n, o, i), al(Om(e.props.children), t, r + t.indent, n, o, i), t, r), _x = (e) => e != null && Ot.isElement(e), qx = {
  serialize: Tx,
  test: _x
}, $x = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.test.json") : 245830487;
function Ox(e) {
  const { props: t } = e;
  return t ? Object.keys(t).filter((r) => t[r] !== void 0).sort() : [];
}
const Mx = (e, t, r, n, o, i) => ++n > t.maxDepth ? ul(e.type, t) : ll(e.type, e.props ? sl(Ox(e), e.props, t, r + t.indent, n, o, i) : "", e.children ? al(e.children, t, r + t.indent, n, o, i) : "", t, r), Ax = (e) => e && e.$$typeof === $x, Ix = {
  serialize: Mx,
  test: Ax
}, Mm = Object.prototype.toString, Nx = Date.prototype.toISOString, kx = Error.prototype.toString, Tf = RegExp.prototype.toString;
function ji(e) {
  return typeof e.constructor == "function" && e.constructor.name || "Object";
}
function jx(e) {
  return typeof window < "u" && e === window;
}
const Dx = /^Symbol\((.*)\)(.*)$/, Fx = /\n/g;
class Am extends Error {
  constructor(t, r) {
    super(t), this.stack = r, this.name = this.constructor.name;
  }
}
function Lx(e) {
  return e === "[object Array]" || e === "[object ArrayBuffer]" || e === "[object DataView]" || e === "[object Float32Array]" || e === "[object Float64Array]" || e === "[object Int8Array]" || e === "[object Int16Array]" || e === "[object Int32Array]" || e === "[object Uint8Array]" || e === "[object Uint8ClampedArray]" || e === "[object Uint16Array]" || e === "[object Uint32Array]";
}
function Bx(e) {
  return Object.is(e, -0) ? "-0" : String(e);
}
function Hx(e) {
  return `${e}n`;
}
function _f(e, t) {
  return t ? `[Function ${e.name || "anonymous"}]` : "[Function]";
}
function qf(e) {
  return String(e).replace(Dx, "Symbol($1)");
}
function $f(e) {
  return `[${kx.call(e)}]`;
}
function Im(e, t, r, n) {
  if (e === !0 || e === !1)
    return `${e}`;
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const o = typeof e;
  if (o === "number")
    return Bx(e);
  if (o === "bigint")
    return Hx(e);
  if (o === "string")
    return n ? `"${e.replaceAll(/"|\\/g, "\\$&")}"` : `"${e}"`;
  if (o === "function")
    return _f(e, t);
  if (o === "symbol")
    return qf(e);
  const i = Mm.call(e);
  return i === "[object WeakMap]" ? "WeakMap {}" : i === "[object WeakSet]" ? "WeakSet {}" : i === "[object Function]" || i === "[object GeneratorFunction]" ? _f(e, t) : i === "[object Symbol]" ? qf(e) : i === "[object Date]" ? Number.isNaN(+e) ? "Date { NaN }" : Nx.call(e) : i === "[object Error]" ? $f(e) : i === "[object RegExp]" ? r ? Tf.call(e).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&") : Tf.call(e) : e instanceof Error ? $f(e) : null;
}
function Nm(e, t, r, n, o, i) {
  if (o.includes(e))
    return "[Circular]";
  o = [...o], o.push(e);
  const s = ++n > t.maxDepth, a = t.min;
  if (t.callToJSON && !s && e.toJSON && typeof e.toJSON == "function" && !i)
    return yt(e.toJSON(), t, r, n, o, !0);
  const u = Mm.call(e);
  return u === "[object Arguments]" ? s ? "[Arguments]" : `${a ? "" : "Arguments "}[${Ji(e, t, r, n, o, yt)}]` : Lx(u) ? s ? `[${e.constructor.name}]` : `${a || !t.printBasicPrototype && e.constructor.name === "Array" ? "" : `${e.constructor.name} `}[${Ji(e, t, r, n, o, yt)}]` : u === "[object Map]" ? s ? "[Map]" : `Map {${pi(e.entries(), t, r, n, o, yt, " => ")}}` : u === "[object Set]" ? s ? "[Set]" : `Set {${ol(e.values(), t, r, n, o, yt)}}` : s || jx(e) ? `[${ji(e)}]` : `${a || !t.printBasicPrototype && ji(e) === "Object" ? "" : `${ji(e)} `}{${il(e, t, r, n, o, yt)}}`;
}
const Vx = {
  test: (e) => e && e instanceof Error,
  serialize(e, t, r, n, o, i) {
    if (o.includes(e))
      return "[Circular]";
    o = [...o, e];
    const s = ++n > t.maxDepth, { message: a, cause: u, ...l } = e, c = {
      message: a,
      ...typeof u < "u" ? { cause: u } : {},
      ...e instanceof AggregateError ? { errors: e.errors } : {},
      ...l
    }, d = e.name !== "Error" ? e.name : ji(e);
    return s ? `[${d}]` : `${d} {${pi(Object.entries(c).values(), t, r, n, o, i)}}`;
  }
};
function Ux(e) {
  return e.serialize != null;
}
function km(e, t, r, n, o, i) {
  let s;
  try {
    s = Ux(e) ? e.serialize(t, r, n, o, i, yt) : e.print(t, (a) => yt(a, r, n, o, i), (a) => {
      const u = n + r.indent;
      return u + a.replaceAll(Fx, `
${u}`);
    }, {
      edgeSpacing: r.spacingOuter,
      min: r.min,
      spacing: r.spacingInner
    }, r.colors);
  } catch (a) {
    throw new Am(a.message, a.stack);
  }
  if (typeof s != "string")
    throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof s}".`);
  return s;
}
function jm(e, t) {
  for (const r of e)
    try {
      if (r.test(t))
        return r;
    } catch (n) {
      throw new Am(n.message, n.stack);
    }
  return null;
}
function yt(e, t, r, n, o, i) {
  const s = jm(t.plugins, e);
  if (s !== null)
    return km(s, e, t, r, n, o);
  const a = Im(e, t.printFunctionName, t.escapeRegex, t.escapeString);
  return a !== null ? a : Nm(e, t, r, n, o, i);
}
const cl = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, Dm = Object.keys(cl), Qe = {
  callToJSON: !0,
  compareKeys: void 0,
  escapeRegex: !1,
  escapeString: !0,
  highlight: !1,
  indent: 2,
  maxDepth: Number.POSITIVE_INFINITY,
  maxWidth: Number.POSITIVE_INFINITY,
  min: !1,
  plugins: [],
  printBasicPrototype: !0,
  printFunctionName: !0,
  theme: cl
};
function zx(e) {
  for (const t of Object.keys(e))
    if (!Object.prototype.hasOwnProperty.call(Qe, t))
      throw new Error(`pretty-format: Unknown option "${t}".`);
  if (e.min && e.indent !== void 0 && e.indent !== 0)
    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
}
function Wx() {
  return Dm.reduce((e, t) => {
    const r = cl[t], n = r && OC[r];
    if (n && typeof n.close == "string" && typeof n.open == "string")
      e[t] = n;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${t}" whose value "${r}" is undefined in ansi-styles.`);
    return e;
  }, /* @__PURE__ */ Object.create(null));
}
function Jx() {
  return Dm.reduce((e, t) => (e[t] = {
    close: "",
    open: ""
  }, e), /* @__PURE__ */ Object.create(null));
}
function Fm(e) {
  return (e == null ? void 0 : e.printFunctionName) ?? Qe.printFunctionName;
}
function Lm(e) {
  return (e == null ? void 0 : e.escapeRegex) ?? Qe.escapeRegex;
}
function Bm(e) {
  return (e == null ? void 0 : e.escapeString) ?? Qe.escapeString;
}
function Of(e) {
  return {
    callToJSON: (e == null ? void 0 : e.callToJSON) ?? Qe.callToJSON,
    colors: e != null && e.highlight ? Wx() : Jx(),
    compareKeys: typeof (e == null ? void 0 : e.compareKeys) == "function" || (e == null ? void 0 : e.compareKeys) === null ? e.compareKeys : Qe.compareKeys,
    escapeRegex: Lm(e),
    escapeString: Bm(e),
    indent: e != null && e.min ? "" : Xx((e == null ? void 0 : e.indent) ?? Qe.indent),
    maxDepth: (e == null ? void 0 : e.maxDepth) ?? Qe.maxDepth,
    maxWidth: (e == null ? void 0 : e.maxWidth) ?? Qe.maxWidth,
    min: (e == null ? void 0 : e.min) ?? Qe.min,
    plugins: (e == null ? void 0 : e.plugins) ?? Qe.plugins,
    printBasicPrototype: (e == null ? void 0 : e.printBasicPrototype) ?? !0,
    printFunctionName: Fm(e),
    spacingInner: e != null && e.min ? " " : `
`,
    spacingOuter: e != null && e.min ? "" : `
`
  };
}
function Xx(e) {
  return Array.from({ length: e + 1 }).join(" ");
}
function rt(e, t) {
  if (t && (zx(t), t.plugins)) {
    const n = jm(t.plugins, e);
    if (n !== null)
      return km(n, e, Of(t), "", 0, []);
  }
  const r = Im(e, Fm(t), Lm(t), Bm(t));
  return r !== null ? r : Nm(e, Of(t), "", 0, []);
}
const ds = {
  AsymmetricMatcher: kC,
  DOMCollection: VC,
  DOMElement: QC,
  Immutable: hx,
  ReactElement: qx,
  ReactTestComponent: Ix,
  Error: Vx
}, Mf = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
}, Gx = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
}, Gt = "…";
function Kx(e, t) {
  const r = Mf[Gx[t]] || Mf[t] || "";
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
function Yx({
  showHidden: e = !1,
  depth: t = 2,
  colors: r = !1,
  customInspect: n = !0,
  showProxy: o = !1,
  maxArrayLength: i = 1 / 0,
  breakLength: s = 1 / 0,
  seen: a = [],
  // eslint-disable-next-line no-shadow
  truncate: u = 1 / 0,
  stylize: l = String
} = {}, c) {
  const d = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!o,
    maxArrayLength: Number(i),
    breakLength: Number(s),
    truncate: Number(u),
    seen: a,
    inspect: c,
    stylize: l
  };
  return d.colors && (d.stylize = Kx), d;
}
function Zx(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
function _t(e, t, r = Gt) {
  e = String(e);
  const n = r.length, o = e.length;
  if (n > t && o > n)
    return r;
  if (o > t && o > n) {
    let i = t - n;
    return i > 0 && Zx(e[i - 1]) && (i = i - 1), `${e.slice(0, i)}${r}`;
  }
  return e;
}
function ot(e, t, r, n = ", ") {
  r = r || t.inspect;
  const o = e.length;
  if (o === 0)
    return "";
  const i = t.truncate;
  let s = "", a = "", u = "";
  for (let l = 0; l < o; l += 1) {
    const c = l + 1 === e.length, d = l + 2 === e.length;
    u = `${Gt}(${e.length - l})`;
    const f = e[l];
    t.truncate = i - s.length - (c ? 0 : n.length);
    const p = a || r(f, t) + (c ? "" : n), g = s.length + p.length, h = g + u.length;
    if (c && g > i && s.length + u.length <= i || !c && !d && h > i || (a = c ? "" : r(e[l + 1], t) + (d ? "" : n), !c && d && h > i && g + a.length > i))
      break;
    if (s += p, !c && !d && g + a.length >= i) {
      u = `${Gt}(${e.length - l - 1})`;
      break;
    }
    u = "";
  }
  return `${s}${u}`;
}
function Qx(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
function ui([e, t], r) {
  return r.truncate -= 2, typeof e == "string" ? e = Qx(e) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`), r.truncate -= e.length, t = r.inspect(t, r), `${e}: ${t}`;
}
function eE(e, t) {
  const r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length)
    return "[]";
  t.truncate -= 4;
  const n = ot(e, t);
  t.truncate -= n.length;
  let o = "";
  return r.length && (o = ot(r.map((i) => [i, e[i]]), t, ui)), `[ ${n}${o ? `, ${o}` : ""} ]`;
}
const tE = (e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name;
function pt(e, t) {
  const r = tE(e);
  t.truncate -= r.length + 4;
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return `${r}[]`;
  let o = "";
  for (let s = 0; s < e.length; s++) {
    const a = `${t.stylize(_t(e[s], t.truncate), "number")}${s === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= a.length, e[s] !== e.length && t.truncate <= 3) {
      o += `${Gt}(${e.length - e[s] + 1})`;
      break;
    }
    o += a;
  }
  let i = "";
  return n.length && (i = ot(n.map((s) => [s, e[s]]), t, ui)), `${r}[ ${o}${i ? `, ${i}` : ""} ]`;
}
function rE(e, t) {
  const r = e.toJSON();
  if (r === null)
    return "Invalid Date";
  const n = r.split("T"), o = n[0];
  return t.stylize(`${o}T${_t(n[1], t.truncate - o.length - 1)}`, "date");
}
function Af(e, t) {
  const r = e[Symbol.toStringTag] || "Function", n = e.name;
  return n ? t.stylize(`[${r} ${_t(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
}
function nE([e, t], r) {
  return r.truncate -= 4, e = r.inspect(e, r), r.truncate -= e.length, t = r.inspect(t, r), `${e} => ${t}`;
}
function oE(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push([n, r]);
  }), t;
}
function iE(e, t) {
  return e.size === 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${ot(oE(e), t, nE)} }`);
}
const sE = Number.isNaN || ((e) => e !== e);
function If(e, t) {
  return sE(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(_t(String(e), t.truncate), "number");
}
function Nf(e, t) {
  let r = _t(e.toString(), t.truncate - 1);
  return r !== Gt && (r += "n"), t.stylize(r, "bigint");
}
function aE(e, t) {
  const r = e.toString().split("/")[2], n = t.truncate - (2 + r.length), o = e.source;
  return t.stylize(`/${_t(o, n)}/${r}`, "regexp");
}
function lE(e) {
  const t = [];
  return e.forEach((r) => {
    t.push(r);
  }), t;
}
function uE(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${ot(lE(e), t)} }`);
}
const kf = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), cE = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, dE = 16;
function fE(e) {
  return cE[e] || `\\u${`0000${e.charCodeAt(0).toString(dE)}`.slice(-4)}`;
}
function jf(e, t) {
  return kf.test(e) && (e = e.replace(kf, fE)), t.stylize(`'${_t(e, t.truncate - 2)}'`, "string");
}
function Df(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
const pE = () => "Promise{…}";
function Di(e, t) {
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const o = ot(r.map((a) => [a, e[a]]), t, ui), i = ot(n.map((a) => [a, e[a]]), t, ui);
  t.seen.pop();
  let s = "";
  return o && i && (s = ", "), `{ ${o}${s}${i} }`;
}
const As = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function hE(e, t) {
  let r = "";
  return As && As in e && (r = e[As]), r = r || e.constructor.name, (!r || r === "_class") && (r = "<Anonymous Class>"), t.truncate -= r.length, `${r}${Di(e, t)}`;
}
function mE(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${ot(e, t)} ]`);
}
const gE = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description",
  "cause"
];
function bE(e, t) {
  const r = Object.getOwnPropertyNames(e).filter((s) => gE.indexOf(s) === -1), n = e.name;
  t.truncate -= n.length;
  let o = "";
  if (typeof e.message == "string" ? o = _t(e.message, t.truncate) : r.unshift("message"), o = o ? `: ${o}` : "", t.truncate -= o.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const i = ot(r.map((s) => [s, e[s]]), t, ui);
  return `${n}${o}${i ? ` { ${i} }` : ""}`;
}
function yE([e, t], r) {
  return r.truncate -= 3, t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
function Pa(e, t) {
  return ot(e, t, vE, `
`);
}
function vE(e, t) {
  switch (e.nodeType) {
    case 1:
      return Hm(e, t);
    case 3:
      return t.inspect(e.data, t);
    default:
      return t.inspect(e, t);
  }
}
function Hm(e, t) {
  const r = e.getAttributeNames(), n = e.tagName.toLowerCase(), o = t.stylize(`<${n}`, "special"), i = t.stylize(">", "special"), s = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let a = "";
  r.length > 0 && (a += " ", a += ot(r.map((c) => [c, e.getAttribute(c)]), t, yE, " ")), t.truncate -= a.length;
  const u = t.truncate;
  let l = Pa(e.children, t);
  return l && l.length > u && (l = `${Gt}(${e.children.length})`), `${o}${a}${i}${l}${s}`;
}
const wE = typeof Symbol == "function" && typeof Symbol.for == "function", Is = wE ? Symbol.for("chai/inspect") : "@@chai/inspect", Ns = Symbol.for("nodejs.util.inspect.custom"), Ff = /* @__PURE__ */ new WeakMap(), Lf = {}, Bf = {
  undefined: (e, t) => t.stylize("undefined", "undefined"),
  null: (e, t) => t.stylize("null", "null"),
  boolean: (e, t) => t.stylize(String(e), "boolean"),
  Boolean: (e, t) => t.stylize(String(e), "boolean"),
  number: If,
  Number: If,
  bigint: Nf,
  BigInt: Nf,
  string: jf,
  String: jf,
  function: Af,
  Function: Af,
  symbol: Df,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: Df,
  Array: eE,
  Date: rE,
  Map: iE,
  Set: uE,
  RegExp: aE,
  Promise: pE,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: (e, t) => t.stylize("WeakSet{…}", "special"),
  WeakMap: (e, t) => t.stylize("WeakMap{…}", "special"),
  Arguments: mE,
  Int8Array: pt,
  Uint8Array: pt,
  Uint8ClampedArray: pt,
  Int16Array: pt,
  Uint16Array: pt,
  Int32Array: pt,
  Uint32Array: pt,
  Float32Array: pt,
  Float64Array: pt,
  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",
  Error: bE,
  HTMLCollection: Pa,
  NodeList: Pa
}, RE = (e, t, r, n) => Is in e && typeof e[Is] == "function" ? e[Is](t) : Ns in e && typeof e[Ns] == "function" ? e[Ns](t.depth, t, n) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && Ff.has(e.constructor) ? Ff.get(e.constructor)(e, t) : Lf[r] ? Lf[r](e, t) : "", CE = Object.prototype.toString;
function Fi(e, t = {}) {
  const r = Yx(t, Fi), { customInspect: n } = r;
  let o = e === null ? "null" : typeof e;
  if (o === "object" && (o = CE.call(e).slice(8, -1)), o in Bf)
    return Bf[o](e, r);
  if (n && e) {
    const s = RE(e, r, o, Fi);
    if (s)
      return typeof s == "string" ? s : Fi(s, r);
  }
  const i = e ? Object.getPrototypeOf(e) : !1;
  return i === Object.prototype || i === null ? Di(e, r) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? Hm(e, r) : "constructor" in e ? e.constructor !== Object ? hE(e, r) : Di(e, r) : e === Object(e) ? Di(e, r) : r.stylize(String(e), o);
}
const { AsymmetricMatcher: xE, DOMCollection: EE, DOMElement: SE, Immutable: PE, ReactElement: TE, ReactTestComponent: _E } = ds, Hf = [
  _E,
  TE,
  SE,
  EE,
  PE,
  xE
];
function We(e, t = 10, { maxLength: r, ...n } = {}) {
  const o = r ?? 1e4;
  let i;
  try {
    i = rt(e, {
      maxDepth: t,
      escapeString: !1,
      plugins: Hf,
      ...n
    });
  } catch {
    i = rt(e, {
      callToJSON: !1,
      maxDepth: t,
      escapeString: !1,
      plugins: Hf,
      ...n
    });
  }
  return i.length >= o && t > 1 ? We(e, Math.floor(Math.min(t, Number.MAX_SAFE_INTEGER) / 2), {
    maxLength: r,
    ...n
  }) : i;
}
const qE = /%[sdjifoOc%]/g;
function Vm(...e) {
  if (typeof e[0] != "string") {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(Ht(e[s], {
        depth: 0,
        colors: !1
      }));
    return i.join(" ");
  }
  const t = e.length;
  let r = 1;
  const n = e[0];
  let o = String(n).replace(qE, (i) => {
    if (i === "%%")
      return "%";
    if (r >= t)
      return i;
    switch (i) {
      case "%s": {
        const s = e[r++];
        return typeof s == "bigint" ? `${s.toString()}n` : typeof s == "number" && s === 0 && 1 / s < 0 ? "-0" : typeof s == "object" && s !== null ? typeof s.toString == "function" && s.toString !== Object.prototype.toString ? s.toString() : Ht(s, {
          depth: 0,
          colors: !1
        }) : String(s);
      }
      case "%d": {
        const s = e[r++];
        return typeof s == "bigint" ? `${s.toString()}n` : Number(s).toString();
      }
      case "%i": {
        const s = e[r++];
        return typeof s == "bigint" ? `${s.toString()}n` : Number.parseInt(String(s)).toString();
      }
      case "%f":
        return Number.parseFloat(String(e[r++])).toString();
      case "%o":
        return Ht(e[r++], {
          showHidden: !0,
          showProxy: !0
        });
      case "%O":
        return Ht(e[r++]);
      case "%c":
        return r++, "";
      case "%j":
        try {
          return JSON.stringify(e[r++]);
        } catch (s) {
          const a = s.message;
          if (a.includes("circular structure") || a.includes("cyclic structures") || a.includes("cyclic object"))
            return "[Circular]";
          throw s;
        }
      default:
        return i;
    }
  });
  for (let i = e[r]; r < t; i = e[++r])
    i === null || typeof i != "object" ? o += ` ${i}` : o += ` ${Ht(i)}`;
  return o;
}
function Ht(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), Fi(e, t);
}
function $E(e, t = {}) {
  typeof t.truncate > "u" && (t.truncate = 40);
  const r = Ht(e, t), n = Object.prototype.toString.call(e);
  if (t.truncate && r.length >= t.truncate)
    if (n === "[object Function]") {
      const o = e;
      return o.name ? `[Function: ${o.name}]` : "[Function]";
    } else {
      if (n === "[object Array]")
        return `[ Array(${e.length}) ]`;
      if (n === "[object Object]") {
        const o = Object.keys(e);
        return `{ Object (${o.length > 2 ? `${o.splice(0, 2).join(", ")}, ...` : o.join(", ")}) }`;
      } else
        return r;
    }
  return r;
}
function OE(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ME(e) {
  const { message: t = "$$stack trace error", stackTraceLimit: r = 1 } = e || {}, n = Error.stackTraceLimit, o = Error.prepareStackTrace;
  Error.stackTraceLimit = r, Error.prepareStackTrace = (a) => a.stack;
  const s = new Error(t).stack || "";
  return Error.prepareStackTrace = o, Error.stackTraceLimit = n, s;
}
function lt(e, t, r) {
  const n = typeof e;
  if (!r.includes(n))
    throw new TypeError(`${t} value must be ${r.join(" or ")}, received "${n}"`);
}
function Um(e) {
  return e == null && (e = []), Array.isArray(e) ? e : [e];
}
function zt(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function AE(e) {
  return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
}
function ci(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function IE(e, t) {
  const r = typeof t == "function" ? t : (n) => t.add(n);
  Object.getOwnPropertyNames(e).forEach(r), Object.getOwnPropertySymbols(e).forEach(r);
}
function zm(e) {
  const t = /* @__PURE__ */ new Set();
  return AE(e) ? [] : (IE(e, t), Array.from(t));
}
const Wm = { forceWritable: !1 };
function Vf(e, t = Wm) {
  return Ta(e, /* @__PURE__ */ new WeakMap(), t);
}
function Ta(e, t, r = Wm) {
  let n, o;
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    for (o = Array.from({ length: n = e.length }), t.set(e, o); n--; )
      o[n] = Ta(e[n], t, r);
    return o;
  }
  if (Object.prototype.toString.call(e) === "[object Object]") {
    o = Object.create(Object.getPrototypeOf(e)), t.set(e, o);
    const i = zm(e);
    for (const s of i) {
      const a = Object.getOwnPropertyDescriptor(e, s);
      if (!a)
        continue;
      const u = Ta(e[s], t, r);
      r.forceWritable ? Object.defineProperty(o, s, {
        enumerable: a.enumerable,
        configurable: !0,
        writable: !0,
        value: u
      }) : "get" in a ? Object.defineProperty(o, s, {
        ...a,
        get() {
          return u;
        }
      }) : Object.defineProperty(o, s, {
        ...a,
        value: u
      });
    }
    return o;
  }
  return e;
}
function NE() {
}
function Uf(e, t, r = void 0) {
  const n = t.replace(/\[(\d+)\]/g, ".$1").split(".");
  let o = e;
  for (const i of n)
    if (o = new Object(o)[i], o === void 0)
      return r;
  return o;
}
function zf() {
  let e = null, t = null;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function kE(e) {
  if (!Number.isNaN(e))
    return !1;
  const t = new Float64Array(1);
  return t[0] = e, new Uint32Array(t.buffer)[1] >>> 31 === 1;
}
var jE = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}, DE = Object.entries(jE);
function dl(e) {
  return String(e);
}
dl.open = "";
dl.close = "";
function FE(e = !1) {
  let t = typeof process < "u" ? process : void 0, r = (t == null ? void 0 : t.env) || {}, n = (t == null ? void 0 : t.argv) || [];
  return !("NO_COLOR" in r || n.includes("--no-color")) && ("FORCE_COLOR" in r || n.includes("--color") || (t == null ? void 0 : t.platform) === "win32" || e && r.TERM !== "dumb" || "CI" in r) || typeof window < "u" && !!window.chrome;
}
function LE(e = !1) {
  let t = FE(e), r = (s, a, u, l) => {
    let c = "", d = 0;
    do
      c += s.substring(d, l) + u, d = l + a.length, l = s.indexOf(a, d);
    while (~l);
    return c + s.substring(d);
  }, n = (s, a, u = s) => {
    let l = (c) => {
      let d = String(c), f = d.indexOf(a, s.length);
      return ~f ? s + r(d, a, u, f) + a : s + d + a;
    };
    return l.open = s, l.close = a, l;
  }, o = {
    isColorSupported: t
  }, i = (s) => `\x1B[${s}m`;
  for (let [s, a] of DE)
    o[s] = t ? n(
      i(a[0]),
      i(a[1]),
      a[2]
    ) : dl;
  return o;
}
var wt = LE(), ks, Wf;
function BE() {
  if (Wf) return ks;
  Wf = 1;
  var e, t, r, n, o, i, s, a, u, l, c, d, f, p, g, h, b, m, E;
  return f = /\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu, d = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y, e = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu, g = /(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y, c = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y, h = /[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y, E = /[\t\v\f\ufeff\p{Zs}]+/yu, a = /\r?\n|[\r\u2028\u2029]/y, u = /\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y, p = /\/\/.*/y, r = /[<>.:={}]|\/(?![\/*])/y, t = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu, n = /(['"])(?:(?!\1)[^])*(\1)?/y, o = /[^<>{}]+/y, m = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/, b = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/, i = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/, s = /^(?:return|throw|yield)$/, l = RegExp(a.source), ks = function* ($, { jsx: _ = !1 } = {}) {
    var C, T, P, v, R, I, S, A, V, L, U, k, B, H;
    for ({ length: I } = $, v = 0, R = "", H = [
      { tag: "JS" }
    ], C = [], U = 0, k = !1; v < I; ) {
      switch (A = H[H.length - 1], A.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if ($[v] === "/" && (m.test(R) || i.test(R)) && (f.lastIndex = v, S = f.exec($))) {
            v = f.lastIndex, R = S[0], k = !0, yield {
              type: "RegularExpressionLiteral",
              value: S[0],
              closed: S[1] !== void 0 && S[1] !== "\\"
            };
            continue;
          }
          if (d.lastIndex = v, S = d.exec($)) {
            switch (B = S[0], V = d.lastIndex, L = B, B) {
              case "(":
                R === "?NonExpressionParenKeyword" && H.push({
                  tag: "JSNonExpressionParen",
                  nesting: U
                }), U++, k = !1;
                break;
              case ")":
                U--, k = !0, A.tag === "JSNonExpressionParen" && U === A.nesting && (H.pop(), L = "?NonExpressionParenEnd", k = !1);
                break;
              case "{":
                d.lastIndex = 0, P = !b.test(R) && (m.test(R) || i.test(R)), C.push(P), k = !1;
                break;
              case "}":
                switch (A.tag) {
                  case "InterpolationInTemplate":
                    if (C.length === A.nesting) {
                      h.lastIndex = v, S = h.exec($), v = h.lastIndex, R = S[0], S[1] === "${" ? (R = "?InterpolationInTemplate", k = !1, yield {
                        type: "TemplateMiddle",
                        value: S[0]
                      }) : (H.pop(), k = !0, yield {
                        type: "TemplateTail",
                        value: S[0],
                        closed: S[1] === "`"
                      });
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (C.length === A.nesting) {
                      H.pop(), v += 1, R = "}", yield {
                        type: "JSXPunctuator",
                        value: "}"
                      };
                      continue;
                    }
                }
                k = C.pop(), L = k ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                k = !0;
                break;
              case "++":
              case "--":
                L = k ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (_ && (m.test(R) || i.test(R))) {
                  H.push({ tag: "JSXTag" }), v += 1, R = "<", yield {
                    type: "JSXPunctuator",
                    value: B
                  };
                  continue;
                }
                k = !1;
                break;
              default:
                k = !1;
            }
            v = V, R = L, yield {
              type: "Punctuator",
              value: B
            };
            continue;
          }
          if (e.lastIndex = v, S = e.exec($)) {
            switch (v = e.lastIndex, L = S[0], S[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                R !== "." && R !== "?." && (L = "?NonExpressionParenKeyword");
            }
            R = L, k = !i.test(S[0]), yield {
              type: S[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
              value: S[0]
            };
            continue;
          }
          if (g.lastIndex = v, S = g.exec($)) {
            v = g.lastIndex, R = S[0], k = !0, yield {
              type: "StringLiteral",
              value: S[0],
              closed: S[2] !== void 0
            };
            continue;
          }
          if (c.lastIndex = v, S = c.exec($)) {
            v = c.lastIndex, R = S[0], k = !0, yield {
              type: "NumericLiteral",
              value: S[0]
            };
            continue;
          }
          if (h.lastIndex = v, S = h.exec($)) {
            v = h.lastIndex, R = S[0], S[1] === "${" ? (R = "?InterpolationInTemplate", H.push({
              tag: "InterpolationInTemplate",
              nesting: C.length
            }), k = !1, yield {
              type: "TemplateHead",
              value: S[0]
            }) : (k = !0, yield {
              type: "NoSubstitutionTemplate",
              value: S[0],
              closed: S[1] === "`"
            });
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          if (r.lastIndex = v, S = r.exec($)) {
            switch (v = r.lastIndex, L = S[0], S[0]) {
              case "<":
                H.push({ tag: "JSXTag" });
                break;
              case ">":
                H.pop(), R === "/" || A.tag === "JSXTagEnd" ? (L = "?JSX", k = !0) : H.push({ tag: "JSXChildren" });
                break;
              case "{":
                H.push({
                  tag: "InterpolationInJSX",
                  nesting: C.length
                }), L = "?InterpolationInJSX", k = !1;
                break;
              case "/":
                R === "<" && (H.pop(), H[H.length - 1].tag === "JSXChildren" && H.pop(), H.push({ tag: "JSXTagEnd" }));
            }
            R = L, yield {
              type: "JSXPunctuator",
              value: S[0]
            };
            continue;
          }
          if (t.lastIndex = v, S = t.exec($)) {
            v = t.lastIndex, R = S[0], yield {
              type: "JSXIdentifier",
              value: S[0]
            };
            continue;
          }
          if (n.lastIndex = v, S = n.exec($)) {
            v = n.lastIndex, R = S[0], yield {
              type: "JSXString",
              value: S[0],
              closed: S[2] !== void 0
            };
            continue;
          }
          break;
        case "JSXChildren":
          if (o.lastIndex = v, S = o.exec($)) {
            v = o.lastIndex, R = S[0], yield {
              type: "JSXText",
              value: S[0]
            };
            continue;
          }
          switch ($[v]) {
            case "<":
              H.push({ tag: "JSXTag" }), v++, R = "<", yield {
                type: "JSXPunctuator",
                value: "<"
              };
              continue;
            case "{":
              H.push({
                tag: "InterpolationInJSX",
                nesting: C.length
              }), v++, R = "?InterpolationInJSX", k = !1, yield {
                type: "JSXPunctuator",
                value: "{"
              };
              continue;
          }
      }
      if (E.lastIndex = v, S = E.exec($)) {
        v = E.lastIndex, yield {
          type: "WhiteSpace",
          value: S[0]
        };
        continue;
      }
      if (a.lastIndex = v, S = a.exec($)) {
        v = a.lastIndex, k = !1, s.test(R) && (R = "?NoLineTerminatorHere"), yield {
          type: "LineTerminatorSequence",
          value: S[0]
        };
        continue;
      }
      if (u.lastIndex = v, S = u.exec($)) {
        v = u.lastIndex, l.test(S[0]) && (k = !1, s.test(R) && (R = "?NoLineTerminatorHere")), yield {
          type: "MultiLineComment",
          value: S[0],
          closed: S[1] !== void 0
        };
        continue;
      }
      if (p.lastIndex = v, S = p.exec($)) {
        v = p.lastIndex, k = !1, yield {
          type: "SingleLineComment",
          value: S[0]
        };
        continue;
      }
      T = String.fromCodePoint($.codePointAt(v)), v += T.length, R = T, k = !1, yield {
        type: A.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
        value: T
      };
    }
  }, ks;
}
BE();
var Jm = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(Jm.keyword);
new Set(Jm.strict);
const Jf = Symbol("vitest:SAFE_TIMERS");
function Zt() {
  const { setTimeout: e, setInterval: t, clearInterval: r, clearTimeout: n, setImmediate: o, clearImmediate: i, queueMicrotask: s } = globalThis[Jf] || globalThis, { nextTick: a } = globalThis[Jf] || globalThis.process || { nextTick: (u) => u() };
  return {
    nextTick: a,
    setTimeout: e,
    setInterval: t,
    clearInterval: r,
    clearTimeout: n,
    setImmediate: o,
    clearImmediate: i,
    queueMicrotask: s
  };
}
const Ae = -1, Oe = 1, ve = 0;
class be {
  constructor(t, r) {
    Y(this, 0);
    Y(this, 1);
    this[0] = t, this[1] = r;
  }
}
function HE(e, t) {
  if (!e || !t || e.charAt(0) !== t.charAt(0))
    return 0;
  let r = 0, n = Math.min(e.length, t.length), o = n, i = 0;
  for (; r < o; )
    e.substring(i, o) === t.substring(i, o) ? (r = o, i = r) : n = o, o = Math.floor((n - r) / 2 + r);
  return o;
}
function Xm(e, t) {
  if (!e || !t || e.charAt(e.length - 1) !== t.charAt(t.length - 1))
    return 0;
  let r = 0, n = Math.min(e.length, t.length), o = n, i = 0;
  for (; r < o; )
    e.substring(e.length - o, e.length - i) === t.substring(t.length - o, t.length - i) ? (r = o, i = r) : n = o, o = Math.floor((n - r) / 2 + r);
  return o;
}
function Xf(e, t) {
  const r = e.length, n = t.length;
  if (r === 0 || n === 0)
    return 0;
  r > n ? e = e.substring(r - n) : r < n && (t = t.substring(0, r));
  const o = Math.min(r, n);
  if (e === t)
    return o;
  let i = 0, s = 1;
  for (; ; ) {
    const a = e.substring(o - s), u = t.indexOf(a);
    if (u === -1)
      return i;
    s += u, (u === 0 || e.substring(o - s) === t.substring(0, s)) && (i = s, s++);
  }
}
function VE(e) {
  let t = !1;
  const r = [];
  let n = 0, o = null, i = 0, s = 0, a = 0, u = 0, l = 0;
  for (; i < e.length; )
    e[i][0] === ve ? (r[n++] = i, s = u, a = l, u = 0, l = 0, o = e[i][1]) : (e[i][0] === Oe ? u += e[i][1].length : l += e[i][1].length, o && o.length <= Math.max(s, a) && o.length <= Math.max(u, l) && (e.splice(r[n - 1], 0, new be(Ae, o)), e[r[n - 1] + 1][0] = Oe, n--, n--, i = n > 0 ? r[n - 1] : -1, s = 0, a = 0, u = 0, l = 0, o = null, t = !0)), i++;
  for (t && Gm(e), WE(e), i = 1; i < e.length; ) {
    if (e[i - 1][0] === Ae && e[i][0] === Oe) {
      const c = e[i - 1][1], d = e[i][1], f = Xf(c, d), p = Xf(d, c);
      f >= p ? (f >= c.length / 2 || f >= d.length / 2) && (e.splice(i, 0, new be(ve, d.substring(0, f))), e[i - 1][1] = c.substring(0, c.length - f), e[i + 1][1] = d.substring(f), i++) : (p >= c.length / 2 || p >= d.length / 2) && (e.splice(i, 0, new be(ve, c.substring(0, p))), e[i - 1][0] = Oe, e[i - 1][1] = d.substring(0, d.length - p), e[i + 1][0] = Ae, e[i + 1][1] = c.substring(p), i++), i++;
    }
    i++;
  }
}
const Gf = /[^a-z0-9]/i, Kf = /\s/, Yf = /[\r\n]/, UE = /\n\r?\n$/, zE = /^\r?\n\r?\n/;
function WE(e) {
  let t = 1;
  for (; t < e.length - 1; ) {
    if (e[t - 1][0] === ve && e[t + 1][0] === ve) {
      let r = e[t - 1][1], n = e[t][1], o = e[t + 1][1];
      const i = Xm(r, n);
      if (i) {
        const c = n.substring(n.length - i);
        r = r.substring(0, r.length - i), n = c + n.substring(0, n.length - i), o = c + o;
      }
      let s = r, a = n, u = o, l = qi(r, n) + qi(n, o);
      for (; n.charAt(0) === o.charAt(0); ) {
        r += n.charAt(0), n = n.substring(1) + o.charAt(0), o = o.substring(1);
        const c = qi(r, n) + qi(n, o);
        c >= l && (l = c, s = r, a = n, u = o);
      }
      e[t - 1][1] !== s && (s ? e[t - 1][1] = s : (e.splice(t - 1, 1), t--), e[t][1] = a, u ? e[t + 1][1] = u : (e.splice(t + 1, 1), t--));
    }
    t++;
  }
}
function Gm(e) {
  e.push(new be(ve, ""));
  let t = 0, r = 0, n = 0, o = "", i = "", s;
  for (; t < e.length; )
    switch (e[t][0]) {
      case Oe:
        n++, i += e[t][1], t++;
        break;
      case Ae:
        r++, o += e[t][1], t++;
        break;
      case ve:
        r + n > 1 ? (r !== 0 && n !== 0 && (s = HE(i, o), s !== 0 && (t - r - n > 0 && e[t - r - n - 1][0] === ve ? e[t - r - n - 1][1] += i.substring(0, s) : (e.splice(0, 0, new be(ve, i.substring(0, s))), t++), i = i.substring(s), o = o.substring(s)), s = Xm(i, o), s !== 0 && (e[t][1] = i.substring(i.length - s) + e[t][1], i = i.substring(0, i.length - s), o = o.substring(0, o.length - s))), t -= r + n, e.splice(t, r + n), o.length && (e.splice(t, 0, new be(Ae, o)), t++), i.length && (e.splice(t, 0, new be(Oe, i)), t++), t++) : t !== 0 && e[t - 1][0] === ve ? (e[t - 1][1] += e[t][1], e.splice(t, 1)) : t++, n = 0, r = 0, o = "", i = "";
        break;
    }
  e[e.length - 1][1] === "" && e.pop();
  let a = !1;
  for (t = 1; t < e.length - 1; )
    e[t - 1][0] === ve && e[t + 1][0] === ve && (e[t][1].substring(e[t][1].length - e[t - 1][1].length) === e[t - 1][1] ? (e[t][1] = e[t - 1][1] + e[t][1].substring(0, e[t][1].length - e[t - 1][1].length), e[t + 1][1] = e[t - 1][1] + e[t + 1][1], e.splice(t - 1, 1), a = !0) : e[t][1].substring(0, e[t + 1][1].length) === e[t + 1][1] && (e[t - 1][1] += e[t + 1][1], e[t][1] = e[t][1].substring(e[t + 1][1].length) + e[t + 1][1], e.splice(t + 1, 1), a = !0)), t++;
  a && Gm(e);
}
function qi(e, t) {
  if (!e || !t)
    return 6;
  const r = e.charAt(e.length - 1), n = t.charAt(0), o = r.match(Gf), i = n.match(Gf), s = o && r.match(Kf), a = i && n.match(Kf), u = s && r.match(Yf), l = a && n.match(Yf), c = u && e.match(UE), d = l && t.match(zE);
  return c || d ? 5 : u || l ? 4 : o && !s && a ? 3 : s || a ? 2 : o || i ? 1 : 0;
}
const Km = "Compared values have no visual difference.", JE = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
var $i = {}, Zf;
function XE() {
  if (Zf) return $i;
  Zf = 1, Object.defineProperty($i, "__esModule", {
    value: !0
  }), $i.default = f;
  const e = "diff-sequences", t = 0, r = (p, g, h, b, m) => {
    let E = 0;
    for (; p < g && h < b && m(p, h); )
      p += 1, h += 1, E += 1;
    return E;
  }, n = (p, g, h, b, m) => {
    let E = 0;
    for (; p <= g && h <= b && m(g, b); )
      g -= 1, b -= 1, E += 1;
    return E;
  }, o = (p, g, h, b, m, E, $) => {
    let _ = 0, C = -p, T = E[_], P = T;
    E[_] += r(
      T + 1,
      g,
      b + T - C + 1,
      h,
      m
    );
    const v = p < $ ? p : $;
    for (_ += 1, C += 2; _ <= v; _ += 1, C += 2) {
      if (_ !== p && P < E[_])
        T = E[_];
      else if (T = P + 1, g <= T)
        return _ - 1;
      P = E[_], E[_] = T + r(T + 1, g, b + T - C + 1, h, m);
    }
    return $;
  }, i = (p, g, h, b, m, E, $) => {
    let _ = 0, C = p, T = E[_], P = T;
    E[_] -= n(
      g,
      T - 1,
      h,
      b + T - C - 1,
      m
    );
    const v = p < $ ? p : $;
    for (_ += 1, C -= 2; _ <= v; _ += 1, C -= 2) {
      if (_ !== p && E[_] < P)
        T = E[_];
      else if (T = P - 1, T < g)
        return _ - 1;
      P = E[_], E[_] = T - n(
        g,
        T - 1,
        h,
        b + T - C - 1,
        m
      );
    }
    return $;
  }, s = (p, g, h, b, m, E, $, _, C, T, P) => {
    const v = b - g, R = h - g, S = m - b - R, A = -S - (p - 1), V = -S + (p - 1);
    let L = t;
    const U = p < _ ? p : _;
    for (let k = 0, B = -p; k <= U; k += 1, B += 2) {
      const H = k === 0 || k !== p && L < $[k], Q = H ? $[k] : L, ye = H ? Q : Q + 1, qe = v + ye - B, we = r(
        ye + 1,
        h,
        qe + 1,
        m,
        E
      ), Ce = ye + we;
      if (L = $[k], $[k] = Ce, A <= B && B <= V) {
        const Ne = (p - 1 - (B + S)) / 2;
        if (Ne <= T && C[Ne] - 1 <= Ce) {
          const W = v + Q - (H ? B + 1 : B - 1), xe = n(
            g,
            Q,
            b,
            W,
            E
          ), ge = Q - xe, st = W - xe, De = ge + 1, ft = st + 1;
          P.nChangePreceding = p - 1, p - 1 === De + ft - g - b ? (P.aEndPreceding = g, P.bEndPreceding = b) : (P.aEndPreceding = De, P.bEndPreceding = ft), P.nCommonPreceding = xe, xe !== 0 && (P.aCommonPreceding = De, P.bCommonPreceding = ft), P.nCommonFollowing = we, we !== 0 && (P.aCommonFollowing = ye + 1, P.bCommonFollowing = qe + 1);
          const Ee = Ce + 1, Fe = qe + we + 1;
          return P.nChangeFollowing = p - 1, p - 1 === h + m - Ee - Fe ? (P.aStartFollowing = h, P.bStartFollowing = m) : (P.aStartFollowing = Ee, P.bStartFollowing = Fe), !0;
        }
      }
    }
    return !1;
  }, a = (p, g, h, b, m, E, $, _, C, T, P) => {
    const v = m - h, R = h - g, S = m - b - R, A = S - p, V = S + p;
    let L = t;
    const U = p < T ? p : T;
    for (let k = 0, B = p; k <= U; k += 1, B -= 2) {
      const H = k === 0 || k !== p && C[k] < L, Q = H ? C[k] : L, ye = H ? Q : Q - 1, qe = v + ye - B, we = n(
        g,
        ye - 1,
        b,
        qe - 1,
        E
      ), Ce = ye - we;
      if (L = C[k], C[k] = Ce, A <= B && B <= V) {
        const Ne = (p + (B - S)) / 2;
        if (Ne <= _ && Ce - 1 <= $[Ne]) {
          const W = qe - we;
          if (P.nChangePreceding = p, p === Ce + W - g - b ? (P.aEndPreceding = g, P.bEndPreceding = b) : (P.aEndPreceding = Ce, P.bEndPreceding = W), P.nCommonPreceding = we, we !== 0 && (P.aCommonPreceding = Ce, P.bCommonPreceding = W), P.nChangeFollowing = p - 1, p === 1)
            P.nCommonFollowing = 0, P.aStartFollowing = h, P.bStartFollowing = m;
          else {
            const xe = v + Q - (H ? B - 1 : B + 1), ge = r(
              Q,
              h,
              xe,
              m,
              E
            );
            P.nCommonFollowing = ge, ge !== 0 && (P.aCommonFollowing = Q, P.bCommonFollowing = xe);
            const st = Q + ge, De = xe + ge;
            p - 1 === h + m - st - De ? (P.aStartFollowing = h, P.bStartFollowing = m) : (P.aStartFollowing = st, P.bStartFollowing = De);
          }
          return !0;
        }
      }
    }
    return !1;
  }, u = (p, g, h, b, m, E, $, _, C) => {
    const T = b - g, P = m - h, v = h - g, R = m - b, I = R - v;
    let S = v, A = v;
    if ($[0] = g - 1, _[0] = h, I % 2 === 0) {
      const V = (p || I) / 2, L = (v + R) / 2;
      for (let U = 1; U <= L; U += 1)
        if (S = o(U, h, m, T, E, $, S), U < V)
          A = i(U, g, b, P, E, _, A);
        else if (
          // If a reverse path overlaps a forward path in the same diagonal,
          // return a division of the index intervals at the middle change.
          a(
            U,
            g,
            h,
            b,
            m,
            E,
            $,
            S,
            _,
            A,
            C
          )
        )
          return;
    } else {
      const V = ((p || I) + 1) / 2, L = (v + R + 1) / 2;
      let U = 1;
      for (S = o(U, h, m, T, E, $, S), U += 1; U <= L; U += 1)
        if (A = i(
          U - 1,
          g,
          b,
          P,
          E,
          _,
          A
        ), U < V)
          S = o(U, h, m, T, E, $, S);
        else if (
          // If a forward path overlaps a reverse path in the same diagonal,
          // return a division of the index intervals at the middle change.
          s(
            U,
            g,
            h,
            b,
            m,
            E,
            $,
            S,
            _,
            A,
            C
          )
        )
          return;
    }
    throw new Error(
      `${e}: no overlap aStart=${g} aEnd=${h} bStart=${b} bEnd=${m}`
    );
  }, l = (p, g, h, b, m, E, $, _, C, T) => {
    if (m - b < h - g) {
      if (E = !E, E && $.length === 1) {
        const { foundSubsequence: Ce, isCommon: Ne } = $[0];
        $[1] = {
          foundSubsequence: (W, xe, ge) => {
            Ce(W, ge, xe);
          },
          isCommon: (W, xe) => Ne(xe, W)
        };
      }
      const qe = g, we = h;
      g = b, h = m, b = qe, m = we;
    }
    const { foundSubsequence: P, isCommon: v } = $[E ? 1 : 0];
    u(
      p,
      g,
      h,
      b,
      m,
      v,
      _,
      C,
      T
    );
    const {
      nChangePreceding: R,
      aEndPreceding: I,
      bEndPreceding: S,
      nCommonPreceding: A,
      aCommonPreceding: V,
      bCommonPreceding: L,
      nCommonFollowing: U,
      aCommonFollowing: k,
      bCommonFollowing: B,
      nChangeFollowing: H,
      aStartFollowing: Q,
      bStartFollowing: ye
    } = T;
    g < I && b < S && l(
      R,
      g,
      I,
      b,
      S,
      E,
      $,
      _,
      C,
      T
    ), A !== 0 && P(A, V, L), U !== 0 && P(U, k, B), Q < h && ye < m && l(
      H,
      Q,
      h,
      ye,
      m,
      E,
      $,
      _,
      C,
      T
    );
  }, c = (p, g) => {
    if (typeof g != "number")
      throw new TypeError(`${e}: ${p} typeof ${typeof g} is not a number`);
    if (!Number.isSafeInteger(g))
      throw new RangeError(`${e}: ${p} value ${g} is not a safe integer`);
    if (g < 0)
      throw new RangeError(`${e}: ${p} value ${g} is a negative integer`);
  }, d = (p, g) => {
    const h = typeof g;
    if (h !== "function")
      throw new TypeError(`${e}: ${p} typeof ${h} is not a function`);
  };
  function f(p, g, h, b) {
    c("aLength", p), c("bLength", g), d("isCommon", h), d("foundSubsequence", b);
    const m = r(0, p, 0, g, h);
    if (m !== 0 && b(m, 0, 0), p !== m || g !== m) {
      const E = m, $ = m, _ = n(
        E,
        p - 1,
        $,
        g - 1,
        h
      ), C = p - _, T = g - _, P = m + _;
      p !== P && g !== P && l(
        0,
        E,
        C,
        $,
        T,
        !1,
        [
          {
            foundSubsequence: b,
            isCommon: h
          }
        ],
        [t],
        [t],
        {
          aCommonFollowing: t,
          aCommonPreceding: t,
          aEndPreceding: t,
          aStartFollowing: t,
          bCommonFollowing: t,
          bCommonPreceding: t,
          bEndPreceding: t,
          bStartFollowing: t,
          nChangeFollowing: t,
          nChangePreceding: t,
          nCommonFollowing: t,
          nCommonPreceding: t
        }
      ), _ !== 0 && b(_, C, T);
    }
  }
  return $i;
}
var GE = XE(), Ym = /* @__PURE__ */ OE(GE);
function KE(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function fl(e, t, r, n, o, i) {
  return e.length !== 0 ? r(`${n} ${KE(e, o)}`) : n !== " " ? r(n) : t && i.length !== 0 ? r(`${n} ${i}`) : "";
}
function Zm(e, t, { aColor: r, aIndicator: n, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: i }) {
  return fl(e, t, r, n, o, i);
}
function Qm(e, t, { bColor: r, bIndicator: n, changeLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: i }) {
  return fl(e, t, r, n, o, i);
}
function eg(e, t, { commonColor: r, commonIndicator: n, commonLineTrailingSpaceColor: o, emptyFirstOrLastLinePlaceholder: i }) {
  return fl(e, t, r, n, o, i);
}
function Qf(e, t, r, n, { patchColor: o }) {
  return o(`@@ -${e + 1},${t - e} +${r + 1},${n - r} @@`);
}
function YE(e, t) {
  const r = e.length, n = t.contextLines, o = n + n;
  let i = r, s = !1, a = 0, u = 0;
  for (; u !== r; ) {
    const _ = u;
    for (; u !== r && e[u][0] === ve; )
      u += 1;
    if (_ !== u)
      if (_ === 0)
        u > n && (i -= u - n, s = !0);
      else if (u === r) {
        const C = u - _;
        C > n && (i -= C - n, s = !0);
      } else {
        const C = u - _;
        C > o && (i -= C - o, a += 1);
      }
    for (; u !== r && e[u][0] !== ve; )
      u += 1;
  }
  const l = a !== 0 || s;
  a !== 0 ? i += a + 1 : s && (i += 1);
  const c = i - 1, d = [];
  let f = 0;
  l && d.push("");
  let p = 0, g = 0, h = 0, b = 0;
  const m = (_) => {
    const C = d.length;
    d.push(eg(_, C === 0 || C === c, t)), h += 1, b += 1;
  }, E = (_) => {
    const C = d.length;
    d.push(Zm(_, C === 0 || C === c, t)), h += 1;
  }, $ = (_) => {
    const C = d.length;
    d.push(Qm(_, C === 0 || C === c, t)), b += 1;
  };
  for (u = 0; u !== r; ) {
    let _ = u;
    for (; u !== r && e[u][0] === ve; )
      u += 1;
    if (_ !== u)
      if (_ === 0) {
        u > n && (_ = u - n, p = _, g = _, h = p, b = g);
        for (let C = _; C !== u; C += 1)
          m(e[C][1]);
      } else if (u === r) {
        const C = u - _ > n ? _ + n : u;
        for (let T = _; T !== C; T += 1)
          m(e[T][1]);
      } else {
        const C = u - _;
        if (C > o) {
          const T = _ + n;
          for (let v = _; v !== T; v += 1)
            m(e[v][1]);
          d[f] = Qf(p, h, g, b, t), f = d.length, d.push("");
          const P = C - o;
          p = h + P, g = b + P, h = p, b = g;
          for (let v = u - n; v !== u; v += 1)
            m(e[v][1]);
        } else
          for (let T = _; T !== u; T += 1)
            m(e[T][1]);
      }
    for (; u !== r && e[u][0] === Ae; )
      E(e[u][1]), u += 1;
    for (; u !== r && e[u][0] === Oe; )
      $(e[u][1]), u += 1;
  }
  return l && (d[f] = Qf(p, h, g, b, t)), d.join(`
`);
}
function ZE(e, t) {
  return e.map((r, n, o) => {
    const i = r[1], s = n === 0 || n === o.length - 1;
    switch (r[0]) {
      case Ae:
        return Zm(i, s, t);
      case Oe:
        return Qm(i, s, t);
      default:
        return eg(i, s, t);
    }
  }).join(`
`);
}
const js = (e) => e, tg = 5, QE = 0;
function eS() {
  return {
    aAnnotation: "Expected",
    aColor: wt.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: wt.red,
    bIndicator: "+",
    changeColor: wt.inverse,
    changeLineTrailingSpaceColor: js,
    commonColor: wt.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: js,
    compareKeys: void 0,
    contextLines: tg,
    emptyFirstOrLastLinePlaceholder: "",
    expand: !1,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: wt.yellow,
    printBasicPrototype: !1,
    truncateThreshold: QE,
    truncateAnnotation: "... Diff result is truncated",
    truncateAnnotationColor: js
  };
}
function tS(e) {
  return e && typeof e == "function" ? e : void 0;
}
function rS(e) {
  return typeof e == "number" && Number.isSafeInteger(e) && e >= 0 ? e : tg;
}
function Dt(e = {}) {
  return {
    ...eS(),
    ...e,
    compareKeys: tS(e.compareKeys),
    contextLines: rS(e.contextLines)
  };
}
function Vt(e) {
  return e.length === 1 && e[0].length === 0;
}
function nS(e) {
  let t = 0, r = 0;
  return e.forEach((n) => {
    switch (n[0]) {
      case Ae:
        t += 1;
        break;
      case Oe:
        r += 1;
        break;
    }
  }), {
    a: t,
    b: r
  };
}
function oS({ aAnnotation: e, aColor: t, aIndicator: r, bAnnotation: n, bColor: o, bIndicator: i, includeChangeCounts: s, omitAnnotationLines: a }, u) {
  if (a)
    return "";
  let l = "", c = "";
  if (s) {
    const p = String(u.a), g = String(u.b), h = n.length - e.length, b = " ".repeat(Math.max(0, h)), m = " ".repeat(Math.max(0, -h)), E = g.length - p.length, $ = " ".repeat(Math.max(0, E)), _ = " ".repeat(Math.max(0, -E));
    l = `${b}  ${r} ${$}${p}`, c = `${m}  ${i} ${_}${g}`;
  }
  const d = `${r} ${e}${l}`, f = `${i} ${n}${c}`;
  return `${t(d)}
${o(f)}

`;
}
function pl(e, t, r) {
  return oS(r, nS(e)) + (r.expand ? ZE(e, r) : YE(e, r)) + (t ? r.truncateAnnotationColor(`
${r.truncateAnnotation}`) : "");
}
function fs(e, t, r) {
  const n = Dt(r), [o, i] = rg(Vt(e) ? [] : e, Vt(t) ? [] : t, n);
  return pl(o, i, n);
}
function iS(e, t, r, n, o) {
  if (Vt(e) && Vt(r) && (e = [], r = []), Vt(t) && Vt(n) && (t = [], n = []), e.length !== r.length || t.length !== n.length)
    return fs(e, t, o);
  const [i, s] = rg(r, n, o);
  let a = 0, u = 0;
  return i.forEach((l) => {
    switch (l[0]) {
      case Ae:
        l[1] = e[a], a += 1;
        break;
      case Oe:
        l[1] = t[u], u += 1;
        break;
      default:
        l[1] = t[u], a += 1, u += 1;
    }
  }), pl(i, s, Dt(o));
}
function rg(e, t, r) {
  const n = (r == null ? void 0 : r.truncateThreshold) ?? !1, o = Math.max(Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0), 0), i = n ? Math.min(e.length, o) : e.length, s = n ? Math.min(t.length, o) : t.length, a = i !== e.length || s !== t.length, u = (p, g) => e[p] === t[g], l = [];
  let c = 0, d = 0;
  for (Ym(i, s, u, (p, g, h) => {
    for (; c !== g; c += 1)
      l.push(new be(Ae, e[c]));
    for (; d !== h; d += 1)
      l.push(new be(Oe, t[d]));
    for (; p !== 0; p -= 1, c += 1, d += 1)
      l.push(new be(ve, t[d]));
  }); c !== i; c += 1)
    l.push(new be(Ae, e[c]));
  for (; d !== s; d += 1)
    l.push(new be(Oe, t[d]));
  return [l, a];
}
function ep(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  if (Array.isArray(e))
    return "array";
  if (typeof e == "boolean")
    return "boolean";
  if (typeof e == "function")
    return "function";
  if (typeof e == "number")
    return "number";
  if (typeof e == "string")
    return "string";
  if (typeof e == "bigint")
    return "bigint";
  if (typeof e == "object") {
    if (e != null) {
      if (e.constructor === RegExp)
        return "regexp";
      if (e.constructor === Map)
        return "map";
      if (e.constructor === Set)
        return "set";
      if (e.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof e == "symbol")
    return "symbol";
  throw new Error(`value of unknown type: ${e}`);
}
function tp(e) {
  return e.includes(`\r
`) ? `\r
` : `
`;
}
function sS(e, t, r) {
  const n = (r == null ? void 0 : r.truncateThreshold) ?? !1, o = Math.max(Math.floor((r == null ? void 0 : r.truncateThreshold) ?? 0), 0);
  let i = e.length, s = t.length;
  if (n) {
    const p = e.includes(`
`), g = t.includes(`
`), h = tp(e), b = tp(t), m = p ? `${e.split(h, o).join(h)}
` : e, E = g ? `${t.split(b, o).join(b)}
` : t;
    i = m.length, s = E.length;
  }
  const a = i !== e.length || s !== t.length, u = (p, g) => e[p] === t[g];
  let l = 0, c = 0;
  const d = [];
  return Ym(i, s, u, (p, g, h) => {
    l !== g && d.push(new be(Ae, e.slice(l, g))), c !== h && d.push(new be(Oe, t.slice(c, h))), l = g + p, c = h + p, d.push(new be(ve, t.slice(h, c)));
  }), l !== i && d.push(new be(Ae, e.slice(l))), c !== s && d.push(new be(Oe, t.slice(c))), [d, a];
}
function aS(e, t, r) {
  return t.reduce((n, o) => n + (o[0] === ve ? o[1] : o[0] === e && o[1].length !== 0 ? r(o[1]) : ""), "");
}
class rp {
  constructor(t, r) {
    Y(this, "op");
    Y(this, "line");
    Y(this, "lines");
    Y(this, "changeColor");
    this.op = t, this.line = [], this.lines = [], this.changeColor = r;
  }
  pushSubstring(t) {
    this.pushDiff(new be(this.op, t));
  }
  pushLine() {
    this.lines.push(this.line.length !== 1 ? new be(this.op, aS(this.op, this.line, this.changeColor)) : this.line[0][0] === this.op ? this.line[0] : new be(this.op, this.line[0][1])), this.line.length = 0;
  }
  isLineEmpty() {
    return this.line.length === 0;
  }
  // Minor input to buffer.
  pushDiff(t) {
    this.line.push(t);
  }
  // Main input to buffer.
  align(t) {
    const r = t[1];
    if (r.includes(`
`)) {
      const n = r.split(`
`), o = n.length - 1;
      n.forEach((i, s) => {
        s < o ? (this.pushSubstring(i), this.pushLine()) : i.length !== 0 && this.pushSubstring(i);
      });
    } else
      this.pushDiff(t);
  }
  // Output from buffer.
  moveLinesTo(t) {
    this.isLineEmpty() || this.pushLine(), t.push(...this.lines), this.lines.length = 0;
  }
}
class lS {
  constructor(t, r) {
    Y(this, "deleteBuffer");
    Y(this, "insertBuffer");
    Y(this, "lines");
    this.deleteBuffer = t, this.insertBuffer = r, this.lines = [];
  }
  pushDiffCommonLine(t) {
    this.lines.push(t);
  }
  pushDiffChangeLines(t) {
    const r = t[1].length === 0;
    (!r || this.deleteBuffer.isLineEmpty()) && this.deleteBuffer.pushDiff(t), (!r || this.insertBuffer.isLineEmpty()) && this.insertBuffer.pushDiff(t);
  }
  flushChangeLines() {
    this.deleteBuffer.moveLinesTo(this.lines), this.insertBuffer.moveLinesTo(this.lines);
  }
  // Input to buffer.
  align(t) {
    const r = t[0], n = t[1];
    if (n.includes(`
`)) {
      const o = n.split(`
`), i = o.length - 1;
      o.forEach((s, a) => {
        if (a === 0) {
          const u = new be(r, s);
          this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty() ? (this.flushChangeLines(), this.pushDiffCommonLine(u)) : (this.pushDiffChangeLines(u), this.flushChangeLines());
        } else a < i ? this.pushDiffCommonLine(new be(r, s)) : s.length !== 0 && this.pushDiffChangeLines(new be(r, s));
      });
    } else
      this.pushDiffChangeLines(t);
  }
  // Output from buffer.
  getLines() {
    return this.flushChangeLines(), this.lines;
  }
}
function uS(e, t) {
  const r = new rp(Ae, t), n = new rp(Oe, t), o = new lS(r, n);
  return e.forEach((i) => {
    switch (i[0]) {
      case Ae:
        r.align(i);
        break;
      case Oe:
        n.align(i);
        break;
      default:
        o.align(i);
    }
  }), o.getLines();
}
function cS(e, t) {
  if (t) {
    const r = e.length - 1;
    return e.some((n, o) => n[0] === ve && (o !== r || n[1] !== `
`));
  }
  return e.some((r) => r[0] === ve);
}
function dS(e, t, r) {
  if (e !== t && e.length !== 0 && t.length !== 0) {
    const n = e.includes(`
`) || t.includes(`
`), [o, i] = ng(n ? `${e}
` : e, n ? `${t}
` : t, !0, r);
    if (cS(o, n)) {
      const s = Dt(r), a = uS(o, s.changeColor);
      return pl(a, i, s);
    }
  }
  return fs(e.split(`
`), t.split(`
`), r);
}
function ng(e, t, r, n) {
  const [o, i] = sS(e, t, n);
  return VE(o), [o, i];
}
function _a(e, t) {
  const { commonColor: r } = Dt(t);
  return r(e);
}
const { AsymmetricMatcher: fS, DOMCollection: pS, DOMElement: hS, Immutable: mS, ReactElement: gS, ReactTestComponent: bS } = ds, og = [
  bS,
  gS,
  hS,
  pS,
  mS,
  fS,
  ds.Error
], qa = {
  maxDepth: 20,
  plugins: og
}, ig = {
  callToJSON: !1,
  maxDepth: 8,
  plugins: og
};
function Qt(e, t, r) {
  if (Object.is(e, t))
    return "";
  const n = ep(e);
  let o = n, i = !1;
  if (n === "object" && typeof e.asymmetricMatch == "function") {
    if (e.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof e.getExpectedType != "function")
      return;
    o = e.getExpectedType(), i = o === "string";
  }
  if (o !== ep(t)) {
    let b = function($) {
      return $.length <= h ? $ : `${$.slice(0, h)}...`;
    };
    const { aAnnotation: s, aColor: a, aIndicator: u, bAnnotation: l, bColor: c, bIndicator: d } = Dt(r), f = $a(ig, r);
    let p = rt(e, f), g = rt(t, f);
    const h = 1e5;
    p = b(p), g = b(g);
    const m = `${a(`${u} ${s}:`)} 
${p}`, E = `${c(`${d} ${l}:`)} 
${g}`;
    return `${m}

${E}`;
  }
  if (!i)
    switch (n) {
      case "string":
        return fs(e.split(`
`), t.split(`
`), r);
      case "boolean":
      case "number":
        return yS(e, t, r);
      case "map":
        return Ds(np(e), np(t), r);
      case "set":
        return Ds(op(e), op(t), r);
      default:
        return Ds(e, t, r);
    }
}
function yS(e, t, r) {
  const n = rt(e, qa), o = rt(t, qa);
  return n === o ? "" : fs(n.split(`
`), o.split(`
`), r);
}
function np(e) {
  return new Map(Array.from(e.entries()).sort());
}
function op(e) {
  return new Set(Array.from(e.values()).sort());
}
function Ds(e, t, r) {
  let n, o = !1;
  try {
    const s = $a(qa, r);
    n = ip(e, t, s, r);
  } catch {
    o = !0;
  }
  const i = _a(Km, r);
  if (n === void 0 || n === i) {
    const s = $a(ig, r);
    n = ip(e, t, s, r), n !== i && !o && (n = `${_a(JE, r)}

${n}`);
  }
  return n;
}
function $a(e, t) {
  const { compareKeys: r, printBasicPrototype: n, maxDepth: o } = Dt(t);
  return {
    ...e,
    compareKeys: r,
    printBasicPrototype: n,
    maxDepth: o ?? e.maxDepth
  };
}
function ip(e, t, r, n) {
  const o = {
    ...r,
    indent: 0
  }, i = rt(e, o), s = rt(t, o);
  if (i === s)
    return _a(Km, n);
  {
    const a = rt(e, r), u = rt(t, r);
    return iS(a.split(`
`), u.split(`
`), i.split(`
`), s.split(`
`), n);
  }
}
const sp = 2e4;
function ap(e) {
  return ci(e) === "Object" && typeof e.asymmetricMatch == "function";
}
function lp(e, t) {
  const r = ci(e), n = ci(t);
  return r === n && (r === "Object" || r === "Array");
}
function sg(e, t, r) {
  const { aAnnotation: n, bAnnotation: o } = Dt(r);
  if (typeof t == "string" && typeof e == "string" && t.length > 0 && e.length > 0 && t.length <= sp && e.length <= sp && t !== e) {
    if (t.includes(`
`) || e.includes(`
`))
      return dS(t, e, r);
    const [c] = ng(t, e), d = c.some((h) => h[0] === ve), f = vS(n, o), p = f(n) + CS(up(c, Ae, d)), g = f(o) + RS(up(c, Oe, d));
    return `${p}
${g}`;
  }
  const i = Vf(t, { forceWritable: !0 }), s = Vf(e, { forceWritable: !0 }), { replacedExpected: a, replacedActual: u } = ag(s, i);
  return Qt(a, u, r);
}
function ag(e, t, r = /* @__PURE__ */ new WeakSet(), n = /* @__PURE__ */ new WeakSet()) {
  return e instanceof Error && t instanceof Error && typeof e.cause < "u" && typeof t.cause > "u" ? (delete e.cause, {
    replacedActual: e,
    replacedExpected: t
  }) : lp(e, t) ? r.has(e) || n.has(t) ? {
    replacedActual: e,
    replacedExpected: t
  } : (r.add(e), n.add(t), zm(t).forEach((o) => {
    const i = t[o], s = e[o];
    if (ap(i))
      i.asymmetricMatch(s) && (e[o] = i);
    else if (ap(s))
      s.asymmetricMatch(i) && (t[o] = s);
    else if (lp(s, i)) {
      const a = ag(s, i, r, n);
      e[o] = a.replacedActual, t[o] = a.replacedExpected;
    }
  }), {
    replacedActual: e,
    replacedExpected: t
  }) : {
    replacedActual: e,
    replacedExpected: t
  };
}
function vS(...e) {
  const t = e.reduce((r, n) => n.length > r ? n.length : r, 0);
  return (r) => `${r}: ${" ".repeat(t - r.length)}`;
}
const wS = "·";
function lg(e) {
  return e.replace(/\s+$/gm, (t) => wS.repeat(t.length));
}
function RS(e) {
  return wt.red(lg(We(e)));
}
function CS(e) {
  return wt.green(lg(We(e)));
}
function up(e, t, r) {
  return e.reduce((n, o) => n + (o[0] === ve ? o[1] : o[0] === t ? r ? wt.inverse(o[1]) : o[1] : ""), "");
}
var xS = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}, ES = Object.entries(xS);
function hl(e) {
  return String(e);
}
hl.open = "";
hl.close = "";
function SS(e = !1) {
  let t = typeof process < "u" ? process : void 0, r = (t == null ? void 0 : t.env) || {}, n = (t == null ? void 0 : t.argv) || [];
  return !("NO_COLOR" in r || n.includes("--no-color")) && ("FORCE_COLOR" in r || n.includes("--color") || (t == null ? void 0 : t.platform) === "win32" || e && r.TERM !== "dumb" || "CI" in r) || typeof window < "u" && !!window.chrome;
}
function PS(e = !1) {
  let t = SS(e), r = (s, a, u, l) => {
    let c = "", d = 0;
    do
      c += s.substring(d, l) + u, d = l + a.length, l = s.indexOf(a, d);
    while (~l);
    return c + s.substring(d);
  }, n = (s, a, u = s) => {
    let l = (c) => {
      let d = String(c), f = d.indexOf(a, s.length);
      return ~f ? s + r(d, a, u, f) + a : s + d + a;
    };
    return l.open = s, l.close = a, l;
  }, o = {
    isColorSupported: t
  }, i = (s) => `\x1B[${s}m`;
  for (let [s, a] of ES)
    o[s] = t ? n(
      i(a[0]),
      i(a[1]),
      a[2]
    ) : hl;
  return o;
}
var ze = PS();
function Li(e, t) {
  if (!e)
    throw new Error(t);
}
function Ut(e, t) {
  return typeof t === e;
}
function TS(e) {
  return e instanceof Promise;
}
function di(e, t, r) {
  Object.defineProperty(e, t, r);
}
function Wt(e, t, r) {
  di(e, t, { value: r, configurable: !0, writable: !0 });
}
var Ct = Symbol.for("tinyspy:spy"), _S = /* @__PURE__ */ new Set(), qS = (e) => {
  e.called = !1, e.callCount = 0, e.calls = [], e.results = [], e.resolves = [], e.next = [];
}, $S = (e) => (di(e, Ct, {
  value: { reset: () => qS(e[Ct]) }
}), e[Ct]), Oa = (e) => e[Ct] || $S(e);
function OS(e) {
  Li(
    Ut("function", e) || Ut("undefined", e),
    "cannot spy on a non-function value"
  );
  let t = function(...n) {
    let o = Oa(t);
    o.called = !0, o.callCount++, o.calls.push(n);
    let i = o.next.shift();
    if (i) {
      o.results.push(i);
      let [c, d] = i;
      if (c === "ok")
        return d;
      throw d;
    }
    let s, a = "ok", u = o.results.length;
    if (o.impl)
      try {
        new.target ? s = Reflect.construct(o.impl, n, new.target) : s = o.impl.apply(this, n), a = "ok";
      } catch (c) {
        throw s = c, a = "error", o.results.push([a, c]), c;
      }
    let l = [a, s];
    return TS(s) && s.then(
      (c) => o.resolves[u] = ["ok", c],
      (c) => o.resolves[u] = ["error", c]
    ), o.results.push(l), s;
  };
  Wt(t, "_isMockFunction", !0), Wt(t, "length", e ? e.length : 0), Wt(t, "name", e && e.name || "spy");
  let r = Oa(t);
  return r.reset(), r.impl = e, t;
}
function MS(e) {
  return !!e && e._isMockFunction === !0;
}
var ug = (e, t) => {
  let r = Object.getOwnPropertyDescriptor(e, t);
  if (r)
    return [e, r];
  let n = Object.getPrototypeOf(e);
  for (; n !== null; ) {
    let o = Object.getOwnPropertyDescriptor(n, t);
    if (o)
      return [n, o];
    n = Object.getPrototypeOf(n);
  }
}, cp = (e, t) => {
  t != null && typeof t == "function" && t.prototype != null && Object.setPrototypeOf(e.prototype, t.prototype);
};
function cg(e, t, r) {
  Li(
    !Ut("undefined", e),
    "spyOn could not find an object to spy upon"
  ), Li(
    Ut("object", e) || Ut("function", e),
    "cannot spyOn on a primitive value"
  );
  let [n, o] = (() => {
    if (!Ut("object", t))
      return [t, "value"];
    if ("getter" in t && "setter" in t)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in t)
      return [t.getter, "get"];
    if ("setter" in t)
      return [t.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  })(), [i, s] = ug(e, n) || [];
  Li(
    s || n in e,
    `${String(n)} does not exist`
  );
  let a = !1;
  o === "value" && s && !s.value && s.get && (o = "get", a = !0, r = s.get());
  let u;
  s ? u = s[o] : o !== "value" ? u = () => e[n] : u = e[n], u && kS(u) && (u = u[Ct].getOriginal());
  let l = (p) => {
    let { value: g, ...h } = s || {
      configurable: !0,
      writable: !0
    };
    o !== "value" && delete h.writable, h[o] = p, di(e, n, h);
  }, c = () => {
    i !== e ? Reflect.deleteProperty(e, n) : s && !u ? di(e, n, s) : l(u);
  };
  r || (r = u);
  let d = NS(OS(r), r);
  o === "value" && cp(d, u);
  let f = d[Ct];
  return Wt(f, "restore", c), Wt(f, "getOriginal", () => a ? u() : u), Wt(f, "willCall", (p) => (f.impl = p, d)), l(
    a ? () => (cp(d, r), d) : d
  ), _S.add(d), d;
}
var AS = /* @__PURE__ */ new Set([
  "length",
  "name",
  "prototype"
]);
function IS(e) {
  let t = /* @__PURE__ */ new Set(), r = {};
  for (; e && e !== Object.prototype && e !== Function.prototype; ) {
    let n = [
      ...Object.getOwnPropertyNames(e),
      ...Object.getOwnPropertySymbols(e)
    ];
    for (let o of n)
      r[o] || AS.has(o) || (t.add(o), r[o] = Object.getOwnPropertyDescriptor(e, o));
    e = Object.getPrototypeOf(e);
  }
  return {
    properties: t,
    descriptors: r
  };
}
function NS(e, t) {
  if (!t || // the original is already a spy, so it has all the properties
  Ct in t)
    return e;
  let { properties: r, descriptors: n } = IS(t);
  for (let o of r) {
    let i = n[o];
    ug(e, o) || di(e, o, i);
  }
  return e;
}
function kS(e) {
  return MS(e) && "getOriginal" in e[Ct];
}
const Bi = /* @__PURE__ */ new Set();
function ti(e) {
  return typeof e == "function" && "_isMockFunction" in e && e._isMockFunction;
}
function jS(e, t, r) {
  const o = r ? { [{
    get: "getter",
    set: "setter"
  }[r]]: t } : t;
  let i;
  const s = LS(e, t), a = s && s[r || "value"];
  ti(a) && (i = a.mock._state());
  try {
    const u = cg(e, o), l = dg(u);
    return i && l.mock._state(i), l;
  } catch (u) {
    throw u instanceof TypeError && Symbol.toStringTag && e[Symbol.toStringTag] === "Module" && (u.message.includes("Cannot redefine property") || u.message.includes("Cannot replace module namespace") || u.message.includes("can't redefine non-configurable property")) ? new TypeError(`Cannot spy on export "${String(o)}". Module namespace is not configurable in ESM. See: https://vitest.dev/guide/browser/#limitations`, { cause: u }) : u;
  }
}
let DS = 0;
function dg(e) {
  const t = e;
  let r, n = [], o = !1, i = [], s = [], a = [];
  const u = Oa(e), l = {
    get calls() {
      return u.calls;
    },
    get contexts() {
      return s;
    },
    get instances() {
      return i;
    },
    get invocationCallOrder() {
      return a;
    },
    get results() {
      return u.results.map(([p, g]) => ({
        type: p === "error" ? "throw" : "return",
        value: g
      }));
    },
    get settledResults() {
      return u.resolves.map(([p, g]) => ({
        type: p === "error" ? "rejected" : "fulfilled",
        value: g
      }));
    },
    get lastCall() {
      return u.calls[u.calls.length - 1];
    },
    _state(p) {
      return p && (r = p.implementation, n = p.onceImplementations, o = p.implementationChangedTemporarily), {
        implementation: r,
        onceImplementations: n,
        implementationChangedTemporarily: o
      };
    }
  };
  function c(...p) {
    return i.push(this), s.push(this), a.push(++DS), (o ? r : n.shift() || r || u.getOriginal() || (() => {
    })).apply(this, p);
  }
  let d = t.name;
  t.getMockName = () => d || "vi.fn()", t.mockName = (p) => (d = p, t), t.mockClear = () => (u.reset(), i = [], s = [], a = [], t), t.mockReset = () => (t.mockClear(), r = void 0, n = [], t), t.mockRestore = () => (t.mockReset(), u.restore(), t), Symbol.dispose && (t[Symbol.dispose] = () => t.mockRestore()), t.getMockImplementation = () => o ? r : n.at(0) || r, t.mockImplementation = (p) => (r = p, u.willCall(c), t), t.mockImplementationOnce = (p) => (n.push(p), t);
  function f(p, g) {
    const h = r;
    r = p, u.willCall(c), o = !0;
    const b = () => {
      r = h, o = !1;
    }, m = g();
    return typeof m == "object" && m && typeof m.then == "function" ? m.then(() => (b(), t)) : (b(), t);
  }
  return t.withImplementation = f, t.mockReturnThis = () => t.mockImplementation(function() {
    return this;
  }), t.mockReturnValue = (p) => t.mockImplementation(() => p), t.mockReturnValueOnce = (p) => t.mockImplementationOnce(() => p), t.mockResolvedValue = (p) => t.mockImplementation(() => Promise.resolve(p)), t.mockResolvedValueOnce = (p) => t.mockImplementationOnce(() => Promise.resolve(p)), t.mockRejectedValue = (p) => t.mockImplementation(() => Promise.reject(p)), t.mockRejectedValueOnce = (p) => t.mockImplementationOnce(() => Promise.reject(p)), Object.defineProperty(t, "mock", { get: () => l }), u.willCall(c), Bi.add(t), t;
}
function FS(e) {
  const t = dg(cg({ spy: e || function() {
  } }, "spy"));
  return e && t.mockImplementation(e), t;
}
function LS(e, t) {
  const r = Object.getOwnPropertyDescriptor(e, t);
  if (r)
    return r;
  let n = Object.getPrototypeOf(e);
  for (; n !== null; ) {
    const o = Object.getOwnPropertyDescriptor(n, t);
    if (o)
      return o;
    n = Object.getPrototypeOf(n);
  }
}
const BS = "@@__IMMUTABLE_RECORD__@@", HS = "@@__IMMUTABLE_ITERABLE__@@";
function VS(e) {
  return e && (e[HS] || e[BS]);
}
const US = Object.getPrototypeOf({});
function dp(e) {
  return e instanceof Error ? `<unserializable>: ${e.message}` : typeof e == "string" ? `<unserializable>: ${e}` : "<unserializable>";
}
function vt(e, t = /* @__PURE__ */ new WeakMap()) {
  if (!e || typeof e == "string")
    return e;
  if (e instanceof Error && "toJSON" in e && typeof e.toJSON == "function") {
    const r = e.toJSON();
    return r && r !== e && typeof r == "object" && (typeof e.message == "string" && Oi(() => r.message ?? (r.message = e.message)), typeof e.stack == "string" && Oi(() => r.stack ?? (r.stack = e.stack)), typeof e.name == "string" && Oi(() => r.name ?? (r.name = e.name)), e.cause != null && Oi(() => r.cause ?? (r.cause = vt(e.cause, t)))), vt(r, t);
  }
  if (typeof e == "function")
    return `Function<${e.name || "anonymous"}>`;
  if (typeof e == "symbol")
    return e.toString();
  if (typeof e != "object")
    return e;
  if (typeof Buffer < "u" && e instanceof Buffer)
    return `<Buffer(${e.length}) ...>`;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array)
    return `<Uint8Array(${e.length}) ...>`;
  if (VS(e))
    return vt(e.toJSON(), t);
  if (e instanceof Promise || e.constructor && e.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element < "u" && e instanceof Element)
    return e.tagName;
  if (typeof e.asymmetricMatch == "function")
    return `${e.toString()} ${Vm(e.sample)}`;
  if (typeof e.toJSON == "function")
    return vt(e.toJSON(), t);
  if (t.has(e))
    return t.get(e);
  if (Array.isArray(e)) {
    const r = new Array(e.length);
    return t.set(e, r), e.forEach((n, o) => {
      try {
        r[o] = vt(n, t);
      } catch (i) {
        r[o] = dp(i);
      }
    }), r;
  } else {
    const r = /* @__PURE__ */ Object.create(null);
    t.set(e, r);
    let n = e;
    for (; n && n !== US; )
      Object.getOwnPropertyNames(n).forEach((o) => {
        if (!(o in r))
          try {
            r[o] = vt(e[o], t);
          } catch (i) {
            delete r[o], r[o] = dp(i);
          }
      }), n = Object.getPrototypeOf(n);
    return r;
  }
}
function Oi(e) {
  try {
    return e();
  } catch {
  }
}
function zS(e) {
  return e.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
function fg(e, t, r = /* @__PURE__ */ new WeakSet()) {
  if (!e || typeof e != "object")
    return { message: String(e) };
  const n = e;
  (n.showDiff || n.showDiff === void 0 && n.expected !== void 0 && n.actual !== void 0) && (n.diff = sg(n.actual, n.expected, {
    ...t,
    ...n.diffOptions
  })), "expected" in n && typeof n.expected != "string" && (n.expected = We(n.expected, 10)), "actual" in n && typeof n.actual != "string" && (n.actual = We(n.actual, 10));
  try {
    typeof n.message == "string" && (n.message = zS(n.message));
  } catch {
  }
  try {
    !r.has(n) && typeof n.cause == "object" && (r.add(n), n.cause = fg(n.cause, t, r));
  } catch {
  }
  try {
    return vt(n);
  } catch (o) {
    return vt(new Error(`Failed to fully serialize error: ${o == null ? void 0 : o.message}
Inner error message: ${n == null ? void 0 : n.message}`));
  }
}
var pg = Object.defineProperty, M = (e, t) => pg(e, "name", { value: t, configurable: !0 }), ml = (e, t) => {
  for (var r in t)
    pg(e, r, { get: t[r], enumerable: !0 });
}, $e = {};
ml($e, {
  addChainableMethod: () => Tl,
  addLengthGuard: () => gi,
  addMethod: () => El,
  addProperty: () => xl,
  checkError: () => Ve,
  compareByInspect: () => Yi,
  eql: () => Lg,
  expectTypes: () => wg,
  flag: () => te,
  getActual: () => hs,
  getMessage: () => yl,
  getName: () => gs,
  getOperator: () => Ol,
  getOwnEnumerableProperties: () => $l,
  getOwnEnumerablePropertySymbols: () => ql,
  getPathInfo: () => Cl,
  hasProperty: () => ms,
  inspect: () => oe,
  isNaN: () => Zi,
  isNumeric: () => _e,
  isProxyEnabled: () => mi,
  isRegExp: () => Qi,
  objDisplay: () => Mt,
  overwriteChainableMethod: () => _l,
  overwriteMethod: () => Pl,
  overwriteProperty: () => Sl,
  proxify: () => er,
  test: () => gl,
  transferFlags: () => it,
  type: () => pe
});
var Ve = {};
ml(Ve, {
  compatibleConstructor: () => gg,
  compatibleInstance: () => mg,
  compatibleMessage: () => bg,
  getConstructorName: () => yg,
  getMessage: () => vg
});
function ps(e) {
  return e instanceof Error || Object.prototype.toString.call(e) === "[object Error]";
}
M(ps, "isErrorInstance");
function hg(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
M(hg, "isRegExp");
function mg(e, t) {
  return ps(t) && e === t;
}
M(mg, "compatibleInstance");
function gg(e, t) {
  return ps(t) ? e.constructor === t.constructor || e instanceof t.constructor : (typeof t == "object" || typeof t == "function") && t.prototype ? e.constructor === t || e instanceof t : !1;
}
M(gg, "compatibleConstructor");
function bg(e, t) {
  const r = typeof e == "string" ? e : e.message;
  return hg(t) ? t.test(r) : typeof t == "string" ? r.indexOf(t) !== -1 : !1;
}
M(bg, "compatibleMessage");
function yg(e) {
  let t = e;
  return ps(e) ? t = e.constructor.name : typeof e == "function" && (t = e.name, t === "" && (t = new e().name || t)), t;
}
M(yg, "getConstructorName");
function vg(e) {
  let t = "";
  return e && e.message ? t = e.message : typeof e == "string" && (t = e), t;
}
M(vg, "getMessage");
function te(e, t, r) {
  let n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  if (arguments.length === 3)
    n[t] = r;
  else
    return n[t];
}
M(te, "flag");
function gl(e, t) {
  let r = te(e, "negate"), n = t[0];
  return r ? !n : n;
}
M(gl, "test");
function pe(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
M(pe, "type");
var WS = "captureStackTrace" in Error, Nt, se = (Nt = class extends Error {
  constructor(r = "Unspecified AssertionError", n, o) {
    super(r);
    Y(this, "message");
    this.message = r, WS && Error.captureStackTrace(this, o || Nt);
    for (const i in n)
      i in this || (this[i] = n[i]);
  }
  get name() {
    return "AssertionError";
  }
  get ok() {
    return !1;
  }
  toJSON(r) {
    return {
      ...this,
      name: this.name,
      message: this.message,
      ok: !1,
      stack: r !== !1 ? this.stack : void 0
    };
  }
}, M(Nt, "AssertionError"), Nt);
function wg(e, t) {
  let r = te(e, "message"), n = te(e, "ssfi");
  r = r ? r + ": " : "", e = te(e, "object"), t = t.map(function(s) {
    return s.toLowerCase();
  }), t.sort();
  let o = t.map(function(s, a) {
    let u = ~["a", "e", "i", "o", "u"].indexOf(s.charAt(0)) ? "an" : "a";
    return (t.length > 1 && a === t.length - 1 ? "or " : "") + u + " " + s;
  }).join(", "), i = pe(e).toLowerCase();
  if (!t.some(function(s) {
    return i === s;
  }))
    throw new se(
      r + "object tested must be " + o + ", but " + i + " given",
      void 0,
      n
    );
}
M(wg, "expectTypes");
function hs(e, t) {
  return t.length > 4 ? t[4] : e._obj;
}
M(hs, "getActual");
var fp = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
}, JS = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
}, Kt = "…";
function Rg(e, t) {
  const r = fp[JS[t]] || fp[t] || "";
  return r ? `\x1B[${r[0]}m${String(e)}\x1B[${r[1]}m` : String(e);
}
M(Rg, "colorise");
function Cg({
  showHidden: e = !1,
  depth: t = 2,
  colors: r = !1,
  customInspect: n = !0,
  showProxy: o = !1,
  maxArrayLength: i = 1 / 0,
  breakLength: s = 1 / 0,
  seen: a = [],
  // eslint-disable-next-line no-shadow
  truncate: u = 1 / 0,
  stylize: l = String
} = {}, c) {
  const d = {
    showHidden: !!e,
    depth: Number(t),
    colors: !!r,
    customInspect: !!n,
    showProxy: !!o,
    maxArrayLength: Number(i),
    breakLength: Number(s),
    truncate: Number(u),
    seen: a,
    inspect: c,
    stylize: l
  };
  return d.colors && (d.stylize = Rg), d;
}
M(Cg, "normaliseOptions");
function xg(e) {
  return e >= "\uD800" && e <= "\uDBFF";
}
M(xg, "isHighSurrogate");
function mt(e, t, r = Kt) {
  e = String(e);
  const n = r.length, o = e.length;
  if (n > t && o > n)
    return r;
  if (o > t && o > n) {
    let i = t - n;
    return i > 0 && xg(e[i - 1]) && (i = i - 1), `${e.slice(0, i)}${r}`;
  }
  return e;
}
M(mt, "truncate");
function Ye(e, t, r, n = ", ") {
  r = r || t.inspect;
  const o = e.length;
  if (o === 0)
    return "";
  const i = t.truncate;
  let s = "", a = "", u = "";
  for (let l = 0; l < o; l += 1) {
    const c = l + 1 === e.length, d = l + 2 === e.length;
    u = `${Kt}(${e.length - l})`;
    const f = e[l];
    t.truncate = i - s.length - (c ? 0 : n.length);
    const p = a || r(f, t) + (c ? "" : n), g = s.length + p.length, h = g + u.length;
    if (c && g > i && s.length + u.length <= i || !c && !d && h > i || (a = c ? "" : r(e[l + 1], t) + (d ? "" : n), !c && d && h > i && g + a.length > i))
      break;
    if (s += p, !c && !d && g + a.length >= i) {
      u = `${Kt}(${e.length - l - 1})`;
      break;
    }
    u = "";
  }
  return `${s}${u}`;
}
M(Ye, "inspectList");
function Eg(e) {
  return e.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e : JSON.stringify(e).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
M(Eg, "quoteComplexKey");
function Yt([e, t], r) {
  return r.truncate -= 2, typeof e == "string" ? e = Eg(e) : typeof e != "number" && (e = `[${r.inspect(e, r)}]`), r.truncate -= e.length, t = r.inspect(t, r), `${e}: ${t}`;
}
M(Yt, "inspectProperty");
function Sg(e, t) {
  const r = Object.keys(e).slice(e.length);
  if (!e.length && !r.length)
    return "[]";
  t.truncate -= 4;
  const n = Ye(e, t);
  t.truncate -= n.length;
  let o = "";
  return r.length && (o = Ye(r.map((i) => [i, e[i]]), t, Yt)), `[ ${n}${o ? `, ${o}` : ""} ]`;
}
M(Sg, "inspectArray");
var XS = /* @__PURE__ */ M((e) => typeof Buffer == "function" && e instanceof Buffer ? "Buffer" : e[Symbol.toStringTag] ? e[Symbol.toStringTag] : e.constructor.name, "getArrayName");
function ut(e, t) {
  const r = XS(e);
  t.truncate -= r.length + 4;
  const n = Object.keys(e).slice(e.length);
  if (!e.length && !n.length)
    return `${r}[]`;
  let o = "";
  for (let s = 0; s < e.length; s++) {
    const a = `${t.stylize(mt(e[s], t.truncate), "number")}${s === e.length - 1 ? "" : ", "}`;
    if (t.truncate -= a.length, e[s] !== e.length && t.truncate <= 3) {
      o += `${Kt}(${e.length - e[s] + 1})`;
      break;
    }
    o += a;
  }
  let i = "";
  return n.length && (i = Ye(n.map((s) => [s, e[s]]), t, Yt)), `${r}[ ${o}${i ? `, ${i}` : ""} ]`;
}
M(ut, "inspectTypedArray");
function Pg(e, t) {
  const r = e.toJSON();
  if (r === null)
    return "Invalid Date";
  const n = r.split("T"), o = n[0];
  return t.stylize(`${o}T${mt(n[1], t.truncate - o.length - 1)}`, "date");
}
M(Pg, "inspectDate");
function Ma(e, t) {
  const r = e[Symbol.toStringTag] || "Function", n = e.name;
  return n ? t.stylize(`[${r} ${mt(n, t.truncate - 11)}]`, "special") : t.stylize(`[${r}]`, "special");
}
M(Ma, "inspectFunction");
function Tg([e, t], r) {
  return r.truncate -= 4, e = r.inspect(e, r), r.truncate -= e.length, t = r.inspect(t, r), `${e} => ${t}`;
}
M(Tg, "inspectMapEntry");
function _g(e) {
  const t = [];
  return e.forEach((r, n) => {
    t.push([n, r]);
  }), t;
}
M(_g, "mapToEntries");
function qg(e, t) {
  return e.size === 0 ? "Map{}" : (t.truncate -= 7, `Map{ ${Ye(_g(e), t, Tg)} }`);
}
M(qg, "inspectMap");
var GS = Number.isNaN || ((e) => e !== e);
function Aa(e, t) {
  return GS(e) ? t.stylize("NaN", "number") : e === 1 / 0 ? t.stylize("Infinity", "number") : e === -1 / 0 ? t.stylize("-Infinity", "number") : e === 0 ? t.stylize(1 / e === 1 / 0 ? "+0" : "-0", "number") : t.stylize(mt(String(e), t.truncate), "number");
}
M(Aa, "inspectNumber");
function Ia(e, t) {
  let r = mt(e.toString(), t.truncate - 1);
  return r !== Kt && (r += "n"), t.stylize(r, "bigint");
}
M(Ia, "inspectBigInt");
function $g(e, t) {
  const r = e.toString().split("/")[2], n = t.truncate - (2 + r.length), o = e.source;
  return t.stylize(`/${mt(o, n)}/${r}`, "regexp");
}
M($g, "inspectRegExp");
function Og(e) {
  const t = [];
  return e.forEach((r) => {
    t.push(r);
  }), t;
}
M(Og, "arrayFromSet");
function Mg(e, t) {
  return e.size === 0 ? "Set{}" : (t.truncate -= 7, `Set{ ${Ye(Og(e), t)} }`);
}
M(Mg, "inspectSet");
var pp = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), KS = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, YS = 16;
function Ag(e) {
  return KS[e] || `\\u${`0000${e.charCodeAt(0).toString(YS)}`.slice(-4)}`;
}
M(Ag, "escape");
function Na(e, t) {
  return pp.test(e) && (e = e.replace(pp, Ag)), t.stylize(`'${mt(e, t.truncate - 2)}'`, "string");
}
M(Na, "inspectString");
function ka(e) {
  return "description" in Symbol.prototype ? e.description ? `Symbol(${e.description})` : "Symbol()" : e.toString();
}
M(ka, "inspectSymbol");
var ZS = /* @__PURE__ */ M(() => "Promise{…}", "getPromiseValue"), QS = ZS;
function ri(e, t) {
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e) : [];
  if (r.length === 0 && n.length === 0)
    return "{}";
  if (t.truncate -= 4, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const o = Ye(r.map((a) => [a, e[a]]), t, Yt), i = Ye(n.map((a) => [a, e[a]]), t, Yt);
  t.seen.pop();
  let s = "";
  return o && i && (s = ", "), `{ ${o}${s}${i} }`;
}
M(ri, "inspectObject");
var Fs = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : !1;
function Ig(e, t) {
  let r = "";
  return Fs && Fs in e && (r = e[Fs]), r = r || e.constructor.name, (!r || r === "_class") && (r = "<Anonymous Class>"), t.truncate -= r.length, `${r}${ri(e, t)}`;
}
M(Ig, "inspectClass");
function Ng(e, t) {
  return e.length === 0 ? "Arguments[]" : (t.truncate -= 13, `Arguments[ ${Ye(e, t)} ]`);
}
M(Ng, "inspectArguments");
var eP = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description",
  "cause"
];
function kg(e, t) {
  const r = Object.getOwnPropertyNames(e).filter((s) => eP.indexOf(s) === -1), n = e.name;
  t.truncate -= n.length;
  let o = "";
  if (typeof e.message == "string" ? o = mt(e.message, t.truncate) : r.unshift("message"), o = o ? `: ${o}` : "", t.truncate -= o.length + 5, t.seen = t.seen || [], t.seen.includes(e))
    return "[Circular]";
  t.seen.push(e);
  const i = Ye(r.map((s) => [s, e[s]]), t, Yt);
  return `${n}${o}${i ? ` { ${i} }` : ""}`;
}
M(kg, "inspectObject");
function jg([e, t], r) {
  return r.truncate -= 3, t ? `${r.stylize(String(e), "yellow")}=${r.stylize(`"${t}"`, "string")}` : `${r.stylize(String(e), "yellow")}`;
}
M(jg, "inspectAttribute");
function Xi(e, t) {
  return Ye(e, t, Dg, `
`);
}
M(Xi, "inspectNodeCollection");
function Dg(e, t) {
  switch (e.nodeType) {
    case 1:
      return bl(e, t);
    case 3:
      return t.inspect(e.data, t);
    default:
      return t.inspect(e, t);
  }
}
M(Dg, "inspectNode");
function bl(e, t) {
  const r = e.getAttributeNames(), n = e.tagName.toLowerCase(), o = t.stylize(`<${n}`, "special"), i = t.stylize(">", "special"), s = t.stylize(`</${n}>`, "special");
  t.truncate -= n.length * 2 + 5;
  let a = "";
  r.length > 0 && (a += " ", a += Ye(r.map((c) => [c, e.getAttribute(c)]), t, jg, " ")), t.truncate -= a.length;
  const u = t.truncate;
  let l = Xi(e.children, t);
  return l && l.length > u && (l = `${Kt}(${e.children.length})`), `${o}${a}${i}${l}${s}`;
}
M(bl, "inspectHTML");
var tP = typeof Symbol == "function" && typeof Symbol.for == "function", Ls = tP ? Symbol.for("chai/inspect") : "@@chai/inspect", Bs = Symbol.for("nodejs.util.inspect.custom"), hp = /* @__PURE__ */ new WeakMap(), mp = {}, gp = {
  undefined: /* @__PURE__ */ M((e, t) => t.stylize("undefined", "undefined"), "undefined"),
  null: /* @__PURE__ */ M((e, t) => t.stylize("null", "null"), "null"),
  boolean: /* @__PURE__ */ M((e, t) => t.stylize(String(e), "boolean"), "boolean"),
  Boolean: /* @__PURE__ */ M((e, t) => t.stylize(String(e), "boolean"), "Boolean"),
  number: Aa,
  Number: Aa,
  bigint: Ia,
  BigInt: Ia,
  string: Na,
  String: Na,
  function: Ma,
  Function: Ma,
  symbol: ka,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: ka,
  Array: Sg,
  Date: Pg,
  Map: qg,
  Set: Mg,
  RegExp: $g,
  Promise: QS,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: /* @__PURE__ */ M((e, t) => t.stylize("WeakSet{…}", "special"), "WeakSet"),
  WeakMap: /* @__PURE__ */ M((e, t) => t.stylize("WeakMap{…}", "special"), "WeakMap"),
  Arguments: Ng,
  Int8Array: ut,
  Uint8Array: ut,
  Uint8ClampedArray: ut,
  Int16Array: ut,
  Uint16Array: ut,
  Int32Array: ut,
  Uint32Array: ut,
  Float32Array: ut,
  Float64Array: ut,
  Generator: /* @__PURE__ */ M(() => "", "Generator"),
  DataView: /* @__PURE__ */ M(() => "", "DataView"),
  ArrayBuffer: /* @__PURE__ */ M(() => "", "ArrayBuffer"),
  Error: kg,
  HTMLCollection: Xi,
  NodeList: Xi
}, rP = /* @__PURE__ */ M((e, t, r) => Ls in e && typeof e[Ls] == "function" ? e[Ls](t) : Bs in e && typeof e[Bs] == "function" ? e[Bs](t.depth, t) : "inspect" in e && typeof e.inspect == "function" ? e.inspect(t.depth, t) : "constructor" in e && hp.has(e.constructor) ? hp.get(e.constructor)(e, t) : mp[r] ? mp[r](e, t) : "", "inspectCustom"), nP = Object.prototype.toString;
function Gi(e, t = {}) {
  const r = Cg(t, Gi), { customInspect: n } = r;
  let o = e === null ? "null" : typeof e;
  if (o === "object" && (o = nP.call(e).slice(8, -1)), o in gp)
    return gp[o](e, r);
  if (n && e) {
    const s = rP(e, r, o);
    if (s)
      return typeof s == "string" ? s : Gi(s, r);
  }
  const i = e ? Object.getPrototypeOf(e) : !1;
  return i === Object.prototype || i === null ? ri(e, r) : e && typeof HTMLElement == "function" && e instanceof HTMLElement ? bl(e, r) : "constructor" in e ? e.constructor !== Object ? Ig(e, r) : ri(e, r) : e === Object(e) ? ri(e, r) : r.stylize(String(e), o);
}
M(Gi, "inspect");
var je = {
  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {boolean}
   * @public
   */
  includeStack: !1,
  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {boolean}
   * @public
   */
  showDiff: !0,
  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {number}
   * @public
   */
  truncateThreshold: 40,
  /**
   * ### config.useProxy
   *
   * User configurable property, defines if chai will use a Proxy to throw
   * an error when a non-existent property is read, which protects users
   * from typos when using property-based assertions.
   *
   * Set it to false if you want to disable this feature.
   *
   *     chai.config.useProxy = false;  // disable use of Proxy
   *
   * This feature is automatically disabled regardless of this config value
   * in environments that don't support proxies.
   *
   * @param {boolean}
   * @public
   */
  useProxy: !0,
  /**
   * ### config.proxyExcludedKeys
   *
   * User configurable property, defines which properties should be ignored
   * instead of throwing an error if they do not exist on the assertion.
   * This is only applied if the environment Chai is running in supports proxies and
   * if the `useProxy` configuration setting is enabled.
   * By default, `then` and `inspect` will not throw an error if they do not exist on the
   * assertion object because the `.inspect` property is read by `util.inspect` (for example, when
   * using `console.log` on the assertion object) and `.then` is necessary for promise type-checking.
   *
   *     // By default these keys will not throw an error if they do not exist on the assertion object
   *     chai.config.proxyExcludedKeys = ['then', 'inspect'];
   *
   * @param {Array}
   * @public
   */
  proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"],
  /**
   * ### config.deepEqual
   *
   * User configurable property, defines which a custom function to use for deepEqual
   * comparisons.
   * By default, the function used is the one from the `deep-eql` package without custom comparator.
   *
   *     // use a custom comparator
   *     chai.config.deepEqual = (expected, actual) => {
   *         return chai.util.eql(expected, actual, {
   *             comparator: (expected, actual) => {
   *                 // for non number comparison, use the default behavior
   *                 if(typeof expected !== 'number') return null;
   *                 // allow a difference of 10 between compared numbers
   *                 return typeof actual === 'number' && Math.abs(actual - expected) < 10
   *             }
   *         })
   *     };
   *
   * @param {Function}
   * @public
   */
  deepEqual: null
};
function oe(e, t, r, n) {
  let o = {
    colors: n,
    depth: typeof r > "u" ? 2 : r,
    showHidden: t,
    truncate: je.truncateThreshold ? je.truncateThreshold : 1 / 0
  };
  return Gi(e, o);
}
M(oe, "inspect");
function Mt(e) {
  let t = oe(e), r = Object.prototype.toString.call(e);
  if (je.truncateThreshold && t.length >= je.truncateThreshold) {
    if (r === "[object Function]")
      return !e.name || e.name === "" ? "[Function]" : "[Function: " + e.name + "]";
    if (r === "[object Array]")
      return "[ Array(" + e.length + ") ]";
    if (r === "[object Object]") {
      let n = Object.keys(e);
      return "{ Object (" + (n.length > 2 ? n.splice(0, 2).join(", ") + ", ..." : n.join(", ")) + ") }";
    } else
      return t;
  } else
    return t;
}
M(Mt, "objDisplay");
function yl(e, t) {
  let r = te(e, "negate"), n = te(e, "object"), o = t[3], i = hs(e, t), s = r ? t[2] : t[1], a = te(e, "message");
  return typeof s == "function" && (s = s()), s = s || "", s = s.replace(/#\{this\}/g, function() {
    return Mt(n);
  }).replace(/#\{act\}/g, function() {
    return Mt(i);
  }).replace(/#\{exp\}/g, function() {
    return Mt(o);
  }), a ? a + ": " + s : s;
}
M(yl, "getMessage");
function it(e, t, r) {
  let n = e.__flags || (e.__flags = /* @__PURE__ */ Object.create(null));
  t.__flags || (t.__flags = /* @__PURE__ */ Object.create(null)), r = arguments.length === 3 ? r : !0;
  for (let o in n)
    (r || o !== "object" && o !== "ssfi" && o !== "lockSsfi" && o != "message") && (t.__flags[o] = n[o]);
}
M(it, "transferFlags");
function ja(e) {
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  const t = e[Symbol.toStringTag];
  return typeof t == "string" ? t : Object.prototype.toString.call(e).slice(8, -1);
}
M(ja, "type");
function vl() {
  this._key = "chai/deep-eql__" + Math.random() + Date.now();
}
M(vl, "FakeMap");
vl.prototype = {
  get: /* @__PURE__ */ M(function(t) {
    return t[this._key];
  }, "get"),
  set: /* @__PURE__ */ M(function(t, r) {
    Object.isExtensible(t) && Object.defineProperty(t, this._key, {
      value: r,
      configurable: !0
    });
  }, "set")
};
var Fg = typeof WeakMap == "function" ? WeakMap : vl;
function Da(e, t, r) {
  if (!r || jt(e) || jt(t))
    return null;
  var n = r.get(e);
  if (n) {
    var o = n.get(t);
    if (typeof o == "boolean")
      return o;
  }
  return null;
}
M(Da, "memoizeCompare");
function ei(e, t, r, n) {
  if (!(!r || jt(e) || jt(t))) {
    var o = r.get(e);
    o ? o.set(t, n) : (o = new Fg(), o.set(t, n), r.set(e, o));
  }
}
M(ei, "memoizeSet");
var Lg = hi;
function hi(e, t, r) {
  if (r && r.comparator)
    return Fa(e, t, r);
  var n = wl(e, t);
  return n !== null ? n : Fa(e, t, r);
}
M(hi, "deepEqual");
function wl(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && // eslint-disable-line no-self-compare
  t !== t ? !0 : jt(e) || jt(t) ? !1 : null;
}
M(wl, "simpleEqual");
function Fa(e, t, r) {
  r = r || {}, r.memoize = r.memoize === !1 ? !1 : r.memoize || new Fg();
  var n = r && r.comparator, o = Da(e, t, r.memoize);
  if (o !== null)
    return o;
  var i = Da(t, e, r.memoize);
  if (i !== null)
    return i;
  if (n) {
    var s = n(e, t);
    if (s === !1 || s === !0)
      return ei(e, t, r.memoize, s), s;
    var a = wl(e, t);
    if (a !== null)
      return a;
  }
  var u = ja(e);
  if (u !== ja(t))
    return ei(e, t, r.memoize, !1), !1;
  ei(e, t, r.memoize, !0);
  var l = Bg(e, t, u, r);
  return ei(e, t, r.memoize, l), l;
}
M(Fa, "extensiveDeepEqual");
function Bg(e, t, r, n) {
  switch (r) {
    case "String":
    case "Number":
    case "Boolean":
    case "Date":
      return hi(e.valueOf(), t.valueOf());
    case "Promise":
    case "Symbol":
    case "function":
    case "WeakMap":
    case "WeakSet":
      return e === t;
    case "Error":
      return Rl(e, t, ["name", "message", "code"], n);
    case "Arguments":
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "Array":
      return xt(e, t, n);
    case "RegExp":
      return Hg(e, t);
    case "Generator":
      return Vg(e, t, n);
    case "DataView":
      return xt(new Uint8Array(e.buffer), new Uint8Array(t.buffer), n);
    case "ArrayBuffer":
      return xt(new Uint8Array(e), new Uint8Array(t), n);
    case "Set":
      return La(e, t, n);
    case "Map":
      return La(e, t, n);
    case "Temporal.PlainDate":
    case "Temporal.PlainTime":
    case "Temporal.PlainDateTime":
    case "Temporal.Instant":
    case "Temporal.ZonedDateTime":
    case "Temporal.PlainYearMonth":
    case "Temporal.PlainMonthDay":
      return e.equals(t);
    case "Temporal.Duration":
      return e.total("nanoseconds") === t.total("nanoseconds");
    case "Temporal.TimeZone":
    case "Temporal.Calendar":
      return e.toString() === t.toString();
    default:
      return zg(e, t, n);
  }
}
M(Bg, "extensiveDeepEqualByType");
function Hg(e, t) {
  return e.toString() === t.toString();
}
M(Hg, "regexpEqual");
function La(e, t, r) {
  try {
    if (e.size !== t.size)
      return !1;
    if (e.size === 0)
      return !0;
  } catch {
    return !1;
  }
  var n = [], o = [];
  return e.forEach(/* @__PURE__ */ M(function(s, a) {
    n.push([s, a]);
  }, "gatherEntries")), t.forEach(/* @__PURE__ */ M(function(s, a) {
    o.push([s, a]);
  }, "gatherEntries")), xt(n.sort(), o.sort(), r);
}
M(La, "entriesEqual");
function xt(e, t, r) {
  var n = e.length;
  if (n !== t.length)
    return !1;
  if (n === 0)
    return !0;
  for (var o = -1; ++o < n; )
    if (hi(e[o], t[o], r) === !1)
      return !1;
  return !0;
}
M(xt, "iterableEqual");
function Vg(e, t, r) {
  return xt(Ki(e), Ki(t), r);
}
M(Vg, "generatorEqual");
function Ug(e) {
  return typeof Symbol < "u" && typeof e == "object" && typeof Symbol.iterator < "u" && typeof e[Symbol.iterator] == "function";
}
M(Ug, "hasIteratorFunction");
function Ba(e) {
  if (Ug(e))
    try {
      return Ki(e[Symbol.iterator]());
    } catch {
      return [];
    }
  return [];
}
M(Ba, "getIteratorEntries");
function Ki(e) {
  for (var t = e.next(), r = [t.value]; t.done === !1; )
    t = e.next(), r.push(t.value);
  return r;
}
M(Ki, "getGeneratorEntries");
function Ha(e) {
  var t = [];
  for (var r in e)
    t.push(r);
  return t;
}
M(Ha, "getEnumerableKeys");
function Va(e) {
  for (var t = [], r = Object.getOwnPropertySymbols(e), n = 0; n < r.length; n += 1) {
    var o = r[n];
    Object.getOwnPropertyDescriptor(e, o).enumerable && t.push(o);
  }
  return t;
}
M(Va, "getEnumerableSymbols");
function Rl(e, t, r, n) {
  var o = r.length;
  if (o === 0)
    return !0;
  for (var i = 0; i < o; i += 1)
    if (hi(e[r[i]], t[r[i]], n) === !1)
      return !1;
  return !0;
}
M(Rl, "keysEqual");
function zg(e, t, r) {
  var n = Ha(e), o = Ha(t), i = Va(e), s = Va(t);
  if (n = n.concat(i), o = o.concat(s), n.length && n.length === o.length)
    return xt(Ua(n).sort(), Ua(o).sort()) === !1 ? !1 : Rl(e, t, n, r);
  var a = Ba(e), u = Ba(t);
  return a.length && a.length === u.length ? (a.sort(), u.sort(), xt(a, u, r)) : n.length === 0 && a.length === 0 && o.length === 0 && u.length === 0;
}
M(zg, "objectEqual");
function jt(e) {
  return e === null || typeof e != "object";
}
M(jt, "isPrimitive");
function Ua(e) {
  return e.map(/* @__PURE__ */ M(function(r) {
    return typeof r == "symbol" ? r.toString() : r;
  }, "mapSymbol"));
}
M(Ua, "mapSymbols");
function ms(e, t) {
  return typeof e > "u" || e === null ? !1 : t in Object(e);
}
M(ms, "hasProperty");
function Wg(e) {
  return e.replace(/([^\\])\[/g, "$1.[").match(/(\\\.|[^.]+?)+/g).map((n) => {
    if (n === "constructor" || n === "__proto__" || n === "prototype")
      return {};
    const i = /^\[(\d+)\]$/.exec(n);
    let s = null;
    return i ? s = { i: parseFloat(i[1]) } : s = { p: n.replace(/\\([.[\]])/g, "$1") }, s;
  });
}
M(Wg, "parsePath");
function za(e, t, r) {
  let n = e, o = null;
  r = typeof r > "u" ? t.length : r;
  for (let i = 0; i < r; i++) {
    const s = t[i];
    n && (typeof s.p > "u" ? n = n[s.i] : n = n[s.p], i === r - 1 && (o = n));
  }
  return o;
}
M(za, "internalGetPathValue");
function Cl(e, t) {
  const r = Wg(t), n = r[r.length - 1], o = {
    parent: r.length > 1 ? za(e, r, r.length - 1) : e,
    name: n.p || n.i,
    value: za(e, r)
  };
  return o.exists = ms(o.parent, o.name), o;
}
M(Cl, "getPathInfo");
var kt, w = (kt = class {
  /**
   * Creates object for chaining.
   * `Assertion` objects contain metadata in the form of flags. Three flags can
   * be assigned during instantiation by passing arguments to this constructor:
   *
   * - `object`: This flag contains the target of the assertion. For example, in
   * the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
   * contain `numKittens` so that the `equal` assertion can reference it when
   * needed.
   *
   * - `message`: This flag contains an optional custom error message to be
   * prepended to the error message that's generated by the assertion when it
   * fails.
   *
   * - `ssfi`: This flag stands for "start stack function indicator". It
   * contains a function reference that serves as the starting point for
   * removing frames from the stack trace of the error that's created by the
   * assertion when it fails. The goal is to provide a cleaner stack trace to
   * end users by removing Chai's internal functions. Note that it only works
   * in environments that support `Error.captureStackTrace`, and only when
   * `Chai.config.includeStack` hasn't been set to `false`.
   *
   * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
   * should retain its current value, even as assertions are chained off of
   * this object. This is usually set to `true` when creating a new assertion
   * from within another assertion. It's also temporarily set to `true` before
   * an overwritten assertion gets called by the overwriting assertion.
   *
   * - `eql`: This flag contains the deepEqual function to be used by the assertion.
   *
   * @param {unknown} obj target of the assertion
   * @param {string} [msg] (optional) custom error message
   * @param {Function} [ssfi] (optional) starting point for removing stack frames
   * @param {boolean} [lockSsfi] (optional) whether or not the ssfi flag is locked
   */
  constructor(t, r, n, o) {
    /** @type {{}} */
    Y(this, "__flags", {});
    return te(this, "ssfi", n || kt), te(this, "lockSsfi", o), te(this, "object", t), te(this, "message", r), te(this, "eql", je.deepEqual || Lg), er(this);
  }
  /** @returns {boolean} */
  static get includeStack() {
    return console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    ), je.includeStack;
  }
  /** @param {boolean} value */
  static set includeStack(t) {
    console.warn(
      "Assertion.includeStack is deprecated, use chai.config.includeStack instead."
    ), je.includeStack = t;
  }
  /** @returns {boolean} */
  static get showDiff() {
    return console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    ), je.showDiff;
  }
  /** @param {boolean} value */
  static set showDiff(t) {
    console.warn(
      "Assertion.showDiff is deprecated, use chai.config.showDiff instead."
    ), je.showDiff = t;
  }
  /**
   * @param {string} name
   * @param {Function} fn
   */
  static addProperty(t, r) {
    xl(this.prototype, t, r);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   */
  static addMethod(t, r) {
    El(this.prototype, t, r);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   * @param {Function} chainingBehavior
   */
  static addChainableMethod(t, r, n) {
    Tl(this.prototype, t, r, n);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   */
  static overwriteProperty(t, r) {
    Sl(this.prototype, t, r);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   */
  static overwriteMethod(t, r) {
    Pl(this.prototype, t, r);
  }
  /**
   * @param {string} name
   * @param {Function} fn
   * @param {Function} chainingBehavior
   */
  static overwriteChainableMethod(t, r, n) {
    _l(this.prototype, t, r, n);
  }
  /**
   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
   *
   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
   *
   * @name assert
   * @param {unknown} _expr to be tested
   * @param {string | Function} msg or function that returns message to display if expression fails
   * @param {string | Function} _negateMsg or function that returns negatedMessage to display if negated expression fails
   * @param {unknown} expected value (remember to check for negation)
   * @param {unknown} _actual (optional) will default to `this.obj`
   * @param {boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
   * @returns {void}
   */
  assert(t, r, n, o, i, s) {
    const a = gl(this, arguments);
    if (s !== !1 && (s = !0), o === void 0 && i === void 0 && (s = !1), je.showDiff !== !0 && (s = !1), !a) {
      r = yl(this, arguments);
      const l = {
        actual: hs(this, arguments),
        expected: o,
        showDiff: s
      }, c = Ol(this, arguments);
      throw c && (l.operator = c), new se(
        r,
        l,
        // @ts-expect-error Not sure what to do about these types yet
        je.includeStack ? this.assert : te(this, "ssfi")
      );
    }
  }
  /**
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @returns {unknown}
   */
  get _obj() {
    return te(this, "object");
  }
  /**
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @param {unknown} val
   */
  set _obj(t) {
    te(this, "object", t);
  }
}, M(kt, "Assertion"), kt);
function mi() {
  return je.useProxy && typeof Proxy < "u" && typeof Reflect < "u";
}
M(mi, "isProxyEnabled");
function xl(e, t, r) {
  r = r === void 0 ? function() {
  } : r, Object.defineProperty(e, t, {
    get: /* @__PURE__ */ M(function n() {
      !mi() && !te(this, "lockSsfi") && te(this, "ssfi", n);
      let o = r.call(this);
      if (o !== void 0) return o;
      let i = new w();
      return it(this, i), i;
    }, "propertyGetter"),
    configurable: !0
  });
}
M(xl, "addProperty");
var oP = Object.getOwnPropertyDescriptor(function() {
}, "length");
function gi(e, t, r) {
  return oP.configurable && Object.defineProperty(e, "length", {
    get: /* @__PURE__ */ M(function() {
      throw Error(
        r ? "Invalid Chai property: " + t + '.length. Due to a compatibility issue, "length" cannot directly follow "' + t + '". Use "' + t + '.lengthOf" instead.' : "Invalid Chai property: " + t + '.length. See docs for proper usage of "' + t + '".'
      );
    }, "get")
  }), e;
}
M(gi, "addLengthGuard");
function Jg(e) {
  let t = Object.getOwnPropertyNames(e);
  function r(o) {
    t.indexOf(o) === -1 && t.push(o);
  }
  M(r, "addProperty");
  let n = Object.getPrototypeOf(e);
  for (; n !== null; )
    Object.getOwnPropertyNames(n).forEach(r), n = Object.getPrototypeOf(n);
  return t;
}
M(Jg, "getProperties");
var bp = ["__flags", "__methods", "_obj", "assert"];
function er(e, t) {
  return mi() ? new Proxy(e, {
    get: /* @__PURE__ */ M(function r(n, o) {
      if (typeof o == "string" && je.proxyExcludedKeys.indexOf(o) === -1 && !Reflect.has(n, o)) {
        if (t)
          throw Error(
            "Invalid Chai property: " + t + "." + o + '. See docs for proper usage of "' + t + '".'
          );
        let i = null, s = 4;
        throw Jg(n).forEach(function(a) {
          if (
            // we actually mean to check `Object.prototype` here
            // eslint-disable-next-line no-prototype-builtins
            !Object.prototype.hasOwnProperty(a) && bp.indexOf(a) === -1
          ) {
            let u = Xg(o, a, s);
            u < s && (i = a, s = u);
          }
        }), Error(
          i !== null ? "Invalid Chai property: " + o + '. Did you mean "' + i + '"?' : "Invalid Chai property: " + o
        );
      }
      return bp.indexOf(o) === -1 && !te(n, "lockSsfi") && te(n, "ssfi", r), Reflect.get(n, o);
    }, "proxyGetter")
  }) : e;
}
M(er, "proxify");
function Xg(e, t, r) {
  if (Math.abs(e.length - t.length) >= r)
    return r;
  let n = [];
  for (let o = 0; o <= e.length; o++)
    n[o] = Array(t.length + 1).fill(0), n[o][0] = o;
  for (let o = 0; o < t.length; o++)
    n[0][o] = o;
  for (let o = 1; o <= e.length; o++) {
    let i = e.charCodeAt(o - 1);
    for (let s = 1; s <= t.length; s++) {
      if (Math.abs(o - s) >= r) {
        n[o][s] = r;
        continue;
      }
      n[o][s] = Math.min(
        n[o - 1][s] + 1,
        n[o][s - 1] + 1,
        n[o - 1][s - 1] + (i === t.charCodeAt(s - 1) ? 0 : 1)
      );
    }
  }
  return n[e.length][t.length];
}
M(Xg, "stringDistanceCapped");
function El(e, t, r) {
  let n = /* @__PURE__ */ M(function() {
    te(this, "lockSsfi") || te(this, "ssfi", n);
    let o = r.apply(this, arguments);
    if (o !== void 0) return o;
    let i = new w();
    return it(this, i), i;
  }, "methodWrapper");
  gi(n, t, !1), e[t] = er(n, t);
}
M(El, "addMethod");
function Sl(e, t, r) {
  let n = Object.getOwnPropertyDescriptor(e, t), o = /* @__PURE__ */ M(function() {
  }, "_super");
  n && typeof n.get == "function" && (o = n.get), Object.defineProperty(e, t, {
    get: /* @__PURE__ */ M(function i() {
      !mi() && !te(this, "lockSsfi") && te(this, "ssfi", i);
      let s = te(this, "lockSsfi");
      te(this, "lockSsfi", !0);
      let a = r(o).call(this);
      if (te(this, "lockSsfi", s), a !== void 0)
        return a;
      let u = new w();
      return it(this, u), u;
    }, "overwritingPropertyGetter"),
    configurable: !0
  });
}
M(Sl, "overwriteProperty");
function Pl(e, t, r) {
  let n = e[t], o = /* @__PURE__ */ M(function() {
    throw new Error(t + " is not a function");
  }, "_super");
  n && typeof n == "function" && (o = n);
  let i = /* @__PURE__ */ M(function() {
    te(this, "lockSsfi") || te(this, "ssfi", i);
    let s = te(this, "lockSsfi");
    te(this, "lockSsfi", !0);
    let a = r(o).apply(this, arguments);
    if (te(this, "lockSsfi", s), a !== void 0)
      return a;
    let u = new w();
    return it(this, u), u;
  }, "overwritingMethodWrapper");
  gi(i, t, !1), e[t] = er(i, t);
}
M(Pl, "overwriteMethod");
var iP = typeof Object.setPrototypeOf == "function", yp = /* @__PURE__ */ M(function() {
}, "testFn"), sP = Object.getOwnPropertyNames(yp).filter(function(e) {
  let t = Object.getOwnPropertyDescriptor(yp, e);
  return typeof t != "object" ? !0 : !t.configurable;
}), aP = Function.prototype.call, lP = Function.prototype.apply;
function Tl(e, t, r, n) {
  typeof n != "function" && (n = /* @__PURE__ */ M(function() {
  }, "chainingBehavior"));
  let o = {
    method: r,
    chainingBehavior: n
  };
  e.__methods || (e.__methods = {}), e.__methods[t] = o, Object.defineProperty(e, t, {
    get: /* @__PURE__ */ M(function() {
      o.chainingBehavior.call(this);
      let s = /* @__PURE__ */ M(function() {
        te(this, "lockSsfi") || te(this, "ssfi", s);
        let a = o.method.apply(this, arguments);
        if (a !== void 0)
          return a;
        let u = new w();
        return it(this, u), u;
      }, "chainableMethodWrapper");
      if (gi(s, t, !0), iP) {
        let a = Object.create(this);
        a.call = aP, a.apply = lP, Object.setPrototypeOf(s, a);
      } else
        Object.getOwnPropertyNames(e).forEach(function(u) {
          if (sP.indexOf(u) !== -1)
            return;
          let l = Object.getOwnPropertyDescriptor(e, u);
          Object.defineProperty(s, u, l);
        });
      return it(this, s), er(s);
    }, "chainableMethodGetter"),
    configurable: !0
  });
}
M(Tl, "addChainableMethod");
function _l(e, t, r, n) {
  let o = e.__methods[t], i = o.chainingBehavior;
  o.chainingBehavior = /* @__PURE__ */ M(function() {
    let u = n(i).call(this);
    if (u !== void 0)
      return u;
    let l = new w();
    return it(this, l), l;
  }, "overwritingChainableMethodGetter");
  let s = o.method;
  o.method = /* @__PURE__ */ M(function() {
    let u = r(s).apply(this, arguments);
    if (u !== void 0)
      return u;
    let l = new w();
    return it(this, l), l;
  }, "overwritingChainableMethodWrapper");
}
M(_l, "overwriteChainableMethod");
function Yi(e, t) {
  return oe(e) < oe(t) ? -1 : 1;
}
M(Yi, "compareByInspect");
function ql(e) {
  return typeof Object.getOwnPropertySymbols != "function" ? [] : Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.getOwnPropertyDescriptor(e, t).enumerable;
  });
}
M(ql, "getOwnEnumerablePropertySymbols");
function $l(e) {
  return Object.keys(e).concat(ql(e));
}
M($l, "getOwnEnumerableProperties");
var Zi = Number.isNaN;
function Gg(e) {
  let t = pe(e);
  return ["Array", "Object", "Function"].indexOf(t) !== -1;
}
M(Gg, "isObjectType");
function Ol(e, t) {
  let r = te(e, "operator"), n = te(e, "negate"), o = t[3], i = n ? t[2] : t[1];
  if (r)
    return r;
  if (typeof i == "function" && (i = i()), i = i || "", !i || /\shave\s/.test(i))
    return;
  let s = Gg(o);
  return /\snot\s/.test(i) ? s ? "notDeepStrictEqual" : "notStrictEqual" : s ? "deepStrictEqual" : "strictEqual";
}
M(Ol, "getOperator");
function gs(e) {
  return e.name;
}
M(gs, "getName");
function Qi(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
M(Qi, "isRegExp");
function _e(e) {
  return ["Number", "BigInt"].includes(pe(e));
}
M(_e, "isNumeric");
var { flag: q } = $e;
[
  "to",
  "be",
  "been",
  "is",
  "and",
  "has",
  "have",
  "with",
  "that",
  "which",
  "at",
  "of",
  "same",
  "but",
  "does",
  "still",
  "also"
].forEach(function(e) {
  w.addProperty(e);
});
w.addProperty("not", function() {
  q(this, "negate", !0);
});
w.addProperty("deep", function() {
  q(this, "deep", !0);
});
w.addProperty("nested", function() {
  q(this, "nested", !0);
});
w.addProperty("own", function() {
  q(this, "own", !0);
});
w.addProperty("ordered", function() {
  q(this, "ordered", !0);
});
w.addProperty("any", function() {
  q(this, "any", !0), q(this, "all", !1);
});
w.addProperty("all", function() {
  q(this, "all", !0), q(this, "any", !1);
});
var vp = {
  function: [
    "function",
    "asyncfunction",
    "generatorfunction",
    "asyncgeneratorfunction"
  ],
  asyncfunction: ["asyncfunction", "asyncgeneratorfunction"],
  generatorfunction: ["generatorfunction", "asyncgeneratorfunction"],
  asyncgeneratorfunction: ["asyncgeneratorfunction"]
};
function Ml(e, t) {
  t && q(this, "message", t), e = e.toLowerCase();
  let r = q(this, "object"), n = ~["a", "e", "i", "o", "u"].indexOf(e.charAt(0)) ? "an " : "a ";
  const o = pe(r).toLowerCase();
  vp.function.includes(e) ? this.assert(
    vp[e].includes(o),
    "expected #{this} to be " + n + e,
    "expected #{this} not to be " + n + e
  ) : this.assert(
    e === o,
    "expected #{this} to be " + n + e,
    "expected #{this} not to be " + n + e
  );
}
M(Ml, "an");
w.addChainableMethod("an", Ml);
w.addChainableMethod("a", Ml);
function Kg(e, t) {
  return Zi(e) && Zi(t) || e === t;
}
M(Kg, "SameValueZero");
function bi() {
  q(this, "contains", !0);
}
M(bi, "includeChainingBehavior");
function yi(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = pe(r).toLowerCase(), o = q(this, "message"), i = q(this, "negate"), s = q(this, "ssfi"), a = q(this, "deep"), u = a ? "deep " : "", l = a ? q(this, "eql") : Kg;
  o = o ? o + ": " : "";
  let c = !1;
  switch (n) {
    case "string":
      c = r.indexOf(e) !== -1;
      break;
    case "weakset":
      if (a)
        throw new se(
          o + "unable to use .deep.include with WeakSet",
          void 0,
          s
        );
      c = r.has(e);
      break;
    case "map":
      r.forEach(function(d) {
        c = c || l(d, e);
      });
      break;
    case "set":
      a ? r.forEach(function(d) {
        c = c || l(d, e);
      }) : c = r.has(e);
      break;
    case "array":
      a ? c = r.some(function(d) {
        return l(d, e);
      }) : c = r.indexOf(e) !== -1;
      break;
    default: {
      if (e !== Object(e))
        throw new se(
          o + "the given combination of arguments (" + n + " and " + pe(e).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + pe(e).toLowerCase(),
          void 0,
          s
        );
      let d = Object.keys(e), f = null, p = 0;
      if (d.forEach(function(g) {
        let h = new w(r);
        if (it(this, h, !0), q(h, "lockSsfi", !0), !i || d.length === 1) {
          h.property(g, e[g]);
          return;
        }
        try {
          h.property(g, e[g]);
        } catch (b) {
          if (!Ve.compatibleConstructor(b, se))
            throw b;
          f === null && (f = b), p++;
        }
      }, this), i && d.length > 1 && p === d.length)
        throw f;
      return;
    }
  }
  this.assert(
    c,
    "expected #{this} to " + u + "include " + oe(e),
    "expected #{this} to not " + u + "include " + oe(e)
  );
}
M(yi, "include");
w.addChainableMethod("include", yi, bi);
w.addChainableMethod("contain", yi, bi);
w.addChainableMethod("contains", yi, bi);
w.addChainableMethod("includes", yi, bi);
w.addProperty("ok", function() {
  this.assert(
    q(this, "object"),
    "expected #{this} to be truthy",
    "expected #{this} to be falsy"
  );
});
w.addProperty("true", function() {
  this.assert(
    q(this, "object") === !0,
    "expected #{this} to be true",
    "expected #{this} to be false",
    !q(this, "negate")
  );
});
w.addProperty("numeric", function() {
  const e = q(this, "object");
  this.assert(
    ["Number", "BigInt"].includes(pe(e)),
    "expected #{this} to be numeric",
    "expected #{this} to not be numeric",
    !q(this, "negate")
  );
});
w.addProperty("callable", function() {
  const e = q(this, "object"), t = q(this, "ssfi"), r = q(this, "message"), n = r ? `${r}: ` : "", o = q(this, "negate"), i = o ? `${n}expected ${oe(e)} not to be a callable function` : `${n}expected ${oe(e)} to be a callable function`, s = [
    "Function",
    "AsyncFunction",
    "GeneratorFunction",
    "AsyncGeneratorFunction"
  ].includes(pe(e));
  if (s && o || !s && !o)
    throw new se(i, void 0, t);
});
w.addProperty("false", function() {
  this.assert(
    q(this, "object") === !1,
    "expected #{this} to be false",
    "expected #{this} to be true",
    !!q(this, "negate")
  );
});
w.addProperty("null", function() {
  this.assert(
    q(this, "object") === null,
    "expected #{this} to be null",
    "expected #{this} not to be null"
  );
});
w.addProperty("undefined", function() {
  this.assert(
    q(this, "object") === void 0,
    "expected #{this} to be undefined",
    "expected #{this} not to be undefined"
  );
});
w.addProperty("NaN", function() {
  this.assert(
    Zi(q(this, "object")),
    "expected #{this} to be NaN",
    "expected #{this} not to be NaN"
  );
});
function Al() {
  let e = q(this, "object");
  this.assert(
    e != null,
    "expected #{this} to exist",
    "expected #{this} to not exist"
  );
}
M(Al, "assertExist");
w.addProperty("exist", Al);
w.addProperty("exists", Al);
w.addProperty("empty", function() {
  let e = q(this, "object"), t = q(this, "ssfi"), r = q(this, "message"), n;
  switch (r = r ? r + ": " : "", pe(e).toLowerCase()) {
    case "array":
    case "string":
      n = e.length;
      break;
    case "map":
    case "set":
      n = e.size;
      break;
    case "weakmap":
    case "weakset":
      throw new se(
        r + ".empty was passed a weak collection",
        void 0,
        t
      );
    case "function": {
      const o = r + ".empty was passed a function " + gs(e);
      throw new se(o.trim(), void 0, t);
    }
    default:
      if (e !== Object(e))
        throw new se(
          r + ".empty was passed non-string primitive " + oe(e),
          void 0,
          t
        );
      n = Object.keys(e).length;
  }
  this.assert(
    n === 0,
    "expected #{this} to be empty",
    "expected #{this} not to be empty"
  );
});
function Il() {
  let e = q(this, "object"), t = pe(e);
  this.assert(
    t === "Arguments",
    "expected #{this} to be arguments but got " + t,
    "expected #{this} to not be arguments"
  );
}
M(Il, "checkArguments");
w.addProperty("arguments", Il);
w.addProperty("Arguments", Il);
function bs(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object");
  if (q(this, "deep")) {
    let n = q(this, "lockSsfi");
    q(this, "lockSsfi", !0), this.eql(e), q(this, "lockSsfi", n);
  } else
    this.assert(
      e === r,
      "expected #{this} to equal #{exp}",
      "expected #{this} to not equal #{exp}",
      e,
      this._obj,
      !0
    );
}
M(bs, "assertEqual");
w.addMethod("equal", bs);
w.addMethod("equals", bs);
w.addMethod("eq", bs);
function Nl(e, t) {
  t && q(this, "message", t);
  let r = q(this, "eql");
  this.assert(
    r(e, q(this, "object")),
    "expected #{this} to deeply equal #{exp}",
    "expected #{this} to not deeply equal #{exp}",
    e,
    this._obj,
    !0
  );
}
M(Nl, "assertEql");
w.addMethod("eql", Nl);
w.addMethod("eqls", Nl);
function ys(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = q(this, "doLength"), o = q(this, "message"), i = o ? o + ": " : "", s = q(this, "ssfi"), a = pe(r).toLowerCase(), u = pe(e).toLowerCase();
  if (n && a !== "map" && a !== "set" && new w(r, o, s, !0).to.have.property("length"), !n && a === "date" && u !== "date")
    throw new se(
      i + "the argument to above must be a date",
      void 0,
      s
    );
  if (!_e(e) && (n || _e(r)))
    throw new se(
      i + "the argument to above must be a number",
      void 0,
      s
    );
  if (!n && a !== "date" && !_e(r)) {
    let l = a === "string" ? "'" + r + "'" : r;
    throw new se(
      i + "expected " + l + " to be a number or a date",
      void 0,
      s
    );
  }
  if (n) {
    let l = "length", c;
    a === "map" || a === "set" ? (l = "size", c = r.size) : c = r.length, this.assert(
      c > e,
      "expected #{this} to have a " + l + " above #{exp} but got #{act}",
      "expected #{this} to not have a " + l + " above #{exp}",
      e,
      c
    );
  } else
    this.assert(
      r > e,
      "expected #{this} to be above #{exp}",
      "expected #{this} to be at most #{exp}",
      e
    );
}
M(ys, "assertAbove");
w.addMethod("above", ys);
w.addMethod("gt", ys);
w.addMethod("greaterThan", ys);
function vs(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = q(this, "doLength"), o = q(this, "message"), i = o ? o + ": " : "", s = q(this, "ssfi"), a = pe(r).toLowerCase(), u = pe(e).toLowerCase(), l, c = !0;
  if (n && a !== "map" && a !== "set" && new w(r, o, s, !0).to.have.property("length"), !n && a === "date" && u !== "date")
    l = i + "the argument to least must be a date";
  else if (!_e(e) && (n || _e(r)))
    l = i + "the argument to least must be a number";
  else if (!n && a !== "date" && !_e(r)) {
    let d = a === "string" ? "'" + r + "'" : r;
    l = i + "expected " + d + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new se(l, void 0, s);
  if (n) {
    let d = "length", f;
    a === "map" || a === "set" ? (d = "size", f = r.size) : f = r.length, this.assert(
      f >= e,
      "expected #{this} to have a " + d + " at least #{exp} but got #{act}",
      "expected #{this} to have a " + d + " below #{exp}",
      e,
      f
    );
  } else
    this.assert(
      r >= e,
      "expected #{this} to be at least #{exp}",
      "expected #{this} to be below #{exp}",
      e
    );
}
M(vs, "assertLeast");
w.addMethod("least", vs);
w.addMethod("gte", vs);
w.addMethod("greaterThanOrEqual", vs);
function ws(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = q(this, "doLength"), o = q(this, "message"), i = o ? o + ": " : "", s = q(this, "ssfi"), a = pe(r).toLowerCase(), u = pe(e).toLowerCase(), l, c = !0;
  if (n && a !== "map" && a !== "set" && new w(r, o, s, !0).to.have.property("length"), !n && a === "date" && u !== "date")
    l = i + "the argument to below must be a date";
  else if (!_e(e) && (n || _e(r)))
    l = i + "the argument to below must be a number";
  else if (!n && a !== "date" && !_e(r)) {
    let d = a === "string" ? "'" + r + "'" : r;
    l = i + "expected " + d + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new se(l, void 0, s);
  if (n) {
    let d = "length", f;
    a === "map" || a === "set" ? (d = "size", f = r.size) : f = r.length, this.assert(
      f < e,
      "expected #{this} to have a " + d + " below #{exp} but got #{act}",
      "expected #{this} to not have a " + d + " below #{exp}",
      e,
      f
    );
  } else
    this.assert(
      r < e,
      "expected #{this} to be below #{exp}",
      "expected #{this} to be at least #{exp}",
      e
    );
}
M(ws, "assertBelow");
w.addMethod("below", ws);
w.addMethod("lt", ws);
w.addMethod("lessThan", ws);
function Rs(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = q(this, "doLength"), o = q(this, "message"), i = o ? o + ": " : "", s = q(this, "ssfi"), a = pe(r).toLowerCase(), u = pe(e).toLowerCase(), l, c = !0;
  if (n && a !== "map" && a !== "set" && new w(r, o, s, !0).to.have.property("length"), !n && a === "date" && u !== "date")
    l = i + "the argument to most must be a date";
  else if (!_e(e) && (n || _e(r)))
    l = i + "the argument to most must be a number";
  else if (!n && a !== "date" && !_e(r)) {
    let d = a === "string" ? "'" + r + "'" : r;
    l = i + "expected " + d + " to be a number or a date";
  } else
    c = !1;
  if (c)
    throw new se(l, void 0, s);
  if (n) {
    let d = "length", f;
    a === "map" || a === "set" ? (d = "size", f = r.size) : f = r.length, this.assert(
      f <= e,
      "expected #{this} to have a " + d + " at most #{exp} but got #{act}",
      "expected #{this} to have a " + d + " above #{exp}",
      e,
      f
    );
  } else
    this.assert(
      r <= e,
      "expected #{this} to be at most #{exp}",
      "expected #{this} to be above #{exp}",
      e
    );
}
M(Rs, "assertMost");
w.addMethod("most", Rs);
w.addMethod("lte", Rs);
w.addMethod("lessThanOrEqual", Rs);
w.addMethod("within", function(e, t, r) {
  r && q(this, "message", r);
  let n = q(this, "object"), o = q(this, "doLength"), i = q(this, "message"), s = i ? i + ": " : "", a = q(this, "ssfi"), u = pe(n).toLowerCase(), l = pe(e).toLowerCase(), c = pe(t).toLowerCase(), d, f = !0, p = l === "date" && c === "date" ? e.toISOString() + ".." + t.toISOString() : e + ".." + t;
  if (o && u !== "map" && u !== "set" && new w(n, i, a, !0).to.have.property("length"), !o && u === "date" && (l !== "date" || c !== "date"))
    d = s + "the arguments to within must be dates";
  else if ((!_e(e) || !_e(t)) && (o || _e(n)))
    d = s + "the arguments to within must be numbers";
  else if (!o && u !== "date" && !_e(n)) {
    let g = u === "string" ? "'" + n + "'" : n;
    d = s + "expected " + g + " to be a number or a date";
  } else
    f = !1;
  if (f)
    throw new se(d, void 0, a);
  if (o) {
    let g = "length", h;
    u === "map" || u === "set" ? (g = "size", h = n.size) : h = n.length, this.assert(
      h >= e && h <= t,
      "expected #{this} to have a " + g + " within " + p,
      "expected #{this} to not have a " + g + " within " + p
    );
  } else
    this.assert(
      n >= e && n <= t,
      "expected #{this} to be within " + p,
      "expected #{this} to not be within " + p
    );
});
function kl(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = q(this, "ssfi"), o = q(this, "message"), i;
  try {
    i = r instanceof e;
  } catch (a) {
    throw a instanceof TypeError ? (o = o ? o + ": " : "", new se(
      o + "The instanceof assertion needs a constructor but " + pe(e) + " was given.",
      void 0,
      n
    )) : a;
  }
  let s = gs(e);
  s == null && (s = "an unnamed constructor"), this.assert(
    i,
    "expected #{this} to be an instance of " + s,
    "expected #{this} to not be an instance of " + s
  );
}
M(kl, "assertInstanceOf");
w.addMethod("instanceof", kl);
w.addMethod("instanceOf", kl);
function jl(e, t, r) {
  r && q(this, "message", r);
  let n = q(this, "nested"), o = q(this, "own"), i = q(this, "message"), s = q(this, "object"), a = q(this, "ssfi"), u = typeof e;
  if (i = i ? i + ": " : "", n) {
    if (u !== "string")
      throw new se(
        i + "the argument to property must be a string when using nested syntax",
        void 0,
        a
      );
  } else if (u !== "string" && u !== "number" && u !== "symbol")
    throw new se(
      i + "the argument to property must be a string, number, or symbol",
      void 0,
      a
    );
  if (n && o)
    throw new se(
      i + 'The "nested" and "own" flags cannot be combined.',
      void 0,
      a
    );
  if (s == null)
    throw new se(
      i + "Target cannot be null or undefined.",
      void 0,
      a
    );
  let l = q(this, "deep"), c = q(this, "negate"), d = n ? Cl(s, e) : null, f = n ? d.value : s[e], p = l ? q(this, "eql") : (b, m) => b === m, g = "";
  l && (g += "deep "), o && (g += "own "), n && (g += "nested "), g += "property ";
  let h;
  o ? h = Object.prototype.hasOwnProperty.call(s, e) : n ? h = d.exists : h = ms(s, e), (!c || arguments.length === 1) && this.assert(
    h,
    "expected #{this} to have " + g + oe(e),
    "expected #{this} to not have " + g + oe(e)
  ), arguments.length > 1 && this.assert(
    h && p(t, f),
    "expected #{this} to have " + g + oe(e) + " of #{exp}, but got #{act}",
    "expected #{this} to not have " + g + oe(e) + " of #{act}",
    t,
    f
  ), q(this, "object", f);
}
M(jl, "assertProperty");
w.addMethod("property", jl);
function Dl(e, t, r) {
  q(this, "own", !0), jl.apply(this, arguments);
}
M(Dl, "assertOwnProperty");
w.addMethod("ownProperty", Dl);
w.addMethod("haveOwnProperty", Dl);
function Fl(e, t, r) {
  typeof t == "string" && (r = t, t = null), r && q(this, "message", r);
  let n = q(this, "object"), o = Object.getOwnPropertyDescriptor(Object(n), e), i = q(this, "eql");
  o && t ? this.assert(
    i(t, o),
    "expected the own property descriptor for " + oe(e) + " on #{this} to match " + oe(t) + ", got " + oe(o),
    "expected the own property descriptor for " + oe(e) + " on #{this} to not match " + oe(t),
    t,
    o,
    !0
  ) : this.assert(
    o,
    "expected #{this} to have an own property descriptor for " + oe(e),
    "expected #{this} to not have an own property descriptor for " + oe(e)
  ), q(this, "object", o);
}
M(Fl, "assertOwnPropertyDescriptor");
w.addMethod("ownPropertyDescriptor", Fl);
w.addMethod("haveOwnPropertyDescriptor", Fl);
function Ll() {
  q(this, "doLength", !0);
}
M(Ll, "assertLengthChain");
function Bl(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = pe(r).toLowerCase(), o = q(this, "message"), i = q(this, "ssfi"), s = "length", a;
  switch (n) {
    case "map":
    case "set":
      s = "size", a = r.size;
      break;
    default:
      new w(r, o, i, !0).to.have.property("length"), a = r.length;
  }
  this.assert(
    a == e,
    "expected #{this} to have a " + s + " of #{exp} but got #{act}",
    "expected #{this} to not have a " + s + " of #{act}",
    e,
    a
  );
}
M(Bl, "assertLength");
w.addChainableMethod("length", Bl, Ll);
w.addChainableMethod("lengthOf", Bl, Ll);
function Hl(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object");
  this.assert(
    e.exec(r),
    "expected #{this} to match " + e,
    "expected #{this} not to match " + e
  );
}
M(Hl, "assertMatch");
w.addMethod("match", Hl);
w.addMethod("matches", Hl);
w.addMethod("string", function(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = q(this, "message"), o = q(this, "ssfi");
  new w(r, n, o, !0).is.a("string"), this.assert(
    ~r.indexOf(e),
    "expected #{this} to contain " + oe(e),
    "expected #{this} to not contain " + oe(e)
  );
});
function Vl(e) {
  let t = q(this, "object"), r = pe(t), n = pe(e), o = q(this, "ssfi"), i = q(this, "deep"), s, a = "", u, l = !0, c = q(this, "message");
  c = c ? c + ": " : "";
  let d = c + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
  if (r === "Map" || r === "Set")
    a = i ? "deeply " : "", u = [], t.forEach(function(m, E) {
      u.push(E);
    }), n !== "Array" && (e = Array.prototype.slice.call(arguments));
  else {
    switch (u = $l(t), n) {
      case "Array":
        if (arguments.length > 1)
          throw new se(d, void 0, o);
        break;
      case "Object":
        if (arguments.length > 1)
          throw new se(d, void 0, o);
        e = Object.keys(e);
        break;
      default:
        e = Array.prototype.slice.call(arguments);
    }
    e = e.map(function(m) {
      return typeof m == "symbol" ? m : String(m);
    });
  }
  if (!e.length)
    throw new se(c + "keys required", void 0, o);
  let f = e.length, p = q(this, "any"), g = q(this, "all"), h = e, b = i ? q(this, "eql") : (m, E) => m === E;
  if (!p && !g && (g = !0), p && (l = h.some(function(m) {
    return u.some(function(E) {
      return b(m, E);
    });
  })), g && (l = h.every(function(m) {
    return u.some(function(E) {
      return b(m, E);
    });
  }), q(this, "contains") || (l = l && e.length == u.length)), f > 1) {
    e = e.map(function(E) {
      return oe(E);
    });
    let m = e.pop();
    g && (s = e.join(", ") + ", and " + m), p && (s = e.join(", ") + ", or " + m);
  } else
    s = oe(e[0]);
  s = (f > 1 ? "keys " : "key ") + s, s = (q(this, "contains") ? "contain " : "have ") + s, this.assert(
    l,
    "expected #{this} to " + a + s,
    "expected #{this} to not " + a + s,
    h.slice(0).sort(Yi),
    u.sort(Yi),
    !0
  );
}
M(Vl, "assertKeys");
w.addMethod("keys", Vl);
w.addMethod("key", Vl);
function Cs(e, t, r) {
  r && q(this, "message", r);
  let n = q(this, "object"), o = q(this, "ssfi"), i = q(this, "message"), s = q(this, "negate") || !1;
  new w(n, i, o, !0).is.a("function"), (Qi(e) || typeof e == "string") && (t = e, e = null);
  let a, u = !1;
  try {
    n();
  } catch (p) {
    u = !0, a = p;
  }
  let l = e === void 0 && t === void 0, c = !!(e && t), d = !1, f = !1;
  if (l || !l && !s) {
    let p = "an error";
    e instanceof Error ? p = "#{exp}" : e && (p = Ve.getConstructorName(e));
    let g = a;
    if (a instanceof Error)
      g = a.toString();
    else if (typeof a == "string")
      g = a;
    else if (a && (typeof a == "object" || typeof a == "function"))
      try {
        g = Ve.getConstructorName(a);
      } catch {
      }
    this.assert(
      u,
      "expected #{this} to throw " + p,
      "expected #{this} to not throw an error but #{act} was thrown",
      e && e.toString(),
      g
    );
  }
  if (e && a && (e instanceof Error && Ve.compatibleInstance(
    a,
    e
  ) === s && (c && s ? d = !0 : this.assert(
    s,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (a && !s ? " but #{act} was thrown" : ""),
    e.toString(),
    a.toString()
  )), Ve.compatibleConstructor(
    a,
    e
  ) === s && (c && s ? d = !0 : this.assert(
    s,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && Ve.getConstructorName(e),
    a instanceof Error ? a.toString() : a && Ve.getConstructorName(a)
  ))), a && t !== void 0 && t !== null) {
    let p = "including";
    Qi(t) && (p = "matching"), Ve.compatibleMessage(
      a,
      t
    ) === s && (c && s ? f = !0 : this.assert(
      s,
      "expected #{this} to throw error " + p + " #{exp} but got #{act}",
      "expected #{this} to throw error not " + p + " #{exp}",
      t,
      Ve.getMessage(a)
    ));
  }
  d && f && this.assert(
    s,
    "expected #{this} to throw #{exp} but #{act} was thrown",
    "expected #{this} to not throw #{exp}" + (a ? " but #{act} was thrown" : ""),
    e instanceof Error ? e.toString() : e && Ve.getConstructorName(e),
    a instanceof Error ? a.toString() : a && Ve.getConstructorName(a)
  ), q(this, "object", a);
}
M(Cs, "assertThrows");
w.addMethod("throw", Cs);
w.addMethod("throws", Cs);
w.addMethod("Throw", Cs);
function Ul(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = q(this, "itself"), o = typeof r == "function" && !n ? r.prototype[e] : r[e];
  this.assert(
    typeof o == "function",
    "expected #{this} to respond to " + oe(e),
    "expected #{this} to not respond to " + oe(e)
  );
}
M(Ul, "respondTo");
w.addMethod("respondTo", Ul);
w.addMethod("respondsTo", Ul);
w.addProperty("itself", function() {
  q(this, "itself", !0);
});
function zl(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = e(r);
  this.assert(
    n,
    "expected #{this} to satisfy " + Mt(e),
    "expected #{this} to not satisfy" + Mt(e),
    !q(this, "negate"),
    n
  );
}
M(zl, "satisfy");
w.addMethod("satisfy", zl);
w.addMethod("satisfies", zl);
function Wl(e, t, r) {
  r && q(this, "message", r);
  let n = q(this, "object"), o = q(this, "message"), i = q(this, "ssfi");
  new w(n, o, i, !0).is.numeric;
  let s = "A `delta` value is required for `closeTo`";
  if (t == null)
    throw new se(
      o ? `${o}: ${s}` : s,
      void 0,
      i
    );
  if (new w(t, o, i, !0).is.numeric, s = "A `expected` value is required for `closeTo`", e == null)
    throw new se(
      o ? `${o}: ${s}` : s,
      void 0,
      i
    );
  new w(e, o, i, !0).is.numeric;
  const a = /* @__PURE__ */ M((l) => l < 0n ? -l : l, "abs"), u = /* @__PURE__ */ M((l) => parseFloat(parseFloat(l).toPrecision(12)), "strip");
  this.assert(
    u(a(n - e)) <= t,
    "expected #{this} to be close to " + e + " +/- " + t,
    "expected #{this} not to be close to " + e + " +/- " + t
  );
}
M(Wl, "closeTo");
w.addMethod("closeTo", Wl);
w.addMethod("approximately", Wl);
function Yg(e, t, r, n, o) {
  let i = Array.from(t), s = Array.from(e);
  if (!n) {
    if (s.length !== i.length) return !1;
    i = i.slice();
  }
  return s.every(function(a, u) {
    if (o) return r ? r(a, i[u]) : a === i[u];
    if (!r) {
      let l = i.indexOf(a);
      return l === -1 ? !1 : (n || i.splice(l, 1), !0);
    }
    return i.some(function(l, c) {
      return r(a, l) ? (n || i.splice(c, 1), !0) : !1;
    });
  });
}
M(Yg, "isSubsetOf");
w.addMethod("members", function(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = q(this, "message"), o = q(this, "ssfi");
  new w(r, n, o, !0).to.be.iterable, new w(e, n, o, !0).to.be.iterable;
  let i = q(this, "contains"), s = q(this, "ordered"), a, u, l;
  i ? (a = s ? "an ordered superset" : "a superset", u = "expected #{this} to be " + a + " of #{exp}", l = "expected #{this} to not be " + a + " of #{exp}") : (a = s ? "ordered members" : "members", u = "expected #{this} to have the same " + a + " as #{exp}", l = "expected #{this} to not have the same " + a + " as #{exp}");
  let c = q(this, "deep") ? q(this, "eql") : void 0;
  this.assert(
    Yg(e, r, c, i, s),
    u,
    l,
    e,
    r,
    !0
  );
});
w.addProperty("iterable", function(e) {
  e && q(this, "message", e);
  let t = q(this, "object");
  this.assert(
    t != null && t[Symbol.iterator],
    "expected #{this} to be an iterable",
    "expected #{this} to not be an iterable",
    t
  );
});
function Zg(e, t) {
  t && q(this, "message", t);
  let r = q(this, "object"), n = q(this, "message"), o = q(this, "ssfi"), i = q(this, "contains"), s = q(this, "deep"), a = q(this, "eql");
  new w(e, n, o, !0).to.be.an("array"), i ? this.assert(
    e.some(function(u) {
      return r.indexOf(u) > -1;
    }),
    "expected #{this} to contain one of #{exp}",
    "expected #{this} to not contain one of #{exp}",
    e,
    r
  ) : s ? this.assert(
    e.some(function(u) {
      return a(r, u);
    }),
    "expected #{this} to deeply equal one of #{exp}",
    "expected #{this} to deeply equal one of #{exp}",
    e,
    r
  ) : this.assert(
    e.indexOf(r) > -1,
    "expected #{this} to be one of #{exp}",
    "expected #{this} to not be one of #{exp}",
    e,
    r
  );
}
M(Zg, "oneOf");
w.addMethod("oneOf", Zg);
function Jl(e, t, r) {
  r && q(this, "message", r);
  let n = q(this, "object"), o = q(this, "message"), i = q(this, "ssfi");
  new w(n, o, i, !0).is.a("function");
  let s;
  t ? (new w(e, o, i, !0).to.have.property(t), s = e[t]) : (new w(e, o, i, !0).is.a("function"), s = e()), n();
  let a = t == null ? e() : e[t], u = t == null ? s : "." + t;
  q(this, "deltaMsgObj", u), q(this, "initialDeltaValue", s), q(this, "finalDeltaValue", a), q(this, "deltaBehavior", "change"), q(this, "realDelta", a !== s), this.assert(
    s !== a,
    "expected " + u + " to change",
    "expected " + u + " to not change"
  );
}
M(Jl, "assertChanges");
w.addMethod("change", Jl);
w.addMethod("changes", Jl);
function Xl(e, t, r) {
  r && q(this, "message", r);
  let n = q(this, "object"), o = q(this, "message"), i = q(this, "ssfi");
  new w(n, o, i, !0).is.a("function");
  let s;
  t ? (new w(e, o, i, !0).to.have.property(t), s = e[t]) : (new w(e, o, i, !0).is.a("function"), s = e()), new w(s, o, i, !0).is.a("number"), n();
  let a = t == null ? e() : e[t], u = t == null ? s : "." + t;
  q(this, "deltaMsgObj", u), q(this, "initialDeltaValue", s), q(this, "finalDeltaValue", a), q(this, "deltaBehavior", "increase"), q(this, "realDelta", a - s), this.assert(
    a - s > 0,
    "expected " + u + " to increase",
    "expected " + u + " to not increase"
  );
}
M(Xl, "assertIncreases");
w.addMethod("increase", Xl);
w.addMethod("increases", Xl);
function Gl(e, t, r) {
  r && q(this, "message", r);
  let n = q(this, "object"), o = q(this, "message"), i = q(this, "ssfi");
  new w(n, o, i, !0).is.a("function");
  let s;
  t ? (new w(e, o, i, !0).to.have.property(t), s = e[t]) : (new w(e, o, i, !0).is.a("function"), s = e()), new w(s, o, i, !0).is.a("number"), n();
  let a = t == null ? e() : e[t], u = t == null ? s : "." + t;
  q(this, "deltaMsgObj", u), q(this, "initialDeltaValue", s), q(this, "finalDeltaValue", a), q(this, "deltaBehavior", "decrease"), q(this, "realDelta", s - a), this.assert(
    a - s < 0,
    "expected " + u + " to decrease",
    "expected " + u + " to not decrease"
  );
}
M(Gl, "assertDecreases");
w.addMethod("decrease", Gl);
w.addMethod("decreases", Gl);
function Qg(e, t) {
  t && q(this, "message", t);
  let r = q(this, "deltaMsgObj"), n = q(this, "initialDeltaValue"), o = q(this, "finalDeltaValue"), i = q(this, "deltaBehavior"), s = q(this, "realDelta"), a;
  i === "change" ? a = Math.abs(o - n) === Math.abs(e) : a = s === Math.abs(e), this.assert(
    a,
    "expected " + r + " to " + i + " by " + e,
    "expected " + r + " to not " + i + " by " + e
  );
}
M(Qg, "assertDelta");
w.addMethod("by", Qg);
w.addProperty("extensible", function() {
  let e = q(this, "object"), t = e === Object(e) && Object.isExtensible(e);
  this.assert(
    t,
    "expected #{this} to be extensible",
    "expected #{this} to not be extensible"
  );
});
w.addProperty("sealed", function() {
  let e = q(this, "object"), t = e === Object(e) ? Object.isSealed(e) : !0;
  this.assert(
    t,
    "expected #{this} to be sealed",
    "expected #{this} to not be sealed"
  );
});
w.addProperty("frozen", function() {
  let e = q(this, "object"), t = e === Object(e) ? Object.isFrozen(e) : !0;
  this.assert(
    t,
    "expected #{this} to be frozen",
    "expected #{this} to not be frozen"
  );
});
w.addProperty("finite", function(e) {
  let t = q(this, "object");
  this.assert(
    typeof t == "number" && isFinite(t),
    "expected #{this} to be a finite number",
    "expected #{this} to not be a finite number"
  );
});
function es(e, t) {
  return e === t ? !0 : typeof t != typeof e ? !1 : typeof e != "object" || e === null ? e === t : t ? Array.isArray(e) ? Array.isArray(t) ? e.every(function(r) {
    return t.some(function(n) {
      return es(r, n);
    });
  }) : !1 : e instanceof Date ? t instanceof Date ? e.getTime() === t.getTime() : !1 : Object.keys(e).every(function(r) {
    let n = e[r], o = t[r];
    return typeof n == "object" && n !== null && o !== null ? es(n, o) : typeof n == "function" ? n(o) : o === n;
  }) : !1;
}
M(es, "compareSubset");
w.addMethod("containSubset", function(e) {
  const t = te(this, "object"), r = je.showDiff;
  this.assert(
    es(e, t),
    "expected #{act} to contain subset #{exp}",
    "expected #{act} to not contain subset #{exp}",
    e,
    t,
    r
  );
});
function At(e, t) {
  return new w(e, t);
}
M(At, "expect");
At.fail = function(e, t, r, n) {
  throw arguments.length < 2 && (r = e, e = void 0), r = r || "expect.fail()", new se(
    r,
    {
      actual: e,
      expected: t,
      operator: n
    },
    At.fail
  );
};
var eb = {};
ml(eb, {
  Should: () => cP,
  should: () => uP
});
function Kl() {
  function e() {
    return this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol == "function" && this instanceof Symbol || typeof BigInt == "function" && this instanceof BigInt ? new w(this.valueOf(), null, e) : new w(this, null, e);
  }
  M(e, "shouldGetter");
  function t(n) {
    Object.defineProperty(this, "should", {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    });
  }
  M(t, "shouldSetter"), Object.defineProperty(Object.prototype, "should", {
    set: t,
    get: e,
    configurable: !0
  });
  let r = {};
  return r.fail = function(n, o, i, s) {
    throw arguments.length < 2 && (i = n, n = void 0), i = i || "should.fail()", new se(
      i,
      {
        actual: n,
        expected: o,
        operator: s
      },
      r.fail
    );
  }, r.equal = function(n, o, i) {
    new w(n, i).to.equal(o);
  }, r.Throw = function(n, o, i, s) {
    new w(n, s).to.Throw(o, i);
  }, r.exist = function(n, o) {
    new w(n, o).to.exist;
  }, r.not = {}, r.not.equal = function(n, o, i) {
    new w(n, i).to.not.equal(o);
  }, r.not.Throw = function(n, o, i, s) {
    new w(n, s).to.not.Throw(o, i);
  }, r.not.exist = function(n, o) {
    new w(n, o).to.not.exist;
  }, r.throw = r.Throw, r.not.throw = r.not.Throw, r;
}
M(Kl, "loadShould");
var uP = Kl, cP = Kl;
function y(e, t) {
  new w(null, null, y, !0).assert(e, t, "[ negation message unavailable ]");
}
M(y, "assert");
y.fail = function(e, t, r, n) {
  throw arguments.length < 2 && (r = e, e = void 0), r = r || "assert.fail()", new se(
    r,
    {
      actual: e,
      expected: t,
      operator: n
    },
    y.fail
  );
};
y.isOk = function(e, t) {
  new w(e, t, y.isOk, !0).is.ok;
};
y.isNotOk = function(e, t) {
  new w(e, t, y.isNotOk, !0).is.not.ok;
};
y.equal = function(e, t, r) {
  let n = new w(e, r, y.equal, !0);
  n.assert(
    t == te(n, "object"),
    "expected #{this} to equal #{exp}",
    "expected #{this} to not equal #{act}",
    t,
    e,
    !0
  );
};
y.notEqual = function(e, t, r) {
  let n = new w(e, r, y.notEqual, !0);
  n.assert(
    t != te(n, "object"),
    "expected #{this} to not equal #{exp}",
    "expected #{this} to equal #{act}",
    t,
    e,
    !0
  );
};
y.strictEqual = function(e, t, r) {
  new w(e, r, y.strictEqual, !0).to.equal(t);
};
y.notStrictEqual = function(e, t, r) {
  new w(e, r, y.notStrictEqual, !0).to.not.equal(t);
};
y.deepEqual = y.deepStrictEqual = function(e, t, r) {
  new w(e, r, y.deepEqual, !0).to.eql(t);
};
y.notDeepEqual = function(e, t, r) {
  new w(e, r, y.notDeepEqual, !0).to.not.eql(t);
};
y.isAbove = function(e, t, r) {
  new w(e, r, y.isAbove, !0).to.be.above(t);
};
y.isAtLeast = function(e, t, r) {
  new w(e, r, y.isAtLeast, !0).to.be.least(t);
};
y.isBelow = function(e, t, r) {
  new w(e, r, y.isBelow, !0).to.be.below(t);
};
y.isAtMost = function(e, t, r) {
  new w(e, r, y.isAtMost, !0).to.be.most(t);
};
y.isTrue = function(e, t) {
  new w(e, t, y.isTrue, !0).is.true;
};
y.isNotTrue = function(e, t) {
  new w(e, t, y.isNotTrue, !0).to.not.equal(!0);
};
y.isFalse = function(e, t) {
  new w(e, t, y.isFalse, !0).is.false;
};
y.isNotFalse = function(e, t) {
  new w(e, t, y.isNotFalse, !0).to.not.equal(!1);
};
y.isNull = function(e, t) {
  new w(e, t, y.isNull, !0).to.equal(null);
};
y.isNotNull = function(e, t) {
  new w(e, t, y.isNotNull, !0).to.not.equal(null);
};
y.isNaN = function(e, t) {
  new w(e, t, y.isNaN, !0).to.be.NaN;
};
y.isNotNaN = function(e, t) {
  new w(e, t, y.isNotNaN, !0).not.to.be.NaN;
};
y.exists = function(e, t) {
  new w(e, t, y.exists, !0).to.exist;
};
y.notExists = function(e, t) {
  new w(e, t, y.notExists, !0).to.not.exist;
};
y.isUndefined = function(e, t) {
  new w(e, t, y.isUndefined, !0).to.equal(void 0);
};
y.isDefined = function(e, t) {
  new w(e, t, y.isDefined, !0).to.not.equal(void 0);
};
y.isCallable = function(e, t) {
  new w(e, t, y.isCallable, !0).is.callable;
};
y.isNotCallable = function(e, t) {
  new w(e, t, y.isNotCallable, !0).is.not.callable;
};
y.isObject = function(e, t) {
  new w(e, t, y.isObject, !0).to.be.a("object");
};
y.isNotObject = function(e, t) {
  new w(e, t, y.isNotObject, !0).to.not.be.a("object");
};
y.isArray = function(e, t) {
  new w(e, t, y.isArray, !0).to.be.an("array");
};
y.isNotArray = function(e, t) {
  new w(e, t, y.isNotArray, !0).to.not.be.an("array");
};
y.isString = function(e, t) {
  new w(e, t, y.isString, !0).to.be.a("string");
};
y.isNotString = function(e, t) {
  new w(e, t, y.isNotString, !0).to.not.be.a("string");
};
y.isNumber = function(e, t) {
  new w(e, t, y.isNumber, !0).to.be.a("number");
};
y.isNotNumber = function(e, t) {
  new w(e, t, y.isNotNumber, !0).to.not.be.a("number");
};
y.isNumeric = function(e, t) {
  new w(e, t, y.isNumeric, !0).is.numeric;
};
y.isNotNumeric = function(e, t) {
  new w(e, t, y.isNotNumeric, !0).is.not.numeric;
};
y.isFinite = function(e, t) {
  new w(e, t, y.isFinite, !0).to.be.finite;
};
y.isBoolean = function(e, t) {
  new w(e, t, y.isBoolean, !0).to.be.a("boolean");
};
y.isNotBoolean = function(e, t) {
  new w(e, t, y.isNotBoolean, !0).to.not.be.a("boolean");
};
y.typeOf = function(e, t, r) {
  new w(e, r, y.typeOf, !0).to.be.a(t);
};
y.notTypeOf = function(e, t, r) {
  new w(e, r, y.notTypeOf, !0).to.not.be.a(t);
};
y.instanceOf = function(e, t, r) {
  new w(e, r, y.instanceOf, !0).to.be.instanceOf(t);
};
y.notInstanceOf = function(e, t, r) {
  new w(e, r, y.notInstanceOf, !0).to.not.be.instanceOf(
    t
  );
};
y.include = function(e, t, r) {
  new w(e, r, y.include, !0).include(t);
};
y.notInclude = function(e, t, r) {
  new w(e, r, y.notInclude, !0).not.include(t);
};
y.deepInclude = function(e, t, r) {
  new w(e, r, y.deepInclude, !0).deep.include(t);
};
y.notDeepInclude = function(e, t, r) {
  new w(e, r, y.notDeepInclude, !0).not.deep.include(t);
};
y.nestedInclude = function(e, t, r) {
  new w(e, r, y.nestedInclude, !0).nested.include(t);
};
y.notNestedInclude = function(e, t, r) {
  new w(e, r, y.notNestedInclude, !0).not.nested.include(
    t
  );
};
y.deepNestedInclude = function(e, t, r) {
  new w(e, r, y.deepNestedInclude, !0).deep.nested.include(
    t
  );
};
y.notDeepNestedInclude = function(e, t, r) {
  new w(
    e,
    r,
    y.notDeepNestedInclude,
    !0
  ).not.deep.nested.include(t);
};
y.ownInclude = function(e, t, r) {
  new w(e, r, y.ownInclude, !0).own.include(t);
};
y.notOwnInclude = function(e, t, r) {
  new w(e, r, y.notOwnInclude, !0).not.own.include(t);
};
y.deepOwnInclude = function(e, t, r) {
  new w(e, r, y.deepOwnInclude, !0).deep.own.include(t);
};
y.notDeepOwnInclude = function(e, t, r) {
  new w(e, r, y.notDeepOwnInclude, !0).not.deep.own.include(
    t
  );
};
y.match = function(e, t, r) {
  new w(e, r, y.match, !0).to.match(t);
};
y.notMatch = function(e, t, r) {
  new w(e, r, y.notMatch, !0).to.not.match(t);
};
y.property = function(e, t, r) {
  new w(e, r, y.property, !0).to.have.property(t);
};
y.notProperty = function(e, t, r) {
  new w(e, r, y.notProperty, !0).to.not.have.property(t);
};
y.propertyVal = function(e, t, r, n) {
  new w(e, n, y.propertyVal, !0).to.have.property(t, r);
};
y.notPropertyVal = function(e, t, r, n) {
  new w(e, n, y.notPropertyVal, !0).to.not.have.property(
    t,
    r
  );
};
y.deepPropertyVal = function(e, t, r, n) {
  new w(e, n, y.deepPropertyVal, !0).to.have.deep.property(
    t,
    r
  );
};
y.notDeepPropertyVal = function(e, t, r, n) {
  new w(
    e,
    n,
    y.notDeepPropertyVal,
    !0
  ).to.not.have.deep.property(t, r);
};
y.ownProperty = function(e, t, r) {
  new w(e, r, y.ownProperty, !0).to.have.own.property(t);
};
y.notOwnProperty = function(e, t, r) {
  new w(e, r, y.notOwnProperty, !0).to.not.have.own.property(
    t
  );
};
y.ownPropertyVal = function(e, t, r, n) {
  new w(e, n, y.ownPropertyVal, !0).to.have.own.property(
    t,
    r
  );
};
y.notOwnPropertyVal = function(e, t, r, n) {
  new w(
    e,
    n,
    y.notOwnPropertyVal,
    !0
  ).to.not.have.own.property(t, r);
};
y.deepOwnPropertyVal = function(e, t, r, n) {
  new w(
    e,
    n,
    y.deepOwnPropertyVal,
    !0
  ).to.have.deep.own.property(t, r);
};
y.notDeepOwnPropertyVal = function(e, t, r, n) {
  new w(
    e,
    n,
    y.notDeepOwnPropertyVal,
    !0
  ).to.not.have.deep.own.property(t, r);
};
y.nestedProperty = function(e, t, r) {
  new w(e, r, y.nestedProperty, !0).to.have.nested.property(
    t
  );
};
y.notNestedProperty = function(e, t, r) {
  new w(
    e,
    r,
    y.notNestedProperty,
    !0
  ).to.not.have.nested.property(t);
};
y.nestedPropertyVal = function(e, t, r, n) {
  new w(
    e,
    n,
    y.nestedPropertyVal,
    !0
  ).to.have.nested.property(t, r);
};
y.notNestedPropertyVal = function(e, t, r, n) {
  new w(
    e,
    n,
    y.notNestedPropertyVal,
    !0
  ).to.not.have.nested.property(t, r);
};
y.deepNestedPropertyVal = function(e, t, r, n) {
  new w(
    e,
    n,
    y.deepNestedPropertyVal,
    !0
  ).to.have.deep.nested.property(t, r);
};
y.notDeepNestedPropertyVal = function(e, t, r, n) {
  new w(
    e,
    n,
    y.notDeepNestedPropertyVal,
    !0
  ).to.not.have.deep.nested.property(t, r);
};
y.lengthOf = function(e, t, r) {
  new w(e, r, y.lengthOf, !0).to.have.lengthOf(t);
};
y.hasAnyKeys = function(e, t, r) {
  new w(e, r, y.hasAnyKeys, !0).to.have.any.keys(t);
};
y.hasAllKeys = function(e, t, r) {
  new w(e, r, y.hasAllKeys, !0).to.have.all.keys(t);
};
y.containsAllKeys = function(e, t, r) {
  new w(e, r, y.containsAllKeys, !0).to.contain.all.keys(
    t
  );
};
y.doesNotHaveAnyKeys = function(e, t, r) {
  new w(e, r, y.doesNotHaveAnyKeys, !0).to.not.have.any.keys(
    t
  );
};
y.doesNotHaveAllKeys = function(e, t, r) {
  new w(e, r, y.doesNotHaveAllKeys, !0).to.not.have.all.keys(
    t
  );
};
y.hasAnyDeepKeys = function(e, t, r) {
  new w(e, r, y.hasAnyDeepKeys, !0).to.have.any.deep.keys(
    t
  );
};
y.hasAllDeepKeys = function(e, t, r) {
  new w(e, r, y.hasAllDeepKeys, !0).to.have.all.deep.keys(
    t
  );
};
y.containsAllDeepKeys = function(e, t, r) {
  new w(
    e,
    r,
    y.containsAllDeepKeys,
    !0
  ).to.contain.all.deep.keys(t);
};
y.doesNotHaveAnyDeepKeys = function(e, t, r) {
  new w(
    e,
    r,
    y.doesNotHaveAnyDeepKeys,
    !0
  ).to.not.have.any.deep.keys(t);
};
y.doesNotHaveAllDeepKeys = function(e, t, r) {
  new w(
    e,
    r,
    y.doesNotHaveAllDeepKeys,
    !0
  ).to.not.have.all.deep.keys(t);
};
y.throws = function(e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && (r = t, t = null);
  let o = new w(e, n, y.throws, !0).to.throw(
    t,
    r
  );
  return te(o, "object");
};
y.doesNotThrow = function(e, t, r, n) {
  (typeof t == "string" || t instanceof RegExp) && (r = t, t = null), new w(e, n, y.doesNotThrow, !0).to.not.throw(
    t,
    r
  );
};
y.operator = function(e, t, r, n) {
  let o;
  switch (t) {
    case "==":
      o = e == r;
      break;
    case "===":
      o = e === r;
      break;
    case ">":
      o = e > r;
      break;
    case ">=":
      o = e >= r;
      break;
    case "<":
      o = e < r;
      break;
    case "<=":
      o = e <= r;
      break;
    case "!=":
      o = e != r;
      break;
    case "!==":
      o = e !== r;
      break;
    default:
      throw n = n && n + ": ", new se(
        n + 'Invalid operator "' + t + '"',
        void 0,
        y.operator
      );
  }
  let i = new w(o, n, y.operator, !0);
  i.assert(
    te(i, "object") === !0,
    "expected " + oe(e) + " to be " + t + " " + oe(r),
    "expected " + oe(e) + " to not be " + t + " " + oe(r)
  );
};
y.closeTo = function(e, t, r, n) {
  new w(e, n, y.closeTo, !0).to.be.closeTo(t, r);
};
y.approximately = function(e, t, r, n) {
  new w(e, n, y.approximately, !0).to.be.approximately(
    t,
    r
  );
};
y.sameMembers = function(e, t, r) {
  new w(e, r, y.sameMembers, !0).to.have.same.members(t);
};
y.notSameMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.notSameMembers,
    !0
  ).to.not.have.same.members(t);
};
y.sameDeepMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.sameDeepMembers,
    !0
  ).to.have.same.deep.members(t);
};
y.notSameDeepMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.notSameDeepMembers,
    !0
  ).to.not.have.same.deep.members(t);
};
y.sameOrderedMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.sameOrderedMembers,
    !0
  ).to.have.same.ordered.members(t);
};
y.notSameOrderedMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.notSameOrderedMembers,
    !0
  ).to.not.have.same.ordered.members(t);
};
y.sameDeepOrderedMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.sameDeepOrderedMembers,
    !0
  ).to.have.same.deep.ordered.members(t);
};
y.notSameDeepOrderedMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.notSameDeepOrderedMembers,
    !0
  ).to.not.have.same.deep.ordered.members(t);
};
y.includeMembers = function(e, t, r) {
  new w(e, r, y.includeMembers, !0).to.include.members(
    t
  );
};
y.notIncludeMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.notIncludeMembers,
    !0
  ).to.not.include.members(t);
};
y.includeDeepMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.includeDeepMembers,
    !0
  ).to.include.deep.members(t);
};
y.notIncludeDeepMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.notIncludeDeepMembers,
    !0
  ).to.not.include.deep.members(t);
};
y.includeOrderedMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.includeOrderedMembers,
    !0
  ).to.include.ordered.members(t);
};
y.notIncludeOrderedMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.notIncludeOrderedMembers,
    !0
  ).to.not.include.ordered.members(t);
};
y.includeDeepOrderedMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.includeDeepOrderedMembers,
    !0
  ).to.include.deep.ordered.members(t);
};
y.notIncludeDeepOrderedMembers = function(e, t, r) {
  new w(
    e,
    r,
    y.notIncludeDeepOrderedMembers,
    !0
  ).to.not.include.deep.ordered.members(t);
};
y.oneOf = function(e, t, r) {
  new w(e, r, y.oneOf, !0).to.be.oneOf(t);
};
y.isIterable = function(e, t) {
  if (e == null || !e[Symbol.iterator])
    throw t = t ? `${t} expected ${oe(e)} to be an iterable` : `expected ${oe(e)} to be an iterable`, new se(t, void 0, y.isIterable);
};
y.changes = function(e, t, r, n) {
  arguments.length === 3 && typeof t == "function" && (n = r, r = null), new w(e, n, y.changes, !0).to.change(t, r);
};
y.changesBy = function(e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let i = n;
    n = r, o = i;
  } else arguments.length === 3 && (n = r, r = null);
  new w(e, o, y.changesBy, !0).to.change(t, r).by(n);
};
y.doesNotChange = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new w(e, n, y.doesNotChange, !0).to.not.change(
    t,
    r
  );
};
y.changesButNotBy = function(e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let i = n;
    n = r, o = i;
  } else arguments.length === 3 && (n = r, r = null);
  new w(e, o, y.changesButNotBy, !0).to.change(t, r).but.not.by(n);
};
y.increases = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new w(e, n, y.increases, !0).to.increase(t, r);
};
y.increasesBy = function(e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let i = n;
    n = r, o = i;
  } else arguments.length === 3 && (n = r, r = null);
  new w(e, o, y.increasesBy, !0).to.increase(t, r).by(n);
};
y.doesNotIncrease = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new w(e, n, y.doesNotIncrease, !0).to.not.increase(
    t,
    r
  );
};
y.increasesButNotBy = function(e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let i = n;
    n = r, o = i;
  } else arguments.length === 3 && (n = r, r = null);
  new w(e, o, y.increasesButNotBy, !0).to.increase(t, r).but.not.by(n);
};
y.decreases = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new w(e, n, y.decreases, !0).to.decrease(t, r);
};
y.decreasesBy = function(e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let i = n;
    n = r, o = i;
  } else arguments.length === 3 && (n = r, r = null);
  new w(e, o, y.decreasesBy, !0).to.decrease(t, r).by(n);
};
y.doesNotDecrease = function(e, t, r, n) {
  return arguments.length === 3 && typeof t == "function" && (n = r, r = null), new w(e, n, y.doesNotDecrease, !0).to.not.decrease(
    t,
    r
  );
};
y.doesNotDecreaseBy = function(e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let i = n;
    n = r, o = i;
  } else arguments.length === 3 && (n = r, r = null);
  return new w(e, o, y.doesNotDecreaseBy, !0).to.not.decrease(t, r).by(n);
};
y.decreasesButNotBy = function(e, t, r, n, o) {
  if (arguments.length === 4 && typeof t == "function") {
    let i = n;
    n = r, o = i;
  } else arguments.length === 3 && (n = r, r = null);
  new w(e, o, y.decreasesButNotBy, !0).to.decrease(t, r).but.not.by(n);
};
y.ifError = function(e) {
  if (e)
    throw e;
};
y.isExtensible = function(e, t) {
  new w(e, t, y.isExtensible, !0).to.be.extensible;
};
y.isNotExtensible = function(e, t) {
  new w(e, t, y.isNotExtensible, !0).to.not.be.extensible;
};
y.isSealed = function(e, t) {
  new w(e, t, y.isSealed, !0).to.be.sealed;
};
y.isNotSealed = function(e, t) {
  new w(e, t, y.isNotSealed, !0).to.not.be.sealed;
};
y.isFrozen = function(e, t) {
  new w(e, t, y.isFrozen, !0).to.be.frozen;
};
y.isNotFrozen = function(e, t) {
  new w(e, t, y.isNotFrozen, !0).to.not.be.frozen;
};
y.isEmpty = function(e, t) {
  new w(e, t, y.isEmpty, !0).to.be.empty;
};
y.isNotEmpty = function(e, t) {
  new w(e, t, y.isNotEmpty, !0).to.not.be.empty;
};
y.containsSubset = function(e, t, r) {
  new w(e, r).to.containSubset(t);
};
y.doesNotContainSubset = function(e, t, r) {
  new w(e, r).to.not.containSubset(t);
};
var dP = [
  ["isOk", "ok"],
  ["isNotOk", "notOk"],
  ["throws", "throw"],
  ["throws", "Throw"],
  ["isExtensible", "extensible"],
  ["isNotExtensible", "notExtensible"],
  ["isSealed", "sealed"],
  ["isNotSealed", "notSealed"],
  ["isFrozen", "frozen"],
  ["isNotFrozen", "notFrozen"],
  ["isEmpty", "empty"],
  ["isNotEmpty", "notEmpty"],
  ["isCallable", "isFunction"],
  ["isNotCallable", "isNotFunction"],
  ["containsSubset", "containSubset"]
];
for (const [e, t] of dP)
  y[t] = y[e];
var wp = [];
function qt(e) {
  const t = {
    use: qt,
    AssertionError: se,
    util: $e,
    config: je,
    expect: At,
    assert: y,
    Assertion: w,
    ...eb
  };
  return ~wp.indexOf(e) || (e(t, $e), wp.push(e)), t;
}
M(qt, "use");
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*! Bundled license information:

deep-eql/index.js:
  (*!
   * deep-eql
   * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   *)
  (*!
   * Check to see if the MemoizeMap has recorded a result of the two operands
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @returns {Boolean|null} result
  *)
  (*!
   * Set the result of the equality into the MemoizeMap
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {MemoizeMap} memoizeMap
   * @param {Boolean} result
  *)
  (*!
   * Primary Export
   *)
  (*!
   * The main logic of the `deepEqual` function.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (optional) Additional options
   * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
   * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
      complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
      references to blow the stack.
   * @return {Boolean} equal match
  *)
  (*!
   * Compare two Regular Expressions for equality.
   *
   * @param {RegExp} leftHandOperand
   * @param {RegExp} rightHandOperand
   * @return {Boolean} result
   *)
  (*!
   * Compare two Sets/Maps for equality. Faster than other equality functions.
   *
   * @param {Set} leftHandOperand
   * @param {Set} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Simple equality for generator objects such as those returned by generator functions.
   *
   * @param {Iterable} leftHandOperand
   * @param {Iterable} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Determine if the given object has an @@iterator function.
   *
   * @param {Object} target
   * @return {Boolean} `true` if the object has an @@iterator function.
   *)
  (*!
   * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
   * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
   *
   * @param {Object} target
   * @returns {Array} an array of entries from the @@iterator function
   *)
  (*!
   * Gets all entries from a Generator. This will consume the generator - which could have side effects.
   *
   * @param {Generator} target
   * @returns {Array} an array of entries from the Generator.
   *)
  (*!
   * Gets all own and inherited enumerable keys from a target.
   *
   * @param {Object} target
   * @returns {Array} an array of own and inherited enumerable keys from the target.
   *)
  (*!
   * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
   * each key. If any value of the given key is not equal, the function will return false (early).
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
   * for each enumerable key in the object.
   *
   * @param {Mixed} leftHandOperand
   * @param {Mixed} rightHandOperand
   * @param {Object} [options] (Optional)
   * @return {Boolean} result
   *)
  (*!
   * Returns true if the argument is a primitive.
   *
   * This intentionally returns true for all objects that can be compared by reference,
   * including functions and symbols.
   *
   * @param {Mixed} value
   * @return {Boolean} result
   *)
*/
const ts = Symbol.for("matchers-object"), vi = Symbol.for("$$jest-matchers-object"), xs = Symbol.for("expect-global"), Yl = Symbol.for("asymmetric-matchers-object"), fP = {
  toSatisfy(e, t, r) {
    const { printReceived: n, printExpected: o, matcherHint: i } = this.utils, s = t(e);
    return {
      pass: s,
      message: () => s ? `${i(".not.toSatisfy", "received", "")}

Expected value to not satisfy:
${r || o(t)}
Received:
${n(e)}` : `${i(".toSatisfy", "received", "")}

Expected value to satisfy:
${r || o(t)}

Received:
${n(e)}`
    };
  },
  toBeOneOf(e, t) {
    const { equals: r, customTesters: n } = this, { printReceived: o, printExpected: i, matcherHint: s } = this.utils;
    if (!Array.isArray(t))
      throw new TypeError(`You must provide an array to ${s(".toBeOneOf")}, not '${typeof t}'.`);
    const a = t.length === 0 || t.some((u) => r(u, e, n));
    return {
      pass: a,
      message: () => a ? `${s(".not.toBeOneOf", "received", "")}

Expected value to not be one of:
${i(t)}
Received:
${o(e)}` : `${s(".toBeOneOf", "received", "")}

Expected value to be one of:
${i(t)}

Received:
${o(e)}`
    };
  }
}, rs = ze.green, Zl = ze.red, pP = ze.inverse, hP = ze.bold, bt = ze.dim;
function mP(e, t = "received", r = "expected", n = {}) {
  const { comment: o = "", isDirectExpectCall: i = !1, isNot: s = !1, promise: a = "", secondArgument: u = "", expectedColor: l = rs, receivedColor: c = Zl, secondArgumentColor: d = rs } = n;
  let f = "", p = "expect";
  return !i && t !== "" && (f += bt(`${p}(`) + c(t), p = ")"), a !== "" && (f += bt(`${p}.`) + a, p = ""), s && (f += `${bt(`${p}.`)}not`, p = ""), e.includes(".") ? p += e : (f += bt(`${p}.`) + e, p = ""), r === "" ? p += "()" : (f += bt(`${p}(`) + l(r), u && (f += bt(", ") + d(u)), p = ")"), o !== "" && (p += ` // ${o}`), p !== "" && (f += bt(p)), f;
}
const gP = "·";
function tb(e) {
  return e.replace(/\s+$/gm, (t) => gP.repeat(t.length));
}
function bP(e) {
  return Zl(tb(We(e)));
}
function yP(e) {
  return rs(tb(We(e)));
}
function rb() {
  return {
    EXPECTED_COLOR: rs,
    RECEIVED_COLOR: Zl,
    INVERTED_COLOR: pP,
    BOLD_WEIGHT: hP,
    DIM_COLOR: bt,
    diff: Qt,
    matcherHint: mP,
    printReceived: bP,
    printExpected: yP,
    printDiffOrStringify: sg,
    printWithType: vP
  };
}
function vP(e, t, r) {
  const n = ci(t), o = n !== "null" && n !== "undefined" ? `${e} has type:  ${n}
` : "", i = `${e} has value: ${r(t)}`;
  return o + i;
}
function wP(e) {
  if (!Array.isArray(e))
    throw new TypeError(`expect.customEqualityTesters: Must be set to an array of Testers. Was given "${ci(e)}"`);
  globalThis[vi].customEqualityTesters.push(...e);
}
function Ql() {
  return globalThis[vi].customEqualityTesters;
}
function ie(e, t, r, n) {
  return r = r || [], ni(e, t, [], [], r, n ? nb : xP);
}
function Rp(e) {
  return !!e && typeof e == "object" && "asymmetricMatch" in e && nt("Function", e.asymmetricMatch);
}
function RP(e, t) {
  const r = Rp(e), n = Rp(t);
  if (!(r && n)) {
    if (r)
      return e.asymmetricMatch(t);
    if (n)
      return t.asymmetricMatch(e);
  }
}
function ni(e, t, r, n, o, i) {
  let s = !0;
  const a = RP(e, t);
  if (a !== void 0)
    return a;
  const u = { equals: ie };
  for (let g = 0; g < o.length; g++) {
    const h = o[g].call(u, e, t, o);
    if (h !== void 0)
      return h;
  }
  if (typeof URL == "function" && e instanceof URL && t instanceof URL)
    return e.href === t.href;
  if (Object.is(e, t))
    return !0;
  if (e === null || t === null)
    return e === t;
  const l = Object.prototype.toString.call(e);
  if (l !== Object.prototype.toString.call(t))
    return !1;
  switch (l) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      return typeof e != typeof t ? !1 : typeof e != "object" && typeof t != "object" ? Object.is(e, t) : Object.is(e.valueOf(), t.valueOf());
    case "[object Date]": {
      const g = +e, h = +t;
      return g === h || Number.isNaN(g) && Number.isNaN(h);
    }
    case "[object RegExp]":
      return e.source === t.source && e.flags === t.flags;
    case "[object Temporal.Instant]":
    case "[object Temporal.ZonedDateTime]":
    case "[object Temporal.PlainDateTime]":
    case "[object Temporal.PlainDate]":
    case "[object Temporal.PlainTime]":
    case "[object Temporal.PlainYearMonth]":
    case "[object Temporal.PlainMonthDay]":
      return e.equals(t);
    case "[object Temporal.Duration]":
      return e.toString() === t.toString();
  }
  if (typeof e != "object" || typeof t != "object")
    return !1;
  if (xp(e) && xp(t))
    return e.isEqualNode(t);
  let c = r.length;
  for (; c--; ) {
    if (r[c] === e)
      return n[c] === t;
    if (n[c] === t)
      return !1;
  }
  if (r.push(e), n.push(t), l === "[object Array]" && e.length !== t.length)
    return !1;
  if (e instanceof Error && t instanceof Error)
    try {
      return CP(e, t, r, n, o, i);
    } finally {
      r.pop(), n.pop();
    }
  const d = Cp(e, i);
  let f, p = d.length;
  if (Cp(t, i).length !== p)
    return !1;
  for (; p--; )
    if (f = d[p], s = i(t, f) && ni(e[f], t[f], r, n, o, i), !s)
      return !1;
  return r.pop(), n.pop(), s;
}
function CP(e, t, r, n, o, i) {
  let s = Object.getPrototypeOf(e) === Object.getPrototypeOf(t) && e.name === t.name && e.message === t.message;
  return typeof t.cause < "u" && s && (s = ni(e.cause, t.cause, r, n, o, i)), e instanceof AggregateError && t instanceof AggregateError && s && (s = ni(e.errors, t.errors, r, n, o, i)), s && (s = ni({ ...e }, { ...t }, r, n, o, i)), s;
}
function Cp(e, t) {
  const r = [];
  for (const n in e)
    t(e, n) && r.push(n);
  return r.concat(Object.getOwnPropertySymbols(e).filter((n) => Object.getOwnPropertyDescriptor(e, n).enumerable));
}
function xP(e, t) {
  return nb(e, t) && e[t] !== void 0;
}
function nb(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function nt(e, t) {
  return Object.prototype.toString.apply(t) === `[object ${e}]`;
}
function xp(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number" && "nodeName" in e && typeof e.nodeName == "string" && "isEqualNode" in e && typeof e.isEqualNode == "function";
}
const ob = "@@__IMMUTABLE_KEYED__@@", ib = "@@__IMMUTABLE_SET__@@", EP = "@@__IMMUTABLE_LIST__@@", Es = "@@__IMMUTABLE_ORDERED__@@", SP = "@@__IMMUTABLE_RECORD__@@";
function PP(e) {
  return !!(e && e[ob] && !e[Es]);
}
function TP(e) {
  return !!(e && e[ib] && !e[Es]);
}
function Ss(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function _P(e) {
  return !!(e && Ss(e) && e[EP]);
}
function qP(e) {
  return !!(e && Ss(e) && e[ob] && e[Es]);
}
function $P(e) {
  return !!(e && Ss(e) && e[ib] && e[Es]);
}
function OP(e) {
  return !!(e && Ss(e) && e[SP]);
}
const sb = Symbol.iterator;
function Ep(e) {
  return !!(e != null && e[sb]);
}
function Ue(e, t, r = [], n = [], o = []) {
  if (typeof e != "object" || typeof t != "object" || Array.isArray(e) || Array.isArray(t) || !Ep(e) || !Ep(t))
    return;
  if (e.constructor !== t.constructor)
    return !1;
  let i = n.length;
  for (; i--; )
    if (n[i] === e)
      return o[i] === t;
  n.push(e), o.push(t);
  const s = [...r.filter((l) => l !== Ue), a];
  function a(l, c) {
    return Ue(l, c, [...r], [...n], [...o]);
  }
  if (e.size !== void 0) {
    if (e.size !== t.size)
      return !1;
    if (nt("Set", e) || TP(e)) {
      let l = !0;
      for (const c of e)
        if (!t.has(c)) {
          let d = !1;
          for (const f of t)
            ie(c, f, s) === !0 && (d = !0);
          if (d === !1) {
            l = !1;
            break;
          }
        }
      return n.pop(), o.pop(), l;
    } else if (nt("Map", e) || PP(e)) {
      let l = !0;
      for (const c of e)
        if (!t.has(c[0]) || !ie(c[1], t.get(c[0]), s)) {
          let d = !1;
          for (const f of t) {
            const p = ie(c[0], f[0], s);
            let g = !1;
            p === !0 && (g = ie(c[1], f[1], s)), g === !0 && (d = !0);
          }
          if (d === !1) {
            l = !1;
            break;
          }
        }
      return n.pop(), o.pop(), l;
    }
  }
  const u = t[sb]();
  for (const l of e) {
    const c = u.next();
    if (c.done || !ie(l, c.value, s))
      return !1;
  }
  if (!u.next().done)
    return !1;
  if (!_P(e) && !qP(e) && !$P(e) && !OP(e)) {
    const l = Object.entries(e), c = Object.entries(t);
    if (!ie(l, c, s))
      return !1;
  }
  return n.pop(), o.pop(), !0;
}
function eu(e, t) {
  return !e || typeof e != "object" || e === Object.prototype ? !1 : Object.prototype.hasOwnProperty.call(e, t) || eu(Object.getPrototypeOf(e), t);
}
function MP(e) {
  return zt(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date);
}
function tr(e, t, r = []) {
  const n = r.filter((i) => i !== tr), o = (i = /* @__PURE__ */ new WeakMap()) => (s, a) => {
    if (MP(a))
      return Object.keys(a).every((u) => {
        if (a[u] != null && typeof a[u] == "object") {
          if (i.has(a[u]))
            return ie(s[u], a[u], n);
          i.set(a[u], !0);
        }
        const l = s != null && eu(s, u) && ie(s[u], a[u], [...n, o(i)]);
        return i.delete(a[u]), l;
      });
  };
  return o()(e, t);
}
function Sp(e, t) {
  if (!(e == null || t == null || e.constructor === t.constructor))
    return !1;
}
function Pp(e, t) {
  let r = e, n = t;
  if (!(e instanceof DataView && t instanceof DataView)) {
    if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer))
      return;
    try {
      r = new DataView(e), n = new DataView(t);
    } catch {
      return;
    }
  }
  if (r.byteLength !== n.byteLength)
    return !1;
  for (let o = 0; o < r.byteLength; o++)
    if (r.getUint8(o) !== n.getUint8(o))
      return !1;
  return !0;
}
function Wa(e, t, r = []) {
  if (!Array.isArray(e) || !Array.isArray(t))
    return;
  const n = Object.keys(e), o = Object.keys(t), i = r.filter((s) => s !== Wa);
  return ie(e, t, i, !0) && ie(n, o);
}
function AP(e, t = "#{this}", r = "#{exp}") {
  const n = `expected ${t} to be ${r} // Object.is equality`;
  return ["toStrictEqual", "toEqual"].includes(e) ? `${n}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
` : n;
}
function IP(e, t) {
  return `${t} ${e}${t === 1 ? "" : "s"}`;
}
function Hs(e) {
  return [...Object.keys(e), ...Object.getOwnPropertySymbols(e).filter((t) => {
    var r;
    return (r = Object.getOwnPropertyDescriptor(e, t)) === null || r === void 0 ? void 0 : r.enumerable;
  })];
}
function NP(e, t, r) {
  let n = 0;
  const o = (i = /* @__PURE__ */ new WeakMap()) => (s, a) => {
    if (Array.isArray(s)) {
      if (Array.isArray(a) && a.length === s.length)
        return a.map((u, l) => o(i)(s[l], u));
    } else {
      if (s instanceof Date)
        return s;
      if (zt(s) && zt(a)) {
        if (ie(s, a, [
          ...r,
          Ue,
          tr
        ]))
          return a;
        const u = {};
        i.set(s, u), typeof s.constructor == "function" && typeof s.constructor.name == "string" && Object.defineProperty(u, "constructor", {
          enumerable: !1,
          value: s.constructor
        });
        for (const l of Hs(s))
          eu(a, l) ? u[l] = i.has(s[l]) ? i.get(s[l]) : o(i)(s[l], a[l]) : i.has(s[l]) || (n += 1, zt(s[l]) && (n += Hs(s[l]).length), o(i)(s[l], a[l]));
        if (Hs(u).length > 0)
          return u;
      }
    }
    return s;
  };
  return {
    subset: o()(e, t),
    stripped: n
  };
}
if (!Object.prototype.hasOwnProperty.call(globalThis, ts)) {
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ Object.create(null), r = [], n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(globalThis, ts, { get: () => e }), Object.defineProperty(globalThis, vi, {
    configurable: !0,
    get: () => ({
      state: e.get(globalThis[xs]),
      matchers: t,
      customEqualityTesters: r
    })
  }), Object.defineProperty(globalThis, Yl, { get: () => n });
}
function oi(e) {
  return globalThis[ts].get(e);
}
function Vs(e, t) {
  const r = globalThis[ts], n = r.get(t) || {}, o = Object.defineProperties(n, {
    ...Object.getOwnPropertyDescriptors(n),
    ...Object.getOwnPropertyDescriptors(e)
  });
  r.set(t, o);
}
let gt = class {
  constructor(t, r = !1) {
    // should have "jest" to be compatible with its ecosystem
    Y(this, "$$typeof", Symbol.for("jest.asymmetricMatcher"));
    this.sample = t, this.inverse = r;
  }
  getMatcherContext(t) {
    return {
      ...oi(t || globalThis[xs]),
      equals: ie,
      isNot: this.inverse,
      customTesters: Ql(),
      utils: {
        ...rb(),
        diff: Qt,
        stringify: We,
        iterableEquality: Ue,
        subsetEquality: tr
      }
    };
  }
};
gt.prototype[Symbol.for("chai/inspect")] = function(e) {
  const t = We(this, e.depth, { min: !0 });
  return t.length <= e.truncate ? t : `${this.toString()}{…}`;
};
class Tp extends gt {
  constructor(t, r = !1) {
    if (!nt("String", t))
      throw new Error("Expected is not a string");
    super(t, r);
  }
  asymmetricMatch(t) {
    const r = nt("String", t) && t.includes(this.sample);
    return this.inverse ? !r : r;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
}
class kP extends gt {
  asymmetricMatch(t) {
    return t != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
}
class _p extends gt {
  constructor(t, r = !1) {
    super(t, r);
  }
  getPrototype(t) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.constructor.prototype === t ? null : t.constructor.prototype;
  }
  hasProperty(t, r) {
    return t ? Object.prototype.hasOwnProperty.call(t, r) ? !0 : this.hasProperty(this.getPrototype(t), r) : !1;
  }
  asymmetricMatch(t) {
    if (typeof this.sample != "object")
      throw new TypeError(`You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`);
    let r = !0;
    const n = this.getMatcherContext();
    for (const o in this.sample)
      if (!this.hasProperty(t, o) || !ie(this.sample[o], t[o], n.customTesters)) {
        r = !1;
        break;
      }
    return this.inverse ? !r : r;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
}
class qp extends gt {
  constructor(t, r = !1) {
    super(t, r);
  }
  asymmetricMatch(t) {
    if (!Array.isArray(this.sample))
      throw new TypeError(`You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`);
    const r = this.getMatcherContext(), n = this.sample.length === 0 || Array.isArray(t) && this.sample.every((o) => t.some((i) => ie(o, i, r.customTesters)));
    return this.inverse ? !n : n;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
}
class jP extends gt {
  constructor(t) {
    if (typeof t > "u")
      throw new TypeError("any() expects to be passed a constructor function. Please pass one or use anything() to match any object.");
    super(t);
  }
  fnNameFor(t) {
    if (t.name)
      return t.name;
    const n = Function.prototype.toString.call(t).match(/^(?:async)?\s*function\s*(?:\*\s*)?([\w$]+)\s*\(/);
    return n ? n[1] : "<anonymous>";
  }
  asymmetricMatch(t) {
    return this.sample === String ? typeof t == "string" || t instanceof String : this.sample === Number ? typeof t == "number" || t instanceof Number : this.sample === Function ? typeof t == "function" || typeof t == "function" : this.sample === Boolean ? typeof t == "boolean" || t instanceof Boolean : this.sample === BigInt ? typeof t == "bigint" || t instanceof BigInt : this.sample === Symbol ? typeof t == "symbol" || t instanceof Symbol : this.sample === Object ? typeof t == "object" : t instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    return this.sample === String ? "string" : this.sample === Number ? "number" : this.sample === Function ? "function" : this.sample === Object ? "object" : this.sample === Boolean ? "boolean" : this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
}
class $p extends gt {
  constructor(t, r = !1) {
    if (!nt("String", t) && !nt("RegExp", t))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(t), r);
  }
  asymmetricMatch(t) {
    const r = nt("String", t) && this.sample.test(t);
    return this.inverse ? !r : r;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
}
class Op extends gt {
  constructor(r, n = 2, o = !1) {
    if (!nt("Number", r))
      throw new Error("Expected is not a Number");
    if (!nt("Number", n))
      throw new Error("Precision is not a Number");
    super(r);
    Y(this, "precision");
    this.inverse = o, this.precision = n;
  }
  asymmetricMatch(r) {
    if (!nt("Number", r))
      return !1;
    let n = !1;
    return r === Number.POSITIVE_INFINITY && this.sample === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY && this.sample === Number.NEGATIVE_INFINITY ? n = !0 : n = Math.abs(this.sample - r) < 10 ** -this.precision / 2, this.inverse ? !n : n;
  }
  toString() {
    return `Number${this.inverse ? "Not" : ""}CloseTo`;
  }
  getExpectedType() {
    return "number";
  }
  toAsymmetricMatcher() {
    return [
      this.toString(),
      this.sample,
      `(${IP("digit", this.precision)})`
    ].join(" ");
  }
}
const DP = (e, t) => {
  t.addMethod(e.expect, "anything", () => new kP()), t.addMethod(e.expect, "any", (r) => new jP(r)), t.addMethod(e.expect, "stringContaining", (r) => new Tp(r)), t.addMethod(e.expect, "objectContaining", (r) => new _p(r)), t.addMethod(e.expect, "arrayContaining", (r) => new qp(r)), t.addMethod(e.expect, "stringMatching", (r) => new $p(r)), t.addMethod(e.expect, "closeTo", (r, n) => new Op(r, n)), e.expect.not = {
    stringContaining: (r) => new Tp(r, !0),
    objectContaining: (r) => new _p(r, !0),
    arrayContaining: (r) => new qp(r, !0),
    stringMatching: (r) => new $p(r, !0),
    closeTo: (r, n) => new Op(r, n, !0)
  };
};
function Mp(e, t, r) {
  const n = e.flag(t, "negate") ? "not." : "", o = `${e.flag(t, "_name")}(${r ? "expected" : ""})`, i = e.flag(t, "promise");
  return `expect(actual)${i ? `.${i}` : ""}.${n}${o}`;
}
function Ap(e, t, r, n) {
  const o = e;
  if (o && t instanceof Promise) {
    t = t.finally(() => {
      if (!o.promises)
        return;
      const s = o.promises.indexOf(t);
      s !== -1 && o.promises.splice(s, 1);
    }), o.promises || (o.promises = []), o.promises.push(t);
    let i = !1;
    return o.onFinished ?? (o.onFinished = []), o.onFinished.push(() => {
      if (!i) {
        var s;
        const u = (((s = globalThis.__vitest_worker__) === null || s === void 0 ? void 0 : s.onFilterStackTrace) || ((l) => l || ""))(n.stack);
        console.warn([
          `Promise returned by \`${r}\` was not awaited. `,
          "Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
          `Please remember to await the assertion.
`,
          u
        ].join(""));
      }
    }), {
      then(s, a) {
        return i = !0, t.then(s, a);
      },
      catch(s) {
        return t.catch(s);
      },
      finally(s) {
        return t.finally(s);
      },
      [Symbol.toStringTag]: "Promise"
    };
  }
  return t;
}
function Ip(e, t) {
  var r;
  e.result || (e.result = { state: "fail" }), e.result.state = "fail", (r = e.result).errors || (r.errors = []), e.result.errors.push(fg(t));
}
function ab(e, t, r) {
  return function(...n) {
    if (t !== "withTest" && e.flag(this, "_name", t), !e.flag(this, "soft"))
      return r.apply(this, n);
    const o = e.flag(this, "vitest-test");
    if (!o)
      throw new Error("expect.soft() can only be used inside a test");
    try {
      const i = r.apply(this, n);
      return i && typeof i == "object" && typeof i.then == "function" ? i.then(NE, (s) => {
        Ip(o, s);
      }) : i;
    } catch (i) {
      Ip(o, i);
    }
  };
}
const FP = (e, t) => {
  const { AssertionError: r } = e, n = Ql();
  function o(l, c) {
    const d = (f) => {
      const p = ab(t, f, c);
      t.addMethod(e.Assertion.prototype, f, p), t.addMethod(globalThis[vi].matchers, f, p);
    };
    Array.isArray(l) ? l.forEach((f) => d(f)) : d(l);
  }
  [
    "throw",
    "throws",
    "Throw"
  ].forEach((l) => {
    t.overwriteMethod(e.Assertion.prototype, l, (c) => function(...d) {
      const f = t.flag(this, "promise"), p = t.flag(this, "object"), g = t.flag(this, "negate");
      if (f === "rejects")
        t.flag(this, "object", () => {
          throw p;
        });
      else if (f === "resolves" && typeof p != "function") {
        if (g)
          return;
        {
          const h = t.flag(this, "message") || "expected promise to throw an error, but it didn't", b = { showDiff: !1 };
          throw new r(h, b, t.flag(this, "ssfi"));
        }
      }
      c.apply(this, d);
    });
  }), o("withTest", function(l) {
    return t.flag(this, "vitest-test", l), this;
  }), o("toEqual", function(l) {
    const c = t.flag(this, "object"), d = ie(c, l, [...n, Ue]);
    return this.assert(d, "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", l, c);
  }), o("toStrictEqual", function(l) {
    const c = t.flag(this, "object"), d = ie(c, l, [
      ...n,
      Ue,
      Sp,
      Wa,
      Pp
    ], !0);
    return this.assert(d, "expected #{this} to strictly equal #{exp}", "expected #{this} to not strictly equal #{exp}", l, c);
  }), o("toBe", function(l) {
    const c = this._obj, d = Object.is(c, l);
    let f = "";
    return d || (ie(c, l, [
      ...n,
      Ue,
      Sp,
      Wa,
      Pp
    ], !0) ? f = "toStrictEqual" : ie(c, l, [...n, Ue]) && (f = "toEqual")), this.assert(d, AP(f), "expected #{this} not to be #{exp} // Object.is equality", l, c);
  }), o("toMatchObject", function(l) {
    const c = this._obj, d = ie(c, l, [
      ...n,
      Ue,
      tr
    ]), f = t.flag(this, "negate"), { subset: p, stripped: g } = NP(c, l, n);
    if (d && f || !d && !f) {
      const h = t.getMessage(this, [
        d,
        "expected #{this} to match object #{exp}",
        "expected #{this} to not match object #{exp}",
        l,
        p,
        !1
      ]), b = g === 0 ? h : `${h}
(${g} matching ${g === 1 ? "property" : "properties"} omitted from actual)`;
      throw new r(b, {
        showDiff: !0,
        expected: l,
        actual: p
      });
    }
  }), o("toMatch", function(l) {
    const c = this._obj;
    if (typeof c != "string")
      throw new TypeError(`.toMatch() expects to receive a string, but got ${typeof c}`);
    return this.assert(typeof l == "string" ? c.includes(l) : c.match(l), "expected #{this} to match #{exp}", "expected #{this} not to match #{exp}", l, c);
  }), o("toContain", function(l) {
    const c = this._obj;
    if (typeof Node < "u" && c instanceof Node) {
      if (!(l instanceof Node))
        throw new TypeError(`toContain() expected a DOM node as the argument, but got ${typeof l}`);
      return this.assert(c.contains(l), "expected #{this} to contain element #{exp}", "expected #{this} not to contain element #{exp}", l, c);
    }
    if (typeof DOMTokenList < "u" && c instanceof DOMTokenList) {
      lt(l, "class name", ["string"]);
      const f = t.flag(this, "negate") ? c.value.replace(l, "").trim() : `${c.value} ${l}`;
      return this.assert(c.contains(l), `expected "${c.value}" to contain "${l}"`, `expected "${c.value}" not to contain "${l}"`, f, c.value);
    }
    return typeof c == "string" && typeof l == "string" ? this.assert(c.includes(l), "expected #{this} to contain #{exp}", "expected #{this} not to contain #{exp}", l, c) : (c != null && typeof c != "string" && t.flag(this, "object", Array.from(c)), this.contain(l));
  }), o("toContainEqual", function(l) {
    const c = t.flag(this, "object"), d = Array.from(c).findIndex((f) => ie(f, l, n));
    this.assert(d !== -1, "expected #{this} to deep equally contain #{exp}", "expected #{this} to not deep equally contain #{exp}", l);
  }), o("toBeTruthy", function() {
    const l = t.flag(this, "object");
    this.assert(!!l, "expected #{this} to be truthy", "expected #{this} to not be truthy", !0, l);
  }), o("toBeFalsy", function() {
    const l = t.flag(this, "object");
    this.assert(!l, "expected #{this} to be falsy", "expected #{this} to not be falsy", !1, l);
  }), o("toBeGreaterThan", function(l) {
    const c = this._obj;
    return lt(c, "actual", ["number", "bigint"]), lt(l, "expected", ["number", "bigint"]), this.assert(c > l, `expected ${c} to be greater than ${l}`, `expected ${c} to be not greater than ${l}`, l, c, !1);
  }), o("toBeGreaterThanOrEqual", function(l) {
    const c = this._obj;
    return lt(c, "actual", ["number", "bigint"]), lt(l, "expected", ["number", "bigint"]), this.assert(c >= l, `expected ${c} to be greater than or equal to ${l}`, `expected ${c} to be not greater than or equal to ${l}`, l, c, !1);
  }), o("toBeLessThan", function(l) {
    const c = this._obj;
    return lt(c, "actual", ["number", "bigint"]), lt(l, "expected", ["number", "bigint"]), this.assert(c < l, `expected ${c} to be less than ${l}`, `expected ${c} to be not less than ${l}`, l, c, !1);
  }), o("toBeLessThanOrEqual", function(l) {
    const c = this._obj;
    return lt(c, "actual", ["number", "bigint"]), lt(l, "expected", ["number", "bigint"]), this.assert(c <= l, `expected ${c} to be less than or equal to ${l}`, `expected ${c} to be not less than or equal to ${l}`, l, c, !1);
  }), o("toBeNaN", function() {
    const l = t.flag(this, "object");
    this.assert(Number.isNaN(l), "expected #{this} to be NaN", "expected #{this} not to be NaN", Number.NaN, l);
  }), o("toBeUndefined", function() {
    const l = t.flag(this, "object");
    this.assert(l === void 0, "expected #{this} to be undefined", "expected #{this} not to be undefined", void 0, l);
  }), o("toBeNull", function() {
    const l = t.flag(this, "object");
    this.assert(l === null, "expected #{this} to be null", "expected #{this} not to be null", null, l);
  }), o("toBeDefined", function() {
    const l = t.flag(this, "object");
    this.assert(typeof l < "u", "expected #{this} to be defined", "expected #{this} to be undefined", l);
  }), o("toBeTypeOf", function(l) {
    const c = typeof this._obj, d = l === c;
    return this.assert(d, "expected #{this} to be type of #{exp}", "expected #{this} not to be type of #{exp}", l, c);
  }), o("toBeInstanceOf", function(l) {
    return this.instanceOf(l);
  }), o("toHaveLength", function(l) {
    return this.have.length(l);
  }), o("toHaveProperty", function(...l) {
    Array.isArray(l[0]) && (l[0] = l[0].map((E) => String(E).replace(/([.[\]])/g, "\\$1")).join("."));
    const c = this._obj, [d, f] = l, p = () => Object.prototype.hasOwnProperty.call(c, d) ? {
      value: c[d],
      exists: !0
    } : t.getPathInfo(c, d), { value: g, exists: h } = p(), b = h && (l.length === 1 || ie(f, g, n)), m = l.length === 1 ? "" : ` with value ${t.objDisplay(f)}`;
    return this.assert(b, `expected #{this} to have property "${d}"${m}`, `expected #{this} to not have property "${d}"${m}`, f, h ? g : void 0);
  }), o("toBeCloseTo", function(l, c = 2) {
    const d = this._obj;
    let f = !1, p = 0, g = 0;
    return l === Number.POSITIVE_INFINITY && d === Number.POSITIVE_INFINITY || l === Number.NEGATIVE_INFINITY && d === Number.NEGATIVE_INFINITY ? f = !0 : (p = 10 ** -c / 2, g = Math.abs(d - l), f = g < p), this.assert(f, `expected #{this} to be close to #{exp}, received difference is ${g}, but expected ${p}`, `expected #{this} to not be close to #{exp}, received difference is ${g}, but expected ${p}`, l, d, !1);
  });
  function i(l) {
    if (!ti(l._obj))
      throw new TypeError(`${t.inspect(l._obj)} is not a spy or a call to a spy!`);
  }
  function s(l) {
    return i(l), l._obj;
  }
  o(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(l) {
    const c = s(this), d = c.getMockName(), f = c.mock.calls.length;
    return this.assert(f === l, `expected "${d}" to be called #{exp} times, but got ${f} times`, `expected "${d}" to not be called #{exp} times`, l, f, !1);
  }), o("toHaveBeenCalledOnce", function() {
    const l = s(this), c = l.getMockName(), d = l.mock.calls.length;
    return this.assert(d === 1, `expected "${c}" to be called once, but got ${d} times`, `expected "${c}" to not be called once`, 1, d, !1);
  }), o(["toHaveBeenCalled", "toBeCalled"], function() {
    const l = s(this), c = l.getMockName(), d = l.mock.calls.length, f = d > 0, p = t.flag(this, "negate");
    let g = t.getMessage(this, [
      f,
      `expected "${c}" to be called at least once`,
      `expected "${c}" to not be called at all, but actually been called ${d} times`,
      !0,
      f
    ]);
    if (f && p && (g = Us(l, g)), f && p || !f && !p)
      throw new r(g);
  });
  function a(l, c) {
    return l.length === c.length && l.every((d, f) => ie(d, c[f], [...n, Ue]));
  }
  o(["toHaveBeenCalledWith", "toBeCalledWith"], function(...l) {
    const c = s(this), d = c.getMockName(), f = c.mock.calls.some((h) => a(h, l)), p = t.flag(this, "negate"), g = t.getMessage(this, [
      f,
      `expected "${d}" to be called with arguments: #{exp}`,
      `expected "${d}" to not be called with arguments: #{exp}`,
      l
    ]);
    if (f && p || !f && !p)
      throw new r(Us(c, g, l));
  }), o("toHaveBeenCalledExactlyOnceWith", function(...l) {
    const c = s(this), d = c.getMockName(), f = c.mock.calls.length, g = c.mock.calls.some((m) => a(m, l)) && f === 1, h = t.flag(this, "negate"), b = t.getMessage(this, [
      g,
      `expected "${d}" to be called once with arguments: #{exp}`,
      `expected "${d}" to not be called once with arguments: #{exp}`,
      l
    ]);
    if (g && h || !g && !h)
      throw new r(Us(c, b, l));
  }), o(["toHaveBeenNthCalledWith", "nthCalledWith"], function(l, ...c) {
    const d = s(this), f = d.getMockName(), p = d.mock.calls[l - 1], g = d.mock.calls.length, h = l <= g;
    this.assert(p && a(p, c), `expected ${ii(l)} "${f}" call to have been called with #{exp}${h ? "" : `, but called only ${g} times`}`, `expected ${ii(l)} "${f}" call to not have been called with #{exp}`, c, p, h);
  }), o(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...l) {
    const c = s(this), d = c.getMockName(), f = c.mock.calls[c.mock.calls.length - 1];
    this.assert(f && a(f, l), `expected last "${d}" call to have been called with #{exp}`, `expected last "${d}" call to not have been called with #{exp}`, l, f);
  });
  function u(l, c, d) {
    const f = l.mock.invocationCallOrder, p = c.mock.invocationCallOrder;
    return f.length === 0 ? !d : p.length === 0 ? !1 : f[0] < p[0];
  }
  o(["toHaveBeenCalledBefore"], function(l, c = !0) {
    const d = s(this);
    if (!ti(l))
      throw new TypeError(`${t.inspect(l)} is not a spy or a call to a spy`);
    this.assert(u(d, l, c), `expected "${d.getMockName()}" to have been called before "${l.getMockName()}"`, `expected "${d.getMockName()}" to not have been called before "${l.getMockName()}"`, l, d);
  }), o(["toHaveBeenCalledAfter"], function(l, c = !0) {
    const d = s(this);
    if (!ti(l))
      throw new TypeError(`${t.inspect(l)} is not a spy or a call to a spy`);
    this.assert(u(l, d, c), `expected "${d.getMockName()}" to have been called after "${l.getMockName()}"`, `expected "${d.getMockName()}" to not have been called after "${l.getMockName()}"`, l, d);
  }), o(["toThrow", "toThrowError"], function(l) {
    if (typeof l == "string" || typeof l > "u" || l instanceof RegExp)
      return this.throws(l === "" ? /^$/ : l);
    const c = this._obj, d = t.flag(this, "promise"), f = t.flag(this, "negate");
    let p = null;
    if (d === "rejects")
      p = c;
    else if (d === "resolves" && typeof c != "function") {
      if (f)
        return;
      {
        const g = t.flag(this, "message") || "expected promise to throw an error, but it didn't", h = { showDiff: !1 };
        throw new r(g, h, t.flag(this, "ssfi"));
      }
    } else {
      let g = !1;
      try {
        c();
      } catch (h) {
        g = !0, p = h;
      }
      if (!g && !f) {
        const h = t.flag(this, "message") || "expected function to throw an error, but it didn't", b = { showDiff: !1 };
        throw new r(h, b, t.flag(this, "ssfi"));
      }
    }
    if (typeof l == "function") {
      const g = l.name || l.prototype.constructor.name;
      return this.assert(p && p instanceof l, `expected error to be instance of ${g}`, `expected error not to be instance of ${g}`, l, p);
    }
    if (l instanceof Error) {
      const g = ie(p, l, [...n, Ue]);
      return this.assert(g, "expected a thrown error to be #{exp}", "expected a thrown error not to be #{exp}", l, p);
    }
    if (typeof l == "object" && "asymmetricMatch" in l && typeof l.asymmetricMatch == "function") {
      const g = l;
      return this.assert(p && g.asymmetricMatch(p), "expected error to match asymmetric matcher", "expected error not to match asymmetric matcher", g, p);
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof l}"`);
  }), [{
    name: "toHaveResolved",
    condition: (l) => l.mock.settledResults.length > 0 && l.mock.settledResults.some(({ type: c }) => c === "fulfilled"),
    action: "resolved"
  }, {
    name: ["toHaveReturned", "toReturn"],
    condition: (l) => l.mock.calls.length > 0 && l.mock.results.some(({ type: c }) => c !== "throw"),
    action: "called"
  }].forEach(({ name: l, condition: c, action: d }) => {
    o(l, function() {
      const f = s(this), p = f.getMockName(), g = c(f);
      this.assert(g, `expected "${p}" to be successfully ${d} at least once`, `expected "${p}" to not be successfully ${d}`, g, !g, !1);
    });
  }), [{
    name: "toHaveResolvedTimes",
    condition: (l, c) => l.mock.settledResults.reduce((d, { type: f }) => f === "fulfilled" ? ++d : d, 0) === c,
    action: "resolved"
  }, {
    name: ["toHaveReturnedTimes", "toReturnTimes"],
    condition: (l, c) => l.mock.results.reduce((d, { type: f }) => f === "throw" ? d : ++d, 0) === c,
    action: "called"
  }].forEach(({ name: l, condition: c, action: d }) => {
    o(l, function(f) {
      const p = s(this), g = p.getMockName(), h = c(p, f);
      this.assert(h, `expected "${g}" to be successfully ${d} ${f} times`, `expected "${g}" to not be successfully ${d} ${f} times`, `expected resolved times: ${f}`, `received resolved times: ${h}`, !1);
    });
  }), [{
    name: "toHaveResolvedWith",
    condition: (l, c) => l.mock.settledResults.some(({ type: d, value: f }) => d === "fulfilled" && ie(c, f)),
    action: "resolve"
  }, {
    name: ["toHaveReturnedWith", "toReturnWith"],
    condition: (l, c) => l.mock.results.some(({ type: d, value: f }) => d === "return" && ie(c, f)),
    action: "return"
  }].forEach(({ name: l, condition: c, action: d }) => {
    o(l, function(f) {
      const p = s(this), g = c(p, f), h = t.flag(this, "negate");
      if (g && h || !g && !h) {
        const b = p.getMockName(), m = t.getMessage(this, [
          g,
          `expected "${b}" to ${d} with: #{exp} at least once`,
          `expected "${b}" to not ${d} with: #{exp}`,
          f
        ]), E = d === "return" ? p.mock.results : p.mock.settledResults;
        throw new r(LP(p, E, m, f));
      }
    });
  }), [{
    name: "toHaveLastResolvedWith",
    condition: (l, c) => {
      const d = l.mock.settledResults[l.mock.settledResults.length - 1];
      return d && d.type === "fulfilled" && ie(d.value, c);
    },
    action: "resolve"
  }, {
    name: ["toHaveLastReturnedWith", "lastReturnedWith"],
    condition: (l, c) => {
      const d = l.mock.results[l.mock.results.length - 1];
      return d && d.type === "return" && ie(d.value, c);
    },
    action: "return"
  }].forEach(({ name: l, condition: c, action: d }) => {
    o(l, function(f) {
      const p = s(this), g = d === "return" ? p.mock.results : p.mock.settledResults, h = g[g.length - 1], b = p.getMockName();
      this.assert(c(p, f), `expected last "${b}" call to ${d} #{exp}`, `expected last "${b}" call to not ${d} #{exp}`, f, h == null ? void 0 : h.value);
    });
  }), [{
    name: "toHaveNthResolvedWith",
    condition: (l, c, d) => {
      const f = l.mock.settledResults[c - 1];
      return f && f.type === "fulfilled" && ie(f.value, d);
    },
    action: "resolve"
  }, {
    name: ["toHaveNthReturnedWith", "nthReturnedWith"],
    condition: (l, c, d) => {
      const f = l.mock.results[c - 1];
      return f && f.type === "return" && ie(f.value, d);
    },
    action: "return"
  }].forEach(({ name: l, condition: c, action: d }) => {
    o(l, function(f, p) {
      const g = s(this), h = g.getMockName(), m = (d === "return" ? g.mock.results : g.mock.settledResults)[f - 1], E = `${ii(f)} call`;
      this.assert(c(g, f, p), `expected ${E} "${h}" call to ${d} #{exp}`, `expected ${E} "${h}" call to not ${d} #{exp}`, p, m == null ? void 0 : m.value);
    });
  }), o("withContext", function(l) {
    for (const c in l)
      t.flag(this, c, l[c]);
    return this;
  }), t.addProperty(e.Assertion.prototype, "resolves", function() {
    const c = new Error("resolves");
    t.flag(this, "promise", "resolves"), t.flag(this, "error", c);
    const d = t.flag(this, "vitest-test"), f = t.flag(this, "object");
    if (t.flag(this, "poll"))
      throw new SyntaxError("expect.poll() is not supported in combination with .resolves");
    if (typeof (f == null ? void 0 : f.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof f}'.`);
    const p = new Proxy(this, { get: (g, h, b) => {
      const m = Reflect.get(g, h, b);
      return typeof m != "function" ? m instanceof e.Assertion ? p : m : (...E) => {
        t.flag(this, "_name", h);
        const $ = f.then((_) => (t.flag(this, "object", _), m.call(this, ...E)), (_) => {
          const C = new r(`promise rejected "${t.inspect(_)}" instead of resolving`, { showDiff: !1 });
          throw C.cause = _, C.stack = c.stack.replace(c.message, C.message), C;
        });
        return Ap(d, $, Mp(t, this, !!E.length), c);
      };
    } });
    return p;
  }), t.addProperty(e.Assertion.prototype, "rejects", function() {
    const c = new Error("rejects");
    t.flag(this, "promise", "rejects"), t.flag(this, "error", c);
    const d = t.flag(this, "vitest-test"), f = t.flag(this, "object"), p = typeof f == "function" ? f() : f;
    if (t.flag(this, "poll"))
      throw new SyntaxError("expect.poll() is not supported in combination with .rejects");
    if (typeof (p == null ? void 0 : p.then) != "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof p}'.`);
    const g = new Proxy(this, { get: (h, b, m) => {
      const E = Reflect.get(h, b, m);
      return typeof E != "function" ? E instanceof e.Assertion ? g : E : (...$) => {
        t.flag(this, "_name", b);
        const _ = p.then((C) => {
          const T = new r(`promise resolved "${t.inspect(C)}" instead of rejecting`, {
            showDiff: !0,
            expected: new Error("rejected promise"),
            actual: C
          });
          throw T.stack = c.stack.replace(c.message, T.message), T;
        }, (C) => (t.flag(this, "object", C), E.call(this, ...$)));
        return Ap(d, _, Mp(t, this, !!$.length), c);
      };
    } });
    return g;
  });
};
function ii(e) {
  const t = e % 10, r = e % 100;
  return t === 1 && r !== 11 ? `${e}st` : t === 2 && r !== 12 ? `${e}nd` : t === 3 && r !== 13 ? `${e}rd` : `${e}th`;
}
function Us(e, t, r) {
  return e.mock.calls.length && (t += ze.gray(`

Received: 

${e.mock.calls.map((n, o) => {
    let i = ze.bold(`  ${ii(o + 1)} ${e.getMockName()} call:

`);
    return r ? i += Qt(r, n, { omitAnnotationLines: !0 }) : i += We(n).split(`
`).map((s) => `    ${s}`).join(`
`), i += `
`, i;
  }).join(`
`)}`)), t += ze.gray(`

Number of calls: ${ze.bold(e.mock.calls.length)}
`), t;
}
function LP(e, t, r, n) {
  return t.length && (r += ze.gray(`

Received: 

${t.map((o, i) => {
    let s = ze.bold(`  ${ii(i + 1)} ${e.getMockName()} call return:

`);
    return n ? s += Qt(n, o.value, { omitAnnotationLines: !0 }) : s += We(o).split(`
`).map((a) => `    ${a}`).join(`
`), s += `
`, s;
  }).join(`
`)}`)), r += ze.gray(`

Number of calls: ${ze.bold(e.mock.calls.length)}
`), r;
}
function BP(e, t) {
  const r = e._obj, n = $e.flag(e, "negate"), o = $e.flag(e, "promise") || "", i = {
    ...rb(),
    diff: Qt,
    stringify: We,
    iterableEquality: Ue,
    subsetEquality: tr
  };
  return {
    state: {
      ...oi(t),
      customTesters: Ql(),
      isNot: n,
      utils: i,
      promise: o,
      equals: ie,
      suppressedErrors: [],
      soft: $e.flag(e, "soft"),
      poll: $e.flag(e, "poll")
    },
    isNot: n,
    obj: r
  };
}
class Np extends Error {
  constructor(t, r, n) {
    super(t), this.actual = r, this.expected = n;
  }
}
function HP(e, t, r) {
  return (n, o) => {
    Object.entries(r).forEach(([i, s]) => {
      function a(...d) {
        const { state: f, isNot: p, obj: g } = BP(this, t), h = s.call(f, g, ...d);
        if (h && typeof h == "object" && typeof h.then == "function")
          return h.then(({ pass: C, message: T, actual: P, expected: v }) => {
            if (C && p || !C && !p)
              throw new Np(T(), P, v);
          });
        const { pass: b, message: m, actual: E, expected: $ } = h;
        if (b && p || !b && !p)
          throw new Np(m(), E, $);
      }
      const u = ab(o, i, a);
      o.addMethod(globalThis[vi].matchers, i, u), o.addMethod(e.Assertion.prototype, i, u);
      class l extends gt {
        constructor(f = !1, ...p) {
          super(p, f);
        }
        asymmetricMatch(f) {
          const { pass: p } = s.call(this.getMatcherContext(t), f, ...this.sample);
          return this.inverse ? !p : p;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${i}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map((f) => We(f)).join(", ")}>`;
        }
      }
      const c = (...d) => new l(!1, ...d);
      Object.defineProperty(t, i, {
        configurable: !0,
        enumerable: !0,
        value: c,
        writable: !0
      }), Object.defineProperty(t.not, i, {
        configurable: !0,
        enumerable: !0,
        value: (...d) => new l(!0, ...d),
        writable: !0
      }), Object.defineProperty(globalThis[Yl], i, {
        configurable: !0,
        enumerable: !0,
        value: c,
        writable: !0
      });
    });
  };
}
const VP = (e, t) => {
  t.addMethod(e.expect, "extend", (r, n) => {
    qt(HP(e, r, n));
  });
}, kp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", UP = new Uint8Array(64), zP = new Uint8Array(128);
for (let e = 0; e < kp.length; e++) {
  const t = kp.charCodeAt(e);
  UP[e] = t, zP[t] = e;
}
var jp;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(jp || (jp = {}));
const WP = /^[A-Za-z]:\//;
function JP(e = "") {
  return e && e.replace(/\\/g, "/").replace(WP, (t) => t.toUpperCase());
}
const XP = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function GP() {
  return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/";
}
const KP = function(...e) {
  e = e.map((n) => JP(n));
  let t = "", r = !1;
  for (let n = e.length - 1; n >= -1 && !r; n--) {
    const o = n >= 0 ? e[n] : GP();
    !o || o.length === 0 || (t = `${o}/${t}`, r = Dp(o));
  }
  return t = YP(t, !r), r && !Dp(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function YP(e, t) {
  let r = "", n = 0, o = -1, i = 0, s = null;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      s = e[a];
    else {
      if (s === "/")
        break;
      s = "/";
    }
    if (s === "/") {
      if (!(o === a - 1 || i === 1)) if (i === 2) {
        if (r.length < 2 || n !== 2 || r[r.length - 1] !== "." || r[r.length - 2] !== ".") {
          if (r.length > 2) {
            const u = r.lastIndexOf("/");
            u === -1 ? (r = "", n = 0) : (r = r.slice(0, u), n = r.length - 1 - r.lastIndexOf("/")), o = a, i = 0;
            continue;
          } else if (r.length > 0) {
            r = "", n = 0, o = a, i = 0;
            continue;
          }
        }
        t && (r += r.length > 0 ? "/.." : "..", n = 2);
      } else
        r.length > 0 ? r += `/${e.slice(o + 1, a)}` : r = e.slice(o + 1, a), n = a - o - 1;
      o = a, i = 0;
    } else s === "." && i !== -1 ? ++i : i = -1;
  }
  return r;
}
const Dp = function(e) {
  return XP.test(e);
}, lb = /^\s*at .*(?:\S:\d+|\(native\))/m, ZP = /^(?:eval@)?(?:\[native code\])?$/;
function ub(e) {
  if (!e.includes(":"))
    return [e];
  const r = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!r)
    return [e];
  let n = r[1];
  if (n.startsWith("async ") && (n = n.slice(6)), n.startsWith("http:") || n.startsWith("https:")) {
    const o = new URL(n);
    o.searchParams.delete("import"), o.searchParams.delete("browserv"), n = o.pathname + o.hash + o.search;
  }
  if (n.startsWith("/@fs/")) {
    const o = /^\/@fs\/[a-zA-Z]:\//.test(n);
    n = n.slice(o ? 5 : 4);
  }
  return [
    n,
    r[2] || void 0,
    r[3] || void 0
  ];
}
function QP(e) {
  let t = e.trim();
  if (ZP.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const r = /((.*".+"[^@]*)?[^@]*)(@)/, n = t.match(r), o = n && n[1] ? n[1] : void 0, [i, s, a] = ub(t.replace(r, ""));
  return !i || !s || !a ? null : {
    file: i,
    method: o || "",
    line: Number.parseInt(s),
    column: Number.parseInt(a)
  };
}
function tu(e) {
  const t = e.trim();
  return lb.test(t) ? e0(t) : QP(t);
}
function e0(e) {
  let t = e.trim();
  if (!lb.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let r = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const n = r.match(/ (\(.+\)$)/);
  r = n ? r.replace(n[0], "") : r;
  const [o, i, s] = ub(n ? n[1] : r);
  let a = n && r || "", u = o && ["eval", "<anonymous>"].includes(o) ? void 0 : o;
  return !u || !i || !s ? null : (a.startsWith("async ") && (a = a.slice(6)), u.startsWith("file://") && (u = u.slice(7)), u = u.startsWith("node:") || u.startsWith("internal:") ? u : KP(u), a && (a = a.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: a,
    file: u,
    line: Number.parseInt(i),
    column: Number.parseInt(s)
  });
}
var zs, Fp;
function t0() {
  if (Fp) return zs;
  Fp = 1;
  var e, t, r, n, o, i, s, a, u, l, c, d, f, p, g, h, b, m, E, $;
  return p = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]?|[^\/[\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu, f = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y, t = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu, h = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y, d = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y, b = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y, $ = /[\t\v\f\ufeff\p{Zs}]+/yu, u = /\r?\n|[\r\u2028\u2029]/y, l = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y, g = /\/\/.*/y, e = /^#!.*/, n = /[<>.:={}]|\/(?![\/*])/y, r = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu, o = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y, i = /[^<>{}]+/y, E = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/, m = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/, s = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/, a = /^(?:return|throw|yield)$/, c = RegExp(u.source), zs = function* (_, { jsx: C = !1 } = {}) {
    var T, P, v, R, I, S, A, V, L, U, k, B, H, Q;
    for ({ length: S } = _, R = 0, I = "", Q = [
      { tag: "JS" }
    ], T = [], k = 0, B = !1, (A = e.exec(_)) && (yield {
      type: "HashbangComment",
      value: A[0]
    }, R = A[0].length); R < S; ) {
      switch (V = Q[Q.length - 1], V.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (_[R] === "/" && (E.test(I) || s.test(I)) && (p.lastIndex = R, A = p.exec(_))) {
            R = p.lastIndex, I = A[0], B = !0, yield {
              type: "RegularExpressionLiteral",
              value: A[0],
              closed: A[1] !== void 0 && A[1] !== "\\"
            };
            continue;
          }
          if (f.lastIndex = R, A = f.exec(_)) {
            switch (H = A[0], L = f.lastIndex, U = H, H) {
              case "(":
                I === "?NonExpressionParenKeyword" && Q.push({
                  tag: "JSNonExpressionParen",
                  nesting: k
                }), k++, B = !1;
                break;
              case ")":
                k--, B = !0, V.tag === "JSNonExpressionParen" && k === V.nesting && (Q.pop(), U = "?NonExpressionParenEnd", B = !1);
                break;
              case "{":
                f.lastIndex = 0, v = !m.test(I) && (E.test(I) || s.test(I)), T.push(v), B = !1;
                break;
              case "}":
                switch (V.tag) {
                  case "InterpolationInTemplate":
                    if (T.length === V.nesting) {
                      b.lastIndex = R, A = b.exec(_), R = b.lastIndex, I = A[0], A[1] === "${" ? (I = "?InterpolationInTemplate", B = !1, yield {
                        type: "TemplateMiddle",
                        value: A[0]
                      }) : (Q.pop(), B = !0, yield {
                        type: "TemplateTail",
                        value: A[0],
                        closed: A[1] === "`"
                      });
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (T.length === V.nesting) {
                      Q.pop(), R += 1, I = "}", yield {
                        type: "JSXPunctuator",
                        value: "}"
                      };
                      continue;
                    }
                }
                B = T.pop(), U = B ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                B = !0;
                break;
              case "++":
              case "--":
                U = B ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (C && (E.test(I) || s.test(I))) {
                  Q.push({ tag: "JSXTag" }), R += 1, I = "<", yield {
                    type: "JSXPunctuator",
                    value: H
                  };
                  continue;
                }
                B = !1;
                break;
              default:
                B = !1;
            }
            R = L, I = U, yield {
              type: "Punctuator",
              value: H
            };
            continue;
          }
          if (t.lastIndex = R, A = t.exec(_)) {
            switch (R = t.lastIndex, U = A[0], A[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                I !== "." && I !== "?." && (U = "?NonExpressionParenKeyword");
            }
            I = U, B = !s.test(A[0]), yield {
              type: A[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
              value: A[0]
            };
            continue;
          }
          if (h.lastIndex = R, A = h.exec(_)) {
            R = h.lastIndex, I = A[0], B = !0, yield {
              type: "StringLiteral",
              value: A[0],
              closed: A[2] !== void 0
            };
            continue;
          }
          if (d.lastIndex = R, A = d.exec(_)) {
            R = d.lastIndex, I = A[0], B = !0, yield {
              type: "NumericLiteral",
              value: A[0]
            };
            continue;
          }
          if (b.lastIndex = R, A = b.exec(_)) {
            R = b.lastIndex, I = A[0], A[1] === "${" ? (I = "?InterpolationInTemplate", Q.push({
              tag: "InterpolationInTemplate",
              nesting: T.length
            }), B = !1, yield {
              type: "TemplateHead",
              value: A[0]
            }) : (B = !0, yield {
              type: "NoSubstitutionTemplate",
              value: A[0],
              closed: A[1] === "`"
            });
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          if (n.lastIndex = R, A = n.exec(_)) {
            switch (R = n.lastIndex, U = A[0], A[0]) {
              case "<":
                Q.push({ tag: "JSXTag" });
                break;
              case ">":
                Q.pop(), I === "/" || V.tag === "JSXTagEnd" ? (U = "?JSX", B = !0) : Q.push({ tag: "JSXChildren" });
                break;
              case "{":
                Q.push({
                  tag: "InterpolationInJSX",
                  nesting: T.length
                }), U = "?InterpolationInJSX", B = !1;
                break;
              case "/":
                I === "<" && (Q.pop(), Q[Q.length - 1].tag === "JSXChildren" && Q.pop(), Q.push({ tag: "JSXTagEnd" }));
            }
            I = U, yield {
              type: "JSXPunctuator",
              value: A[0]
            };
            continue;
          }
          if (r.lastIndex = R, A = r.exec(_)) {
            R = r.lastIndex, I = A[0], yield {
              type: "JSXIdentifier",
              value: A[0]
            };
            continue;
          }
          if (o.lastIndex = R, A = o.exec(_)) {
            R = o.lastIndex, I = A[0], yield {
              type: "JSXString",
              value: A[0],
              closed: A[2] !== void 0
            };
            continue;
          }
          break;
        case "JSXChildren":
          if (i.lastIndex = R, A = i.exec(_)) {
            R = i.lastIndex, I = A[0], yield {
              type: "JSXText",
              value: A[0]
            };
            continue;
          }
          switch (_[R]) {
            case "<":
              Q.push({ tag: "JSXTag" }), R++, I = "<", yield {
                type: "JSXPunctuator",
                value: "<"
              };
              continue;
            case "{":
              Q.push({
                tag: "InterpolationInJSX",
                nesting: T.length
              }), R++, I = "?InterpolationInJSX", B = !1, yield {
                type: "JSXPunctuator",
                value: "{"
              };
              continue;
          }
      }
      if ($.lastIndex = R, A = $.exec(_)) {
        R = $.lastIndex, yield {
          type: "WhiteSpace",
          value: A[0]
        };
        continue;
      }
      if (u.lastIndex = R, A = u.exec(_)) {
        R = u.lastIndex, B = !1, a.test(I) && (I = "?NoLineTerminatorHere"), yield {
          type: "LineTerminatorSequence",
          value: A[0]
        };
        continue;
      }
      if (l.lastIndex = R, A = l.exec(_)) {
        R = l.lastIndex, c.test(A[0]) && (B = !1, a.test(I) && (I = "?NoLineTerminatorHere")), yield {
          type: "MultiLineComment",
          value: A[0],
          closed: A[1] !== void 0
        };
        continue;
      }
      if (g.lastIndex = R, A = g.exec(_)) {
        R = g.lastIndex, B = !1, yield {
          type: "SingleLineComment",
          value: A[0]
        };
        continue;
      }
      P = String.fromCodePoint(_.codePointAt(R)), R += P.length, I = P, B = !1, yield {
        type: V.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
        value: P
      };
    }
  }, zs;
}
var r0 = /* @__PURE__ */ t0();
const n0 = /* @__PURE__ */ as(r0);
function o0(e, t) {
  let o = "";
  const i = [];
  for (const s of n0(e, { jsx: !1 })) {
    if (i.push(s), s.type === "SingleLineComment") {
      o += " ".repeat(s.value.length);
      continue;
    }
    if (s.type === "MultiLineComment") {
      o += s.value.replace(/[^\n]/g, " ");
      continue;
    }
    if (s.type === "StringLiteral") {
      if (!s.closed) {
        o += s.value;
        continue;
      }
      const a = s.value.slice(1, -1);
      {
        o += s.value[0] + " ".repeat(a.length) + s.value[s.value.length - 1];
        continue;
      }
    }
    if (s.type === "NoSubstitutionTemplate") {
      const a = s.value.slice(1, -1);
      {
        o += `\`${a.replace(/[^\n]/g, " ")}\``;
        continue;
      }
    }
    if (s.type === "RegularExpressionLiteral") {
      const a = s.value;
      {
        o += a.replace(/\/(.*)\/(\w?)$/g, (u, l, c) => `/${" ".repeat(l.length)}/${c}`);
        continue;
      }
    }
    if (s.type === "TemplateHead") {
      const a = s.value.slice(1, -2);
      {
        o += `\`${a.replace(/[^\n]/g, " ")}\${`;
        continue;
      }
    }
    if (s.type === "TemplateTail") {
      const a = s.value.slice(0, -2);
      {
        o += `}${a.replace(/[^\n]/g, " ")}\``;
        continue;
      }
    }
    if (s.type === "TemplateMiddle") {
      const a = s.value.slice(1, -2);
      {
        o += `}${a.replace(/[^\n]/g, " ")}\${`;
        continue;
      }
    }
    o += s.value;
  }
  return {
    result: o,
    tokens: i
  };
}
function i0(e, t) {
  return s0(e).result;
}
function s0(e, t) {
  return o0(e);
}
const a0 = /^[A-Za-z]:\//;
function l0(e = "") {
  return e && e.replace(/\\/g, "/").replace(a0, (t) => t.toUpperCase());
}
const u0 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function c0() {
  return typeof process < "u" && typeof process.cwd == "function" ? process.cwd().replace(/\\/g, "/") : "/";
}
const d0 = function(...e) {
  e = e.map((n) => l0(n));
  let t = "", r = !1;
  for (let n = e.length - 1; n >= -1 && !r; n--) {
    const o = n >= 0 ? e[n] : c0();
    !o || o.length === 0 || (t = `${o}/${t}`, r = Lp(o));
  }
  return t = f0(t, !r), r && !Lp(t) ? `/${t}` : t.length > 0 ? t : ".";
};
function f0(e, t) {
  let r = "", n = 0, o = -1, i = 0, s = null;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length)
      s = e[a];
    else {
      if (s === "/")
        break;
      s = "/";
    }
    if (s === "/") {
      if (!(o === a - 1 || i === 1)) if (i === 2) {
        if (r.length < 2 || n !== 2 || r[r.length - 1] !== "." || r[r.length - 2] !== ".") {
          if (r.length > 2) {
            const u = r.lastIndexOf("/");
            u === -1 ? (r = "", n = 0) : (r = r.slice(0, u), n = r.length - 1 - r.lastIndexOf("/")), o = a, i = 0;
            continue;
          } else if (r.length > 0) {
            r = "", n = 0, o = a, i = 0;
            continue;
          }
        }
        t && (r += r.length > 0 ? "/.." : "..", n = 2);
      } else
        r.length > 0 ? r += `/${e.slice(o + 1, a)}` : r = e.slice(o + 1, a), n = a - o - 1;
      o = a, i = 0;
    } else s === "." && i !== -1 ? ++i : i = -1;
  }
  return r;
}
const Lp = function(e) {
  return u0.test(e);
};
class p0 extends Error {
  constructor(r, n, o) {
    super(r);
    Y(this, "code", "VITEST_PENDING");
    Y(this, "taskId");
    this.message = r, this.note = o, this.taskId = n.id;
  }
}
const h0 = /* @__PURE__ */ new WeakMap(), cb = /* @__PURE__ */ new WeakMap(), db = /* @__PURE__ */ new WeakMap();
function m0(e, t) {
  h0.set(e, t);
}
function g0(e, t) {
  cb.set(e, t);
}
function b0(e) {
  return cb.get(e);
}
function y0(e, t) {
  db.set(e, t);
}
function v0(e) {
  return db.get(e);
}
function w0(e, t) {
  const r = t.reduce((i, s) => (i[s.prop] = s, i), {}), n = {};
  e.forEach((i) => {
    const s = r[i.prop] || { ...i };
    n[s.prop] = s;
  });
  for (const i in n) {
    var o;
    const s = n[i];
    s.deps = (o = s.deps) === null || o === void 0 ? void 0 : o.map((a) => n[a.prop]);
  }
  return Object.values(n);
}
function fb(e, t, r) {
  const n = [
    "auto",
    "injected",
    "scope"
  ], o = Object.entries(e).map(([i, s]) => {
    const a = { value: s };
    if (Array.isArray(s) && s.length >= 2 && zt(s[1]) && Object.keys(s[1]).some((l) => n.includes(l))) {
      var u;
      Object.assign(a, s[1]);
      const l = s[0];
      a.value = a.injected ? ((u = r.injectValue) === null || u === void 0 ? void 0 : u.call(r, i)) ?? l : l;
    }
    return a.scope = a.scope || "test", a.scope === "worker" && !r.getWorkerContext && (a.scope = "file"), a.prop = i, a.isFn = typeof a.value == "function", a;
  });
  return Array.isArray(t.fixtures) ? t.fixtures = t.fixtures.concat(o) : t.fixtures = o, o.forEach((i) => {
    if (i.isFn) {
      const a = hb(i.value);
      if (a.length && (i.deps = t.fixtures.filter(({ prop: u }) => u !== i.prop && a.includes(u))), i.scope !== "test") {
        var s;
        (s = i.deps) === null || s === void 0 || s.forEach((u) => {
          if (u.isFn && !(i.scope === "worker" && u.scope === "worker") && !(i.scope === "file" && u.scope !== "test"))
            throw new SyntaxError(`cannot use the ${u.scope} fixture "${u.prop}" inside the ${i.scope} fixture "${i.prop}"`);
        });
      }
    }
  }), t;
}
const Ws = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map();
function R0(e, t, r) {
  return (n) => {
    const o = n || r;
    if (!o)
      return t({});
    const i = b0(o);
    if (!(i != null && i.length))
      return t(o);
    const s = hb(t), a = i.some(({ auto: p }) => p);
    if (!s.length && !a)
      return t(o);
    Ws.get(o) || Ws.set(o, /* @__PURE__ */ new Map());
    const u = Ws.get(o);
    Jt.has(o) || Jt.set(o, []);
    const l = Jt.get(o), c = i.filter(({ prop: p, auto: g }) => g || s.includes(p)), d = pb(c);
    if (!d.length)
      return t(o);
    async function f() {
      for (const p of d) {
        if (u.has(p))
          continue;
        const g = await C0(e, p, o, l);
        o[p.prop] = g, u.set(p, g), p.scope === "test" && l.unshift(() => {
          u.delete(p);
        });
      }
    }
    return f().then(() => t(o));
  };
}
const Mi = /* @__PURE__ */ new WeakMap();
function C0(e, t, r, n) {
  var o;
  const i = H0(r.task.file), s = (o = e.getWorkerContext) === null || o === void 0 ? void 0 : o.call(e);
  if (!t.isFn) {
    var a;
    if (i[a = t.prop] ?? (i[a] = t.value), s) {
      var u;
      s[u = t.prop] ?? (s[u] = t.value);
    }
    return t.value;
  }
  if (t.scope === "test")
    return Bp(t.value, r, n);
  if (Mi.has(t))
    return Mi.get(t);
  let l;
  if (t.scope === "worker") {
    if (!s)
      throw new TypeError("[@vitest/runner] The worker context is not available in the current test runner. Please, provide the `getWorkerContext` method when initiating the runner.");
    l = s;
  } else
    l = i;
  if (t.prop in l)
    return l[t.prop];
  Jt.has(l) || Jt.set(l, []);
  const c = Jt.get(l), d = Bp(t.value, l, c).then((f) => (l[t.prop] = f, Mi.delete(t), f));
  return Mi.set(t, d), d;
}
async function Bp(e, t, r) {
  const n = zf();
  let o = !1;
  const i = e(t, async (s) => {
    o = !0, n.resolve(s);
    const a = zf();
    r.push(async () => {
      a.resolve(), await i;
    }), await a;
  }).catch((s) => {
    if (!o) {
      n.reject(s);
      return;
    }
    throw s;
  });
  return n;
}
function pb(e, t = /* @__PURE__ */ new Set(), r = []) {
  return e.forEach((n) => {
    if (!r.includes(n)) {
      if (!n.isFn || !n.deps) {
        r.push(n);
        return;
      }
      if (t.has(n))
        throw new Error(`Circular fixture dependency detected: ${n.prop} <- ${[...t].reverse().map((o) => o.prop).join(" <- ")}`);
      t.add(n), pb(n.deps, t, r), r.push(n), t.clear();
    }
  }), r;
}
function hb(e) {
  let t = i0(e.toString());
  /__async\((?:this|null), (?:null|arguments|\[[_0-9, ]*\]), function\*/.test(t) && (t = t.split(/__async\((?:this|null),/)[1]);
  const r = t.match(/[^(]*\(([^)]*)/);
  if (!r)
    return [];
  const n = Hp(r[1]);
  if (!n.length)
    return [];
  let o = n[0];
  if ("__VITEST_FIXTURE_INDEX__" in e && (o = n[e.__VITEST_FIXTURE_INDEX__], !o))
    return [];
  if (!(o.startsWith("{") && o.endsWith("}")))
    throw new Error(`The first argument inside a fixture must use object destructuring pattern, e.g. ({ test } => {}). Instead, received "${o}".`);
  const i = o.slice(1, -1).replace(/\s/g, ""), s = Hp(i).map((u) => u.replace(/:.*|=.*/g, "")), a = s.at(-1);
  if (a && a.startsWith("..."))
    throw new Error(`Rest parameters are not supported in fixtures, received "${a}".`);
  return s;
}
function Hp(e) {
  const t = [], r = [];
  let n = 0;
  for (let i = 0; i < e.length; i++)
    if (e[i] === "{" || e[i] === "[")
      r.push(e[i] === "{" ? "}" : "]");
    else if (e[i] === r[r.length - 1])
      r.pop();
    else if (!r.length && e[i] === ",") {
      const s = e.substring(n, i).trim();
      s && t.push(s), n = i + 1;
    }
  const o = e.substring(n).trim();
  return o && t.push(o), t;
}
function mb(e, t) {
  function r(o) {
    const i = function(...s) {
      return t.apply(o, s);
    };
    Object.assign(i, t), i.withContext = () => i.bind(o), i.setContext = (s, a) => {
      o[s] = a;
    }, i.mergeContext = (s) => {
      Object.assign(o, s);
    };
    for (const s of e)
      Object.defineProperty(i, s, { get() {
        return r({
          ...o,
          [s]: !0
        });
      } });
    return i;
  }
  const n = r({});
  return n.fn = t, n;
}
const Go = q0();
ru(function(e, t, r) {
  Ja().test.fn.call(this, Et(e), t, r);
});
let ct, gb, x0;
function bb(e, t) {
  if (!e)
    throw new Error(`Vitest failed to find ${t}. This is a bug in Vitest. Please, open an issue with reproduction.`);
}
function E0() {
  return x0;
}
function S0() {
  return bb(ct, "the runner"), ct;
}
function Ja() {
  const e = St.currentSuite || gb;
  return bb(e, "the current suite"), e;
}
function P0() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function It(e, t) {
  let r = {}, n = () => {
  };
  if (typeof t == "object") {
    if (typeof e == "object")
      throw new TypeError("Cannot use two objects as arguments. Please provide options and a function callback in that order.");
    console.warn("Using an object as a third argument is deprecated. Vitest 4 will throw an error if the third argument is not a timeout number. Please use the second argument for options. See more at https://vitest.dev/guide/migration"), r = t;
  } else typeof t == "number" ? r = { timeout: t } : typeof e == "object" && (r = e);
  if (typeof e == "function") {
    if (typeof t == "function")
      throw new TypeError("Cannot use two functions as arguments. Please use the second argument for options.");
    n = e;
  } else typeof t == "function" && (n = t);
  return {
    options: r,
    handler: n
  };
}
function T0(e, t = () => {
}, r, n, o, i) {
  const s = [];
  let a;
  p();
  const u = function(b = "", m = {}) {
    var E;
    const $ = (m == null ? void 0 : m.timeout) ?? ct.config.testTimeout, _ = {
      id: "",
      name: b,
      suite: (E = St.currentSuite) === null || E === void 0 ? void 0 : E.suite,
      each: m.each,
      fails: m.fails,
      context: void 0,
      type: "test",
      file: void 0,
      timeout: $,
      retry: m.retry ?? ct.config.retry,
      repeats: m.repeats,
      mode: m.only ? "only" : m.skip ? "skip" : m.todo ? "todo" : "run",
      meta: m.meta ?? /* @__PURE__ */ Object.create(null),
      annotations: []
    }, C = m.handler;
    (m.concurrent || !m.sequential && ct.config.sequence.concurrent) && (_.concurrent = !0), _.shuffle = o == null ? void 0 : o.shuffle;
    const T = F0(_, ct);
    Object.defineProperty(_, "context", {
      value: T,
      enumerable: !1
    }), g0(T, m.fixtures);
    const P = Error.stackTraceLimit;
    Error.stackTraceLimit = 15;
    const v = new Error("STACK_TRACE_ERROR");
    if (Error.stackTraceLimit = P, C && m0(_, Xa(_0(R0(ct, C, T), _), $, !1, v, (R, I) => j0([T], I))), ct.config.includeTaskLocation) {
      const R = v.stack, I = O0(R);
      I && (_.location = I);
    }
    return s.push(_), _;
  }, l = ru(function(b, m, E) {
    let { options: $, handler: _ } = It(m, E);
    typeof o == "object" && ($ = Object.assign({}, o, $)), $.concurrent = this.concurrent || !this.sequential && ($ == null ? void 0 : $.concurrent), $.sequential = this.sequential || !this.concurrent && ($ == null ? void 0 : $.sequential);
    const C = u(Et(b), {
      ...this,
      ...$,
      handler: _
    });
    C.type = "test";
  });
  let c = i;
  const d = {
    type: "collector",
    name: e,
    mode: r,
    suite: a,
    options: o,
    test: l,
    tasks: s,
    collect: h,
    task: u,
    clear: g,
    on: f,
    fixtures() {
      return c;
    },
    scoped(b) {
      const m = fb(b, { fixtures: c }, ct);
      m.fixtures && (c = m.fixtures);
    }
  };
  function f(b, ...m) {
    v0(a)[b].push(...m);
  }
  function p(b) {
    var m;
    typeof o == "number" && (o = { timeout: o }), a = {
      id: "",
      type: "suite",
      name: e,
      suite: (m = St.currentSuite) === null || m === void 0 ? void 0 : m.suite,
      mode: r,
      each: n,
      file: void 0,
      shuffle: o == null ? void 0 : o.shuffle,
      tasks: [],
      meta: /* @__PURE__ */ Object.create(null),
      concurrent: o == null ? void 0 : o.concurrent
    }, y0(a, P0());
  }
  function g() {
    s.length = 0, p();
  }
  async function h(b) {
    if (!b)
      throw new TypeError("File is required to collect tasks.");
    t && await k0(d, () => t(l));
    const m = [];
    for (const E of s)
      m.push(E.type === "collector" ? await E.collect(b) : E);
    return a.file = b, a.tasks = m, m.forEach((E) => {
      E.file = b;
    }), a;
  }
  return N0(d), d;
}
function _0(e, t) {
  return async (...r) => {
    const n = await e(...r);
    if (t.promises) {
      const i = (await Promise.allSettled(t.promises)).map((s) => s.status === "rejected" ? s.reason : void 0).filter(Boolean);
      if (i.length)
        throw i;
    }
    return n;
  };
}
function q0() {
  function e(t, r, n) {
    var o;
    const i = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run", s = St.currentSuite || gb;
    let { options: a, handler: u } = It(r, n);
    const l = a.concurrent || this.concurrent || a.sequential === !1, c = a.sequential || this.sequential || a.concurrent === !1;
    a = {
      ...s == null ? void 0 : s.options,
      ...a,
      shuffle: this.shuffle ?? a.shuffle ?? (s == null || (o = s.options) === null || o === void 0 ? void 0 : o.shuffle) ?? void 0
    };
    const d = l || a.concurrent && !c, f = c || a.sequential && !l;
    return a.concurrent = d && !f, a.sequential = f && !d, T0(Et(t), u, i, this.each, a, s == null ? void 0 : s.fixtures());
  }
  return e.each = function(t, ...r) {
    const n = this.withContext();
    return this.setContext("each", !0), Array.isArray(t) && r.length && (t = ns(t, r)), (o, i, s) => {
      const a = Et(o), u = t.every(Array.isArray), { options: l, handler: c } = It(i, s), d = typeof i == "function" && typeof s == "object";
      t.forEach((f, p) => {
        const g = Array.isArray(f) ? f : [f];
        d ? u ? n(dt(a, g, p), () => c(...g), l) : n(dt(a, g, p), () => c(f), l) : u ? n(dt(a, g, p), l, () => c(...g)) : n(dt(a, g, p), l, () => c(f));
      }), this.setContext("each", void 0);
    };
  }, e.for = function(t, ...r) {
    return Array.isArray(t) && r.length && (t = ns(t, r)), (n, o, i) => {
      const s = Et(n), { options: a, handler: u } = It(o, i);
      t.forEach((l, c) => {
        Go(dt(s, Um(l), c), a, () => u(l));
      });
    };
  }, e.skipIf = (t) => t ? Go.skip : Go, e.runIf = (t) => t ? Go : Go.skip, mb([
    "concurrent",
    "sequential",
    "shuffle",
    "skip",
    "only",
    "todo"
  ], e);
}
function $0(e, t) {
  const r = e;
  r.each = function(o, ...i) {
    const s = this.withContext();
    return this.setContext("each", !0), Array.isArray(o) && i.length && (o = ns(o, i)), (a, u, l) => {
      const c = Et(a), d = o.every(Array.isArray), { options: f, handler: p } = It(u, l), g = typeof u == "function" && typeof l == "object";
      o.forEach((h, b) => {
        const m = Array.isArray(h) ? h : [h];
        g ? d ? s(dt(c, m, b), () => p(...m), f) : s(dt(c, m, b), () => p(h), f) : d ? s(dt(c, m, b), f, () => p(...m)) : s(dt(c, m, b), f, () => p(h));
      }), this.setContext("each", void 0);
    };
  }, r.for = function(o, ...i) {
    const s = this.withContext();
    return Array.isArray(o) && i.length && (o = ns(o, i)), (a, u, l) => {
      const c = Et(a), { options: d, handler: f } = It(u, l);
      o.forEach((p, g) => {
        const h = (b) => f(p, b);
        h.__VITEST_FIXTURE_INDEX__ = 1, h.toString = () => f.toString(), s(dt(c, Um(p), g), d, h);
      });
    };
  }, r.skipIf = function(o) {
    return o ? this.skip : this;
  }, r.runIf = function(o) {
    return o ? this : this.skip;
  }, r.scoped = function(o) {
    Ja().scoped(o);
  }, r.extend = function(o) {
    const i = fb(o, t || {}, ct), s = e;
    return ru(function(a, u, l) {
      const d = Ja().fixtures(), f = { ...this };
      d && (f.fixtures = w0(f.fixtures || [], d));
      const { handler: p, options: g } = It(u, l), h = g.timeout ?? void 0;
      s.call(f, Et(a), p, h);
    }, i);
  };
  const n = mb([
    "concurrent",
    "sequential",
    "skip",
    "only",
    "todo",
    "fails"
  ], r);
  return t && n.mergeContext(t), n;
}
function ru(e, t) {
  return $0(e, t);
}
function Et(e) {
  return typeof e == "string" ? e : typeof e == "function" ? e.name || "<anonymous>" : String(e);
}
function dt(e, t, r) {
  (e.includes("%#") || e.includes("%$")) && (e = e.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${r}`).replace(/%\$/g, `${r + 1}`).replace(/__vitest_escaped_%__/g, "%%"));
  const n = e.split("%").length - 1;
  e.includes("%f") && (e.match(/%f/g) || []).forEach((a, u) => {
    if (kE(t[u]) || Object.is(t[u], -0)) {
      let l = 0;
      e = e.replace(/%f/g, (c) => (l++, l === u + 1 ? "-%f" : c));
    }
  });
  let o = Vm(e, ...t.slice(0, n));
  const i = zt(t[0]);
  return o = o.replace(/\$([$\w.]+)/g, (s, a) => {
    const u = /^\d+$/.test(a);
    if (!i && !u)
      return `$${a}`;
    const l = u ? Uf(t, a) : void 0, c = i ? Uf(t[0], a, l) : l;
    return $E(c, { truncate: void 0 });
  }), o;
}
function ns(e, t) {
  const r = e.join("").trim().replace(/ /g, "").split(`
`).map((o) => o.split("|"))[0], n = [];
  for (let o = 0; o < Math.floor(t.length / r.length); o++) {
    const i = {};
    for (let s = 0; s < r.length; s++)
      i[r[s]] = t[o * r.length + s];
    n.push(i);
  }
  return n;
}
function O0(e) {
  const t = E0(), r = e.split(`
`).slice(1);
  for (const n of r) {
    const o = tu(n);
    if (o && o.file === t)
      return {
        line: o.line,
        column: o.column
      };
  }
}
globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
function M0(e) {
  const t = [e.name];
  let r = e;
  for (; r != null && r.suite; )
    r = r.suite, r != null && r.name && t.unshift(r.name);
  return r !== e.file && t.unshift(e.file.name), t;
}
globalThis.performance ? globalThis.performance.now.bind(globalThis.performance) : Date.now;
Zt();
const Js = /* @__PURE__ */ new Map(), Vp = [], Hi = [];
function A0(e) {
  if (Js.size) {
    var t;
    const r = Array.from(Js).map(([o, i]) => [
      o,
      i[0],
      i[1]
    ]), n = (t = e.onTaskUpdate) === null || t === void 0 ? void 0 : t.call(e, r, Vp);
    n && (Hi.push(n), n.then(() => Hi.splice(Hi.indexOf(n), 1), () => {
    })), Vp.length = 0, Js.clear();
  }
}
async function I0(e) {
  A0(e), await Promise.all(Hi);
}
const Up = Date.now, St = {
  currentSuite: null
};
function N0(e) {
  var t;
  (t = St.currentSuite) === null || t === void 0 || t.tasks.push(e);
}
async function k0(e, t) {
  const r = St.currentSuite;
  St.currentSuite = e, await t(), St.currentSuite = r;
}
function Xa(e, t, r = !1, n, o) {
  if (t <= 0 || t === Number.POSITIVE_INFINITY)
    return e;
  const { setTimeout: i, clearTimeout: s } = Zt();
  return function(...u) {
    const l = Up(), c = S0();
    return c._currentTaskStartTime = l, c._currentTaskTimeout = t, new Promise((d, f) => {
      var p;
      const g = i(() => {
        s(g), h();
      }, t);
      (p = g.unref) === null || p === void 0 || p.call(g);
      function h() {
        const E = L0(r, t, n);
        o == null || o(u, E), f(E);
      }
      function b(E) {
        if (c._currentTaskStartTime = void 0, c._currentTaskTimeout = void 0, s(g), Up() - l >= t) {
          h();
          return;
        }
        d(E);
      }
      function m(E) {
        c._currentTaskStartTime = void 0, c._currentTaskTimeout = void 0, s(g), f(E);
      }
      try {
        const E = e(...u);
        typeof E == "object" && E != null && typeof E.then == "function" ? E.then(b, m) : b(E);
      } catch (E) {
        m(E);
      }
    });
  };
}
const Ga = /* @__PURE__ */ new WeakMap();
function j0([e], t) {
  e && D0(e, t);
}
function D0(e, t) {
  const r = Ga.get(e);
  r == null || r.abort(t);
}
function F0(e, t) {
  var r;
  const n = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  let o = Ga.get(n);
  o || (o = new AbortController(), Ga.set(n, o)), n.signal = o.signal, n.task = e, n.skip = (s, a) => {
    if (s !== !1)
      throw e.result ?? (e.result = { state: "skip" }), e.result.pending = !0, new p0("test is skipped; abort execution", e, typeof s == "string" ? s : a);
  };
  async function i(s, a, u, l) {
    const c = {
      message: s,
      type: u || "notice"
    };
    if (l) {
      if (!l.body && !l.path)
        throw new TypeError("Test attachment requires body or path to be set. Both are missing.");
      if (l.body && l.path)
        throw new TypeError('Test attachment requires only one of "body" or "path" to be set. Both are specified.');
      c.attachment = l, l.body instanceof Uint8Array && (l.body = V0(l.body));
    }
    if (a && (c.location = a), !t.onTestAnnotate)
      throw new Error("Test runner doesn't support test annotations.");
    await I0(t);
    const d = await t.onTestAnnotate(e, c);
    return e.annotations.push(d), d;
  }
  return n.annotate = (s, a, u) => {
    if (e.result && e.result.state !== "run")
      throw new Error(`Cannot annotate tests outside of the test run. The test "${e.name}" finished running with the "${e.result.state}" state already.`);
    let l;
    const c = new Error("STACK_TRACE").stack, d = c.includes("STACK_TRACE") ? 2 : 1, f = c.split(`
`)[d], p = tu(f);
    return p && (l = {
      file: p.file,
      line: p.line,
      column: p.column
    }), typeof a == "object" ? zp(e, i(s, l, void 0, a)) : zp(e, i(s, l, a, u));
  }, n.onTestFailed = (s, a) => {
    e.onFailed || (e.onFailed = []), e.onFailed.push(Xa(s, a ?? t.config.hookTimeout, !0, new Error("STACK_TRACE_ERROR"), (u, l) => o.abort(l)));
  }, n.onTestFinished = (s, a) => {
    e.onFinished || (e.onFinished = []), e.onFinished.push(Xa(s, a ?? t.config.hookTimeout, !0, new Error("STACK_TRACE_ERROR"), (u, l) => o.abort(l)));
  }, ((r = t.extendTaskContext) === null || r === void 0 ? void 0 : r.call(t, n)) || n;
}
function L0(e, t, r) {
  const n = `${e ? "Hook" : "Test"} timed out in ${t}ms.
If this is a long-running ${e ? "hook" : "test"}, pass a timeout value as the last argument or configure it globally with "${e ? "hookTimeout" : "testTimeout"}".`, o = new Error(n);
  return r != null && r.stack && (o.stack = r.stack.replace(o.message, r.message)), o;
}
const B0 = /* @__PURE__ */ new WeakMap();
function H0(e) {
  const t = B0.get(e);
  if (!t)
    throw new Error(`Cannot find file context for ${e.name}`);
  return t;
}
const Ke = [];
for (let e = 65; e < 91; e++)
  Ke.push(String.fromCharCode(e));
for (let e = 97; e < 123; e++)
  Ke.push(String.fromCharCode(e));
for (let e = 0; e < 10; e++)
  Ke.push(e.toString(10));
function V0(e) {
  let t = "";
  const r = e.byteLength;
  for (let n = 0; n < r; n += 3)
    if (r === n + 1) {
      const o = (e[n] & 252) >> 2, i = (e[n] & 3) << 4;
      t += Ke[o], t += Ke[i], t += "==";
    } else if (r === n + 2) {
      const o = (e[n] & 252) >> 2, i = (e[n] & 3) << 4 | (e[n + 1] & 240) >> 4, s = (e[n + 1] & 15) << 2;
      t += Ke[o], t += Ke[i], t += Ke[s], t += "=";
    } else {
      const o = (e[n] & 252) >> 2, i = (e[n] & 3) << 4 | (e[n + 1] & 240) >> 4, s = (e[n + 1] & 15) << 2 | (e[n + 2] & 192) >> 6, a = e[n + 2] & 63;
      t += Ke[o], t += Ke[i], t += Ke[s], t += Ke[a];
    }
  return t;
}
function zp(e, t) {
  return t = t.finally(() => {
    if (!e.promises)
      return;
    const r = e.promises.indexOf(t);
    r !== -1 && e.promises.splice(r, 1);
  }), e.promises || (e.promises = []), e.promises.push(t), t;
}
const U0 = "__vitest_worker__";
function wi() {
  const e = globalThis[U0];
  if (!e) {
    const t = `Vitest failed to access its internal state.

One of the following is possible:
- "vitest" is imported directly without running "vitest" command
- "vitest" is imported inside "globalSetup" (to fix this, use "setupFiles" instead, because "globalSetup" runs in a different context)
- "vitest" is imported inside Vite / Vitest config file
- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues
`;
    throw new Error(t);
  }
  return e;
}
function z0() {
  const e = wi();
  return e == null ? void 0 : e.environment.name;
}
function yb() {
  return typeof process < "u" && !!process.send;
}
function W0(e, t = !1) {
  const r = [
    /\/vitest\/dist\//,
    /\/vite-node\/dist\//,
    /vitest-virtual-\w+\/dist/,
    /@vitest\/dist/,
    ...t ? [] : [/^mock:/]
  ];
  e.forEach((n, o) => {
    r.some((i) => i.test(o)) || e.invalidateModule(n);
  });
}
function J0() {
  const { setTimeout: e } = Zt();
  return new Promise((t) => e(t, 0));
}
async function vb() {
  await J0();
  const e = wi(), t = [];
  let r = 0;
  for (const n of e.moduleCache.values())
    n.promise && !n.evaluated && t.push(n.promise), n.resolving && r++;
  !t.length && !r || (await Promise.allSettled(t), await vb());
}
var Ka = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function X0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
const G0 = 44, Wp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", K0 = new Uint8Array(64), wb = new Uint8Array(128);
for (let e = 0; e < Wp.length; e++) {
  const t = Wp.charCodeAt(e);
  K0[e] = t, wb[t] = e;
}
function Ko(e, t) {
  let r = 0, n = 0, o = 0;
  do {
    const s = e.next();
    o = wb[s], r |= (o & 31) << n, n += 5;
  } while (o & 32);
  const i = r & 1;
  return r >>>= 1, i && (r = -2147483648 | -r), t + r;
}
function Jp(e, t) {
  return e.pos >= t ? !1 : e.peek() !== G0;
}
class Y0 {
  constructor(t) {
    this.pos = 0, this.buffer = t;
  }
  next() {
    return this.buffer.charCodeAt(this.pos++);
  }
  peek() {
    return this.buffer.charCodeAt(this.pos);
  }
  indexOf(t) {
    const { buffer: r, pos: n } = this, o = r.indexOf(t, n);
    return o === -1 ? r.length : o;
  }
}
function Z0(e) {
  const { length: t } = e, r = new Y0(e), n = [];
  let o = 0, i = 0, s = 0, a = 0, u = 0;
  do {
    const l = r.indexOf(";"), c = [];
    let d = !0, f = 0;
    for (o = 0; r.pos < l; ) {
      let p;
      o = Ko(r, o), o < f && (d = !1), f = o, Jp(r, l) ? (i = Ko(r, i), s = Ko(r, s), a = Ko(r, a), Jp(r, l) ? (u = Ko(r, u), p = [o, i, s, a, u]) : p = [o, i, s, a]) : p = [o], c.push(p), r.pos++;
    }
    d || Q0(c), n.push(c), r.pos = l + 1;
  } while (r.pos <= t);
  return n;
}
function Q0(e) {
  e.sort(eT);
}
function eT(e, t) {
  return e[0] - t[0];
}
const tT = /^[\w+.-]+:\/\//, rT = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, nT = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var Re;
(function(e) {
  e[e.Empty = 1] = "Empty", e[e.Hash = 2] = "Hash", e[e.Query = 3] = "Query", e[e.RelativePath = 4] = "RelativePath", e[e.AbsolutePath = 5] = "AbsolutePath", e[e.SchemeRelative = 6] = "SchemeRelative", e[e.Absolute = 7] = "Absolute";
})(Re || (Re = {}));
function oT(e) {
  return tT.test(e);
}
function iT(e) {
  return e.startsWith("//");
}
function Rb(e) {
  return e.startsWith("/");
}
function sT(e) {
  return e.startsWith("file:");
}
function Xp(e) {
  return /^[.?#]/.test(e);
}
function Ai(e) {
  const t = rT.exec(e);
  return Cb(t[1], t[2] || "", t[3], t[4] || "", t[5] || "/", t[6] || "", t[7] || "");
}
function aT(e) {
  const t = nT.exec(e), r = t[2];
  return Cb("file:", "", t[1] || "", "", Rb(r) ? r : "/" + r, t[3] || "", t[4] || "");
}
function Cb(e, t, r, n, o, i, s) {
  return {
    scheme: e,
    user: t,
    host: r,
    port: n,
    path: o,
    query: i,
    hash: s,
    type: Re.Absolute
  };
}
function Gp(e) {
  if (iT(e)) {
    const r = Ai("http:" + e);
    return r.scheme = "", r.type = Re.SchemeRelative, r;
  }
  if (Rb(e)) {
    const r = Ai("http://foo.com" + e);
    return r.scheme = "", r.host = "", r.type = Re.AbsolutePath, r;
  }
  if (sT(e))
    return aT(e);
  if (oT(e))
    return Ai(e);
  const t = Ai("http://foo.com/" + e);
  return t.scheme = "", t.host = "", t.type = e ? e.startsWith("?") ? Re.Query : e.startsWith("#") ? Re.Hash : Re.RelativePath : Re.Empty, t;
}
function lT(e) {
  if (e.endsWith("/.."))
    return e;
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
function uT(e, t) {
  xb(t, t.type), e.path === "/" ? e.path = t.path : e.path = lT(t.path) + e.path;
}
function xb(e, t) {
  const r = t <= Re.RelativePath, n = e.path.split("/");
  let o = 1, i = 0, s = !1;
  for (let u = 1; u < n.length; u++) {
    const l = n[u];
    if (!l) {
      s = !0;
      continue;
    }
    if (s = !1, l !== ".") {
      if (l === "..") {
        i ? (s = !0, i--, o--) : r && (n[o++] = l);
        continue;
      }
      n[o++] = l, i++;
    }
  }
  let a = "";
  for (let u = 1; u < o; u++)
    a += "/" + n[u];
  (!a || s && !a.endsWith("/..")) && (a += "/"), e.path = a;
}
function cT(e, t) {
  if (!e && !t)
    return "";
  const r = Gp(e);
  let n = r.type;
  if (t && n !== Re.Absolute) {
    const i = Gp(t), s = i.type;
    switch (n) {
      case Re.Empty:
        r.hash = i.hash;
      // fall through
      case Re.Hash:
        r.query = i.query;
      // fall through
      case Re.Query:
      case Re.RelativePath:
        uT(r, i);
      // fall through
      case Re.AbsolutePath:
        r.user = i.user, r.host = i.host, r.port = i.port;
      // fall through
      case Re.SchemeRelative:
        r.scheme = i.scheme;
    }
    s > n && (n = s);
  }
  xb(r, n);
  const o = r.query + r.hash;
  switch (n) {
    // This is impossible, because of the empty checks at the start of the function.
    // case UrlType.Empty:
    case Re.Hash:
    case Re.Query:
      return o;
    case Re.RelativePath: {
      const i = r.path.slice(1);
      return i ? Xp(t || e) && !Xp(i) ? "./" + i + o : i + o : o || ".";
    }
    case Re.AbsolutePath:
      return r.path + o;
    default:
      return r.scheme + "//" + r.user + r.host + r.port + r.path + o;
  }
}
function Kp(e, t) {
  return t && !t.endsWith("/") && (t += "/"), cT(e, t);
}
function dT(e) {
  if (!e)
    return "";
  const t = e.lastIndexOf("/");
  return e.slice(0, t + 1);
}
const Pt = 0, fT = 1, pT = 2, hT = 3, mT = 4;
function gT(e, t) {
  const r = Yp(e, 0);
  if (r === e.length)
    return e;
  t || (e = e.slice());
  for (let n = r; n < e.length; n = Yp(e, n + 1))
    e[n] = yT(e[n], t);
  return e;
}
function Yp(e, t) {
  for (let r = t; r < e.length; r++)
    if (!bT(e[r]))
      return r;
  return e.length;
}
function bT(e) {
  for (let t = 1; t < e.length; t++)
    if (e[t][Pt] < e[t - 1][Pt])
      return !1;
  return !0;
}
function yT(e, t) {
  return t || (e = e.slice()), e.sort(vT);
}
function vT(e, t) {
  return e[Pt] - t[Pt];
}
let os = !1;
function wT(e, t, r, n) {
  for (; r <= n; ) {
    const o = r + (n - r >> 1), i = e[o][Pt] - t;
    if (i === 0)
      return os = !0, o;
    i < 0 ? r = o + 1 : n = o - 1;
  }
  return os = !1, r - 1;
}
function RT(e, t, r) {
  for (let n = r + 1; n < e.length && e[n][Pt] === t; r = n++)
    ;
  return r;
}
function CT(e, t, r) {
  for (let n = r - 1; n >= 0 && e[n][Pt] === t; r = n--)
    ;
  return r;
}
function xT() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function ET(e, t, r, n) {
  const { lastKey: o, lastNeedle: i, lastIndex: s } = r;
  let a = 0, u = e.length - 1;
  if (n === o) {
    if (t === i)
      return os = s !== -1 && e[s][Pt] === t, s;
    t >= i ? a = s === -1 ? 0 : s : u = s;
  }
  return r.lastKey = n, r.lastNeedle = t, r.lastIndex = wT(e, t, a, u);
}
const ST = "`line` must be greater than 0 (lines start at line 1)", PT = "`column` must be greater than or equal to 0 (columns start at column 0)", Zp = -1, TT = 1;
class _T {
  constructor(t, r) {
    const n = typeof t == "string";
    if (!n && t._decodedMemo)
      return t;
    const o = n ? JSON.parse(t) : t, { version: i, file: s, names: a, sourceRoot: u, sources: l, sourcesContent: c } = o;
    this.version = i, this.file = s, this.names = a || [], this.sourceRoot = u, this.sources = l, this.sourcesContent = c, this.ignoreList = o.ignoreList || o.x_google_ignoreList || void 0;
    const d = Kp(u || "", dT(r));
    this.resolvedSources = l.map((p) => Kp(p || "", d));
    const { mappings: f } = o;
    typeof f == "string" ? (this._encoded = f, this._decoded = void 0) : (this._encoded = void 0, this._decoded = gT(f, n)), this._decodedMemo = xT(), this._bySources = void 0, this._bySourceMemos = void 0;
  }
}
function qT(e) {
  var t;
  return (t = e)._decoded || (t._decoded = Z0(e._encoded));
}
function $T(e, t) {
  let { line: r, column: n, bias: o } = t;
  if (r--, r < 0)
    throw new Error(ST);
  if (n < 0)
    throw new Error(PT);
  const i = qT(e);
  if (r >= i.length)
    return Ii(null, null, null, null);
  const s = i[r], a = OT(s, e._decodedMemo, r, n, o || TT);
  if (a === -1)
    return Ii(null, null, null, null);
  const u = s[a];
  if (u.length === 1)
    return Ii(null, null, null, null);
  const { names: l, resolvedSources: c } = e;
  return Ii(c[u[fT]], u[pT] + 1, u[hT], u.length === 5 ? l[u[mT]] : null);
}
function Ii(e, t, r, n) {
  return { source: e, line: t, column: r, name: n };
}
function OT(e, t, r, n, o) {
  let i = ET(e, n, t, r);
  return os ? i = (o === Zp ? RT : CT)(e, n, i) : o === Zp && i++, i === -1 || i === e.length ? -1 : i;
}
function Eb(e) {
  return e != null;
}
function MT(e) {
  return e === null || typeof e != "function" && typeof e != "object";
}
function Vi(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function AT(e) {
  let t = -1, r = null, n = 0, o = 0, i = null;
  for (; t <= e.length; ) {
    i = e[t], t++;
    const s = e[t];
    if ((s === '"' || s === "'" || s === "`") && i !== "\\" && (r === s ? r = null : r || (r = s)), r || (s === "(" && n++, s === ")" && o++), n && o && n === o)
      return t;
  }
  return null;
}
const Sb = /^\s*at .*(?:\S:\d+|\(native\))/m, IT = /^(?:eval@)?(?:\[native code\])?$/, NT = [
  "node:internal",
  /\/packages\/\w+\/dist\//,
  /\/@vitest\/\w+\/dist\//,
  "/vitest/dist/",
  "/vitest/src/",
  "/vite-node/dist/",
  "/vite-node/src/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/",
  "/deps/chunk-",
  "/deps/@vitest",
  "/deps/loupe",
  "/deps/chai",
  /node:\w+/,
  /__vitest_test__/,
  /__vitest_browser__/,
  /\/deps\/vitest_/
];
function Pb(e) {
  if (!e.includes(":"))
    return [e];
  const r = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/^\(|\)$/g, ""));
  if (!r)
    return [e];
  let n = r[1];
  if (n.startsWith("async ") && (n = n.slice(6)), n.startsWith("http:") || n.startsWith("https:")) {
    const o = new URL(n);
    o.searchParams.delete("import"), o.searchParams.delete("browserv"), n = o.pathname + o.hash + o.search;
  }
  if (n.startsWith("/@fs/")) {
    const o = /^\/@fs\/[a-zA-Z]:\//.test(n);
    n = n.slice(o ? 5 : 4);
  }
  return [
    n,
    r[2] || void 0,
    r[3] || void 0
  ];
}
function kT(e) {
  let t = e.trim();
  if (IT.test(t) || (t.includes(" > eval") && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), !t.includes("@") && !t.includes(":")))
    return null;
  const r = /((.*".+"[^@]*)?[^@]*)(@)/, n = t.match(r), o = n && n[1] ? n[1] : void 0, [i, s, a] = Pb(t.replace(r, ""));
  return !i || !s || !a ? null : {
    file: i,
    method: o || "",
    line: Number.parseInt(s),
    column: Number.parseInt(a)
  };
}
function jT(e) {
  let t = e.trim();
  if (!Sb.test(t))
    return null;
  t.includes("(eval ") && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
  let r = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const n = r.match(/ (\(.+\)$)/);
  r = n ? r.replace(n[0], "") : r;
  const [o, i, s] = Pb(n ? n[1] : r);
  let a = n && r || "", u = o && ["eval", "<anonymous>"].includes(o) ? void 0 : o;
  return !u || !i || !s ? null : (a.startsWith("async ") && (a = a.slice(6)), u.startsWith("file://") && (u = u.slice(7)), u = u.startsWith("node:") || u.startsWith("internal:") ? u : d0(u), a && (a = a.replace(/__vite_ssr_import_\d+__\./g, "")), {
    method: a,
    file: u,
    line: Number.parseInt(i),
    column: Number.parseInt(s)
  });
}
function Xs(e, t = {}) {
  const { ignoreStackEntries: r = NT } = t;
  return (Sb.test(e) ? FT(e) : DT(e)).map((o) => {
    var i;
    t.getUrlId && (o.file = t.getUrlId(o.file));
    const s = (i = t.getSourceMap) === null || i === void 0 ? void 0 : i.call(t, o.file);
    if (!s || typeof s != "object" || !s.version)
      return Qp(r, o.file) ? null : o;
    const a = new _T(s), { line: u, column: l, source: c, name: d } = $T(a, o);
    let f = o.file;
    if (c) {
      const p = o.file.startsWith("file://") ? o.file : `file://${o.file}`, g = s.sourceRoot ? new URL(s.sourceRoot, p) : p;
      f = new URL(c, g).pathname, f.match(/\/\w:\//) && (f = f.slice(1));
    }
    return Qp(r, f) ? null : u != null && l != null ? {
      line: u,
      column: l,
      file: f,
      method: d || o.method
    } : o;
  }).filter((o) => o != null);
}
function Qp(e, t) {
  return e.some((r) => t.match(r));
}
function DT(e) {
  return e.split(`
`).map((t) => kT(t)).filter(Eb);
}
function FT(e) {
  return e.split(`
`).map((t) => jT(t)).filter(Eb);
}
function LT(e, t = {}) {
  if (!e || MT(e))
    return [];
  if (e.stacks)
    return e.stacks;
  const r = e.stack || "";
  let n = typeof r == "string" ? Xs(r, t) : [];
  if (!n.length) {
    const o = e;
    o.fileName != null && o.lineNumber != null && o.columnNumber != null && (n = Xs(`${o.fileName}:${o.lineNumber}:${o.columnNumber}`, t)), o.sourceURL != null && o.line != null && o._column != null && (n = Xs(`${o.sourceURL}:${o.line}:${o.column}`, t));
  }
  return t.frameFilter && (n = n.filter((o) => t.frameFilter(e, o) !== !1)), e.stacks = n, n;
}
let BT = () => "Promise{…}";
try {
  const { getPromiseDetails: e, kPending: t, kRejected: r } = process.binding("util");
  Array.isArray(e(Promise.resolve())) && (BT = (n, o) => {
    const [i, s] = e(n);
    return i === t ? "Promise{<pending>}" : `Promise${i === r ? "!" : ""}{${o.inspect(s, o)}}`;
  });
} catch {
}
function HT(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gs, eh;
function VT() {
  if (eh) return Gs;
  eh = 1;
  var e, t, r, n, o, i, s, a, u, l, c, d, f, p, g, h, b, m, E;
  return f = /\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu, d = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y, e = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu, g = /(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y, c = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y, h = /[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y, E = /[\t\v\f\ufeff\p{Zs}]+/yu, a = /\r?\n|[\r\u2028\u2029]/y, u = /\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y, p = /\/\/.*/y, r = /[<>.:={}]|\/(?![\/*])/y, t = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu, n = /(['"])(?:(?!\1)[^])*(\1)?/y, o = /[^<>{}]+/y, m = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/, b = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/, i = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/, s = /^(?:return|throw|yield)$/, l = RegExp(a.source), Gs = function* ($, { jsx: _ = !1 } = {}) {
    var C, T, P, v, R, I, S, A, V, L, U, k, B, H;
    for ({ length: I } = $, v = 0, R = "", H = [
      { tag: "JS" }
    ], C = [], U = 0, k = !1; v < I; ) {
      switch (A = H[H.length - 1], A.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if ($[v] === "/" && (m.test(R) || i.test(R)) && (f.lastIndex = v, S = f.exec($))) {
            v = f.lastIndex, R = S[0], k = !0, yield {
              type: "RegularExpressionLiteral",
              value: S[0],
              closed: S[1] !== void 0 && S[1] !== "\\"
            };
            continue;
          }
          if (d.lastIndex = v, S = d.exec($)) {
            switch (B = S[0], V = d.lastIndex, L = B, B) {
              case "(":
                R === "?NonExpressionParenKeyword" && H.push({
                  tag: "JSNonExpressionParen",
                  nesting: U
                }), U++, k = !1;
                break;
              case ")":
                U--, k = !0, A.tag === "JSNonExpressionParen" && U === A.nesting && (H.pop(), L = "?NonExpressionParenEnd", k = !1);
                break;
              case "{":
                d.lastIndex = 0, P = !b.test(R) && (m.test(R) || i.test(R)), C.push(P), k = !1;
                break;
              case "}":
                switch (A.tag) {
                  case "InterpolationInTemplate":
                    if (C.length === A.nesting) {
                      h.lastIndex = v, S = h.exec($), v = h.lastIndex, R = S[0], S[1] === "${" ? (R = "?InterpolationInTemplate", k = !1, yield {
                        type: "TemplateMiddle",
                        value: S[0]
                      }) : (H.pop(), k = !0, yield {
                        type: "TemplateTail",
                        value: S[0],
                        closed: S[1] === "`"
                      });
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (C.length === A.nesting) {
                      H.pop(), v += 1, R = "}", yield {
                        type: "JSXPunctuator",
                        value: "}"
                      };
                      continue;
                    }
                }
                k = C.pop(), L = k ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                k = !0;
                break;
              case "++":
              case "--":
                L = k ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (_ && (m.test(R) || i.test(R))) {
                  H.push({ tag: "JSXTag" }), v += 1, R = "<", yield {
                    type: "JSXPunctuator",
                    value: B
                  };
                  continue;
                }
                k = !1;
                break;
              default:
                k = !1;
            }
            v = V, R = L, yield {
              type: "Punctuator",
              value: B
            };
            continue;
          }
          if (e.lastIndex = v, S = e.exec($)) {
            switch (v = e.lastIndex, L = S[0], S[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                R !== "." && R !== "?." && (L = "?NonExpressionParenKeyword");
            }
            R = L, k = !i.test(S[0]), yield {
              type: S[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
              value: S[0]
            };
            continue;
          }
          if (g.lastIndex = v, S = g.exec($)) {
            v = g.lastIndex, R = S[0], k = !0, yield {
              type: "StringLiteral",
              value: S[0],
              closed: S[2] !== void 0
            };
            continue;
          }
          if (c.lastIndex = v, S = c.exec($)) {
            v = c.lastIndex, R = S[0], k = !0, yield {
              type: "NumericLiteral",
              value: S[0]
            };
            continue;
          }
          if (h.lastIndex = v, S = h.exec($)) {
            v = h.lastIndex, R = S[0], S[1] === "${" ? (R = "?InterpolationInTemplate", H.push({
              tag: "InterpolationInTemplate",
              nesting: C.length
            }), k = !1, yield {
              type: "TemplateHead",
              value: S[0]
            }) : (k = !0, yield {
              type: "NoSubstitutionTemplate",
              value: S[0],
              closed: S[1] === "`"
            });
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          if (r.lastIndex = v, S = r.exec($)) {
            switch (v = r.lastIndex, L = S[0], S[0]) {
              case "<":
                H.push({ tag: "JSXTag" });
                break;
              case ">":
                H.pop(), R === "/" || A.tag === "JSXTagEnd" ? (L = "?JSX", k = !0) : H.push({ tag: "JSXChildren" });
                break;
              case "{":
                H.push({
                  tag: "InterpolationInJSX",
                  nesting: C.length
                }), L = "?InterpolationInJSX", k = !1;
                break;
              case "/":
                R === "<" && (H.pop(), H[H.length - 1].tag === "JSXChildren" && H.pop(), H.push({ tag: "JSXTagEnd" }));
            }
            R = L, yield {
              type: "JSXPunctuator",
              value: S[0]
            };
            continue;
          }
          if (t.lastIndex = v, S = t.exec($)) {
            v = t.lastIndex, R = S[0], yield {
              type: "JSXIdentifier",
              value: S[0]
            };
            continue;
          }
          if (n.lastIndex = v, S = n.exec($)) {
            v = n.lastIndex, R = S[0], yield {
              type: "JSXString",
              value: S[0],
              closed: S[2] !== void 0
            };
            continue;
          }
          break;
        case "JSXChildren":
          if (o.lastIndex = v, S = o.exec($)) {
            v = o.lastIndex, R = S[0], yield {
              type: "JSXText",
              value: S[0]
            };
            continue;
          }
          switch ($[v]) {
            case "<":
              H.push({ tag: "JSXTag" }), v++, R = "<", yield {
                type: "JSXPunctuator",
                value: "<"
              };
              continue;
            case "{":
              H.push({
                tag: "InterpolationInJSX",
                nesting: C.length
              }), v++, R = "?InterpolationInJSX", k = !1, yield {
                type: "JSXPunctuator",
                value: "{"
              };
              continue;
          }
      }
      if (E.lastIndex = v, S = E.exec($)) {
        v = E.lastIndex, yield {
          type: "WhiteSpace",
          value: S[0]
        };
        continue;
      }
      if (a.lastIndex = v, S = a.exec($)) {
        v = a.lastIndex, k = !1, s.test(R) && (R = "?NoLineTerminatorHere"), yield {
          type: "LineTerminatorSequence",
          value: S[0]
        };
        continue;
      }
      if (u.lastIndex = v, S = u.exec($)) {
        v = u.lastIndex, l.test(S[0]) && (k = !1, s.test(R) && (R = "?NoLineTerminatorHere")), yield {
          type: "MultiLineComment",
          value: S[0],
          closed: S[1] !== void 0
        };
        continue;
      }
      if (p.lastIndex = v, S = p.exec($)) {
        v = p.lastIndex, k = !1, yield {
          type: "SingleLineComment",
          value: S[0]
        };
        continue;
      }
      T = String.fromCodePoint($.codePointAt(v)), v += T.length, R = T, k = !1, yield {
        type: A.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
        value: T
      };
    }
  }, Gs;
}
VT();
var Tb = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(Tb.keyword);
new Set(Tb.strict);
var UT = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}, zT = Object.entries(UT);
function nu(e) {
  return String(e);
}
nu.open = "";
nu.close = "";
function WT(e = !1) {
  let t = typeof process < "u" ? process : void 0, r = (t == null ? void 0 : t.env) || {}, n = (t == null ? void 0 : t.argv) || [];
  return !("NO_COLOR" in r || n.includes("--no-color")) && ("FORCE_COLOR" in r || n.includes("--color") || (t == null ? void 0 : t.platform) === "win32" || e && r.TERM !== "dumb" || "CI" in r) || typeof window < "u" && !!window.chrome;
}
function JT(e = !1) {
  let t = WT(e), r = (s, a, u, l) => {
    let c = "", d = 0;
    do
      c += s.substring(d, l) + u, d = l + a.length, l = s.indexOf(a, d);
    while (~l);
    return c + s.substring(d);
  }, n = (s, a, u = s) => {
    let l = (c) => {
      let d = String(c), f = d.indexOf(a, s.length);
      return ~f ? s + r(d, a, u, f) + a : s + d + a;
    };
    return l.open = s, l.close = a, l;
  }, o = {
    isColorSupported: t
  }, i = (s) => `\x1B[${s}m`;
  for (let [s, a] of zT)
    o[s] = t ? n(
      i(a[0]),
      i(a[1]),
      a[2]
    ) : nu;
  return o;
}
JT();
const ou = /\r?\n/;
function XT(e, t, r) {
  const n = e.split(ou), o = /\r\n/.test(e) ? 2 : 1;
  let i = 0;
  if (t > n.length)
    return e.length;
  for (let s = 0; s < t - 1; s++)
    i += n[s].length + o;
  return i + r;
}
function GT(e, t) {
  if (t > e.length)
    throw new Error(`offset is longer than source length! offset ${t} > length ${e.length}`);
  const r = e.split(ou), n = /\r\n/.test(e) ? 2 : 1;
  let o = 0, i = 0;
  for (; i < r.length; i++) {
    const s = r[i].length + n;
    if (o + s >= t)
      break;
    o += s;
  }
  return i + 1;
}
async function KT(e, t) {
  const r = (await import("../magic-string.es-uPKorP4O.js")).default, n = new Set(t.map((o) => o.file));
  await Promise.all(Array.from(n).map(async (o) => {
    const i = t.filter((l) => l.file === o), s = await e.readSnapshotFile(o), a = new r(s);
    for (const l of i) {
      const c = XT(s, l.line, l.column);
      r1(s, a, c, l.snapshot);
    }
    const u = a.toString();
    u !== s && await e.saveSnapshotFile(o, u);
  }));
}
const YT = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*\{/;
function ZT(e, t, r, n) {
  let o = e.slice(r);
  const i = YT.exec(o);
  if (!i)
    return !1;
  o = o.slice(i.index);
  let s = AT(o);
  if (s === null)
    return !1;
  s += r + i.index;
  const a = r + i.index + i[0].length, u = QT(e, a), l = `, ${_b(n, e, r)}`;
  return u === s ? t.appendLeft(s, l) : t.overwrite(u, s, l), !0;
}
function QT(e, t) {
  let r = 1, n = 0;
  for (; r !== n && t < e.length; ) {
    const o = e[t++];
    o === "{" ? r++ : o === "}" && n++;
  }
  return t;
}
function _b(e, t, r) {
  const n = GT(t, r), i = t.split(ou)[n - 1].match(/^\s*/)[0] || "", s = i.includes("	") ? `${i}	` : `${i}  `, a = e.trim().replace(/\\/g, "\\\\").split(/\n/g), u = a.length <= 1, l = "`";
  return u ? `${l}${a.join(`
`).replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}${l}` : `${l}
${a.map((c) => c ? s + c : "").join(`
`).replace(/`/g, "\\`").replace(/\$\{/g, "\\${")}
${i}${l}`;
}
const th = "toMatchInlineSnapshot", rh = "toThrowErrorMatchingInlineSnapshot";
function e1(e, t) {
  const r = t - th.length;
  if (e.slice(r, t) === th)
    return {
      code: e.slice(r),
      index: r
    };
  const n = t - rh.length;
  return e.slice(t - n, t) === rh ? {
    code: e.slice(t - n),
    index: t - n
  } : {
    code: e.slice(t),
    index: t
  };
}
const t1 = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*(?:\/\*[\s\S]*\*\/\s*|\/\/.*(?:[\n\r\u2028\u2029]\s*|[\t\v\f \xA0\u1680\u2000-\u200A\u202F\u205F\u3000\uFEFF]))*[\w$]*(['"`)])/;
function r1(e, t, r, n) {
  const { code: o, index: i } = e1(e, r), s = t1.exec(o), a = /toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot/.exec(o);
  if (!s || s.index !== (a == null ? void 0 : a.index))
    return ZT(e, t, i, n);
  const u = s[1], l = i + s.index + s[0].length, c = _b(n, e, i);
  if (u === ")")
    return t.appendRight(l - 1, c), !0;
  const f = new RegExp(`(?:^|[^\\\\])${u}`).exec(e.slice(l));
  if (!f)
    return !1;
  const p = l + f.index + f[0].length;
  return t.overwrite(l - 1, p, c), !0;
}
const n1 = /^([^\S\n]*)\S/m;
function nh(e) {
  const t = e.match(n1);
  if (!t || !t[1])
    return e;
  const r = t[1], n = e.split(/\n/g);
  if (n.length <= 2 || n[0].trim() !== "" || n[n.length - 1].trim() !== "")
    return e;
  for (let o = 1; o < n.length - 1; o++)
    if (n[o] !== "") {
      if (n[o].indexOf(r) !== 0)
        return e;
      n[o] = n[o].substring(r.length);
    }
  return n[n.length - 1] = "", e = n.join(`
`), e;
}
async function o1(e, t) {
  await Promise.all(t.map(async (r) => {
    r.readonly || await e.saveSnapshotFile(r.file, r.snapshot);
  }));
}
var Ks = { exports: {} }, oh;
function i1() {
  if (oh) return Ks.exports;
  oh = 1;
  /*
   * @version    1.4.0
   * @date       2015-10-26
   * @stability  3 - Stable
   * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
   * @license    MIT License
   */
  var e = function(t, r) {
    var n, o, i = 1, s = 0, a = 0, u = String.alphabet;
    function l(c, d, f) {
      if (f) {
        for (n = d; f = l(c, n), f < 76 && f > 65; ) ++n;
        return +c.slice(d - 1, n);
      }
      return f = u && u.indexOf(c.charAt(d)), f > -1 ? f + 76 : (f = c.charCodeAt(d) || 0, f < 45 || f > 127 ? f : f < 46 ? 65 : f < 48 ? f - 1 : f < 58 ? f + 18 : f < 65 ? f - 11 : f < 91 ? f + 11 : f < 97 ? f - 37 : f < 123 ? f + 5 : f - 63);
    }
    if ((t += "") != (r += "")) {
      for (; i; )
        if (o = l(t, s++), i = l(r, a++), o < 76 && i < 76 && o > 66 && i > 66 && (o = l(t, s, s), i = l(r, a, s = n), a = n), o != i) return o < i ? -1 : 1;
    }
    return 0;
  };
  try {
    Ks.exports = e;
  } catch {
    String.naturalCompare = e;
  }
  return Ks.exports;
}
var s1 = i1(), a1 = /* @__PURE__ */ HT(s1);
const l1 = (e, t, r, n, o, i) => {
  const s = e.getMockName(), a = s === "vi.fn()" ? "" : ` ${s}`;
  let u = "";
  if (e.mock.calls.length !== 0) {
    const l = r + t.indent;
    u = ` {${t.spacingOuter}${l}"calls": ${i(e.mock.calls, t, l, n, o)}${t.min ? ", " : ","}${t.spacingOuter}${l}"results": ${i(e.mock.results, t, l, n, o)}${t.min ? "" : ","}${t.spacingOuter}${r}}`;
  }
  return `[MockFunction${a}]${u}`;
}, u1 = (e) => e && !!e._isMockFunction, c1 = {
  serialize: l1,
  test: u1
}, { DOMCollection: d1, DOMElement: f1, Immutable: p1, ReactElement: h1, ReactTestComponent: m1, AsymmetricMatcher: g1 } = ds;
let Ya = [
  m1,
  h1,
  f1,
  d1,
  p1,
  g1,
  c1
];
function b1(e) {
  Ya = [e].concat(Ya);
}
function y1() {
  return Ya;
}
function v1(e, t) {
  return `${e} ${t}`;
}
function w1(e) {
  if (!/ \d+$/.test(e))
    throw new Error("Snapshot keys must end with a number.");
  return e.replace(/ \d+$/, "");
}
function R1(e, t) {
  const r = t.updateSnapshot, n = /* @__PURE__ */ Object.create(null);
  let o = "", i = !1;
  if (e != null)
    try {
      o = e, new Function("exports", o)(n);
    } catch {
    }
  return (r === "all" || r === "new") && o && (i = !0), {
    data: n,
    dirty: i
  };
}
function C1(e) {
  return e.includes(`
`) ? `
${e}
` : e;
}
function ih(e) {
  return e.length > 2 && e.startsWith(`
`) && e.endsWith(`
`) ? e.slice(1, -1) : e;
}
const x1 = !0, E1 = !1;
function S1(e, t = 2, r = {}) {
  return iu(rt(e, {
    escapeRegex: x1,
    indent: t,
    plugins: y1(),
    printFunctionName: E1,
    ...r
  }));
}
function P1(e) {
  return e.replace(/`|\\|\$\{/g, "\\$&");
}
function sh(e) {
  return `\`${P1(e)}\``;
}
function iu(e) {
  return e.replace(/\r\n|\r/g, `
`);
}
async function T1(e, t, r) {
  const n = Object.keys(t).sort(a1).map((a) => `exports[${sh(a)}] = ${sh(iu(t[a]))};`), o = `${e.getHeader()}

${n.join(`

`)}
`, i = await e.readSnapshotFile(r);
  i != null && i === o || await e.saveSnapshotFile(r, o);
}
function Za(e = [], t = []) {
  const r = Array.from(e);
  return t.forEach((n, o) => {
    const i = r[o];
    Array.isArray(e[o]) ? r[o] = Za(e[o], n) : Vi(i) ? r[o] = su(e[o], n) : r[o] = n;
  }), r;
}
function su(e, t) {
  if (Vi(e) && Vi(t)) {
    const r = { ...e };
    return Object.keys(t).forEach((n) => {
      Vi(t[n]) && !t[n].$$typeof ? n in e ? r[n] = su(e[n], t[n]) : Object.assign(r, { [n]: t[n] }) : Array.isArray(t[n]) ? r[n] = Za(e[n], t[n]) : Object.assign(r, { [n]: t[n] });
    }), r;
  } else if (Array.isArray(e) && Array.isArray(t))
    return Za(e, t);
  return e;
}
class qb extends Map {
  constructor(t, r) {
    super(r), this.defaultFn = t;
  }
  get(t) {
    return this.has(t) || this.set(t, this.defaultFn(t)), super.get(t);
  }
}
class Yo extends qb {
  constructor() {
    super(() => 0);
    // compat for jest-image-snapshot https://github.com/vitest-dev/vitest/issues/7322
    // `valueOf` and `Snapshot.added` setter allows
    //   snapshotState.added = snapshotState.added + 1
    // to function as
    //   snapshotState.added.total_ = snapshotState.added.total() + 1
    Y(this, "_total");
  }
  valueOf() {
    return this._total = this.total();
  }
  increment(r) {
    typeof this._total < "u" && this._total++, this.set(r, this.get(r) + 1);
  }
  total() {
    if (typeof this._total < "u")
      return this._total;
    let r = 0;
    for (const n of this.values())
      r += n;
    return r;
  }
}
function ah(e, t) {
  return e.file === t.file && e.column === t.column && e.line === t.line;
}
class au {
  constructor(t, r, n, o) {
    Y(this, "_counters", new Yo());
    Y(this, "_dirty");
    Y(this, "_updateSnapshot");
    Y(this, "_snapshotData");
    Y(this, "_initialData");
    Y(this, "_inlineSnapshots");
    Y(this, "_inlineSnapshotStacks");
    Y(this, "_testIdToKeys", new qb(() => []));
    Y(this, "_rawSnapshots");
    Y(this, "_uncheckedKeys");
    Y(this, "_snapshotFormat");
    Y(this, "_environment");
    Y(this, "_fileExists");
    Y(this, "expand");
    // getter/setter for jest-image-snapshot compat
    // https://github.com/vitest-dev/vitest/issues/7322
    Y(this, "_added", new Yo());
    Y(this, "_matched", new Yo());
    Y(this, "_unmatched", new Yo());
    Y(this, "_updated", new Yo());
    this.testFilePath = t, this.snapshotPath = r;
    const { data: i, dirty: s } = R1(n, o);
    this._fileExists = n != null, this._initialData = { ...i }, this._snapshotData = { ...i }, this._dirty = s, this._inlineSnapshots = [], this._inlineSnapshotStacks = [], this._rawSnapshots = [], this._uncheckedKeys = new Set(Object.keys(this._snapshotData)), this.expand = o.expand || !1, this._updateSnapshot = o.updateSnapshot, this._snapshotFormat = {
      printBasicPrototype: !1,
      escapeString: !1,
      ...o.snapshotFormat
    }, this._environment = o.snapshotEnvironment;
  }
  get added() {
    return this._added;
  }
  set added(t) {
    this._added._total = t;
  }
  get matched() {
    return this._matched;
  }
  set matched(t) {
    this._matched._total = t;
  }
  get unmatched() {
    return this._unmatched;
  }
  set unmatched(t) {
    this._unmatched._total = t;
  }
  get updated() {
    return this._updated;
  }
  set updated(t) {
    this._updated._total = t;
  }
  static async create(t, r) {
    const n = await r.snapshotEnvironment.resolvePath(t), o = await r.snapshotEnvironment.readSnapshotFile(n);
    return new au(t, n, o, r);
  }
  get environment() {
    return this._environment;
  }
  markSnapshotsAsCheckedForTest(t) {
    this._uncheckedKeys.forEach((r) => {
      / \d+$| > /.test(r.slice(t.length)) && this._uncheckedKeys.delete(r);
    });
  }
  clearTest(t) {
    this._inlineSnapshots = this._inlineSnapshots.filter((r) => r.testId !== t), this._inlineSnapshotStacks = this._inlineSnapshotStacks.filter((r) => r.testId !== t);
    for (const r of this._testIdToKeys.get(t)) {
      const n = w1(r), o = this._counters.get(n);
      o > 0 && ((r in this._snapshotData || r in this._initialData) && (this._snapshotData[r] = this._initialData[r]), this._counters.set(n, o - 1));
    }
    this._testIdToKeys.delete(t), this.added.delete(t), this.updated.delete(t), this.matched.delete(t), this.unmatched.delete(t);
  }
  _inferInlineSnapshotStack(t) {
    const r = t.findIndex((o) => o.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (r !== -1)
      return t[r + 3];
    const n = t.findIndex((o) => o.method.includes("__INLINE_SNAPSHOT__"));
    return n !== -1 ? t[n + 2] : null;
  }
  _addSnapshot(t, r, n) {
    this._dirty = !0, n.stack ? this._inlineSnapshots.push({
      snapshot: r,
      testId: n.testId,
      ...n.stack
    }) : n.rawSnapshot ? this._rawSnapshots.push({
      ...n.rawSnapshot,
      snapshot: r
    }) : this._snapshotData[t] = r;
  }
  async save() {
    const t = Object.keys(this._snapshotData).length, r = this._inlineSnapshots.length, n = this._rawSnapshots.length, o = !t && !r && !n, i = {
      deleted: !1,
      saved: !1
    };
    return (this._dirty || this._uncheckedKeys.size) && !o ? (t && (await T1(this._environment, this._snapshotData, this.snapshotPath), this._fileExists = !0), r && await KT(this._environment, this._inlineSnapshots), n && await o1(this._environment, this._rawSnapshots), i.saved = !0) : !t && this._fileExists && (this._updateSnapshot === "all" && (await this._environment.removeSnapshotFile(this.snapshotPath), this._fileExists = !1), i.deleted = !0), i;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    this._updateSnapshot === "all" && this._uncheckedKeys.size && (this._dirty = !0, this._uncheckedKeys.forEach((t) => delete this._snapshotData[t]), this._uncheckedKeys.clear());
  }
  match({ testId: t, testName: r, received: n, key: o, inlineSnapshot: i, isInline: s, error: a, rawSnapshot: u }) {
    this._counters.increment(r);
    const l = this._counters.get(r);
    o || (o = v1(r, l)), this._testIdToKeys.get(t).push(o), s && this._snapshotData[o] !== void 0 || this._uncheckedKeys.delete(o);
    let c = u && typeof n == "string" ? n : S1(n, void 0, this._snapshotFormat);
    u || (c = C1(c)), u && u.content && u.content.match(/\r\n/) && !c.match(/\r\n/) && (u.content = iu(u.content));
    const d = s ? i : u ? u.content : this._snapshotData[o], f = u ? d : d == null ? void 0 : d.trim(), p = f === (u ? c : c.trim()), g = d !== void 0, h = s || this._fileExists || u && u.content != null;
    p && !s && !u && (this._snapshotData[o] = c);
    let b;
    if (s) {
      var m, E;
      const $ = LT(a || new Error("snapshot"), { ignoreStackEntries: [] }), _ = this._inferInlineSnapshotStack($);
      if (!_)
        throw new Error(`@vitest/snapshot: Couldn't infer stack frame for inline snapshot.
${JSON.stringify($)}`);
      b = ((m = (E = this.environment).processStackTrace) === null || m === void 0 ? void 0 : m.call(E, _)) || _, b.column--;
      const C = this._inlineSnapshotStacks.filter((T) => ah(T, b));
      if (C.length > 0) {
        this._inlineSnapshots = this._inlineSnapshots.filter((P) => !ah(P, b));
        const T = C.find((P) => P.snapshot !== c);
        if (T)
          throw Object.assign(new Error("toMatchInlineSnapshot with different snapshots cannot be called at the same location"), {
            actual: c,
            expected: T.snapshot
          });
      }
      this._inlineSnapshotStacks.push({
        ...b,
        testId: t,
        snapshot: c
      });
    }
    return g && this._updateSnapshot === "all" || (!g || !h) && (this._updateSnapshot === "new" || this._updateSnapshot === "all") ? (this._updateSnapshot === "all" ? p ? this.matched.increment(t) : (g ? this.updated.increment(t) : this.added.increment(t), this._addSnapshot(o, c, {
      stack: b,
      testId: t,
      rawSnapshot: u
    })) : (this._addSnapshot(o, c, {
      stack: b,
      testId: t,
      rawSnapshot: u
    }), this.added.increment(t)), {
      actual: "",
      count: l,
      expected: "",
      key: o,
      pass: !0
    }) : p ? (this.matched.increment(t), {
      actual: "",
      count: l,
      expected: "",
      key: o,
      pass: !0
    }) : (this.unmatched.increment(t), {
      actual: u ? c : ih(c),
      count: l,
      expected: f !== void 0 ? u ? f : ih(f) : void 0,
      key: o,
      pass: !1
    });
  }
  async pack() {
    const t = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: !1,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    }, r = this.getUncheckedCount(), n = this.getUncheckedKeys();
    r && this.removeUncheckedKeys();
    const o = await this.save();
    return t.fileDeleted = o.deleted, t.added = this.added.total(), t.matched = this.matched.total(), t.unmatched = this.unmatched.total(), t.updated = this.updated.total(), t.unchecked = o.deleted ? 0 : r, t.uncheckedKeys = Array.from(n), t;
  }
}
function lh(e, t, r, n) {
  const o = new Error(e);
  return Object.defineProperty(o, "actual", {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(o, "expected", {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }), Object.defineProperty(o, "diffOptions", { value: { expand: t } }), o;
}
class _1 {
  constructor(t = {}) {
    Y(this, "snapshotStateMap", /* @__PURE__ */ new Map());
    this.options = t;
  }
  async setup(t, r) {
    this.snapshotStateMap.has(t) || this.snapshotStateMap.set(t, await au.create(t, r));
  }
  async finish(t) {
    const n = await this.getSnapshotState(t).pack();
    return this.snapshotStateMap.delete(t), n;
  }
  skipTest(t, r) {
    this.getSnapshotState(t).markSnapshotsAsCheckedForTest(r);
  }
  clearTest(t, r) {
    this.getSnapshotState(t).clearTest(r);
  }
  getSnapshotState(t) {
    const r = this.snapshotStateMap.get(t);
    if (!r)
      throw new Error(`The snapshot state for '${t}' is not found. Did you call 'SnapshotClient.setup()'?`);
    return r;
  }
  assert(t) {
    const { filepath: r, name: n, testId: o = n, message: i, isInline: s = !1, properties: a, inlineSnapshot: u, error: l, errorMessage: c, rawSnapshot: d } = t;
    let { received: f } = t;
    if (!r)
      throw new Error("Snapshot cannot be used outside of test");
    const p = this.getSnapshotState(r);
    if (typeof a == "object") {
      if (typeof f != "object" || !f)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        var g, h;
        if (((g = (h = this.options).isEqual) === null || g === void 0 ? void 0 : g.call(h, f, a)) ?? !1)
          f = su(f, a);
        else
          throw lh("Snapshot properties mismatched", p.expand, f, a);
      } catch (C) {
        throw C.message = c || "Snapshot mismatched", C;
      }
    }
    const b = [n, ...i ? [i] : []].join(" > "), { actual: m, expected: E, key: $, pass: _ } = p.match({
      testId: o,
      testName: b,
      received: f,
      isInline: s,
      error: l,
      inlineSnapshot: u,
      rawSnapshot: d
    });
    if (!_)
      throw lh(`Snapshot \`${$ || "unknown"}\` mismatched`, p.expand, d ? m : m == null ? void 0 : m.trim(), d ? E : E == null ? void 0 : E.trim());
  }
  async assertRaw(t) {
    if (!t.rawSnapshot)
      throw new Error("Raw snapshot is required");
    const { filepath: r, rawSnapshot: n } = t;
    if (n.content == null) {
      if (!r)
        throw new Error("Snapshot cannot be used outside of test");
      const o = this.getSnapshotState(r);
      t.filepath || (t.filepath = r), n.file = await o.environment.resolveRawPath(r, n.file), n.content = await o.environment.readSnapshotFile(n.file) ?? void 0;
    }
    return this.assert(t);
  }
  clear() {
    this.snapshotStateMap.clear();
  }
}
const tt = Date;
let Qa = null;
class Tt extends tt {
  constructor(t, r, n, o, i, s, a) {
    super();
    let u;
    switch (arguments.length) {
      case 0:
        Qa !== null ? u = new tt(Qa.valueOf()) : u = new tt();
        break;
      case 1:
        u = new tt(t);
        break;
      default:
        n = typeof n > "u" ? 1 : n, o = o || 0, i = i || 0, s = s || 0, a = a || 0, u = new tt(t, r, n, o, i, s, a);
        break;
    }
    return Object.setPrototypeOf(u, Tt.prototype), u;
  }
}
Tt.UTC = tt.UTC;
Tt.now = function() {
  return new Tt().valueOf();
};
Tt.parse = function(e) {
  return tt.parse(e);
};
Tt.toString = function() {
  return tt.toString();
};
function q1(e) {
  const t = new tt(e.valueOf());
  if (Number.isNaN(t.getTime())) throw new TypeError(`mockdate: The time set is an invalid date: ${e}`);
  globalThis.Date = Tt, Qa = t.valueOf();
}
function $1() {
  globalThis.Date = tt;
}
const O1 = [
  "matchSnapshot",
  "toMatchSnapshot",
  "toMatchInlineSnapshot",
  "toThrowErrorMatchingSnapshot",
  "toThrowErrorMatchingInlineSnapshot",
  "throws",
  "Throw",
  "throw",
  "toThrow",
  "toThrowError"
];
function M1(e) {
  return function(r, n = {}) {
    var f;
    const i = ((f = wi().config.expect) == null ? void 0 : f.poll) ?? {}, { interval: s = i.interval ?? 50, timeout: a = i.timeout ?? 1e3, message: u } = n, l = e(null, u).withContext({ poll: !0 });
    r = r.bind(l);
    const c = $e.flag(l, "vitest-test");
    if (!c) throw new Error("expect.poll() must be called inside a test");
    const d = new Proxy(l, { get(p, g, h) {
      const b = Reflect.get(p, g, h);
      if (typeof b != "function") return b instanceof w ? d : b;
      if (g === "assert") return b;
      if (typeof g == "string" && O1.includes(g)) throw new SyntaxError(`expect.poll() is not supported in combination with .${g}(). Use vi.waitFor() if your assertion condition is unstable.`);
      return function(...m) {
        const E = new Error("STACK_TRACE_ERROR"), $ = () => new Promise((T, P) => {
          let v, R, I;
          const { setTimeout: S, clearTimeout: A } = Zt(), V = async () => {
            try {
              $e.flag(l, "_name", g);
              const L = await r();
              $e.flag(l, "object", L), T(await b.call(l, ...m)), A(v), A(R);
            } catch (L) {
              I = L, $e.flag(l, "_isLastPollAttempt") || (v = S(V, s));
            }
          };
          R = S(() => {
            A(v), $e.flag(l, "_isLastPollAttempt", !0);
            const L = (U) => {
              P(uh(new Error("Matcher did not succeed in time.", { cause: U }), E));
            };
            V().then(() => L(I)).catch((U) => L(U));
          }, a), V();
        });
        let _ = !1;
        c.onFinished ?? (c.onFinished = []), c.onFinished.push(() => {
          if (!_) {
            const T = $e.flag(l, "negate") ? "not." : "", v = `expect.${$e.flag(l, "_poll.element") ? "element(locator)" : "poll(assertion)"}.${T}${String(g)}()`, R = new Error(`${v} was not awaited. This assertion is asynchronous and must be awaited; otherwise, it is not executed to avoid unhandled rejections:

await ${v}
`);
            throw uh(R, E);
          }
        });
        let C;
        return {
          then(T, P) {
            return _ = !0, (C || (C = $())).then(T, P);
          },
          catch(T) {
            return (C || (C = $())).catch(T);
          },
          finally(T) {
            return (C || (C = $())).finally(T);
          },
          [Symbol.toStringTag]: "Promise"
        };
      };
    } });
    return d;
  };
}
function uh(e, t) {
  return t.stack !== void 0 && (e.stack = t.stack.replace(t.message, e.message)), e;
}
function A1(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ui = { exports: {} }, I1 = Ui.exports, ch;
function N1() {
  return ch || (ch = 1, (function(e, t) {
    (function() {
      (function(r) {
        return typeof A1 == "function" ? e.exports = r : chai.use(r);
      })(function(r, n) {
        var o = r.Assertion, i = o.prototype;
        o.addMethod("containSubset", function(a) {
          var u = n.flag(this, "object"), l = r.config.showDiff;
          i.assert.call(
            this,
            s(a, u),
            "expected #{act} to contain subset #{exp}",
            "expected #{act} to not contain subset #{exp}",
            a,
            u,
            l
          );
        }), r.assert.containSubset = function(a, u, l) {
          new r.Assertion(a, l).to.be.containSubset(u);
        };
        function s(a, u) {
          if (a === u)
            return !0;
          if (typeof u != typeof a)
            return !1;
          if (typeof a != "object" || a === null)
            return a === u;
          if (a && !u)
            return !1;
          if (Array.isArray(a)) {
            if (typeof u.length != "number")
              return !1;
            var l = Array.prototype.slice.call(u);
            return a.every(function(c) {
              return l.some(function(d) {
                return s(c, d);
              });
            });
          }
          return a instanceof Date ? u instanceof Date ? a.getTime() === u.getTime() : !1 : Object.keys(a).every(function(c) {
            var d = a[c], f = u[c];
            return typeof d == "object" && d !== null && f !== null ? s(d, f) : typeof d == "function" ? d(f) : f === d;
          });
        }
      });
    }).call(I1);
  })(Ui)), Ui.exports;
}
var k1 = N1(), j1 = /* @__PURE__ */ X0(k1);
function D1(e, t, r) {
  const n = e.flag(t, "negate") ? "not." : "", o = `${e.flag(t, "_name")}(expected)`, i = e.flag(t, "promise");
  return `expect(actual)${i ? `.${i}` : ""}.${n}${o}`;
}
function F1(e, t, r, n) {
  const o = e;
  if (o && t instanceof Promise) {
    t = t.finally(() => {
      if (!o.promises) return;
      const s = o.promises.indexOf(t);
      s !== -1 && o.promises.splice(s, 1);
    }), o.promises || (o.promises = []), o.promises.push(t);
    let i = !1;
    return o.onFinished ?? (o.onFinished = []), o.onFinished.push(() => {
      var s;
      if (!i) {
        const u = (((s = globalThis.__vitest_worker__) == null ? void 0 : s.onFilterStackTrace) || ((l) => l || ""))(n.stack);
        console.warn([
          `Promise returned by \`${r}\` was not awaited. `,
          "Vitest currently auto-awaits hanging assertions at the end of the test, but this will cause the test to fail in Vitest 3. ",
          `Please remember to await the assertion.
`,
          u
        ].join(""));
      }
    }), {
      then(s, a) {
        return i = !0, t.then(s, a);
      },
      catch(s) {
        return t.catch(s);
      },
      finally(s) {
        return t.finally(s);
      },
      [Symbol.toStringTag]: "Promise"
    };
  }
  return t;
}
let Ys;
function Zo() {
  return Ys || (Ys = new _1({ isEqual: (e, t) => ie(e, t, [Ue, tr]) })), Ys;
}
function dh(e, t) {
  if (typeof e != "function") {
    if (!t) throw new Error(`expected must be a function, received ${typeof e}`);
    return e;
  }
  try {
    e();
  } catch (r) {
    return r;
  }
  throw new Error("snapshot function didn't throw");
}
function Qo(e) {
  return {
    filepath: e.file.filepath,
    name: M0(e).slice(1).join(" > "),
    testId: e.id
  };
}
const L1 = (e, t) => {
  function r(n, o) {
    const i = t.flag(o, "vitest-test");
    if (!i) throw new Error(`'${n}' cannot be used without test context`);
    return i;
  }
  for (const n of ["matchSnapshot", "toMatchSnapshot"]) t.addMethod(e.Assertion.prototype, n, function(o, i) {
    if (t.flag(this, "_name", n), t.flag(this, "negate")) throw new Error(`${n} cannot be used with "not"`);
    const a = t.flag(this, "object"), u = r(n, this);
    typeof o == "string" && typeof i > "u" && (i = o, o = void 0);
    const l = t.flag(this, "message");
    Zo().assert({
      received: a,
      message: i,
      isInline: !1,
      properties: o,
      errorMessage: l,
      ...Qo(u)
    });
  });
  t.addMethod(e.Assertion.prototype, "toMatchFileSnapshot", function(n, o) {
    if (t.flag(this, "_name", "toMatchFileSnapshot"), t.flag(this, "negate")) throw new Error('toMatchFileSnapshot cannot be used with "not"');
    const s = new Error("resolves"), a = t.flag(this, "object"), u = r("toMatchFileSnapshot", this), l = t.flag(this, "message"), c = Zo().assertRaw({
      received: a,
      message: o,
      isInline: !1,
      rawSnapshot: { file: n },
      errorMessage: l,
      ...Qo(u)
    });
    return F1(u, c, D1(t, this), s);
  }), t.addMethod(e.Assertion.prototype, "toMatchInlineSnapshot", function(o, i, s) {
    var p;
    if (t.flag(this, "_name", "toMatchInlineSnapshot"), t.flag(this, "negate")) throw new Error('toMatchInlineSnapshot cannot be used with "not"');
    const u = r("toMatchInlineSnapshot", this);
    if (u.each || ((p = u.suite) == null ? void 0 : p.each)) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
    const c = t.flag(this, "object"), d = t.flag(this, "error");
    typeof o == "string" && (s = i, i = o, o = void 0), i && (i = nh(i));
    const f = t.flag(this, "message");
    Zo().assert({
      received: c,
      message: s,
      isInline: !0,
      properties: o,
      inlineSnapshot: i,
      error: d,
      errorMessage: f,
      ...Qo(u)
    });
  }), t.addMethod(e.Assertion.prototype, "toThrowErrorMatchingSnapshot", function(n) {
    if (t.flag(this, "_name", "toThrowErrorMatchingSnapshot"), t.flag(this, "negate")) throw new Error('toThrowErrorMatchingSnapshot cannot be used with "not"');
    const i = t.flag(this, "object"), s = r("toThrowErrorMatchingSnapshot", this), a = t.flag(this, "promise"), u = t.flag(this, "message");
    Zo().assert({
      received: dh(i, a),
      message: n,
      errorMessage: u,
      ...Qo(s)
    });
  }), t.addMethod(e.Assertion.prototype, "toThrowErrorMatchingInlineSnapshot", function(o, i) {
    var p;
    if (t.flag(this, "negate")) throw new Error('toThrowErrorMatchingInlineSnapshot cannot be used with "not"');
    const a = r("toThrowErrorMatchingInlineSnapshot", this);
    if (a.each || ((p = a.suite) == null ? void 0 : p.each)) throw new Error("InlineSnapshot cannot be used inside of test.each or describe.each");
    const l = t.flag(this, "object"), c = t.flag(this, "error"), d = t.flag(this, "promise"), f = t.flag(this, "message");
    o && (o = nh(o)), Zo().assert({
      received: dh(l, d),
      message: i,
      inlineSnapshot: o,
      isInline: !0,
      error: c,
      errorMessage: f,
      ...Qo(a)
    });
  }), t.addMethod(e.expect, "addSnapshotSerializer", b1);
};
qt(VP);
qt(FP);
qt(j1);
qt(L1);
qt(DP);
function B1(e) {
  const t = (i, s) => {
    const { assertionCalls: a } = oi(t);
    return Vs({ assertionCalls: a + 1 }, t), At(i, s);
  };
  Object.assign(t, At), Object.assign(t, globalThis[Yl]), t.getState = () => oi(t), t.setState = (i) => Vs(i, t);
  const r = oi(globalThis[xs]) || {};
  Vs({
    ...r,
    assertionCalls: 0,
    isExpectingAssertions: !1,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    environment: z0(),
    get testPath() {
      return wi().filepath;
    },
    currentTestName: r.currentTestName
  }, t), t.extend = (i) => At.extend(t, i), t.addEqualityTesters = (i) => wP(i), t.soft = (...i) => t(...i).withContext({ soft: !0 }), t.poll = M1(t), t.unreachable = (i) => {
    y.fail(`expected${i ? ` "${i}" ` : " "}not to be reached`);
  };
  function n(i) {
    const s = () => new Error(`expected number of assertions to be ${i}, but got ${t.getState().assertionCalls}`);
    Error.captureStackTrace && Error.captureStackTrace(s(), n), t.setState({
      expectedAssertionsNumber: i,
      expectedAssertionsNumberErrorGen: s
    });
  }
  function o() {
    const i = new Error("expected any number of assertion, but got none");
    Error.captureStackTrace && Error.captureStackTrace(i, o), t.setState({
      isExpectingAssertions: !0,
      isExpectingAssertionsError: i
    });
  }
  return $e.addMethod(t, "assertions", n), $e.addMethod(t, "hasAssertions", o), t.extend(fP), t;
}
const $b = B1();
Object.defineProperty(globalThis, xs, {
  value: $b,
  writable: !0,
  configurable: !0
});
var Lt = {}, Zs, fh;
function H1() {
  if (fh) return Zs;
  fh = 1;
  var e;
  return typeof Ka < "u" ? e = Ka : typeof window < "u" ? e = window : e = self, Zs = e, Zs;
}
var Qs, ph;
function V1() {
  if (ph) return Qs;
  ph = 1;
  let e;
  try {
    ({}).__proto__, e = !1;
  } catch {
    e = !0;
  }
  return Qs = e, Qs;
}
var ea, hh;
function rr() {
  if (hh) return ea;
  hh = 1;
  var e = Function.call, t = V1(), r = [
    // ignore size because it throws from Map
    "size",
    "caller",
    "callee",
    "arguments"
  ];
  return t && r.push("__proto__"), ea = function(o) {
    return Object.getOwnPropertyNames(o).reduce(
      function(i, s) {
        return r.includes(s) || typeof o[s] != "function" || (i[s] = e.bind(o[s])), i;
      },
      /* @__PURE__ */ Object.create(null)
    );
  }, ea;
}
var ta, mh;
function is() {
  if (mh) return ta;
  mh = 1;
  var e = rr();
  return ta = e(Array.prototype), ta;
}
var ra, gh;
function U1() {
  if (gh) return ra;
  gh = 1;
  var e = is().every;
  function t(o, i) {
    return o[i.id] === void 0 && (o[i.id] = 0), o[i.id] < i.callCount;
  }
  function r(o, i, s, a) {
    var u = !0;
    return s !== a.length - 1 && (u = i.calledBefore(a[s + 1])), t(o, i) && u ? (o[i.id] += 1, !0) : !1;
  }
  function n(o) {
    var i = {}, s = arguments.length > 1 ? arguments : o;
    return e(s, r.bind(null, i));
  }
  return ra = n, ra;
}
var na, bh;
function z1() {
  if (bh) return na;
  bh = 1;
  function e(t) {
    return t.constructor && t.constructor.name || null;
  }
  return na = e, na;
}
var oa = {}, yh;
function W1() {
  return yh || (yh = 1, (function(e) {
    e.wrap = function(t, r) {
      var n = function() {
        return e.printWarning(r), t.apply(this, arguments);
      };
      return t.prototype && (n.prototype = t.prototype), n;
    }, e.defaultMsg = function(t, r) {
      return `${t}.${r} is deprecated and will be removed from the public API in a future version of ${t}.`;
    }, e.printWarning = function(t) {
      typeof process == "object" && process.emitWarning ? process.emitWarning(t) : console.info ? console.info(t) : console.log(t);
    };
  })(oa)), oa;
}
var ia, vh;
function J1() {
  return vh || (vh = 1, ia = function(t, r) {
    var n = !0;
    try {
      t.forEach(function() {
        if (!r.apply(this, arguments))
          throw new Error();
      });
    } catch {
      n = !1;
    }
    return n;
  }), ia;
}
var sa, wh;
function X1() {
  return wh || (wh = 1, sa = function(t) {
    if (!t)
      return "";
    try {
      return t.displayName || t.name || // Use function decomposition as a last resort to get function
      // name. Does not rely on function decomposition to work - if it
      // doesn't debugging will be slightly less informative
      // (i.e. toString will say 'spy' rather than 'myFunc').
      (String(t).match(/function ([^\s(]+)/) || [])[1];
    } catch {
      return "";
    }
  }), sa;
}
var aa, Rh;
function G1() {
  if (Rh) return aa;
  Rh = 1;
  var e = is().sort, t = is().slice;
  function r(o, i) {
    var s = o.getCall(0), a = i.getCall(0), u = s && s.callId || -1, l = a && a.callId || -1;
    return u < l ? -1 : 1;
  }
  function n(o) {
    return e(t(o), r);
  }
  return aa = n, aa;
}
var la, Ch;
function K1() {
  if (Ch) return la;
  Ch = 1;
  var e = rr();
  return la = e(Function.prototype), la;
}
var ua, xh;
function Y1() {
  if (xh) return ua;
  xh = 1;
  var e = rr();
  return ua = e(Map.prototype), ua;
}
var ca, Eh;
function Z1() {
  if (Eh) return ca;
  Eh = 1;
  var e = rr();
  return ca = e(Object.prototype), ca;
}
var da, Sh;
function Q1() {
  if (Sh) return da;
  Sh = 1;
  var e = rr();
  return da = e(Set.prototype), da;
}
var fa, Ph;
function e_() {
  if (Ph) return fa;
  Ph = 1;
  var e = rr();
  return fa = e(String.prototype), fa;
}
var pa, Th;
function t_() {
  return Th || (Th = 1, pa = {
    array: is(),
    function: K1(),
    map: Y1(),
    object: Z1(),
    set: Q1(),
    string: e_()
  }), pa;
}
var zi = { exports: {} }, r_ = zi.exports, _h;
function n_() {
  return _h || (_h = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(r_, (function() {
      var r = typeof Promise == "function", n = typeof self == "object" ? self : Ka, o = typeof Symbol < "u", i = typeof Map < "u", s = typeof Set < "u", a = typeof WeakMap < "u", u = typeof WeakSet < "u", l = typeof DataView < "u", c = o && typeof Symbol.iterator < "u", d = o && typeof Symbol.toStringTag < "u", f = s && typeof Set.prototype.entries == "function", p = i && typeof Map.prototype.entries == "function", g = f && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries()), h = p && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries()), b = c && typeof Array.prototype[Symbol.iterator] == "function", m = b && Object.getPrototypeOf([][Symbol.iterator]()), E = c && typeof String.prototype[Symbol.iterator] == "function", $ = E && Object.getPrototypeOf(""[Symbol.iterator]()), _ = 8, C = -1;
      function T(P) {
        var v = typeof P;
        if (v !== "object")
          return v;
        if (P === null)
          return "null";
        if (P === n)
          return "global";
        if (Array.isArray(P) && (d === !1 || !(Symbol.toStringTag in P)))
          return "Array";
        if (typeof window == "object" && window !== null) {
          if (typeof window.location == "object" && P === window.location)
            return "Location";
          if (typeof window.document == "object" && P === window.document)
            return "Document";
          if (typeof window.navigator == "object") {
            if (typeof window.navigator.mimeTypes == "object" && P === window.navigator.mimeTypes)
              return "MimeTypeArray";
            if (typeof window.navigator.plugins == "object" && P === window.navigator.plugins)
              return "PluginArray";
          }
          if ((typeof window.HTMLElement == "function" || typeof window.HTMLElement == "object") && P instanceof window.HTMLElement) {
            if (P.tagName === "BLOCKQUOTE")
              return "HTMLQuoteElement";
            if (P.tagName === "TD")
              return "HTMLTableDataCellElement";
            if (P.tagName === "TH")
              return "HTMLTableHeaderCellElement";
          }
        }
        var R = d && P[Symbol.toStringTag];
        if (typeof R == "string")
          return R;
        var I = Object.getPrototypeOf(P);
        return I === RegExp.prototype ? "RegExp" : I === Date.prototype ? "Date" : r && I === Promise.prototype ? "Promise" : s && I === Set.prototype ? "Set" : i && I === Map.prototype ? "Map" : u && I === WeakSet.prototype ? "WeakSet" : a && I === WeakMap.prototype ? "WeakMap" : l && I === DataView.prototype ? "DataView" : i && I === h ? "Map Iterator" : s && I === g ? "Set Iterator" : b && I === m ? "Array Iterator" : E && I === $ ? "String Iterator" : I === null ? "Object" : Object.prototype.toString.call(P).slice(_, C);
      }
      return T;
    }));
  })(zi)), zi.exports;
}
var ha, qh;
function o_() {
  if (qh) return ha;
  qh = 1;
  var e = n_();
  return ha = function(r) {
    return e(r).toLowerCase();
  }, ha;
}
var ma, $h;
function i_() {
  if ($h) return ma;
  $h = 1;
  function e(t) {
    return t && t.toString ? t.toString() : String(t);
  }
  return ma = e, ma;
}
var ga, Oh;
function s_() {
  return Oh || (Oh = 1, ga = {
    global: H1(),
    calledInOrder: U1(),
    className: z1(),
    deprecated: W1(),
    every: J1(),
    functionName: X1(),
    orderByFirstCall: G1(),
    prototypes: t_(),
    typeOf: o_(),
    valueToString: i_()
  }), ga;
}
var Mh;
function a_() {
  if (Mh) return Lt;
  Mh = 1;
  const e = s_().global;
  let t, r;
  if (typeof __vitest_required__ < "u") {
    try {
      t = __vitest_required__.timers;
    } catch {
    }
    try {
      r = __vitest_required__.timersPromises;
    } catch {
    }
  }
  function n(i) {
    const s = Math.pow(2, 31) - 1, a = 1e12, u = function() {
    }, l = function() {
      return [];
    }, c = {};
    let d, f = !1;
    i.setTimeout && (c.setTimeout = !0, d = i.setTimeout(u, 0), f = typeof d == "object"), c.clearTimeout = !!i.clearTimeout, c.setInterval = !!i.setInterval, c.clearInterval = !!i.clearInterval, c.hrtime = i.process && typeof i.process.hrtime == "function", c.hrtimeBigint = c.hrtime && typeof i.process.hrtime.bigint == "function", c.nextTick = i.process && typeof i.process.nextTick == "function";
    const p = i.process && i.__vitest_required__ && i.__vitest_required__.util.promisify;
    c.performance = i.performance && typeof i.performance.now == "function";
    const g = i.Performance && (typeof i.Performance).match(/^(function|object)$/), h = i.performance && i.performance.constructor && i.performance.constructor.prototype;
    c.queueMicrotask = i.hasOwnProperty("queueMicrotask"), c.requestAnimationFrame = i.requestAnimationFrame && typeof i.requestAnimationFrame == "function", c.cancelAnimationFrame = i.cancelAnimationFrame && typeof i.cancelAnimationFrame == "function", c.requestIdleCallback = i.requestIdleCallback && typeof i.requestIdleCallback == "function", c.cancelIdleCallbackPresent = i.cancelIdleCallback && typeof i.cancelIdleCallback == "function", c.setImmediate = i.setImmediate && typeof i.setImmediate == "function", c.clearImmediate = i.clearImmediate && typeof i.clearImmediate == "function", c.Intl = i.Intl && typeof i.Intl == "object", i.clearTimeout && i.clearTimeout(d);
    const b = i.Date, m = c.Intl ? Object.defineProperties(
      /* @__PURE__ */ Object.create(null),
      Object.getOwnPropertyDescriptors(i.Intl)
    ) : void 0;
    let E = a;
    if (b === void 0)
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    c.Date = !0;
    class $ {
      constructor(N, j, z, x) {
        this.name = N, this.entryType = j, this.startTime = z, this.duration = x;
      }
      toJSON() {
        return JSON.stringify({ ...this });
      }
    }
    function _(O) {
      return Number.isFinite ? Number.isFinite(O) : isFinite(O);
    }
    let C = !1;
    function T(O, N) {
      O.loopLimit && N === O.loopLimit - 1 && (C = !0);
    }
    function P() {
      C = !1;
    }
    function v(O) {
      if (!O)
        return 0;
      const N = O.split(":"), j = N.length;
      let z = j, x = 0, K;
      if (j > 3 || !/^(\d\d:){0,2}\d\d?$/.test(O))
        throw new Error(
          "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
        );
      for (; z--; ) {
        if (K = parseInt(N[z], 10), K >= 60)
          throw new Error(`Invalid time ${O}`);
        x += K * Math.pow(60, j - z - 1);
      }
      return x * 1e3;
    }
    function R(O) {
      const j = O * 1e6 % 1e6, z = j < 0 ? j + 1e6 : j;
      return Math.floor(z);
    }
    function I(O) {
      if (!O)
        return 0;
      if (typeof O.getTime == "function")
        return O.getTime();
      if (typeof O == "number")
        return O;
      throw new TypeError("now should be milliseconds since UNIX epoch");
    }
    function S(O, N, j) {
      return j && j.callAt >= O && j.callAt <= N;
    }
    function A(O, N) {
      const j = new Error(
        `Aborting after running ${O.loopLimit} timers, assuming an infinite loop!`
      );
      if (!N.error)
        return j;
      const z = /target\.*[<|(|[].*?[>|\]|)]\s*/;
      let x = new RegExp(
        String(Object.keys(O).join("|"))
      );
      f && (x = new RegExp(
        `\\s+at (Object\\.)?(?:${Object.keys(O).join("|")})\\s+`
      ));
      let K = -1;
      N.error.stack.split(`
`).some(function(ee, re) {
        return ee.match(z) ? (K = re, !0) : ee.match(x) ? (K = re, !1) : K >= 0;
      });
      const ne = `${j}
${N.type || "Microtask"} - ${N.func.name || "anonymous"}
${N.error.stack.split(`
`).slice(K + 1).join(`
`)}`;
      try {
        Object.defineProperty(j, "stack", {
          value: ne
        });
      } catch {
      }
      return j;
    }
    function V() {
      class O extends b {
        /**
         * @param {number} year
         * @param {number} month
         * @param {number} date
         * @param {number} hour
         * @param {number} minute
         * @param {number} second
         * @param {number} ms
         * @returns void
         */
        // eslint-disable-next-line no-unused-vars
        constructor(z, x, K, ne, ee, re, G) {
          arguments.length === 0 ? super(O.clock.now) : super(...arguments), Object.defineProperty(this, "constructor", {
            value: b,
            enumerable: !1
          });
        }
        static [Symbol.hasInstance](z) {
          return z instanceof b;
        }
      }
      return O.isFake = !0, b.now && (O.now = function() {
        return O.clock.now;
      }), b.toSource && (O.toSource = function() {
        return b.toSource();
      }), O.toString = function() {
        return b.toString();
      }, new Proxy(O, {
        // handler for [[Call]] invocations (i.e. not using `new`)
        apply() {
          if (this instanceof O)
            throw new TypeError(
              "A Proxy should only capture `new` calls with the `construct` handler. This is not supposed to be possible, so check the logic."
            );
          return new b(O.clock.now).toString();
        }
      });
    }
    function L() {
      const O = {};
      return Object.getOwnPropertyNames(m).forEach(
        (N) => O[N] = m[N]
      ), O.DateTimeFormat = function(...N) {
        const j = new m.DateTimeFormat(...N), z = {};
        return ["formatRange", "formatRangeToParts", "resolvedOptions"].forEach(
          (x) => {
            z[x] = j[x].bind(j);
          }
        ), ["format", "formatToParts"].forEach((x) => {
          z[x] = function(K) {
            return j[x](K || O.clock.now);
          };
        }), z;
      }, O.DateTimeFormat.prototype = Object.create(
        m.DateTimeFormat.prototype
      ), O.DateTimeFormat.supportedLocalesOf = m.DateTimeFormat.supportedLocalesOf, O;
    }
    function U(O, N) {
      O.jobs || (O.jobs = []), O.jobs.push(N);
    }
    function k(O) {
      if (O.jobs) {
        for (let N = 0; N < O.jobs.length; N++) {
          const j = O.jobs[N];
          if (j.func.apply(null, j.args), T(O, N), O.loopLimit && N > O.loopLimit)
            throw A(O, j);
        }
        P(), O.jobs = [];
      }
    }
    function B(O, N) {
      if (N.func === void 0)
        throw new Error("Callback must be provided to timer calls");
      if (f && typeof N.func != "function")
        throw new TypeError(
          `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${N.func} of type ${typeof N.func}`
        );
      if (C && (N.error = new Error()), N.type = N.immediate ? "Immediate" : "Timeout", N.hasOwnProperty("delay") && (typeof N.delay != "number" && (N.delay = parseInt(N.delay, 10)), _(N.delay) || (N.delay = 0), N.delay = N.delay > s ? 1 : N.delay, N.delay = Math.max(0, N.delay)), N.hasOwnProperty("interval") && (N.type = "Interval", N.interval = N.interval > s ? 1 : N.interval), N.hasOwnProperty("animation") && (N.type = "AnimationFrame", N.animation = !0), N.hasOwnProperty("idleCallback") && (N.type = "IdleCallback", N.idleCallback = !0), O.timers || (O.timers = {}), N.id = E++, N.createdAt = O.now, N.callAt = O.now + (parseInt(N.delay) || (O.duringTick ? 1 : 0)), O.timers[N.id] = N, f) {
        const j = {
          refed: !0,
          ref: function() {
            return this.refed = !0, j;
          },
          unref: function() {
            return this.refed = !1, j;
          },
          hasRef: function() {
            return this.refed;
          },
          refresh: function() {
            return N.callAt = O.now + (parseInt(N.delay) || (O.duringTick ? 1 : 0)), O.timers[N.id] = N, j;
          },
          [Symbol.toPrimitive]: function() {
            return N.id;
          }
        };
        return j;
      }
      return N.id;
    }
    function H(O, N) {
      if (O.callAt < N.callAt)
        return -1;
      if (O.callAt > N.callAt)
        return 1;
      if (O.immediate && !N.immediate)
        return -1;
      if (!O.immediate && N.immediate)
        return 1;
      if (O.createdAt < N.createdAt)
        return -1;
      if (O.createdAt > N.createdAt)
        return 1;
      if (O.id < N.id)
        return -1;
      if (O.id > N.id)
        return 1;
    }
    function Q(O, N, j) {
      const z = O.timers;
      let x = null, K, ne;
      for (K in z)
        z.hasOwnProperty(K) && (ne = S(N, j, z[K]), ne && (!x || H(x, z[K]) === 1) && (x = z[K]));
      return x;
    }
    function ye(O) {
      const N = O.timers;
      let j = null, z;
      for (z in N)
        N.hasOwnProperty(z) && (!j || H(j, N[z]) === 1) && (j = N[z]);
      return j;
    }
    function qe(O) {
      const N = O.timers;
      let j = null, z;
      for (z in N)
        N.hasOwnProperty(z) && (!j || H(j, N[z]) === -1) && (j = N[z]);
      return j;
    }
    function we(O, N) {
      if (typeof N.interval == "number" ? O.timers[N.id].callAt += N.interval : delete O.timers[N.id], typeof N.func == "function")
        N.func.apply(null, N.args);
      else {
        const j = eval;
        (function() {
          j(N.func);
        })();
      }
    }
    function Ce(O) {
      return O === "IdleCallback" || O === "AnimationFrame" ? `cancel${O}` : `clear${O}`;
    }
    function Ne(O) {
      return O === "IdleCallback" || O === "AnimationFrame" ? `request${O}` : `set${O}`;
    }
    function W() {
      let O = 0;
      return function(N) {
        !O++ && console.warn(N);
      };
    }
    const xe = W();
    function ge(O, N, j) {
      if (!N)
        return;
      O.timers || (O.timers = {});
      const z = Number(N);
      if (Number.isNaN(z) || z < a) {
        const x = Ce(j);
        if (O.shouldClearNativeTimers === !0) {
          const K = O[`_${x}`];
          return typeof K == "function" ? K(N) : void 0;
        }
        xe(
          `FakeTimers: ${x} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
        );
      }
      if (O.timers.hasOwnProperty(z)) {
        const x = O.timers[z];
        if (x.type === j || x.type === "Timeout" && j === "Interval" || x.type === "Interval" && j === "Timeout")
          delete O.timers[z];
        else {
          const K = Ce(j), ne = Ne(x.type);
          throw new Error(
            `Cannot clear timer: timer created with ${ne}() but cleared with ${K}()`
          );
        }
      }
    }
    function st(O, N) {
      let j, z, x;
      const K = "_hrtime", ne = "_nextTick";
      for (z = 0, x = O.methods.length; z < x; z++) {
        if (j = O.methods[z], j === "hrtime" && i.process)
          i.process.hrtime = O[K];
        else if (j === "nextTick" && i.process)
          i.process.nextTick = O[ne];
        else if (j === "performance") {
          const ee = Object.getOwnPropertyDescriptor(
            O,
            `_${j}`
          );
          ee && ee.get && !ee.set ? Object.defineProperty(
            i,
            j,
            ee
          ) : ee.configurable && (i[j] = O[`_${j}`]);
        } else if (i[j] && i[j].hadOwnProperty)
          i[j] = O[`_${j}`];
        else
          try {
            delete i[j];
          } catch {
          }
        if (O.timersModuleMethods !== void 0)
          for (let ee = 0; ee < O.timersModuleMethods.length; ee++) {
            const re = O.timersModuleMethods[ee];
            t[re.methodName] = re.original;
          }
        if (O.timersPromisesModuleMethods !== void 0)
          for (let ee = 0; ee < O.timersPromisesModuleMethods.length; ee++) {
            const re = O.timersPromisesModuleMethods[ee];
            r[re.methodName] = re.original;
          }
      }
      N.shouldAdvanceTime === !0 && i.clearInterval(O.attachedInterval), O.methods = [];
      for (const [ee, re] of O.abortListenerMap.entries())
        re.removeEventListener("abort", ee), O.abortListenerMap.delete(ee);
      return O.timers ? Object.keys(O.timers).map(function(re) {
        return O.timers[re];
      }) : [];
    }
    function De(O, N, j) {
      if (j[N].hadOwnProperty = Object.prototype.hasOwnProperty.call(
        O,
        N
      ), j[`_${N}`] = O[N], N === "Date")
        O[N] = j[N];
      else if (N === "Intl")
        O[N] = j[N];
      else if (N === "performance") {
        const z = Object.getOwnPropertyDescriptor(
          O,
          N
        );
        if (z && z.get && !z.set) {
          Object.defineProperty(
            j,
            `_${N}`,
            z
          );
          const x = Object.getOwnPropertyDescriptor(
            j,
            N
          );
          Object.defineProperty(O, N, x);
        } else
          O[N] = j[N];
      } else
        O[N] = function() {
          return j[N].apply(j, arguments);
        }, Object.defineProperties(
          O[N],
          Object.getOwnPropertyDescriptors(j[N])
        );
      O[N].clock = j;
    }
    function ft(O, N) {
      O.tick(N);
    }
    const Ee = {
      setTimeout: i.setTimeout,
      clearTimeout: i.clearTimeout,
      setInterval: i.setInterval,
      clearInterval: i.clearInterval,
      Date: i.Date
    };
    c.setImmediate && (Ee.setImmediate = i.setImmediate), c.clearImmediate && (Ee.clearImmediate = i.clearImmediate), c.hrtime && (Ee.hrtime = i.process.hrtime), c.nextTick && (Ee.nextTick = i.process.nextTick), c.performance && (Ee.performance = i.performance), c.requestAnimationFrame && (Ee.requestAnimationFrame = i.requestAnimationFrame), c.queueMicrotask && (Ee.queueMicrotask = i.queueMicrotask), c.cancelAnimationFrame && (Ee.cancelAnimationFrame = i.cancelAnimationFrame), c.requestIdleCallback && (Ee.requestIdleCallback = i.requestIdleCallback), c.cancelIdleCallback && (Ee.cancelIdleCallback = i.cancelIdleCallback), c.Intl && (Ee.Intl = m);
    const Fe = i.setImmediate || i.setTimeout;
    function Ft(O, N) {
      O = Math.floor(I(O)), N = N || 1e3;
      let j = 0;
      const z = [0, 0], x = {
        now: O,
        Date: V(),
        loopLimit: N
      };
      x.Date.clock = x;
      function K() {
        return 16 - (x.now - O) % 16;
      }
      function ne(G) {
        const D = x.now - z[0] - O, J = Math.floor(D / 1e3), Z = (D - J * 1e3) * 1e6 + j - z[1];
        if (Array.isArray(G)) {
          if (G[1] > 1e9)
            throw new TypeError(
              "Number of nanoseconds can't exceed a billion"
            );
          const le = G[0];
          let he = Z - G[1], Ze = J - le;
          return he < 0 && (he += 1e9, Ze -= 1), [Ze, he];
        }
        return [J, Z];
      }
      function ee() {
        const G = ne();
        return G[0] * 1e3 + G[1] / 1e6;
      }
      c.hrtimeBigint && (ne.bigint = function() {
        const G = ne();
        return BigInt(G[0]) * BigInt(1e9) + BigInt(G[1]);
      }), c.Intl && (x.Intl = L(), x.Intl.clock = x), x.requestIdleCallback = function(D, J) {
        let Z = 0;
        x.countTimers() > 0 && (Z = 50);
        const le = B(x, {
          func: D,
          args: Array.prototype.slice.call(arguments, 2),
          delay: typeof J > "u" ? Z : Math.min(J, Z),
          idleCallback: !0
        });
        return Number(le);
      }, x.cancelIdleCallback = function(D) {
        return ge(x, D, "IdleCallback");
      }, x.setTimeout = function(D, J) {
        return B(x, {
          func: D,
          args: Array.prototype.slice.call(arguments, 2),
          delay: J
        });
      }, typeof i.Promise < "u" && p && (x.setTimeout[p.custom] = function(D, J) {
        return new i.Promise(function(le) {
          B(x, {
            func: le,
            args: [J],
            delay: D
          });
        });
      }), x.clearTimeout = function(D) {
        return ge(x, D, "Timeout");
      }, x.nextTick = function(D) {
        return U(x, {
          func: D,
          args: Array.prototype.slice.call(arguments, 1),
          error: C ? new Error() : null
        });
      }, x.queueMicrotask = function(D) {
        return x.nextTick(D);
      }, x.setInterval = function(D, J) {
        return J = parseInt(J, 10), B(x, {
          func: D,
          args: Array.prototype.slice.call(arguments, 2),
          delay: J,
          interval: J
        });
      }, x.clearInterval = function(D) {
        return ge(x, D, "Interval");
      }, c.setImmediate && (x.setImmediate = function(D) {
        return B(x, {
          func: D,
          args: Array.prototype.slice.call(arguments, 1),
          immediate: !0
        });
      }, typeof i.Promise < "u" && p && (x.setImmediate[p.custom] = function(D) {
        return new i.Promise(
          function(Z) {
            B(x, {
              func: Z,
              args: [D],
              immediate: !0
            });
          }
        );
      }), x.clearImmediate = function(D) {
        return ge(x, D, "Immediate");
      }), x.countTimers = function() {
        return Object.keys(x.timers || {}).length + (x.jobs || []).length;
      }, x.requestAnimationFrame = function(D) {
        const J = B(x, {
          func: D,
          delay: K(),
          get args() {
            return [ee()];
          },
          animation: !0
        });
        return Number(J);
      }, x.cancelAnimationFrame = function(D) {
        return ge(x, D, "AnimationFrame");
      }, x.runMicrotasks = function() {
        k(x);
      };
      function re(G, D, J, Z) {
        const le = typeof G == "number" ? G : v(G), he = Math.floor(le), Ze = R(le);
        let Le = j + Ze, Se = x.now + he;
        if (le < 0)
          throw new TypeError("Negative ticks are not supported");
        Le >= 1e6 && (Se += 1, Le -= 1e6), j = Le;
        let Me = x.now, Je = x.now, Be, at, ke, Ri, nr, or;
        x.duringTick = !0, ke = x.now, k(x), ke !== x.now && (Me += x.now - ke, Se += x.now - ke);
        function Ci() {
          for (Be = Q(x, Me, Se); Be && Me <= Se; ) {
            if (x.timers[Be.id]) {
              Me = Be.callAt, x.now = Be.callAt, ke = x.now;
              try {
                k(x), we(x, Be);
              } catch ($t) {
                at = at || $t;
              }
              if (D) {
                Fe(Ri);
                return;
              }
              nr();
            }
            or();
          }
          if (ke = x.now, k(x), ke !== x.now && (Me += x.now - ke, Se += x.now - ke), x.duringTick = !1, Be = Q(x, Me, Se), Be)
            try {
              x.tick(Se - x.now);
            } catch ($t) {
              at = at || $t;
            }
          else
            x.now = Se, j = Le;
          if (at)
            throw at;
          if (D)
            J(x.now);
          else
            return x.now;
        }
        return Ri = D && function() {
          try {
            nr(), or(), Ci();
          } catch ($t) {
            Z($t);
          }
        }, nr = function() {
          ke !== x.now && (Me += x.now - ke, Se += x.now - ke, Je += x.now - ke);
        }, or = function() {
          Be = Q(x, Je, Se), Je = Me;
        }, Ci();
      }
      return x.tick = function(D) {
        return re(D, !1);
      }, typeof i.Promise < "u" && (x.tickAsync = function(D) {
        return new i.Promise(function(J, Z) {
          Fe(function() {
            try {
              re(D, !0, J, Z);
            } catch (le) {
              Z(le);
            }
          });
        });
      }), x.next = function() {
        k(x);
        const D = ye(x);
        if (!D)
          return x.now;
        x.duringTick = !0;
        try {
          return x.now = D.callAt, we(x, D), k(x), x.now;
        } finally {
          x.duringTick = !1;
        }
      }, typeof i.Promise < "u" && (x.nextAsync = function() {
        return new i.Promise(function(D, J) {
          Fe(function() {
            try {
              const Z = ye(x);
              if (!Z) {
                D(x.now);
                return;
              }
              let le;
              x.duringTick = !0, x.now = Z.callAt;
              try {
                we(x, Z);
              } catch (he) {
                le = he;
              }
              x.duringTick = !1, Fe(function() {
                le ? J(le) : D(x.now);
              });
            } catch (Z) {
              J(Z);
            }
          });
        });
      }), x.runAll = function() {
        let D, J;
        for (k(x), J = 0; J < x.loopLimit; J++) {
          if (!x.timers || (D = Object.keys(x.timers).length, D === 0))
            return P(), x.now;
          x.next(), T(x, J);
        }
        const Z = ye(x);
        throw A(x, Z);
      }, x.runToFrame = function() {
        return x.tick(K());
      }, typeof i.Promise < "u" && (x.runAllAsync = function() {
        return new i.Promise(function(D, J) {
          let Z = 0;
          function le() {
            Fe(function() {
              try {
                k(x);
                let he;
                if (Z < x.loopLimit) {
                  if (!x.timers) {
                    P(), D(x.now);
                    return;
                  }
                  if (he = Object.keys(
                    x.timers
                  ).length, he === 0) {
                    P(), D(x.now);
                    return;
                  }
                  x.next(), Z++, le(), T(x, Z);
                  return;
                }
                const Ze = ye(x);
                J(A(x, Ze));
              } catch (he) {
                J(he);
              }
            });
          }
          le();
        });
      }), x.runToLast = function() {
        const D = qe(x);
        return D ? x.tick(D.callAt - x.now) : (k(x), x.now);
      }, typeof i.Promise < "u" && (x.runToLastAsync = function() {
        return new i.Promise(function(D, J) {
          Fe(function() {
            try {
              const Z = qe(x);
              Z || (k(x), D(x.now)), D(x.tickAsync(Z.callAt - x.now));
            } catch (Z) {
              J(Z);
            }
          });
        });
      }), x.reset = function() {
        j = 0, x.timers = {}, x.jobs = [], x.now = O;
      }, x.setSystemTime = function(D) {
        const J = I(D), Z = J - x.now;
        let le, he;
        z[0] = z[0] + Z, z[1] = z[1] + j, x.now = J, j = 0;
        for (le in x.timers)
          x.timers.hasOwnProperty(le) && (he = x.timers[le], he.createdAt += Z, he.callAt += Z);
      }, x.jump = function(D) {
        const J = typeof D == "number" ? D : v(D), Z = Math.floor(J);
        for (const le of Object.values(x.timers))
          x.now + Z > le.callAt && (le.callAt = x.now + Z);
        x.tick(Z);
      }, c.performance && (x.performance = /* @__PURE__ */ Object.create(null), x.performance.now = ee), c.hrtime && (x.hrtime = ne), x;
    }
    function X(O) {
      if (arguments.length > 1 || O instanceof Date || Array.isArray(O) || typeof O == "number")
        throw new TypeError(
          `FakeTimers.install called with ${String(
            O
          )} install requires an object parameter`
        );
      if (i.Date.isFake === !0)
        throw new TypeError(
          "Can't install fake timers twice on the same global object."
        );
      if (O = typeof O < "u" ? O : {}, O.shouldAdvanceTime = O.shouldAdvanceTime || !1, O.advanceTimeDelta = O.advanceTimeDelta || 20, O.shouldClearNativeTimers = O.shouldClearNativeTimers || !1, O.target)
        throw new TypeError(
          "config.target is no longer supported. Use `withGlobal(target)` instead."
        );
      function N(K) {
        if (!O.ignoreMissingTimers)
          throw new ReferenceError(
            `non-existent timers and/or objects cannot be faked: '${K}'`
          );
      }
      let j, z;
      const x = Ft(O.now, O.loopLimit);
      if (x.shouldClearNativeTimers = O.shouldClearNativeTimers, x.uninstall = function() {
        return st(x, O);
      }, x.abortListenerMap = /* @__PURE__ */ new Map(), x.methods = O.toFake || [], x.methods.length === 0 && (x.methods = Object.keys(Ee)), O.shouldAdvanceTime === !0) {
        const K = ft.bind(
          null,
          x,
          O.advanceTimeDelta
        ), ne = i.setInterval(
          K,
          O.advanceTimeDelta
        );
        x.attachedInterval = ne;
      }
      if (x.methods.includes("performance")) {
        const K = (() => {
          if (h)
            return i.performance.constructor.prototype;
          if (g)
            return i.Performance.prototype;
        })();
        if (K)
          Object.getOwnPropertyNames(K).forEach(function(ne) {
            ne !== "now" && (x.performance[ne] = ne.indexOf("getEntries") === 0 ? l : u);
          }), x.performance.mark = (ne) => new $(ne, "mark", 0, 0), x.performance.measure = (ne) => new $(ne, "measure", 0, 100), x.performance.timeOrigin = I(O.now);
        else if ((O.toFake || []).includes("performance"))
          return N("performance");
      }
      for (i === e && t && (x.timersModuleMethods = []), i === e && r && (x.timersPromisesModuleMethods = []), j = 0, z = x.methods.length; j < z; j++) {
        const K = x.methods[j];
        if (!c[K]) {
          N(K);
          continue;
        }
        if (K === "hrtime" ? i.process && typeof i.process.hrtime == "function" && De(i.process, K, x) : K === "nextTick" ? i.process && typeof i.process.nextTick == "function" && De(i.process, K, x) : De(i, K, x), x.timersModuleMethods !== void 0 && t[K]) {
          const ne = t[K];
          x.timersModuleMethods.push({
            methodName: K,
            original: ne
          }), t[K] = i[K];
        }
        x.timersPromisesModuleMethods !== void 0 && (K === "setTimeout" ? (x.timersPromisesModuleMethods.push({
          methodName: "setTimeout",
          original: r.setTimeout
        }), r.setTimeout = (ne, ee, re = {}) => new Promise((G, D) => {
          const J = () => {
            re.signal.removeEventListener(
              "abort",
              J
            ), x.abortListenerMap.delete(J), x.clearTimeout(Z), D(re.signal.reason);
          }, Z = x.setTimeout(() => {
            re.signal && (re.signal.removeEventListener(
              "abort",
              J
            ), x.abortListenerMap.delete(J)), G(ee);
          }, ne);
          re.signal && (re.signal.aborted ? J() : (re.signal.addEventListener(
            "abort",
            J
          ), x.abortListenerMap.set(
            J,
            re.signal
          )));
        })) : K === "setImmediate" ? (x.timersPromisesModuleMethods.push({
          methodName: "setImmediate",
          original: r.setImmediate
        }), r.setImmediate = (ne, ee = {}) => new Promise((re, G) => {
          const D = () => {
            ee.signal.removeEventListener(
              "abort",
              D
            ), x.abortListenerMap.delete(D), x.clearImmediate(J), G(ee.signal.reason);
          }, J = x.setImmediate(() => {
            ee.signal && (ee.signal.removeEventListener(
              "abort",
              D
            ), x.abortListenerMap.delete(D)), re(ne);
          });
          ee.signal && (ee.signal.aborted ? D() : (ee.signal.addEventListener(
            "abort",
            D
          ), x.abortListenerMap.set(
            D,
            ee.signal
          )));
        })) : K === "setInterval" && (x.timersPromisesModuleMethods.push({
          methodName: "setInterval",
          original: r.setInterval
        }), r.setInterval = (ne, ee, re = {}) => ({
          [Symbol.asyncIterator]: () => {
            const G = () => {
              let Se, Me;
              const Je = new Promise((Be, at) => {
                Se = Be, Me = at;
              });
              return Je.resolve = Se, Je.reject = Me, Je;
            };
            let D = !1, J = !1, Z, le = 0;
            const he = [], Ze = x.setInterval(() => {
              he.length > 0 ? he.shift().resolve() : le++;
            }, ne), Le = () => {
              re.signal.removeEventListener(
                "abort",
                Le
              ), x.abortListenerMap.delete(Le), x.clearInterval(Ze), D = !0;
              for (const Se of he)
                Se.resolve();
            };
            return re.signal && (re.signal.aborted ? D = !0 : (re.signal.addEventListener(
              "abort",
              Le
            ), x.abortListenerMap.set(
              Le,
              re.signal
            ))), {
              next: async () => {
                var Me, Je;
                if ((Me = re.signal) != null && Me.aborted && !J)
                  throw J = !0, re.signal.reason;
                if (D)
                  return { done: !0, value: void 0 };
                if (le > 0)
                  return le--, { done: !1, value: ee };
                const Se = G();
                if (he.push(Se), await Se, Z && he.length === 0 && Z.resolve(), (Je = re.signal) != null && Je.aborted && !J)
                  throw J = !0, re.signal.reason;
                return D ? { done: !0, value: void 0 } : { done: !1, value: ee };
              },
              return: async () => D ? { done: !0, value: void 0 } : (he.length > 0 && (Z = G(), await Z), x.clearInterval(Ze), D = !0, re.signal && (re.signal.removeEventListener(
                "abort",
                Le
              ), x.abortListenerMap.delete(Le)), { done: !0, value: void 0 })
            };
          }
        })));
      }
      return x;
    }
    return {
      timers: Ee,
      createClock: Ft,
      install: X,
      withGlobal: n
    };
  }
  const o = n(e);
  return Lt.timers = o.timers, Lt.createClock = o.createClock, Lt.install = o.install, Lt.withGlobal = n, Lt;
}
var l_ = a_();
class u_ {
  constructor({ global: t, config: r }) {
    Y(this, "_global");
    Y(this, "_clock");
    // | _fakingTime | _fakingDate |
    // +-------------+-------------+
    // | false       | falsy       | initial
    // | false       | truthy     | vi.setSystemTime called first (for mocking only Date without fake timers)
    // | true        | falsy       | vi.useFakeTimers called first
    // | true        | truthy     | unreachable
    Y(this, "_fakingTime");
    Y(this, "_fakingDate");
    Y(this, "_fakeTimers");
    Y(this, "_userConfig");
    Y(this, "_now", tt.now);
    this._userConfig = r, this._fakingDate = null, this._fakingTime = !1, this._fakeTimers = l_.withGlobal(t), this._global = t;
  }
  clearAllTimers() {
    this._fakingTime && this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    this._checkFakeTimers() && this._clock.runAll();
  }
  async runAllTimersAsync() {
    this._checkFakeTimers() && await this._clock.runAllAsync();
  }
  runOnlyPendingTimers() {
    this._checkFakeTimers() && this._clock.runToLast();
  }
  async runOnlyPendingTimersAsync() {
    this._checkFakeTimers() && await this._clock.runToLastAsync();
  }
  advanceTimersToNextTimer(t = 1) {
    if (this._checkFakeTimers()) for (let r = t; r > 0 && (this._clock.next(), this._clock.tick(0), this._clock.countTimers() !== 0); r--)
      ;
  }
  async advanceTimersToNextTimerAsync(t = 1) {
    if (this._checkFakeTimers()) for (let r = t; r > 0 && (await this._clock.nextAsync(), this._clock.tick(0), this._clock.countTimers() !== 0); r--)
      ;
  }
  advanceTimersByTime(t) {
    this._checkFakeTimers() && this._clock.tick(t);
  }
  async advanceTimersByTimeAsync(t) {
    this._checkFakeTimers() && await this._clock.tickAsync(t);
  }
  advanceTimersToNextFrame() {
    this._checkFakeTimers() && this._clock.runToFrame();
  }
  runAllTicks() {
    this._checkFakeTimers() && this._clock.runMicrotasks();
  }
  useRealTimers() {
    this._fakingDate && ($1(), this._fakingDate = null), this._fakingTime && (this._clock.uninstall(), this._fakingTime = !1);
  }
  useFakeTimers() {
    var t, r, n;
    if (this._fakingDate) throw new Error('"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.');
    if (!this._fakingTime) {
      const o = Object.keys(this._fakeTimers.timers).filter((i) => i !== "nextTick" && i !== "queueMicrotask");
      if ((r = (t = this._userConfig) == null ? void 0 : t.toFake) != null && r.includes("nextTick") && yb()) throw new Error("process.nextTick cannot be mocked inside child_process");
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        ...this._userConfig,
        toFake: ((n = this._userConfig) == null ? void 0 : n.toFake) || o,
        ignoreMissingTimers: !0
      }), this._fakingTime = !0;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: t } = this._clock;
      this._clock.reset(), this._clock.setSystemTime(t);
    }
  }
  setSystemTime(t) {
    const r = typeof t > "u" || t instanceof Date ? t : new Date(t);
    this._fakingTime ? this._clock.setSystemTime(r) : (this._fakingDate = r ?? new Date(this.getRealSystemTime()), q1(this._fakingDate));
  }
  getMockedSystemTime() {
    return this._fakingTime ? new Date(this._clock.now) : this._fakingDate;
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    return this._checkFakeTimers() ? this._clock.countTimers() : 0;
  }
  configure(t) {
    this._userConfig = t;
  }
  isFakeTimers() {
    return this._fakingTime;
  }
  _checkFakeTimers() {
    if (!this._fakingTime) throw new Error('Timers are not mocked. Try calling "vi.useFakeTimers()" first.');
    return this._fakingTime;
  }
}
function Ob(e, t) {
  return t.stack !== void 0 && (e.stack = t.stack.replace(t.message, e.message)), e;
}
function c_(e, t = {}) {
  const { setTimeout: r, setInterval: n, clearTimeout: o, clearInterval: i } = Zt(), { interval: s = 50, timeout: a = 1e3 } = typeof t == "number" ? { timeout: t } : t, u = new Error("STACK_TRACE_ERROR");
  return new Promise((l, c) => {
    let d, f = "idle", p, g;
    const h = (E) => {
      p && o(p), g && i(g), l(E);
    }, b = () => {
      g && i(g);
      let E = d;
      E || (E = Ob(new Error("Timed out in waitFor!"), u)), c(E);
    }, m = () => {
      if (ss.isFakeTimers() && ss.advanceTimersByTime(s), f !== "pending")
        try {
          const E = e();
          if (E !== null && typeof E == "object" && typeof E.then == "function") {
            const $ = E;
            f = "pending", $.then((_) => {
              f = "resolved", h(_);
            }, (_) => {
              f = "rejected", d = _;
            });
          } else
            return h(E), !0;
        } catch (E) {
          d = E;
        }
    };
    m() !== !0 && (p = r(b, a), g = n(m, s));
  });
}
function d_(e, t = {}) {
  const { setTimeout: r, setInterval: n, clearTimeout: o, clearInterval: i } = Zt(), { interval: s = 50, timeout: a = 1e3 } = typeof t == "number" ? { timeout: t } : t, u = new Error("STACK_TRACE_ERROR");
  return new Promise((l, c) => {
    let d = "idle", f, p;
    const g = (m) => {
      p && i(p), m || (m = Ob(new Error("Timed out in waitUntil!"), u)), c(m);
    }, h = (m) => {
      if (m)
        return f && o(f), p && i(p), l(m), !0;
    }, b = () => {
      if (ss.isFakeTimers() && ss.advanceTimersByTime(s), d !== "pending")
        try {
          const m = e();
          if (m !== null && typeof m == "object" && typeof m.then == "function") {
            const E = m;
            d = "pending", E.then(($) => {
              d = "resolved", h($);
            }, ($) => {
              d = "rejected", g($);
            });
          } else return h(m);
        } catch (m) {
          g(m);
        }
    };
    b() !== !0 && (f = r(g, a), p = n(b, s));
  });
}
function f_() {
  let e = null;
  const t = wi();
  let r;
  const n = () => r || (r = new u_({
    global: globalThis,
    config: t.config.fakeTimers
  })), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = [
    "PROD",
    "DEV",
    "SSR"
  ], a = {
    useFakeTimers(u) {
      var l, c, d, f;
      if (yb() && ((l = u == null ? void 0 : u.toFake) != null && l.includes("nextTick") || (f = (d = (c = t.config) == null ? void 0 : c.fakeTimers) == null ? void 0 : d.toFake) != null && f.includes("nextTick")))
        throw new Error('vi.useFakeTimers({ toFake: ["nextTick"] }) is not supported in node:child_process. Use --pool=threads if mocking nextTick is required.');
      return u ? n().configure({
        ...t.config.fakeTimers,
        ...u
      }) : n().configure(t.config.fakeTimers), n().useFakeTimers(), a;
    },
    isFakeTimers() {
      return n().isFakeTimers();
    },
    useRealTimers() {
      return n().useRealTimers(), a;
    },
    runOnlyPendingTimers() {
      return n().runOnlyPendingTimers(), a;
    },
    async runOnlyPendingTimersAsync() {
      return await n().runOnlyPendingTimersAsync(), a;
    },
    runAllTimers() {
      return n().runAllTimers(), a;
    },
    async runAllTimersAsync() {
      return await n().runAllTimersAsync(), a;
    },
    runAllTicks() {
      return n().runAllTicks(), a;
    },
    advanceTimersByTime(u) {
      return n().advanceTimersByTime(u), a;
    },
    async advanceTimersByTimeAsync(u) {
      return await n().advanceTimersByTimeAsync(u), a;
    },
    advanceTimersToNextTimer() {
      return n().advanceTimersToNextTimer(), a;
    },
    async advanceTimersToNextTimerAsync() {
      return await n().advanceTimersToNextTimerAsync(), a;
    },
    advanceTimersToNextFrame() {
      return n().advanceTimersToNextFrame(), a;
    },
    getTimerCount() {
      return n().getTimerCount();
    },
    setSystemTime(u) {
      return n().setSystemTime(u), a;
    },
    getMockedSystemTime() {
      return n().getMockedSystemTime();
    },
    getRealSystemTime() {
      return n().getRealSystemTime();
    },
    clearAllTimers() {
      return n().clearAllTimers(), a;
    },
    spyOn: jS,
    fn: FS,
    waitFor: c_,
    waitUntil: d_,
    hoisted(u) {
      return lt(u, '"vi.hoisted" factory', ["function"]), u();
    },
    mock(u, l) {
      if (typeof u != "string") throw new TypeError(`vi.mock() expects a string path, but received a ${typeof u}`);
      const c = Bt("mock");
      Ge().queueMock(u, c, typeof l == "function" ? () => l(() => Ge().importActual(u, c, Ge().getMockContext().callstack)) : l);
    },
    unmock(u) {
      if (typeof u != "string") throw new TypeError(`vi.unmock() expects a string path, but received a ${typeof u}`);
      Ge().queueUnmock(u, Bt("unmock"));
    },
    doMock(u, l) {
      if (typeof u != "string") throw new TypeError(`vi.doMock() expects a string path, but received a ${typeof u}`);
      const c = Bt("doMock");
      Ge().queueMock(u, c, typeof l == "function" ? () => l(() => Ge().importActual(u, c, Ge().getMockContext().callstack)) : l);
    },
    doUnmock(u) {
      if (typeof u != "string") throw new TypeError(`vi.doUnmock() expects a string path, but received a ${typeof u}`);
      Ge().queueUnmock(u, Bt("doUnmock"));
    },
    async importActual(u) {
      return Ge().importActual(u, Bt("importActual"), Ge().getMockContext().callstack);
    },
    async importMock(u) {
      return Ge().importMock(u, Bt("importMock"));
    },
    mockObject(u) {
      return Ge().mockObject({ value: u }).value;
    },
    mocked(u, l = {}) {
      return u;
    },
    isMockFunction(u) {
      return ti(u);
    },
    clearAllMocks() {
      return [...Bi].reverse().forEach((u) => u.mockClear()), a;
    },
    resetAllMocks() {
      return [...Bi].reverse().forEach((u) => u.mockReset()), a;
    },
    restoreAllMocks() {
      return [...Bi].reverse().forEach((u) => u.mockRestore()), a;
    },
    stubGlobal(u, l) {
      return o.has(u) || o.set(u, Object.getOwnPropertyDescriptor(globalThis, u)), Object.defineProperty(globalThis, u, {
        value: l,
        writable: !0,
        configurable: !0,
        enumerable: !0
      }), a;
    },
    stubEnv(u, l) {
      return i.has(u) || i.set(u, process.env[u]), s.includes(u) ? process.env[u] = l ? "1" : "" : l === void 0 ? delete process.env[u] : process.env[u] = String(l), a;
    },
    unstubAllGlobals() {
      return o.forEach((u, l) => {
        u ? Object.defineProperty(globalThis, l, u) : Reflect.deleteProperty(globalThis, l);
      }), o.clear(), a;
    },
    unstubAllEnvs() {
      return i.forEach((u, l) => {
        u === void 0 ? delete process.env[l] : process.env[l] = u;
      }), i.clear(), a;
    },
    resetModules() {
      return W0(t.moduleCache), a;
    },
    async dynamicImportSettled() {
      return vb();
    },
    setConfig(u) {
      e || (e = { ...t.config }), Object.assign(t.config, u);
    },
    resetConfig() {
      e && Object.assign(t.config, e);
    }
  };
  return a;
}
const p_ = f_(), ss = p_;
function Ge() {
  return typeof __vitest_mocker__ < "u" ? __vitest_mocker__ : new Proxy({}, { get(e, t) {
    throw new Error(`Vitest mocker was not initialized in this environment. vi.${String(t)}() is forbidden.`);
  } });
}
function Bt(e) {
  const r = ME({ stackTraceLimit: 5 }).split(`
`), n = r.findIndex((i) => i.includes(` at Object.${e}`) || i.includes(`${e}@`)), o = tu(r[n + 1]);
  return (o == null ? void 0 : o.file) || "";
}
$b.extend(PC);
