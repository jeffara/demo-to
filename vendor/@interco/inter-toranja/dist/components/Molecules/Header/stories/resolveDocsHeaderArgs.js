var u$1 = Object.defineProperty, a$2 = (pt, ne) => u$1(pt, "name", { value: ne, configurable: !0 }), y$2 = (() => {
  let pt;
  return typeof window < "u" ? pt = window : typeof globalThis < "u" ? pt = globalThis : typeof global < "u" ? pt = global : typeof self < "u" ? pt = self : pt = {}, pt;
})(), { LOGLEVEL: b$3 } = y$2, t$2 = {
  trace: 1,
  debug: 2,
  info: 3,
  warn: 4,
  error: 5,
  silent: 10
}, L$4 = b$3, i$1 = t$2[L$4] || t$2.info, s$3 = {
  trace: /* @__PURE__ */ a$2((pt, ...ne) => {
    i$1 <= t$2.trace && console.trace(pt, ...ne);
  }, "trace"),
  debug: /* @__PURE__ */ a$2((pt, ...ne) => {
    i$1 <= t$2.debug && console.debug(pt, ...ne);
  }, "debug"),
  info: /* @__PURE__ */ a$2((pt, ...ne) => {
    i$1 <= t$2.info && console.info(pt, ...ne);
  }, "info"),
  warn: /* @__PURE__ */ a$2((pt, ...ne) => {
    i$1 <= t$2.warn && console.warn(pt, ...ne);
  }, "warn"),
  error: /* @__PURE__ */ a$2((pt, ...ne) => {
    i$1 <= t$2.error && console.error(pt, ...ne);
  }, "error"),
  log: /* @__PURE__ */ a$2((pt, ...ne) => {
    i$1 < t$2.silent && console.log(pt, ...ne);
  }, "log")
}, c$1 = /* @__PURE__ */ new Set(), n$1 = /* @__PURE__ */ a$2((pt) => (ne, ...yt) => {
  if (!c$1.has(ne))
    return c$1.add(ne), s$3[pt](ne, ...yt);
}, "once");
n$1.clear = () => c$1.clear();
n$1.trace = n$1("trace");
n$1.debug = n$1("debug");
n$1.info = n$1("info");
n$1.warn = n$1("warn");
n$1.error = n$1("error");
n$1.log = n$1("log");
var m$1 = n$1("warn"), r$2 = /* @__PURE__ */ a$2((pt) => (...ne) => {
  let yt = [];
  if (ne.length) {
    let ir = /<span\s+style=(['"])([^'"]*)\1\s*>/gi, io = /<\/span>/gi, uo;
    for (yt.push(ne[0].replace(ir, "%c").replace(io, "%c")); uo = ir.exec(ne[0]); )
      yt.push(uo[2]), yt.push("");
    for (let fo = 1; fo < ne.length; fo++)
      yt.push(ne[fo]);
  }
  s$3[pt].apply(s$3, yt);
}, "pretty");
r$2.trace = r$2("trace");
r$2.debug = r$2("debug");
r$2.info = r$2("info");
r$2.warn = r$2("warn");
r$2.error = r$2("error");
var R$2 = /* @__PURE__ */ ((pt) => (pt.CHANNEL_WS_DISCONNECT = "channelWSDisconnect", pt.CHANNEL_CREATED = "channelCreated", pt.CONFIG_ERROR = "configError", pt.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", pt.STORY_SPECIFIED = "storySpecified", pt.SET_CONFIG = "setConfig", pt.SET_STORIES = "setStories", pt.SET_INDEX = "setIndex", pt.SET_CURRENT_STORY = "setCurrentStory", pt.CURRENT_STORY_WAS_SET = "currentStoryWasSet", pt.FORCE_RE_RENDER = "forceReRender", pt.FORCE_REMOUNT = "forceRemount", pt.PRELOAD_ENTRIES = "preloadStories", pt.STORY_PREPARED = "storyPrepared", pt.DOCS_PREPARED = "docsPrepared", pt.STORY_CHANGED = "storyChanged", pt.STORY_UNCHANGED = "storyUnchanged", pt.STORY_RENDERED = "storyRendered", pt.STORY_FINISHED = "storyFinished", pt.STORY_MISSING = "storyMissing", pt.STORY_ERRORED = "storyErrored", pt.STORY_THREW_EXCEPTION = "storyThrewException", pt.STORY_RENDER_PHASE_CHANGED = "storyRenderPhaseChanged", pt.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", pt.UNHANDLED_ERRORS_WHILE_PLAYING = "unhandledErrorsWhilePlaying", pt.UPDATE_STORY_ARGS = "updateStoryArgs", pt.STORY_ARGS_UPDATED = "storyArgsUpdated", pt.RESET_STORY_ARGS = "resetStoryArgs", pt.SET_FILTER = "setFilter", pt.SET_GLOBALS = "setGlobals", pt.UPDATE_GLOBALS = "updateGlobals", pt.GLOBALS_UPDATED = "globalsUpdated", pt.REGISTER_SUBSCRIPTION = "registerSubscription", pt.PREVIEW_KEYDOWN = "previewKeydown", pt.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", pt.SELECT_STORY = "selectStory", pt.STORIES_COLLAPSE_ALL = "storiesCollapseAll", pt.STORIES_EXPAND_ALL = "storiesExpandAll", pt.DOCS_RENDERED = "docsRendered", pt.SHARED_STATE_CHANGED = "sharedStateChanged", pt.SHARED_STATE_SET = "sharedStateSet", pt.NAVIGATE_URL = "navigateUrl", pt.UPDATE_QUERY_PARAMS = "updateQueryParams", pt.REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", pt.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", pt.SET_WHATS_NEW_CACHE = "setWhatsNewCache", pt.TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", pt.TELEMETRY_ERROR = "telemetryError", pt.FILE_COMPONENT_SEARCH_REQUEST = "fileComponentSearchRequest", pt.FILE_COMPONENT_SEARCH_RESPONSE = "fileComponentSearchResponse", pt.SAVE_STORY_REQUEST = "saveStoryRequest", pt.SAVE_STORY_RESPONSE = "saveStoryResponse", pt.ARGTYPES_INFO_REQUEST = "argtypesInfoRequest", pt.ARGTYPES_INFO_RESPONSE = "argtypesInfoResponse", pt.CREATE_NEW_STORYFILE_REQUEST = "createNewStoryfileRequest", pt.CREATE_NEW_STORYFILE_RESPONSE = "createNewStoryfileResponse", pt.TESTING_MODULE_CRASH_REPORT = "testingModuleCrashReport", pt.TESTING_MODULE_PROGRESS_REPORT = "testingModuleProgressReport", pt.TESTING_MODULE_RUN_REQUEST = "testingModuleRunRequest", pt.TESTING_MODULE_RUN_ALL_REQUEST = "testingModuleRunAllRequest", pt.TESTING_MODULE_CANCEL_TEST_RUN_REQUEST = "testingModuleCancelTestRunRequest", pt.TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE = "testingModuleCancelTestRunResponse", pt))(R$2 || {}), _$2 = R$2, {
  CHANNEL_WS_DISCONNECT: S$3,
  CHANNEL_CREATED: T$3,
  CONFIG_ERROR: N$1,
  CREATE_NEW_STORYFILE_REQUEST: O$2,
  CREATE_NEW_STORYFILE_RESPONSE: A$1,
  CURRENT_STORY_WAS_SET: r$1,
  DOCS_PREPARED: D$2,
  DOCS_RENDERED: I$3,
  FILE_COMPONENT_SEARCH_REQUEST: o$1,
  FILE_COMPONENT_SEARCH_RESPONSE: C$2,
  FORCE_RE_RENDER: L$3,
  FORCE_REMOUNT: P$4,
  GLOBALS_UPDATED: U$3,
  NAVIGATE_URL: G$3,
  PLAY_FUNCTION_THREW_EXCEPTION: a$1,
  UNHANDLED_ERRORS_WHILE_PLAYING: Y$3,
  PRELOAD_ENTRIES: t$1,
  PREVIEW_BUILDER_PROGRESS: d,
  PREVIEW_KEYDOWN: e,
  REGISTER_SUBSCRIPTION: H$3,
  RESET_STORY_ARGS: W$3,
  SELECT_STORY: l,
  SET_CONFIG: i,
  SET_CURRENT_STORY: p$1,
  SET_FILTER: F$3,
  SET_GLOBALS: u,
  SET_INDEX: M$2,
  SET_STORIES: s$2,
  SHARED_STATE_CHANGED: y$1,
  SHARED_STATE_SET: c,
  STORIES_COLLAPSE_ALL: g,
  STORIES_EXPAND_ALL: h$1,
  STORY_ARGS_UPDATED: f$2,
  STORY_CHANGED: Q$1,
  STORY_ERRORED: x$3,
  STORY_INDEX_INVALIDATED: m,
  STORY_MISSING: V$3,
  STORY_PREPARED: w$2,
  STORY_RENDER_PHASE_CHANGED: B$1,
  STORY_RENDERED: X$2,
  STORY_FINISHED: q$3,
  STORY_SPECIFIED: b$2,
  STORY_THREW_EXCEPTION: K$3,
  STORY_UNCHANGED: j$3,
  UPDATE_GLOBALS: k$3,
  UPDATE_QUERY_PARAMS: n,
  UPDATE_STORY_ARGS: z$2,
  REQUEST_WHATS_NEW_DATA: J$3,
  RESULT_WHATS_NEW_DATA: Z$1,
  SET_WHATS_NEW_CACHE: $$3,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: v$2,
  TELEMETRY_ERROR: EE,
  SAVE_STORY_REQUEST: RE,
  SAVE_STORY_RESPONSE: _E,
  ARGTYPES_INFO_REQUEST: SE,
  ARGTYPES_INFO_RESPONSE: TE,
  TESTING_MODULE_CRASH_REPORT: NE,
  TESTING_MODULE_PROGRESS_REPORT: OE,
  TESTING_MODULE_RUN_REQUEST: AE,
  TESTING_MODULE_RUN_ALL_REQUEST: rE,
  TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: DE,
  TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: IE
} = R$2;
const so$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ARGTYPES_INFO_REQUEST: SE,
  ARGTYPES_INFO_RESPONSE: TE,
  CHANNEL_CREATED: T$3,
  CHANNEL_WS_DISCONNECT: S$3,
  CONFIG_ERROR: N$1,
  CREATE_NEW_STORYFILE_REQUEST: O$2,
  CREATE_NEW_STORYFILE_RESPONSE: A$1,
  CURRENT_STORY_WAS_SET: r$1,
  DOCS_PREPARED: D$2,
  DOCS_RENDERED: I$3,
  FILE_COMPONENT_SEARCH_REQUEST: o$1,
  FILE_COMPONENT_SEARCH_RESPONSE: C$2,
  FORCE_REMOUNT: P$4,
  FORCE_RE_RENDER: L$3,
  GLOBALS_UPDATED: U$3,
  NAVIGATE_URL: G$3,
  PLAY_FUNCTION_THREW_EXCEPTION: a$1,
  PRELOAD_ENTRIES: t$1,
  PREVIEW_BUILDER_PROGRESS: d,
  PREVIEW_KEYDOWN: e,
  REGISTER_SUBSCRIPTION: H$3,
  REQUEST_WHATS_NEW_DATA: J$3,
  RESET_STORY_ARGS: W$3,
  RESULT_WHATS_NEW_DATA: Z$1,
  SAVE_STORY_REQUEST: RE,
  SAVE_STORY_RESPONSE: _E,
  SELECT_STORY: l,
  SET_CONFIG: i,
  SET_CURRENT_STORY: p$1,
  SET_FILTER: F$3,
  SET_GLOBALS: u,
  SET_INDEX: M$2,
  SET_STORIES: s$2,
  SET_WHATS_NEW_CACHE: $$3,
  SHARED_STATE_CHANGED: y$1,
  SHARED_STATE_SET: c,
  STORIES_COLLAPSE_ALL: g,
  STORIES_EXPAND_ALL: h$1,
  STORY_ARGS_UPDATED: f$2,
  STORY_CHANGED: Q$1,
  STORY_ERRORED: x$3,
  STORY_FINISHED: q$3,
  STORY_INDEX_INVALIDATED: m,
  STORY_MISSING: V$3,
  STORY_PREPARED: w$2,
  STORY_RENDERED: X$2,
  STORY_RENDER_PHASE_CHANGED: B$1,
  STORY_SPECIFIED: b$2,
  STORY_THREW_EXCEPTION: K$3,
  STORY_UNCHANGED: j$3,
  TELEMETRY_ERROR: EE,
  TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: DE,
  TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: IE,
  TESTING_MODULE_CRASH_REPORT: NE,
  TESTING_MODULE_PROGRESS_REPORT: OE,
  TESTING_MODULE_RUN_ALL_REQUEST: rE,
  TESTING_MODULE_RUN_REQUEST: AE,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: v$2,
  UNHANDLED_ERRORS_WHILE_PLAYING: Y$3,
  UPDATE_GLOBALS: k$3,
  UPDATE_QUERY_PARAMS: n,
  UPDATE_STORY_ARGS: z$2,
  default: _$2
}, Symbol.toStringTag, { value: "Module" }));
var ae$1 = Object.create, ut$1 = Object.defineProperty, se$1 = Object.getOwnPropertyDescriptor, le$1 = Object.getOwnPropertyNames, ce$1 = Object.getPrototypeOf, pe = Object.prototype.hasOwnProperty, a = (pt, ne) => ut$1(pt, "name", { value: ne, configurable: !0 }), H$2 = /* @__PURE__ */ ((pt) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(pt, {
  get: (ne, yt) => (typeof require < "u" ? require : ne)[yt]
}) : pt)(function(pt) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + pt + '" is not supported');
}), ue = (pt, ne) => () => (ne || pt((ne = { exports: {} }).exports, ne), ne.exports), fe$1 = (pt, ne, yt, ir) => {
  if (ne && typeof ne == "object" || typeof ne == "function")
    for (let io of le$1(ne))
      !pe.call(pt, io) && io !== yt && ut$1(pt, io, { get: () => ne[io], enumerable: !(ir = se$1(ne, io)) || ir.enumerable });
  return pt;
}, he$1 = (pt, ne, yt) => (yt = pt != null ? ae$1(ce$1(pt)) : {}, fe$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  ut$1(yt, "default", { value: pt, enumerable: !0 }),
  pt
)), xt$1 = ue((pt, ne) => {
  (function(yt) {
    if (typeof pt == "object" && typeof ne < "u")
      ne.exports = yt();
    else if (typeof define == "function" && define.amd)
      define([], yt);
    else {
      var ir;
      typeof window < "u" ? ir = window : typeof global < "u" ? ir = global : typeof self < "u" ? ir = self : ir = this, ir.memoizerific = yt();
    }
  })(function() {
    return (/* @__PURE__ */ a(function yt(ir, io, uo) {
      function fo(Oo, Po) {
        if (!io[Oo]) {
          if (!ir[Oo]) {
            var _o = typeof H$2 == "function" && H$2;
            if (!Po && _o) return _o(Oo, !0);
            if (Co) return Co(Oo, !0);
            var Io = new Error("Cannot find module '" + Oo + "'");
            throw Io.code = "MODULE_NOT_FOUND", Io;
          }
          var jo = io[Oo] = { exports: {} };
          ir[Oo][0].call(jo.exports, function(Lo) {
            var Ho = ir[Oo][1][Lo];
            return fo(Ho || Lo);
          }, jo, jo.exports, yt, ir, io, uo);
        }
        return io[Oo].exports;
      }
      a(fo, "s");
      for (var Co = typeof H$2 == "function" && H$2, xo = 0; xo < uo.length; xo++) fo(uo[xo]);
      return fo;
    }, "e"))({ 1: [function(yt, ir, io) {
      ir.exports = function(uo) {
        if (typeof Map != "function" || uo) {
          var fo = yt("./similar");
          return new fo();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(yt, ir, io) {
      function uo() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a(uo, "Similar"), uo.prototype.get = function(fo) {
        var Co;
        if (this.lastItem && this.isEqual(this.lastItem.key, fo))
          return this.lastItem.val;
        if (Co = this.indexOf(fo), Co >= 0)
          return this.lastItem = this.list[Co], this.list[Co].val;
      }, uo.prototype.set = function(fo, Co) {
        var xo;
        return this.lastItem && this.isEqual(this.lastItem.key, fo) ? (this.lastItem.val = Co, this) : (xo = this.indexOf(fo), xo >= 0 ? (this.lastItem = this.list[xo], this.list[xo].val = Co, this) : (this.lastItem = { key: fo, val: Co }, this.list.push(this.lastItem), this.size++, this));
      }, uo.prototype.delete = function(fo) {
        var Co;
        if (this.lastItem && this.isEqual(this.lastItem.key, fo) && (this.lastItem = void 0), Co = this.indexOf(fo), Co >= 0)
          return this.size--, this.list.splice(Co, 1)[0];
      }, uo.prototype.has = function(fo) {
        var Co;
        return this.lastItem && this.isEqual(this.lastItem.key, fo) ? !0 : (Co = this.indexOf(fo), Co >= 0 ? (this.lastItem = this.list[Co], !0) : !1);
      }, uo.prototype.forEach = function(fo, Co) {
        var xo;
        for (xo = 0; xo < this.size; xo++)
          fo.call(Co || this, this.list[xo].val, this.list[xo].key, this);
      }, uo.prototype.indexOf = function(fo) {
        var Co;
        for (Co = 0; Co < this.size; Co++)
          if (this.isEqual(this.list[Co].key, fo))
            return Co;
        return -1;
      }, uo.prototype.isEqual = function(fo, Co) {
        return fo === Co || fo !== fo && Co !== Co;
      }, ir.exports = uo;
    }, {}], 3: [function(yt, ir, io) {
      var uo = yt("map-or-similar");
      ir.exports = function(Oo) {
        var Po = new uo(!1), _o = [];
        return function(Io) {
          var jo = /* @__PURE__ */ a(function() {
            var Lo = Po, Ho, qo, Vo = arguments.length - 1, Mo = Array(Vo + 1), Uo = !0, zo;
            if ((jo.numArgs || jo.numArgs === 0) && jo.numArgs !== Vo + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (zo = 0; zo < Vo; zo++) {
              if (Mo[zo] = {
                cacheItem: Lo,
                arg: arguments[zo]
              }, Lo.has(arguments[zo])) {
                Lo = Lo.get(arguments[zo]);
                continue;
              }
              Uo = !1, Ho = new uo(!1), Lo.set(arguments[zo], Ho), Lo = Ho;
            }
            return Uo && (Lo.has(arguments[Vo]) ? qo = Lo.get(arguments[Vo]) : Uo = !1), Uo || (qo = Io.apply(null, arguments), Lo.set(arguments[Vo], qo)), Oo > 0 && (Mo[Vo] = {
              cacheItem: Lo,
              arg: arguments[Vo]
            }, Uo ? fo(_o, Mo) : _o.push(Mo), _o.length > Oo && Co(_o.shift())), jo.wasMemoized = Uo, jo.numArgs = Vo + 1, qo;
          }, "memoizerific");
          return jo.limit = Oo, jo.wasMemoized = !1, jo.cache = Po, jo.lru = _o, jo;
        };
      };
      function fo(Oo, Po) {
        var _o = Oo.length, Io = Po.length, jo, Lo, Ho;
        for (Lo = 0; Lo < _o; Lo++) {
          for (jo = !0, Ho = 0; Ho < Io; Ho++)
            if (!xo(Oo[Lo][Ho].arg, Po[Ho].arg)) {
              jo = !1;
              break;
            }
          if (jo)
            break;
        }
        Oo.push(Oo.splice(Lo, 1)[0]);
      }
      a(fo, "moveToMostRecentLru");
      function Co(Oo) {
        var Po = Oo.length, _o = Oo[Po - 1], Io, jo;
        for (_o.cacheItem.delete(_o.arg), jo = Po - 2; jo >= 0 && (_o = Oo[jo], Io = _o.cacheItem.get(_o.arg), !Io || !Io.size); jo--)
          _o.cacheItem.delete(_o.arg);
      }
      a(Co, "removeCachedResult");
      function xo(Oo, Po) {
        return Oo === Po || Oo !== Oo && Po !== Po;
      }
      a(xo, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
}), S$2 = (() => {
  let pt;
  return typeof window < "u" ? pt = window : typeof globalThis < "u" ? pt = globalThis : typeof global < "u" ? pt = global : typeof self < "u" ? pt = self : pt = {}, pt;
})();
function F$2(pt) {
  for (var ne = [], yt = 1; yt < arguments.length; yt++)
    ne[yt - 1] = arguments[yt];
  var ir = Array.from(typeof pt == "string" ? [pt] : pt);
  ir[ir.length - 1] = ir[ir.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var io = ir.reduce(function(Co, xo) {
    var Oo = xo.match(/\n([\t ]+|(?!\s).)/g);
    return Oo ? Co.concat(Oo.map(function(Po) {
      var _o, Io;
      return (Io = (_o = Po.match(/[\t ]/g)) === null || _o === void 0 ? void 0 : _o.length) !== null && Io !== void 0 ? Io : 0;
    })) : Co;
  }, []);
  if (io.length) {
    var uo = new RegExp(`
[	 ]{` + Math.min.apply(Math, io) + "}", "g");
    ir = ir.map(function(Co) {
      return Co.replace(uo, `
`);
    });
  }
  ir[0] = ir[0].replace(/^\r?\n/, "");
  var fo = ir[0];
  return ne.forEach(function(Co, xo) {
    var Oo = fo.match(/(?:^|\n)( *)$/), Po = Oo ? Oo[1] : "", _o = Co;
    typeof Co == "string" && Co.includes(`
`) && (_o = String(Co).split(`
`).map(function(Io, jo) {
      return jo === 0 ? Io : "" + Po + Io;
    }).join(`
`)), fo += _o + ir[xo + 1];
  }), fo;
}
a(F$2, "dedent");
var ft = /* @__PURE__ */ new Map(), ye = "UNIVERSAL_STORE:", x$2 = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED"
}, h = class rs {
  constructor(ne, yt) {
    if (this.debugging = !1, this.listeners = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set()]]), this.getState = /* @__PURE__ */ a(() => (this.debug("getState", { state: this.state }), this.state), "getState"), this.subscribe = /* @__PURE__ */ a((ir, io) => {
      let uo = typeof ir == "function", fo = uo ? "*" : ir, Co = uo ? ir : io;
      if (this.debug("subscribe", { eventType: fo, listener: Co }), !Co)
        throw new TypeError(
          `Missing first subscribe argument, or second if first is the event type, when subscribing to a UniversalStore with id '${this.id}'`
        );
      return this.listeners.has(fo) || this.listeners.set(fo, /* @__PURE__ */ new Set()), this.listeners.get(fo).add(Co), () => {
        var xo;
        this.debug("unsubscribe", { eventType: fo, listener: Co }), this.listeners.has(fo) && (this.listeners.get(fo).delete(Co), ((xo = this.listeners.get(fo)) == null ? void 0 : xo.size) === 0 && this.listeners.delete(fo));
      };
    }, "subscribe"), this.send = /* @__PURE__ */ a((ir) => {
      if (this.debug("send", { event: ir }), this.status !== rs.Status.READY)
        throw new TypeError(
          F$2`Cannot send event before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify(
            {
              event: ir,
              id: this.id,
              actor: this.actor,
              environment: this.environment
            },
            null,
            2
          )}`
        );
      this.emitToListeners(ir, { actor: this.actor }), this.emitToChannel(ir, { actor: this.actor });
    }, "send"), this.debugging = ne.debug ?? !1, !rs.isInternalConstructing)
      throw new TypeError(
        "UniversalStore is not constructable - use UniversalStore.create() instead"
      );
    if (rs.isInternalConstructing = !1, this.id = ne.id, this.actorId = Date.now().toString(36) + Math.random().toString(36).substring(2), this.actorType = ne.leader ? rs.ActorType.LEADER : rs.ActorType.FOLLOWER, this.state = ne.initialState, this.channelEventName = `${ye}${this.id}`, this.debug("constructor", {
      options: ne,
      environmentOverrides: yt,
      channelEventName: this.channelEventName
    }), this.actor.type === rs.ActorType.LEADER)
      this.syncing = {
        state: x$2.RESOLVED,
        promise: Promise.resolve()
      };
    else {
      let ir, io, uo = new Promise((fo, Co) => {
        ir = /* @__PURE__ */ a(() => {
          this.syncing.state === x$2.PENDING && (this.syncing.state = x$2.RESOLVED, fo());
        }, "syncingResolve"), io = /* @__PURE__ */ a((xo) => {
          this.syncing.state === x$2.PENDING && (this.syncing.state = x$2.REJECTED, Co(xo));
        }, "syncingReject");
      });
      this.syncing = {
        state: x$2.PENDING,
        promise: uo,
        resolve: ir,
        reject: io
      };
    }
    this.getState = this.getState.bind(this), this.setState = this.setState.bind(this), this.subscribe = this.subscribe.bind(this), this.onStateChange = this.onStateChange.bind(this), this.send = this.send.bind(this), this.emitToChannel = this.emitToChannel.bind(this), this.prepareThis = this.prepareThis.bind(this), this.emitToListeners = this.emitToListeners.bind(this), this.handleChannelEvents = this.handleChannelEvents.bind(
      this
    ), this.debug = this.debug.bind(this), this.channel = (yt == null ? void 0 : yt.channel) ?? rs.preparation.channel, this.environment = (yt == null ? void 0 : yt.environment) ?? rs.preparation.environment, this.channel && this.environment ? this.prepareThis({ channel: this.channel, environment: this.environment }) : rs.preparation.promise.then(this.prepareThis);
  }
  static setupPreparationPromise() {
    let ne, yt, ir = new Promise(
      (io, uo) => {
        ne = /* @__PURE__ */ a((fo) => {
          io(fo);
        }, "resolveRef"), yt = /* @__PURE__ */ a((...fo) => {
          uo(fo);
        }, "rejectRef");
      }
    );
    rs.preparation = {
      resolve: ne,
      reject: yt,
      promise: ir
    };
  }
  /** The actor object representing the store instance with a unique ID and a type */
  get actor() {
    return Object.freeze({
      id: this.actorId,
      type: this.actorType,
      environment: this.environment ?? rs.Environment.UNKNOWN
    });
  }
  /**
   * The current state of the store, that signals both if the store is prepared by Storybook and
   * also - in the case of a follower - if the state has been synced with the leader's state.
   */
  get status() {
    var ne;
    if (!this.channel || !this.environment)
      return rs.Status.UNPREPARED;
    switch ((ne = this.syncing) == null ? void 0 : ne.state) {
      case x$2.PENDING:
      case void 0:
        return rs.Status.SYNCING;
      case x$2.REJECTED:
        return rs.Status.ERROR;
      case x$2.RESOLVED:
      default:
        return rs.Status.READY;
    }
  }
  /**
   * A promise that resolves when the store is fully ready. A leader will be ready when the store
   * has been prepared by Storybook, which is almost instantly.
   *
   * A follower will be ready when the state has been synced with the leader's state, within a few
   * hundred milliseconds.
   */
  untilReady() {
    var ne;
    return Promise.all([rs.preparation.promise, (ne = this.syncing) == null ? void 0 : ne.promise]);
  }
  /** Creates a new instance of UniversalStore */
  static create(ne) {
    if (!ne || typeof (ne == null ? void 0 : ne.id) != "string")
      throw new TypeError("id is required and must be a string, when creating a UniversalStore");
    ne.debug && console.debug(
      F$2`[UniversalStore]
        create`,
      { options: ne }
    );
    let yt = ft.get(ne.id);
    if (yt)
      return console.warn(F$2`UniversalStore with id "${ne.id}" already exists in this environment, re-using existing.
        You should reuse the existing instance instead of trying to create a new one.`), yt;
    rs.isInternalConstructing = !0;
    let ir = new rs(ne);
    return ft.set(ne.id, ir), ir;
  }
  /**
   * Used by Storybook to set the channel for all instances of UniversalStore in the given
   * environment.
   *
   * @internal
   */
  static __prepare(ne, yt) {
    rs.preparation.channel = ne, rs.preparation.environment = yt, rs.preparation.resolve({ channel: ne, environment: yt });
  }
  /**
   * Updates the store's state
   *
   * Either a new state or a state updater function can be passed to the method.
   */
  setState(ne) {
    let yt = this.state, ir = typeof ne == "function" ? ne(yt) : ne;
    if (this.debug("setState", { newState: ir, previousState: yt, updater: ne }), this.status !== rs.Status.READY)
      throw new TypeError(
        F$2`Cannot set state before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify(
          {
            newState: ir,
            id: this.id,
            actor: this.actor,
            environment: this.environment
          },
          null,
          2
        )}`
      );
    this.state = ir;
    let io = {
      type: rs.InternalEventType.SET_STATE,
      payload: {
        state: ir,
        previousState: yt
      }
    };
    this.emitToChannel(io, { actor: this.actor }), this.emitToListeners(io, { actor: this.actor });
  }
  /**
   * Subscribes to state changes
   *
   * @returns Unsubscribe function
   */
  onStateChange(ne) {
    return this.debug("onStateChange", { listener: ne }), this.subscribe(
      rs.InternalEventType.SET_STATE,
      ({ payload: yt }, ir) => {
        ne(yt.state, yt.previousState, ir);
      }
    );
  }
  emitToChannel(ne, yt) {
    var ir;
    this.debug("emitToChannel", { event: ne, eventInfo: yt, channel: this.channel }), (ir = this.channel) == null || ir.emit(this.channelEventName, {
      event: ne,
      eventInfo: yt
    });
  }
  prepareThis({
    channel: ne,
    environment: yt
  }) {
    this.channel = ne, this.environment = yt, this.debug("prepared", { channel: ne, environment: yt }), this.channel.on(this.channelEventName, this.handleChannelEvents), this.actor.type === rs.ActorType.LEADER ? this.emitToChannel(
      { type: rs.InternalEventType.LEADER_CREATED },
      { actor: this.actor }
    ) : (this.emitToChannel(
      { type: rs.InternalEventType.FOLLOWER_CREATED },
      { actor: this.actor }
    ), this.emitToChannel(
      { type: rs.InternalEventType.EXISTING_STATE_REQUEST },
      { actor: this.actor }
    ), setTimeout(() => {
      this.syncing.reject(
        new TypeError(
          `No existing state found for follower with id: '${this.id}'. Make sure a leader with the same id exists before creating a follower.`
        )
      );
    }, 1e3));
  }
  emitToListeners(ne, yt) {
    let ir = this.listeners.get(ne.type), io = this.listeners.get("*");
    this.debug("emitToListeners", {
      event: ne,
      eventInfo: yt,
      eventTypeListeners: ir,
      everythingListeners: io
    }), [...ir ?? [], ...io ?? []].forEach(
      (uo) => uo(ne, yt)
    );
  }
  handleChannelEvents(ne) {
    var io, uo, fo, Co, xo;
    let { event: yt, eventInfo: ir } = ne;
    if ([ir.actor.id, (io = ir.forwardingActor) == null ? void 0 : io.id].includes(this.actor.id)) {
      this.debug("handleChannelEvents: Ignoring event from self", { channelEvent: ne });
      return;
    } else if (((uo = this.syncing) == null ? void 0 : uo.state) === x$2.PENDING && yt.type !== rs.InternalEventType.EXISTING_STATE_RESPONSE) {
      this.debug("handleChannelEvents: Ignoring event while syncing", { channelEvent: ne });
      return;
    }
    if (this.debug("handleChannelEvents", { channelEvent: ne }), this.actor.type === rs.ActorType.LEADER) {
      let Oo = !0;
      switch (yt.type) {
        case rs.InternalEventType.EXISTING_STATE_REQUEST:
          Oo = !1;
          let Po = {
            type: rs.InternalEventType.EXISTING_STATE_RESPONSE,
            payload: this.state
          };
          this.debug("handleChannelEvents: responding to existing state request", {
            responseEvent: Po
          }), this.emitToChannel(Po, { actor: this.actor });
          break;
        case rs.InternalEventType.LEADER_CREATED:
          Oo = !1, this.syncing.state = x$2.REJECTED, this.debug("handleChannelEvents: erroring due to second leader being created", {
            event: yt
          }), console.error(
            F$2`Detected multiple UniversalStore leaders created with the same id "${this.id}".
            Only one leader can exists at a time, your stores are now in an invalid state.
            Leaders detected:
            this: ${JSON.stringify(this.actor, null, 2)}
            other: ${JSON.stringify(ir.actor, null, 2)}`
          );
          break;
      }
      Oo && (this.debug("handleChannelEvents: forwarding event", { channelEvent: ne }), this.emitToChannel(yt, { actor: ir.actor, forwardingActor: this.actor }));
    }
    if (this.actor.type === rs.ActorType.FOLLOWER)
      switch (yt.type) {
        case rs.InternalEventType.EXISTING_STATE_RESPONSE:
          if (this.debug("handleChannelEvents: Setting state from leader's existing state response", {
            event: yt
          }), ((fo = this.syncing) == null ? void 0 : fo.state) !== x$2.PENDING)
            break;
          (xo = (Co = this.syncing).resolve) == null || xo.call(Co);
          let Oo = {
            type: rs.InternalEventType.SET_STATE,
            payload: {
              state: yt.payload,
              previousState: this.state
            }
          };
          this.state = yt.payload, this.emitToListeners(Oo, ir);
          break;
      }
    switch (yt.type) {
      case rs.InternalEventType.SET_STATE:
        this.debug("handleChannelEvents: Setting state", { event: yt }), this.state = yt.payload.state;
        break;
    }
    this.emitToListeners(yt, { actor: ir.actor });
  }
  debug(ne, yt) {
    this.debugging && console.debug(
      F$2`[UniversalStore::${this.id}::${this.environment ?? rs.Environment.UNKNOWN}]
        ${ne}`,
      JSON.stringify(
        {
          data: yt,
          actor: this.actor,
          state: this.state,
          status: this.status
        },
        null,
        2
      )
    );
  }
  /**
   * Used to reset the static fields of the UniversalStore class when cleaning up tests
   *
   * @internal
   */
  static __reset() {
    rs.preparation.reject(new Error("reset")), rs.setupPreparationPromise(), rs.isInternalConstructing = !1;
  }
};
a(h, "UniversalStore"), /**
* Defines the possible actor types in the store system
*
* @readonly
*/
h.ActorType = {
  LEADER: "LEADER",
  FOLLOWER: "FOLLOWER"
}, /**
* Defines the possible environments the store can run in
*
* @readonly
*/
h.Environment = {
  SERVER: "SERVER",
  MANAGER: "MANAGER",
  PREVIEW: "PREVIEW",
  UNKNOWN: "UNKNOWN",
  MOCK: "MOCK"
}, /**
* Internal event types used for store synchronization
*
* @readonly
*/
h.InternalEventType = {
  EXISTING_STATE_REQUEST: "__EXISTING_STATE_REQUEST",
  EXISTING_STATE_RESPONSE: "__EXISTING_STATE_RESPONSE",
  SET_STATE: "__SET_STATE",
  LEADER_CREATED: "__LEADER_CREATED",
  FOLLOWER_CREATED: "__FOLLOWER_CREATED"
}, h.Status = {
  UNPREPARED: "UNPREPARED",
  SYNCING: "SYNCING",
  READY: "READY",
  ERROR: "ERROR"
}, // This is used to check if constructor was called from the static factory create()
h.isInternalConstructing = !1, h.setupPreparationPromise();
var $$2 = h, de = /* @__PURE__ */ a((pt) => pt.transports !== void 0, "isMulti"), ge$1 = /* @__PURE__ */ a(() => Math.random().toString(16).slice(2), "generateRandomId"), ht$1 = class {
  constructor(ne = {}) {
    this.sender = ge$1(), this.events = {}, this.data = {}, this.transports = [], this.isAsync = ne.async || !1, de(ne) ? (this.transports = ne.transports || [], this.transports.forEach((yt) => {
      yt.setHandler((ir) => this.handleEvent(ir));
    })) : this.transports = ne.transport ? [ne.transport] : [], this.transports.forEach((yt) => {
      yt.setHandler((ir) => this.handleEvent(ir));
    });
  }
  get hasTransport() {
    return this.transports.length > 0;
  }
  addListener(ne, yt) {
    this.events[ne] = this.events[ne] || [], this.events[ne].push(yt);
  }
  emit(ne, ...yt) {
    let ir = { type: ne, args: yt, from: this.sender }, io = {};
    yt.length >= 1 && yt[0] && yt[0].options && (io = yt[0].options);
    let uo = /* @__PURE__ */ a(() => {
      this.transports.forEach((fo) => {
        fo.send(ir, io);
      }), this.handleEvent(ir);
    }, "handler");
    this.isAsync ? setImmediate(uo) : uo();
  }
  last(ne) {
    return this.data[ne];
  }
  eventNames() {
    return Object.keys(this.events);
  }
  listenerCount(ne) {
    let yt = this.listeners(ne);
    return yt ? yt.length : 0;
  }
  listeners(ne) {
    return this.events[ne] || void 0;
  }
  once(ne, yt) {
    let ir = this.onceListener(ne, yt);
    this.addListener(ne, ir);
  }
  removeAllListeners(ne) {
    ne ? this.events[ne] && delete this.events[ne] : this.events = {};
  }
  removeListener(ne, yt) {
    let ir = this.listeners(ne);
    ir && (this.events[ne] = ir.filter((io) => io !== yt));
  }
  on(ne, yt) {
    this.addListener(ne, yt);
  }
  off(ne, yt) {
    this.removeListener(ne, yt);
  }
  handleEvent(ne) {
    let yt = this.listeners(ne.type);
    yt && yt.length && yt.forEach((ir) => {
      ir.apply(ne, ne.args);
    }), this.data[ne.type] = ne.args;
  }
  onceListener(ne, yt) {
    let ir = /* @__PURE__ */ a((...io) => (this.removeListener(ne, ir), yt(...io)), "onceListener");
    return ir;
  }
};
a(ht$1, "Channel");
var B = ht$1, ve$1 = Object.create, Ot$1 = Object.defineProperty, me$1 = Object.getOwnPropertyDescriptor, Ct$1 = Object.getOwnPropertyNames, Ee$1 = Object.getPrototypeOf, be$1 = Object.prototype.hasOwnProperty, P$3 = /* @__PURE__ */ a((pt, ne) => /* @__PURE__ */ a(function() {
  return ne || (0, pt[Ct$1(pt)[0]])((ne = { exports: {} }).exports, ne), ne.exports;
}, "__require"), "__commonJS"), Se$1 = /* @__PURE__ */ a((pt, ne, yt, ir) => {
  if (ne && typeof ne == "object" || typeof ne == "function")
    for (let io of Ct$1(ne))
      !be$1.call(pt, io) && io !== yt && Ot$1(pt, io, { get: /* @__PURE__ */ a(() => ne[io], "get"), enumerable: !(ir = me$1(ne, io)) || ir.enumerable });
  return pt;
}, "__copyProps"), ot$1 = /* @__PURE__ */ a((pt, ne, yt) => (yt = pt != null ? ve$1(Ee$1(pt)) : {}, Se$1(
  ne || !pt || !pt.__esModule ? Ot$1(yt, "default", { value: pt, enumerable: !0 }) : yt,
  pt
)), "__toESM"), _e$1 = [
  "bubbles",
  "cancelBubble",
  "cancelable",
  "composed",
  "currentTarget",
  "defaultPrevented",
  "eventPhase",
  "isTrusted",
  "returnValue",
  "srcElement",
  "target",
  "timeStamp",
  "type"
], Te$1 = ["detail"];
function Pt(pt) {
  let ne = _e$1.filter((yt) => pt[yt] !== void 0).reduce((yt, ir) => ({ ...yt, [ir]: pt[ir] }), {});
  return pt instanceof CustomEvent && Te$1.filter((yt) => pt[yt] !== void 0).forEach((yt) => {
    ne[yt] = pt[yt];
  }), ne;
}
a(Pt, "extractEventHiddenProperties");
var Bt$1 = he$1(xt$1()), Ft = P$3({
  "node_modules/has-symbols/shams.js"(pt, ne) {
    ne.exports = /* @__PURE__ */ a(function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
      if (typeof Symbol.iterator == "symbol")
        return !0;
      var yt = {}, ir = Symbol("test"), io = Object(ir);
      if (typeof ir == "string" || Object.prototype.toString.call(ir) !== "[object Symbol]" || Object.prototype.toString.call(io) !== "[object Symbol]")
        return !1;
      var uo = 42;
      yt[ir] = uo;
      for (ir in yt)
        return !1;
      if (typeof Object.keys == "function" && Object.keys(yt).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
        yt
      ).length !== 0)
        return !1;
      var fo = Object.getOwnPropertySymbols(yt);
      if (fo.length !== 1 || fo[0] !== ir || !Object.prototype.propertyIsEnumerable.call(yt, ir))
        return !1;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var Co = Object.getOwnPropertyDescriptor(yt, ir);
        if (Co.value !== uo || Co.enumerable !== !0)
          return !1;
      }
      return !0;
    }, "hasSymbols");
  }
}), Mt$1 = P$3({
  "node_modules/has-symbols/index.js"(pt, ne) {
    var yt = typeof Symbol < "u" && Symbol, ir = Ft();
    ne.exports = /* @__PURE__ */ a(function() {
      return typeof yt != "function" || typeof Symbol != "function" || typeof yt("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ir();
    }, "hasNativeSymbols");
  }
}), Ae$1 = P$3({
  "node_modules/function-bind/implementation.js"(pt, ne) {
    var yt = "Function.prototype.bind called on incompatible ", ir = Array.prototype.slice, io = Object.prototype.toString, uo = "[object Function]";
    ne.exports = /* @__PURE__ */ a(function(fo) {
      var Co = this;
      if (typeof Co != "function" || io.call(Co) !== uo)
        throw new TypeError(yt + Co);
      for (var xo = ir.call(arguments, 1), Oo, Po = /* @__PURE__ */ a(function() {
        if (this instanceof Oo) {
          var Ho = Co.apply(
            this,
            xo.concat(ir.call(arguments))
          );
          return Object(Ho) === Ho ? Ho : this;
        } else
          return Co.apply(
            fo,
            xo.concat(ir.call(arguments))
          );
      }, "binder"), _o = Math.max(0, Co.length - xo.length), Io = [], jo = 0; jo < _o; jo++)
        Io.push("$" + jo);
      if (Oo = Function("binder", "return function (" + Io.join(",") + "){ return binder.apply(this,arguments); }")(Po), Co.prototype) {
        var Lo = /* @__PURE__ */ a(function() {
        }, "Empty2");
        Lo.prototype = Co.prototype, Oo.prototype = new Lo(), Lo.prototype = null;
      }
      return Oo;
    }, "bind");
  }
}), gt$1 = P$3({
  "node_modules/function-bind/index.js"(pt, ne) {
    var yt = Ae$1();
    ne.exports = Function.prototype.bind || yt;
  }
}), we$1 = P$3({
  "node_modules/has/src/index.js"(pt, ne) {
    var yt = gt$1();
    ne.exports = yt.call(Function.call, Object.prototype.hasOwnProperty);
  }
}), $t$1 = P$3({
  "node_modules/get-intrinsic/index.js"(pt, ne) {
    var yt, ir = SyntaxError, io = Function, uo = TypeError, fo = /* @__PURE__ */ a(function(es) {
      try {
        return io('"use strict"; return (' + es + ").constructor;")();
      } catch {
      }
    }, "getEvalledConstructor"), Co = Object.getOwnPropertyDescriptor;
    if (Co)
      try {
        Co({}, "");
      } catch {
        Co = null;
      }
    var xo = /* @__PURE__ */ a(function() {
      throw new uo();
    }, "throwTypeError"), Oo = Co ? (function() {
      try {
        return arguments.callee, xo;
      } catch {
        try {
          return Co(arguments, "callee").get;
        } catch {
          return xo;
        }
      }
    })() : xo, Po = Mt$1()(), _o = Object.getPrototypeOf || function(es) {
      return es.__proto__;
    }, Io = {}, jo = typeof Uint8Array > "u" ? yt : _o(Uint8Array), Lo = {
      "%AggregateError%": typeof AggregateError > "u" ? yt : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer > "u" ? yt : ArrayBuffer,
      "%ArrayIteratorPrototype%": Po ? _o([][Symbol.iterator]()) : yt,
      "%AsyncFromSyncIteratorPrototype%": yt,
      "%AsyncFunction%": Io,
      "%AsyncGenerator%": Io,
      "%AsyncGeneratorFunction%": Io,
      "%AsyncIteratorPrototype%": Io,
      "%Atomics%": typeof Atomics > "u" ? yt : Atomics,
      "%BigInt%": typeof BigInt > "u" ? yt : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView > "u" ? yt : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array > "u" ? yt : Float32Array,
      "%Float64Array%": typeof Float64Array > "u" ? yt : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? yt : FinalizationRegistry,
      "%Function%": io,
      "%GeneratorFunction%": Io,
      "%Int8Array%": typeof Int8Array > "u" ? yt : Int8Array,
      "%Int16Array%": typeof Int16Array > "u" ? yt : Int16Array,
      "%Int32Array%": typeof Int32Array > "u" ? yt : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": Po ? _o(_o([][Symbol.iterator]())) : yt,
      "%JSON%": typeof JSON == "object" ? JSON : yt,
      "%Map%": typeof Map > "u" ? yt : Map,
      "%MapIteratorPrototype%": typeof Map > "u" || !Po ? yt : _o((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise > "u" ? yt : Promise,
      "%Proxy%": typeof Proxy > "u" ? yt : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect > "u" ? yt : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set > "u" ? yt : Set,
      "%SetIteratorPrototype%": typeof Set > "u" || !Po ? yt : _o((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? yt : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": Po ? _o(""[Symbol.iterator]()) : yt,
      "%Symbol%": Po ? Symbol : yt,
      "%SyntaxError%": ir,
      "%ThrowTypeError%": Oo,
      "%TypedArray%": jo,
      "%TypeError%": uo,
      "%Uint8Array%": typeof Uint8Array > "u" ? yt : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? yt : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array > "u" ? yt : Uint16Array,
      "%Uint32Array%": typeof Uint32Array > "u" ? yt : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap > "u" ? yt : WeakMap,
      "%WeakRef%": typeof WeakRef > "u" ? yt : WeakRef,
      "%WeakSet%": typeof WeakSet > "u" ? yt : WeakSet
    }, Ho = /* @__PURE__ */ a(function es(gs) {
      var Fo;
      if (gs === "%AsyncFunction%")
        Fo = fo("async function () {}");
      else if (gs === "%GeneratorFunction%")
        Fo = fo("function* () {}");
      else if (gs === "%AsyncGeneratorFunction%")
        Fo = fo("async function* () {}");
      else if (gs === "%AsyncGenerator%") {
        var No = es("%AsyncGeneratorFunction%");
        No && (Fo = No.prototype);
      } else if (gs === "%AsyncIteratorPrototype%") {
        var Bo = es("%AsyncGenerator%");
        Bo && (Fo = _o(Bo.prototype));
      }
      return Lo[gs] = Fo, Fo;
    }, "doEval2"), qo = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }, Vo = gt$1(), Mo = we$1(), Uo = Vo.call(Function.call, Array.prototype.concat), zo = Vo.call(Function.apply, Array.prototype.splice), ms = Vo.call(
      Function.call,
      String.prototype.replace
    ), Xo = Vo.call(Function.call, String.prototype.slice), Ko = Vo.call(Function.call, RegExp.prototype.exec), bs = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Cs = /\\(\\)?/g, Es = /* @__PURE__ */ a(
      function(es) {
        var gs = Xo(es, 0, 1), Fo = Xo(es, -1);
        if (gs === "%" && Fo !== "%")
          throw new ir("invalid intrinsic syntax, expected closing `%`");
        if (Fo === "%" && gs !== "%")
          throw new ir("invalid intrinsic syntax, expected opening `%`");
        var No = [];
        return ms(es, bs, function(Bo, Wo, Yo, Ss) {
          No[No.length] = Yo ? ms(Ss, Cs, "$1") : Wo || Bo;
        }), No;
      },
      "stringToPath3"
    ), Ds = /* @__PURE__ */ a(function(es, gs) {
      var Fo = es, No;
      if (Mo(qo, Fo) && (No = qo[Fo], Fo = "%" + No[0] + "%"), Mo(Lo, Fo)) {
        var Bo = Lo[Fo];
        if (Bo === Io && (Bo = Ho(Fo)), typeof Bo > "u" && !gs)
          throw new uo("intrinsic " + es + " exists, but is not available. Please file an issue!");
        return {
          alias: No,
          name: Fo,
          value: Bo
        };
      }
      throw new ir("intrinsic " + es + " does not exist!");
    }, "getBaseIntrinsic2");
    ne.exports = /* @__PURE__ */ a(function(es, gs) {
      if (typeof es != "string" || es.length === 0)
        throw new uo("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof gs != "boolean")
        throw new uo('"allowMissing" argument must be a boolean');
      if (Ko(/^%?[^%]*%?$/, es) === null)
        throw new ir("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var Fo = Es(es), No = Fo.length > 0 ? Fo[0] : "", Bo = Ds("%" + No + "%", gs), Wo = Bo.name, Yo = Bo.value, Ss = !1, Fs = Bo.alias;
      Fs && (No = Fs[0], zo(Fo, Uo([0, 1], Fs)));
      for (var _s = 1, Rs = !0; _s < Fo.length; _s += 1) {
        var Is = Fo[_s], ks = Xo(Is, 0, 1), Ms = Xo(Is, -1);
        if ((ks === '"' || ks === "'" || ks === "`" || Ms === '"' || Ms === "'" || Ms === "`") && ks !== Ms)
          throw new ir("property names with quotes must have matching quotes");
        if ((Is === "constructor" || !Rs) && (Ss = !0), No += "." + Is, Wo = "%" + No + "%", Mo(Lo, Wo))
          Yo = Lo[Wo];
        else if (Yo != null) {
          if (!(Is in Yo)) {
            if (!gs)
              throw new uo("base intrinsic for " + es + " exists, but the property is not available.");
            return;
          }
          if (Co && _s + 1 >= Fo.length) {
            var qs = Co(Yo, Is);
            Rs = !!qs, Rs && "get" in qs && !("originalValue" in qs.get) ? Yo = qs.get : Yo = Yo[Is];
          } else
            Rs = Mo(Yo, Is), Yo = Yo[Is];
          Rs && !Ss && (Lo[Wo] = Yo);
        }
      }
      return Yo;
    }, "GetIntrinsic");
  }
}), Oe$1 = P$3({
  "node_modules/call-bind/index.js"(pt, ne) {
    var yt = gt$1(), ir = $t$1(), io = ir("%Function.prototype.apply%"), uo = ir("%Function.prototype.call%"), fo = ir("%Reflect.apply%", !0) || yt.call(
      uo,
      io
    ), Co = ir("%Object.getOwnPropertyDescriptor%", !0), xo = ir("%Object.defineProperty%", !0), Oo = ir("%Math.max%");
    if (xo)
      try {
        xo({}, "a", { value: 1 });
      } catch {
        xo = null;
      }
    ne.exports = /* @__PURE__ */ a(function(_o) {
      var Io = fo(yt, uo, arguments);
      if (Co && xo) {
        var jo = Co(Io, "length");
        jo.configurable && xo(
          Io,
          "length",
          { value: 1 + Oo(0, _o.length - (arguments.length - 1)) }
        );
      }
      return Io;
    }, "callBind");
    var Po = /* @__PURE__ */ a(function() {
      return fo(yt, io, arguments);
    }, "applyBind2");
    xo ? xo(ne.exports, "apply", { value: Po }) : ne.exports.apply = Po;
  }
}), Ce = P$3({
  "node_modules/call-bind/callBound.js"(pt, ne) {
    var yt = $t$1(), ir = Oe$1(), io = ir(yt("String.prototype.indexOf"));
    ne.exports = /* @__PURE__ */ a(function(uo, fo) {
      var Co = yt(uo, !!fo);
      return typeof Co == "function" && io(uo, ".prototype.") > -1 ? ir(Co) : Co;
    }, "callBoundIntrinsic");
  }
}), Pe = P$3({
  "node_modules/has-tostringtag/shams.js"(pt, ne) {
    var yt = Ft();
    ne.exports = /* @__PURE__ */ a(function() {
      return yt() && !!Symbol.toStringTag;
    }, "hasToStringTagShams");
  }
}), Ie = P$3({
  "node_modules/is-regex/index.js"(pt, ne) {
    var yt = Ce(), ir = Pe()(), io, uo, fo, Co;
    ir && (io = yt("Object.prototype.hasOwnProperty"), uo = yt("RegExp.prototype.exec"), fo = {}, xo = /* @__PURE__ */ a(function() {
      throw fo;
    }, "throwRegexMarker"), Co = {
      toString: xo,
      valueOf: xo
    }, typeof Symbol.toPrimitive == "symbol" && (Co[Symbol.toPrimitive] = xo));
    var xo, Oo = yt("Object.prototype.toString"), Po = Object.getOwnPropertyDescriptor, _o = "[object RegExp]";
    ne.exports = /* @__PURE__ */ a(ir ? function(Io) {
      if (!Io || typeof Io != "object")
        return !1;
      var jo = Po(Io, "lastIndex"), Lo = jo && io(jo, "value");
      if (!Lo)
        return !1;
      try {
        uo(Io, Co);
      } catch (Ho) {
        return Ho === fo;
      }
    } : function(Io) {
      return !Io || typeof Io != "object" && typeof Io != "function" ? !1 : Oo(Io) === _o;
    }, "isRegex");
  }
}), xe$1 = P$3({
  "node_modules/is-function/index.js"(pt, ne) {
    ne.exports = ir;
    var yt = Object.prototype.toString;
    function ir(io) {
      if (!io)
        return !1;
      var uo = yt.call(io);
      return uo === "[object Function]" || typeof io == "function" && uo !== "[object RegExp]" || typeof window < "u" && (io === window.setTimeout || io === window.alert || io === window.confirm || io === window.prompt);
    }
    a(ir, "isFunction3");
  }
}), Re$1 = P$3({
  "node_modules/is-symbol/index.js"(pt, ne) {
    var yt = Object.prototype.toString, ir = Mt$1()();
    ir ? (io = Symbol.prototype.toString, uo = /^Symbol\(.*\)$/, fo = /* @__PURE__ */ a(function(Co) {
      return typeof Co.valueOf() != "symbol" ? !1 : uo.test(io.call(Co));
    }, "isRealSymbolObject"), ne.exports = /* @__PURE__ */ a(function(Co) {
      if (typeof Co == "symbol")
        return !0;
      if (yt.call(Co) !== "[object Symbol]")
        return !1;
      try {
        return fo(Co);
      } catch {
        return !1;
      }
    }, "isSymbol3")) : ne.exports = /* @__PURE__ */ a(function(Co) {
      return !1;
    }, "isSymbol3");
    var io, uo, fo;
  }
}), Ne$1 = ot$1(Ie()), je$1 = ot$1(xe$1()), Le$1 = ot$1(Re$1());
function De$1(pt) {
  return pt != null && typeof pt == "object" && Array.isArray(pt) === !1;
}
a(De$1, "isObject");
var Fe$1 = typeof global == "object" && global && global.Object === Object && global, Me$1 = Fe$1, $e$1 = typeof self == "object" && self && self.Object === Object && self, Ue$1 = Me$1 || $e$1 || Function("return this")(), vt$1 = Ue$1, ke$1 = vt$1.Symbol, U$2 = ke$1, Ut$1 = Object.prototype, Ge$1 = Ut$1.hasOwnProperty, We$1 = Ut$1.toString, q$2 = U$2 ? U$2.toStringTag : void 0;
function ze(pt) {
  var ne = Ge$1.call(pt, q$2), yt = pt[q$2];
  try {
    pt[q$2] = void 0;
    var ir = !0;
  } catch {
  }
  var io = We$1.call(pt);
  return ir && (ne ? pt[q$2] = yt : delete pt[q$2]), io;
}
a(ze, "getRawTag");
var He$1 = ze, Be$1 = Object.prototype, qe$1 = Be$1.toString;
function Ve(pt) {
  return qe$1.call(pt);
}
a(Ve, "objectToString");
var Je$1 = Ve, Ke$1 = "[object Null]", Ye$1 = "[object Undefined]", Rt = U$2 ? U$2.toStringTag : void 0;
function Xe$1(pt) {
  return pt == null ? pt === void 0 ? Ye$1 : Ke$1 : Rt && Rt in Object(pt) ? He$1(pt) : Je$1(pt);
}
a(Xe$1, "baseGetTag");
var kt$1 = Xe$1;
function Qe$1(pt) {
  return pt != null && typeof pt == "object";
}
a(Qe$1, "isObjectLike");
var Ze$1 = Qe$1, tr$1 = "[object Symbol]";
function er$1(pt) {
  return typeof pt == "symbol" || Ze$1(pt) && kt$1(pt) == tr$1;
}
a(er$1, "isSymbol");
var mt$1 = er$1;
function rr$1(pt, ne) {
  for (var yt = -1, ir = pt == null ? 0 : pt.length, io = Array(ir); ++yt < ir; )
    io[yt] = ne(pt[yt], yt, pt);
  return io;
}
a(rr$1, "arrayMap");
var nr = rr$1, or$1 = Array.isArray, Et$1 = or$1, Nt$1 = U$2 ? U$2.prototype : void 0, jt$1 = Nt$1 ? Nt$1.toString : void 0;
function Gt$1(pt) {
  if (typeof pt == "string")
    return pt;
  if (Et$1(pt))
    return nr(pt, Gt$1) + "";
  if (mt$1(pt))
    return jt$1 ? jt$1.call(pt) : "";
  var ne = pt + "";
  return ne == "0" && 1 / pt == -1 / 0 ? "-0" : ne;
}
a(Gt$1, "baseToString");
var ar = Gt$1;
function sr$1(pt) {
  var ne = typeof pt;
  return pt != null && (ne == "object" || ne == "function");
}
a(sr$1, "isObject2");
var Wt$1 = sr$1, lr = "[object AsyncFunction]", cr$1 = "[object Function]", pr = "[object GeneratorFunction]", ur = "[object Proxy]";
function fr(pt) {
  if (!Wt$1(pt))
    return !1;
  var ne = kt$1(pt);
  return ne == cr$1 || ne == pr || ne == lr || ne == ur;
}
a(fr, "isFunction");
var hr = fr, yr = vt$1["__core-js_shared__"], dt$1 = yr, Lt$1 = (function() {
  var pt = /[^.]+$/.exec(dt$1 && dt$1.keys && dt$1.keys.IE_PROTO || "");
  return pt ? "Symbol(src)_1." + pt : "";
})();
function dr(pt) {
  return !!Lt$1 && Lt$1 in pt;
}
a(dr, "isMasked");
var gr = dr, vr$1 = Function.prototype, mr = vr$1.toString;
function Er$1(pt) {
  if (pt != null) {
    try {
      return mr.call(pt);
    } catch {
    }
    try {
      return pt + "";
    } catch {
    }
  }
  return "";
}
a(Er$1, "toSource");
var br$1 = Er$1, Sr$1 = /[\\^$.*+?()[\]{}|]/g, _r$1 = /^\[object .+?Constructor\]$/, Tr$1 = Function.prototype, Ar$1 = Object.prototype, wr$1 = Tr$1.toString, Or$1 = Ar$1.hasOwnProperty, Cr$1 = RegExp(
  "^" + wr$1.call(Or$1).replace(Sr$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Pr$1(pt) {
  if (!Wt$1(pt) || gr(pt))
    return !1;
  var ne = hr(pt) ? Cr$1 : _r$1;
  return ne.test(br$1(pt));
}
a(Pr$1, "baseIsNative");
var Ir$1 = Pr$1;
function xr$1(pt, ne) {
  return pt == null ? void 0 : pt[ne];
}
a(xr$1, "getValue");
var Rr$1 = xr$1;
function Nr(pt, ne) {
  var yt = Rr$1(pt, ne);
  return Ir$1(yt) ? yt : void 0;
}
a(Nr, "getNative");
var zt$1 = Nr;
function jr$1(pt, ne) {
  return pt === ne || pt !== pt && ne !== ne;
}
a(jr$1, "eq");
var Lr$1 = jr$1, Dr$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Fr$1 = /^\w*$/;
function Mr(pt, ne) {
  if (Et$1(pt))
    return !1;
  var yt = typeof pt;
  return yt == "number" || yt == "symbol" || yt == "boolean" || pt == null || mt$1(pt) ? !0 : Fr$1.test(pt) || !Dr$1.test(pt) || ne != null && pt in Object(
    ne
  );
}
a(Mr, "isKey");
var $r$1 = Mr, Ur$1 = zt$1(Object, "create"), V$2 = Ur$1;
function kr$1() {
  this.__data__ = V$2 ? V$2(null) : {}, this.size = 0;
}
a(kr$1, "hashClear");
var Gr$1 = kr$1;
function Wr$1(pt) {
  var ne = this.has(pt) && delete this.__data__[pt];
  return this.size -= ne ? 1 : 0, ne;
}
a(Wr$1, "hashDelete");
var zr$1 = Wr$1, Hr$1 = "__lodash_hash_undefined__", Br$1 = Object.prototype, qr = Br$1.hasOwnProperty;
function Vr$1(pt) {
  var ne = this.__data__;
  if (V$2) {
    var yt = ne[pt];
    return yt === Hr$1 ? void 0 : yt;
  }
  return qr.call(ne, pt) ? ne[pt] : void 0;
}
a(Vr$1, "hashGet");
var Jr$1 = Vr$1, Kr$1 = Object.prototype, Yr$1 = Kr$1.hasOwnProperty;
function Xr$1(pt) {
  var ne = this.__data__;
  return V$2 ? ne[pt] !== void 0 : Yr$1.call(ne, pt);
}
a(Xr$1, "hashHas");
var Qr$1 = Xr$1, Zr$1 = "__lodash_hash_undefined__";
function tn$1(pt, ne) {
  var yt = this.__data__;
  return this.size += this.has(pt) ? 0 : 1, yt[pt] = V$2 && ne === void 0 ? Zr$1 : ne, this;
}
a(tn$1, "hashSet");
var en$1 = tn$1;
function k$2(pt) {
  var ne = -1, yt = pt == null ? 0 : pt.length;
  for (this.clear(); ++ne < yt; ) {
    var ir = pt[ne];
    this.set(ir[0], ir[1]);
  }
}
a(k$2, "Hash");
k$2.prototype.clear = Gr$1;
k$2.prototype.delete = zr$1;
k$2.prototype.get = Jr$1;
k$2.prototype.has = Qr$1;
k$2.prototype.set = en$1;
var Dt$1 = k$2;
function rn$1() {
  this.__data__ = [], this.size = 0;
}
a(rn$1, "listCacheClear");
var nn$1 = rn$1;
function on$1(pt, ne) {
  for (var yt = pt.length; yt--; )
    if (Lr$1(pt[yt][0], ne))
      return yt;
  return -1;
}
a(on$1, "assocIndexOf");
var at$1 = on$1, an$1 = Array.prototype, sn$1 = an$1.splice;
function ln(pt) {
  var ne = this.__data__, yt = at$1(ne, pt);
  if (yt < 0)
    return !1;
  var ir = ne.length - 1;
  return yt == ir ? ne.pop() : sn$1.call(ne, yt, 1), --this.size, !0;
}
a(ln, "listCacheDelete");
var cn$1 = ln;
function pn(pt) {
  var ne = this.__data__, yt = at$1(ne, pt);
  return yt < 0 ? void 0 : ne[yt][1];
}
a(pn, "listCacheGet");
var un = pn;
function fn(pt) {
  return at$1(this.__data__, pt) > -1;
}
a(fn, "listCacheHas");
var hn = fn;
function yn(pt, ne) {
  var yt = this.__data__, ir = at$1(yt, pt);
  return ir < 0 ? (++this.size, yt.push([pt, ne])) : yt[ir][1] = ne, this;
}
a(yn, "listCacheSet");
var dn = yn;
function G$2(pt) {
  var ne = -1, yt = pt == null ? 0 : pt.length;
  for (this.clear(); ++ne < yt; ) {
    var ir = pt[ne];
    this.set(ir[0], ir[1]);
  }
}
a(G$2, "ListCache");
G$2.prototype.clear = nn$1;
G$2.prototype.delete = cn$1;
G$2.prototype.get = un;
G$2.prototype.has = hn;
G$2.prototype.set = dn;
var gn = G$2, vn = zt$1(vt$1, "Map"), mn = vn;
function En() {
  this.size = 0, this.__data__ = {
    hash: new Dt$1(),
    map: new (mn || gn)(),
    string: new Dt$1()
  };
}
a(En, "mapCacheClear");
var bn = En;
function Sn(pt) {
  var ne = typeof pt;
  return ne == "string" || ne == "number" || ne == "symbol" || ne == "boolean" ? pt !== "__proto__" : pt === null;
}
a(Sn, "isKeyable");
var _n$1 = Sn;
function Tn(pt, ne) {
  var yt = pt.__data__;
  return _n$1(ne) ? yt[typeof ne == "string" ? "string" : "hash"] : yt.map;
}
a(Tn, "getMapData");
var st$1 = Tn;
function An(pt) {
  var ne = st$1(this, pt).delete(pt);
  return this.size -= ne ? 1 : 0, ne;
}
a(An, "mapCacheDelete");
var wn = An;
function On(pt) {
  return st$1(this, pt).get(pt);
}
a(On, "mapCacheGet");
var Cn = On;
function Pn(pt) {
  return st$1(this, pt).has(pt);
}
a(Pn, "mapCacheHas");
var In = Pn;
function xn$1(pt, ne) {
  var yt = st$1(this, pt), ir = yt.size;
  return yt.set(pt, ne), this.size += yt.size == ir ? 0 : 1, this;
}
a(xn$1, "mapCacheSet");
var Rn = xn$1;
function W$2(pt) {
  var ne = -1, yt = pt == null ? 0 : pt.length;
  for (this.clear(); ++ne < yt; ) {
    var ir = pt[ne];
    this.set(ir[0], ir[1]);
  }
}
a(W$2, "MapCache");
W$2.prototype.clear = bn;
W$2.prototype.delete = wn;
W$2.prototype.get = Cn;
W$2.prototype.has = In;
W$2.prototype.set = Rn;
var Ht$1 = W$2, Nn$1 = "Expected a function";
function bt$1(pt, ne) {
  if (typeof pt != "function" || ne != null && typeof ne != "function")
    throw new TypeError(Nn$1);
  var yt = /* @__PURE__ */ a(function() {
    var ir = arguments, io = ne ? ne.apply(this, ir) : ir[0], uo = yt.cache;
    if (uo.has(io))
      return uo.get(io);
    var fo = pt.apply(this, ir);
    return yt.cache = uo.set(io, fo) || uo, fo;
  }, "memoized");
  return yt.cache = new (bt$1.Cache || Ht$1)(), yt;
}
a(bt$1, "memoize");
bt$1.Cache = Ht$1;
var jn$1 = bt$1, Ln$1 = 500;
function Dn(pt) {
  var ne = jn$1(pt, function(ir) {
    return yt.size === Ln$1 && yt.clear(), ir;
  }), yt = ne.cache;
  return ne;
}
a(Dn, "memoizeCapped");
var Fn = Dn, Mn$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, $n$1 = /\\(\\)?/g, Un$1 = Fn(
  function(pt) {
    var ne = [];
    return pt.charCodeAt(0) === 46 && ne.push(""), pt.replace(Mn$1, function(yt, ir, io, uo) {
      ne.push(io ? uo.replace($n$1, "$1") : ir || yt);
    }), ne;
  }
), kn = Un$1;
function Gn$1(pt) {
  return pt == null ? "" : ar(pt);
}
a(Gn$1, "toString");
var Wn$1 = Gn$1;
function zn$1(pt, ne) {
  return Et$1(pt) ? pt : $r$1(pt, ne) ? [pt] : kn(Wn$1(pt));
}
a(zn$1, "castPath");
var Hn$1 = zn$1;
function qn$1(pt) {
  if (typeof pt == "string" || mt$1(pt))
    return pt;
  var ne = pt + "";
  return ne == "0" && 1 / pt == -1 / 0 ? "-0" : ne;
}
a(qn$1, "toKey");
var Vn$1 = qn$1;
function Jn$1(pt, ne) {
  ne = Hn$1(ne, pt);
  for (var yt = 0, ir = ne.length; pt != null && yt < ir; )
    pt = pt[Vn$1(ne[yt++])];
  return yt && yt == ir ? pt : void 0;
}
a(Jn$1, "baseGet");
var Kn = Jn$1;
function Yn$1(pt, ne, yt) {
  var ir = pt == null ? void 0 : Kn(pt, ne);
  return ir === void 0 ? yt : ir;
}
a(Yn$1, "get");
var Xn$1 = Yn$1, it = De$1, Qn = /* @__PURE__ */ a((pt) => {
  let ne = null, yt = !1, ir = !1, io = !1, uo = "";
  if (pt.indexOf("//") >= 0 || pt.indexOf("/*") >= 0)
    for (let fo = 0; fo < pt.length; fo += 1)
      !ne && !yt && !ir && !io ? pt[fo] === '"' || pt[fo] === "'" || pt[fo] === "`" ? ne = pt[fo] : pt[fo] === "/" && pt[fo + 1] === "*" ? yt = !0 : pt[fo] === "/" && pt[fo + 1] === "/" ? ir = !0 : pt[fo] === "/" && pt[fo + 1] !== "/" && (io = !0) : (ne && (pt[fo] === ne && pt[fo - 1] !== "\\" || pt[fo] === `
` && ne !== "`") && (ne = null), io && (pt[fo] === "/" && pt[fo - 1] !== "\\" || pt[fo] === `
`) && (io = !1), yt && pt[fo - 1] === "/" && pt[fo - 2] === "*" && (yt = !1), ir && pt[fo] === `
` && (ir = !1)), !yt && !ir && (uo += pt[fo]);
  else
    uo = pt;
  return uo;
}, "removeCodeComments"), Zn = (0, Bt$1.default)(1e4)(
  (pt) => Qn(pt).replace(/\n\s*/g, "").trim()
), to$1 = /* @__PURE__ */ a(function(pt, ne) {
  let yt = ne.slice(0, ne.indexOf("{")), ir = ne.slice(ne.indexOf("{"));
  if (yt.includes("=>") || yt.includes("function"))
    return ne;
  let io = yt;
  return io = io.replace(pt, "function"), io + ir;
}, "convertShorthandMethods2"), eo$1 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/, J$2 = /* @__PURE__ */ a(
  (pt) => pt.match(/^[\[\{\"\}].*[\]\}\"]$/),
  "isJSON"
);
function qt$1(pt) {
  if (!it(pt))
    return pt;
  let ne = pt, yt = !1;
  return typeof Event < "u" && pt instanceof Event && (ne = Pt(ne), yt = !0), ne = Object.keys(ne).reduce((ir, io) => {
    try {
      ne[io] && ne[io].toJSON, ir[io] = ne[io];
    } catch {
      yt = !0;
    }
    return ir;
  }, {}), yt ? ne : pt;
}
a(qt$1, "convertUnconventionalData");
var ro$1 = /* @__PURE__ */ a(function(pt) {
  let ne, yt, ir, io;
  return /* @__PURE__ */ a(function(uo, fo) {
    try {
      if (uo === "")
        return io = [], ne = /* @__PURE__ */ new Map([[fo, "[]"]]), yt = /* @__PURE__ */ new Map(), ir = [], fo;
      let Co = yt.get(this) || this;
      for (; ir.length && Co !== ir[0]; )
        ir.shift(), io.pop();
      if (typeof fo == "boolean")
        return fo;
      if (fo === void 0)
        return pt.allowUndefined ? "_undefined_" : void 0;
      if (fo === null)
        return null;
      if (typeof fo == "number")
        return fo === -1 / 0 ? "_-Infinity_" : fo === 1 / 0 ? "_Infinity_" : Number.isNaN(fo) ? "_NaN_" : fo;
      if (typeof fo == "bigint")
        return `_bigint_${fo.toString()}`;
      if (typeof fo == "string")
        return eo$1.test(fo) ? pt.allowDate ? `_date_${fo}` : void 0 : fo;
      if ((0, Ne$1.default)(fo))
        return pt.allowRegExp ? `_regexp_${fo.flags}|${fo.source}` : void 0;
      if ((0, je$1.default)(fo)) {
        if (!pt.allowFunction)
          return;
        let { name: Oo } = fo, Po = fo.toString();
        return Po.match(
          /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
        ) ? `_function_${Oo}|${(() => {
        }).toString()}` : `_function_${Oo}|${Zn(to$1(uo, Po))}`;
      }
      if ((0, Le$1.default)(fo)) {
        if (!pt.allowSymbol)
          return;
        let Oo = Symbol.keyFor(fo);
        return Oo !== void 0 ? `_gsymbol_${Oo}` : `_symbol_${fo.toString().slice(7, -1)}`;
      }
      if (ir.length >= pt.maxDepth)
        return Array.isArray(fo) ? `[Array(${fo.length})]` : "[Object]";
      if (fo === this)
        return `_duplicate_${JSON.stringify(io)}`;
      if (fo instanceof Error && pt.allowError)
        return {
          __isConvertedError__: !0,
          errorProperties: {
            ...fo.cause ? { cause: fo.cause } : {},
            ...fo,
            name: fo.name,
            message: fo.message,
            stack: fo.stack,
            "_constructor-name_": fo.constructor.name
          }
        };
      if (fo.constructor && fo.constructor.name && fo.constructor.name !== "Object" && !Array.isArray(fo) && !pt.allowClass)
        return;
      let xo = ne.get(fo);
      if (!xo) {
        let Oo = Array.isArray(fo) ? fo : qt$1(fo);
        if (fo.constructor && fo.constructor.name && fo.constructor.name !== "Object" && !Array.isArray(fo) && pt.allowClass)
          try {
            Object.assign(Oo, { "_constructor-name_": fo.constructor.name });
          } catch {
          }
        return io.push(uo), ir.unshift(Oo), ne.set(fo, JSON.stringify(io)), fo !== Oo && yt.set(fo, Oo), Oo;
      }
      return `_duplicate_${xo}`;
    } catch {
      return;
    }
  }, "replace");
}, "replacer2"), no$1 = /* @__PURE__ */ a(function reviver(options) {
  let refs = [], root;
  return /* @__PURE__ */ a(function revive(key, value) {
    if (key === "" && (root = value, refs.forEach(({ target: pt, container: ne, replacement: yt }) => {
      let ir = J$2(yt) ? JSON.parse(yt) : yt.split(".");
      ir.length === 0 ? ne[pt] = root : ne[pt] = Xn$1(root, ir);
    })), key === "_constructor-name_")
      return value;
    if (it(value) && value.__isConvertedError__) {
      let { message: pt, ...ne } = value.errorProperties, yt = new Error(pt);
      return Object.assign(yt, ne), yt;
    }
    if (it(value) && value["_constructor-name_"] && options.allowFunction) {
      let pt = value["_constructor-name_"];
      if (pt !== "Object") {
        let ne = new Function(`return function ${pt.replace(/[^a-zA-Z0-9$_]+/g, "")}(){}`)();
        Object.setPrototypeOf(value, new ne());
      }
      return delete value["_constructor-name_"], value;
    }
    if (typeof value == "string" && value.startsWith("_function_") && options.allowFunction) {
      let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [], sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, "");
      if (!options.lazyEval)
        return eval(`(${sourceSanitized})`);
      let result = /* @__PURE__ */ a((...args) => {
        let f = eval(`(${sourceSanitized})`);
        return f(...args);
      }, "result");
      return Object.defineProperty(result, "toString", {
        value: /* @__PURE__ */ a(() => sourceSanitized, "value")
      }), Object.defineProperty(result, "name", {
        value: name
      }), result;
    }
    if (typeof value == "string" && value.startsWith("_regexp_") && options.allowRegExp) {
      let [, pt, ne] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
      return new RegExp(ne, pt);
    }
    return typeof value == "string" && value.startsWith("_date_") && options.allowDate ? new Date(value.replace("_date_", "")) : typeof value == "string" && value.startsWith("_duplicate_") ? (refs.push({ target: key, container: this, replacement: value.replace(/^_duplicate_/, "") }), null) : typeof value == "string" && value.startsWith("_symbol_") && options.allowSymbol ? Symbol(value.replace("_symbol_", "")) : typeof value == "string" && value.startsWith("_gsymbol_") && options.allowSymbol ? Symbol.for(value.replace("_gsymbol_", "")) : typeof value == "string" && value === "_-Infinity_" ? -1 / 0 : typeof value == "string" && value === "_Infinity_" ? 1 / 0 : typeof value == "string" && value === "_NaN_" ? NaN : typeof value == "string" && value.startsWith("_bigint_") && typeof BigInt == "function" ? BigInt(value.replace("_bigint_", "")) : value;
  }, "revive");
}, "reviver"), Vt$1 = {
  maxDepth: 10,
  space: void 0,
  allowFunction: !0,
  allowRegExp: !0,
  allowDate: !0,
  allowClass: !0,
  allowError: !0,
  allowUndefined: !0,
  allowSymbol: !0,
  lazyEval: !0
}, lt$1 = /* @__PURE__ */ a((pt, ne = {}) => {
  let yt = { ...Vt$1, ...ne };
  return JSON.stringify(qt$1(pt), ro$1(yt), ne.space);
}, "stringify"), oo$1 = /* @__PURE__ */ a(() => {
  let pt = /* @__PURE__ */ new Map();
  return /* @__PURE__ */ a(function ne(yt) {
    it(yt) && Object.entries(yt).forEach(([ir, io]) => {
      io === "_undefined_" ? yt[ir] = void 0 : pt.get(io) || (pt.set(io, !0), ne(io));
    }), Array.isArray(yt) && yt.forEach((ir, io) => {
      ir === "_undefined_" ? (pt.set(ir, !0), yt[io] = void 0) : pt.get(ir) || (pt.set(ir, !0), ne(ir));
    });
  }, "mutateUndefined");
}, "mutator"), ct = /* @__PURE__ */ a((pt, ne = {}) => {
  let yt = { ...Vt$1, ...ne }, ir = JSON.parse(pt, no$1(yt));
  return oo$1()(ir), ir;
}, "parse"), St$1 = "Invariant failed";
function K$2(pt, ne) {
  if (!pt) {
    var yt = typeof ne == "function" ? ne() : ne, ir = yt ? "".concat(St$1, ": ").concat(yt) : St$1;
    throw new Error(ir);
  }
}
a(K$2, "invariant");
var Jt$1 = /* @__PURE__ */ a((pt) => {
  let ne = Array.from(
    document.querySelectorAll("iframe[data-is-storybook]")
  ), [yt, ...ir] = ne.filter((uo) => {
    var xo, Oo;
    try {
      return ((xo = uo.contentWindow) == null ? void 0 : xo.location.origin) === pt.source.location.origin && ((Oo = uo.contentWindow) == null ? void 0 : Oo.location.pathname) === pt.source.location.pathname;
    } catch {
    }
    try {
      return uo.contentWindow === pt.source;
    } catch {
    }
    let fo = uo.getAttribute("src"), Co;
    try {
      if (!fo)
        return !1;
      ({ origin: Co } = new URL(fo, document.location.toString()));
    } catch {
      return !1;
    }
    return Co === pt.origin;
  }), io = yt == null ? void 0 : yt.getAttribute("src");
  if (io && ir.length === 0) {
    let { protocol: uo, host: fo, pathname: Co } = new URL(io, document.location.toString());
    return `${uo}//${fo}${Co}`;
  }
  return ir.length > 0 && s$3.error("found multiple candidates for event source"), null;
}, "getEventSourceUrl"), { document: _t$1, location: Tt } = S$2, Xt$1 = "storybook-channel", lo$1 = { allowFunction: !1, maxDepth: 25 }, At$1 = class {
  constructor(ne) {
    if (this.config = ne, this.connected = !1, this.buffer = [], typeof (S$2 == null ? void 0 : S$2.addEventListener) == "function" && S$2.addEventListener("message", this.handleEvent.bind(this), !1), ne.page !== "manager" && ne.page !== "preview")
      throw new Error(`postmsg-channel: "config.page" cannot be "${ne.page}"`);
  }
  setHandler(ne) {
    this.handler = (...yt) => {
      ne.apply(this, yt), !this.connected && this.getLocalFrame().length && (this.flush(), this.connected = !0);
    };
  }
  /**
   * Sends `event` to the associated window. If the window does not yet exist the event will be
   * stored in a buffer and sent when the window exists.
   *
   * @param event
   */
  send(ne, yt) {
    let {
      target: ir,
      // telejson options
      allowRegExp: io,
      allowFunction: uo,
      allowSymbol: fo,
      allowDate: Co,
      allowError: xo,
      allowUndefined: Oo,
      allowClass: Po,
      maxDepth: _o,
      space: Io,
      lazyEval: jo
    } = yt || {}, Lo = Object.fromEntries(
      Object.entries({
        allowRegExp: io,
        allowFunction: uo,
        allowSymbol: fo,
        allowDate: Co,
        allowError: xo,
        allowUndefined: Oo,
        allowClass: Po,
        maxDepth: _o,
        space: Io,
        lazyEval: jo
      }).filter(([Uo, zo]) => typeof zo < "u")
    ), Ho = {
      ...lo$1,
      ...S$2.CHANNEL_OPTIONS || {},
      ...Lo
    }, qo = this.getFrames(ir), Vo = new URLSearchParams((Tt == null ? void 0 : Tt.search) || ""), Mo = lt$1(
      {
        key: Xt$1,
        event: ne,
        refId: Vo.get("refId")
      },
      Ho
    );
    return qo.length ? (this.buffer.length && this.flush(), qo.forEach((Uo) => {
      try {
        Uo.postMessage(Mo, "*");
      } catch {
        s$3.error("sending over postmessage fail");
      }
    }), Promise.resolve(null)) : new Promise((Uo, zo) => {
      this.buffer.push({ event: ne, resolve: Uo, reject: zo });
    });
  }
  flush() {
    let { buffer: ne } = this;
    this.buffer = [], ne.forEach((yt) => {
      this.send(yt.event).then(yt.resolve).catch(yt.reject);
    });
  }
  getFrames(ne) {
    if (this.config.page === "manager") {
      let yt = Array.from(
        _t$1.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")
      ).flatMap((ir) => {
        try {
          return ir.contentWindow && ir.dataset.isStorybook !== void 0 && ir.id === ne ? [ir.contentWindow] : [];
        } catch {
          return [];
        }
      });
      return yt != null && yt.length ? yt : this.getCurrentFrames();
    }
    return S$2 && S$2.parent && S$2.parent !== S$2.self ? [S$2.parent] : [];
  }
  getCurrentFrames() {
    return this.config.page === "manager" ? Array.from(
      _t$1.querySelectorAll('[data-is-storybook="true"]')
    ).flatMap((ne) => ne.contentWindow ? [ne.contentWindow] : []) : S$2 && S$2.parent ? [S$2.parent] : [];
  }
  getLocalFrame() {
    return this.config.page === "manager" ? Array.from(
      _t$1.querySelectorAll("#storybook-preview-iframe")
    ).flatMap((ne) => ne.contentWindow ? [ne.contentWindow] : []) : S$2 && S$2.parent ? [S$2.parent] : [];
  }
  handleEvent(ne) {
    try {
      let { data: yt } = ne, { key: ir, event: io, refId: uo } = typeof yt == "string" && J$2(yt) ? ct(yt, S$2.CHANNEL_OPTIONS || {}) : yt;
      if (ir === Xt$1) {
        let fo = this.config.page === "manager" ? '<span style="color: #37D5D3; background: black"> manager </span>' : '<span style="color: #1EA7FD; background: black"> preview </span>', Co = Object.values(so$1).includes(io.type) ? `<span style="color: #FF4785">${io.type}</span>` : `<span style="color: #FFAE00">${io.type}</span>`;
        if (uo && (io.refId = uo), io.source = this.config.page === "preview" ? ne.origin : Jt$1(ne), !io.source) {
          r$2.error(
            `${fo} received ${Co} but was unable to determine the source of the event`
          );
          return;
        }
        let xo = `${fo} received ${Co} (${yt.length})`;
        r$2.debug(
          Tt.origin !== io.source ? xo : `${xo} <span style="color: gray">(on ${Tt.origin} from ${io.source})</span>`,
          ...io.args
        ), K$2(this.handler, "ChannelHandler should be set"), this.handler(io);
      }
    } catch (yt) {
      s$3.error(yt);
    }
  }
};
a(At$1, "PostMessageTransport");
var Y$2 = At$1, { WebSocket: co$1 } = S$2, Zt$1 = 15e3, te$2 = 5e3, wt$1 = class {
  constructor({ url: ne, onError: yt, page: ir }) {
    this.buffer = [], this.isReady = !1, this.isClosed = !1, this.pingTimeout = 0, this.socket = new co$1(ne), this.socket.onopen = () => {
      this.isReady = !0, this.heartbeat(), this.flush();
    }, this.socket.onmessage = ({ data: io }) => {
      let uo = typeof io == "string" && J$2(io) ? ct(io) : io;
      K$2(this.handler, "WebsocketTransport handler should be set"), this.handler(uo), uo.type === "ping" && (this.heartbeat(), this.send({ type: "pong" }));
    }, this.socket.onerror = (io) => {
      yt && yt(io);
    }, this.socket.onclose = (io) => {
      K$2(this.handler, "WebsocketTransport handler should be set"), this.handler({
        type: S$3,
        args: [{ reason: io.reason, code: io.code }],
        from: ir || "preview"
      }), this.isClosed = !0, clearTimeout(this.pingTimeout);
    };
  }
  heartbeat() {
    clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
      this.socket.close(3008, "timeout");
    }, Zt$1 + te$2);
  }
  setHandler(ne) {
    this.handler = ne;
  }
  send(ne) {
    this.isClosed || (this.isReady ? this.sendNow(ne) : this.sendLater(ne));
  }
  sendLater(ne) {
    this.buffer.push(ne);
  }
  sendNow(ne) {
    let yt = lt$1(ne, {
      maxDepth: 15,
      allowFunction: !1,
      ...S$2.CHANNEL_OPTIONS
    });
    this.socket.send(yt);
  }
  flush() {
    let { buffer: ne } = this;
    this.buffer = [], ne.forEach((yt) => this.send(yt));
  }
};
a(wt$1, "WebsocketTransport");
var X$1 = wt$1, { CONFIG_TYPE: po$1 } = S$2;
function Qo$1({ page: pt, extraTransports: ne = [] }) {
  let yt = [new Y$2({ page: pt }), ...ne];
  if (po$1 === "DEVELOPMENT") {
    let io = window.location.protocol === "http:" ? "ws" : "wss", { hostname: uo, port: fo } = window.location, Co = `${io}://${uo}:${fo}/storybook-server-channel`;
    yt.push(new X$1({ url: Co, onError: /* @__PURE__ */ a(() => {
    }, "onError"), page: pt }));
  }
  let ir = new B({ transports: yt });
  return $$2.__prepare(
    ir,
    pt === "manager" ? $$2.Environment.MANAGER : $$2.Environment.PREVIEW
  ), ir;
}
a(Qo$1, "createBrowserChannel");
var oe$1 = Object.defineProperty, t = (pt, ne) => oe$1(pt, "name", { value: ne, configurable: !0 });
function r(pt) {
  for (var ne = [], yt = 1; yt < arguments.length; yt++)
    ne[yt - 1] = arguments[yt];
  var ir = Array.from(typeof pt == "string" ? [pt] : pt);
  ir[ir.length - 1] = ir[ir.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var io = ir.reduce(function(Co, xo) {
    var Oo = xo.match(/\n([\t ]+|(?!\s).)/g);
    return Oo ? Co.concat(Oo.map(function(Po) {
      var _o, Io;
      return (Io = (_o = Po.match(/[\t ]/g)) === null || _o === void 0 ? void 0 : _o.length) !== null && Io !== void 0 ? Io : 0;
    })) : Co;
  }, []);
  if (io.length) {
    var uo = new RegExp(`
[	 ]{` + Math.min.apply(Math, io) + "}", "g");
    ir = ir.map(function(Co) {
      return Co.replace(uo, `
`);
    });
  }
  ir[0] = ir[0].replace(/^\r?\n/, "");
  var fo = ir[0];
  return ne.forEach(function(Co, xo) {
    var Oo = fo.match(/(?:^|\n)( *)$/), Po = Oo ? Oo[1] : "", _o = Co;
    typeof Co == "string" && Co.includes(`
`) && (_o = String(Co).split(`
`).map(function(Io, jo) {
      return jo === 0 ? Io : "" + Po + Io;
    }).join(`
`)), fo += _o + ir[xo + 1];
  }), fo;
}
t(r, "dedent");
function C$1({
  code: pt,
  category: ne
}) {
  let yt = String(pt).padStart(4, "0");
  return `SB_${ne}_${yt}`;
}
t(C$1, "parseErrorCode");
var p = class oa extends Error {
  constructor(ne) {
    super(oa.getFullMessage(ne)), this.data = {}, this.fromStorybook = !0, this.category = ne.category, this.documentation = ne.documentation ?? !1, this.code = ne.code;
  }
  get fullErrorCode() {
    return C$1({ code: this.code, category: this.category });
  }
  /** Overrides the default `Error.name` property in the format: SB_<CATEGORY>_<CODE>. */
  get name() {
    let ne = this.constructor.name;
    return `${this.fullErrorCode} (${ne})`;
  }
  /** Generates the error message along with additional documentation link (if applicable). */
  static getFullMessage({
    documentation: ne,
    code: yt,
    category: ir,
    message: io
  }) {
    let uo;
    return ne === !0 ? uo = `https://storybook.js.org/error/${C$1({ code: yt, category: ir })}` : typeof ne == "string" ? uo = ne : Array.isArray(ne) && (uo = `
${ne.map((fo) => `	- ${fo}`).join(`
`)}`), `${io}${uo != null ? `

More info: ${uo}
` : ""}`;
  }
};
t(p, "StorybookError");
var o = p, f$1 = class extends o {
  constructor(ne) {
    super({
      category: "PREVIEW_API",
      code: 1,
      message: r`
        Couldn't find story matching id '${ne.storyId}' after HMR.
        - Did you just rename a story?
        - Did you remove it from your CSF file?
        - Are you sure a story with the id '${ne.storyId}' exists?
        - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
        - Also check the browser console and terminal for potential error messages.`
    }), this.data = ne;
  }
};
t(f$1, "MissingStoryAfterHmrError");
var D$1 = f$1, R$1 = class extends o {
  constructor(ne) {
    super({
      category: "PREVIEW_API",
      code: 2,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function",
      message: r`
        We detected that you use an implicit action arg while ${ne.phase} of your story.  
        ${ne.deprecated ? `
This is deprecated and won't work in Storybook 8 anymore.
` : ""}
        Please provide an explicit spy to your args like this:
          import { fn } from '@storybook/test';
          ... 
          args: {
           ${ne.name}: fn()
          }`
    }), this.data = ne;
  }
};
t(R$1, "ImplicitActionsDuringRendering");
var j$2 = R$1, b$1 = class extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 3,
      message: r`
        Cannot call \`storyStore.extract()\` without calling \`storyStore.cacheAllCsfFiles()\` first.

        You probably meant to call \`await preview.extract()\` which does the above for you.`
    });
  }
};
t(b$1, "CalledExtractOnStoreError");
var L$2 = b$1, I$2 = class extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 4,
      message: r`
        Expected your framework's preset to export a \`renderToCanvas\` field.

        Perhaps it needs to be upgraded for Storybook 7.0?`,
      documentation: "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field"
    });
  }
};
t(I$2, "MissingRenderToCanvasError");
var G$1 = I$2, P$2 = class extends o {
  constructor(ne) {
    super({
      category: "PREVIEW_API",
      code: 5,
      message: r`
        Called \`Preview.${ne.methodName}()\` before initialization.
        
        The preview needs to load the story index before most methods can be called. If you want
        to call \`${ne.methodName}\`, try \`await preview.initializationPromise;\` first.
        
        If you didn't call the above code, then likely it was called by an addon that needs to
        do the above.`
    }), this.data = ne;
  }
};
t(P$2, "CalledPreviewMethodBeforeInitializationError");
var Y$1 = P$2, x$1 = class extends o {
  constructor(ne) {
    super({
      category: "PREVIEW_API",
      code: 6,
      message: r`
        Error fetching \`/index.json\`:
        
        ${ne.text}

        If you are in development, this likely indicates a problem with your Storybook process,
        check the terminal for errors.

        If you are in a deployed Storybook, there may have been an issue deploying the full Storybook
        build.`
    }), this.data = ne;
  }
};
t(x$1, "StoryIndexFetchError");
var M$1 = x$1, T$2 = class extends o {
  constructor(ne) {
    super({
      category: "PREVIEW_API",
      code: 7,
      message: r`
        Tried to render docs entry ${ne.storyId} but it is a MDX file that has no CSF
        references, or autodocs for a CSF file that some doesn't refer to itself.
        
        This likely is an internal error in Storybook's indexing, or you've attached the
        \`attached-mdx\` tag to an MDX file that is not attached.`
    }), this.data = ne;
  }
};
t(T$2, "MdxFileWithNoCsfReferencesError");
var H$1 = T$2, w$1 = class extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 8,
      message: r`
        Couldn't find any stories in your Storybook.

        - Please check your stories field of your main.js config: does it match correctly?
        - Also check the browser console and terminal for error messages.`
    });
  }
};
t(w$1, "EmptyIndexError");
var F$1 = w$1, k$1 = class extends o {
  constructor(ne) {
    super({
      category: "PREVIEW_API",
      code: 9,
      message: r`
        Couldn't find story matching '${ne.storySpecifier}'.

        - Are you sure a story with that id exists?
        - Please check your stories field of your main.js config.
        - Also check the browser console and terminal for error messages.`
    }), this.data = ne;
  }
};
t(k$1, "NoStoryMatchError");
var K$1 = k$1, S$1 = class extends o {
  constructor(ne) {
    super({
      category: "PREVIEW_API",
      code: 10,
      message: r`
        Couldn't find story matching id '${ne.storyId}' after importing a CSF file.

        The file was indexed as if the story was there, but then after importing the file in the browser
        we didn't find the story. Possible reasons:
        - You are using a custom story indexer that is misbehaving.
        - You have a custom file loader that is removing or renaming exports.

        Please check your browser console and terminal for errors that may explain the issue.`
    }), this.data = ne;
  }
};
t(S$1, "MissingStoryFromCsfFileError");
var X = S$1, v$1 = class extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 11,
      message: r`
        Cannot access the Story Store until the index is ready.

        It is not recommended to use methods directly on the Story Store anyway, in Storybook 9 we will
        remove access to the store entirely`
    });
  }
};
t(v$1, "StoryStoreAccessedBeforeInitializationError");
var U$1 = v$1, _$1 = class extends o {
  constructor(ne) {
    super({
      category: "PREVIEW_API",
      code: 12,
      message: r`
      Incorrect use of mount in the play function.
      
      To use mount in the play function, you must satisfy the following two requirements: 
      
      1. You *must* destructure the mount property from the \`context\` (the argument passed to your play function). 
         This makes sure that Storybook does not start rendering the story before the play function begins.
      
      2. Your Storybook framework or builder must be configured to transpile to ES2017 or newer. 
         This is because destructuring statements and async/await usages are otherwise transpiled away, 
         which prevents Storybook from recognizing your usage of \`mount\`.
      
      Note that Angular is not supported. As async/await is transpiled to support the zone.js polyfill. 
      
      More info: https://storybook.js.org/docs/writing-tests/interaction-testing#run-code-before-the-component-gets-rendered
      
      Received the following play function:
      ${ne.playFunction}`
    }), this.data = ne;
  }
};
t(_$1, "MountMustBeDestructuredError");
var J$1 = _$1, V$1 = class extends o {
  constructor(ne) {
    super({
      category: "PREVIEW_API",
      code: 14,
      message: r`
        No render function available for storyId '${ne.id}'
      `
    }), this.data = ne;
  }
};
t(V$1, "NoRenderFunctionError");
var q$1 = V$1, N = class extends o {
  constructor() {
    super({
      category: "PREVIEW_API",
      code: 15,
      message: r`
        No component is mounted in your story.
        
        This usually occurs when you destructure mount in the play function, but forget to call it.
        
        For example:

        async play({ mount, canvasElement }) {
          // 👈 mount should be called: await mount(); 
          const canvas = within(canvasElement);
          const button = await canvas.findByRole('button');
          await userEvent.click(button);
        };

        Make sure to either remove it or call mount in your play function.
      `
    });
  }
};
t(N, "NoStoryMountedError");
var z$1 = N, A = class extends o {
  constructor() {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 1,
      documentation: "https://storybook.js.org/docs/get-started/nextjs#faq",
      message: r`
      You are importing avif images, but you don't have sharp installed.

      You have to install sharp in order to use image optimization features in Next.js.
      `
    });
  }
};
t(A, "NextJsSharpError");
var W$1 = class extends o {
  constructor(ne) {
    super({
      category: "FRAMEWORK_NEXTJS",
      code: 2,
      message: r`
        Tried to access router mocks from "${ne.importType}" but they were not created yet. You might be running code in an unsupported environment.
      `
    }), this.data = ne;
  }
};
t(W$1, "NextjsRouterMocksNotAvailable");
var $$1 = class extends o {
  constructor(ne) {
    super({
      category: "DOCS-TOOLS",
      code: 1,
      documentation: "https://github.com/storybookjs/storybook/issues/26606",
      message: r`
        There was a failure when generating detailed ArgTypes in ${ne.language} for:
        ${JSON.stringify(ne.type, null, 2)} 
        
        Storybook will fall back to use a generic type description instead.

        This type is either not supported or it is a bug in the docgen generation in Storybook.
        If you think this is a bug, please detail it as much as possible in the Github issue.
      `
    }), this.data = ne;
  }
};
t($$1, "UnknownArgTypesError");
var O$1 = class extends o {
  constructor(ne) {
    super({
      category: "ADDON_VITEST",
      code: 1,
      // TODO: Add documentation about viewports support
      // documentation: '',
      message: r`
        Encountered an unsupported value "${ne.value}" when setting the viewport ${ne.dimension} dimension.
        
        The Storybook plugin only supports values in the following units:
        - px, vh, vw, em, rem and %.
        
        You can either change the viewport for this story to use one of the supported units or skip the test by adding '!test' to the story's tags per https://storybook.js.org/docs/writing-stories/tags
      `
    }), this.data = ne;
  }
};
t(O$1, "UnsupportedViewportDimensionError");
var b = Object.create, f = Object.defineProperty, v = Object.getOwnPropertyDescriptor, P$1 = Object.getOwnPropertyNames, O = Object.getPrototypeOf, _ = Object.prototype.hasOwnProperty, s$1 = (pt, ne) => f(pt, "name", { value: ne, configurable: !0 }), $ = (pt, ne) => () => (ne || pt((ne = { exports: {} }).exports, ne), ne.exports), j$1 = (pt, ne, yt, ir) => {
  if (ne && typeof ne == "object" || typeof ne == "function")
    for (let io of P$1(ne))
      !_.call(pt, io) && io !== yt && f(pt, io, { get: () => ne[io], enumerable: !(ir = v(ne, io)) || ir.enumerable });
  return pt;
}, C = (pt, ne, yt) => (yt = pt != null ? b(O(pt)) : {}, j$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  f(yt, "default", { value: pt, enumerable: !0 }),
  pt
)), T$1 = $((pt) => {
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.isEqual = /* @__PURE__ */ (function() {
    var ne = Object.prototype.toString, yt = Object.getPrototypeOf, ir = Object.getOwnPropertySymbols ? function(io) {
      return Object.keys(io).concat(Object.getOwnPropertySymbols(io));
    } : Object.keys;
    return function(io, uo) {
      return (/* @__PURE__ */ s$1(function fo(Co, xo, Oo) {
        var Po, _o, Io, jo = ne.call(Co), Lo = ne.call(xo);
        if (Co === xo) return !0;
        if (Co == null || xo == null) return !1;
        if (Oo.indexOf(Co) > -1 && Oo.indexOf(xo) > -1) return !0;
        if (Oo.push(Co, xo), jo != Lo || (Po = ir(Co), _o = ir(xo), Po.length != _o.length || Po.some(function(Ho) {
          return !fo(Co[Ho], xo[Ho], Oo);
        }))) return !1;
        switch (jo.slice(8, -1)) {
          case "Symbol":
            return Co.valueOf() == xo.valueOf();
          case "Date":
          case "Number":
            return +Co == +xo || +Co != +Co && +xo != +xo;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + Co == "" + xo;
          case "Set":
          case "Map":
            Po = Co.entries(), _o = xo.entries();
            do
              if (!fo((Io = Po.next()).value, _o.next().value, Oo)) return !1;
            while (!Io.done);
            return !0;
          case "ArrayBuffer":
            Co = new Uint8Array(Co), xo = new Uint8Array(xo);
          case "DataView":
            Co = new Uint8Array(Co.buffer), xo = new Uint8Array(xo.buffer);
          case "Float32Array":
          case "Float64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint8ClampedArray":
          case "Arguments":
          case "Array":
            if (Co.length != xo.length) return !1;
            for (Io = 0; Io < Co.length; Io++) if ((Io in Co || Io in xo) && (Io in Co != Io in xo || !fo(Co[Io], xo[Io], Oo))) return !1;
            return !0;
          case "Object":
            return fo(yt(Co), yt(xo), Oo);
          default:
            return !1;
        }
      }, "n"))(io, uo, []);
    };
  })();
});
function R(pt) {
  return pt.replace(/_/g, " ").replace(/-/g, " ").replace(/\./g, " ").replace(/([^\n])([A-Z])([a-z])/g, (ne, yt, ir, io) => `${yt} ${ir}${io}`).replace(
    /([a-z])([A-Z])/g,
    (ne, yt, ir) => `${yt} ${ir}`
  ).replace(/([a-z])([0-9])/gi, (ne, yt, ir) => `${yt} ${ir}`).replace(/([0-9])([a-z])/gi, (ne, yt, ir) => `${yt} ${ir}`).replace(/(\s|^)(\w)/g, (ne, yt, ir) => `${yt}${ir.toUpperCase()}`).replace(/ +/g, " ").trim();
}
s$1(R, "toStartCaseStr");
var y = C(T$1()), x = /* @__PURE__ */ s$1((pt) => pt.map((ne) => typeof ne < "u").filter(Boolean).length, "count"), E = /* @__PURE__ */ s$1((pt, ne) => {
  let { exists: yt, eq: ir, neq: io, truthy: uo } = pt;
  if (x([yt, ir, io, uo]) > 1)
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists: yt, eq: ir, neq: io })}`);
  if (typeof ir < "u")
    return (0, y.isEqual)(ne, ir);
  if (typeof io < "u")
    return !(0, y.isEqual)(ne, io);
  if (typeof yt < "u") {
    let fo = typeof ne < "u";
    return yt ? fo : !fo;
  }
  return typeof uo > "u" || uo ? !!ne : !ne;
}, "testValue"), z = /* @__PURE__ */ s$1((pt, ne, yt) => {
  if (!pt.if)
    return !0;
  let { arg: ir, global: io } = pt.if;
  if (x([ir, io]) !== 1)
    throw new Error(`Invalid conditional value ${JSON.stringify({ arg: ir, global: io })}`);
  let uo = ir ? ne[ir] : yt[io];
  return E(pt.if, uo);
}, "includeConditionalArg");
function L$1(pt) {
  let ne, yt = {
    _tag: "Preview",
    input: pt,
    get composed() {
      if (ne)
        return ne;
      let { addons: ir, ...io } = pt;
      return ne = be(Ee([...ir ?? [], io])), ne;
    },
    meta(ir) {
      return I$1(ir, this);
    }
  };
  return globalThis.globalProjectAnnotations = yt.composed, yt;
}
s$1(L$1, "__definePreview");
function W(pt) {
  return pt != null && typeof pt == "object" && "_tag" in pt && (pt == null ? void 0 : pt._tag) === "Preview";
}
s$1(W, "isPreview");
function H(pt) {
  return pt != null && typeof pt == "object" && "_tag" in pt && (pt == null ? void 0 : pt._tag) === "Meta";
}
s$1(H, "isMeta");
function I$1(pt, ne) {
  return {
    _tag: "Meta",
    input: pt,
    preview: ne,
    get composed() {
      throw new Error("Not implemented");
    },
    story(yt) {
      return U(yt, this);
    }
  };
}
s$1(I$1, "defineMeta");
function U(pt, ne) {
  return {
    _tag: "Story",
    input: pt,
    meta: ne,
    get composed() {
      throw new Error("Not implemented");
    }
  };
}
s$1(U, "defineStory");
function K(pt) {
  return pt != null && typeof pt == "object" && "_tag" in pt && (pt == null ? void 0 : pt._tag) === "Story";
}
s$1(K, "isStory");
var D = /* @__PURE__ */ s$1((pt) => pt.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(
  /-+/g,
  "-"
).replace(/^-+/, "").replace(/-+$/, ""), "sanitize"), w = /* @__PURE__ */ s$1((pt, ne) => {
  let yt = D(pt);
  if (yt === "")
    throw new Error(`Invalid ${ne} '${pt}', must include alphanumeric characters`);
  return yt;
}, "sanitizeSafe"), ee$1 = /* @__PURE__ */ s$1((pt, ne) => `${w(pt, "kind")}${ne ? `--${w(ne, "name")}` : ""}`, "toId"), re$1 = /* @__PURE__ */ s$1((pt) => R(
  pt
), "storyNameFromExport");
function S(pt, ne) {
  return Array.isArray(ne) ? ne.includes(pt) : pt.match(ne);
}
s$1(S, "matches");
function te$1(pt, { includeStories: ne, excludeStories: yt }) {
  return (
    // https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
    pt !== "__esModule" && (!ne || S(pt, ne)) && (!yt || !S(pt, yt))
  );
}
s$1(te$1, "isExportStory");
var oe = /* @__PURE__ */ s$1((...pt) => {
  let ne = pt.reduce((yt, ir) => (ir.startsWith("!") ? yt.delete(ir.slice(1)) : yt.add(ir), yt), /* @__PURE__ */ new Set());
  return Array.from(ne);
}, "combineTags"), zn = Object.create, br = Object.defineProperty, Vn = Object.getOwnPropertyDescriptor, Hn = Object.getOwnPropertyNames, Wn = Object.getPrototypeOf, $n = Object.prototype.hasOwnProperty, s = (pt, ne) => br(pt, "name", { value: ne, configurable: !0 }), Fe = /* @__PURE__ */ ((pt) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(pt, {
  get: (ne, yt) => (typeof require < "u" ? require : ne)[yt]
}) : pt)(function(pt) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + pt + '" is not supported');
}), k = (pt, ne) => () => (ne || pt((ne = { exports: {} }).exports, ne), ne.exports), Yn = (pt, ne, yt, ir) => {
  if (ne && typeof ne == "object" || typeof ne == "function")
    for (let io of Hn(ne))
      !$n.call(pt, io) && io !== yt && br(pt, io, { get: () => ne[io], enumerable: !(ir = Vn(ne, io)) || ir.enumerable });
  return pt;
}, he = (pt, ne, yt) => (yt = pt != null ? zn(Wn(pt)) : {}, Yn(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  br(yt, "default", { value: pt, enumerable: !0 }),
  pt
)), _r = k((pt, ne) => {
  (function(yt) {
    if (typeof pt == "object" && typeof ne < "u")
      ne.exports = yt();
    else if (typeof define == "function" && define.amd)
      define([], yt);
    else {
      var ir;
      typeof window < "u" ? ir = window : typeof global < "u" ? ir = global : typeof self < "u" ? ir = self : ir = this, ir.memoizerific = yt();
    }
  })(function() {
    return (/* @__PURE__ */ s(function yt(ir, io, uo) {
      function fo(Oo, Po) {
        if (!io[Oo]) {
          if (!ir[Oo]) {
            var _o = typeof Fe == "function" && Fe;
            if (!Po && _o) return _o(Oo, !0);
            if (Co) return Co(Oo, !0);
            var Io = new Error("Cannot find module '" + Oo + "'");
            throw Io.code = "MODULE_NOT_FOUND", Io;
          }
          var jo = io[Oo] = { exports: {} };
          ir[Oo][0].call(jo.exports, function(Lo) {
            var Ho = ir[Oo][1][Lo];
            return fo(Ho || Lo);
          }, jo, jo.exports, yt, ir, io, uo);
        }
        return io[Oo].exports;
      }
      s(fo, "s");
      for (var Co = typeof Fe == "function" && Fe, xo = 0; xo < uo.length; xo++) fo(uo[xo]);
      return fo;
    }, "e"))({ 1: [function(yt, ir, io) {
      ir.exports = function(uo) {
        if (typeof Map != "function" || uo) {
          var fo = yt("./similar");
          return new fo();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(yt, ir, io) {
      function uo() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      s(uo, "Similar"), uo.prototype.get = function(fo) {
        var Co;
        if (this.lastItem && this.isEqual(this.lastItem.key, fo))
          return this.lastItem.val;
        if (Co = this.indexOf(fo), Co >= 0)
          return this.lastItem = this.list[Co], this.list[Co].val;
      }, uo.prototype.set = function(fo, Co) {
        var xo;
        return this.lastItem && this.isEqual(this.lastItem.key, fo) ? (this.lastItem.val = Co, this) : (xo = this.indexOf(fo), xo >= 0 ? (this.lastItem = this.list[xo], this.list[xo].val = Co, this) : (this.lastItem = { key: fo, val: Co }, this.list.push(this.lastItem), this.size++, this));
      }, uo.prototype.delete = function(fo) {
        var Co;
        if (this.lastItem && this.isEqual(this.lastItem.key, fo) && (this.lastItem = void 0), Co = this.indexOf(fo), Co >= 0)
          return this.size--, this.list.splice(Co, 1)[0];
      }, uo.prototype.has = function(fo) {
        var Co;
        return this.lastItem && this.isEqual(this.lastItem.key, fo) ? !0 : (Co = this.indexOf(fo), Co >= 0 ? (this.lastItem = this.list[Co], !0) : !1);
      }, uo.prototype.forEach = function(fo, Co) {
        var xo;
        for (xo = 0; xo < this.size; xo++)
          fo.call(Co || this, this.list[xo].val, this.list[xo].key, this);
      }, uo.prototype.indexOf = function(fo) {
        var Co;
        for (Co = 0; Co < this.size; Co++)
          if (this.isEqual(this.list[Co].key, fo))
            return Co;
        return -1;
      }, uo.prototype.isEqual = function(fo, Co) {
        return fo === Co || fo !== fo && Co !== Co;
      }, ir.exports = uo;
    }, {}], 3: [function(yt, ir, io) {
      var uo = yt("map-or-similar");
      ir.exports = function(Oo) {
        var Po = new uo(!1), _o = [];
        return function(Io) {
          var jo = /* @__PURE__ */ s(function() {
            var Lo = Po, Ho, qo, Vo = arguments.length - 1, Mo = Array(Vo + 1), Uo = !0, zo;
            if ((jo.numArgs || jo.numArgs === 0) && jo.numArgs !== Vo + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (zo = 0; zo < Vo; zo++) {
              if (Mo[zo] = {
                cacheItem: Lo,
                arg: arguments[zo]
              }, Lo.has(arguments[zo])) {
                Lo = Lo.get(arguments[zo]);
                continue;
              }
              Uo = !1, Ho = new uo(!1), Lo.set(arguments[zo], Ho), Lo = Ho;
            }
            return Uo && (Lo.has(arguments[Vo]) ? qo = Lo.get(arguments[Vo]) : Uo = !1), Uo || (qo = Io.apply(null, arguments), Lo.set(arguments[Vo], qo)), Oo > 0 && (Mo[Vo] = {
              cacheItem: Lo,
              arg: arguments[Vo]
            }, Uo ? fo(_o, Mo) : _o.push(Mo), _o.length > Oo && Co(_o.shift())), jo.wasMemoized = Uo, jo.numArgs = Vo + 1, qo;
          }, "memoizerific");
          return jo.limit = Oo, jo.wasMemoized = !1, jo.cache = Po, jo.lru = _o, jo;
        };
      };
      function fo(Oo, Po) {
        var _o = Oo.length, Io = Po.length, jo, Lo, Ho;
        for (Lo = 0; Lo < _o; Lo++) {
          for (jo = !0, Ho = 0; Ho < Io; Ho++)
            if (!xo(Oo[Lo][Ho].arg, Po[Ho].arg)) {
              jo = !1;
              break;
            }
          if (jo)
            break;
        }
        Oo.push(Oo.splice(Lo, 1)[0]);
      }
      s(fo, "moveToMostRecentLru");
      function Co(Oo) {
        var Po = Oo.length, _o = Oo[Po - 1], Io, jo;
        for (_o.cacheItem.delete(_o.arg), jo = Po - 2; jo >= 0 && (_o = Oo[jo], Io = _o.cacheItem.get(_o.arg), !Io || !Io.size); jo--)
          _o.cacheItem.delete(_o.arg);
      }
      s(Co, "removeCachedResult");
      function xo(Oo, Po) {
        return Oo === Po || Oo !== Oo && Po !== Po;
      }
      s(xo, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
}), dt = k((pt) => {
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.encodeString = ir;
  var ne = Array.from({ length: 256 }, (io, uo) => "%" + ((uo < 16 ? "0" : "") + uo.toString(16)).toUpperCase()), yt = new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0
  ]);
  function ir(io) {
    let uo = io.length;
    if (uo === 0)
      return "";
    let fo = "", Co = 0, xo = 0;
    e: for (; xo < uo; xo++) {
      let Oo = io.charCodeAt(xo);
      for (; Oo < 128; ) {
        if (yt[Oo] !== 1 && (Co < xo && (fo += io.slice(Co, xo)), Co = xo + 1, fo += ne[Oo]), ++xo === uo)
          break e;
        Oo = io.charCodeAt(xo);
      }
      if (Co < xo && (fo += io.slice(Co, xo)), Oo < 2048) {
        Co = xo + 1, fo += ne[192 | Oo >> 6] + ne[128 | Oo & 63];
        continue;
      }
      if (Oo < 55296 || Oo >= 57344) {
        Co = xo + 1, fo += ne[224 | Oo >> 12] + ne[128 | Oo >> 6 & 63] + ne[128 | Oo & 63];
        continue;
      }
      if (++xo, xo >= uo)
        throw new Error("URI malformed");
      let Po = io.charCodeAt(xo) & 1023;
      Co = xo + 1, Oo = 65536 + ((Oo & 1023) << 10 | Po), fo += ne[240 | Oo >> 18] + ne[128 | Oo >> 12 & 63] + ne[128 | Oo >> 6 & 63] + ne[128 | Oo & 63];
    }
    return Co === 0 ? io : Co < uo ? fo + io.slice(Co) : fo;
  }
  s(ir, "encodeString");
}), sr = k((pt) => {
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.defaultOptions = pt.defaultShouldSerializeObject = pt.defaultValueSerializer = void 0;
  var ne = dt(), yt = /* @__PURE__ */ s((uo) => {
    switch (typeof uo) {
      case "string":
        return (0, ne.encodeString)(uo);
      case "bigint":
      case "boolean":
        return "" + uo;
      case "number":
        if (Number.isFinite(uo))
          return uo < 1e21 ? "" + uo : (0, ne.encodeString)("" + uo);
        break;
    }
    return uo instanceof Date ? (0, ne.encodeString)(uo.toISOString()) : "";
  }, "defaultValueSerializer");
  pt.defaultValueSerializer = yt;
  var ir = /* @__PURE__ */ s((uo) => uo instanceof Date, "defaultShouldSerializeObject");
  pt.defaultShouldSerializeObject = ir;
  var io = /* @__PURE__ */ s((uo) => uo, "identityFunc");
  pt.defaultOptions = {
    nesting: !0,
    nestingSyntax: "dot",
    arrayRepeat: !1,
    arrayRepeatSyntax: "repeat",
    delimiter: 38,
    valueDeserializer: io,
    valueSerializer: pt.defaultValueSerializer,
    keyDeserializer: io,
    shouldSerializeObject: pt.defaultShouldSerializeObject
  };
}), ut = k((pt) => {
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.getDeepObject = io, pt.stringifyObject = Po;
  var ne = sr(), yt = dt();
  function ir(_o) {
    return _o === "__proto__" || _o === "constructor" || _o === "prototype";
  }
  s(ir, "isPrototypeKey");
  function io(_o, Io, jo, Lo, Ho) {
    if (ir(Io))
      return _o;
    let qo = _o[Io];
    return typeof qo == "object" && qo !== null ? qo : !Lo && (Ho || typeof jo == "number" || typeof jo == "string" && jo * 0 === 0 && jo.indexOf(".") === -1) ? _o[Io] = [] : _o[Io] = {};
  }
  s(io, "getDeepObject");
  var uo = 20, fo = "[]", Co = "[", xo = "]", Oo = ".";
  function Po(_o, Io, jo = 0, Lo, Ho) {
    let { nestingSyntax: qo = ne.defaultOptions.nestingSyntax, arrayRepeat: Vo = ne.defaultOptions.arrayRepeat, arrayRepeatSyntax: Mo = ne.defaultOptions.arrayRepeatSyntax, nesting: Uo = ne.defaultOptions.nesting, delimiter: zo = ne.defaultOptions.delimiter, valueSerializer: ms = ne.defaultOptions.valueSerializer, shouldSerializeObject: Xo = ne.defaultOptions.shouldSerializeObject } = Io, Ko = typeof zo == "number" ? String.fromCharCode(
      zo
    ) : zo, bs = Ho === !0 && Vo, Cs = qo === "dot" || qo === "js" && !Ho;
    if (jo > uo)
      return "";
    let Es = "", Ds = !0, es = !1;
    for (let gs in _o) {
      let Fo = _o[gs], No;
      Lo ? (No = Lo, bs ? Mo === "bracket" && (No += fo) : Cs ? (No += Oo, No += gs) : (No += Co, No += gs, No += xo)) : No = gs, Ds || (Es += Ko), typeof Fo == "object" && Fo !== null && !Xo(Fo) ? (es = Fo.pop !== void 0, (Uo || Vo && es) && (Es += Po(Fo, Io, jo + 1, No, es))) : (Es += (0, yt.encodeString)(No), Es += "=", Es += ms(Fo, gs)), Ds && (Ds = !1);
    }
    return Es;
  }
  s(Po, "stringifyObject");
}), $o = k((pt, ne) => {
  var yt = 12, ir = 0, io = [
    // The first part of the table maps bytes to character to a transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    // The second part of the table maps a state to a new state when adding a
    // transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    // The third part maps the current transition to a mask that needs to apply
    // to the byte.
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
  function uo(xo) {
    var Oo = xo.indexOf("%");
    if (Oo === -1) return xo;
    for (var Po = xo.length, _o = "", Io = 0, jo = 0, Lo = Oo, Ho = yt; Oo > -1 && Oo < Po; ) {
      var qo = Co(xo[Oo + 1], 4), Vo = Co(xo[Oo + 2], 0), Mo = qo | Vo, Uo = io[Mo];
      if (Ho = io[256 + Ho + Uo], jo = jo << 6 | Mo & io[364 + Uo], Ho === yt)
        _o += xo.slice(Io, Lo), _o += jo <= 65535 ? String.fromCharCode(jo) : String.fromCharCode(
          55232 + (jo >> 10),
          56320 + (jo & 1023)
        ), jo = 0, Io = Oo + 3, Oo = Lo = xo.indexOf("%", Io);
      else {
        if (Ho === ir)
          return null;
        if (Oo += 3, Oo < Po && xo.charCodeAt(Oo) === 37) continue;
        return null;
      }
    }
    return _o + xo.slice(Io);
  }
  s(uo, "decodeURIComponent");
  var fo = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  function Co(xo, Oo) {
    var Po = fo[xo];
    return Po === void 0 ? 255 : Po << Oo;
  }
  s(Co, "hexCodeToInt"), ne.exports = uo;
}), Jo = k((pt) => {
  var ne = pt && pt.__importDefault || function(_o) {
    return _o && _o.__esModule ? _o : { default: _o };
  };
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.numberValueDeserializer = pt.numberKeyDeserializer = void 0, pt.parse = Po;
  var yt = ut(), ir = sr(), io = ne($o()), uo = /* @__PURE__ */ s((_o) => {
    let Io = Number(_o);
    return Number.isNaN(Io) ? _o : Io;
  }, "numberKeyDeserializer");
  pt.numberKeyDeserializer = uo;
  var fo = /* @__PURE__ */ s((_o) => {
    let Io = Number(_o);
    return Number.isNaN(Io) ? _o : Io;
  }, "numberValueDeserializer");
  pt.numberValueDeserializer = fo;
  var Co = /\+/g, xo = /* @__PURE__ */ s(function() {
  }, "Empty");
  xo.prototype = /* @__PURE__ */ Object.create(null);
  function Oo(_o, Io, jo, Lo, Ho) {
    let qo = _o.substring(Io, jo);
    return Lo && (qo = qo.replace(Co, " ")), Ho && (qo = (0, io.default)(qo) || qo), qo;
  }
  s(Oo, "computeKeySlice");
  function Po(_o, Io) {
    let { valueDeserializer: jo = ir.defaultOptions.valueDeserializer, keyDeserializer: Lo = ir.defaultOptions.keyDeserializer, arrayRepeatSyntax: Ho = ir.defaultOptions.arrayRepeatSyntax, nesting: qo = ir.defaultOptions.nesting, arrayRepeat: Vo = ir.defaultOptions.arrayRepeat, nestingSyntax: Mo = ir.defaultOptions.nestingSyntax, delimiter: Uo = ir.defaultOptions.delimiter } = Io ?? {}, zo = typeof Uo == "string" ? Uo.charCodeAt(0) : Uo, ms = Mo === "js", Xo = new xo();
    if (typeof _o != "string")
      return Xo;
    let Ko = _o.length, bs = "", Cs = -1, Es = -1, Ds = -1, es = Xo, gs, Fo = "", No = "", Bo = !1, Wo = !1, Yo = !1, Ss = !1, Fs = !1, _s = !1, Rs = !1, Is = 0, ks = -1, Ms = -1, qs = -1;
    for (let Ps = 0; Ps < Ko + 1; Ps++) {
      if (Is = Ps !== Ko ? _o.charCodeAt(Ps) : zo, Is === zo) {
        if (Rs = Es > Cs, Rs || (Es = Ps), Ds !== Es - 1 && (No = Oo(_o, Ds + 1, ks > -1 ? ks : Es, Yo, Bo), Fo = Lo(No), gs !== void 0 && (es = (0, yt.getDeepObject)(
          es,
          gs,
          Fo,
          ms && Fs,
          ms && _s
        ))), Rs || Fo !== "") {
          Rs && (bs = _o.slice(Es + 1, Ps), Ss && (bs = bs.replace(Co, " ")), Wo && (bs = (0, io.default)(bs) || bs));
          let Hs = jo(bs, Fo);
          if (Vo) {
            let Vs = es[Fo];
            Vs === void 0 ? ks > -1 ? es[Fo] = [Hs] : es[Fo] = Hs : Vs.pop ? Vs.push(Hs) : es[Fo] = [Vs, Hs];
          } else
            es[Fo] = Hs;
        }
        bs = "", Cs = Ps, Es = Ps, Bo = !1, Wo = !1, Yo = !1, Ss = !1, Fs = !1, _s = !1, ks = -1, Ds = Ps, es = Xo, gs = void 0, Fo = "";
      } else Is === 93 ? (Vo && Ho === "bracket" && qs === 91 && (ks = Ms), qo && (Mo === "index" || ms) && Es <= Cs && (Ds !== Ms && (No = Oo(
        _o,
        Ds + 1,
        Ps,
        Yo,
        Bo
      ), Fo = Lo(No), gs !== void 0 && (es = (0, yt.getDeepObject)(es, gs, Fo, void 0, ms)), gs = Fo, Yo = !1, Bo = !1), Ds = Ps, _s = !0, Fs = !1)) : Is === 46 ? qo && (Mo === "dot" || ms) && Es <= Cs && (Ds !== Ms && (No = Oo(_o, Ds + 1, Ps, Yo, Bo), Fo = Lo(No), gs !== void 0 && (es = (0, yt.getDeepObject)(
        es,
        gs,
        Fo,
        ms
      )), gs = Fo, Yo = !1, Bo = !1), Fs = !0, _s = !1, Ds = Ps) : Is === 91 ? qo && (Mo === "index" || ms) && Es <= Cs && (Ds !== Ms && (No = Oo(
        _o,
        Ds + 1,
        Ps,
        Yo,
        Bo
      ), Fo = Lo(No), ms && gs !== void 0 && (es = (0, yt.getDeepObject)(es, gs, Fo, ms)), gs = Fo, Yo = !1, Bo = !1, Fs = !1, _s = !0), Ds = Ps) : Is === 61 ? Es <= Cs ? Es = Ps : Wo = !0 : Is === 43 ? Es > Cs ? Ss = !0 : Yo = !0 : Is === 37 && (Es > Cs ? Wo = !0 : Bo = !0);
      Ms = Ps, qs = Is;
    }
    return Xo;
  }
  s(Po, "parse");
}), Qo = k((pt) => {
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.stringify = yt;
  var ne = ut();
  function yt(ir, io) {
    if (ir === null || typeof ir != "object")
      return "";
    let uo = io ?? {};
    return (0, ne.stringifyObject)(ir, uo);
  }
  s(yt, "stringify");
}), cr = k((pt) => {
  var ne = pt && pt.__createBinding || (Object.create ? function(uo, fo, Co, xo) {
    xo === void 0 && (xo = Co);
    var Oo = Object.getOwnPropertyDescriptor(fo, Co);
    (!Oo || ("get" in Oo ? !fo.__esModule : Oo.writable || Oo.configurable)) && (Oo = { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return fo[Co];
    }, "get") }), Object.defineProperty(uo, xo, Oo);
  } : function(uo, fo, Co, xo) {
    xo === void 0 && (xo = Co), uo[xo] = fo[Co];
  }), yt = pt && pt.__exportStar || function(uo, fo) {
    for (var Co in uo) Co !== "default" && !Object.prototype.hasOwnProperty.call(fo, Co) && ne(fo, uo, Co);
  };
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.stringify = pt.parse = void 0;
  var ir = Jo();
  Object.defineProperty(pt, "parse", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return ir.parse;
  }, "get") });
  var io = Qo();
  Object.defineProperty(pt, "stringify", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return io.stringify;
  }, "get") }), yt(sr(), pt);
}), St = k((pt, ne) => {
  ne.exports = {
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    amp: "&",
    AMP: "&",
    andand: "⩕",
    And: "⩓",
    and: "∧",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angmsd: "∡",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    apacir: "⩯",
    ap: "≈",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    barwed: "⌅",
    Barwed: "⌆",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    because: "∵",
    Because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxdl: "┐",
    boxdL: "╕",
    boxDl: "╖",
    boxDL: "╗",
    boxdr: "┌",
    boxdR: "╒",
    boxDr: "╓",
    boxDR: "╔",
    boxh: "─",
    boxH: "═",
    boxhd: "┬",
    boxHd: "╤",
    boxhD: "╥",
    boxHD: "╦",
    boxhu: "┴",
    boxHu: "╧",
    boxhU: "╨",
    boxHU: "╩",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxul: "┘",
    boxuL: "╛",
    boxUl: "╜",
    boxUL: "╝",
    boxur: "└",
    boxuR: "╘",
    boxUr: "╙",
    boxUR: "╚",
    boxv: "│",
    boxV: "║",
    boxvh: "┼",
    boxvH: "╪",
    boxVh: "╫",
    boxVH: "╬",
    boxvl: "┤",
    boxvL: "╡",
    boxVl: "╢",
    boxVL: "╣",
    boxvr: "├",
    boxvR: "╞",
    boxVr: "╟",
    boxVR: "╠",
    bprime: "‵",
    breve: "˘",
    Breve: "˘",
    brvbar: "¦",
    bscr: "𝒷",
    Bscr: "ℬ",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsolb: "⧅",
    bsol: "\\",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    cap: "∩",
    Cap: "⋒",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    centerdot: "·",
    CenterDot: "·",
    cfr: "𝔠",
    Cfr: "ℭ",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cir: "○",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    Colon: "∷",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    conint: "∮",
    Conint: "∯",
    ContourIntegral: "∮",
    copf: "𝕔",
    Copf: "ℂ",
    coprod: "∐",
    Coproduct: "∐",
    copy: "©",
    COPY: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    cross: "✗",
    Cross: "⨯",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    cupbrcap: "⩈",
    cupcap: "⩆",
    CupCap: "≍",
    cup: "∪",
    Cup: "⋓",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    dagger: "†",
    Dagger: "‡",
    daleth: "ℸ",
    darr: "↓",
    Darr: "↡",
    dArr: "⇓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    ddagger: "‡",
    ddarr: "⇊",
    DD: "ⅅ",
    dd: "ⅆ",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    diamond: "⋄",
    Diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrowBar: "⤓",
    downarrow: "↓",
    DownArrow: "↓",
    Downarrow: "⇓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVectorBar: "⥖",
    DownLeftVector: "↽",
    DownRightTeeVector: "⥟",
    DownRightVectorBar: "⥗",
    DownRightVector: "⇁",
    DownTeeArrow: "↧",
    DownTee: "⊤",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    Ecirc: "Ê",
    ecirc: "ê",
    ecir: "≖",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    edot: "ė",
    eDot: "≑",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    escr: "ℯ",
    Escr: "ℰ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    exponentiale: "ⅇ",
    ExponentialE: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    forall: "∀",
    ForAll: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    fscr: "𝒻",
    Fscr: "ℱ",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    ge: "≥",
    gE: "≧",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    gescc: "⪩",
    ges: "⩾",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    gg: "≫",
    Gg: "⋙",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gla: "⪥",
    gl: "≷",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gnE: "≩",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    gtcc: "⪧",
    gtcir: "⩺",
    gt: ">",
    GT: ">",
    Gt: "≫",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    harrcir: "⥈",
    harr: "↔",
    hArr: "⇔",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    hfr: "𝔥",
    Hfr: "ℌ",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    hopf: "𝕙",
    Hopf: "ℍ",
    horbar: "―",
    HorizontalLine: "─",
    hscr: "𝒽",
    Hscr: "ℋ",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    ifr: "𝔦",
    Ifr: "ℑ",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    Im: "ℑ",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    incare: "℅",
    in: "∈",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    intcal: "⊺",
    int: "∫",
    Int: "∬",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    iscr: "𝒾",
    Iscr: "ℐ",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    lang: "⟨",
    Lang: "⟪",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    larrb: "⇤",
    larrbfs: "⤟",
    larr: "←",
    Larr: "↞",
    lArr: "⇐",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    latail: "⤙",
    lAtail: "⤛",
    lat: "⪫",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lBarr: "⤎",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    lE: "≦",
    LeftAngleBracket: "⟨",
    LeftArrowBar: "⇤",
    leftarrow: "←",
    LeftArrow: "←",
    Leftarrow: "⇐",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVectorBar: "⥙",
    LeftDownVector: "⇃",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    leftrightarrow: "↔",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTeeArrow: "↤",
    LeftTee: "⊣",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangleBar: "⧏",
    LeftTriangle: "⊲",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVectorBar: "⥘",
    LeftUpVector: "↿",
    LeftVectorBar: "⥒",
    LeftVector: "↼",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    lescc: "⪨",
    les: "⩽",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    llarr: "⇇",
    ll: "≪",
    Ll: "⋘",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoustache: "⎰",
    lmoust: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lnE: "≨",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    longleftarrow: "⟵",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftrightarrow: "⟷",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longmapsto: "⟼",
    longrightarrow: "⟶",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "𝓁",
    Lscr: "ℒ",
    lsh: "↰",
    Lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    ltcc: "⪦",
    ltcir: "⩹",
    lt: "<",
    LT: "<",
    Lt: "≪",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    midast: "*",
    midcir: "⫰",
    mid: "∣",
    middot: "·",
    minusb: "⊟",
    minus: "−",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    mscr: "𝓂",
    Mscr: "ℳ",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natural: "♮",
    naturals: "ℕ",
    natur: "♮",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    nearhk: "⤤",
    nearr: "↗",
    neArr: "⇗",
    nearrow: "↗",
    ne: "≠",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nharr: "↮",
    nhArr: "⇎",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlarr: "↚",
    nlArr: "⇍",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nleftarrow: "↚",
    nLeftarrow: "⇍",
    nleftrightarrow: "↮",
    nLeftrightarrow: "⇎",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    nopf: "𝕟",
    Nopf: "ℕ",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangle: "⋪",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangle: "⋫",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    nparallel: "∦",
    npar: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    nprec: "⊀",
    npreceq: "⪯̸",
    npre: "⪯̸",
    nrarrc: "⤳̸",
    nrarr: "↛",
    nrArr: "⇏",
    nrarrw: "↝̸",
    nrightarrow: "↛",
    nRightarrow: "⇏",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvDash: "⊭",
    nVdash: "⊮",
    nVDash: "⊯",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwarr: "↖",
    nwArr: "⇖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    Ocirc: "Ô",
    ocirc: "ô",
    ocir: "⊚",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    orarr: "↻",
    Or: "⩔",
    or: "∨",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    otimesas: "⨶",
    Otimes: "⨷",
    otimes: "⊗",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    para: "¶",
    parallel: "∥",
    par: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plus: "+",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    popf: "𝕡",
    Popf: "ℙ",
    pound: "£",
    prap: "⪷",
    Pr: "⪻",
    pr: "≺",
    prcue: "≼",
    precapprox: "⪷",
    prec: "≺",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    pre: "⪯",
    prE: "⪳",
    precsim: "≾",
    prime: "′",
    Prime: "″",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportional: "∝",
    Proportion: "∷",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    qopf: "𝕢",
    Qopf: "ℚ",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    quot: '"',
    QUOT: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    rang: "⟩",
    Rang: "⟫",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarr: "→",
    Rarr: "↠",
    rArr: "⇒",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    ratail: "⤚",
    rAtail: "⤜",
    ratio: "∶",
    rationals: "ℚ",
    rbarr: "⤍",
    rBarr: "⤏",
    RBarr: "⤐",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    Re: "ℜ",
    rect: "▭",
    reg: "®",
    REG: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    rfr: "𝔯",
    Rfr: "ℜ",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrowBar: "⇥",
    rightarrow: "→",
    RightArrow: "→",
    Rightarrow: "⇒",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVectorBar: "⥕",
    RightDownVector: "⇂",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTeeArrow: "↦",
    RightTee: "⊢",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangleBar: "⧐",
    RightTriangle: "⊳",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVectorBar: "⥔",
    RightUpVector: "↾",
    RightVectorBar: "⥓",
    RightVector: "⇀",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoustache: "⎱",
    rmoust: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    ropf: "𝕣",
    Ropf: "ℝ",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    rscr: "𝓇",
    Rscr: "ℛ",
    rsh: "↱",
    Rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    Sc: "⪼",
    sc: "≻",
    sccue: "≽",
    sce: "⪰",
    scE: "⪴",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdotb: "⊡",
    sdot: "⋅",
    sdote: "⩦",
    searhk: "⤥",
    searr: "↘",
    seArr: "⇘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    solbar: "⌿",
    solb: "⧄",
    sol: "/",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    square: "□",
    Square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squ: "□",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    sub: "⊂",
    Sub: "⋐",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subset: "⊂",
    Subset: "⋐",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succapprox: "⪸",
    succ: "≻",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    sum: "∑",
    Sum: "∑",
    sung: "♪",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    sup: "⊃",
    Sup: "⋑",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    supset: "⊃",
    Supset: "⋑",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swarr: "↙",
    swArr: "⇙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "	",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    therefore: "∴",
    Therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    ThinSpace: " ",
    thinsp: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    tilde: "˜",
    Tilde: "∼",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    timesbar: "⨱",
    timesb: "⊠",
    times: "×",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    topbot: "⌶",
    topcir: "⫱",
    top: "⊤",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    trade: "™",
    TRADE: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    uarr: "↑",
    Uarr: "↟",
    uArr: "⇑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrowBar: "⤒",
    uparrow: "↑",
    UpArrow: "↑",
    Uparrow: "⇑",
    UpArrowDownArrow: "⇅",
    updownarrow: "↕",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    upsi: "υ",
    Upsi: "ϒ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTeeArrow: "↥",
    UpTee: "⊥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    varr: "↕",
    vArr: "⇕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    vBar: "⫨",
    Vbar: "⫫",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    vdash: "⊢",
    vDash: "⊨",
    Vdash: "⊩",
    VDash: "⊫",
    Vdashl: "⫦",
    veebar: "⊻",
    vee: "∨",
    Vee: "⋁",
    veeeq: "≚",
    vellip: "⋮",
    verbar: "|",
    Verbar: "‖",
    vert: "|",
    Vert: "‖",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedge: "∧",
    Wedge: "⋀",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xharr: "⟷",
    xhArr: "⟺",
    Xi: "Ξ",
    xi: "ξ",
    xlarr: "⟵",
    xlArr: "⟸",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrarr: "⟶",
    xrArr: "⟹",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    yuml: "ÿ",
    Yuml: "Ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    zfr: "𝔷",
    Zfr: "ℨ",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "𝕫",
    Zopf: "ℤ",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  };
}), sn = k((pt, ne) => {
  ne.exports = {
    Aacute: "Á",
    aacute: "á",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    AElig: "Æ",
    aelig: "æ",
    Agrave: "À",
    agrave: "à",
    amp: "&",
    AMP: "&",
    Aring: "Å",
    aring: "å",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    brvbar: "¦",
    Ccedil: "Ç",
    ccedil: "ç",
    cedil: "¸",
    cent: "¢",
    copy: "©",
    COPY: "©",
    curren: "¤",
    deg: "°",
    divide: "÷",
    Eacute: "É",
    eacute: "é",
    Ecirc: "Ê",
    ecirc: "ê",
    Egrave: "È",
    egrave: "è",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    frac12: "½",
    frac14: "¼",
    frac34: "¾",
    gt: ">",
    GT: ">",
    Iacute: "Í",
    iacute: "í",
    Icirc: "Î",
    icirc: "î",
    iexcl: "¡",
    Igrave: "Ì",
    igrave: "ì",
    iquest: "¿",
    Iuml: "Ï",
    iuml: "ï",
    laquo: "«",
    lt: "<",
    LT: "<",
    macr: "¯",
    micro: "µ",
    middot: "·",
    nbsp: " ",
    not: "¬",
    Ntilde: "Ñ",
    ntilde: "ñ",
    Oacute: "Ó",
    oacute: "ó",
    Ocirc: "Ô",
    ocirc: "ô",
    Ograve: "Ò",
    ograve: "ò",
    ordf: "ª",
    ordm: "º",
    Oslash: "Ø",
    oslash: "ø",
    Otilde: "Õ",
    otilde: "õ",
    Ouml: "Ö",
    ouml: "ö",
    para: "¶",
    plusmn: "±",
    pound: "£",
    quot: '"',
    QUOT: '"',
    raquo: "»",
    reg: "®",
    REG: "®",
    sect: "§",
    shy: "­",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    szlig: "ß",
    THORN: "Þ",
    thorn: "þ",
    times: "×",
    Uacute: "Ú",
    uacute: "ú",
    Ucirc: "Û",
    ucirc: "û",
    Ugrave: "Ù",
    ugrave: "ù",
    uml: "¨",
    Uuml: "Ü",
    uuml: "ü",
    Yacute: "Ý",
    yacute: "ý",
    yen: "¥",
    yuml: "ÿ"
  };
}), bt = k((pt, ne) => {
  ne.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
}), an = k((pt, ne) => {
  ne.exports = {
    0: 65533,
    128: 8364,
    130: 8218,
    131: 402,
    132: 8222,
    133: 8230,
    134: 8224,
    135: 8225,
    136: 710,
    137: 8240,
    138: 352,
    139: 8249,
    140: 338,
    142: 381,
    145: 8216,
    146: 8217,
    147: 8220,
    148: 8221,
    149: 8226,
    150: 8211,
    151: 8212,
    152: 732,
    153: 8482,
    154: 353,
    155: 8250,
    156: 339,
    158: 382,
    159: 376
  };
}), cn = k((pt) => {
  var ne = pt && pt.__importDefault || function(uo) {
    return uo && uo.__esModule ? uo : { default: uo };
  };
  Object.defineProperty(pt, "__esModule", { value: !0 });
  var yt = ne(an()), ir = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.fromCodePoint || function(uo) {
      var fo = "";
      return uo > 65535 && (uo -= 65536, fo += String.fromCharCode(uo >>> 10 & 1023 | 55296), uo = 56320 | uo & 1023), fo += String.fromCharCode(uo), fo;
    }
  );
  function io(uo) {
    return uo >= 55296 && uo <= 57343 || uo > 1114111 ? "�" : (uo in yt.default && (uo = yt.default[uo]), ir(uo));
  }
  s(io, "decodeCodePoint"), pt.default = io;
}), Et = k((pt) => {
  var ne = pt && pt.__importDefault || function(Po) {
    return Po && Po.__esModule ? Po : { default: Po };
  };
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.decodeHTML = pt.decodeHTMLStrict = pt.decodeXML = void 0;
  var yt = ne(St()), ir = ne(sn()), io = ne(bt()), uo = ne(cn()), fo = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
  pt.decodeXML = Co(io.default), pt.decodeHTMLStrict = Co(yt.default);
  function Co(Po) {
    var _o = Oo(Po);
    return function(Io) {
      return String(Io).replace(fo, _o);
    };
  }
  s(Co, "getStrictDecoder");
  var xo = /* @__PURE__ */ s(function(Po, _o) {
    return Po < _o ? 1 : -1;
  }, "sorter");
  pt.decodeHTML = (function() {
    for (var Po = Object.keys(ir.default).sort(xo), _o = Object.keys(yt.default).sort(xo), Io = 0, jo = 0; Io < _o.length; Io++)
      Po[jo] === _o[Io] ? (_o[Io] += ";?", jo++) : _o[Io] += ";";
    var Lo = new RegExp("&(?:" + _o.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), Ho = Oo(yt.default);
    function qo(Vo) {
      return Vo.substr(-1) !== ";" && (Vo += ";"), Ho(Vo);
    }
    return s(qo, "replacer"), function(Vo) {
      return String(Vo).replace(Lo, qo);
    };
  })();
  function Oo(Po) {
    return /* @__PURE__ */ s(function(_o) {
      if (_o.charAt(1) === "#") {
        var Io = _o.charAt(2);
        return Io === "X" || Io === "x" ? uo.default(parseInt(_o.substr(3), 16)) : uo.default(parseInt(_o.substr(2), 10));
      }
      return Po[_o.slice(1, -1)] || _o;
    }, "replace");
  }
  s(Oo, "getReplacer");
}), xt = k((pt) => {
  var ne = pt && pt.__importDefault || function(Mo) {
    return Mo && Mo.__esModule ? Mo : { default: Mo };
  };
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.escapeUTF8 = pt.escape = pt.encodeNonAsciiHTML = pt.encodeHTML = pt.encodeXML = void 0;
  var yt = ne(bt()), ir = xo(yt.default), io = Oo(ir);
  pt.encodeXML = Vo(ir);
  var uo = ne(St()), fo = xo(uo.default), Co = Oo(fo);
  pt.encodeHTML = jo(fo, Co), pt.encodeNonAsciiHTML = Vo(fo);
  function xo(Mo) {
    return Object.keys(Mo).sort().reduce(function(Uo, zo) {
      return Uo[Mo[zo]] = "&" + zo + ";", Uo;
    }, {});
  }
  s(xo, "getInverseObj");
  function Oo(Mo) {
    for (var Uo = [], zo = [], ms = 0, Xo = Object.keys(Mo); ms < Xo.length; ms++) {
      var Ko = Xo[ms];
      Ko.length === 1 ? Uo.push("\\" + Ko) : zo.push(Ko);
    }
    Uo.sort();
    for (var bs = 0; bs < Uo.length - 1; bs++) {
      for (var Cs = bs; Cs < Uo.length - 1 && Uo[Cs].charCodeAt(1) + 1 === Uo[Cs + 1].charCodeAt(1); )
        Cs += 1;
      var Es = 1 + Cs - bs;
      Es < 3 || Uo.splice(bs, Es, Uo[bs] + "-" + Uo[Cs]);
    }
    return zo.unshift("[" + Uo.join("") + "]"), new RegExp(zo.join("|"), "g");
  }
  s(Oo, "getInverseReplacer");
  var Po = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g, _o = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (function(Mo) {
        return Mo.codePointAt(0);
      })
    ) : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      (function(Mo) {
        return (Mo.charCodeAt(0) - 55296) * 1024 + Mo.charCodeAt(1) - 56320 + 65536;
      })
    )
  );
  function Io(Mo) {
    return "&#x" + (Mo.length > 1 ? _o(Mo) : Mo.charCodeAt(0)).toString(16).toUpperCase() + ";";
  }
  s(Io, "singleCharReplacer");
  function jo(Mo, Uo) {
    return function(zo) {
      return zo.replace(Uo, function(ms) {
        return Mo[ms];
      }).replace(Po, Io);
    };
  }
  s(jo, "getInverse");
  var Lo = new RegExp(io.source + "|" + Po.source, "g");
  function Ho(Mo) {
    return Mo.replace(Lo, Io);
  }
  s(Ho, "escape"), pt.escape = Ho;
  function qo(Mo) {
    return Mo.replace(io, Io);
  }
  s(qo, "escapeUTF8"), pt.escapeUTF8 = qo;
  function Vo(Mo) {
    return function(Uo) {
      return Uo.replace(Lo, function(zo) {
        return Mo[zo] || Io(zo);
      });
    };
  }
  s(Vo, "getASCIIEncoder");
}), xn = k((pt) => {
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.decodeXMLStrict = pt.decodeHTML5Strict = pt.decodeHTML4Strict = pt.decodeHTML5 = pt.decodeHTML4 = pt.decodeHTMLStrict = pt.decodeHTML = pt.decodeXML = pt.encodeHTML5 = pt.encodeHTML4 = pt.escapeUTF8 = pt.escape = pt.encodeNonAsciiHTML = pt.encodeHTML = pt.encodeXML = pt.encode = pt.decodeStrict = pt.decode = void 0;
  var ne = Et(), yt = xt();
  function ir(xo, Oo) {
    return (!Oo || Oo <= 0 ? ne.decodeXML : ne.decodeHTML)(xo);
  }
  s(ir, "decode"), pt.decode = ir;
  function io(xo, Oo) {
    return (!Oo || Oo <= 0 ? ne.decodeXML : ne.decodeHTMLStrict)(xo);
  }
  s(io, "decodeStrict"), pt.decodeStrict = io;
  function uo(xo, Oo) {
    return (!Oo || Oo <= 0 ? yt.encodeXML : yt.encodeHTML)(xo);
  }
  s(uo, "encode"), pt.encode = uo;
  var fo = xt();
  Object.defineProperty(pt, "encodeXML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return fo.encodeXML;
  }, "get") }), Object.defineProperty(pt, "encodeHTML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return fo.encodeHTML;
  }, "get") }), Object.defineProperty(pt, "encodeNonAsciiHTML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return fo.encodeNonAsciiHTML;
  }, "get") }), Object.defineProperty(pt, "escape", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return fo.escape;
  }, "get") }), Object.defineProperty(pt, "escapeUTF8", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return fo.escapeUTF8;
  }, "get") }), Object.defineProperty(pt, "encodeHTML4", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return fo.encodeHTML;
  }, "get") }), Object.defineProperty(pt, "encodeHTML5", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return fo.encodeHTML;
  }, "get") });
  var Co = Et();
  Object.defineProperty(pt, "decodeXML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return Co.decodeXML;
  }, "get") }), Object.defineProperty(pt, "decodeHTML", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return Co.decodeHTML;
  }, "get") }), Object.defineProperty(pt, "decodeHTMLStrict", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return Co.decodeHTMLStrict;
  }, "get") }), Object.defineProperty(pt, "decodeHTML4", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return Co.decodeHTML;
  }, "get") }), Object.defineProperty(pt, "decodeHTML5", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return Co.decodeHTML;
  }, "get") }), Object.defineProperty(pt, "decodeHTML4Strict", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return Co.decodeHTMLStrict;
  }, "get") }), Object.defineProperty(pt, "decodeHTML5Strict", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return Co.decodeHTMLStrict;
  }, "get") }), Object.defineProperty(pt, "decodeXMLStrict", { enumerable: !0, get: /* @__PURE__ */ s(function() {
    return Co.decodeXML;
  }, "get") });
}), jn = k((pt, ne) => {
  function yt(Fo, No) {
    if (!(Fo instanceof No))
      throw new TypeError("Cannot call a class as a function");
  }
  s(yt, "_classCallCheck");
  function ir(Fo, No) {
    for (var Bo = 0; Bo < No.length; Bo++) {
      var Wo = No[Bo];
      Wo.enumerable = Wo.enumerable || !1, Wo.configurable = !0, "value" in Wo && (Wo.writable = !0), Object.defineProperty(Fo, Wo.key, Wo);
    }
  }
  s(ir, "_defineProperties");
  function io(Fo, No, Bo) {
    return No && ir(Fo.prototype, No), Bo && ir(Fo, Bo), Fo;
  }
  s(io, "_createClass");
  function uo(Fo, No) {
    var Bo = typeof Symbol < "u" && Fo[Symbol.iterator] || Fo["@@iterator"];
    if (!Bo) {
      if (Array.isArray(Fo) || (Bo = fo(Fo)) || No && Fo && typeof Fo.length == "number") {
        Bo && (Fo = Bo);
        var Wo = 0, Yo = /* @__PURE__ */ s(function() {
        }, "F");
        return { s: Yo, n: /* @__PURE__ */ s(function() {
          return Wo >= Fo.length ? { done: !0 } : { done: !1, value: Fo[Wo++] };
        }, "n"), e: /* @__PURE__ */ s(function(Rs) {
          throw Rs;
        }, "e"), f: Yo };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var Ss = !0, Fs = !1, _s;
    return { s: /* @__PURE__ */ s(function() {
      Bo = Bo.call(Fo);
    }, "s"), n: /* @__PURE__ */ s(function() {
      var Rs = Bo.next();
      return Ss = Rs.done, Rs;
    }, "n"), e: /* @__PURE__ */ s(function(Rs) {
      Fs = !0, _s = Rs;
    }, "e"), f: /* @__PURE__ */ s(function() {
      try {
        !Ss && Bo.return != null && Bo.return();
      } finally {
        if (Fs) throw _s;
      }
    }, "f") };
  }
  s(uo, "_createForOfIteratorHelper");
  function fo(Fo, No) {
    if (Fo) {
      if (typeof Fo == "string") return Co(Fo, No);
      var Bo = Object.prototype.toString.call(Fo).slice(8, -1);
      if (Bo === "Object" && Fo.constructor && (Bo = Fo.constructor.name), Bo === "Map" || Bo === "Set") return Array.from(Fo);
      if (Bo === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(Bo)) return Co(Fo, No);
    }
  }
  s(fo, "_unsupportedIterableToArray");
  function Co(Fo, No) {
    (No == null || No > Fo.length) && (No = Fo.length);
    for (var Bo = 0, Wo = new Array(No); Bo < No; Bo++)
      Wo[Bo] = Fo[Bo];
    return Wo;
  }
  s(Co, "_arrayLikeToArray");
  var xo = xn(), Oo = {
    fg: "#FFF",
    bg: "#000",
    newline: !1,
    escapeXML: !1,
    stream: !1,
    colors: Po()
  };
  function Po() {
    var Fo = {
      0: "#000",
      1: "#A00",
      2: "#0A0",
      3: "#A50",
      4: "#00A",
      5: "#A0A",
      6: "#0AA",
      7: "#AAA",
      8: "#555",
      9: "#F55",
      10: "#5F5",
      11: "#FF5",
      12: "#55F",
      13: "#F5F",
      14: "#5FF",
      15: "#FFF"
    };
    return Mo(0, 5).forEach(function(No) {
      Mo(0, 5).forEach(function(Bo) {
        Mo(0, 5).forEach(function(Wo) {
          return _o(No, Bo, Wo, Fo);
        });
      });
    }), Mo(0, 23).forEach(function(No) {
      var Bo = No + 232, Wo = Io(No * 10 + 8);
      Fo[Bo] = "#" + Wo + Wo + Wo;
    }), Fo;
  }
  s(Po, "getDefaultColors");
  function _o(Fo, No, Bo, Wo) {
    var Yo = 16 + Fo * 36 + No * 6 + Bo, Ss = Fo > 0 ? Fo * 40 + 55 : 0, Fs = No > 0 ? No * 40 + 55 : 0, _s = Bo > 0 ? Bo * 40 + 55 : 0;
    Wo[Yo] = jo([Ss, Fs, _s]);
  }
  s(_o, "setStyleColor");
  function Io(Fo) {
    for (var No = Fo.toString(16); No.length < 2; )
      No = "0" + No;
    return No;
  }
  s(Io, "toHexString");
  function jo(Fo) {
    var No = [], Bo = uo(Fo), Wo;
    try {
      for (Bo.s(); !(Wo = Bo.n()).done; ) {
        var Yo = Wo.value;
        No.push(Io(Yo));
      }
    } catch (Ss) {
      Bo.e(Ss);
    } finally {
      Bo.f();
    }
    return "#" + No.join("");
  }
  s(jo, "toColorHexString");
  function Lo(Fo, No, Bo, Wo) {
    var Yo;
    return No === "text" ? Yo = ms(Bo, Wo) : No === "display" ? Yo = qo(Fo, Bo, Wo) : No === "xterm256Foreground" ? Yo = bs(Fo, Wo.colors[Bo]) : No === "xterm256Background" ? Yo = Cs(Fo, Wo.colors[Bo]) : No === "rgb" && (Yo = Ho(Fo, Bo)), Yo;
  }
  s(Lo, "generateOutput");
  function Ho(Fo, No) {
    No = No.substring(2).slice(0, -1);
    var Bo = +No.substr(0, 2), Wo = No.substring(5).split(";"), Yo = Wo.map(function(Ss) {
      return ("0" + Number(Ss).toString(16)).substr(-2);
    }).join("");
    return Ko(Fo, (Bo === 38 ? "color:#" : "background-color:#") + Yo);
  }
  s(Ho, "handleRgb");
  function qo(Fo, No, Bo) {
    No = parseInt(No, 10);
    var Wo = {
      "-1": /* @__PURE__ */ s(function() {
        return "<br/>";
      }, "_"),
      0: /* @__PURE__ */ s(function() {
        return Fo.length && Vo(Fo);
      }, "_"),
      1: /* @__PURE__ */ s(function() {
        return Xo(Fo, "b");
      }, "_"),
      3: /* @__PURE__ */ s(function() {
        return Xo(Fo, "i");
      }, "_"),
      4: /* @__PURE__ */ s(function() {
        return Xo(Fo, "u");
      }, "_"),
      8: /* @__PURE__ */ s(function() {
        return Ko(Fo, "display:none");
      }, "_"),
      9: /* @__PURE__ */ s(function() {
        return Xo(Fo, "strike");
      }, "_"),
      22: /* @__PURE__ */ s(function() {
        return Ko(Fo, "font-weight:normal;text-decoration:none;font-style:normal");
      }, "_"),
      23: /* @__PURE__ */ s(function() {
        return Es(Fo, "i");
      }, "_"),
      24: /* @__PURE__ */ s(function() {
        return Es(Fo, "u");
      }, "_"),
      39: /* @__PURE__ */ s(function() {
        return bs(Fo, Bo.fg);
      }, "_"),
      49: /* @__PURE__ */ s(function() {
        return Cs(Fo, Bo.bg);
      }, "_"),
      53: /* @__PURE__ */ s(function() {
        return Ko(Fo, "text-decoration:overline");
      }, "_")
    }, Yo;
    return Wo[No] ? Yo = Wo[No]() : 4 < No && No < 7 ? Yo = Xo(Fo, "blink") : 29 < No && No < 38 ? Yo = bs(Fo, Bo.colors[No - 30]) : 39 < No && No < 48 ? Yo = Cs(Fo, Bo.colors[No - 40]) : 89 < No && No < 98 ? Yo = bs(Fo, Bo.colors[8 + (No - 90)]) : 99 < No && No < 108 && (Yo = Cs(Fo, Bo.colors[8 + (No - 100)])), Yo;
  }
  s(qo, "handleDisplay");
  function Vo(Fo) {
    var No = Fo.slice(0);
    return Fo.length = 0, No.reverse().map(function(Bo) {
      return "</" + Bo + ">";
    }).join("");
  }
  s(Vo, "resetStyles");
  function Mo(Fo, No) {
    for (var Bo = [], Wo = Fo; Wo <= No; Wo++)
      Bo.push(Wo);
    return Bo;
  }
  s(Mo, "range");
  function Uo(Fo) {
    return function(No) {
      return (Fo === null || No.category !== Fo) && Fo !== "all";
    };
  }
  s(Uo, "notCategory");
  function zo(Fo) {
    Fo = parseInt(Fo, 10);
    var No = null;
    return Fo === 0 ? No = "all" : Fo === 1 ? No = "bold" : 2 < Fo && Fo < 5 ? No = "underline" : 4 < Fo && Fo < 7 ? No = "blink" : Fo === 8 ? No = "hide" : Fo === 9 ? No = "strike" : 29 < Fo && Fo < 38 || Fo === 39 || 89 < Fo && Fo < 98 ? No = "foreground-color" : (39 < Fo && Fo < 48 || Fo === 49 || 99 < Fo && Fo < 108) && (No = "background-color"), No;
  }
  s(zo, "categoryForCode");
  function ms(Fo, No) {
    return No.escapeXML ? xo.encodeXML(Fo) : Fo;
  }
  s(ms, "pushText");
  function Xo(Fo, No, Bo) {
    return Bo || (Bo = ""), Fo.push(No), "<".concat(No).concat(Bo ? ' style="'.concat(Bo, '"') : "", ">");
  }
  s(Xo, "pushTag");
  function Ko(Fo, No) {
    return Xo(Fo, "span", No);
  }
  s(Ko, "pushStyle");
  function bs(Fo, No) {
    return Xo(Fo, "span", "color:" + No);
  }
  s(bs, "pushForegroundColor");
  function Cs(Fo, No) {
    return Xo(Fo, "span", "background-color:" + No);
  }
  s(Cs, "pushBackgroundColor");
  function Es(Fo, No) {
    var Bo;
    if (Fo.slice(-1)[0] === No && (Bo = Fo.pop()), Bo)
      return "</" + No + ">";
  }
  s(Es, "closeTag");
  function Ds(Fo, No, Bo) {
    var Wo = !1, Yo = 3;
    function Ss() {
      return "";
    }
    s(Ss, "remove");
    function Fs(Us, Gs) {
      return Bo("xterm256Foreground", Gs), "";
    }
    s(Fs, "removeXterm256Foreground");
    function _s(Us, Gs) {
      return Bo("xterm256Background", Gs), "";
    }
    s(_s, "removeXterm256Background");
    function Rs(Us) {
      return No.newline ? Bo("display", -1) : Bo("text", Us), "";
    }
    s(Rs, "newline");
    function Is(Us, Gs) {
      Wo = !0, Gs.trim().length === 0 && (Gs = "0"), Gs = Gs.trimRight(";").split(";");
      var zs = uo(Gs), na;
      try {
        for (zs.s(); !(na = zs.n()).done; ) {
          var ua = na.value;
          Bo("display", ua);
        }
      } catch (la) {
        zs.e(la);
      } finally {
        zs.f();
      }
      return "";
    }
    s(Is, "ansiMess");
    function ks(Us) {
      return Bo("text", Us), "";
    }
    s(ks, "realText");
    function Ms(Us) {
      return Bo("rgb", Us), "";
    }
    s(Ms, "rgb");
    var qs = [{
      pattern: /^\x08+/,
      sub: Ss
    }, {
      pattern: /^\x1b\[[012]?K/,
      sub: Ss
    }, {
      pattern: /^\x1b\[\(B/,
      sub: Ss
    }, {
      pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/,
      sub: Ms
    }, {
      pattern: /^\x1b\[38;5;(\d+)m/,
      sub: Fs
    }, {
      pattern: /^\x1b\[48;5;(\d+)m/,
      sub: _s
    }, {
      pattern: /^\n/,
      sub: Rs
    }, {
      pattern: /^\r+\n/,
      sub: Rs
    }, {
      pattern: /^\r/,
      sub: Rs
    }, {
      pattern: /^\x1b\[((?:\d{1,3};?)+|)m/,
      sub: Is
    }, {
      // CSI n J
      // ED - Erase in Display Clears part of the screen.
      // If n is 0 (or missing), clear from cursor to end of screen.
      // If n is 1, clear from cursor to beginning of the screen.
      // If n is 2, clear entire screen (and moves cursor to upper left on DOS ANSI.SYS).
      // If n is 3, clear entire screen and delete all lines saved in the scrollback buffer
      //   (this feature was added for xterm and is supported by other terminal applications).
      pattern: /^\x1b\[\d?J/,
      sub: Ss
    }, {
      // CSI n ; m f
      // HVP - Horizontal Vertical Position Same as CUP
      pattern: /^\x1b\[\d{0,3};\d{0,3}f/,
      sub: Ss
    }, {
      // catch-all for CSI sequences?
      pattern: /^\x1b\[?[\d;]{0,3}/,
      sub: Ss
    }, {
      /**
       * extracts real text - not containing:
       * - `\x1b' - ESC - escape (Ascii 27)
       * - '\x08' - BS - backspace (Ascii 8)
       * - `\n` - Newline - linefeed (LF) (ascii 10)
       * - `\r` - Windows Carriage Return (CR)
       */
      pattern: /^(([^\x1b\x08\r\n])+)/,
      sub: ks
    }];
    function Ps(Us, Gs) {
      Gs > Yo && Wo || (Wo = !1, Fo = Fo.replace(Us.pattern, Us.sub));
    }
    s(Ps, "process");
    var Hs = [], Vs = Fo, Ws = Vs.length;
    e: for (; Ws > 0; ) {
      for (var ta = 0, ra = 0, aa = qs.length; ra < aa; ta = ++ra) {
        var ia = qs[ta];
        if (Ps(ia, ta), Fo.length !== Ws) {
          Ws = Fo.length;
          continue e;
        }
      }
      if (Fo.length === Ws)
        break;
      Hs.push(0), Ws = Fo.length;
    }
    return Hs;
  }
  s(Ds, "tokenize");
  function es(Fo, No, Bo) {
    return No !== "text" && (Fo = Fo.filter(Uo(zo(Bo))), Fo.push({
      token: No,
      data: Bo,
      category: zo(Bo)
    })), Fo;
  }
  s(es, "updateStickyStack");
  var gs = /* @__PURE__ */ (function() {
    function Fo(No) {
      yt(this, Fo), No = No || {}, No.colors && (No.colors = Object.assign({}, Oo.colors, No.colors)), this.options = Object.assign({}, Oo, No), this.stack = [], this.stickyStack = [];
    }
    return s(Fo, "Filter"), io(Fo, [{
      key: "toHtml",
      value: /* @__PURE__ */ s(function(No) {
        var Bo = this;
        No = typeof No == "string" ? [No] : No;
        var Wo = this.stack, Yo = this.options, Ss = [];
        return this.stickyStack.forEach(function(Fs) {
          var _s = Lo(Wo, Fs.token, Fs.data, Yo);
          _s && Ss.push(_s);
        }), Ds(No.join(""), Yo, function(Fs, _s) {
          var Rs = Lo(Wo, Fs, _s, Yo);
          Rs && Ss.push(Rs), Yo.stream && (Bo.stickyStack = es(Bo.stickyStack, Fs, _s));
        }), Wo.length && Ss.push(Vo(Wo)), Ss.join("");
      }, "toHtml")
    }]), Fo;
  })();
  ne.exports = gs;
}), I = (() => {
  let pt;
  return typeof window < "u" ? pt = window : typeof globalThis < "u" ? pt = globalThis : typeof global < "u" ? pt = global : typeof self < "u" ? pt = self : pt = {}, pt;
})();
function Tr() {
  let pt = {
    setHandler: /* @__PURE__ */ s(() => {
    }, "setHandler"),
    send: /* @__PURE__ */ s(() => {
    }, "send")
  };
  return new B({ transport: pt });
}
s(Tr, "mockChannel");
var xr = class {
  constructor() {
    this.getChannel = /* @__PURE__ */ s(() => {
      if (!this.channel) {
        let ne = Tr();
        return this.setChannel(ne), ne;
      }
      return this.channel;
    }, "getChannel"), this.ready = /* @__PURE__ */ s(() => this.promise, "ready"), this.hasChannel = /* @__PURE__ */ s(() => !!this.channel, "hasChannel"), this.setChannel = /* @__PURE__ */ s((ne) => {
      this.channel = ne, this.resolve();
    }, "setChannel"), this.promise = new Promise((ne) => {
      this.resolve = () => ne(this.getChannel());
    });
  }
};
s(xr, "AddonStore");
var Rr = xr, Er = "__STORYBOOK_ADDONS_PREVIEW";
function Xn() {
  return I[Er] || (I[Er] = new Rr()), I[Er];
}
s(Xn, "getAddonsStore");
var V = Xn();
function Jn(pt) {
  return pt;
}
s(Jn, "definePreview");
var Pr = class {
  constructor() {
    this.hookListsMap = void 0, this.mountedDecorators = void 0, this.prevMountedDecorators = void 0, this.currentHooks = void 0, this.nextHookIndex = void 0, this.currentPhase = void 0, this.currentEffects = void 0, this.prevEffects = void 0, this.currentDecoratorName = void 0, this.hasUpdates = void 0, this.currentContext = void 0, this.renderListener = /* @__PURE__ */ s((ne) => {
      var yt;
      ne === ((yt = this.currentContext) == null ? void 0 : yt.id) && (this.triggerEffects(), this.currentContext = null, this.removeRenderListeners());
    }, "renderListener"), this.init();
  }
  init() {
    this.hookListsMap = /* @__PURE__ */ new WeakMap(), this.mountedDecorators = /* @__PURE__ */ new Set(), this.prevMountedDecorators = /* @__PURE__ */ new Set(), this.currentHooks = [], this.nextHookIndex = 0, this.currentPhase = "NONE", this.currentEffects = [], this.prevEffects = [], this.currentDecoratorName = null, this.hasUpdates = !1, this.currentContext = null;
  }
  clean() {
    this.prevEffects.forEach((ne) => {
      ne.destroy && ne.destroy();
    }), this.init(), this.removeRenderListeners();
  }
  getNextHook() {
    let ne = this.currentHooks[this.nextHookIndex];
    return this.nextHookIndex += 1, ne;
  }
  triggerEffects() {
    this.prevEffects.forEach((ne) => {
      !this.currentEffects.includes(ne) && ne.destroy && ne.destroy();
    }), this.currentEffects.forEach((ne) => {
      this.prevEffects.includes(ne) || (ne.destroy = ne.create());
    }), this.prevEffects = this.currentEffects, this.currentEffects = [];
  }
  addRenderListeners() {
    this.removeRenderListeners(), V.getChannel().on(X$2, this.renderListener);
  }
  removeRenderListeners() {
    V.getChannel().removeListener(X$2, this.renderListener);
  }
};
s(Pr, "HooksContext");
var se = Pr;
function It(pt) {
  let ne = /* @__PURE__ */ s((...yt) => {
    let { hooks: ir } = typeof yt[0] == "function" ? yt[1] : yt[0], io = ir.currentPhase, uo = ir.currentHooks, fo = ir.nextHookIndex, Co = ir.currentDecoratorName;
    ir.currentDecoratorName = pt.name, ir.prevMountedDecorators.has(pt) ? (ir.currentPhase = "UPDATE", ir.currentHooks = ir.hookListsMap.get(pt) || []) : (ir.currentPhase = "MOUNT", ir.currentHooks = [], ir.hookListsMap.set(pt, ir.currentHooks), ir.prevMountedDecorators.add(pt)), ir.nextHookIndex = 0;
    let xo = I.STORYBOOK_HOOKS_CONTEXT;
    I.STORYBOOK_HOOKS_CONTEXT = ir;
    let Oo = pt(...yt);
    if (I.STORYBOOK_HOOKS_CONTEXT = xo, ir.currentPhase === "UPDATE" && ir.getNextHook() != null)
      throw new Error(
        "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
      );
    return ir.currentPhase = io, ir.currentHooks = uo, ir.nextHookIndex = fo, ir.currentDecoratorName = Co, Oo;
  }, "hookified");
  return ne.originalFn = pt, ne;
}
s(It, "hookify");
var wr = 0, ts = 25, vr = /* @__PURE__ */ s((pt) => (ne, yt) => {
  let ir = pt(
    It(ne),
    yt.map((io) => It(io))
  );
  return (io) => {
    let { hooks: uo } = io;
    uo.prevMountedDecorators ?? (uo.prevMountedDecorators = /* @__PURE__ */ new Set()), uo.mountedDecorators = /* @__PURE__ */ new Set([ne, ...yt]), uo.currentContext = io, uo.hasUpdates = !1;
    let fo = ir(io);
    for (wr = 1; uo.hasUpdates; )
      if (uo.hasUpdates = !1, uo.currentEffects = [], fo = ir(io), wr += 1, wr > ts)
        throw new Error(
          "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop."
        );
    return uo.addRenderListeners(), fo;
  };
}, "applyHooks"), os = /* @__PURE__ */ s((pt, ne) => pt.length === ne.length && pt.every((yt, ir) => yt === ne[ir]), "areDepsEqual"), Ar = /* @__PURE__ */ s(
  () => new Error("Storybook preview hooks can only be called inside decorators and story functions."),
  "invalidHooksError"
);
function Ot() {
  return I.STORYBOOK_HOOKS_CONTEXT || null;
}
s(Ot, "getHooksContextOrNull");
function Cr() {
  let pt = Ot();
  if (pt == null)
    throw Ar();
  return pt;
}
s(Cr, "getHooksContextOrThrow");
function ns(pt, ne, yt) {
  let ir = Cr();
  if (ir.currentPhase === "MOUNT") {
    yt != null && !Array.isArray(yt) && s$3.warn(
      `${pt} received a final argument that is not an array (instead, received ${yt}). When specified, the final argument must be an array.`
    );
    let io = { name: pt, deps: yt };
    return ir.currentHooks.push(io), ne(io), io;
  }
  if (ir.currentPhase === "UPDATE") {
    let io = ir.getNextHook();
    if (io == null)
      throw new Error("Rendered more hooks than during the previous render.");
    return io.name !== pt && s$3.warn(
      `Storybook has detected a change in the order of Hooks${ir.currentDecoratorName ? ` called by ${ir.currentDecoratorName}` : ""}. This will lead to bugs and errors if not fixed.`
    ), yt != null && io.deps == null && s$3.warn(
      `${pt} received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`
    ), yt != null && io.deps != null && yt.length !== io.deps.length && s$3.warn(`The final argument passed to ${pt} changed size between renders. The order and size of this array must remain constant.
Previous: ${io.deps}
Incoming: ${yt}`), (yt == null || io.deps == null || !os(yt, io.deps)) && (ne(io), io.deps = yt), io;
  }
  throw Ar();
}
s(ns, "useHook");
function He(pt, ne, yt) {
  let { memoizedState: ir } = ns(
    pt,
    (io) => {
      io.memoizedState = ne();
    },
    yt
  );
  return ir;
}
s(He, "useMemoLike");
function ss(pt, ne) {
  return He("useMemo", pt, ne);
}
s(ss, "useMemo");
function Oe(pt, ne) {
  return He("useCallback", () => pt, ne);
}
s(Oe, "useCallback");
function Dt(pt, ne) {
  return He(pt, () => ({ current: ne }), []);
}
s(Dt, "useRefLike");
function is(pt) {
  return Dt("useRef", pt);
}
s(is, "useRef");
function as() {
  let pt = Ot();
  if (pt != null && pt.currentPhase !== "NONE")
    pt.hasUpdates = !0;
  else
    try {
      V.getChannel().emit(L$3);
    } catch {
      s$3.warn("State updates of Storybook preview hooks work only in browser");
    }
}
s(as, "triggerUpdate");
function kt(pt, ne) {
  let yt = Dt(
    pt,
    // @ts-expect-error S type should never be function, but there's no way to tell that to TypeScript
    typeof ne == "function" ? ne() : ne
  ), ir = /* @__PURE__ */ s((io) => {
    yt.current = typeof io == "function" ? io(yt.current) : io, as();
  }, "setState");
  return [yt.current, ir];
}
s(kt, "useStateLike");
function ls(pt) {
  return kt("useState", pt);
}
s(ls, "useState");
function cs(pt, ne, yt) {
  let ir = yt != null ? () => yt(ne) : ne, [io, uo] = kt("useReducer", ir);
  return [io, /* @__PURE__ */ s((fo) => uo((Co) => pt(Co, fo)), "dispatch")];
}
s(cs, "useReducer");
function jt(pt, ne) {
  let yt = Cr(), ir = He("useEffect", () => ({ create: pt }), ne);
  yt.currentEffects.includes(ir) || yt.currentEffects.push(ir);
}
s(jt, "useEffect");
function ds(pt, ne = []) {
  let yt = V.getChannel();
  return jt(() => (Object.entries(pt).forEach(([ir, io]) => yt.on(ir, io)), () => {
    Object.entries(pt).forEach(
      ([ir, io]) => yt.removeListener(ir, io)
    );
  }), [...Object.keys(pt), ...ne]), Oe(yt.emit.bind(yt), [yt]);
}
s(ds, "useChannel");
function We() {
  let { currentContext: pt } = Cr();
  if (pt == null)
    throw Ar();
  return pt;
}
s(We, "useStoryContext");
function ps(pt, ne) {
  let { parameters: yt } = We();
  if (pt)
    return yt[pt] ?? ne;
}
s(ps, "useParameter");
function us() {
  let pt = V.getChannel(), { id: ne, args: yt } = We(), ir = Oe(
    (uo) => pt.emit(z$2, { storyId: ne, updatedArgs: uo }),
    [pt, ne]
  ), io = Oe(
    (uo) => pt.emit(W$3, { storyId: ne, argNames: uo }),
    [pt, ne]
  );
  return [yt, ir, io];
}
s(us, "useArgs");
function fs() {
  let pt = V.getChannel(), { globals: ne } = We(), yt = Oe(
    (ir) => pt.emit(k$3, { globals: ir }),
    [pt]
  );
  return [ne, yt];
}
s(fs, "useGlobals");
function P(pt) {
  for (var ne = [], yt = 1; yt < arguments.length; yt++)
    ne[yt - 1] = arguments[yt];
  var ir = Array.from(typeof pt == "string" ? [pt] : pt);
  ir[ir.length - 1] = ir[ir.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var io = ir.reduce(function(Co, xo) {
    var Oo = xo.match(/\n([\t ]+|(?!\s).)/g);
    return Oo ? Co.concat(Oo.map(function(Po) {
      var _o, Io;
      return (Io = (_o = Po.match(/[\t ]/g)) === null || _o === void 0 ? void 0 : _o.length) !== null && Io !== void 0 ? Io : 0;
    })) : Co;
  }, []);
  if (io.length) {
    var uo = new RegExp(`
[	 ]{` + Math.min.apply(Math, io) + "}", "g");
    ir = ir.map(function(Co) {
      return Co.replace(uo, `
`);
    });
  }
  ir[0] = ir[0].replace(/^\r?\n/, "");
  var fo = ir[0];
  return ne.forEach(function(Co, xo) {
    var Oo = fo.match(/(?:^|\n)( *)$/), Po = Oo ? Oo[1] : "", _o = Co;
    typeof Co == "string" && Co.includes(`
`) && (_o = String(Co).split(`
`).map(function(Io, jo) {
      return jo === 0 ? Io : "" + Po + Io;
    }).join(`
`)), fo += _o + ir[xo + 1];
  }), fo;
}
s(P, "dedent");
var Lt = P, Fr = /* @__PURE__ */ new Map(), hs = "UNIVERSAL_STORE:", q = {
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  REJECTED: "REJECTED"
}, T = class ys {
  constructor(ne, yt) {
    if (this.debugging = !1, this.listeners = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set()]]), this.getState = /* @__PURE__ */ s(() => (this.debug("getState", { state: this.state }), this.state), "getState"), this.subscribe = /* @__PURE__ */ s((ir, io) => {
      let uo = typeof ir == "function", fo = uo ? "*" : ir, Co = uo ? ir : io;
      if (this.debug("subscribe", { eventType: fo, listener: Co }), !Co)
        throw new TypeError(
          `Missing first subscribe argument, or second if first is the event type, when subscribing to a UniversalStore with id '${this.id}'`
        );
      return this.listeners.has(fo) || this.listeners.set(fo, /* @__PURE__ */ new Set()), this.listeners.get(fo).add(Co), () => {
        var xo;
        this.debug("unsubscribe", { eventType: fo, listener: Co }), this.listeners.has(fo) && (this.listeners.get(fo).delete(Co), ((xo = this.listeners.get(fo)) == null ? void 0 : xo.size) === 0 && this.listeners.delete(fo));
      };
    }, "subscribe"), this.send = /* @__PURE__ */ s((ir) => {
      if (this.debug("send", { event: ir }), this.status !== ys.Status.READY)
        throw new TypeError(
          P`Cannot send event before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify(
            {
              event: ir,
              id: this.id,
              actor: this.actor,
              environment: this.environment
            },
            null,
            2
          )}`
        );
      this.emitToListeners(ir, { actor: this.actor }), this.emitToChannel(ir, { actor: this.actor });
    }, "send"), this.debugging = ne.debug ?? !1, !ys.isInternalConstructing)
      throw new TypeError(
        "UniversalStore is not constructable - use UniversalStore.create() instead"
      );
    if (ys.isInternalConstructing = !1, this.id = ne.id, this.actorId = Date.now().toString(36) + Math.random().toString(36).substring(2), this.actorType = ne.leader ? ys.ActorType.LEADER : ys.ActorType.FOLLOWER, this.state = ne.initialState, this.channelEventName = `${hs}${this.id}`, this.debug("constructor", {
      options: ne,
      environmentOverrides: yt,
      channelEventName: this.channelEventName
    }), this.actor.type === ys.ActorType.LEADER)
      this.syncing = {
        state: q.RESOLVED,
        promise: Promise.resolve()
      };
    else {
      let ir, io, uo = new Promise((fo, Co) => {
        ir = /* @__PURE__ */ s(() => {
          this.syncing.state === q.PENDING && (this.syncing.state = q.RESOLVED, fo());
        }, "syncingResolve"), io = /* @__PURE__ */ s((xo) => {
          this.syncing.state === q.PENDING && (this.syncing.state = q.REJECTED, Co(xo));
        }, "syncingReject");
      });
      this.syncing = {
        state: q.PENDING,
        promise: uo,
        resolve: ir,
        reject: io
      };
    }
    this.getState = this.getState.bind(this), this.setState = this.setState.bind(this), this.subscribe = this.subscribe.bind(this), this.onStateChange = this.onStateChange.bind(this), this.send = this.send.bind(this), this.emitToChannel = this.emitToChannel.bind(this), this.prepareThis = this.prepareThis.bind(this), this.emitToListeners = this.emitToListeners.bind(this), this.handleChannelEvents = this.handleChannelEvents.bind(
      this
    ), this.debug = this.debug.bind(this), this.channel = (yt == null ? void 0 : yt.channel) ?? ys.preparation.channel, this.environment = (yt == null ? void 0 : yt.environment) ?? ys.preparation.environment, this.channel && this.environment ? this.prepareThis({ channel: this.channel, environment: this.environment }) : ys.preparation.promise.then(this.prepareThis);
  }
  static setupPreparationPromise() {
    let ne, yt, ir = new Promise(
      (io, uo) => {
        ne = /* @__PURE__ */ s((fo) => {
          io(fo);
        }, "resolveRef"), yt = /* @__PURE__ */ s((...fo) => {
          uo(fo);
        }, "rejectRef");
      }
    );
    ys.preparation = {
      resolve: ne,
      reject: yt,
      promise: ir
    };
  }
  /** The actor object representing the store instance with a unique ID and a type */
  get actor() {
    return Object.freeze({
      id: this.actorId,
      type: this.actorType,
      environment: this.environment ?? ys.Environment.UNKNOWN
    });
  }
  /**
   * The current state of the store, that signals both if the store is prepared by Storybook and
   * also - in the case of a follower - if the state has been synced with the leader's state.
   */
  get status() {
    var ne;
    if (!this.channel || !this.environment)
      return ys.Status.UNPREPARED;
    switch ((ne = this.syncing) == null ? void 0 : ne.state) {
      case q.PENDING:
      case void 0:
        return ys.Status.SYNCING;
      case q.REJECTED:
        return ys.Status.ERROR;
      case q.RESOLVED:
      default:
        return ys.Status.READY;
    }
  }
  /**
   * A promise that resolves when the store is fully ready. A leader will be ready when the store
   * has been prepared by Storybook, which is almost instantly.
   *
   * A follower will be ready when the state has been synced with the leader's state, within a few
   * hundred milliseconds.
   */
  untilReady() {
    var ne;
    return Promise.all([ys.preparation.promise, (ne = this.syncing) == null ? void 0 : ne.promise]);
  }
  /** Creates a new instance of UniversalStore */
  static create(ne) {
    if (!ne || typeof (ne == null ? void 0 : ne.id) != "string")
      throw new TypeError("id is required and must be a string, when creating a UniversalStore");
    ne.debug && console.debug(
      P`[UniversalStore]
        create`,
      { options: ne }
    );
    let yt = Fr.get(ne.id);
    if (yt)
      return console.warn(P`UniversalStore with id "${ne.id}" already exists in this environment, re-using existing.
        You should reuse the existing instance instead of trying to create a new one.`), yt;
    ys.isInternalConstructing = !0;
    let ir = new ys(ne);
    return Fr.set(ne.id, ir), ir;
  }
  /**
   * Used by Storybook to set the channel for all instances of UniversalStore in the given
   * environment.
   *
   * @internal
   */
  static __prepare(ne, yt) {
    ys.preparation.channel = ne, ys.preparation.environment = yt, ys.preparation.resolve({ channel: ne, environment: yt });
  }
  /**
   * Updates the store's state
   *
   * Either a new state or a state updater function can be passed to the method.
   */
  setState(ne) {
    let yt = this.state, ir = typeof ne == "function" ? ne(yt) : ne;
    if (this.debug("setState", { newState: ir, previousState: yt, updater: ne }), this.status !== ys.Status.READY)
      throw new TypeError(
        P`Cannot set state before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify(
          {
            newState: ir,
            id: this.id,
            actor: this.actor,
            environment: this.environment
          },
          null,
          2
        )}`
      );
    this.state = ir;
    let io = {
      type: ys.InternalEventType.SET_STATE,
      payload: {
        state: ir,
        previousState: yt
      }
    };
    this.emitToChannel(io, { actor: this.actor }), this.emitToListeners(io, { actor: this.actor });
  }
  /**
   * Subscribes to state changes
   *
   * @returns Unsubscribe function
   */
  onStateChange(ne) {
    return this.debug("onStateChange", { listener: ne }), this.subscribe(
      ys.InternalEventType.SET_STATE,
      ({ payload: yt }, ir) => {
        ne(yt.state, yt.previousState, ir);
      }
    );
  }
  emitToChannel(ne, yt) {
    var ir;
    this.debug("emitToChannel", { event: ne, eventInfo: yt, channel: this.channel }), (ir = this.channel) == null || ir.emit(this.channelEventName, {
      event: ne,
      eventInfo: yt
    });
  }
  prepareThis({
    channel: ne,
    environment: yt
  }) {
    this.channel = ne, this.environment = yt, this.debug("prepared", { channel: ne, environment: yt }), this.channel.on(this.channelEventName, this.handleChannelEvents), this.actor.type === ys.ActorType.LEADER ? this.emitToChannel(
      { type: ys.InternalEventType.LEADER_CREATED },
      { actor: this.actor }
    ) : (this.emitToChannel(
      { type: ys.InternalEventType.FOLLOWER_CREATED },
      { actor: this.actor }
    ), this.emitToChannel(
      { type: ys.InternalEventType.EXISTING_STATE_REQUEST },
      { actor: this.actor }
    ), setTimeout(() => {
      this.syncing.reject(
        new TypeError(
          `No existing state found for follower with id: '${this.id}'. Make sure a leader with the same id exists before creating a follower.`
        )
      );
    }, 1e3));
  }
  emitToListeners(ne, yt) {
    let ir = this.listeners.get(ne.type), io = this.listeners.get("*");
    this.debug("emitToListeners", {
      event: ne,
      eventInfo: yt,
      eventTypeListeners: ir,
      everythingListeners: io
    }), [...ir ?? [], ...io ?? []].forEach(
      (uo) => uo(ne, yt)
    );
  }
  handleChannelEvents(ne) {
    var io, uo, fo, Co, xo;
    let { event: yt, eventInfo: ir } = ne;
    if ([ir.actor.id, (io = ir.forwardingActor) == null ? void 0 : io.id].includes(this.actor.id)) {
      this.debug("handleChannelEvents: Ignoring event from self", { channelEvent: ne });
      return;
    } else if (((uo = this.syncing) == null ? void 0 : uo.state) === q.PENDING && yt.type !== ys.InternalEventType.EXISTING_STATE_RESPONSE) {
      this.debug("handleChannelEvents: Ignoring event while syncing", { channelEvent: ne });
      return;
    }
    if (this.debug("handleChannelEvents", { channelEvent: ne }), this.actor.type === ys.ActorType.LEADER) {
      let Oo = !0;
      switch (yt.type) {
        case ys.InternalEventType.EXISTING_STATE_REQUEST:
          Oo = !1;
          let Po = {
            type: ys.InternalEventType.EXISTING_STATE_RESPONSE,
            payload: this.state
          };
          this.debug("handleChannelEvents: responding to existing state request", {
            responseEvent: Po
          }), this.emitToChannel(Po, { actor: this.actor });
          break;
        case ys.InternalEventType.LEADER_CREATED:
          Oo = !1, this.syncing.state = q.REJECTED, this.debug("handleChannelEvents: erroring due to second leader being created", {
            event: yt
          }), console.error(
            P`Detected multiple UniversalStore leaders created with the same id "${this.id}".
            Only one leader can exists at a time, your stores are now in an invalid state.
            Leaders detected:
            this: ${JSON.stringify(this.actor, null, 2)}
            other: ${JSON.stringify(ir.actor, null, 2)}`
          );
          break;
      }
      Oo && (this.debug("handleChannelEvents: forwarding event", { channelEvent: ne }), this.emitToChannel(yt, { actor: ir.actor, forwardingActor: this.actor }));
    }
    if (this.actor.type === ys.ActorType.FOLLOWER)
      switch (yt.type) {
        case ys.InternalEventType.EXISTING_STATE_RESPONSE:
          if (this.debug("handleChannelEvents: Setting state from leader's existing state response", {
            event: yt
          }), ((fo = this.syncing) == null ? void 0 : fo.state) !== q.PENDING)
            break;
          (xo = (Co = this.syncing).resolve) == null || xo.call(Co);
          let Oo = {
            type: ys.InternalEventType.SET_STATE,
            payload: {
              state: yt.payload,
              previousState: this.state
            }
          };
          this.state = yt.payload, this.emitToListeners(Oo, ir);
          break;
      }
    switch (yt.type) {
      case ys.InternalEventType.SET_STATE:
        this.debug("handleChannelEvents: Setting state", { event: yt }), this.state = yt.payload.state;
        break;
    }
    this.emitToListeners(yt, { actor: ir.actor });
  }
  debug(ne, yt) {
    this.debugging && console.debug(
      P`[UniversalStore::${this.id}::${this.environment ?? ys.Environment.UNKNOWN}]
        ${ne}`,
      JSON.stringify(
        {
          data: yt,
          actor: this.actor,
          state: this.state,
          status: this.status
        },
        null,
        2
      )
    );
  }
  /**
   * Used to reset the static fields of the UniversalStore class when cleaning up tests
   *
   * @internal
   */
  static __reset() {
    ys.preparation.reject(new Error("reset")), ys.setupPreparationPromise(), ys.isInternalConstructing = !1;
  }
};
s(T, "UniversalStore"), /**
* Defines the possible actor types in the store system
*
* @readonly
*/
T.ActorType = {
  LEADER: "LEADER",
  FOLLOWER: "FOLLOWER"
}, /**
* Defines the possible environments the store can run in
*
* @readonly
*/
T.Environment = {
  SERVER: "SERVER",
  MANAGER: "MANAGER",
  PREVIEW: "PREVIEW",
  UNKNOWN: "UNKNOWN",
  MOCK: "MOCK"
}, /**
* Internal event types used for store synchronization
*
* @readonly
*/
T.InternalEventType = {
  EXISTING_STATE_REQUEST: "__EXISTING_STATE_REQUEST",
  EXISTING_STATE_RESPONSE: "__EXISTING_STATE_RESPONSE",
  SET_STATE: "__SET_STATE",
  LEADER_CREATED: "__LEADER_CREATED",
  FOLLOWER_CREATED: "__FOLLOWER_CREATED"
}, T.Status = {
  UNPREPARED: "UNPREPARED",
  SYNCING: "SYNCING",
  READY: "READY",
  ERROR: "ERROR"
}, // This is used to check if constructor was called from the static factory create()
T.isInternalConstructing = !1, T.setupPreparationPromise();
var J = T;
function Ir(pt, ne) {
  let yt = {}, ir = Object.entries(pt);
  for (let io = 0; io < ir.length; io++) {
    let [uo, fo] = ir[io];
    ne(fo, uo) || (yt[uo] = fo);
  }
  return yt;
}
s(Ir, "omitBy");
function Or(pt, ne) {
  let yt = {};
  for (let ir = 0; ir < ne.length; ir++) {
    let io = ne[ir];
    Object.prototype.hasOwnProperty.call(pt, io) && (yt[io] = pt[io]);
  }
  return yt;
}
s(Or, "pick");
function Dr(pt, ne) {
  let yt = {}, ir = Object.entries(pt);
  for (let io = 0; io < ir.length; io++) {
    let [uo, fo] = ir[io];
    ne(fo, uo) && (yt[uo] = fo);
  }
  return yt;
}
s(Dr, "pickBy");
function L(pt) {
  if (typeof pt != "object" || pt == null)
    return !1;
  if (Object.getPrototypeOf(pt) === null)
    return !0;
  if (pt.toString() !== "[object Object]")
    return !1;
  let ne = pt;
  for (; Object.getPrototypeOf(ne) !== null; )
    ne = Object.getPrototypeOf(ne);
  return Object.getPrototypeOf(pt) === ne;
}
s(L, "isPlainObject");
function G(pt, ne) {
  let yt = {}, ir = Object.keys(pt);
  for (let io = 0; io < ir.length; io++) {
    let uo = ir[io], fo = pt[uo];
    yt[uo] = ne(fo, uo, pt);
  }
  return yt;
}
s(G, "mapValues");
var Nt = "[object RegExp]", Mt = "[object String]", _t = "[object Number]", qt = "[object Boolean]", kr = "[object Arguments]", Ut = "[object Symbol]", Gt = "[object Date]", Bt = "[object Map]", zt = "[object Set]", Vt = "[object Array]", Ht = "[object Function]", Wt = "[object ArrayBuffer]", $e = "[object Object]", $t = "[object Error]", Yt = "[object DataView]", Kt = "[object Uint8Array]", Xt = "[object Uint8ClampedArray]", Jt = "[object Uint16Array]", Qt = "[object Uint32Array]", Zt = "[object BigUint64Array]", eo = "[object Int8Array]", ro = "[object Int16Array]", to = "[object Int32Array]", oo = "[object BigInt64Array]", no = "[object Float32Array]", so = "[object Float64Array]";
function jr(pt) {
  return Object.getOwnPropertySymbols(pt).filter((ne) => Object.prototype.propertyIsEnumerable.call(pt, ne));
}
s(jr, "getSymbols");
function Lr(pt) {
  return pt == null ? pt === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(pt);
}
s(Lr, "getTag");
function De(pt, ne) {
  if (typeof pt == typeof ne)
    switch (typeof pt) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined":
        return pt === ne;
      case "number":
        return pt === ne || Object.is(pt, ne);
      case "function":
        return pt === ne;
      case "object":
        return Y(pt, ne);
    }
  return Y(pt, ne);
}
s(De, "isEqual");
function Y(pt, ne, yt) {
  if (Object.is(pt, ne))
    return !0;
  let ir = Lr(pt), io = Lr(ne);
  if (ir === kr && (ir = $e), io === kr && (io = $e), ir !== io)
    return !1;
  switch (ir) {
    case Mt:
      return pt.toString() === ne.toString();
    case _t: {
      let Co = pt.valueOf(), xo = ne.valueOf();
      return Co === xo || Number.isNaN(Co) && Number.isNaN(xo);
    }
    case qt:
    case Gt:
    case Ut:
      return Object.is(pt.valueOf(), ne.valueOf());
    case Nt:
      return pt.source === ne.source && pt.flags === ne.flags;
    case Ht:
      return pt === ne;
  }
  yt = yt ?? /* @__PURE__ */ new Map();
  let uo = yt.get(pt), fo = yt.get(ne);
  if (uo != null && fo != null)
    return uo === ne;
  yt.set(pt, ne), yt.set(ne, pt);
  try {
    switch (ir) {
      case Bt: {
        if (pt.size !== ne.size)
          return !1;
        for (let [Co, xo] of pt.entries())
          if (!ne.has(Co) || !Y(xo, ne.get(Co), yt))
            return !1;
        return !0;
      }
      case zt: {
        if (pt.size !== ne.size)
          return !1;
        let Co = Array.from(pt.values()), xo = Array.from(ne.values());
        for (let Oo = 0; Oo < Co.length; Oo++) {
          let Po = Co[Oo], _o = xo.findIndex((Io) => Y(Po, Io, yt));
          if (_o === -1)
            return !1;
          xo.splice(_o, 1);
        }
        return !0;
      }
      case Vt:
      case Kt:
      case Xt:
      case Jt:
      case Qt:
      case Zt:
      case eo:
      case ro:
      case to:
      case oo:
      case no:
      case so: {
        if (typeof Buffer < "u" && Buffer.isBuffer(pt) !== Buffer.isBuffer(ne) || pt.length !== ne.length)
          return !1;
        for (let Co = 0; Co < pt.length; Co++)
          if (!Y(pt[Co], ne[Co], yt))
            return !1;
        return !0;
      }
      case Wt:
        return pt.byteLength !== ne.byteLength ? !1 : Y(new Uint8Array(pt), new Uint8Array(ne), yt);
      case Yt:
        return pt.byteLength !== ne.byteLength || pt.byteOffset !== ne.byteOffset ? !1 : Y(pt.buffer, ne.buffer, yt);
      case $t:
        return pt.name === ne.name && pt.message === ne.message;
      case $e: {
        if (!(Y(pt.constructor, ne.constructor, yt) || L(pt) && L(ne)))
          return !1;
        let Co = [...Object.keys(pt), ...jr(pt)], xo = [...Object.keys(ne), ...jr(ne)];
        if (Co.length !== xo.length)
          return !1;
        for (let Oo = 0; Oo < Co.length; Oo++) {
          let Po = Co[Oo], _o = pt[Po];
          if (!Object.prototype.hasOwnProperty.call(ne, Po))
            return !1;
          let Io = ne[Po];
          if (!Y(_o, Io, yt))
            return !1;
        }
        return !0;
      }
      default:
        return !1;
    }
  } finally {
    yt.delete(pt), yt.delete(ne);
  }
}
s(Y, "areObjectsEqual");
var Ye = class sa extends J {
  constructor(ne, yt) {
    J.isInternalConstructing = !0, super(
      { ...ne, leader: !0 },
      { channel: new B({}), environment: J.Environment.MOCK }
    ), J.isInternalConstructing = !1, typeof (yt == null ? void 0 : yt.fn) == "function" && (this.testUtils = yt, this.getState = yt.fn(this.getState), this.setState = yt.fn(this.setState), this.subscribe = yt.fn(this.subscribe), this.onStateChange = yt.fn(this.onStateChange), this.send = yt.fn(this.send));
  }
  /** Create a mock universal store. This is just an alias for the constructor */
  static create(ne, yt) {
    return new sa(ne, yt);
  }
  unsubscribeAll() {
    var yt, ir;
    if (!this.testUtils)
      throw new Error(
        Lt`Cannot call unsubscribeAll on a store that does not have testUtils.
        Please provide testUtils as the second argument when creating the store.`
      );
    let ne = /* @__PURE__ */ s((io) => {
      try {
        io.value();
      } catch {
      }
    }, "callReturnedUnsubscribeFn");
    (yt = this.subscribe.mock) == null || yt.results.forEach(ne), (ir = this.onStateChange.mock) == null || ir.results.forEach(ne);
  }
};
s(Ye, "MockUniversalStore");
var tr = he(_r()), me = Symbol("incompatible"), Ur = /* @__PURE__ */ s((pt, ne) => {
  let yt = ne.type;
  if (pt == null || !yt || ne.mapping)
    return pt;
  switch (yt.name) {
    case "string":
      return String(pt);
    case "enum":
      return pt;
    case "number":
      return Number(pt);
    case "boolean":
      return String(pt) === "true";
    case "array":
      return !yt.value || !Array.isArray(pt) ? me : pt.reduce((ir, io, uo) => {
        let fo = Ur(io, { type: yt.value });
        return fo !== me && (ir[uo] = fo), ir;
      }, new Array(pt.length));
    case "object":
      return typeof pt == "string" || typeof pt == "number" ? pt : !yt.value || typeof pt != "object" ? me : Object.entries(pt).reduce((ir, [io, uo]) => {
        let fo = Ur(uo, { type: yt.value[io] });
        return fo === me ? ir : Object.assign(ir, { [io]: fo });
      }, {});
    default:
      return me;
  }
}, "map"), ao = /* @__PURE__ */ s((pt, ne) => Object.entries(pt).reduce((yt, [ir, io]) => {
  if (!ne[ir])
    return yt;
  let uo = Ur(io, ne[ir]);
  return uo === me ? yt : Object.assign(yt, { [ir]: uo });
}, {}), "mapArgsToTypes"), ke = /* @__PURE__ */ s((pt, ne) => Array.isArray(pt) && Array.isArray(ne) ? ne.reduce(
  (yt, ir, io) => (yt[io] = ke(pt[io], ne[io]), yt),
  [...pt]
).filter((yt) => yt !== void 0) : !L(pt) || !L(ne) ? ne : Object.keys({ ...pt, ...ne }).reduce((yt, ir) => {
  if (ir in ne) {
    let io = ke(pt[ir], ne[ir]);
    io !== void 0 && (yt[ir] = io);
  } else
    yt[ir] = pt[ir];
  return yt;
}, {}), "combineArgs"), lo = /* @__PURE__ */ s((pt, ne) => Object.entries(ne).reduce((yt, [ir, { options: io }]) => {
  function uo() {
    return ir in pt && (yt[ir] = pt[ir]), yt;
  }
  if (s(uo, "allowArg"), !io)
    return uo();
  if (!Array.isArray(io))
    return n$1.error(P`
        Invalid argType: '${ir}.options' should be an array.

        More info: https://storybook.js.org/docs/api/arg-types
      `), uo();
  if (io.some((_o) => _o && ["object", "function"].includes(typeof _o)))
    return n$1.error(P`
        Invalid argType: '${ir}.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
      `), uo();
  let fo = Array.isArray(pt[ir]), Co = fo && pt[ir].findIndex((_o) => !io.includes(_o)), xo = fo && Co === -1;
  if (pt[ir] === void 0 || io.includes(pt[ir]) || xo)
    return uo();
  let Oo = fo ? `${ir}[${Co}]` : ir, Po = io.map((_o) => typeof _o == "string" ? `'${_o}'` : String(_o)).join(", ");
  return n$1.warn(`Received illegal value for '${Oo}'. Supported options: ${Po}`), yt;
}, {}), "validateOptions"), ie = Symbol("Deeply equal"), ge = /* @__PURE__ */ s((pt, ne) => {
  if (typeof pt != typeof ne)
    return ne;
  if (De(pt, ne))
    return ie;
  if (Array.isArray(pt) && Array.isArray(ne)) {
    let yt = ne.reduce((ir, io, uo) => {
      let fo = ge(pt[uo], io);
      return fo !== ie && (ir[uo] = fo), ir;
    }, new Array(ne.length));
    return ne.length >= pt.length ? yt : yt.concat(new Array(pt.length - ne.length).fill(void 0));
  }
  return L(pt) && L(ne) ? Object.keys({ ...pt, ...ne }).reduce((yt, ir) => {
    let io = ge(pt == null ? void 0 : pt[ir], ne == null ? void 0 : ne[ir]);
    return io === ie ? yt : Object.assign(yt, { [ir]: io });
  }, {}) : ne;
}, "deepDiff"), Gr = "UNTARGETED";
function co({
  args: pt,
  argTypes: ne
}) {
  let yt = {};
  return Object.entries(pt).forEach(([ir, io]) => {
    let { target: uo = Gr } = ne[ir] || {};
    yt[uo] = yt[uo] || {}, yt[uo][ir] = io;
  }), yt;
}
s(co, "groupArgsByTarget");
function Ts(pt) {
  return Object.keys(pt).forEach((ne) => pt[ne] === void 0 && delete pt[ne]), pt;
}
s(Ts, "deleteUndefined");
var Br = class {
  constructor() {
    this.initialArgsByStoryId = {}, this.argsByStoryId = {};
  }
  get(ne) {
    if (!(ne in this.argsByStoryId))
      throw new Error(`No args known for ${ne} -- has it been rendered yet?`);
    return this.argsByStoryId[ne];
  }
  setInitial(ne) {
    if (!this.initialArgsByStoryId[ne.id])
      this.initialArgsByStoryId[ne.id] = ne.initialArgs, this.argsByStoryId[ne.id] = ne.initialArgs;
    else if (this.initialArgsByStoryId[ne.id] !== ne.initialArgs) {
      let yt = ge(this.initialArgsByStoryId[ne.id], this.argsByStoryId[ne.id]);
      this.initialArgsByStoryId[ne.id] = ne.initialArgs, this.argsByStoryId[ne.id] = ne.initialArgs, yt !== ie && this.updateFromDelta(ne, yt);
    }
  }
  updateFromDelta(ne, yt) {
    let ir = lo(yt, ne.argTypes);
    this.argsByStoryId[ne.id] = ke(this.argsByStoryId[ne.id], ir);
  }
  updateFromPersisted(ne, yt) {
    let ir = ao(yt, ne.argTypes);
    return this.updateFromDelta(ne, ir);
  }
  update(ne, yt) {
    if (!(ne in this.argsByStoryId))
      throw new Error(`No args known for ${ne} -- has it been rendered yet?`);
    this.argsByStoryId[ne] = Ts({
      ...this.argsByStoryId[ne],
      ...yt
    });
  }
};
s(Br, "ArgsStore");
var Ke = Br, Xe = /* @__PURE__ */ s((pt = {}) => Object.entries(pt).reduce((ne, [yt, { defaultValue: ir }]) => (typeof ir < "u" && (ne[yt] = ir), ne), {}), "getValuesFromArgTypes"), zr = class {
  constructor({
    globals: ne = {},
    globalTypes: yt = {}
  }) {
    this.set({ globals: ne, globalTypes: yt });
  }
  set({ globals: ne = {}, globalTypes: yt = {} }) {
    let ir = this.initialGlobals && ge(this.initialGlobals, this.globals);
    this.allowedGlobalNames = /* @__PURE__ */ new Set([...Object.keys(ne), ...Object.keys(yt)]);
    let io = Xe(yt);
    this.initialGlobals = { ...io, ...ne }, this.globals = this.initialGlobals, ir && ir !== ie && this.updateFromPersisted(ir);
  }
  filterAllowedGlobals(ne) {
    return Object.entries(ne).reduce((yt, [ir, io]) => (this.allowedGlobalNames.has(ir) ? yt[ir] = io : s$3.warn(
      `Attempted to set a global (${ir}) that is not defined in initial globals or globalTypes`
    ), yt), {});
  }
  updateFromPersisted(ne) {
    let yt = this.filterAllowedGlobals(ne);
    this.globals = { ...this.globals, ...yt };
  }
  get() {
    return this.globals;
  }
  update(ne) {
    this.globals = { ...this.globals, ...this.filterAllowedGlobals(ne) };
  }
};
s(zr, "GlobalsStore");
var Je = zr, po = he(_r()), xs = (0, po.default)(1)(
  (pt) => Object.values(pt).reduce(
    (ne, yt) => (ne[yt.importPath] = ne[yt.importPath] || yt, ne),
    {}
  )
), Vr = class {
  constructor({ entries: ne } = { v: 5, entries: {} }) {
    this.entries = ne;
  }
  entryFromSpecifier(ne) {
    let yt = Object.values(this.entries);
    if (ne === "*")
      return yt[0];
    if (typeof ne == "string")
      return this.entries[ne] ? this.entries[ne] : yt.find((uo) => uo.id.startsWith(ne));
    let { name: ir, title: io } = ne;
    return yt.find((uo) => uo.name === ir && uo.title === io);
  }
  storyIdToEntry(ne) {
    let yt = this.entries[ne];
    if (!yt)
      throw new D$1({ storyId: ne });
    return yt;
  }
  importPathToEntry(ne) {
    return xs(this.entries)[ne];
  }
};
s(Vr, "StoryIndexStore");
var Qe = Vr, ws = /* @__PURE__ */ s((pt) => typeof pt == "string" ? { name: pt } : pt, "normalizeType"), vs = /* @__PURE__ */ s((pt) => typeof pt == "string" ? { type: pt } : pt, "normalizeControl"), As = /* @__PURE__ */ s((pt, ne) => {
  let { type: yt, control: ir, ...io } = pt, uo = {
    name: ne,
    ...io
  };
  return yt && (uo.type = ws(yt)), ir ? uo.control = vs(ir) : ir === !1 && (uo.control = { disable: !0 }), uo;
}, "normalizeInputType"), ae = /* @__PURE__ */ s((pt) => G(pt, As), "normalizeInputTypes"), F = /* @__PURE__ */ s((pt) => Array.isArray(pt) ? pt : pt ? [pt] : [], "normalizeArrays"), Os = P`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
function Se(pt, ne, yt) {
  let ir = ne, io = typeof ne == "function" ? ne : null, { story: uo } = ir;
  uo && (s$3.debug("deprecated story", uo), m$1(Os));
  let fo = re$1(pt), Co = typeof ir != "function" && ir.name || ir.storyName || (uo == null ? void 0 : uo.name) || fo, xo = [
    ...F(ir.decorators),
    ...F(uo == null ? void 0 : uo.decorators)
  ], Oo = { ...uo == null ? void 0 : uo.parameters, ...ir.parameters }, Po = { ...uo == null ? void 0 : uo.args, ...ir.args }, _o = { ...uo == null ? void 0 : uo.argTypes, ...ir.argTypes }, Io = [...F(ir.loaders), ...F(
    uo == null ? void 0 : uo.loaders
  )], jo = [
    ...F(ir.beforeEach),
    ...F(uo == null ? void 0 : uo.beforeEach)
  ], Lo = [
    ...F(ir.experimental_afterEach),
    ...F(uo == null ? void 0 : uo.experimental_afterEach)
  ], { render: Ho, play: qo, tags: Vo = [], globals: Mo = {} } = ir, Uo = Oo.__id || ee$1(yt.id, fo);
  return {
    moduleExport: ne,
    id: Uo,
    name: Co,
    tags: Vo,
    decorators: xo,
    parameters: Oo,
    args: Po,
    argTypes: ae(_o),
    loaders: Io,
    beforeEach: jo,
    experimental_afterEach: Lo,
    globals: Mo,
    ...Ho && { render: Ho },
    ...io && { userStoryFn: io },
    ...qo && { play: qo }
  };
}
s(Se, "normalizeStory");
function je(pt, ne = pt.title, yt) {
  let { id: ir, argTypes: io } = pt;
  return {
    id: D(ir || ne),
    ...pt,
    title: ne,
    ...io && { argTypes: ae(io) },
    parameters: {
      fileName: yt,
      ...pt.parameters
    }
  };
}
s(je, "normalizeComponentAnnotations");
var js = /* @__PURE__ */ s((pt) => {
  let { globals: ne, globalTypes: yt } = pt;
  (ne || yt) && s$3.error(
    "Global args/argTypes can only be set globally",
    JSON.stringify({
      globals: ne,
      globalTypes: yt
    })
  );
}, "checkGlobals"), Ls = /* @__PURE__ */ s((pt) => {
  let { options: ne } = pt;
  ne != null && ne.storySort && s$3.error("The storySort option parameter can only be set globally");
}, "checkStorySort"), Ze = /* @__PURE__ */ s((pt) => {
  pt && (js(pt), Ls(pt));
}, "checkDisallowedParameters");
function yo(pt, ne, yt) {
  let { default: ir, __namedExportsOrder: io, ...uo } = pt, fo = Object.values(uo)[0];
  if (K(fo)) {
    let Oo = je(fo.meta.input, yt, ne);
    Ze(Oo.parameters);
    let Po = { meta: Oo, stories: {}, moduleExports: pt };
    return Object.keys(uo).forEach((_o) => {
      if (te$1(_o, Oo)) {
        let Io = Se(_o, uo[_o].input, Oo);
        Ze(Io.parameters), Po.stories[Io.id] = Io;
      }
    }), Po.projectAnnotations = fo.meta.preview.composed, Po;
  }
  let Co = je(
    ir,
    yt,
    ne
  );
  Ze(Co.parameters);
  let xo = { meta: Co, stories: {}, moduleExports: pt };
  return Object.keys(uo).forEach((Oo) => {
    if (te$1(Oo, Co)) {
      let Po = Se(Oo, uo[Oo], Co);
      Ze(Po.parameters), xo.stories[Po.id] = Po;
    }
  }), xo;
}
s(yo, "processCSFFile");
function mo(pt) {
  return pt != null && Ns(pt).includes("mount");
}
s(mo, "mountDestructured");
function Ns(pt) {
  let ne = pt.toString().match(/[^(]*\(([^)]*)/);
  if (!ne)
    return [];
  let yt = ho(ne[1]);
  if (!yt.length)
    return [];
  let ir = yt[0];
  return ir.startsWith("{") && ir.endsWith("}") ? ho(ir.slice(1, -1).replace(/\s/g, "")).map((io) => io.replace(/:.*|=.*/g, "")) : [];
}
s(Ns, "getUsedProps");
function ho(pt) {
  let ne = [], yt = [], ir = 0;
  for (let uo = 0; uo < pt.length; uo++)
    if (pt[uo] === "{" || pt[uo] === "[")
      yt.push(pt[uo] === "{" ? "}" : "]");
    else if (pt[uo] === yt[yt.length - 1])
      yt.pop();
    else if (!yt.length && pt[uo] === ",") {
      let fo = pt.substring(ir, uo).trim();
      fo && ne.push(fo), ir = uo + 1;
    }
  let io = pt.substring(ir).trim();
  return io && ne.push(io), ne;
}
s(ho, "splitByComma");
function go(pt, ne, yt) {
  let ir = yt(pt);
  return (io) => ne(ir, io);
}
s(go, "decorateStory");
function So({
  componentId: pt,
  title: ne,
  kind: yt,
  id: ir,
  name: io,
  story: uo,
  parameters: fo,
  initialArgs: Co,
  argTypes: xo,
  ...Oo
} = {}) {
  return Oo;
}
s(So, "sanitizeStoryContextUpdate");
function Hr(pt, ne) {
  let yt = {}, ir = /* @__PURE__ */ s((uo) => (fo) => {
    if (!yt.value)
      throw new Error("Decorated function called without init");
    return yt.value = {
      ...yt.value,
      ...So(fo)
    }, uo(yt.value);
  }, "bindWithContext"), io = ne.reduce(
    (uo, fo) => go(uo, fo, ir),
    pt
  );
  return (uo) => (yt.value = uo, io(uo));
}
s(Hr, "defaultDecorateStory");
var M = /* @__PURE__ */ s((...pt) => {
  let ne = {}, yt = pt.filter(Boolean), ir = yt.reduce((io, uo) => (Object.entries(uo).forEach(([fo, Co]) => {
    let xo = io[fo];
    Array.isArray(Co) || typeof xo > "u" ? io[fo] = Co : L(Co) && L(xo) ? ne[fo] = !0 : typeof Co < "u" && (io[fo] = Co);
  }), io), {});
  return Object.keys(ne).forEach((io) => {
    let uo = yt.filter(Boolean).map((fo) => fo[io]).filter((fo) => typeof fo < "u");
    uo.every((fo) => L(fo)) ? ir[io] = M(...uo) : ir[io] = uo[uo.length - 1];
  }), ir;
}, "combineParameters");
function Le(pt, ne, yt) {
  let { moduleExport: ir, id: io, name: uo } = pt || {}, fo = bo(
    pt,
    ne,
    yt
  ), Co = /* @__PURE__ */ s(async (Xo) => {
    let Ko = {};
    for (let bs of [
      ..."__STORYBOOK_TEST_LOADERS__" in I && Array.isArray(I.__STORYBOOK_TEST_LOADERS__) ? [I.__STORYBOOK_TEST_LOADERS__] : [],
      F(yt.loaders),
      F(ne.loaders),
      F(pt.loaders)
    ]) {
      if (Xo.abortSignal.aborted)
        return Ko;
      let Cs = await Promise.all(bs.map((Es) => Es(Xo)));
      Object.assign(Ko, ...Cs);
    }
    return Ko;
  }, "applyLoaders"), xo = /* @__PURE__ */ s(async (Xo) => {
    let Ko = new Array();
    for (let bs of [
      ...F(yt.beforeEach),
      ...F(ne.beforeEach),
      ...F(pt.beforeEach)
    ]) {
      if (Xo.abortSignal.aborted)
        return Ko;
      let Cs = await bs(Xo);
      Cs && Ko.push(Cs);
    }
    return Ko;
  }, "applyBeforeEach"), Oo = /* @__PURE__ */ s(async (Xo) => {
    let Ko = [
      ...F(yt.experimental_afterEach),
      ...F(ne.experimental_afterEach),
      ...F(pt.experimental_afterEach)
    ].reverse();
    for (let bs of Ko) {
      if (Xo.abortSignal.aborted)
        return;
      await bs(Xo);
    }
  }, "applyAfterEach"), Po = /* @__PURE__ */ s((Xo) => Xo.originalStoryFn(Xo.args, Xo), "undecoratedStoryFn"), { applyDecorators: _o = Hr, runStep: Io } = yt, jo = [
    ...F(pt == null ? void 0 : pt.decorators),
    ...F(ne == null ? void 0 : ne.decorators),
    ...F(yt == null ? void 0 : yt.decorators)
  ], Lo = (pt == null ? void 0 : pt.userStoryFn) || (pt == null ? void 0 : pt.render) || ne.render || yt.render, Ho = vr(_o)(Po, jo), qo = /* @__PURE__ */ s((Xo) => Ho(Xo), "unboundStoryFn"), Vo = (pt == null ? void 0 : pt.play) ?? (ne == null ? void 0 : ne.play), Mo = mo(Vo);
  if (!Lo && !Mo)
    throw new q$1({ id: io });
  let Uo = /* @__PURE__ */ s((Xo) => async () => (await Xo.renderToCanvas(), Xo.canvas), "defaultMount"), zo = pt.mount ?? ne.mount ?? yt.mount ?? Uo, ms = yt.testingLibraryRender;
  return {
    storyGlobals: {},
    ...fo,
    moduleExport: ir,
    id: io,
    name: uo,
    story: uo,
    originalStoryFn: Lo,
    undecoratedStoryFn: Po,
    unboundStoryFn: qo,
    applyLoaders: Co,
    applyBeforeEach: xo,
    applyAfterEach: Oo,
    playFunction: Vo,
    runStep: Io,
    mount: zo,
    testingLibraryRender: ms,
    renderToCanvas: yt.renderToCanvas,
    usesMount: Mo
  };
}
s(Le, "prepareStory");
function Wr(pt, ne, yt) {
  return {
    ...bo(void 0, pt, ne),
    moduleExport: yt
  };
}
s(Wr, "prepareMeta");
function bo(pt, ne, yt) {
  var Vo;
  let ir = ["dev", "test"], io = ((Vo = I.DOCS_OPTIONS) == null ? void 0 : Vo.autodocs) === !0 ? ["autodocs"] : [], uo = oe(
    ...ir,
    ...io,
    ...yt.tags ?? [],
    ...ne.tags ?? [],
    ...(pt == null ? void 0 : pt.tags) ?? []
  ), fo = M(
    yt.parameters,
    ne.parameters,
    pt == null ? void 0 : pt.parameters
  ), { argTypesEnhancers: Co = [], argsEnhancers: xo = [] } = yt, Oo = M(
    yt.argTypes,
    ne.argTypes,
    pt == null ? void 0 : pt.argTypes
  );
  if (pt) {
    let Mo = (pt == null ? void 0 : pt.userStoryFn) || (pt == null ? void 0 : pt.render) || ne.render || yt.render;
    fo.__isArgsStory = Mo && Mo.length > 0;
  }
  let Po = {
    ...yt.args,
    ...ne.args,
    ...pt == null ? void 0 : pt.args
  }, _o = {
    ...ne.globals,
    ...pt == null ? void 0 : pt.globals
  }, Io = {
    componentId: ne.id,
    title: ne.title,
    kind: ne.title,
    // Back compat
    id: (pt == null ? void 0 : pt.id) || ne.id,
    // if there's no story name, we create a fake one since enhancers expect a name
    name: (pt == null ? void 0 : pt.name) || "__meta",
    story: (pt == null ? void 0 : pt.name) || "__meta",
    // Back compat
    component: ne.component,
    subcomponents: ne.subcomponents,
    tags: uo,
    parameters: fo,
    initialArgs: Po,
    argTypes: Oo,
    storyGlobals: _o
  };
  Io.argTypes = Co.reduce(
    (Mo, Uo) => Uo({ ...Io, argTypes: Mo }),
    Io.argTypes
  );
  let jo = { ...Po };
  Io.initialArgs = xo.reduce(
    (Mo, Uo) => ({
      ...Mo,
      ...Uo({
        ...Io,
        initialArgs: Mo
      })
    }),
    jo
  );
  let { name: Lo, story: Ho, ...qo } = Io;
  return qo;
}
s(bo, "preparePartialAnnotations");
function er(pt) {
  var uo;
  let { args: ne } = pt, yt = {
    ...pt,
    allArgs: void 0,
    argsByTarget: void 0
  };
  if ((uo = I.FEATURES) != null && uo.argTypeTargetsV7) {
    let fo = co(pt);
    yt = {
      ...pt,
      allArgs: pt.args,
      argsByTarget: fo,
      args: fo[Gr] || {}
    };
  }
  let ir = Object.entries(yt.args).reduce((fo, [Co, xo]) => {
    var Po;
    if (!((Po = yt.argTypes[Co]) != null && Po.mapping))
      return fo[Co] = xo, fo;
    let Oo = /* @__PURE__ */ s((_o) => {
      let Io = yt.argTypes[Co].mapping;
      return Io && _o in Io ? Io[_o] : _o;
    }, "mappingFn");
    return fo[Co] = Array.isArray(xo) ? xo.map(Oo) : Oo(xo), fo;
  }, {}), io = Object.entries(ir).reduce((fo, [Co, xo]) => {
    let Oo = yt.argTypes[Co] || {};
    return z(Oo, ir, yt.globals) && (fo[Co] = xo), fo;
  }, {});
  return { ...yt, unmappedArgs: ne, args: io };
}
s(er, "prepareContext");
var $r = /* @__PURE__ */ s((pt, ne, yt) => {
  let ir = typeof pt;
  switch (ir) {
    case "boolean":
    case "string":
    case "number":
    case "function":
    case "symbol":
      return { name: ir };
  }
  return pt ? yt.has(pt) ? (s$3.warn(P`
        We've detected a cycle in arg '${ne}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/essentials/controls#fully-custom-args
      `), { name: "other", value: "cyclic object" }) : (yt.add(pt), Array.isArray(pt) ? { name: "array", value: pt.length > 0 ? $r(pt[0], ne, new Set(
    yt
  )) : { name: "other", value: "unknown" } } : { name: "object", value: G(pt, (io) => $r(io, ne, new Set(yt))) }) : { name: "object", value: {} };
}, "inferType"), Yr = /* @__PURE__ */ s((pt) => {
  let { id: ne, argTypes: yt = {}, initialArgs: ir = {} } = pt, io = G(ir, (fo, Co) => ({
    name: Co,
    type: $r(fo, `${ne}.${Co}`, /* @__PURE__ */ new Set())
  })), uo = G(yt, (fo, Co) => ({
    name: Co
  }));
  return M(io, uo, yt);
}, "inferArgTypes");
Yr.secondPass = !0;
var To = /* @__PURE__ */ s((pt, ne) => Array.isArray(ne) ? ne.includes(pt) : pt.match(ne), "matches"), rr = /* @__PURE__ */ s((pt, ne, yt) => !ne && !yt ? pt : pt && Dr(pt, (ir, io) => {
  let uo = ir.name || io.toString();
  return !!(!ne || To(uo, ne)) && (!yt || !To(uo, yt));
}), "filterArgTypes"), Bs = /* @__PURE__ */ s((pt, ne, yt) => {
  let { type: ir, options: io } = pt;
  if (ir) {
    if (yt.color && yt.color.test(ne)) {
      let uo = ir.name;
      if (uo === "string")
        return { control: { type: "color" } };
      uo !== "enum" && s$3.warn(
        `Addon controls: Control of type color only supports string, received "${uo}" instead`
      );
    }
    if (yt.date && yt.date.test(ne))
      return { control: { type: "date" } };
    switch (ir.name) {
      case "array":
        return { control: { type: "object" } };
      case "boolean":
        return { control: { type: "boolean" } };
      case "string":
        return { control: { type: "text" } };
      case "number":
        return { control: { type: "number" } };
      case "enum": {
        let { value: uo } = ir;
        return { control: { type: (uo == null ? void 0 : uo.length) <= 5 ? "radio" : "select" }, options: uo };
      }
      case "function":
      case "symbol":
        return null;
      default:
        return { control: { type: io ? "select" : "object" } };
    }
  }
}, "inferControl"), Ne = /* @__PURE__ */ s((pt) => {
  let {
    argTypes: ne,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    parameters: { __isArgsStory: yt, controls: { include: ir = null, exclude: io = null, matchers: uo = {} } = {} }
  } = pt;
  if (!yt)
    return ne;
  let fo = rr(ne, ir, io), Co = G(fo, (xo, Oo) => (xo == null ? void 0 : xo.type) && Bs(xo, Oo.toString(), uo));
  return M(Co, fo);
}, "inferControls");
Ne.secondPass = !0;
function be({
  argTypes: pt,
  globalTypes: ne,
  argTypesEnhancers: yt,
  decorators: ir,
  loaders: io,
  beforeEach: uo,
  experimental_afterEach: fo,
  globals: Co,
  initialGlobals: xo,
  ...Oo
}) {
  return Co && Object.keys(Co).length > 0 && m$1(P`
      The preview.js 'globals' field is deprecated and will be removed in Storybook 9.0.
      Please use 'initialGlobals' instead. Learn more:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewjs-globals-renamed-to-initialglobals
    `), {
    ...pt && { argTypes: ae(pt) },
    ...ne && { globalTypes: ae(ne) },
    decorators: F(ir),
    loaders: F(io),
    beforeEach: F(uo),
    experimental_afterEach: F(fo),
    argTypesEnhancers: [
      ...yt || [],
      Yr,
      // inferControls technically should only run if the user is using the controls addon,
      // and so should be added by a preset there. However, as it seems some code relies on controls
      // annotations (in particular the angular implementation's `cleanArgsDecorator`), for backwards
      // compatibility reasons, we will leave this in the store until 7.0
      Ne
    ],
    initialGlobals: M(xo, Co),
    ...Oo
  };
}
s(be, "normalizeProjectAnnotations");
var Eo = /* @__PURE__ */ s((pt) => async () => {
  let ne = [];
  for (let yt of pt) {
    let ir = await yt();
    ir && ne.unshift(ir);
  }
  return async () => {
    for (let yt of ne)
      await yt();
  };
}, "composeBeforeAllHooks");
function Kr(pt) {
  return async (ne, yt, ir) => {
    await pt.reduceRight(
      (io, uo) => async () => uo(ne, io, ir),
      async () => yt(ir)
    )();
  };
}
s(Kr, "composeStepRunners");
function _e(pt, ne) {
  return pt.map((yt) => {
    var ir;
    return ((ir = yt.default) == null ? void 0 : ir[ne]) ?? yt[ne];
  }).filter(Boolean);
}
s(_e, "getField");
function Q(pt, ne, yt = {}) {
  return _e(pt, ne).reduce((ir, io) => {
    let uo = F(io);
    return yt.reverseFileOrder ? [...uo, ...ir] : [...ir, ...uo];
  }, []);
}
s(Q, "getArrayField");
function Me(pt, ne) {
  return Object.assign({}, ..._e(pt, ne));
}
s(Me, "getObjectField");
function Te(pt, ne) {
  return _e(pt, ne).pop();
}
s(Te, "getSingletonField");
function Ee(pt) {
  var io;
  let ne = Q(pt, "argTypesEnhancers"), yt = _e(pt, "runStep"), ir = Q(pt, "beforeAll");
  return {
    parameters: M(..._e(pt, "parameters")),
    decorators: Q(pt, "decorators", {
      reverseFileOrder: !(((io = I.FEATURES) == null ? void 0 : io.legacyDecoratorFileOrder) ?? !1)
    }),
    args: Me(pt, "args"),
    argsEnhancers: Q(pt, "argsEnhancers"),
    argTypes: Me(pt, "argTypes"),
    argTypesEnhancers: [
      ...ne.filter((uo) => !uo.secondPass),
      ...ne.filter((uo) => uo.secondPass)
    ],
    globals: Me(pt, "globals"),
    initialGlobals: Me(pt, "initialGlobals"),
    globalTypes: Me(pt, "globalTypes"),
    loaders: Q(pt, "loaders"),
    beforeAll: Eo(ir),
    beforeEach: Q(pt, "beforeEach"),
    experimental_afterEach: Q(pt, "experimental_afterEach"),
    render: Te(pt, "render"),
    renderToCanvas: Te(pt, "renderToCanvas"),
    renderToDOM: Te(pt, "renderToDOM"),
    // deprecated
    applyDecorators: Te(pt, "applyDecorators"),
    runStep: Kr(yt),
    tags: Q(pt, "tags"),
    mount: Te(pt, "mount"),
    testingLibraryRender: Te(pt, "testingLibraryRender")
  };
}
s(Ee, "composeConfigs");
var Xr = class {
  constructor() {
    this.reports = [];
  }
  async addReport(ne) {
    this.reports.push(ne);
  }
};
s(Xr, "ReporterAPI");
var le = Xr;
function Jr(pt, ne, yt) {
  return K(pt) ? {
    story: pt.input,
    meta: pt.meta.input,
    preview: pt.meta.preview.composed
  } : { story: pt, meta: ne, preview: yt };
}
s(Jr, "getCsfFactoryAnnotations");
function $s(pt) {
  globalThis.defaultProjectAnnotations = pt;
}
s($s, "setDefaultProjectAnnotations");
var Ys = "ComposedStory", Ks = "Unnamed Story";
function Xs(pt) {
  return pt ? Ee([pt]) : {};
}
s(Xs, "extractAnnotation");
function Js(pt) {
  let ne = Array.isArray(pt) ? pt : [pt];
  return globalThis.globalProjectAnnotations = Ee([
    globalThis.defaultProjectAnnotations ?? {},
    Ee(ne.map(Xs))
  ]), globalThis.globalProjectAnnotations ?? {};
}
s(Js, "setProjectAnnotations");
var Z = [];
function Ro(pt, ne, yt, ir, io) {
  var Vo;
  if (pt === void 0)
    throw new Error("Expected a story but received undefined.");
  ne.title = ne.title ?? Ys;
  let uo = je(ne), fo = io || pt.storyName || ((Vo = pt.story) == null ? void 0 : Vo.name) || pt.name || Ks, Co = Se(
    fo,
    pt,
    uo
  ), xo = be(
    Ee([
      ir ?? globalThis.globalProjectAnnotations ?? {},
      yt ?? {}
    ])
  ), Oo = Le(
    Co,
    uo,
    xo
  ), Po = {
    // TODO: remove loading from globalTypes in 9.0
    ...Xe(xo.globalTypes),
    ...xo.initialGlobals,
    ...Oo.storyGlobals
  }, _o = new le(), Io = /* @__PURE__ */ s(() => {
    let Mo = er({
      hooks: new se(),
      globals: Po,
      args: { ...Oo.initialArgs },
      viewMode: "story",
      reporting: _o,
      loaded: {},
      abortSignal: new AbortController().signal,
      step: /* @__PURE__ */ s((Uo, zo) => Oo.runStep(Uo, zo, Mo), "step"),
      canvasElement: null,
      canvas: {},
      globalTypes: xo.globalTypes,
      ...Oo,
      context: null,
      mount: null
    });
    return Mo.parameters.__isPortableStory = !0, Mo.context = Mo, Oo.renderToCanvas && (Mo.renderToCanvas = async () => {
      var zo;
      let Uo = await ((zo = Oo.renderToCanvas) == null ? void 0 : zo.call(
        Oo,
        {
          componentId: Oo.componentId,
          title: Oo.title,
          id: Oo.id,
          name: Oo.name,
          tags: Oo.tags,
          showMain: /* @__PURE__ */ s(() => {
          }, "showMain"),
          showError: /* @__PURE__ */ s((ms) => {
            throw new Error(`${ms.title}
${ms.description}`);
          }, "showError"),
          showException: /* @__PURE__ */ s((ms) => {
            throw ms;
          }, "showException"),
          forceRemount: !0,
          storyContext: Mo,
          storyFn: /* @__PURE__ */ s(() => Oo.unboundStoryFn(Mo), "storyFn"),
          unboundStoryFn: Oo.unboundStoryFn
        },
        Mo.canvasElement
      ));
      Uo && Z.push(Uo);
    }), Mo.mount = Oo.mount(Mo), Mo;
  }, "initializeContext"), jo, Lo = /* @__PURE__ */ s(async (Mo) => {
    var zo;
    let Uo = Io();
    return Uo.canvasElement ?? (Uo.canvasElement = (zo = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : zo.body), jo && (Uo.loaded = jo.loaded), Object.assign(Uo, Mo), Oo.playFunction(Uo);
  }, "play"), Ho = /* @__PURE__ */ s((Mo) => {
    let Uo = Io();
    return Object.assign(Uo, Mo), ri(Oo, Uo);
  }, "run"), qo = Oo.playFunction ? Lo : void 0;
  return Object.assign(
    /* @__PURE__ */ s(function(Mo) {
      let Uo = Io();
      return jo && (Uo.loaded = jo.loaded), Uo.args = {
        ...Uo.initialArgs,
        ...Mo
      }, Oo.unboundStoryFn(Uo);
    }, "storyFn"),
    {
      id: Oo.id,
      storyName: fo,
      load: /* @__PURE__ */ s(async () => {
        for (let Uo of [...Z].reverse())
          await Uo();
        Z.length = 0;
        let Mo = Io();
        Mo.loaded = await Oo.applyLoaders(Mo), Z.push(...(await Oo.applyBeforeEach(Mo)).filter(Boolean)), jo = Mo;
      }, "load"),
      globals: Po,
      args: Oo.initialArgs,
      parameters: Oo.parameters,
      argTypes: Oo.argTypes,
      play: qo,
      run: Ho,
      reporting: _o,
      tags: Oo.tags
    }
  );
}
s(Ro, "composeStory");
var Qs = /* @__PURE__ */ s((pt, ne, yt, ir) => Ro(pt, ne, yt, {}, ir), "defaultComposeStory");
function Zs(pt, ne, yt = Qs) {
  let { default: ir, __esModule: io, __namedExportsOrder: uo, ...fo } = pt, Co = ir;
  return Object.entries(fo).reduce(
    (xo, [Oo, Po]) => {
      let { story: _o, meta: Io } = Jr(Po);
      return !Co && Io && (Co = Io), te$1(Oo, Co) ? Object.assign(xo, {
        [Oo]: yt(_o, Co, ne, Oo)
      }) : xo;
    },
    {}
  );
}
s(Zs, "composeStories");
function ei(pt) {
  return pt.extend({
    mount: /* @__PURE__ */ s(async ({ mount: ne, page: yt }, ir) => {
      await ir(async (io, ...uo) => {
        if (!("__pw_type" in io) || "__pw_type" in io && io.__pw_type !== "jsx")
          throw new Error(P`
              Portable stories in Playwright CT only work when referencing JSX elements.
              Please use JSX format for your components such as:

              instead of:
              await mount(MyComponent, { props: { foo: 'bar' } })

              do:
              await mount(<MyComponent foo="bar"/>)

              More info: https://storybook.js.org/docs/api/portable-stories-playwright
            `);
        await yt.evaluate(async (Co) => {
          var Oo, Po, _o;
          let xo = await ((Oo = globalThis.__pwUnwrapObject) == null ? void 0 : Oo.call(globalThis, Co));
          return (_o = (Po = "__pw_type" in xo ? xo.type : xo) == null ? void 0 : Po.load) == null ? void 0 : _o.call(Po);
        }, io);
        let fo = await ne(io, ...uo);
        return await yt.evaluate(async (Co) => {
          var _o, Io;
          let xo = await ((_o = globalThis.__pwUnwrapObject) == null ? void 0 : _o.call(globalThis, Co)), Oo = "__pw_type" in xo ? xo.type : xo, Po = document.querySelector("#root");
          return (Io = Oo == null ? void 0 : Oo.play) == null ? void 0 : Io.call(Oo, { canvasElement: Po });
        }, io), fo;
      });
    }, "mount")
  });
}
s(ei, "createPlaywrightTest");
async function ri(pt, ne) {
  var io, uo;
  for (let fo of [...Z].reverse())
    await fo();
  if (Z.length = 0, !ne.canvasElement) {
    let fo = document.createElement("div");
    (uo = (io = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : io.body) == null || uo.appendChild(fo), ne.canvasElement = fo, Z.push(() => {
      var Co, xo, Oo, Po;
      (xo = (Co = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : Co.body) != null && xo.contains(fo) && ((Po = (Oo = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : Oo.body) == null || Po.removeChild(fo));
    });
  }
  if (ne.loaded = await pt.applyLoaders(ne), ne.abortSignal.aborted)
    return;
  Z.push(...(await pt.applyBeforeEach(ne)).filter(Boolean));
  let yt = pt.playFunction, ir = pt.usesMount;
  ir || await ne.mount(), !ne.abortSignal.aborted && (yt && (ir || (ne.mount = async () => {
    throw new J$1({ playFunction: yt.toString() });
  }), await yt(ne)), await pt.applyAfterEach(ne));
}
s(ri, "runStory");
function wo(pt, ne) {
  return Ir(Or(pt, ne), (yt) => yt === void 0);
}
s(wo, "picky");
var vo = 1e3, ni = 1e4, Qr = class {
  constructor(ne, yt, ir) {
    this.importFn = yt, this.getStoriesJsonData = /* @__PURE__ */ s(() => {
      let fo = this.getSetStoriesPayload(), Co = ["fileName", "docsOnly", "framework", "__id", "__isArgsStory"];
      return {
        v: 3,
        stories: G(fo.stories, (xo) => {
          let { importPath: Oo } = this.storyIndex.entries[xo.id];
          return {
            ...wo(xo, ["id", "name", "title"]),
            importPath: Oo,
            // These 3 fields were going to be dropped in v7, but instead we will keep them for the
            // 7.x cycle so that v7 Storybooks can be composed successfully in v6 Storybook.
            // In v8 we will (likely) completely drop support for `extract` and `getStoriesJsonData`
            kind: xo.title,
            story: xo.name,
            parameters: {
              ...wo(xo.parameters, Co),
              fileName: Oo
            }
          };
        })
      };
    }, "getStoriesJsonData"), this.storyIndex = new Qe(ne), this.projectAnnotations = be(ir);
    let { initialGlobals: io, globalTypes: uo } = this.projectAnnotations;
    this.args = new Ke(), this.userGlobals = new Je({ globals: io, globalTypes: uo }), this.hooks = {}, this.cleanupCallbacks = {}, this.processCSFFileWithCache = (0, tr.default)(vo)(yo), this.prepareMetaWithCache = (0, tr.default)(vo)(Wr), this.prepareStoryWithCache = (0, tr.default)(ni)(Le);
  }
  setProjectAnnotations(ne) {
    this.projectAnnotations = be(ne);
    let { initialGlobals: yt, globalTypes: ir } = ne;
    this.userGlobals.set({ globals: yt, globalTypes: ir });
  }
  // This means that one of the CSF files has changed.
  // If the `importFn` has changed, we will invalidate both caches.
  // If the `storyIndex` data has changed, we may or may not invalidate the caches, depending
  // on whether we've loaded the relevant files yet.
  async onStoriesChanged({
    importFn: ne,
    storyIndex: yt
  }) {
    ne && (this.importFn = ne), yt && (this.storyIndex.entries = yt.entries), this.cachedCSFFiles && await this.cacheAllCSFFiles();
  }
  // Get an entry from the index, waiting on initialization if necessary
  async storyIdToEntry(ne) {
    return this.storyIndex.storyIdToEntry(ne);
  }
  // To load a single CSF file to service a story we need to look up the importPath in the index
  async loadCSFFileByStoryId(ne) {
    let { importPath: yt, title: ir } = this.storyIndex.storyIdToEntry(ne), io = await this.importFn(yt);
    return this.processCSFFileWithCache(io, yt, ir);
  }
  async loadAllCSFFiles() {
    let ne = {};
    return Object.entries(this.storyIndex.entries).forEach(([yt, { importPath: ir }]) => {
      ne[ir] = yt;
    }), (await Promise.all(
      Object.entries(ne).map(async ([yt, ir]) => ({
        importPath: yt,
        csfFile: await this.loadCSFFileByStoryId(ir)
      }))
    )).reduce(
      (yt, { importPath: ir, csfFile: io }) => (yt[ir] = io, yt),
      {}
    );
  }
  async cacheAllCSFFiles() {
    this.cachedCSFFiles = await this.loadAllCSFFiles();
  }
  preparedMetaFromCSFFile({ csfFile: ne }) {
    let yt = ne.meta;
    return this.prepareMetaWithCache(
      yt,
      this.projectAnnotations,
      ne.moduleExports.default
    );
  }
  // Load the CSF file for a story and prepare the story from it and the project annotations.
  async loadStory({ storyId: ne }) {
    let yt = await this.loadCSFFileByStoryId(ne);
    return this.storyFromCSFFile({ storyId: ne, csfFile: yt });
  }
  // This function is synchronous for convenience -- often times if you have a CSF file already
  // it is easier not to have to await `loadStory`.
  storyFromCSFFile({
    storyId: ne,
    csfFile: yt
  }) {
    let ir = yt.stories[ne];
    if (!ir)
      throw new X({ storyId: ne });
    let io = yt.meta, uo = this.prepareStoryWithCache(
      ir,
      io,
      yt.projectAnnotations ?? this.projectAnnotations
    );
    return this.args.setInitial(uo), this.hooks[uo.id] = this.hooks[uo.id] || new se(), uo;
  }
  // If we have a CSF file we can get all the stories from it synchronously
  componentStoriesFromCSFFile({
    csfFile: ne
  }) {
    return Object.keys(this.storyIndex.entries).filter((yt) => !!ne.stories[yt]).map((yt) => this.storyFromCSFFile({ storyId: yt, csfFile: ne }));
  }
  async loadEntry(ne) {
    let yt = await this.storyIdToEntry(ne), ir = yt.type === "docs" ? yt.storiesImports : [], [io, ...uo] = await Promise.all([
      this.importFn(yt.importPath),
      ...ir.map((fo) => {
        let Co = this.storyIndex.importPathToEntry(fo);
        return this.loadCSFFileByStoryId(Co.id);
      })
    ]);
    return { entryExports: io, csfFiles: uo };
  }
  // A prepared story does not include args, globals or hooks. These are stored in the story store
  // and updated separtely to the (immutable) story.
  getStoryContext(ne, { forceInitialArgs: yt = !1 } = {}) {
    let ir = this.userGlobals.get(), { initialGlobals: io } = this.userGlobals, uo = new le();
    return er({
      ...ne,
      args: yt ? ne.initialArgs : this.args.get(ne.id),
      initialGlobals: io,
      globalTypes: this.projectAnnotations.globalTypes,
      userGlobals: ir,
      reporting: uo,
      globals: {
        ...ir,
        ...ne.storyGlobals
      },
      hooks: this.hooks[ne.id]
    });
  }
  addCleanupCallbacks(ne, yt) {
    this.cleanupCallbacks[ne.id] = yt;
  }
  async cleanupStory(ne) {
    this.hooks[ne.id].clean();
    let yt = this.cleanupCallbacks[ne.id];
    if (yt)
      for (let ir of [...yt].reverse())
        await ir();
    delete this.cleanupCallbacks[ne.id];
  }
  extract(ne = { includeDocsOnly: !1 }) {
    let { cachedCSFFiles: yt } = this;
    if (!yt)
      throw new L$2();
    return Object.entries(this.storyIndex.entries).reduce(
      (ir, [io, { type: uo, importPath: fo }]) => {
        if (uo === "docs")
          return ir;
        let Co = yt[fo], xo = this.storyFromCSFFile({ storyId: io, csfFile: Co });
        return !ne.includeDocsOnly && xo.parameters.docsOnly || (ir[io] = Object.entries(xo).reduce(
          (Oo, [Po, _o]) => Po === "moduleExport" || typeof _o == "function" ? Oo : Array.isArray(_o) ? Object.assign(Oo, { [Po]: _o.slice().sort() }) : Object.assign(Oo, { [Po]: _o }),
          {
            //
            args: xo.initialArgs,
            globals: {
              ...this.userGlobals.initialGlobals,
              ...this.userGlobals.globals,
              ...xo.storyGlobals
            }
          }
        )), ir;
      },
      {}
    );
  }
  // TODO: Remove in 9.0
  getSetStoriesPayload() {
    let ne = this.extract({ includeDocsOnly: !0 }), yt = Object.values(ne).reduce(
      (ir, { title: io }) => (ir[io] = {}, ir),
      {}
    );
    return {
      v: 2,
      globals: this.userGlobals.get(),
      globalParameters: {},
      kindParameters: yt,
      stories: ne
    };
  }
  raw() {
    return m$1(
      "StoryStore.raw() is deprecated and will be removed in 9.0, please use extract() instead"
    ), Object.values(this.extract()).map(({ id: ne }) => this.fromId(ne)).filter(Boolean);
  }
  fromId(ne) {
    if (m$1(
      "StoryStore.fromId() is deprecated and will be removed in 9.0, please use loadStory() instead"
    ), !this.cachedCSFFiles)
      throw new Error("Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.");
    let yt;
    try {
      ({ importPath: yt } = this.storyIndex.storyIdToEntry(ne));
    } catch {
      return null;
    }
    let ir = this.cachedCSFFiles[yt], io = this.storyFromCSFFile({ storyId: ne, csfFile: ir });
    return {
      ...io,
      storyFn: /* @__PURE__ */ s((uo) => {
        let fo = {
          ...this.getStoryContext(io),
          abortSignal: new AbortController().signal,
          canvasElement: null,
          loaded: {},
          step: /* @__PURE__ */ s((Co, xo) => io.runStep(Co, xo, fo), "step"),
          context: null,
          mount: null,
          canvas: {},
          viewMode: "story"
        };
        return io.unboundStoryFn({ ...fo, ...uo });
      }, "storyFn")
    };
  }
};
s(Qr, "StoryStore");
var Re = Qr;
function Zr(pt) {
  return pt.startsWith("\\\\?\\") ? pt : pt.replace(/\\/g, "/");
}
s(Zr, "slash");
function Ao(pt) {
  return pt.flatMap((ne) => ne.split("/")).filter(Boolean).join("/");
}
s(Ao, "pathJoin");
var ee = new Error("prepareAborted"), { AbortController: Do } = globalThis;
function ko(pt) {
  try {
    let { name: ne = "Error", message: yt = String(pt), stack: ir } = pt;
    return { name: ne, message: yt, stack: ir };
  } catch {
    return { name: "Error", message: String(pt) };
  }
}
s(ko, "serializeError");
var et = class {
  constructor(ne, yt, ir, io, uo, fo, Co = { autoplay: !0, forceInitialArgs: !1 }, xo) {
    this.channel = ne, this.store = yt, this.renderToScreen = ir, this.callbacks = io, this.id = uo, this.viewMode = fo, this.renderOptions = Co, this.type = "story", this.notYetRendered = !0, this.rerenderEnqueued = !1, this.disableKeyListeners = !1, this.teardownRender = /* @__PURE__ */ s(() => {
    }, "teardownRender"), this.torndown = !1, this.abortController = new Do(), xo && (this.story = xo, this.phase = "preparing");
  }
  async runPhase(ne, yt, ir) {
    this.phase = yt, this.channel.emit(B$1, { newPhase: this.phase, storyId: this.id }), ir && (await ir(), this.checkIfAborted(ne));
  }
  checkIfAborted(ne) {
    return ne.aborted ? (this.phase = "aborted", this.channel.emit(B$1, { newPhase: this.phase, storyId: this.id }), !0) : !1;
  }
  async prepare() {
    if (await this.runPhase(this.abortController.signal, "preparing", async () => {
      this.story = await this.store.loadStory({ storyId: this.id });
    }), this.abortController.signal.aborted)
      throw await this.store.cleanupStory(this.story), ee;
  }
  // The two story "renders" are equal and have both loaded the same story
  isEqual(ne) {
    return !!(this.id === ne.id && this.story && this.story === ne.story);
  }
  isPreparing() {
    return ["preparing"].includes(this.phase);
  }
  isPending() {
    return ["loading", "beforeEach", "rendering", "playing", "afterEach"].includes(
      this.phase
    );
  }
  async renderToElement(ne) {
    return this.canvasElement = ne, this.render({ initial: !0, forceRemount: !0 });
  }
  storyContext() {
    if (!this.story)
      throw new Error("Cannot call storyContext before preparing");
    let { forceInitialArgs: ne } = this.renderOptions;
    return this.store.getStoryContext(this.story, { forceInitialArgs: ne });
  }
  async render({
    initial: ne = !1,
    forceRemount: yt = !1
  } = {}) {
    var Uo, zo, ms, Xo;
    let { canvasElement: ir } = this;
    if (!this.story)
      throw new Error("cannot render when not prepared");
    let io = this.story;
    if (!ir)
      throw new Error("cannot render when canvasElement is unset");
    let {
      id: uo,
      componentId: fo,
      title: Co,
      name: xo,
      tags: Oo,
      applyLoaders: Po,
      applyBeforeEach: _o,
      applyAfterEach: Io,
      unboundStoryFn: jo,
      playFunction: Lo,
      runStep: Ho
    } = io;
    yt && !ne && (this.cancelRender(), this.abortController = new Do());
    let qo = this.abortController.signal, Vo = !1, Mo = io.usesMount;
    try {
      let Ko = {
        ...this.storyContext(),
        viewMode: this.viewMode,
        abortSignal: qo,
        canvasElement: ir,
        loaded: {},
        step: /* @__PURE__ */ s((Bo, Wo) => Ho(Bo, Wo, Ko), "step"),
        context: null,
        canvas: {},
        renderToCanvas: /* @__PURE__ */ s(async () => {
          let Bo = await this.renderToScreen(bs, ir);
          this.teardownRender = Bo || (() => {
          }), Vo = !0;
        }, "renderToCanvas"),
        // The story provides (set in a renderer) a mount function that is a higher order function
        // (context) => (...args) => Canvas
        //
        // Before assigning it to the context, we resolve the context dependency,
        // so that a user can just call it as await mount(...args) in their play function.
        mount: /* @__PURE__ */ s(async (...Bo) => {
          var Yo, Ss;
          (Ss = (Yo = this.callbacks).showStoryDuringRender) == null || Ss.call(Yo);
          let Wo = null;
          return await this.runPhase(qo, "rendering", async () => {
            Wo = await io.mount(Ko)(...Bo);
          }), Mo && await this.runPhase(qo, "playing"), Wo;
        }, "mount")
      };
      Ko.context = Ko;
      let bs = {
        componentId: fo,
        title: Co,
        kind: Co,
        id: uo,
        name: xo,
        story: xo,
        tags: Oo,
        ...this.callbacks,
        showError: /* @__PURE__ */ s((Bo) => (this.phase = "errored", this.callbacks.showError(Bo)), "showError"),
        showException: /* @__PURE__ */ s((Bo) => (this.phase = "errored", this.callbacks.showException(Bo)), "showException"),
        forceRemount: yt || this.notYetRendered,
        storyContext: Ko,
        storyFn: /* @__PURE__ */ s(() => jo(Ko), "storyFn"),
        unboundStoryFn: jo
      };
      if (await this.runPhase(qo, "loading", async () => {
        Ko.loaded = await Po(Ko);
      }), qo.aborted)
        return;
      let Cs = await _o(Ko);
      if (this.store.addCleanupCallbacks(io, Cs), this.checkIfAborted(qo) || (!Vo && !Mo && await Ko.mount(), this.notYetRendered = !1, qo.aborted))
        return;
      let Es = ((zo = (Uo = this.story.parameters) == null ? void 0 : Uo.test) == null ? void 0 : zo.dangerouslyIgnoreUnhandledErrors) === !0, Ds = /* @__PURE__ */ new Set(), es = /* @__PURE__ */ s((Bo) => Ds.add("error" in Bo ? Bo.error : Bo.reason), "onError");
      if (this.renderOptions.autoplay && yt && Lo && this.phase !== "errored") {
        window.addEventListener("error", es), window.addEventListener("unhandledrejection", es), this.disableKeyListeners = !0;
        try {
          if (Mo ? await Lo(Ko) : (Ko.mount = async () => {
            throw new J$1({ playFunction: Lo.toString() });
          }, await this.runPhase(qo, "playing", async () => Lo(Ko))), !Vo)
            throw new z$1();
          this.checkIfAborted(qo), !Es && Ds.size > 0 ? await this.runPhase(qo, "errored") : await this.runPhase(qo, "played");
        } catch (Bo) {
          if ((Xo = (ms = this.callbacks).showStoryDuringRender) == null || Xo.call(ms), await this.runPhase(qo, "errored", async () => {
            this.channel.emit(a$1, ko(Bo));
          }), this.story.parameters.throwPlayFunctionExceptions !== !1)
            throw Bo;
          console.error(Bo);
        }
        if (!Es && Ds.size > 0 && this.channel.emit(
          Y$3,
          Array.from(Ds).map(ko)
        ), this.disableKeyListeners = !1, window.removeEventListener("unhandledrejection", es), window.removeEventListener("error", es), qo.aborted)
          return;
      }
      await this.runPhase(
        qo,
        "completed",
        async () => this.channel.emit(X$2, uo)
      ), this.phase !== "errored" && await this.runPhase(qo, "afterEach", async () => {
        await Io(Ko);
      });
      let gs = !Es && Ds.size > 0, Fo = Ko.reporting.reports.some(
        (Bo) => Bo.status === "failed"
      ), No = gs || Fo;
      await this.runPhase(
        qo,
        "finished",
        async () => this.channel.emit(q$3, {
          storyId: uo,
          status: No ? "error" : "success",
          reporters: Ko.reporting.reports
        })
      );
    } catch (Ko) {
      this.phase = "errored", this.callbacks.showException(Ko), await this.runPhase(
        qo,
        "finished",
        async () => this.channel.emit(q$3, {
          storyId: uo,
          status: "error",
          reporters: []
        })
      );
    }
    this.rerenderEnqueued && (this.rerenderEnqueued = !1, this.render());
  }
  /**
   * Rerender the story. If the story is currently pending (loading/rendering), the rerender will be
   * enqueued, and will be executed after the current render is completed. Rerendering while playing
   * will not be enqueued, and will be executed immediately, to support rendering args changes while
   * playing.
   */
  async rerender() {
    if (this.isPending() && this.phase !== "playing")
      this.rerenderEnqueued = !0;
    else
      return this.render();
  }
  async remount() {
    return await this.teardown(), this.render({ forceRemount: !0 });
  }
  // If the story is torn down (either a new story is rendered or the docs page removes it)
  // we need to consider the fact that the initial render may not be finished
  // (possibly the loaders or the play function are still running). We use the controller
  // as a method to abort them, ASAP, but this is not foolproof as we cannot control what
  // happens inside the user's code.
  cancelRender() {
    var ne;
    (ne = this.abortController) == null || ne.abort();
  }
  async teardown() {
    this.torndown = !0, this.cancelRender(), this.story && await this.store.cleanupStory(this.story);
    for (let ne = 0; ne < 3; ne += 1) {
      if (!this.isPending()) {
        await this.teardownRender();
        return;
      }
      await new Promise((yt) => setTimeout(yt, 0));
    }
    window.location.reload(), await new Promise(() => {
    });
  }
};
s(et, "StoryRender");
var ce = et, { fetch: Fi } = I, Ii = "./index.json", rt = class {
  constructor(ne, yt, ir = V.getChannel(), io = !0) {
    this.importFn = ne, this.getProjectAnnotations = yt, this.channel = ir, this.storyRenders = [], this.storeInitializationPromise = new Promise((uo, fo) => {
      this.resolveStoreInitializationPromise = uo, this.rejectStoreInitializationPromise = fo;
    }), io && this.initialize();
  }
  // Create a proxy object for `__STORYBOOK_STORY_STORE__` and `__STORYBOOK_PREVIEW__.storyStore`
  // That proxies through to the store once ready, and errors beforehand. This means we can set
  // `__STORYBOOK_STORY_STORE__ = __STORYBOOK_PREVIEW__.storyStore` without having to wait, and
  // similarly integrators can access the `storyStore` on the preview at any time, although
  // it is considered deprecated and we will no longer allow access in 9.0
  get storyStore() {
    return new Proxy(
      {},
      {
        get: /* @__PURE__ */ s((ne, yt) => {
          if (this.storyStoreValue)
            return m$1("Accessing the Story Store is deprecated and will be removed in 9.0"), this.storyStoreValue[yt];
          throw new U$1();
        }, "get")
      }
    );
  }
  // INITIALIZATION
  async initialize() {
    this.setupListeners();
    try {
      let ne = await this.getProjectAnnotationsOrRenderError();
      await this.runBeforeAllHook(ne), await this.initializeWithProjectAnnotations(ne);
    } catch (ne) {
      this.rejectStoreInitializationPromise(ne);
    }
  }
  ready() {
    return this.storeInitializationPromise;
  }
  setupListeners() {
    this.channel.on(m, this.onStoryIndexChanged.bind(this)), this.channel.on(k$3, this.onUpdateGlobals.bind(this)), this.channel.on(z$2, this.onUpdateArgs.bind(this)), this.channel.on(SE, this.onRequestArgTypesInfo.bind(this)), this.channel.on(W$3, this.onResetArgs.bind(this)), this.channel.on(L$3, this.onForceReRender.bind(this)), this.channel.on(P$4, this.onForceRemount.bind(this));
  }
  async getProjectAnnotationsOrRenderError() {
    try {
      let ne = await this.getProjectAnnotations();
      if (this.renderToCanvas = ne.renderToCanvas, !this.renderToCanvas)
        throw new G$1();
      return ne;
    } catch (ne) {
      throw this.renderPreviewEntryError("Error reading preview.js:", ne), ne;
    }
  }
  // If initialization gets as far as project annotations, this function runs.
  async initializeWithProjectAnnotations(ne) {
    this.projectAnnotationsBeforeInitialization = ne;
    try {
      let yt = await this.getStoryIndexFromServer();
      return this.initializeWithStoryIndex(yt);
    } catch (yt) {
      throw this.renderPreviewEntryError("Error loading story index:", yt), yt;
    }
  }
  async runBeforeAllHook(ne) {
    var yt, ir;
    try {
      await ((yt = this.beforeAllCleanup) == null ? void 0 : yt.call(this)), this.beforeAllCleanup = await ((ir = ne.beforeAll) == null ? void 0 : ir.call(ne));
    } catch (io) {
      throw this.renderPreviewEntryError("Error in beforeAll hook:", io), io;
    }
  }
  async getStoryIndexFromServer() {
    let ne = await Fi(Ii);
    if (ne.status === 200)
      return ne.json();
    throw new M$1({ text: await ne.text() });
  }
  // If initialization gets as far as the story index, this function runs.
  initializeWithStoryIndex(ne) {
    if (!this.projectAnnotationsBeforeInitialization)
      throw new Error("Cannot call initializeWithStoryIndex until project annotations resolve");
    this.storyStoreValue = new Re(
      ne,
      this.importFn,
      this.projectAnnotationsBeforeInitialization
    ), delete this.projectAnnotationsBeforeInitialization, this.setInitialGlobals(), this.resolveStoreInitializationPromise();
  }
  async setInitialGlobals() {
    this.emitGlobals();
  }
  emitGlobals() {
    if (!this.storyStoreValue)
      throw new Y$1({ methodName: "emitGlobals" });
    let ne = {
      globals: this.storyStoreValue.userGlobals.get() || {},
      globalTypes: this.storyStoreValue.projectAnnotations.globalTypes || {}
    };
    this.channel.emit(u, ne);
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations: ne
  }) {
    delete this.previewEntryError, this.getProjectAnnotations = ne;
    let yt = await this.getProjectAnnotationsOrRenderError();
    if (await this.runBeforeAllHook(yt), !this.storyStoreValue) {
      await this.initializeWithProjectAnnotations(yt);
      return;
    }
    this.storyStoreValue.setProjectAnnotations(yt), this.emitGlobals();
  }
  async onStoryIndexChanged() {
    if (delete this.previewEntryError, !(!this.storyStoreValue && !this.projectAnnotationsBeforeInitialization))
      try {
        let ne = await this.getStoryIndexFromServer();
        if (this.projectAnnotationsBeforeInitialization) {
          this.initializeWithStoryIndex(ne);
          return;
        }
        await this.onStoriesChanged({ storyIndex: ne });
      } catch (ne) {
        throw this.renderPreviewEntryError("Error loading story index:", ne), ne;
      }
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn: ne,
    storyIndex: yt
  }) {
    if (!this.storyStoreValue)
      throw new Y$1({ methodName: "onStoriesChanged" });
    await this.storyStoreValue.onStoriesChanged({ importFn: ne, storyIndex: yt });
  }
  async onUpdateGlobals({
    globals: ne,
    currentStory: yt
  }) {
    if (this.storyStoreValue || await this.storeInitializationPromise, !this.storyStoreValue)
      throw new Y$1({ methodName: "onUpdateGlobals" });
    if (this.storyStoreValue.userGlobals.update(ne), yt) {
      let { initialGlobals: ir, storyGlobals: io, userGlobals: uo, globals: fo } = this.storyStoreValue.getStoryContext(yt);
      this.channel.emit(U$3, {
        initialGlobals: ir,
        userGlobals: uo,
        storyGlobals: io,
        globals: fo
      });
    } else {
      let { initialGlobals: ir, globals: io } = this.storyStoreValue.userGlobals;
      this.channel.emit(U$3, {
        initialGlobals: ir,
        userGlobals: io,
        storyGlobals: {},
        globals: io
      });
    }
    await Promise.all(this.storyRenders.map((ir) => ir.rerender()));
  }
  async onUpdateArgs({ storyId: ne, updatedArgs: yt }) {
    if (!this.storyStoreValue)
      throw new Y$1({ methodName: "onUpdateArgs" });
    this.storyStoreValue.args.update(ne, yt), await Promise.all(
      this.storyRenders.filter((ir) => ir.id === ne && !ir.renderOptions.forceInitialArgs).map(
        (ir) => (
          // We only run the play function, with in a force remount.
          // But when mount is destructured, the rendering happens inside of the play function.
          ir.story && ir.story.usesMount ? ir.remount() : ir.rerender()
        )
      )
    ), this.channel.emit(f$2, {
      storyId: ne,
      args: this.storyStoreValue.args.get(ne)
    });
  }
  async onRequestArgTypesInfo({ id: ne, payload: yt }) {
    var ir;
    try {
      await this.storeInitializationPromise;
      let io = await ((ir = this.storyStoreValue) == null ? void 0 : ir.loadStory(yt));
      this.channel.emit(TE, {
        id: ne,
        success: !0,
        payload: { argTypes: (io == null ? void 0 : io.argTypes) || {} },
        error: null
      });
    } catch (io) {
      this.channel.emit(TE, {
        id: ne,
        success: !1,
        error: io == null ? void 0 : io.message
      });
    }
  }
  async onResetArgs({ storyId: ne, argNames: yt }) {
    var uo;
    if (!this.storyStoreValue)
      throw new Y$1({ methodName: "onResetArgs" });
    let ir = ((uo = this.storyRenders.find((fo) => fo.id === ne)) == null ? void 0 : uo.story) || await this.storyStoreValue.loadStory({ storyId: ne }), io = (yt || [
      .../* @__PURE__ */ new Set([
        ...Object.keys(ir.initialArgs),
        ...Object.keys(this.storyStoreValue.args.get(ne))
      ])
    ]).reduce((fo, Co) => (fo[Co] = ir.initialArgs[Co], fo), {});
    await this.onUpdateArgs({ storyId: ne, updatedArgs: io });
  }
  // ForceReRender does not include a story id, so we simply must
  // re-render all stories in case they are relevant
  async onForceReRender() {
    await Promise.all(this.storyRenders.map((ne) => ne.rerender()));
  }
  async onForceRemount({ storyId: ne }) {
    await Promise.all(this.storyRenders.filter((yt) => yt.id === ne).map((yt) => yt.remount()));
  }
  // Used by docs to render a story to a given element
  // Note this short-circuits the `prepare()` phase of the StoryRender,
  // main to be consistent with the previous behaviour. In the future,
  // we will change it to go ahead and load the story, which will end up being
  // "instant", although async.
  renderStoryToElement(ne, yt, ir, io) {
    if (!this.renderToCanvas || !this.storyStoreValue)
      throw new Y$1({
        methodName: "renderStoryToElement"
      });
    let uo = new ce(
      this.channel,
      this.storyStoreValue,
      this.renderToCanvas,
      ir,
      ne.id,
      "docs",
      io,
      ne
    );
    return uo.renderToElement(yt), this.storyRenders.push(uo), async () => {
      await this.teardownRender(uo);
    };
  }
  async teardownRender(ne, { viewModeChanged: yt } = {}) {
    var ir;
    this.storyRenders = this.storyRenders.filter((io) => io !== ne), await ((ir = ne == null ? void 0 : ne.teardown) == null ? void 0 : ir.call(ne, { viewModeChanged: yt }));
  }
  // API
  async loadStory({ storyId: ne }) {
    if (!this.storyStoreValue)
      throw new Y$1({ methodName: "loadStory" });
    return this.storyStoreValue.loadStory({ storyId: ne });
  }
  getStoryContext(ne, { forceInitialArgs: yt = !1 } = {}) {
    if (!this.storyStoreValue)
      throw new Y$1({ methodName: "getStoryContext" });
    return this.storyStoreValue.getStoryContext(ne, { forceInitialArgs: yt });
  }
  async extract(ne) {
    if (!this.storyStoreValue)
      throw new Y$1({ methodName: "extract" });
    if (this.previewEntryError)
      throw this.previewEntryError;
    return await this.storyStoreValue.cacheAllCSFFiles(), this.storyStoreValue.extract(ne);
  }
  // UTILITIES
  renderPreviewEntryError(ne, yt) {
    this.previewEntryError = yt, s$3.error(ne), s$3.error(yt), this.channel.emit(N$1, yt);
  }
};
s(rt, "Preview");
var xe = rt, tt = "Invariant failed";
function or(pt, ne) {
  if (!pt) {
    var yt = typeof ne == "function" ? ne() : ne, ir = yt ? "".concat(tt, ": ").concat(yt) : tt;
    throw new Error(ir);
  }
}
s(or, "invariant");
var ot = class {
  constructor(ne, yt, ir, io) {
    this.channel = ne, this.store = yt, this.renderStoryToElement = ir, this.storyIdByName = /* @__PURE__ */ s((uo) => {
      let fo = this.nameToStoryId.get(uo);
      if (fo)
        return fo;
      throw new Error(`No story found with that name: ${uo}`);
    }, "storyIdByName"), this.componentStories = /* @__PURE__ */ s(() => this.componentStoriesValue, "componentStories"), this.componentStoriesFromCSFFile = /* @__PURE__ */ s((uo) => this.store.componentStoriesFromCSFFile({ csfFile: uo }), "componentStoriesFromCSFFile"), this.storyById = /* @__PURE__ */ s((uo) => {
      if (!uo) {
        if (!this.primaryStory)
          throw new Error(
            "No primary story defined for docs entry. Did you forget to use `<Meta>`?"
          );
        return this.primaryStory;
      }
      let fo = this.storyIdToCSFFile.get(uo);
      if (!fo)
        throw new Error(`Called \`storyById\` for story that was never loaded: ${uo}`);
      return this.store.storyFromCSFFile({ storyId: uo, csfFile: fo });
    }, "storyById"), this.getStoryContext = /* @__PURE__ */ s((uo) => ({
      ...this.store.getStoryContext(uo),
      loaded: {},
      viewMode: "docs"
    }), "getStoryContext"), this.loadStory = /* @__PURE__ */ s((uo) => this.store.loadStory({ storyId: uo }), "loadStory"), this.componentStoriesValue = [], this.storyIdToCSFFile = /* @__PURE__ */ new Map(), this.exportToStory = /* @__PURE__ */ new Map(), this.exportsToCSFFile = /* @__PURE__ */ new Map(), this.nameToStoryId = /* @__PURE__ */ new Map(), this.attachedCSFFiles = /* @__PURE__ */ new Set(), io.forEach((uo, fo) => {
      this.referenceCSFFile(uo);
    });
  }
  // This docs entry references this CSF file and can synchronously load the stories, as well
  // as reference them by module export. If the CSF is part of the "component" stories, they
  // can also be referenced by name and are in the componentStories list.
  referenceCSFFile(ne) {
    this.exportsToCSFFile.set(ne.moduleExports, ne), this.exportsToCSFFile.set(ne.moduleExports.default, ne), this.store.componentStoriesFromCSFFile(
      { csfFile: ne }
    ).forEach((yt) => {
      let ir = ne.stories[yt.id];
      this.storyIdToCSFFile.set(ir.id, ne), this.exportToStory.set(ir.moduleExport, yt);
    });
  }
  attachCSFFile(ne) {
    if (!this.exportsToCSFFile.has(ne.moduleExports))
      throw new Error("Cannot attach a CSF file that has not been referenced");
    this.attachedCSFFiles.has(ne) || (this.attachedCSFFiles.add(ne), this.store.componentStoriesFromCSFFile({ csfFile: ne }).forEach((yt) => {
      this.nameToStoryId.set(yt.name, yt.id), this.componentStoriesValue.push(yt), this.primaryStory || (this.primaryStory = yt);
    }));
  }
  referenceMeta(ne, yt) {
    let ir = this.resolveModuleExport(ne);
    if (ir.type !== "meta")
      throw new Error(
        "<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?"
      );
    yt && this.attachCSFFile(ir.csfFile);
  }
  get projectAnnotations() {
    let { projectAnnotations: ne } = this.store;
    if (!ne)
      throw new Error("Can't get projectAnnotations from DocsContext before they are initialized");
    return ne;
  }
  resolveAttachedModuleExportType(ne) {
    if (ne === "story") {
      if (!this.primaryStory)
        throw new Error(
          "No primary story attached to this docs file, did you forget to use <Meta of={} />?"
        );
      return { type: "story", story: this.primaryStory };
    }
    if (this.attachedCSFFiles.size === 0)
      throw new Error(
        "No CSF file attached to this docs file, did you forget to use <Meta of={} />?"
      );
    let yt = Array.from(this.attachedCSFFiles)[0];
    if (ne === "meta")
      return { type: "meta", csfFile: yt };
    let { component: ir } = yt.meta;
    if (!ir)
      throw new Error(
        "Attached CSF file does not defined a component, did you forget to export one?"
      );
    return { type: "component", component: ir };
  }
  resolveModuleExport(ne) {
    let yt = this.exportsToCSFFile.get(ne);
    if (yt)
      return { type: "meta", csfFile: yt };
    let ir = this.exportToStory.get(
      K(ne) ? ne.input : ne
    );
    return ir ? { type: "story", story: ir } : { type: "component", component: ne };
  }
  resolveOf(ne, yt = []) {
    let ir;
    if (["component", "meta", "story"].includes(ne)) {
      let io = ne;
      ir = this.resolveAttachedModuleExportType(io);
    } else
      ir = this.resolveModuleExport(ne);
    if (yt.length && !yt.includes(ir.type)) {
      let io = ir.type === "component" ? "component or unknown" : ir.type;
      throw new Error(P`Invalid value passed to the 'of' prop. The value was resolved to a '${io}' type but the only types for this block are: ${yt.join(
        ", "
      )}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
    }
    switch (ir.type) {
      case "component":
        return {
          ...ir,
          projectAnnotations: this.projectAnnotations
        };
      case "meta":
        return {
          ...ir,
          preparedMeta: this.store.preparedMetaFromCSFFile({ csfFile: ir.csfFile })
        };
      case "story":
      default:
        return ir;
    }
  }
};
s(ot, "DocsContext");
var re = ot, nt = class {
  constructor(ne, yt, ir, io) {
    this.channel = ne, this.store = yt, this.entry = ir, this.callbacks = io, this.type = "docs", this.subtype = "csf", this.torndown = !1, this.disableKeyListeners = !1, this.preparing = !1, this.id = ir.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = !0;
    let { entryExports: ne, csfFiles: yt = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw ee;
    let { importPath: ir, title: io } = this.entry, uo = this.store.processCSFFileWithCache(
      ne,
      ir,
      io
    ), fo = Object.keys(uo.stories)[0];
    this.story = this.store.storyFromCSFFile({ storyId: fo, csfFile: uo }), this.csfFiles = [uo, ...yt], this.preparing = !1;
  }
  isEqual(ne) {
    return !!(this.id === ne.id && this.story && this.story === ne.story);
  }
  docsContext(ne) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    let yt = new re(
      this.channel,
      this.store,
      ne,
      this.csfFiles
    );
    return this.csfFiles.forEach((ir) => yt.attachCSFFile(ir)), yt;
  }
  async renderToElement(ne, yt) {
    if (!this.story || !this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    let ir = this.docsContext(yt), { docs: io } = this.story.parameters || {};
    if (!io)
      throw new Error(
        "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
      );
    let uo = await io.renderer(), { render: fo } = uo, Co = /* @__PURE__ */ s(async () => {
      try {
        await fo(ir, io, ne), this.channel.emit(I$3, this.id);
      } catch (xo) {
        this.callbacks.showException(xo);
      }
    }, "renderDocs");
    return this.rerender = async () => Co(), this.teardownRender = async ({ viewModeChanged: xo }) => {
      !xo || !ne || uo.unmount(ne);
    }, Co();
  }
  async teardown({ viewModeChanged: ne } = {}) {
    var yt;
    (yt = this.teardownRender) == null || yt.call(this, { viewModeChanged: ne }), this.torndown = !0;
  }
};
s(nt, "CsfDocsRender");
var qe = nt, st = class {
  constructor(ne, yt, ir, io) {
    this.channel = ne, this.store = yt, this.entry = ir, this.callbacks = io, this.type = "docs", this.subtype = "mdx", this.torndown = !1, this.disableKeyListeners = !1, this.preparing = !1, this.id = ir.id;
  }
  isPreparing() {
    return this.preparing;
  }
  async prepare() {
    this.preparing = !0;
    let { entryExports: ne, csfFiles: yt = [] } = await this.store.loadEntry(this.id);
    if (this.torndown)
      throw ee;
    this.csfFiles = yt, this.exports = ne, this.preparing = !1;
  }
  isEqual(ne) {
    return !!(this.id === ne.id && this.exports && this.exports === ne.exports);
  }
  docsContext(ne) {
    if (!this.csfFiles)
      throw new Error("Cannot render docs before preparing");
    return new re(
      this.channel,
      this.store,
      ne,
      this.csfFiles
    );
  }
  async renderToElement(ne, yt) {
    if (!this.exports || !this.csfFiles || !this.store.projectAnnotations)
      throw new Error("Cannot render docs before preparing");
    let ir = this.docsContext(yt), { docs: io } = this.store.projectAnnotations.parameters || {};
    if (!io)
      throw new Error(
        "Cannot render a story in viewMode=docs if `@storybook/addon-docs` is not installed"
      );
    let uo = { ...io, page: this.exports.default }, fo = await io.renderer(), { render: Co } = fo, xo = /* @__PURE__ */ s(async () => {
      try {
        await Co(ir, uo, ne), this.channel.emit(I$3, this.id);
      } catch (Oo) {
        this.callbacks.showException(Oo);
      }
    }, "renderDocs");
    return this.rerender = async () => xo(), this.teardownRender = async ({ viewModeChanged: Oo } = {}) => {
      !Oo || !ne || (fo.unmount(ne), this.torndown = !0);
    }, xo();
  }
  async teardown({ viewModeChanged: ne } = {}) {
    var yt;
    (yt = this.teardownRender) == null || yt.call(this, { viewModeChanged: ne }), this.torndown = !0;
  }
};
s(st, "MdxDocsRender");
var Ue = st, Ki = globalThis;
function Xi(pt) {
  let ne = pt.composedPath && pt.composedPath()[0] || pt.target;
  return /input|textarea/i.test(ne.tagName) || ne.getAttribute("contenteditable") !== null;
}
s(Xi, "focusInInput");
var Go = "attached-mdx", Ji = "unattached-mdx";
function Qi({ tags: pt }) {
  return (pt == null ? void 0 : pt.includes(Ji)) || (pt == null ? void 0 : pt.includes(Go));
}
s(Qi, "isMdxEntry");
function at(pt) {
  return pt.type === "story";
}
s(at, "isStoryRender");
function Zi(pt) {
  return pt.type === "docs";
}
s(Zi, "isDocsRender");
function ea(pt) {
  return Zi(pt) && pt.subtype === "csf";
}
s(ea, "isCsfDocsRender");
var lt = class extends xe {
  constructor(ne, yt, ir, io) {
    super(ne, yt, void 0, !1), this.importFn = ne, this.getProjectAnnotations = yt, this.selectionStore = ir, this.view = io, this.initialize();
  }
  setupListeners() {
    super.setupListeners(), Ki.onkeydown = this.onKeydown.bind(this), this.channel.on(p$1, this.onSetCurrentStory.bind(this)), this.channel.on(
      n,
      this.onUpdateQueryParams.bind(this)
    ), this.channel.on(t$1, this.onPreloadStories.bind(this));
  }
  async setInitialGlobals() {
    if (!this.storyStoreValue)
      throw new Y$1({ methodName: "setInitialGlobals" });
    let { globals: ne } = this.selectionStore.selectionSpecifier || {};
    ne && this.storyStoreValue.userGlobals.updateFromPersisted(ne), this.emitGlobals();
  }
  // If initialization gets as far as the story index, this function runs.
  async initializeWithStoryIndex(ne) {
    return await super.initializeWithStoryIndex(ne), this.selectSpecifiedStory();
  }
  // Use the selection specifier to choose a story, then render it
  async selectSpecifiedStory() {
    if (!this.storyStoreValue)
      throw new Y$1({
        methodName: "selectSpecifiedStory"
      });
    if (this.selectionStore.selection) {
      await this.renderSelection();
      return;
    }
    if (!this.selectionStore.selectionSpecifier) {
      this.renderMissingStory();
      return;
    }
    let { storySpecifier: ne, args: yt } = this.selectionStore.selectionSpecifier, ir = this.storyStoreValue.storyIndex.entryFromSpecifier(ne);
    if (!ir) {
      ne === "*" ? this.renderStoryLoadingException(ne, new F$1()) : this.renderStoryLoadingException(
        ne,
        new K$1({ storySpecifier: ne.toString() })
      );
      return;
    }
    let { id: io, type: uo } = ir;
    this.selectionStore.setSelection({ storyId: io, viewMode: uo }), this.channel.emit(b$2, this.selectionStore.selection), this.channel.emit(
      r$1,
      this.selectionStore.selection
    ), await this.renderSelection({ persistedArgs: yt });
  }
  // EVENT HANDLERS
  // This happens when a config file gets reloaded
  async onGetProjectAnnotationsChanged({
    getProjectAnnotations: ne
  }) {
    await super.onGetProjectAnnotationsChanged({ getProjectAnnotations: ne }), this.selectionStore.selection && this.renderSelection();
  }
  // This happens when a glob gets HMR-ed
  async onStoriesChanged({
    importFn: ne,
    storyIndex: yt
  }) {
    await super.onStoriesChanged({ importFn: ne, storyIndex: yt }), this.selectionStore.selection ? await this.renderSelection() : await this.selectSpecifiedStory();
  }
  onKeydown(ne) {
    if (!this.storyRenders.find((yt) => yt.disableKeyListeners) && !Xi(ne)) {
      let { altKey: yt, ctrlKey: ir, metaKey: io, shiftKey: uo, key: fo, code: Co, keyCode: xo } = ne;
      this.channel.emit(e, {
        event: { altKey: yt, ctrlKey: ir, metaKey: io, shiftKey: uo, key: fo, code: Co, keyCode: xo }
      });
    }
  }
  async onSetCurrentStory(ne) {
    this.selectionStore.setSelection({ viewMode: "story", ...ne }), await this.storeInitializationPromise, this.channel.emit(r$1, this.selectionStore.selection), this.renderSelection();
  }
  onUpdateQueryParams(ne) {
    this.selectionStore.setQueryParams(ne);
  }
  async onUpdateGlobals({ globals: ne }) {
    var ir, io;
    let yt = this.currentRender instanceof ce && this.currentRender.story || void 0;
    super.onUpdateGlobals({ globals: ne, currentStory: yt }), (this.currentRender instanceof Ue || this.currentRender instanceof qe) && await ((io = (ir = this.currentRender).rerender) == null ? void 0 : io.call(ir));
  }
  async onUpdateArgs({ storyId: ne, updatedArgs: yt }) {
    super.onUpdateArgs({ storyId: ne, updatedArgs: yt });
  }
  async onPreloadStories({ ids: ne }) {
    await this.storeInitializationPromise, this.storyStoreValue && await Promise.allSettled(ne.map((yt) => {
      var ir;
      return (ir = this.storyStoreValue) == null ? void 0 : ir.loadEntry(yt);
    }));
  }
  // RENDERING
  // We can either have:
  // - a story selected in "story" viewMode,
  //     in which case we render it to the root element, OR
  // - a story selected in "docs" viewMode,
  //     in which case we render the docsPage for that story
  async renderSelection({ persistedArgs: ne } = {}) {
    var Io, jo, Lo, Ho;
    let { renderToCanvas: yt } = this;
    if (!this.storyStoreValue || !yt)
      throw new Y$1({ methodName: "renderSelection" });
    let { selection: ir } = this.selectionStore;
    if (!ir)
      throw new Error("Cannot call renderSelection as no selection was made");
    let { storyId: io } = ir, uo;
    try {
      uo = await this.storyStoreValue.storyIdToEntry(io);
    } catch (qo) {
      this.currentRender && await this.teardownRender(this.currentRender), this.renderStoryLoadingException(io, qo);
      return;
    }
    let fo = ((Io = this.currentSelection) == null ? void 0 : Io.storyId) !== io, Co = ((jo = this.currentRender) == null ? void 0 : jo.type) !== uo.type;
    uo.type === "story" ? this.view.showPreparingStory({ immediate: Co }) : this.view.showPreparingDocs({ immediate: Co }), (Lo = this.currentRender) != null && Lo.isPreparing() && await this.teardownRender(this.currentRender);
    let xo;
    uo.type === "story" ? xo = new ce(
      this.channel,
      this.storyStoreValue,
      yt,
      this.mainStoryCallbacks(io),
      io,
      "story"
    ) : Qi(uo) ? xo = new Ue(
      this.channel,
      this.storyStoreValue,
      uo,
      this.mainStoryCallbacks(io)
    ) : xo = new qe(
      this.channel,
      this.storyStoreValue,
      uo,
      this.mainStoryCallbacks(io)
    );
    let Oo = this.currentSelection;
    this.currentSelection = ir;
    let Po = this.currentRender;
    this.currentRender = xo;
    try {
      await xo.prepare();
    } catch (qo) {
      Po && await this.teardownRender(Po), qo !== ee && this.renderStoryLoadingException(io, qo);
      return;
    }
    let _o = !fo && Po && !xo.isEqual(Po);
    if (ne && at(xo) && (or(!!xo.story), this.storyStoreValue.args.updateFromPersisted(xo.story, ne)), Po && !Po.torndown && !fo && !_o && !Co) {
      this.currentRender = Po, this.channel.emit(j$3, io), this.view.showMain();
      return;
    }
    if (Po && await this.teardownRender(Po, { viewModeChanged: Co }), Oo && (fo || Co) && this.channel.emit(Q$1, io), at(xo)) {
      or(!!xo.story);
      let {
        parameters: qo,
        initialArgs: Vo,
        argTypes: Mo,
        unmappedArgs: Uo,
        initialGlobals: zo,
        userGlobals: ms,
        storyGlobals: Xo,
        globals: Ko
      } = this.storyStoreValue.getStoryContext(xo.story);
      this.channel.emit(w$2, {
        id: io,
        parameters: qo,
        initialArgs: Vo,
        argTypes: Mo,
        args: Uo
      }), this.channel.emit(U$3, { userGlobals: ms, storyGlobals: Xo, globals: Ko, initialGlobals: zo });
    } else {
      let { parameters: qo } = this.storyStoreValue.projectAnnotations, { initialGlobals: Vo, globals: Mo } = this.storyStoreValue.userGlobals;
      if (this.channel.emit(U$3, {
        globals: Mo,
        initialGlobals: Vo,
        storyGlobals: {},
        userGlobals: Mo
      }), ea(xo) || ((Ho = xo.entry.tags) == null ? void 0 : Ho.includes(Go))) {
        if (!xo.csfFiles)
          throw new H$1({ storyId: io });
        ({ parameters: qo } = this.storyStoreValue.preparedMetaFromCSFFile({
          csfFile: xo.csfFiles[0]
        }));
      }
      this.channel.emit(D$2, {
        id: io,
        parameters: qo
      });
    }
    at(xo) ? (or(!!xo.story), this.storyRenders.push(xo), this.currentRender.renderToElement(
      this.view.prepareForStory(xo.story)
    )) : this.currentRender.renderToElement(
      this.view.prepareForDocs(),
      // This argument is used for docs, which is currently only compatible with HTMLElements
      this.renderStoryToElement.bind(this)
    );
  }
  async teardownRender(ne, { viewModeChanged: yt = !1 } = {}) {
    var ir;
    this.storyRenders = this.storyRenders.filter((io) => io !== ne), await ((ir = ne == null ? void 0 : ne.teardown) == null ? void 0 : ir.call(ne, { viewModeChanged: yt }));
  }
  // UTILITIES
  mainStoryCallbacks(ne) {
    return {
      showStoryDuringRender: /* @__PURE__ */ s(() => this.view.showStoryDuringRender(), "showStoryDuringRender"),
      showMain: /* @__PURE__ */ s(() => this.view.showMain(), "showMain"),
      showError: /* @__PURE__ */ s((yt) => this.renderError(ne, yt), "showError"),
      showException: /* @__PURE__ */ s((yt) => this.renderException(ne, yt), "showException")
    };
  }
  renderPreviewEntryError(ne, yt) {
    super.renderPreviewEntryError(ne, yt), this.view.showErrorDisplay(yt);
  }
  renderMissingStory() {
    this.view.showNoPreview(), this.channel.emit(V$3);
  }
  renderStoryLoadingException(ne, yt) {
    s$3.error(yt), this.view.showErrorDisplay(yt), this.channel.emit(V$3, ne);
  }
  // renderException is used if we fail to render the story and it is uncaught by the app layer
  renderException(ne, yt) {
    let { name: ir = "Error", message: io = String(yt), stack: uo } = yt;
    this.channel.emit(K$3, { name: ir, message: io, stack: uo }), this.channel.emit(B$1, { newPhase: "errored", storyId: ne }), this.view.showErrorDisplay(
      yt
    ), s$3.error(`Error rendering story '${ne}':`), s$3.error(yt);
  }
  // renderError is used by the various app layers to inform the user they have done something
  // wrong -- for instance returned the wrong thing from a story
  renderError(ne, { title: yt, description: ir }) {
    s$3.error(`Error rendering story ${yt}: ${ir}`), this.channel.emit(x$3, { title: yt, description: ir }), this.channel.emit(B$1, { newPhase: "errored", storyId: ne }), this.view.showErrorDisplay({
      message: yt,
      stack: ir
    });
  }
};
s(lt, "PreviewWithSelection");
var we = lt, Be = he(cr()), en = he(cr()), Zo = /^[a-zA-Z0-9 _-]*$/, rn = /^-?[0-9]+(\.[0-9]+)?$/, Ca = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i, tn = /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i, ht = /* @__PURE__ */ s((pt = "", ne) => pt === null || pt === "" || !Zo.test(pt) ? !1 : ne == null || ne instanceof Date || typeof ne == "number" || typeof ne == "boolean" ? !0 : typeof ne == "string" ? Zo.test(ne) || rn.test(ne) || Ca.test(ne) || tn.test(ne) : Array.isArray(ne) ? ne.every((yt) => ht(
  pt,
  yt
)) : L(ne) ? Object.entries(ne).every(([yt, ir]) => ht(yt, ir)) : !1, "validateArgs"), Pa = {
  delimiter: ";",
  // we're parsing a single query param
  nesting: !0,
  arrayRepeat: !0,
  arrayRepeatSyntax: "bracket",
  nestingSyntax: "js",
  // objects are encoded using dot notation
  valueDeserializer(pt) {
    if (pt.startsWith("!")) {
      if (pt === "!undefined")
        return;
      if (pt === "!null")
        return null;
      if (pt === "!true")
        return !0;
      if (pt === "!false")
        return !1;
      if (pt.startsWith("!date(") && pt.endsWith(")"))
        return new Date(pt.replaceAll(" ", "+").slice(6, -1));
      if (pt.startsWith("!hex(") && pt.endsWith(")"))
        return `#${pt.slice(5, -1)}`;
      let ne = pt.slice(1).match(tn);
      if (ne)
        return pt.startsWith("!rgba") || pt.startsWith("!RGBA") ? `${ne[1]}(${ne[2]}, ${ne[3]}, ${ne[4]}, ${ne[5]})` : pt.startsWith("!hsla") || pt.startsWith(
          "!HSLA"
        ) ? `${ne[1]}(${ne[2]}, ${ne[3]}%, ${ne[4]}%, ${ne[5]})` : pt.startsWith("!rgb") || pt.startsWith("!RGB") ? `${ne[1]}(${ne[2]}, ${ne[3]}, ${ne[4]})` : `${ne[1]}(${ne[2]}, ${ne[3]}%, ${ne[4]}%)`;
    }
    return rn.test(pt) ? Number(pt) : pt;
  }
}, mt = /* @__PURE__ */ s((pt) => {
  let ne = pt.split(";").map((yt) => yt.replace("=", "~").replace(":", "="));
  return Object.entries((0, en.parse)(ne.join(";"), Pa)).reduce((yt, [ir, io]) => ht(ir, io) ? Object.assign(yt, { [ir]: io }) : (n$1.warn(P`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/writing-stories/args#setting-args-through-the-url
    `), yt), {});
}, "parseArgsParam"), { history: on, document: te } = I;
function Fa(pt) {
  let ne = (pt || "").match(/^\/story\/(.+)/);
  if (!ne)
    throw new Error(`Invalid path '${pt}',  must start with '/story/'`);
  return ne[1];
}
s(Fa, "pathToId");
var nn = /* @__PURE__ */ s(({
  selection: pt,
  extraParams: ne
}) => {
  let yt = te == null ? void 0 : te.location.search.slice(1), { path: ir, selectedKind: io, selectedStory: uo, ...fo } = (0, Be.parse)(yt);
  return `?${(0, Be.stringify)({
    ...fo,
    ...ne,
    ...pt && { id: pt.storyId, viewMode: pt.viewMode }
  })}`;
}, "getQueryString"), Ia = /* @__PURE__ */ s((pt) => {
  if (!pt)
    return;
  let ne = nn({ selection: pt }), { hash: yt = "" } = te.location;
  te.title = pt.storyId, on.replaceState({}, "", `${te.location.pathname}${ne}${yt}`);
}, "setPath"), Oa = /* @__PURE__ */ s((pt) => pt != null && typeof pt == "object" && Array.isArray(pt) === !1, "isObject"), Ge = /* @__PURE__ */ s(
  (pt) => {
    if (pt !== void 0) {
      if (typeof pt == "string")
        return pt;
      if (Array.isArray(pt))
        return Ge(pt[0]);
      if (Oa(pt))
        return Ge(
          Object.values(pt).filter(Boolean)
        );
    }
  },
  "getFirstString"
), Da = /* @__PURE__ */ s(() => {
  if (typeof te < "u") {
    let pt = te.location.search.slice(1), ne = (0, Be.parse)(pt), yt = typeof ne.args == "string" ? mt(ne.args) : void 0, ir = typeof ne.globals == "string" ? mt(ne.globals) : void 0, io = Ge(ne.viewMode);
    (typeof io != "string" || !io.match(/docs|story/)) && (io = "story");
    let uo = Ge(ne.path), fo = uo ? Fa(uo) : Ge(ne.id);
    if (fo)
      return { storySpecifier: fo, args: yt, globals: ir, viewMode: io };
  }
  return null;
}, "getSelectionSpecifierFromPath"), gt = class {
  constructor() {
    this.selectionSpecifier = Da();
  }
  setSelection(ne) {
    this.selection = ne, Ia(this.selection);
  }
  setQueryParams(ne) {
    let yt = nn({ extraParams: ne }), { hash: ir = "" } = te.location;
    on.replaceState({}, "", `${te.location.pathname}${yt}${ir}`);
  }
};
s(gt, "UrlStore");
var ve = gt, Mn = he(jn()), _n = he(cr()), { document: j } = I, Ln = 100, qn = /* @__PURE__ */ ((pt) => (pt.MAIN = "MAIN", pt.NOPREVIEW = "NOPREVIEW", pt.PREPARING_STORY = "PREPARING_STORY", pt.PREPARING_DOCS = "PREPARING_DOCS", pt.ERROR = "ERROR", pt))(qn || {}), wt = {
  PREPARING_STORY: "sb-show-preparing-story",
  PREPARING_DOCS: "sb-show-preparing-docs",
  MAIN: "sb-show-main",
  NOPREVIEW: "sb-show-nopreview",
  ERROR: "sb-show-errordisplay"
}, vt = {
  centered: "sb-main-centered",
  fullscreen: "sb-main-fullscreen",
  padded: "sb-main-padded"
}, Nn = new Mn.default({
  escapeXML: !0
}), At = class {
  constructor() {
    if (this.testing = !1, typeof j < "u") {
      let { __SPECIAL_TEST_PARAMETER__: ne } = (0, _n.parse)(j.location.search.slice(1));
      switch (ne) {
        case "preparing-story": {
          this.showPreparingStory(), this.testing = !0;
          break;
        }
        case "preparing-docs": {
          this.showPreparingDocs(), this.testing = !0;
          break;
        }
      }
    }
  }
  // Get ready to render a story, returning the element to render to
  prepareForStory(ne) {
    return this.showStory(), this.applyLayout(ne.parameters.layout), j.documentElement.scrollTop = 0, j.documentElement.scrollLeft = 0, this.storyRoot();
  }
  storyRoot() {
    return j.getElementById("storybook-root");
  }
  prepareForDocs() {
    return this.showMain(), this.showDocs(), this.applyLayout("fullscreen"), j.documentElement.scrollTop = 0, j.documentElement.scrollLeft = 0, this.docsRoot();
  }
  docsRoot() {
    return j.getElementById("storybook-docs");
  }
  applyLayout(ne = "padded") {
    if (ne === "none") {
      j.body.classList.remove(this.currentLayoutClass), this.currentLayoutClass = null;
      return;
    }
    this.checkIfLayoutExists(ne);
    let yt = vt[ne];
    j.body.classList.remove(this.currentLayoutClass), j.body.classList.add(yt), this.currentLayoutClass = yt;
  }
  checkIfLayoutExists(ne) {
    vt[ne] || s$3.warn(
      P`
          The desired layout: ${ne} is not a valid option.
          The possible options are: ${Object.keys(vt).join(", ")}, none.
        `
    );
  }
  showMode(ne) {
    clearTimeout(this.preparingTimeout), Object.keys(qn).forEach((yt) => {
      yt === ne ? j.body.classList.add(wt[yt]) : j.body.classList.remove(wt[yt]);
    });
  }
  showErrorDisplay({ message: ne = "", stack: yt = "" }) {
    let ir = ne, io = yt, uo = ne.split(`
`);
    uo.length > 1 && ([ir] = uo, io = uo.slice(1).join(`
`).replace(/^\n/, "")), j.getElementById("error-message").innerHTML = Nn.toHtml(ir), j.getElementById("error-stack").innerHTML = Nn.toHtml(io), this.showMode("ERROR");
  }
  showNoPreview() {
    var ne, yt;
    this.testing || (this.showMode("NOPREVIEW"), (ne = this.storyRoot()) == null || ne.setAttribute("hidden", "true"), (yt = this.docsRoot()) == null || yt.setAttribute("hidden", "true"));
  }
  showPreparingStory({ immediate: ne = !1 } = {}) {
    clearTimeout(this.preparingTimeout), ne ? this.showMode("PREPARING_STORY") : this.preparingTimeout = setTimeout(
      () => this.showMode("PREPARING_STORY"),
      Ln
    );
  }
  showPreparingDocs({ immediate: ne = !1 } = {}) {
    clearTimeout(this.preparingTimeout), ne ? this.showMode("PREPARING_DOCS") : this.preparingTimeout = setTimeout(() => this.showMode("PREPARING_DOCS"), Ln);
  }
  showMain() {
    this.showMode("MAIN");
  }
  showDocs() {
    this.storyRoot().setAttribute("hidden", "true"), this.docsRoot().removeAttribute("hidden");
  }
  showStory() {
    this.docsRoot().setAttribute("hidden", "true"), this.storyRoot().removeAttribute("hidden");
  }
  showStoryDuringRender() {
    j.body.classList.add(wt.MAIN);
  }
};
s(At, "WebView");
var Ae = At, Ct = class extends we {
  constructor(ne, yt) {
    super(ne, yt, new ve(), new Ae()), this.importFn = ne, this.getProjectAnnotations = yt, I.__STORYBOOK_PREVIEW__ = this;
  }
};
s(Ct, "PreviewWeb");
var { document: fe } = I, yl = [
  "application/javascript",
  "application/ecmascript",
  "application/x-ecmascript",
  "application/x-javascript",
  "text/ecmascript",
  "text/javascript",
  "text/javascript1.0",
  "text/javascript1.1",
  "text/javascript1.2",
  "text/javascript1.3",
  "text/javascript1.4",
  "text/javascript1.5",
  "text/jscript",
  "text/livescript",
  "text/x-ecmascript",
  "text/x-javascript",
  // Support modern javascript
  "module"
], hl = "script", Un = "scripts-root";
function Sr() {
  let pt = fe.createEvent("Event");
  pt.initEvent("DOMContentLoaded", !0, !0), fe.dispatchEvent(pt);
}
s(Sr, "simulateDOMContentLoaded");
function ml(pt, ne, yt) {
  let ir = fe.createElement("script");
  ir.type = pt.type === "module" ? "module" : "text/javascript", pt.src ? (ir.onload = ne, ir.onerror = ne, ir.src = pt.src) : ir.textContent = pt.innerText, yt ? yt.appendChild(ir) : fe.head.appendChild(ir), pt.parentNode.removeChild(pt), pt.src || ne();
}
s(ml, "insertScript");
function Gn(pt, ne, yt = 0) {
  pt[yt](() => {
    yt++, yt === pt.length ? ne() : Gn(pt, ne, yt);
  });
}
s(Gn, "insertScriptsSequentially");
function Bn(pt) {
  let ne = fe.getElementById(Un);
  ne ? ne.innerHTML = "" : (ne = fe.createElement("div"), ne.id = Un, fe.body.appendChild(ne));
  let yt = Array.from(pt.querySelectorAll(hl));
  if (yt.length) {
    let ir = [];
    yt.forEach((io) => {
      let uo = io.getAttribute("type");
      (!uo || yl.includes(uo)) && ir.push((fo) => ml(io, fo, ne));
    }), ir.length && Gn(ir, Sr, void 0);
  } else
    Sr();
}
s(Bn, "simulatePageLoad");
var scope = (() => {
  let pt;
  return typeof window < "u" ? pt = window : typeof globalThis < "u" ? pt = globalThis : typeof global < "u" ? pt = global : typeof self < "u" ? pt = self : pt = {}, pt;
})();
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues && (getRandomValues = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !getRandomValues))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return getRandomValues(rnds8);
}
const byteToHex = [];
for (let pt = 0; pt < 256; ++pt)
  byteToHex.push((pt + 256).toString(16).slice(1));
function unsafeStringify(pt, ne = 0) {
  return byteToHex[pt[ne + 0]] + byteToHex[pt[ne + 1]] + byteToHex[pt[ne + 2]] + byteToHex[pt[ne + 3]] + "-" + byteToHex[pt[ne + 4]] + byteToHex[pt[ne + 5]] + "-" + byteToHex[pt[ne + 6]] + byteToHex[pt[ne + 7]] + "-" + byteToHex[pt[ne + 8]] + byteToHex[pt[ne + 9]] + "-" + byteToHex[pt[ne + 10]] + byteToHex[pt[ne + 11]] + byteToHex[pt[ne + 12]] + byteToHex[pt[ne + 13]] + byteToHex[pt[ne + 14]] + byteToHex[pt[ne + 15]];
}
const randomUUID = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), native = {
  randomUUID
};
function v4(pt, ne, yt) {
  if (native.randomUUID && !pt)
    return native.randomUUID();
  pt = pt || {};
  const ir = pt.random || (pt.rng || rng)();
  return ir[6] = ir[6] & 15 | 64, ir[8] = ir[8] & 63 | 128, unsafeStringify(ir);
}
var ADDON_ID = "storybook/actions", EVENT_ID = `${ADDON_ID}/action-event`, config = { depth: 10, clearOnStoryChange: !0, limit: 50 }, findProto = (pt, ne) => {
  let yt = Object.getPrototypeOf(pt);
  return !yt || ne(yt) ? yt : findProto(yt, ne);
}, isReactSyntheticEvent = (pt) => !!(typeof pt == "object" && pt && findProto(pt, (ne) => /^Synthetic(?:Base)?Event$/.test(ne.constructor.name)) && typeof pt.persist == "function"), serializeArg = (pt) => {
  if (isReactSyntheticEvent(pt)) {
    let ne = Object.create(pt.constructor.prototype, Object.getOwnPropertyDescriptors(pt));
    ne.persist();
    let yt = Object.getOwnPropertyDescriptor(ne, "view"), ir = yt == null ? void 0 : yt.value;
    return typeof ir == "object" && (ir == null ? void 0 : ir.constructor.name) === "Window" && Object.defineProperty(ne, "view", { ...yt, value: Object.create(ir.constructor.prototype) }), ne;
  }
  return pt;
}, generateId = () => typeof crypto == "object" && typeof crypto.getRandomValues == "function" ? v4() : Date.now().toString(36) + Math.random().toString(36).substring(2);
function action(pt, ne = {}) {
  let yt = { ...config, ...ne }, ir = function(...io) {
    var _o, Io;
    if (ne.implicit) {
      let jo = (_o = "__STORYBOOK_PREVIEW__" in scope ? scope.__STORYBOOK_PREVIEW__ : void 0) == null ? void 0 : _o.storyRenders.find((Lo) => Lo.phase === "playing" || Lo.phase === "rendering");
      if (jo) {
        let Lo = !((Io = globalThis == null ? void 0 : globalThis.FEATURES) != null && Io.disallowImplicitActionsInRenderV8), Ho = new j$2({ phase: jo.phase, name: pt, deprecated: Lo });
        if (Lo) console.warn(Ho);
        else throw Ho;
      }
    }
    let uo = V.getChannel(), fo = generateId(), Co = 5, xo = io.map(serializeArg), Oo = io.length > 1 ? xo : xo[0], Po = { id: fo, count: 0, data: { name: pt, args: Oo }, options: { ...yt, maxDepth: Co + (yt.depth || 3), allowFunction: yt.allowFunction || !1 } };
    uo.emit(EVENT_ID, Po);
  };
  return ir.isAction = !0, ir.implicit = ne.implicit, ir;
}
const defaultAvatar = {
  variant: "initial",
  category: "person",
  label: "Nina Brown",
  color: "soft"
};
action("icon-click");
const defaultTitleChip = {
  label: "Label",
  trailingIcon: "ic_chevron_down"
}, defaultFlagChip = {
  variant: "flag",
  flagIcon: "ic_flag_brazil",
  trailingIcon: "ic_chevron_down"
}, defaultSegmentedControl = {
  segments: [{ icon: "ic_orange" }, { icon: "ic_orange" }],
  filling: "hug",
  onClick: action("segment-click")
}, defaultLogo = "inter", resolveDocsHeaderArgs = (pt) => {
  const ne = pt.state, yt = pt.title ?? "Title", ir = pt.onBackClick ?? action("onBackClick"), io = pt.onCloseClick ?? action("onCloseClick"), uo = pt.avatar ?? defaultAvatar, fo = pt.showStartIcon, Co = pt.startIcon, xo = pt.showMiddleIcon, Oo = pt.middleIcon, Po = pt.showEndIcon, _o = pt.endIcon, Io = pt.onTag, jo = pt.chip, Lo = pt.logo ?? defaultLogo, Ho = pt.segmentedControl ?? defaultSegmentedControl;
  switch (pt.type) {
    case "titleChip":
      return {
        variant: "innerPages",
        type: "titleChip",
        size: "small",
        state: ne,
        title: yt,
        onBackClick: ir,
        chip: jo ?? defaultTitleChip,
        onTag: Io
      };
    case "logo":
      return {
        variant: "topPages",
        type: "logo",
        size: "small",
        state: ne,
        logo: Lo,
        showStartIcon: fo,
        startIcon: Co,
        showMiddleIcon: xo,
        middleIcon: Oo,
        showEndIcon: Po,
        endIcon: _o,
        onTag: Io
      };
    case "avatar":
      return {
        variant: "topPages",
        type: "avatar",
        size: "small",
        state: ne,
        title: yt,
        avatar: uo,
        showStartIcon: fo,
        startIcon: Co,
        showMiddleIcon: xo,
        middleIcon: Oo,
        showEndIcon: Po,
        endIcon: _o,
        onTag: Io
      };
    case "avatarFlag":
      return {
        variant: "topPages",
        type: "avatarFlag",
        size: "small",
        state: ne,
        title: yt,
        avatar: uo,
        chip: jo ?? defaultFlagChip,
        showStartIcon: fo,
        startIcon: Co,
        showMiddleIcon: xo,
        middleIcon: Oo,
        onTag: Io
      };
    case "avatarSegmentedControl":
      return {
        variant: "topPages",
        type: "avatarSegmentedControl",
        size: "small",
        state: ne,
        title: yt,
        avatar: uo,
        segmentedControl: Ho,
        showStartIcon: fo,
        startIcon: Co,
        onTag: Io
      };
    case "search":
      return pt.variant === "innerPages" ? {
        variant: "innerPages",
        type: "search",
        size: "small",
        state: ne,
        onBackClick: ir,
        showStartIcon: fo,
        startIcon: Co,
        showMiddleIcon: xo,
        middleIcon: Oo,
        searchProps: pt.searchProps,
        onTag: Io
      } : {
        variant: "topPages",
        type: "search",
        size: "small",
        state: ne,
        onBackClick: pt.onBackClick,
        showStartIcon: fo,
        startIcon: Co,
        showMiddleIcon: xo,
        middleIcon: Oo,
        searchProps: pt.searchProps,
        onTag: Io
      };
    case "title":
    default:
      return pt.variant === "modalPages" ? {
        variant: "modalPages",
        type: "title",
        size: pt.size === "large" ? "large" : "small",
        state: ne,
        stacked: pt.stacked,
        title: yt,
        onCloseClick: io,
        showStartIcon: fo,
        startIcon: Co,
        showMiddleIcon: xo,
        middleIcon: Oo,
        showEndIcon: Po,
        endIcon: _o,
        onTag: Io
      } : pt.variant === "innerPages" ? {
        variant: "innerPages",
        type: "title",
        size: pt.size === "large" ? "large" : "small",
        state: ne,
        stacked: pt.stacked,
        title: yt,
        onBackClick: ir,
        showStartIcon: fo,
        startIcon: Co,
        showMiddleIcon: xo,
        middleIcon: Oo,
        showEndIcon: Po,
        endIcon: _o,
        onTag: Io
      } : {
        variant: "topPages",
        type: "title",
        size: "small",
        state: ne,
        stacked: pt.stacked,
        title: yt,
        onBackClick: pt.onBackClick,
        showStartIcon: fo,
        startIcon: Co,
        showMiddleIcon: xo,
        middleIcon: Oo,
        showEndIcon: Po,
        endIcon: _o,
        onTag: Io
      };
  }
};
export {
  resolveDocsHeaderArgs
};
