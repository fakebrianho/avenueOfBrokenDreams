// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/patch.js":[function(require,module,exports) {
var define;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var CABLES = function (t) {
  var e = {};

  function i(s) {
    if (e[s]) return e[s].exports;
    var r = e[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
  }

  return i.m = t, i.c = e, i.d = function (t, e, s) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: s
    });
  }, i.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var s = Object.create(null);
    if (i.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) {
      i.d(s, r, function (e) {
        return t[e];
      }.bind(null, r));
    }
    return s;
  }, i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return i.d(e, "a", e), e;
  }, i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, i.p = "", i(i.s = 0);
}([function (t, e, i) {
  t.exports = i(1);
}, function (t, e, i) {
  "use strict";

  i.r(e);
  var s = {};
  i.r(s), i.d(s, "base64Chars", function () {
    return a;
  }), i.d(s, "base64lookup", function () {
    return l;
  }), i.d(s, "b64encTypesArray", function () {
    return c;
  }), i.d(s, "b64decTypedArray", function () {
    return u;
  });
  var r = {};
  i.r(r), i.d(r, "shuffleArray", function () {
    return f;
  }), i.d(r, "shortId", function () {
    return T;
  }), i.d(r, "uuid", function () {
    return A;
  }), i.d(r, "generateUUID", function () {
    return y;
  }), i.d(r, "simpleId", function () {
    return v;
  }), i.d(r, "smoothStep", function () {
    return I;
  }), i.d(r, "smootherStep", function () {
    return R;
  }), i.d(r, "clamp", function () {
    return O;
  }), i.d(r, "map", function () {
    return N;
  }), i.d(r, "cacheBust", function () {
    return P;
  }), i.d(r, "basename", function () {
    return S;
  }), i.d(r, "jsonp", function () {
    return C;
  }), i.d(r, "ajaxSync", function () {
    return M;
  }), i.d(r, "ajax", function () {
    return w;
  }), i.d(r, "request", function () {
    return U;
  }), i.d(r, "UTILS", function () {
    return g;
  });
  var n = {};
  i.r(n), i.d(n, "easeExpoIn", function () {
    return Y;
  }), i.d(n, "easeExpoOut", function () {
    return W;
  }), i.d(n, "easeExpoInOut", function () {
    return X;
  }), i.d(n, "easeCubicIn", function () {
    return K;
  }), i.d(n, "easeCubicOut", function () {
    return j;
  }), i.d(n, "easeCubicInOut", function () {
    return Q;
  }), i.d(n, "ANIM", function () {
    return z;
  }), i.d(n, "Anim", function () {
    return q;
  }), i.d(n, "TL", function () {
    return J;
  });
  var o = {};
  i.r(o), i.d(o, "PatchConnectionReceiver", function () {
    return Lt;
  }), i.d(o, "PatchConnectionSender", function () {
    return kt;
  }), i.d(o, "PatchConnectorBroadcastChannel", function () {
    return Dt;
  });
  var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      h = new Uint8Array(256);

  for (var _t2 = 0; _t2 < a.length; _t2++) {
    h[a.charCodeAt(_t2)] = _t2;
  }

  var l = h,
      c = function c(t) {
    t.buffer && (t = t.buffer);
    var e,
        i = new Uint8Array(t),
        s = i.length,
        r = "";

    for (e = 0; e < s; e += 3) {
      r += a[i[e] >> 2], r += a[(3 & i[e]) << 4 | i[e + 1] >> 4], r += a[(15 & i[e + 1]) << 2 | i[e + 2] >> 6], r += a[63 & i[e + 2]];
    }

    return s % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : s % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r;
  },
      u = function u(t) {
    var e,
        i,
        s,
        r,
        n,
        o = .75 * t.length,
        a = t.length,
        h = 0;
    "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
    var c = new ArrayBuffer(o),
        u = new Uint8Array(c);

    for (e = 0; e < a; e += 4) {
      i = l[t.charCodeAt(e)], s = l[t.charCodeAt(e + 1)], r = l[t.charCodeAt(e + 2)], n = l[t.charCodeAt(e + 3)], u[h++] = i << 2 | s >> 4, u[h++] = (15 & s) << 4 | r >> 2, u[h++] = (3 & r) << 6 | 63 & n;
    }

    return c;
  };

  var p = !1;

  var _ = {
    log: function log() {
      if (p) return;
      var t = ["[core]"];
      t.push.apply(t, arguments), Function.prototype.apply.apply(console.log, [console, t]);
    },
    warn: function warn(t) {
      if (p) return;
      var e = ["[core]"];
      e.push.apply(e, arguments), Function.prototype.apply.apply(console.warn, [console, e]);
    },
    error: function error(t) {
      var e = ["[core]"];
      e.push.apply(e, arguments), Function.prototype.apply.apply(console.error, [console, e]);
    },
    setSilent: function setSilent(t) {
      p = t;
    },
    stack: function stack() {
      console.log(new Error().stack);
    }
  },
      d = function d() {
    this._eventCallbacks = {}, this._logName = "", this._log = !1, this._listeners = {}, this.addEventListener = this.on = function (t, e, i) {
      var s = {
        id: (i || "") + CABLES.uuid(),
        name: t,
        cb: e
      };
      return this._eventCallbacks[t] ? this._eventCallbacks[t].push(s) : this._eventCallbacks[t] = [s], this._listeners[s.id] = s, s.id;
    }, this.hasEventListener = function (t, e) {
      if (t && !e) return !!this._listeners[t];

      if (console.warn("old eventtarget function haseventlistener!"), t && e && this._eventCallbacks[t]) {
        return -1 != this._eventCallbacks[t].indexOf(e);
      }
    }, this.removeEventListener = this.off = function (t, e) {
      if (null == t) return;

      if (!e) {
        var _e2 = this._listeners[t];
        if (!_e2) return;

        var _i = !0;

        for (; _i;) {
          _i = !1;

          var _s = -1;

          for (var _r = 0; _r < this._eventCallbacks[_e2.name].length; _r++) {
            0 === this._eventCallbacks[_e2.name][_r].id.indexOf(t) && (_i = !0, _s = _r);
          }

          -1 !== _s && (this._eventCallbacks[_e2.name].splice(_s, 1), delete this._listeners[t]);
        }

        return;
      }

      console.warn("[eventtarget] old function signature: removeEventListener! use listener id");
      var i = null;

      for (var _s2 = 0; _s2 < this._eventCallbacks[t].length; _s2++) {
        this._eventCallbacks[t][_s2].cb == e && (i = _s2);
      }

      null !== i ? delete this._eventCallbacks[i] : console.warn("[removeEventListener] not found " + t);
    }, this.logEvents = function (t, e) {
      this._log = t, this._logName = e;
    }, this.emitEvent = function (t, e, i, s, r, n, o) {
      if (this._log && console.log("[event] ", this._logName, t, this._eventCallbacks), this._eventCallbacks[t]) for (var _a = 0; _a < this._eventCallbacks[t].length; _a++) {
        this._eventCallbacks[t][_a] && this._eventCallbacks[t][_a].cb(e, i, s, r, n, o);
      } else this._log && console.log("[event] has no event callback", t, this._eventCallbacks);
    };
  },
      g = {
    float32Concat: function float32Concat(t, e) {
      t instanceof Float32Array || (t = new Float32Array(t)), e instanceof Float32Array || (e = new Float32Array(e));
      var i = new Float32Array(t.length + e.length);
      return i.set(t), i.set(e, t.length), i;
    }
  },
      f = function f(t) {
    for (var _e3 = t.length - 1; _e3 > 0; _e3--) {
      var _i2 = Math.floor(Math.seededRandom() * (_e3 + 1)),
          _s3 = t[_e3];

      t[_e3] = t[_i2], t[_i2] = _s3;
    }

    return t;
  },
      m = {},
      E = function E() {
    var t = Math.random().toString(36).substr(2, 9);
    return m.hasOwnProperty(t) && (t = E()), m[t] = !0, t;
  },
      T = E,
      b = function b() {
    var t = new Date().getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var i = (t + 16 * Math.random()) % 16 | 0;
      return t = Math.floor(t / 16), ("x" == e ? i : 3 & i | 8).toString(16);
    });
  },
      A = b,
      y = b;

  var x = 0;

  var v = function v() {
    return x++, x;
  },
      I = function I(t) {
    var e = Math.max(0, Math.min(1, (t - 0) / 1));
    return t = e * e * (3 - 2 * e);
  },
      R = function R(t) {
    var e = Math.max(0, Math.min(1, (t - 0) / 1));
    return t = e * e * e * (e * (6 * e - 15) + 10);
  },
      O = function O(t, e, i) {
    return Math.min(Math.max(t, e), i);
  },
      N = function N(t, e, i, s, r, n) {
    if (t >= i) return r;
    if (t <= e) return s;
    var o = !1;
    var a = Math.min(e, i),
        h = Math.max(e, i);
    a != e && (o = !0);
    var l = !1;
    var c = Math.min(s, r),
        u = Math.max(s, r);
    c != s && (l = !0);
    var p = 0,
        _ = 0;
    return p = o ? (h - t) * (u - c) / (h - a) : (t - a) * (u - c) / (h - a), _ = l ? u - p : p + c, n ? 1 == n ? s + (t = Math.max(0, Math.min(1, (_ - s) / (r - s)))) * t * (3 - 2 * t) * (r - s) : 2 == n ? s + (t = Math.max(0, Math.min(1, (_ - s) / (r - s)))) * t * t * (t * (6 * t - 15) + 10) * (r - s) : _ : _;
  };

  Math.randomSeed = 1, Math.seededRandom = function (t, e) {
    0 === Math.randomSeed && (Math.randomSeed = 999 * Math.random()), t = t || 1, e = e || 0, Math.randomSeed = (9301 * Math.randomSeed + 49297) % 233280;
    return e + Math.randomSeed / 233280 * (t - e);
  }, g.arrayWriteToEnd = function (t, e) {
    for (var _e4 = 1; _e4 < t.length; _e4++) {
      t[_e4 - 1] = t[_e4];
    }

    t[t.length - 1] = e;
  }, g.isNumeric = function (t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  }, g.isArray = function (t) {
    return "[object Array]" === Object.prototype.toString.call(t);
  }, String.prototype.endl = function () {
    return this + "\n";
  }, String.prototype.startsWith = function (t) {
    return 0 === this.indexOf(t);
  }, String.prototype.endsWith = function (t) {
    return this.match(t + "$") == t;
  };

  var P = function P(t) {
    return t.indexOf("?") > -1 ? t += "&" : t += "?", t + "cb=" + CABLES.uuid();
  },
      S = function S(t) {
    var e = "";
    if (!t) return "";
    var i = (t + "").split("/");

    if (i.length > 0) {
      var _t3 = i[i.length - 1].split("?");

      e = _t3[0], _t3 = e.split("."), e = _t3[0];
    }

    return e;
  };

  var F = null;

  var C = function C(t, e) {
    F = F || 0, F++;
    var i = F;

    CABLES["jsonpFunc" + i] = function (t) {
      e(!1, t);
    };

    var s = "?";
    t.indexOf(s) > -1 && (s = "&");
    var r = document.createElement("script");
    r.setAttribute("src", t + s + "callback=CABLES.jsonpFunc" + i), document.body.appendChild(r);
  },
      M = function M(t, e, i, s, r) {
    U({
      url: t,
      cb: e,
      method: i,
      data: s,
      contenttype: r,
      sync: !0
    });
  },
      w = function w(t, e, i, s, r, n) {
    var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
    U({
      url: t,
      cb: e,
      method: i,
      data: s,
      contenttype: r,
      sync: !1,
      jsonP: n,
      headers: o
    });
  },
      U = function U(t) {
    var e;
    t.hasOwnProperty("asynch") || (t.asynch = !0);

    try {
      e = new XMLHttpRequest();
    } catch (t) {}

    if (e.onreadystatechange = function () {
      4 == e.readyState && t.cb && (200 == e.status || 0 == e.status ? t.cb(!1, e.responseText, e) : t.cb(!0, e.responseText, e));
    }, e.addEventListener("progress", function (t) {}), e.open(t.method ? t.method.toUpperCase() : "GET", t.url, !t.sync), "object" == _typeof(t.headers)) {
      var _i3 = Object.keys(t.headers);

      for (var _s4 = 0; _s4 < _i3.length; _s4++) {
        var _r2 = _i3[_s4],
            _n = t.headers[_r2];
        e.setRequestHeader(_r2, _n);
      }
    }

    t.post || t.data ? (e.setRequestHeader("Content-type", t.contenttype ? t.contenttype : "application/x-www-form-urlencoded"), e.send(t.data || t.post)) : e.send();
  };

  window.performance = window.performance || {
    offset: Date.now(),
    now: function now() {
      return Date.now() - this.offset;
    }
  };

  var B = {
    EASINGS: ["linear", "absolute", "smoothstep", "smootherstep", "Cubic In", "Cubic Out", "Cubic In Out", "Expo In", "Expo Out", "Expo In Out", "Sin In", "Sin Out", "Sin In Out", "Quart In", "Quart Out", "Quart In Out", "Quint In", "Quint Out", "Quint In Out", "Back In", "Back Out", "Back In Out", "Elastic In", "Elastic Out", "Bounce In", "Bounce Out"],
    EASING_LINEAR: 0,
    EASING_ABSOLUTE: 1,
    EASING_SMOOTHSTEP: 2,
    EASING_SMOOTHERSTEP: 3,
    EASING_BEZIER: 4,
    EASING_CUBIC_IN: 5,
    EASING_CUBIC_OUT: 6,
    EASING_CUBIC_INOUT: 7,
    EASING_EXPO_IN: 8,
    EASING_EXPO_OUT: 9,
    EASING_EXPO_INOUT: 10,
    EASING_SIN_IN: 11,
    EASING_SIN_OUT: 12,
    EASING_SIN_INOUT: 13,
    EASING_BACK_IN: 14,
    EASING_BACK_OUT: 15,
    EASING_BACK_INOUT: 16,
    EASING_ELASTIC_IN: 17,
    EASING_ELASTIC_OUT: 18,
    EASING_BOUNCE_IN: 19,
    EASING_BOUNCE_OUT: 21,
    EASING_QUART_IN: 22,
    EASING_QUART_OUT: 23,
    EASING_QUART_INOUT: 24,
    EASING_QUINT_IN: 25,
    EASING_QUINT_OUT: 26,
    EASING_QUINT_INOUT: 27
  },
      L = {
    OP_PORT_TYPE_VALUE: 0,
    OP_PORT_TYPE_FUNCTION: 1,
    OP_PORT_TYPE_OBJECT: 2,
    OP_PORT_TYPE_TEXTURE: 2,
    OP_PORT_TYPE_ARRAY: 3,
    OP_PORT_TYPE_DYNAMIC: 4,
    OP_PORT_TYPE_STRING: 5,
    OP_VERSION_PREFIX: "_v"
  },
      k = {
    PORT_DIR_IN: 0,
    PORT_DIR_OUT: 1
  },
      D = {
    PACO_CLEAR: 0,
    PACO_VALUECHANGE: 1,
    PACO_OP_DELETE: 2,
    PACO_UNLINK: 3,
    PACO_LINK: 4,
    PACO_LOAD: 5,
    PACO_OP_CREATE: 6,
    PACO_OP_ENABLE: 7,
    PACO_OP_DISABLE: 8
  },
      V = function V(t, e, i, s) {
    d.apply(this), this.data = {}, this.direction = k.PORT_DIR_IN, this.id = y(), this.parent = t, this.links = [], this.value = 0, this.name = e, this.type = i || L.OP_PORT_TYPE_VALUE, this.uiAttribs = s || {}, this.anim = null, this._oldAnimVal = -5711, this.defaultValue = null, this._uiActiveState = !0, this.ignoreValueSerialize = !1, this.onLinkChanged = null, this.crashed = !1, this._valueBeforeLink = null, this._lastAnimFrame = -1, this._animated = !1, this.onValueChanged = null, this.onTriggered = null, this.onUiActiveStateChange = null, this.changeAlways = !1, this._warnedDeprecated = !1, this._useVariableName = null, this._tempLastUiValue = null, Object.defineProperty(this, "val", {
      get: function get() {
        return console.log("val getter deprecated!", this), console.log(new Error().stack), this._warnedDeprecated = !0, this.get();
      },
      set: function set(t) {
        console.log("val setter deprecated!", this), console.log(new Error().stack), this.setValue(t), this._warnedDeprecated = !0;
      }
    });
  };

  V.prototype.getValueForDisplay = function () {
    var t = String(this.value);
    return t.length > 100 && (t = t.substring(0, 100)), t;
  }, V.prototype.onAnimToggle = function () {}, V.prototype._onAnimToggle = function () {
    this.onAnimToggle();
  }, V.prototype.remove = function () {
    this.removeLinks(), this.parent.removePort(this);
  }, V.prototype.setUiAttribs = function (t) {
    var e = !1;
    this.uiAttribs || (this.uiAttribs = {});

    for (var _i4 in t) {
      this.uiAttribs[_i4] != t[_i4] && (e = !0), this.uiAttribs[_i4] = t[_i4];
    }

    e && this.emitEvent("onUiAttrChange", t);
  }, V.prototype.getUiAttribs = function () {
    return this.uiAttribs;
  }, V.prototype.getUiAttrib = function (t) {
    return this.uiAttribs && this.uiAttribs.hasOwnProperty(t) ? this.uiAttribs[t] : null;
  }, V.prototype.get = function () {
    return this._animated && this._lastAnimFrame != this.parent.patch.getFrameNum() && (this._lastAnimFrame = this.parent.patch.getFrameNum(), this.value = this.anim.getValue(this.parent.patch.timer.getTime()), this._oldAnimVal = this.value, this.forceChange()), this.value;
  }, V.prototype.set = V.prototype.setValue = function (t) {
    if (void 0 !== t && this.parent.enabled && !this.crashed && (t !== this.value || this.changeAlways || this.type == L.OP_PORT_TYPE_TEXTURE || this.type == L.OP_PORT_TYPE_ARRAY)) {
      if (this._animated) this.anim.setValue(this.parent.patch.timer.getTime(), t);else {
        try {
          this.value = t, this.forceChange();
        } catch (t) {
          this.crashed = !0, this.setValue = function (t) {}, this.onTriggered = function () {}, console.error("onvaluechanged exception cought", t), _.log(t.stack), _.log("exception in: " + this.parent.name), this.parent.patch.isEditorMode() && gui.showOpCrash(this.parent), this.parent.patch.emitEvent("exception".ex, this.parent);
        }

        this.parent.patch.isEditorMode() && this.type == L.OP_PORT_TYPE_TEXTURE && gui.texturePreview().updateTexturePort(this);
      }
      if (this.direction == k.PORT_DIR_OUT) for (var _t4 = 0; _t4 < this.links.length; ++_t4) {
        this.links[_t4].setValue();
      }
    }
  }, V.prototype.updateAnim = function () {
    this._animated && (this.value = this.get(), (this._oldAnimVal != this.value || this.changeAlways) && (this._oldAnimVal = this.value, this.forceChange()), this._oldAnimVal = this.value);
  }, V.args = function (t) {
    return (t + "").replace(/[/][/].*$/gm, "").replace(/\s+/g, "").replace(/[/][*][^/*]*[*][/]/g, "").split("){", 1)[0].replace(/^[^(]*[(]/, "").replace(/=[^,]+/g, "").split(",").filter(Boolean);
  }, V.prototype.forceChange = function () {
    this.onValueChanged || this.onChange, this.emitEvent("change", this.value, this), this.onChange ? this.onChange(this, this.value) : this.onValueChanged && this.onValueChanged(this, this.value);
  }, V.prototype.getTypeString = function () {
    return this.type == L.OP_PORT_TYPE_VALUE ? "Number" : this.type == L.OP_PORT_TYPE_FUNCTION ? "Trigger" : this.type == L.OP_PORT_TYPE_OBJECT ? "Object" : this.type == L.OP_PORT_TYPE_DYNAMIC ? "Dynamic" : this.type == L.OP_PORT_TYPE_ARRAY ? "Array" : this.type == L.OP_PORT_TYPE_STRING ? "String" : "Unknown";
  }, V.prototype.deSerializeSettings = function (t) {
    if (t && (t.animated && this.setAnimated(t.animated), t.useVariable && this.setVariableName(t.useVariable), t.anim)) {
      this.anim || (this.anim = new q()), t.anim.loop && (this.anim.loop = t.anim.loop);

      for (var _e5 in t.anim.keys) {
        this.anim.keys.push(new z.Key(t.anim.keys[_e5]));
      }
    }
  }, V.prototype.getSerialized = function () {
    var t = {};

    if (t.name = this.getName(), this.ignoreValueSerialize || 0 !== this.links.length || this.type == L.OP_PORT_TYPE_OBJECT && this.value && this.value.tex || (t.value = this.value), this._useVariableName && (t.useVariable = this._useVariableName), this._animated && (t.animated = !0), this.anim && (t.anim = this.anim.getSerialized()), "file" == this.uiAttribs.display && (t.display = this.uiAttribs.display), this.direction == k.PORT_DIR_IN && this.links.length > 0) {
      t.links = [];

      for (var _e6 in this.links) {
        !this.links[_e6].ignoreInSerialize && this.links[_e6].portIn && this.links[_e6].portOut && t.links.push(this.links[_e6].getSerialized());
      }
    }

    return t;
  }, V.prototype.shouldLink = function () {
    return !0;
  }, V.prototype.removeLinks = function () {
    var t = 0;

    for (; this.links.length > 0;) {
      if (t++, t > 5e3) {
        console.warn("could not delete links... / infinite loop"), this.links.length = 0;
        break;
      }

      this.links[0].remove();
    }
  }, V.prototype.removeLink = function (t) {
    for (var _e7 in this.links) {
      this.links[_e7] == t && this.links.splice(_e7, 1);
    }

    this.direction == k.PORT_DIR_IN && (this.type == L.OP_PORT_TYPE_VALUE ? this.setValue(this._valueBeforeLink || 0) : this.setValue(this._valueBeforeLink || null)), this.onLinkChanged && this.onLinkChanged(), this.emitEvent("onLinkChanged");
  }, V.prototype.getName = function () {
    return this.name;
  }, V.prototype.addLink = function (t) {
    this._valueBeforeLink = this.value, this.links.push(t), this.onLinkChanged && this.onLinkChanged(), this.emitEvent("onLinkChanged");
  }, V.prototype.getLinkTo = function (t) {
    for (var _e8 in this.links) {
      if (this.links[_e8].portIn == t || this.links[_e8].portOut == t) return this.links[_e8];
    }
  }, V.prototype.removeLinkTo = function (t) {
    for (var _e9 in this.links) {
      if (this.links[_e9].portIn == t || this.links[_e9].portOut == t) return this.links[_e9].remove(), this.onLinkChanged && this.onLinkChanged(), void this.emitEvent("onLinkChanged");
    }
  }, V.prototype.isLinkedTo = function (t) {
    for (var _e10 in this.links) {
      if (this.links[_e10].portIn == t || this.links[_e10].portOut == t) return !0;
    }

    return !1;
  }, V.prototype.trigger = function () {
    if (0 === this.links.length) return;
    if (!this.parent.enabled) return;
    var t = null;

    try {
      for (var _e11 = 0; _e11 < this.links.length; ++_e11) {
        this.links[_e11].portIn && (t = this.links[_e11].portIn, t.parent.patch.pushTriggerStack(t), t._onTriggered(), t.parent.patch.popTriggerStack()), this.links[_e11] && this.links[_e11].activity();
      }
    } catch (e) {
      this.parent.enabled = !1, this.parent.patch.isEditorMode() && (this.parent.patch.emitEvent("exception", e, t.parent), this.parent.patch.emitEvent("opcrash", t)), _.log("exception!"), console.error("ontriggered exception cought", e), _.log(e.stack), _.log("exception in: " + t.parent.name);
    }
  }, V.prototype.call = function () {
    _.log("call deprecated - use trigger() "), this.trigger();
  }, V.prototype.execute = function () {
    _.log("### execute port: " + this.getName(), this.goals.length);
  }, V.prototype.setVariableName = function (t) {
    this._useVariableName = t;
  }, V.prototype.getVariableName = function () {
    return this._useVariableName;
  }, V.prototype.setVariable = function (t) {
    var _this = this;

    this.setAnimated(!1);
    var e = {
      useVariable: !1
    };
    this._variableIn && (this._variableIn.removeListener(this.set.bind(this)), this._variableIn = null), t ? (this._variableIn = this.parent.patch.getVar(t), this._variableIn ? (this.type == L.OP_PORT_TYPE_OBJECT ? this._variableIn.addListener(function () {
      _this.set(null), _this.set(_this._variableIn.getValue());
    }) : this._variableIn.addListener(this.set.bind(this)), this.set(this._variableIn.getValue())) : console.log("PORT VAR NOT FOUND!!!", t), this._useVariableName = t, e.useVariable = !0, e.variableName = this._useVariableName) : (e.variableName = this._useVariableName = null, e.useVariable = !1), this.setUiAttribs(e);
  }, V.prototype._handleNoTriggerOpAnimUpdates = function (t) {
    var e = !1;

    for (var _t5 = 0; _t5 < this.parent.portsIn.length; _t5++) {
      if (this.parent.portsIn.type == L.OP_PORT_TYPE_FUNCTION) {
        e = !0;
        break;
      }
    }

    e || (t ? this._notriggerAnimUpdate = this.parent.patch.on("onRenderFrame", this.updateAnim.bind(this)) : this.parent.patch.removeEventListener(this._notriggerAnimUpdate));
  }, V.prototype.setAnimated = function (t) {
    this._animated != t && (this._animated = t, this._animated && !this.anim && (this.anim = new q()), this._onAnimToggle()), this._handleNoTriggerOpAnimUpdates(), this.setUiAttribs({
      isAnimated: this._animated
    });
  }, V.prototype.toggleAnim = function (t) {
    this._animated = !this._animated, this._animated && !this.anim && (this.anim = new q()), this.setAnimated(this._animated), this._onAnimToggle(), this.setUiAttribs({
      isAnimated: this._animated
    });
  }, V.prototype.getType = function () {
    return this.type;
  }, V.prototype.isLinked = function () {
    return this.links.length > 0;
  }, V.prototype.isBoundToVar = function () {
    return null != this._useVariableName;
  }, V.prototype.isAnimated = function () {
    return this._animated;
  }, V.prototype.isHidden = function () {
    return this.uiAttribs.hidePort;
  }, V.prototype._onTriggered = function (t) {
    this.parent.updateAnims(), this.parent.enabled && this.onTriggered && this.onTriggered(t);
  }, V.prototype._onSetProfiling = function (t) {
    this.parent.patch.profiler.add("port", this), this.setValue(t), this.parent.patch.profiler.add("port", null);
  }, V.prototype._onTriggeredProfiling = function () {
    this.parent.enabled && this.onTriggered && (this.parent.patch.profiler.add("port", this), this.onTriggered(), this.parent.patch.profiler.add("port", null));
  }, V.prototype.onValueChange = function (t) {
    this.onChange = t;
  }, V.prototype.getUiActiveState = function () {
    return this._uiActiveState;
  }, V.prototype.setUiActiveState = function (t) {
    this._uiActiveState = t, this.onUiActiveStateChange && this.onUiActiveStateChange();
  }, V.prototype.hidePort = function () {
    console.log("op.hideport() is deprecated, do not use it!");
  }, V.portTypeNumberToString = function (t) {
    return t == L.OP_PORT_TYPE_VALUE ? "value" : t == L.OP_PORT_TYPE_FUNCTION ? "function" : t == L.OP_PORT_TYPE_OBJECT ? "object" : t == L.OP_PORT_TYPE_ARRAY ? "array" : t == L.OP_PORT_TYPE_STRING ? "string" : t == L.OP_PORT_TYPE_DYNAMIC ? "dynamic" : "unknown";
  };

  var G = /*#__PURE__*/function (_V) {
    _inherits(G, _V);

    var _super = _createSuper(G);

    function G(t, e, i, s, r) {
      var _this2;

      _classCallCheck(this, G);

      _this2 = _super.call(this, t, e, i, s), _this2.indexPort = r, _this2.indexPort.set = function (t) {
        var e = s.values;
        if (!e) return;
        var i = Math.floor(t);
        i = Math.min(i, e.length - 1), i = Math.max(i, 0), _this2.indexPort.setValue(i), _this2.set(e[i]), _this2.parent.patch.isEditorMode() && window.gui && gui.patchView.isCurrentOp(_this2.parent) && gui.opParams.show(_this2.parent);
      };
      return _this2;
    }

    _createClass(G, [{
      key: "setUiAttribs",
      value: function setUiAttribs(t) {
        var e = t.hidePort;
        t.hidePort = !0, _get(_getPrototypeOf(G.prototype), "setUiAttribs", this).call(this, t), void 0 !== e && this.indexPort.setUiAttribs({
          hidePort: e
        });
      }
    }]);

    return G;
  }(V);

  var H = /*#__PURE__*/function (_G) {
    _inherits(H, _G);

    var _super2 = _createSuper(H);

    function H() {
      _classCallCheck(this, H);

      return _super2.apply(this, arguments);
    }

    _createClass(H, [{
      key: "setUiAttribs",
      value: function setUiAttribs(t) {
        if (this.indexPort.isLinked()) for (var _e12 in t) {
          "greyout" != _e12 || t[_e12] || (t[_e12] = "true");
        }

        _get(_getPrototypeOf(H.prototype), "setUiAttribs", this).call(this, t);
      }
    }]);

    return H;
  }(G);

  var z = {
    Key: function Key(t) {
      this.time = 0, this.value = 0, this.ui = {}, this.onChange = null, this._easing = 0, this.bezTime = .5, this.bezValue = 0, this.bezTimeIn = -.5, this.bezValueIn = 0, this.cb = null, this.cbTriggered = !1;
      this._updateBezier = !1, this.setEasing(B.EASING_LINEAR), this.set(t);
    }
  };
  z.Key.linear = function (t, e, i) {
    return parseFloat(e.value) + parseFloat(i.value - e.value) * t;
  }, z.Key.easeLinear = function (t, e) {
    return z.Key.linear(t, this, e);
  }, z.Key.easeAbsolute = function (t, e) {
    return this.value;
  };

  var Y = function Y(t) {
    return Math.pow(2, 10 * (t - 1));
  };

  z.Key.easeExpoIn = function (t, e) {
    return t = Y(t), z.Key.linear(t, this, e);
  };

  var W = function W(t) {
    return t = 1 - Math.pow(2, -10 * t);
  };

  z.Key.easeExpoOut = function (t, e) {
    return t = W(t), z.Key.linear(t, this, e);
  };

  var X = function X(t) {
    return (t *= 2) < 1 ? t = .5 * Math.pow(2, 10 * (t - 1)) : (t--, t = .5 * (2 - Math.pow(2, -10 * t))), t;
  };

  z.Key.easeExpoInOut = function (t, e) {
    return t = X(t), z.Key.linear(t, this, e);
  }, z.Key.easeSinIn = function (t, e) {
    return t = -1 * Math.cos(t * Math.PI / 2) + 1, z.Key.linear(t, this, e);
  }, z.Key.easeSinOut = function (t, e) {
    return t = Math.sin(t * Math.PI / 2), z.Key.linear(t, this, e);
  }, z.Key.easeSinInOut = function (t, e) {
    return t = -.5 * (Math.cos(Math.PI * t) - 1), z.Key.linear(t, this, e);
  };

  var K = function K(t) {
    return t *= t * t;
  };

  z.Key.easeCubicIn = function (t, e) {
    return t = K(t), z.Key.linear(t, this, e);
  }, z.Key.easeInQuint = function (t, e) {
    return t *= t * t * t * t, z.Key.linear(t, this, e);
  }, z.Key.easeOutQuint = function (t, e) {
    return t = (t -= 1) * t * t * t * t + 1, z.Key.linear(t, this, e);
  }, z.Key.easeInOutQuint = function (t, e) {
    return (t /= .5) < 1 ? t *= .5 * t * t * t * t : t = .5 * ((t -= 2) * t * t * t * t + 2), z.Key.linear(t, this, e);
  }, z.Key.easeInQuart = function (t, e) {
    return t *= t * t * t, z.Key.linear(t, this, e);
  }, z.Key.easeOutQuart = function (t, e) {
    return t = -1 * ((t -= 1) * t * t * t - 1), z.Key.linear(t, this, e);
  }, z.Key.easeInOutQuart = function (t, e) {
    return (t /= .5) < 1 ? t *= .5 * t * t * t : t = -.5 * ((t -= 2) * t * t * t - 2), z.Key.linear(t, this, e);
  }, z.Key.bounce = function (t) {
    return (t /= 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, t;
  }, z.Key.easeInBounce = function (t, e) {
    return z.Key.linear(z.Key.bounce(t), this, e);
  }, z.Key.easeOutBounce = function (t, e) {
    return z.Key.linear(z.Key.bounce(t), this, e);
  }, z.Key.easeInElastic = function (t, e) {
    var i = 1.70158,
        s = 0,
        r = 1;
    return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (s || (s = .3), r < Math.abs(1) ? (r = 1, i = s / 4) : i = s / (2 * Math.PI) * Math.asin(1 / r), t = -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - i) * (2 * Math.PI) / s) + 0), z.Key.linear(t, this, e);
  }, z.Key.easeOutElastic = function (t, e) {
    var i = 1.70158,
        s = 0,
        r = 1;
    return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (s || (s = .3), r < Math.abs(1) ? (r = 1, i = s / 4) : i = s / (2 * Math.PI) * Math.asin(1 / r), t = r * Math.pow(2, -10 * t) * Math.sin((1 * t - i) * (2 * Math.PI) / s) + 1 + 0), z.Key.linear(t, this, e);
  }, z.Key.easeInBack = function (t, e) {
    var i = 1.70158;
    return t = t * t * ((i + 1) * t - i), z.Key.linear(t, this, e);
  }, z.Key.easeOutBack = function (t, e) {
    var i = 1.70158;
    return t = (t = t / 1 - 1) * t * ((i + 1) * t + i) + 1, z.Key.linear(t, this, e);
  }, z.Key.easeInOutBack = function (t, e) {
    var i = 1.70158;
    return t = (t /= .5) < 1 ? t * t * ((1 + (i *= 1.525)) * t - i) * .5 : .5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2), z.Key.linear(t, this, e);
  };

  var j = function j(t) {
    return t = --t * t * t + 1;
  };

  z.Key.easeCubicOut = function (t, e) {
    return t = j(t), z.Key.linear(t, this, e);
  };

  var Q = function Q(t) {
    return (t *= 2) < 1 ? t *= .5 * t * t : t = .5 * ((t -= 2) * t * t + 2), t;
  };

  z.Key.easeCubicInOut = function (t, e) {
    return t = Q(t), z.Key.linear(t, this, e);
  }, z.Key.easeSmoothStep = function (t, e) {
    var i = Math.max(0, Math.min(1, t));
    return t = i * i * (3 - 2 * i), z.Key.linear(t, this, e);
  }, z.Key.easeSmootherStep = function (t, e) {
    var i = Math.max(0, Math.min(1, (t - 0) / 1));
    return t = i * i * i * (i * (6 * i - 15) + 10), z.Key.linear(t, this, e);
  }, z.Key.prototype.setEasing = function (t) {
    this._easing = t, this._easing == B.EASING_ABSOLUTE ? this.ease = z.Key.easeAbsolute : this._easing == B.EASING_SMOOTHSTEP ? this.ease = z.Key.easeSmoothStep : this._easing == B.EASING_SMOOTHERSTEP ? this.ease = z.Key.easeSmootherStep : this._easing == B.EASING_CUBIC_IN ? this.ease = z.Key.easeCubicIn : this._easing == B.EASING_CUBIC_OUT ? this.ease = z.Key.easeCubicOut : this._easing == B.EASING_CUBIC_INOUT ? this.ease = z.Key.easeCubicInOut : this._easing == B.EASING_EXPO_IN ? this.ease = z.Key.easeExpoIn : this._easing == B.EASING_EXPO_OUT ? this.ease = z.Key.easeExpoOut : this._easing == B.EASING_EXPO_INOUT ? this.ease = z.Key.easeExpoInOut : this._easing == B.EASING_SIN_IN ? this.ease = z.Key.easeSinIn : this._easing == B.EASING_SIN_OUT ? this.ease = z.Key.easeSinOut : this._easing == B.EASING_SIN_INOUT ? this.ease = z.Key.easeSinInOut : this._easing == B.EASING_BACK_OUT ? this.ease = z.Key.easeOutBack : this._easing == B.EASING_BACK_IN ? this.ease = z.Key.easeInBack : this._easing == B.EASING_BACK_INOUT ? this.ease = z.Key.easeInOutBack : this._easing == B.EASING_ELASTIC_IN ? this.ease = z.Key.easeInElastic : this._easing == B.EASING_ELASTIC_OUT ? this.ease = z.Key.easeOutElastic : this._easing == B.EASING_ELASTIC_INOUT ? this.ease = z.Key.easeElasticInOut : this._easing == B.EASING_BOUNCE_IN ? this.ease = z.Key.easeInBounce : this._easing == B.EASING_BOUNCE_OUT ? this.ease = z.Key.easeOutBounce : this._easing == B.EASING_QUART_OUT ? this.ease = z.Key.easeOutQuart : this._easing == B.EASING_QUART_IN ? this.ease = z.Key.easeInQuart : this._easing == B.EASING_QUART_INOUT ? this.ease = z.Key.easeInOutQuart : this._easing == B.EASING_QUINT_OUT ? this.ease = z.Key.easeOutQuint : this._easing == B.EASING_QUINT_IN ? this.ease = z.Key.easeInQuint : this._easing == B.EASING_QUINT_INOUT ? this.ease = z.Key.easeInOutQuint : this._easing == B.EASING_BEZIER ? (this._updateBezier = !0, this.ease = z.Key.easeBezier) : (this._easing = B.EASING_LINEAR, this.ease = z.Key.easeLinear);
  }, z.Key.prototype.trigger = function () {
    this.cb(), this.cbTriggered = !0;
  }, z.Key.prototype.setValue = function (t) {
    this.value = t, this._updateBezier = !0, null !== this.onChange && this.onChange();
  }, z.Key.prototype.set = function (t) {
    t && (t.e && this.setEasing(t.e), t.cb && (this.cb = t.cb, this.cbTriggered = !1), t.b && (this.bezTime = t.b[0], this.bezValue = t.b[1], this.bezTimeIn = t.b[2], this.bezValueIn = t.b[3], this._updateBezier = !0), t.hasOwnProperty("t") && (this.time = t.t), t.hasOwnProperty("time") && (this.time = t.time), t.hasOwnProperty("v") ? this.value = t.v : t.hasOwnProperty("value") && (this.value = t.value)), null !== this.onChange && this.onChange();
  }, z.Key.prototype.getSerialized = function () {
    var t = {};
    return t.t = this.time, t.v = this.value, t.e = this._easing, this._easing == B.EASING_BEZIER && (t.b = [this.bezTime, this.bezValue, this.bezTimeIn, this.bezValueIn]), t;
  }, z.Key.prototype.getEasing = function () {
    return this._easing;
  };

  var q = function q(t) {
    t = t || {}, this.keys = [], this.onChange = null, this.stayInTimeline = !1, this.loop = !1, this.defaultEasing = t.defaultEasing || B.EASING_LINEAR, this.onLooped = null, this._timesLooped = 0, this._needsSort = !1;
  };

  q.prototype.forceChangeCallback = function () {
    null !== this.onChange && this.onChange();
  }, q.prototype.hasEnded = function (t) {
    return 0 === this.keys.length || this.keys[this.keys.length - 1].time <= t;
  }, q.prototype.isRising = function (t) {
    if (this.hasEnded(t)) return !1;
    var e = this.getKeyIndex(t);
    return this.keys[e].value < this.keys[e + 1].value;
  }, q.prototype.clearBefore = function (t) {
    var e = this.getValue(t),
        i = this.getKeyIndex(t);
    this.setValue(t, e), i > 1 && this.keys.splice(0, i);
  }, q.prototype.clear = function (t) {
    var e = 0;
    t && (e = this.getValue(t)), this.keys.length = 0, t && this.setValue(t, e), null !== this.onChange && this.onChange();
  }, q.prototype.sortKeys = function () {
    this.keys.sort(function (t, e) {
      return parseFloat(t.time) - parseFloat(e.time);
    }), this._needsSort = !1;
  }, q.prototype.getLength = function () {
    return 0 === this.keys.length ? 0 : this.keys[this.keys.length - 1].time;
  }, q.prototype.getKeyIndex = function (t) {
    var e = 0;

    for (var _i5 = 0; _i5 < this.keys.length; _i5++) {
      if (t >= this.keys[_i5].time && (e = _i5), this.keys[_i5].time > t) return e;
    }

    return e;
  }, q.prototype.setValue = function (t, e, i) {
    var s = !1;

    for (var _r3 in this.keys) {
      if (this.keys[_r3].time == t) {
        s = this.keys[_r3], this.keys[_r3].setValue(e), this.keys[_r3].cb = i;
        break;
      }
    }

    s || this.keys.push(new z.Key({
      time: t,
      value: e,
      e: this.defaultEasing,
      cb: i
    })), this.onChange && this.onChange(), this._needsSort = !0;
  }, q.prototype.getSerialized = function () {
    var t = {
      keys: []
    };
    t.loop = this.loop;

    for (var _e13 in this.keys) {
      t.keys.push(this.keys[_e13].getSerialized());
    }

    return t;
  }, q.prototype.getKey = function (t) {
    var e = this.getKeyIndex(t);
    return this.keys[e];
  }, q.prototype.getNextKey = function (t) {
    var e = this.getKeyIndex(t) + 1;
    return e >= this.keys.length && (e = this.keys.length - 1), this.keys[e];
  }, q.prototype.isFinished = function (t) {
    return this.keys.length <= 0 || t > this.keys[this.keys.length - 1].time;
  }, q.prototype.isStarted = function (t) {
    return !(this.keys.length <= 0) && t >= this.keys[0].time;
  }, q.prototype.getValue = function (t) {
    if (0 === this.keys.length) return 0;
    if (this._needsSort && this.sortKeys(), t < this.keys[0].time) return this.keys[0].value;
    var e = this.keys.length - 1;

    if (this.loop && t > this.keys[e].time) {
      t / this.keys[e].time > this._timesLooped && (this._timesLooped++, this.onLooped && this.onLooped()), t = (t - this.keys[0].time) % (this.keys[e].time - this.keys[0].time), t += this.keys[0].time;
    }

    var i = this.getKeyIndex(t);
    if (i >= e) return this.keys[e].cb && !this.keys[e].cbTriggered && this.keys[e].trigger(), this.keys[e].value;
    var s = parseInt(i, 10) + 1,
        r = this.keys[i],
        n = this.keys[s];
    if (r.cb && !r.cbTriggered && r.trigger(), !n) return -1;
    var o = (t - r.time) / (n.time - r.time);
    return r.ease || console.log("has no ease", r, n), r.ease(o, n);
  }, q.prototype.addKey = function (t) {
    void 0 === t.time ? _.log("key time undefined, ignoring!") : (this.keys.push(t), null !== this.onChange && this.onChange());
  }, q.prototype.easingFromString = function (t) {
    return "linear" == t ? B.EASING_LINEAR : "absolute" == t ? B.EASING_ABSOLUTE : "smoothstep" == t ? B.EASING_SMOOTHSTEP : "smootherstep" == t ? B.EASING_SMOOTHERSTEP : "Cubic In" == t ? B.EASING_CUBIC_IN : "Cubic Out" == t ? B.EASING_CUBIC_OUT : "Cubic In Out" == t ? B.EASING_CUBIC_INOUT : "Expo In" == t ? B.EASING_EXPO_IN : "Expo Out" == t ? B.EASING_EXPO_OUT : "Expo In Out" == t ? B.EASING_EXPO_INOUT : "Sin In" == t ? B.EASING_SIN_IN : "Sin Out" == t ? B.EASING_SIN_OUT : "Sin In Out" == t ? B.EASING_SIN_INOUT : "Back In" == t ? B.EASING_BACK_IN : "Back Out" == t ? B.EASING_BACK_OUT : "Back In Out" == t ? B.EASING_BACK_INOUT : "Elastic In" == t ? B.EASING_ELASTIC_IN : "Elastic Out" == t ? B.EASING_ELASTIC_OUT : "Bounce In" == t ? B.EASING_BOUNCE_IN : "Bounce Out" == t ? B.EASING_BOUNCE_OUT : "Quart Out" == t ? B.EASING_QUART_OUT : "Quart In" == t ? B.EASING_QUART_IN : "Quart In Out" == t ? B.EASING_QUART_INOUT : "Quint Out" == t ? B.EASING_QUINT_OUT : "Quint In" == t ? B.EASING_QUINT_IN : "Quint In Out" == t ? B.EASING_QUINT_INOUT : void 0;
  }, q.prototype.createPort = function (t, e, i) {
    var s = t.inDropDown(e, B.EASINGS);
    return s.set("linear"), s.defaultValue = "linear", s.onChange = function () {
      this.defaultEasing = this.easingFromString(s.get()), i && i();
    }.bind(this), s;
  }, q.slerpQuaternion = function (t, e, i, s, r, n) {
    q.slerpQuaternion.q1 || (q.slerpQuaternion.q1 = quat.create(), q.slerpQuaternion.q2 = quat.create());
    var o = i.getKeyIndex(t);
    var a = o + 1;
    if (a >= i.keys.length && (a = i.keys.length - 1), o == a) quat.set(e, i.keys[o].value, s.keys[o].value, r.keys[o].value, n.keys[o].value);else {
      var _h = i.keys[o].time,
          _l = (t - _h) / (i.keys[a].time - _h);

      quat.set(q.slerpQuaternion.q1, i.keys[o].value, s.keys[o].value, r.keys[o].value, n.keys[o].value), quat.set(q.slerpQuaternion.q2, i.keys[a].value, s.keys[a].value, r.keys[a].value, n.keys[a].value), quat.slerp(e, q.slerpQuaternion.q1, q.slerpQuaternion.q2, _l);
    }
    return e;
  };
  var J = z;
  J.Anim = q;

  var Z = function Z(t) {
    d.apply(this), this.id = CABLES.uuid(), this.portIn = null, this.portOut = null, this.scene = t, this.activityCounter = 0, this.ignoreInSerialize = !1;
  };

  Z.prototype.setValue = function (t) {
    void 0 === t ? this._setValue() : this.portIn.set(t);
  }, Z.prototype.activity = function () {
    this.activityCounter++;
  }, Z.prototype._setValue = function () {
    if (!this.portOut) return void this.remove();
    var t = this.portOut.get();
    t == t && (this.portIn.type != L.OP_PORT_TYPE_FUNCTION && this.activity(), (this.portIn.get() !== t || this.portIn.changeAlways) && this.portIn.set(t));
  }, Z.prototype.getOtherPort = function (t) {
    return t == this.portIn ? this.portOut : this.portIn;
  }, Z.prototype.remove = function () {
    this.portIn && this.portIn.removeLink(this), this.portOut && this.portOut.removeLink(this), this.scene && this.scene.emitEvent("onUnLink", this.portIn, this.portOut, this), !this.portIn || this.portIn.type != L.OP_PORT_TYPE_OBJECT && this.portIn.type != L.OP_PORT_TYPE_ARRAY || (this.portIn.set(null), this.portIn.links.length > 0 && this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get())), this.portIn && this.portIn.parent._checkLinksNeededToWork(), this.portOut && this.portOut.parent._checkLinksNeededToWork(), this.portIn = null, this.portOut = null, this.scene = null;
  }, Z.prototype.link = function (t, e) {
    if (!Z.canLink(t, e)) return _.log("cannot link ports!"), !1;
    t.direction == k.PORT_DIR_IN ? (this.portIn = t, this.portOut = e) : (this.portIn = e, this.portOut = t), t.addLink(this), e.addLink(this), this.setValue(), t.onLink && t.onLink(this), e.onLink && e.onLink(this), t.parent._checkLinksNeededToWork(), e.parent._checkLinksNeededToWork();
  }, Z.prototype.getSerialized = function () {
    var t = {};
    return t.portIn = this.portIn.getName(), t.portOut = this.portOut.getName(), t.objIn = this.portIn.parent.id, t.objOut = this.portOut.parent.id, t;
  }, Z.canLinkText = function (t, e) {
    if (t.direction == e.direction) {
      var _t6 = "(out)";
      return e.direction == k.PORT_DIR_IN && (_t6 = "(in)"), "can not link: same direction " + _t6;
    }

    return t.parent == e.parent ? "can not link: same op" : t.type != L.OP_PORT_TYPE_DYNAMIC && e.type != L.OP_PORT_TYPE_DYNAMIC && t.type != e.type ? "can not link: different type" : t ? e ? t.direction == k.PORT_DIR_IN && t.isAnimated() || e.direction == k.PORT_DIR_IN && e.isAnimated() ? "can not link: is animated" : t.isLinkedTo(e) ? "ports already linked" : t.canLink && !t.canLink(e) || e.canLink && !e.canLink(t) ? "Incompatible" : "can link" : "can not link: port 2 invalid" : "can not link: port 1 invalid";
  }, Z.canLink = function (t, e) {
    return !!t && !!e && (t.direction != k.PORT_DIR_IN || !t.isAnimated()) && (e.direction != k.PORT_DIR_IN || !e.isAnimated()) && !t.isHidden() && !e.isHidden() && !t.isLinkedTo(e) && t.direction != e.direction && (t.type == e.type || t.type == L.OP_PORT_TYPE_DYNAMIC || e.type == L.OP_PORT_TYPE_DYNAMIC) && (t.type == L.OP_PORT_TYPE_DYNAMIC || e.type == L.OP_PORT_TYPE_DYNAMIC || t.parent != e.parent && !(t.canLink && !t.canLink(e)) && !(e.canLink && !e.canLink(t)));
  };

  var $ = function $() {
    if (d.apply(this), this.data = {}, this.storage = {}, this.objName = "", this.portsOut = [], this.portsIn = [], this.portsInData = [], this.opId = "", this.uiAttribs = {}, this.enabled = !0, this.patch = arguments[0], this.name = arguments[1], this._needsLinkedToWork = [], this._needsParentOp = null, this._shortOpName = "", this.hasUiErrors = !1, this._uiErrors = {}, arguments[1]) {
      if (this._shortOpName = arguments[1].split(".")[arguments[1].split(".").length - 1], this._shortOpName.indexOf(L.OP_VERSION_PREFIX) > 0) {
        var _t7 = this._shortOpName.split(L.OP_VERSION_PREFIX)[1];

        this._shortOpName = this._shortOpName.substring(0, this._shortOpName.length - (L.OP_VERSION_PREFIX + _t7).length);
      }

      this.uiAttribs.title = this._shortOpName;
    }

    this.id = arguments[2] || A(), this.onAddPort = null, this.onCreate = null, this.onResize = null, this.onLoaded = null, this.onDelete = null, this.onUiAttrChange = null, this._eventCallbacks = {}, this._instances = null, this.preRender = null, this.init = null;
  };

  {
    $.prototype.clearUiAttrib = function (t) {
      var e = {
        name: null
      };
      this.uiAttrib(e);
    }, $.prototype.getTitle = function () {
      return this.uiAttribs && this.uiAttribs.title || this.name;
    }, $.prototype.setTitle = function (t) {
      var e = this.name != t;
      this.name = t, this.uiAttr({
        title: t
      }), e && this.fireEvent("onTitleChange", t);
    };

    var _t8 = function _t8(t) {
      if (t) {
        (t.error || t.warning || t.hint) && console.warn("old ui error/warning attribute in " + this.name + ", use op.setUiError !", t), "object" != _typeof(t) && console.error("op.uiAttrib attribs are not string"), this.uiAttribs || (this.uiAttribs = {});

        for (var _e14 in t) {
          this.uiAttribs[_e14] = t[_e14];
        }

        t.title && t.title != this.name && this.setTitle(t.title), this.fireEvent("onUiAttribsChange", t);
      }
    };

    $.prototype.setUiAttrib = _t8, $.prototype.uiAttr = _t8, $.prototype.getName = function () {
      return this.uiAttribs.name ? this.uiAttribs.name : this.objName.split(".");
    }, $.prototype.addOutPort = function (t) {
      return t.direction = k.PORT_DIR_OUT, t.parent = this, this.portsOut.push(t), this.fireEvent("onPortAdd", t), t;
    }, $.prototype.hasDynamicPort = function () {
      var t = 0;

      for (t = 0; t < this.portsIn.length; t++) {
        if (this.portsIn[t].type == L.OP_PORT_TYPE_DYNAMIC) return !0;
        if ("dyn" == this.portsIn[t].getName()) return !0;
      }

      for (t = 0; t < this.portsOut.length; t++) {
        if (this.portsOut[t].type == L.OP_PORT_TYPE_DYNAMIC) return !0;
        if ("dyn" == this.portsOut[t].getName()) return !0;
      }

      return !1;
    }, $.prototype.addInPort = function (t) {
      if (!(t instanceof V)) throw new Error("parameter is not a port!");
      return t.direction = k.PORT_DIR_IN, t.parent = this, this.portsIn.push(t), this.fireEvent("onPortAdd", t), t;
    }, $.prototype.inFunction = $.prototype.inTrigger = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_FUNCTION));
      return void 0 !== e && i.set(e), i;
    }, $.prototype.inFunctionButton = $.prototype.inTriggerButton = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_FUNCTION, {
        display: "button"
      }));
      return void 0 !== e && i.set(e), i;
    }, $.prototype.inFunctionButton = $.prototype.inUiTriggerButtons = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_FUNCTION, {
        display: "buttons"
      }));
      return void 0 !== e && i.set(e), i;
    }, $.prototype.inValueFloat = $.prototype.inValue = $.prototype.inFloat = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_VALUE));
      return void 0 !== e && (i.set(e), i.defaultValue = e), i;
    }, $.prototype.inValueBool = $.prototype.inBool = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_VALUE, {
        display: "bool"
      }));
      return void 0 !== e && (i.set(e), i.defaultValue = i.get()), i;
    }, $.prototype.inValueString = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_VALUE, {
        type: "string"
      }));
      return i.value = "", void 0 !== e && (i.set(e), i.defaultValue = e), i;
    }, $.prototype.inString = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_STRING, {
        type: "string"
      }));
      return e = e || "", i.value = e, i.set(e), i.defaultValue = e, i;
    }, $.prototype.inValueText = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_VALUE, {
        type: "string",
        display: "text"
      }));
      return i.value = "", void 0 !== e && (i.set(e), i.defaultValue = e), i;
    }, $.prototype.inTextarea = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_STRING, {
        type: "string",
        display: "text"
      }));
      return i.value = "", void 0 !== e && (i.set(e), i.defaultValue = e), i;
    }, $.prototype.inStringEditor = function (t, e, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
      var r = this.addInPort(new V(this, t, L.OP_PORT_TYPE_STRING, {
        type: "string",
        display: "editor",
        editorSyntax: i,
        hideFormatButton: s
      }));
      return r.value = "", void 0 !== e && (r.set(e), r.defaultValue = e), r;
    }, $.prototype.inValueEditor = function (t, e, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
      var r = this.addInPort(new V(this, t, L.OP_PORT_TYPE_VALUE, {
        type: "string",
        display: "editor",
        editorSyntax: i,
        hideFormatButton: s
      }));
      return r.value = "", void 0 !== e && (r.set(e), r.defaultValue = e), r;
    }, $.prototype.inValueSelect = $.prototype.inDropDown = function (t, e, i, s) {
      var r = null;

      if (s) {
        var _i6 = new V(this, t, L.OP_PORT_TYPE_VALUE, {
          display: "dropdown",
          hidePort: !0,
          type: "string",
          values: e
        });

        r = this.addInPort(_i6);
      } else {
        var _s5 = new V(this, t + " index", L.OP_PORT_TYPE_VALUE, {
          increment: "integer",
          hideParam: !0
        }),
            _n2 = this.addInPort(_s5),
            _o = new H(this, t, L.OP_PORT_TYPE_VALUE, {
          display: "dropdown",
          hidePort: !0,
          type: "string",
          values: e
        }, _n2);

        if (_s5.onLinkChanged = function () {
          _o.setUiAttribs({
            greyout: _s5.isLinked()
          });
        }, r = this.addInPort(_o), void 0 !== i) {
          r.set(i);

          var _t9 = e.findIndex(function (t) {
            return t == i;
          });

          _n2.setValue(_t9), r.defaultValue = i, _n2.defaultValue = _t9;
        }
      }

      return r;
    }, $.prototype.inSwitch = function (t, e, i, s) {
      var r = null;

      if (s) {
        var _i7 = new V(this, t, L.OP_PORT_TYPE_STRING, {
          display: "switch",
          hidePort: !0,
          type: "string",
          values: e
        });

        r = this.addInPort(_i7);
      } else {
        var _s6 = new V(this, t + " index", L.OP_PORT_TYPE_VALUE, {
          increment: "integer",
          hideParam: !0
        }),
            _n3 = this.addInPort(_s6),
            _o2 = new G(this, t, L.OP_PORT_TYPE_STRING, {
          display: "switch",
          hidePort: !0,
          type: "string",
          values: e
        }, _n3);

        if (_s6.onLinkChanged = function () {
          _o2.setUiAttribs({
            greyout: _s6.isLinked()
          });
        }, r = this.addInPort(_o2), void 0 !== i) {
          r.set(i);

          var _t10 = e.findIndex(function (t) {
            return t == i;
          });

          _n3.setValue(_t10), r.defaultValue = i, _n3.defaultValue = _t10;
        }
      }

      return r;
    }, $.prototype.inValueInt = $.prototype.inInt = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_VALUE, {
        increment: "integer"
      }));
      return void 0 !== e && (i.set(e), i.defaultValue = e), i;
    }, $.prototype.inFile = function (t, e, i) {
      var s = this.addInPort(new V(this, t, L.OP_PORT_TYPE_VALUE, {
        display: "file",
        type: "string",
        filter: e
      }));
      return void 0 !== i && (s.set(i), s.defaultValue = i), s;
    }, $.prototype.inUrl = function (t, e, i) {
      var s = this.addInPort(new V(this, t, L.OP_PORT_TYPE_STRING, {
        display: "file",
        type: "string",
        filter: e
      }));
      return void 0 !== i && (s.set(i), s.defaultValue = i), s;
    }, $.prototype.inTexture = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_OBJECT, {
        display: "texture",
        objType: "texture",
        preview: !0
      }));
      return void 0 !== e && i.set(e), i;
    }, $.prototype.inObject = function (t, e, i) {
      var s = this.addInPort(new V(this, t, L.OP_PORT_TYPE_OBJECT, {
        objType: i
      }));
      return void 0 !== e && s.set(e), s;
    }, $.prototype.inGradient = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_VALUE, {
        display: "gradient",
        hidePort: !0
      }));
      return void 0 !== e && i.set(e), i;
    }, $.prototype.inArray = function (t, e) {
      var i = this.addInPort(new V(this, t, L.OP_PORT_TYPE_ARRAY));
      return void 0 !== e && i.set(e), i;
    }, $.prototype.inValueSlider = $.prototype.inFloatSlider = function (t, e, i, s) {
      var r = {
        display: "range"
      };
      null != i && null != s && (r.min = i, r.max = s);
      var n = this.addInPort(new V(this, t, L.OP_PORT_TYPE_VALUE, r));
      return void 0 !== e && (n.set(e), n.defaultValue = e), n;
    }, $.prototype.outFunction = $.prototype.outTrigger = function (t, e) {
      var i = this.addOutPort(new V(this, t, L.OP_PORT_TYPE_FUNCTION));
      return void 0 !== e && i.set(e), i;
    }, $.prototype.outValue = $.prototype.outNumber = function (t, e) {
      var i = this.addOutPort(new V(this, t, L.OP_PORT_TYPE_VALUE));
      return void 0 !== e && i.set(e), i;
    }, $.prototype.outValueBool = $.prototype.outBool = function (t, e) {
      var i = this.addOutPort(new V(this, t, L.OP_PORT_TYPE_VALUE, {
        display: "bool"
      }));
      return void 0 !== e ? i.set(e) : i.set(0), i;
    }, $.prototype.outValueString = function (t, e) {
      var i = this.addOutPort(new V(this, t, L.OP_PORT_TYPE_VALUE, {
        type: "string"
      }));
      return void 0 !== e && i.set(e), i;
    }, $.prototype.outString = function (t, e) {
      var i = this.addOutPort(new V(this, t, L.OP_PORT_TYPE_STRING, {
        type: "string"
      }));
      return void 0 !== e ? i.set(e) : i.set(""), i;
    }, $.prototype.outObject = function (t, e, i) {
      var s = this.addOutPort(new V(this, t, L.OP_PORT_TYPE_OBJECT, {
        objType: i || null
      }));
      return void 0 !== e && s.set(e), s.ignoreValueSerialize = !0, s;
    }, $.prototype.outArray = function (t, e) {
      var i = this.addOutPort(new V(this, t, L.OP_PORT_TYPE_ARRAY));
      return void 0 !== e && i.set(e), i.ignoreValueSerialize = !0, i;
    }, $.prototype.outTexture = function (t, e) {
      var i = this.addOutPort(new V(this, t, L.OP_PORT_TYPE_OBJECT, {
        preview: !0,
        objType: "texture"
      }));
      return void 0 !== e && i.set(e), i.ignoreValueSerialize = !0, i;
    }, $.prototype.inDynamic = function (t, e, i, s) {
      var r = new V(this, t, L.OP_PORT_TYPE_DYNAMIC, i);
      return r.shouldLink = function (t, i) {
        if (e && g.isArray(e)) {
          for (var _s7 = 0; _s7 < e.length; _s7++) {
            if (t == this && i.type === e[_s7]) return !0;
            if (i == this && t.type === e[_s7]) return !0;
          }

          return !1;
        }

        return !0;
      }, this.addInPort(r), void 0 !== s && (r.set(s), r.defaultValue = s), r;
    }, $.prototype.printInfo = function () {
      for (var _t11 = 0; _t11 < this.portsIn.length; _t11++) {
        _.log("in: " + this.portsIn[_t11].getName());
      }

      for (var _t12 in this.portsOut) {
        _.log("out: " + this.portsOut[_t12].getName());
      }
    }, $.prototype.getOutChilds = function () {
      var t = [];

      for (var _e15 in this.portsOut) {
        for (var _i8 in this.portsOut[_e15].links) {
          this.portsOut[_e15].type == L.OP_PORT_TYPE_FUNCTION && t.push(this.portsOut[_e15].links[_i8].portIn.parent);
        }
      }

      return t;
    }, $.prototype.markChilds = function () {
      this.marked = !0;

      for (var _t13 in this.portsOut) {
        for (var _e16 in this.portsOut[_t13].links) {
          this.portsOut[_t13].parent.marked = !0, this.portsOut[_t13].links[_e16].portIn.parent != this && this.portsOut[_t13].links[_e16].portIn.parent.markChilds();
        }
      }
    }, $.prototype.selectChilds = function () {
      this.setUiAttrib({
        selected: !0
      });

      for (var _t14 in this.portsOut) {
        for (var _e17 in this.portsOut[_t14].links) {
          this.portsOut[_t14].parent.setUiAttrib({
            selected: !0
          }), this.portsOut[_t14].links[_e17].portIn.parent != this && this.portsOut[_t14].links[_e17].portIn.parent.selectChilds();
        }
      }
    }, $.prototype.deleteChilds = function () {
      var t = [];

      for (var _e18 in this.portsOut) {
        for (var _i9 in this.portsOut[_e18].links) {
          this.portsOut[_e18].links[_i9].portIn.parent != this && (this.portsOut[_e18].parent != this && t.push(this.portsOut[_e18].parent), t.push(this.portsOut[_e18].links[_i9].portIn.parent), this.portsOut[_e18].links[_i9].portIn.parent.deleteChilds());
        }
      }

      for (var _e19 in t) {
        this.patch.deleteOp(t[_e19].id);
      }
    }, $.prototype.removeLinks = function () {
      for (var _t15 = 0; _t15 < this.portsIn.length; _t15++) {
        this.portsIn[_t15].removeLinks();
      }

      for (var _t16 = 0; _t16 < this.portsOut.length; _t16++) {
        this.portsOut[_t16].removeLinks();
      }
    }, $.prototype.countFittingPorts = function (t) {
      var e = 0;

      for (var _i10 in this.portsOut) {
        Z.canLink(t, this.portsOut[_i10]) && e++;
      }

      for (var _i11 in this.portsIn) {
        Z.canLink(t, this.portsIn[_i11]) && e++;
      }

      return e;
    }, $.prototype.findFittingPort = function (t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

      if (e) {
        for (var _e20 in this.portsIn) {
          if (Z.canLink(t, this.portsIn[_e20])) return this.portsIn[_e20];
        }

        for (var _e21 in this.portsOut) {
          if (Z.canLink(t, this.portsOut[_e21])) return this.portsOut[_e21];
        }
      } else {
        for (var _e22 in this.portsOut) {
          if (Z.canLink(t, this.portsOut[_e22])) return this.portsOut[_e22];
        }

        for (var _e23 in this.portsIn) {
          if (Z.canLink(t, this.portsIn[_e23])) return this.portsIn[_e23];
        }
      }
    }, $.prototype.getSerialized = function (t) {
      var e = {};
      this.opId && (e.opId = this.opId), e.objName = this.objName, e.id = this.id, e.uiAttribs = this.uiAttribs, e.storage = this.storage, this.uiAttribs.title == this._shortOpName && delete this.uiAttribs.title, this.uiAttribs.hasOwnProperty("working") && 1 == this.uiAttribs.working && delete this.uiAttribs.working, t && this.uiAttribs.hasOwnProperty("uierrors") && delete this.uiAttribs.uierrors, e.portsIn = [], e.portsOut = [];

      for (var _t17 = 0; _t17 < this.portsIn.length; _t17++) {
        e.portsIn.push(this.portsIn[_t17].getSerialized());
      }

      for (var _t18 in this.portsOut) {
        e.portsOut.push(this.portsOut[_t18].getSerialized());
      }

      return e;
    }, $.prototype.getFirstOutPortByType = function (t) {
      for (var _e24 in this.portsOut) {
        if (this.portsOut[_e24].type == t) return this.portsOut[_e24];
      }
    }, $.prototype.getPort = $.prototype.getPortByName = function (t, e) {
      if (e) {
        for (var _e25 = 0; _e25 < this.portsIn.length; _e25++) {
          if (this.portsIn[_e25].getName().toLowerCase() == t) return this.portsIn[_e25];
        }

        for (var _e26 = 0; _e26 < this.portsOut.length; _e26++) {
          if (this.portsOut[_e26].getName().toLowerCase() == t) return this.portsOut[_e26];
        }
      } else {
        for (var _e27 = 0; _e27 < this.portsIn.length; _e27++) {
          if (this.portsIn[_e27].getName() == t) return this.portsIn[_e27];
        }

        for (var _e28 = 0; _e28 < this.portsOut.length; _e28++) {
          if (this.portsOut[_e28].getName() == t) return this.portsOut[_e28];
        }
      }
    }, $.prototype.getPortById = function (t) {
      for (var _e29 = 0; _e29 < this.portsIn.length; _e29++) {
        if (this.portsIn[_e29].id == t) return this.portsIn[_e29];
      }

      for (var _e30 = 0; _e30 < this.portsOut.length; _e30++) {
        if (this.portsOut[_e30].id == t) return this.portsOut[_e30];
      }
    }, $.prototype.updateAnims = function () {
      for (var _t19 = 0; _t19 < this.portsIn.length; _t19++) {
        this.portsIn[_t19].updateAnim();
      }
    }, $.prototype.log = function () {
      if (this.patch.silent) return;
      var t = ["[op " + this._shortOpName + "]"];
      t.push.apply(t, arguments), Function.prototype.apply.apply(console.log, [console, t]);
    }, $.prototype.error = function () {
      if (this.patch.silent) return;
      var t = ["[op " + this._shortOpName + "]"];
      t.push.apply(t, arguments), Function.prototype.apply.apply(console.error, [console, t]);
    }, $.prototype.warn = function () {
      if (this.patch.silent) return;
      var t = ["[op " + this._shortOpName + "]"];
      t.push.apply(t, arguments), Function.prototype.apply.apply(console.warn, [console, t]);
    }, $.prototype.unLink = function () {
      for (var _t20 = 0; _t20 < this.portsOut.length; _t20++) {
        this.portsOut[_t20].removeLinks();
      }

      for (var _t21 = 0; _t21 < this.portsIn.length; _t21++) {
        this.portsIn[_t21].removeLinks();
      }
    }, $.prototype.profile = function (t) {
      for (var _t22 = 0; _t22 < this.portsIn.length; _t22++) {
        this.portsIn[_t22]._onTriggered = this.portsIn[_t22]._onTriggeredProfiling, this.portsIn[_t22].set = this.portsIn[_t22]._onSetProfiling;
      }
    }, $.prototype.findParent = function (t) {
      for (var _e31 = 0; _e31 < this.portsIn.length; _e31++) {
        if (this.portsIn[_e31].isLinked()) {
          if (this.portsIn[_e31].links[0].portOut.parent.objName == t) return this.portsIn[_e31].links[0].portOut.parent;
          var _i12 = null;
          if (_i12 = this.portsIn[_e31].links[0].portOut.parent.findParent(t), _i12) return _i12;
        }
      }

      return null;
    }, $.prototype.cleanUp = function () {
      if (this._instances) {
        for (var _t23 = 0; _t23 < this._instances.length; _t23++) {
          this._instances[_t23].onDelete && this._instances[_t23].onDelete();
        }

        this._instances.length = 0;
      }
    }, $.prototype.instanced = function (t) {
      if (console.log("instanced", this.patch.instancing.numCycles()), 0 === this.patch.instancing.numCycles()) return !1;
      var e = 0,
          i = 0;

      if (!this._instances || this._instances.length != this.patch.instancing.numCycles()) {
        for (this._instances || (this._instances = []), _.log("creating instances of ", this.objName, this.patch.instancing.numCycles(), this._instances.length), this._instances.length = this.patch.instancing.numCycles(), e = 0; e < this._instances.length; e++) {
          this._instances[e] = this.patch.createOp(this.objName, !0), this._instances[e].instanced = function () {
            return !1;
          }, this._instances[e].uiAttr(this.uiAttribs);

          for (var _t24 = 0; _t24 < this.portsOut.length; _t24++) {
            this.portsOut[_t24].type == L.OP_PORT_TYPE_FUNCTION && (this._instances[e].getPortByName(this.portsOut[_t24].name).trigger = this.portsOut[_t24].trigger.bind(this.portsOut[_t24]));
          }
        }

        for (i = 0; i < this.portsIn.length; i++) {
          this.portsIn[i].onChange = null, this.portsIn[i].onValueChanged = null;
        }
      }

      for (i = 0; i < this.portsIn.length; i++) {
        this.portsIn[i].type != L.OP_PORT_TYPE_VALUE && this.portsIn[i].type != L.OP_PORT_TYPE_ARRAY || this._instances[this.patch.instancing.index()].portsIn[i].set(this.portsIn[i].get()), this.portsIn[i].type, L.OP_PORT_TYPE_FUNCTION;
      }

      for (i = 0; i < this.portsOut.length; i++) {
        this.portsOut[i].type == L.OP_PORT_TYPE_VALUE && this.portsOut[i].set(this._instances[this.patch.instancing.index()].portsOut[i].get());
      }

      return !0;
    }, $.prototype.initInstancable = function () {}, $.prototype.setValues = function (t) {
      for (var _e32 in t) {
        var _i13 = this.getPortByName(_e32);

        _i13 ? _i13.set(t[_e32]) : _.log("op.setValues: port not found:", _e32);
      }
    }, $.prototype.setUiError = function (t, e, i) {
      if (!e && !this.hasUiErrors) return;
      if (!e && !this._uiErrors.hasOwnProperty(t)) return;
      if (this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e) return;
      t.indexOf(" ") > -1 && console.warn("setuierror id cant have spaces!"), !e && this._uiErrors.hasOwnProperty(t) ? delete this._uiErrors[t] : !e || this._uiErrors.hasOwnProperty(t) && this._uiErrors[t].txt == e || (null == i && (i = 2), this._uiErrors[t] = {
        txt: e,
        level: i,
        id: t
      });
      var s = [];

      for (var _t25 in this._uiErrors) {
        s.push(this._uiErrors[_t25]);
      }

      this.uiAttr({
        uierrors: s
      }), this.hasUiErrors = Object.keys(this._uiErrors).length;
    }, $.prototype.setError = function (t, e) {
      if (console.warn("old error message op.error() - use op.setUiError()"), void 0 === e) this.uiAttr({
        error: t
      });else if (this._uiErrors[t] != e) {
        this._uiErrors[t] = e, e || delete this._uiErrors[t];
        var _i14 = [];

        for (var _t26 in this._uiErrors) {
          _i14.push(this._uiErrors[_t26]);
        }

        this.uiAttr({
          errors: _i14
        }), console.log(_i14);
      }
    }, $.prototype.addListener = $.prototype.addEventListener = function (t, e) {
      this._eventCallbacks[t] ? this._eventCallbacks[t].push(e) : this._eventCallbacks[t] = [e];
    }, $.prototype.hasEventListener = function (t, e) {
      if (t && e) {
        if (this._eventCallbacks[t]) {
          return -1 != this._eventCallbacks[t].indexOf(e);
        }
      } else _.log("hasListener: missing parameters");
    }, $.prototype.removeEventListener = function (t, e) {
      if (this._eventCallbacks[t]) {
        var _i15 = this._eventCallbacks[t].indexOf(e);

        -1 == _i15 ? _.log("eventlistener " + t + " not found...") : this._eventCallbacks[t].slice(_i15);
      }
    }, $.prototype.fireEvent = function (t, e) {
      if (this._eventCallbacks[t]) for (var _i16 = 0; _i16 < this._eventCallbacks[t].length; _i16++) {
        this._eventCallbacks[t][_i16] && this._eventCallbacks[t][_i16].cb(e);
      }
      this.onUiAttrChange && "onUiAttribsChange" == t && this.onUiAttrChange(e);
    }, $.prototype.setEnabled = function (t) {
      this.enabled = t, this.fireEvent("onEnabledChange", t);
    }, $.prototype.setPortGroup = function (t, e) {
      for (var _i17 = 0; _i17 < e.length; _i17++) {
        e[_i17] && e[_i17].setUiAttribs ? e[_i17].setUiAttribs({
          group: t
        }) : console.error("setPortGroup: invalid port!");
      }
    }, $.prototype.setUiAxisPorts = function (t, e, i) {
      t && t.setUiAttribs({
        axis: "X"
      }), e && e.setUiAttribs({
        axis: "Y"
      }), i && i.setUiAttribs({
        axis: "Z"
      });
    }, $.prototype.removePort = function (t) {
      for (var _e33 = 0; _e33 < this.portsIn.length; _e33++) {
        if (this.portsIn[_e33] == t) return this.portsIn.splice(_e33, 1), this.fireEvent("onUiAttribsChange", {}), void this.fireEvent("onPortRemoved", {});
      }
    }, $.prototype._checkLinksNeededToWork = function () {}, $.prototype.toWorkNeedsParent = function (t) {
      this.patch.isEditorMode() && (this._needsParentOp = t);
    }, $.prototype.toWorkPortsNeedToBeLinked = function () {
      if (this.patch.isEditorMode()) for (var _t27 = 0; _t27 < arguments.length; _t27++) {
        -1 == this._needsLinkedToWork.indexOf(arguments[_t27]) && this._needsLinkedToWork.push(arguments[_t27]);
      }
    }, $.prototype.toWorkPortsNeedToBeLinkedReset = function () {
      this.patch.isEditorMode() && (this._needsLinkedToWork.length = 0, this.checkLinkTimeWarnings && this.checkLinkTimeWarnings());
    }, $.prototype.initVarPorts = function () {
      for (var _t28 = 0; _t28 < this.portsIn.length; _t28++) {
        this.portsIn[_t28].getVariableName() && this.portsIn[_t28].setVariable(this.portsIn[_t28].getVariableName());
      }
    }, $.prototype.refreshParams = function () {
      this.patch && this.patch.isEditorMode() && this.isCurrentUiOp() && gui.opParams.show(this);
    }, $.prototype.isCurrentUiOp = function () {
      if (this.patch.isEditorMode()) return gui.patchView.isCurrentOp(this);
    };
  }
  $.getNamespaceClassName = function (t) {
    return t ? t.startsWith("Ops.Gl") ? "gl" : t.startsWith("Ops.WebAudio") ? "audio" : t.startsWith("Ops.Devices") ? "devices" : t.startsWith("Ops.Html") || t.startsWith("Ops.Sidebar") ? "html" : t.startsWith("Ops.Math") ? "math" : t.startsWith("Ops.User") ? "user" : "default" : "default";
  }, $.isSubpatchOp = function (t) {
    return "Ops.Ui.Patch" == t || "Ops.Ui.SubPatch" == t;
  };

  var tt = function tt(t, e) {
    if (!t) throw new Error("no cgl");
    this._cgl = t, this.tex = this._cgl.gl.createTexture(), this.id = A(), this.width = 0, this.height = 0, this.loading = !1, this.flip = !0, this.flipped = !1, this.shadowMap = !1, this.deleted = !1, this.anisotropic = 0, this.filter = tt.FILTER_NEAREST, this.wrap = tt.WRAP_CLAMP_TO_EDGE, this.texTarget = this._cgl.gl.TEXTURE_2D, e && e.type && (this.texTarget = e.type), this.textureType = tt.TYPE_DEFAULT, this.unpackAlpha = !0, this._fromData = !0, this.name = "unknown", e ? (this.name = e.name || this.name, e.isDepthTexture && (this.textureType = tt.TYPE_DEPTH), e.isFloatingPointTexture && (this.textureType = tt.TYPE_FLOAT), "textureType" in e && (this.textureType = e.textureType), "filter" in e && (this.filter = e.filter), "wrap" in e && (this.wrap = e.wrap), "unpackAlpha" in e && (this.unpackAlpha = e.unpackAlpha), "flip" in e && (this.flip = e.flip), "shadowMap" in e && (this.shadowMap = e.shadowMap), "anisotropic" in e && (this.anisotropic = e.anisotropic)) : e = {}, e.width || (e.width = 8), e.height || (e.height = 8), this._cgl.profileData.profileTextureNew++, this._cgl.profileData.addHeavyEvent("texture created", this.name, e.width + "x" + e.height), this.setSize(e.width, e.height), this.getInfoOneLine();
  };

  tt.prototype.isFloatingPoint = function () {
    return this.textureType == tt.TYPE_FLOAT;
  }, tt.prototype.compareSettings = function (t) {
    return !!t && t.width == this.width && t.height == this.height && t.filter == this.filter && t.wrap == this.wrap && t.textureType == this.textureType && t.unpackAlpha == this.unpackAlpha && t.anisotropic == this.anisotropic && t.shadowMap == this.shadowMap && t.texTarget == this.texTarget && t.flip == this.flip;
  }, tt.prototype.clone = function () {
    var t = new tt(this._cgl, {
      name: this.name,
      filter: this.filter,
      wrap: this.wrap,
      textureType: this.textureType,
      unpackAlpha: this.unpackAlpha,
      flip: this.flip,
      width: this.width,
      height: this.height
    });
    return this.compareSettings(t) || (console.error("Cloned texture settings do not compare!"), _.log(this), _.log(t)), t;
  }, tt.prototype.setSize = function (t, e) {
    if ((t != t || t <= 0 || !t) && (t = 8), (e != e || e <= 0 || !e) && (e = 8), (t > this._cgl.maxTexSize || e > this._cgl.maxTexSize) && console.error("texture size too big! " + t + "x" + e + " / max: " + this._cgl.maxTexSize), t = Math.min(t, this._cgl.maxTexSize), e = Math.min(e, this._cgl.maxTexSize), t = Math.floor(t), e = Math.floor(e), this.width == t && this.height == e) return;
    this.width = t, this.height = e, this.shortInfoString = this.getInfoOneLine(), this._cgl.gl.bindTexture(this.texTarget, this.tex), this._cgl.profileData.profileTextureResize++;
    if (this.textureType != tt.TYPE_FLOAT || this.filter != tt.FILTER_LINEAR || this._cgl.gl.getExtension("OES_texture_float_linear") || (console.warn("this graphics card does not support floating point texture linear interpolation! using NEAREST"), this.filter = tt.FILTER_NEAREST), this.textureType == tt.TYPE_FLOAT) {
      if (1 == this._cgl.glVersion) {
        if (this._cgl.glUseHalfFloatTex) {
          var _i18 = this._cgl.gl.getExtension("OES_texture_half_float");

          if (1 == this._cgl.glVersion && !_i18) throw new Error("no half float texture extension");

          this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, _i18.HALF_FLOAT_OES, null);
        } else {
          this._cgl.gl.getExtension("OES_texture_float");

          this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
        }
      } else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA32F, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
    } else if (this.textureType == tt.TYPE_DEPTH) {
      if (1 == this._cgl.glVersion) {
        var _i19 = this._cgl.gl.DEPTH_COMPONENT;

        this._cgl.gl.texImage2D(this.texTarget, 0, _i19, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.UNSIGNED_SHORT, null);
      } else {
        var _i20 = this._cgl.gl.DEPTH_COMPONENT32F;

        this._cgl.gl.texImage2D(this.texTarget, 0, _i20, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.FLOAT, null);
      }
    } else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, null);
    this._setFilter(), this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null);
  }, tt.prototype.initFromData = function (t, e, i, s, r) {
    this.filter = s, this.wrap = r, null == s && (this.filter = tt.FILTER_LINEAR), null == r && (this.wrap = tt.CLAMP_TO_EDGE), this.width = e, this.height = i, this._fromData = !0, this._cgl.gl.bindTexture(this.texTarget, this.tex), this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, e, i, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t), this._setFilter(), this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null);
  }, tt.prototype.updateMipMap = function () {
    2 != this._cgl.glVersion && !this.isPowerOfTwo() || this.filter != tt.FILTER_MIPMAP || (this._cgl.gl.generateMipmap(this.texTarget), this._cgl.profileData.profileGenMipMap++);
  }, tt.prototype.initTexture = function (t, e) {
    this._cgl.checkFrameStarted("texture inittexture"), this._fromData = !1, this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), t.width && (this.width = t.width), t.height && (this.height = t.height), e && (this.filter = e), t.width > this._cgl.maxTexSize && console.error("[cgl_texture] texture size to big!!!", t.width, this._cgl.maxTexSize), t.height > this._cgl.maxTexSize && console.error("[cgl_texture] texture size to big!!!", t.height, this._cgl.maxTexSize), this._cgl.gl.bindTexture(this.texTarget, this.tex), this.flipped = !this.flip, this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, this.flipped), this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t), this._setFilter(), this.updateMipMap(), this._cgl.gl.bindTexture(this.texTarget, null), this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), this.getInfoOneLine();
  }, tt.prototype.delete = function () {
    this.loading ? setTimeout(this.delete.bind(this), 50) : (this.deleted = !0, this.width = 0, this.height = 0, this._cgl.profileData.profileTextureDelete++, this._cgl.gl.deleteTexture(this.tex));
  }, tt.prototype.isPowerOfTwo = function () {
    return tt.isPowerOfTwo(this.width) && tt.isPowerOfTwo(this.height);
  }, tt.prototype.printInfo = function () {
    _.log(this.getInfo());
  }, tt.prototype.getInfoReadable = function () {
    var t = this.getInfo();
    var e = "";
    t.name = t.name.substr(0, t.name.indexOf("?rnd="));

    for (var _i21 in t) {
      e += "* " + _i21 + ":  **" + t[_i21] + "**\n";
    }

    return e;
  }, tt.prototype.getInfoOneLine = function () {
    var t = this.width + "x" + this.height;
    return this.textureType === CGL.Texture.TYPE_FLOAT && (t += " HDR"), this.filter === CGL.Texture.FILTER_NEAREST && (t += " nearest"), this.filter === CGL.Texture.FILTER_LINEAR && (t += " linear"), this.filter === CGL.Texture.FILTER_MIPMAP && (t += " mipmap"), this.wrap === CGL.Texture.WRAP_CLAMP_TO_EDGE && (t += " clamp"), this.wrap === CGL.Texture.WRAP_REPEAT && (t += " repeat"), this.wrap === CGL.Texture.WRAP_MIRRORED_REPEAT && (t += " repeatmir"), this.shortInfoString = t, t;
  }, tt.prototype.getInfo = function () {
    var t = {};
    t.name = this.name, t["power of two"] = this.isPowerOfTwo(), t.size = this.width + " x " + this.height;
    var e = this.texTarget;
    return this.texTarget == this._cgl.gl.TEXTURE_2D && (e = "TEXTURE_2D"), t.target = e, t.unpackAlpha = this.unpackAlpha, this.textureType == tt.TYPE_FLOAT ? t.textureType = "TYPE_FLOAT" : this.textureType == tt.TYPE_DEPTH ? t.textureType = "TYPE_DEPTH" : this.textureType == tt.TYPE_DEFAULT ? t.textureType = "TYPE_DEFAULT" : t.textureType = "UNKNOWN", this.wrap == tt.WRAP_CLAMP_TO_EDGE ? t.wrap = "CLAMP_TO_EDGE" : this.wrap == tt.WRAP_REPEAT ? t.wrap = "WRAP_REPEAT" : this.wrap == tt.WRAP_MIRRORED_REPEAT ? t.wrap = "WRAP_MIRRORED_REPEAT" : t.wrap = "UNKNOWN", this.filter == tt.FILTER_NEAREST ? t.filter = "FILTER_NEAREST" : this.filter == tt.FILTER_LINEAR ? t.filter = "FILTER_LINEAR" : this.filter == tt.FILTER_MIPMAP ? t.filter = "FILTER_MIPMAP" : t.filter = "UNKNOWN", t;
  }, tt.prototype._setFilter = function () {
    if (this._fromData || this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), this.shadowMap && (_.log("shadowmap tex"), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL)), this.textureType == tt.TYPE_FLOAT && this.filter == tt.FILTER_MIPMAP && (_.log("texture: HDR and mipmap filtering at the same time is not possible"), this.filter = tt.FILTER_LINEAR, _.stack()), 1 != this._cgl.glVersion || this.isPowerOfTwo()) {
      if (this.wrap == tt.WRAP_CLAMP_TO_EDGE ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE)) : this.wrap == tt.WRAP_REPEAT ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT)) : this.wrap == tt.WRAP_MIRRORED_REPEAT && (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT)), this.filter == tt.FILTER_NEAREST) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);else if (this.filter == tt.FILTER_LINEAR) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);else {
        if (this.filter != tt.FILTER_MIPMAP) throw _.log("unknown texture filter!", this.filter), new Error("unknown texture filter!" + this.filter);
        this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR);
      }

      if (this.anisotropic) {
        var _t29 = this._cgl.gl.getExtension("EXT_texture_filter_anisotropic");

        if (_t29) {
          var _e34 = this._cgl.gl.getParameter(_t29.MAX_TEXTURE_MAX_ANISOTROPY_EXT);

          this._cgl.gl.texParameterf(this._cgl.gl.TEXTURE_2D, _t29.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(_e34, this.anisotropic));
        }
      }
    } else this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE), this.filter = tt.FILTER_NEAREST, this.wrap = tt.WRAP_CLAMP_TO_EDGE;

    this.getInfoOneLine();
  }, tt.load = function (t, e, i, s) {
    var r = t.patch.loading.start("texture", e),
        n = new tt(t);
    return n.name = e, t.patch.isEditorMode() && gui.jobs().start({
      id: "loadtexture" + r,
      title: "loading texture " + CABLES.basename(e)
    }), n.image = new Image(), n.image.crossOrigin = "anonymous", n.loading = !0, s && s.hasOwnProperty("filter") && (n.filter = s.filter), s && s.hasOwnProperty("flip") && (n.flip = s.flip), s && s.hasOwnProperty("wrap") && (n.wrap = s.wrap), s && s.hasOwnProperty("anisotropic") && (n.anisotropic = s.anisotropic), s && s.hasOwnProperty("unpackAlpha") && (n.unpackAlpha = s.unpackAlpha), n.image.onabort = n.image.onerror = function (s) {
      _.warn("[cgl.texture.load] error loading texture", e, s), n.loading = !1, t.patch.loading.finished(r);
      i && i({
        error: !0
      }), t.patch.isEditorMode() && gui.jobs().finish("loadtexture" + r);
    }, n.image.onload = function (e) {
      t.addNextFrameOnceCallback(function () {
        n.initTexture(n.image), t.patch.loading.finished(r), n.loading = !1, t.patch.isEditorMode() && gui.jobs().finish("loadtexture" + r), i && i(null, n);
      });
    }, n.image.src = e, n;
  }, tt.getTempTexture = function (t) {
    return t || console.error("[getTempTexture] no cgl!"), t.tempTexture || (t.tempTexture = tt.getTemporaryTexture(t, 256, tt.FILTER_LINEAR, tt.REPEAT)), t.tempTexture;
  }, tt.getEmptyTexture = function (t) {
    if (t || console.error("[getEmptyTexture] no cgl!"), t.tempTextureEmpty) return t.tempTextureEmpty;
    t.tempTextureEmpty = new tt(t, {
      name: "emptyTexture"
    });
    var e = new Uint8Array(256);
    return t.tempTextureEmpty.initFromData(e, 8, 8, tt.FILTER_NEAREST, tt.WRAP_REPEAT), t.tempTextureEmpty;
  }, tt.getRandomTexture = function (t) {
    if (t || console.error("[getRandomTexture] no cgl!"), t.randomTexture) return t.randomTexture;
    var e = new Uint8Array(262144);

    for (var _t30 = 0; _t30 < 65536; _t30++) {
      e[4 * _t30 + 0] = 255 * Math.random(), e[4 * _t30 + 1] = 255 * Math.random(), e[4 * _t30 + 2] = 255 * Math.random(), e[4 * _t30 + 3] = 255;
    }

    return t.randomTexture = new tt(t), t.randomTexture.initFromData(e, 256, 256, tt.FILTER_NEAREST, tt.WRAP_REPEAT), t.randomTexture;
  }, tt.getBlackTexture = function (t) {
    if (t || console.error("[getBlackTexture] no cgl!"), t.blackTexture) return t.blackTexture;
    var e = new Uint8Array(256);

    for (var _t31 = 0; _t31 < 64; _t31++) {
      e[4 * _t31 + 0] = e[4 * _t31 + 1] = e[4 * _t31 + 2] = 0, e[4 * _t31 + 3] = 255;
    }

    return t.blackTexture = new tt(t), t.blackTexture.initFromData(e, 8, 8, tt.FILTER_NEAREST, tt.WRAP_REPEAT), t.blackTexture;
  }, tt.getEmptyCubemapTexture = function (t) {
    var e = [t.gl.TEXTURE_CUBE_MAP_POSITIVE_X, t.gl.TEXTURE_CUBE_MAP_NEGATIVE_X, t.gl.TEXTURE_CUBE_MAP_POSITIVE_Y, t.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, t.gl.TEXTURE_CUBE_MAP_POSITIVE_Z, t.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z],
        i = t.gl.createTexture(),
        s = t.gl.TEXTURE_CUBE_MAP,
        r = tt.FILTER_NEAREST,
        n = tt.WRAP_CLAMP_TO_EDGE;
    t.profileData.profileTextureNew++, t.gl.bindTexture(s, i), t.profileData.profileTextureResize++;

    for (var _i22 = 0; _i22 < 6; _i22 += 1) {
      var _r4 = new Uint8Array(256);

      t.gl.texImage2D(e[_i22], 0, t.gl.RGBA, 8, 8, 0, t.gl.RGBA, t.gl.UNSIGNED_BYTE, _r4), t.gl.texParameteri(s, t.gl.TEXTURE_MAG_FILTER, t.gl.NEAREST), t.gl.texParameteri(s, t.gl.TEXTURE_MIN_FILTER, t.gl.NEAREST), t.gl.texParameteri(s, t.gl.TEXTURE_WRAP_S, t.gl.CLAMP_TO_EDGE), t.gl.texParameteri(s, t.gl.TEXTURE_WRAP_T, t.gl.CLAMP_TO_EDGE);
    }

    return t.gl.bindTexture(s, null), {
      id: CABLES.uuid(),
      tex: i,
      cubemap: i,
      width: 8,
      height: 8,
      filter: r,
      wrap: n,
      unpackAlpha: !0,
      flip: !0,
      _fromData: !0,
      name: "emptyCubemapTexture",
      anisotropic: 0
    };
  }, tt.getTempGradientTexture = function (t) {
    if (t || console.error("[getTempGradientTexture] no cgl!"), t.tempTextureGradient) return t.tempTextureGradient;
    var e = new tt(t),
        i = new Uint8Array(262144);

    for (var _t32 = 0; _t32 < 256; _t32++) {
      for (var _e35 = 0; _e35 < 256; _e35++) {
        i[4 * (_e35 + 256 * _t32) + 0] = i[4 * (_e35 + 256 * _t32) + 1] = i[4 * (_e35 + 256 * _t32) + 2] = 255 - _t32, i[4 * (_e35 + 256 * _t32) + 3] = 255;
      }
    }

    return e.initFromData(i, 256, 256, tt.FILTER_NEAREST, tt.WRAP_REPEAT), t.tempTextureGradient = e, e;
  }, tt.getTemporaryTexture = function (t, e, i, s) {
    var r = new tt(t),
        n = [];

    for (var _t33 = 0; _t33 < e; _t33++) {
      for (var _i23 = 0; _i23 < e; _i23++) {
        (_i23 + _t33) % 64 < 32 ? (n.push(200 + _t33 / e * 25 + _i23 / e * 25), n.push(200 + _t33 / e * 25 + _i23 / e * 25), n.push(200 + _t33 / e * 25 + _i23 / e * 25)) : (n.push(40 + _t33 / e * 25 + _i23 / e * 25), n.push(40 + _t33 / e * 25 + _i23 / e * 25), n.push(40 + _t33 / e * 25 + _i23 / e * 25)), n.push(255);
      }
    }

    var o = new Uint8Array(n);
    return r.initFromData(o, e, e, i, s), r;
  }, tt.createFromImage = function (t, e, i) {
    var s = new tt(t, i = i || {});
    return s.flip = !1, s.image = e, s.width = e.width, s.height = e.height, s.initTexture(e, i.filter), s;
  }, tt.fromImage = function (t, e, i, s) {
    _.error("deprecated texture from image...");

    var r = new tt(t);
    return r.flip = !1, i && (r.filter = i), s && (r.wrap = s), r.image = e, r.initTexture(e), r;
  }, tt.isPowerOfTwo = function (t) {
    return 1 == t || 2 == t || 4 == t || 8 == t || 16 == t || 32 == t || 64 == t || 128 == t || 256 == t || 512 == t || 1024 == t || 2048 == t || 4096 == t || 8192 == t || 16384 == t;
  }, tt.FILTER_NEAREST = 0, tt.FILTER_LINEAR = 1, tt.FILTER_MIPMAP = 2, tt.WRAP_REPEAT = 0, tt.WRAP_MIRRORED_REPEAT = 1, tt.WRAP_CLAMP_TO_EDGE = 2, tt.TYPE_DEFAULT = 0, tt.TYPE_DEPTH = 1, tt.TYPE_FLOAT = 2;

  var et = function et(t, e, i, s) {
    this.Framebuffer2DrawTargetsDefault = null, this.Framebuffer2BlittingFramebuffer = null, this.Framebuffer2FinalFramebuffer = null, this._cgl = t, this._width = 0, this._height = 0, this._depthRenderbuffer = null, this._frameBuffer = null, this._textureFrameBuffer = null, this._colorRenderbuffers = [], this._drawTargetArray = [], this.Framebuffer2BlittingFramebuffer || (this.Framebuffer2BlittingFramebuffer = t.gl.createFramebuffer()), this.Framebuffer2FinalFramebuffer || (this.Framebuffer2FinalFramebuffer = t.gl.createFramebuffer()), this.Framebuffer2DrawTargetsDefault || (this.Framebuffer2DrawTargetsDefault = [t.gl.COLOR_ATTACHMENT0]), this._options = s || {
      isFloatingPointTexture: !1
    }, this.name = this._options.name || "unknown", this._cgl.profileData.addHeavyEvent("framebuffer create", this.name), this._options.hasOwnProperty("numRenderBuffers") || (this._options.numRenderBuffers = 1), this._options.hasOwnProperty("depth") || (this._options.depth = !0), this._options.hasOwnProperty("clear") || (this._options.clear = !0), this._options.hasOwnProperty("multisampling") || (this._options.multisampling = !1, this._options.multisamplingSamples = 0), this._options.multisamplingSamples && (this._cgl.glSlowRenderer && (this._options.multisamplingSamples = 0), this._cgl.gl.MAX_SAMPLES ? this._options.multisamplingSamples = Math.min(this._cgl.maxSamples, this._options.multisamplingSamples) : this._options.multisamplingSamples = 0), this._options.hasOwnProperty("filter") || (this._options.filter = tt.FILTER_LINEAR), this._options.hasOwnProperty("wrap") || (this._options.wrap = tt.WRAP_REPEAT), this._numRenderBuffers = this._options.numRenderBuffers, this._colorTextures = [];

    for (var _e36 = 0; _e36 < this._numRenderBuffers; _e36++) {
      this._colorTextures[_e36] = new tt(t, {
        name: "fb2 " + this.name + " " + _e36,
        isFloatingPointTexture: this._options.isFloatingPointTexture,
        filter: this._options.filter,
        wrap: this._options.wrap
      });
    }

    var r = tt.FILTER_NEAREST;
    this._options.shadowMap && (r = tt.FILTER_LINEAR);
    this._options.depth && (this._textureDepth = new tt(t, {
      name: "fb2 depth " + this.name,
      isDepthTexture: !0,
      filter: r,
      shadowMap: this._options.shadowMap || !1,
      width: e || 512,
      height: i || 512
    })), t.aborted || this.setSize(e || 512, i || 512);
  };

  et.prototype.getWidth = function () {
    return this._width;
  }, et.prototype.getHeight = function () {
    return this._height;
  }, et.prototype.getGlFrameBuffer = function () {
    return this._frameBuffer;
  }, et.prototype.getDepthRenderBuffer = function () {
    return this._depthRenderbuffer;
  }, et.prototype.getTextureColor = function () {
    return this._colorTextures[0];
  }, et.prototype.getTextureColorNum = function (t) {
    return this._colorTextures[t];
  }, et.prototype.getTextureDepth = function () {
    return this._textureDepth;
  }, et.prototype.setFilter = function (t) {
    for (var _e37 = 0; _e37 < this._numRenderBuffers; _e37++) {
      this._colorTextures[_e37].filter = t, this._colorTextures[_e37].setSize(this._width, this._height);
    }
  }, et.prototype.delete = et.prototype.dispose = function () {
    var t = 0;

    for (t = 0; t < this._numRenderBuffers; t++) {
      this._colorTextures[t].delete();
    }

    for (this._textureDepth && this._textureDepth.delete(), t = 0; t < this._numRenderBuffers; t++) {
      this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[t]);
    }

    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuffer), this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
  }, et.prototype.setSize = function (t, e) {
    this._cgl.profileData.addHeavyEvent("framebuffer resize", this.name);

    var i = 0;

    if (this._width = Math.floor(t), this._height = Math.floor(e), this._width = Math.min(this._width, this._cgl.maxTexSize), this._height = Math.min(this._height, this._cgl.maxTexSize), this._cgl.profileData.profileFrameBuffercreate++, this._frameBuffer) {
      for (i = 0; i < this._numRenderBuffers; i++) {
        this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
      }

      this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuffer), this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer);
    }

    this._frameBuffer = this._cgl.gl.createFramebuffer(), this._textureFrameBuffer = this._cgl.gl.createFramebuffer();
    var s = this._options.depth;

    for (i = 0; i < this._numRenderBuffers; i++) {
      this._colorTextures[i].setSize(this._width, this._height);
    }

    for (i = 0; i < this._numRenderBuffers; i++) {
      var _t34 = this._cgl.gl.createRenderbuffer();

      this._cgl.gl.getExtension("EXT_color_buffer_float");

      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, _t34), this._options.isFloatingPointTexture ? this._options.multisampling && this._options.multisamplingSamples ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA32F, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA32F, this._width, this._height) : this._options.multisampling && this._options.multisamplingSamples ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA8, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA8, this._width, this._height), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, _t34), this._colorRenderbuffers[i] = _t34;
    }

    for (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer), i = 0; i < this._numRenderBuffers; i++) {
      this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
    }

    this._options.depth && this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer);
    var r = this._cgl.gl.DEPTH_COMPONENT32F;

    for (this._cgl.glSlowRenderer && (r = this._cgl.gl.DEPTH_COMPONENT16), s && (this._textureDepth.setSize(this._width, this._height), this._depthRenderbuffer = this._cgl.gl.createRenderbuffer(), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer), this._options.isFloatingPointTexture, this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, r, this._width, this._height) : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, r, this._width, this._height), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer)), this._drawTargetArray.length = 0, i = 0; i < this._numRenderBuffers; i++) {
      this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);
    }

    this._cgl.gl.isFramebuffer(this._textureFrameBuffer) || console.warn("invalid framebuffer");

    var n = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);

    if (n != this._cgl.gl.FRAMEBUFFER_COMPLETE) switch (console.log("framebuffer incomplete: " + this.name, this), n) {
      case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
        throw _.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", this), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");

      case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
        throw _.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");

      case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
        throw _.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");

      case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
        throw _.warn("FRAMEBUFFER_UNSUPPORTED"), new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");

      default:
        throw _.warn("incomplete framebuffer", n), new Error("Incomplete framebuffer: " + n);
    }
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null);
  }, et.prototype.renderStart = function () {
    this._cgl.checkFrameStarted("fb2 renderstart"), this._cgl.pushModelMatrix(), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), this._cgl.pushGlFrameBuffer(this._frameBuffer), this._cgl.pushFrameBuffer(this), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this._width, this._height), this._cgl.gl.drawBuffers(this._drawTargetArray), this._options.clear && (this._cgl.gl.clearColor(0, 0, 0, 0), this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT));
  }, et.prototype.renderEnd = function () {
    if (this._cgl.popPMatrix(), this._cgl.profileData.profileFramebuffer++, this._numRenderBuffers <= 1) this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer), this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]), this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);else {
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);

      for (var _t35 = 0; _t35 < this._numRenderBuffers; _t35++) {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[_t35]), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[_t35].tex, 0), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer), this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer), this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [0, 0, 0, 1]);
        var _e38 = this._cgl.gl.COLOR_BUFFER_BIT;
        0 == _t35 && (_e38 |= this._cgl.gl.DEPTH_BUFFER_BIT), this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, _e38, this._cgl.gl.NEAREST);
      }
    }
    if (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), this._cgl.popFrameBuffer(), this._cgl.popModelMatrix(), this._cgl.resetViewPort(), this._colorTextures[0].filter == tt.FILTER_MIPMAP) for (var _t36 = 0; _t36 < this._numRenderBuffers; _t36++) {
      this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[_t36].tex), this._colorTextures[_t36].updateMipMap(), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null);
    }
  };

  var it = /*#__PURE__*/function () {
    function it(t) {
      _classCallCheck(this, it);

      this._init(), this._first = !0, this._wireMesh = null, t && this.apply(t);
    }

    _createClass(it, [{
      key: "_init",
      value: function _init() {
        this._max = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE], this._min = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE], this._center = [0, 0, 0], this._size = [0, 0, 0], this._maxAxis = 0, this._first = !0;
      }
    }, {
      key: "maxAxis",
      get: function get() {
        return this._maxAxis || 1;
      }
    }, {
      key: "size",
      get: function get() {
        return this._size;
      }
    }, {
      key: "center",
      get: function get() {
        return this._center;
      }
    }, {
      key: "x",
      get: function get() {
        return this._center[0];
      }
    }, {
      key: "y",
      get: function get() {
        return this._center[1];
      }
    }, {
      key: "z",
      get: function get() {
        return this._center[2];
      }
    }, {
      key: "minX",
      get: function get() {
        return this._min[0];
      }
    }, {
      key: "minY",
      get: function get() {
        return this._min[1];
      }
    }, {
      key: "minZ",
      get: function get() {
        return this._min[2];
      }
    }, {
      key: "maxX",
      get: function get() {
        return this._max[0];
      }
    }, {
      key: "maxY",
      get: function get() {
        return this._max[1];
      }
    }, {
      key: "maxZ",
      get: function get() {
        return this._max[2];
      }
    }, {
      key: "apply",
      value: function apply(t, e) {
        if (t) {
          if (t instanceof it) {
            var _e39 = t;
            this.applyPos(_e39.maxX, _e39.maxY, _e39.maxZ), this.applyPos(_e39.minX, _e39.minY, _e39.minZ);
          } else for (var _e40 = 0; _e40 < t.vertices.length; _e40 += 3) {
            t.vertices[_e40 + 0] != t.vertices[_e40 + 0] && null == t.vertices[_e40 + 0] || this.applyPos(t.vertices[_e40 + 0], t.vertices[_e40 + 1], t.vertices[_e40 + 2]);
          }

          this.calcCenterSize();
        }
      }
    }, {
      key: "copy",
      value: function copy() {
        return new it(this);
      }
    }, {
      key: "changed",
      get: function get() {
        return !(this._max[0] == -Number.MAX_VALUE && this._max[1] == -Number.MAX_VALUE && this._max[2] == -Number.MAX_VALUE);
      }
    }, {
      key: "applyPos",
      value: function applyPos(t, e, i) {
        if (t != Number.MAX_VALUE && t != -Number.MAX_VALUE && e != Number.MAX_VALUE && e != -Number.MAX_VALUE && i != Number.MAX_VALUE && i != -Number.MAX_VALUE && CABLES.UTILS.isNumeric(t) && CABLES.UTILS.isNumeric(e) && CABLES.UTILS.isNumeric(i)) {
          if (this._first) return this._max[0] = t, this._max[1] = e, this._max[2] = i, this._min[0] = t, this._min[1] = e, this._min[2] = i, void (this._first = !1);
          this._max[0] = Math.max(this._max[0], t), this._max[1] = Math.max(this._max[1], e), this._max[2] = Math.max(this._max[2], i), this._min[0] = Math.min(this._min[0], t), this._min[1] = Math.min(this._min[1], e), this._min[2] = Math.min(this._min[2], i);
        }
      }
    }, {
      key: "calcCenterSize",
      value: function calcCenterSize() {
        this._first || (this._size[0] = this._max[0] - this._min[0], this._size[1] = this._max[1] - this._min[1], this._size[2] = this._max[2] - this._min[2], this._center[0] = (this._min[0] + this._max[0]) / 2, this._center[1] = (this._min[1] + this._max[1]) / 2, this._center[2] = (this._min[2] + this._max[2]) / 2, this._maxAxis = Math.max(this._size[2], Math.max(this._size[0], this._size[1])));
      }
    }, {
      key: "mulMat4",
      value: function mulMat4(t) {
        this._first && (this._max[0] = 0, this._max[1] = 0, this._max[2] = 0, this._min[0] = 0, this._min[1] = 0, this._min[2] = 0, this._first = !1), vec3.transformMat4(this._max, this._max, t), vec3.transformMat4(this._min, this._min, t), this.calcCenterSize();
      }
    }, {
      key: "render",
      value: function render(t, e) {
        this._wireMesh || (this._wireMesh = new CGL.WireCube(t)), t.pushModelMatrix(), mat4.translate(t.mMatrix, t.mMatrix, this._center), this._wireMesh.render(t, this._size[0] / 2, this._size[1] / 2, this._size[2] / 2), t.popModelMatrix();
      }
    }]);

    return it;
  }();

  var st = function st(t) {
    this.name = t || "unknown", this.faceVertCount = 3, this._vertices = [], this.verticesIndices = [], this.texCoords = new Float32Array(), this.texCoordsIndices = [], this.vertexNormals = [], this.tangents = [], this.biTangents = [], this.barycentrics = [], this.morphTargets = [], this.vertexColors = [], this._attributes = {}, this.glPrimitive = null, Object.defineProperty(this, "vertices", {
      get: function get() {
        return this._vertices;
      },
      set: function set(t) {
        this.setVertices(t);
      }
    });
  };

  st.prototype.clear = function () {
    this.vertices = new Float32Array([]), this.verticesIndices.length = 0, this.texCoords = new Float32Array([]), this.texCoordsIndices.length = 0, this.vertexNormals = new Float32Array([]);
  }, st.prototype.getAttributes = function () {
    return this._attributes;
  }, st.prototype.getAttribute = function (t) {
    for (var _e41 in this._attributes) {
      if (this._attributes[_e41].name == t) return this._attributes[_e41];
    }

    return null;
  }, st.prototype.setAttribute = function (t, e, i) {
    var s = "";
    1 == i ? s = "float" : 2 == i ? s = "vec2" : 3 == i ? s = "vec3" : 4 == i && (s = "vec4");
    var r = {
      name: t,
      data: e,
      itemSize: i,
      type: s
    };
    this._attributes[t] = r;
  }, st.prototype.setVertices = function (t) {
    t instanceof Float32Array ? this._vertices = t : this._vertices = new Float32Array(t);
  }, st.prototype.setTexCoords = function (t) {
    t instanceof Float32Array ? this.texCoords = t : this.texCoords = new Float32Array(t);
  }, st.prototype.calcNormals = function (t) {
    t || this.unIndex(), this.calculateNormals({});
  }, st.prototype.setPointVertices = function (t) {
    if (t.length % 3 == 0) {
      t instanceof Float32Array ? this.vertices = t : this.vertices = new Float32Array(t), this.texCoords instanceof Float32Array || (this.texCoords = new Float32Array(t.length / 3 * 2)), this.verticesIndices.length = t.length / 3;

      for (var _e42 = 0; _e42 < t.length / 3; _e42++) {
        this.verticesIndices[_e42] = _e42, this.texCoords[2 * _e42] = 0, this.texCoords[2 * _e42 + 1] = 0;
      }
    } else console.error("CGL MESH : SetPointVertices: Array must be multiple of three.");
  }, st.prototype.merge = function (t) {
    if (!t) return;
    var e = this.verticesIndices.length,
        i = this.vertices.length / 3;
    this.verticesIndices.length = this.verticesIndices.length + t.verticesIndices.length;

    for (var _s8 = 0; _s8 < t.verticesIndices.length; _s8++) {
      this.verticesIndices[e + _s8] = t.verticesIndices[_s8] + i;
    }

    this.vertices = g.float32Concat(this.vertices, t.vertices), this.texCoords = g.float32Concat(this.texCoords, t.texCoords), this.vertexNormals = g.float32Concat(this.vertexNormals, t.vertexNormals), this.tangents = g.float32Concat(this.tangents, t.tangents), this.biTangents = g.float32Concat(this.biTangents, t.biTangents);
  }, st.prototype.copy = function () {
    var t = 0;
    var e = new st(this.name + " copy");
    if (e.faceVertCount = this.faceVertCount, e.setVertices(this._vertices.slice(0)), this.verticesIndices) for (e.verticesIndices.length = this.verticesIndices.length, t = 0; t < this.verticesIndices.length; t++) {
      e.verticesIndices[t] = this.verticesIndices[t];
    }

    for (e.texCoords = new Float32Array(this.texCoords.length), t = 0; t < this.texCoords.length; t++) {
      e.texCoords[t] = this.texCoords[t];
    }

    for (e.texCoordsIndices.length = this.texCoordsIndices.length, t = 0; t < this.texCoordsIndices.length; t++) {
      e.texCoordsIndices[t] = this.texCoordsIndices[t];
    }

    for (e.vertexNormals = new Float32Array(this.vertexNormals.length), t = 0; t < this.vertexNormals.length; t++) {
      e.vertexNormals[t] = this.vertexNormals[t];
    }

    if (this.tangents) for (e.tangents = [], e.tangents.length = this.tangents.length, t = 0; t < this.tangents.length; t++) {
      e.tangents[t] = this.tangents[t];
    }
    if (this.biTangents) for (e.biTangents = [], e.biTangents.length = this.biTangents.length, t = 0; t < this.biTangents.length; t++) {
      e.biTangents[t] = this.biTangents[t];
    }

    for (e.barycentrics.length = this.barycentrics.length, t = 0; t < this.barycentrics.length; t++) {
      e.barycentrics[t] = this.barycentrics[t];
    }

    for (e.morphTargets.length = this.morphTargets.length, t = 0; t < this.morphTargets.length; t++) {
      e.morphTargets[t] = this.morphTargets[t];
    }

    for (e.vertexColors.length = this.vertexColors.length, t = 0; t < this.vertexColors.length; t++) {
      e.vertexColors[t] = this.vertexColors[t];
    }

    return e;
  }, st.prototype.calculateNormals = function (t) {
    var e = vec3.create(),
        i = vec3.create(),
        s = vec3.create();

    function r(r) {
      return vec3.subtract(e, r[0], r[1]), vec3.subtract(i, r[0], r[2]), vec3.cross(s, e, i), vec3.normalize(s, s), t && t.forceZUp && s[2] < 0 && (s[0] *= -1, s[1] *= -1, s[2] *= -1), s;
    }

    this.getVertexVec = function (t) {
      var e = [0, 0, 0];
      return e[0] = this.vertices[3 * t + 0], e[1] = this.vertices[3 * t + 1], e[2] = this.vertices[3 * t + 2], e;
    }, this.vertexNormals instanceof Float32Array && this.vertexNormals.length == this.vertices.length || (this.vertexNormals = new Float32Array(this.vertices.length));

    for (var _t37 = 0; _t37 < this.vertices.length; _t37++) {
      this.vertexNormals[_t37] = 0;
    }

    if (this.isIndexed()) {
      var _t38 = [];
      _t38.length = this.verticesIndices.length / 3;

      for (var _e43 = 0; _e43 < this.verticesIndices.length; _e43 += 3) {
        var _i24 = [this.getVertexVec(this.verticesIndices[_e43 + 0]), this.getVertexVec(this.verticesIndices[_e43 + 1]), this.getVertexVec(this.verticesIndices[_e43 + 2])];
        _t38[_e43 / 3] = r(_i24), this.vertexNormals[3 * this.verticesIndices[_e43 + 0] + 0] += _t38[_e43 / 3][0], this.vertexNormals[3 * this.verticesIndices[_e43 + 0] + 1] += _t38[_e43 / 3][1], this.vertexNormals[3 * this.verticesIndices[_e43 + 0] + 2] += _t38[_e43 / 3][2], this.vertexNormals[3 * this.verticesIndices[_e43 + 1] + 0] += _t38[_e43 / 3][0], this.vertexNormals[3 * this.verticesIndices[_e43 + 1] + 1] += _t38[_e43 / 3][1], this.vertexNormals[3 * this.verticesIndices[_e43 + 1] + 2] += _t38[_e43 / 3][2], this.vertexNormals[3 * this.verticesIndices[_e43 + 2] + 0] += _t38[_e43 / 3][0], this.vertexNormals[3 * this.verticesIndices[_e43 + 2] + 1] += _t38[_e43 / 3][1], this.vertexNormals[3 * this.verticesIndices[_e43 + 2] + 2] += _t38[_e43 / 3][2];
      }

      for (var _t39 = 0; _t39 < this.verticesIndices.length; _t39 += 3) {
        for (var _e44 = 0; _e44 < 3; _e44++) {
          var _i25 = [this.vertexNormals[3 * this.verticesIndices[_t39 + _e44] + 0], this.vertexNormals[3 * this.verticesIndices[_t39 + _e44] + 1], this.vertexNormals[3 * this.verticesIndices[_t39 + _e44] + 2]];
          vec3.normalize(_i25, _i25), this.vertexNormals[3 * this.verticesIndices[_t39 + _e44] + 0] = _i25[0], this.vertexNormals[3 * this.verticesIndices[_t39 + _e44] + 1] = _i25[1], this.vertexNormals[3 * this.verticesIndices[_t39 + _e44] + 2] = _i25[2];
        }
      }
    } else {
      var _t40 = [];

      for (var _e45 = 0; _e45 < this.vertices.length; _e45 += 9) {
        var _i26 = r([[this.vertices[_e45 + 0], this.vertices[_e45 + 1], this.vertices[_e45 + 2]], [this.vertices[_e45 + 3], this.vertices[_e45 + 4], this.vertices[_e45 + 5]], [this.vertices[_e45 + 6], this.vertices[_e45 + 7], this.vertices[_e45 + 8]]]);

        _t40.push(_i26[0], _i26[1], _i26[2], _i26[0], _i26[1], _i26[2], _i26[0], _i26[1], _i26[2]);
      }

      this.vertexNormals = _t40;
    }
  }, st.prototype.calcTangentsBitangents = function () {
    if (!this.vertices.length) return void console.error("Cannot calculate tangents/bitangents without vertices.");
    if (!this.vertexNormals.length) return void console.error("Cannot calculate tangents/bitangents without normals.");

    if (!this.texCoords.length) {
      console.warn("No texcoords. Replacing with default values [0, 0].");

      var _t41 = this.vertices.length / 3 * 2;

      this.texCoords = new Float32Array(_t41);

      for (var _e46 = 0; _e46 < _t41; _e46 += 1) {
        this.texCoords[_e46] = 0;
      }
    }

    if (!this.verticesIndices || !this.verticesIndices.length) return void console.error("Cannot calculate tangents/bitangents without vertex indices.");
    if (this.verticesIndices.length % 3 != 0) return void console.error("Vertex indices mismatch!");
    var t = this.verticesIndices.length / 3,
        e = this.vertices.length / 3;
    this.tangents = new Float32Array(this.vertexNormals.length), this.biTangents = new Float32Array(this.vertexNormals.length);
    var i = [];
    i.length = 2 * e;
    var s = vec3.create(),
        r = vec3.create(),
        n = vec3.create(),
        o = vec2.create(),
        a = vec2.create(),
        h = vec2.create(),
        l = vec3.create(),
        c = vec3.create();

    for (var _u = 0; _u < t; _u += 1) {
      var _t42 = this.verticesIndices[3 * _u],
          _p = this.verticesIndices[3 * _u + 1],
          _2 = this.verticesIndices[3 * _u + 2];
      vec3.set(s, this.vertices[3 * _t42], this.vertices[3 * _t42 + 1], this.vertices[3 * _t42 + 2]), vec3.set(r, this.vertices[3 * _p], this.vertices[3 * _p + 1], this.vertices[3 * _p + 2]), vec3.set(n, this.vertices[3 * _2], this.vertices[3 * _2 + 1], this.vertices[3 * _2 + 2]), vec2.set(o, this.texCoords[2 * _t42], this.texCoords[2 * _t42 + 1]), vec2.set(a, this.texCoords[2 * _p], this.texCoords[2 * _p + 1]), vec2.set(h, this.texCoords[2 * _2], this.texCoords[2 * _2 + 1]);

      var _d = r[0] - s[0],
          _g = n[0] - s[0],
          _f = r[1] - s[1],
          _m = n[1] - s[1],
          _E = r[2] - s[2],
          _T = n[2] - s[2],
          _b = a[0] - o[0],
          _A = h[0] - o[0],
          _y = a[1] - o[1],
          _x = h[1] - o[1],
          _v = 1 / (_b * _x - _A * _y);

      vec3.set(l, (_x * _d - _y * _g) * _v, (_x * _f - _y * _m) * _v, (_x * _E - _y * _T) * _v), vec3.set(c, (_b * _g - _A * _d) * _v, (_b * _m - _A * _f) * _v, (_b * _T - _A * _E) * _v), i[_t42] = l, i[_p] = l, i[_2] = l, i[_t42 + e] = c, i[_p + e] = c, i[_2 + e] = c;
    }

    var u = vec3.create(),
        p = vec3.create(),
        _ = vec3.create(),
        d = vec3.create(),
        g = vec3.create(),
        f = vec3.create(),
        m = vec3.create(),
        E = vec3.create();

    for (var _t43 = 0; _t43 < e; _t43 += 1) {
      if (!i[_t43]) continue;
      vec3.set(u, this.vertexNormals[3 * _t43], this.vertexNormals[3 * _t43 + 1], this.vertexNormals[3 * _t43 + 2]), vec3.set(p, i[_t43][0], i[_t43][1], i[_t43][2]);

      var _s9 = vec3.dot(u, p);

      vec3.scale(g, u, _s9), vec3.subtract(f, p, g), vec3.normalize(E, f), vec3.cross(m, u, p);
      vec3.dot(m, i[_t43 + e]);
      var _r5 = 1;
      vec3.scale(_, E, 1 / _r5), vec3.cross(d, u, _), this.tangents[3 * _t43 + 0] = _[0], this.tangents[3 * _t43 + 1] = _[1], this.tangents[3 * _t43 + 2] = _[2], this.biTangents[3 * _t43 + 0] = d[0], this.biTangents[3 * _t43 + 1] = d[1], this.biTangents[3 * _t43 + 2] = d[2];
    }
  }, st.prototype.isIndexed = function () {
    return 0 != this.verticesIndices.length;
  }, st.prototype.unIndex = function (t, e) {
    var i = [],
        s = [],
        r = [],
        n = [],
        o = [],
        a = [];
    var h = 0,
        l = 0;

    for (l = 0; l < this.verticesIndices.length; l += 3) {
      i.push(this.vertices[3 * this.verticesIndices[l + 0] + 0], this.vertices[3 * this.verticesIndices[l + 0] + 1], this.vertices[3 * this.verticesIndices[l + 0] + 2]), n.push(this.vertexNormals[3 * this.verticesIndices[l + 0] + 0], this.vertexNormals[3 * this.verticesIndices[l + 0] + 1], this.vertexNormals[3 * this.verticesIndices[l + 0] + 2]), this.tangents.length > 0 && o.push(this.tangents[3 * this.verticesIndices[l + 0] + 0], this.tangents[3 * this.verticesIndices[l + 0] + 1], this.tangents[3 * this.verticesIndices[l + 0] + 2]), this.biTangents.length > 0 && a.push(this.biTangents[3 * this.verticesIndices[l + 0] + 0], this.biTangents[3 * this.verticesIndices[l + 0] + 1], this.biTangents[3 * this.verticesIndices[l + 0] + 2]), this.texCoords ? r.push(this.texCoords[2 * this.verticesIndices[l + 0] + 0], this.texCoords[2 * this.verticesIndices[l + 0] + 1]) : r.push(0, 0), s.push(h), h++, i.push(this.vertices[3 * this.verticesIndices[l + 1] + 0], this.vertices[3 * this.verticesIndices[l + 1] + 1], this.vertices[3 * this.verticesIndices[l + 1] + 2]), n.push(this.vertexNormals[3 * this.verticesIndices[l + 1] + 0], this.vertexNormals[3 * this.verticesIndices[l + 1] + 1], this.vertexNormals[3 * this.verticesIndices[l + 1] + 2]), this.tangents.length > 0 && o.push(this.tangents[3 * this.verticesIndices[l + 1] + 0], this.tangents[3 * this.verticesIndices[l + 1] + 1], this.tangents[3 * this.verticesIndices[l + 1] + 2]), this.biTangents.length > 0 && a.push(this.biTangents[3 * this.verticesIndices[l + 1] + 0], this.biTangents[3 * this.verticesIndices[l + 1] + 1], this.biTangents[3 * this.verticesIndices[l + 1] + 2]), this.texCoords ? r.push(this.texCoords[2 * this.verticesIndices[l + 1] + 0], this.texCoords[2 * this.verticesIndices[l + 1] + 1]) : r.push(0, 0), s.push(h), h++, i.push(this.vertices[3 * this.verticesIndices[l + 2] + 0], this.vertices[3 * this.verticesIndices[l + 2] + 1], this.vertices[3 * this.verticesIndices[l + 2] + 2]), n.push(this.vertexNormals[3 * this.verticesIndices[l + 2] + 0], this.vertexNormals[3 * this.verticesIndices[l + 2] + 1], this.vertexNormals[3 * this.verticesIndices[l + 2] + 2]), this.tangents.length > 0 && o.push(this.tangents[3 * this.verticesIndices[l + 2] + 0], this.tangents[3 * this.verticesIndices[l + 2] + 1], this.tangents[3 * this.verticesIndices[l + 2] + 2]), this.biTangents.length > 0 && a.push(this.biTangents[3 * this.verticesIndices[l + 2] + 0], this.biTangents[3 * this.verticesIndices[l + 2] + 1], this.biTangents[3 * this.verticesIndices[l + 2] + 2]), this.texCoords ? r.push(this.texCoords[2 * this.verticesIndices[l + 2] + 0], this.texCoords[2 * this.verticesIndices[l + 2] + 1]) : r.push(0, 0), s.push(h), h++;
    }

    this.vertices = i, this.texCoords = r, this.vertexNormals = n, o.length > 0 && (this.tangents = o), a.length > 0 && (this.biTangents = a), this.verticesIndices.length = 0, t && (this.verticesIndices = s), e || this.calculateNormals();
  }, st.prototype.calcBarycentric = function () {
    this.barycentrics.length = this.vertices.length;
    var t = 0;

    for (t = 0; t < this.vertices.length; t++) {
      this.barycentrics[t] = 0;
    }

    var e = 0;

    for (t = 0; t < this.vertices.length; t += 3) {
      this.barycentrics[t + e] = 1, e++, 3 == e && (e = 0);
    }
  }, st.prototype.getBounds = function () {
    return new it(this);
  }, st.prototype.center = function (t, e, i) {
    void 0 === t && (t = !0, e = !0, i = !0);
    var s = 0;
    var r = this.getBounds(),
        n = [r.minX + (r.maxX - r.minX) / 2, r.minY + (r.maxY - r.minY) / 2, r.minZ + (r.maxZ - r.minZ) / 2];

    for (s = 0; s < this.vertices.length; s += 3) {
      this.vertices[s + 0] == this.vertices[s + 0] && (t && (this.vertices[s + 0] -= n[0]), e && (this.vertices[s + 1] -= n[1]), i && (this.vertices[s + 2] -= n[2]));
    }

    return n;
  }, st.prototype.mapTexCoords2d = function () {
    var t = this.getBounds(),
        e = this.vertices.length / 3;
    this.texCoords = new Float32Array(2 * e);

    for (var _i27 = 0; _i27 < e; _i27++) {
      var _e47 = this.vertices[3 * _i27 + 0],
          _s10 = this.vertices[3 * _i27 + 1];
      this.texCoords[2 * _i27 + 0] = _e47 / (t.maxX - t.minX) + .5, this.texCoords[2 * _i27 + 1] = 1 - _s10 / (t.maxY - t.minY) + .5;
    }
  }, st.buildFromFaces = function (t, e) {
    var i = [],
        s = [];

    for (var _e48 = 0; _e48 < t.length; _e48 += 3) {
      var _r6 = t[_e48 + 0],
          _n4 = t[_e48 + 1],
          _o3 = t[_e48 + 2],
          _a2 = [-1, -1, -1];

      for (var _t44 = 0; _t44 < i; _t44 += 3) {
        i[_t44 + 0] == _r6[0] && i[_t44 + 1] == _r6[1] && i[_t44 + 2] == _r6[2] && (_a2[0] = _t44 / 3), i[_t44 + 0] == _n4[0] && i[_t44 + 1] == _n4[1] && i[_t44 + 2] == _n4[2] && (_a2[1] = _t44 / 3), i[_t44 + 0] == _o3[0] && i[_t44 + 1] == _o3[1] && i[_t44 + 2] == _o3[2] && (_a2[2] = _t44 / 3);
      }

      -1 == _a2[0] && (i.push(_r6[0], _r6[1], _r6[2]), _a2[0] = (i.length - 1) / 3), -1 == _a2[1] && (i.push(_n4[0], _n4[1], _n4[2]), _a2[1] = (i.length - 1) / 3), -1 == _a2[2] && (i.push(_o3[0], _o3[1], _o3[2]), _a2[2] = (i.length - 1) / 3), s.push(parseInt(_a2[0], 10)), s.push(parseInt(_a2[1], 10)), s.push(parseInt(_a2[2], 10));
    }

    var r = new st(this.name);
    return r.name = e, r.vertices = i, r.verticesIndices = s, r;
  }, st.json2geom = function (t) {
    var e = new st("jsonMeshGeom");
    if (e.verticesIndices = [], e.vertices = t.vertices || [], e.vertexNormals = t.normals || [], e.vertexColors = t.colors || [], e.tangents = t.tangents || [], e.biTangents = t.bitangents || [], t.texturecoords && e.setTexCoords(t.texturecoords[0]), t.vertices_b64 && (e.vertices = new Float32Array(u(t.vertices_b64))), t.normals_b64 && (e.vertexNormals = new Float32Array(u(t.normals_b64))), t.tangents_b64 && (e.tangents = new Float32Array(u(t.tangents_b64))), t.bitangents_b64 && (e.biTangents = new Float32Array(u(t.bitangents_b64))), t.texturecoords_b64 && e.setTexCoords(new Float32Array(u(t.texturecoords_b64[0]))), t.faces_b64) e.verticesIndices = new Uint32Array(u(t.faces_b64));else {
      e.verticesIndices.length = 3 * t.faces.length;

      for (var _i28 = 0; _i28 < t.faces.length; _i28++) {
        e.verticesIndices[3 * _i28] = t.faces[_i28][0], e.verticesIndices[3 * _i28 + 1] = t.faces[_i28][1], e.verticesIndices[3 * _i28 + 2] = t.faces[_i28][2];
      }
    }
    return e;
  };

  var rt = function rt(t, e, i, s, r, n, o, a, h, l) {
    if (this._loc = -1, this._type = e, this._cgl = t._cgl, this._name = i, this._shader = t, this._value = 1e-5, this._oldValue = null, this._port = null, this._structName = h, this._structUniformName = a, this._propertyName = l, this._shader._addUniform(this), this.needsUpdate = !0, this.shaderType = null, this.comment = null, "f" == e) this.set = this.setValue = this.setValueF.bind(this), this.updateValue = this.updateValueF.bind(this);else if ("f[]" == e) this.set = this.setValue = this.setValueArrayF.bind(this), this.updateValue = this.updateValueArrayF.bind(this);else if ("2f[]" == e) this.set = this.setValue = this.setValueArray2F.bind(this), this.updateValue = this.updateValueArray2F.bind(this);else if ("3f[]" == e) this.set = this.setValue = this.setValueArray3F.bind(this), this.updateValue = this.updateValueArray3F.bind(this);else if ("4f[]" == e) this.set = this.setValue = this.setValueArray4F.bind(this), this.updateValue = this.updateValueArray4F.bind(this);else if ("i" == e) this.set = this.setValue = this.setValueI.bind(this), this.updateValue = this.updateValueI.bind(this);else if ("2i" == e) this.set = this.setValue = this.setValue2I.bind(this), this.updateValue = this.updateValue2I.bind(this);else if ("3i" == e) this.set = this.setValue = this.setValue3I.bind(this), this.updateValue = this.updateValue3I.bind(this);else if ("4i" == e) this.set = this.setValue = this.setValue4I.bind(this), this.updateValue = this.updateValue4I.bind(this);else if ("b" == e) this.set = this.setValue = this.setValueBool.bind(this), this.updateValue = this.updateValueBool.bind(this);else if ("4f" == e) this.set = this.setValue = this.setValue4F.bind(this), this.updateValue = this.updateValue4F.bind(this);else if ("3f" == e) this.set = this.setValue = this.setValue3F.bind(this), this.updateValue = this.updateValue3F.bind(this);else if ("2f" == e) this.set = this.setValue = this.setValue2F.bind(this), this.updateValue = this.updateValue2F.bind(this);else if ("t" == e) this.set = this.setValue = this.setValueT.bind(this), this.updateValue = this.updateValueT.bind(this);else if ("tc" == e) this.set = this.setValue = this.setValueT.bind(this), this.updateValue = this.updateValueT.bind(this);else if ("t[]" == e) this.set = this.setValue = this.setValueArrayT.bind(this), this.updateValue = this.updateValueArrayT.bind(this);else {
      if ("m4" != e) throw new Error("Unknown uniform type");
      this.set = this.setValue = this.setValueM4.bind(this), this.updateValue = this.updateValueM4.bind(this);
    }
    "object" == _typeof(s) && s instanceof V ? (this._port = s, this._value = this._port.get(), r && n && o ? (r instanceof V && n instanceof V && o instanceof V || console.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name), this._value = [0, 0, 0, 0], this._port2 = r, this._port3 = n, this._port4 = o, this._port.on("change", this.updateFromPort4f.bind(this)), this._port2.on("change", this.updateFromPort4f.bind(this)), this._port3.on("change", this.updateFromPort4f.bind(this)), this._port4.on("change", this.updateFromPort4f.bind(this)), this.updateFromPort4f()) : r && n ? (r instanceof V && n instanceof V || console.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name), this._value = [0, 0, 0], this._port2 = r, this._port3 = n, this._port.on("change", this.updateFromPort3f.bind(this)), this._port2.on("change", this.updateFromPort3f.bind(this)), this._port3.on("change", this.updateFromPort3f.bind(this)), this.updateFromPort3f()) : r ? (r instanceof V || console.error("[cgl_uniform] mixed port/value parameter for vec4 ", this._name), this._value = [0, 0], this._port2 = r, this._port.on("change", this.updateFromPort2f.bind(this)), this._port2.on("change", this.updateFromPort2f.bind(this)), this.updateFromPort2f()) : this._port.on("change", this.updateFromPort.bind(this))) : this._value = s, this.setValue(this._value), this.needsUpdate = !0;
  };

  rt.prototype.copy = function (t) {
    var e = new rt(t, this._type, this._name, this._value, this._port2, this._port3, this._port4, this._structUniformName, this._structName, this._propertyName);
    return e.shaderType = this.shaderType, e;
  }, rt.prototype.getGlslTypeString = function () {
    return "f" == this._type ? "float" : "i" == this._type ? "int" : "2i" == this._type ? "ivec2" : "2f" == this._type ? "vec2" : "3f" == this._type ? "vec3" : "4f" == this._type ? "vec4" : "m4" == this._type ? "mat4" : "t" == this._type ? "sampler2D" : "tc" == this._type ? "samplerCube" : void console.log("[CGL UNIFORM] unknown glsl type string ", this._type);
  }, rt.prototype._isValidLoc = function () {
    return -1 != this._loc;
  }, rt.prototype.getType = function () {
    return this._type;
  }, rt.prototype.getName = function () {
    return this._name;
  }, rt.prototype.getValue = function () {
    return this._value;
  }, rt.prototype.getShaderType = function () {
    return this.shaderType;
  }, rt.prototype.isStructMember = function () {
    return !!this._structName;
  }, rt.prototype.resetLoc = function () {
    this._loc = -1, this.needsUpdate = !0;
  }, rt.prototype.bindTextures = function () {
    return this._value;
  }, rt.prototype.resetLoc = function () {
    this._loc = -1, this.needsUpdate = !0;
  }, rt.prototype.bindTextures = function () {}, rt.prototype.getLoc = function () {
    return this._loc;
  }, rt.prototype.updateFromPort4f = function () {
    this._value[0] = this._port.get(), this._value[1] = this._port2.get(), this._value[2] = this._port3.get(), this._value[3] = this._port4.get(), this.setValue(this._value);
  }, rt.prototype.updateFromPort3f = function () {
    this._value[0] = this._port.get(), this._value[1] = this._port2.get(), this._value[2] = this._port3.get(), this.setValue(this._value);
  }, rt.prototype.updateFromPort2f = function () {
    this._value[0] = this._port.get(), this._value[1] = this._port2.get(), this.setValue(this._value);
  }, rt.prototype.updateFromPort = function () {
    this.setValue(this._port.get());
  }, rt.prototype.updateValueF = function () {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._shader.getCgl().gl.uniform1f(this._loc, this._value), this._cgl.profileData.profileUniformCount++;
  }, rt.prototype.setValueF = function (t) {
    t != this._value && (this.needsUpdate = !0, this._value = t);
  }, rt.prototype.updateValueI = function () {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._shader.getCgl().gl.uniform1i(this._loc, this._value), this._cgl.profileData.profileUniformCount++;
  }, rt.prototype.updateValue2I = function () {
    this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._cgl.profileData.profileShaderGetUniform++, this._cgl.profileData.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform2i(this._loc, this._value[0], this._value[1]), this.needsUpdate = !1, this._cgl.profileData.profileUniformCount++);
  }, rt.prototype.updateValue3I = function () {
    this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._cgl.profileData.profileShaderGetUniform++, this._cgl.profileData.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform3i(this._loc, this._value[0], this._value[1], this._value[2]), this.needsUpdate = !1, this._cgl.profileData.profileUniformCount++);
  }, rt.prototype.updateValue4I = function () {
    this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._cgl.profileData.profileShaderGetUniform++, this._cgl.profileData.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform4i(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]), this._cgl.profileData.profileUniformCount++;
  }, rt.prototype.setValueI = function (t) {
    t != this._value && (this.needsUpdate = !0, this._value = t);
  }, rt.prototype.setValue2I = function (t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1], this.needsUpdate = !0), this._value = t);
  }, rt.prototype.setValue3I = function (t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1, 2], this.needsUpdate = !0), this._value = t);
  }, rt.prototype.setValue4I = function (t) {
    this.needsUpdate = !0, this._value = t || vec4.create();
  }, rt.prototype.updateValueBool = function () {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0), this._cgl.profileData.profileUniformCount++;
  }, rt.prototype.setValueBool = function (t) {
    t != this._value && (this.needsUpdate = !0, this._value = t);
  }, rt.prototype.setValueArray4F = function (t) {
    this.needsUpdate = !0, this._value = t;
  }, rt.prototype.updateValueArray4F = function () {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform4fv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
  }, rt.prototype.setValueArray3F = function (t) {
    this.needsUpdate = !0, this._value = t;
  }, rt.prototype.updateValueArray3F = function () {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform3fv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
  }, rt.prototype.setValueArray2F = function (t) {
    this.needsUpdate = !0, this._value = t;
  }, rt.prototype.updateValueArray2F = function () {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform2fv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
  }, rt.prototype.setValueArrayF = function (t) {
    this.needsUpdate = !0, this._value = t;
  }, rt.prototype.updateValueArrayF = function () {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform1fv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
  }, rt.prototype.setValueArrayT = function (t) {
    this.needsUpdate = !0, this._value = t;
  }, rt.prototype.updateValueArrayT = function () {
    this._isValidLoc() ? this.needsUpdate = !1 : this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._value && (this._shader.getCgl().gl.uniform1iv(this._loc, this._value), this._cgl.profileData.profileUniformCount++);
  }, rt.prototype.updateValue3F = function () {
    this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._cgl.profileData.profileShaderGetUniform++, this._cgl.profileData.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]), this.needsUpdate = !1, this._cgl.profileData.profileUniformCount++);
  }, rt.prototype.setValue3F = function (t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1, 2], this.needsUpdate = !0), this._value = t);
  }, rt.prototype.updateValue2F = function () {
    this._value && (this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._cgl.profileData.profileShaderGetUniform++, this._cgl.profileData.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]), this.needsUpdate = !1, this._cgl.profileData.profileUniformCount++);
  }, rt.prototype.setValue2F = function (t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1], this.needsUpdate = !0), this._value = t);
  }, rt.prototype.updateValue4F = function () {
    this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._cgl.profileData.profileShaderGetUniform++, this._cgl.profileData.profileShaderGetUniformName = this._name), this._value || (console.log("no value for uniform", this._name, this), this._value = [0, 0, 0, 0]), this.needsUpdate = !1, this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]), this._cgl.profileData.profileUniformCount++;
  }, rt.prototype.setValue4F = function (t) {
    "number" == typeof this.value && (this.value = vec4.create()), t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] && t[3] == this._oldValue[3] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0) : (this._oldValue = [t[0] - 1, 1, 2, 3], this.needsUpdate = !0), this._value = t);
  }, rt.prototype.updateValueM4 = function () {
    this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._cgl.profileData.profileShaderGetUniform++, this._cgl.profileData.profileShaderGetUniformName = this._name), this._shader.getCgl().gl.uniformMatrix4fv(this._loc, !1, this._value), this._cgl.profileData.profileUniformCount++;
  }, rt.prototype.setValueM4 = function (t) {
    this.needsUpdate = !0, this._value = t || mat4.create();
  }, rt.prototype.updateValueT = function () {
    this._isValidLoc() || (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), this._cgl.profileData.profileShaderGetUniform++, this._cgl.profileData.profileShaderGetUniformName = this._name), this._cgl.profileData.profileUniformCount++, this._shader.getCgl().gl.uniform1i(this._loc, this._value), this.needsUpdate = !1;
  }, rt.prototype.setValueT = function (t) {
    this.needsUpdate = !0, this._value = t;
  };
  var nt = 180 / Math.PI,
      ot = {
    MATH: {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: nt
    },
    SHADER: {
      SHADERVAR_VERTEX_POSITION: "vPosition",
      SHADERVAR_VERTEX_NUMBER: "attrVertIndex",
      SHADERVAR_VERTEX_NORMAL: "attrVertNormal",
      SHADERVAR_VERTEX_TEXCOORD: "attrTexCoord",
      SHADERVAR_INSTANCE_MMATRIX: "instMat",
      SHADERVAR_UNI_PROJMAT: "projMatrix",
      SHADERVAR_UNI_VIEWMAT: "viewMatrix",
      SHADERVAR_UNI_MODELMAT: "modelMatrix",
      SHADERVAR_UNI_NORMALMAT: "normalMatrix",
      SHADERVAR_UNI_INVVIEWMAT: "inverseViewMatrix",
      SHADERVAR_UNI_VIEWPOS: "camPos"
    },
    BLEND_MODES: {
      BLEND_NONE: 0,
      BLEND_NORMAL: 1,
      BLEND_ADD: 2,
      BLEND_SUB: 3,
      BLEND_MUL: 4
    }
  };

  var at = {
    lastMesh: null
  },
      ht = function ht(t, e, i) {
    this._cgl = t, this._bufVertexAttrib = null, this._bufVerticesIndizes = this._cgl.gl.createBuffer(), this._attributes = [], this._attribLocs = {}, this._geom = null, this._lastShader = null, this._numInstances = 0, this._glPrimitive = i, this._preWireframeGeom = null, this.addVertexNumbers = !1, this.feedBackAttributes = [], this.setGeom(e), this._feedBacks = [], this._feedBacksChanged = !1, this._transformFeedBackLoc = -1, this._lastAttrUpdate = 0, this._cgl.profileData.addHeavyEvent("mesh constructed", this._geom.name), this._queryExt = null, Object.defineProperty(this, "numInstances", {
      get: function get() {
        return this._numInstances;
      },
      set: function set(t) {
        this.setNumInstances(t);
      }
    });
  };

  var lt;
  ht.prototype.updateVertices = function (t) {
    this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_POSITION, t.vertices, 3);
  }, ht.prototype.setAttributePointer = function (t, e, i, s) {
    for (var _r7 = 0; _r7 < this._attributes.length; _r7++) {
      this._attributes[_r7].name == t && (this._attributes[_r7].pointer || (this._attributes[_r7].pointer = []), this._attributes[_r7].pointer.push({
        loc: -1,
        name: e,
        stride: i,
        offset: s,
        instanced: t == ot.SHADER.SHADERVAR_INSTANCE_MMATRIX
      }));
    }
  }, ht.prototype.getAttribute = function (t) {
    for (var _e49 = 0; _e49 < this._attributes.length; _e49++) {
      if (this._attributes[_e49].name == t) return this._attributes[_e49];
    }
  }, ht.prototype.setAttributeRange = function (t, e, i, s) {
    t && (i || s) && (this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, t.buffer), this._cgl.profileData.profileMeshAttributes += s - i || 0, this._cgl.profileData.profileSingleMeshAttribute[this._geom.name] = this._cgl.profileData.profileSingleMeshAttribute[this._geom.name] || 0, this._cgl.profileData.profileSingleMeshAttribute[this._geom.name] += s - i || 0, 1 == this._cgl.glVersion ? this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 0, e) : this._cgl.gl.bufferSubData(this._cgl.gl.ARRAY_BUFFER, 4 * i, e, i, s - i));
  }, ht.prototype._bufferArray = function (t, e) {
    var i = null;
    t && (this._cgl.debugOneFrame && console.log("_bufferArray", t.length, e.name), t instanceof Float32Array ? i = t : e && e.floatArray && e.floatArray.length == t.length ? (e.floatArray.set(t), i = e.floatArray) : (i = new Float32Array(t), this._cgl.debugOneFrame && console.log("_bufferArray create new float32array", t.length, e.name), this._cgl.profileData.profileNonTypedAttrib++, this._cgl.profileData.profileNonTypedAttribNames = "(" + this._geom.name + ":" + e.name + ")"), e && i && (e.floatArray = i), e.arrayLength = i.length, this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, i, this._cgl.gl.DYNAMIC_DRAW));
  }, ht.prototype.addAttribute = ht.prototype.updateAttribute = ht.prototype.setAttribute = function (t, e, i, s) {
    var r = null,
        n = !1,
        o = 0;
    var a = e.length / i;

    for (this._cgl.profileData.profileMeshAttributes += a || 0, 0 === a && console.warn("CGL_MESH: " + this._geom.name + " num items in attribute " + t + " is ZERO"), "function" == typeof s && (r = s), "object" == _typeof(s) && (s.cb && (r = s.cb), s.instanced && (n = s.instanced)), t == ot.SHADER.SHADERVAR_INSTANCE_MMATRIX && (n = !0), o = 0; o < this._attributes.length; o++) {
      if (this._attributes[o].name == t) return this._attributes[o].numItems = a, this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, this._attributes[o].buffer), this._bufferArray(e, this._attributes[o]), this._attributes[o];
    }

    var h = this._cgl.gl.createBuffer();

    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, h);

    var l = this._cgl.gl.FLOAT;
    s && s.type && (l = s.type);
    var c = {
      buffer: h,
      name: t,
      cb: r,
      itemSize: i,
      numItems: a,
      startItem: 0,
      instanced: n,
      type: l
    };
    return this._bufferArray(e, c), t == ot.SHADER.SHADERVAR_VERTEX_POSITION && (this._bufVertexAttrib = c), this._attributes.push(c), this._attribLocs = {}, c;
  }, ht.prototype.getAttributes = function () {
    return this._attributes;
  }, ht.prototype.updateTexCoords = function (t) {
    if (t.texCoords && t.texCoords.length > 0) this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_TEXCOORD, t.texCoords, 2);else {
      var _e50 = new Float32Array(Math.round(t.vertices.length / 3 * 2));

      this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_TEXCOORD, _e50, 2);
    }
  }, ht.prototype.updateNormals = function (t) {
    if (t.vertexNormals && t.vertexNormals.length > 0) this.setAttribute("attrVertNormal", t.vertexNormals, 3);else {
      var _e51 = new Float32Array(Math.round(t.vertices.length));

      this.setAttribute("attrVertNormal", _e51, 3);
    }
  }, ht.prototype._setVertexNumbers = function () {
    var t = this._geom.vertices.length / 3;

    if (!this._verticesNumbers || this._verticesNumbers.length != t) {
      this._verticesNumbers = new Float32Array(t);

      for (var _e52 = 0; _e52 < t; _e52++) {
        this._verticesNumbers[_e52] = _e52;
      }

      this.setAttribute(ot.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, function (e, i, s) {
        s.uniformNumVertices || (s.uniformNumVertices = new rt(s, "f", "numVertices", t)), s.uniformNumVertices.setValue(t);
      });
    }
  }, ht.prototype.setVertexIndices = function (t) {
    if (this._bufVerticesIndizes) {
      if (t.length > 0) {
        for (var _e53 = 0; _e53 < t.length; _e53++) {
          if (t[_e53] >= this._geom.vertices.length / 3) return void console.warn("invalid index in " + this._geom.name);
        }

        this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes), t instanceof Uint16Array ? this.vertIndicesTyped = t : this.vertIndicesTyped = new Uint16Array(t), this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW), this._bufVerticesIndizes.itemSize = 1, this._bufVerticesIndizes.numItems = t.length;
      } else this._bufVerticesIndizes.numItems = 0;
    } else _.warn("no bufVerticesIndizes");
  }, ht.prototype.setGeom = function (t) {
    this._geom = t, null != t.glPrimitive && (this._glPrimitive = t.glPrimitive), at.lastMesh = null, this._cgl.profileData.profileMeshSetGeom++, this._disposeAttributes(), this.updateVertices(this._geom), this.setVertexIndices(this._geom.verticesIndices), this.updateTexCoords(this._geom), this.updateNormals(this._geom), this._geom.hasOwnProperty("tangents") && this._geom.tangents && this._geom.tangents.length > 0 && this.setAttribute("attrTangent", this._geom.tangents, 3), this._geom.hasOwnProperty("biTangents") && this._geom.biTangents && this._geom.biTangents.length > 0 && this.setAttribute("attrBiTangent", this._geom.biTangents, 3), this._geom.vertexColors.length > 0 && (this._geom.vertexColors.flat && this._geom.vertexColors.flat(100), this.setAttribute("attrVertColor", this._geom.vertexColors, 4)), this.addVertexNumbers && this._setVertexNumbers();

    var e = this._geom.getAttributes();

    for (var _t45 in e) {
      this.setAttribute(_t45, e[_t45].data, e[_t45].itemSize);
    }
  }, ht.prototype._preBind = function (t) {
    for (var _e54 = 0; _e54 < this._attributes.length; _e54++) {
      this._attributes[_e54].cb && this._attributes[_e54].cb(this._attributes[_e54], this._geom, t);
    }
  }, ht.prototype._checkAttrLengths = function () {}, ht.prototype._bind = function (t) {
    if (!t.isValid()) return;
    var e = [];

    if (this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e, this._lastShader = t, t.lastCompile > this._lastAttrUpdate || e.length != this._attributes.length) {
      this._lastAttrUpdate = t.lastCompile;

      for (var _t46 = 0; _t46 < this._attributes.length; _t46++) {
        e[_t46] = -1;
      }

      this._checkAttrLengths();
    }

    for (var _i29 = 0; _i29 < this._attributes.length; _i29++) {
      var _s11 = this._attributes[_i29];
      if (-1 == e[_i29] && _s11._attrLocationLastShaderTime != t.lastCompile && (_s11._attrLocationLastShaderTime = t.lastCompile, e[_i29] = this._cgl.glGetAttribLocation(t.getProgram(), _s11.name), this._cgl.profileData.profileAttrLoc++), -1 != e[_i29]) if (this._cgl.gl.enableVertexAttribArray(e[_i29]), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, _s11.buffer), _s11.instanced) {
        if (_s11.itemSize <= 4) _s11.itemSize && 0 != _s11.itemSize || _.log("instanced attrib itemsize error", this._geom.name, _s11), this._cgl.gl.vertexAttribPointer(e[_i29], _s11.itemSize, _s11.type, !1, 4 * _s11.itemSize, 0), this._cgl.gl.vertexAttribDivisor(e[_i29], 1);else if (16 == _s11.itemSize) {
          var _t47 = 64;
          this._cgl.gl.vertexAttribPointer(e[_i29], 4, _s11.type, !1, _t47, 0), this._cgl.gl.enableVertexAttribArray(e[_i29] + 1), this._cgl.gl.vertexAttribPointer(e[_i29] + 1, 4, _s11.type, !1, _t47, 16), this._cgl.gl.enableVertexAttribArray(e[_i29] + 2), this._cgl.gl.vertexAttribPointer(e[_i29] + 2, 4, _s11.type, !1, _t47, 32), this._cgl.gl.enableVertexAttribArray(e[_i29] + 3), this._cgl.gl.vertexAttribPointer(e[_i29] + 3, 4, _s11.type, !1, _t47, 48), this._cgl.gl.vertexAttribDivisor(e[_i29], 1), this._cgl.gl.vertexAttribDivisor(e[_i29] + 1, 1), this._cgl.gl.vertexAttribDivisor(e[_i29] + 2, 1), this._cgl.gl.vertexAttribDivisor(e[_i29] + 3, 1);
        } else _.log("unknown instance attrib size", _s11.name);
      } else {
        if (_s11.itemSize && 0 != _s11.itemSize || _.log("attrib itemsize error", this._geom.name, _s11), this._cgl.gl.vertexAttribPointer(e[_i29], _s11.itemSize, _s11.type, !1, 4 * _s11.itemSize, 0), _s11.pointer) for (var _e55 = 0; _e55 < _s11.pointer.length; _e55++) {
          var _i30 = _s11.pointer[_e55];
          -1 == _i30.loc && (_i30.loc = this._cgl.glGetAttribLocation(t.getProgram(), _i30.name)), this._cgl.profileData.profileAttrLoc++, this._cgl.gl.enableVertexAttribArray(_i30.loc), this._cgl.gl.vertexAttribPointer(_i30.loc, _s11.itemSize, _s11.type, !1, _i30.stride, _i30.offset);
        }
        this.bindFeedback(_s11);
      }
    }

    0 !== this._bufVerticesIndizes.numItems && this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes);
  }, ht.prototype.unBind = function () {
    var t = this._lastShader;
    if (this._lastShader = null, !t) return;
    var e = [];
    this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e, at.lastMesh = null;

    for (var _t48 = 0; _t48 < this._attributes.length; _t48++) {
      this._attributes[_t48].instanced && (this._attributes[_t48].itemSize <= 4 ? (-1 != e[_t48] && this._cgl.gl.vertexAttribDivisor(e[_t48], 0), e[_t48] >= 0 && this._cgl.gl.disableVertexAttribArray(e[_t48])) : (this._cgl.gl.vertexAttribDivisor(e[_t48], 0), this._cgl.gl.vertexAttribDivisor(e[_t48] + 1, 0), this._cgl.gl.vertexAttribDivisor(e[_t48] + 2, 0), this._cgl.gl.vertexAttribDivisor(e[_t48] + 3, 0), this._cgl.gl.disableVertexAttribArray(e[_t48] + 1), this._cgl.gl.disableVertexAttribArray(e[_t48] + 2), this._cgl.gl.disableVertexAttribArray(e[_t48] + 3))), -1 != e[_t48] && this._cgl.gl.disableVertexAttribArray(e[_t48]);
    }
  }, ht.prototype.meshChanged = function () {
    return this._cgl.lastMesh && this._cgl.lastMesh != this;
  }, ht.prototype.printDebug = function (t) {
    _.log("--attributes");

    for (var _t49 = 0; _t49 < this._attributes.length; _t49++) {
      _.log("attribute " + _t49 + " " + this._attributes[_t49].name);
    }
  }, ht.prototype.setNumVertices = function (t) {
    this._bufVertexAttrib.numItems = t;
  }, ht.prototype.getNumVertices = function () {
    return this._bufVertexAttrib.numItems;
  }, ht.prototype.render = function (t) {
    if (!t || !t.isValid()) return;
    t.wireframe || this._geom.isIndexed() || !this._preWireframeGeom || this.setGeom(this._preWireframeGeom), t.wireframe && this._geom.isIndexed() && (this._preWireframeGeom = this._geom, this._geom = this._geom.copy(), this._geom.unIndex(), this._geom.calcBarycentric(), this.setGeom(this._geom), this.setAttribute("attrBarycentric", this._geom.barycentrics, 3));
    var e = !1;
    at.lastMesh != this && (at.lastMesh && at.lastMesh.unBind(), e = !0), e && this._preBind(t), t.bind(), t.bindTextures && t.bindTextures(), this._bind(t), this.addVertexNumbers && this._setVertexNumbers(), at.lastMesh = this;
    var i = this._cgl.gl.TRIANGLES;
    void 0 !== this._glPrimitive && (i = this._glPrimitive), null !== t.glPrimitive && (i = t.glPrimitive);
    var s = 1,
        r = this._cgl.profileData.doProfileGlQuery;

    if (r) {
      var _e56 = this._geom.name + " " + t.getName() + " #" + t.id;

      this._numInstances && (_e56 += " instanced " + this._numInstances + "x");
      var _i31 = this._cgl.profileData.glQueryData[_e56];

      if (_i31 || (_i31 = {
        id: _e56,
        num: 0
      }, this._cgl.profileData.glQueryData[_e56] = _i31), this._queryExt || (this._queryExt = this._cgl.gl.getExtension("EXT_disjoint_timer_query_webgl2")), _i31._drawQuery) {
        if (this._cgl.gl.getQueryParameter(_i31._drawQuery, this._cgl.gl.QUERY_RESULT_AVAILABLE)) {
          var _t50 = this._cgl.gl.getQueryParameter(_i31._drawQuery, this._cgl.gl.QUERY_RESULT) / 1e6;

          _i31._times += _t50, _i31._numcount++, _i31.when = performance.now(), _i31._drawQuery = null, _i31.queryStarted = !1;
        }
      }

      _i31.queryStarted || (_i31._drawQuery = this._cgl.gl.createQuery(), this._cgl.gl.beginQuery(this._queryExt.TIME_ELAPSED_EXT, _i31._drawQuery), _i31.queryStarted = !0);
    }

    if (this.hasFeedbacks() ? this.drawFeedbacks(t, i) : 0 === this._bufVerticesIndizes.numItems ? (i == this._cgl.gl.TRIANGLES && (s = 3), 0 === this._numInstances ? this._cgl.gl.drawArrays(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem) : this._cgl.gl.drawArraysInstanced(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances)) : 0 === this._numInstances ? this._cgl.gl.drawElements(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0) : this._cgl.gl.drawElementsInstanced(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0, this._numInstances), this._cgl.debugOneFrame && this._cgl.gl.getError() != this._cgl.gl.NO_ERROR) {
      console.error("mesh draw gl error"), console.log("mesh", this), console.log("shader", t);

      for (var _e57 = 0; _e57 < this._cgl.gl.getProgramParameter(t.getProgram(), this._cgl.gl.ACTIVE_ATTRIBUTES); _e57++) {
        var _i32 = this._cgl.gl.getActiveAttrib(t.getProgram(), _e57).name;

        console.log("attrib ", _i32);
      }
    }

    this._cgl.profileData.profileMeshNumElements += this._bufVertexAttrib.numItems / s * (this._numInstances || 1), this._cgl.profileData.profileMeshDraw++, r && this._cgl.gl.endQuery(this._queryExt.TIME_ELAPSED_EXT), this.unBind();
  }, ht.prototype.setNumInstances = function (t) {
    if (t = Math.max(0, t), this._numInstances != t) {
      this._numInstances = t;

      var _e58 = new Float32Array(t);

      for (var _i33 = 0; _i33 < t; _i33++) {
        _e58[_i33] = _i33;
      }

      this.setAttribute("instanceIndex", _e58, 1, {
        instanced: !0
      });
    }
  }, ht.prototype._disposeAttributes = function () {
    if (this._attributes) {
      for (var _t51 = 0; _t51 < this._attributes.length; _t51++) {
        this._attributes[_t51].buffer && (this._cgl.gl.deleteBuffer(this._attributes[_t51].buffer), this._attributes[_t51].buffer = null);
      }

      this._attributes.length = 0;
    }
  }, ht.prototype.dispose = function () {
    this._bufVertexAttrib && this._bufVertexAttrib.buffer && this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer), this._bufVerticesIndizes && this._cgl.gl.deleteBuffer(this._bufVerticesIndizes), this._disposeAttributes();
  }, (lt = ht).prototype.hasFeedbacks = function () {
    return this._feedBacks.length > 0;
  }, lt.prototype.removeFeedbacks = function (t) {
    this._feedbacks && (this._feedbacks.length = 0, this._feedBacksChanged = !0);
  }, lt.prototype.setAttributeFeedback = function () {}, lt.prototype.setFeedback = function (t, e, i) {
    var s = {
      nameOut: e
    },
        r = !1;
    this.unBindFeedbacks();

    for (var _t52 = 0; _t52 < this._feedBacks.length; _t52++) {
      this._feedBacks[_t52].nameOut == e && (s = this._feedBacks[_t52], r = !0);
    }

    return r || (this._feedBacksChanged = !0), s.initialArr = i, s.attrib = t, s.outBuffer && this._cgl.gl.deleteBuffer(s.outBuffer), s.outBuffer = this._cgl.gl.createBuffer(), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.outBuffer), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, s.attrib.buffer), this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, s.initialArr, this._cgl.gl.STATIC_DRAW), r || this._feedBacks.push(s), s;
  }, lt.prototype.bindFeedback = function (t) {
    if (!this._feedBacks || 0 === this._feedBacks.length) return;
    -1 == this._transformFeedBackLoc && (this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback()), this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);
    var e = !1;

    for (var _i34 = 0; _i34 < this._feedBacks.length; _i34++) {
      var _s12 = this._feedBacks[_i34];
      _s12.attrib == t && (e = !0, this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, _i34, _s12.outBuffer));
    }
  }, lt.prototype.drawFeedbacks = function (t, e) {
    var i = 0;

    if (this._feedBacksChanged) {
      var _e59 = [];

      for (this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc), i = 0; i < this._feedBacks.length; i++) {
        _e59.push(this._feedBacks[i].nameOut);
      }

      return t.setFeedbackNames(_e59), _.log("feedbacknames", _e59), t.compile(), this._feedBacksChanged = !1, this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null), void _.log("changed finished");
    }

    this._cgl.gl.beginTransformFeedback(this.glPrimitive), this._cgl.gl.drawArrays(e, 0, this._feedBacks[0].attrib.numItems), this._cgl.gl.endTransformFeedback(), this.unBindFeedbacks(), this.feedBacksSwapBuffers();
  }, lt.prototype.unBindFeedbacks = function () {
    for (var _t53 = 0; _t53 < this._feedBacks.length; _t53++) {
      this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, _t53, null);
    }

    this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null);
  }, lt.prototype.feedBacksSwapBuffers = function () {
    for (var _t54 = 0; _t54 < this._feedBacks.length; _t54++) {
      var _e60 = this._feedBacks[_t54].attrib.buffer;
      this._feedBacks[_t54].attrib.buffer = this._feedBacks[_t54].outBuffer, this._feedBacks[_t54].outBuffer = _e60;
    }
  };

  var ct = {
    getSimpleRect: function getSimpleRect(t, e) {
      var i = new st(e);
      return i.vertices = [1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0], i.texCoords = [1, 1, 0, 1, 1, 0, 0, 0], i.verticesIndices = [0, 1, 2, 2, 1, 3], i.vertexNormals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], new ht(t, i);
    }
  },
      ut = function ut(t, e) {
    this._cgl = t, t.TextureEffectMesh || this.createMesh(), this._textureSource = null, this._options = e, this._textureTarget = null, this._frameBuf = this._cgl.gl.createFramebuffer(), this._frameBuf2 = this._cgl.gl.createFramebuffer(), this._renderbuffer = this._cgl.gl.createRenderbuffer(), this._renderbuffer2 = this._cgl.gl.createRenderbuffer(), this.switched = !1, this.depth = !1;
  };

  ut.prototype.getWidth = function () {
    return this._textureSource.width;
  }, ut.prototype.getHeight = function () {
    return this._textureSource.height;
  }, ut.prototype.setSourceTexture = function (t) {
    t.textureType == tt.TYPE_FLOAT && this._cgl.gl.getExtension("EXT_color_buffer_float"), null === t ? (this._textureSource = new tt(this._cgl), this._textureSource.setSize(16, 16)) : this._textureSource = t, this._textureSource.compareSettings(this._textureTarget) || (this._textureTarget && this._textureTarget.delete(), this._textureTarget = this._textureSource.clone(), this._cgl.profileData.profileEffectBuffercreate++, this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null));
  }, ut.prototype.startEffect = function (t) {
    this._textureTarget ? (this.switched = !1, this._cgl.pushDepthTest(!1), this._cgl.pushModelMatrix(), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height), mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, .1, 1100), this._cgl.pushPMatrix(), mat4.identity(this._cgl.pMatrix), this._cgl.pushViewMatrix(), mat4.identity(this._cgl.vMatrix), this._cgl.pushModelMatrix(), mat4.identity(this._cgl.mvMatrix), t && (this._bgTex = t), this._countEffects = 0) : _.log("effect has no target");
  }, ut.prototype.endEffect = function () {
    this._cgl.popDepthTest(!1), this._cgl.popModelMatrix(), this._cgl.popPMatrix(), this._cgl.popModelMatrix(), this._cgl.popViewMatrix(), this._cgl.popPMatrix(), this._cgl.resetViewPort();
  }, ut.prototype.bind = function () {
    null !== this._textureSource ? this.switched ? (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.pushGlFrameBuffer(this._frameBuf2)) : (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.pushGlFrameBuffer(this._frameBuf)) : _.log("no base texture set!");
  }, ut.prototype.finish = function () {
    null !== this._textureSource ? (this._cgl.TextureEffectMesh.render(this._cgl.getShader()), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), this._cgl.profileData.profileTextureEffect++, this._textureTarget.filter == tt.FILTER_MIPMAP && (this.switched ? (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex), this._textureSource.updateMipMap()) : (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex), this._textureTarget.updateMipMap()), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)), this.switched = !this.switched, this._countEffects++) : _.log("no base texture set!");
  }, ut.prototype.getCurrentTargetTexture = function () {
    return this.switched ? this._textureSource : this._textureTarget;
  }, ut.prototype.getCurrentSourceTexture = function () {
    return 0 == this._countEffects && this._bgTex ? this._bgTex : this.switched ? this._textureTarget : this._textureSource;
  }, ut.prototype.delete = function () {
    this._textureTarget && this._textureTarget.delete(), this._textureSource && this._textureSource.delete(), this._cgl.gl.deleteRenderbuffer(this._renderbuffer), this._cgl.gl.deleteFramebuffer(this._frameBuf);
  }, ut.prototype.createMesh = function () {
    this._cgl.TextureEffectMesh = ct.getSimpleRect(this._cgl, "texEffectRect");
  }, ut.checkOpNotInTextureEffect = function (t) {
    return t.uiAttribs.error && !t.patch.cgl.currentTextureEffect ? (t.uiAttr({
      error: null
    }), !0) : !t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect && !t.uiAttribs.error ? (t.setUiError("textureeffect", "This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.", 0), !1) : !t.patch.cgl.currentTextureEffect);
  }, ut.checkOpInEffect = function (t) {
    return t.patch.cgl.currentTextureEffect && t.uiAttribs.error ? (t.uiAttr({
      error: null
    }), !0) : !!t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect || t.uiAttribs.error ? !!t.patch.cgl.currentTextureEffect : (t.setUiError("texeffect", 'This op must be a child of an ImageCompose op! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>.', 1), !1));
  }, ut.getBlendCode = function () {
    return "".endl() + "vec3 _blend(vec3 base,vec3 blend)".endl() + "{".endl() + "   vec3 colNew=blend;".endl() + "   #ifdef BM_MULTIPLY".endl() + "       colNew=base*blend;".endl() + "   #endif".endl() + "   #ifdef BM_MULTIPLY_INV".endl() + "       colNew=base* vec3(1.0)-blend;".endl() + "   #endif".endl() + "   #ifdef BM_AVERAGE".endl() + "       colNew=((base + blend) / 2.0);".endl() + "   #endif".endl() + "   #ifdef BM_ADD".endl() + "       colNew=min(base + blend, vec3(1.0));".endl() + "   #endif".endl() + "   #ifdef BM_SUBSTRACT".endl() + "       colNew=max(base + blend - vec3(1.0), vec3(0.0));".endl() + "   #endif".endl() + "   #ifdef BM_DIFFERENCE".endl() + "       colNew=abs(base - blend);".endl() + "   #endif".endl() + "   #ifdef BM_NEGATION".endl() + "       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));".endl() + "   #endif".endl() + "   #ifdef BM_EXCLUSION".endl() + "       colNew=(base + blend - 2.0 * base * blend);".endl() + "   #endif".endl() + "   #ifdef BM_LIGHTEN".endl() + "       colNew=max(blend, base);".endl() + "   #endif".endl() + "   #ifdef BM_DARKEN".endl() + "       colNew=min(blend, base);".endl() + "   #endif".endl() + "   #ifdef BM_OVERLAY".endl() + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_SCREEN".endl() + "      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))".endl() + "      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_SOFTLIGHT".endl() + "      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))".endl() + "      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_HARDLIGHT".endl() + "      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))".endl() + "      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_COLORDODGE".endl() + "      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))".endl() + "      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));".endl() + "   #endif".endl() + "   #ifdef BM_COLORBURN".endl() + "      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))".endl() + "      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));".endl() + "   #endif".endl() + "   return colNew;".endl() + "}".endl() + "vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)".endl() + "{".endl() + "vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);".endl() + "col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);".endl() + "return col;".endl() + "}";
  }, ut.onChangeBlendSelect = function (t, e) {
    "normal" == e ? t.define("BM_NORMAL") : t.removeDefine("BM_NORMAL"), "multiply" == e ? t.define("BM_MULTIPLY") : t.removeDefine("BM_MULTIPLY"), "multiply invert" == e ? t.define("BM_MULTIPLY_INV") : t.removeDefine("BM_MULTIPLY_INV"), "average" == e ? t.define("BM_AVERAGE") : t.removeDefine("BM_AVERAGE"), "add" == e ? t.define("BM_ADD") : t.removeDefine("BM_ADD"), "substract" == e ? t.define("BM_SUBSTRACT") : t.removeDefine("BM_SUBSTRACT"), "difference" == e ? t.define("BM_DIFFERENCE") : t.removeDefine("BM_DIFFERENCE"), "negation" == e ? t.define("BM_NEGATION") : t.removeDefine("BM_NEGATION"), "exclusion" == e ? t.define("BM_EXCLUSION") : t.removeDefine("BM_EXCLUSION"), "lighten" == e ? t.define("BM_LIGHTEN") : t.removeDefine("BM_LIGHTEN"), "darken" == e ? t.define("BM_DARKEN") : t.removeDefine("BM_DARKEN"), "overlay" == e ? t.define("BM_OVERLAY") : t.removeDefine("BM_OVERLAY"), "screen" == e ? t.define("BM_SCREEN") : t.removeDefine("BM_SCREEN"), "softlight" == e ? t.define("BM_SOFTLIGHT") : t.removeDefine("BM_SOFTLIGHT"), "hardlight" == e ? t.define("BM_HARDLIGHT") : t.removeDefine("BM_HARDLIGHT"), "color dodge" == e ? t.define("BM_COLORDODGE") : t.removeDefine("BM_COLORDODGE"), "color burn" == e ? t.define("BM_COLORBURN") : t.removeDefine("BM_COLORBURN");
  }, ut.AddBlendSelect = function (t, e, i) {
    return t.inValueSelect(e, ["normal", "lighten", "darken", "multiply", "multiply invert", "average", "add", "substract", "difference", "negation", "exclusion", "overlay", "screen", "color dodge", "color burn", "softlight", "hardlight"], i || "normal");
  }, ut.setupBlending = function (t, e, i, s) {
    t.setPortGroup("Blending", [i, s]), i.onChange = function () {
      ut.onChangeBlendSelect(e, i.get());
      var s = i.get();
      "normal" == s ? s = null : "multiply" == s ? s = "mul" : "multiply invert" == s ? s = "mulinv" : "lighten" == s ? s = "light" : "darken" == s ? s = "darken" : "average" == s ? s = "avg" : "substract" == s ? s = "sub" : "difference" == s ? s = "diff" : "negation" == s || "negation" == s || "negation" == s ? s = "neg" : "exclusion" == s ? s = "exc" : "overlay" == s ? s = "ovl" : "color dodge" == s ? s = "dodge" : "color burn" == s ? s = "burn" : "softlight" == s ? s = "soft" : "hardlight" == s && (s = "hard"), t.setUiAttrib({
        extendTitle: s
      });
    }, ut.onChangeBlendSelect(e, i.get());
  };

  var pt = {
    "CGL.BLENDMODES": function CGLBLENDMODES() {
      this.name = "blendmodes", this.srcHeadFrag = ut.getBlendCode();
    },
    "CGL.RANDOM_OLD": function CGLRANDOM_OLD() {
      this.name = "randomNumber", this.srcHeadFrag = "".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() + "}";
    },
    "CGL.RANDOM_LOW": function CGLRANDOM_LOW() {
      this.name = "randomNumber", this.srcHeadFrag = "".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));".endl() + "}";
    },
    "CGL.RANDOM_TEX": function CGLRANDOM_TEX() {
      this.name = "randomNumbertex", this.srcHeadFrag = "".endl() + "UNI sampler2D CGLRNDTEX;".endl() + "float cgl_random(vec2 co)".endl() + "{".endl() + "    return texture(CGLRNDTEX,co*5711.0).r;".endl() + "}".endl() + "vec3 cgl_random3(vec2 co)".endl() + "{".endl() + "    return texture(CGLRNDTEX,co*5711.0).rgb;".endl() + "}", this.initUniforms = function (t) {
        return [new rt(t, "t", "CGLRNDTEX", 7)];
      }, this.onBind = function (t, e) {
        tt.getRandomTexture(t), t.setTexture(7, tt.getRandomTexture(t).tex);
      };
    }
  },
      _t = function _t() {
    return window.performance.now();
  },
      dt = function dt() {
    return _t();
  },
      gt = function gt() {
    CABLES.EventTarget.apply(this), this._timeStart = _t(), this._timeOffset = 0, this._currentTime = 0, this._lastTime = 0, this._paused = !0, this._delay = 0, this._eventsPaused = !1, this.overwriteTime = -1, this.cbPlayPause = [], this.cbTimeChange = [];
  };

  gt.prototype._getTime = function () {
    return this._lastTime = (_t() - this._timeStart) / 1e3, this._lastTime + this._timeOffset;
  }, gt.prototype._eventPlayPause = function () {
    if (this.emitEvent("playPause"), !this._eventsPaused) for (var _t55 in this.cbPlayPause) {
      this.cbPlayPause[_t55]();
    }
  }, gt.prototype._eventTimeChange = function () {
    if (!this._eventsPaused) for (var _t56 in this.cbTimeChange) {
      this.cbTimeChange[_t56]();
    }
  }, gt.prototype.setDelay = function (t) {
    this._delay = t, this._eventTimeChange();
  }, gt.prototype.isPlaying = function () {
    return !this._paused;
  }, gt.prototype.update = function () {
    if (!this._paused) return this._currentTime = this._getTime(), this._currentTime;
  }, gt.prototype.getMillis = function () {
    return 1e3 * this.get();
  }, gt.prototype.get = gt.prototype.getTime = function () {
    return this.overwriteTime >= 0 ? this.overwriteTime - this._delay : this._currentTime - this._delay;
  }, gt.prototype.togglePlay = function () {
    this._paused ? this.play() : this.pause();
  }, gt.prototype.setTime = function (t) {
    t < 0 && (t = 0), this._timeStart = _t(), this._timeOffset = t, this._currentTime = t, this._eventTimeChange();
  }, gt.prototype.setOffset = function (t) {
    this._currentTime + t < 0 ? (this._timeStart = _t(), this._timeOffset = 0, this._currentTime = 0) : (this._timeOffset += t, this._currentTime = this._lastTime + this._timeOffset), this._eventTimeChange();
  }, gt.prototype.play = function () {
    this._timeStart = _t(), this._paused = !1, this._eventPlayPause();
  }, gt.prototype.pause = function () {
    this._timeOffset = this._currentTime, this._paused = !0, this._eventPlayPause();
  }, gt.prototype.pauseEvents = function (t) {
    this._eventsPaused = t;
  }, gt.prototype.onPlayPause = function (t) {
    t && "function" == typeof t && this.cbPlayPause.push(t);
  }, gt.prototype.onTimeChange = function (t) {
    t && "function" == typeof t && this.cbTimeChange.push(t);
  };

  var ft = Math.PI / 180,
      mt = (Math.PI, -1 != window.navigator.userAgent.indexOf("Windows")),
      Et = function Et(t) {
    var e;
    if (t.wheelDelta) e = t.wheelDelta % 120 - 0 == -0 ? t.wheelDelta / 120 : t.wheelDelta / 30, e *= -1.5, mt && (e *= 2);else {
      var _i35 = t.deltaY;
      t.shiftKey && (_i35 = t.deltaX);

      var _s13 = _i35 || t.detail;

      e = -(_s13 % 3 ? 10 * _s13 : _s13 / 3), e *= -3;
    }
    return e > 20 && (e = 20), e < -20 && (e = -20), e;
  },
      Tt = Et,
      bt = Et,
      At = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  },
      yt = /[&<>"']/g,
      xt = RegExp(yt.source),
      vt = function vt(t, e) {
    if (!t) throw new Error("shader constructed without cgl " + e);
    this._cgl = t, e || (console.warn("no shader name given"), console.log(new Error().stack)), this._name = e || "unknown", this.glslVersion = 0, t.glVersion > 1 && (this.glslVersion = 300), this.id = v(), this._isValid = !0, this._program = null, this._uniforms = [], this._drawBuffers = [!0], this._defines = [], this._needsRecompile = !0, this._compileReason = "initial", this._projMatrixUniform = null, this._mvMatrixUniform = null, this._mMatrixUniform = null, this._vMatrixUniform = null, this._camPosUniform = null, this._normalMatrixUniform = null, this._inverseViewMatrixUniform = null, this._attrVertexPos = -1, this.precision = t.patch.config.glslPrecision || "highp", this._pMatrixState = -1, this._vMatrixState = -1, this._modGroupCount = 0, this._feedBackNames = [], this._attributes = [], this.glPrimitive = null, this.offScreenPass = !1, this._extensions = [], this.srcVert = this.getDefaultVertexShader(), this.srcFrag = this.getDefaultFragmentShader(), this.lastCompile = 0, this._moduleNames = [], this._modules = [], this._moduleNumId = 0, this._libs = [], this._structNames = [], this._structUniformNames = [], this._textureStackUni = [], this._textureStackTex = [], this._textureStackType = [], this._textureStackTexCgl = [], this._tempNormalMatrix = mat4.create(), this._tempCamPosMatrix = mat4.create(), this._tempInverseViewMatrix = mat4.create(), this.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
  };

  vt.prototype.isValid = function () {
    return this._isValid;
  }, vt.prototype.getCgl = function () {
    return this._cgl;
  }, vt.prototype.getName = function () {
    return this._name;
  }, vt.prototype.enableExtension = function (t) {
    this.setWhyCompile("enable extension " + t), this._needsRecompile = !0, this._extensions.push(t);
  }, vt.prototype.getAttrVertexPos = function () {
    return this._attrVertexPos;
  }, vt.prototype.hasTextureUniforms = function () {
    for (var _t57 = 0; _t57 < this._uniforms.length; _t57++) {
      if ("t" == this._uniforms[_t57].getType()) return !0;
    }

    return !1;
  }, vt.prototype.setWhyCompile = function (t) {
    this._compileReason = t;
  }, vt.prototype.copyUniformValues = function (t) {
    for (var _e61 = 0; _e61 < t._uniforms.length; _e61++) {
      this._uniforms[_e61] && this.getUniform(t._uniforms[_e61].getName()).set(t._uniforms[_e61].getValue());
    }

    this.popTextures();

    for (var _e62 = 0; _e62 < t._textureStackUni.length; _e62++) {
      this._textureStackUni[_e62] = t._textureStackUni[_e62], this._textureStackTex[_e62] = t._textureStackTex[_e62], this._textureStackType[_e62] = t._textureStackType[_e62], this._textureStackTexCgl[_e62] = t._textureStackTexCgl[_e62];
    }
  }, vt.prototype.copy = function () {
    var t = new vt(this._cgl, this._name + " copy");
    t.setSource(this.srcVert, this.srcFrag), t._modules = JSON.parse(JSON.stringify(this._modules)), t._defines = JSON.parse(JSON.stringify(this._defines)), t._modGroupCount = this._modGroupCount, t._moduleNames = this._moduleNames, t.glPrimitive = this.glPrimitive, t.offScreenPass = this.offScreenPass, t._extensions = this._extensions;

    for (var _e63 = 0; _e63 < this._uniforms.length; _e63++) {
      this._uniforms[_e63].copy(t).resetLoc();
    }

    return this.setWhyCompile("copy"), t._needsRecompile = !0, t;
  }, vt.prototype.setSource = function (t, e) {
    this.srcVert = t, this.srcFrag = e, this.setWhyCompile("Source changed"), this._needsRecompile = !0;
  }, vt.prototype._addLibs = function (t) {
    for (var _e64 in pt) {
      if (t.indexOf(_e64) > -1) {
        var _i36 = new pt[_e64]();

        t = t.replace("{{" + _e64 + "}}", _i36.srcHeadFrag), this._libs.push(_i36), _i36.initUniforms && _i36.initUniforms(this);
      }
    }

    return t;
  }, vt.prototype.createStructUniforms = function () {
    var t = "",
        e = "";
    this._structNames = [], this._injectedStringsFrag = {}, this._injectedStringsVert = {}, this._structUniformNamesIndicesFrag = [], this._structUniformNamesIndicesVert = [];

    for (var _i37 = 0; _i37 < this._uniforms.length; _i37++) {
      if (this._uniforms[_i37].isStructMember()) {
        var _s14 = "{{INJECTION_POINT_STRUCT_" + this._uniforms[_i37]._structName + "}}";

        if (-1 === this._structNames.indexOf(this._uniforms[_i37]._structName)) {
          var _r9 = "struct " + this._uniforms[_i37]._structName + " {".endl() + _s14 + "};".endl().endl();

          "both" !== this._uniforms[_i37].getShaderType() && "frag" !== this._uniforms[_i37].getShaderType() || (t = t.concat(_r9)), "both" !== this._uniforms[_i37].getShaderType() && "vert" !== this._uniforms[_i37].getShaderType() || (e = e.concat(_r9)), this._structNames.push(this._uniforms[_i37]._structName), this._injectedStringsFrag[this._uniforms[_i37]._structName] = [], this._injectedStringsVert[this._uniforms[_i37]._structName] = [];
        }

        var _r8 = "";
        this._uniforms[_i37].comment && (_r8 = " // " + this._uniforms[_i37].comment);
        var _n5 = "";

        if (null == this._uniforms[_i37].getGlslTypeString() && (_n5 += "//"), _n5 += "  " + this._uniforms[_i37].getGlslTypeString() + " " + this._uniforms[_i37]._propertyName + ";" + _r8, "both" === this._uniforms[_i37].getShaderType()) {
          if (-1 === this._injectedStringsFrag[this._uniforms[_i37]._structName].indexOf(_n5) && -1 === this._injectedStringsVert[this._uniforms[_i37]._structName].indexOf(_n5)) {
            var _r10 = t.lastIndexOf(_s14),
                _o4 = e.lastIndexOf(_s14);

            t = t.slice(0, _r10) + _n5 + t.slice(_r10 - 1), e = e.slice(0, _o4) + _n5 + e.slice(_o4 - 1), this._injectedStringsFrag[this._uniforms[_i37]._structName].push(_n5), this._injectedStringsVert[this._uniforms[_i37]._structName].push(_n5);
          }

          -1 === this._structUniformNamesIndicesFrag.indexOf(_i37) && this._structUniformNamesIndicesFrag.push(_i37), -1 === this._structUniformNamesIndicesVert.indexOf(_i37) && this._structUniformNamesIndicesVert.push(_i37);
        } else if ("frag" === this._uniforms[_i37].getShaderType()) {
          if (-1 === this._injectedStringsFrag[this._uniforms[_i37]._structName].indexOf(_n5)) {
            var _e65 = t.lastIndexOf(_s14);

            t = t.slice(0, _e65) + _n5 + t.slice(_e65 - 1), this._injectedStringsFrag[this._uniforms[_i37]._structName].push(_n5);
          }

          -1 === this._structUniformNamesIndicesFrag.indexOf(_i37) && this._structUniformNamesIndicesFrag.push(_i37);
        } else if ("vert" === this._uniforms[_i37].getShaderType()) {
          if (-1 === this._injectedStringsVert[this._uniforms[_i37]._structName].indexOf(_n5)) {
            var _t58 = e.lastIndexOf(_s14);

            e = e.slice(0, _t58) + _n5 + e.slice(_t58 - 1), this._injectedStringsVert[this._uniforms[_i37]._structName].push(_n5);
          }

          -1 === this._structUniformNamesIndicesVert.indexOf(_i37) && this._structUniformNamesIndicesVert.push(_i37);
        }
      }
    }

    this._uniDeclarationsFrag = [], this._uniDeclarationsVert = [];

    for (var _e66 = 0; _e66 < this._structUniformNamesIndicesFrag.length; _e66 += 1) {
      var _i38 = this._structUniformNamesIndicesFrag[_e66],
          _s15 = "UNI " + this._uniforms[_i38]._structName + " " + this._uniforms[_i38]._structUniformName + ";".endl();

      if (-1 === this._uniDeclarationsFrag.indexOf(_s15)) {
        var _e67 = "{{INJECTION_POINT_STRUCT_" + this._uniforms[_i38]._structName + "}}";

        t = t.replace(_e67, ""), t += _s15, this._uniDeclarationsFrag.push(_s15);
      }
    }

    for (var _t59 = 0; _t59 < this._structUniformNamesIndicesVert.length; _t59 += 1) {
      var _i39 = this._structUniformNamesIndicesVert[_t59],
          _s16 = "UNI " + this._uniforms[_i39]._structName + " " + this._uniforms[_i39]._structUniformName + ";".endl();

      if (-1 === this._uniDeclarationsVert.indexOf(_s16)) {
        var _t60 = "{{INJECTION_POINT_STRUCT_" + this._uniforms[_i39]._structName + "}}";

        e = e.replace(_t60, ""), e += _s16, this._uniDeclarationsVert.push(_s16);
      }
    }

    return [e, t];
  }, vt.prototype.compile = function () {
    var t = performance.now();
    this._cgl.printError("shader.compile"), this._cgl.profileData.profileShaderCompiles++, this._cgl.profileData.profileShaderCompileName = this._name + " [" + this._compileReason + "]";
    var e = "";
    if (this._extensions) for (var _t61 = 0; _t61 < this._extensions.length; _t61++) {
      e += "#extension " + this._extensions[_t61] + " : enable".endl();
    }
    var i = "";
    this._defines.length && (i = "\n// cgl generated".endl());

    for (var _t62 = 0; _t62 < this._defines.length; _t62++) {
      i += "#define " + this._defines[_t62][0] + " " + this._defines[_t62][1] + "".endl();
    }

    var s = this.createStructUniforms();

    if (this._cgl.printError("createStructUniforms"), this._cgl.profileData.addHeavyEvent("shader compile", this._name + " [" + this._compileReason + "]"), this._compileReason = "", this._uniforms) {
      var _t63 = this._uniforms.map(function (t) {
        return t._name;
      }),
          _e68 = [];

      for (var _i40 = 0; _i40 < this._uniforms.length; _i40++) {
        var _s17 = this._uniforms[_i40];
        _t63.indexOf(_s17._name, _i40 + 1) > -1 && _e68.push(_i40);
      }

      for (var _t64 = this._uniforms.length - 1; _t64 >= 0; _t64 -= 1) {
        _e68.indexOf(_t64) > -1 ? this._uniforms.splice(_t64, 1) : this._uniforms[_t64].resetLoc();
      }
    }

    this._cgl.printError("uniform resets"), this.hasTextureUniforms() && (i += "#define HAS_TEXTURES".endl());
    var r = "",
        n = "";

    if (this.srcFrag || (console.error("[cgl shader] has no fragment source!"), this.srcVert = this.getDefaultVertexShader(), this.srcFrag = this.getDefaultFragmentShader()), 300 == this.glslVersion) {
      var _t65 = "";
      if (this.srcFrag.indexOf("outColor0") > -1 && (this._drawBuffers[0] = !0), this.srcFrag.indexOf("outColor1") > -1 && (this._drawBuffers[1] = !0), this.srcFrag.indexOf("outColor2") > -1 && (this._drawBuffers[2] = !0), this.srcFrag.indexOf("outColor3") > -1 && (this._drawBuffers[3] = !0), 1 == this._drawBuffers.length) _t65 = "out vec4 outColor;".endl(), _t65 += "#define gl_FragColor outColor".endl();else {
        var _e69 = 0;
        _t65 += "#define MULTI_COLORTARGETS".endl(), _t65 += "vec4 outColor;".endl();

        for (var _i41 = 0; _i41 < this._drawBuffers.length; _i41++) {
          0 == _e69 && (_t65 += "#define gl_FragColor outColor" + _i41 + "".endl()), _t65 += "layout(location = " + _i41 + ") out vec4 outColor" + _i41 + ";".endl(), _e69++;
        }
      }
      r = "#version 300 es".endl() + "// ".endl() + "// vertex shader " + this._name.endl() + "// ".endl() + "precision " + this.precision + " float;".endl() + "".endl() + "#define WEBGL2".endl() + "#define texture2D texture".endl() + "#define UNI uniform".endl() + "#define IN in".endl() + "#define OUT out".endl(), n = "#version 300 es".endl() + "// ".endl() + "// fragment shader " + this._name.endl() + "// ".endl() + "precision " + this.precision + " float;".endl() + "".endl() + "#define WEBGL2".endl() + "#define texture2D texture".endl() + "#define IN in".endl() + "#define UNI uniform".endl() + _t65.endl();
    } else n = "".endl() + "// ".endl() + "// fragment shader " + this._name.endl() + "// ".endl() + "#define WEBGL1".endl() + "#define texture texture2D".endl() + "#define outColor gl_FragColor".endl() + "#define IN varying".endl() + "#define UNI uniform".endl(), r = "".endl() + "// ".endl() + "// vertex shader " + this._name.endl() + "// ".endl() + "#define WEBGL1".endl() + "#define texture texture2D".endl() + "#define OUT varying".endl() + "#define IN attribute".endl() + "#define UNI uniform".endl();

    var o = "\n// cgl generated".endl(),
        a = "\n// cgl generated".endl();
    n += "\n// active mods: --------------- ", r += "\n// active mods: --------------- ";
    var h = !1,
        l = !1;

    for (var _t66 = 0; _t66 < this._moduleNames.length; _t66++) {
      for (var _e70 = 0; _e70 < this._modules.length; _e70++) {
        this._modules[_e70].name == this._moduleNames[_t66] && ((this._modules[_e70].srcBodyFrag || this._modules[_e70].srcHeadFrag) && (h = !0, n += "\n// " + _t66 + "." + _e70 + ". " + this._modules[_e70].title + " (" + this._modules[_e70].name + ")"), (this._modules[_e70].srcBodyVert || this._modules[_e70].srcHeadVert) && (r += "\n// " + _t66 + "." + _e70 + ". " + this._modules[_e70].title + " (" + this._modules[_e70].name + ")", l = !0));
      }
    }

    l || (n += "\n// no mods used..."), h || (n += "\n// no mods used..."), n += "\n", r += "\n";

    for (var _t67 = 0; _t67 < this._uniforms.length; _t67++) {
      if (this._uniforms[_t67].shaderType && !this._uniforms[_t67].isStructMember()) {
        var _e71 = "";
        this._uniforms[_t67].getGlslTypeString() || (_e71 += "// "), _e71 += "UNI " + this._uniforms[_t67].getGlslTypeString() + " " + this._uniforms[_t67].getName();
        var _i42 = "";
        this._uniforms[_t67].comment && (_i42 = " // " + this._uniforms[_t67].comment), "vert" != this._uniforms[_t67].shaderType && "both" != this._uniforms[_t67].shaderType || -1 == this.srcVert.indexOf(_e71) && -1 == this.srcVert.indexOf("uniform " + this._uniforms[_t67].getGlslTypeString() + " " + this._uniforms[_t67].getName()) && (o += _e71 + ";" + _i42.endl()), "frag" != this._uniforms[_t67].shaderType && "both" != this._uniforms[_t67].shaderType || -1 == this.srcFrag.indexOf(_e71) && -1 == this.srcFrag.indexOf("uniform " + this._uniforms[_t67].getGlslTypeString() + " " + this._uniforms[_t67].getName()) && (a += _e71 + ";" + _i42.endl());
      }
    }

    var c = 0,
        u = 0;

    for (var _t68 = 0; _t68 < this._uniforms.length; _t68++) {
      this._uniforms[_t68].shaderType && !this._uniforms[_t68].isStructMember() && ("vert" != this._uniforms[_t68].shaderType && "both" != this._uniforms[_t68].shaderType || u++, "frag" != this._uniforms[_t68].shaderType && "both" != this._uniforms[_t68].shaderType || c++);
    }

    c >= this._cgl.maxUniformsFrag && console.warn("[cgl_shader] num uniforms frag: " + c + " / " + this._cgl.maxUniformsFrag), u >= this._cgl.maxUniformsVert && console.warn("[cgl_shader] num uniforms vert: " + u + " / " + this._cgl.maxUniformsVert), -1 == n.indexOf("precision") && (n = "precision " + this.precision + " float;".endl() + n), -1 == r.indexOf("precision") && (r = "precision " + this.precision + " float;".endl() + r), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (n += "#define MOBILE".endl(), r += "#define MOBILE".endl()), r = e + r + i + s[0] + o + "\n// -- \n" + this.srcVert, n = e + n + i + s[1] + a + "\n// -- \n" + this.srcFrag;
    var p = "",
        _ = "";
    this._modules.sort(function (t, e) {
      return t.group - e.group;
    }), this._modules.sort(function (t, e) {
      return t.priority || 0 - e.priority || 0;
    });
    var d = !1;

    for (var _t69 = 0; _t69 < this._moduleNames.length; _t69++) {
      var _e72 = "",
          _i43 = "";

      for (var _s18 = 0; _s18 < this._modules.length; _s18++) {
        if (this._modules[_s18].name == this._moduleNames[_t69]) {
          if (p += "\n//---- MOD: group:" + this._modules[_s18].group + ": idx:" + _s18 + " - prfx:" + this._modules[_s18].prefix + " - " + this._modules[_s18].title + " ------\n", _ += "\n//---- MOD: group:" + this._modules[_s18].group + ": idx:" + _s18 + " - prfx:" + this._modules[_s18].prefix + " - " + this._modules[_s18].title + " ------\n", _e72 += "\n\n//---- MOD: " + this._modules[_s18].title + " ------\n", _i43 += "\n\n//---- MOD: " + this._modules[_s18].title + " ------\n", !d) {
            d = !0;

            for (var _t70 = 0; _t70 < this._attributes.length; _t70++) {
              this._attributes[_t70].name && this._attributes[_t70].type && (p += "".endl() + "#ifndef ATTRIB_" + this._attributes[_t70].name.endl() + "  #define ATTRIB_" + this._attributes[_t70].name.endl() + "  IN " + this._attributes[_t70].type + " " + this._attributes[_t70].name + ";".endl() + "#endif", this._attributes[_t70].nameFrag && (p += "".endl() + "#ifndef ATTRIB_" + this._attributes[_t70].nameFrag.endl() + "  #define ATTRIB_" + this._attributes[_t70].nameFrag.endl() + "  OUT " + this._attributes[_t70].type + " " + this._attributes[_t70].nameFrag + ";".endl() + "#endif", _e72 += "".endl() + this._attributes[_t70].nameFrag + "=" + this._attributes[_t70].name + ";"), _ += "".endl() + "#ifndef ATTRIB_" + this._attributes[_t70].nameFrag.endl() + "  #define ATTRIB_" + this._attributes[_t70].nameFrag.endl() + "  IN " + this._attributes[_t70].type + " " + this._attributes[_t70].nameFrag + ";".endl() + "#endif");
            }
          }

          p += this._modules[_s18].srcHeadVert || "", _ += this._modules[_s18].srcHeadFrag || "", _e72 += this._modules[_s18].srcBodyVert || "", _i43 += this._modules[_s18].srcBodyFrag || "", p += "\n//---- end mod ------\n", _ += "\n//---- end mod ------\n", _e72 += "\n//---- end mod ------\n", _i43 += "\n//---- end mod ------\n", _e72 = _e72.replace(/{{mod}}/g, this._modules[_s18].prefix), _i43 = _i43.replace(/{{mod}}/g, this._modules[_s18].prefix), p = p.replace(/{{mod}}/g, this._modules[_s18].prefix), _ = _.replace(/{{mod}}/g, this._modules[_s18].prefix), _e72 = _e72.replace(/MOD_/g, this._modules[_s18].prefix), _i43 = _i43.replace(/MOD_/g, this._modules[_s18].prefix), p = p.replace(/MOD_/g, this._modules[_s18].prefix), _ = _.replace(/MOD_/g, this._modules[_s18].prefix);
        }
      }

      r = r.replace("{{" + this._moduleNames[_t69] + "}}", _e72), n = n.replace("{{" + this._moduleNames[_t69] + "}}", _i43);
    }

    if (r = r.replace("{{MODULES_HEAD}}", p), n = n.replace("{{MODULES_HEAD}}", _), r = this._addLibs(r), n = this._addLibs(n), this._program) {
      this._program = this._createProgram(r, n), this._projMatrixUniform = null;

      for (var _t71 = 0; _t71 < this._uniforms.length; _t71++) {
        this._uniforms[_t71].resetLoc();
      }
    } else this._program = this._createProgram(r, n);

    this.finalShaderFrag = n, this.finalShaderVert = r, at.lastMesh = null, at.lastShader = null, this._needsRecompile = !1, this.lastCompile = dt(), this._cgl.profileData.shaderCompileTime += performance.now() - t;
  }, vt.hasChanged = function () {
    return this._needsRecompile;
  }, vt.prototype.bind = function () {
    if (this._isValid && (at.lastShader = this, this._program && !this._needsRecompile || this.compile(), this._isValid)) {
      if (!this._projMatrixUniform) {
        this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, ot.SHADER.SHADERVAR_VERTEX_POSITION), this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_PROJMAT), this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, "mvMatrix"), this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_VIEWMAT), this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_MODELMAT), this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_VIEWPOS), this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_NORMALMAT), this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, ot.SHADER.SHADERVAR_UNI_INVVIEWMAT);

        for (var _t72 = 0; _t72 < this._uniforms.length; _t72++) {
          this._uniforms[_t72].needsUpdate = !0;
        }
      }

      this._cgl.currentProgram != this._program && (this._cgl.profileData.profileShaderBinds++, this._cgl.gl.useProgram(this._program), this._cgl.currentProgram = this._program);

      for (var _t73 = 0; _t73 < this._uniforms.length; _t73++) {
        this._uniforms[_t73].needsUpdate && this._uniforms[_t73].updateValue();
      }

      if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount() && (this._pMatrixState = this._cgl.getProjectionMatrixStateCount(), this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, !1, this._cgl.pMatrix), this._cgl.profileData.profileMVPMatrixCount++), this._vMatrixUniform) this._vMatrixState != this._cgl.getViewMatrixStateCount() && (this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, !1, this._cgl.vMatrix), this._cgl.profileData.profileMVPMatrixCount++, this._vMatrixState = this._cgl.getViewMatrixStateCount(), this._inverseViewMatrixUniform && (mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix), this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, !1, this._tempInverseViewMatrix), this._cgl.profileData.profileMVPMatrixCount++)), this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, !1, this._cgl.mMatrix), this._cgl.profileData.profileMVPMatrixCount++, this._camPosUniform && (mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix), this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]), this._cgl.profileData.profileMVPMatrixCount++);else {
        var _t74 = mat4.create();

        mat4.mul(_t74, this._cgl.vMatrix, this._cgl.mMatrix), this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, !1, _t74), this._cgl.profileData.profileMVPMatrixCount++;
      }
      this._normalMatrixUniform && (mat4.invert(this._tempNormalMatrix, this._cgl.mMatrix), mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix), this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, !1, this._tempNormalMatrix), this._cgl.profileData.profileMVPMatrixCount++);

      for (var _t75 = 0; _t75 < this._libs.length; _t75++) {
        this._libs[_t75].onBind && this._libs[_t75].onBind.bind(this._libs[_t75])(this._cgl, this);
      }

      this._bindTextures();
    }
  }, vt.prototype.toggleDefine = function (t, e) {
    var _this3 = this;

    e && "object" == _typeof(e) && e.addEventListener && (e.changeListener && e.removeEventListener(e.changeListener), e.onToggleDefine = function (e) {
      _this3.toggleDefine(t, e);
    }, e.changeListener = e.on("change", e.onToggleDefine), e = e.get()), e ? this.define(t) : this.removeDefine(t);
  }, vt.prototype.define = function (t, e) {
    var _this4 = this;

    null == e && (e = ""), "object" == _typeof(e) && (e.removeEventListener("change", e.onDefineChange), e.onDefineChange = function (e) {
      _this4.define(t, e);
    }, e.on("change", e.onDefineChange), e = e.get());

    for (var _i44 = 0; _i44 < this._defines.length; _i44++) {
      if (this._defines[_i44][0] == t && this._defines[_i44][1] == e) return;
      if (this._defines[_i44][0] == t) return this._defines[_i44][1] = e, this.setWhyCompile("define " + t + " " + e), void (this._needsRecompile = !0);
    }

    this.setWhyCompile("define " + t + " " + e), this._needsRecompile = !0, this._defines.push([t, e]);
  }, vt.prototype.getDefines = function () {
    return this._defines;
  }, vt.prototype.getDefine = function (t) {
    for (var _e73 = 0; _e73 < this._defines.length; _e73++) {
      if (this._defines[_e73][0] == t) return this._defines[_e73][1];
    }

    return null;
  }, vt.prototype.hasDefine = function (t) {
    for (var _e74 = 0; _e74 < this._defines.length; _e74++) {
      if (this._defines[_e74][0] == t) return !0;
    }
  }, vt.prototype.removeDefine = function (t) {
    for (var _e75 = 0; _e75 < this._defines.length; _e75++) {
      if (this._defines[_e75][0] == t) return this._defines.splice(_e75, 1), this._needsRecompile = !0, void this.setWhyCompile("define removed:" + t);
    }
  }, vt.prototype.removeModule = function (t) {
    for (var _e76 = 0; _e76 < this._modules.length; _e76++) {
      if (t && t.id && (this._modules[_e76].id == t.id || !this._modules[_e76])) {
        var _i45 = !0;

        for (; _i45;) {
          _i45 = !1;

          for (var _e77 = 0; _e77 < this._uniforms.length; _e77++) {
            0 != this._uniforms[_e77].getName().indexOf(t.prefix) || (this._uniforms.splice(_e77, 1), _i45 = !0);
          }
        }

        this._needsRecompile = !0, this.setWhyCompile("remove module " + t.title), this._modules.splice(_e76, 1);
        break;
      }
    }
  }, vt.prototype.getNumModules = function () {
    return this._modules.length;
  }, vt.prototype.getCurrentModules = function () {
    return this._modules;
  }, vt.prototype.addModule = function (t, e) {
    return t.id || (t.id = y()), t.numId || (t.numId = this._moduleNumId), t.num || (t.num = this._modules.length), e && !e.group && (e.group = v()), t.group || (t.group = e ? e.group : v()), t.prefix = "mod" + t.group + "_", this._modules.push(t), this._needsRecompile = !0, this.setWhyCompile("add module " + t.title), this._moduleNumId++, t;
  }, vt.prototype.hasModule = function (t) {
    for (var _e78 = 0; _e78 < this._modules.length; _e78++) {
      if (this._modules[_e78].id == t) return !0;
    }

    return !1;
  }, vt.prototype.setModules = function (t) {
    this._moduleNames = t;
  }, vt.prototype.dispose = function () {
    this._cgl.gl.deleteProgram(this._program);
  }, vt.prototype.needsRecompile = function () {
    return this._needsRecompile;
  }, vt.prototype.setDrawBuffers = function (t) {
    if (this._drawBuffers.length !== t.length) return this._drawBuffers = t, this._needsRecompile = !0, void this.setWhyCompile("setDrawBuffers");

    for (var _e79 = 0; _e79 < t; _e79++) {
      if (t[_e79] !== this._drawBuffers[_e79]) return this._drawBuffers = t, this._needsRecompile = !0, void this.setWhyCompile("setDrawBuffers");
    }
  }, vt.prototype.getUniforms = function () {
    return this._uniforms;
  }, vt.prototype.getUniform = function (t) {
    for (var _e80 = 0; _e80 < this._uniforms.length; _e80++) {
      if (this._uniforms[_e80].getName() == t) return this._uniforms[_e80];
    }

    return null;
  }, vt.prototype.removeUniform = function (t) {
    for (var _e81 = 0; _e81 < this._uniforms.length; _e81++) {
      this._uniforms[_e81].getName() == t && this._uniforms.splice(_e81, 1);
    }

    this._needsRecompile = !0, this.setWhyCompile("remove uniform " + t);
  }, vt.prototype._addUniform = function (t) {
    this._uniforms.push(t), this.setWhyCompile("add uniform " + name), this._needsRecompile = !0;
  }, vt.prototype.addUniformFrag = function (t, e, i, s, r, n) {
    var o = new CGL.Uniform(this, t, e, i, s, r, n);
    return o.shaderType = "frag", o;
  }, vt.prototype.addUniformVert = function (t, e, i, s, r, n) {
    var o = new CGL.Uniform(this, t, e, i, s, r, n);
    return o.shaderType = "vert", o;
  }, vt.prototype.addUniformBoth = function (t, e, i, s, r, n) {
    var o = new CGL.Uniform(this, t, e, i, s, r, n);
    return o.shaderType = "both", o;
  }, vt.prototype.addUniformStructFrag = function (t, e, i) {
    var s = {};
    if (!i) return s;

    for (var _r11 = 0; _r11 < i.length; _r11 += 1) {
      var _n6 = i[_r11];

      if (!this.hasUniform(e + "." + _n6.name)) {
        var _i46 = new CGL.Uniform(this, _n6.type, e + "." + _n6.name, _n6.v1, _n6.v2, _n6.v3, _n6.v4, e, t, _n6.name);

        _i46.shaderType = "frag", s[e + "." + _n6.name] = _i46;
      }
    }

    return s;
  }, vt.prototype.addUniformStructVert = function (t, e, i) {
    var s = {};
    if (!i) return s;

    for (var _r12 = 0; _r12 < i.length; _r12 += 1) {
      var _n7 = i[_r12];

      if (!this.hasUniform(e + "." + _n7.name)) {
        var _i47 = new CGL.Uniform(this, _n7.type, e + "." + _n7.name, _n7.v1, _n7.v2, _n7.v3, _n7.v4, e, t, _n7.name);

        _i47.shaderType = "vert", s[e + "." + _n7.name] = _i47;
      }
    }

    return s;
  }, vt.prototype.addUniformStructBoth = function (t, e, i) {
    var s = {};
    if (!i) return s;

    for (var _r13 = 0; _r13 < i.length; _r13 += 1) {
      var _n8 = i[_r13];

      if ("2i" !== _n8.type && "i" !== _n8.type && "3i" !== _n8.type || console.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", t, " with member:", _n8.name, " of type:", _n8.type, "."), !this.hasUniform(e + "." + _n8.name)) {
        var _i48 = new CGL.Uniform(this, _n8.type, e + "." + _n8.name, _n8.v1, _n8.v2, _n8.v3, _n8.v4, e, t, _n8.name);

        _i48.shaderType = "both", s[e + "." + _n8.name] = _i48;
      }
    }

    return s;
  }, vt.prototype.hasUniform = function (t) {
    for (var _e82 = 0; _e82 < this._uniforms.length; _e82++) {
      if (this._uniforms[_e82].getName() == t) return !0;
    }

    return !1;
  }, vt.prototype._createProgram = function (t, e) {
    this._cgl.printError("_createprogram");

    var i = this._cgl.gl.createProgram();

    return this._cgl.printError("gl.createprogram"), this.vshader = vt.createShader(this._cgl, t, this._cgl.gl.VERTEX_SHADER, this), this._cgl.printError("createshader"), this.fshader = vt.createShader(this._cgl, e, this._cgl.gl.FRAGMENT_SHADER, this), this._cgl.printError("createshader"), this._cgl.gl.attachShader(i, this.vshader), this._cgl.printError("attachshader "), this._cgl.gl.attachShader(i, this.fshader), this._cgl.printError("attachshader "), this._linkProgram(i, t, e), this._cgl.printError("shader linkprogram err"), i;
  }, vt.prototype.hasErrors = function () {
    return this._hasErrors;
  }, vt.prototype._linkProgram = function (t, e, i) {
    this._cgl.printError("_linkprogram"), this._feedBackNames.length > 0 && this._cgl.gl.transformFeedbackVaryings(t, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS), this._cgl.gl.linkProgram(t), this._cgl.printError("gl.linkprogram"), this._isValid = !0, !1 !== this._cgl.patch.config.glValidateShader && (this._cgl.gl.validateProgram(t), this._cgl.gl.getProgramParameter(t, this._cgl.gl.LINK_STATUS) || (console.warn(this._cgl.gl.getShaderInfoLog(this.fshader) || "empty shader infolog"), console.warn(this._cgl.gl.getShaderInfoLog(this.vshader) || "empty shader infolog"), console.error(this._name + " shader linking fail..."), _.log("srcFrag", i), _.log("srcVert", e), _.log(this._name + " programinfo: ", this._cgl.gl.getProgramInfoLog(t)), _.log("--------------------------------------"), _.log(this), _.log("--------------------------------------"), this._isValid = !1, this._name = "errorshader", this.setSource(vt.getDefaultVertexShader(), vt.getErrorFragmentShader()), this._cgl.printError("shader link err")));
  }, vt.prototype.getProgram = function () {
    return this._program;
  }, vt.prototype.setFeedbackNames = function (t) {
    this.setWhyCompile("setFeedbackNames"), this._needsRecompile = !0, this._feedBackNames = t;
  }, vt.prototype.getDefaultVertexShader = vt.getDefaultVertexShader = function () {
    return "".endl() + "{{MODULES_HEAD}}".endl() + "IN vec3 vPosition;".endl() + "IN vec2 attrTexCoord;".endl() + "IN vec3 attrVertNormal;".endl() + "IN vec3 attrTangent,attrBiTangent;".endl() + "IN float attrVertIndex;".endl() + "OUT vec2 texCoord;".endl() + "OUT vec3 norm;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 viewMatrix;".endl() + "UNI mat4 modelMatrix;".endl() + "void main()".endl() + "{".endl() + "    texCoord=attrTexCoord;".endl() + "    norm=attrVertNormal;".endl() + "    vec4 pos=vec4(vPosition,  1.0);".endl() + "    vec3 tangent=attrTangent;".endl() + "    vec3 bitangent=attrBiTangent;".endl() + "    mat4 mMatrix=modelMatrix;".endl() + "    {{MODULE_VERTEX_POSITION}}".endl() + "    gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;".endl() + "}";
  }, vt.prototype.getDefaultFragmentShader = vt.getDefaultFragmentShader = function (t, e, i) {
    return null == t && (t = .5, e = .5, i = .5), "".endl() + "IN vec2 texCoord;".endl() + "{{MODULES_HEAD}}".endl() + "void main()".endl() + "{".endl() + "    vec4 col=vec4(" + t + "," + e + "," + i + ",1.0);".endl() + "    {{MODULE_COLOR}}".endl() + "    outColor = col;".endl() + "}";
  }, vt.prototype.addAttribute = function (t) {
    for (var _e83 = 0; _e83 < this._attributes.length; _e83++) {
      if (this._attributes[_e83].name == t.name && this._attributes[_e83].nameFrag == t.nameFrag) return;
    }

    this._attributes.push(t), this._needsRecompile = !0, this.setWhyCompile("addAttribute");
  }, vt.prototype.bindTextures = vt.prototype._bindTextures = function () {
    this._textureStackTex.length > this._cgl.maxTextureUnits && console.log("[shader._bindTextures] too many textures bound", this._textureStackTex.length + "/" + this._cgl.maxTextureUnits);

    for (var _t76 = 0; _t76 < this._textureStackTex.length; _t76++) {
      this._textureStackTex[_t76] ? this._textureStackUni[_t76] ? (this._textureStackUni[_t76].setValue(_t76), this._cgl.setTexture(_t76, this._textureStackTex[_t76], this._textureStackType[_t76])) : (console.log("no uniform for pushtexture", this._name), this._cgl.setTexture(_t76, this._textureStackTex[_t76], this._textureStackType[_t76])) : console.log("no texture for pushtexture", this._name);
    }
  }, vt.prototype.setUniformTexture = function (t, e) {
    for (var _i49 = 0; _i49 < this._textureStackTex.length; _i49++) {
      if (this._textureStackUni[_i49] == t) {
        var _t77 = this._textureStackTex[_i49];
        return this._textureStackTex[_i49] = e, _t77;
      }
    }

    return null;
  }, vt.prototype.pushTexture = function (t, e, i) {
    if (!t) throw new Error("no uniform given to texturestack");
    e && (e instanceof WebGLTexture ? (this._textureStackUni.push(t), e.tex ? (this._textureStackTexCgl.push(e), this._textureStackTex.push(e.tex)) : (this._textureStackTexCgl.push(null), this._textureStackTex.push(e)), this._textureStackType.push(i)) : console.warn("[cgl_shader] invalid texture", e));
  }, vt.prototype.popTexture = function () {
    this._textureStackUni.pop(), this._textureStackTex.pop(), this._textureStackType.pop();
  }, vt.prototype.popTextures = function () {
    this._textureStackTex.length = this._textureStackTexCgl.length = this._textureStackType.length = this._textureStackUni.length = 0;
  }, vt.getErrorFragmentShader = function () {
    return "".endl() + "void main()".endl() + "{".endl() + "   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;".endl() + "   g= step(0.1,g);".endl() + "   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);".endl() + "}";
  }, vt.createShader = function (t, e, i, s) {
    if (t.aborted) return;
    var r = t.gl.createShader(i);

    if (t.gl.shaderSource(r, e), t.gl.compileShader(r), !t.gl.getShaderParameter(r, t.gl.COMPILE_STATUS)) {
      _.log("compile status: "), i == t.gl.VERTEX_SHADER && _.log("VERTEX_SHADER"), i == t.gl.FRAGMENT_SHADER && _.log("FRAGMENT_SHADER");

      var _o5 = t.gl.getShaderInfoLog(r) || "empty shader info log";

      var _a3 = function (t) {
        var e = [],
            i = t.split("\n");

        for (var _t78 in i) {
          var _s19 = i[_t78].split(":");

          parseInt(_s19[2], 10) && e.push(parseInt(_s19[2], 10));
        }

        return e;
      }(_o5);

      var _h2 = '<div class="shaderErrorCode">';

      var _l2 = e.match(/^.*((\r\n|\n|\r)|$)/gm);

      for (var _t79 in _l2) {
        var _e84 = parseInt(_t79, 10) + 1,
            _i50 = _e84 + ": " + _l2[_t79];

        _.log(_i50);

        var _s20 = !1;

        for (var _t80 in _a3) {
          _a3[_t80] == _e84 && (_s20 = !0);
        }

        _s20 && (_h2 += '<span class="error">'), _h2 += (n = _i50) && xt.test(n) ? n.replace(yt, function (t) {
          return At[t];
        }) : n || "", _s20 && (_h2 += "</span>");
      }

      console.warn(_o5), _o5 = _o5.replace(/\n/g, "<br/>"), _h2 = _o5 + "<br/>" + _h2 + "<br/><br/>", t.patch.emitEvent("criticalError", "Shader error " + this._name, _h2), t.patch.isEditorMode() && _.log("Shader error " + this._name, _h2), _h2 += "</div>", this._name = "errorshader", s.setSource(vt.getDefaultVertexShader(), vt.getErrorFragmentShader());
    }

    var n;
    return r;
  };

  var It = function It() {
    this._arr = [mat4.create()], this._index = 0, this.stateCounter = 0;
  };

  It.prototype.push = function (t) {
    if (this._index++, this.stateCounter++, this._index == this._arr.length) {
      var _t81 = mat4.create();

      this._arr.push(_t81);
    }

    return mat4.copy(this._arr[this._index], t || this._arr[this._index - 1]), this._arr[this._index];
  }, It.prototype.pop = function () {
    return this.stateCounter++, this._index--, this._index < 0 && (this._index = 0), this._arr[this._index];
  }, It.prototype.length = function () {
    return this._index;
  };

  var Rt = /*#__PURE__*/function () {
    function Rt(t) {
      _classCallCheck(this, Rt);

      this._cgl = t, this._lastTime = 0, this.pause = !1, this.profileUniformCount = 0, this.profileShaderBinds = 0, this.profileUniformCount = 0, this.profileShaderCompiles = 0, this.profileVideosPlaying = 0, this.profileMVPMatrixCount = 0, this.profileEffectBuffercreate = 0, this.profileShaderGetUniform = 0, this.profileFrameBuffercreate = 0, this.profileMeshSetGeom = 0, this.profileTextureNew = 0, this.profileGenMipMap = 0, this.profileOnAnimFrameOps = 0, this.profileMainloopMs = 0, this.profileMeshDraw = 0, this.profileTextureEffect = 0, this.profileTexPreviews = 0, this.shaderCompileTime = 0, this.profileMeshNumElements = 0, this.profileMeshAttributes = 0, this.profileSingleMeshAttribute = [], this.heavyEvents = [], this.doProfileGlQuery = !1, this.glQueryData = {};
    }

    _createClass(Rt, [{
      key: "clear",
      value: function clear() {
        this.profileSingleMeshAttribute = {}, this.profileMeshAttributes = 0, this.profileUniformCount = 0, this.profileShaderGetUniform = 0, this.profileShaderCompiles = 0, this.profileShaderBinds = 0, this.profileTextureResize = 0, this.profileFrameBuffercreate = 0, this.profileEffectBuffercreate = 0, this.profileTextureDelete = 0, this.profileMeshSetGeom = 0, this.profileVideosPlaying = 0, this.profileMVPMatrixCount = 0, this.profileNonTypedAttrib = 0, this.profileNonTypedAttribNames = "", this.profileTextureNew = 0, this.profileGenMipMap = 0, this.profileFramebuffer = 0, this.profileMeshDraw = 0, this.profileTextureEffect = 0, this.profileTexPreviews = 0, this.profileMeshNumElements = 0;
      }
    }, {
      key: "clearGlQuery",
      value: function clearGlQuery() {
        for (var _t82 in this.glQueryData) {
          (!this.glQueryData[_t82].lastClear || performance.now() - this.glQueryData[_t82].lastClear > 1e3) && (this.glQueryData[_t82].time = this.glQueryData[_t82]._times / this.glQueryData[_t82]._numcount, this.glQueryData[_t82].num = this.glQueryData[_t82]._numcount, this.glQueryData[_t82]._times = 0, this.glQueryData[_t82]._numcount = 0, this.glQueryData[_t82].lastClear = performance.now());
        }
      }
    }, {
      key: "addHeavyEvent",
      value: function addHeavyEvent(t, e, i) {
        var s = {
          event: t,
          name: e,
          info: i,
          date: performance.now()
        };
        this.heavyEvents.push(s), this._cgl.emitEvent("heavyEvent", s);
      }
    }]);

    return Rt;
  }();

  var Ot = function Ot(t) {
    d.apply(this), this.profileData = new Rt(this);
    var e = [0, 0, 0, 0];
    this.glVersion = 0, this.glUseHalfFloatTex = !1, this.clearCanvasTransparent = !0, this.clearCanvasDepth = !0, this.patch = t, this.debugOneFrame = !1, this.maxTextureUnits = 0, this.currentProgram = null, this._hadStackError = !1, this.glSlowRenderer = !1, this.temporaryTexture = null, this.frameStore = {}, this._onetimeCallbacks = [], this.gl = null, this._cursor = "auto", this._currentCursor = "", this.pMatrix = mat4.create(), this.mMatrix = mat4.create(), this.vMatrix = mat4.create(), this._textureslots = [], this._pMatrixStack = new It(), this._mMatrixStack = new It(), this._vMatrixStack = new It(), this._glFrameBufferStack = [], this._frameBufferStack = [], this._shaderStack = [], Object.defineProperty(this, "mvMatrix", {
      get: function get() {
        return this.mMatrix;
      },
      set: function set(t) {
        this.mMatrix = t;
      }
    }), this.canvas = null, this.pixelDensity = 1, mat4.identity(this.mMatrix), mat4.identity(this.vMatrix);
    var i = new vt(this, "simpleshader");
    i.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]), i.setSource(vt.getDefaultVertexShader(), vt.getDefaultFragmentShader());
    var s = i;
    this.aborted = !1;
    var r = [];
    this.addEventListener = function (t, e) {
      "resize" == t && r.push(e);
    }, this.removeEventListener = function (t, e) {
      if ("resize" == t) for (var _t83 in r) {
        if (r[_t83] == e) return void r.splice(_t83, 1);
      }
    }, this.exitError = function (t, e) {
      this.patch.exitError(t, e), this.aborted = !0;
    }, this.setCanvas = function (t) {
      var _this5 = this;

      if (this.canvas = "string" == typeof t ? document.getElementById(t) : t, this.patch.config.canvas || (this.patch.config.canvas = {}), this.patch.config.canvas.hasOwnProperty("preserveDrawingBuffer") || (this.patch.config.canvas.preserveDrawingBuffer = !1), this.patch.config.canvas.hasOwnProperty("premultipliedAlpha") || (this.patch.config.canvas.premultipliedAlpha = !1), this.patch.config.canvas.hasOwnProperty("alpha") || (this.patch.config.canvas.alpha = !1), this.patch.config.hasOwnProperty("clearCanvasColor") && (this.clearCanvasTransparent = this.patch.config.clearCanvasColor), this.patch.config.hasOwnProperty("clearCanvasDepth") && (this.clearCanvasDepth = this.patch.config.clearCanvasDepth), this.patch.config.canvas.forceWebGl1 || (this.gl = this.canvas.getContext("webgl2", this.patch.config.canvas)), this.gl && "WebGL 1.0" != this.gl.getParameter(this.gl.VERSION) ? this.glVersion = 2 : (this.gl = this.canvas.getContext("webgl", this.patch.config.canvas) || this.canvas.getContext("experimental-webgl", this.patch.config.canvas), this.glVersion = 1, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (this.glUseHalfFloatTex = !0), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && (this.patch.config.canvas.hasOwnProperty("powerPreference") || (this.patch.config.canvas.powerPreference = "high-performance"))), !this.gl) return void this.exitError("NO_WEBGL", "sorry, could not initialize WebGL. Please check if your Browser supports WebGL.");
      var e = this.gl.getExtension("WEBGL_debug_renderer_info");

      if (e) {
        "Google SwiftShader" === this.gl.getParameter(e.UNMASKED_RENDERER_WEBGL) && (this.glSlowRenderer = !0);
      }

      this.gl.getExtension("OES_standard_derivatives");
      var i = this.gl.getExtension("ANGLE_instanced_arrays") || this.gl;
      this.canvas.addEventListener("webglcontextlost", function (t) {
        console.log("canvas lost...", t), _this5.aborted = !0;
      }), this.maxTextureUnits = this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS), this.maxTexSize = this.gl.getParameter(this.gl.MAX_TEXTURE_SIZE), this.maxUniformsFrag = this.gl.getParameter(this.gl.MAX_FRAGMENT_UNIFORM_VECTORS), this.maxUniformsVert = this.gl.getParameter(this.gl.MAX_VERTEX_UNIFORM_VECTORS), this.maxSamples = 0, this.gl.MAX_SAMPLES && (this.maxSamples = this.gl.getParameter(this.gl.MAX_SAMPLES)), i.vertexAttribDivisorANGLE && (this.gl.vertexAttribDivisor = i.vertexAttribDivisorANGLE.bind(i), this.gl.drawElementsInstanced = i.drawElementsInstancedANGLE.bind(i)), this.updateSize();
    }, this.updateSize = function () {
      this.canvas.width = this.canvasWidth = this.canvas.clientWidth * this.pixelDensity, this.canvas.height = this.canvasHeight = this.canvas.clientHeight * this.pixelDensity;
    }, this.canvasWidth = -1, this.canvasHeight = -1, this.canvasScale = 1;
    var n = -1,
        o = -1;
    this.getViewPort = function () {
      return e;
    }, this.resetViewPort = function () {
      this.gl.viewport(e[0], e[1], e[2], e[3]);
    }, this.setViewPort = function (t, i, s, r) {
      e[0] = Math.round(t), e[1] = Math.round(i), e[2] = Math.round(s), e[3] = Math.round(r), this.gl.viewport(e[0], e[1], e[2], e[3]);
    }, this.screenShot = function (t, e, i, s) {
      e && (this.gl.clearColor(1, 1, 1, 1), this.gl.colorMask(!1, !1, !1, !0), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.colorMask(!0, !0, !0, !0)), this.canvas && this.canvas.toBlob && this.canvas.toBlob(function (e) {
        t ? t(e) : _.log("no screenshot callback...");
      }, i, s);
    }, this.endFrame = function () {
      if (this.patch.isEditorMode() && CABLES.GL_MARKER.drawMarkerLayer(this), this.setPreviousShader(), this._vMatrixStack.length() > 0 && this.logStackError("view matrix stack length !=0 at end of rendering..."), this._mMatrixStack.length() > 0 && this.logStackError("mvmatrix stack length !=0 at end of rendering..."), this._pMatrixStack.length() > 0 && this.logStackError("pmatrix stack length !=0 at end of rendering..."), this._glFrameBufferStack.length > 0 && this.logStackError("glFrameBuffer stack length !=0 at end of rendering..."), this._stackDepthTest.length > 0 && this.logStackError("depthtest stack length !=0 at end of rendering..."), this._stackDepthWrite.length > 0 && this.logStackError("depthwrite stack length !=0 at end of rendering..."), this._stackDepthFunc.length > 0 && this.logStackError("depthfunc stack length !=0 at end of rendering..."), this._stackBlend.length > 0 && this.logStackError("blend stack length !=0 at end of rendering..."), this._stackBlendMode.length > 0 && this.logStackError("blendMode stack length !=0 at end of rendering..."), this._shaderStack.length > 0 && this.logStackError("this._shaderStack length !=0 at end of rendering..."), this._stackCullFace.length > 0 && this.logStackError("this._stackCullFace length !=0 at end of rendering..."), this._stackCullFaceFacing.length > 0 && this.logStackError("this._stackCullFaceFacing length !=0 at end of rendering..."), this._frameStarted = !1, n != this.canvasWidth || o != this.canvasHeight) {
        n = this.canvasWidth, o = this.canvasHeight, this.setSize(this.canvasWidth / this.pixelDensity, this.canvasHeight / this.pixelDensity), this.updateSize();

        for (var _t84 = 0; _t84 < r.length; _t84++) {
          r[_t84]();
        }
      }

      this._cursor != this._currentCursor && (this._currentCursor = this.canvas.style.cursor = this._cursor);
    }, this.logStackError = function (t) {
      this._hadStackError || (this._hadStackError = !0, console.warn(t));
    }, this.getShader = function () {
      if (s && (!this.frameStore || !0 === this.frameStore.renderOffscreen == s.offScreenPass == !0)) return s;

      for (var _t85 = this._shaderStack.length - 1; _t85 >= 0; _t85--) {
        if (this._shaderStack[_t85] && this.frameStore.renderOffscreen == this._shaderStack[_t85].offScreenPass) return this._shaderStack[_t85];
      }
    }, this.getDefaultShader = function () {
      return i;
    }, this.pushShader = this.setShader = function (t) {
      this._shaderStack.push(t), s = t;
    }, this.popShader = this.setPreviousShader = function () {
      if (0 === this._shaderStack.length) throw new Error("Invalid shader stack pop!");
      this._shaderStack.pop(), s = this._shaderStack[this._shaderStack.length - 1];
    }, this.pushGlFrameBuffer = function (t) {
      this._glFrameBufferStack.push(t);
    }, this.popGlFrameBuffer = function () {
      return 0 == this._glFrameBufferStack.length ? null : (this._glFrameBufferStack.pop(), this._glFrameBufferStack[this._glFrameBufferStack.length - 1]);
    }, this.getCurrentGlFrameBuffer = function () {
      return 0 === this._glFrameBufferStack.length ? null : this._glFrameBufferStack[this._glFrameBufferStack.length - 1];
    }, this.pushFrameBuffer = function (t) {
      this._frameBufferStack.push(t);
    }, this.popFrameBuffer = function () {
      return 0 == this._frameBufferStack.length ? null : (this._frameBufferStack.pop(), this._frameBufferStack[this._frameBufferStack.length - 1]);
    }, this.getCurrentFrameBuffer = function () {
      return 0 === this._frameBufferStack.length ? null : this._frameBufferStack[this._frameBufferStack.length - 1];
    };
    var a = vec3.create();
    vec3.set(a, 0, 0, 2);
    var h = vec3.create();
    vec3.set(h, 0, 0, 0), this.renderStart = function (t, e, s) {
      e || (e = h), s || (s = a), this.pushDepthTest(!0), this.pushDepthWrite(!0), this.pushDepthFunc(t.gl.LEQUAL), this.pushCullFaceFacing(t.gl.BACK), this.pushCullFace(!1), this.clearCanvasTransparent && (t.gl.clearColor(0, 0, 0, 0), t.gl.clear(t.gl.COLOR_BUFFER_BIT)), this.clearCanvasDepth && t.gl.clear(t.gl.DEPTH_BUFFER_BIT), t.setViewPort(0, 0, t.canvasWidth, t.canvasHeight), mat4.perspective(t.pMatrix, 45, t.canvasWidth / t.canvasHeight, .1, 1e3), mat4.identity(t.mMatrix), mat4.identity(t.vMatrix), mat4.translate(t.mMatrix, t.mMatrix, e), mat4.translate(t.vMatrix, t.vMatrix, s), t.pushPMatrix(), t.pushModelMatrix(), t.pushViewMatrix(), t.pushBlendMode(ot.BLEND_MODES.BLEND_NORMAL, !1);

      for (var _t86 = 0; _t86 < this._textureslots.length; _t86++) {
        this._textureslots[_t86] = null;
      }

      if (this.pushShader(i), this._frameStarted = !0, this._onetimeCallbacks.length > 0) {
        for (var _t87 = 0; _t87 < this._onetimeCallbacks.length; _t87++) {
          this._onetimeCallbacks[_t87]();
        }

        this._onetimeCallbacks.length = 0;
      }

      this.emitEvent("beginFrame");
    }, this.renderEnd = function (t) {
      t.popViewMatrix(), t.popModelMatrix(), t.popPMatrix(), this.popDepthTest(), this.popDepthWrite(), this.popDepthFunc(), this.popCullFaceFacing(), this.popCullFace(), this.popBlend(), this.popBlendMode(), t.endFrame(), this.emitEvent("endFrame");
    }, this.getTexture = function (t) {
      return this._textureslots[t];
    }, this.checkFrameStarted = function (t) {
      this._frameStarted || (console.warn("frame not started " + t), this.patch.printTriggerStack());
    }, this.setTexture = function (t, e, i) {
      this.checkFrameStarted("cgl setTexture"), this._textureslots[t] != e && (this.gl.activeTexture(this.gl.TEXTURE0 + t), this.gl.bindTexture(i || this.gl.TEXTURE_2D, e), this._textureslots[t] = e);
    }, this.fullScreen = function () {
      this.canvas.requestFullscreen ? this.canvas.requestFullscreen() : this.canvas.mozRequestFullScreen ? this.canvas.mozRequestFullScreen() : this.canvas.webkitRequestFullscreen ? this.canvas.webkitRequestFullscreen() : this.canvas.msRequestFullscreen && this.canvas.msRequestFullscreen();
    }, this.setSize = function (t, e, i) {
      i || (this.canvas.style.width = t + "px", this.canvas.style.height = e + "px"), this.canvas.width = t * this.pixelDensity, this.canvas.height = e * this.pixelDensity, this.updateSize();
    }, this._resizeToWindowSize = function () {
      this.setSize(window.innerWidth, window.innerHeight), this.updateSize();
    }, this._resizeToParentSize = function () {
      var t = this.canvas.parentElement;
      t ? (this.setSize(t.clientWidth, t.clientHeight), this.updateSize()) : console.error("cables: can not resize to container element");
    }, this.setAutoResize = function (t) {
      window.removeEventListener("resize", this._resizeToWindowSize.bind(this)), window.removeEventListener("resize", this._resizeToParentSize.bind(this)), "window" == t && (window.addEventListener("resize", this._resizeToWindowSize.bind(this)), window.addEventListener("orientationchange", this._resizeToWindowSize.bind(this)), this._resizeToWindowSize()), "parent" == t && (window.addEventListener("resize", this._resizeToParentSize.bind(this)), this._resizeToParentSize());
    }, this.printError = function (t) {
      var e = !1,
          i = this.gl.getError();

      if (i != this.gl.NO_ERROR) {
        var _s21 = "";
        i == this.gl.OUT_OF_MEMORY && (_s21 = "OUT_OF_MEMORY"), i == this.gl.INVALID_ENUM && (_s21 = "INVALID_ENUM"), i == this.gl.INVALID_OPERATION && (_s21 = "INVALID_OPERATION"), i == this.gl.INVALID_FRAMEBUFFER_OPERATION && (_s21 = "INVALID_FRAMEBUFFER_OPERATION"), i == this.gl.INVALID_VALUE && (_s21 = "INVALID_VALUE"), i == this.gl.CONTEXT_LOST_WEBGL && (this.aborted = !0, _s21 = "CONTEXT_LOST_WEBGL"), i == this.gl.NO_ERROR && (_s21 = "NO_ERROR"), e = !0, _.warn("gl error [" + this.canvas.id + "]: ", t, i, _s21), this._loggedGlError || (this.patch.printTriggerStack(), console.log(new Error().stack), this._loggedGlError = !0);
      }

      return i = this.gl.getError(), e;
    }, this.saveScreenshot = function (t, e, i, s, r) {
      this.patch.renderOneFrame();
      var n = this.canvas.clientWidth,
          o = this.canvas.clientHeight;

      function a(t, e, i) {
        return Array(e - String(t).length + 1).join(i || "0") + t;
      }

      i && (this.canvas.width = i, n = i), s && (this.canvas.height = s, o = s);
      var h = new Date(),
          l = "".concat(String(h.getFullYear()) + String(h.getMonth() + 1) + String(h.getDate()), "_").concat(a(h.getHours(), 2)).concat(a(h.getMinutes(), 2)).concat(a(h.getSeconds(), 2));
      t ? t += ".png" : t = "cables_" + l + ".png", this.patch.cgl.screenShot(function (i) {
        if (this.canvas.width = n, this.canvas.height = o, i) {
          var _s22 = document.createElement("a");

          _s22.download = t, _s22.href = URL.createObjectURL(i), setTimeout(function () {
            _s22.click(), e && e(i);
          }, 100);
        } else _.log("screenshot: no blob");
      }.bind(this), r);
    };
  };

  Ot.prototype.addNextFrameOnceCallback = function (t) {
    t && this._onetimeCallbacks.push(t);
  }, Ot.prototype.pushViewMatrix = function () {
    this.vMatrix = this._vMatrixStack.push(this.vMatrix);
  }, Ot.prototype.popViewMatrix = function () {
    this.vMatrix = this._vMatrixStack.pop();
  }, Ot.prototype.getViewMatrixStateCount = function () {
    return this._vMatrixStack.stateCounter;
  }, Ot.prototype.pushPMatrix = function () {
    this.pMatrix = this._pMatrixStack.push(this.pMatrix);
  }, Ot.prototype.popPMatrix = function () {
    return this.pMatrix = this._pMatrixStack.pop(), this.pMatrix;
  }, Ot.prototype.getProjectionMatrixStateCount = function () {
    return this._pMatrixStack.stateCounter;
  }, Ot.prototype.pushMvMatrix = Ot.prototype.pushModelMatrix = function () {
    this.mMatrix = this._mMatrixStack.push(this.mMatrix);
  }, Ot.prototype.popMvMatrix = Ot.prototype.popmMatrix = Ot.prototype.popModelMatrix = function () {
    return this.mMatrix = this._mMatrixStack.pop(), this.mMatrix;
  }, Ot.prototype.modelMatrix = function () {
    return this.mMatrix;
  }, Ot.prototype._stackDepthTest = [], Ot.prototype.pushDepthTest = function (t) {
    this._stackDepthTest.push(t), t ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST);
  }, Ot.prototype.stateDepthTest = function () {
    return this._stackDepthTest[this._stackDepthTest.length - 1];
  }, Ot.prototype.popDepthTest = function () {
    this._stackDepthTest.pop(), this._stackDepthTest[this._stackDepthTest.length - 1] ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST);
  }, Ot.prototype._stackDepthWrite = [], Ot.prototype.pushDepthWrite = function (t) {
    this._stackDepthWrite.push(t), this.gl.depthMask(t);
  }, Ot.prototype.stateDepthWrite = function () {
    return this._stackDepthWrite[this._stackDepthWrite.length - 1];
  }, Ot.prototype.popDepthWrite = function () {
    this._stackDepthWrite.pop(), this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1]);
  }, Ot.prototype._stackCullFace = [], Ot.prototype.pushCullFace = function (t) {
    this._stackCullFace.push(t), t ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE);
  }, Ot.prototype.stateCullFace = function () {
    return this._stackCullFace[this._stackCullFace.length - 1];
  }, Ot.prototype.popCullFace = function () {
    this._stackCullFace.pop(), this._stackCullFace[this._stackCullFace.length - 1] ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE);
  }, Ot.prototype._stackCullFaceFacing = [], Ot.prototype.pushCullFaceFacing = function (t) {
    this._stackCullFaceFacing.push(t), this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
  }, Ot.prototype.stateCullFaceFacing = function () {
    return this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1];
  }, Ot.prototype.popCullFaceFacing = function () {
    this._stackCullFaceFacing.pop(), this._stackCullFaceFacing.length > 0 && this.gl.cullFace(this._stackCullFaceFacing[this._stackCullFaceFacing.length - 1]);
  }, Ot.prototype._stackDepthFunc = [], Ot.prototype.pushDepthFunc = function (t) {
    this._stackDepthFunc.push(t), this.gl.depthFunc(t);
  }, Ot.prototype.stateDepthFunc = function () {
    return this._stackDepthFunc.length > 0 && this._stackDepthFunc[this._stackDepthFunc.length - 1];
  }, Ot.prototype.popDepthFunc = function () {
    this._stackDepthFunc.pop(), this._stackDepthFunc.length > 0 && this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1]);
  }, Ot.prototype._stackBlend = [], Ot.prototype.pushBlend = function (t) {
    this._stackBlend.push(t), t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND);
  }, Ot.prototype.popBlend = function () {
    this._stackBlend.pop(), this._stackBlend[this._stackBlend.length - 1] ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND);
  }, Ot.prototype.stateBlend = function () {
    return this._stackBlend[this._stackBlend.length - 1];
  };
  Ot.prototype._stackBlendMode = [], Ot.prototype._stackBlendModePremul = [], Ot.prototype.pushBlendMode = function (t, e) {
    this._stackBlendMode.push(t), this._stackBlendModePremul.push(e);
    var i = this._stackBlendMode.length - 1;
    this.pushBlend(this._stackBlendMode[i] !== ot.BLEND_MODES.BLEND_NONE), this._setBlendMode(this._stackBlendMode[i], this._stackBlendModePremul[i]);
  }, Ot.prototype.popBlendMode = function () {
    this._stackBlendMode.pop(), this._stackBlendModePremul.pop();
    var t = this._stackBlendMode.length - 1;
    this.popBlend(this._stackBlendMode[t] !== ot.BLEND_MODES.BLEND_NONE), t >= 0 && this._setBlendMode(this._stackBlendMode[t], this._stackBlendModePremul[t]);
  }, Ot.prototype.glGetAttribLocation = function (t, e) {
    var i = this.gl.getAttribLocation(t, e);
    return i;
  }, Ot.prototype.shouldDrawHelpers = function (t) {
    return !this.frameStore.shadowPass && !!t.patch.isEditorMode() && (CABLES.UI.renderHelper || CABLES.UI.renderHelperCurrent && t.isCurrentUiOp());
  }, Ot.prototype._setBlendMode = function (t, e) {
    var i = this.gl;
    t == ot.BLEND_MODES.BLEND_NONE || (t == ot.BLEND_MODES.BLEND_ADD ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE)) : t == ot.BLEND_MODES.BLEND_SUB ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ONE_MINUS_SRC_ALPHA)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.ONE_MINUS_SRC_COLOR)) : t == ot.BLEND_MODES.BLEND_MUL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA)) : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.SRC_COLOR)) : t == ot.BLEND_MODES.BLEND_NORMAL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA)) : (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA)) : _.log("setblendmode: unknown blendmode"));
  }, Ot.prototype.setCursor = function (t) {
    this._cursor = t;
  };
  var Nt = Object.assign({
    Framebuffer: function Framebuffer(t, e, i, s) {
      var r = t,
          n = r.gl.getExtension("WEBGL_depth_texture") || r.gl.getExtension("WEBKIT_WEBGL_depth_texture") || r.gl.getExtension("MOZ_WEBGL_depth_texture") || r.gl.DEPTH_TEXTURE;
      n || r.exitError("NO_DEPTH_TEXTURE", "no depth texture support");
      var o = e || 512,
          a = i || 512;
      (s = s || {
        isFloatingPointTexture: !1
      }).hasOwnProperty("clear") || (s.clear = !0), s.hasOwnProperty("filter") || (s.filter = tt.FILTER_LINEAR);
      var h = new tt(r, {
        isFloatingPointTexture: s.isFloatingPointTexture,
        filter: s.filter,
        wrap: s.wrap || tt.CLAMP_TO_EDGE
      });
      var l = null;
      n && (l = new tt(r, {
        isDepthTexture: !0
      })), this._options = s;
      var c = r.gl.createFramebuffer(),
          u = r.gl.createRenderbuffer();
      this.getWidth = function () {
        return o;
      }, this.getHeight = function () {
        return a;
      }, this.getGlFrameBuffer = function () {
        return c;
      }, this.getDepthRenderBuffer = function () {
        return u;
      }, this.getTextureColor = function () {
        return h;
      }, this.getTextureDepth = function () {
        return l;
      }, this.setFilter = function (t) {
        h.filter = t, h.setSize(o, a);
      }, this.setSize = function (t, e) {
        if (t < 2 && (t = 2), e < 2 && (e = 2), o = Math.ceil(t), a = Math.ceil(e), r.profileData.profileFrameBuffercreate++, r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, c), r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, u), h.setSize(o, a), l && l.setSize(o, a), n && r.gl.renderbufferStorage(r.gl.RENDERBUFFER, r.gl.DEPTH_COMPONENT16, o, a), r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.COLOR_ATTACHMENT0, r.gl.TEXTURE_2D, h.tex, 0), n && (r.gl.framebufferRenderbuffer(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.RENDERBUFFER, u), r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.TEXTURE_2D, l.tex, 0)), !r.gl.isFramebuffer(c)) throw new Error("Invalid framebuffer");
        var i = r.gl.checkFramebufferStatus(r.gl.FRAMEBUFFER);

        switch (i) {
          case r.gl.FRAMEBUFFER_COMPLETE:
            break;

          case r.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            throw _.warn("FRAMEBUFFER_INCOMPLETE_ATTACHMENT...", o, a, h.tex, u), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT");

          case r.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            throw _.warn("FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT");

          case r.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            throw _.warn("FRAMEBUFFER_INCOMPLETE_DIMENSIONS"), new Error("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS");

          case r.gl.FRAMEBUFFER_UNSUPPORTED:
            throw _.warn("FRAMEBUFFER_UNSUPPORTED"), new Error("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED");

          case 36059:
            _.warn("Incomplete: FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER from ext. Or Safari/iOS undefined behaviour.");

            break;

          default:
            throw _.warn("incomplete framebuffer", i), new Error("Incomplete framebuffer: " + i);
        }

        r.gl.bindTexture(r.gl.TEXTURE_2D, null), r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, null), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, null);
      }, this.renderStart = function () {
        r.pushModelMatrix(), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, c), r.pushGlFrameBuffer(c), r.pushFrameBuffer(this), r.pushPMatrix(), r.gl.viewport(0, 0, o, a), this._options.clear && (r.gl.clearColor(0, 0, 0, 0), r.gl.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT));
      }, this.renderEnd = function () {
        r.popPMatrix(), r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, r.popGlFrameBuffer()), r.popFrameBuffer(), r.popModelMatrix(), r.resetViewPort();
      }, this.delete = function () {
        h.delete(), l && l.delete(), r.gl.deleteRenderbuffer(u), r.gl.deleteFramebuffer(c);
      }, this.setSize(o, a);
    },
    Framebuffer2: et,
    Geometry: st,
    BoundingBox: it,
    Marker: function Marker(t) {
      var e = new st("marker");
      e.setPointVertices([1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1, 0, 0, 0, 1e-5, 0, 0, 1]);
      var i = new ht(t, e, t.gl.LINES);
      i.setGeom(e);
      var s = new vt(t, "markermaterial"),
          r = "".endl() + "precision highp float;".endl() + "IN vec3 axisColor;".endl() + "void main()".endl() + "{".endl() + "    vec4 col=vec4(axisColor,1.0);".endl() + "    outColor = col;".endl() + "}",
          n = "".endl() + "IN vec3 vPosition;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 mvMatrix;".endl() + "OUT vec3 axisColor;".endl() + "void main()".endl() + "{".endl() + "   vec4 pos=vec4(vPosition, 1.0);".endl() + "   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);".endl() + "   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);".endl() + "   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);".endl() + "   gl_Position = projMatrix * mvMatrix * pos;".endl() + "}";
      s.setSource(n, r), this._vScale = vec3.create(), this.draw = function (t, e, r) {
        var n = e || 2;
        t.pushModelMatrix(), t.pushShader(s), vec3.set(this._vScale, n, n, n), mat4.scale(t.mvMatrix, t.mvMatrix, this._vScale), t.pushDepthTest(1 == r), i.render(t.getShader()), t.popDepthTest(), t.popShader(), t.popModelMatrix();
      };
    },
    WirePoint: function WirePoint(t) {
      var e = t.gl.createBuffer(),
          i = vec3.create();
      this.render = function (t, s) {
        t.pushModelMatrix(), vec3.set(i, s, s, s), mat4.scale(t.mvMatrix, t.mvMatrix, i);
        var r = t.getShader();
        r && (r.bind(), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.vertexAttribPointer(r.getAttrVertexPos(), e.itemSize, t.gl.FLOAT, !1, 0, 0), t.gl.enableVertexAttribArray(r.getAttrVertexPos()), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems)), t.popModelMatrix();
      }, function () {
        var i = [];
        var s = 0,
            r = 0;

        for (s = 0; s <= Math.round(24); s++) {
          r = 360 / Math.round(24) * s * ft, i.push(.5 * Math.cos(r)), i.push(0), i.push(.5 * Math.sin(r));
        }

        for (s = 0; s <= Math.round(24); s++) {
          r = 360 / Math.round(24) * s * ft, i.push(.5 * Math.cos(r)), i.push(.5 * Math.sin(r)), i.push(0);
        }

        for (s = 0; s <= Math.round(24); s++) {
          r = 360 / Math.round(24) * s * ft, i.push(0), i.push(.5 * Math.cos(r)), i.push(.5 * Math.sin(r));
        }

        t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(i), t.gl.STATIC_DRAW), e.itemSize = 3, e.numItems = i.length / e.itemSize;
      }();
    },
    WireCube: function WireCube(t) {
      var e = t.gl.createBuffer(),
          i = vec3.create();
      this.render = function (t, s, r, n) {
        t.pushModelMatrix(), vec3.set(i, s || 1, r || 1, n || 1), mat4.scale(t.mvMatrix, t.mvMatrix, i);
        var o = t.getShader();
        o && (o.bind(), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.vertexAttribPointer(o.getAttrVertexPos(), e.itemSize, t.gl.FLOAT, !1, 0, 0), t.gl.enableVertexAttribArray(o.getAttrVertexPos()), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.drawArrays(t.gl.LINE_STRIP, 0, e.numItems)), t.popModelMatrix();
      }, function () {
        var i = [];
        i.push(-1, -1, 1), i.push(1, -1, 1), i.push(1, 1, 1), i.push(-1, 1, 1), i.push(-1, -1, 1), i.push(-1, -1, -1), i.push(1, -1, -1), i.push(1, 1, -1), i.push(-1, 1, -1), i.push(-1, -1, -1), i.push(-1, -1, -1), i.push(-1, 1, -1), i.push(-1, 1, 1), i.push(-1, -1, 1), i.push(-1, -1, -1), i.push(1, -1, -1), i.push(1, 1, -1), i.push(1, 1, 1), i.push(1, -1, 1), i.push(1, -1, -1), t.gl.bindBuffer(t.gl.ARRAY_BUFFER, e), t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(i), t.gl.STATIC_DRAW), e.itemSize = 3, e.numItems = i.length / e.itemSize;
      }();
    },
    MatrixStack: It,
    Mesh: ht,
    MESH: at,
    ShaderLibMods: pt,
    Shader: vt,
    Uniform: rt,
    MESHES: ct,
    Context: Ot,
    Texture: tt,
    TextureEffect: ut,
    isWindows: mt,
    getWheelSpeed: Tt,
    getWheelDelta: bt,
    onLoadingAssetsFinished: null,
    profileData: void 0,
    UniColorShader: /*#__PURE__*/function () {
      function UniColorShader(t) {
        _classCallCheck(this, UniColorShader);

        this.shader = new CGL.Shader(t, "markermaterial");
        var e = "".endl() + "void main()".endl() + "{".endl() + "    outColor = vec4(color.rgb,1.0);".endl() + "}",
            i = "".endl() + "IN vec3 vPosition;".endl() + "UNI mat4 projMatrix;".endl() + "UNI mat4 mvMatrix;".endl() + "void main()".endl() + "{".endl() + "   gl_Position = projMatrix * mvMatrix * vec4(vPosition,1.0);".endl() + "}";
        this.shader.setSource(i, e), this.coloruni = this.shader.addUniformFrag("4f", "color", [1, .777, 1, 1]);
      }

      _createClass(UniColorShader, [{
        key: "setColor",
        value: function setColor(t, e, i, s) {
          this.coloruni.set(t, e, i, s);
        }
      }]);

      return UniColorShader;
    }()
  }, ot.BLEND_MODES, ot.SHADER, ot.MATH, ot.BLEND_MODES);
  window.CGL = Nt;

  var Pt = function Pt(t) {
    this._loadingAssets = {}, this._cbFinished = [], this._assetTasks = [], this._percent = 0, this._count = 0, this._countFinished = 0, this._order = 0, this._startTime = 0, this._patch = t, this._wasFinishedPrinted = !1, this._loadingAssetTaskCb = !1;
  };

  Pt.prototype.setOnFinishedLoading = function (t) {
    this._cbFinished.push(t);
  }, Pt.prototype.getNumAssets = function () {
    return this._countFinished;
  }, Pt.prototype.getProgress = function () {
    return this._percent;
  }, Pt.prototype.checkStatus = function () {
    var _this6 = this;

    this._countFinished = 0, this._count = 0;

    for (var _t88 in this._loadingAssets) {
      this._count++, this._loadingAssets[_t88].finished || this._countFinished++;
    }

    if (this._percent = (this._count - this._countFinished) / this._count, 0 === this._countFinished) {
      for (var _t89 = 0; _t89 < this._cbFinished.length; _t89++) {
        if (this._cbFinished[_t89]) {
          (function () {
            var e = _this6._cbFinished[_t89];
            setTimeout(function () {
              e(_this6._patch);
            }, 200);
          })();
        }
      }

      this._wasFinishedPrinted || (this._wasFinishedPrinted = !0, this.print());
    }
  }, Pt.prototype.getListJobs = function () {
    var t = [];

    for (var _e85 in this._loadingAssets) {
      this._loadingAssets[_e85].finished || t.push(this._loadingAssets[_e85].name);
    }

    return t;
  }, Pt.prototype.print = function () {
    if (this._patch.config.silent) return;
    var t = [];

    for (var _e86 in this._loadingAssets) {
      t.push([this._loadingAssets[_e86].order, this._loadingAssets[_e86].type, this._loadingAssets[_e86].name, (this._loadingAssets[_e86].timeEnd - this._loadingAssets[_e86].timeStart) / 1e3 + "s"]);
    }

    console.groupCollapsed("finished loading " + this._order + " assets in " + (Date.now() - this._startTime) / 1e3 + "s"), console.table(t), console.groupEnd();
  }, Pt.prototype.finished = function (t) {
    this._loadingAssets[t] && (this._loadingAssets[t].finished = !0, this._loadingAssets[t].timeEnd = Date.now()), this.checkStatus();
  }, Pt.prototype._startAssetTasks = function () {
    for (var _t90 = 0; _t90 < this._assetTasks.length; _t90++) {
      this._assetTasks[_t90]();
    }

    this._assetTasks.length = 0;
  }, Pt.prototype.addAssetLoadingTask = function (t) {
    this._patch.isEditorMode() && !CABLES.UI.loaded ? (this._assetTasks.push(t), this._loadingAssetTaskCb || window.gui.addEventListener("uiloaded", this._startAssetTasks.bind(this)), this._loadingAssetTaskCb = !0) : t();
  }, Pt.prototype.start = function (t, e) {
    0 == this._startTime && (this._startTime = Date.now());
    var i = y();
    return this._loadingAssets[i] = {
      id: i,
      type: t,
      name: e,
      finished: !1,
      timeStart: Date.now(),
      order: this._order
    }, this._order++, i;
  };

  var St = function St() {
    this._loops = [], this._indizes = [], this._index = 0;
  };

  St.prototype.pushLoop = function (t) {
    this._loops.push(Math.abs(Math.floor(t))), this._indizes.push(this._index);
  }, St.prototype.popLoop = function () {
    this._loops.pop(), this._index = this._indizes.pop(), 0 === this._loops.length && (this._index = 0);
  }, St.prototype.numLoops = function () {
    return this._loops.length;
  }, St.prototype.numCycles = function () {
    if (0 === this._loops.length) return 0;
    var t = this._loops[0];

    for (var _e87 = 1; _e87 < this._loops.length; _e87++) {
      t *= this._loops[_e87];
    }

    return t;
  }, St.prototype.inLoop = function () {
    return this._loops.length > 0;
  }, St.prototype.increment = function () {
    this._index++;
  }, St.prototype.index = function () {
    return this._index;
  };

  var Ft = function Ft(t) {
    this.startFrame = t.getFrameNum();
    var e = {},
        i = null,
        s = 0;
    this.getItems = function () {
      return e;
    }, this.clear = function () {
      e = {};
    }, this.add = function (r, n) {
      null !== i && (n && n.id == i || e[i] && (e[i].timeUsed += performance.now() - s, (!e[i].peakTime || dt() - e[i].peakTime > 5e3) && (e[i].peak = 0, e[i].peakTime = dt()), e[i].peak = Math.max(e[i].peak, performance.now() - s))), null !== n ? (e[n.id] || (e[n.id] = {
        numTriggers: 0,
        timeUsed: 0
      }), e[n.id].lastFrame != t.getFrameNum() && (e[n.id].numTriggers = 0), e[n.id].lastFrame = t.getFrameNum(), e[n.id].numTriggers++, e[n.id].opid = n.parent.id, e[n.id].title = n.parent.name + "." + n.name, e[n.id].subPatch = n.parent.uiAttribs.subPatch, i = n.id, s = performance.now()) : i = null;
    }, this.print = function () {
      _.log("--------");

      for (var _t91 in e) {
        _.log(e[_t91].title + ": " + e[_t91].numTriggers + " / " + e[_t91].timeUsed);
      }
    };
  },
      Ct = function Ct(t) {
    this._patch = t, this.result = [];
  };

  Ct.MIDI = 0, Ct.POINTERLOCK = 1, Ct.WEBAUDIO = 2, Ct.WEBGL2 = 3, (Ct.infos = [])[Ct.POINTERLOCK] = {
    title: "pointerLock",
    caniuse: "https://caniuse.com/#search=pointerlock"
  }, Ct.infos[Ct.MIDI] = {
    title: "midi API",
    caniuse: "https://caniuse.com/#search=midi"
  }, Ct.infos[Ct.WEBAUDIO] = {
    title: "web audio",
    caniuse: "https://caniuse.com/#search=webaudio"
  }, Ct.infos[Ct.WEBGL2] = {
    title: "WebGL 2"
  }, Ct.prototype.checkRequirement = function (t, e) {
    switch (this.result = [], t) {
      case Ct.WEBGL2:
        return e.patch.cgl.glVersion >= 2;

      case Ct.POINTERLOCK:
        return "exitPointerLock" in document;

      case Ct.MIDI:
        return "MIDIAccess" in window;

      case Ct.WEBAUDIO:
        var _t92 = !1;

        return window.audioContext && (_t92 = !0), _t92 || !("webkitAudioContext" in window) && !("AudioContext" in window) || (_t92 = !0), _t92;
    }
  }, Ct.prototype.checkOp = function (t) {
    if (t && t.requirements) for (var _e88 = 0; _e88 < t.requirements.length; _e88++) {
      var _i51 = t.requirements[_e88];

      if (!this.result[_i51]) {
        var _e89 = this.checkRequirement(_i51, t);

        if (!_e89) {
          t.patch.cgl && t.patch.cgl.canvas && t.patch.cgl.canvas.remove();
          var _e90 = Ct.infos[_i51].title;
          throw Ct.infos[_i51].caniuse && (_e90 = '<a href="' + Ct.infos[_i51].caniuse + '" target="_blank">' + Ct.infos[_i51].title + " (" + t.objName + ")</a>"), new Error("this browser does not meet requirement: " + Ct.infos[_i51].title + " (" + t.objName + ")");
        }

        this.result[_i51] = {
          success: _e89,
          info: Ct.infos[_i51]
        };
      }
    }
  };

  var Mt = function Mt(t) {
    var _this7 = this;

    d.apply(this), this.ops = [], this.settings = {}, this.config = t || {
      glCanvasResizeToWindow: !1,
      prefixAssetPath: "",
      prefixJsPath: "",
      silent: !1,
      onError: null,
      onFinishedLoading: null,
      onFirstFrameRendered: null,
      onPatchLoaded: null,
      fpsLimit: 0
    }, this.timer = new gt(), this.freeTimer = new gt(), this.animFrameOps = [], this.animFrameCallbacks = [], this.gui = !1, this.silent = !1, this.profiler = null, this.aborted = !1, this._crashedOps = [], this._renderOneFrame = !1, this._animReq = null, this._opIdCache = {}, this._triggerStack = [], this.loading = new Pt(this), this._perf = {
      fps: 0,
      ms: 0,
      _fpsFrameCount: 0,
      _fpsMsCount: 0,
      _fpsStart: 0
    }, this._volumeListeners = [], this._paused = !1, this._frameNum = 0, this.instancing = new St(), this.onOneFrameRendered = null, this.namedTriggers = {}, this._origData = null, this._frameNext = 0, this._frameInterval = 0, this._lastFrameTime = 0, this._frameWasdelayed = !0, function () {
      return !this;
    }() || console.log("not in strict mode: core patch"), this._isLocal = 0 === document.location.href.indexOf("file:"), _.setSilent(this.config.silent), this.config.hasOwnProperty("doRequestAnimation") || (this.config.doRequestAnimation = !0), this.config.prefixAssetPath || (this.config.prefixAssetPath = ""), this.config.prefixJsPath || (this.config.prefixJsPath = ""), this.config.masterVolume || (this.config.masterVolume = 1), this._variables = {}, this._variableListeners = [], this.vars = {}, t && t.vars && (this.vars = t.vars), this.cgl = new Ot(this), this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || "glcanvas"), !0 === this.config.glCanvasResizeToWindow && this.cgl.setAutoResize("window"), !0 === this.config.glCanvasResizeToParent && this.cgl.setAutoResize("parent"), this.loading.setOnFinishedLoading(this.config.onFinishedLoading), this.cgl.aborted && (this.aborted = !0), this.cgl.silent && (this.silent = !0), this.freeTimer.play(), this.exec(), this.aborted || (this.config.patch ? this.deSerialize(this.config.patch) : this.config.patchFile && w(this.config.patchFile, function (t, e) {
      var i = JSON.parse(e);

      if (t) {
        return _.error("err", t), _.error("data", i), void _.error("data", i.msg);
      }

      _this7.deSerialize(i);
    }), this.timer.play()), console.log("made with https://cables.gl");
  };

  Mt.prototype.isPlaying = function () {
    return !this._paused;
  }, Mt.prototype.isRenderingOneFrame = function () {
    return this._renderOneFrame;
  }, Mt.prototype.renderOneFrame = function () {
    this._paused = !0, this._renderOneFrame = !0, this.exec(), this._renderOneFrame = !1;
  }, Mt.prototype.getFPS = function () {
    return this._perf.fps;
  }, Mt.prototype.isEditorMode = function () {
    return !0 === this.config.editorMode;
  }, Mt.prototype.pause = function () {
    cancelAnimationFrame(this._animReq), this.emitEvent("pause"), this._animReq = null, this._paused = !0, this.freeTimer.pause();
  }, Mt.prototype.resume = function () {
    this._paused && (cancelAnimationFrame(this._animReq), this.emitEvent("resume"), this._paused = !1, this.freeTimer.play(), this.exec());
  }, Mt.prototype.setVolume = function (t) {
    this.config.masterVolume = t;

    for (var _e91 = 0; _e91 < this._volumeListeners.length; _e91++) {
      this._volumeListeners[_e91].onMasterVolumeChanged(t);
    }
  }, Mt.prototype.getAssetPath = function () {
    if (this.isEditorMode()) return "/assets/" + gui.project()._id + "/";

    if (document.location.href.indexOf("cables.gl") > 0) {
      var _t93 = document.location.href.split("/");

      return "/assets/" + _t93[_t93.length - 1] + "/";
    }

    return "assets/";
  }, Mt.prototype.getFilePath = function (t) {
    return this._isLocal && !this.config.allowLocalFileAccess && this.exitError("localAccess", "Browser security forbids loading files directly without a webserver. Upload files to a server to work. use allowLocalFileAccess:true to ignore this."), t ? 0 === (t = String(t)).indexOf("https:") || 0 === t.indexOf("http:") ? t : (t = t.replace("//", "/"), this.config.prefixAssetPath + t + (this.config.suffixAssetPath || "")) : t;
  }, Mt.prototype.clear = function () {
    for (this.cgl.TextureEffectMesh = null, this.animFrameOps.length = 0, this.timer = new gt(); this.ops.length > 0;) {
      this.deleteOp(this.ops[0].id);
    }
  }, Mt.getOpClass = function (t) {
    var e = t.split(".");
    var i = null;

    try {
      return 2 == e.length ? i = window[e[0]][e[1]] : 3 == e.length ? i = window[e[0]][e[1]][e[2]] : 4 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]] : 5 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]] : 6 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]] : 7 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]] : 8 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]] : 9 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]] : 10 == e.length && (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]][e[9]]), i;
    } catch (t) {
      return null;
    }
  }, Mt.prototype.createOp = function (t, e) {
    var i = t.split(".");
    var s = null,
        r = "";

    try {
      if (-1 == t.indexOf("Ops.")) {
        var _i52 = t;
        if (!CABLES.OPS[_i52]) throw new Error("could not find op by id: " + _i52);
        r = CABLES.OPS[_i52].objName, s = new CABLES.OPS[_i52].f(this, r, e, _i52), s.opId = _i52;
      }

      if (!s) {
        r = t;
        if (!Mt.getOpClass(r)) throw this.emitEvent("criticalError", "unknown op", "unknown op: " + r), _.error("unknown op: " + r), new Error("unknown op: " + r);

        if (2 == i.length ? s = new window[i[0]][i[1]](this, r, e) : 3 == i.length ? s = new window[i[0]][i[1]][i[2]](this, r, e) : 4 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]](this, r, e) : 5 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]](this, r, e) : 6 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]](this, r, e) : 7 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]](this, r, e) : 8 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]](this, r, e) : 9 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]](this, r, e) : 10 == i.length ? s = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]](this, r, e) : _.log("parts.length", i.length), s) {
          s.opId = null;

          for (var _t94 in CABLES.OPS) {
            CABLES.OPS[_t94].objName == r && (s.opId = _t94);
          }
        }
      }
    } catch (t) {
      if (this._crashedOps.push(r), console.error(t), this.emitEvent("exceptionOp", t, r), !this.isEditorMode()) throw _.log(t), _.error("[instancing error] " + r, t), CABLES.api && CABLES.api.sendErrorReport(t), this.exitError("INSTANCE_ERR", "Instancing Error " + r, t), new Error("instancing error " + r);
    }

    return s ? (s.objName = r, s.patch = this) : console.log("no op was created!?"), s;
  }, Mt.prototype.addOp = function (t, e, i, s) {
    var r = this.createOp(t, i);
    return r ? (e && e.hasOwnProperty("errors") && delete e.errors, e && e.hasOwnProperty("error") && delete e.error, r.uiAttr(e), r.onCreate && r.onCreate(), r.hasOwnProperty("onAnimFrame") && this.addOnAnimFrame(r), r.hasOwnProperty("onMasterVolumeChanged") && this._volumeListeners.push(r), this._opIdCache[r.id] && console.warn("opid with id " + r.id + " already exists in patch!"), this.ops.push(r), this._opIdCache[r.id] = r, this.emitEvent("onOpAdd", r, s), r.init && r.init()) : console.error("addop: no op....."), r;
  }, Mt.prototype.addOnAnimFrame = function (t) {
    for (var _e92 = 0; _e92 < this.animFrameOps.length; _e92++) {
      if (this.animFrameOps[_e92] == t) return;
    }

    this.animFrameOps.push(t);
  }, Mt.prototype.removeOnAnimFrame = function (t) {
    for (var _e93 = 0; _e93 < this.animFrameOps.length; _e93++) {
      if (this.animFrameOps[_e93] == t) return void this.animFrameOps.splice(_e93, 1);
    }
  }, Mt.prototype.addOnAnimFrameCallback = function (t) {
    this.animFrameCallbacks.push(t);
  }, Mt.prototype.removeOnAnimCallback = function (t) {
    for (var _e94 = 0; _e94 < this.animFrameCallbacks.length; _e94++) {
      if (this.animFrameCallbacks[_e94] == t) return void this.animFrameCallbacks.splice(_e94, 1);
    }
  }, Mt.prototype.deleteOp = function (t, e, i) {
    var s = !1;

    for (var _r14 in this.ops) {
      if (this.ops[_r14].id == t) {
        var _n9 = this.ops[_r14];
        var _o6 = null,
            _a4 = null;

        if (_n9) {
          s = !0, e && _n9.portsIn.length > 0 && _n9.portsIn[0].isLinked() && _n9.portsOut.length > 0 && _n9.portsOut[0].isLinked() && _n9.portsIn[0].getType() == _n9.portsOut[0].getType() && (_o6 = _n9.portsIn[0].links[0].getOtherPort(_n9.portsIn[0]), _a4 = _n9.portsOut[0].links[0].getOtherPort(_n9.portsOut[0]));
          var _h3 = this.ops[_r14];
          _h3.removeLinks(), this.onDelete && (_.warn("deprecated this.onDelete", this.onDelete), this.onDelete(_h3)), this.ops.splice(_r14, 1), this.emitEvent("onOpDelete", _h3, i), _h3.onDelete && _h3.onDelete(i), _h3.cleanUp(), null !== _o6 && null !== _a4 && this.link(_o6.parent, _o6.getName(), _a4.parent, _a4.getName()), delete this._opIdCache[t];
          break;
        }
      }
    }

    s || console.log("core patch deleteop: not found...");
  }, Mt.prototype.getFrameNum = function () {
    return this._frameNum;
  }, Mt.prototype.renderFrame = function (t) {
    this.timer.update(), this.freeTimer.update();
    var e = this.timer.getTime(),
        i = performance.now();

    for (var _t95 = 0; _t95 < this.animFrameCallbacks.length; ++_t95) {
      this.animFrameCallbacks[_t95] && this.animFrameCallbacks[_t95](e, this._frameNum);
    }

    for (var _t96 = 0; _t96 < this.animFrameOps.length; ++_t96) {
      this.animFrameOps[_t96].onAnimFrame && this.animFrameOps[_t96].onAnimFrame(e);
    }

    this.cgl.profileData.profileOnAnimFrameOps = performance.now() - i, this.emitEvent("onRenderFrame", e), this._frameNum++, 1 == this._frameNum && this.config.onFirstFrameRendered && this.config.onFirstFrameRendered();
  }, Mt.prototype.exec = function (t) {
    if (!this._renderOneFrame && (this._paused || this.aborted)) return;
    this.config.fpsLimit = this.config.fpsLimit || 0, this.config.fpsLimit && (this._frameInterval = 1e3 / this.config.fpsLimit);
    var e = CABLES.now(),
        i = e - this._frameNext;
    if (this.isEditorMode() && !this._renderOneFrame && e - this._lastFrameTime >= 500 && 0 !== this._lastFrameTime && !this._frameWasdelayed) return this._lastFrameTime = 0, setTimeout(this.exec.bind(this), 500), this.emitEvent("renderDelayStart"), void (this._frameWasdelayed = !0);

    if (this._renderOneFrame || 0 === this.config.fpsLimit || i > this._frameInterval || this._frameWasdelayed) {
      var _t97 = CABLES.now();

      this.renderFrame(), this._perf._lastFrameTime = CABLES.now(), this._perf._fpsFrameCount++, this._perf._fpsMsCount += CABLES.now() - _t97, this._frameInterval && (this._frameNext = e - i % this._frameInterval);
    }

    this._frameWasdelayed && (this.emitEvent("renderDelayEnd"), this._frameWasdelayed = !1), this._renderOneFrame && (this.onOneFrameRendered && this.onOneFrameRendered(), this.emitEvent("renderedOneFrame"), this._renderOneFrame = !1), CABLES.now() - this._perf._fpsStart >= 1e3 && this._perf.fps != this._perf._fpsFrameCount && (this._perf.fps = this._perf._fpsFrameCount, this._perf.ms = Math.round(this._perf._fpsMsCount / this._perf._fpsFrameCount), this.emitEvent("performance", this._perf), this._perf._fpsFrameCount = 0, this._perf._fpsMsCount = 0, this._perf._fpsStart = CABLES.now()), this.config.doRequestAnimation && (this._animReq = requestAnimationFrame(this.exec.bind(this)));
  }, Mt.prototype.link = function (t, e, i, s, r, n) {
    if (!t) return void _.log("link: op1 is null ");
    if (!i) return void _.log("link: op2 is null");
    var o = t.getPort(e, r),
        a = i.getPort(s, r);
    if (o) {
      if (a) {
        if (!o.shouldLink(o, a) || !a.shouldLink(o, a)) return !1;

        if (Z.canLink(o, a)) {
          var _t98 = new Z(this);

          return _t98.link(o, a), this.emitEvent("onLink", o, a, _t98, n), _t98;
        }
      } else console.warn("port not found! " + s + " of " + i.name + "(" + i.objName + ")");
    } else console.warn("port not found! " + e + "(" + t.objName + ")");
  }, Mt.prototype.serialize = function (t) {
    var e = {
      ops: []
    };
    e.settings = this.settings;

    for (var _t99 in this.ops) {
      e.ops.push(this.ops[_t99].getSerialized());
    }

    return t ? e : JSON.stringify(e);
  }, Mt.prototype.getOpById = function (t) {
    return this._opIdCache[t];
  }, Mt.prototype.getOpsByName = function (t) {
    var e = [];

    for (var _i53 in this.ops) {
      this.ops[_i53].name == t && e.push(this.ops[_i53]);
    }

    return e;
  }, Mt.prototype.getOpsByObjName = function (t) {
    var e = [];

    for (var _i54 in this.ops) {
      this.ops[_i54].objName == t && e.push(this.ops[_i54]);
    }

    return e;
  }, Mt.prototype.loadLib = function (t) {
    M("/ui/libs/" + t + ".js", function (t, e) {
      var i = document.createElement("script");
      i.type = "text/javascript", i.text = e, document.getElementsByTagName("head")[0].appendChild(i);
    }, "GET");
  }, Mt.prototype.reloadOp = function (t, e) {
    var i = 0;
    var s = [],
        r = [];

    for (var _e95 in this.ops) {
      this.ops[_e95].objName == t && r.push(this.ops[_e95]);
    }

    for (var _e96 = 0; _e96 < r.length; _e96++) {
      i++;
      var _n10 = r[_e96];
      _n10.deleted = !0;

      var _o7 = this,
          _a5 = this.addOp(t, _n10.uiAttribs);

      var _h4 = void 0,
          _l3 = void 0;

      for (_h4 in s.push(_a5), _n10.portsIn) {
        if (0 === _n10.portsIn[_h4].links.length) {
          var _t100 = _a5.getPort(_n10.portsIn[_h4].name);

          _t100 ? (_t100.set(_n10.portsIn[_h4].get()), _n10.portsIn[_h4].getVariableName() && _t100.setVariable(_n10.portsIn[_h4].getVariableName())) : _.error("[reloadOp] could not set port " + _n10.portsIn[_h4].name + ", propably renamed port ?");
        } else for (; _n10.portsIn[_h4].links.length;) {
          var _t101 = _n10.portsIn[_h4].links[0].portIn.name,
              _e97 = _n10.portsIn[_h4].links[0].portOut.name,
              _i55 = _n10.portsIn[_h4].links[0].portOut.parent;
          _n10.portsIn[_h4].links[0].remove(), _l3 = _o7.link(_a5, _t101, _i55, _e97), _l3 ? _l3.setValue() : _.log("[reloadOp] relink after op reload not successfull for port " + _e97);
        }
      }

      for (_h4 in _n10.portsOut) {
        for (; _n10.portsOut[_h4].links.length;) {
          var _t102 = _n10.portsOut[_h4].links[0].portOut.name,
              _e98 = _n10.portsOut[_h4].links[0].portIn.name,
              _i56 = _n10.portsOut[_h4].links[0].portIn.parent;
          _n10.portsOut[_h4].links[0].remove(), _l3 = _o7.link(_a5, _t102, _i56, _e98), _l3 ? _l3.setValue() : _.log("relink after op reload not successfull for port " + _e98);
        }
      }

      this.deleteOp(_n10.id, !1, !0);
    }

    e(i, s);
  }, Mt.prototype.getSubPatchOps = function (t) {
    var e = [];

    for (var _i57 in this.ops) {
      this.ops[_i57].uiAttribs && this.ops[_i57].uiAttribs.subPatch == t && e.push(this.ops[_i57]);
    }

    return e;
  }, Mt.prototype.getSubPatchOp = function (t, e) {
    for (var _i58 in this.ops) {
      if (this.ops[_i58].uiAttribs && this.ops[_i58].uiAttribs.subPatch == t && this.ops[_i58].objName == e) return this.ops[_i58];
    }

    return !1;
  }, Mt.prototype.deSerialize = function (t, e) {
    var _this8 = this;

    if (this.aborted) return;
    var i = this.loading.start("core", "deserialize");
    this.namespace = t.namespace || "", this.name = t.name || "", "string" == typeof t && (t = JSON.parse(t));
    var s = this;
    this.settings = t.settings;
    var r = new Ct(this);

    for (var _i59 in t.ops) {
      var _s23 = CABLES.now(),
          _n11 = t.ops[_i59];

      var _o8 = null;

      try {
        _o8 = _n11.opId ? this.addOp(_n11.opId, _n11.uiAttribs, _n11.id, !0) : this.addOp(_n11.objName, _n11.uiAttribs, _n11.id, !0);
      } catch (t) {
        throw console.warn("[instancing error] op data:", _n11, t), new Error("instancing error: " + _n11.objName);
      }

      if (r.checkOp(_o8), _o8) {
        e && (_o8.id = A()), _o8.portsInData = _n11.portsIn, _o8._origData = _n11, _o8.storage = _n11.storage;

        for (var _t103 in _n11.portsIn) {
          var _e99 = _n11.portsIn[_t103],
              _i60 = _o8.getPort(_e99.name);

          !_i60 || "bool" != _i60.uiAttribs.display && "bool" != _i60.uiAttribs.type || isNaN(_e99.value) || (_e99.value = !0 === _e99.value), _i60 && void 0 !== _e99.value && _i60.type != L.OP_PORT_TYPE_TEXTURE && _i60.set(_e99.value), _i60 && _i60.deSerializeSettings(_e99);
        }

        for (var _e100 in _n11.portsOut) {
          var _s24 = _o8.getPort(_n11.portsOut[_e100].name);

          _s24 && _s24.type != L.OP_PORT_TYPE_TEXTURE && _n11.portsOut[_e100].hasOwnProperty("value") && _s24.set(t.ops[_i59].portsOut[_e100].value);
        }
      }

      var _a6 = Math.round(100 * (CABLES.now() - _s23)) / 100;

      !this.silent && _a6 > 200 && console.warn("long op init ", t.ops[_i59].objName, _a6);
    }

    for (var _t104 in this.ops) {
      this.ops[_t104].onLoadedValueSet && (this.ops[_t104].onLoadedValueSet(this.ops[_t104]._origData), this.ops[_t104].onLoadedValueSet = null, this.ops[_t104]._origData = null);
    }

    if (t.ops) for (var _e101 = 0; _e101 < t.ops.length; _e101++) {
      if (t.ops[_e101].portsIn) for (var _i61 = 0; _i61 < t.ops[_e101].portsIn.length; _i61++) {
        if (t.ops[_e101].portsIn[_i61].links) for (var _r15 = 0; _r15 < t.ops[_e101].portsIn[_i61].links.length; _r15++) {
          t.ops[_e101].portsIn[_i61].links[_r15] && (n = t.ops[_e101].portsIn[_i61].links[_r15].objIn, o = t.ops[_e101].portsIn[_i61].links[_r15].objOut, a = t.ops[_e101].portsIn[_i61].links[_r15].portIn, h = t.ops[_e101].portsIn[_i61].links[_r15].portOut, s.link(s.getOpById(n), a, s.getOpById(o), h, !1, !0));
        }
      }
    }
    var n, o, a, h;

    for (var _t105 in this.ops) {
      this.ops[_t105].onLoaded && (this.ops[_t105].onLoaded(), this.ops[_t105].onLoaded = null);
    }

    for (var _t106 in this.ops) {
      this.ops[_t106].init && (this.ops[_t106].init(), this.ops[_t106].init = null);
    }

    if (this.config.variables) for (var _t107 in this.config.variables) {
      this.setVarValue(_t107, this.config.variables[_t107]);
    }

    for (var _t108 in this.ops) {
      this.ops[_t108].initVarPorts(), delete this.ops[_t108].uiAttribs.pasted;
    }

    setTimeout(function () {
      _this8.loading.finished(i);
    }, 100), this.config.onPatchLoaded && this.config.onPatchLoaded(this), this.emitEvent("patchLoadEnd");
  }, Mt.prototype.profile = function (t) {
    this.profiler = new Ft(this);

    for (var _e102 in this.ops) {
      this.ops[_e102].profile(t);
    }
  }, (Mt.Variable = function (t, e, i) {
    this._name = t, this._changeListeners = [], this.type = i, this.setValue(e);
  }).prototype.getValue = function () {
    return this._v;
  }, Mt.Variable.prototype.getName = function () {
    return this._name;
  }, Mt.Variable.prototype.setValue = function (t) {
    this._v = t;

    for (var _e103 = 0; _e103 < this._changeListeners.length; _e103++) {
      this._changeListeners[_e103](t, this);
    }
  }, Mt.Variable.prototype.addListener = function (t) {
    -1 == this._changeListeners.indexOf(t) && this._changeListeners.push(t);
  }, Mt.Variable.prototype.removeListener = function (t) {
    var e = this._changeListeners.indexOf(t);

    this._changeListeners.splice(e, 1);
  }, Mt.prototype.setVariable = function (t, e) {
    void 0 !== this._variables[t] ? this._variables[t].setValue(e) : console.warn("variable " + t + " not found!");
  }, Mt.prototype._sortVars = function () {
    var _this9 = this;

    if (!this.isEditorMode()) return;
    var t = {};
    Object.keys(this._variables).sort().forEach(function (e) {
      t[e] = _this9._variables[e];
    }), this._variables = t;
  }, Mt.prototype.hasVar = function (t) {
    return void 0 !== this._variables[t];
  }, Mt.prototype.setVarValue = function (t, e) {
    return this.hasVar(t) ? this._variables[t].setValue(e) : (this._variables[t] = new Mt.Variable(t, e), this._sortVars(), this.emitEvent("variablesChanged")), this._variables[t];
  }, Mt.prototype.getVarValue = function (t, e) {
    if (this._variables.hasOwnProperty(t)) return this._variables[t].getValue();
  }, Mt.prototype.getVar = function (t) {
    if (this._variables.hasOwnProperty(t)) return this._variables[t];
  }, Mt.prototype.deleteVar = function (t) {
    for (var _e104 = 0; _e104 < this.ops.length; _e104++) {
      for (var _i62 = 0; _i62 < this.ops[_e104].portsIn.length; _i62++) {
        this.ops[_e104].portsIn[_i62].getVariableName() == t && this.ops[_e104].portsIn[_i62].setVariable(null);
      }
    }

    delete this._variables[t], this.emitEvent("variableDeleted", t), this.emitEvent("variablesChanged");
  }, Mt.prototype.getVars = function (t) {
    if (void 0 === t) return this._variables;
    var e = [];
    t == CABLES.OP_PORT_TYPE_STRING && (t = "string"), t == CABLES.OP_PORT_TYPE_VALUE && (t = "number"), t == CABLES.OP_PORT_TYPE_ARRAY && (t = "array"), t == CABLES.OP_PORT_TYPE_OBJECT && (t = "object");

    for (var _i63 in this._variables) {
      this._variables[_i63].type && this._variables[_i63].type != t || e.push(this._variables[_i63]);
    }

    return e;
  }, Mt.prototype.exitError = function (t, e, i) {
    if (this.aborted = !0, this && this.config && this.config.onError) this.config.onError(t, e);else if (!this.isEditorMode()) {
      var _s25 = document.createElement("div"),
          _r16 = this.cgl.canvas.getBoundingClientRect();

      _s25.setAttribute("style", "position:absolute;border:5px solid red;padding:15px;background-color:black;color:white;font-family:monospace;"), _s25.style.top = _r16.top + "px", _s25.style.left = _r16.left + "px";
      var _n12 = "cables - An error occured:<br/>";
      _n12 += "[" + t + "] - " + e, i && (_n12 += "<br/>Exception: " + i.message), _s25.innerHTML = _n12;
      var _o9 = this.cgl.canvas.parentElement;

      for (; _o9.hasChildNodes();) {
        _o9.removeChild(_o9.lastChild);
      }

      document.body.appendChild(_s25);
    }
  }, Mt.prototype.preRenderOps = function () {
    _.log("prerendering...");

    var t = null;
    CABLES.StopWatch && (t = new CABLES.StopWatch("prerendering"));

    for (var _t109 = 0; _t109 < this.ops.length; _t109++) {
      this.ops[_t109].preRender && (this.ops[_t109].preRender(), _.log("prerender " + this.ops[_t109].objName));
    }

    t && t.stop("prerendering");
  }, Mt.prototype.dispose = function () {
    this.pause(), this.clear();
  }, Mt.prototype.pushTriggerStack = function (t) {
    this._triggerStack.push(t);
  }, Mt.prototype.popTriggerStack = function () {
    this._triggerStack.pop();
  }, Mt.prototype.printTriggerStack = function () {
    if (0 == this._triggerStack.length) return void console.log("stack length", this._triggerStack.length);
    console.groupCollapsed("trigger port stack " + this._triggerStack[this._triggerStack.length - 1].parent.name + "." + this._triggerStack[this._triggerStack.length - 1].name);
    var t = [];

    for (var _e105 = 0; _e105 < this._triggerStack.length; _e105++) {
      t.push(_e105 + ". " + this._triggerStack[_e105].parent.name + " " + this._triggerStack[_e105].name);
    }

    console.table(t), console.groupEnd();
  };
  var wt = Mt;

  var Ut = {
    addPatch: function addPatch(t, e) {
      var i = t,
          s = y();
      if ("string" == typeof t && (s = t, i = document.getElementById(s), !i)) return void console.error(s + " Polyshape Container Element not found!");
      var r = document.createElement("canvas");
      return r.id = "glcanvas_" + s, r.width = i.clientWidth, r.height = i.clientHeight, window.addEventListener("resize", function () {
        this.setAttribute("width", i.clientWidth), this.height = i.clientHeight;
      }.bind(r)), i.appendChild(r), (e = e || {}).glCanvasId = r.id, e.onError || (e.onError = function (t) {
        _.error(t);
      }), CABLES.patch = new wt(e), r;
    }
  },
      Bt = {
    toneJsInitialized: !1,
    createAudioContext: function createAudioContext(t) {
      if (window.AudioContext = window.AudioContext || window.webkitAudioContext, window.AudioContext) return window.audioContext || (window.audioContext = new AudioContext()), window.Tone && !Bt.toneJsInitialized && (Tone.setContext(window.audioContext), Bt.toneJsInitialized = !0), window.audioContext;
      t.patch.config.onError("NO_WEBAUDIO", "Web Audio is not supported in this browser.");
    },
    getAudioContext: function getAudioContext() {
      return window.audioContext;
    },
    createAudioInPort: function createAudioInPort(t, e, i, s) {
      if (!t || !e || !i) {
        var _e106 = "ERROR: createAudioInPort needs three parameters, op, portName and audioNode";
        throw t.log(_e106), new Error(_e106);
      }

      s || (s = 0), t.webAudio = t.webAudio || {}, t.webAudio.audioInPorts = t.webAudio.audioInPorts || [];
      var r = t.inObject(e);
      return r.webAudio = {}, r.webAudio.previousAudioInNode = null, r.webAudio.audioNode = i, t.webAudio.audioInPorts[e] = r, r.onChange = function () {
        var e = r.get();
        if (e) try {
          e.connect ? (e.connect(r.webAudio.audioNode, 0, s), t.setUiError("audioCtx", null)) : t.setUiError("audioCtx", "The passed input is not an audio context. Please make sure you connect an audio context to the input.", 2);
        } catch (i) {
          throw t.log("Error: Failed to connect web audio node!", i), t.log("port.webAudio.audioNode", r.webAudio.audioNode), t.log("audioInNode: ", e), t.log("inputChannelIndex:", s), t.log("audioInNode.connect: ", e.connect), i;
        } else if (r.webAudio.previousAudioInNode) try {
          r.webAudio.previousAudioInNode.disconnect && r.webAudio.previousAudioInNode.disconnect(r.webAudio.audioNode, 0, s), t.setUiError("audioCtx", null);
        } catch (e) {
          try {
            r.webAudio.previousAudioInNode.disconnect(r.webAudio.audioNode);
          } catch (i) {
            throw t.log("Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ", e), e.printStackTrace && e.printStackTrace(), e;
          }
        }
        r.webAudio.previousAudioInNode = e;
      }, r;
    },
    replaceNodeInPort: function replaceNodeInPort(t, e, i) {
      var s = t.webAudio.previousAudioInNode;

      if (s && s.disconnect) {
        try {
          s.disconnect(e);
        } catch (t) {
          throw t.printStackTrace && t.printStackTrace(), new Error("replaceNodeInPort: Could not disconnect old audio node. " + t.name + " " + t.message);
        }

        t.webAudio.audioNode = i;

        try {
          s.connect(i);
        } catch (t) {
          throw t.printStackTrace && t.printStackTrace(), new Error("replaceNodeInPort: Could not connect to new node. " + t.name + " " + t.message);
        }
      }
    },
    createAudioOutPort: function createAudioOutPort(t, e, i) {
      if (!t || !e || !i) {
        var _e107 = "ERROR: createAudioOutPort needs three parameters, op, portName and audioNode";
        throw t.log(_e107), new Error(_e107);
      }

      var s = t.outObject(e);
      return s.set(i), s;
    },
    createAudioParamInPort: function createAudioParamInPort(t, e, i, s, r) {
      if (!t || !e || !i) return t.log("ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode"), t && t.name && t.log("opname: ", t.name), t.log("portName", e), void t.log("audioNode: ", i);
      t.webAudio = t.webAudio || {}, t.webAudio.audioInPorts = t.webAudio.audioInPorts || [];
      var n = t.inDynamic(e, [L.OP_PORT_TYPE_VALUE, L.OP_PORT_TYPE_OBJECT], s, r);
      return n.webAudio = {}, n.webAudio.previousAudioInNode = null, n.webAudio.audioNode = i, t.webAudio.audioInPorts[e] = n, n.onChange = function () {
        var e = n.get(),
            i = n.webAudio.audioNode,
            s = Bt.getAudioContext();
        if (null != e) {
          if ("object" == _typeof(e) && e.connect) {
            try {
              e.connect(i);
            } catch (e) {
              throw t.log("Could not connect audio node: ", e), e.printStackTrace && e.printStackTrace(), e;
            }

            n.webAudio.previousAudioInNode = e;
          } else {
            if (i._param && i._param.minValue && i._param.maxValue) {
              if (e >= i._param.minValue && e <= i._param.maxValue) try {
                i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e;
              } catch (e) {
                throw t.log("Possible AudioParam problem with tone.js op: ", e), e.printStackTrace && e.printStackTrace(), e;
              } else t.log("Warning: The value for an audio parameter is out of range!");
            } else if (i.minValue && i.maxValue) {
              if (e >= i.minValue && e <= i.maxValue) try {
                i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e;
              } catch (e) {
                throw t.log("AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ", e), e.printStackTrace && e.printStackTrace(), e;
              } else t.log("Warning: The value for an audio parameter is out of range!");
            } else try {
              i.setValueAtTime ? i.setValueAtTime(e, s.currentTime) : i.value = e;
            } catch (e) {
              throw t.log("Possible AudioParam problem (without minValue / maxValue): ", e), e.printStackTrace && e.printStackTrace(), e;
            }

            if (n.webAudio.previousAudioInNode && n.webAudio.previousAudioInNode.disconnect) {
              try {
                n.webAudio.previousAudioInNode.disconnect(i);
              } catch (e) {
                throw t.log("Could not disconnect previous audio node: ", e), e;
              }

              n.webAudio.previousAudioInNode = void 0;
            }
          }
        } else n.webAudio.previousAudioInNode;
      }, n;
    },
    loadAudioFile: function loadAudioFile(t, e, i, s, r) {
      var n = Bt.createAudioContext();
      var o = null;
      (r || void 0 === r) && (o = t.loading.start("audio", e), t.isEditorMode() && gui.jobs().start({
        id: "loadaudio" + o,
        title: " loading audio (" + e + ")"
      }));
      var a = new XMLHttpRequest();
      e && (a.open("GET", e, !0), a.responseType = "arraybuffer", a.onload = function () {
        t.loading.finished(o), t.isEditorMode() && gui.jobs().finish("loadaudio" + o), n.decodeAudioData(a.response, i, s);
      }, a.send());
    },
    isValidToneTime: function isValidToneTime(t) {
      try {
        new Tone.Time(t);
      } catch (t) {
        return !1;
      }

      return !0;
    },
    isValidToneNote: function isValidToneNote(t) {
      try {
        Tone.Frequency(t);
      } catch (t) {
        return !1;
      }

      return !0;
    }
  },
      Lt = function Lt(t, e, i) {
    this._patch = t, this.connector = i;
  };

  Lt.prototype._receive = function (t) {
    var _this10 = this;

    console.log("ev", t);
    var e = {};

    if (e = t.hasOwnProperty("event") ? t : JSON.parse(t.data), e.event == D.PACO_OP_CREATE) {
      if (_.log("op create: data.vars.objName"), this._patch.getOpById(e.vars.opId)) return;
      var _t110 = null;
      window.gui ? gui.serverOps.loadOpLibs(e.vars.objName, function () {
        _t110 = _this10._patch.addOp(e.vars.objName, null, e.vars.opId), _t110.id = e.vars.opId;
      }) : (_t110 = this._patch.addOp(e.vars.objName, null, e.vars.opId), _t110.id = e.vars.opId);
    } else if (e.event == D.PACO_LOAD) _.log("PACO load patch....."), this._patch.clear(), this._patch.deSerialize(e.vars.patch);else if (e.event == D.PACO_CLEAR) this._patch.clear(), _.log("clear");else if (e.event == D.PACO_OP_DELETE) _.log("op delete"), this._patch.deleteOp(e.vars.op, !0);else if (e.event == D.PACO_OP_ENABLE) {
      var _t111 = this._patch.getOpById(e.vars.op);

      _t111 && (_t111.enabled = !0);
    } else if (e.event == D.PACO_OP_DISABLE) {
      var _t112 = this._patch.getOpById(e.vars.op);

      _t112 && (_t112.enabled = !1);
    } else if (e.event == D.PACO_UNLINK) {
      var _t113 = this._patch.getOpById(e.vars.op1),
          _i64 = this._patch.getOpById(e.vars.op2);

      if (!_t113 || !_i64) return void console.log("[paco] unlink op not found ");

      var _s26 = _t113.getPort(e.vars.port1),
          _r17 = _i64.getPort(e.vars.port2);

      _s26.removeLinkTo(_r17);
    } else if (e.event == D.PACO_LINK) {
      var _t114 = this._patch.getOpById(e.vars.op1),
          _i65 = this._patch.getOpById(e.vars.op2);

      this._patch.link(_t114, e.vars.port1, _i65, e.vars.port2);
    } else if (e.event == D.PACO_VALUECHANGE) {
      this._patch.getOpById(e.vars.op).getPort(e.vars.port).set(e.vars.v);
    } else _.log("unknown patchConnectionEvent!", t);
  };

  var kt = function kt(t) {
    var _this11 = this;

    this.connectors = [], t.addEventListener("onOpDelete", function (t) {
      _this11.send(CABLES.PACO_OP_DELETE, {
        op: t.id
      });
    }), t.addEventListener("onOpAdd", function (t) {
      _this11.send(CABLES.PACO_OP_CREATE, {
        opId: t.id,
        objName: t.objName
      });
    }), t.addEventListener("onUnLink", function (t, e) {
      _this11.send(CABLES.PACO_UNLINK, {
        op1: t.parent.id,
        op2: e.parent.id,
        port1: t.getName(),
        port2: e.getName()
      });
    }), t.addEventListener("onLink", function (t, e) {
      _this11.send(CABLES.PACO_LINK, {
        op1: t.parent.id,
        op2: e.parent.id,
        port1: t.name,
        port2: e.name
      });
    });
  };

  kt.prototype.send = function (t, e) {
    for (var _i66 = 0; _i66 < this.connectors.length; _i66++) {
      this.connectors[_i66].send(t, e);
    }
  };

  var Dt = function Dt() {
    window.BroadcastChannel && (this.bc = new BroadcastChannel("test_channel"));
  };

  Dt.prototype.receive = function (t) {
    this.bc && (_.log("init"), this.bc.onmessage = t._receive.bind(t));
  }, Dt.prototype.send = function (t, e) {
    if (!this.bc) return;
    var i = {};
    i.event = t, i.vars = e, this.bc.postMessage(JSON.stringify(i));
  };
  var Vt = Object.assign({
    EventTarget: d,
    EMBED: Ut,
    Link: Z,
    Port: V,
    Op: $,
    Profiler: Ft,
    Requirements: Ct,
    Patch: wt,
    Instancing: St,
    Timer: gt,
    WEBAUDIO: Bt,
    Variable: function Variable() {
      var t = null;
      var e = [];
      this.onChanged = function (t) {
        e.push(t);
      }, this.getValue = function () {
        return t;
      }, this.setValue = function (e) {
        t = e, this.emitChanged();
      }, this.emitChanged = function () {
        for (var _t115 = 0; _t115 < e.length; _t115++) {
          e[_t115]();
        }
      };
    },
    LoadingStatus: Pt,
    now: dt,
    internalNow: _t
  }, s, r, n, B, o, k, D, B, L);
  e.default = Vt;
  (function () {
    return !this;
  })() || console.log("not in strict mode: index core");
}]).default;

CABLES = CABLES || {};
CABLES.build = {
  "timestamp": 1632208486230,
  "created": "2021-09-21T07:14:46.230Z",
  "git": {
    "branch": "master",
    "commit": "fc757b810fcb21fbc3d31be241a4b2c7bbd6d8bd",
    "date": null,
    "message": null
  }
};
/*!
@fileoverview gl-matrix - High performance matrix and vector operations
@author Brandon Jones
@author Colin MacKenzie IV
@version 3.1.0

Copyright (c) 2015-2019, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

!function (t, n) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n((t = t || self).glMatrix = {});
}(this, function (t) {
  "use strict";

  var n = 1e-6,
      a = "undefined" != typeof Float32Array ? Float32Array : Array,
      r = Math.random;
  var u = Math.PI / 180;
  Math.hypot || (Math.hypot = function () {
    for (var t = 0, n = arguments.length; n--;) {
      t += arguments[n] * arguments[n];
    }

    return Math.sqrt(t);
  });
  var e = Object.freeze({
    EPSILON: n,

    get ARRAY_TYPE() {
      return a;
    },

    RANDOM: r,
    setMatrixArrayType: function setMatrixArrayType(t) {
      a = t;
    },
    toRadian: function toRadian(t) {
      return t * u;
    },
    equals: function equals(t, a) {
      return Math.abs(t - a) <= n * Math.max(1, Math.abs(t), Math.abs(a));
    }
  });

  function o(t, n, a) {
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[0],
        c = a[1],
        h = a[2],
        s = a[3];
    return t[0] = r * i + e * c, t[1] = u * i + o * c, t[2] = r * h + e * s, t[3] = u * h + o * s, t;
  }

  function i(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t;
  }

  var c = o,
      h = i,
      s = Object.freeze({
    create: function create() {
      var t = new a(4);
      return a != Float32Array && (t[1] = 0, t[2] = 0), t[0] = 1, t[3] = 1, t;
    },
    clone: function clone(t) {
      var n = new a(4);
      return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n;
    },
    copy: function copy(t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
    },
    identity: function identity(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t;
    },
    fromValues: function fromValues(t, n, r, u) {
      var e = new a(4);
      return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e;
    },
    set: function set(t, n, a, r, u) {
      return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t;
    },
    transpose: function transpose(t, n) {
      if (t === n) {
        var a = n[1];
        t[1] = n[2], t[2] = a;
      } else t[0] = n[0], t[1] = n[2], t[2] = n[1], t[3] = n[3];

      return t;
    },
    invert: function invert(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a * e - u * r;
      return o ? (o = 1 / o, t[0] = e * o, t[1] = -r * o, t[2] = -u * o, t[3] = a * o, t) : null;
    },
    adjoint: function adjoint(t, n) {
      var a = n[0];
      return t[0] = n[3], t[1] = -n[1], t[2] = -n[2], t[3] = a, t;
    },
    determinant: function determinant(t) {
      return t[0] * t[3] - t[2] * t[1];
    },
    multiply: o,
    rotate: function rotate(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = Math.sin(a),
          c = Math.cos(a);
      return t[0] = r * c + e * i, t[1] = u * c + o * i, t[2] = r * -i + e * c, t[3] = u * -i + o * c, t;
    },
    scale: function scale(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = a[0],
          c = a[1];
      return t[0] = r * i, t[1] = u * i, t[2] = e * c, t[3] = o * c, t;
    },
    fromRotation: function fromRotation(t, n) {
      var a = Math.sin(n),
          r = Math.cos(n);
      return t[0] = r, t[1] = a, t[2] = -a, t[3] = r, t;
    },
    fromScaling: function fromScaling(t, n) {
      return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t;
    },
    str: function str(t) {
      return "mat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    },
    frob: function frob(t) {
      return Math.hypot(t[0], t[1], t[2], t[3]);
    },
    LDU: function LDU(t, n, a, r) {
      return t[2] = r[2] / r[0], a[0] = r[0], a[1] = r[1], a[3] = r[3] - t[2] * a[1], [t, n, a];
    },
    add: function add(t, n, a) {
      return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t;
    },
    subtract: i,
    exactEquals: function exactEquals(t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
    },
    equals: function equals(t, a) {
      var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = a[0],
          c = a[1],
          h = a[2],
          s = a[3];
      return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s));
    },
    multiplyScalar: function multiplyScalar(t, n, a) {
      return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t;
    },
    multiplyScalarAndAdd: function multiplyScalarAndAdd(t, n, a, r) {
      return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t;
    },
    mul: c,
    sub: h
  });

  function M(t, n, a) {
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = a[0],
        s = a[1],
        M = a[2],
        f = a[3],
        l = a[4],
        v = a[5];
    return t[0] = r * h + e * s, t[1] = u * h + o * s, t[2] = r * M + e * f, t[3] = u * M + o * f, t[4] = r * l + e * v + i, t[5] = u * l + o * v + c, t;
  }

  function f(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t;
  }

  var l = M,
      v = f,
      b = Object.freeze({
    create: function create() {
      var t = new a(6);
      return a != Float32Array && (t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0), t[0] = 1, t[3] = 1, t;
    },
    clone: function clone(t) {
      var n = new a(6);
      return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
    },
    copy: function copy(t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t;
    },
    identity: function identity(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
    },
    fromValues: function fromValues(t, n, r, u, e, o) {
      var i = new a(6);
      return i[0] = t, i[1] = n, i[2] = r, i[3] = u, i[4] = e, i[5] = o, i;
    },
    set: function set(t, n, a, r, u, e, o) {
      return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t;
    },
    invert: function invert(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = a * e - r * u;
      return c ? (c = 1 / c, t[0] = e * c, t[1] = -r * c, t[2] = -u * c, t[3] = a * c, t[4] = (u * i - e * o) * c, t[5] = (r * o - a * i) * c, t) : null;
    },
    determinant: function determinant(t) {
      return t[0] * t[3] - t[1] * t[2];
    },
    multiply: M,
    rotate: function rotate(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = Math.sin(a),
          s = Math.cos(a);
      return t[0] = r * s + e * h, t[1] = u * s + o * h, t[2] = r * -h + e * s, t[3] = u * -h + o * s, t[4] = i, t[5] = c, t;
    },
    scale: function scale(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = a[0],
          s = a[1];
      return t[0] = r * h, t[1] = u * h, t[2] = e * s, t[3] = o * s, t[4] = i, t[5] = c, t;
    },
    translate: function translate(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = a[0],
          s = a[1];
      return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = r * h + e * s + i, t[5] = u * h + o * s + c, t;
    },
    fromRotation: function fromRotation(t, n) {
      var a = Math.sin(n),
          r = Math.cos(n);
      return t[0] = r, t[1] = a, t[2] = -a, t[3] = r, t[4] = 0, t[5] = 0, t;
    },
    fromScaling: function fromScaling(t, n) {
      return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = n[1], t[4] = 0, t[5] = 0, t;
    },
    fromTranslation: function fromTranslation(t, n) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n[0], t[5] = n[1], t;
    },
    str: function str(t) {
      return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
    },
    frob: function frob(t) {
      return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], 1);
    },
    add: function add(t, n, a) {
      return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t;
    },
    subtract: f,
    multiplyScalar: function multiplyScalar(t, n, a) {
      return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t;
    },
    multiplyScalarAndAdd: function multiplyScalarAndAdd(t, n, a, r) {
      return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t;
    },
    exactEquals: function exactEquals(t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5];
    },
    equals: function equals(t, a) {
      var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = a[0],
          s = a[1],
          M = a[2],
          f = a[3],
          l = a[4],
          v = a[5];
      return Math.abs(r - h) <= n * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(u - s) <= n * Math.max(1, Math.abs(u), Math.abs(s)) && Math.abs(e - M) <= n * Math.max(1, Math.abs(e), Math.abs(M)) && Math.abs(o - f) <= n * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(i - l) <= n * Math.max(1, Math.abs(i), Math.abs(l)) && Math.abs(c - v) <= n * Math.max(1, Math.abs(c), Math.abs(v));
    },
    mul: l,
    sub: v
  });

  function m() {
    var t = new a(9);
    return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[0] = 1, t[4] = 1, t[8] = 1, t;
  }

  function d(t, n, a) {
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = n[8],
        f = a[0],
        l = a[1],
        v = a[2],
        b = a[3],
        m = a[4],
        d = a[5],
        x = a[6],
        p = a[7],
        y = a[8];
    return t[0] = f * r + l * o + v * h, t[1] = f * u + l * i + v * s, t[2] = f * e + l * c + v * M, t[3] = b * r + m * o + d * h, t[4] = b * u + m * i + d * s, t[5] = b * e + m * c + d * M, t[6] = x * r + p * o + y * h, t[7] = x * u + p * i + y * s, t[8] = x * e + p * c + y * M, t;
  }

  function x(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t;
  }

  var p = d,
      y = x,
      q = Object.freeze({
    create: m,
    fromMat4: function fromMat4(t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[4], t[4] = n[5], t[5] = n[6], t[6] = n[8], t[7] = n[9], t[8] = n[10], t;
    },
    clone: function clone(t) {
      var n = new a(9);
      return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n;
    },
    copy: function copy(t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t;
    },
    fromValues: function fromValues(t, n, r, u, e, o, i, c, h) {
      var s = new a(9);
      return s[0] = t, s[1] = n, s[2] = r, s[3] = u, s[4] = e, s[5] = o, s[6] = i, s[7] = c, s[8] = h, s;
    },
    set: function set(t, n, a, r, u, e, o, i, c, h) {
      return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t[8] = h, t;
    },
    identity: function identity(t) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    },
    transpose: function transpose(t, n) {
      if (t === n) {
        var a = n[1],
            r = n[2],
            u = n[5];
        t[1] = n[3], t[2] = n[6], t[3] = a, t[5] = n[7], t[6] = r, t[7] = u;
      } else t[0] = n[0], t[1] = n[3], t[2] = n[6], t[3] = n[1], t[4] = n[4], t[5] = n[7], t[6] = n[2], t[7] = n[5], t[8] = n[8];

      return t;
    },
    invert: function invert(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = s * o - i * h,
          f = -s * e + i * c,
          l = h * e - o * c,
          v = a * M + r * f + u * l;
      return v ? (v = 1 / v, t[0] = M * v, t[1] = (-s * r + u * h) * v, t[2] = (i * r - u * o) * v, t[3] = f * v, t[4] = (s * a - u * c) * v, t[5] = (-i * a + u * e) * v, t[6] = l * v, t[7] = (-h * a + r * c) * v, t[8] = (o * a - r * e) * v, t) : null;
    },
    adjoint: function adjoint(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8];
      return t[0] = o * s - i * h, t[1] = u * h - r * s, t[2] = r * i - u * o, t[3] = i * c - e * s, t[4] = a * s - u * c, t[5] = u * e - a * i, t[6] = e * h - o * c, t[7] = r * c - a * h, t[8] = a * o - r * e, t;
    },
    determinant: function determinant(t) {
      var n = t[0],
          a = t[1],
          r = t[2],
          u = t[3],
          e = t[4],
          o = t[5],
          i = t[6],
          c = t[7],
          h = t[8];
      return n * (h * e - o * c) + a * (-h * u + o * i) + r * (c * u - e * i);
    },
    multiply: d,
    translate: function translate(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = n[8],
          f = a[0],
          l = a[1];
      return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = c, t[6] = f * r + l * o + h, t[7] = f * u + l * i + s, t[8] = f * e + l * c + M, t;
    },
    rotate: function rotate(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = n[8],
          f = Math.sin(a),
          l = Math.cos(a);
      return t[0] = l * r + f * o, t[1] = l * u + f * i, t[2] = l * e + f * c, t[3] = l * o - f * r, t[4] = l * i - f * u, t[5] = l * c - f * e, t[6] = h, t[7] = s, t[8] = M, t;
    },
    scale: function scale(t, n, a) {
      var r = a[0],
          u = a[1];
      return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = u * n[3], t[4] = u * n[4], t[5] = u * n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t;
    },
    fromTranslation: function fromTranslation(t, n) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = n[0], t[7] = n[1], t[8] = 1, t;
    },
    fromRotation: function fromRotation(t, n) {
      var a = Math.sin(n),
          r = Math.cos(n);
      return t[0] = r, t[1] = a, t[2] = 0, t[3] = -a, t[4] = r, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    },
    fromScaling: function fromScaling(t, n) {
      return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = n[1], t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t;
    },
    fromMat2d: function fromMat2d(t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = 0, t[3] = n[2], t[4] = n[3], t[5] = 0, t[6] = n[4], t[7] = n[5], t[8] = 1, t;
    },
    fromQuat: function fromQuat(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a + a,
          i = r + r,
          c = u + u,
          h = a * o,
          s = r * o,
          M = r * i,
          f = u * o,
          l = u * i,
          v = u * c,
          b = e * o,
          m = e * i,
          d = e * c;
      return t[0] = 1 - M - v, t[3] = s - d, t[6] = f + m, t[1] = s + d, t[4] = 1 - h - v, t[7] = l - b, t[2] = f - m, t[5] = l + b, t[8] = 1 - h - M, t;
    },
    normalFromMat4: function normalFromMat4(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15],
          x = a * i - r * o,
          p = a * c - u * o,
          y = a * h - e * o,
          q = r * c - u * i,
          g = r * h - e * i,
          A = u * h - e * c,
          w = s * b - M * v,
          R = s * m - f * v,
          z = s * d - l * v,
          P = M * m - f * b,
          j = M * d - l * b,
          I = f * d - l * m,
          S = x * I - p * j + y * P + q * z - g * R + A * w;
      return S ? (S = 1 / S, t[0] = (i * I - c * j + h * P) * S, t[1] = (c * z - o * I - h * R) * S, t[2] = (o * j - i * z + h * w) * S, t[3] = (u * j - r * I - e * P) * S, t[4] = (a * I - u * z + e * R) * S, t[5] = (r * z - a * j - e * w) * S, t[6] = (b * A - m * g + d * q) * S, t[7] = (m * y - v * A - d * p) * S, t[8] = (v * g - b * y + d * x) * S, t) : null;
    },
    projection: function projection(t, n, a) {
      return t[0] = 2 / n, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = -2 / a, t[5] = 0, t[6] = -1, t[7] = 1, t[8] = 1, t;
    },
    str: function str(t) {
      return "mat3(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ")";
    },
    frob: function frob(t) {
      return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
    },
    add: function add(t, n, a) {
      return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t;
    },
    subtract: x,
    multiplyScalar: function multiplyScalar(t, n, a) {
      return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t;
    },
    multiplyScalarAndAdd: function multiplyScalarAndAdd(t, n, a, r) {
      return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t;
    },
    exactEquals: function exactEquals(t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8];
    },
    equals: function equals(t, a) {
      var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = t[6],
          s = t[7],
          M = t[8],
          f = a[0],
          l = a[1],
          v = a[2],
          b = a[3],
          m = a[4],
          d = a[5],
          x = a[6],
          p = a[7],
          y = a[8];
      return Math.abs(r - f) <= n * Math.max(1, Math.abs(r), Math.abs(f)) && Math.abs(u - l) <= n * Math.max(1, Math.abs(u), Math.abs(l)) && Math.abs(e - v) <= n * Math.max(1, Math.abs(e), Math.abs(v)) && Math.abs(o - b) <= n * Math.max(1, Math.abs(o), Math.abs(b)) && Math.abs(i - m) <= n * Math.max(1, Math.abs(i), Math.abs(m)) && Math.abs(c - d) <= n * Math.max(1, Math.abs(c), Math.abs(d)) && Math.abs(h - x) <= n * Math.max(1, Math.abs(h), Math.abs(x)) && Math.abs(s - p) <= n * Math.max(1, Math.abs(s), Math.abs(p)) && Math.abs(M - y) <= n * Math.max(1, Math.abs(M), Math.abs(y));
    },
    mul: p,
    sub: y
  });

  function g(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
  }

  function A(t, n, a) {
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = n[4],
        c = n[5],
        h = n[6],
        s = n[7],
        M = n[8],
        f = n[9],
        l = n[10],
        v = n[11],
        b = n[12],
        m = n[13],
        d = n[14],
        x = n[15],
        p = a[0],
        y = a[1],
        q = a[2],
        g = a[3];
    return t[0] = p * r + y * i + q * M + g * b, t[1] = p * u + y * c + q * f + g * m, t[2] = p * e + y * h + q * l + g * d, t[3] = p * o + y * s + q * v + g * x, p = a[4], y = a[5], q = a[6], g = a[7], t[4] = p * r + y * i + q * M + g * b, t[5] = p * u + y * c + q * f + g * m, t[6] = p * e + y * h + q * l + g * d, t[7] = p * o + y * s + q * v + g * x, p = a[8], y = a[9], q = a[10], g = a[11], t[8] = p * r + y * i + q * M + g * b, t[9] = p * u + y * c + q * f + g * m, t[10] = p * e + y * h + q * l + g * d, t[11] = p * o + y * s + q * v + g * x, p = a[12], y = a[13], q = a[14], g = a[15], t[12] = p * r + y * i + q * M + g * b, t[13] = p * u + y * c + q * f + g * m, t[14] = p * e + y * h + q * l + g * d, t[15] = p * o + y * s + q * v + g * x, t;
  }

  function w(t, n, a) {
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = r + r,
        c = u + u,
        h = e + e,
        s = r * i,
        M = r * c,
        f = r * h,
        l = u * c,
        v = u * h,
        b = e * h,
        m = o * i,
        d = o * c,
        x = o * h;
    return t[0] = 1 - (l + b), t[1] = M + x, t[2] = f - d, t[3] = 0, t[4] = M - x, t[5] = 1 - (s + b), t[6] = v + m, t[7] = 0, t[8] = f + d, t[9] = v - m, t[10] = 1 - (s + l), t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t;
  }

  function R(t, n) {
    return t[0] = n[12], t[1] = n[13], t[2] = n[14], t;
  }

  function z(t, n) {
    var a = n[0],
        r = n[1],
        u = n[2],
        e = n[4],
        o = n[5],
        i = n[6],
        c = n[8],
        h = n[9],
        s = n[10];
    return t[0] = Math.hypot(a, r, u), t[1] = Math.hypot(e, o, i), t[2] = Math.hypot(c, h, s), t;
  }

  function P(t, n) {
    var r = new a(3);
    z(r, n);
    var u = 1 / r[0],
        e = 1 / r[1],
        o = 1 / r[2],
        i = n[0] * u,
        c = n[1] * e,
        h = n[2] * o,
        s = n[4] * u,
        M = n[5] * e,
        f = n[6] * o,
        l = n[8] * u,
        v = n[9] * e,
        b = n[10] * o,
        m = i + M + b,
        d = 0;
    return m > 0 ? (d = 2 * Math.sqrt(m + 1), t[3] = .25 * d, t[0] = (f - v) / d, t[1] = (l - h) / d, t[2] = (c - s) / d) : i > M && i > b ? (d = 2 * Math.sqrt(1 + i - M - b), t[3] = (f - v) / d, t[0] = .25 * d, t[1] = (c + s) / d, t[2] = (l + h) / d) : M > b ? (d = 2 * Math.sqrt(1 + M - i - b), t[3] = (l - h) / d, t[0] = (c + s) / d, t[1] = .25 * d, t[2] = (f + v) / d) : (d = 2 * Math.sqrt(1 + b - i - M), t[3] = (c - s) / d, t[0] = (l + h) / d, t[1] = (f + v) / d, t[2] = .25 * d), t;
  }

  function j(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t[4] = n[4] - a[4], t[5] = n[5] - a[5], t[6] = n[6] - a[6], t[7] = n[7] - a[7], t[8] = n[8] - a[8], t[9] = n[9] - a[9], t[10] = n[10] - a[10], t[11] = n[11] - a[11], t[12] = n[12] - a[12], t[13] = n[13] - a[13], t[14] = n[14] - a[14], t[15] = n[15] - a[15], t;
  }

  var I = A,
      S = j,
      E = Object.freeze({
    create: function create() {
      var t = new a(16);
      return a != Float32Array && (t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0), t[0] = 1, t[5] = 1, t[10] = 1, t[15] = 1, t;
    },
    clone: function clone(t) {
      var n = new a(16);
      return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15], n;
    },
    copy: function copy(t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
    },
    fromValues: function fromValues(t, n, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
      var d = new a(16);
      return d[0] = t, d[1] = n, d[2] = r, d[3] = u, d[4] = e, d[5] = o, d[6] = i, d[7] = c, d[8] = h, d[9] = s, d[10] = M, d[11] = f, d[12] = l, d[13] = v, d[14] = b, d[15] = m, d;
    },
    set: function set(t, n, a, r, u, e, o, i, c, h, s, M, f, l, v, b, m) {
      return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t[8] = h, t[9] = s, t[10] = M, t[11] = f, t[12] = l, t[13] = v, t[14] = b, t[15] = m, t;
    },
    identity: g,
    transpose: function transpose(t, n) {
      if (t === n) {
        var a = n[1],
            r = n[2],
            u = n[3],
            e = n[6],
            o = n[7],
            i = n[11];
        t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = a, t[6] = n[9], t[7] = n[13], t[8] = r, t[9] = e, t[11] = n[14], t[12] = u, t[13] = o, t[14] = i;
      } else t[0] = n[0], t[1] = n[4], t[2] = n[8], t[3] = n[12], t[4] = n[1], t[5] = n[5], t[6] = n[9], t[7] = n[13], t[8] = n[2], t[9] = n[6], t[10] = n[10], t[11] = n[14], t[12] = n[3], t[13] = n[7], t[14] = n[11], t[15] = n[15];

      return t;
    },
    invert: function invert(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15],
          x = a * i - r * o,
          p = a * c - u * o,
          y = a * h - e * o,
          q = r * c - u * i,
          g = r * h - e * i,
          A = u * h - e * c,
          w = s * b - M * v,
          R = s * m - f * v,
          z = s * d - l * v,
          P = M * m - f * b,
          j = M * d - l * b,
          I = f * d - l * m,
          S = x * I - p * j + y * P + q * z - g * R + A * w;
      return S ? (S = 1 / S, t[0] = (i * I - c * j + h * P) * S, t[1] = (u * j - r * I - e * P) * S, t[2] = (b * A - m * g + d * q) * S, t[3] = (f * g - M * A - l * q) * S, t[4] = (c * z - o * I - h * R) * S, t[5] = (a * I - u * z + e * R) * S, t[6] = (m * y - v * A - d * p) * S, t[7] = (s * A - f * y + l * p) * S, t[8] = (o * j - i * z + h * w) * S, t[9] = (r * z - a * j - e * w) * S, t[10] = (v * g - b * y + d * x) * S, t[11] = (M * y - s * g - l * x) * S, t[12] = (i * R - o * P - c * w) * S, t[13] = (a * P - r * R + u * w) * S, t[14] = (b * p - v * q - m * x) * S, t[15] = (s * q - M * p + f * x) * S, t) : null;
    },
    adjoint: function adjoint(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = n[4],
          i = n[5],
          c = n[6],
          h = n[7],
          s = n[8],
          M = n[9],
          f = n[10],
          l = n[11],
          v = n[12],
          b = n[13],
          m = n[14],
          d = n[15];
      return t[0] = i * (f * d - l * m) - M * (c * d - h * m) + b * (c * l - h * f), t[1] = -(r * (f * d - l * m) - M * (u * d - e * m) + b * (u * l - e * f)), t[2] = r * (c * d - h * m) - i * (u * d - e * m) + b * (u * h - e * c), t[3] = -(r * (c * l - h * f) - i * (u * l - e * f) + M * (u * h - e * c)), t[4] = -(o * (f * d - l * m) - s * (c * d - h * m) + v * (c * l - h * f)), t[5] = a * (f * d - l * m) - s * (u * d - e * m) + v * (u * l - e * f), t[6] = -(a * (c * d - h * m) - o * (u * d - e * m) + v * (u * h - e * c)), t[7] = a * (c * l - h * f) - o * (u * l - e * f) + s * (u * h - e * c), t[8] = o * (M * d - l * b) - s * (i * d - h * b) + v * (i * l - h * M), t[9] = -(a * (M * d - l * b) - s * (r * d - e * b) + v * (r * l - e * M)), t[10] = a * (i * d - h * b) - o * (r * d - e * b) + v * (r * h - e * i), t[11] = -(a * (i * l - h * M) - o * (r * l - e * M) + s * (r * h - e * i)), t[12] = -(o * (M * m - f * b) - s * (i * m - c * b) + v * (i * f - c * M)), t[13] = a * (M * m - f * b) - s * (r * m - u * b) + v * (r * f - u * M), t[14] = -(a * (i * m - c * b) - o * (r * m - u * b) + v * (r * c - u * i)), t[15] = a * (i * f - c * M) - o * (r * f - u * M) + s * (r * c - u * i), t;
    },
    determinant: function determinant(t) {
      var n = t[0],
          a = t[1],
          r = t[2],
          u = t[3],
          e = t[4],
          o = t[5],
          i = t[6],
          c = t[7],
          h = t[8],
          s = t[9],
          M = t[10],
          f = t[11],
          l = t[12],
          v = t[13],
          b = t[14],
          m = t[15];
      return (n * o - a * e) * (M * m - f * b) - (n * i - r * e) * (s * m - f * v) + (n * c - u * e) * (s * b - M * v) + (a * i - r * o) * (h * m - f * l) - (a * c - u * o) * (h * b - M * l) + (r * c - u * i) * (h * v - s * l);
    },
    multiply: A,
    translate: function translate(t, n, a) {
      var r,
          u,
          e,
          o,
          i,
          c,
          h,
          s,
          M,
          f,
          l,
          v,
          b = a[0],
          m = a[1],
          d = a[2];
      return n === t ? (t[12] = n[0] * b + n[4] * m + n[8] * d + n[12], t[13] = n[1] * b + n[5] * m + n[9] * d + n[13], t[14] = n[2] * b + n[6] * m + n[10] * d + n[14], t[15] = n[3] * b + n[7] * m + n[11] * d + n[15]) : (r = n[0], u = n[1], e = n[2], o = n[3], i = n[4], c = n[5], h = n[6], s = n[7], M = n[8], f = n[9], l = n[10], v = n[11], t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = i, t[5] = c, t[6] = h, t[7] = s, t[8] = M, t[9] = f, t[10] = l, t[11] = v, t[12] = r * b + i * m + M * d + n[12], t[13] = u * b + c * m + f * d + n[13], t[14] = e * b + h * m + l * d + n[14], t[15] = o * b + s * m + v * d + n[15]), t;
    },
    scale: function scale(t, n, a) {
      var r = a[0],
          u = a[1],
          e = a[2];
      return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = n[3] * r, t[4] = n[4] * u, t[5] = n[5] * u, t[6] = n[6] * u, t[7] = n[7] * u, t[8] = n[8] * e, t[9] = n[9] * e, t[10] = n[10] * e, t[11] = n[11] * e, t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], t;
    },
    rotate: function rotate(t, a, r, u) {
      var e,
          o,
          i,
          c,
          h,
          s,
          M,
          f,
          l,
          v,
          b,
          m,
          d,
          x,
          p,
          y,
          q,
          g,
          A,
          w,
          R,
          z,
          P,
          j,
          I = u[0],
          S = u[1],
          E = u[2],
          O = Math.hypot(I, S, E);
      return O < n ? null : (I *= O = 1 / O, S *= O, E *= O, e = Math.sin(r), i = 1 - (o = Math.cos(r)), c = a[0], h = a[1], s = a[2], M = a[3], f = a[4], l = a[5], v = a[6], b = a[7], m = a[8], d = a[9], x = a[10], p = a[11], y = I * I * i + o, q = S * I * i + E * e, g = E * I * i - S * e, A = I * S * i - E * e, w = S * S * i + o, R = E * S * i + I * e, z = I * E * i + S * e, P = S * E * i - I * e, j = E * E * i + o, t[0] = c * y + f * q + m * g, t[1] = h * y + l * q + d * g, t[2] = s * y + v * q + x * g, t[3] = M * y + b * q + p * g, t[4] = c * A + f * w + m * R, t[5] = h * A + l * w + d * R, t[6] = s * A + v * w + x * R, t[7] = M * A + b * w + p * R, t[8] = c * z + f * P + m * j, t[9] = h * z + l * P + d * j, t[10] = s * z + v * P + x * j, t[11] = M * z + b * P + p * j, a !== t && (t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t);
    },
    rotateX: function rotateX(t, n, a) {
      var r = Math.sin(a),
          u = Math.cos(a),
          e = n[4],
          o = n[5],
          i = n[6],
          c = n[7],
          h = n[8],
          s = n[9],
          M = n[10],
          f = n[11];
      return n !== t && (t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[4] = e * u + h * r, t[5] = o * u + s * r, t[6] = i * u + M * r, t[7] = c * u + f * r, t[8] = h * u - e * r, t[9] = s * u - o * r, t[10] = M * u - i * r, t[11] = f * u - c * r, t;
    },
    rotateY: function rotateY(t, n, a) {
      var r = Math.sin(a),
          u = Math.cos(a),
          e = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          h = n[8],
          s = n[9],
          M = n[10],
          f = n[11];
      return n !== t && (t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u - h * r, t[1] = o * u - s * r, t[2] = i * u - M * r, t[3] = c * u - f * r, t[8] = e * r + h * u, t[9] = o * r + s * u, t[10] = i * r + M * u, t[11] = c * r + f * u, t;
    },
    rotateZ: function rotateZ(t, n, a) {
      var r = Math.sin(a),
          u = Math.cos(a),
          e = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          h = n[4],
          s = n[5],
          M = n[6],
          f = n[7];
      return n !== t && (t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15]), t[0] = e * u + h * r, t[1] = o * u + s * r, t[2] = i * u + M * r, t[3] = c * u + f * r, t[4] = h * u - e * r, t[5] = s * u - o * r, t[6] = M * u - i * r, t[7] = f * u - c * r, t;
    },
    fromTranslation: function fromTranslation(t, n) {
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = n[0], t[13] = n[1], t[14] = n[2], t[15] = 1, t;
    },
    fromScaling: function fromScaling(t, n) {
      return t[0] = n[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = n[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    },
    fromRotation: function fromRotation(t, a, r) {
      var u,
          e,
          o,
          i = r[0],
          c = r[1],
          h = r[2],
          s = Math.hypot(i, c, h);
      return s < n ? null : (i *= s = 1 / s, c *= s, h *= s, u = Math.sin(a), o = 1 - (e = Math.cos(a)), t[0] = i * i * o + e, t[1] = c * i * o + h * u, t[2] = h * i * o - c * u, t[3] = 0, t[4] = i * c * o - h * u, t[5] = c * c * o + e, t[6] = h * c * o + i * u, t[7] = 0, t[8] = i * h * o + c * u, t[9] = c * h * o - i * u, t[10] = h * h * o + e, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t);
    },
    fromXRotation: function fromXRotation(t, n) {
      var a = Math.sin(n),
          r = Math.cos(n);
      return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r, t[6] = a, t[7] = 0, t[8] = 0, t[9] = -a, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    },
    fromYRotation: function fromYRotation(t, n) {
      var a = Math.sin(n),
          r = Math.cos(n);
      return t[0] = r, t[1] = 0, t[2] = -a, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = a, t[9] = 0, t[10] = r, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    },
    fromZRotation: function fromZRotation(t, n) {
      var a = Math.sin(n),
          r = Math.cos(n);
      return t[0] = r, t[1] = a, t[2] = 0, t[3] = 0, t[4] = -a, t[5] = r, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    },
    fromRotationTranslation: w,
    fromQuat2: function fromQuat2(t, n) {
      var r = new a(3),
          u = -n[0],
          e = -n[1],
          o = -n[2],
          i = n[3],
          c = n[4],
          h = n[5],
          s = n[6],
          M = n[7],
          f = u * u + e * e + o * o + i * i;
      return f > 0 ? (r[0] = 2 * (c * i + M * u + h * o - s * e) / f, r[1] = 2 * (h * i + M * e + s * u - c * o) / f, r[2] = 2 * (s * i + M * o + c * e - h * u) / f) : (r[0] = 2 * (c * i + M * u + h * o - s * e), r[1] = 2 * (h * i + M * e + s * u - c * o), r[2] = 2 * (s * i + M * o + c * e - h * u)), w(t, n, r), t;
    },
    getTranslation: R,
    getScaling: z,
    getRotation: P,
    fromRotationTranslationScale: function fromRotationTranslationScale(t, n, a, r) {
      var u = n[0],
          e = n[1],
          o = n[2],
          i = n[3],
          c = u + u,
          h = e + e,
          s = o + o,
          M = u * c,
          f = u * h,
          l = u * s,
          v = e * h,
          b = e * s,
          m = o * s,
          d = i * c,
          x = i * h,
          p = i * s,
          y = r[0],
          q = r[1],
          g = r[2];
      return t[0] = (1 - (v + m)) * y, t[1] = (f + p) * y, t[2] = (l - x) * y, t[3] = 0, t[4] = (f - p) * q, t[5] = (1 - (M + m)) * q, t[6] = (b + d) * q, t[7] = 0, t[8] = (l + x) * g, t[9] = (b - d) * g, t[10] = (1 - (M + v)) * g, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t;
    },
    fromRotationTranslationScaleOrigin: function fromRotationTranslationScaleOrigin(t, n, a, r, u) {
      var e = n[0],
          o = n[1],
          i = n[2],
          c = n[3],
          h = e + e,
          s = o + o,
          M = i + i,
          f = e * h,
          l = e * s,
          v = e * M,
          b = o * s,
          m = o * M,
          d = i * M,
          x = c * h,
          p = c * s,
          y = c * M,
          q = r[0],
          g = r[1],
          A = r[2],
          w = u[0],
          R = u[1],
          z = u[2],
          P = (1 - (b + d)) * q,
          j = (l + y) * q,
          I = (v - p) * q,
          S = (l - y) * g,
          E = (1 - (f + d)) * g,
          O = (m + x) * g,
          T = (v + p) * A,
          D = (m - x) * A,
          F = (1 - (f + b)) * A;
      return t[0] = P, t[1] = j, t[2] = I, t[3] = 0, t[4] = S, t[5] = E, t[6] = O, t[7] = 0, t[8] = T, t[9] = D, t[10] = F, t[11] = 0, t[12] = a[0] + w - (P * w + S * R + T * z), t[13] = a[1] + R - (j * w + E * R + D * z), t[14] = a[2] + z - (I * w + O * R + F * z), t[15] = 1, t;
    },
    fromQuat: function fromQuat(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a + a,
          i = r + r,
          c = u + u,
          h = a * o,
          s = r * o,
          M = r * i,
          f = u * o,
          l = u * i,
          v = u * c,
          b = e * o,
          m = e * i,
          d = e * c;
      return t[0] = 1 - M - v, t[1] = s + d, t[2] = f - m, t[3] = 0, t[4] = s - d, t[5] = 1 - h - v, t[6] = l + b, t[7] = 0, t[8] = f + m, t[9] = l - b, t[10] = 1 - h - M, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
    },
    frustum: function frustum(t, n, a, r, u, e, o) {
      var i = 1 / (a - n),
          c = 1 / (u - r),
          h = 1 / (e - o);
      return t[0] = 2 * e * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * e * c, t[6] = 0, t[7] = 0, t[8] = (a + n) * i, t[9] = (u + r) * c, t[10] = (o + e) * h, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = o * e * 2 * h, t[15] = 0, t;
    },
    perspective: function perspective(t, n, a, r, u) {
      var e,
          o = 1 / Math.tan(n / 2);
      return t[0] = o / a, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = o, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != u && u !== 1 / 0 ? (e = 1 / (r - u), t[10] = (u + r) * e, t[14] = 2 * u * r * e) : (t[10] = -1, t[14] = -2 * r), t;
    },
    perspectiveFromFieldOfView: function perspectiveFromFieldOfView(t, n, a, r) {
      var u = Math.tan(n.upDegrees * Math.PI / 180),
          e = Math.tan(n.downDegrees * Math.PI / 180),
          o = Math.tan(n.leftDegrees * Math.PI / 180),
          i = Math.tan(n.rightDegrees * Math.PI / 180),
          c = 2 / (o + i),
          h = 2 / (u + e);
      return t[0] = c, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = h, t[6] = 0, t[7] = 0, t[8] = -(o - i) * c * .5, t[9] = (u - e) * h * .5, t[10] = r / (a - r), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r * a / (a - r), t[15] = 0, t;
    },
    ortho: function ortho(t, n, a, r, u, e, o) {
      var i = 1 / (n - a),
          c = 1 / (r - u),
          h = 1 / (e - o);
      return t[0] = -2 * i, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * c, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * h, t[11] = 0, t[12] = (n + a) * i, t[13] = (u + r) * c, t[14] = (o + e) * h, t[15] = 1, t;
    },
    lookAt: function lookAt(t, a, r, u) {
      var e,
          o,
          i,
          c,
          h,
          s,
          M,
          f,
          l,
          v,
          b = a[0],
          m = a[1],
          d = a[2],
          x = u[0],
          p = u[1],
          y = u[2],
          q = r[0],
          A = r[1],
          w = r[2];
      return Math.abs(b - q) < n && Math.abs(m - A) < n && Math.abs(d - w) < n ? g(t) : (M = b - q, f = m - A, l = d - w, e = p * (l *= v = 1 / Math.hypot(M, f, l)) - y * (f *= v), o = y * (M *= v) - x * l, i = x * f - p * M, (v = Math.hypot(e, o, i)) ? (e *= v = 1 / v, o *= v, i *= v) : (e = 0, o = 0, i = 0), c = f * i - l * o, h = l * e - M * i, s = M * o - f * e, (v = Math.hypot(c, h, s)) ? (c *= v = 1 / v, h *= v, s *= v) : (c = 0, h = 0, s = 0), t[0] = e, t[1] = c, t[2] = M, t[3] = 0, t[4] = o, t[5] = h, t[6] = f, t[7] = 0, t[8] = i, t[9] = s, t[10] = l, t[11] = 0, t[12] = -(e * b + o * m + i * d), t[13] = -(c * b + h * m + s * d), t[14] = -(M * b + f * m + l * d), t[15] = 1, t);
    },
    targetTo: function targetTo(t, n, a, r) {
      var u = n[0],
          e = n[1],
          o = n[2],
          i = r[0],
          c = r[1],
          h = r[2],
          s = u - a[0],
          M = e - a[1],
          f = o - a[2],
          l = s * s + M * M + f * f;
      l > 0 && (s *= l = 1 / Math.sqrt(l), M *= l, f *= l);
      var v = c * f - h * M,
          b = h * s - i * f,
          m = i * M - c * s;
      return (l = v * v + b * b + m * m) > 0 && (v *= l = 1 / Math.sqrt(l), b *= l, m *= l), t[0] = v, t[1] = b, t[2] = m, t[3] = 0, t[4] = M * m - f * b, t[5] = f * v - s * m, t[6] = s * b - M * v, t[7] = 0, t[8] = s, t[9] = M, t[10] = f, t[11] = 0, t[12] = u, t[13] = e, t[14] = o, t[15] = 1, t;
    },
    str: function str(t) {
      return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
    },
    frob: function frob(t) {
      return Math.hypot(t[0], t[1], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
    },
    add: function add(t, n, a) {
      return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t[8] = n[8] + a[8], t[9] = n[9] + a[9], t[10] = n[10] + a[10], t[11] = n[11] + a[11], t[12] = n[12] + a[12], t[13] = n[13] + a[13], t[14] = n[14] + a[14], t[15] = n[15] + a[15], t;
    },
    subtract: j,
    multiplyScalar: function multiplyScalar(t, n, a) {
      return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = n[11] * a, t[12] = n[12] * a, t[13] = n[13] * a, t[14] = n[14] * a, t[15] = n[15] * a, t;
    },
    multiplyScalarAndAdd: function multiplyScalarAndAdd(t, n, a, r) {
      return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t[4] = n[4] + a[4] * r, t[5] = n[5] + a[5] * r, t[6] = n[6] + a[6] * r, t[7] = n[7] + a[7] * r, t[8] = n[8] + a[8] * r, t[9] = n[9] + a[9] * r, t[10] = n[10] + a[10] * r, t[11] = n[11] + a[11] * r, t[12] = n[12] + a[12] * r, t[13] = n[13] + a[13] * r, t[14] = n[14] + a[14] * r, t[15] = n[15] + a[15] * r, t;
    },
    exactEquals: function exactEquals(t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7] && t[8] === n[8] && t[9] === n[9] && t[10] === n[10] && t[11] === n[11] && t[12] === n[12] && t[13] === n[13] && t[14] === n[14] && t[15] === n[15];
    },
    equals: function equals(t, a) {
      var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = t[6],
          s = t[7],
          M = t[8],
          f = t[9],
          l = t[10],
          v = t[11],
          b = t[12],
          m = t[13],
          d = t[14],
          x = t[15],
          p = a[0],
          y = a[1],
          q = a[2],
          g = a[3],
          A = a[4],
          w = a[5],
          R = a[6],
          z = a[7],
          P = a[8],
          j = a[9],
          I = a[10],
          S = a[11],
          E = a[12],
          O = a[13],
          T = a[14],
          D = a[15];
      return Math.abs(r - p) <= n * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(u - y) <= n * Math.max(1, Math.abs(u), Math.abs(y)) && Math.abs(e - q) <= n * Math.max(1, Math.abs(e), Math.abs(q)) && Math.abs(o - g) <= n * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(i - A) <= n * Math.max(1, Math.abs(i), Math.abs(A)) && Math.abs(c - w) <= n * Math.max(1, Math.abs(c), Math.abs(w)) && Math.abs(h - R) <= n * Math.max(1, Math.abs(h), Math.abs(R)) && Math.abs(s - z) <= n * Math.max(1, Math.abs(s), Math.abs(z)) && Math.abs(M - P) <= n * Math.max(1, Math.abs(M), Math.abs(P)) && Math.abs(f - j) <= n * Math.max(1, Math.abs(f), Math.abs(j)) && Math.abs(l - I) <= n * Math.max(1, Math.abs(l), Math.abs(I)) && Math.abs(v - S) <= n * Math.max(1, Math.abs(v), Math.abs(S)) && Math.abs(b - E) <= n * Math.max(1, Math.abs(b), Math.abs(E)) && Math.abs(m - O) <= n * Math.max(1, Math.abs(m), Math.abs(O)) && Math.abs(d - T) <= n * Math.max(1, Math.abs(d), Math.abs(T)) && Math.abs(x - D) <= n * Math.max(1, Math.abs(x), Math.abs(D));
    },
    mul: I,
    sub: S
  });

  function O() {
    var t = new a(3);
    return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t;
  }

  function T(t) {
    var n = t[0],
        a = t[1],
        r = t[2];
    return Math.hypot(n, a, r);
  }

  function D(t, n, r) {
    var u = new a(3);
    return u[0] = t, u[1] = n, u[2] = r, u;
  }

  function F(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t;
  }

  function L(t, n, a) {
    return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t;
  }

  function V(t, n, a) {
    return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t;
  }

  function Q(t, n) {
    var a = n[0] - t[0],
        r = n[1] - t[1],
        u = n[2] - t[2];
    return Math.hypot(a, r, u);
  }

  function Y(t, n) {
    var a = n[0] - t[0],
        r = n[1] - t[1],
        u = n[2] - t[2];
    return a * a + r * r + u * u;
  }

  function X(t) {
    var n = t[0],
        a = t[1],
        r = t[2];
    return n * n + a * a + r * r;
  }

  function Z(t, n) {
    var a = n[0],
        r = n[1],
        u = n[2],
        e = a * a + r * r + u * u;
    return e > 0 && (e = 1 / Math.sqrt(e)), t[0] = n[0] * e, t[1] = n[1] * e, t[2] = n[2] * e, t;
  }

  function _(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
  }

  function B(t, n, a) {
    var r = n[0],
        u = n[1],
        e = n[2],
        o = a[0],
        i = a[1],
        c = a[2];
    return t[0] = u * c - e * i, t[1] = e * o - r * c, t[2] = r * i - u * o, t;
  }

  var N,
      k = F,
      U = L,
      W = V,
      C = Q,
      G = Y,
      H = T,
      J = X,
      K = (N = O(), function (t, n, a, r, u, e) {
    var o, i;

    for (n || (n = 3), a || (a = 0), i = r ? Math.min(r * n + a, t.length) : t.length, o = a; o < i; o += n) {
      N[0] = t[o], N[1] = t[o + 1], N[2] = t[o + 2], u(N, N, e), t[o] = N[0], t[o + 1] = N[1], t[o + 2] = N[2];
    }

    return t;
  }),
      $ = Object.freeze({
    create: O,
    clone: function clone(t) {
      var n = new a(3);
      return n[0] = t[0], n[1] = t[1], n[2] = t[2], n;
    },
    length: T,
    fromValues: D,
    copy: function copy(t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
    },
    set: function set(t, n, a, r) {
      return t[0] = n, t[1] = a, t[2] = r, t;
    },
    add: function add(t, n, a) {
      return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t;
    },
    subtract: F,
    multiply: L,
    divide: V,
    ceil: function ceil(t, n) {
      return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t;
    },
    floor: function floor(t, n) {
      return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t;
    },
    min: function min(t, n, a) {
      return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t;
    },
    max: function max(t, n, a) {
      return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t;
    },
    round: function round(t, n) {
      return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t;
    },
    scale: function scale(t, n, a) {
      return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t;
    },
    scaleAndAdd: function scaleAndAdd(t, n, a, r) {
      return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t;
    },
    distance: Q,
    squaredDistance: Y,
    squaredLength: X,
    negate: function negate(t, n) {
      return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t;
    },
    inverse: function inverse(t, n) {
      return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t;
    },
    normalize: Z,
    dot: _,
    cross: B,
    lerp: function lerp(t, n, a, r) {
      var u = n[0],
          e = n[1],
          o = n[2];
      return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = o + r * (a[2] - o), t;
    },
    hermite: function hermite(t, n, a, r, u, e) {
      var o = e * e,
          i = o * (2 * e - 3) + 1,
          c = o * (e - 2) + e,
          h = o * (e - 1),
          s = o * (3 - 2 * e);
      return t[0] = n[0] * i + a[0] * c + r[0] * h + u[0] * s, t[1] = n[1] * i + a[1] * c + r[1] * h + u[1] * s, t[2] = n[2] * i + a[2] * c + r[2] * h + u[2] * s, t;
    },
    bezier: function bezier(t, n, a, r, u, e) {
      var o = 1 - e,
          i = o * o,
          c = e * e,
          h = i * o,
          s = 3 * e * i,
          M = 3 * c * o,
          f = c * e;
      return t[0] = n[0] * h + a[0] * s + r[0] * M + u[0] * f, t[1] = n[1] * h + a[1] * s + r[1] * M + u[1] * f, t[2] = n[2] * h + a[2] * s + r[2] * M + u[2] * f, t;
    },
    random: function random(t, n) {
      n = n || 1;
      var a = 2 * r() * Math.PI,
          u = 2 * r() - 1,
          e = Math.sqrt(1 - u * u) * n;
      return t[0] = Math.cos(a) * e, t[1] = Math.sin(a) * e, t[2] = u * n, t;
    },
    transformMat4: function transformMat4(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = a[3] * r + a[7] * u + a[11] * e + a[15];
      return o = o || 1, t[0] = (a[0] * r + a[4] * u + a[8] * e + a[12]) / o, t[1] = (a[1] * r + a[5] * u + a[9] * e + a[13]) / o, t[2] = (a[2] * r + a[6] * u + a[10] * e + a[14]) / o, t;
    },
    transformMat3: function transformMat3(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2];
      return t[0] = r * a[0] + u * a[3] + e * a[6], t[1] = r * a[1] + u * a[4] + e * a[7], t[2] = r * a[2] + u * a[5] + e * a[8], t;
    },
    transformQuat: function transformQuat(t, n, a) {
      var r = a[0],
          u = a[1],
          e = a[2],
          o = a[3],
          i = n[0],
          c = n[1],
          h = n[2],
          s = u * h - e * c,
          M = e * i - r * h,
          f = r * c - u * i,
          l = u * f - e * M,
          v = e * s - r * f,
          b = r * M - u * s,
          m = 2 * o;
      return s *= m, M *= m, f *= m, l *= 2, v *= 2, b *= 2, t[0] = i + s + l, t[1] = c + M + v, t[2] = h + f + b, t;
    },
    rotateX: function rotateX(t, n, a, r) {
      var u = [],
          e = [];
      return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0], e[1] = u[1] * Math.cos(r) - u[2] * Math.sin(r), e[2] = u[1] * Math.sin(r) + u[2] * Math.cos(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t;
    },
    rotateY: function rotateY(t, n, a, r) {
      var u = [],
          e = [];
      return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[2] * Math.sin(r) + u[0] * Math.cos(r), e[1] = u[1], e[2] = u[2] * Math.cos(r) - u[0] * Math.sin(r), t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t;
    },
    rotateZ: function rotateZ(t, n, a, r) {
      var u = [],
          e = [];
      return u[0] = n[0] - a[0], u[1] = n[1] - a[1], u[2] = n[2] - a[2], e[0] = u[0] * Math.cos(r) - u[1] * Math.sin(r), e[1] = u[0] * Math.sin(r) + u[1] * Math.cos(r), e[2] = u[2], t[0] = e[0] + a[0], t[1] = e[1] + a[1], t[2] = e[2] + a[2], t;
    },
    angle: function angle(t, n) {
      var a = D(t[0], t[1], t[2]),
          r = D(n[0], n[1], n[2]);
      Z(a, a), Z(r, r);

      var u = _(a, r);

      return u > 1 ? 0 : u < -1 ? Math.PI : Math.acos(u);
    },
    zero: function zero(t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t;
    },
    str: function str(t) {
      return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
    },
    exactEquals: function exactEquals(t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2];
    },
    equals: function equals(t, a) {
      var r = t[0],
          u = t[1],
          e = t[2],
          o = a[0],
          i = a[1],
          c = a[2];
      return Math.abs(r - o) <= n * Math.max(1, Math.abs(r), Math.abs(o)) && Math.abs(u - i) <= n * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(e - c) <= n * Math.max(1, Math.abs(e), Math.abs(c));
    },
    sub: k,
    mul: U,
    div: W,
    dist: C,
    sqrDist: G,
    len: H,
    sqrLen: J,
    forEach: K
  });

  function tt() {
    var t = new a(4);
    return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0), t;
  }

  function nt(t) {
    var n = new a(4);
    return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n;
  }

  function at(t, n, r, u) {
    var e = new a(4);
    return e[0] = t, e[1] = n, e[2] = r, e[3] = u, e;
  }

  function rt(t, n) {
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
  }

  function ut(t, n, a, r, u) {
    return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t;
  }

  function et(t, n, a) {
    return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t;
  }

  function ot(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t;
  }

  function it(t, n, a) {
    return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t[3] = n[3] * a[3], t;
  }

  function ct(t, n, a) {
    return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t[3] = n[3] / a[3], t;
  }

  function ht(t, n, a) {
    return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t;
  }

  function st(t, n) {
    var a = n[0] - t[0],
        r = n[1] - t[1],
        u = n[2] - t[2],
        e = n[3] - t[3];
    return Math.hypot(a, r, u, e);
  }

  function Mt(t, n) {
    var a = n[0] - t[0],
        r = n[1] - t[1],
        u = n[2] - t[2],
        e = n[3] - t[3];
    return a * a + r * r + u * u + e * e;
  }

  function ft(t) {
    var n = t[0],
        a = t[1],
        r = t[2],
        u = t[3];
    return Math.hypot(n, a, r, u);
  }

  function lt(t) {
    var n = t[0],
        a = t[1],
        r = t[2],
        u = t[3];
    return n * n + a * a + r * r + u * u;
  }

  function vt(t, n) {
    var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = a * a + r * r + u * u + e * e;
    return o > 0 && (o = 1 / Math.sqrt(o)), t[0] = a * o, t[1] = r * o, t[2] = u * o, t[3] = e * o, t;
  }

  function bt(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
  }

  function mt(t, n, a, r) {
    var u = n[0],
        e = n[1],
        o = n[2],
        i = n[3];
    return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t[2] = o + r * (a[2] - o), t[3] = i + r * (a[3] - i), t;
  }

  function dt(t, n) {
    return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
  }

  function xt(t, a) {
    var r = t[0],
        u = t[1],
        e = t[2],
        o = t[3],
        i = a[0],
        c = a[1],
        h = a[2],
        s = a[3];
    return Math.abs(r - i) <= n * Math.max(1, Math.abs(r), Math.abs(i)) && Math.abs(u - c) <= n * Math.max(1, Math.abs(u), Math.abs(c)) && Math.abs(e - h) <= n * Math.max(1, Math.abs(e), Math.abs(h)) && Math.abs(o - s) <= n * Math.max(1, Math.abs(o), Math.abs(s));
  }

  var pt = ot,
      yt = it,
      qt = ct,
      gt = st,
      At = Mt,
      wt = ft,
      Rt = lt,
      zt = function () {
    var t = tt();
    return function (n, a, r, u, e, o) {
      var i, c;

      for (a || (a = 4), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a) {
        t[0] = n[i], t[1] = n[i + 1], t[2] = n[i + 2], t[3] = n[i + 3], e(t, t, o), n[i] = t[0], n[i + 1] = t[1], n[i + 2] = t[2], n[i + 3] = t[3];
      }

      return n;
    };
  }(),
      Pt = Object.freeze({
    create: tt,
    clone: nt,
    fromValues: at,
    copy: rt,
    set: ut,
    add: et,
    subtract: ot,
    multiply: it,
    divide: ct,
    ceil: function ceil(t, n) {
      return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t;
    },
    floor: function floor(t, n) {
      return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t;
    },
    min: function min(t, n, a) {
      return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t[3] = Math.min(n[3], a[3]), t;
    },
    max: function max(t, n, a) {
      return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t[3] = Math.max(n[3], a[3]), t;
    },
    round: function round(t, n) {
      return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t;
    },
    scale: ht,
    scaleAndAdd: function scaleAndAdd(t, n, a, r) {
      return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t;
    },
    distance: st,
    squaredDistance: Mt,
    length: ft,
    squaredLength: lt,
    negate: function negate(t, n) {
      return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t;
    },
    inverse: function inverse(t, n) {
      return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t;
    },
    normalize: vt,
    dot: bt,
    cross: function cross(t, n, a, r) {
      var u = a[0] * r[1] - a[1] * r[0],
          e = a[0] * r[2] - a[2] * r[0],
          o = a[0] * r[3] - a[3] * r[0],
          i = a[1] * r[2] - a[2] * r[1],
          c = a[1] * r[3] - a[3] * r[1],
          h = a[2] * r[3] - a[3] * r[2],
          s = n[0],
          M = n[1],
          f = n[2],
          l = n[3];
      return t[0] = M * h - f * c + l * i, t[1] = -s * h + f * o - l * e, t[2] = s * c - M * o + l * u, t[3] = -s * i + M * e - f * u, t;
    },
    lerp: mt,
    random: function random(t, n) {
      var a, u, e, o, i, c;
      n = n || 1;

      do {
        i = (a = 2 * r() - 1) * a + (u = 2 * r() - 1) * u;
      } while (i >= 1);

      do {
        c = (e = 2 * r() - 1) * e + (o = 2 * r() - 1) * o;
      } while (c >= 1);

      var h = Math.sqrt((1 - i) / c);
      return t[0] = n * a, t[1] = n * u, t[2] = n * e * h, t[3] = n * o * h, t;
    },
    transformMat4: function transformMat4(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3];
      return t[0] = a[0] * r + a[4] * u + a[8] * e + a[12] * o, t[1] = a[1] * r + a[5] * u + a[9] * e + a[13] * o, t[2] = a[2] * r + a[6] * u + a[10] * e + a[14] * o, t[3] = a[3] * r + a[7] * u + a[11] * e + a[15] * o, t;
    },
    transformQuat: function transformQuat(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = a[0],
          i = a[1],
          c = a[2],
          h = a[3],
          s = h * r + i * e - c * u,
          M = h * u + c * r - o * e,
          f = h * e + o * u - i * r,
          l = -o * r - i * u - c * e;
      return t[0] = s * h + l * -o + M * -c - f * -i, t[1] = M * h + l * -i + f * -o - s * -c, t[2] = f * h + l * -c + s * -i - M * -o, t[3] = n[3], t;
    },
    zero: function zero(t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 0, t;
    },
    str: function str(t) {
      return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    },
    exactEquals: dt,
    equals: xt,
    sub: pt,
    mul: yt,
    div: qt,
    dist: gt,
    sqrDist: At,
    len: wt,
    sqrLen: Rt,
    forEach: zt
  });

  function jt() {
    var t = new a(4);
    return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0), t[3] = 1, t;
  }

  function It(t, n, a) {
    a *= .5;
    var r = Math.sin(a);
    return t[0] = r * n[0], t[1] = r * n[1], t[2] = r * n[2], t[3] = Math.cos(a), t;
  }

  function St(t, n, a) {
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[0],
        c = a[1],
        h = a[2],
        s = a[3];
    return t[0] = r * s + o * i + u * h - e * c, t[1] = u * s + o * c + e * i - r * h, t[2] = e * s + o * h + r * c - u * i, t[3] = o * s - r * i - u * c - e * h, t;
  }

  function Et(t, n, a) {
    a *= .5;
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = Math.sin(a),
        c = Math.cos(a);
    return t[0] = r * c + o * i, t[1] = u * c + e * i, t[2] = e * c - u * i, t[3] = o * c - r * i, t;
  }

  function Ot(t, n, a) {
    a *= .5;
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = Math.sin(a),
        c = Math.cos(a);
    return t[0] = r * c - e * i, t[1] = u * c + o * i, t[2] = e * c + r * i, t[3] = o * c - u * i, t;
  }

  function Tt(t, n, a) {
    a *= .5;
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = Math.sin(a),
        c = Math.cos(a);
    return t[0] = r * c + u * i, t[1] = u * c - r * i, t[2] = e * c + o * i, t[3] = o * c - e * i, t;
  }

  function Dt(t, n) {
    var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = Math.sqrt(a * a + r * r + u * u),
        i = Math.exp(e),
        c = o > 0 ? i * Math.sin(o) / o : 0;
    return t[0] = a * c, t[1] = r * c, t[2] = u * c, t[3] = i * Math.cos(o), t;
  }

  function Ft(t, n) {
    var a = n[0],
        r = n[1],
        u = n[2],
        e = n[3],
        o = Math.sqrt(a * a + r * r + u * u),
        i = o > 0 ? Math.atan2(o, e) / o : 0;
    return t[0] = a * i, t[1] = r * i, t[2] = u * i, t[3] = .5 * Math.log(a * a + r * r + u * u + e * e), t;
  }

  function Lt(t, a, r, u) {
    var e,
        o,
        i,
        c,
        h,
        s = a[0],
        M = a[1],
        f = a[2],
        l = a[3],
        v = r[0],
        b = r[1],
        m = r[2],
        d = r[3];
    return (o = s * v + M * b + f * m + l * d) < 0 && (o = -o, v = -v, b = -b, m = -m, d = -d), 1 - o > n ? (e = Math.acos(o), i = Math.sin(e), c = Math.sin((1 - u) * e) / i, h = Math.sin(u * e) / i) : (c = 1 - u, h = u), t[0] = c * s + h * v, t[1] = c * M + h * b, t[2] = c * f + h * m, t[3] = c * l + h * d, t;
  }

  function Vt(t, n) {
    var a,
        r = n[0] + n[4] + n[8];
    if (r > 0) a = Math.sqrt(r + 1), t[3] = .5 * a, a = .5 / a, t[0] = (n[5] - n[7]) * a, t[1] = (n[6] - n[2]) * a, t[2] = (n[1] - n[3]) * a;else {
      var u = 0;
      n[4] > n[0] && (u = 1), n[8] > n[3 * u + u] && (u = 2);
      var e = (u + 1) % 3,
          o = (u + 2) % 3;
      a = Math.sqrt(n[3 * u + u] - n[3 * e + e] - n[3 * o + o] + 1), t[u] = .5 * a, a = .5 / a, t[3] = (n[3 * e + o] - n[3 * o + e]) * a, t[e] = (n[3 * e + u] + n[3 * u + e]) * a, t[o] = (n[3 * o + u] + n[3 * u + o]) * a;
    }
    return t;
  }

  var Qt,
      Yt,
      Xt,
      Zt,
      _t,
      Bt,
      Nt = nt,
      kt = at,
      Ut = rt,
      Wt = ut,
      Ct = et,
      Gt = St,
      Ht = ht,
      Jt = bt,
      Kt = mt,
      $t = ft,
      tn = $t,
      nn = lt,
      an = nn,
      rn = vt,
      un = dt,
      en = xt,
      on = (Qt = O(), Yt = D(1, 0, 0), Xt = D(0, 1, 0), function (t, n, a) {
    var r = _(n, a);

    return r < -.999999 ? (B(Qt, Yt, n), H(Qt) < 1e-6 && B(Qt, Xt, n), Z(Qt, Qt), It(t, Qt, Math.PI), t) : r > .999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (B(Qt, n, a), t[0] = Qt[0], t[1] = Qt[1], t[2] = Qt[2], t[3] = 1 + r, rn(t, t));
  }),
      cn = (Zt = jt(), _t = jt(), function (t, n, a, r, u, e) {
    return Lt(Zt, n, u, e), Lt(_t, a, r, e), Lt(t, Zt, _t, 2 * e * (1 - e)), t;
  }),
      hn = (Bt = m(), function (t, n, a, r) {
    return Bt[0] = a[0], Bt[3] = a[1], Bt[6] = a[2], Bt[1] = r[0], Bt[4] = r[1], Bt[7] = r[2], Bt[2] = -n[0], Bt[5] = -n[1], Bt[8] = -n[2], rn(t, Vt(t, Bt));
  }),
      sn = Object.freeze({
    create: jt,
    identity: function identity(t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
    },
    setAxisAngle: It,
    getAxisAngle: function getAxisAngle(t, a) {
      var r = 2 * Math.acos(a[3]),
          u = Math.sin(r / 2);
      return u > n ? (t[0] = a[0] / u, t[1] = a[1] / u, t[2] = a[2] / u) : (t[0] = 1, t[1] = 0, t[2] = 0), r;
    },
    getAngle: function getAngle(t, n) {
      var a = Jt(t, n);
      return Math.acos(2 * a * a - 1);
    },
    multiply: St,
    rotateX: Et,
    rotateY: Ot,
    rotateZ: Tt,
    calculateW: function calculateW(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2];
      return t[0] = a, t[1] = r, t[2] = u, t[3] = Math.sqrt(Math.abs(1 - a * a - r * r - u * u)), t;
    },
    exp: Dt,
    ln: Ft,
    pow: function pow(t, n, a) {
      return Ft(t, n), Ht(t, t, a), Dt(t, t), t;
    },
    slerp: Lt,
    random: function random(t) {
      var n = r(),
          a = r(),
          u = r(),
          e = Math.sqrt(1 - n),
          o = Math.sqrt(n);
      return t[0] = e * Math.sin(2 * Math.PI * a), t[1] = e * Math.cos(2 * Math.PI * a), t[2] = o * Math.sin(2 * Math.PI * u), t[3] = o * Math.cos(2 * Math.PI * u), t;
    },
    invert: function invert(t, n) {
      var a = n[0],
          r = n[1],
          u = n[2],
          e = n[3],
          o = a * a + r * r + u * u + e * e,
          i = o ? 1 / o : 0;
      return t[0] = -a * i, t[1] = -r * i, t[2] = -u * i, t[3] = e * i, t;
    },
    conjugate: function conjugate(t, n) {
      return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t;
    },
    fromMat3: Vt,
    fromEuler: function fromEuler(t, n, a, r) {
      var u = .5 * Math.PI / 180;
      n *= u, a *= u, r *= u;
      var e = Math.sin(n),
          o = Math.cos(n),
          i = Math.sin(a),
          c = Math.cos(a),
          h = Math.sin(r),
          s = Math.cos(r);
      return t[0] = e * c * s - o * i * h, t[1] = o * i * s + e * c * h, t[2] = o * c * h - e * i * s, t[3] = o * c * s + e * i * h, t;
    },
    str: function str(t) {
      return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
    },
    clone: Nt,
    fromValues: kt,
    copy: Ut,
    set: Wt,
    add: Ct,
    mul: Gt,
    scale: Ht,
    dot: Jt,
    lerp: Kt,
    length: $t,
    len: tn,
    squaredLength: nn,
    sqrLen: an,
    normalize: rn,
    exactEquals: un,
    equals: en,
    rotationTo: on,
    sqlerp: cn,
    setAxes: hn
  });

  function Mn(t, n, a) {
    var r = .5 * a[0],
        u = .5 * a[1],
        e = .5 * a[2],
        o = n[0],
        i = n[1],
        c = n[2],
        h = n[3];
    return t[0] = o, t[1] = i, t[2] = c, t[3] = h, t[4] = r * h + u * c - e * i, t[5] = u * h + e * o - r * c, t[6] = e * h + r * i - u * o, t[7] = -r * o - u * i - e * c, t;
  }

  function fn(t, n) {
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t;
  }

  var ln = Ut;
  var vn = Ut;

  function bn(t, n, a) {
    var r = n[0],
        u = n[1],
        e = n[2],
        o = n[3],
        i = a[4],
        c = a[5],
        h = a[6],
        s = a[7],
        M = n[4],
        f = n[5],
        l = n[6],
        v = n[7],
        b = a[0],
        m = a[1],
        d = a[2],
        x = a[3];
    return t[0] = r * x + o * b + u * d - e * m, t[1] = u * x + o * m + e * b - r * d, t[2] = e * x + o * d + r * m - u * b, t[3] = o * x - r * b - u * m - e * d, t[4] = r * s + o * i + u * h - e * c + M * x + v * b + f * d - l * m, t[5] = u * s + o * c + e * i - r * h + f * x + v * m + l * b - M * d, t[6] = e * s + o * h + r * c - u * i + l * x + v * d + M * m - f * b, t[7] = o * s - r * i - u * c - e * h + v * x - M * b - f * m - l * d, t;
  }

  var mn = bn;
  var dn = Jt;
  var xn = $t,
      pn = xn,
      yn = nn,
      qn = yn;
  var gn = Object.freeze({
    create: function create() {
      var t = new a(8);
      return a != Float32Array && (t[0] = 0, t[1] = 0, t[2] = 0, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0), t[3] = 1, t;
    },
    clone: function clone(t) {
      var n = new a(8);
      return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n;
    },
    fromValues: function fromValues(t, n, r, u, e, o, i, c) {
      var h = new a(8);
      return h[0] = t, h[1] = n, h[2] = r, h[3] = u, h[4] = e, h[5] = o, h[6] = i, h[7] = c, h;
    },
    fromRotationTranslationValues: function fromRotationTranslationValues(t, n, r, u, e, o, i) {
      var c = new a(8);
      c[0] = t, c[1] = n, c[2] = r, c[3] = u;
      var h = .5 * e,
          s = .5 * o,
          M = .5 * i;
      return c[4] = h * u + s * r - M * n, c[5] = s * u + M * t - h * r, c[6] = M * u + h * n - s * t, c[7] = -h * t - s * n - M * r, c;
    },
    fromRotationTranslation: Mn,
    fromTranslation: function fromTranslation(t, n) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = .5 * n[0], t[5] = .5 * n[1], t[6] = .5 * n[2], t[7] = 0, t;
    },
    fromRotation: function fromRotation(t, n) {
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t;
    },
    fromMat4: function fromMat4(t, n) {
      var r = jt();
      P(r, n);
      var u = new a(3);
      return R(u, n), Mn(t, r, u), t;
    },
    copy: fn,
    identity: function identity(t) {
      return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t[6] = 0, t[7] = 0, t;
    },
    set: function set(t, n, a, r, u, e, o, i, c) {
      return t[0] = n, t[1] = a, t[2] = r, t[3] = u, t[4] = e, t[5] = o, t[6] = i, t[7] = c, t;
    },
    getReal: ln,
    getDual: function getDual(t, n) {
      return t[0] = n[4], t[1] = n[5], t[2] = n[6], t[3] = n[7], t;
    },
    setReal: vn,
    setDual: function setDual(t, n) {
      return t[4] = n[0], t[5] = n[1], t[6] = n[2], t[7] = n[3], t;
    },
    getTranslation: function getTranslation(t, n) {
      var a = n[4],
          r = n[5],
          u = n[6],
          e = n[7],
          o = -n[0],
          i = -n[1],
          c = -n[2],
          h = n[3];
      return t[0] = 2 * (a * h + e * o + r * c - u * i), t[1] = 2 * (r * h + e * i + u * o - a * c), t[2] = 2 * (u * h + e * c + a * i - r * o), t;
    },
    translate: function translate(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = .5 * a[0],
          c = .5 * a[1],
          h = .5 * a[2],
          s = n[4],
          M = n[5],
          f = n[6],
          l = n[7];
      return t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = o * i + u * h - e * c + s, t[5] = o * c + e * i - r * h + M, t[6] = o * h + r * c - u * i + f, t[7] = -r * i - u * c - e * h + l, t;
    },
    rotateX: function rotateX(t, n, a) {
      var r = -n[0],
          u = -n[1],
          e = -n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = i * o + s * r + c * e - h * u,
          f = c * o + s * u + h * r - i * e,
          l = h * o + s * e + i * u - c * r,
          v = s * o - i * r - c * u - h * e;
      return Et(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t;
    },
    rotateY: function rotateY(t, n, a) {
      var r = -n[0],
          u = -n[1],
          e = -n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = i * o + s * r + c * e - h * u,
          f = c * o + s * u + h * r - i * e,
          l = h * o + s * e + i * u - c * r,
          v = s * o - i * r - c * u - h * e;
      return Ot(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t;
    },
    rotateZ: function rotateZ(t, n, a) {
      var r = -n[0],
          u = -n[1],
          e = -n[2],
          o = n[3],
          i = n[4],
          c = n[5],
          h = n[6],
          s = n[7],
          M = i * o + s * r + c * e - h * u,
          f = c * o + s * u + h * r - i * e,
          l = h * o + s * e + i * u - c * r,
          v = s * o - i * r - c * u - h * e;
      return Tt(t, n, a), r = t[0], u = t[1], e = t[2], o = t[3], t[4] = M * o + v * r + f * e - l * u, t[5] = f * o + v * u + l * r - M * e, t[6] = l * o + v * e + M * u - f * r, t[7] = v * o - M * r - f * u - l * e, t;
    },
    rotateByQuatAppend: function rotateByQuatAppend(t, n, a) {
      var r = a[0],
          u = a[1],
          e = a[2],
          o = a[3],
          i = n[0],
          c = n[1],
          h = n[2],
          s = n[3];
      return t[0] = i * o + s * r + c * e - h * u, t[1] = c * o + s * u + h * r - i * e, t[2] = h * o + s * e + i * u - c * r, t[3] = s * o - i * r - c * u - h * e, i = n[4], c = n[5], h = n[6], s = n[7], t[4] = i * o + s * r + c * e - h * u, t[5] = c * o + s * u + h * r - i * e, t[6] = h * o + s * e + i * u - c * r, t[7] = s * o - i * r - c * u - h * e, t;
    },
    rotateByQuatPrepend: function rotateByQuatPrepend(t, n, a) {
      var r = n[0],
          u = n[1],
          e = n[2],
          o = n[3],
          i = a[0],
          c = a[1],
          h = a[2],
          s = a[3];
      return t[0] = r * s + o * i + u * h - e * c, t[1] = u * s + o * c + e * i - r * h, t[2] = e * s + o * h + r * c - u * i, t[3] = o * s - r * i - u * c - e * h, i = a[4], c = a[5], h = a[6], s = a[7], t[4] = r * s + o * i + u * h - e * c, t[5] = u * s + o * c + e * i - r * h, t[6] = e * s + o * h + r * c - u * i, t[7] = o * s - r * i - u * c - e * h, t;
    },
    rotateAroundAxis: function rotateAroundAxis(t, a, r, u) {
      if (Math.abs(u) < n) return fn(t, a);
      var e = Math.hypot(r[0], r[1], r[2]);
      u *= .5;
      var o = Math.sin(u),
          i = o * r[0] / e,
          c = o * r[1] / e,
          h = o * r[2] / e,
          s = Math.cos(u),
          M = a[0],
          f = a[1],
          l = a[2],
          v = a[3];
      t[0] = M * s + v * i + f * h - l * c, t[1] = f * s + v * c + l * i - M * h, t[2] = l * s + v * h + M * c - f * i, t[3] = v * s - M * i - f * c - l * h;
      var b = a[4],
          m = a[5],
          d = a[6],
          x = a[7];
      return t[4] = b * s + x * i + m * h - d * c, t[5] = m * s + x * c + d * i - b * h, t[6] = d * s + x * h + b * c - m * i, t[7] = x * s - b * i - m * c - d * h, t;
    },
    add: function add(t, n, a) {
      return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t[4] = n[4] + a[4], t[5] = n[5] + a[5], t[6] = n[6] + a[6], t[7] = n[7] + a[7], t;
    },
    multiply: bn,
    mul: mn,
    scale: function scale(t, n, a) {
      return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t[4] = n[4] * a, t[5] = n[5] * a, t[6] = n[6] * a, t[7] = n[7] * a, t;
    },
    dot: dn,
    lerp: function lerp(t, n, a, r) {
      var u = 1 - r;
      return dn(n, a) < 0 && (r = -r), t[0] = n[0] * u + a[0] * r, t[1] = n[1] * u + a[1] * r, t[2] = n[2] * u + a[2] * r, t[3] = n[3] * u + a[3] * r, t[4] = n[4] * u + a[4] * r, t[5] = n[5] * u + a[5] * r, t[6] = n[6] * u + a[6] * r, t[7] = n[7] * u + a[7] * r, t;
    },
    invert: function invert(t, n) {
      var a = yn(n);
      return t[0] = -n[0] / a, t[1] = -n[1] / a, t[2] = -n[2] / a, t[3] = n[3] / a, t[4] = -n[4] / a, t[5] = -n[5] / a, t[6] = -n[6] / a, t[7] = n[7] / a, t;
    },
    conjugate: function conjugate(t, n) {
      return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = n[3], t[4] = -n[4], t[5] = -n[5], t[6] = -n[6], t[7] = n[7], t;
    },
    length: xn,
    len: pn,
    squaredLength: yn,
    sqrLen: qn,
    normalize: function normalize(t, n) {
      var a = yn(n);

      if (a > 0) {
        a = Math.sqrt(a);
        var r = n[0] / a,
            u = n[1] / a,
            e = n[2] / a,
            o = n[3] / a,
            i = n[4],
            c = n[5],
            h = n[6],
            s = n[7],
            M = r * i + u * c + e * h + o * s;
        t[0] = r, t[1] = u, t[2] = e, t[3] = o, t[4] = (i - r * M) / a, t[5] = (c - u * M) / a, t[6] = (h - e * M) / a, t[7] = (s - o * M) / a;
      }

      return t;
    },
    str: function str(t) {
      return "quat2(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ")";
    },
    exactEquals: function exactEquals(t, n) {
      return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3] && t[4] === n[4] && t[5] === n[5] && t[6] === n[6] && t[7] === n[7];
    },
    equals: function equals(t, a) {
      var r = t[0],
          u = t[1],
          e = t[2],
          o = t[3],
          i = t[4],
          c = t[5],
          h = t[6],
          s = t[7],
          M = a[0],
          f = a[1],
          l = a[2],
          v = a[3],
          b = a[4],
          m = a[5],
          d = a[6],
          x = a[7];
      return Math.abs(r - M) <= n * Math.max(1, Math.abs(r), Math.abs(M)) && Math.abs(u - f) <= n * Math.max(1, Math.abs(u), Math.abs(f)) && Math.abs(e - l) <= n * Math.max(1, Math.abs(e), Math.abs(l)) && Math.abs(o - v) <= n * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(i - b) <= n * Math.max(1, Math.abs(i), Math.abs(b)) && Math.abs(c - m) <= n * Math.max(1, Math.abs(c), Math.abs(m)) && Math.abs(h - d) <= n * Math.max(1, Math.abs(h), Math.abs(d)) && Math.abs(s - x) <= n * Math.max(1, Math.abs(s), Math.abs(x));
    }
  });

  function An() {
    var t = new a(2);
    return a != Float32Array && (t[0] = 0, t[1] = 0), t;
  }

  function wn(t, n, a) {
    return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t;
  }

  function Rn(t, n, a) {
    return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t;
  }

  function zn(t, n, a) {
    return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t;
  }

  function Pn(t, n) {
    var a = n[0] - t[0],
        r = n[1] - t[1];
    return Math.hypot(a, r);
  }

  function jn(t, n) {
    var a = n[0] - t[0],
        r = n[1] - t[1];
    return a * a + r * r;
  }

  function In(t) {
    var n = t[0],
        a = t[1];
    return Math.hypot(n, a);
  }

  function Sn(t) {
    var n = t[0],
        a = t[1];
    return n * n + a * a;
  }

  var En = In,
      On = wn,
      Tn = Rn,
      Dn = zn,
      Fn = Pn,
      Ln = jn,
      Vn = Sn,
      Qn = function () {
    var t = An();
    return function (n, a, r, u, e, o) {
      var i, c;

      for (a || (a = 2), r || (r = 0), c = u ? Math.min(u * a + r, n.length) : n.length, i = r; i < c; i += a) {
        t[0] = n[i], t[1] = n[i + 1], e(t, t, o), n[i] = t[0], n[i + 1] = t[1];
      }

      return n;
    };
  }(),
      Yn = Object.freeze({
    create: An,
    clone: function clone(t) {
      var n = new a(2);
      return n[0] = t[0], n[1] = t[1], n;
    },
    fromValues: function fromValues(t, n) {
      var r = new a(2);
      return r[0] = t, r[1] = n, r;
    },
    copy: function copy(t, n) {
      return t[0] = n[0], t[1] = n[1], t;
    },
    set: function set(t, n, a) {
      return t[0] = n, t[1] = a, t;
    },
    add: function add(t, n, a) {
      return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t;
    },
    subtract: wn,
    multiply: Rn,
    divide: zn,
    ceil: function ceil(t, n) {
      return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t;
    },
    floor: function floor(t, n) {
      return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t;
    },
    min: function min(t, n, a) {
      return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t;
    },
    max: function max(t, n, a) {
      return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t;
    },
    round: function round(t, n) {
      return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t;
    },
    scale: function scale(t, n, a) {
      return t[0] = n[0] * a, t[1] = n[1] * a, t;
    },
    scaleAndAdd: function scaleAndAdd(t, n, a, r) {
      return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t;
    },
    distance: Pn,
    squaredDistance: jn,
    length: In,
    squaredLength: Sn,
    negate: function negate(t, n) {
      return t[0] = -n[0], t[1] = -n[1], t;
    },
    inverse: function inverse(t, n) {
      return t[0] = 1 / n[0], t[1] = 1 / n[1], t;
    },
    normalize: function normalize(t, n) {
      var a = n[0],
          r = n[1],
          u = a * a + r * r;
      return u > 0 && (u = 1 / Math.sqrt(u)), t[0] = n[0] * u, t[1] = n[1] * u, t;
    },
    dot: function dot(t, n) {
      return t[0] * n[0] + t[1] * n[1];
    },
    cross: function cross(t, n, a) {
      var r = n[0] * a[1] - n[1] * a[0];
      return t[0] = t[1] = 0, t[2] = r, t;
    },
    lerp: function lerp(t, n, a, r) {
      var u = n[0],
          e = n[1];
      return t[0] = u + r * (a[0] - u), t[1] = e + r * (a[1] - e), t;
    },
    random: function random(t, n) {
      n = n || 1;
      var a = 2 * r() * Math.PI;
      return t[0] = Math.cos(a) * n, t[1] = Math.sin(a) * n, t;
    },
    transformMat2: function transformMat2(t, n, a) {
      var r = n[0],
          u = n[1];
      return t[0] = a[0] * r + a[2] * u, t[1] = a[1] * r + a[3] * u, t;
    },
    transformMat2d: function transformMat2d(t, n, a) {
      var r = n[0],
          u = n[1];
      return t[0] = a[0] * r + a[2] * u + a[4], t[1] = a[1] * r + a[3] * u + a[5], t;
    },
    transformMat3: function transformMat3(t, n, a) {
      var r = n[0],
          u = n[1];
      return t[0] = a[0] * r + a[3] * u + a[6], t[1] = a[1] * r + a[4] * u + a[7], t;
    },
    transformMat4: function transformMat4(t, n, a) {
      var r = n[0],
          u = n[1];
      return t[0] = a[0] * r + a[4] * u + a[12], t[1] = a[1] * r + a[5] * u + a[13], t;
    },
    rotate: function rotate(t, n, a, r) {
      var u = n[0] - a[0],
          e = n[1] - a[1],
          o = Math.sin(r),
          i = Math.cos(r);
      return t[0] = u * i - e * o + a[0], t[1] = u * o + e * i + a[1], t;
    },
    angle: function angle(t, n) {
      var a = t[0],
          r = t[1],
          u = n[0],
          e = n[1],
          o = a * a + r * r;
      o > 0 && (o = 1 / Math.sqrt(o));
      var i = u * u + e * e;
      i > 0 && (i = 1 / Math.sqrt(i));
      var c = (a * u + r * e) * o * i;
      return c > 1 ? 0 : c < -1 ? Math.PI : Math.acos(c);
    },
    zero: function zero(t) {
      return t[0] = 0, t[1] = 0, t;
    },
    str: function str(t) {
      return "vec2(" + t[0] + ", " + t[1] + ")";
    },
    exactEquals: function exactEquals(t, n) {
      return t[0] === n[0] && t[1] === n[1];
    },
    equals: function equals(t, a) {
      var r = t[0],
          u = t[1],
          e = a[0],
          o = a[1];
      return Math.abs(r - e) <= n * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(u - o) <= n * Math.max(1, Math.abs(u), Math.abs(o));
    },
    len: En,
    sub: On,
    mul: Tn,
    div: Dn,
    dist: Fn,
    sqrDist: Ln,
    sqrLen: Vn,
    forEach: Qn
  });

  t.glMatrix = e, t.mat2 = s, t.mat2d = b, t.mat3 = q, t.mat4 = E, t.quat = sn, t.quat2 = gn, t.vec2 = Yn, t.vec3 = $, t.vec4 = Pt, Object.defineProperty(t, "__esModule", {
    value: !0
  });
}); // ["glMatrix", "mat2", "mat2d", "mat3", "mat4", "quat", "quat2", "vec2", "vec3", "vec4"]

window.glMatrix = glMatrix;
window.mat2 = glMatrix.mat2;
window.mat2d = glMatrix.mat2d;
window.mat3 = glMatrix.mat3;
window.mat4 = glMatrix.mat4;
window.quat = glMatrix.quat;
window.quat2 = glMatrix.quat2;
window.vec2 = glMatrix.vec2;
window.vec3 = glMatrix.vec3;
window.vec4 = glMatrix.vec4;
var CABLES = CABLES || {};
CABLES.build = {
  "timestamp": 1632208486230,
  "created": "2021-09-21T07:14:46.230Z",
  "git": {
    "branch": "master",
    "commit": "fc757b810fcb21fbc3d31be241a4b2c7bbd6d8bd",
    "date": null,
    "message": null
  }
};
if (!CABLES.exportedPatches) CABLES.exportedPatches = {};
CABLES.exportedPatches["tsUz1Q"] = {
  settings: {
    opExample: [],
    licence: "none",
    isPublic: false
  },
  ops: [{
    objName: "Ops.Gl.MainLoop",
    id: "0",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "FPS Limit",
      value: 0
    }, {
      name: "Reduce FPS not focussed",
      value: true
    }, {
      name: "Reduce FPS loading",
      value: 0
    }, {
      name: "Clear",
      value: true
    }, {
      name: "ClearAlpha",
      value: true
    }, {
      name: "Fullscreen Button",
      value: false
    }, {
      name: "Active",
      value: true
    }, {
      name: "Hires Displays",
      value: false
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "width",
      value: 861
    }, {
      name: "height",
      value: 518
    }]
  }, {
    objName: "Ops.Sequence",
    id: "1",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "exe",
      links: [{
        portIn: "exe",
        portOut: "trigger",
        objIn: "1",
        objOut: "0"
      }]
    }, {
      name: "Clean up connections",
      value: 0
    }, {
      name: "exe 0",
      value: 0
    }, {
      name: "exe 1",
      value: 0
    }, {
      name: "exe 2",
      value: 0
    }, {
      name: "exe 3",
      value: 0
    }, {
      name: "exe 4",
      value: 0
    }, {
      name: "exe 5",
      value: 0
    }, {
      name: "exe 6",
      value: 0
    }, {
      name: "exe 7",
      value: 0
    }, {
      name: "exe 8",
      value: 0
    }, {
      name: "exe 9",
      value: 0
    }, {
      name: "exe 10",
      value: 0
    }, {
      name: "exe 11",
      value: 0
    }, {
      name: "exe 12",
      value: 0
    }, {
      name: "exe 13",
      value: 0
    }, {
      name: "exe 14",
      value: 0
    }],
    portsOut: [{
      name: "trigger 0"
    }, {
      name: "trigger 1"
    }, {
      name: "trigger 2"
    }, {
      name: "trigger 3",
      value: 0
    }, {
      name: "trigger 4",
      value: 0
    }, {
      name: "trigger 5",
      value: 0
    }, {
      name: "trigger 6",
      value: 0
    }, {
      name: "trigger 7",
      value: 0
    }, {
      name: "trigger 8",
      value: 0
    }, {
      name: "trigger 9",
      value: 0
    }, {
      name: "trigger 10",
      value: 0
    }, {
      name: "trigger 11",
      value: 0
    }, {
      name: "trigger 12",
      value: 0
    }, {
      name: "trigger 13",
      value: 0
    }, {
      name: "trigger 14",
      value: 0
    }, {
      name: "trigger 15",
      value: 0
    }]
  }, {
    objName: "Ops.Gl.ShaderEffects.VertexDisplacementMap_v4",
    id: "2",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "Render",
      links: [{
        portIn: "Render",
        portOut: "Trigger Out",
        objIn: "2",
        objOut: "3"
      }]
    }, {
      name: "Extrude",
      value: .02
    }, {
      name: "Mode index",
      value: 0
    }, {
      name: "Mode",
      value: "Norm"
    }, {
      name: "Axis index",
      value: 0
    }, {
      name: "Axis",
      value: "XYZ"
    }, {
      name: "Coordinates index",
      value: 0
    }, {
      name: "Coordinates",
      value: "Tex Coords"
    }, {
      name: "Texture",
      links: [{
        portIn: "Texture",
        portOut: "texture_out",
        objIn: "2",
        objOut: "4"
      }]
    }, {
      name: "Channel index",
      value: 0
    }, {
      name: "Channel",
      value: "Luminance"
    }, {
      name: "Flip index",
      value: 0
    }, {
      name: "Flip",
      value: "None"
    }, {
      name: "Range index",
      value: 0
    }, {
      name: "Range",
      value: "0-1"
    }, {
      name: "Offset X",
      value: 0
    }, {
      name: "Offset Y",
      value: 0
    }, {
      name: "Scale",
      value: 1
    }, {
      name: "Calc Normals",
      value: false
    }, {
      name: "Discard Zero Values",
      value: false
    }, {
      name: "colorize",
      value: false
    }, {
      name: "Colorize Min",
      value: 0
    }, {
      name: "Colorize Max",
      value: 1
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    objName: "Ops.Gl.Phong.PhongMaterial_v6",
    id: "3",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "Trigger In",
      links: [{
        portIn: "Trigger In",
        portOut: "trigger 2",
        objIn: "3",
        objOut: "1"
      }]
    }, {
      name: "R",
      value: 0
    }, {
      name: "G",
      value: 0
    }, {
      name: "B",
      value: 0
    }, {
      name: "A",
      value: 1
    }, {
      name: "Enable",
      value: false
    }, {
      name: "Albedo",
      value: .707
    }, {
      name: "Roughness",
      value: .835
    }, {
      name: "Active",
      value: false
    }, {
      name: "Fresnel Intensity",
      value: .7
    }, {
      name: "Fresnel Width",
      value: 1
    }, {
      name: "Fresnel Exponent",
      value: 6
    }, {
      name: "Fresnel R",
      value: 1
    }, {
      name: "Fresnel G",
      value: 1
    }, {
      name: "Fresnel B",
      value: 1
    }, {
      name: "Emissive Active",
      value: false
    }, {
      name: "Color Intensity",
      value: .3
    }, {
      name: "Emissive R",
      value: .2834968950146144
    }, {
      name: "Emissive G",
      value: .3893613901220814
    }, {
      name: "Emissive B",
      value: .2580015920827916
    }, {
      name: "Shininess",
      value: 5.76
    }, {
      name: "Specular Amount",
      value: .529
    }, {
      name: "Specular Model index",
      value: 0
    }, {
      name: "Specular Model",
      value: "Blinn"
    }, {
      name: "Energy Conservation",
      value: false
    }, {
      name: "Double Sided Material",
      value: false
    }, {
      name: "Falloff Mode index",
      value: 0
    }, {
      name: "Falloff Mode",
      value: "A"
    }, {
      name: "Diffuse Texture",
      value: 0
    }, {
      name: "Specular Texture",
      value: 0
    }, {
      name: "Normal Map",
      links: [{
        portIn: "Normal Map",
        portOut: "texture_out",
        objIn: "3",
        objOut: "6"
      }]
    }, {
      name: "AO Texture",
      value: 0
    }, {
      name: "Emissive Texture",
      value: 0
    }, {
      name: "Emissive Mask",
      value: 0
    }, {
      name: "Opacity Texture",
      value: 0
    }, {
      name: "Environment Map",
      value: 0
    }, {
      name: "Env Map Mask",
      value: 0
    }, {
      name: "Colorize Texture",
      value: false
    }, {
      name: "Diffuse Repeat X",
      value: 1
    }, {
      name: "Diffuse Repeat Y",
      value: 1
    }, {
      name: "Texture Offset X",
      value: 0
    }, {
      name: "Texture Offset Y",
      value: 0
    }, {
      name: "Specular Intensity",
      value: 1
    }, {
      name: "Normal Map Intensity",
      value: .645
    }, {
      name: "AO Intensity",
      value: 1
    }, {
      name: "Emissive Intensity",
      value: 1
    }, {
      name: "Emissive Mask Intensity",
      value: 1
    }, {
      name: "Env Map Intensity",
      value: 1
    }, {
      name: "Env Mask Intensity",
      value: 1
    }, {
      name: "Alpha Mask Source index",
      value: 0
    }, {
      name: "Alpha Mask Source",
      value: "Luminance"
    }, {
      name: "Discard Transparent Pixels",
      value: 0
    }],
    portsOut: [{
      name: "Trigger Out"
    }, {
      name: "Shader"
    }]
  }, {
    objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
    id: "4",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "Render",
      links: [{
        portIn: "Render",
        portOut: "trigger 0",
        objIn: "4",
        objOut: "1"
      }]
    }, {
      name: "Use viewport size",
      value: false
    }, {
      name: "Width",
      value: 512
    }, {
      name: "Height",
      value: 512
    }, {
      name: "Filter index",
      value: 1
    }, {
      name: "Filter",
      value: "linear"
    }, {
      name: "Wrap index",
      value: 1
    }, {
      name: "Wrap",
      value: "clamp to edge"
    }, {
      name: "HDR",
      value: 0
    }, {
      name: "Transparent",
      value: false
    }],
    portsOut: [{
      name: "Next"
    }, {
      name: "texture_out"
    }, {
      name: "Aspect Ratio",
      value: 1
    }]
  }, {
    objName: "Ops.Gl.TextureEffects.Noise.FBMNoise",
    id: "5",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Next",
        objIn: "5",
        objOut: "4"
      }]
    }, {
      name: "Blend Mode index",
      value: 0
    }, {
      name: "Blend Mode",
      value: "normal"
    }, {
      name: "Amount",
      value: 1
    }, {
      name: "r",
      value: 1
    }, {
      name: "g",
      value: 1
    }, {
      name: "b",
      value: 1
    }, {
      name: "scale",
      value: 2
    }, {
      name: "anim",
      value: 0
    }, {
      name: "scrollX",
      links: [{
        portIn: "scrollX",
        portOut: "Time",
        objIn: "5",
        objOut: "10"
      }]
    }, {
      name: "scrollY",
      links: [{
        portIn: "scrollY",
        portOut: "Time",
        objIn: "5",
        objOut: "9"
      }]
    }, {
      name: "repeat",
      value: 1
    }, {
      name: "aspect",
      value: 1
    }, {
      name: "Layer 1",
      value: true
    }, {
      name: "Layer 2",
      value: true
    }, {
      name: "Layer 3",
      value: true
    }, {
      name: "Layer 4",
      value: true
    }, {
      name: "Tileable",
      value: false
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }]
  }, {
    objName: "Ops.Gl.TextureEffects.ImageCompose_v2",
    id: "6",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "Render",
      links: [{
        portIn: "Render",
        portOut: "trigger 1",
        objIn: "6",
        objOut: "1"
      }]
    }, {
      name: "Use viewport size",
      value: false
    }, {
      name: "Width",
      value: 512
    }, {
      name: "Height",
      value: 512
    }, {
      name: "Filter index",
      value: 1
    }, {
      name: "Filter",
      value: "linear"
    }, {
      name: "Wrap index",
      value: 1
    }, {
      name: "Wrap",
      value: "clamp to edge"
    }, {
      name: "HDR",
      value: 0
    }, {
      name: "Transparent",
      value: false
    }],
    portsOut: [{
      name: "Next"
    }, {
      name: "texture_out"
    }, {
      name: "Aspect Ratio",
      value: 1
    }]
  }, {
    objName: "Ops.Gl.TextureEffects.DrawImage_v3",
    id: "7",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "Next",
        objIn: "7",
        objOut: "6"
      }]
    }, {
      name: "blendMode index",
      value: 0
    }, {
      name: "blendMode",
      value: "normal"
    }, {
      name: "amount",
      value: 1
    }, {
      name: "Image",
      links: [{
        portIn: "Image",
        portOut: "texture_out",
        objIn: "7",
        objOut: "4"
      }]
    }, {
      name: "removeAlphaSrc",
      value: false
    }, {
      name: "Mask",
      value: 0
    }, {
      name: "Mask Src index",
      value: 1
    }, {
      name: "Mask Src",
      value: "alpha channel"
    }, {
      name: "Invert alpha channel",
      value: 0
    }, {
      name: "Aspect Ratio",
      value: false
    }, {
      name: "Stretch Axis index",
      value: 0
    }, {
      name: "Stretch Axis",
      value: "X"
    }, {
      name: "Position",
      value: 0
    }, {
      name: "Crop",
      value: false
    }, {
      name: "flip x",
      value: 0
    }, {
      name: "flip y",
      value: 0
    }, {
      name: "Transform",
      value: 0
    }, {
      name: "Scale X",
      value: 1
    }, {
      name: "Scale Y",
      value: 1
    }, {
      name: "Position X",
      value: 0
    }, {
      name: "Position Y",
      value: 0
    }, {
      name: "Rotation",
      value: 0
    }, {
      name: "Clip Repeat",
      value: false
    }],
    portsOut: [{
      name: "trigger"
    }]
  }, {
    objName: "Ops.Gl.TextureEffects.ToNormalMap",
    id: "8",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "8",
        objOut: "7"
      }]
    }, {
      name: "Strength",
      value: 4
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }]
  }, {
    objName: "Ops.Anim.Timer_v2",
    id: "9",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "Speed",
      value: .25
    }, {
      name: "Play",
      value: true
    }, {
      name: "Reset",
      value: 0
    }, {
      name: "Sync to timeline",
      value: false
    }],
    portsOut: [{
      name: "Time"
    }]
  }, {
    objName: "Ops.Anim.Timer_v2",
    id: "10",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "Speed",
      value: -.26
    }, {
      name: "Play",
      value: true
    }, {
      name: "Reset",
      value: 0
    }, {
      name: "Sync to timeline",
      value: false
    }],
    portsOut: [{
      name: "Time"
    }]
  }, {
    objName: "Ops.Gl.Meshes.FullscreenRectangle",
    id: "11",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "render",
      value: null
    }, {
      name: "Center in Canvas",
      value: 0
    }, {
      name: "Flip Y",
      value: 0
    }, {
      name: "Flip X",
      value: 0
    }, {
      name: "Texture",
      links: [{
        portIn: "Texture",
        portOut: "texture",
        objIn: "11",
        objOut: "13"
      }]
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }]
  }, {
    objName: "Ops.Gl.Meshes.Rectangle_v2",
    id: "12",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "12",
        objOut: "2"
      }]
    }, {
      name: "width",
      value: 4
    }, {
      name: "height",
      value: 4
    }, {
      name: "pivot x index",
      value: 0
    }, {
      name: "pivot x",
      value: "center"
    }, {
      name: "pivot y index",
      value: 0
    }, {
      name: "pivot y",
      value: "center"
    }, {
      name: "num columns",
      value: 1
    }, {
      name: "num rows",
      value: 1
    }, {
      name: "axis index",
      value: 0
    }, {
      name: "axis",
      value: "xy"
    }, {
      name: "Active",
      value: true
    }],
    portsOut: [{
      name: "trigger"
    }, {
      name: "geometry"
    }]
  }, {
    objName: "Ops.Gl.Render2Texture",
    id: "13",
    uiAttribs: {
      subPatch: 0
    },
    portsIn: [{
      name: "render",
      links: [{
        portIn: "render",
        portOut: "trigger",
        objIn: "13",
        objOut: "12"
      }]
    }, {
      name: "use viewport size",
      value: true
    }, {
      name: "texture width",
      value: 861
    }, {
      name: "texture height",
      value: 518
    }, {
      name: "Auto Aspect",
      value: false
    }, {
      name: "filter index",
      value: 1
    }, {
      name: "filter",
      value: "linear"
    }, {
      name: "Wrap index",
      value: 1
    }, {
      name: "Wrap",
      value: "Repeat"
    }, {
      name: "MSAA index",
      value: 0
    }, {
      name: "MSAA",
      value: "none"
    }, {
      name: "HDR",
      value: 0
    }, {
      name: "Depth",
      value: true
    }, {
      name: "Clear",
      value: true
    }],
    portsOut: [{
      name: "trigger",
      value: 0
    }, {
      name: "texture"
    }, {
      name: "textureDepth"
    }]
  }],
  users: [],
  userOps: [],
  tags: [],
  _id: "61899d93855ca52c7cf6b525",
  name: "new project",
  userId: "616e447558e2507c89fd2fa5",
  created: "2021-11-08T21:58:43.126Z",
  updated: "2021-11-08T22:59:38.882Z",
  log: [],
  __v: 2,
  shortId: "tsUz1Q",
  buildInfo: {
    ui: {
      timestamp: 1632479512196,
      created: "2021-09-24T10:31:52.196Z",
      git: {
        branch: "master",
        commit: "6ad4f9ed4bc83674f20c62de0391b443ff0f6d87",
        date: "2021-09-21T11:43:16.000Z",
        message: "fixes"
      }
    },
    host: "cables.gl"
  },
  opsHash: "2eebe07d3e772080c6736b57396e0673cbc3db02",
  ui: {
    timeLineLength: 20,
    bookmarks: [],
    viewBoxesGl: {
      0: {
        x: -156.51787032601294,
        y: 86.65476042040854,
        z: 982.6944422850804
      }
    },
    subPatchViewBoxes: [],
    renderer: {
      w: 861,
      h: 518,
      s: 1
    }
  },
  updatedByUser: "fakebrianho",
  exports: 2
};

if (!CABLES.exportedPatch) {
  CABLES.exportedPatch = CABLES.exportedPatches["tsUz1Q"];
}

"use strict";

var CABLES = CABLES || {};
CABLES.OPS = CABLES.OPS || {};
var Ops = Ops || {};
Ops.Gl = Ops.Gl || {};
Ops.Anim = Ops.Anim || {};
Ops.Gl.Phong = Ops.Gl.Phong || {};
Ops.Gl.Meshes = Ops.Gl.Meshes || {};
Ops.Gl.ShaderEffects = Ops.Gl.ShaderEffects || {};
Ops.Gl.TextureEffects = Ops.Gl.TextureEffects || {};
Ops.Gl.TextureEffects.Noise = Ops.Gl.TextureEffects.Noise || {};

Ops.Gl.MainLoop = function () {
  CABLES.Op.apply(this, arguments);
  var i = this;
  var e = {};
  var t = i.inValue("FPS Limit", 0);
  var n = i.outTrigger("trigger");
  var o = i.outValue("width");
  var r = i.outValue("height");
  var a = i.inValueBool("Reduce FPS not focussed", true);
  var l = i.inValueBool("Reduce FPS loading");
  var s = i.inValueBool("Clear", true);
  var f = i.inValueBool("ClearAlpha", true);
  var u = i.inValueBool("Fullscreen Button", false);
  var c = i.inValueBool("Active", true);
  var g = i.inValueBool("Hires Displays", false);
  i.onAnimFrame = S;

  g.onChange = function () {
    if (g.get()) i.patch.cgl.pixelDensity = window.devicePixelRatio;else i.patch.cgl.pixelDensity = 1;
    i.patch.cgl.updateSize();
    if (CABLES.UI) gui.setLayout();
  };

  c.onChange = function () {
    i.patch.removeOnAnimFrame(i);

    if (c.get()) {
      i.setUiAttrib({
        extendTitle: ""
      });
      i.onAnimFrame = S;
      i.patch.addOnAnimFrame(i);
      i.log("adding again!");
    } else {
      i.setUiAttrib({
        extendTitle: "Inactive"
      });
    }
  };

  var d = i.patch.cgl;
  var m = 0;
  var p = 0;
  if (!i.patch.cgl) i.uiAttr({
    error: "No webgl cgl context"
  });

  var _ = vec3.create();

  vec3.set(_, 0, 0, 0);
  var h = vec3.create();
  vec3.set(h, 0, 0, -2);
  u.onChange = A;
  setTimeout(A, 100);
  var E = null;
  var x = true;
  var v = true;
  window.addEventListener("blur", function () {
    x = false;
  });
  window.addEventListener("focus", function () {
    x = true;
  });
  document.addEventListener("visibilitychange", function () {
    v = !document.hidden;
  });

  function T() {
    if (l.get() && i.patch.loading.getProgress() < 1) return 5;

    if (a.get()) {
      if (!v) return 10;
      if (!x) return 30;
    }

    return t.get();
  }

  function A() {
    function e() {
      if (E) E.style.display = "block";
    }

    function t() {
      if (E) E.style.display = "none";
    }

    i.patch.cgl.canvas.addEventListener("mouseleave", t);
    i.patch.cgl.canvas.addEventListener("mouseenter", e);

    if (u.get()) {
      if (!E) {
        E = document.createElement("div");
        var _n13 = i.patch.cgl.canvas.parentElement;
        if (_n13) _n13.appendChild(E);
        E.addEventListener("mouseenter", e);
        E.addEventListener("click", function (e) {
          if (CABLES.UI && !e.shiftKey) gui.cycleFullscreen();else d.fullScreen();
        });
      }

      E.style.padding = "10px";
      E.style.position = "absolute";
      E.style.right = "5px";
      E.style.top = "5px";
      E.style.width = "20px";
      E.style.height = "20px";
      E.style.cursor = "pointer";
      E.style["border-radius"] = "40px";
      E.style.background = "#444";
      E.style["z-index"] = "9999";
      E.style.display = "none";
      E.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>';
    } else {
      if (E) {
        E.style.display = "none";
        E.remove();
        E = null;
      }
    }
  }

  i.onDelete = function () {
    d.gl.clearColor(0, 0, 0, 0);
    d.gl.clear(d.gl.COLOR_BUFFER_BIT | d.gl.DEPTH_BUFFER_BIT);
  };

  function S(e) {
    if (!c.get()) return;
    if (d.aborted || d.canvas.clientWidth === 0 || d.canvas.clientHeight === 0) return;
    var t = performance.now();
    i.patch.config.fpsLimit = T();

    if (d.canvasWidth == -1) {
      d.setCanvas(i.patch.config.glCanvasId);
      return;
    }

    if (d.canvasWidth != o.get() || d.canvasHeight != r.get()) {
      o.set(d.canvasWidth);
      r.set(d.canvasHeight);
    }

    if (CABLES.now() - p > 1e3) {
      CGL.fpsReport = CGL.fpsReport || [];
      if (i.patch.loading.getProgress() >= 1 && p !== 0) CGL.fpsReport.push(m);
      m = 0;
      p = CABLES.now();
    }

    CGL.MESH.lastShader = null;
    CGL.MESH.lastMesh = null;
    d.renderStart(d, _, h);

    if (s.get()) {
      d.gl.clearColor(0, 0, 0, 1);
      d.gl.clear(d.gl.COLOR_BUFFER_BIT | d.gl.DEPTH_BUFFER_BIT);
    }

    n.trigger();
    if (CGL.MESH.lastMesh) CGL.MESH.lastMesh.unBind();

    if (CGL.Texture.previewTexture) {
      if (!CGL.Texture.texturePreviewer) CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(d);
      CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
    }

    d.renderEnd(d);

    if (f.get()) {
      d.gl.clearColor(1, 1, 1, 1);
      d.gl.colorMask(false, false, false, true);
      d.gl.clear(d.gl.COLOR_BUFFER_BIT);
      d.gl.colorMask(true, true, true, true);
    }

    if (!d.frameStore.phong) d.frameStore.phong = {};
    m++;
    i.patch.cgl.profileData.profileMainloopMs = performance.now() - t;
  }
};

Ops.Gl.MainLoop.prototype = new CABLES.Op();
CABLES.OPS["b0472a1d-db16-4ba6-8787-f300fbdc77bb"] = {
  f: Ops.Gl.MainLoop,
  objName: "Ops.Gl.MainLoop"
};

Ops.Sequence = function () {
  CABLES.Op.apply(this, arguments);
  var r = this;
  var e = {};
  var t = r.inTrigger("exe"),
      n = r.inTriggerButton("Clean up connections");
  var i = [],
      a = [],
      o = 16;
  var l = null;
  t.onTriggered = f;
  n.onTriggered = u;
  n.setUiAttribs({
    hidePort: true
  });
  n.setUiAttribs({
    hideParam: true
  });

  for (var _t116 = 0; _t116 < o; _t116++) {
    var c = r.outTrigger("trigger " + _t116);
    a.push(c);
    c.onLinkChanged = s;

    if (_t116 < o - 1) {
      var _e108 = r.inTrigger("exe " + _t116);

      _e108.onTriggered = f;
      i.push(_e108);
    }
  }

  function s() {
    clearTimeout(l);
    l = setTimeout(function () {
      var t = false;

      for (var _e109 = 0; _e109 < a.length; _e109++) {
        if (a[_e109].links.length > 1) t = true;
      }

      n.setUiAttribs({
        hideParam: !t
      });
      if (r.isCurrentUiOp()) r.refreshParams();
    }, 60);
  }

  function f() {
    for (var _e110 = 0; _e110 < a.length; _e110++) {
      a[_e110].trigger();
    }
  }

  function u() {
    var i = 0;

    for (var _n14 = 0; _n14 < a.length; _n14++) {
      var _t117 = [];
      if (a[_n14].links.length > 1) for (var _e111 = 1; _e111 < a[_n14].links.length; _e111++) {
        while (a[i].links.length > 0) {
          i++;
        }

        _t117.push(a[_n14].links[_e111]);

        var _o10 = a[_n14].links[_e111].getOtherPort(a[_n14]);

        r.patch.link(r, "trigger " + i, _o10.parent, _o10.name);
        i++;
      }

      for (var _e112 = 0; _e112 < _t117.length; _e112++) {
        _t117[_e112].remove();
      }
    }

    s();
  }
};

Ops.Sequence.prototype = new CABLES.Op();
CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"] = {
  f: Ops.Sequence,
  objName: "Ops.Sequence"
};

Ops.Gl.ShaderEffects.VertexDisplacementMap_v4 = function () {
  CABLES.Op.apply(this, arguments);
  var e = this;
  var t = {
    vertdisplace_body_vert: "\nvec2 MOD_tc=texCoord;\n\n#ifdef MOD_COORD_MESHXY\n    MOD_tc=pos.xy;\n#endif\n#ifdef MOD_COORD_MESHXZ\n    MOD_tc=pos.xz;\n#endif\n\n\n#ifdef MOD_FLIP_Y\n    MOD_tc.y=1.0-MOD_tc.y;\n#endif\n#ifdef MOD_FLIP_X\n    MOD_tc.x=1.0-MOD_tc.x;\n#endif\n#ifdef MOD_FLIP_XY\n    MOD_tc=1.0-MOD_tc;\n#endif\n\nMOD_tc*=MOD_scale;\n\nvec4 MOD_sample=texture2D( MOD_texture, vec2(MOD_tc.x+MOD_offsetX,MOD_tc.y+MOD_offsetY) );\nvec3 MOD_disp;\n\n#ifdef MOD_INPUT_R\n    MOD_disp=vec3(MOD_sample.r);\n#endif\n#ifdef MOD_INPUT_G\n    MOD_disp=vec3(MOD_sample.g);\n#endif\n#ifdef MOD_INPUT_B\n    MOD_disp=vec3(MOD_sample.b);\n#endif\n#ifdef MOD_INPUT_A\n    MOD_disp=vec3(MOD_sample.a);\n#endif\n#ifdef MOD_INPUT_RGB\n    MOD_disp=MOD_sample.rgb;\n#endif\n#ifdef MOD_INPUT_LUMI\n    MOD_disp=vec3(dot(vec3(0.2126,0.7152,0.0722), MOD_sample.rgb));\n#endif\n\n\n\n#ifdef MOD_HEIGHTMAP_INVERT\n   MOD_disp=1.0-MOD_disp;\n#endif\n// #ifdef MOD_HEIGHTMAP_NORMALIZE\n//   MOD_disp-=0.5;\n//   MOD_disp*=2.0;\n// #endif\n\n\n#ifdef MOD_HEIGHTMAP_NORMALIZE\n    MOD_disp=(MOD_disp-0.5)*2.0;\n    // MOD_disp=(MOD_disp-0.5)*-1.0+0.5;\n#endif\n\n\nfloat MOD_zero=0.0;\n\n#ifdef MOD_MODE_DIV\n    MOD_zero=1.0;\n#endif\n#ifdef MOD_MODE_MUL\n    MOD_zero=1.0;\n#endif\n\n\n\nvec3 MOD_mask=vec3(1.0);\n\n#ifdef MOD_AXIS_X\n    MOD_mask=vec3(1.,0.,0.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n#ifdef MOD_AXIS_Y\n    MOD_mask=vec3(0.,1.,0.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n#ifdef MOD_AXIS_Z\n    MOD_mask=vec3(0.,0.,1.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n#ifdef MOD_AXIS_XY\n    MOD_mask=vec3(1.,1.,0.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n#ifdef MOD_AXIS_XYZ\n    MOD_mask=vec3(1.,1.,1.);\n    MOD_disp*=MOD_mask*MOD_extrude;\n#endif\n\n\n// MOD_disp=smoothstep(-1.,1.,MOD_disp*MOD_disp*MOD_disp);\n// MOD_disp=MOD_disp*MOD_disp*MOD_disp;\n\n// #ifdef MOD_FLIP_Y\n//     MOD_mask.y=1.0-MOD_mask.y;\n// #endif\n// #ifdef MOD_FLIP_X\n//     MOD_mask.x=1.0-MOD_mask.x;\n// #endif\n// #ifdef MOD_FLIP_XY\n//     MOD_mask.xy=1.0-MOD_mask.xy;\n// #endif\n\n\n\n#ifdef MOD_MODE_DIV\n    pos.xyz/=MOD_disp*MOD_mask;\n#endif\n\n#ifdef MOD_MODE_MUL\n    pos.xyz*=MOD_disp*MOD_mask;\n#endif\n\n#ifdef MOD_MODE_ADD\n    pos.xyz+=MOD_disp*MOD_mask;\n#endif\n\n#ifdef MOD_MODE_NORMAL\n\n    vec3 MOD_t=norm;\n    #ifdef MOD_SMOOTHSTEP\n        MOD_t=smoothstep(-1.,1.,MOD_t);\n    #endif\n\n    pos.xyz+=MOD_t*MOD_disp*MOD_mask;\n\n#endif\n\n#ifdef MOD_MODE_TANGENT\n    MOD_disp*=-1.0;\n\n    vec3 MOD_t=attrTangent;\n    #ifdef MOD_SMOOTHSTEP\n        MOD_t=smoothstep(-1.,1.,MOD_t);\n    #endif\n\n    pos.xyz+=MOD_t*MOD_disp*MOD_mask;\n\n#endif\n\n#ifdef MOD_MODE_BITANGENT\n    MOD_disp*=-1.0;\n    vec3 MOD_t=attrBiTangent;\n\n    #ifdef MOD_SMOOTHSTEP\n        MOD_t=smoothstep(-1.,1.,MOD_t);\n    #endif\n\n    pos.xyz+=MOD_t*MOD_disp*MOD_mask;\n\n#endif\n\n\n// pos.y*=-1.0;\n    // pos.xy+=vec2(MOD_texVal*MOD_extrude)*normalize(pos.xy);\n\n\nMOD_displHeightMapColor=MOD_disp;\n\n\n#ifdef CALC_NORMALS\n    norm+=MOD_calcNormal(MOD_texture,MOD_tc);\n#endif",
    vertdisplace_head_vert: "OUT vec3 MOD_displHeightMapColor;\n\n// mat4 rotationX( in float angle ) {\n// \treturn mat4(\t1.0,\t\t0,\t\t\t0,\t\t\t0,\n// \t\t\t \t\t0, \tcos(angle),\t-sin(angle),\t\t0,\n// \t\t\t\t\t0, \tsin(angle),\t cos(angle),\t\t0,\n// \t\t\t\t\t0, \t\t\t0,\t\t\t  0, \t\t1);\n// }\n\n// mat4 rotationY( in float angle ) {\n// \treturn mat4(\tcos(angle),\t\t0,\t\tsin(angle),\t0,\n// \t\t\t \t\t\t\t0,\t\t1.0,\t\t\t 0,\t0,\n// \t\t\t\t\t-sin(angle),\t0,\t\tcos(angle),\t0,\n// \t\t\t\t\t\t\t0, \t\t0,\t\t\t\t0,\t1);\n// }\n\n// mat4 rotationZ( in float angle ) {\n// \treturn mat4(\tcos(angle),\t\t-sin(angle),\t0,\t0,\n// \t\t\t \t\tsin(angle),\t\tcos(angle),\t\t0,\t0,\n// \t\t\t\t\t\t\t0,\t\t\t\t0,\t\t1,\t0,\n// \t\t\t\t\t\t\t0,\t\t\t\t0,\t\t0,\t1);\n// }\n\n\nvec3 MOD_calcNormal(sampler2D tex,vec2 uv)\n{\n    float strength=13.0;\n    float texelSize=1.0/512.0;\n\n    float tl = abs(texture(tex, uv + texelSize * vec2(-1.0, -1.0)).x);   // top left\n    float  l = abs(texture(tex, uv + texelSize * vec2(-1.0,  0.0)).x);   // left\n    float bl = abs(texture(tex, uv + texelSize * vec2(-1.0,  1.0)).x);   // bottom left\n    float  t = abs(texture(tex, uv + texelSize * vec2( 0.0, -1.0)).x);   // top\n    float  b = abs(texture(tex, uv + texelSize * vec2( 0.0,  1.0)).x);   // bottom\n    float tr = abs(texture(tex, uv + texelSize * vec2( 1.0, -1.0)).x);   // top right\n    float  r = abs(texture(tex, uv + texelSize * vec2( 1.0,  0.0)).x);   // right\n    float br = abs(texture(tex, uv + texelSize * vec2( 1.0,  1.0)).x);   // bottom right\n\n    //     // Compute dx using Sobel:\n    //     //           -1 0 1\n    //     //           -2 0 2\n    //     //           -1 0 1\n    float dX = tr + 2.0*r + br -tl - 2.0*l - bl;\n\n    //     // Compute dy using Sobel:\n    //     //           -1 -2 -1\n    //     //            0  0  0\n    //     //            1  2  1\n    float dY = bl + 2.0*b + br -tl - 2.0*t - tr;\n\n    //     // Build the normalized normal\n\n    vec3 N = normalize(vec3(dX,dY, 1.0 / strength));\n\n    //     //convert (-1.0 , 1.0) to (0.0 , 1.0), if needed\n    N= N * 0.5 + 0.5;\n\n   return N;\n}\n"
  };

  var n = e.inTrigger("Render"),
      i = e.inValue("Extrude", .5),
      o = e.inSwitch("Mode", ["Norm", "Tang", "BiTang", "*", "+", "/"], "Norm"),
      r = e.inSwitch("Axis", ["XYZ", "XY", "X", "Y", "Z"], "XYZ"),
      a = e.inSwitch("Coordinates", ["Tex Coords", "Mesh XY", "Mesh XZ"], "Tex Coords"),
      l = e.inTexture("Texture", null, "texture"),
      s = e.inSwitch("Channel", ["Luminance", "R", "G", "B", "A", "RGB"], "Luminance"),
      f = e.inSwitch("Flip", ["None", "X", "Y", "XY"], "None"),
      u = e.inSwitch("Range", ["0-1", "1-0", "Normalized"], "0-1"),
      c = e.inValueFloat("Offset X"),
      g = e.inValueFloat("Offset Y"),
      d = e.inValueFloat("Scale", 1),
      m = e.inValueBool("Calc Normals", false),
      p = e.inValueBool("Discard Zero Values"),
      _ = e.inValueBool("colorize", false),
      h = e.inValueSlider("Colorize Min", 0),
      E = e.inValueSlider("Colorize Max", 1),
      x = e.outTrigger("trigger");

  var v = e.patch.cgl;
  e.setPortGroup("Input", [l, f, s, u, c, g, d]);
  e.setPortGroup("Colorize", [_, h, E]);
  e.toWorkPortsNeedToBeLinked(l, x, n);
  n.onTriggered = D;
  s.onChange = _.onChange = r.onChange = u.onChange = p.onChange = f.onChange = m.onChange = a.onChange = o.onChange = C;
  var T = t.vertdisplace_head_vert;
  var A = t.vertdisplace_body_vert;
  var S = "".endl() + "IN vec3 MOD_displHeightMapColor;".endl() + "float MOD_map(float value, float inMin, float inMax, float outMin, float outMax) { return outMin + (outMax - outMin) * (value - inMin) / (inMax - inMin);}".endl();
  var L = "".endl() + "#ifdef MOD_HEIGHTMAP_COLORIZE".endl() + "   col.rgb*=MOD_map( MOD_displHeightMapColor, 0.0,1.0 , MOD_colorizeMin,MOD_colorizeMax);".endl() + "#endif".endl() + "#ifdef MOD_DISPLACE_REMOVE_ZERO".endl() + "   if(MOD_displHeightMapColor.r==0.0)discard;".endl() + "#endif".endl();
  var I = new CGL.ShaderModifier(v, e.name);
  I.addModule({
    title: e.name,
    name: "MODULE_VERTEX_POSITION",
    srcHeadVert: T,
    srcBodyVert: A
  });
  I.addModule({
    title: e.name,
    name: "MODULE_COLOR",
    srcHeadFrag: S,
    srcBodyFrag: L
  });
  I.addUniformVert("t", "MOD_texture", 0);
  I.addUniformVert("f", "MOD_extrude", i);
  I.addUniformVert("f", "MOD_offsetX", c);
  I.addUniformVert("f", "MOD_offsetY", g);
  I.addUniformVert("f", "MOD_scale", d);
  I.addUniformFrag("f", "MOD_colorizeMin", h);
  I.addUniformFrag("f", "MOD_colorizeMax", E);
  C();

  function C() {
    I.toggleDefine("MOD_HEIGHTMAP_COLORIZE", _.get());
    I.toggleDefine("MOD_HEIGHTMAP_INVERT", u.get() == "1-0");
    I.toggleDefine("MOD_HEIGHTMAP_NORMALIZE", u.get() == "Normalized");
    I.toggleDefine("MOD_DISPLACE_REMOVE_ZERO", p.get());
    I.toggleDefine("MOD_INPUT_R", s.get() == "R");
    I.toggleDefine("MOD_INPUT_G", s.get() == "G");
    I.toggleDefine("MOD_INPUT_B", s.get() == "B");
    I.toggleDefine("MOD_INPUT_A", s.get() == "A");
    I.toggleDefine("MOD_INPUT_RGB", s.get() == "RGB");
    I.toggleDefine("MOD_INPUT_LUMI", s.get() == "Luminance");
    I.toggleDefine("MOD_FLIP_X", f.get() == "X");
    I.toggleDefine("MOD_FLIP_Y", f.get() == "Y");
    I.toggleDefine("MOD_FLIP_XY", f.get() == "XY");
    I.toggleDefine("MOD_AXIS_X", r.get() == "X");
    I.toggleDefine("MOD_AXIS_Y", r.get() == "Y");
    I.toggleDefine("MOD_AXIS_Z", r.get() == "Z");
    I.toggleDefine("MOD_AXIS_XYZ", r.get() == "XYZ");
    I.toggleDefine("MOD_AXIS_XY", r.get() == "XY");
    I.toggleDefine("MOD_MODE_BITANGENT", o.get() == "BiTang");
    I.toggleDefine("MOD_MODE_TANGENT", o.get() == "Tang");
    I.toggleDefine("MOD_MODE_NORMAL", o.get() == "Norm");
    I.toggleDefine("MOD_MODE_MUL", o.get() == "*");
    I.toggleDefine("MOD_MODE_ADD", o.get() == "+");
    I.toggleDefine("MOD_MODE_DIV", o.get() == "/");
    I.toggleDefine("MOD_SMOOTHSTEP", 0);
    I.toggleDefine("MOD_COORD_TC", a.get() == "Tex Coords");
    I.toggleDefine("MOD_COORD_MESHXY", a.get() == "Mesh XY");
    I.toggleDefine("MOD_COORD_MESHXZ", a.get() == "Mesh XZ");
    I.toggleDefine("CALC_NORMALS", m.get());
  }

  function D() {
    I.bind();
    if (l.get()) I.pushTexture("MOD_texture", l.get().tex);else I.pushTexture("MOD_texture", CGL.Texture.getEmptyTexture(v).tex);
    x.trigger();
    I.unbind();
  }
};

Ops.Gl.ShaderEffects.VertexDisplacementMap_v4.prototype = new CABLES.Op();
CABLES.OPS["ed36e5ad-457b-4ac6-a929-11b66951cb6c"] = {
  f: Ops.Gl.ShaderEffects.VertexDisplacementMap_v4,
  objName: "Ops.Gl.ShaderEffects.VertexDisplacementMap_v4"
};

Ops.Gl.Phong.PhongMaterial_v6 = function () {
  CABLES.Op.apply(this, arguments);
  var e = this;
  var l = {
    phong_frag: 'IN vec3 viewDirection;\nIN vec3 normInterpolated;\nIN vec2 texCoord;\n\n#ifdef ENABLE_FRESNEL\n    IN vec4 cameraSpace_pos;\n#endif\n\n// IN mat3 normalMatrix; // when instancing...\n\n#ifdef HAS_TEXTURE_NORMAL\n    IN mat3 TBN_Matrix; // tangent bitangent normal space transform matrix\n#endif\n\nIN vec3 fragPos;\nIN vec3 v_viewDirection;\n\nUNI vec4 inDiffuseColor;\nUNI vec4 inMaterialProperties;\n\n#ifdef ADD_EMISSIVE_COLOR\n    UNI vec4 inEmissiveColor; // .w = intensity\n#endif\n\n#ifdef ENABLE_FRESNEL\n    UNI mat4 viewMatrix;\n    UNI vec4 inFresnel;\n    UNI vec2 inFresnelWidthExponent;\n#endif\n\n#ifdef ENVMAP_MATCAP\n    IN vec3 viewSpaceNormal;\n    IN vec3 viewSpacePosition;\n#endif\n\nstruct Light {\n    vec3 color;\n    vec3 position;\n    vec3 specular;\n\n\n    // * SPOT LIGHT * //\n    #ifdef HAS_SPOT\n        vec3 conePointAt;\n        #define COSCONEANGLE x\n        #define COSCONEANGLEINNER y\n        #define SPOTEXPONENT z\n        vec3 spotProperties;\n    #endif\n\n    #define INTENSITY x\n    #define ATTENUATION y\n    #define FALLOFF z\n    #define RADIUS w\n    vec4 lightProperties;\n\n    int castLight;\n};\n\n/* CONSTANTS */\n#define NONE -1\n#define ALBEDO x\n#define ROUGHNESS y\n#define SHININESS z\n#define SPECULAR_AMT w\n#define NORMAL x\n#define AO y\n#define SPECULAR z\n#define EMISSIVE w\nconst float PI = 3.1415926535897932384626433832795;\nconst float TWO_PI = (2. * PI);\nconst float EIGHT_PI = (8. * PI);\n\n#define RECIPROCAL_PI 1./PI\n#define RECIPROCAL_PI2 RECIPROCAL_PI/2.\n\n// TEXTURES\n// #ifdef HAS_TEXTURES\n    UNI vec4 inTextureIntensities;\n\n    #ifdef HAS_TEXTURE_ENV\n        #ifdef TEX_FORMAT_CUBEMAP\n            UNI samplerCube texEnv;\n            #ifndef WEBGL1\n                #define SAMPLETEX textureLod\n            #endif\n            #ifdef WEBGL1\n                #define SAMPLETEX textureCubeLodEXT\n            #endif\n        #endif\n\n        #ifdef TEX_FORMAT_EQUIRECT\n            UNI sampler2D texEnv;\n            #ifdef WEBGL1\n                // #extension GL_EXT_shader_texture_lod : enable\n                #ifdef GL_EXT_shader_texture_lod\n                    #define textureLod texture2DLodEXT\n                #endif\n                // #define textureLod texture2D\n            #endif\n\n            #define SAMPLETEX sampleEquirect\n\n            const vec2 invAtan = vec2(0.1591, 0.3183);\n            vec4 sampleEquirect(sampler2D tex,vec3 direction,float lod)\n            {\n                #ifndef WEBGL1\n                    vec3 newDirection = normalize(direction);\n            \t\tvec2 sampleUV;\n            \t\tsampleUV.x = -1. * (atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.75);\n            \t\tsampleUV.y = asin( clamp(direction.y, -1., 1.) ) * RECIPROCAL_PI + 0.5;\n                #endif\n\n                #ifdef WEBGL1\n                    vec3 newDirection = normalize(direction);\n                \t\tvec2 sampleUV = vec2(atan(newDirection.z, newDirection.x), asin(newDirection.y+1e-6));\n                        sampleUV *= vec2(0.1591, 0.3183);\n                        sampleUV += 0.5;\n                #endif\n                return textureLod(tex, sampleUV, lod);\n            }\n        #endif\n        #ifdef ENVMAP_MATCAP\n            UNI sampler2D texEnv;\n            #ifdef WEBGL1\n                // #extension GL_EXT_shader_texture_lod : enable\n                #ifdef GL_EXT_shader_texture_lod\n                    #define textureLod texture2DLodEXT\n                #endif\n                // #define textureLod texture2D\n            #endif\n\n\n            // * taken & modified from https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderLib/meshmatcap_frag.glsl.js\n            vec2 getMatCapUV(vec3 viewSpacePosition, vec3 viewSpaceNormal) {\n                vec3 viewDir = normalize(-viewSpacePosition);\n            \tvec3 x = normalize(vec3(viewDir.z, 0.0, - viewDir.x));\n            \tvec3 y = normalize(cross(viewDir, x));\n            \tvec2 uv = vec2(dot(x, viewSpaceNormal), dot(y, viewSpaceNormal)) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\n            \treturn uv;\n            }\n        #endif\n\n        UNI float inEnvMapIntensity;\n        UNI float inEnvMapWidth;\n    #endif\n\n    #ifdef HAS_TEXTURE_LUMINANCE_MASK\n        UNI sampler2D texLuminance;\n        UNI float inLuminanceMaskIntensity;\n    #endif\n\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D texDiffuse;\n    #endif\n\n    #ifdef HAS_TEXTURE_SPECULAR\n        UNI sampler2D texSpecular;\n    #endif\n\n    #ifdef HAS_TEXTURE_NORMAL\n        UNI sampler2D texNormal;\n    #endif\n\n    #ifdef HAS_TEXTURE_AO\n        UNI sampler2D texAO;\n    #endif\n\n    #ifdef HAS_TEXTURE_EMISSIVE\n        UNI sampler2D texEmissive;\n    #endif\n\n    #ifdef HAS_TEXTURE_EMISSIVE_MASK\n        UNI sampler2D texMaskEmissive;\n        UNI float inEmissiveMaskIntensity;\n    #endif\n    #ifdef HAS_TEXTURE_ALPHA\n        UNI sampler2D texAlpha;\n    #endif\n// #endif\n\n{{MODULES_HEAD}}\n\nfloat when_gt(float x, float y) { return max(sign(x - y), 0.0); } // comparator function\nfloat when_lt(float x, float y) { return max(sign(y - x), 0.0); }\nfloat when_eq(float x, float y) { return 1. - abs(sign(x - y)); } // comparator function\nfloat when_neq(float x, float y) { return abs(sign(x - y)); } // comparator function\nfloat when_ge(float x, float y) { return 1.0 - when_lt(x, y); }\nfloat when_le(float x, float y) { return 1.0 - when_gt(x, y); }\n\n#ifdef FALLOFF_MODE_A\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        // * original falloff\n        float denom = distance / radius + 1.0;\n        float attenuation = 1.0 / (denom*denom);\n        float t = (attenuation - falloff) / (1.0 - falloff);\n        return max(t, 0.0);\n    }\n#endif\n\n#ifdef FALLOFF_MODE_B\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        float distanceSquared = dot(lightDirection, lightDirection);\n        float factor = distanceSquared * falloff;\n        float smoothFactor = clamp(1. - factor * factor, 0., 1.);\n        float attenuation = smoothFactor * smoothFactor;\n\n        return attenuation * 1. / max(distanceSquared, 0.00001);\n    }\n#endif\n\n#ifdef FALLOFF_MODE_C\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        // https://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf\n        float falloffNumerator = 1. - pow(distance/radius, 4.);\n        falloffNumerator = clamp(falloffNumerator, 0., 1.);\n        falloffNumerator *= falloffNumerator;\n\n        float denominator = distance*distance + falloff;\n\n        return falloffNumerator/denominator;\n    }\n#endif\n\n#ifdef FALLOFF_MODE_D\n    float CalculateFalloff(float distance, vec3 lightDirection, float falloff, float radius) {\n        // inverse square falloff, "physically correct"\n        return 1.0 / max(distance * distance, 0.0001);\n    }\n#endif\n\n#ifdef ENABLE_FRESNEL\n    float CalculateFresnel(vec3 direction, vec3 normal)\n    {\n        vec3 nDirection = normalize( direction );\n        vec3 nNormal = normalize( mat3(viewMatrix) * normal );\n        vec3 halfDirection = normalize( nNormal + nDirection );\n\n        float cosine = dot( halfDirection, nDirection );\n        float product = max( cosine, 0.0 );\n        float factor = pow(product, inFresnelWidthExponent.y);\n\n        return 5. * factor;\n    }\n#endif\n\n#ifdef CONSERVE_ENERGY\n    // http://www.rorydriscoll.com/2009/01/25/energy-conservation-in-games/\n    // http://www.farbrausch.de/~fg/articles/phong.pdf\n    float EnergyConservation(float shininess) {\n        #ifdef SPECULAR_PHONG\n            return (shininess + 2.)/TWO_PI;\n        #endif\n        #ifdef SPECULAR_BLINN\n            return (shininess + 8.)/EIGHT_PI;\n        #endif\n\n        #ifdef SPECULAR_SCHLICK\n            return (shininess + 8.)/EIGHT_PI;\n        #endif\n\n        #ifdef SPECULAR_GAUSS\n            return (shininess + 8.)/EIGHT_PI;\n        #endif\n    }\n#endif\n\n#ifdef ENABLE_OREN_NAYAR_DIFFUSE\n    float CalculateOrenNayar(vec3 lightDirection, vec3 viewDirection, vec3 normal) {\n        float LdotV = dot(lightDirection, viewDirection);\n        float NdotL = dot(lightDirection, normal);\n        float NdotV = dot(normal, viewDirection);\n\n        float albedo = inMaterialProperties.ALBEDO;\n        albedo *= 1.8;\n        float s = LdotV - NdotL * NdotV;\n        float t = mix(1., max(NdotL, NdotV), step(0., s));\n\n        float roughness = inMaterialProperties.ROUGHNESS;\n        float sigma2 = roughness * roughness;\n        float A = 1. + sigma2 * (albedo / (sigma2 + 0.13) + 0.5 / (sigma2 + 0.33));\n        float B = 0.45 * sigma2 / (sigma2 + 0.09);\n\n        float factor = albedo * max(0., NdotL) * (A + B * s / t) / PI;\n\n        return factor;\n\n    }\n#endif\n\nvec3 CalculateDiffuseColor(\n    vec3 lightDirection,\n    vec3 viewDirection,\n    vec3 normal,\n    vec3 lightColor,\n    vec3 materialColor,\n    inout float lambert\n) {\n    #ifndef ENABLE_OREN_NAYAR_DIFFUSE\n        lambert = clamp(dot(lightDirection, normal), 0., 1.);\n    #endif\n\n    #ifdef ENABLE_OREN_NAYAR_DIFFUSE\n        lambert = CalculateOrenNayar(lightDirection, viewDirection, normal);\n    #endif\n\n    vec3 diffuseColor = lambert * lightColor * materialColor;\n    return diffuseColor;\n}\n\nvec3 CalculateSpecularColor(\n    vec3 specularColor,\n    float specularCoefficient,\n    float shininess,\n    vec3 lightDirection,\n    vec3 viewDirection,\n    vec3 normal,\n    float lambertian\n) {\n    vec3 resultColor = vec3(0.);\n\n    #ifdef SPECULAR_PHONG\n        vec3 reflectDirection = reflect(-lightDirection, normal);\n        float specularAngle = max(dot(reflectDirection, viewDirection), 0.);\n        float specularFactor = pow(specularAngle, max(0., shininess));\n    resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef SPECULAR_BLINN\n        vec3 halfDirection = normalize(lightDirection + viewDirection);\n        float specularAngle = max(dot(halfDirection, normal), 0.);\n        float specularFactor = pow(specularAngle, max(0., shininess));\n        resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef SPECULAR_SCHLICK\n        vec3 halfDirection = normalize(lightDirection + viewDirection);\n        float specularAngle = dot(halfDirection, normal);\n        float schlickShininess = max(0., shininess);\n        float specularFactor = specularAngle / (schlickShininess - schlickShininess*specularAngle + specularAngle);\n        resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef SPECULAR_GAUSS\n        vec3 halfDirection = normalize(lightDirection + viewDirection);\n        float specularAngle = acos(max(dot(halfDirection, normal), 0.));\n        float exponent = specularAngle * shininess * 0.17;\n        exponent = -(exponent*exponent);\n        float specularFactor = exp(exponent);\n\n        resultColor = lambertian * specularFactor * specularCoefficient * specularColor;\n    #endif\n\n    #ifdef CONSERVE_ENERGY\n        float conserveEnergyFactor = EnergyConservation(shininess);\n        resultColor = conserveEnergyFactor * resultColor;\n    #endif\n\n    return resultColor;\n}\n\n#ifdef HAS_SPOT\n    float CalculateSpotLightEffect(vec3 lightPosition, vec3 conePointAt, float cosConeAngle, float cosConeAngleInner, float spotExponent, vec3 lightDirection) {\n        vec3 spotLightDirection = normalize(lightPosition-conePointAt);\n        float spotAngle = dot(-lightDirection, spotLightDirection);\n        float epsilon = cosConeAngle - cosConeAngleInner;\n\n        float spotIntensity = clamp((spotAngle - cosConeAngle)/epsilon, 0.0, 1.0);\n        spotIntensity = pow(spotIntensity, max(0.01, spotExponent));\n\n        return max(0., spotIntensity);\n    }\n#endif\n\n\n\n{{PHONG_FRAGMENT_HEAD}}\n\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n\n    vec4 col=vec4(0., 0., 0., inDiffuseColor.a);\n    vec3 calculatedColor = vec3(0.);\n    vec3 normal = normalize(normInterpolated);\n    vec3 baseColor = inDiffuseColor.rgb;\n\n    {{MODULE_BASE_COLOR}}\n\n\n    vec3 viewDirection = normalize(v_viewDirection);\n\n    #ifdef DOUBLE_SIDED\n        if(!gl_FrontFacing) normal = normal * -1.0;\n    #endif\n\n    #ifdef HAS_TEXTURES\n        #ifdef HAS_TEXTURE_DIFFUSE\n            baseColor = texture(texDiffuse, texCoord).rgb;\n\n            #ifdef COLORIZE_TEXTURE\n                baseColor *= inDiffuseColor.rgb;\n            #endif\n        #endif\n\n        #ifdef HAS_TEXTURE_NORMAL\n            normal = texture(texNormal, texCoord).rgb;\n            normal = normalize(normal * 2. - 1.);\n            float normalIntensity = inTextureIntensities.NORMAL;\n            normal = normalize(mix(vec3(0., 0., 1.), normal, 2. * normalIntensity));\n            normal = normalize(TBN_Matrix * normal);\n        #endif\n    #endif\n\n    {{PHONG_FRAGMENT_BODY}}\n\n\n\n\n\n\n    #ifdef ENABLE_FRESNEL\n        calculatedColor += inFresnel.rgb * (CalculateFresnel(vec3(cameraSpace_pos), normal) * inFresnel.w * inFresnelWidthExponent.x);\n    #endif\n\n     #ifdef HAS_TEXTURE_ALPHA\n        #ifdef ALPHA_MASK_ALPHA\n            col.a*=texture(texAlpha,texCoord).a;\n        #endif\n        #ifdef ALPHA_MASK_LUMI\n            col.a*= dot(vec3(0.2126,0.7152,0.0722), texture(texAlpha,texCoord).rgb);\n        #endif\n        #ifdef ALPHA_MASK_R\n            col.a*=texture(texAlpha,texCoord).r;\n        #endif\n        #ifdef ALPHA_MASK_G\n            col.a*=texture(texAlpha,texCoord).g;\n        #endif\n        #ifdef ALPHA_MASK_B\n            col.a*=texture(texAlpha,texCoord).b;\n        #endif\n    #endif\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n\n    #ifdef HAS_TEXTURE_ENV\n        vec3 luminanceColor = vec3(0.);\n\n        #ifndef ENVMAP_MATCAP\n            float environmentMapWidth = inEnvMapWidth;\n            float glossyExponent = inMaterialProperties.SHININESS;\n            float glossyCoefficient = inMaterialProperties.SPECULAR_AMT;\n\n            vec3 envMapNormal =  normal;\n            vec3 reflectDirection = reflect(normalize(-viewDirection), normal);\n\n            float lambertianCoefficient = dot(viewDirection, reflectDirection); //0.44; // TODO: need prefiltered map for this\n            // lambertianCoefficient = 1.;\n            float specularAngle = max(dot(reflectDirection, viewDirection), 0.);\n            float specularFactor = pow(specularAngle, max(0., inMaterialProperties.SHININESS));\n\n            glossyExponent = specularFactor;\n\n            float maxMIPLevel = 10.;\n            float MIPlevel = log2(environmentMapWidth / 1024. * sqrt(3.)) - 0.5 * log2(glossyExponent + 1.);\n\n            luminanceColor = inEnvMapIntensity * (\n                inDiffuseColor.rgb *\n                SAMPLETEX(texEnv, envMapNormal, maxMIPLevel).rgb\n                +\n                glossyCoefficient * SAMPLETEX(texEnv, reflectDirection, MIPlevel).rgb\n            );\n        #endif\n        #ifdef ENVMAP_MATCAP\n            luminanceColor = inEnvMapIntensity * (\n                texture(texEnv, getMatCapUV(viewSpacePosition, viewSpaceNormal)).rgb\n                //inDiffuseColor.rgb\n                //* textureLod(texEnv, getMatCapUV(envMapNormal), maxMIPLevel).rgb\n                //+\n                //glossyCoefficient * textureLod(texEnv, getMatCapUV(reflectDirection), MIPlevel).rgb\n            );\n        #endif\n\n\n\n        #ifdef HAS_TEXTURE_LUMINANCE_MASK\n            luminanceColor *= texture(texLuminance, texCoord).r * inLuminanceMaskIntensity;\n        #endif\n\n        #ifdef HAS_TEXTURE_AO\n            // luminanceColor *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n            luminanceColor *= texture(texAO, texCoord).g* inTextureIntensities.AO;\n        #endif\n\n        calculatedColor.rgb += luminanceColor;\n\n\n    #endif\n\n    #ifdef ADD_EMISSIVE_COLOR\n        vec3 emissiveRadiance = mix(calculatedColor, inEmissiveColor.rgb, inEmissiveColor.w); // .w = intensity of color;\n\n        #ifdef HAS_TEXTURE_EMISSIVE\n            float emissiveIntensity = inTextureIntensities.EMISSIVE;\n            emissiveRadiance = mix(calculatedColor, texture(texEmissive, texCoord).rgb, emissiveIntensity);\n        #endif\n\n        #ifdef HAS_TEXTURE_EMISSIVE_MASK\n           float emissiveMixValue = mix(1., texture(texMaskEmissive, texCoord).r, inEmissiveMaskIntensity);\n           calculatedColor = mix(calculatedColor, emissiveRadiance, emissiveMixValue);\n        #endif\n\n        #ifndef HAS_TEXTURE_EMISSIVE_MASK\n            calculatedColor = emissiveRadiance;\n        #endif\n    #endif\n\n    col.rgb = clamp(calculatedColor, 0., 1.);\n\n\n    {{MODULE_COLOR}}\n\n    outColor = col;\n}\n',
    phong_vert: "\n{{MODULES_HEAD}}\n\n#define NONE -1\n#define AMBIENT 0\n#define POINT 1\n#define DIRECTIONAL 2\n#define SPOT 3\n\n#define TEX_REPEAT_X x;\n#define TEX_REPEAT_Y y;\n#define TEX_OFFSET_X z;\n#define TEX_OFFSET_Y w;\n\nIN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\nIN float attrVertIndex;\nIN vec3 attrTangent;\nIN vec3 attrBiTangent;\n\nOUT vec2 texCoord;\nOUT vec3 normInterpolated;\nOUT vec3 fragPos;\n\n#ifdef HAS_TEXTURE_NORMAL\n    OUT mat3 TBN_Matrix; // tangent bitangent normal space transform matrix\n#endif\n\n#ifdef ENABLE_FRESNEL\n    OUT vec4 cameraSpace_pos;\n#endif\n\nOUT vec3 v_viewDirection;\nOUT mat3 normalMatrix;\nOUT mat4 mvMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI vec4 inTextureRepeatOffset;\n#endif\n\nUNI vec3 camPos;\nUNI mat4 projMatrix;\nUNI mat4 viewMatrix;\nUNI mat4 modelMatrix;\n\n#ifdef ENVMAP_MATCAP\n    OUT vec3 viewSpaceNormal;\n    OUT vec3 viewSpacePosition;\n#endif\n\n\nmat3 transposeMat3(mat3 m)\n{\n    return mat3(m[0][0], m[1][0], m[2][0],\n        m[0][1], m[1][1], m[2][1],\n        m[0][2], m[1][2], m[2][2]);\n}\n\nmat3 inverseMat3(mat3 m)\n{\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\n\n    float b01 = a22 * a11 - a12 * a21;\n    float b11 = -a22 * a10 + a12 * a20;\n    float b21 = a21 * a10 - a11 * a20;\n\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\n\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\n}\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    vec4 pos=vec4(vPosition,  1.0);\n\n    texCoord=attrTexCoord;\n    texCoord.y = 1. - texCoord.y;\n    vec3 norm=attrVertNormal;\n\n    vec3 tangent = attrTangent;\n    vec3 bitangent = attrBiTangent;\n\n    {{MODULE_VERTEX_POSITION}}\n\n    normalMatrix = transposeMat3(inverseMat3(mat3(mMatrix)));\n    mvMatrix = (viewMatrix * mMatrix);\n\n\n\n    #ifdef ENABLE_FRESNEL\n        cameraSpace_pos = mvMatrix * pos;\n    #endif\n\n    #ifdef HAS_TEXTURES\n        float repeatX = inTextureRepeatOffset.TEX_REPEAT_X;\n        float offsetX = inTextureRepeatOffset.TEX_OFFSET_X;\n        float repeatY = inTextureRepeatOffset.TEX_REPEAT_Y;\n        float offsetY = inTextureRepeatOffset.TEX_OFFSET_Y;\n\n        texCoord.x *= repeatX;\n        texCoord.x += offsetX;\n        texCoord.y *= repeatY;\n        texCoord.y += offsetY;\n    #endif\n\n   normInterpolated = vec3(normalMatrix*norm);\n\n    #ifdef HAS_TEXTURE_NORMAL\n        vec3 normCameraSpace = normalize((vec4(normInterpolated, 0.0)).xyz);\n        vec3 tangCameraSpace = normalize((mMatrix * vec4(tangent, 0.0)).xyz);\n        vec3 bitangCameraSpace = normalize((mMatrix * vec4(bitangent, 0.0)).xyz);\n\n        // re orthogonalization for smoother normals\n        tangCameraSpace = normalize(tangCameraSpace - dot(tangCameraSpace, normCameraSpace) * normCameraSpace);\n        bitangCameraSpace = cross(normCameraSpace, tangCameraSpace);\n\n        TBN_Matrix = mat3(tangCameraSpace, bitangCameraSpace, normCameraSpace);\n    #endif\n\n    fragPos = vec3((mMatrix) * pos);\n    v_viewDirection = normalize(camPos - fragPos);\n    // modelPos=mMatrix*pos;\n\n    #ifdef ENVMAP_MATCAP\n        mat3 viewSpaceNormalMatrix = normalMatrix = transposeMat3(inverseMat3(mat3(mvMatrix)));\n        viewSpaceNormal = normalize(viewSpaceNormalMatrix * norm);\n        viewSpacePosition = vec3(mvMatrix * pos);\n    #endif\n    gl_Position = projMatrix * mvMatrix * pos;\n}\n",
    snippet_body_ambient_frag: "    // * AMBIENT LIGHT {{LIGHT_INDEX}} *\n    vec3 diffuseColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY*phongLight{{LIGHT_INDEX}}.color;\n    calculatedColor += diffuseColor{{LIGHT_INDEX}};\n",
    snippet_body_directional_frag: "    // * DIRECTIONAL LIGHT {{LIGHT_INDEX}} *\n\n    if (phongLight{{LIGHT_INDEX}}.castLight == 1) {\n        vec3 phongLightDirection{{LIGHT_INDEX}} = normalize(phongLight{{LIGHT_INDEX}}.position);\n\n        float phongLambert{{LIGHT_INDEX}} = 1.; // inout variable\n\n        vec3 lightColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.color;\n        vec3 lightSpecular{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.specular;\n\n        #ifdef HAS_TEXTURES\n            #ifdef HAS_TEXTURE_AO\n                // lightColor{{LIGHT_INDEX}} *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n                lightColor{{LIGHT_INDEX}} *= texture(texAO, texCoord).g, inTextureIntensities.AO;\n\n            #endif\n\n            #ifdef HAS_TEXTURE_SPECULAR\n                lightSpecular{{LIGHT_INDEX}} *= mix(1., texture(texSpecular, texCoord).r, inTextureIntensities.SPECULAR);\n            #endif\n        #endif\n\n        vec3 diffuseColor{{LIGHT_INDEX}} = CalculateDiffuseColor(phongLightDirection{{LIGHT_INDEX}}, viewDirection, normal, lightColor{{LIGHT_INDEX}}, baseColor, phongLambert{{LIGHT_INDEX}});\n        vec3 specularColor{{LIGHT_INDEX}} = CalculateSpecularColor(\n            lightSpecular{{LIGHT_INDEX}},\n            inMaterialProperties.SPECULAR_AMT,\n            inMaterialProperties.SHININESS,\n            phongLightDirection{{LIGHT_INDEX}},\n            viewDirection,\n            normal,\n            phongLambert{{LIGHT_INDEX}}\n        );\n\n        vec3 combinedColor{{LIGHT_INDEX}} = (diffuseColor{{LIGHT_INDEX}} + specularColor{{LIGHT_INDEX}});\n\n        vec3 lightModelDiff{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n\n        combinedColor{{LIGHT_INDEX}} *= phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY;\n        calculatedColor += combinedColor{{LIGHT_INDEX}};\n    }",
    snippet_body_point_frag: "// * POINT LIGHT {{LIGHT_INDEX}} *\n    if (phongLight{{LIGHT_INDEX}}.castLight == 1) {\n        vec3 phongLightDirection{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n        // * get length before normalization for falloff calculation\n        phongLightDirection{{LIGHT_INDEX}} = normalize(phongLightDirection{{LIGHT_INDEX}});\n        float phongLightDistance{{LIGHT_INDEX}} = length(phongLightDirection{{LIGHT_INDEX}});\n\n        float phongLambert{{LIGHT_INDEX}} = 1.; // inout variable\n\n        vec3 lightColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.color;\n        vec3 lightSpecular{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.specular;\n\n        #ifdef HAS_TEXTURES\n            #ifdef HAS_TEXTURE_AO\n                // lightColor{{LIGHT_INDEX}} *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n                lightColor{{LIGHT_INDEX}} *= texture(texAO, texCoord).g, inTextureIntensities.AO;\n\n            #endif\n\n            #ifdef HAS_TEXTURE_SPECULAR\n                lightSpecular{{LIGHT_INDEX}} *= mix(1., texture(texSpecular, texCoord).r, inTextureIntensities.SPECULAR);\n            #endif\n        #endif\n\n        vec3 diffuseColor{{LIGHT_INDEX}} = CalculateDiffuseColor(phongLightDirection{{LIGHT_INDEX}}, viewDirection, normal, lightColor{{LIGHT_INDEX}}, baseColor, phongLambert{{LIGHT_INDEX}});\n        vec3 specularColor{{LIGHT_INDEX}} = CalculateSpecularColor(\n            lightSpecular{{LIGHT_INDEX}},\n            inMaterialProperties.SPECULAR_AMT,\n            inMaterialProperties.SHININESS,\n            phongLightDirection{{LIGHT_INDEX}},\n            viewDirection,\n            normal,\n            phongLambert{{LIGHT_INDEX}}\n        );\n\n        vec3 combinedColor{{LIGHT_INDEX}} = (diffuseColor{{LIGHT_INDEX}} + specularColor{{LIGHT_INDEX}});\n\n        combinedColor{{LIGHT_INDEX}} *= phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY;\n\n        float attenuation{{LIGHT_INDEX}} = CalculateFalloff(\n            phongLightDistance{{LIGHT_INDEX}},\n            phongLightDirection{{LIGHT_INDEX}},\n            phongLight{{LIGHT_INDEX}}.lightProperties.FALLOFF,\n            phongLight{{LIGHT_INDEX}}.lightProperties.RADIUS\n        );\n\n        attenuation{{LIGHT_INDEX}} *= when_gt(phongLambert{{LIGHT_INDEX}}, 0.);\n        combinedColor{{LIGHT_INDEX}} *= attenuation{{LIGHT_INDEX}};\n\n        calculatedColor += combinedColor{{LIGHT_INDEX}};\n    }\n",
    snippet_body_spot_frag: "    // * SPOT LIGHT {{LIGHT_INDEX}} *\n    if (phongLight{{LIGHT_INDEX}}.castLight == 1) {\n        vec3 phongLightDirection{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n        phongLightDirection{{LIGHT_INDEX}} = normalize( phongLightDirection{{LIGHT_INDEX}});\n        float phongLightDistance{{LIGHT_INDEX}} = length(phongLightDirection{{LIGHT_INDEX}});\n\n        float phongLambert{{LIGHT_INDEX}} = 1.; // inout variable\n\n        vec3 lightColor{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.color;\n        vec3 lightSpecular{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.specular;\n\n        #ifdef HAS_TEXTURES\n            #ifdef HAS_TEXTURE_AO\n                // lightColor{{LIGHT_INDEX}} *= mix(vec3(1.), texture(texAO, texCoord).rgb, inTextureIntensities.AO);\n                lightColor{{LIGHT_INDEX}} *= texture(texAO, texCoord).g, inTextureIntensities.AO;\n\n            #endif\n\n            #ifdef HAS_TEXTURE_SPECULAR\n                lightSpecular{{LIGHT_INDEX}} *= mix(1., texture(texSpecular, texCoord).r, inTextureIntensities.SPECULAR);\n            #endif\n        #endif\n\n        vec3 diffuseColor{{LIGHT_INDEX}} = CalculateDiffuseColor(phongLightDirection{{LIGHT_INDEX}}, viewDirection, normal, lightColor{{LIGHT_INDEX}}, baseColor, phongLambert{{LIGHT_INDEX}});\n        vec3 specularColor{{LIGHT_INDEX}} = CalculateSpecularColor(\n            lightSpecular{{LIGHT_INDEX}},\n            inMaterialProperties.SPECULAR_AMT,\n            inMaterialProperties.SHININESS,\n            phongLightDirection{{LIGHT_INDEX}},\n            viewDirection,\n            normal,\n            phongLambert{{LIGHT_INDEX}}\n        );\n\n        vec3 combinedColor{{LIGHT_INDEX}} = (diffuseColor{{LIGHT_INDEX}} + specularColor{{LIGHT_INDEX}});\n\n        float spotIntensity{{LIGHT_INDEX}} = CalculateSpotLightEffect(\n            phongLight{{LIGHT_INDEX}}.position, phongLight{{LIGHT_INDEX}}.conePointAt, phongLight{{LIGHT_INDEX}}.spotProperties.COSCONEANGLE,\n            phongLight{{LIGHT_INDEX}}.spotProperties.COSCONEANGLEINNER, phongLight{{LIGHT_INDEX}}.spotProperties.SPOTEXPONENT,\n            phongLightDirection{{LIGHT_INDEX}}\n        );\n\n        combinedColor{{LIGHT_INDEX}} *= spotIntensity{{LIGHT_INDEX}};\n\n        vec3 lightModelDiff{{LIGHT_INDEX}} = phongLight{{LIGHT_INDEX}}.position - fragPos.xyz;\n\n        float attenuation{{LIGHT_INDEX}} = CalculateFalloff(\n            phongLightDistance{{LIGHT_INDEX}},\n            phongLightDirection{{LIGHT_INDEX}},\n            phongLight{{LIGHT_INDEX}}.lightProperties.FALLOFF,\n            phongLight{{LIGHT_INDEX}}.lightProperties.RADIUS\n        );\n\n        attenuation{{LIGHT_INDEX}} *= when_gt(phongLambert{{LIGHT_INDEX}}, 0.);\n\n        combinedColor{{LIGHT_INDEX}} *= attenuation{{LIGHT_INDEX}};\n\n        combinedColor{{LIGHT_INDEX}} *= phongLight{{LIGHT_INDEX}}.lightProperties.INTENSITY;\n        calculatedColor += combinedColor{{LIGHT_INDEX}};\n    }",
    snippet_head_frag: "UNI Light phongLight{{LIGHT_INDEX}};\n"
  };
  var t = e.patch.cgl;
  var n = l.snippet_head_frag;
  var i = {
    point: l.snippet_body_point_frag,
    spot: l.snippet_body_spot_frag,
    ambient: l.snippet_body_ambient_frag,
    directional: l.snippet_body_directional_frag,
    area: l.snippet_body_area_frag
  };
  var o = new RegExp("{{LIGHT_INDEX}}", "g");

  var s = function s(e) {
    return n.replace("{{LIGHT_INDEX}}", e);
  };

  var f = function f(e, t) {
    return i[t].replace(o, e);
  };

  function r() {
    var e = l.phong_vert;
    var t = l.phong_frag;
    var n = "";
    var i = "";
    n = n.concat(s(0));
    i = i.concat(f(0, it[0].type));
    t = t.replace(pe, n);
    t = t.replace(_e, i);
    de.setSource(e, t);
    de.define("HAS_POINT");
    de.removeDefine("HAS_SPOT");
    de.removeDefine("HAS_DIRECTIONAL");
    de.removeDefine("HAS_AMBIENT");
  }

  var a = e.inTrigger("Trigger In");
  var u = e.inFloat("R", Math.random());
  var c = e.inFloat("G", Math.random());
  var g = e.inFloat("B", Math.random());
  var d = e.inFloatSlider("A", 1);
  var m = [u, c, g, d];
  e.setPortGroup("Diffuse Color", m);
  var p = e.inBool("Enable", false);

  var _ = e.inFloatSlider("Albedo", .707);

  var h = e.inFloatSlider("Roughness", .835);
  p.setUiAttribs({
    hidePort: true
  });

  _.setUiAttribs({
    greyout: true
  });

  h.setUiAttribs({
    greyout: true
  });
  u.setUiAttribs({
    colorPick: true
  });
  e.setPortGroup("Oren-Nayar Diffuse", [p, _, h]);

  p.onChange = function () {
    de.toggleDefine("ENABLE_OREN_NAYAR_DIFFUSE", p);

    _.setUiAttribs({
      greyout: !p.get()
    });

    h.setUiAttribs({
      greyout: !p.get()
    });
  };

  var E = e.inValueBool("Active", false);
  E.setUiAttribs({
    hidePort: true
  });
  var x = e.inValueSlider("Fresnel Intensity", .7);
  var v = e.inFloat("Fresnel Width", 1);
  var T = e.inFloat("Fresnel Exponent", 6);
  var A = e.inFloat("Fresnel R", 1);
  var S = e.inFloat("Fresnel G", 1);
  var L = e.inFloat("Fresnel B", 1);
  A.setUiAttribs({
    colorPick: true
  });
  var I = [x, v, T, A, S, L];
  I.forEach(function (e) {
    e.setUiAttribs({
      greyout: true
    });
  });
  e.setPortGroup("Fresnel", I.concat([E]));
  var C = null;
  var D = null;

  E.onChange = function () {
    de.toggleDefine("ENABLE_FRESNEL", E);

    if (E.get()) {
      if (!C) C = new CGL.Uniform(de, "4f", "inFresnel", A, S, L, x);
      if (!D) D = new CGL.Uniform(de, "2f", "inFresnelWidthExponent", v, T);
    } else {
      if (C) {
        de.removeUniform("inFresnel");
        C = null;
      }

      if (D) {
        de.removeUniform("inFresnelWidthExponent");
        D = null;
      }
    }

    I.forEach(function (e) {
      e.setUiAttribs({
        greyout: !E.get()
      });
    });
  };

  var O = e.inBool("Emissive Active", false);
  var M = e.inFloatSlider("Color Intensity", .3);
  var N = e.inFloatSlider("Emissive R", Math.random());
  var b = e.inFloatSlider("Emissive G", Math.random());
  var U = e.inFloatSlider("Emissive B", Math.random());
  N.setUiAttribs({
    colorPick: true
  });
  e.setPortGroup("Emissive Color", [O, M, N, b, U]);
  M.setUiAttribs({
    greyout: !O.get()
  });
  N.setUiAttribs({
    greyout: !O.get()
  });
  b.setUiAttribs({
    greyout: !O.get()
  });
  U.setUiAttribs({
    greyout: !O.get()
  });
  var P = null;

  O.onChange = function () {
    e.log("emissive active on change");
    de.toggleDefine("ADD_EMISSIVE_COLOR", O);

    if (O.get()) {
      P = new CGL.Uniform(de, "4f", "inEmissiveColor", N, b, U, M);
      j.setUiAttribs({
        greyout: false
      });
      W.setUiAttribs({
        greyout: false
      });
      if (j.get()) re.setUiAttribs({
        greyout: false
      });
      if (W.get()) ae.setUiAttribs({
        greyout: false
      });
    } else {
      e.log("ayayay");
      j.setUiAttribs({
        greyout: true
      });
      W.setUiAttribs({
        greyout: true
      });
      re.setUiAttribs({
        greyout: true
      });
      ae.setUiAttribs({
        greyout: true
      });
      de.removeUniform("inEmissiveColor");
      P = null;
    }

    if (j.get()) {
      M.setUiAttribs({
        greyout: true
      });
      N.setUiAttribs({
        greyout: true
      });
      b.setUiAttribs({
        greyout: true
      });
      U.setUiAttribs({
        greyout: true
      });
    } else {
      if (O.get()) {
        M.setUiAttribs({
          greyout: false
        });
        N.setUiAttribs({
          greyout: false
        });
        b.setUiAttribs({
          greyout: false
        });
        U.setUiAttribs({
          greyout: false
        });
      } else {
        M.setUiAttribs({
          greyout: true
        });
        N.setUiAttribs({
          greyout: true
        });
        b.setUiAttribs({
          greyout: true
        });
        U.setUiAttribs({
          greyout: true
        });
      }
    }
  };

  var G = e.inFloat("Shininess", 4);
  var y = e.inFloatSlider("Specular Amount", .5);
  var R = e.inSwitch("Specular Model", ["Blinn", "Schlick", "Phong", "Gauss"], "Blinn");
  R.setUiAttribs({
    hidePort: true
  });
  var X = [G, y, R];
  e.setPortGroup("Specular", X);
  var H = e.inValueBool("Energy Conservation", false);
  var w = e.inBool("Double Sided Material", false);
  var F = e.inSwitch("Falloff Mode", ["A", "B", "C", "D"], "A");
  H.setUiAttribs({
    hidePort: true
  });
  w.setUiAttribs({
    hidePort: true
  });
  F.setUiAttribs({
    hidePort: true
  });

  F.onChange = function () {
    var e = ["A", "B", "C", "D"];
    de.define("FALLOFF_MODE_" + F.get());
    e.filter(function (e) {
      return e !== F.get();
    }).forEach(function (e) {
      return de.removeDefine("FALLOFF_MODE_" + e);
    });
  };

  var B = [H, w, F];
  e.setPortGroup("Light Options", B);
  var V = e.inTexture("Diffuse Texture");
  var k = e.inTexture("Specular Texture");
  var z = e.inTexture("Normal Map");
  var Y = e.inTexture("AO Texture");
  var j = e.inTexture("Emissive Texture");
  var W = e.inTexture("Emissive Mask");
  var K = e.inTexture("Opacity Texture");
  var Z = e.inTexture("Environment Map");
  var q = e.inTexture("Env Map Mask");
  e.setPortGroup("Textures", [V, k, z, Y, j, W, K, Z, q]);
  var Q = e.inBool("Colorize Texture", false);
  var J = e.inFloat("Diffuse Repeat X", 1);
  var $ = e.inFloat("Diffuse Repeat Y", 1);
  var ee = e.inFloat("Texture Offset X", 0);
  var te = e.inFloat("Texture Offset Y", 0);
  var ne = e.inFloatSlider("Specular Intensity", 1);
  var ie = e.inFloatSlider("Normal Map Intensity", .5);
  var oe = e.inFloatSlider("AO Intensity", 1);
  var re = e.inFloatSlider("Emissive Intensity", 1);
  var ae = e.inFloatSlider("Emissive Mask Intensity", 1);
  var le = e.inFloatSlider("Env Map Intensity", 1);
  var se = e.inFloatSlider("Env Mask Intensity", 1);
  Q.setUiAttribs({
    hidePort: true
  });
  e.setPortGroup("Texture Transforms", [Q, $, J, te, ee]);
  e.setPortGroup("Texture Intensities", [ie, oe, ne, re, ae, le, se]);
  var fe = e.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A"], "Luminance");
  fe.setUiAttribs({
    greyout: true
  });
  var ue = e.inValueBool("Discard Transparent Pixels");
  ue.setUiAttribs({
    hidePort: true
  });
  e.setPortGroup("Opacity Texture", [fe, ue]);
  var ce = e.outTrigger("Trigger Out");
  var ge = e.outObject("Shader", null, "shader");
  ge.ignoreValueSerialize = true;
  var de = new CGL.Shader(t, "phongmaterial_" + e.id);
  de.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_BASE_COLOR"]);
  de.setSource(l.simosphong_vert, l.simosphong_frag);
  var me = false;
  de.define("FALLOFF_MODE_A");

  if (t.glVersion < 2) {
    de.enableExtension("GL_OES_standard_derivatives");
    if (t.gl.getExtension("OES_texture_float")) de.enableExtension("GL_OES_texture_float");else e.log("error loading extension OES_texture_float");
    if (t.gl.getExtension("OES_texture_float_linear")) de.enableExtension("GL_OES_texture_float_linear");else e.log("error loading extention OES_texture_float_linear");
    if (t.gl.getExtension("GL_OES_texture_half_float")) de.enableExtension("GL_OES_texture_half_float");else e.log("error loading extention GL_OES_texture_half_float");
    if (t.gl.getExtension("GL_OES_texture_half_float_linear")) de.enableExtension("GL_OES_texture_half_float_linear");else e.log("error loading extention GL_OES_texture_half_float_linear");
  }

  var pe = new RegExp("{{PHONG_FRAGMENT_HEAD}}", "g");

  var _e = new RegExp("{{PHONG_FRAGMENT_BODY}}", "g");

  var he = {
    directional: false,
    spot: false,
    ambient: false,
    point: false
  };

  function Ee(t) {
    var e = l.phong_frag;
    var n = "";
    var i = "";
    he.directional = false;
    he.spot = false;
    he.ambient = false;
    he.point = false;

    for (var _e113 = 0; _e113 < t.length; _e113 += 1) {
      var _o11 = t[_e113];
      var _r18 = _o11.type;

      if (!he[_r18]) {
        he[_r18] = true;
      }

      n = n.concat(s(_e113));
      i = i.concat(f(_e113, _o11.type));
    }

    e = e.replace(pe, n);
    e = e.replace(_e, i);
    de.setSource(l.phong_vert, e);

    for (var _e114 = 0, _t118 = Object.keys(he); _e114 < _t118.length; _e114 += 1) {
      var _a7 = _t118[_e114];

      if (he[_a7]) {
        if (!de.hasDefine("HAS_" + _a7.toUpperCase())) {
          de.define("HAS_" + _a7.toUpperCase());
        }
      } else {
        if (de.hasDefine("HAS_" + _a7.toUpperCase())) {
          de.removeDefine("HAS_" + _a7.toUpperCase());
        }
      }
    }
  }

  ge.set(de);
  var xe = null;
  var ve = null;
  var Te = null;
  var Ae = null;
  var Se = null;
  var Le = null;
  var Ie = null;
  var Ce = null;
  var De = null;
  var Oe = null;
  var Me = null;
  var Ne = null;
  var be = null;

  Q.onChange = function () {
    de.toggleDefine("COLORIZE_TEXTURE", Q.get());
  };

  function Ue() {
    if (V.get()) {
      if (!de.hasDefine("HAS_TEXTURE_DIFFUSE")) {
        de.define("HAS_TEXTURE_DIFFUSE");
        if (!xe) xe = new CGL.Uniform(de, "t", "texDiffuse", 0);
      }
    } else {
      de.removeUniform("texDiffuse");
      de.removeDefine("HAS_TEXTURE_DIFFUSE");
      xe = null;
    }
  }

  function Pe() {
    if (k.get()) {
      ne.setUiAttribs({
        greyout: false
      });

      if (!de.hasDefine("HAS_TEXTURE_SPECULAR")) {
        de.define("HAS_TEXTURE_SPECULAR");
        if (!ve) ve = new CGL.Uniform(de, "t", "texSpecular", 0);
      }
    } else {
      ne.setUiAttribs({
        greyout: true
      });
      de.removeUniform("texSpecular");
      de.removeDefine("HAS_TEXTURE_SPECULAR");
      ve = null;
    }
  }

  function Ge() {
    if (z.get()) {
      ie.setUiAttribs({
        greyout: false
      });

      if (!de.hasDefine("HAS_TEXTURE_NORMAL")) {
        de.define("HAS_TEXTURE_NORMAL");
        if (!Te) Te = new CGL.Uniform(de, "t", "texNormal", 0);
      }
    } else {
      ie.setUiAttribs({
        greyout: true
      });
      de.removeUniform("texNormal");
      de.removeDefine("HAS_TEXTURE_NORMAL");
      Te = null;
    }
  }

  Ae = new CGL.Uniform(de, "t", "texAO");

  function ye() {
    de.toggleDefine("HAS_TEXTURE_AO", Y.get());
    oe.setUiAttribs({
      greyout: !Y.get()
    });
  }

  function Re() {
    if (j.get()) {
      N.setUiAttribs({
        greyout: true
      });
      b.setUiAttribs({
        greyout: true
      });
      U.setUiAttribs({
        greyout: true
      });
      M.setUiAttribs({
        greyout: true
      });

      if (O.get()) {
        re.setUiAttribs({
          greyout: false
        });
      }

      if (!de.hasDefine("HAS_TEXTURE_EMISSIVE")) {
        de.define("HAS_TEXTURE_EMISSIVE");
        if (!Se) Se = new CGL.Uniform(de, "t", "texEmissive", 0);
      }
    } else {
      re.setUiAttribs({
        greyout: true
      });

      if (O.get()) {
        N.setUiAttribs({
          greyout: false
        });
        b.setUiAttribs({
          greyout: false
        });
        U.setUiAttribs({
          greyout: false
        });
        M.setUiAttribs({
          greyout: false
        });
      } else {
        j.setUiAttribs({
          greyout: true
        });
      }

      de.removeUniform("texEmissive");
      de.removeDefine("HAS_TEXTURE_EMISSIVE");
      Se = null;
    }
  }

  function Xe() {
    if (W.get()) {
      if (O.get()) {
        ae.setUiAttribs({
          greyout: false
        });
      }

      if (!de.hasDefine("HAS_TEXTURE_EMISSIVE_MASK")) {
        de.define("HAS_TEXTURE_EMISSIVE_MASK");
        if (!Le) Le = new CGL.Uniform(de, "t", "texMaskEmissive", 0);
        if (!Ie) Ie = new CGL.Uniform(de, "f", "inEmissiveMaskIntensity", ae);
      }
    } else {
      if (!O.get()) {
        W.setUiAttribs({
          greyout: true
        });
      }

      ae.setUiAttribs({
        greyout: true
      });
      de.removeUniform("texMaskEmissive");
      de.removeUniform("inEmissiveMaskIntensity");
      de.removeDefine("HAS_TEXTURE_EMISSIVE_MASK");
      Le = null;
      Ie = null;
    }
  }

  var He = false;

  function we() {
    de.toggleDefine("HAS_TEXTURE_ENV", Z.get());
    le.setUiAttribs({
      greyout: !Z.get()
    });

    if (Z.get()) {
      if (!De) De = new CGL.Uniform(de, "t", "texEnv", 0);
      de.toggleDefine("TEX_FORMAT_CUBEMAP", Z.get().cubemap);

      if (Z.get().cubemap) {
        de.removeDefine("TEX_FORMAT_EQUIRECT");
        de.removeDefine("ENVMAP_MATCAP");
        if (!Oe) Oe = new CGL.Uniform(de, "f", "inEnvMapIntensity", le);
        if (!Me) Me = new CGL.Uniform(de, "f", "inEnvMapWidth", Z.get().cubemap.width);
      } else {
        var _e115 = Z.get().width === Z.get().height;

        de.toggleDefine("TEX_FORMAT_EQUIRECT", !_e115);
        de.toggleDefine("ENVMAP_MATCAP", _e115);
        if (!Oe) Oe = new CGL.Uniform(de, "f", "inEnvMapIntensity", le);
        if (!Me) Me = new CGL.Uniform(de, "f", "inEnvMapWidth", Z.get().width);
      }
    } else {
      de.removeUniform("inEnvMapIntensity");
      de.removeUniform("inEnvMapWidth");
      de.removeUniform("texEnv");
      de.removeDefine("HAS_TEXTURE_ENV");
      de.removeDefine("ENVMAP_MATCAP");
      De = null;
      Oe = null;
    }

    He = false;
  }

  function Fe() {
    if (q.get()) {
      se.setUiAttribs({
        greyout: false
      });

      if (!Ne) {
        de.define("HAS_TEXTURE_LUMINANCE_MASK");
        Ne = new CGL.Uniform(de, "t", "texLuminance", 0);
        be = new CGL.Uniform(de, "f", "inLuminanceMaskIntensity", se);
      }
    } else {
      se.setUiAttribs({
        greyout: true
      });
      de.removeDefine("HAS_TEXTURE_LUMINANCE_MASK");
      de.removeUniform("inLuminanceMaskIntensity");
      de.removeUniform("texLuminance");
      Ne = null;
      be = null;
    }
  }

  function Be() {
    if (fe.get() == "Alpha Channel") de.define("ALPHA_MASK_ALPHA");else de.removeDefine("ALPHA_MASK_ALPHA");
    if (fe.get() == "Luminance") de.define("ALPHA_MASK_LUMI");else de.removeDefine("ALPHA_MASK_LUMI");
    if (fe.get() == "R") de.define("ALPHA_MASK_R");else de.removeDefine("ALPHA_MASK_R");
    if (fe.get() == "G") de.define("ALPHA_MASK_G");else de.removeDefine("ALPHA_MASK_G");
    if (fe.get() == "B") de.define("ALPHA_MASK_B");else de.removeDefine("ALPHA_MASK_B");
  }

  fe.onChange = Be;

  function Ve() {
    if (K.get()) {
      if (Ce !== null) return;
      de.removeUniform("texAlpha");
      de.define("HAS_TEXTURE_ALPHA");
      if (!Ce) Ce = new CGL.Uniform(de, "t", "texAlpha", 0);
      fe.setUiAttribs({
        greyout: false
      });
      ue.setUiAttribs({
        greyout: false
      });
    } else {
      de.removeUniform("texAlpha");
      de.removeDefine("HAS_TEXTURE_ALPHA");
      Ce = null;
      fe.setUiAttribs({
        greyout: true
      });
      ue.setUiAttribs({
        greyout: true
      });
    }

    Be();
  }

  ue.onChange = function () {
    de.toggleDefine("DISCARDTRANS", ue.get());
  };

  V.onChange = Ue;
  k.onChange = Pe;
  z.onChange = Ge;
  Y.onChange = ye;
  j.onChange = Re;
  W.onChange = Xe;
  K.onChange = Ve;

  Z.onChange = function () {
    He = true;
  };

  q.onChange = Fe;
  var ke = t.maxUniformsFrag;
  var ze = ke === 64 ? 6 : 16;
  de.define("MAX_LIGHTS", ze.toString());
  de.define("SPECULAR_PHONG");

  R.onChange = function () {
    if (R.get() === "Phong") {
      de.define("SPECULAR_PHONG");
      de.removeDefine("SPECULAR_BLINN");
      de.removeDefine("SPECULAR_GAUSS");
      de.removeDefine("SPECULAR_SCHLICK");
    } else if (R.get() === "Blinn") {
      de.define("SPECULAR_BLINN");
      de.removeDefine("SPECULAR_PHONG");
      de.removeDefine("SPECULAR_GAUSS");
      de.removeDefine("SPECULAR_SCHLICK");
    } else if (R.get() === "Gauss") {
      de.define("SPECULAR_GAUSS");
      de.removeDefine("SPECULAR_BLINN");
      de.removeDefine("SPECULAR_PHONG");
      de.removeDefine("SPECULAR_SCHLICK");
    } else if (R.get() === "Schlick") {
      de.define("SPECULAR_SCHLICK");
      de.removeDefine("SPECULAR_BLINN");
      de.removeDefine("SPECULAR_PHONG");
      de.removeDefine("SPECULAR_GAUSS");
    }
  };

  H.onChange = function () {
    de.toggleDefine("CONSERVE_ENERGY", H.get());
  };

  w.onChange = function () {
    de.toggleDefine("DOUBLE_SIDED", w.get());
  };

  var Ye = new CGL.Uniform(de, "4f", "inMaterialProperties", _, h, G, y);
  var je = new CGL.Uniform(de, "4f", "inDiffuseColor", u, c, g, d);
  var We = new CGL.Uniform(de, "4f", "inTextureIntensities", ie, oe, ne, re);
  var Ke = new CGL.Uniform(de, "4f", "inTextureRepeatOffset", J, $, ee, te);
  var Ze = [];
  var qe = 0;

  function Qe(t) {
    for (var _e116 = 0; _e116 < Ze.length; _e116 += 1) {
      Ze[_e116] = null;
    }

    for (var _e117 = 0; _e117 < t; _e117 += 1) {
      Ze[_e117] = null;

      if (!Ze[_e117]) {
        Ze[_e117] = {
          color: new CGL.Uniform(de, "3f", "phongLight" + _e117 + ".color", [1, 1, 1]),
          position: new CGL.Uniform(de, "3f", "phongLight" + _e117 + ".position", [0, 11, 0]),
          specular: new CGL.Uniform(de, "3f", "phongLight" + _e117 + ".specular", [1, 1, 1]),
          lightProperties: new CGL.Uniform(de, "4f", "phongLight" + _e117 + ".lightProperties", [1, 1, 1, 1]),
          conePointAt: new CGL.Uniform(de, "3f", "phongLight" + _e117 + ".conePointAt", vec3.create()),
          spotProperties: new CGL.Uniform(de, "3f", "phongLight" + _e117 + ".spotProperties", [0, 0, 0, 0]),
          castLight: new CGL.Uniform(de, "i", "phongLight" + _e117 + ".castLight", 1)
        };
      }
    }
  }

  function Je(e) {
    tt.position.setValue(e.position);
    tt.color.setValue(e.color);
    tt.specular.setValue(e.specular);
    tt.lightProperties.setValue([e.intensity, e.attenuation, e.falloff, e.radius]);
    tt.conePointAt.setValue(e.conePointAt);
    tt.spotProperties.setValue([e.cosConeAngle, e.cosConeAngleInner, e.spotExponent]);
  }

  function $e(t) {
    for (var _e118 = 0; _e118 < t.length; _e118 += 1) {
      var _n15 = t[_e118];
      _n15.isUsed = true;

      Ze[_e118].position.setValue(_n15.position);

      Ze[_e118].color.setValue(_n15.color);

      Ze[_e118].specular.setValue(_n15.specular);

      Ze[_e118].lightProperties.setValue([_n15.intensity, _n15.attenuation, _n15.falloff, _n15.radius]);

      Ze[_e118].conePointAt.setValue(_n15.conePointAt);

      Ze[_e118].spotProperties.setValue([_n15.cosConeAngle, _n15.cosConeAngleInner, _n15.spotExponent]);

      Ze[_e118].castLight.setValue(_n15.castLight);
    }
  }

  function et(e) {
    if (e.length !== qe) {
      Ee(e);
      Qe(e.length);
      qe = e.length;
      $e(e);
      me = false;
    } else {
      if (me) {
        Ee(e);
        Qe(e.length);
        me = false;
      }

      $e(e);
    }
  }

  var tt = null;

  function nt() {
    tt = {
      color: new CGL.Uniform(de, "3f", "phongLight" + 0 + ".color", [1, 1, 1]),
      specular: new CGL.Uniform(de, "3f", "phongLight" + 0 + ".specular", [1, 1, 1]),
      position: new CGL.Uniform(de, "3f", "phongLight" + 0 + ".position", [0, 11, 0]),
      lightProperties: new CGL.Uniform(de, "4f", "phongLight" + 0 + ".lightProperties", [1, 1, 1, 1]),
      conePointAt: new CGL.Uniform(de, "3f", "phongLight" + 0 + ".conePointAt", vec3.create()),
      spotProperties: new CGL.Uniform(de, "3f", "phongLight" + 0 + ".spotProperties", [0, 0, 0, 0]),
      castLight: new CGL.Uniform(de, "i", "phongLight" + 0 + ".castLight", 1)
    };
  }

  var it = [{
    type: "point",
    position: [5, 5, 5],
    color: [1, 1, 1],
    specular: [1, 1, 1],
    intensity: 1,
    attenuation: 0,
    falloff: .5,
    radius: 80,
    castLight: 1
  }];
  var ot = mat4.create();

  function rt() {
    if (t.frameStore.lightStack) {
      if (t.frameStore.lightStack.length === 0) {
        e.setUiError("deflight", "Default light is enabled. Please add lights to your patch to make this warning disappear.", 1);
      } else e.setUiError("deflight", null);
    }

    if (!t.frameStore.lightStack || !t.frameStore.lightStack.length) {
      if (!tt) {
        r();
        nt();
      }

      mat4.invert(ot, t.vMatrix);
      it[0].position = [ot[12], ot[13], ot[14]];
      Je(it[0]);
      qe = -1;
    } else {
      if (de) {
        if (t.frameStore.lightStack) {
          if (t.frameStore.lightStack.length) {
            tt = null;
            et(t.frameStore.lightStack);
          }
        }
      }
    }
  }

  var at = function at() {
    if (!de) {
      e.log("NO SHADER");
      return;
    }

    t.pushShader(de);
    de.popTextures();
    ce.trigger();
    t.popShader();
  };

  e.preRender = function () {
    de.bind();
    at();
  };

  var lt = mat4.create();
  var st = vec3.create();
  var ft = vec3.create();

  a.onTriggered = function () {
    if (!de) {
      e.log("phong has no shader...");
      return;
    }

    if (He) we();
    t.setShader(de);
    de.popTextures();
    if (V.get()) de.pushTexture(xe, V.get().tex);
    if (k.get()) de.pushTexture(ve, k.get().tex);
    if (z.get()) de.pushTexture(Te, z.get().tex);
    if (Y.get()) de.pushTexture(Ae, Y.get().tex);
    if (j.get()) de.pushTexture(Se, j.get().tex);
    if (W.get()) de.pushTexture(Le, W.get().tex);
    if (K.get()) de.pushTexture(Ce, K.get().tex);

    if (Z.get()) {
      if (Z.get().cubemap) de.pushTexture(De, Z.get().cubemap, t.gl.TEXTURE_CUBE_MAP);else de.pushTexture(De, Z.get().tex);
    }

    if (q.get()) {
      de.pushTexture(Ne, q.get().tex);
    }

    rt();
    ce.trigger();
    t.setPreviousShader();
  };

  if (t.glVersion == 1) {
    if (!t.gl.getExtension("EXT_shader_texture_lod")) {
      e.log("no EXT_shader_texture_lod texture extension");
    } else {
      de.enableExtension("GL_EXT_shader_texture_lod");
      t.gl.getExtension("OES_texture_float");
      t.gl.getExtension("OES_texture_float_linear");
      t.gl.getExtension("OES_texture_half_float");
      t.gl.getExtension("OES_texture_half_float_linear");
      de.enableExtension("GL_OES_standard_derivatives");
      de.enableExtension("GL_OES_texture_float");
      de.enableExtension("GL_OES_texture_float_linear");
      de.enableExtension("GL_OES_texture_half_float");
      de.enableExtension("GL_OES_texture_half_float_linear");
    }
  }

  Ue();
  Pe();
  Ge();
  ye();
  Ve();
  Re();
  Xe();
  we();
  Fe();
};

Ops.Gl.Phong.PhongMaterial_v6.prototype = new CABLES.Op();
CABLES.OPS["0d83ed06-cdbe-4fe0-87bb-0ccece7fb6e1"] = {
  f: Ops.Gl.Phong.PhongMaterial_v6,
  objName: "Ops.Gl.Phong.PhongMaterial_v6"
};

Ops.Gl.TextureEffects.ImageCompose_v2 = function () {
  CABLES.Op.apply(this, arguments);
  var e = this;
  var t = {
    imgcomp_frag: "UNI float a;\nvoid main()\n{\n   outColor= vec4(0.0,0.0,0.0,a);\n}\n"
  };
  var n = e.inTrigger("Render"),
      i = e.inBool("Use viewport size", true),
      o = e.inValueInt("Width", 640),
      r = e.inValueInt("Height", 480),
      a = e.inSwitch("Filter", ["nearest", "linear", "mipmap"], "linear"),
      l = e.inValueSelect("Wrap", ["clamp to edge", "repeat", "mirrored repeat"], "repeat"),
      s = e.inValueBool("HDR"),
      f = e.inValueBool("Transparent", false),
      u = e.outTrigger("Next"),
      c = e.outTexture("texture_out"),
      g = e.outValue("Aspect Ratio");
  var d = e.patch.cgl;
  e.setPortGroup("Texture Size", [i, o, r]);
  e.setPortGroup("Texture Settings", [l, a, s, f]);
  c.set(CGL.Texture.getEmptyTexture(d));
  var m = null;
  var p = null;
  var _ = 8,
      h = 8;
  var E = [0, 0, 0, 0];
  var x = true;
  var v = CGL.Texture.FILTER_LINEAR;
  var T = CGL.Texture.WRAP_CLAMP_TO_EDGE;
  var A = 0;
  var S = 0;
  l.onChange = O;
  a.onChange = M;
  n.onTriggered = e.preRender = D;
  M();
  O();
  C();

  function L() {
    if (m) m.delete();
    if (p) p.delete();
    if (s.get() && a.get() == "mipmap") e.setUiError("fpmipmap", "Don't use mipmap and HDR at the same time, many systems do not support this.");else e.setUiError("fpmipmap", null);
    m = new CGL.TextureEffect(d, {
      isFloatingPointTexture: s.get()
    });
    p = new CGL.Texture(d, {
      name: "image_compose_v2_" + e.id,
      isFloatingPointTexture: s.get(),
      filter: v,
      wrap: T,
      width: Math.ceil(o.get()),
      height: Math.ceil(r.get())
    });
    m.setSourceTexture(p);
    c.set(CGL.Texture.getEmptyTexture(d));
    x = false;
  }

  s.onChange = function () {
    x = true;
  };

  function I() {
    if (!m) L();

    if (i.get()) {
      _ = d.getViewPort()[2];
      h = d.getViewPort()[3];
    } else {
      _ = Math.ceil(o.get());
      h = Math.ceil(r.get());
    }

    if ((_ != p.width || h != p.height) && _ !== 0 && h !== 0) {
      p.setSize(_, h);
      g.set(_ / h);
      m.setSourceTexture(p);
      c.set(CGL.Texture.getEmptyTexture(d));
      c.set(p);
    }

    if (c.get() && v != CGL.Texture.FILTER_NEAREST) {
      if (!c.get().isPowerOfTwo()) e.setUiError("hintnpot", "texture dimensions not power of two! - texture filtering when scaling will not work on ios devices.", 0);else e.setUiError("hintnpot", null, 0);
    } else e.setUiError("hintnpot", null, 0);
  }

  function C() {
    o.setUiAttribs({
      greyout: i.get()
    });
    r.setUiAttribs({
      greyout: i.get()
    });
  }

  i.onChange = function () {
    C();
  };

  e.preRender = function () {
    D();
  };

  function D() {
    if (!m || x) L();
    var e = d.getViewPort();
    E[0] = e[0];
    E[1] = e[1];
    E[2] = e[2];
    E[3] = e[3];
    d.pushBlend(false);
    I();
    d.currentTextureEffect = m;
    m.setSourceTexture(p);
    var t = CGL.Texture.getBlackTexture(d);
    if (f.get()) t = CGL.Texture.getEmptyTexture(d);
    m.startEffect(t);
    u.trigger();
    c.set(m.getCurrentSourceTexture());
    m.endEffect();
    d.setViewPort(E[0], E[1], E[2], E[3]);
    d.popBlend(false);
    d.currentTextureEffect = null;
  }

  function O() {
    if (l.get() == "repeat") T = CGL.Texture.WRAP_REPEAT;
    if (l.get() == "mirrored repeat") T = CGL.Texture.WRAP_MIRRORED_REPEAT;
    if (l.get() == "clamp to edge") T = CGL.Texture.WRAP_CLAMP_TO_EDGE;
    x = true;
  }

  function M() {
    if (a.get() == "nearest") v = CGL.Texture.FILTER_NEAREST;
    if (a.get() == "linear") v = CGL.Texture.FILTER_LINEAR;
    if (a.get() == "mipmap") v = CGL.Texture.FILTER_MIPMAP;
    x = true;
  }
};

Ops.Gl.TextureEffects.ImageCompose_v2.prototype = new CABLES.Op();
CABLES.OPS["a5b43d4c-a9ea-4eaf-9ed0-f257d222659d"] = {
  f: Ops.Gl.TextureEffects.ImageCompose_v2,
  objName: "Ops.Gl.TextureEffects.ImageCompose_v2"
};

Ops.Gl.TextureEffects.Noise.FBMNoise = function () {
  CABLES.Op.apply(this, arguments);
  var e = this;
  var t = {
    fbmnoise_frag: "UNI sampler2D tex;\nUNI float anim;\n\nUNI float scale;\nUNI float repeat;\n\nUNI float scrollX;\nUNI float scrollY;\n\nUNI float amount;\n\nUNI bool layer1;\nUNI bool layer2;\nUNI bool layer3;\nUNI bool layer4;\nUNI vec3 color;\nUNI float aspect;\n\nIN vec2 texCoord;\n\n\n{{CGL.BLENDMODES}}\n\n// csdcsdcds\n// adapted from warp shader by inigo quilez/iq\n// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.\n\n// See here for a tutorial on how to make this: http://www.iquilezles.org/www/articles/warp/warp.htm\n\nconst mat2 m = mat2( 0.80,  0.60, -0.60,  0.80 );\n\nfloat noise( in vec2 x )\n{\n\treturn sin(1.5*x.x)*sin(1.5*x.y);\n}\n\nfloat fbm4( vec2 p )\n{\n    float f = 0.0;\n    f += 0.5000*noise( p ); p = m*p*2.02;\n    f += 0.2500*noise( p ); p = m*p*2.03;\n    f += 0.1250*noise( p ); p = m*p*2.01;\n    f += 0.0625*noise( p );\n    return f/0.9375;\n}\n\nfloat fbm6( vec2 p )\n{\n    float f = 0.0;\n    f += 0.500000*(0.5+0.5*noise( p )); p = m*p*2.02;\n    f += 0.250000*(0.5+0.5*noise( p )); p = m*p*2.03;\n    f += 0.125000*(0.5+0.5*noise( p )); p = m*p*2.01;\n    f += 0.062500*(0.5+0.5*noise( p )); p = m*p*2.04;\n    f += 0.031250*(0.5+0.5*noise( p )); p = m*p*2.01;\n    f += 0.015625*(0.5+0.5*noise( p ));\n    return f/0.96875;\n}\n\nvoid main()\n{\n    // vec4 col=texture(tex,texCoord+2.0*fbm4(texCoord+2.0*fbm6(texCoord+anim)));\n\n    vec2 tc=texCoord;\n\t#ifdef DO_TILEABLE\n\t    tc=abs(texCoord-0.5);\n\t#endif\n\n\n    vec2 p=(tc-0.5)*scale;\n\n\n    p.y/=aspect;\n    vec2 q = vec2( fbm4( p + vec2(0.3+scrollX,0.20+scrollY) ),\n                   fbm4( p + vec2(3.1+scrollX,1.3+scrollY) ) );\n\n    vec2 q2 = vec2( fbm4( p + vec2(2.0+scrollX,1.0+scrollY) ),\n                   fbm4( p + vec2(3.1+scrollX,1.3+scrollY) ) );\n\n    vec2 q3 = vec2( fbm4( p + vec2(9.0+scrollX,4.0+scrollY) ),\n                   fbm4( p + vec2(3.1+scrollX,4.3+scrollY) ) );\n\n\n\n    float v= fbm4( ( p + 4.0*q +anim*0.1)*repeat);\n    float v2= fbm4( (p + 4.0*q2 +anim*0.1)*repeat );\n\n    float v3= fbm6( (p + 4.0*q3 +anim*0.1)*repeat );\n    float v4= fbm6( (p + 4.0*q2 +anim*0.1)*repeat );\n\n\n\n\n    vec4 base=texture(tex,texCoord);\n\n    vec4 finalColor;\n    float colVal=0.0;\n    float numLayers=0.0;\n\n    if(layer1)\n    {\n        colVal+=v;\n        numLayers++;\n    }\n\n    if(layer2)\n    {\n        colVal+=v2;\n        numLayers++;\n    }\n\n    if(layer3)\n    {\n        colVal+=v3;\n        numLayers++;\n    }\n\n    if(layer4)\n    {\n        colVal+=v4;\n        numLayers++;\n    }\n\n    finalColor=vec4( color*vec3(colVal/numLayers),1.0);\n\n\n    outColor = cgl_blend(base,finalColor,amount);;\n\n}\n"
  };
  var n = e.inTrigger("render"),
      i = CGL.TextureEffect.AddBlendSelect(e, "Blend Mode", "normal"),
      o = e.inValueSlider("Amount", 1),
      r = e.inValueSlider("r", 1),
      a = e.inValueSlider("g", 1),
      l = e.inValueSlider("b", 1),
      s = e.outTrigger("trigger");
  r.setUiAttribs({
    colorPick: true
  });
  var f = e.patch.cgl;
  var u = new CGL.Shader(f, "fbmnoise");
  u.setSource(u.getDefaultVertexShader(), t.fbmnoise_frag);
  var c = new CGL.Uniform(u, "t", "tex", 0);
  var g = new CGL.Uniform(u, "f", "scale", e.inValue("scale", 2));
  var d = new CGL.Uniform(u, "f", "anim", e.inValue("anim", 0));
  var m = new CGL.Uniform(u, "f", "scrollX", e.inValue("scrollX", 9));
  var p = new CGL.Uniform(u, "f", "scrollY", e.inValue("scrollY", 0));

  var _ = new CGL.Uniform(u, "f", "repeat", e.inValue("repeat", 1));

  var h = new CGL.Uniform(u, "f", "aspect", e.inValue("aspect", 1));
  var E = new CGL.Uniform(u, "b", "layer1", e.inValueBool("Layer 1", true));
  var x = new CGL.Uniform(u, "b", "layer2", e.inValueBool("Layer 2", true));
  var v = new CGL.Uniform(u, "b", "layer3", e.inValueBool("Layer 3", true));
  var T = new CGL.Uniform(u, "b", "layer4", e.inValueBool("Layer 4", true));
  var A = new CGL.Uniform(u, "3f", "color", r, a, l);
  var S = new CGL.Uniform(u, "f", "amount", o);
  var L = e.inValueBool("Tileable", false);
  L.onChange = I;

  function I() {
    if (L.get()) u.define("DO_TILEABLE");else u.removeDefine("DO_TILEABLE");
  }

  CGL.TextureEffect.setupBlending(e, u, i, o);

  n.onTriggered = function () {
    if (!CGL.TextureEffect.checkOpInEffect(e)) return;
    f.pushShader(u);
    f.currentTextureEffect.bind();
    h.set(f.currentTextureEffect.getCurrentSourceTexture().width / f.currentTextureEffect.getCurrentSourceTexture().height);
    f.setTexture(0, f.currentTextureEffect.getCurrentSourceTexture().tex);
    f.currentTextureEffect.finish();
    f.popShader();
    s.trigger();
  };
};

Ops.Gl.TextureEffects.Noise.FBMNoise.prototype = new CABLES.Op();
CABLES.OPS["7073186c-b776-48c2-a01e-041df88ad88a"] = {
  f: Ops.Gl.TextureEffects.Noise.FBMNoise,
  objName: "Ops.Gl.TextureEffects.Noise.FBMNoise"
};

Ops.Gl.TextureEffects.DrawImage_v3 = function () {
  CABLES.Op.apply(this, arguments);
  var i = this;
  var e = {
    drawimage_frag: "#ifdef HAS_TEXTURES\n    IN vec2 texCoord;\n    UNI sampler2D tex;\n    UNI sampler2D image;\n#endif\n\n#ifdef TEX_TRANSFORM\n    IN mat3 transform;\n#endif\n// UNI float rotate;\n\n{{CGL.BLENDMODES}}\n\n#ifdef HAS_TEXTUREALPHA\n   UNI sampler2D imageAlpha;\n#endif\n\nUNI float amount;\n\n#ifdef ASPECT_RATIO\n    UNI float aspectTex;\n    UNI float aspectPos;\n#endif\n\nvoid main()\n{\n    vec4 blendRGBA=vec4(0.0,0.0,0.0,1.0);\n\n    #ifdef HAS_TEXTURES\n        vec2 tc=texCoord;\n\n        #ifdef TEX_FLIP_X\n            tc.x=1.0-tc.x;\n        #endif\n        #ifdef TEX_FLIP_Y\n            tc.y=1.0-tc.y;\n        #endif\n\n        #ifdef ASPECT_RATIO\n            #ifdef ASPECT_AXIS_X\n                tc.y=(1.0-aspectPos)-(((1.0-aspectPos)-tc.y)*aspectTex);\n            #endif\n            #ifdef ASPECT_AXIS_Y\n                tc.x=(1.0-aspectPos)-(((1.0-aspectPos)-tc.x)/aspectTex);\n            #endif\n        #endif\n\n        #ifdef TEX_TRANSFORM\n            vec3 coordinates=vec3(tc.x, tc.y,1.0);\n            tc=(transform * coordinates ).xy;\n        #endif\n\n        blendRGBA=texture(image,tc);\n\n        vec3 blend=blendRGBA.rgb;\n        vec4 baseRGBA=texture(tex,texCoord);\n        vec3 base=baseRGBA.rgb;\n        vec3 colNew=_blend(base,blend);\n\n        #ifdef REMOVE_ALPHA_SRC\n            blendRGBA.a=1.0;\n        #endif\n\n        #ifdef HAS_TEXTUREALPHA\n            vec4 colImgAlpha=texture(imageAlpha,tc);\n            float colImgAlphaAlpha=colImgAlpha.a;\n\n            #ifdef ALPHA_FROM_LUMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef ALPHA_FROM_INV_UMINANCE\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\n                colImgAlphaAlpha=1.0-(gray.r+gray.g+gray.b)/3.0;\n            #endif\n\n            #ifdef INVERT_ALPHA\n                colImgAlphaAlpha=clamp(colImgAlphaAlpha,0.0,1.0);\n                colImgAlphaAlpha=1.0-colImgAlphaAlpha;\n            #endif\n\n            blendRGBA.a=colImgAlphaAlpha*blendRGBA.a;\n        #endif\n    #endif\n\n    float am=amount;\n\n    #ifdef CLIP_REPEAT\n        if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n        {\n            // colNew.rgb=vec3(0.0);\n            am=0.0;\n        }\n    #endif\n\n    #ifdef ASPECT_RATIO\n        #ifdef ASPECT_CROP\n            if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\n            {\n                colNew.rgb=base.rgb;\n                am=0.0;\n            }\n\n        #endif\n    #endif\n\n    // blendRGBA.rgb=mix( colNew, base ,1.0-am);\n    // blendRGBA.a=clamp((blendRGBA.a*am),0.,1.);\n\n    blendRGBA.rgb=mix(colNew,base,1.0-(am*blendRGBA.a));\n    blendRGBA.a=clamp(baseRGBA.a+(blendRGBA.a*am),0.,1.);\n\n\n    outColor= blendRGBA;\n\n}\n\n",
    drawimage_vert: "IN vec3 vPosition;\nIN vec2 attrTexCoord;\nIN vec3 attrVertNormal;\n\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\n// OUT vec3 norm;\n\n#ifdef TEX_TRANSFORM\n    UNI float posX;\n    UNI float posY;\n    UNI float scaleX;\n    UNI float scaleY;\n    UNI float rotate;\n    OUT mat3 transform;\n#endif\n\nvoid main()\n{\n   texCoord=attrTexCoord;\n//   norm=attrVertNormal;\n\n   #ifdef TEX_TRANSFORM\n        vec3 coordinates=vec3(attrTexCoord.x, attrTexCoord.y,1.0);\n        float angle = radians( rotate );\n        vec2 scale= vec2(scaleX,scaleY);\n        vec2 translate= vec2(posX,posY);\n\n        transform = mat3(   scale.x * cos( angle ), scale.x * sin( angle ), 0.0,\n            - scale.y * sin( angle ), scale.y * cos( angle ), 0.0,\n            - 0.5 * scale.x * cos( angle ) + 0.5 * scale.y * sin( angle ) - 0.5 * translate.x*2.0 + 0.5,  - 0.5 * scale.x * sin( angle ) - 0.5 * scale.y * cos( angle ) - 0.5 * translate.y*2.0 + 0.5, 1.0);\n   #endif\n\n   gl_Position = projMatrix * mvMatrix * vec4(vPosition,  1.0);\n}\n"
  };
  var t = i.inTrigger("render");
  var n = CGL.TextureEffect.AddBlendSelect(i, "blendMode");
  var o = i.inValueSlider("amount", 1);
  var r = i.inTexture("Image");
  var a = i.inValueBool("removeAlphaSrc", false);
  var l = i.inTexture("Mask");
  var s = i.inValueSelect("Mask Src", ["alpha channel", "luminance", "luminance inv"], "luminance");
  var f = i.inValueBool("Invert alpha channel");
  var u = i.inValueBool("Aspect Ratio", false);
  var c = i.inValueSelect("Stretch Axis", ["X", "Y"], "X");
  var g = i.inValueSlider("Position", 0);
  var d = i.inValueBool("Crop", false);
  var m = i.outTrigger("trigger");
  n.set("normal");
  var p = i.patch.cgl;

  var _ = new CGL.Shader(p, "drawimage");

  l.onLinkChanged = h;
  i.setPortGroup("Mask", [l, s, f]);
  i.setPortGroup("Aspect Ratio", [u, g, d, c]);
  a.onChange = L;

  function h() {
    if (l.isLinked()) {
      a.setUiAttribs({
        greyout: true
      });
      s.setUiAttribs({
        greyout: false
      });
      f.setUiAttribs({
        greyout: false
      });
    } else {
      a.setUiAttribs({
        greyout: false
      });
      s.setUiAttribs({
        greyout: true
      });
      f.setUiAttribs({
        greyout: true
      });
    }
  }

  i.toWorkPortsNeedToBeLinked(r);

  _.setSource(e.drawimage_vert, e.drawimage_frag);

  var E = new CGL.Uniform(_, "t", "tex", 0);
  var x = new CGL.Uniform(_, "t", "image", 1);
  var v = new CGL.Uniform(_, "t", "imageAlpha", 2);
  var T = new CGL.Uniform(_, "f", "aspectTex", 1);
  var A = new CGL.Uniform(_, "f", "aspectPos", g);

  f.onChange = function () {
    if (f.get()) _.define("INVERT_ALPHA");else _.removeDefine("INVERT_ALPHA");
  };

  u.onChange = S;
  d.onChange = S;
  c.onChange = S;

  function S() {
    _.removeDefine("ASPECT_AXIS_X");

    _.removeDefine("ASPECT_AXIS_Y");

    _.removeDefine("ASPECT_CROP");

    g.setUiAttribs({
      greyout: !u.get()
    });
    d.setUiAttribs({
      greyout: !u.get()
    });
    c.setUiAttribs({
      greyout: !u.get()
    });

    if (u.get()) {
      _.define("ASPECT_RATIO");

      if (d.get()) _.define("ASPECT_CROP");
      if (c.get() == "X") _.define("ASPECT_AXIS_X");
      if (c.get() == "Y") _.define("ASPECT_AXIS_Y");
    } else {
      _.removeDefine("ASPECT_RATIO");

      if (d.get()) _.define("ASPECT_CROP");
      if (c.get() == "X") _.define("ASPECT_AXIS_X");
      if (c.get() == "Y") _.define("ASPECT_AXIS_Y");
    }
  }

  function L() {
    if (a.get()) _.define("REMOVE_ALPHA_SRC");else _.removeDefine("REMOVE_ALPHA_SRC");
  }

  s.onChange = function () {
    _.toggleDefine("ALPHA_FROM_LUMINANCE", s.get() == "luminance");

    _.toggleDefine("ALPHA_FROM_INV_UMINANCE", s.get() == "luminance_inv");
  };

  s.set("alpha channel");
  {
    var y = i.inValueBool("flip x");
    var R = i.inValueBool("flip y");

    y.onChange = function () {
      if (y.get()) _.define("TEX_FLIP_X");else _.removeDefine("TEX_FLIP_X");
    };

    R.onChange = function () {
      if (R.get()) _.define("TEX_FLIP_Y");else _.removeDefine("TEX_FLIP_Y");
    };
  }
  {
    var I = i.inValueBool("Transform");
    var C = i.inValueSlider("Scale X", 1);
    var D = i.inValueSlider("Scale Y", 1);
    var O = i.inValue("Position X", 0);
    var M = i.inValue("Position Y", 0);
    var N = i.inValue("Rotation", 0);
    var X = i.inValueBool("Clip Repeat", false);
    X.onChange = b;

    function b() {
      if (X.get()) _.define("CLIP_REPEAT");else _.removeDefine("CLIP_REPEAT");
    }

    var H = new CGL.Uniform(_, "f", "scaleX", C);
    var w = new CGL.Uniform(_, "f", "scaleY", D);
    var F = new CGL.Uniform(_, "f", "posX", O);
    var B = new CGL.Uniform(_, "f", "posY", M);
    var V = new CGL.Uniform(_, "f", "rotate", N);
    I.onChange = U;
  }

  function U() {
    _.toggleDefine("TEX_TRANSFORM", I.get());

    if (I.get()) {
      C.setUiAttribs({
        greyout: false
      });
      D.setUiAttribs({
        greyout: false
      });
      O.setUiAttribs({
        greyout: false
      });
      M.setUiAttribs({
        greyout: false
      });
      N.setUiAttribs({
        greyout: false
      });
    } else {
      C.setUiAttribs({
        greyout: true
      });
      D.setUiAttribs({
        greyout: true
      });
      O.setUiAttribs({
        greyout: true
      });
      M.setUiAttribs({
        greyout: true
      });
      N.setUiAttribs({
        greyout: true
      });
    }
  }

  CGL.TextureEffect.setupBlending(i, _, n, o);
  var P = new CGL.Uniform(_, "f", "amount", o);

  l.onChange = function () {
    if (l.get() && l.get().tex) {
      _.define("HAS_TEXTUREALPHA");
    } else {
      _.removeDefine("HAS_TEXTUREALPHA");
    }
  };

  function G() {
    if (!CGL.TextureEffect.checkOpInEffect(i)) return;
    var e = r.get();

    if (e && e.tex && o.get() > 0) {
      p.pushShader(_);
      p.currentTextureEffect.bind();

      var _t119 = p.currentTextureEffect.getCurrentSourceTexture();

      p.setTexture(0, _t119.tex);

      var _n16 = 1 / (p.currentTextureEffect.getWidth() / p.currentTextureEffect.getHeight()) * (e.width / e.height);

      T.setValue(_n16);
      p.setTexture(1, e.tex);

      if (l.get() && l.get().tex) {
        p.setTexture(2, l.get().tex);
      }

      p.pushBlendMode(CGL.BLEND_NONE, true);
      p.currentTextureEffect.finish();
      p.popBlendMode();
      p.popShader();
    }

    m.trigger();
  }

  t.onTriggered = G;
  U();
  L();
  h();
  S();
};

Ops.Gl.TextureEffects.DrawImage_v3.prototype = new CABLES.Op();
CABLES.OPS["8f6b2f15-fcb0-4597-90c0-e5173f2969fe"] = {
  f: Ops.Gl.TextureEffects.DrawImage_v3,
  objName: "Ops.Gl.TextureEffects.DrawImage_v3"
};

Ops.Gl.TextureEffects.ToNormalMap = function () {
  CABLES.Op.apply(this, arguments);
  var e = this;
  var t = {
    tonormal_frag: "#ifdef HAS_TEXTURES\n  IN vec2 texCoord;\n  UNI sampler2D tex;\n#endif\n\nUNI float strength;\n\nvoid main()\n{\n\n    float texelSize=1.0/1024.0;\n    \n    float tl = abs(texture(tex, texCoord + texelSize * vec2(-1.0, -1.0)).x);   // top left\n    float  l = abs(texture(tex, texCoord + texelSize * vec2(-1.0,  0.0)).x);   // left\n    float bl = abs(texture(tex, texCoord + texelSize * vec2(-1.0,  1.0)).x);   // bottom left\n    float  t = abs(texture(tex, texCoord + texelSize * vec2( 0.0, -1.0)).x);   // top\n    float  b = abs(texture(tex, texCoord + texelSize * vec2( 0.0,  1.0)).x);   // bottom\n    float tr = abs(texture(tex, texCoord + texelSize * vec2( 1.0, -1.0)).x);   // top right\n    float  r = abs(texture(tex, texCoord + texelSize * vec2( 1.0,  0.0)).x);   // right\n    float br = abs(texture(tex, texCoord + texelSize * vec2( 1.0,  1.0)).x);   // bottom right\n    \n    //     // Compute dx using Sobel:\n    //     //           -1 0 1 \n    //     //           -2 0 2\n    //     //           -1 0 1\n    float dX = tr + 2.0*r + br -tl - 2.0*l - bl;\n    \n    //     // Compute dy using Sobel:\n    //     //           -1 -2 -1 \n    //     //            0  0  0\n    //     //            1  2  1\n    float dY = bl + 2.0*b + br -tl - 2.0*t - tr;\n    \n    //     // Build the normalized normal\n    \n    vec4 N = vec4(normalize(vec3(dX,dY, 1.0 / strength)), 1.0);\n    \n    //     //convert (-1.0 , 1.0) to (0.0 , 1.0), if needed\n    N= N * 0.5 + 0.5;\n\n   outColor= N;\n}"
  };
  var n = e.inTrigger("render");
  var i = e.outTrigger("trigger");
  var o = e.inValue("Strength", 4);
  var r = e.patch.cgl;
  var a = new CGL.Shader(r, e.name);
  a.setSource(a.getDefaultVertexShader(), t.tonormal_frag);
  var l = new CGL.Uniform(a, "t", "tex", 0);
  var s = new CGL.Uniform(a, "f", "strength", o);

  n.onTriggered = function () {
    if (!CGL.TextureEffect.checkOpInEffect(e)) return;
    r.pushShader(a);
    r.currentTextureEffect.bind();
    r.setTexture(0, r.currentTextureEffect.getCurrentSourceTexture().tex);
    r.currentTextureEffect.finish();
    r.popShader();
    i.trigger();
  };
};

Ops.Gl.TextureEffects.ToNormalMap.prototype = new CABLES.Op();
CABLES.OPS["a9aba612-dc72-4108-a6fb-f0292463a186"] = {
  f: Ops.Gl.TextureEffects.ToNormalMap,
  objName: "Ops.Gl.TextureEffects.ToNormalMap"
};

Ops.Anim.Timer_v2 = function () {
  CABLES.Op.apply(this, arguments);
  var e = this;
  var t = {};
  var i = e.inValue("Speed", 1),
      n = e.inValueBool("Play", true),
      o = e.inTriggerButton("Reset"),
      r = e.inValueBool("Sync to timeline", false),
      a = e.outValue("Time");
  e.setPortGroup("Controls", [n, o, i]);
  var l = new CABLES.Timer();
  var s = null;
  var f = 0;
  var u = false;
  n.onChange = c;
  c();

  function c() {
    if (n.get()) {
      l.play();
      e.patch.addOnAnimFrame(e);
    } else {
      l.pause();
      e.patch.removeOnAnimFrame(e);
    }
  }

  o.onTriggered = g;

  function g() {
    f = 0;
    s = null;
    l.setTime(0);
    a.set(0);
  }

  r.onChange = function () {
    u = r.get();
    n.setUiAttribs({
      greyout: u
    });
    o.setUiAttribs({
      greyout: u
    });
  };

  e.onAnimFrame = function (e) {
    if (l.isPlaying()) {
      if (CABLES.overwriteTime !== undefined) {
        a.set(CABLES.overwriteTime * i.get());
      } else if (u) {
        a.set(e * i.get());
      } else {
        l.update();

        var _t120 = l.get();

        if (s === null) {
          s = _t120;
          return;
        }

        var _n17 = Math.abs(_t120 - s);

        s = _t120;
        f += _n17 * i.get();
        if (f != f) f = 0;
        a.set(f);
      }
    }
  };
};

Ops.Anim.Timer_v2.prototype = new CABLES.Op();
CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"] = {
  f: Ops.Anim.Timer_v2,
  objName: "Ops.Anim.Timer_v2"
};

Ops.Gl.Meshes.FullscreenRectangle = function () {
  CABLES.Op.apply(this, arguments);
  var e = this;
  var t = {
    shader_frag: "UNI sampler2D tex;\nIN vec2 texCoord;\n\nvoid main()\n{\n   outColor= texture(tex,vec2(texCoord.x,(1.0-texCoord.y)));\n}\n",
    shader_vert: "{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nUNI mat4 projMatrix;\nUNI mat4 mvMatrix;\n\nOUT vec2 texCoord;\nIN vec2 attrTexCoord;\n\nvoid main()\n{\n   vec4 pos=vec4(vPosition,  1.0);\n\n   texCoord=attrTexCoord;\n\n   gl_Position = projMatrix * mvMatrix * pos;\n}\n"
  };
  var n = e.inTrigger("render"),
      i = e.inValueBool("Center in Canvas"),
      o = e.inValueBool("Flip Y"),
      r = e.inValueBool("Flip X"),
      a = e.inTexture("Texture"),
      l = e.outTrigger("trigger");
  var s = e.patch.cgl;
  var f = null;
  var u = new CGL.Geometry("fullscreen rectangle");
  var c = 0,
      g = 0,
      d = 0,
      m = 0,
      p = 0;
  i.onChange = A;
  r.onChange = T;
  o.onChange = T;

  var _ = new CGL.Shader(s, "fullscreenrectangle");

  _.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);

  _.setSource(t.shader_vert, t.shader_frag);

  _.fullscreenRectUniform = new CGL.Uniform(_, "t", "tex", 0);
  var h = false;
  var E = true;
  n.onTriggered = v;
  e.toWorkPortsNeedToBeLinked(n);

  a.onChange = function () {
    E = true;
  };

  function x() {
    var e = a.get();
    if (e) h = true;else h = false;
  }

  e.preRender = function () {
    x();
    {
      _.bind();

      if (f) f.render(_);
      v();
    }
  };

  function v() {
    if (s.getViewPort()[2] != m || s.getViewPort()[3] != p || !f) A();
    if (E) x();
    s.pushPMatrix();
    mat4.identity(s.pMatrix);
    mat4.ortho(s.pMatrix, 0, m, p, 0, -10, 1e3);
    s.pushModelMatrix();
    mat4.identity(s.mMatrix);
    s.pushViewMatrix();
    mat4.identity(s.vMatrix);

    if (i.get()) {
      var _e119 = 0;
      var _t121 = 0;
      if (m < s.canvasWidth) _e119 = (s.canvasWidth - m) / 2;
      if (p < s.canvasHeight) _t121 = (s.canvasHeight - p) / 2;
      s.setViewPort(_e119, _t121, m, p);
    }

    if (h) {
      if (a.get()) {
        s.setTexture(0, a.get().tex);
      }

      f.render(_);
    } else {
      f.render(s.getShader());
    }

    s.gl.clear(s.gl.DEPTH_BUFFER_BIT);
    s.popPMatrix();
    s.popModelMatrix();
    s.popViewMatrix();
    l.trigger();
  }

  function T() {
    f = null;
  }

  function A() {
    var e = s.getViewPort();
    if (e[2] == m && e[3] == p && f) return;
    var t = 0,
        n = 0;
    m = e[2];
    p = e[3];
    u.vertices = new Float32Array([t + m, n + p, 0, t, n + p, 0, t + m, n, 0, t, n, 0]);
    var i = null;
    if (o.get()) i = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);else i = new Float32Array([1, 1, 0, 1, 1, 0, 0, 0]);

    if (r.get()) {
      i[0] = 0;
      i[2] = 1;
      i[4] = 0;
      i[6] = 1;
    }

    u.setTexCoords(i);
    u.verticesIndices = new Float32Array([2, 1, 0, 3, 1, 2]);
    u.vertexNormals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
    u.tangents = new Float32Array([-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0]);
    u.biTangents == new Float32Array([0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0]);
    if (!f) f = new CGL.Mesh(s, u);else f.setGeom(u);
  }
};

Ops.Gl.Meshes.FullscreenRectangle.prototype = new CABLES.Op();
CABLES.OPS["255bd15b-cc91-4a12-9b4e-53c710cbb282"] = {
  f: Ops.Gl.Meshes.FullscreenRectangle,
  objName: "Ops.Gl.Meshes.FullscreenRectangle"
};

Ops.Gl.Meshes.Rectangle_v2 = function () {
  CABLES.Op.apply(this, arguments);
  var e = this;
  var t = {};
  var n = e.inTrigger("render"),
      i = e.outTrigger("trigger"),
      A = e.inValue("width", 1),
      S = e.inValue("height", 1),
      L = e.inSwitch("pivot x", ["left", "center", "right"]),
      I = e.inSwitch("pivot y", ["top", "center", "bottom"]),
      C = e.inValueInt("num columns", 1),
      D = e.inValueInt("num rows", 1),
      O = e.inSwitch("axis", ["xy", "xz"], "xy"),
      o = e.inValueBool("Active", true),
      M = e.outObject("geometry", null, "geometry");
  M.ignoreValueSerialize = true;
  var N = e.patch.cgl;
  O.set("xy");
  L.set("center");
  I.set("center");
  e.setPortGroup("Pivot", [L, I]);
  e.setPortGroup("Size", [A, S]);
  e.setPortGroup("Structure", [C, D]);
  e.toWorkPortsNeedToBeLinked(n);
  var b = new CGL.Geometry("rectangle");
  var U = null;
  var P = false;
  O.onChange = L.onChange = I.onChange = A.onChange = S.onChange = D.onChange = C.onChange = r;
  a();

  function r() {
    P = true;
  }

  e.preRender = n.onTriggered = function () {
    if (!CGL.TextureEffect.checkOpNotInTextureEffect(e)) return;
    if (P) a();
    if (o.get() && U) U.render(N.getShader());
    i.trigger();
  };

  function a() {
    var e = A.get();
    var t = parseFloat(S.get());
    var n = 0;
    var i = 0;
    if (typeof e == "string") e = parseFloat(e);
    if (typeof t == "string") t = parseFloat(t);
    if (L.get() == "center") n = 0;else if (L.get() == "right") n = -e / 2;else if (L.get() == "left") n = +e / 2;
    if (I.get() == "center") i = 0;else if (I.get() == "top") i = -t / 2;else if (I.get() == "bottom") i = +t / 2;
    var o = [];
    var r = [];
    var a = [];
    var l = [];
    var s = [];
    var f = [];
    var u = Math.round(D.get());
    var c = Math.round(C.get());
    var g = e / c;
    var d = t / u;

    var m, p, _;

    _ = O.get();

    for (p = 0; p <= u; p++) {
      for (m = 0; m <= c; m++) {
        o.push(m * g - A.get() / 2 + n);
        if (_ == "xz") o.push(0);
        o.push(p * d - S.get() / 2 + i);
        if (_ == "xy") o.push(0);
        r.push(m / c);
        r.push(1 - p / u);

        if (_ == "xz") {
          a.push(0, 1, 0);
          l.push(1, 0, 0);
          s.push(0, 0, 1);
        } else if (_ == "xy") {
          a.push(0, 0, 1);
          l.push(-1, 0, 0);
          s.push(0, -1, 0);
        }
      }
    }

    for (m = 0; m < c; m++) {
      for (p = 0; p < u; p++) {
        var h = m + (c + 1) * p;
        var E = h;
        var x = h + 1;
        var v = h + c + 1;
        var T = h + 1 + c + 1;
        f.push(E);
        f.push(v);
        f.push(x);
        f.push(x);
        f.push(v);
        f.push(T);
      }
    }

    b.clear();
    b.vertices = o;
    b.texCoords = r;
    b.verticesIndices = f;
    b.vertexNormals = a;
    b.tangents = l;
    b.biTangents = s;
    if (c * u > 64e3) b.unIndex();
    if (!U) U = new CGL.Mesh(N, b);else U.setGeom(b);
    M.set(null);
    M.set(b);
    P = false;
  }

  e.onDelete = function () {
    if (U) U.dispose();
  };
};

Ops.Gl.Meshes.Rectangle_v2.prototype = new CABLES.Op();
CABLES.OPS["fc5718d6-11a5-496e-8f16-1c78b1a2824c"] = {
  f: Ops.Gl.Meshes.Rectangle_v2,
  objName: "Ops.Gl.Meshes.Rectangle_v2"
};

Ops.Gl.Render2Texture = function () {
  CABLES.Op.apply(this, arguments);
  var i = this;
  var e = {};
  var o = i.patch.cgl;

  var t = i.inTrigger("render"),
      n = i.inValueBool("use viewport size", true),
      r = i.inValueInt("texture width", 512),
      a = i.inValueInt("texture height", 512),
      l = i.inBool("Auto Aspect", false),
      s = i.inSwitch("filter", ["nearest", "linear", "mipmap"], "linear"),
      f = i.inSwitch("Wrap", ["Clamp", "Repeat", "Mirror"], "Repeat"),
      u = i.inSwitch("MSAA", ["none", "2x", "4x", "8x"], "none"),
      c = i.outTrigger("trigger"),
      g = i.outTexture("texture"),
      d = i.outTexture("textureDepth"),
      m = i.inValueBool("HDR"),
      p = i.inValueBool("Depth", true),
      _ = i.inValueBool("Clear", true);

  var h = null;
  var E = true;
  g.set(CGL.Texture.getEmptyTexture(o));
  i.setPortGroup("Size", [n, r, a, l]);
  n.onChange = x;

  function x() {
    r.setUiAttribs({
      greyout: n.get()
    });
    a.setUiAttribs({
      greyout: n.get()
    });
    l.setUiAttribs({
      greyout: n.get()
    });
  }

  function v() {
    E = true;
  }

  var T = [0, 0, 0, 0];
  m.onChange = p.onChange = _.onChange = s.onChange = f.onChange = u.onChange = v;

  function A() {
    var e = o.getViewPort();
    T[0] = e[0];
    T[1] = e[1];
    T[2] = e[2];
    T[3] = e[3];

    if (!h || E) {
      if (h) h.delete();
      var _n18 = CGL.Texture.WRAP_REPEAT;
      if (f.get() == "Clamp") _n18 = CGL.Texture.WRAP_CLAMP_TO_EDGE;else if (f.get() == "Mirror") _n18 = CGL.Texture.WRAP_MIRRORED_REPEAT;
      if (m.get() && s.get() == "mipmap") i.setUiError("fpmipmap", "Don't use mipmap and HDR at the same time, many systems do not support this.");else i.setUiError("fpmipmap", null);

      if (o.glVersion >= 2) {
        var _e120 = true;
        var _t122 = 4;

        if (u.get() == "none") {
          _t122 = 0;
          _e120 = false;
        }

        if (u.get() == "2x") _t122 = 2;
        if (u.get() == "4x") _t122 = 4;
        if (u.get() == "8x") _t122 = 8;
        h = new CGL.Framebuffer2(o, 8, 8, {
          name: "render2texture " + i.id,
          isFloatingPointTexture: m.get(),
          multisampling: _e120,
          wrap: _n18,
          depth: p.get(),
          multisamplingSamples: _t122,
          clear: _.get()
        });
      } else {
        h = new CGL.Framebuffer(o, 8, 8, {
          isFloatingPointTexture: m.get(),
          clear: _.get()
        });
      }

      if (s.get() == "nearest") h.setFilter(CGL.Texture.FILTER_NEAREST);else if (s.get() == "linear") h.setFilter(CGL.Texture.FILTER_LINEAR);else if (s.get() == "mipmap") h.setFilter(CGL.Texture.FILTER_MIPMAP);
      d.set(h.getTextureDepth());
      E = false;
    }

    if (n.get()) {
      r.set(o.getViewPort()[2]);
      a.set(o.getViewPort()[3]);
    }

    if (h.getWidth() != Math.ceil(r.get()) || h.getHeight() != Math.ceil(a.get())) {
      h.setSize(Math.max(1, Math.ceil(r.get())), Math.max(1, Math.ceil(a.get())));
    }

    h.renderStart(o);
    if (l.get()) mat4.perspective(o.pMatrix, 45, r.get() / a.get(), .1, 1e3);
    c.trigger();
    h.renderEnd(o);
    o.setViewPort(T[0], T[1], T[2], T[3]);
    g.set(CGL.Texture.getEmptyTexture(i.patch.cgl));
    g.set(h.getTextureColor());
  }

  t.onTriggered = A;
  i.preRender = A;
  x();
};

Ops.Gl.Render2Texture.prototype = new CABLES.Op();
CABLES.OPS["d01fa820-396c-4cb5-9d78-6b14762852af"] = {
  f: Ops.Gl.Render2Texture,
  objName: "Ops.Gl.Render2Texture"
};
window.addEventListener("load", function (e) {
  CABLES.jsLoaded = new Event("CABLES.jsLoaded");
  document.dispatchEvent(CABLES.jsLoaded);
});
this.CGL = this.CGL || {}, this.CGL.COREMODULES = this.CGL.COREMODULES || {}, this.CGL.COREMODULES.Shadermodifier = function (n) {
  var i = {};

  function o(e) {
    if (i[e]) return i[e].exports;
    var t = i[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
  }

  return o.m = n, o.c = i, o.d = function (e, t, n) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (o.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) {
      o.d(n, i, function (e) {
        return t[e];
      }.bind(null, i));
    }
    return n;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "", o(o.s = 0);
}([function (e, t, n) {
  "use strict";

  n.r(t);

  CGL.ShaderModifier = /*#__PURE__*/function () {
    function _class(e, t, n) {
      _classCallCheck(this, _class);

      this._cgl = e, this._name = t, this._origShaders = {}, this._uniforms = [], this._structUniforms = [], this._definesToggled = {}, this._defines = {}, this._mods = [], this._textures = [], this._boundShader = null, this._changedDefines = !0, this._changedUniforms = !0, this._modulesChanged = !1, this.needsTexturePush = !1, this._lastShader = null, 1 == this._cgl.glVersion && (this._cgl.gl.getExtension("OES_texture_float"), this._cgl.gl.getExtension("OES_texture_float_linear"), this._cgl.gl.getExtension("OES_texture_half_float"), this._cgl.gl.getExtension("OES_texture_half_float_linear"));
    }

    _createClass(_class, [{
      key: "bind",
      value: function bind() {
        var n = this._cgl.getShader();

        if (!n) return;
        this._boundShader = this._origShaders[n.id];
        var i = !1;

        if (this._boundShader && this._lastShader != this._boundShader.shader && (this._boundShader.shader.hasModule(this._mods[0].id) || (i = !0)), (i || !this._boundShader || n.lastCompile != this._boundShader.lastCompile || this._modulesChanged || n._needsRecompile) && (this._boundShader && this._boundShader.shader.dispose(), n._needsRecompile && n.compile(), this._boundShader = this._origShaders[n.id] = {
          lastCompile: n.lastCompile,
          orig: n,
          shader: n.copy()
        }, 1 == this._cgl.glVersion && (this._boundShader.shader.enableExtension("GL_OES_standard_derivatives"), this._boundShader.shader.enableExtension("GL_OES_texture_float"), this._boundShader.shader.enableExtension("GL_OES_texture_float_linear"), this._boundShader.shader.enableExtension("GL_OES_texture_half_float"), this._boundShader.shader.enableExtension("GL_OES_texture_half_float_linear")), this._addModulesToShader(this._boundShader.shader), this._updateDefinesShader(this._boundShader.shader), this._updateUniformsShader(this._boundShader.shader)), this._changedDefines && this._updateDefines(), this._changedUniforms && this._updateUniforms(), this._cgl.pushShader(this._boundShader.shader), this._boundShader.shader.copyUniformValues(this._boundShader.orig), this.needsTexturePush) {
          for (var _t123 = 0; _t123 < this._textures.length; _t123 += 1) {
            var _i67 = this._textures[_t123][0],
                _e121 = this._textures[_t123][1],
                o = this._textures[_t123][2];

            if (this._getUniform(_i67)) {
              var _n19 = this.getPrefixedName(_i67),
                  r = this._boundShader.shader.getUniform(_n19);

              r && this._boundShader.shader.pushTexture(r, _e121, o);
            }
          }

          this.needsTexturePush = !1, this._textures.length = 0;
        }

        this._modulesChanged = !1;
      }
    }, {
      key: "unbind",
      value: function unbind() {
        this._boundShader && this._cgl.popShader(), this._boundShader = null;
      }
    }, {
      key: "_addModulesToShader",
      value: function _addModulesToShader(t) {
        var n;
        this._mods.length > 1 && (n = this._mods[0]);

        for (var _e122 = 0; _e122 < this._mods.length; _e122++) {
          t.addModule(this._mods[_e122], n);
        }
      }
    }, {
      key: "_removeModulesFromShader",
      value: function _removeModulesFromShader(t) {
        for (var _e123 in this._origShaders) {
          this._origShaders[_e123].shader.removeModule(t);
        }
      }
    }, {
      key: "addModule",
      value: function addModule(e) {
        this._mods.push(e), this._modulesChanged = !0;
      }
    }, {
      key: "removeModule",
      value: function removeModule(t) {
        var n = [];

        for (var _e124 = 0; _e124 < this._mods.length; _e124++) {
          this._mods[_e124].title == t && (this._removeModulesFromShader(this._mods[_e124]), n.push(_e124));
        }

        for (var _e125 = n.length - 1; _e125 >= 0; _e125 -= 1) {
          this._mods.splice(n[_e125], 1);
        }

        this._modulesChanged = !0;
      }
    }, {
      key: "_updateUniformsShader",
      value: function _updateUniformsShader(o) {
        for (var _e126 = 0; _e126 < this._uniforms.length; _e126++) {
          var _t124 = this._uniforms[_e126],
              _n20 = this.getPrefixedName(_t124.name);

          if (!o.hasUniform(_n20) && !_t124.structName) {
            var _e127 = null;
            "both" === _t124.shaderType ? (_e127 = o.addUniformBoth(_t124.type, _n20, _t124.v1, _t124.v2, _t124.v3, _t124.v4), _e127.comment = "mod: " + this._name) : "frag" === _t124.shaderType ? (_e127 = o.addUniformFrag(_t124.type, _n20, _t124.v1, _t124.v2, _t124.v3, _t124.v4), _e127.comment = "mod: " + this._name) : "vert" === _t124.shaderType && (_e127 = o.addUniformVert(_t124.type, _n20, _t124.v1, _t124.v2, _t124.v3, _t124.v4), _e127.comment = "mod: " + this._name);
          }
        }

        for (var i = 0; i < this._structUniforms.length; i += 1) {
          var _e128 = this._structUniforms[i];
          var _t125 = _e128.uniformName,
              _n21 = _e128.structName;
          var r = _e128.members;
          _e128.propertyName;
          _t125 = this.getPrefixedName(_e128.uniformName), _n21 = this.getPrefixedName(_e128.structName), "frag" === _e128.shaderType && o.addUniformStructFrag(_n21, _t125, r), "vert" === _e128.shaderType && o.addUniformStructVert(_n21, _t125, r), "both" === _e128.shaderType && o.addUniformStructBoth(_n21, _t125, r);
        }
      }
    }, {
      key: "_updateUniforms",
      value: function _updateUniforms() {
        for (var _e129 in this._origShaders) {
          this._updateUniformsShader(this._origShaders[_e129].shader);
        }

        this._changedUniforms = !1;
      }
    }, {
      key: "_setUniformValue",
      value: function _setUniformValue(e, t, n) {
        var i = e.getUniform(t);
        i && i.setValue(n);
      }
    }, {
      key: "setUniformValue",
      value: function setUniformValue(e, t) {
        if (!this._getUniform(e)) return;
        var n = this.getPrefixedName(e);

        for (var _e130 in this._origShaders) {
          this._setUniformValue(this._origShaders[_e130].shader, n, t);
        }
      }
    }, {
      key: "hasUniform",
      value: function hasUniform(e) {
        return this._getUniform(e);
      }
    }, {
      key: "_getUniform",
      value: function _getUniform(t) {
        for (var _e131 = 0; _e131 < this._uniforms.length; _e131++) {
          if (this._uniforms[_e131].name == t) return this._uniforms[_e131];
          if (this._uniforms[_e131].structName && this._uniforms[_e131].propertyName == t) return this._uniforms[_e131];
        }

        return !1;
      }
    }, {
      key: "_getStructUniform",
      value: function _getStructUniform(t) {
        for (var _e132 = 0; _e132 < this._structUniforms.length; _e132 += 1) {
          if (this._structUniforms[_e132].uniformName === t) return this._structUniforms[_e132];
        }

        return null;
      }
    }, {
      key: "_isStructUniform",
      value: function _isStructUniform(t) {
        for (var _e133 = 0; _e133 < this._uniforms.length; _e133++) {
          if (this._uniforms[_e133].name == t) return !1;
          if (this._uniforms[_e133].structName && this._uniforms[_e133].propertyName == t) return !0;
        }

        return !1;
      }
    }, {
      key: "addUniform",
      value: function addUniform(t, n, i, o, r, a, l, s, f, u) {
        if (!this._getUniform(n)) {
          var _e134 = "both";
          u && (_e134 = u), this._uniforms.push({
            type: t,
            name: n,
            v1: i,
            v2: o,
            v3: r,
            v4: a,
            structUniformName: l,
            structName: s,
            propertyName: f,
            shaderType: _e134
          }), this._changedUniforms = !0;
        }
      }
    }, {
      key: "addUniformFrag",
      value: function addUniformFrag(e, t, n, i, o, r) {
        this.addUniform(e, t, n, i, o, r, null, null, null, "frag"), this._changedUniforms = !0;
      }
    }, {
      key: "addUniformVert",
      value: function addUniformVert(e, t, n, i, o, r) {
        this.addUniform(e, t, n, i, o, r, null, null, null, "vert"), this._changedUniforms = !0;
      }
    }, {
      key: "addUniformBoth",
      value: function addUniformBoth(e, t, n, i, o, r) {
        this.addUniform(e, t, n, i, o, r, null, null, null, "both"), this._changedUniforms = !0;
      }
    }, {
      key: "addUniformStruct",
      value: function addUniformStruct(t, n, i, o) {
        for (var _e135 = 0; _e135 < i.length; _e135 += 1) {
          var r = i[_e135];
          "2i" !== r.type && "i" !== r.type && "3i" !== r.type || "both" !== o || console.error("Adding an integer struct member to both shaders can potentially error. Please use different structs for each shader. Error occured in struct:", t, " with member:", r.name, " of type:", r.type, "."), this._getUniform(n + "." + r.name) || this.addUniform(r.type, n + "." + r.name, r.v1, r.v2, r.v3, r.v4, n, t, r.name, o);
        }

        this._getStructUniform(n) || this._structUniforms.push({
          structName: t,
          uniformName: n,
          members: i,
          shaderType: o
        });
      }
    }, {
      key: "addUniformStructVert",
      value: function addUniformStructVert(e, t, n) {
        this.addUniformStruct(e, t, n, "vert");
      }
    }, {
      key: "addUniformStructFrag",
      value: function addUniformStructFrag(e, t, n) {
        this.addUniformStruct(e, t, n, "frag");
      }
    }, {
      key: "addUniformStructBoth",
      value: function addUniformStructBoth(e, t, n) {
        this.addUniformStruct(e, t, n, "both");
      }
    }, {
      key: "pushTexture",
      value: function pushTexture(e, t, n) {
        if (!t) throw new Error("no texture given to texturestack");
        this._textures.push([e, t, n]), this.needsTexturePush = !0;
      }
    }, {
      key: "_removeUniformFromShader",
      value: function _removeUniformFromShader(e, t) {
        t.hasUniform(e) && t.removeUniform(e);
      }
    }, {
      key: "removeUniform",
      value: function removeUniform(n) {
        if (this._getUniform(n)) {
          for (var _t126 = this._uniforms.length - 1; _t126 >= 0; _t126 -= 1) {
            var _e136 = n;

            if (this._uniforms[_t126].name == n && !this._uniforms[_t126].structName) {
              for (var _n22 in this._origShaders) {
                this._removeUniformFromShader(this.getPrefixedName(_e136), this._origShaders[_n22].shader);
              }

              this._uniforms.splice(_t126, 1);
            }
          }

          this._changedUniforms = !0;
        }
      }
    }, {
      key: "removeUniformStruct",
      value: function removeUniformStruct(n) {
        if (this._getStructUniform(n)) {
          for (var _e137 = this._structUniforms.length - 1; _e137 >= 0; _e137 -= 1) {
            var _t127 = this._structUniforms[_e137];

            if (_t127.uniformName === n) {
              for (var _n23 in this._origShaders) {
                for (var _e138 = 0; _e138 < _t127.members.length; _e138 += 1) {
                  var i = _t127.members[_e138];

                  this._removeUniformFromShader(this.getPrefixedName(i.name), this._origShaders[_n23].shader);
                }
              }

              this._structUniforms.splice(_e137, 1);
            }
          }

          this._changedUniforms = !0;
        }
      }
    }, {
      key: "getPrefixedName",
      value: function getPrefixedName(e) {
        var t = this._mods[0].group;
        if (void 0 !== t) return 0 == e.indexOf("MOD_") && (e = "mod" + t + "_" + (e = e.substr("MOD_".length))), e;
      }
    }, {
      key: "_updateDefinesShader",
      value: function _updateDefinesShader(n) {
        for (var _t128 in this._defines) {
          var _e139 = this.getPrefixedName(_t128);

          null !== this._defines[_t128] && void 0 !== this._defines[_t128] ? n.define(_e139, this._defines[_t128]) : n.removeDefine(_e139);
        }

        for (var _t129 in this._definesToggled) {
          var _e140 = this.getPrefixedName(_t129);

          n.toggleDefine(_e140, this._definesToggled[_t129]);
        }
      }
    }, {
      key: "_updateDefines",
      value: function _updateDefines() {
        for (var _e141 in this._origShaders) {
          this._updateDefinesShader(this._origShaders[_e141].shader);
        }

        this._changedDefines = !1;
      }
    }, {
      key: "define",
      value: function define(e, t) {
        this._defines[e] = t, this._changedDefines = !0;
      }
    }, {
      key: "removeDefine",
      value: function removeDefine(e) {
        this._defines[e] = null, this._changedDefines = !0;
      }
    }, {
      key: "hasDefine",
      value: function hasDefine(e) {
        return null !== this._defines[e] && void 0 !== this._defines[e];
      }
    }, {
      key: "toggleDefine",
      value: function toggleDefine(e, t) {
        this._changedDefines = !0, this._definesToggled[e] = t;
      }
    }, {
      key: "currentShader",
      value: function currentShader() {
        return this._boundShader.shader;
      }
    }, {
      key: "dispose",
      value: function dispose() {}
    }]);

    return _class;
  }();
}]).Shadermodifier;
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51160" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/patch.js"], null)
//# sourceMappingURL=/patch.eb198df1.js.map