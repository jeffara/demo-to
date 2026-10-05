import { useRef as Ot, useLayoutEffect as kt, useEffect as Kt } from "react";
function tr(t) {
  const e = Ot(null);
  return e.current === null && (e.current = t()), e.current;
}
const It = typeof window < "u", nr = It ? kt : Kt, k = /* @__NO_SIDE_EFFECTS__ */ (t) => t;
let X = k, $ = k;
process.env.NODE_ENV !== "production" && (X = (t, e) => {
  !t && typeof console < "u" && console.warn(e);
}, $ = (t, e) => {
  if (!t)
    throw new Error(e);
});
// @__NO_SIDE_EFFECTS__
function Ae(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const xe = /* @__NO_SIDE_EFFECTS__ */ (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
}, F = /* @__NO_SIDE_EFFECTS__ */ (t) => t * 1e3, O = /* @__NO_SIDE_EFFECTS__ */ (t) => t / 1e3, Nt = {
  useManualTiming: !1
};
function Et(t) {
  let e = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), s = !1, r = !1;
  const i = /* @__PURE__ */ new WeakSet();
  let o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function a(l) {
    i.has(l) && (c.schedule(l), t()), l(o);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, u = !1, f = !1) => {
      const v = f && s ? e : n;
      return u && i.add(l), v.has(l) || v.add(l), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      n.delete(l), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o = l, s) {
        r = !0;
        return;
      }
      s = !0, [e, n] = [n, e], e.forEach(a), e.clear(), s = !1, r && (r = !1, c.process(l));
    }
  };
  return c;
}
const H = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], Bt = 40;
function _t(t, e) {
  let n = !1, s = !0;
  const r = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, o = H.reduce((g, S) => (g[S] = Et(i), g), {}), { read: a, resolveKeyframes: c, update: l, preRender: u, render: f, postRender: d } = o, v = () => {
    const g = performance.now();
    n = !1, r.delta = s ? 1e3 / 60 : Math.max(Math.min(g - r.timestamp, Bt), 1), r.timestamp = g, r.isProcessing = !0, a.process(r), c.process(r), l.process(r), u.process(r), f.process(r), d.process(r), r.isProcessing = !1, n && e && (s = !1, t(v));
  }, A = () => {
    n = !0, s = !0, r.isProcessing || t(v);
  };
  return { schedule: H.reduce((g, S) => {
    const V = o[S];
    return g[S] = (P, p = !1, x = !1) => (n || A(), V.schedule(P, p, x)), g;
  }, {}), cancel: (g) => {
    for (let S = 0; S < H.length; S++)
      o[H[S]].cancel(g);
  }, state: r, steps: o };
}
const { schedule: E, cancel: Wt, state: ee, steps: sr } = _t(typeof requestAnimationFrame < "u" ? requestAnimationFrame : k, !0), Ie = /* @__PURE__ */ new Set();
function $t(t, e, n) {
  t || Ie.has(e) || (console.warn(e), Ie.add(e));
}
const Lt = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), zt = "framerAppearId", Ut = "data-" + Lt(zt);
function Ne(t) {
  const e = [{}, {}];
  return t == null || t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function Gt(t, e, n, s) {
  if (typeof e == "function") {
    const [r, i] = Ne(s);
    e = e(n !== void 0 ? n : t.custom, r, i);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [r, i] = Ne(s);
    e = e(n !== void 0 ? n : t.custom, r, i);
  }
  return e;
}
const qt = (t) => Array.isArray(t), rr = (t) => !!(t && typeof t == "object" && t.mix && t.toValue), Yt = (t) => qt(t) ? t[t.length - 1] || 0 : t, Xt = (t) => !!(t && t.getVelocity), Se = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], jt = new Set(Se), et = (t) => (e) => typeof e == "string" && e.startsWith(t), ir = /* @__PURE__ */ et("--"), Zt = /* @__PURE__ */ et("var(--"), we = (t) => Zt(t) ? Ht.test(t.split("/*")[0].trim()) : !1, Ht = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, B = (t, e, n) => n > e ? e : n < t ? t : n, z = {
  test: (t) => typeof t == "number",
  parse: parseFloat,
  transform: (t) => t
}, q = {
  ...z,
  transform: (t) => B(0, 1, t)
}, J = {
  ...z,
  default: 1
}, j = (t) => ({
  test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1,
  parse: parseFloat,
  transform: (e) => `${e}${t}`
}), R = /* @__PURE__ */ j("deg"), W = /* @__PURE__ */ j("%"), h = /* @__PURE__ */ j("px"), Jt = /* @__PURE__ */ j("vh"), Qt = /* @__PURE__ */ j("vw"), Ee = {
  ...W,
  parse: (t) => W.parse(t) / 100,
  transform: (t) => W.transform(t * 100)
}, en = {
  // Border props
  borderWidth: h,
  borderTopWidth: h,
  borderRightWidth: h,
  borderBottomWidth: h,
  borderLeftWidth: h,
  borderRadius: h,
  radius: h,
  borderTopLeftRadius: h,
  borderTopRightRadius: h,
  borderBottomRightRadius: h,
  borderBottomLeftRadius: h,
  // Positioning props
  width: h,
  maxWidth: h,
  height: h,
  maxHeight: h,
  top: h,
  right: h,
  bottom: h,
  left: h,
  // Spacing props
  padding: h,
  paddingTop: h,
  paddingRight: h,
  paddingBottom: h,
  paddingLeft: h,
  margin: h,
  marginTop: h,
  marginRight: h,
  marginBottom: h,
  marginLeft: h,
  // Misc
  backgroundPositionX: h,
  backgroundPositionY: h
}, tn = {
  rotate: R,
  rotateX: R,
  rotateY: R,
  rotateZ: R,
  scale: J,
  scaleX: J,
  scaleY: J,
  scaleZ: J,
  skew: R,
  skewX: R,
  skewY: R,
  distance: h,
  translateX: h,
  translateY: h,
  translateZ: h,
  x: h,
  y: h,
  z: h,
  perspective: h,
  transformPerspective: h,
  opacity: q,
  originX: Ee,
  originY: Ee,
  originZ: h
}, Be = {
  ...z,
  transform: Math.round
}, nn = {
  ...en,
  ...tn,
  zIndex: Be,
  size: h,
  // SVG
  fillOpacity: q,
  strokeOpacity: q,
  numOctaves: Be
};
function Me(t, e, n) {
  const s = t.getProps();
  return Gt(s, e, n !== void 0 ? n : s.custom, t);
}
const sn = /* @__PURE__ */ Ae(() => window.ScrollTimeline !== void 0);
class rn {
  constructor(e) {
    this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map((e) => "finished" in e ? e.finished : e));
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(e) {
    return this.animations[0][e];
  }
  setAll(e, n) {
    for (let s = 0; s < this.animations.length; s++)
      this.animations[s][e] = n;
  }
  attachTimeline(e, n) {
    const s = this.animations.map((r) => {
      if (sn() && r.attachTimeline)
        return r.attachTimeline(e);
      if (typeof n == "function")
        return n(r);
    });
    return () => {
      s.forEach((r, i) => {
        r && r(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(e) {
    this.setAll("time", e);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(e) {
    this.setAll("speed", e);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let e = 0;
    for (let n = 0; n < this.animations.length; n++)
      e = Math.max(e, this.animations[n].duration);
    return e;
  }
  runAll(e) {
    this.animations.forEach((n) => n[e]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class on extends rn {
  then(e, n) {
    return Promise.all(this.animations).then(e).catch(n);
  }
}
function tt(t, e) {
  return t ? t[e] || t.default || t : void 0;
}
const he = 2e4;
function nt(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < he; )
    e += n, s = t.next(e);
  return e >= he ? 1 / 0 : e;
}
function Ve(t) {
  return typeof t == "function";
}
function _e(t, e) {
  t.timeline = e, t.onfinish = null;
}
const Pe = (t) => Array.isArray(t) && typeof t[0] == "number", an = {
  linearEasing: void 0
};
function ln(t, e) {
  const n = /* @__PURE__ */ Ae(t);
  return () => {
    var s;
    return (s = an[e]) !== null && s !== void 0 ? s : n();
  };
}
const te = /* @__PURE__ */ ln(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), st = (t, e, n = 10) => {
  let s = "";
  const r = Math.max(Math.round(e / n), 2);
  for (let i = 0; i < r; i++)
    s += t(/* @__PURE__ */ xe(0, r - 1, i)) + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
};
function rt(t) {
  return !!(typeof t == "function" && te() || !t || typeof t == "string" && (t in de || te()) || Pe(t) || Array.isArray(t) && t.every(rt));
}
const U = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, de = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ U([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ U([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ U([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ U([0.33, 1.53, 0.69, 0.99])
};
function it(t, e) {
  if (t)
    return typeof t == "function" && te() ? st(t, e) : Pe(t) ? U(t) : Array.isArray(t) ? t.map((n) => it(n, e) || de.easeOut) : de[t];
}
const ot = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Se
]);
let Q;
function cn() {
  Q = void 0;
}
const I = {
  now: () => (Q === void 0 && I.set(ee.isProcessing || Nt.useManualTiming ? ee.timestamp : performance.now()), Q),
  set: (t) => {
    Q = t, queueMicrotask(cn);
  }
};
function un(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function fn(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
class hn {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return un(this.subscriptions, e), () => fn(this.subscriptions, e);
  }
  notify(e, n, s) {
    const r = this.subscriptions.length;
    if (r)
      if (r === 1)
        this.subscriptions[0](e, n, s);
      else
        for (let i = 0; i < r; i++) {
          const o = this.subscriptions[i];
          o && o(e, n, s);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function at(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const We = 30, dn = (t) => !isNaN(parseFloat(t));
class pn {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(e, n = {}) {
    this.version = "11.18.2", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s, r = !0) => {
      const i = I.now();
      this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), r && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = I.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = dn(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(e) {
    return process.env.NODE_ENV !== "production" && $t(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new hn());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), E.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events)
      this.events[e].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(e, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(e, n) : this.passiveEffect(e, this.updateAndNotify);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(e, n = !0) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const e = I.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > We)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, We);
    return at(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function mn(t, e) {
  return new pn(t, e);
}
function gn(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, mn(n));
}
function yn(t, e) {
  const n = Me(t, e);
  let { transitionEnd: s = {}, transition: r = {}, ...i } = n || {};
  i = { ...i, ...s };
  for (const o in i) {
    const a = Yt(i[o]);
    gn(t, o, a);
  }
}
function vn(t) {
  return !!(Xt(t) && t.add);
}
function bn(t, e) {
  const n = t.getValue("willChange");
  if (vn(n))
    return n.add(e);
}
function Tn(t) {
  return t.props[Ut];
}
const lt = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, An = 1e-7, xn = 12;
function Sn(t, e, n, s, r) {
  let i, o, a = 0;
  do
    o = e + (n - e) / 2, i = lt(o, s, r) - t, i > 0 ? n = o : e = o;
  while (Math.abs(i) > An && ++a < xn);
  return o;
}
function Z(t, e, n, s) {
  if (t === e && n === s)
    return k;
  const r = (i) => Sn(i, 0, 1, t, n);
  return (i) => i === 0 || i === 1 ? i : lt(r(i), e, s);
}
const ct = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, ut = (t) => (e) => 1 - t(1 - e), ft = /* @__PURE__ */ Z(0.33, 1.53, 0.69, 0.99), De = /* @__PURE__ */ ut(ft), ht = /* @__PURE__ */ ct(De), dt = (t) => (t *= 2) < 1 ? 0.5 * De(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), Ce = (t) => 1 - Math.sin(Math.acos(t)), wn = ut(Ce), pt = ct(Ce), Mn = (t) => /^0[^.\s]+$/u.test(t);
function Vn(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Mn(t) : !0;
}
const G = (t) => Math.round(t * 1e5) / 1e5, Fe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Pn(t) {
  return t == null;
}
const Dn = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Re = (t, e) => (n) => !!(typeof n == "string" && Dn.test(n) && n.startsWith(t) || e && !Pn(n) && Object.prototype.hasOwnProperty.call(n, e)), mt = (t, e, n) => (s) => {
  if (typeof s != "string")
    return s;
  const [r, i, o, a] = s.match(Fe);
  return {
    [t]: parseFloat(r),
    [e]: parseFloat(i),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Cn = (t) => B(0, 255, t), le = {
  ...z,
  transform: (t) => Math.round(Cn(t))
}, K = {
  test: /* @__PURE__ */ Re("rgb", "red"),
  parse: /* @__PURE__ */ mt("red", "green", "blue"),
  transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + le.transform(t) + ", " + le.transform(e) + ", " + le.transform(n) + ", " + G(q.transform(s)) + ")"
};
function Fn(t) {
  let e = "", n = "", s = "", r = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), r = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), r = t.substring(4, 5), e += e, n += n, s += s, r += r), {
    red: parseInt(e, 16),
    green: parseInt(n, 16),
    blue: parseInt(s, 16),
    alpha: r ? parseInt(r, 16) / 255 : 1
  };
}
const pe = {
  test: /* @__PURE__ */ Re("#"),
  parse: Fn,
  transform: K.transform
}, _ = {
  test: /* @__PURE__ */ Re("hsl", "hue"),
  parse: /* @__PURE__ */ mt("hue", "saturation", "lightness"),
  transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + W.transform(G(e)) + ", " + W.transform(G(n)) + ", " + G(q.transform(s)) + ")"
}, w = {
  test: (t) => K.test(t) || pe.test(t) || _.test(t),
  parse: (t) => K.test(t) ? K.parse(t) : _.test(t) ? _.parse(t) : pe.parse(t),
  transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? K.transform(t) : _.transform(t)
}, Rn = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function On(t) {
  var e, n;
  return isNaN(t) && typeof t == "string" && (((e = t.match(Fe)) === null || e === void 0 ? void 0 : e.length) || 0) + (((n = t.match(Rn)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const gt = "number", yt = "color", kn = "var", Kn = "var(", $e = "${}", In = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Y(t) {
  const e = t.toString(), n = [], s = {
    color: [],
    number: [],
    var: []
  }, r = [];
  let i = 0;
  const a = e.replace(In, (c) => (w.test(c) ? (s.color.push(i), r.push(yt), n.push(w.parse(c))) : c.startsWith(Kn) ? (s.var.push(i), r.push(kn), n.push(c)) : (s.number.push(i), r.push(gt), n.push(parseFloat(c))), ++i, $e)).split($e);
  return { values: n, split: a, indexes: s, types: r };
}
function vt(t) {
  return Y(t).values;
}
function bt(t) {
  const { split: e, types: n } = Y(t), s = e.length;
  return (r) => {
    let i = "";
    for (let o = 0; o < s; o++)
      if (i += e[o], r[o] !== void 0) {
        const a = n[o];
        a === gt ? i += G(r[o]) : a === yt ? i += w.transform(r[o]) : i += r[o];
      }
    return i;
  };
}
const Nn = (t) => typeof t == "number" ? 0 : t;
function En(t) {
  const e = vt(t);
  return bt(t)(e.map(Nn));
}
const ie = {
  test: On,
  parse: vt,
  createTransformer: bt,
  getAnimatableNone: En
}, Bn = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function _n(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow")
    return t;
  const [s] = n.match(Fe) || [];
  if (!s)
    return t;
  const r = n.replace(s, "");
  let i = Bn.has(e) ? 1 : 0;
  return s !== n && (i *= 100), e + "(" + i + r + ")";
}
const Wn = /\b([a-z-]*)\(.*?\)/gu, me = {
  ...ie,
  getAnimatableNone: (t) => {
    const e = t.match(Wn);
    return e ? e.map(_n).join(" ") : t;
  }
}, $n = {
  ...nn,
  // Color props
  color: w,
  backgroundColor: w,
  outlineColor: w,
  fill: w,
  stroke: w,
  // Border props
  borderColor: w,
  borderTopColor: w,
  borderRightColor: w,
  borderBottomColor: w,
  borderLeftColor: w,
  filter: me,
  WebkitFilter: me
}, Ln = (t) => $n[t];
function zn(t, e) {
  let n = Ln(t);
  return n !== me && (n = ie), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const Un = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Gn(t, e, n) {
  let s = 0, r;
  for (; s < t.length && !r; ) {
    const i = t[s];
    typeof i == "string" && !Un.has(i) && Y(i).values.length && (r = t[s]), s++;
  }
  if (r && n)
    for (const i of e)
      t[i] = zn(n, r);
}
const Le = (t) => t === z || t === h, ze = (t, e) => parseFloat(t.split(", ")[e]), Ue = (t, e) => (n, { transform: s }) => {
  if (s === "none" || !s)
    return 0;
  const r = s.match(/^matrix3d\((.+)\)$/u);
  if (r)
    return ze(r[1], e);
  {
    const i = s.match(/^matrix\((.+)\)$/u);
    return i ? ze(i[1], t) : 0;
  }
}, qn = /* @__PURE__ */ new Set(["x", "y", "z"]), Yn = Se.filter((t) => !qn.has(t));
function Xn(t) {
  const e = [];
  return Yn.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const L = {
  // Dimensions
  width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n),
  top: (t, { top: e }) => parseFloat(e),
  left: (t, { left: e }) => parseFloat(e),
  bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
  right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
  // Transform
  x: Ue(4, 13),
  y: Ue(5, 14)
};
L.translateX = L.x;
L.translateY = L.y;
const N = /* @__PURE__ */ new Set();
let ge = !1, ye = !1;
function Tt() {
  if (ye) {
    const t = Array.from(N).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const r = Xn(s);
      r.length && (n.set(s, r), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const r = n.get(s);
      r && r.forEach(([i, o]) => {
        var a;
        (a = s.getValue(i)) === null || a === void 0 || a.set(o);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  ye = !1, ge = !1, N.forEach((t) => t.complete()), N.clear();
}
function At() {
  N.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (ye = !0);
  });
}
function jn() {
  At(), Tt();
}
class xt {
  constructor(e, n, s, r, i, o = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = r, this.element = i, this.isAsync = o;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (N.add(this), ge || (ge = !0, E.read(At), E.resolveKeyframes(Tt))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: r } = this;
    for (let i = 0; i < e.length; i++)
      if (e[i] === null)
        if (i === 0) {
          const o = r == null ? void 0 : r.get(), a = e[e.length - 1];
          if (o !== void 0)
            e[0] = o;
          else if (s && n) {
            const c = s.readValue(n, a);
            c != null && (e[0] = c);
          }
          e[0] === void 0 && (e[0] = a), r && o === void 0 && r.set(e[0]);
        } else
          e[i] = e[i - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), N.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, N.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Zn = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t), Hn = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Jn(t) {
  const e = Hn.exec(t);
  if (!e)
    return [,];
  const [, n, s, r] = e;
  return [`--${n ?? s}`, r];
}
const Qn = 4;
function St(t, e, n = 1) {
  $(n <= Qn, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
  const [s, r] = Jn(t);
  if (!s)
    return;
  const i = window.getComputedStyle(e).getPropertyValue(s);
  if (i) {
    const o = i.trim();
    return Zn(o) ? parseFloat(o) : o;
  }
  return we(r) ? St(r, e, n + 1) : r;
}
const es = (t) => (e) => e.test(t), ts = {
  test: (t) => t === "auto",
  parse: (t) => t
}, ns = [z, h, W, R, Qt, Jt, ts], Ge = (t) => ns.find(es(t));
class ss extends xt {
  constructor(e, n, s, r, i) {
    super(e, n, s, r, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < e.length; c++) {
      let l = e[c];
      if (typeof l == "string" && (l = l.trim(), we(l))) {
        const u = St(l, n.current);
        u !== void 0 && (e[c] = u), c === e.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !ot.has(s) || e.length !== 2)
      return;
    const [r, i] = e, o = Ge(r), a = Ge(i);
    if (o !== a)
      if (Le(o) && Le(a))
        for (let c = 0; c < e.length; c++) {
          const l = e[c];
          typeof l == "string" && (e[c] = parseFloat(l));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let r = 0; r < e.length; r++)
      Vn(e[r]) && s.push(r);
    s.length && Gn(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current)
      return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = L[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const r = n[n.length - 1];
    r !== void 0 && e.getValue(s, r).jump(r, !1);
  }
  measureEndState() {
    var e;
    const { element: n, name: s, unresolvedKeyframes: r } = this;
    if (!n || !n.current)
      return;
    const i = n.getValue(s);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1, a = r[o];
    r[o] = L[s](n.measureViewportBox(), window.getComputedStyle(n.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), !((e = this.removedTransforms) === null || e === void 0) && e.length && this.removedTransforms.forEach(([c, l]) => {
      n.getValue(c).set(l);
    }), this.resolveNoneKeyframes();
  }
}
const qe = (t, e) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(ie.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url("));
function rs(t) {
  const e = t[0];
  if (t.length === 1)
    return !0;
  for (let n = 0; n < t.length; n++)
    if (t[n] !== e)
      return !0;
}
function is(t, e, n, s) {
  const r = t[0];
  if (r === null)
    return !1;
  if (e === "display" || e === "visibility")
    return !0;
  const i = t[t.length - 1], o = qe(r, e), a = qe(i, e);
  return X(o === a, `You are trying to animate ${e} from "${r}" to "${i}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${i} via the \`style\` property.`), !o || !a ? !1 : rs(t) || (n === "spring" || Ve(n)) && s;
}
const os = (t) => t !== null;
function oe(t, { repeat: e, repeatType: n = "loop" }, s) {
  const r = t.filter(os), i = e && n !== "loop" && e % 2 === 1 ? 0 : r.length - 1;
  return !i || s === void 0 ? r[i] : s;
}
const as = 40;
class wt {
  constructor({ autoplay: e = !0, delay: n = 0, type: s = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: o = "loop", ...a }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = I.now(), this.options = {
      autoplay: e,
      delay: n,
      type: s,
      repeat: r,
      repeatDelay: i,
      repeatType: o,
      ...a
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > as ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && jn(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(e, n) {
    this.resolvedAt = I.now(), this.hasAttemptedResolve = !0;
    const { name: s, type: r, velocity: i, delay: o, onComplete: a, onUpdate: c, isGenerator: l } = this.options;
    if (!l && !is(e, s, r, i))
      if (o)
        this.options.duration = 0;
      else {
        c && c(oe(e, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(e, n);
    u !== !1 && (this._resolved = {
      keyframes: e,
      finalKeyframe: n,
      ...u
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(e, n) {
    return this.currentFinishedPromise.then(e, n);
  }
  flatten() {
    this.options.type = "keyframes", this.options.ease = "linear";
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((e) => {
      this.resolveFinishedPromise = e;
    });
  }
}
const ae = (t, e, n) => t + (e - t) * n;
function ce(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function ls({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let r = 0, i = 0, o = 0;
  if (!e)
    r = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, c = 2 * n - a;
    r = ce(c, a, t + 1 / 3), i = ce(c, a, t), o = ce(c, a, t - 1 / 3);
  }
  return {
    red: Math.round(r * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: s
  };
}
function ne(t, e) {
  return (n) => n > 0 ? e : t;
}
const ue = (t, e, n) => {
  const s = t * t, r = n * (e * e - s) + s;
  return r < 0 ? 0 : Math.sqrt(r);
}, cs = [pe, K, _], us = (t) => cs.find((e) => e.test(t));
function Ye(t) {
  const e = us(t);
  if (X(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e)
    return !1;
  let n = e.parse(t);
  return e === _ && (n = ls(n)), n;
}
const Xe = (t, e) => {
  const n = Ye(t), s = Ye(e);
  if (!n || !s)
    return ne(t, e);
  const r = { ...n };
  return (i) => (r.red = ue(n.red, s.red, i), r.green = ue(n.green, s.green, i), r.blue = ue(n.blue, s.blue, i), r.alpha = ae(n.alpha, s.alpha, i), K.transform(r));
}, fs = (t, e) => (n) => e(t(n)), Oe = (...t) => t.reduce(fs), ve = /* @__PURE__ */ new Set(["none", "hidden"]);
function hs(t, e) {
  return ve.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function ds(t, e) {
  return (n) => ae(t, e, n);
}
function ke(t) {
  return typeof t == "number" ? ds : typeof t == "string" ? we(t) ? ne : w.test(t) ? Xe : gs : Array.isArray(t) ? Mt : typeof t == "object" ? w.test(t) ? Xe : ps : ne;
}
function Mt(t, e) {
  const n = [...t], s = n.length, r = t.map((i, o) => ke(i)(i, e[o]));
  return (i) => {
    for (let o = 0; o < s; o++)
      n[o] = r[o](i);
    return n;
  };
}
function ps(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const r in n)
    t[r] !== void 0 && e[r] !== void 0 && (s[r] = ke(t[r])(t[r], e[r]));
  return (r) => {
    for (const i in s)
      n[i] = s[i](r);
    return n;
  };
}
function ms(t, e) {
  var n;
  const s = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i], a = t.indexes[o][r[o]], c = (n = t.values[a]) !== null && n !== void 0 ? n : 0;
    s[i] = c, r[o]++;
  }
  return s;
}
const gs = (t, e) => {
  const n = ie.createTransformer(e), s = Y(t), r = Y(e);
  return s.indexes.var.length === r.indexes.var.length && s.indexes.color.length === r.indexes.color.length && s.indexes.number.length >= r.indexes.number.length ? ve.has(t) && !r.values.length || ve.has(e) && !s.values.length ? hs(t, e) : Oe(Mt(ms(s, r), r.values), n) : (X(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), ne(t, e));
};
function Vt(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? ae(t, e, n) : ke(t)(t, e);
}
const ys = 5;
function Pt(t, e, n) {
  const s = Math.max(e - ys, 0);
  return at(n - t(s), e - s);
}
const T = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, fe = 1e-3;
function vs({ duration: t = T.duration, bounce: e = T.bounce, velocity: n = T.velocity, mass: s = T.mass }) {
  let r, i;
  X(t <= /* @__PURE__ */ F(T.maxDuration), "Spring duration must be 10 seconds or less");
  let o = 1 - e;
  o = B(T.minDamping, T.maxDamping, o), t = B(T.minDuration, T.maxDuration, /* @__PURE__ */ O(t)), o < 1 ? (r = (l) => {
    const u = l * o, f = u * t, d = u - n, v = be(l, o), A = Math.exp(-f);
    return fe - d / v * A;
  }, i = (l) => {
    const f = l * o * t, d = f * n + n, v = Math.pow(o, 2) * Math.pow(l, 2) * t, A = Math.exp(-f), y = be(Math.pow(l, 2), o);
    return (-r(l) + fe > 0 ? -1 : 1) * ((d - v) * A) / y;
  }) : (r = (l) => {
    const u = Math.exp(-l * t), f = (l - n) * t + 1;
    return -fe + u * f;
  }, i = (l) => {
    const u = Math.exp(-l * t), f = (n - l) * (t * t);
    return u * f;
  });
  const a = 5 / t, c = Ts(r, i, a);
  if (t = /* @__PURE__ */ F(t), isNaN(c))
    return {
      stiffness: T.stiffness,
      damping: T.damping,
      duration: t
    };
  {
    const l = Math.pow(c, 2) * s;
    return {
      stiffness: l,
      damping: o * 2 * Math.sqrt(s * l),
      duration: t
    };
  }
}
const bs = 12;
function Ts(t, e, n) {
  let s = n;
  for (let r = 1; r < bs; r++)
    s = s - t(s) / e(s);
  return s;
}
function be(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const As = ["duration", "bounce"], xs = ["stiffness", "damping", "mass"];
function je(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function Ss(t) {
  let e = {
    velocity: T.velocity,
    stiffness: T.stiffness,
    damping: T.damping,
    mass: T.mass,
    isResolvedFromDuration: !1,
    ...t
  };
  if (!je(t, xs) && je(t, As))
    if (t.visualDuration) {
      const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), r = s * s, i = 2 * B(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
      e = {
        ...e,
        mass: T.mass,
        stiffness: r,
        damping: i
      };
    } else {
      const n = vs(t);
      e = {
        ...e,
        ...n,
        mass: T.mass
      }, e.isResolvedFromDuration = !0;
    }
  return e;
}
function Dt(t = T.visualDuration, e = T.bounce) {
  const n = typeof t != "object" ? {
    visualDuration: t,
    keyframes: [0, 1],
    bounce: e
  } : t;
  let { restSpeed: s, restDelta: r } = n;
  const i = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: c, damping: l, mass: u, duration: f, velocity: d, isResolvedFromDuration: v } = Ss({
    ...n,
    velocity: -/* @__PURE__ */ O(n.velocity || 0)
  }), A = d || 0, y = l / (2 * Math.sqrt(c * u)), b = o - i, g = /* @__PURE__ */ O(Math.sqrt(c / u)), S = Math.abs(b) < 5;
  s || (s = S ? T.restSpeed.granular : T.restSpeed.default), r || (r = S ? T.restDelta.granular : T.restDelta.default);
  let V;
  if (y < 1) {
    const p = be(g, y);
    V = (x) => {
      const M = Math.exp(-y * g * x);
      return o - M * ((A + y * g * b) / p * Math.sin(p * x) + b * Math.cos(p * x));
    };
  } else if (y === 1)
    V = (p) => o - Math.exp(-g * p) * (b + (A + g * b) * p);
  else {
    const p = g * Math.sqrt(y * y - 1);
    V = (x) => {
      const M = Math.exp(-y * g * x), m = Math.min(p * x, 300);
      return o - M * ((A + y * g * b) * Math.sinh(m) + p * b * Math.cosh(m)) / p;
    };
  }
  const P = {
    calculatedDuration: v && f || null,
    next: (p) => {
      const x = V(p);
      if (v)
        a.done = p >= f;
      else {
        let M = 0;
        y < 1 && (M = p === 0 ? /* @__PURE__ */ F(A) : Pt(V, p, x));
        const m = Math.abs(M) <= s, D = Math.abs(o - x) <= r;
        a.done = m && D;
      }
      return a.value = a.done ? o : x, a;
    },
    toString: () => {
      const p = Math.min(nt(P), he), x = st((M) => P.next(p * M).value, p, 30);
      return p + "ms " + x;
    }
  };
  return P;
}
function Ze({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: r = 10, bounceStiffness: i = 500, modifyTarget: o, min: a, max: c, restDelta: l = 0.5, restSpeed: u }) {
  const f = t[0], d = {
    done: !1,
    value: f
  }, v = (m) => a !== void 0 && m < a || c !== void 0 && m > c, A = (m) => a === void 0 ? c : c === void 0 || Math.abs(a - m) < Math.abs(c - m) ? a : c;
  let y = n * e;
  const b = f + y, g = o === void 0 ? b : o(b);
  g !== b && (y = g - f);
  const S = (m) => -y * Math.exp(-m / s), V = (m) => g + S(m), P = (m) => {
    const D = S(m), C = V(m);
    d.done = Math.abs(D) <= l, d.value = d.done ? g : C;
  };
  let p, x;
  const M = (m) => {
    v(d.value) && (p = m, x = Dt({
      keyframes: [d.value, A(d.value)],
      velocity: Pt(V, m, d.value),
      // TODO: This should be passing * 1000
      damping: r,
      stiffness: i,
      restDelta: l,
      restSpeed: u
    }));
  };
  return M(0), {
    calculatedDuration: null,
    next: (m) => {
      let D = !1;
      return !x && p === void 0 && (D = !0, P(m), M(m)), p !== void 0 && m >= p ? x.next(m - p) : (!D && P(m), d);
    }
  };
}
const ws = /* @__PURE__ */ Z(0.42, 0, 1, 1), Ms = /* @__PURE__ */ Z(0, 0, 0.58, 1), Ct = /* @__PURE__ */ Z(0.42, 0, 0.58, 1), Vs = (t) => Array.isArray(t) && typeof t[0] != "number", He = {
  linear: k,
  easeIn: ws,
  easeInOut: Ct,
  easeOut: Ms,
  circIn: Ce,
  circInOut: pt,
  circOut: wn,
  backIn: De,
  backInOut: ht,
  backOut: ft,
  anticipate: dt
}, Je = (t) => {
  if (Pe(t)) {
    $(t.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [e, n, s, r] = t;
    return Z(e, n, s, r);
  } else if (typeof t == "string")
    return $(He[t] !== void 0, `Invalid easing type '${t}'`), He[t];
  return t;
};
function Ps(t, e, n) {
  const s = [], r = n || Vt, i = t.length - 1;
  for (let o = 0; o < i; o++) {
    let a = r(t[o], t[o + 1]);
    if (e) {
      const c = Array.isArray(e) ? e[o] || k : e;
      a = Oe(c, a);
    }
    s.push(a);
  }
  return s;
}
function Ds(t, e, { clamp: n = !0, ease: s, mixer: r } = {}) {
  const i = t.length;
  if ($(i === e.length, "Both input and output ranges must be the same length"), i === 1)
    return () => e[0];
  if (i === 2 && e[0] === e[1])
    return () => e[1];
  const o = t[0] === t[1];
  t[0] > t[i - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = Ps(e, s, r), c = a.length, l = (u) => {
    if (o && u < t[0])
      return e[0];
    let f = 0;
    if (c > 1)
      for (; f < t.length - 2 && !(u < t[f + 1]); f++)
        ;
    const d = /* @__PURE__ */ xe(t[f], t[f + 1], u);
    return a[f](d);
  };
  return n ? (u) => l(B(t[0], t[i - 1], u)) : l;
}
function Cs(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const r = /* @__PURE__ */ xe(0, e, s);
    t.push(ae(n, 1, r));
  }
}
function Fs(t) {
  const e = [0];
  return Cs(e, t.length - 1), e;
}
function Rs(t, e) {
  return t.map((n) => n * e);
}
function Os(t, e) {
  return t.map(() => e || Ct).splice(0, t.length - 1);
}
function se({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const r = Vs(s) ? s.map(Je) : Je(s), i = {
    done: !1,
    value: e[0]
  }, o = Rs(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === e.length ? n : Fs(e),
    t
  ), a = Ds(o, e, {
    ease: Array.isArray(r) ? r : Os(e, r)
  });
  return {
    calculatedDuration: t,
    next: (c) => (i.value = a(c), i.done = c >= t, i)
  };
}
const ks = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return {
    start: () => E.update(e, !0),
    stop: () => Wt(e),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ee.isProcessing ? ee.timestamp : I.now()
  };
}, Ks = {
  decay: Ze,
  inertia: Ze,
  tween: se,
  keyframes: se,
  spring: Dt
}, Is = (t) => t / 100;
class Ke extends wt {
  constructor(e) {
    super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: s, element: r, keyframes: i } = this.options, o = (r == null ? void 0 : r.KeyframeResolver) || xt, a = (c, l) => this.onKeyframesResolved(c, l);
    this.resolver = new o(i, a, n, s, r), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
  }
  initPlayback(e) {
    const { type: n = "keyframes", repeat: s = 0, repeatDelay: r = 0, repeatType: i, velocity: o = 0 } = this.options, a = Ve(n) ? n : Ks[n] || se;
    let c, l;
    a !== se && typeof e[0] != "number" && (process.env.NODE_ENV !== "production" && $(e.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${e}`), c = Oe(Is, Vt(e[0], e[1])), e = [0, 100]);
    const u = a({ ...this.options, keyframes: e });
    i === "mirror" && (l = a({
      ...this.options,
      keyframes: [...e].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = nt(u));
    const { calculatedDuration: f } = u, d = f + r, v = d * (s + 1) - r;
    return {
      generator: u,
      mirroredGenerator: l,
      mapPercentToKeyframes: c,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: v
    };
  }
  onPostResolved() {
    const { autoplay: e = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !e ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(e, n = !1) {
    const { resolved: s } = this;
    if (!s) {
      const { keyframes: m } = this.options;
      return { done: !0, value: m[m.length - 1] };
    }
    const { finalKeyframe: r, generator: i, mirroredGenerator: o, mapPercentToKeyframes: a, keyframes: c, calculatedDuration: l, totalDuration: u, resolvedDuration: f } = s;
    if (this.startTime === null)
      return i.next(0);
    const { delay: d, repeat: v, repeatType: A, repeatDelay: y, onUpdate: b } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)), n ? this.currentTime = e : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
    const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1), S = this.speed >= 0 ? g < 0 : g > u;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = u);
    let V = this.currentTime, P = i;
    if (v) {
      const m = Math.min(this.currentTime, u) / f;
      let D = Math.floor(m), C = m % 1;
      !C && m >= 1 && (C = 1), C === 1 && D--, D = Math.min(D, v + 1), !!(D % 2) && (A === "reverse" ? (C = 1 - C, y && (C -= y / f)) : A === "mirror" && (P = o)), V = B(0, 1, C) * f;
    }
    const p = S ? { done: !1, value: c[0] } : P.next(V);
    a && (p.value = a(p.value));
    let { done: x } = p;
    !S && l !== null && (x = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
    return M && r !== void 0 && (p.value = oe(c, this.options, r)), b && b(p.value), M && this.finish(), p;
  }
  get duration() {
    const { resolved: e } = this;
    return e ? /* @__PURE__ */ O(e.calculatedDuration) : 0;
  }
  get time() {
    return /* @__PURE__ */ O(this.currentTime);
  }
  set time(e) {
    e = /* @__PURE__ */ F(e), this.currentTime = e, this.holdTime !== null || this.speed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = /* @__PURE__ */ O(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: e = ks, onPlay: n, startTime: s } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), n && n();
    const r = this.driver.now();
    this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = r) : this.startTime = s ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var e;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (e = this.currentTime) !== null && e !== void 0 ? e : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: e } = this.options;
    e && e();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, !0);
  }
}
const Ns = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]);
function Es(t, e, n, { delay: s = 0, duration: r = 300, repeat: i = 0, repeatType: o = "loop", ease: a = "easeInOut", times: c } = {}) {
  const l = { [e]: n };
  c && (l.offset = c);
  const u = it(a, r);
  return Array.isArray(u) && (l.easing = u), t.animate(l, {
    delay: s,
    duration: r,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  });
}
const Bs = /* @__PURE__ */ Ae(() => Object.hasOwnProperty.call(Element.prototype, "animate")), re = 10, _s = 2e4;
function Ws(t) {
  return Ve(t.type) || t.type === "spring" || !rt(t.ease);
}
function $s(t, e) {
  const n = new Ke({
    ...e,
    keyframes: t,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let s = { done: !1, value: t[0] };
  const r = [];
  let i = 0;
  for (; !s.done && i < _s; )
    s = n.sample(i), r.push(s.value), i += re;
  return {
    times: void 0,
    keyframes: r,
    duration: i - re,
    ease: "linear"
  };
}
const Ft = {
  anticipate: dt,
  backInOut: ht,
  circInOut: pt
};
function Ls(t) {
  return t in Ft;
}
class Qe extends wt {
  constructor(e) {
    super(e);
    const { name: n, motionValue: s, element: r, keyframes: i } = this.options;
    this.resolver = new ss(i, (o, a) => this.onKeyframesResolved(o, a), n, s, r), this.resolver.scheduleResolve();
  }
  initPlayback(e, n) {
    let { duration: s = 300, times: r, ease: i, type: o, motionValue: a, name: c, startTime: l } = this.options;
    if (!a.owner || !a.owner.current)
      return !1;
    if (typeof i == "string" && te() && Ls(i) && (i = Ft[i]), Ws(this.options)) {
      const { onComplete: f, onUpdate: d, motionValue: v, element: A, ...y } = this.options, b = $s(e, y);
      e = b.keyframes, e.length === 1 && (e[1] = e[0]), s = b.duration, r = b.times, i = b.ease, o = "keyframes";
    }
    const u = Es(a.owner.current, c, e, { ...this.options, duration: s, times: r, ease: i });
    return u.startTime = l ?? this.calcStartTime(), this.pendingTimeline ? (_e(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
      const { onComplete: f } = this.options;
      a.set(oe(e, this.options, n)), f && f(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: u,
      duration: s,
      times: r,
      type: o,
      ease: i,
      keyframes: e
    };
  }
  get duration() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { duration: n } = e;
    return /* @__PURE__ */ O(n);
  }
  get time() {
    const { resolved: e } = this;
    if (!e)
      return 0;
    const { animation: n } = e;
    return /* @__PURE__ */ O(n.currentTime || 0);
  }
  set time(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.currentTime = /* @__PURE__ */ F(e);
  }
  get speed() {
    const { resolved: e } = this;
    if (!e)
      return 1;
    const { animation: n } = e;
    return n.playbackRate;
  }
  set speed(e) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: s } = n;
    s.playbackRate = e;
  }
  get state() {
    const { resolved: e } = this;
    if (!e)
      return "idle";
    const { animation: n } = e;
    return n.playState;
  }
  get startTime() {
    const { resolved: e } = this;
    if (!e)
      return null;
    const { animation: n } = e;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(e) {
    if (!this._resolved)
      this.pendingTimeline = e;
    else {
      const { resolved: n } = this;
      if (!n)
        return k;
      const { animation: s } = n;
      _e(s, e);
    }
    return k;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n } = e;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: e } = this;
    if (!e)
      return;
    const { animation: n, keyframes: s, duration: r, type: i, ease: o, times: a } = e;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: l, onUpdate: u, onComplete: f, element: d, ...v } = this.options, A = new Ke({
        ...v,
        keyframes: s,
        duration: r,
        type: i,
        ease: o,
        times: a,
        isGenerator: !0
      }), y = /* @__PURE__ */ F(this.time);
      l.setWithVelocity(A.sample(y - re).value, A.sample(y).value, re);
    }
    const { onStop: c } = this.options;
    c && c(), this.cancel();
  }
  complete() {
    const { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    const { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    const { motionValue: n, name: s, repeatDelay: r, repeatType: i, damping: o, type: a } = e;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
      return !1;
    const { onUpdate: c, transformTemplate: l } = n.owner.getProps();
    return Bs() && s && Ns.has(s) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !c && !l && !r && i !== "mirror" && o !== 0 && a !== "inertia";
  }
}
const zs = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Us = (t) => ({
  type: "spring",
  stiffness: 550,
  damping: t === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Gs = {
  type: "keyframes",
  duration: 0.8
}, qs = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ys = (t, { keyframes: e }) => e.length > 2 ? Gs : jt.has(t) ? t.startsWith("scale") ? Us(e[1]) : zs : qs;
function Xs({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: r, repeat: i, repeatType: o, repeatDelay: a, from: c, elapsed: l, ...u }) {
  return !!Object.keys(u).length;
}
const js = (t, e, n, s = {}, r, i) => (o) => {
  const a = tt(s, t) || {}, c = a.delay || s.delay || 0;
  let { elapsed: l = 0 } = s;
  l = l - /* @__PURE__ */ F(c);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: e.getVelocity(),
    ...a,
    delay: -l,
    onUpdate: (d) => {
      e.set(d), a.onUpdate && a.onUpdate(d);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: t,
    motionValue: e,
    element: i ? void 0 : r
  };
  Xs(a) || (u = {
    ...u,
    ...Ys(t, u)
  }), u.duration && (u.duration = /* @__PURE__ */ F(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ F(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), f && !i && e.get() !== void 0) {
    const d = oe(u.keyframes, a);
    if (d !== void 0)
      return E.update(() => {
        u.onUpdate(d), u.onComplete();
      }), new on([]);
  }
  return !i && Qe.supports(u) ? new Qe(u) : new Ke(u);
};
function Zs({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== !0;
  return e[n] = !1, s;
}
function Rt(t, e, { delay: n = 0, transitionOverride: s, type: r } = {}) {
  var i;
  let { transition: o = t.getDefaultTransition(), transitionEnd: a, ...c } = e;
  s && (o = s);
  const l = [], u = r && t.animationState && t.animationState.getState()[r];
  for (const f in c) {
    const d = t.getValue(f, (i = t.latestValues[f]) !== null && i !== void 0 ? i : null), v = c[f];
    if (v === void 0 || u && Zs(u, f))
      continue;
    const A = {
      delay: n,
      ...tt(o || {}, f)
    };
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const g = Tn(t);
      if (g) {
        const S = window.MotionHandoffAnimation(g, f, E);
        S !== null && (A.startTime = S, y = !0);
      }
    }
    bn(t, f), d.start(js(f, d, v, t.shouldReduceMotion && ot.has(f) ? { type: !1 } : A, t, y));
    const b = d.animation;
    b && l.push(b);
  }
  return a && Promise.all(l).then(() => {
    E.update(() => {
      a && yn(t, a);
    });
  }), l;
}
function Te(t, e, n = {}) {
  var s;
  const r = Me(t, e, n.type === "exit" ? (s = t.presenceContext) === null || s === void 0 ? void 0 : s.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Rt(t, r, n)) : () => Promise.resolve(), a = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: f, staggerDirection: d } = i;
    return Hs(t, e, u + l, f, d, n);
  } : () => Promise.resolve(), { when: c } = i;
  if (c) {
    const [l, u] = c === "beforeChildren" ? [o, a] : [a, o];
    return l().then(() => u());
  } else
    return Promise.all([o(), a(n.delay)]);
}
function Hs(t, e, n = 0, s = 0, r = 1, i) {
  const o = [], a = (t.variantChildren.size - 1) * s, c = r === 1 ? (l = 0) => l * s : (l = 0) => a - l * s;
  return Array.from(t.variantChildren).sort(Js).forEach((l, u) => {
    l.notify("AnimationStart", e), o.push(Te(l, e, {
      ...i,
      delay: n + c(u)
    }).then(() => l.notify("AnimationComplete", e)));
  }), Promise.all(o);
}
function Js(t, e) {
  return t.sortNodePosition(e);
}
function or(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const r = e.map((i) => Te(t, i, n));
    s = Promise.all(r);
  } else if (typeof e == "string")
    s = Te(t, e, n);
  else {
    const r = typeof e == "function" ? Me(t, e, n.custom) : e;
    s = Promise.all(Rt(t, r, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
export {
  O as A,
  ae as B,
  xe as C,
  B as D,
  bn as E,
  js as F,
  W as G,
  k as H,
  ie as I,
  mn as J,
  un as K,
  fn as L,
  I as M,
  wn as N,
  tt as O,
  sr as P,
  Tn as Q,
  ns as R,
  hn as S,
  w as T,
  es as U,
  xt as V,
  Zn as W,
  Mn as X,
  zn as Y,
  ss as Z,
  Ln as _,
  or as a,
  nr as b,
  _t as c,
  It as d,
  X as e,
  E as f,
  Xt as g,
  rr as h,
  $ as i,
  jt as j,
  ir as k,
  Lt as l,
  qt as m,
  nn as n,
  Ut as o,
  h as p,
  Me as q,
  Gt as r,
  yn as s,
  Se as t,
  tr as u,
  ee as v,
  $t as w,
  Oe as x,
  Wt as y,
  F as z
};
