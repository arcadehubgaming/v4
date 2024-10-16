!function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("GamePix", [], t) : "object" == typeof exports ? exports.GamePix = t() : e.GamePix = t()
}(self, (function() {
  return (()=>{
      var e = {
          3667: e=>{
              e.exports = {
                  PLAYER_LOADING_NOT_READY: {
                      code: 0,
                      label: "PLAYER_LOADING_NOT_READY",
                      message: "Sending to GamePix Player loading information but seems is not listening"
                  },
                  PLAYER_LOADED_NOT_READY: {
                      code: 1,
                      label: "PLAYER_LOADED_NOT_READY",
                      message: "Sending to GamePix Player loaded information but seems is not listening"
                  },
                  SENDING_GENERIC_EVENT_TO_PLAYER_FAIL: {
                      code: 2,
                      label: "SENDING_GENERIC_EVENT_TO_PLAYER_FAIL",
                      message: "Sending to GamePix Player generic event but seems is not listening"
                  },
                  NO_CALLBACK_DEFINED: {
                      code: 3,
                      label: "NO_CALLBACK_DEFINED",
                      message: "No callback defined in your function"
                  },
                  EVENT_IS_NOT_DEFINED: {
                      code: 4,
                      label: "EVENT_IS_NOT_DEFINED",
                      message: "You've called an Event that is not inside GamePix.Events list"
                  },
                  ARGUMENT_IS_NOT_AN_OBJECT_OR_UNDEFINED: {
                      code: 5,
                      label: "ARGUMENT_IS_NOT_AN_OBJECT_OR_UNDEFINED",
                      message: "The argument must be an object or at least undefined"
                  },
                  LOADING_CALLED_AFTER_LOADED: {
                      code: 6,
                      label: "LOADING_CALLED_AFTER_LOADED",
                      message: "Gamepix.loading function is called after Gamepix.loaded! You can call loading only before loaded"
                  },
                  LOADED_ALREADY_CALLED: {
                      code: 8,
                      label: "LOADED_ALREADY_CALLED",
                      message: "GamePix.loaded() can be called only one time and has been already called!"
                  },
                  PAUSE_FUNCTION_HAS_NOT_BEEN_DECLARED: {
                      code: 9,
                      label: "PAUSE_FUNCTION_HAS_NOT_BEEN_DECLARED",
                      message: "GamePix.pause has not been declared. Please define it!"
                  },
                  RESUME_GAME_FUNCTION_HAS_NOT_BEEN_DECLARED: {
                      code: 10,
                      label: "RESUME_GAME_FUNCTION_HAS_NOT_BEEN_DECLARED",
                      message: "GamePix.resume has not been declared. Please define it!"
                  },
                  LOADING_VALUE_IS_NOT_A_NUMBER: {
                      code: 11,
                      label: "LOADING_VALUE_IS_NOT_A_NUMBER",
                      message: "The value provided inside GamePix.loading function is not a valid number! Please pass to this function only integer positive numbers between 0 and 100."
                  },
                  GAMEPIX_LOADED_NOT_CALLED: {
                      code: 12,
                      label: "GAMEPIX_LOADED_NOT_CALLED",
                      message: "GamePix.loaded() is not called. Please use it before any other GamePix SDK methods."
                  },
                  GAMEPIX_PLAYER_NOT_FOUND: {
                      code: 13,
                      label: "GAMEPIX_PLAYER_NOT_FOUND",
                      message: "GamePix Player Not Found."
                  },
                  UPDATE_SCORE_VALUE_IS_NOT_A_NUMBER: {
                      code: 14,
                      label: "UPDATE_SCORE_VALUE_IS_NOT_A_NUMBER",
                      message: "The value provided inside GamePix.updateScore function is not a number! Please pass to this function only integer positive numbers."
                  },
                  UPDATE_LEVEL_VALUE_IS_NOT_A_NUMBER: {
                      code: 15,
                      label: "UPDATE_LEVEL_VALUE_IS_NOT_A_NUMBER",
                      message: "The value provided inside GamePix.updateScore function is not a number! Please pass to this function only integer positive numbers."
                  },
                  INTERSTITIAL_AD_CALLED_TWICE: {
                      code: 16,
                      label: "INTERSTITIAL_AD_CALLED_TWICE",
                      message: "Interstitial ad has been called more than one time before it was completed"
                  },
                  REWARD_AD_CALLED_TWICE: {
                      code: 17,
                      label: "REWARD_AD_CALLED_TWICE",
                      message: "Reward ad has been called more than one time before it was completed"
                  },
                  PURCHASE_CALLED_TWICE: {
                      code: 18,
                      label: "PURCHASE_CALLED_TWICE",
                      message: "Purchase has been called before an ongoing purchase process completes"
                  },
                  PURCHASE_PRICE_NOT_DEFINED: {
                      code: 19,
                      label: "PURCHASE_PRICE_NOT_DEFINED",
                      message: "Item's price has not been defined or is not a number"
                  },
                  PURCHASE_ITEM_NOT_DEFINED: {
                      code: 20,
                      label: "PURCHASE_ITEM_NOT_DEFINED",
                      message: "Purchase item name has not been defined or is not a string"
                  },
                  PURCHASE_QUANTITY_NOT_DEFINED: {
                      code: 21,
                      label: "PURCHASE_QUANTITY_NOT_DEFINED",
                      message: "Purchase quantity has not been defined or is not a number"
                  },
                  REWARD_AD_NOT_COMPLETED: {
                      code: 22,
                      label: "REWARD_AD_NOT_COMPLETED",
                      message: "Don't give reward"
                  },
                  PURCHASE_REJECTED: {
                      code: 23,
                      label: "PURCHASE_REJECTED",
                      message: "Purchase of the item failed"
                  },
                  METHOD_BEFORE_LOADED: {
                      code: 24,
                      label: "GAMEPIX_LOADED_NOT_CALLED",
                      message: "GamePix.loaded() is not called. Please use it before using "
                  },
                  SOUNDOFF_GAME_FUNCTION_HAS_NOT_BEEN_DECLARED: {
                      code: 25,
                      label: "SOUNDOFF_GAME_FUNCTION_HAS_NOT_BEEN_DECLARED",
                      message: "GamePix.soundOff has not been declared."
                  },
                  SOUNDON_GAME_FUNCTION_HAS_NOT_BEEN_DECLARED: {
                      code: 26,
                      label: "SOUNDON_GAME_FUNCTION_HAS_NOT_BEEN_DECLARED",
                      message: "GamePix.soundOn has not been declared."
                  },
                  KEY_OR_VALUE_FOR_LOCALSTORAGE_NOT_A_STRING: {
                      code: 27,
                      label: "KEY_OR_VALUE_FOR_LOCALSTORAGE_NOT_A_STRING",
                      message: "key or value passed to GamePix.localStorage is not a string"
                  }
              }
          }
          ,
          7677: e=>{
              e.exports = {
                  CLOSE_EVENT: "close_event",
                  FOCUS: "FOCUS",
                  GAME_LOADING: "LOADING",
                  GAME_LOADED: "LOADED",
                  LOADED_EXECUTED: "LOADED_EXECUTED",
                  GAME_PLAYED: "GAMEPLAYED",
                  PING: "PING",
                  GET_LOCAL_STORAGE: "GET_LOCAL_STORAGE",
                  LEVEL_COMPLETE: "LEVEL_COMPLETE",
                  LEVEL_COMPLETED: "LEVEL_COMPLETED",
                  PAUSE: "PAUSE",
                  RESUME: "RESUME",
                  SOUND_ON: "SOUNDON",
                  SOUND_OFF: "SOUNDOFF",
                  GAME_OVER: "GAME_OVER",
                  ERROR: "ERROR",
                  WARNING: "WARNING",
                  TRY_AGAIN: "TRY_AGAIN",
                  PARTIAL_SCORE: "PARTIAL_SCORE",
                  OPEN_LEADERBOARD: "OPEN_LEADERBOARD",
                  OPEN_SHOP: "OPEN_SHOP",
                  START_PLAY: "START_PLAY",
                  START_LEVEL: "START_LEVEL",
                  SECOND_CHANCE: "SECOND_CHANCE",
                  SHOW_BUTTON_REWARD: "SHOW_BUTTON_REWARD",
                  SHOW_VIDEO_REWARD: "SHOW_VIDEO_REWARD",
                  SHARE: "SHARE",
                  CHALLENGE_STARTED: "CHALLENGE_STARTED",
                  CHALLENGE_WON: "CHALLENGE_WON",
                  CHALLENGE_FAILED: "CHALLENGE_FAILED",
                  WATCH_VIDEO: "WATCH_VIDEO",
                  MAIN: "MAIN",
                  CHALLENGE: "CHALLENGE",
                  PURCHASE: "PURCHASE",
                  UPDATE_SCORE: "UPDATE_SCORE",
                  UPDATE_LEVEL: "UPDATE_LEVEL",
                  REQUEST_INTERSTITIAL_AD: "REQUEST_INTERSTITIAL_AD",
                  INTERSTITIAL_AD_EXECUTED: "INTERSTITIAL_AD_EXECUTED",
                  REQUEST_REWARD_AD: "REQUEST_REWARD_AD",
                  REWARD_AD_EXECUTED: "REWARD_AD_EXECUTED",
                  REQUEST_PURCHASE: "REQUEST_PURCHASE",
                  PURCHASE_EXECUTED: "PURCHASE_EXECUTED",
                  REQUEST_PLAYER_INFO: "REQUEST_PLAYER_INFO",
                  PLAYER_INFO_EXECUTED: "PLAYER_INFO_EXECUTED",
                  LOADED: "LOADED",
                  HAPPY_MOMENT: "HAPPY_MOMENT",
                  SAD_MOMENT: "SAD_MOMENT",
                  UPDATE_LOCALSTORAGE: "UPDATE_LOCALSTORAGE",
                  LANG_USED: "LANG_USED",
                  GAME_ACTION: "GAME_ACTION",
                  GAME_STOP: "GAME_STOP",
                  START_RECORD_CANVAS: "START_RECORD_CANVAS",
                  STOP_RECORD_CANVAS: "STOP_RECORD_CANVAS",
                  STARTED_RECORD_CANVAS: "STARTED_RECORD_CANVAS",
                  STOPPED_RECORD_CANVAS: "STOPPED_RECORD_CANVAS",
                  REWARD: {
                      COIN: "COIN",
                      MONEY: "MONEY",
                      GEM: "GEM"
                  }
              }
          }
          ,
          4963: e=>{
              e.exports = function(e) {
                  if ("function" != typeof e)
                      throw TypeError(e + " is not a function!");
                  return e
              }
          }
          ,
          7722: (e,t,o)=>{
              var n = o(6314)("unscopables")
                , i = Array.prototype;
              null == i[n] && o(7728)(i, n, {}),
              e.exports = function(e) {
                  i[n][e] = !0
              }
          }
          ,
          6793: (e,t,o)=>{
              "use strict";
              var n = o(4496)(!0);
              e.exports = function(e, t, o) {
                  return t + (o ? n(e, t).length : 1)
              }
          }
          ,
          3328: e=>{
              e.exports = function(e, t, o, n) {
                  if (!(e instanceof t) || void 0 !== n && n in e)
                      throw TypeError(o + ": incorrect invocation!");
                  return e
              }
          }
          ,
          7007: (e,t,o)=>{
              var n = o(5286);
              e.exports = function(e) {
                  if (!n(e))
                      throw TypeError(e + " is not an object!");
                  return e
              }
          }
          ,
          9315: (e,t,o)=>{
              var n = o(2110)
                , i = o(875)
                , r = o(2337);
              e.exports = function(e) {
                  return function(t, o, A) {
                      var a, g = n(t), s = i(g.length), c = r(A, s);
                      if (e && o != o) {
                          for (; s > c; )
                              if ((a = g[c++]) != a)
                                  return !0
                      } else
                          for (; s > c; c++)
                              if ((e || c in g) && g[c] === o)
                                  return e || c || 0;
                      return !e && -1
                  }
              }
          }
          ,
          50: (e,t,o)=>{
              var n = o(741)
                , i = o(9797)
                , r = o(508)
                , A = o(875)
                , a = o(6886);
              e.exports = function(e, t) {
                  var o = 1 == e
                    , g = 2 == e
                    , s = 3 == e
                    , c = 4 == e
                    , u = 6 == e
                    , C = 5 == e || u
                    , l = t || a;
                  return function(t, a, I) {
                      for (var E, f, p = r(t), d = i(p), K = n(a, I, 3), v = A(d.length), _ = 0, h = o ? l(t, v) : g ? l(t, 0) : void 0; v > _; _++)
                          if ((C || _ in d) && (f = K(E = d[_], _, p),
                          e))
                              if (o)
                                  h[_] = f;
                              else if (f)
                                  switch (e) {
                                  case 3:
                                      return !0;
                                  case 5:
                                      return E;
                                  case 6:
                                      return _;
                                  case 2:
                                      h.push(E)
                                  }
                              else if (c)
                                  return !1;
                      return u ? -1 : s || c ? c : h
                  }
              }
          }
          ,
          2736: (e,t,o)=>{
              var n = o(5286)
                , i = o(4302)
                , r = o(6314)("species");
              e.exports = function(e) {
                  var t;
                  return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0),
                  n(t) && null === (t = t[r]) && (t = void 0)),
                  void 0 === t ? Array : t
              }
          }
          ,
          6886: (e,t,o)=>{
              var n = o(2736);
              e.exports = function(e, t) {
                  return new (n(e))(t)
              }
          }
          ,
          1488: (e,t,o)=>{
              var n = o(2032)
                , i = o(6314)("toStringTag")
                , r = "Arguments" == n(function() {
                  return arguments
              }());
              e.exports = function(e) {
                  var t, o, A;
                  return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (o = function(e, t) {
                      try {
                          return e[t]
                      } catch (e) {}
                  }(t = Object(e), i)) ? o : r ? n(t) : "Object" == (A = n(t)) && "function" == typeof t.callee ? "Arguments" : A
              }
          }
          ,
          2032: e=>{
              var t = {}.toString;
              e.exports = function(e) {
                  return t.call(e).slice(8, -1)
              }
          }
          ,
          5645: e=>{
              var t = e.exports = {
                  version: "2.6.12"
              };
              "number" == typeof __e && (__e = t)
          }
          ,
          2811: (e,t,o)=>{
              "use strict";
              var n = o(9275)
                , i = o(681);
              e.exports = function(e, t, o) {
                  t in e ? n.f(e, t, i(0, o)) : e[t] = o
              }
          }
          ,
          741: (e,t,o)=>{
              var n = o(4963);
              e.exports = function(e, t, o) {
                  if (n(e),
                  void 0 === t)
                      return e;
                  switch (o) {
                  case 1:
                      return function(o) {
                          return e.call(t, o)
                      }
                      ;
                  case 2:
                      return function(o, n) {
                          return e.call(t, o, n)
                      }
                      ;
                  case 3:
                      return function(o, n, i) {
                          return e.call(t, o, n, i)
                      }
                  }
                  return function() {
                      return e.apply(t, arguments)
                  }
              }
          }
          ,
          1355: e=>{
              e.exports = function(e) {
                  if (null == e)
                      throw TypeError("Can't call method on  " + e);
                  return e
              }
          }
          ,
          7057: (e,t,o)=>{
              e.exports = !o(4253)((function() {
                  return 7 != Object.defineProperty({}, "a", {
                      get: function() {
                          return 7
                      }
                  }).a
              }
              ))
          }
          ,
          2457: (e,t,o)=>{
              var n = o(5286)
                , i = o(3816).document
                , r = n(i) && n(i.createElement);
              e.exports = function(e) {
                  return r ? i.createElement(e) : {}
              }
          }
          ,
          4430: e=>{
              e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
          }
          ,
          5541: (e,t,o)=>{
              var n = o(7184)
                , i = o(4548)
                , r = o(4682);
              e.exports = function(e) {
                  var t = n(e)
                    , o = i.f;
                  if (o)
                      for (var A, a = o(e), g = r.f, s = 0; a.length > s; )
                          g.call(e, A = a[s++]) && t.push(A);
                  return t
              }
          }
          ,
          2985: (e,t,o)=>{
              var n = o(3816)
                , i = o(5645)
                , r = o(7728)
                , A = o(7234)
                , a = o(741)
                , g = function(e, t, o) {
                  var s, c, u, C, l = e & g.F, I = e & g.G, E = e & g.S, f = e & g.P, p = e & g.B, d = I ? n : E ? n[t] || (n[t] = {}) : (n[t] || {}).prototype, K = I ? i : i[t] || (i[t] = {}), v = K.prototype || (K.prototype = {});
                  for (s in I && (o = t),
                  o)
                      u = ((c = !l && d && void 0 !== d[s]) ? d : o)[s],
                      C = p && c ? a(u, n) : f && "function" == typeof u ? a(Function.call, u) : u,
                      d && A(d, s, u, e & g.U),
                      K[s] != u && r(K, s, C),
                      f && v[s] != u && (v[s] = u)
              };
              n.core = i,
              g.F = 1,
              g.G = 2,
              g.S = 4,
              g.P = 8,
              g.B = 16,
              g.W = 32,
              g.U = 64,
              g.R = 128,
              e.exports = g
          }
          ,
          4253: e=>{
              e.exports = function(e) {
                  try {
                      return !!e()
                  } catch (e) {
                      return !0
                  }
              }
          }
          ,
          8082: (e,t,o)=>{
              "use strict";
              o(8269);
              var n = o(7234)
                , i = o(7728)
                , r = o(4253)
                , A = o(1355)
                , a = o(6314)
                , g = o(1165)
                , s = a("species")
                , c = !r((function() {
                  var e = /./;
                  return e.exec = function() {
                      var e = [];
                      return e.groups = {
                          a: "7"
                      },
                      e
                  }
                  ,
                  "7" !== "".replace(e, "$<a>")
              }
              ))
                , u = function() {
                  var e = /(?:)/
                    , t = e.exec;
                  e.exec = function() {
                      return t.apply(this, arguments)
                  }
                  ;
                  var o = "ab".split(e);
                  return 2 === o.length && "a" === o[0] && "b" === o[1]
              }();
              e.exports = function(e, t, o) {
                  var C = a(e)
                    , l = !r((function() {
                      var t = {};
                      return t[C] = function() {
                          return 7
                      }
                      ,
                      7 != ""[e](t)
                  }
                  ))
                    , I = l ? !r((function() {
                      var t = !1
                        , o = /a/;
                      return o.exec = function() {
                          return t = !0,
                          null
                      }
                      ,
                      "split" === e && (o.constructor = {},
                      o.constructor[s] = function() {
                          return o
                      }
                      ),
                      o[C](""),
                      !t
                  }
                  )) : void 0;
                  if (!l || !I || "replace" === e && !c || "split" === e && !u) {
                      var E = /./[C]
                        , f = o(A, C, ""[e], (function(e, t, o, n, i) {
                          return t.exec === g ? l && !i ? {
                              done: !0,
                              value: E.call(t, o, n)
                          } : {
                              done: !0,
                              value: e.call(o, t, n)
                          } : {
                              done: !1
                          }
                      }
                      ))
                        , p = f[0]
                        , d = f[1];
                      n(String.prototype, e, p),
                      i(RegExp.prototype, C, 2 == t ? function(e, t) {
                          return d.call(e, this, t)
                      }
                      : function(e) {
                          return d.call(e, this)
                      }
                      )
                  }
              }
          }
          ,
          3218: (e,t,o)=>{
              "use strict";
              var n = o(7007);
              e.exports = function() {
                  var e = n(this)
                    , t = "";
                  return e.global && (t += "g"),
                  e.ignoreCase && (t += "i"),
                  e.multiline && (t += "m"),
                  e.unicode && (t += "u"),
                  e.sticky && (t += "y"),
                  t
              }
          }
          ,
          3531: (e,t,o)=>{
              var n = o(741)
                , i = o(8851)
                , r = o(6555)
                , A = o(7007)
                , a = o(875)
                , g = o(9002)
                , s = {}
                , c = {}
                , u = e.exports = function(e, t, o, u, C) {
                  var l, I, E, f, p = C ? function() {
                      return e
                  }
                  : g(e), d = n(o, u, t ? 2 : 1), K = 0;
                  if ("function" != typeof p)
                      throw TypeError(e + " is not iterable!");
                  if (r(p)) {
                      for (l = a(e.length); l > K; K++)
                          if ((f = t ? d(A(I = e[K])[0], I[1]) : d(e[K])) === s || f === c)
                              return f
                  } else
                      for (E = p.call(e); !(I = E.next()).done; )
                          if ((f = i(E, d, I.value, t)) === s || f === c)
                              return f
              }
              ;
              u.BREAK = s,
              u.RETURN = c
          }
          ,
          18: (e,t,o)=>{
              e.exports = o(3825)("native-function-to-string", Function.toString)
          }
          ,
          3816: e=>{
              var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
              "number" == typeof __g && (__g = t)
          }
          ,
          9181: e=>{
              var t = {}.hasOwnProperty;
              e.exports = function(e, o) {
                  return t.call(e, o)
              }
          }
          ,
          7728: (e,t,o)=>{
              var n = o(9275)
                , i = o(681);
              e.exports = o(7057) ? function(e, t, o) {
                  return n.f(e, t, i(1, o))
              }
              : function(e, t, o) {
                  return e[t] = o,
                  e
              }
          }
          ,
          639: (e,t,o)=>{
              var n = o(3816).document;
              e.exports = n && n.documentElement
          }
          ,
          1734: (e,t,o)=>{
              e.exports = !o(7057) && !o(4253)((function() {
                  return 7 != Object.defineProperty(o(2457)("div"), "a", {
                      get: function() {
                          return 7
                      }
                  }).a
              }
              ))
          }
          ,
          266: (e,t,o)=>{
              var n = o(5286)
                , i = o(7375).set;
              e.exports = function(e, t, o) {
                  var r, A = t.constructor;
                  return A !== o && "function" == typeof A && (r = A.prototype) !== o.prototype && n(r) && i && i(e, r),
                  e
              }
          }
          ,
          7242: e=>{
              e.exports = function(e, t, o) {
                  var n = void 0 === o;
                  switch (t.length) {
                  case 0:
                      return n ? e() : e.call(o);
                  case 1:
                      return n ? e(t[0]) : e.call(o, t[0]);
                  case 2:
                      return n ? e(t[0], t[1]) : e.call(o, t[0], t[1]);
                  case 3:
                      return n ? e(t[0], t[1], t[2]) : e.call(o, t[0], t[1], t[2]);
                  case 4:
                      return n ? e(t[0], t[1], t[2], t[3]) : e.call(o, t[0], t[1], t[2], t[3])
                  }
                  return e.apply(o, t)
              }
          }
          ,
          9797: (e,t,o)=>{
              var n = o(2032);
              e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                  return "String" == n(e) ? e.split("") : Object(e)
              }
          }
          ,
          6555: (e,t,o)=>{
              var n = o(2803)
                , i = o(6314)("iterator")
                , r = Array.prototype;
              e.exports = function(e) {
                  return void 0 !== e && (n.Array === e || r[i] === e)
              }
          }
          ,
          4302: (e,t,o)=>{
              var n = o(2032);
              e.exports = Array.isArray || function(e) {
                  return "Array" == n(e)
              }
          }
          ,
          5286: e=>{
              e.exports = function(e) {
                  return "object" == typeof e ? null !== e : "function" == typeof e
              }
          }
          ,
          5364: (e,t,o)=>{
              var n = o(5286)
                , i = o(2032)
                , r = o(6314)("match");
              e.exports = function(e) {
                  var t;
                  return n(e) && (void 0 !== (t = e[r]) ? !!t : "RegExp" == i(e))
              }
          }
          ,
          8851: (e,t,o)=>{
              var n = o(7007);
              e.exports = function(e, t, o, i) {
                  try {
                      return i ? t(n(o)[0], o[1]) : t(o)
                  } catch (t) {
                      var r = e.return;
                      throw void 0 !== r && n(r.call(e)),
                      t
                  }
              }
          }
          ,
          9988: (e,t,o)=>{
              "use strict";
              var n = o(2503)
                , i = o(681)
                , r = o(2943)
                , A = {};
              o(7728)(A, o(6314)("iterator"), (function() {
                  return this
              }
              )),
              e.exports = function(e, t, o) {
                  e.prototype = n(A, {
                      next: i(1, o)
                  }),
                  r(e, t + " Iterator")
              }
          }
          ,
          2923: (e,t,o)=>{
              "use strict";
              var n = o(4461)
                , i = o(2985)
                , r = o(7234)
                , A = o(7728)
                , a = o(2803)
                , g = o(9988)
                , s = o(2943)
                , c = o(468)
                , u = o(6314)("iterator")
                , C = !([].keys && "next"in [].keys())
                , l = "keys"
                , I = "values"
                , E = function() {
                  return this
              };
              e.exports = function(e, t, o, f, p, d, K) {
                  g(o, t, f);
                  var v, _, h, O = function(e) {
                      if (!C && e in D)
                          return D[e];
                      switch (e) {
                      case l:
                      case I:
                          return function() {
                              return new o(this,e)
                          }
                      }
                      return function() {
                          return new o(this,e)
                      }
                  }, m = t + " Iterator", R = p == I, y = !1, D = e.prototype, T = D[u] || D["@@iterator"] || p && D[p], S = T || O(p), b = p ? R ? O("entries") : S : void 0, x = "Array" == t && D.entries || T;
                  if (x && (h = c(x.call(new e))) !== Object.prototype && h.next && (s(h, m, !0),
                  n || "function" == typeof h[u] || A(h, u, E)),
                  R && T && T.name !== I && (y = !0,
                  S = function() {
                      return T.call(this)
                  }
                  ),
                  n && !K || !C && !y && D[u] || A(D, u, S),
                  a[t] = S,
                  a[m] = E,
                  p)
                      if (v = {
                          values: R ? S : O(I),
                          keys: d ? S : O(l),
                          entries: b
                      },
                      K)
                          for (_ in v)
                              _ in D || r(D, _, v[_]);
                      else
                          i(i.P + i.F * (C || y), t, v);
                  return v
              }
          }
          ,
          7462: (e,t,o)=>{
              var n = o(6314)("iterator")
                , i = !1;
              try {
                  var r = [7][n]();
                  r.return = function() {
                      i = !0
                  }
                  ,
                  Array.from(r, (function() {
                      throw 2
                  }
                  ))
              } catch (e) {}
              e.exports = function(e, t) {
                  if (!t && !i)
                      return !1;
                  var o = !1;
                  try {
                      var r = [7]
                        , A = r[n]();
                      A.next = function() {
                          return {
                              done: o = !0
                          }
                      }
                      ,
                      r[n] = function() {
                          return A
                      }
                      ,
                      e(r)
                  } catch (e) {}
                  return o
              }
          }
          ,
          5436: e=>{
              e.exports = function(e, t) {
                  return {
                      value: t,
                      done: !!e
                  }
              }
          }
          ,
          2803: e=>{
              e.exports = {}
          }
          ,
          4461: e=>{
              e.exports = !1
          }
          ,
          4728: (e,t,o)=>{
              var n = o(3953)("meta")
                , i = o(5286)
                , r = o(9181)
                , A = o(9275).f
                , a = 0
                , g = Object.isExtensible || function() {
                  return !0
              }
                , s = !o(4253)((function() {
                  return g(Object.preventExtensions({}))
              }
              ))
                , c = function(e) {
                  A(e, n, {
                      value: {
                          i: "O" + ++a,
                          w: {}
                      }
                  })
              }
                , u = e.exports = {
                  KEY: n,
                  NEED: !1,
                  fastKey: function(e, t) {
                      if (!i(e))
                          return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                      if (!r(e, n)) {
                          if (!g(e))
                              return "F";
                          if (!t)
                              return "E";
                          c(e)
                      }
                      return e[n].i
                  },
                  getWeak: function(e, t) {
                      if (!r(e, n)) {
                          if (!g(e))
                              return !0;
                          if (!t)
                              return !1;
                          c(e)
                      }
                      return e[n].w
                  },
                  onFreeze: function(e) {
                      return s && u.NEED && g(e) && !r(e, n) && c(e),
                      e
                  }
              }
          }
          ,
          4351: (e,t,o)=>{
              var n = o(3816)
                , i = o(4193).set
                , r = n.MutationObserver || n.WebKitMutationObserver
                , A = n.process
                , a = n.Promise
                , g = "process" == o(2032)(A);
              e.exports = function() {
                  var e, t, o, s = function() {
                      var n, i;
                      for (g && (n = A.domain) && n.exit(); e; ) {
                          i = e.fn,
                          e = e.next;
                          try {
                              i()
                          } catch (n) {
                              throw e ? o() : t = void 0,
                              n
                          }
                      }
                      t = void 0,
                      n && n.enter()
                  };
                  if (g)
                      o = function() {
                          A.nextTick(s)
                      }
                      ;
                  else if (!r || n.navigator && n.navigator.standalone)
                      if (a && a.resolve) {
                          var c = a.resolve(void 0);
                          o = function() {
                              c.then(s)
                          }
                      } else
                          o = function() {
                              i.call(n, s)
                          }
                          ;
                  else {
                      var u = !0
                        , C = document.createTextNode("");
                      new r(s).observe(C, {
                          characterData: !0
                      }),
                      o = function() {
                          C.data = u = !u
                      }
                  }
                  return function(n) {
                      var i = {
                          fn: n,
                          next: void 0
                      };
                      t && (t.next = i),
                      e || (e = i,
                      o()),
                      t = i
                  }
              }
          }
          ,
          3499: (e,t,o)=>{
              "use strict";
              var n = o(4963);
              function i(e) {
                  var t, o;
                  this.promise = new e((function(e, n) {
                      if (void 0 !== t || void 0 !== o)
                          throw TypeError("Bad Promise constructor");
                      t = e,
                      o = n
                  }
                  )),
                  this.resolve = n(t),
                  this.reject = n(o)
              }
              e.exports.f = function(e) {
                  return new i(e)
              }
          }
          ,
          2503: (e,t,o)=>{
              var n = o(7007)
                , i = o(5588)
                , r = o(4430)
                , A = o(9335)("IE_PROTO")
                , a = function() {}
                , g = function() {
                  var e, t = o(2457)("iframe"), n = r.length;
                  for (t.style.display = "none",
                  o(639).appendChild(t),
                  t.src = "javascript:",
                  (e = t.contentWindow.document).open(),
                  e.write("<script>document.F=Object<\/script>"),
                  e.close(),
                  g = e.F; n--; )
                      delete g.prototype[r[n]];
                  return g()
              };
              e.exports = Object.create || function(e, t) {
                  var o;
                  return null !== e ? (a.prototype = n(e),
                  o = new a,
                  a.prototype = null,
                  o[A] = e) : o = g(),
                  void 0 === t ? o : i(o, t)
              }
          }
          ,
          9275: (e,t,o)=>{
              var n = o(7007)
                , i = o(1734)
                , r = o(1689)
                , A = Object.defineProperty;
              t.f = o(7057) ? Object.defineProperty : function(e, t, o) {
                  if (n(e),
                  t = r(t, !0),
                  n(o),
                  i)
                      try {
                          return A(e, t, o)
                      } catch (e) {}
                  if ("get"in o || "set"in o)
                      throw TypeError("Accessors not supported!");
                  return "value"in o && (e[t] = o.value),
                  e
              }
          }
          ,
          5588: (e,t,o)=>{
              var n = o(9275)
                , i = o(7007)
                , r = o(7184);
              e.exports = o(7057) ? Object.defineProperties : function(e, t) {
                  i(e);
                  for (var o, A = r(t), a = A.length, g = 0; a > g; )
                      n.f(e, o = A[g++], t[o]);
                  return e
              }
          }
          ,
          9293: (e,t,o)=>{
              var n = o(4682)
                , i = o(681)
                , r = o(2110)
                , A = o(1689)
                , a = o(9181)
                , g = o(1734)
                , s = Object.getOwnPropertyDescriptor;
              t.f = o(7057) ? s : function(e, t) {
                  if (e = r(e),
                  t = A(t, !0),
                  g)
                      try {
                          return s(e, t)
                      } catch (e) {}
                  if (a(e, t))
                      return i(!n.f.call(e, t), e[t])
              }
          }
          ,
          9327: (e,t,o)=>{
              var n = o(2110)
                , i = o(616).f
                , r = {}.toString
                , A = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
              e.exports.f = function(e) {
                  return A && "[object Window]" == r.call(e) ? function(e) {
                      try {
                          return i(e)
                      } catch (e) {
                          return A.slice()
                      }
                  }(e) : i(n(e))
              }
          }
          ,
          616: (e,t,o)=>{
              var n = o(189)
                , i = o(4430).concat("length", "prototype");
              t.f = Object.getOwnPropertyNames || function(e) {
                  return n(e, i)
              }
          }
          ,
          4548: (e,t)=>{
              t.f = Object.getOwnPropertySymbols
          }
          ,
          468: (e,t,o)=>{
              var n = o(9181)
                , i = o(508)
                , r = o(9335)("IE_PROTO")
                , A = Object.prototype;
              e.exports = Object.getPrototypeOf || function(e) {
                  return e = i(e),
                  n(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? A : null
              }
          }
          ,
          189: (e,t,o)=>{
              var n = o(9181)
                , i = o(2110)
                , r = o(9315)(!1)
                , A = o(9335)("IE_PROTO");
              e.exports = function(e, t) {
                  var o, a = i(e), g = 0, s = [];
                  for (o in a)
                      o != A && n(a, o) && s.push(o);
                  for (; t.length > g; )
                      n(a, o = t[g++]) && (~r(s, o) || s.push(o));
                  return s
              }
          }
          ,
          7184: (e,t,o)=>{
              var n = o(189)
                , i = o(4430);
              e.exports = Object.keys || function(e) {
                  return n(e, i)
              }
          }
          ,
          4682: (e,t)=>{
              t.f = {}.propertyIsEnumerable
          }
          ,
          3160: (e,t,o)=>{
              var n = o(2985)
                , i = o(5645)
                , r = o(4253);
              e.exports = function(e, t) {
                  var o = (i.Object || {})[e] || Object[e]
                    , A = {};
                  A[e] = t(o),
                  n(n.S + n.F * r((function() {
                      o(1)
                  }
                  )), "Object", A)
              }
          }
          ,
          7643: (e,t,o)=>{
              var n = o(616)
                , i = o(4548)
                , r = o(7007)
                , A = o(3816).Reflect;
              e.exports = A && A.ownKeys || function(e) {
                  var t = n.f(r(e))
                    , o = i.f;
                  return o ? t.concat(o(e)) : t
              }
          }
          ,
          188: e=>{
              e.exports = function(e) {
                  try {
                      return {
                          e: !1,
                          v: e()
                      }
                  } catch (e) {
                      return {
                          e: !0,
                          v: e
                      }
                  }
              }
          }
          ,
          94: (e,t,o)=>{
              var n = o(7007)
                , i = o(5286)
                , r = o(3499);
              e.exports = function(e, t) {
                  if (n(e),
                  i(t) && t.constructor === e)
                      return t;
                  var o = r.f(e);
                  return (0,
                  o.resolve)(t),
                  o.promise
              }
          }
          ,
          681: e=>{
              e.exports = function(e, t) {
                  return {
                      enumerable: !(1 & e),
                      configurable: !(2 & e),
                      writable: !(4 & e),
                      value: t
                  }
              }
          }
          ,
          4408: (e,t,o)=>{
              var n = o(7234);
              e.exports = function(e, t, o) {
                  for (var i in t)
                      n(e, i, t[i], o);
                  return e
              }
          }
          ,
          7234: (e,t,o)=>{
              var n = o(3816)
                , i = o(7728)
                , r = o(9181)
                , A = o(3953)("src")
                , a = o(18)
                , g = "toString"
                , s = ("" + a).split(g);
              o(5645).inspectSource = function(e) {
                  return a.call(e)
              }
              ,
              (e.exports = function(e, t, o, a) {
                  var g = "function" == typeof o;
                  g && (r(o, "name") || i(o, "name", t)),
                  e[t] !== o && (g && (r(o, A) || i(o, A, e[t] ? "" + e[t] : s.join(String(t)))),
                  e === n ? e[t] = o : a ? e[t] ? e[t] = o : i(e, t, o) : (delete e[t],
                  i(e, t, o)))
              }
              )(Function.prototype, g, (function() {
                  return "function" == typeof this && this[A] || a.call(this)
              }
              ))
          }
          ,
          7787: (e,t,o)=>{
              "use strict";
              var n = o(1488)
                , i = RegExp.prototype.exec;
              e.exports = function(e, t) {
                  var o = e.exec;
                  if ("function" == typeof o) {
                      var r = o.call(e, t);
                      if ("object" != typeof r)
                          throw new TypeError("RegExp exec method returned something other than an Object or null");
                      return r
                  }
                  if ("RegExp" !== n(e))
                      throw new TypeError("RegExp#exec called on incompatible receiver");
                  return i.call(e, t)
              }
          }
          ,
          1165: (e,t,o)=>{
              "use strict";
              var n, i, r = o(3218), A = RegExp.prototype.exec, a = String.prototype.replace, g = A, s = (n = /a/,
              i = /b*/g,
              A.call(n, "a"),
              A.call(i, "a"),
              0 !== n.lastIndex || 0 !== i.lastIndex), c = void 0 !== /()??/.exec("")[1];
              (s || c) && (g = function(e) {
                  var t, o, n, i, g = this;
                  return c && (o = new RegExp("^" + g.source + "$(?!\\s)",r.call(g))),
                  s && (t = g.lastIndex),
                  n = A.call(g, e),
                  s && n && (g.lastIndex = g.global ? n.index + n[0].length : t),
                  c && n && n.length > 1 && a.call(n[0], o, (function() {
                      for (i = 1; i < arguments.length - 2; i++)
                          void 0 === arguments[i] && (n[i] = void 0)
                  }
                  )),
                  n
              }
              ),
              e.exports = g
          }
          ,
          7195: e=>{
              e.exports = Object.is || function(e, t) {
                  return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
              }
          }
          ,
          7375: (e,t,o)=>{
              var n = o(5286)
                , i = o(7007)
                , r = function(e, t) {
                  if (i(e),
                  !n(t) && null !== t)
                      throw TypeError(t + ": can't set as prototype!")
              };
              e.exports = {
                  set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, t, n) {
                      try {
                          (n = o(741)(Function.call, o(9293).f(Object.prototype, "__proto__").set, 2))(e, []),
                          t = !(e instanceof Array)
                      } catch (e) {
                          t = !0
                      }
                      return function(e, o) {
                          return r(e, o),
                          t ? e.__proto__ = o : n(e, o),
                          e
                      }
                  }({}, !1) : void 0),
                  check: r
              }
          }
          ,
          2974: (e,t,o)=>{
              "use strict";
              var n = o(3816)
                , i = o(9275)
                , r = o(7057)
                , A = o(6314)("species");
              e.exports = function(e) {
                  var t = n[e];
                  r && t && !t[A] && i.f(t, A, {
                      configurable: !0,
                      get: function() {
                          return this
                      }
                  })
              }
          }
          ,
          2943: (e,t,o)=>{
              var n = o(9275).f
                , i = o(9181)
                , r = o(6314)("toStringTag");
              e.exports = function(e, t, o) {
                  e && !i(e = o ? e : e.prototype, r) && n(e, r, {
                      configurable: !0,
                      value: t
                  })
              }
          }
          ,
          9335: (e,t,o)=>{
              var n = o(3825)("keys")
                , i = o(3953);
              e.exports = function(e) {
                  return n[e] || (n[e] = i(e))
              }
          }
          ,
          3825: (e,t,o)=>{
              var n = o(5645)
                , i = o(3816)
                , r = "__core-js_shared__"
                , A = i[r] || (i[r] = {});
              (e.exports = function(e, t) {
                  return A[e] || (A[e] = void 0 !== t ? t : {})
              }
              )("versions", []).push({
                  version: n.version,
                  mode: o(4461) ? "pure" : "global",
                  copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
              })
          }
          ,
          8364: (e,t,o)=>{
              var n = o(7007)
                , i = o(4963)
                , r = o(6314)("species");
              e.exports = function(e, t) {
                  var o, A = n(e).constructor;
                  return void 0 === A || null == (o = n(A)[r]) ? t : i(o)
              }
          }
          ,
          7717: (e,t,o)=>{
              "use strict";
              var n = o(4253);
              e.exports = function(e, t) {
                  return !!e && n((function() {
                      t ? e.call(null, (function() {}
                      ), 1) : e.call(null)
                  }
                  ))
              }
          }
          ,
          4496: (e,t,o)=>{
              var n = o(1467)
                , i = o(1355);
              e.exports = function(e) {
                  return function(t, o) {
                      var r, A, a = String(i(t)), g = n(o), s = a.length;
                      return g < 0 || g >= s ? e ? "" : void 0 : (r = a.charCodeAt(g)) < 55296 || r > 56319 || g + 1 === s || (A = a.charCodeAt(g + 1)) < 56320 || A > 57343 ? e ? a.charAt(g) : r : e ? a.slice(g, g + 2) : A - 56320 + (r - 55296 << 10) + 65536
                  }
              }
          }
          ,
          4193: (e,t,o)=>{
              var n, i, r, A = o(741), a = o(7242), g = o(639), s = o(2457), c = o(3816), u = c.process, C = c.setImmediate, l = c.clearImmediate, I = c.MessageChannel, E = c.Dispatch, f = 0, p = {}, d = function() {
                  var e = +this;
                  if (p.hasOwnProperty(e)) {
                      var t = p[e];
                      delete p[e],
                      t()
                  }
              }, K = function(e) {
                  d.call(e.data)
              };
              C && l || (C = function(e) {
                  for (var t = [], o = 1; arguments.length > o; )
                      t.push(arguments[o++]);
                  return p[++f] = function() {
                      a("function" == typeof e ? e : Function(e), t)
                  }
                  ,
                  n(f),
                  f
              }
              ,
              l = function(e) {
                  delete p[e]
              }
              ,
              "process" == o(2032)(u) ? n = function(e) {
                  u.nextTick(A(d, e, 1))
              }
              : E && E.now ? n = function(e) {
                  E.now(A(d, e, 1))
              }
              : I ? (r = (i = new I).port2,
              i.port1.onmessage = K,
              n = A(r.postMessage, r, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (n = function(e) {
                  c.postMessage(e + "", "*")
              }
              ,
              c.addEventListener("message", K, !1)) : n = "onreadystatechange"in s("script") ? function(e) {
                  g.appendChild(s("script")).onreadystatechange = function() {
                      g.removeChild(this),
                      d.call(e)
                  }
              }
              : function(e) {
                  setTimeout(A(d, e, 1), 0)
              }
              ),
              e.exports = {
                  set: C,
                  clear: l
              }
          }
          ,
          2337: (e,t,o)=>{
              var n = o(1467)
                , i = Math.max
                , r = Math.min;
              e.exports = function(e, t) {
                  return (e = n(e)) < 0 ? i(e + t, 0) : r(e, t)
              }
          }
          ,
          1467: e=>{
              var t = Math.ceil
                , o = Math.floor;
              e.exports = function(e) {
                  return isNaN(e = +e) ? 0 : (e > 0 ? o : t)(e)
              }
          }
          ,
          2110: (e,t,o)=>{
              var n = o(9797)
                , i = o(1355);
              e.exports = function(e) {
                  return n(i(e))
              }
          }
          ,
          875: (e,t,o)=>{
              var n = o(1467)
                , i = Math.min;
              e.exports = function(e) {
                  return e > 0 ? i(n(e), 9007199254740991) : 0
              }
          }
          ,
          508: (e,t,o)=>{
              var n = o(1355);
              e.exports = function(e) {
                  return Object(n(e))
              }
          }
          ,
          1689: (e,t,o)=>{
              var n = o(5286);
              e.exports = function(e, t) {
                  if (!n(e))
                      return e;
                  var o, i;
                  if (t && "function" == typeof (o = e.toString) && !n(i = o.call(e)))
                      return i;
                  if ("function" == typeof (o = e.valueOf) && !n(i = o.call(e)))
                      return i;
                  if (!t && "function" == typeof (o = e.toString) && !n(i = o.call(e)))
                      return i;
                  throw TypeError("Can't convert object to primitive value")
              }
          }
          ,
          3953: e=>{
              var t = 0
                , o = Math.random();
              e.exports = function(e) {
                  return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + o).toString(36))
              }
          }
          ,
          575: (e,t,o)=>{
              var n = o(3816).navigator;
              e.exports = n && n.userAgent || ""
          }
          ,
          6074: (e,t,o)=>{
              var n = o(3816)
                , i = o(5645)
                , r = o(4461)
                , A = o(8787)
                , a = o(9275).f;
              e.exports = function(e) {
                  var t = i.Symbol || (i.Symbol = r ? {} : n.Symbol || {});
                  "_" == e.charAt(0) || e in t || a(t, e, {
                      value: A.f(e)
                  })
              }
          }
          ,
          8787: (e,t,o)=>{
              t.f = o(6314)
          }
          ,
          6314: (e,t,o)=>{
              var n = o(3825)("wks")
                , i = o(3953)
                , r = o(3816).Symbol
                , A = "function" == typeof r;
              (e.exports = function(e) {
                  return n[e] || (n[e] = A && r[e] || (A ? r : i)("Symbol." + e))
              }
              ).store = n
          }
          ,
          9002: (e,t,o)=>{
              var n = o(1488)
                , i = o(6314)("iterator")
                , r = o(2803);
              e.exports = o(5645).getIteratorMethod = function(e) {
                  if (null != e)
                      return e[i] || e["@@iterator"] || r[n(e)]
              }
          }
          ,
          8837: (e,t,o)=>{
              "use strict";
              var n = o(2985)
                , i = o(50)(2);
              n(n.P + n.F * !o(7717)([].filter, !0), "Array", {
                  filter: function(e) {
                      return i(this, e, arguments[1])
                  }
              })
          }
          ,
          6997: (e,t,o)=>{
              "use strict";
              var n = o(7722)
                , i = o(5436)
                , r = o(2803)
                , A = o(2110);
              e.exports = o(2923)(Array, "Array", (function(e, t) {
                  this._t = A(e),
                  this._i = 0,
                  this._k = t
              }
              ), (function() {
                  var e = this._t
                    , t = this._k
                    , o = this._i++;
                  return !e || o >= e.length ? (this._t = void 0,
                  i(1)) : i(0, "keys" == t ? o : "values" == t ? e[o] : [o, e[o]])
              }
              ), "values"),
              r.Arguments = r.Array,
              n("keys"),
              n("values"),
              n("entries")
          }
          ,
          6059: (e,t,o)=>{
              var n = o(9275).f
                , i = Function.prototype
                , r = /^\s*function ([^ (]*)/
                , A = "name";
              A in i || o(7057) && n(i, A, {
                  configurable: !0,
                  get: function() {
                      try {
                          return ("" + this).match(r)[1]
                      } catch (e) {
                          return ""
                      }
                  }
              })
          }
          ,
          4882: (e,t,o)=>{
              var n = o(2110)
                , i = o(9293).f;
              o(3160)("getOwnPropertyDescriptor", (function() {
                  return function(e, t) {
                      return i(n(e), t)
                  }
              }
              ))
          }
          ,
          7476: (e,t,o)=>{
              var n = o(508)
                , i = o(7184);
              o(3160)("keys", (function() {
                  return function(e) {
                      return i(n(e))
                  }
              }
              ))
          }
          ,
          6253: (e,t,o)=>{
              "use strict";
              var n = o(1488)
                , i = {};
              i[o(6314)("toStringTag")] = "z",
              i + "" != "[object z]" && o(7234)(Object.prototype, "toString", (function() {
                  return "[object " + n(this) + "]"
              }
              ), !0)
          }
          ,
          851: (e,t,o)=>{
              "use strict";
              var n, i, r, A, a = o(4461), g = o(3816), s = o(741), c = o(1488), u = o(2985), C = o(5286), l = o(4963), I = o(3328), E = o(3531), f = o(8364), p = o(4193).set, d = o(4351)(), K = o(3499), v = o(188), _ = o(575), h = o(94), O = "Promise", m = g.TypeError, R = g.process, y = R && R.versions, D = y && y.v8 || "", T = g.Promise, S = "process" == c(R), b = function() {}, x = i = K.f, N = !!function() {
                  try {
                      var e = T.resolve(1)
                        , t = (e.constructor = {})[o(6314)("species")] = function(e) {
                          e(b, b)
                      }
                      ;
                      return (S || "function" == typeof PromiseRejectionEvent) && e.then(b)instanceof t && 0 !== D.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
                  } catch (e) {}
              }(), w = function(e) {
                  var t;
                  return !(!C(e) || "function" != typeof (t = e.then)) && t
              }, L = function(e, t) {
                  if (!e._n) {
                      e._n = !0;
                      var o = e._c;
                      d((function() {
                          for (var n = e._v, i = 1 == e._s, r = 0, A = function(t) {
                              var o, r, A, a = i ? t.ok : t.fail, g = t.resolve, s = t.reject, c = t.domain;
                              try {
                                  a ? (i || (2 == e._h && F(e),
                                  e._h = 1),
                                  !0 === a ? o = n : (c && c.enter(),
                                  o = a(n),
                                  c && (c.exit(),
                                  A = !0)),
                                  o === t.promise ? s(m("Promise-chain cycle")) : (r = w(o)) ? r.call(o, g, s) : g(o)) : s(n)
                              } catch (e) {
                                  c && !A && c.exit(),
                                  s(e)
                              }
                          }; o.length > r; )
                              A(o[r++]);
                          e._c = [],
                          e._n = !1,
                          t && !e._h && U(e)
                      }
                      ))
                  }
              }, U = function(e) {
                  p.call(g, (function() {
                      var t, o, n, i = e._v, r = P(e);
                      if (r && (t = v((function() {
                          S ? R.emit("unhandledRejection", i, e) : (o = g.onunhandledrejection) ? o({
                              promise: e,
                              reason: i
                          }) : (n = g.console) && n.error && n.error("Unhandled promise rejection", i)
                      }
                      )),
                      e._h = S || P(e) ? 2 : 1),
                      e._a = void 0,
                      r && t.e)
                          throw t.v
                  }
                  ))
              }, P = function(e) {
                  return 1 !== e._h && 0 === (e._a || e._c).length
              }, F = function(e) {
                  p.call(g, (function() {
                      var t;
                      S ? R.emit("rejectionHandled", e) : (t = g.onrejectionhandled) && t({
                          promise: e,
                          reason: e._v
                      })
                  }
                  ))
              }, M = function(e) {
                  var t = this;
                  t._d || (t._d = !0,
                  (t = t._w || t)._v = e,
                  t._s = 2,
                  t._a || (t._a = t._c.slice()),
                  L(t, !0))
              }, j = function(e) {
                  var t, o = this;
                  if (!o._d) {
                      o._d = !0,
                      o = o._w || o;
                      try {
                          if (o === e)
                              throw m("Promise can't be resolved itself");
                          (t = w(e)) ? d((function() {
                              var n = {
                                  _w: o,
                                  _d: !1
                              };
                              try {
                                  t.call(e, s(j, n, 1), s(M, n, 1))
                              } catch (e) {
                                  M.call(n, e)
                              }
                          }
                          )) : (o._v = e,
                          o._s = 1,
                          L(o, !1))
                      } catch (e) {
                          M.call({
                              _w: o,
                              _d: !1
                          }, e)
                      }
                  }
              };
              N || (T = function(e) {
                  I(this, T, O, "_h"),
                  l(e),
                  n.call(this);
                  try {
                      e(s(j, this, 1), s(M, this, 1))
                  } catch (e) {
                      M.call(this, e)
                  }
              }
              ,
              (n = function(e) {
                  this._c = [],
                  this._a = void 0,
                  this._s = 0,
                  this._d = !1,
                  this._v = void 0,
                  this._h = 0,
                  this._n = !1
              }
              ).prototype = o(4408)(T.prototype, {
                  then: function(e, t) {
                      var o = x(f(this, T));
                      return o.ok = "function" != typeof e || e,
                      o.fail = "function" == typeof t && t,
                      o.domain = S ? R.domain : void 0,
                      this._c.push(o),
                      this._a && this._a.push(o),
                      this._s && L(this, !1),
                      o.promise
                  },
                  catch: function(e) {
                      return this.then(void 0, e)
                  }
              }),
              r = function() {
                  var e = new n;
                  this.promise = e,
                  this.resolve = s(j, e, 1),
                  this.reject = s(M, e, 1)
              }
              ,
              K.f = x = function(e) {
                  return e === T || e === A ? new r(e) : i(e)
              }
              ),
              u(u.G + u.W + u.F * !N, {
                  Promise: T
              }),
              o(2943)(T, O),
              o(2974)(O),
              A = o(5645).Promise,
              u(u.S + u.F * !N, O, {
                  reject: function(e) {
                      var t = x(this);
                      return (0,
                      t.reject)(e),
                      t.promise
                  }
              }),
              u(u.S + u.F * (a || !N), O, {
                  resolve: function(e) {
                      return h(a && this === A ? T : this, e)
                  }
              }),
              u(u.S + u.F * !(N && o(7462)((function(e) {
                  T.all(e).catch(b)
              }
              ))), O, {
                  all: function(e) {
                      var t = this
                        , o = x(t)
                        , n = o.resolve
                        , i = o.reject
                        , r = v((function() {
                          var o = []
                            , r = 0
                            , A = 1;
                          E(e, !1, (function(e) {
                              var a = r++
                                , g = !1;
                              o.push(void 0),
                              A++,
                              t.resolve(e).then((function(e) {
                                  g || (g = !0,
                                  o[a] = e,
                                  --A || n(o))
                              }
                              ), i)
                          }
                          )),
                          --A || n(o)
                      }
                      ));
                      return r.e && i(r.v),
                      o.promise
                  },
                  race: function(e) {
                      var t = this
                        , o = x(t)
                        , n = o.reject
                        , i = v((function() {
                          E(e, !1, (function(e) {
                              t.resolve(e).then(o.resolve, n)
                          }
                          ))
                      }
                      ));
                      return i.e && n(i.v),
                      o.promise
                  }
              })
          }
          ,
          3946: (e,t,o)=>{
              var n = o(3816)
                , i = o(266)
                , r = o(9275).f
                , A = o(616).f
                , a = o(5364)
                , g = o(3218)
                , s = n.RegExp
                , c = s
                , u = s.prototype
                , C = /a/g
                , l = /a/g
                , I = new s(C) !== C;
              if (o(7057) && (!I || o(4253)((function() {
                  return l[o(6314)("match")] = !1,
                  s(C) != C || s(l) == l || "/a/i" != s(C, "i")
              }
              )))) {
                  s = function(e, t) {
                      var o = this instanceof s
                        , n = a(e)
                        , r = void 0 === t;
                      return !o && n && e.constructor === s && r ? e : i(I ? new c(n && !r ? e.source : e,t) : c((n = e instanceof s) ? e.source : e, n && r ? g.call(e) : t), o ? this : u, s)
                  }
                  ;
                  for (var E = function(e) {
                      e in s || r(s, e, {
                          configurable: !0,
                          get: function() {
                              return c[e]
                          },
                          set: function(t) {
                              c[e] = t
                          }
                      })
                  }, f = A(c), p = 0; f.length > p; )
                      E(f[p++]);
                  u.constructor = s,
                  s.prototype = u,
                  o(7234)(n, "RegExp", s)
              }
              o(2974)("RegExp")
          }
          ,
          8269: (e,t,o)=>{
              "use strict";
              var n = o(1165);
              o(2985)({
                  target: "RegExp",
                  proto: !0,
                  forced: n !== /./.exec
              }, {
                  exec: n
              })
          }
          ,
          1466: (e,t,o)=>{
              "use strict";
              var n = o(7007)
                , i = o(875)
                , r = o(6793)
                , A = o(7787);
              o(8082)("match", 1, (function(e, t, o, a) {
                  return [function(o) {
                      var n = e(this)
                        , i = null == o ? void 0 : o[t];
                      return void 0 !== i ? i.call(o, n) : new RegExp(o)[t](String(n))
                  }
                  , function(e) {
                      var t = a(o, e, this);
                      if (t.done)
                          return t.value;
                      var g = n(e)
                        , s = String(this);
                      if (!g.global)
                          return A(g, s);
                      var c = g.unicode;
                      g.lastIndex = 0;
                      for (var u, C = [], l = 0; null !== (u = A(g, s)); ) {
                          var I = String(u[0]);
                          C[l] = I,
                          "" === I && (g.lastIndex = r(s, i(g.lastIndex), c)),
                          l++
                      }
                      return 0 === l ? null : C
                  }
                  ]
              }
              ))
          }
          ,
          6142: (e,t,o)=>{
              "use strict";
              var n = o(7007)
                , i = o(7195)
                , r = o(7787);
              o(8082)("search", 1, (function(e, t, o, A) {
                  return [function(o) {
                      var n = e(this)
                        , i = null == o ? void 0 : o[t];
                      return void 0 !== i ? i.call(o, n) : new RegExp(o)[t](String(n))
                  }
                  , function(e) {
                      var t = A(o, e, this);
                      if (t.done)
                          return t.value;
                      var a = n(e)
                        , g = String(this)
                        , s = a.lastIndex;
                      i(s, 0) || (a.lastIndex = 0);
                      var c = r(a, g);
                      return i(a.lastIndex, s) || (a.lastIndex = s),
                      null === c ? -1 : c.index
                  }
                  ]
              }
              ))
          }
          ,
          1876: (e,t,o)=>{
              "use strict";
              var n = o(5364)
                , i = o(7007)
                , r = o(8364)
                , A = o(6793)
                , a = o(875)
                , g = o(7787)
                , s = o(1165)
                , c = o(4253)
                , u = Math.min
                , C = [].push
                , l = 4294967295
                , I = !c((function() {
                  RegExp(l, "y")
              }
              ));
              o(8082)("split", 2, (function(e, t, o, c) {
                  var E;
                  return E = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, t) {
                      var i = String(this);
                      if (void 0 === e && 0 === t)
                          return [];
                      if (!n(e))
                          return o.call(i, e, t);
                      for (var r, A, a, g = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, I = void 0 === t ? l : t >>> 0, E = new RegExp(e.source,c + "g"); (r = s.call(E, i)) && !((A = E.lastIndex) > u && (g.push(i.slice(u, r.index)),
                      r.length > 1 && r.index < i.length && C.apply(g, r.slice(1)),
                      a = r[0].length,
                      u = A,
                      g.length >= I)); )
                          E.lastIndex === r.index && E.lastIndex++;
                      return u === i.length ? !a && E.test("") || g.push("") : g.push(i.slice(u)),
                      g.length > I ? g.slice(0, I) : g
                  }
                  : "0".split(void 0, 0).length ? function(e, t) {
                      return void 0 === e && 0 === t ? [] : o.call(this, e, t)
                  }
                  : o,
                  [function(o, n) {
                      var i = e(this)
                        , r = null == o ? void 0 : o[t];
                      return void 0 !== r ? r.call(o, i, n) : E.call(String(i), o, n)
                  }
                  , function(e, t) {
                      var n = c(E, e, this, t, E !== o);
                      if (n.done)
                          return n.value;
                      var s = i(e)
                        , C = String(this)
                        , f = r(s, RegExp)
                        , p = s.unicode
                        , d = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (I ? "y" : "g")
                        , K = new f(I ? s : "^(?:" + s.source + ")",d)
                        , v = void 0 === t ? l : t >>> 0;
                      if (0 === v)
                          return [];
                      if (0 === C.length)
                          return null === g(K, C) ? [C] : [];
                      for (var _ = 0, h = 0, O = []; h < C.length; ) {
                          K.lastIndex = I ? h : 0;
                          var m, R = g(K, I ? C : C.slice(h));
                          if (null === R || (m = u(a(K.lastIndex + (I ? 0 : h)), C.length)) === _)
                              h = A(C, h, p);
                          else {
                              if (O.push(C.slice(_, h)),
                              O.length === v)
                                  return O;
                              for (var y = 1; y <= R.length - 1; y++)
                                  if (O.push(R[y]),
                                  O.length === v)
                                      return O;
                              h = _ = m
                          }
                      }
                      return O.push(C.slice(_)),
                      O
                  }
                  ]
              }
              ))
          }
          ,
          9115: (e,t,o)=>{
              "use strict";
              var n = o(4496)(!0);
              o(2923)(String, "String", (function(e) {
                  this._t = String(e),
                  this._i = 0
              }
              ), (function() {
                  var e, t = this._t, o = this._i;
                  return o >= t.length ? {
                      value: void 0,
                      done: !0
                  } : (e = n(t, o),
                  this._i += e.length,
                  {
                      value: e,
                      done: !1
                  })
              }
              ))
          }
          ,
          5767: (e,t,o)=>{
              "use strict";
              var n = o(3816)
                , i = o(9181)
                , r = o(7057)
                , A = o(2985)
                , a = o(7234)
                , g = o(4728).KEY
                , s = o(4253)
                , c = o(3825)
                , u = o(2943)
                , C = o(3953)
                , l = o(6314)
                , I = o(8787)
                , E = o(6074)
                , f = o(5541)
                , p = o(4302)
                , d = o(7007)
                , K = o(5286)
                , v = o(508)
                , _ = o(2110)
                , h = o(1689)
                , O = o(681)
                , m = o(2503)
                , R = o(9327)
                , y = o(9293)
                , D = o(4548)
                , T = o(9275)
                , S = o(7184)
                , b = y.f
                , x = T.f
                , N = R.f
                , w = n.Symbol
                , L = n.JSON
                , U = L && L.stringify
                , P = l("_hidden")
                , F = l("toPrimitive")
                , M = {}.propertyIsEnumerable
                , j = c("symbol-registry")
                , G = c("symbols")
                , B = c("op-symbols")
                , k = Object.prototype
                , H = "function" == typeof w && !!D.f
                , V = n.QObject
                , W = !V || !V.prototype || !V.prototype.findChild
                , Q = r && s((function() {
                  return 7 != m(x({}, "a", {
                      get: function() {
                          return x(this, "a", {
                              value: 7
                          }).a
                      }
                  })).a
              }
              )) ? function(e, t, o) {
                  var n = b(k, t);
                  n && delete k[t],
                  x(e, t, o),
                  n && e !== k && x(k, t, n)
              }
              : x
                , Y = function(e) {
                  var t = G[e] = m(w.prototype);
                  return t._k = e,
                  t
              }
                , z = H && "symbol" == typeof w.iterator ? function(e) {
                  return "symbol" == typeof e
              }
              : function(e) {
                  return e instanceof w
              }
                , X = function(e, t, o) {
                  return e === k && X(B, t, o),
                  d(e),
                  t = h(t, !0),
                  d(o),
                  i(G, t) ? (o.enumerable ? (i(e, P) && e[P][t] && (e[P][t] = !1),
                  o = m(o, {
                      enumerable: O(0, !1)
                  })) : (i(e, P) || x(e, P, O(1, {})),
                  e[P][t] = !0),
                  Q(e, t, o)) : x(e, t, o)
              }
                , J = function(e, t) {
                  d(e);
                  for (var o, n = f(t = _(t)), i = 0, r = n.length; r > i; )
                      X(e, o = n[i++], t[o]);
                  return e
              }
                , q = function(e) {
                  var t = M.call(this, e = h(e, !0));
                  return !(this === k && i(G, e) && !i(B, e)) && (!(t || !i(this, e) || !i(G, e) || i(this, P) && this[P][e]) || t)
              }
                , Z = function(e, t) {
                  if (e = _(e),
                  t = h(t, !0),
                  e !== k || !i(G, t) || i(B, t)) {
                      var o = b(e, t);
                      return !o || !i(G, t) || i(e, P) && e[P][t] || (o.enumerable = !0),
                      o
                  }
              }
                , $ = function(e) {
                  for (var t, o = N(_(e)), n = [], r = 0; o.length > r; )
                      i(G, t = o[r++]) || t == P || t == g || n.push(t);
                  return n
              }
                , ee = function(e) {
                  for (var t, o = e === k, n = N(o ? B : _(e)), r = [], A = 0; n.length > A; )
                      !i(G, t = n[A++]) || o && !i(k, t) || r.push(G[t]);
                  return r
              };
              H || (w = function() {
                  if (this instanceof w)
                      throw TypeError("Symbol is not a constructor!");
                  var e = C(arguments.length > 0 ? arguments[0] : void 0)
                    , t = function(o) {
                      this === k && t.call(B, o),
                      i(this, P) && i(this[P], e) && (this[P][e] = !1),
                      Q(this, e, O(1, o))
                  };
                  return r && W && Q(k, e, {
                      configurable: !0,
                      set: t
                  }),
                  Y(e)
              }
              ,
              a(w.prototype, "toString", (function() {
                  return this._k
              }
              )),
              y.f = Z,
              T.f = X,
              o(616).f = R.f = $,
              o(4682).f = q,
              D.f = ee,
              r && !o(4461) && a(k, "propertyIsEnumerable", q, !0),
              I.f = function(e) {
                  return Y(l(e))
              }
              ),
              A(A.G + A.W + A.F * !H, {
                  Symbol: w
              });
              for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), oe = 0; te.length > oe; )
                  l(te[oe++]);
              for (var ne = S(l.store), ie = 0; ne.length > ie; )
                  E(ne[ie++]);
              A(A.S + A.F * !H, "Symbol", {
                  for: function(e) {
                      return i(j, e += "") ? j[e] : j[e] = w(e)
                  },
                  keyFor: function(e) {
                      if (!z(e))
                          throw TypeError(e + " is not a symbol!");
                      for (var t in j)
                          if (j[t] === e)
                              return t
                  },
                  useSetter: function() {
                      W = !0
                  },
                  useSimple: function() {
                      W = !1
                  }
              }),
              A(A.S + A.F * !H, "Object", {
                  create: function(e, t) {
                      return void 0 === t ? m(e) : J(m(e), t)
                  },
                  defineProperty: X,
                  defineProperties: J,
                  getOwnPropertyDescriptor: Z,
                  getOwnPropertyNames: $,
                  getOwnPropertySymbols: ee
              });
              var re = s((function() {
                  D.f(1)
              }
              ));
              A(A.S + A.F * re, "Object", {
                  getOwnPropertySymbols: function(e) {
                      return D.f(v(e))
                  }
              }),
              L && A(A.S + A.F * (!H || s((function() {
                  var e = w();
                  return "[null]" != U([e]) || "{}" != U({
                      a: e
                  }) || "{}" != U(Object(e))
              }
              ))), "JSON", {
                  stringify: function(e) {
                      for (var t, o, n = [e], i = 1; arguments.length > i; )
                          n.push(arguments[i++]);
                      if (o = t = n[1],
                      (K(t) || void 0 !== e) && !z(e))
                          return p(t) || (t = function(e, t) {
                              if ("function" == typeof o && (t = o.call(this, e, t)),
                              !z(t))
                                  return t
                          }
                          ),
                          n[1] = t,
                          U.apply(L, n)
                  }
              }),
              w.prototype[F] || o(7728)(w.prototype, F, w.prototype.valueOf),
              u(w, "Symbol"),
              u(Math, "Math", !0),
              u(n.JSON, "JSON", !0)
          }
          ,
          8351: (e,t,o)=>{
              var n = o(2985)
                , i = o(7643)
                , r = o(2110)
                , A = o(9293)
                , a = o(2811);
              n(n.S, "Object", {
                  getOwnPropertyDescriptors: function(e) {
                      for (var t, o, n = r(e), g = A.f, s = i(n), c = {}, u = 0; s.length > u; )
                          void 0 !== (o = g(n, t = s[u++])) && a(c, t, o);
                      return c
                  }
              })
          }
          ,
          1181: (e,t,o)=>{
              for (var n = o(6997), i = o(7184), r = o(7234), A = o(3816), a = o(7728), g = o(2803), s = o(6314), c = s("iterator"), u = s("toStringTag"), C = g.Array, l = {
                  CSSRuleList: !0,
                  CSSStyleDeclaration: !1,
                  CSSValueList: !1,
                  ClientRectList: !1,
                  DOMRectList: !1,
                  DOMStringList: !1,
                  DOMTokenList: !0,
                  DataTransferItemList: !1,
                  FileList: !1,
                  HTMLAllCollection: !1,
                  HTMLCollection: !1,
                  HTMLFormElement: !1,
                  HTMLSelectElement: !1,
                  MediaList: !0,
                  MimeTypeArray: !1,
                  NamedNodeMap: !1,
                  NodeList: !0,
                  PaintRequestList: !1,
                  Plugin: !1,
                  PluginArray: !1,
                  SVGLengthList: !1,
                  SVGNumberList: !1,
                  SVGPathSegList: !1,
                  SVGPointList: !1,
                  SVGStringList: !1,
                  SVGTransformList: !1,
                  SourceBufferList: !1,
                  StyleSheetList: !0,
                  TextTrackCueList: !1,
                  TextTrackList: !1,
                  TouchList: !1
              }, I = i(l), E = 0; E < I.length; E++) {
                  var f, p = I[E], d = l[p], K = A[p], v = K && K.prototype;
                  if (v && (v[c] || a(v, c, C),
                  v[u] || a(v, u, p),
                  g[p] = C,
                  d))
                      for (f in n)
                          v[f] || r(v, f, n[f], !0)
              }
          }
      }
        , t = {};
      function o(n) {
          var i = t[n];
          if (void 0 !== i)
              return i.exports;
          var r = t[n] = {
              exports: {}
          };
          return e[n](r, r.exports, o),
          r.exports
      }
      o.n = e=>{
          var t = e && e.__esModule ? ()=>e.default : ()=>e;
          return o.d(t, {
              a: t
          }),
          t
      }
      ,
      o.d = (e,t)=>{
          for (var n in t)
              o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
                  enumerable: !0,
                  get: t[n]
              })
      }
      ,
      o.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t);
      var n = {};
      return (()=>{
          "use strict";
          o.d(n, {
              default: ()=>ce
          });
          var e, t, i, r = o(7677), A = o.n(r), a = (o(6142),
          o(1876),
          o(6253),
          o(6997),
          o(1181),
          o(6059),
          o(8837),
          o(851),
          o(7476),
          o(5767),
          o(4882),
          o(8351),
          o(9115),
          o(3667)), g = o.n(a), s = (o(1466),
          function(e) {
              return Object.prototype.toString.call(window && window.GamePix && window.GamePix.on && window.GamePix.on[e]).indexOf("Function") > -1 ? "on." + e : Object.prototype.toString.call(window && window.GamePix && window.GamePix[e]).indexOf("Function") > -1 && e
          }
          ), c = null, u = null, C = function(e, t) {
              var o = document.createElement("div");
              return o.id = e,
              void 0 !== t && o.setAttribute("style", t),
              o
          }, l = function t(o) {
              return clearInterval(u),
              clearTimeout(c),
              document.getElementById("skip-ad").removeEventListener("click", t),
              e.remove(),
              o({
                  success: !0
              })
          };
          function I(e) {
              return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
              ,
              I(e)
          }
          function E(e, t) {
              var o = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  t && (n = n.filter((function(t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable
                  }
                  ))),
                  o.push.apply(o, n)
              }
              return o
          }
          function f(e) {
              for (var t = 1; t < arguments.length; t++) {
                  var o = null != arguments[t] ? arguments[t] : {};
                  t % 2 ? E(Object(o), !0).forEach((function(t) {
                      p(e, t, o[t])
                  }
                  )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : E(Object(o)).forEach((function(t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                  }
                  ))
              }
              return e
          }
          function p(e, t, o) {
              return t in e ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              }) : e[t] = o,
              e
          }
          var d, K, v, _, h = !1, O = 0, m = {
              ready: !1
          };
          window.addEventListener("message", (function(e) {
              switch (e.data.message && e.data.message.toLowerCase() || e.data.type && e.data.type.toLowerCase()) {
              case A().FOCUS.toLowerCase():
                  try {
                      document.getElementsByTagName("canvas")[0].focus(),
                      document.getElementsByTagName("canvas")[0].blur(),
                      console.log("game canvas focused")
                  } catch (e) {
                      console.log("game canvas not focused")
                  }
                  break;
              case A().PLAYER_INFO_EXECUTED.toLowerCase():
                  "gamepix.com" == function(e) {
                      try {
                          return e.match(/https?:\/\/(?:\S+\.)*(\S{3,}(?:\.\S{1,3}){1,2})/)[1]
                      } catch (e) {
                          return ""
                      }
                  }(e.origin) && (m.ready = !0,
                  m.info = function(e) {
                      for (var t in e)
                          if (e.hasOwnProperty(t))
                              return !1;
                      return !0
                  }(e.data.info) ? {} : e.data.info);
                  break;
              case A().LOADED_EXECUTED.toLowerCase():
              case A().GAME_LOADED.toLowerCase():
                  h = !0,
                  d && (d(e.data.data || {}),
                  d = void 0);
                  break;
              case A().PAUSE.toLowerCase():
                  try {
                      var t = s("pause");
                      t ? "pause" == t ? window.GamePix.pause() : window.GamePix.on.pause() : console.log("pause not defined")
                  } catch (e) {
                      console.log(e)
                  }
                  break;
              case A().RESUME.toLowerCase():
                  try {
                      var o = s("resume");
                      o ? "resume" == o ? window.GamePix.resume() : window.GamePix.on.resume() : console.log("pause not defined")
                  } catch (e) {
                      console.log(e)
                  }
                  break;
              case A().SOUND_OFF.toLowerCase():
                  try {
                      var n = s("soundOff");
                      n ? "soundOff" == n ? window.GamePix.soundOff() : window.GamePix.on.soundOff() : R(f({
                          type: A().WARNING
                      }, g().SOUNDOFF_GAME_FUNCTION_HAS_NOT_BEEN_DECLARED))
                  } catch (e) {
                      console.log(e)
                  }
                  break;
              case A().SOUND_ON.toLowerCase():
                  try {
                      var i = s("soundOn");
                      i ? "soundOn" == i ? window.GamePix.soundOn() : window.GamePix.on.soundOn() : R(f({
                          type: A().WARNING
                      }, g().SOUNDON_GAME_FUNCTION_HAS_NOT_BEEN_DECLARED))
                  } catch (e) {
                      console.log(e)
                  }
                  break;
              case A().INTERSTITIAL_AD_EXECUTED.toLowerCase():
                  _({
                      success: e.data.success
                  }),
                  _ = void 0;
                  break;
              case A().REWARD_AD_EXECUTED.toLowerCase():
                  v({
                      success: e.data.success
                  }),
                  v = void 0;
                  break;
              case A().PURCHASE_EXECUTED.toLowerCase():
                  K({
                      success: e.data.success
                  }),
                  K = void 0
              }
          }
          ));
          var R = function(e) {
              e && e.object && (e.object = JSON.stringify(e.object));
              try {
                  window.parent.postMessage(f(f({}, e), {}, {
                      url: window.location.href
                  }), window.name)
              } catch (e) {}
              if (e) {
                  var t = ["GamePix SDK log:", e.type, e.message, e.method, e.object];
                  t = t.filter(Boolean).join(" "),
                  (!m.ready || m.ready && m.info && "GamepixPlayer" != m.info.player) && window && "function" == typeof window.alert && e.type == A().ERROR && window.alert(t)
              }
          }
            , y = function() {
              return new Promise((function(e, t) {
                  return e()
              }
              ))
          }
            , D = function(e) {
              if (!h) {
                  var t = parseInt(e);
                  return "number" != typeof t || t < 0 || t > 100 ? (R(f({
                      type: A().ERROR
                  }, g().LOADING_VALUE_IS_NOT_A_NUMBER)),
                  g().LOADING_VALUE_IS_NOT_A_NUMBER.label) : (t > O && (O = t,
                  R({
                      type: A().GAME_LOADING,
                      percentage: t,
                      object: {
                          value: t
                      }
                  })),
                  t)
              }
          }
            , T = function() {
              return new Promise((function(e, t) {
                  (function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                      return new Promise((function(o, n) {
                          var i = 0
                            , r = setInterval((function() {
                              e() ? (clearInterval(r),
                              o()) : i > t && (clearInterval(r),
                              n("limit")),
                              i++
                          }
                          ), 100)
                      }
                      ))
                  }
                  )((function() {
                      return m.ready
                  }
                  ), 30).then((function() {
                      if (e && !h && (d = e),
                      R({
                          type: A().GAME_LOADED
                      }),
                      e && h)
                          return e({})
                  }
                  )).catch((function(t) {
                      return R(f({
                          type: A().ERROR
                      }, g().GAMEPIX_PLAYER_NOT_FOUND)),
                      h || (h = !0),
                      e({})
                  }
                  ))
              }
              ))
          }
            , S = function(e, t) {
              if ("object" !== I(t) && void 0 !== t)
                  return g().ARGUMENT_IS_NOT_AN_OBJECT_OR_UNDEFINED.label;
              var o = !1;
              return Object.keys(A()).some((function(n) {
                  "string" == typeof A()[n] && A()[n].toLowerCase() === e.toLowerCase() && (R({
                      type: A()[n],
                      object: t
                  }),
                  o = !0)
              }
              )),
              !!o || g().EVENT_IS_NOT_DEFINED.label
          }
            , b = function() {
              return h ? R({
                  type: A().GAME_ACTION
              }) : (g().METHOD_BEFORE_LOADED.method = "GamePix.gameAction()",
              R(f({
                  type: A().ERROR
              }, g().METHOD_BEFORE_LOADED))),
              null
          }
            , x = function() {
              return h ? R({
                  type: A().GAME_STOP
              }) : (g().METHOD_BEFORE_LOADED.method = "GamePix.gameStop()",
              R(f({
                  type: A().ERROR
              }, g().METHOD_BEFORE_LOADED))),
              null
          }
            , N = function(e) {
              if (h)
                  return "number" != typeof e ? R(f({
                      type: A().ERROR
                  }, g().UPDATE_SCORE_VALUE_IS_NOT_A_NUMBER)) : (R({
                      type: A().UPDATE_SCORE,
                      object: {
                          value: e
                      }
                  }),
                  e);
              g().METHOD_BEFORE_LOADED.method = "GamePix.updateScore(value)",
              R(f({
                  type: A().ERROR
              }, g().METHOD_BEFORE_LOADED))
          }
            , w = function(e) {
              if (h)
                  return "number" != typeof e ? R(f({
                      type: A().ERROR
                  }, g().UPDATE_LEVEL_VALUE_IS_NOT_A_NUMBER)) : (R({
                      type: A().UPDATE_LEVEL,
                      object: {
                          value: e
                      }
                  }),
                  e);
              g().METHOD_BEFORE_LOADED.method = "GamePix.updateLevel(value)",
              R(f({
                  type: A().ERROR
              }, g().METHOD_BEFORE_LOADED))
          }
            , L = function() {
              h ? R({
                  type: A().HAPPY_MOMENT
              }) : (g().METHOD_BEFORE_LOADED.method = "GamePix.happyMoment()",
              R(f({
                  type: A().ERROR
              }, g().METHOD_BEFORE_LOADED)))
          }
            , U = function() {
              return h ? R({
                  type: A().SAD_MOMENT
              }) : (g().METHOD_BEFORE_LOADED.method = "GamePix.sadMoment()",
              R(f({
                  type: A().ERROR
              }, g().METHOD_BEFORE_LOADED))),
              null
          }
            , P = function() {
              return new Promise((function(o) {
                  if (!h)
                      return g().METHOD_BEFORE_LOADED.method = "GamePix.interstitialAd()",
                      R(f({
                          type: A().ERROR
                      }, g().METHOD_BEFORE_LOADED)),
                      o({
                          success: !1,
                          message: g().METHOD_BEFORE_LOADED.message + " " + g().METHOD_BEFORE_LOADED.method
                      });
                  if (void 0 !== _)
                      return R(f({
                          type: A().ERROR
                      }, g().INTERSTITIAL_AD_CALLED_TWICE)),
                      o({
                          success: !1,
                          message: g().INTERSTITIAL_AD_CALLED_TWICE.message
                      });
                  if (_ = o,
                  R({
                      type: A().REQUEST_INTERSTITIAL_AD
                  }),
                  !m.ready) {
                      var n = s("pause");
                      try {
                          "pause" == n ? window.GamePix.pause() : window.GamePix.on.pause()
                      } catch (e) {}
                      !function(o) {
                          !function() {
                              var o = window.innerWidth + "px"
                                , n = window.innerHeight + "px";
                              (e = C("adMainContainer", "position:fixed;background: black;top:0px;left:0px")).style.width = o,
                              e.style.height = n,
                              e.style.zIndex = function() {
                                  for (var e = document.getElementsByTagName("*"), t = 0, o = 0; o < e.length; o++) {
                                      var n = 0;
                                      window.getComputedStyle && (n = document.defaultView.getComputedStyle(e[o]).zIndex),
                                      parseInt(n) > t && (t = parseInt(n))
                                  }
                                  return t || 0
                              }() + 1,
                              e.setAttribute("playsinline", "true"),
                              (t = C("ads", "position: absolute; top:0px;left:0px;display: flex;justify-content: center;")).style.width = o,
                              t.style.height = n,
                              t.setAttribute("playsinline", "true"),
                              t.innerHTML = "<img style='margin:auto' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAyADIAAD/4QDIRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAPAAAAcgEyAAIAAAAUAAAAgodpAAQAAAABAAAAlgAAAAAAAADIAAAAAQAAAMgAAAABUGl4ZWxtYXRvciAzLjkAADIwMjE6MDQ6MjAgMTY6MDQ6MzcAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAV6gAwAEAAAAAQAAAV4AAAAA/+EJkGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iUGl4ZWxtYXRvciAzLjkiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA0LTIwVDE2OjA0OjM3Ii8+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/PgD/wAARCAFeAV4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAPDw8PDw8aDw8aJBoaGiQxJCQkJDE+MTExMTE+Sz4+Pj4+PktLS0tLS0tLWlpaWlpaaWlpaWl2dnZ2dnZ2dnZ2/9sAQwESExMeHB40HBw0e1RFVHt7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7/90ABAAW/9oADAMBAAIRAxEAPwDj2ZnYu5yTySabRRXomAUUUUCCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqSOaWE7omKk8cVHRQM//9DjaKKK9E5wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9HjaKKK9E5wooooAKKKKACiiigAooqWCF7iURR9TQ3bVg2krsiorpF0SDbhnbd6jGPyrFu7V7SXy35B5B9RWUK0ZOyZhTxMKj5Ysq0UUVqbhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//S42iiivROcKKKKACiiigAooooAK1tG/4+m/3D/MVk1q6P/wAfLf7h/mKzq/AzDE/w5HT5rF1X/WW5/wBo/wBK181j6p/rIP8AeP8ASuKjG0keThV+8X9dCW90pJSZLfCt6dj/AIVzkkbxOUkBUjqDXct1NVLm2huV2yjkdCOorajUa0Zrh8Y4+7PVHHUVcurKW1OT8ydmH9fSqddaZ68ZKSvEKKKKBhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9PjaKKK9E5wooooAKKKKACiiigArU0j/j5b/cP8xWXWnpX/AB8N/uH+YqZ/CzHEfw5HR5rH1Ztphb0JP8q1c1jav0j/AB/pXPTj7x5eFX7xGpbX0N0Pl4fup/p61aNcQCVO5TgjuK27XVM4juf++v8AGtPZW2Na2DcdYbGy2CCDyD2rEu9N6yW34r/hWzkEZByDTTW0InPSqSpu8TjyCDg0lauqRqsiyDgtnP4UuiWKajqMdvL9zlm9wO340S93c9qlPnipIow2l1cDdBE8gHdVJ/lUUkckTbJVKMOzDB/Wulvdev5Lo22mkxRISsaRjkgd+n6Vl6ldald+XJqCt8g2gldue/pUpvqatIy6lMEwiE5RhGxwGwcE/WkhieeVYYxlnIUD3NeizC3uEm8NxAZhgUofV15/w/WlKVgSuebVKYZhEJyjeWTgNg4z6ZqMgg4Neh6cLafQLawuuBcl0VvRskj+VOcuUErnndSSwzQMFmRkJGQGBHB7810WlaT5V7NLqI2xWXzP6EjkAeuev/66n8WyCW4tpQMb4Q35nNLn96yC2lzl4oJ5yRBGz467QTj8qm/s+/8A+feX/vg/4V0/hv7R/Z9/9kz5uF2Y65wajkl8Wxo0j+aFUZJwvQUnN3sFjkiCDg1aFhfEAiCQg8g7D/hVZmZ2LscknJJ967bxFql/ZXkcVrKUUxK2Bjrk+tVJu6SBI4p43jYpIpVh1BGDSxxSzErEpcgEkKM8DqeK6zVHe98P299egCfftVsYLLzUHhP/AI/pv+uDfzFLn0bC2py4BYhVGSegFOkjkhcxyqUYdQwwR+FEcjxOskZwykEEdiOldsYIfFNsk6FYruIhZfQr6/4flTlK24JXOKEMpiMwRtgOC2OM+majrqNb1CCOIaLp3EEXDt/eYf8A1/1rl6cXdXEwooopiCiiigAooooAKKKKAP/U42iiivROcKKKKACiiigAooooAK0tL/4+G/3T/MVm1o6Z/r2/3T/MUMyr/wANm/msjVekf4/0q3cXcduOeW7Cs9Ypbp/OuTx2FKFNt6Hn0Icr9pLYpwW7znjgDqa2BaQCPy9v496lUBQFUYA7U+u2NNIqrXlJ6GaPtNgcp88fp/npVoanblckMD6YouLtIBjq/p/jWE7mRi7YyfTisZ2i9DWnS9quaaJrm4a5k3HgDgCrmi366dqEdxJ9zlWx6Hv+FZVFYy13O2KUVZHZyaLfx3n9oaFIsiOSysrDI3dRzxVjW1vE0CNb+QSTecMkY44PHGOlcOsjp9xiM+hxTdzEYJ4zms+R3Vy7nR+GoY/tUl/N9y1Qufr2/rVuDW9IS+F6LV1lLEl/MJ+91OK5EMQCAevWkpuF3dhc3PENotpqkmzGyX94uP8Aa6/rmrt2xXw1YspwRKxBHXgtXLli33jntRuJG3PA7U+XRBc6DUvEE2o2aWpXYeDKR/GR0/xqfxN96z/691rl6UknGTnHFCglawXOw8NpNLp9/DbHErKu3Bwc896jbRfEzqVaRiDwQZeD+tcmCR0OKXe/qfzpcrvdBcHVkYo3VTg/hXea7rV1p91HDAI2UxK3zLk5JNcDSkluSc03G7VwTsX7/U7zUnDXT5C/dUDAH0FbHhMgX02f+eDfzFcvSglehxQ46WQk9bj4YnnlSGPlnIUfU8V2VxdxeGYUsbLa9ySGmc8/h/noOepriaUkscsck0SjfcE7HVazaW17aDXbDCqxAmT0Y8Z/Pr+dcpS7jjbnj0pKcVZWBsKKKKYgooooAKKKKACiiigD/9XjaKKK9E5wooooAKKKKACiiigAqeCV4WJj+8wwKgq1Z487n0OKqKu0ialuV3LkNtg+ZN8zGroplDOqLuc4FdyiorQ82TcnqS1n3F9j5IOv97/Cqs908vyrwv8AOqlc9Sr0idNLD9ZikknJpKKK5zrCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//1uNooor0TnCiiigAooooAKKKKAClVipDLwRSUUAXhfNjlRn61VkleU5c1HRVynJ6NkRpxi7pBRRRUFhRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/1+Nooor0TnCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0ONooor0TnCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0eNooor0TnCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/0uNooor0TnCiiigAooooAKKKKACiiigAooooAKKngFsWIuS4HYqAfzzW1c6TZ2tsLtpXdGxjaBznpWFTERhJRl1NI021dHPUUpxnjpWza2Fjc28lx5roIgN2QO/pV1KsaavIUYuTsjFoq7DbJd3a29qSA3d/bntUFxA1tO8DkEocZHSmqkW+XruJxdrkNFFa+lWNtfSFJZCGHO0DqPrSq1FTi5y2CMXJ2RkUVYu0SO6ljjGFV2AHsDVeri7pMTVnYKKKKYgooooAKKKKACitQ6cw0wX/ADnd0/2emfzrLqIVIzvy9NCnFrcKKKKsQUVvvp1mmlPexuZG4wSNoHzAHisCsqVaNS7j0dipQcbXCiiitSAooooAKKKKACiiigAooooA/9PjaKKK9E5wooooAKKKKACiiigAooooAKKKKACur0wjUNKlsW+8n3fx5H61ylauj3P2a+TJ+V/kP49P1rkxlNyptx3Wq+RtRlaWuzMsgg4PUVqXB+y6fFaj70v71/p/CP61bvdPH9r7DxHJ+8J9AOWrIu7g3Vw8543Hgeg7D8qIzVZxa23/AMv68gceS9/QbBBcTvi3RmI/u9vx7UlxBJbzNDN99evfqM1paFJIuoxxqxCtuyOxwpNQ6qC2pygd2A/QVSqy9u6b2tf8Rcq5ObzK8FncXKl41+RerMQFH4mtzRLSSK98zKuu0glGBwfel14C2t7eyi4QZJHrj/Jqr4eJ+3keqH+lclWrKrh5VFtqaxio1FEzLwE3swHJMjfzqb+zblSFkKIzdFZgGP4Vr6XAkusXEjjPlsxH1LYrNupbKW6kkmEpYsc4I/wrWNeTl7OHRIlwVuZmdLFJC5jlUqw6g1NBZXFwhkRcIvVmICj8TVzULyLUXhWJCjL8pJOc56Voa/iCOCzi4jUE4+nAqvbz9yDVpP8ACwuRau+iMaSwuEiM67ZEHVkIYD64qlW3oMrJfiL+GRSCPoM1R1GBba+lhThQeB7EZrSFV+1dKXa5Morl50Uqmgha4mSFOrkCoa1tO2W8Mt/KCQo8tQDg7m64PsK0rTcYtrcmCu9TcsLiO9Nzp/8AyzAxH/ugbf8AA1yEiNG7RvwVJB+orXsLyyt7tJEjdcnaSXBGDxyNop2v23k3vmgfLKM/iODXFQ/dV3C1k1+KNp+9Dm7GHV/+zrhVDzbYtwyA7BSfw61c0CBJr3e4z5a7h9c8VR1CVpr2V2OfmIH0HArpdWUqrpR6LUz5Uo8zN2SKSDw80cgwdw756sO4rla6YEnw2c/3v/Zq5mssFf8AeX/mZVb7PoFFFFdxgFFFFABRRRQAUUUUAFFFFAH/1ONooor0TnCiiigAooooAKKKKACiiigAooooAKKKKBnT3+opLpkTjHmyAoT3AGN35kCuYoorChQjSi4xLnNyd2bGioq3i3MjoiJnJZgOSMdD9aZq6D7Y86Oro5yCrA9vasqil7F+19rfpYOf3eWx01y6azaRtGyi4i6oTjOeuM0mjWxtbsvcMqHYflyCcccnHT8a5qisnhHyOlGXusv2vvKTWpvxXUen6q829ZI5S2ShzgE5/MU+70pLiVrmzmjMbncdzYxmudoqvqzUlOErO1vUXtE1ZotXCQQlUhfzGX7zD7ufb6etbV5ImsW0ckTATx8MhOM59M1zdFXOhfllfVdSVO11bRnQadEunSG8viE2ghUyCxJ9hWNcztczvO3Bc5xUFFVCjabqSd2wc7rlWxNDC077FKjvliAPzNbV/boljDBbSxuI9zSYcZJ9cZrn6KKlKUpKV9gjJJNWHxxtK4RMZPqQB+Z4rr75IL2xjieeIToAfvjk45H41xtFRWoOpKMk7WHCfKmrbmpYXB0y+3S4IxtbaQeDzkEVPfae007XNmyyRSHdncBgnrnJrEopui+f2kXrsxKenK9jrBHCND+zGaMMTkEnAyGyQPWuToop0KPs+bW93cJz5raBRRRW5mFFFFABRRRQAUUUUAFFFFAH/9XjaKKK9E5wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9bjaKKK9E5wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9fjaKKK9E5wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9DjaKKK9E5wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9HjaKKK9E5wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9LjaKKK9E5wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9PjaKKK9E5wooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9TjaKkmjMMrRNyVOOKjr0TAKKKKBBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVbs7N7xyiEDAzzQM//Z'>",
                              e.appendChild(t),
                              (i = C("adControls")).classList.add("videoAdUiSkipContainer"),
                              i.innerHTML = '<button id="ad-timer" class="videoAdUiSkipButton timer"><div class="videoAdUiSkipButtonText counter">5</div></button><button id="skip-ad" class="videoAdUiSkipButton"><div class="videoAdUiSkipButtonText">Skip Ad</div><div class="videoAdUiSkipButtonTextIcon"></div></button>';
                              var r = document.createElement("style");
                              r.textContent = ".videoAdUiSkipContainer { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); bottom: 10px; cursor: pointer; padding: 10px 0 10px 10px; pointer-events: auto; position: absolute; right: 0; z-index: 1000; } .videoAdUiSkipButton.active { display: block; } .videoAdUiSkipButton.timer { padding: 7px 20px 7px 20px; } .videoAdUiSkipButton { padding: 7px 6px 7px 10px; margin: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); background: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.5); border-right: 0; box-sizing: content-box; color: #fff; cursor: pointer; direction: ltr; font-family: arial, sans-serif; font-weight: normal; font-size: 18px; text-align: center; display: none; } .videoAdUiSkipButton:hover { border-color: rgba(255, 255, 255, 1); } .videoAdUiSkipButtonText { display: inline-block; font-size: 18px; vertical-align: middle; } .videoAdUiSkipButtonTextIcon { background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAZElEQVQ4y+3SwQmDQBBGYRFy9mYLSRXWEyvRRtKBbdhDUoTH8HkVllX+u++48GD2zTTNTYiPrnhDXeBnyAT+Zo9EgNUrE9iMmQCLvhTas2jXWY8jvbNPP5OsU5L1my0uPY2bCjtXdo6mqRVtTgAAAABJRU5ErkJggg=='); background-repeat: no-repeat; display: inline-block; height: 24px; margin-left: 2px; vertical-align: middle; width: 24px; cursor: pointer; }",
                              i.appendChild(r),
                              e.appendChild(i),
                              document.body.appendChild(e)
                          }();
                          var n = document.getElementById("ad-timer")
                            , r = document.getElementById("skip-ad");
                          r.addEventListener("click", (function() {
                              l(o)
                          }
                          ));
                          var A = 5;
                          u = setInterval((function() {
                              n.getElementsByClassName("counter")[0].innerHTML = --A,
                              0 == A && (clearInterval(u),
                              r.classList.add("active"),
                              n.classList.remove("active"))
                          }
                          ), 1e3),
                          n.classList.add("active"),
                          c = setTimeout((function() {
                              l(o)
                          }
                          ), 12e3)
                      }((function() {
                          _ = void 0;
                          var e = s("resume");
                          try {
                              "resume" == e ? window.GamePix.resume() : window.GamePix.on.resume()
                          } catch (e) {}
                          o({
                              success: !0
                          })
                      }
                      ))
                  }
              }
              ))
          }
            , F = function() {
              return new Promise((function(e) {
                  return h ? void 0 !== v ? (R(f({
                      type: A().ERROR
                  }, g().REWARD_AD_CALLED_TWICE)),
                  e({
                      success: !1,
                      message: g().REWARD_AD_CALLED_TWICE.message
                  })) : (v = e,
                  R({
                      type: A().REQUEST_REWARD_AD
                  }),
                  m.ready ? void 0 : new Promise((function(e) {
                      return e({
                          success: window.confirm("Testing: By pressing OK you will give the reward")
                      })
                  }
                  )).then((function(t) {
                      return e(t)
                  }
                  ))) : (g().METHOD_BEFORE_LOADED.method = "GamePix.rewardAd()",
                  R(f({
                      type: A().ERROR
                  }, g().METHOD_BEFORE_LOADED)),
                  e({
                      success: !1,
                      message: g().METHOD_BEFORE_LOADED.message + " " + g().METHOD_BEFORE_LOADED.method
                  }))
              }
              ))
          }
            , M = function(e, t, o, n) {
              return new Promise((function(n) {
                  return h ? void 0 !== K ? (R(f({
                      type: A().ERROR
                  }, g().PURCHASE_CALLED_TWICE)),
                  n({
                      success: !1,
                      message: g().PURCHASE_CALLED_TWICE.message
                  })) : void 0 === e || "string" != typeof e ? n({
                      success: !1,
                      message: g().PURCHASE_ITEM_NOT_DEFINED.message
                  }) : void 0 === t || "number" != typeof t ? n({
                      success: !1,
                      message: g().PURCHASE_QUANTITY_NOT_DEFINED.message
                  }) : void 0 === o || "number" != typeof o ? n({
                      success: !1,
                      message: g().PURCHASE_PRICE_NOT_DEFINED.message
                  }) : (K = n,
                  R({
                      type: A().REQUEST_PURCHASE,
                      object: {
                          price: o,
                          itemName: e,
                          itemQuantity: t
                      }
                  }),
                  m.ready ? void 0 : new Promise((function(n) {
                      return n({
                          success: window.confirm("Testing: By pressing OK you will buy the " + t + " of " + e + "for " + o)
                      })
                  }
                  )).then((function(e) {
                      return K = void 0,
                      n(e)
                  }
                  ))) : (g().METHOD_BEFORE_LOADED.method = "GamePix.purchase(itemName, itemQuantity, price)",
                  R(f({
                      type: A().ERROR
                  }, g().METHOD_BEFORE_LOADED)),
                  n({
                      success: !1,
                      message: g().METHOD_BEFORE_LOADED.message + " " + g().METHOD_BEFORE_LOADED.method
                  }))
              }
              ))
          };
          !function() {
              if (!m.ready)
                  try {
                      window.parent.postMessage({
                          type: A().REQUEST_PLAYER_INFO,
                          url: window.location.href
                      }, window.name)
                  } catch (e) {}
          }();
          var j = {}
            , G = function(e) {
              return B() + "_" + e
          }
            , B = function() {
              for (var e = window.location.search.substring(1), t = window.location.pathname, o = e.split("&"), n = 0; n < o.length; n++) {
                  var i = o[n].split("=");
                  "namespace" === decodeURIComponent(i[0]) && (t = decodeURIComponent(i[1]))
              }
              return t
          }
            , k = {
              getItem: function(e) {
                  try {
                      var t = G(e);
                      return null !== window.localStorage || void 0 !== window.localStorage ? j[e] || window.localStorage.getItem(t) || window.localStorage.getItem(e) : j[e] || null
                  } catch (t) {
                      return j[e] || null
                  }
              },
              setItem: function(e, t) {
                  try {
                      j[e] = t
                  } catch (o) {
                      j[e] = t
                  } finally {
                      R({
                          type: A().UPDATE_LOCALSTORAGE,
                          object: {
                              key: B(),
                              value: JSON.stringify(j)
                          }
                      })
                  }
              },
              removeItem: function(e) {
                  try {
                      var t = G(e);
                      null !== window.localStorage || void 0 !== window.localStorage ? (window.localStorage.removeItem(e),
                      window.localStorage.removeItem(t),
                      delete j[e]) : delete j[e]
                  } catch (t) {
                      delete j[e]
                  } finally {
                      R({
                          type: A().UPDATE_LOCALSTORAGE,
                          object: {
                              key: B(),
                              value: JSON.stringify(j)
                          }
                      })
                  }
              }
          };
          (function() {
              try {
                  return localStorage.setItem("test", "test"),
                  localStorage.removeItem("test"),
                  !0
              } catch (e) {
                  return !1
              }
          }
          )() && function() {
              try {
                  var e = JSON.parse(window.localStorage.getItem(B()));
                  if (null == e)
                      return;
                  window.Object.keys(e).forEach((function(t) {
                      j[t] = e[t]
                  }
                  ))
              } catch (e) {
                  console.log(e)
              }
          }();
          const H = k;
          window.onload = function() {
              var e, t;
              e = "* {\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Old versions of Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */\n    -ms-touch-action: none;\n    -ms-content-zooming: none;\n    touch-action: none;\n}",
              (t = document.createElement("style")).type = "text/css",
              t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)),
              document.getElementsByTagName("head")[0].appendChild(t)
          }
          ,
          o(3946);
          var V = /iPhone/i
            , W = /iPod/i
            , Q = /iPad/i
            , Y = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i
            , z = /Android/i
            , X = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i
            , J = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i
            , q = /Windows Phone/i
            , Z = /(?=.*\bWindows\b)(?=.*\bARM\b)/i
            , $ = /BlackBerry/i
            , ee = /BB10/i
            , te = /Opera Mini/i
            , oe = /(CriOS|Chrome)(?=.*\bMobile\b)/i
            , ne = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i
            , ie = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i")
            , re = function(e, t) {
              return e.test(t)
          }
            , Ae = function(e) {
              var t = e || navigator.userAgent
                , o = t.split("[FBAN");
              return void 0 !== o[1] && (t = o[0]),
              void 0 !== (o = t.split("Twitter"))[1] && (t = o[0]),
              this.apple = {
                  phone: re(V, t),
                  ipod: re(W, t),
                  tablet: !re(V, t) && re(Q, t),
                  device: re(V, t) || re(W, t) || re(Q, t)
              },
              this.amazon = {
                  phone: re(X, t),
                  tablet: !re(X, t) && re(J, t),
                  device: re(X, t) || re(J, t)
              },
              this.android = {
                  phone: re(X, t) || re(Y, t),
                  tablet: !re(X, t) && !re(Y, t) && (re(J, t) || re(z, t)),
                  device: re(X, t) || re(J, t) || re(Y, t) || re(z, t)
              },
              this.windows = {
                  phone: re(q, t),
                  tablet: re(Z, t),
                  device: re(q, t) || re(Z, t)
              },
              this.other = {
                  blackberry: re($, t),
                  blackberry10: re(ee, t),
                  opera: re(te, t),
                  firefox: re(ne, t),
                  chrome: re(oe, t),
                  device: re($, t) || re(ee, t) || re(te, t) || re(ne, t) || re(oe, t)
              },
              this.seven_inch = re(ie, t),
              this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch,
              this.phone = this.apple.phone || this.android.phone || this.windows.phone,
              this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet,
              this
          };
          var ae, ge = function() {
              var e = function(e) {
                  if (window && window.location)
                      for (var t = window.location.search.substring(1).split("&"), o = 0; o < t.length; o++) {
                          var n = t[o].split("=");
                          if ("lang" === decodeURIComponent(n[0]))
                              return decodeURIComponent(n[1])
                      }
                  return !1
              }() || "en";
              return R({
                  type: A().LANG_USED
              }),
              e
          };
          !function() {
              try {
                  screen.orientation && screen.orientation.lock && (screen.orientation.lock = function() {}
                  )
              } catch (e) {
                  console.log("cant prototype screen orientation lock:", e.message)
              }
          }(),
          function() {
              var e = window.AudioContext || window.webkitAudioContext;
              if (void 0 !== e) {
                  var t = e;
                  e = function() {
                      var e = new t;
                      return ae = e,
                      e
                  }
                  ;
                  var o = setInterval((function() {
                      null !== window.document && null !== window.document.body && (clearInterval(o),
                      -1 !== navigator.userAgent.match(/iphone/i) && void 0 !== document.getElementsByTagName("canvas")[0] && document.getElementsByTagName("canvas")[0].addEventListener("touchmove", (function(e) {
                          e.preventDefault()
                      }
                      ), !0),
                      function(e) {
                          var t, o = window, n = "click";
                          try {
                              (t = new Ae,
                              t.Class = Ae,
                              t).any && ((o = document.createElement("div")).id = "gamePlayedDiv",
                              o.style.zIndex = 99999999,
                              o.style.position = "fixed",
                              o.style.width = "100%",
                              o.style.height = "100%",
                              o.style.top = "0px",
                              o.style.left = "0px",
                              document.body.appendChild(o)),
                              window.navigator.msPointerEnabled && (n = "MSPointerUp"),
                              "onpointerup"in window && (n = "pointerup"),
                              "ontouchend"in window && (n = "touchend"),
                              o.addEventListener(n, (function t() {
                                  if (o.removeEventListener(n, t),
                                  o !== window)
                                      try {
                                          document.body.removeChild(o)
                                      } catch (e) {
                                          console.log(e.message)
                                      }
                                  e()
                              }
                              ))
                          } catch (t) {
                              console.log(t.message),
                              e()
                          }
                      }((function() {
                          !function() {
                              try {
                                  null != ae && (console.log("resume catched Audio context", ae, ae.state),
                                  ae.resume())
                              } catch (e) {
                                  console.log("No GamePix AudioContext has been found.", e.message)
                              }
                          }()
                      }
                      )))
                  }
                  ), 100)
              }
          }();
          try {
              T()
          } catch (e) {
              console.log("error loading"),
              console.log(e)
          }
          var se = {
              gameLoaded: function(e) {
                  if (!e)
                      return g().NO_CALLBACK_DEFINED;
                  e()
              },
              gameLoading: D,
              customLoading: function() {},
              ping: S,
              remap: function(e, t, o) {
                  return o({
                      status: "fail"
                  })
              }
          };
          const ce = new function() {
              this.loaded = T,
              this.loading = D,
              this.game = se,
              this.on = {
                  pause: !1,
                  resume: !1,
                  soundOn: !1,
                  soundOff: !1
              },
              this.pause = !1,
              this.resume = !1,
              this.soundOn = !1,
              this.soundOff = !1,
              this.localStorage = H,
              this.start = y,
              this.CONST = A(),
              this.ping = S,
              this.lang = ge,
              this.Events = A(),
              this.gameAction = b,
              this.gameStop = x,
              this.updateScore = N,
              this.updateLevel = w,
              this.interstitialAd = P,
              this.rewardAd = F,
              this.happyMoment = L,
              this.sadMoment = U,
              this.purchase = M
          }
      }
      )(),
      n.default
  }
  )()
}
));
