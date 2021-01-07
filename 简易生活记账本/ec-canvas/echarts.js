! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function(t) {
  "use strict";

  function e(t) {
    var e = {},
      n = {},
      i = t.match(/Firefox\/([\d.]+)/),
      r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
      a = t.match(/Edge\/([\d.]+)/),
      o = /micromessenger/i.test(t);
    return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), {
      browser: n,
      os: e,
      node: !1,
      canvasSupported: !!document.createElement("canvas").getContext,
      svgSupported: "undefined" != typeof SVGRect,
      touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
      pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11),
      domSupported: "undefined" != typeof document
    }
  }

  function n(t, e) {
    "createCanvas" === t && (ef = null), Jd[t] = e
  }

  function i(t) {
    if (null == t || "object" != typeof t) return t;
    var e = t,
      n = Yd.call(t);
    if ("[object Array]" === n) {
      if (!z(t)) {
        e = [];
        for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
      }
    } else if (jd[n]) {
      if (!z(t)) {
        var o = t.constructor;
        if (t.constructor.from) e = o.from(t);
        else {
          e = new o(t.length);
          for (var r = 0, a = t.length; a > r; r++) e[r] = i(t[r])
        }
      }
    } else if (!Xd[n] && !z(t) && !T(t)) {
      e = {};
      for (var s in t) t.hasOwnProperty(s) && (e[s] = i(t[s]))
    }
    return e
  }

  function r(t, e, n) {
    if (!S(e) || !S(t)) return n ? i(e) : t;
    for (var a in e)
      if (e.hasOwnProperty(a)) {
        var o = t[a],
          s = e[a];
        !S(s) || !S(o) || _(s) || _(o) || T(s) || T(o) || M(s) || M(o) || z(s) || z(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n)
      }
    return t
  }

  function a(t, e) {
    for (var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);
    return n
  }

  function o(t, e) {
    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
  }

  function s(t, e, n) {
    for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
    return t
  }

  function l() {
    return ef || (ef = tf().getContext("2d")), ef
  }

  function u(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);
      for (var n = 0, i = t.length; i > n; n++)
        if (t[n] === e) return n
    }
    return -1
  }

  function h(t, e) {
    function n() {}
    var i = t.prototype;
    n.prototype = e.prototype, t.prototype = new n;
    for (var r in i) t.prototype[r] = i[r];
    t.prototype.constructor = t, t.superClass = e
  }

  function c(t, e, n) {
    t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, n)
  }

  function d(t) {
    return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
  }

  function f(t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === Ud) t.forEach(e, n);
      else if (t.length === +t.length)
      for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t);
    else
      for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
  }

  function p(t, e, n) {
    if (t && e) {
      if (t.map && t.map === Kd) return t.map(e, n);
      for (var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));
      return i
    }
  }

  function g(t, e, n, i) {
    if (t && e) {
      if (t.reduce && t.reduce === Qd) return t.reduce(e, n, i);
      for (var r = 0, a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);
      return n
    }
  }

  function v(t, e, n) {
    if (t && e) {
      if (t.filter && t.filter === Zd) return t.filter(e, n);
      for (var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
      return i
    }
  }

  function m(t, e, n) {
    if (t && e)
      for (var i = 0, r = t.length; r > i; i++)
        if (e.call(n, t[i], i, t)) return t[i]
  }

  function y(t, e) {
    var n = $d.call(arguments, 2);
    return function() {
      return t.apply(e, n.concat($d.call(arguments)))
    }
  }

  function x(t) {
    var e = $d.call(arguments, 1);
    return function() {
      return t.apply(this, e.concat($d.call(arguments)))
    }
  }

  function _(t) {
    return "[object Array]" === Yd.call(t)
  }

  function w(t) {
    return "function" == typeof t
  }

  function b(t) {
    return "[object String]" === Yd.call(t)
  }

  function S(t) {
    var e = typeof t;
    return "function" === e || !!t && "object" == e
  }

  function M(t) {
    return !!Xd[Yd.call(t)]
  }

  function I(t) {
    return !!jd[Yd.call(t)]
  }

  function T(t) {
    return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
  }

  function C(t) {
    return t !== t
  }

  function k() {
    for (var t = 0, e = arguments.length; e > t; t++)
      if (null != arguments[t]) return arguments[t]
  }

  function D(t, e) {
    return null != t ? t : e
  }

  function A(t, e, n) {
    return null != t ? t : null != e ? e : n
  }

  function P() {
    return Function.call.apply($d, arguments)
  }

  function O(t) {
    if ("number" == typeof t) return [t, t, t, t];
    var e = t.length;
    return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
  }

  function L(t, e) {
    if (!t) throw new Error(e)
  }

  function B(t) {
    return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
  }

  function E(t) {
    t[nf] = !0
  }

  function z(t) {
    return t[nf]
  }

  function R(t) {
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t)
    }
    var n = _(t);
    this.data = {};
    var i = this;
    t instanceof R ? t.each(e) : t && f(t, e)
  }

  function F(t) {
    return new R(t)
  }

  function N(t, e) {
    for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
    var r = t.length;
    for (i = 0; i < e.length; i++) n[i + r] = e[i];
    return n
  }

  function H() {}

  function V(t, e) {
    var n = new af(2);
    return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
  }

  function G(t, e) {
    return t[0] = e[0], t[1] = e[1], t
  }

  function W(t) {
    var e = new af(2);
    return e[0] = t[0], e[1] = t[1], e
  }

  function X(t, e, n) {
    return t[0] = e, t[1] = n, t
  }

  function j(t, e, n) {
    return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
  }

  function Y(t, e, n, i) {
    return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
  }

  function q(t, e, n) {
    return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
  }

  function U(t) {
    return Math.sqrt(Z(t))
  }

  function Z(t) {
    return t[0] * t[0] + t[1] * t[1]
  }

  function $(t, e, n) {
    return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
  }

  function K(t, e, n) {
    return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
  }

  function Q(t, e) {
    return t[0] * e[0] + t[1] * e[1]
  }

  function J(t, e, n) {
    return t[0] = e[0] * n, t[1] = e[1] * n, t
  }

  function te(t, e) {
    var n = U(e);
    return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
  }

  function ee(t, e) {
    return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
  }

  function ne(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
  }

  function ie(t, e) {
    return t[0] = -e[0], t[1] = -e[1], t
  }

  function re(t, e, n, i) {
    return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
  }

  function ae(t, e, n) {
    var i = e[0],
      r = e[1];
    return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
  }

  function oe(t, e, n) {
    return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
  }

  function se(t, e, n) {
    return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
  }

  function le() {
    this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
  }

  function ue(t, e) {
    return {
      target: t,
      topTarget: e && e.topTarget
    }
  }

  function he(t, e) {
    var n = t._$eventProcessor;
    return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e
  }

  function ce(t) {
    return t.getBoundingClientRect ? t.getBoundingClientRect() : {
      left: 0,
      top: 0
    }
  }

  function de(t, e, n, i) {
    return n = n || {}, i || !Wd.canvasSupported ? fe(t, e, n) : Wd.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : fe(t, e, n), n
  }

  function fe(t, e, n) {
    var i = ce(t);
    n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
  }

  function pe(t, e, n) {
    if (e = e || window.event, null != e.zrX) return e;
    var i = e.type,
      r = i && i.indexOf("touch") >= 0;
    if (r) {
      var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
      a && de(t, a, e, n)
    } else de(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
    var o = e.button;
    return null == e.which && void 0 !== o && pf.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
  }

  function ge(t, e, n) {
    ff ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
  }

  function ve(t, e, n) {
    ff ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
  }

  function me(t, e, n) {
    return {
      type: t,
      event: n,
      target: e.target,
      topTarget: e.topTarget,
      cancelBubble: !1,
      offsetX: n.zrX,
      offsetY: n.zrY,
      gestureEvent: n.gestureEvent,
      pinchX: n.pinchX,
      pinchY: n.pinchY,
      pinchScale: n.pinchScale,
      wheelDelta: n.zrDelta,
      zrByTouch: n.zrByTouch,
      which: n.which,
      stop: ye
    }
  }

  function ye() {
    gf(this.event)
  }

  function xe() {}

  function _e(t, e, n) {
    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
      for (var i, r = t; r;) {
        if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
        r.silent && (i = !0), r = r.parent
      }
      return i ? vf : !0
    }
    return !1
  }

  function we() {
    var t = new xf(6);
    return be(t), t
  }

  function be(t) {
    return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
  }

  function Se(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
  }

  function Me(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
      r = e[1] * n[0] + e[3] * n[1],
      a = e[0] * n[2] + e[2] * n[3],
      o = e[1] * n[2] + e[3] * n[3],
      s = e[0] * n[4] + e[2] * n[5] + e[4],
      l = e[1] * n[4] + e[3] * n[5] + e[5];
    return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
  }

  function Ie(t, e, n) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
  }

  function Te(t, e, n) {
    var i = e[0],
      r = e[2],
      a = e[4],
      o = e[1],
      s = e[3],
      l = e[5],
      u = Math.sin(n),
      h = Math.cos(n);
    return t[0] = i * h + o * u, t[1] = -i * u + o * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * a + u * l, t[5] = h * l - u * a, t
  }

  function Ce(t, e, n) {
    var i = n[0],
      r = n[1];
    return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
  }

  function ke(t, e) {
    var n = e[0],
      i = e[2],
      r = e[4],
      a = e[1],
      o = e[3],
      s = e[5],
      l = n * o - a * i;
    return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null
  }

  function De(t) {
    var e = we();
    return Se(e, t), e
  }

  function Ae(t) {
    return t > bf || -bf > t
  }

  function Pe(t) {
    this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
  }

  function Oe(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
  }

  function Le(t) {
    return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
  }

  function Be(t) {
    return 0 > t ? 0 : t > 1 ? 1 : t
  }

  function Ee(t) {
    return Oe(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
  }

  function ze(t) {
    return Be(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
  }

  function Re(t, e, n) {
    return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
  }

  function Fe(t, e, n) {
    return t + (e - t) * n
  }

  function Ne(t, e, n, i, r) {
    return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
  }

  function He(t, e) {
    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
  }

  function Ve(t, e) {
    zf && He(zf, e), zf = Ef.put(t, zf || e.slice())
  }

  function Ge(t, e) {
    if (t) {
      e = e || [];
      var n = Ef.get(t);
      if (n) return He(e, n);
      t += "";
      var i = t.replace(/ /g, "").toLowerCase();
      if (i in Bf) return He(e, Bf[i]), Ve(t, e), e;
      if ("#" !== i.charAt(0)) {
        var r = i.indexOf("("),
          a = i.indexOf(")");
        if (-1 !== r && a + 1 === i.length) {
          var o = i.substr(0, r),
            s = i.substr(r + 1, a - (r + 1)).split(","),
            l = 1;
          switch (o) {
            case "rgba":
              if (4 !== s.length) return void Ne(e, 0, 0, 0, 1);
              l = ze(s.pop());
            case "rgb":
              return 3 !== s.length ? void Ne(e, 0, 0, 0, 1) : (Ne(e, Ee(s[0]), Ee(s[1]), Ee(s[2]), l), Ve(t, e), e);
            case "hsla":
              return 4 !== s.length ? void Ne(e, 0, 0, 0, 1) : (s[3] = ze(s[3]), We(s, e), Ve(t, e), e);
            case "hsl":
              return 3 !== s.length ? void Ne(e, 0, 0, 0, 1) : (We(s, e), Ve(t, e), e);
            default:
              return
          }
        }
        Ne(e, 0, 0, 0, 1)
      } else {
        if (4 === i.length) {
          var u = parseInt(i.substr(1), 16);
          return u >= 0 && 4095 >= u ? (Ne(e, (3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1), Ve(t, e), e) : void Ne(e, 0, 0, 0, 1)
        }
        if (7 === i.length) {
          var u = parseInt(i.substr(1), 16);
          return u >= 0 && 16777215 >= u ? (Ne(e, (16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1), Ve(t, e), e) : void Ne(e, 0, 0, 0, 1)
        }
      }
    }
  }

  function We(t, e) {
    var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
      i = ze(t[1]),
      r = ze(t[2]),
      a = .5 >= r ? r * (i + 1) : r + i - r * i,
      o = 2 * r - a;
    return e = e || [], Ne(e, Oe(255 * Re(o, a, n + 1 / 3)), Oe(255 * Re(o, a, n)), Oe(255 * Re(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
  }

  function Xe(t) {
    if (t) {
      var e, n, i = t[0] / 255,
        r = t[1] / 255,
        a = t[2] / 255,
        o = Math.min(i, r, a),
        s = Math.max(i, r, a),
        l = s - o,
        u = (s + o) / 2;
      if (0 === l) e = 0, n = 0;
      else {
        n = .5 > u ? l / (s + o) : l / (2 - s - o);
        var h = ((s - i) / 6 + l / 2) / l,
          c = ((s - r) / 6 + l / 2) / l,
          d = ((s - a) / 6 + l / 2) / l;
        i === s ? e = d - c : r === s ? e = 1 / 3 + h - d : a === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1)
      }
      var f = [360 * e, n, u];
      return null != t[3] && f.push(t[3]), f
    }
  }

  function je(t, e) {
    var n = Ge(t);
    if (n) {
      for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
      return Ke(n, 4 === n.length ? "rgba" : "rgb")
    }
  }

  function Ye(t) {
    var e = Ge(t);
    return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
  }

  function qe(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      n = n || [];
      var i = t * (e.length - 1),
        r = Math.floor(i),
        a = Math.ceil(i),
        o = e[r],
        s = e[a],
        l = i - r;
      return n[0] = Oe(Fe(o[0], s[0], l)), n[1] = Oe(Fe(o[1], s[1], l)), n[2] = Oe(Fe(o[2], s[2], l)), n[3] = Be(Fe(o[3], s[3], l)), n
    }
  }

  function Ue(t, e, n) {
    if (e && e.length && t >= 0 && 1 >= t) {
      var i = t * (e.length - 1),
        r = Math.floor(i),
        a = Math.ceil(i),
        o = Ge(e[r]),
        s = Ge(e[a]),
        l = i - r,
        u = Ke([Oe(Fe(o[0], s[0], l)), Oe(Fe(o[1], s[1], l)), Oe(Fe(o[2], s[2], l)), Be(Fe(o[3], s[3], l))], "rgba");
      return n ? {
        color: u,
        leftIndex: r,
        rightIndex: a,
        value: i
      } : u
    }
  }

  function Ze(t, e, n, i) {
    return t = Ge(t), t ? (t = Xe(t), null != e && (t[0] = Le(e)), null != n && (t[1] = ze(n)), null != i && (t[2] = ze(i)), Ke(We(t), "rgba")) : void 0
  }

  function $e(t, e) {
    return t = Ge(t), t && null != e ? (t[3] = Be(e), Ke(t, "rgba")) : void 0
  }

  function Ke(t, e) {
    if (t && t.length) {
      var n = t[0] + "," + t[1] + "," + t[2];
      return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
    }
  }

  function Qe(t, e) {
    return t[e]
  }

  function Je(t, e, n) {
    t[e] = n
  }

  function tn(t, e, n) {
    return (e - t) * n + t
  }

  function en(t, e, n) {
    return n > .5 ? e : t
  }

  function nn(t, e, n, i, r) {
    var a = t.length;
    if (1 == r)
      for (var o = 0; a > o; o++) i[o] = tn(t[o], e[o], n);
    else
      for (var s = a && t[0].length, o = 0; a > o; o++)
        for (var l = 0; s > l; l++) i[o][l] = tn(t[o][l], e[o][l], n)
  }

  function rn(t, e, n) {
    var i = t.length,
      r = e.length;
    if (i !== r) {
      var a = i > r;
      if (a) t.length = r;
      else
        for (var o = i; r > o; o++) t.push(1 === n ? e[o] : Hf.call(e[o]))
    }
    for (var s = t[0] && t[0].length, o = 0; o < t.length; o++)
      if (1 === n) isNaN(t[o]) && (t[o] = e[o]);
      else
        for (var l = 0; s > l; l++) isNaN(t[o][l]) && (t[o][l] = e[o][l])
  }

  function an(t, e, n) {
    if (t === e) return !0;
    var i = t.length;
    if (i !== e.length) return !1;
    if (1 === n) {
      for (var r = 0; i > r; r++)
        if (t[r] !== e[r]) return !1
    } else
      for (var a = t[0].length, r = 0; i > r; r++)
        for (var o = 0; a > o; o++)
          if (t[r][o] !== e[r][o]) return !1;
    return !0
  }

  function on(t, e, n, i, r, a, o, s, l) {
    var u = t.length;
    if (1 == l)
      for (var h = 0; u > h; h++) s[h] = sn(t[h], e[h], n[h], i[h], r, a, o);
    else
      for (var c = t[0].length, h = 0; u > h; h++)
        for (var d = 0; c > d; d++) s[h][d] = sn(t[h][d], e[h][d], n[h][d], i[h][d], r, a, o)
  }

  function sn(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
      l = .5 * (i - e);
    return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
  }

  function ln(t) {
    if (d(t)) {
      var e = t.length;
      if (d(t[0])) {
        for (var n = [], i = 0; e > i; i++) n.push(Hf.call(t[i]));
        return n
      }
      return Hf.call(t)
    }
    return t
  }

  function un(t) {
    return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
  }

  function hn(t) {
    var e = t[t.length - 1].value;
    return d(e && e[0]) ? 2 : 1
  }

  function cn(t, e, n, i, r, a) {
    var o = t._getter,
      s = t._setter,
      l = "spline" === e,
      u = i.length;
    if (u) {
      var h, c = i[0].value,
        f = d(c),
        p = !1,
        g = !1,
        v = f ? hn(i) : 0;
      i.sort(function(t, e) {
        return t.time - e.time
      }), h = i[u - 1].time;
      for (var m = [], y = [], x = i[0].value, _ = !0, w = 0; u > w; w++) {
        m.push(i[w].time / h);
        var b = i[w].value;
        if (f && an(b, x, v) || !f && b === x || (_ = !1), x = b, "string" == typeof b) {
          var S = Ge(b);
          S ? (b = S, p = !0) : g = !0
        }
        y.push(b)
      }
      if (a || !_) {
        for (var M = y[u - 1], w = 0; u - 1 > w; w++) f ? rn(y[w], M, v) : !isNaN(y[w]) || isNaN(M) || g || p || (y[w] = M);
        f && rn(o(t._target, r), M, v);
        var I, T, C, k, D, A, P = 0,
          O = 0;
        if (p) var L = [0, 0, 0, 0];
        var B = function(t, e) {
            var n;
            if (0 > e) n = 0;
            else if (O > e) {
              for (I = Math.min(P + 1, u - 1), n = I; n >= 0 && !(m[n] <= e); n--);
              n = Math.min(n, u - 2)
            } else {
              for (n = P; u > n && !(m[n] > e); n++);
              n = Math.min(n - 1, u - 2)
            }
            P = n, O = e;
            var i = m[n + 1] - m[n];
            if (0 !== i)
              if (T = (e - m[n]) / i, l)
                if (k = y[n], C = y[0 === n ? n : n - 1], D = y[n > u - 2 ? u - 1 : n + 1], A = y[n > u - 3 ? u - 1 : n + 2], f) on(C, k, D, A, T, T * T, T * T * T, o(t, r), v);
                else {
                  var a;
                  if (p) a = on(C, k, D, A, T, T * T, T * T * T, L, 1), a = un(L);
                  else {
                    if (g) return en(k, D, T);
                    a = sn(C, k, D, A, T, T * T, T * T * T)
                  }
                  s(t, r, a)
                }
            else if (f) nn(y[n], y[n + 1], T, o(t, r), v);
            else {
              var a;
              if (p) nn(y[n], y[n + 1], T, L, 1), a = un(L);
              else {
                if (g) return en(y[n], y[n + 1], T);
                a = tn(y[n], y[n + 1], T)
              }
              s(t, r, a)
            }
          },
          E = new Pe({
            target: t._target,
            life: h,
            loop: t._loop,
            delay: t._delay,
            onframe: B,
            ondestroy: n
          });
        return e && "spline" !== e && (E.easing = e), E
      }
    }
  }

  function dn(t, e, n, i, r, a, o, s) {
    function l() {
      h--, h || a && a()
    }
    b(i) ? (a = r, r = i, i = 0) : w(r) ? (a = r, r = "linear", i = 0) : w(i) ? (a = i, i = 0) : w(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), fn(t, "", t, e, n, i, s);
    var u = t.animators.slice(),
      h = u.length;
    h || a && a();
    for (var c = 0; c < u.length; c++) u[c].done(l).start(r, o)
  }

  function fn(t, e, n, i, r, a, o) {
    var s = {},
      l = 0;
    for (var u in i) i.hasOwnProperty(u) && (null != n[u] ? S(i[u]) && !d(i[u]) ? fn(t, e ? e + "." + u : u, n[u], i[u], r, a, o) : (o ? (s[u] = n[u], pn(t, e, u, i[u])) : s[u] = i[u], l++) : null == i[u] || o || pn(t, e, u, i[u]));
    l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0)
  }

  function pn(t, e, n, i) {
    if (e) {
      var r = {};
      r[e] = {}, r[e][n] = i, t.attr(r)
    } else t.attr(n, i)
  }

  function gn(t, e, n, i) {
    0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
  }

  function vn(t) {
    for (var e = 0; t >= Jf;) e |= 1 & t, t >>= 1;
    return t + e
  }

  function mn(t, e, n, i) {
    var r = e + 1;
    if (r === n) return 1;
    if (i(t[r++], t[e]) < 0) {
      for (; n > r && i(t[r], t[r - 1]) < 0;) r++;
      yn(t, e, r)
    } else
      for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;
    return r - e
  }

  function yn(t, e, n) {
    for (n--; n > e;) {
      var i = t[e];
      t[e++] = t[n], t[n--] = i
    }
  }

  function xn(t, e, n, i, r) {
    for (i === e && i++; n > i; i++) {
      for (var a, o = t[i], s = e, l = i; l > s;) a = s + l >>> 1, r(o, t[a]) < 0 ? l = a : s = a + 1;
      var u = i - s;
      switch (u) {
        case 3:
          t[s + 3] = t[s + 2];
        case 2:
          t[s + 2] = t[s + 1];
        case 1:
          t[s + 1] = t[s];
          break;
        default:
          for (; u > 0;) t[s + u] = t[s + u - 1], u--
      }
      t[s] = o
    }
  }

  function _n(t, e, n, i, r, a) {
    var o = 0,
      s = 0,
      l = 1;
    if (a(t, e[n + r]) > 0) {
      for (s = i - r; s > l && a(t, e[n + r + l]) > 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s), o += r, l += r
    } else {
      for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s);
      var u = o;
      o = r - l, l = r - u
    }
    for (o++; l > o;) {
      var h = o + (l - o >>> 1);
      a(t, e[n + h]) > 0 ? o = h + 1 : l = h
    }
    return l
  }

  function wn(t, e, n, i, r, a) {
    var o = 0,
      s = 0,
      l = 1;
    if (a(t, e[n + r]) < 0) {
      for (s = r + 1; s > l && a(t, e[n + r - l]) < 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s);
      var u = o;
      o = r - l, l = r - u
    } else {
      for (s = i - r; s > l && a(t, e[n + r + l]) >= 0;) o = l, l = (l << 1) + 1, 0 >= l && (l = s);
      l > s && (l = s), o += r, l += r
    }
    for (o++; l > o;) {
      var h = o + (l - o >>> 1);
      a(t, e[n + h]) < 0 ? l = h : o = h + 1
    }
    return l
  }

  function bn(t, e) {
    function n(t, e) {
      l[c] = t, u[c] = e, c += 1
    }

    function i() {
      for (; c > 1;) {
        var t = c - 2;
        if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--;
        else if (u[t] > u[t + 1]) break;
        a(t)
      }
    }

    function r() {
      for (; c > 1;) {
        var t = c - 2;
        t > 0 && u[t - 1] < u[t + 1] && t--, a(t)
      }
    }

    function a(n) {
      var i = l[n],
        r = u[n],
        a = l[n + 1],
        h = u[n + 1];
      u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;
      var d = wn(t[a], t, i, r, 0, e);
      i += d, r -= d, 0 !== r && (h = _n(t[i + r - 1], t, a, h, h - 1, e), 0 !== h && (h >= r ? o(i, r, a, h) : s(i, r, a, h)))
    }

    function o(n, i, r, a) {
      var o = 0;
      for (o = 0; i > o; o++) d[o] = t[n + o];
      var s = 0,
        l = r,
        u = n;
      if (t[u++] = t[l++], 0 !== --a) {
        if (1 === i) {
          for (o = 0; a > o; o++) t[u + o] = t[l + o];
          return void(t[u + a] = d[s])
        }
        for (var c, f, p, g = h;;) {
          c = 0, f = 0, p = !1;
          do
            if (e(t[l], d[s]) < 0) {
              if (t[u++] = t[l++], f++, c = 0, 0 === --a) {
                p = !0;
                break
              }
            } else if (t[u++] = d[s++], c++, f = 0, 1 === --i) {
            p = !0;
            break
          } while (g > (c | f));
          if (p) break;
          do {
            if (c = wn(t[l], d, s, i, 0, e), 0 !== c) {
              for (o = 0; c > o; o++) t[u + o] = d[s + o];
              if (u += c, s += c, i -= c, 1 >= i) {
                p = !0;
                break
              }
            }
            if (t[u++] = t[l++], 0 === --a) {
              p = !0;
              break
            }
            if (f = _n(d[s], t, l, a, 0, e), 0 !== f) {
              for (o = 0; f > o; o++) t[u + o] = t[l + o];
              if (u += f, l += f, a -= f, 0 === a) {
                p = !0;
                break
              }
            }
            if (t[u++] = d[s++], 1 === --i) {
              p = !0;
              break
            }
            g--
          } while (c >= tp || f >= tp);
          if (p) break;
          0 > g && (g = 0), g += 2
        }
        if (h = g, 1 > h && (h = 1), 1 === i) {
          for (o = 0; a > o; o++) t[u + o] = t[l + o];
          t[u + a] = d[s]
        } else {
          if (0 === i) throw new Error;
          for (o = 0; i > o; o++) t[u + o] = d[s + o]
        }
      } else
        for (o = 0; i > o; o++) t[u + o] = d[s + o]
    }

    function s(n, i, r, a) {
      var o = 0;
      for (o = 0; a > o; o++) d[o] = t[r + o];
      var s = n + i - 1,
        l = a - 1,
        u = r + a - 1,
        c = 0,
        f = 0;
      if (t[u--] = t[s--], 0 !== --i) {
        if (1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
          return void(t[u] = d[l])
        }
        for (var p = h;;) {
          var g = 0,
            v = 0,
            m = !1;
          do
            if (e(d[l], t[s]) < 0) {
              if (t[u--] = t[s--], g++, v = 0, 0 === --i) {
                m = !0;
                break
              }
            } else if (t[u--] = d[l--], v++, g = 0, 1 === --a) {
            m = !0;
            break
          } while (p > (g | v));
          if (m) break;
          do {
            if (g = i - wn(d[l], t, n, i, i - 1, e), 0 !== g) {
              for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, o = g - 1; o >= 0; o--) t[f + o] = t[c + o];
              if (0 === i) {
                m = !0;
                break
              }
            }
            if (t[u--] = d[l--], 1 === --a) {
              m = !0;
              break
            }
            if (v = a - _n(t[s], d, 0, a, a - 1, e), 0 !== v) {
              for (u -= v, l -= v, a -= v, f = u + 1, c = l + 1, o = 0; v > o; o++) t[f + o] = d[c + o];
              if (1 >= a) {
                m = !0;
                break
              }
            }
            if (t[u--] = t[s--], 0 === --i) {
              m = !0;
              break
            }
            p--
          } while (g >= tp || v >= tp);
          if (m) break;
          0 > p && (p = 0), p += 2
        }
        if (h = p, 1 > h && (h = 1), 1 === a) {
          for (u -= i, s -= i, f = u + 1, c = s + 1, o = i - 1; o >= 0; o--) t[f + o] = t[c + o];
          t[u] = d[l]
        } else {
          if (0 === a) throw new Error;
          for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
        }
      } else
        for (c = u - (a - 1), o = 0; a > o; o++) t[c + o] = d[o]
    }
    var l, u, h = tp,
      c = 0,
      d = [];
    l = [], u = [], this.mergeRuns = i, this.forceMergeRuns = r, this.pushRun = n
  }

  function Sn(t, e, n, i) {
    n || (n = 0), i || (i = t.length);
    var r = i - n;
    if (!(2 > r)) {
      var a = 0;
      if (Jf > r) return a = mn(t, n, i, e), void xn(t, n, i, n + a, e);
      var o = new bn(t, e),
        s = vn(r);
      do {
        if (a = mn(t, n, i, e), s > a) {
          var l = r;
          l > s && (l = s), xn(t, n, n + l, n + a, e), a = l
        }
        o.pushRun(n, a), o.mergeRuns(), r -= a, n += a
      } while (0 !== r);
      o.forceMergeRuns()
    }
  }

  function Mn(t, e) {
    return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
  }

  function In(t, e, n) {
    var i = null == e.x ? 0 : e.x,
      r = null == e.x2 ? 1 : e.x2,
      a = null == e.y ? 0 : e.y,
      o = null == e.y2 ? 0 : e.y2;
    e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o;
    var s = t.createLinearGradient(i, a, r, o);
    return s
  }

  function Tn(t, e, n) {
    var i = n.width,
      r = n.height,
      a = Math.min(i, r),
      o = null == e.x ? .5 : e.x,
      s = null == e.y ? .5 : e.y,
      l = null == e.r ? .5 : e.r;
    e.global || (o = o * i + n.x, s = s * r + n.y, l *= a);
    var u = t.createRadialGradient(o, s, 0, o, s, l);
    return u
  }

  function Cn() {
    return !1
  }

  function kn(t, e, n) {
    var i = tf(),
      r = e.getWidth(),
      a = e.getHeight(),
      o = i.style;
    return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i
  }

  function Dn(t) {
    if ("string" == typeof t) {
      var e = dp.get(t);
      return e && e.image
    }
    return t
  }

  function An(t, e, n, i, r) {
    if (t) {
      if ("string" == typeof t) {
        if (e && e.__zrImageSrc === t || !n) return e;
        var a = dp.get(t),
          o = {
            hostEl: n,
            cb: i,
            cbPayload: r
          };
        return a ? (e = a.image, !On(e) && a.pending.push(o)) : (!e && (e = new Image), e.onload = e.onerror = Pn, dp.put(t, e.__cachedImgObj = {
          image: e,
          pending: [o]
        }), e.src = e.__zrImageSrc = t), e
      }
      return t
    }
    return e
  }

  function Pn() {
    var t = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
        i = n.cb;
      i && i(this, n.cbPayload), n.hostEl.dirty()
    }
    t.pending.length = 0
  }

  function On(t) {
    return t && t.width && t.height
  }

  function Ln(t, e) {
    e = e || mp;
    var n = t + ":" + e;
    if (fp[n]) return fp[n];
    for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max(jn(i[a], e).width, r);
    return pp > gp && (pp = 0, fp = {}), pp++, fp[n] = r, r
  }

  function Bn(t, e, n, i, r, a, o) {
    return a ? zn(t, e, n, i, r, a, o) : En(t, e, n, i, r, o)
  }

  function En(t, e, n, i, r, a) {
    var o = Yn(t, e, r, a),
      s = Ln(t, e);
    r && (s += r[1] + r[3]);
    var l = o.outerHeight,
      u = Rn(0, s, n),
      h = Fn(0, l, i),
      c = new gn(u, h, s, l);
    return c.lineHeight = o.lineHeight, c
  }

  function zn(t, e, n, i, r, a, o) {
    var s = qn(t, {
        rich: a,
        truncate: o,
        font: e,
        textAlign: n,
        textPadding: r
      }),
      l = s.outerWidth,
      u = s.outerHeight,
      h = Rn(0, l, n),
      c = Fn(0, u, i);
    return new gn(h, c, l, u)
  }

  function Rn(t, e, n) {
    return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
  }

  function Fn(t, e, n) {
    return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
  }

  function Nn(t, e, n) {
    var i = e.x,
      r = e.y,
      a = e.height,
      o = e.width,
      s = a / 2,
      l = "left",
      u = "top";
    switch (t) {
      case "left":
        i -= n, r += s, l = "right", u = "middle";
        break;
      case "right":
        i += n + o, r += s, u = "middle";
        break;
      case "top":
        i += o / 2, r -= n, l = "center", u = "bottom";
        break;
      case "bottom":
        i += o / 2, r += a + n, l = "center";
        break;
      case "inside":
        i += o / 2, r += s, l = "center", u = "middle";
        break;
      case "insideLeft":
        i += n, r += s, u = "middle";
        break;
      case "insideRight":
        i += o - n, r += s, l = "right", u = "middle";
        break;
      case "insideTop":
        i += o / 2, r += n, l = "center";
        break;
      case "insideBottom":
        i += o / 2, r += a - n, l = "center", u = "bottom";
        break;
      case "insideTopLeft":
        i += n, r += n;
        break;
      case "insideTopRight":
        i += o - n, r += n, l = "right";
        break;
      case "insideBottomLeft":
        i += n, r += a - n, u = "bottom";
        break;
      case "insideBottomRight":
        i += o - n, r += a - n, l = "right", u = "bottom"
    }
    return {
      x: i,
      y: r,
      textAlign: l,
      textVerticalAlign: u
    }
  }

  function Hn(t, e, n, i, r) {
    if (!e) return "";
    var a = (t + "").split("\n");
    r = Vn(e, n, i, r);
    for (var o = 0, s = a.length; s > o; o++) a[o] = Gn(a[o], r);
    return a.join("\n")
  }

  function Vn(t, e, n, i) {
    i = o({}, i), i.font = e;
    var n = D(n, "...");
    i.maxIterations = D(i.maxIterations, 2);
    var r = i.minChar = D(i.minChar, 0);
    i.cnCharWidth = Ln("国", e);
    var a = i.ascCharWidth = Ln("a", e);
    i.placeholder = D(i.placeholder, "");
    for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
    var u = Ln(n);
    return u > s && (n = "", u = 0), s = t - u, i.ellipsis = n, i.ellipsisWidth = u, i.contentWidth = s, i.containerWidth = t, i
  }

  function Gn(t, e) {
    var n = e.containerWidth,
      i = e.font,
      r = e.contentWidth;
    if (!n) return "";
    var a = Ln(t, i);
    if (n >= a) return t;
    for (var o = 0;; o++) {
      if (r >= a || o >= e.maxIterations) {
        t += e.ellipsis;
        break
      }
      var s = 0 === o ? Wn(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
      t = t.substr(0, s), a = Ln(t, i)
    }
    return "" === t && (t = e.placeholder), t
  }

  function Wn(t, e, n, i) {
    for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
      var s = t.charCodeAt(a);
      r += s >= 0 && 127 >= s ? n : i
    }
    return a
  }

  function Xn(t) {
    return Ln("国", t)
  }

  function jn(t, e) {
    return yp.measureText(t, e)
  }

  function Yn(t, e, n, i) {
    null != t && (t += "");
    var r = Xn(e),
      a = t ? t.split("\n") : [],
      o = a.length * r,
      s = o;
    if (n && (s += n[0] + n[2]), t && i) {
      var l = i.outerHeight,
        u = i.outerWidth;
      if (null != l && s > l) t = "", a = [];
      else if (null != u)
        for (var h = Vn(u - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
            minChar: i.minChar,
            placeholder: i.placeholder
          }), c = 0, d = a.length; d > c; c++) a[c] = Gn(a[c], h)
    }
    return {
      lines: a,
      height: o,
      outerHeight: s,
      lineHeight: r
    }
  }

  function qn(t, e) {
    var n = {
      lines: [],
      width: 0,
      height: 0
    };
    if (null != t && (t += ""), !t) return n;
    for (var i, r = vp.lastIndex = 0; null != (i = vp.exec(t));) {
      var a = i.index;
      a > r && Un(n, t.substring(r, a)), Un(n, i[2], i[1]), r = vp.lastIndex
    }
    r < t.length && Un(n, t.substring(r, t.length));
    var o = n.lines,
      s = 0,
      l = 0,
      u = [],
      h = e.textPadding,
      c = e.truncate,
      d = c && c.outerWidth,
      f = c && c.outerHeight;
    h && (null != d && (d -= h[1] + h[3]), null != f && (f -= h[0] + h[2]));
    for (var p = 0; p < o.length; p++) {
      for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
        var x = g.tokens[y],
          _ = x.styleName && e.rich[x.styleName] || {},
          w = x.textPadding = _.textPadding,
          b = x.font = _.font || e.font,
          S = x.textHeight = D(_.textHeight, Xn(b));
        if (w && (S += w[0] + w[2]), x.height = S, x.lineHeight = A(_.textLineHeight, e.textLineHeight, S), x.textAlign = _ && _.textAlign || e.textAlign, x.textVerticalAlign = _ && _.textVerticalAlign || "middle", null != f && s + x.lineHeight > f) return {
          lines: [],
          width: 0,
          height: 0
        };
        x.textWidth = Ln(x.text, b);
        var M = _.textWidth,
          I = null == M || "auto" === M;
        if ("string" == typeof M && "%" === M.charAt(M.length - 1)) x.percentWidth = M, u.push(x), M = 0;
        else {
          if (I) {
            M = x.textWidth;
            var T = _.textBackgroundColor,
              C = T && T.image;
            C && (C = Dn(C), On(C) && (M = Math.max(M, C.width * S / C.height)))
          }
          var k = w ? w[1] + w[3] : 0;
          M += k;
          var P = null != d ? d - m : null;
          null != P && M > P && (!I || k > P ? (x.text = "", x.textWidth = M = 0) : (x.text = Hn(x.text, P - k, b, c.ellipsis, {
            minChar: c.minChar
          }), x.textWidth = Ln(x.text, b), M = x.textWidth + k))
        }
        m += x.width = M, _ && (v = Math.max(v, x.lineHeight))
      }
      g.width = m, g.lineHeight = v, s += v, l = Math.max(l, m)
    }
    n.outerWidth = n.width = D(e.textWidth, l), n.outerHeight = n.height = D(e.textHeight, s), h && (n.outerWidth += h[1] + h[3], n.outerHeight += h[0] + h[2]);
    for (var p = 0; p < u.length; p++) {
      var x = u[p],
        O = x.percentWidth;
      x.width = parseInt(O, 10) / 100 * l
    }
    return n
  }

  function Un(t, e, n) {
    for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
      var s = r[o],
        l = {
          styleName: n,
          text: s,
          isLineHolder: !s && !i
        };
      if (o) a.push({
        tokens: [l]
      });
      else {
        var u = (a[a.length - 1] || (a[0] = {
            tokens: []
          })).tokens,
          h = u.length;
        1 === h && u[0].isLineHolder ? u[0] = l : (s || !h || i) && u.push(l)
      }
    }
  }

  function Zn(t) {
    var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
    return e && B(e) || t.textFont || t.font
  }

  function $n(t, e) {
    var n, i, r, a, o = e.x,
      s = e.y,
      l = e.width,
      u = e.height,
      h = e.r;
    0 > l && (o += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = a = h : h instanceof Array ? 1 === h.length ? n = i = r = a = h[0] : 2 === h.length ? (n = r = h[0], i = a = h[1]) : 3 === h.length ? (n = h[0], i = a = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], a = h[3]) : n = i = r = a = 0;
    var c;
    n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, a *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + a > u && (c = n + a, n *= u / c, a *= u / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + u - r), 0 !== r && t.arc(o + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + u), 0 !== a && t.arc(o + a, s + u - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI)
  }

  function Kn(t) {
    return Qn(t), f(t.rich, Qn), t
  }

  function Qn(t) {
    if (t) {
      t.font = Zn(t);
      var e = t.textAlign;
      "middle" === e && (e = "center"), t.textAlign = null == e || xp[e] ? e : "left";
      var n = t.textVerticalAlign || t.textBaseline;
      "center" === n && (n = "middle"), t.textVerticalAlign = null == n || _p[n] ? n : "top";
      var i = t.textPadding;
      i && (t.textPadding = O(t.textPadding))
    }
  }

  function Jn(t, e, n, i, r, a) {
    i.rich ? ei(t, e, n, i, r) : ti(t, e, n, i, r, a)
  }

  function ti(t, e, n, i, r, a) {
    var o = a && a.style,
      s = o && "text" === a.type,
      l = i.font || mp;
    s && l === (o.font || mp) || (e.font = l);
    var u = t.__computedFont;
    t.__styleFont !== l && (t.__styleFont = l, u = t.__computedFont = e.font);
    var h = i.textPadding,
      c = t.__textCotentBlock;
    (!c || t.__dirtyText) && (c = t.__textCotentBlock = Yn(n, u, h, i.truncate));
    var d = c.outerHeight,
      f = c.lines,
      p = c.lineHeight,
      g = li(d, i, r),
      v = g.baseX,
      m = g.baseY,
      y = g.textAlign || "left",
      x = g.textVerticalAlign;
    ii(e, i, r, v, m);
    var _ = Fn(m, d, x),
      w = v,
      b = _,
      S = ai(i);
    if (S || h) {
      var M = Ln(n, u),
        I = M;
      h && (I += h[1] + h[3]);
      var T = Rn(v, I, y);
      S && oi(t, e, i, T, _, I, d), h && (w = fi(v, y, h), b += h[0])
    }
    e.textAlign = y, e.textBaseline = "middle";
    for (var C = 0; C < wp.length; C++) {
      var k = wp[C],
        D = k[0],
        A = k[1],
        P = i[D];
      s && P === o[D] || (e[A] = ip(e, A, P || k[2]))
    }
    b += p / 2;
    var O = i.textStrokeWidth,
      L = s ? o.textStrokeWidth : null,
      B = !s || O !== L,
      E = !s || B || i.textStroke !== o.textStroke,
      z = hi(i.textStroke, O),
      R = ci(i.textFill);
    if (z && (B && (e.lineWidth = O), E && (e.strokeStyle = z)), R && (!s || i.textFill !== o.textFill || o.textBackgroundColor) && (e.fillStyle = R), 1 === f.length) z && e.strokeText(f[0], w, b), R && e.fillText(f[0], w, b);
    else
      for (var C = 0; C < f.length; C++) z && e.strokeText(f[C], w, b), R && e.fillText(f[C], w, b), b += p
  }

  function ei(t, e, n, i, r) {
    var a = t.__textCotentBlock;
    (!a || t.__dirtyText) && (a = t.__textCotentBlock = qn(n, i)), ni(t, e, a, i, r)
  }

  function ni(t, e, n, i, r) {
    var a = n.width,
      o = n.outerWidth,
      s = n.outerHeight,
      l = i.textPadding,
      u = li(s, i, r),
      h = u.baseX,
      c = u.baseY,
      d = u.textAlign,
      f = u.textVerticalAlign;
    ii(e, i, r, h, c);
    var p = Rn(h, o, d),
      g = Fn(c, s, f),
      v = p,
      m = g;
    l && (v += l[3], m += l[0]);
    var y = v + a;
    ai(i) && oi(t, e, i, p, g, o, s);
    for (var x = 0; x < n.lines.length; x++) {
      for (var _, w = n.lines[x], b = w.tokens, S = b.length, M = w.lineHeight, I = w.width, T = 0, C = v, k = y, D = S - 1; S > T && (_ = b[T], !_.textAlign || "left" === _.textAlign);) ri(t, e, _, i, M, m, C, "left"), I -= _.width, C += _.width, T++;
      for (; D >= 0 && (_ = b[D], "right" === _.textAlign);) ri(t, e, _, i, M, m, k, "right"), I -= _.width, k -= _.width, D--;
      for (C += (a - (C - v) - (y - k) - I) / 2; D >= T;) _ = b[T], ri(t, e, _, i, M, m, C + _.width / 2, "center"), C += _.width, T++;
      m += M
    }
  }

  function ii(t, e, n, i, r) {
    if (n && e.textRotation) {
      var a = e.textOrigin;
      "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
    }
  }

  function ri(t, e, n, i, r, a, o, s) {
    var l = i.rich[n.styleName] || {};
    l.text = n.text;
    var u = n.textVerticalAlign,
      h = a + r / 2;
    "top" === u ? h = a + n.height / 2 : "bottom" === u && (h = a + r - n.height / 2), !n.isLineHolder && ai(l) && oi(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, h - n.height / 2, n.width, n.height);
    var c = n.textPadding;
    c && (o = fi(o, s, c), h -= n.height / 2 - c[2] - n.textHeight / 2), ui(e, "shadowBlur", A(l.textShadowBlur, i.textShadowBlur, 0)), ui(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), ui(e, "shadowOffsetX", A(l.textShadowOffsetX, i.textShadowOffsetX, 0)), ui(e, "shadowOffsetY", A(l.textShadowOffsetY, i.textShadowOffsetY, 0)), ui(e, "textAlign", s), ui(e, "textBaseline", "middle"), ui(e, "font", n.font || mp);
    var d = hi(l.textStroke || i.textStroke, p),
      f = ci(l.textFill || i.textFill),
      p = D(l.textStrokeWidth, i.textStrokeWidth);
    d && (ui(e, "lineWidth", p), ui(e, "strokeStyle", d), e.strokeText(n.text, o, h)), f && (ui(e, "fillStyle", f), e.fillText(n.text, o, h))
  }

  function ai(t) {
    return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
  }

  function oi(t, e, n, i, r, a, o) {
    var s = n.textBackgroundColor,
      l = n.textBorderWidth,
      u = n.textBorderColor,
      h = b(s);
    if (ui(e, "shadowBlur", n.textBoxShadowBlur || 0), ui(e, "shadowColor", n.textBoxShadowColor || "transparent"), ui(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), ui(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), h || l && u) {
      e.beginPath();
      var c = n.textBorderRadius;
      c ? $n(e, {
        x: i,
        y: r,
        width: a,
        height: o,
        r: c
      }) : e.rect(i, r, a, o), e.closePath()
    }
    if (h)
      if (ui(e, "fillStyle", s), null != n.fillOpacity) {
        var d = e.globalAlpha;
        e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = d
      } else e.fill();
    else if (w(s)) ui(e, "fillStyle", s(n)), e.fill();
    else if (S(s)) {
      var f = s.image;
      f = An(f, null, t, si, s), f && On(f) && e.drawImage(f, i, r, a, o)
    }
    if (l && u)
      if (ui(e, "lineWidth", l), ui(e, "strokeStyle", u), null != n.strokeOpacity) {
        var d = e.globalAlpha;
        e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = d
      } else e.stroke()
  }

  function si(t, e) {
    e.image = t
  }

  function li(t, e, n) {
    var i = e.x || 0,
      r = e.y || 0,
      a = e.textAlign,
      o = e.textVerticalAlign;
    if (n) {
      var s = e.textPosition;
      if (s instanceof Array) i = n.x + di(s[0], n.width), r = n.y + di(s[1], n.height);
      else {
        var l = Nn(s, n, e.textDistance);
        i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
      }
      var u = e.textOffset;
      u && (i += u[0], r += u[1])
    }
    return {
      baseX: i,
      baseY: r,
      textAlign: a,
      textVerticalAlign: o
    }
  }

  function ui(t, e, n) {
    return t[e] = ip(t, e, n), t[e]
  }

  function hi(t, e) {
    return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
  }

  function ci(t) {
    return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
  }

  function di(t, e) {
    return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
  }

  function fi(t, e, n) {
    return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
  }

  function pi(t, e) {
    return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
  }

  function gi(t) {
    t = t || {}, Uf.call(this, t);
    for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
    this.style = new ap(t.style, this), this._rect = null, this.__clipPaths = []
  }

  function vi(t) {
    gi.call(this, t)
  }

  function mi(t) {
    return parseInt(t, 10)
  }

  function yi(t) {
    return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
  }

  function xi(t, e, n) {
    return kp.copy(t.getBoundingRect()), t.transform && kp.applyTransform(t.transform), Dp.width = e, Dp.height = n, !kp.intersect(Dp)
  }

  function _i(t, e) {
    if (t == e) return !1;
    if (!t || !e || t.length !== e.length) return !0;
    for (var n = 0; n < t.length; n++)
      if (t[n] !== e[n]) return !0
  }

  function wi(t, e) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
    }
  }

  function bi(t, e) {
    var n = document.createElement("div");
    return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
  }

  function Si(t) {
    var e = t[1][0] - t[0][0],
      n = t[1][1] - t[0][1];
    return Math.sqrt(e * e + n * n)
  }

  function Mi(t) {
    return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
  }

  function Ii(t) {
    return "mousewheel" === t && Wd.browser.firefox ? "DOMMouseScroll" : t
  }

  function Ti(t, e, n) {
    var i = t._gestureMgr;
    "start" === n && i.clear();
    var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
    if ("end" === n && i.clear(), r) {
      var a = r.type;
      e.gestureEvent = a, t.handler.dispatchToElement({
        target: r.target
      }, a, r.event)
    }
  }

  function Ci(t) {
    t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
      t._touching = !1
    }, 700)
  }

  function ki(t) {
    var e = t.pointerType;
    return "pen" === e || "touch" === e
  }

  function Di(t) {
    function e(t, e) {
      return function() {
        return e._touching ? void 0 : t.apply(e, arguments)
      }
    }
    f(zp, function(e) {
      t._handlers[e] = y(Np[e], t)
    }), f(Fp, function(e) {
      t._handlers[e] = y(Np[e], t)
    }), f(Ep, function(n) {
      t._handlers[n] = e(Np[n], t)
    })
  }

  function Ai(t) {
    function e(e, n) {
      f(e, function(e) {
        ge(t, Ii(e), n._handlers[e])
      }, n)
    }
    df.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Op, this._handlers = {}, Di(this), Wd.pointerEventsSupported ? e(Fp, this) : (Wd.touchEventsSupported && e(zp, this), e(Ep, this))
  }

  function Pi(t, e) {
    var n = new jp(Vd(), t, e);
    return Wp[n.id] = n, n
  }

  function Oi(t) {
    if (t) t.dispose();
    else {
      for (var e in Wp) Wp.hasOwnProperty(e) && Wp[e].dispose();
      Wp = {}
    }
    return this
  }

  function Li(t) {
    return Wp[t]
  }

  function Bi(t, e) {
    Gp[t] = e
  }

  function Ei(t) {
    delete Wp[t]
  }

  function zi(t) {
    return t instanceof Array ? t : null == t ? [] : [t]
  }

  function Ri(t, e, n) {
    if (t) {
      t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
      for (var i = 0, r = n.length; r > i; i++) {
        var a = n[i];
        !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
      }
    }
  }

  function Fi(t) {
    return !Up(t) || Zp(t) || t instanceof Date ? t : t.value
  }

  function Ni(t) {
    return Up(t) && !(t instanceof Array)
  }

  function Hi(t, e) {
    e = (e || []).slice();
    var n = p(t || [], function(t) {
      return {
        exist: t
      }
    });
    return qp(e, function(t, i) {
      if (Up(t)) {
        for (var r = 0; r < n.length; r++)
          if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void(e[i] = null);
        for (var r = 0; r < n.length; r++) {
          var a = n[r].exist;
          if (!(n[r].option || null != a.id && null != t.id || null == t.name || Wi(t) || Wi(a) || a.name !== t.name + "")) return n[r].option = t, void(e[i] = null)
        }
      }
    }), qp(e, function(t) {
      if (Up(t)) {
        for (var e = 0; e < n.length; e++) {
          var i = n[e].exist;
          if (!n[e].option && !Wi(i) && null == t.id) {
            n[e].option = t;
            break
          }
        }
        e >= n.length && n.push({
          option: t
        })
      }
    }), n
  }

  function Vi(t) {
    var e = F();
    qp(t, function(t) {
      var n = t.exist;
      n && e.set(n.id, t)
    }), qp(t, function(t) {
      var n = t.option;
      L(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
    }), qp(t, function(t, n) {
      var i = t.exist,
        r = t.option,
        a = t.keyInfo;
      if (Up(r)) {
        if (a.name = null != r.name ? r.name + "" : i ? i.name : $p + n, i) a.id = i.id;
        else if (null != r.id) a.id = r.id + "";
        else {
          var o = 0;
          do a.id = "\x00" + a.name + "\x00" + o++; while (e.get(a.id))
        }
        e.set(a.id, t)
      }
    })
  }

  function Gi(t) {
    var e = t.name;
    return !(!e || !e.indexOf($p))
  }

  function Wi(t) {
    return Up(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
  }

  function Xi(t, e) {
    return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function(e) {
      return t.indexOfRawIndex(e)
    }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function(e) {
      return t.indexOfName(e)
    }) : t.indexOfName(e.name) : void 0
  }

  function ji() {
    var t = "__\x00ec_inner_" + Qp++ + "_" + Math.random().toFixed(5);
    return function(e) {
      return e[t] || (e[t] = {})
    }
  }

  function Yi(t, e, n) {
    if (b(e)) {
      var i = {};
      i[e + "Index"] = 0, e = i
    }
    var r = n && n.defaultMainType;
    !r || qi(e, r + "Index") || qi(e, r + "Id") || qi(e, r + "Name") || (e[r + "Index"] = 0);
    var a = {};
    return qp(e, function(i, r) {
      var i = e[r];
      if ("dataIndex" === r || "dataIndexInside" === r) return void(a[r] = i);
      var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
        s = o[1],
        l = (o[2] || "").toLowerCase();
      if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && u(n.includeMainTypes, s) < 0)) {
        var h = {
          mainType: s
        };
        ("index" !== l || "all" !== i) && (h[l] = i);
        var c = t.queryComponents(h);
        a[s + "Models"] = c, a[s + "Model"] = c[0]
      }
    }), a
  }

  function qi(t, e) {
    return t && t.hasOwnProperty(e)
  }

  function Ui(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : t[e] = n
  }

  function Zi(t, e) {
    return t.getAttribute ? t.getAttribute(e) : t[e]
  }

  function $i(t) {
    return "auto" === t ? Wd.domSupported ? "html" : "richText" : t || "html"
  }

  function Ki(t) {
    var e = {
      main: "",
      sub: ""
    };
    return t && (t = t.split(Jp), e.main = t[0] || "", e.sub = t[1] || ""), e
  }

  function Qi(t) {
    L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
  }

  function Ji(t) {
    t.$constructor = t, t.extend = function(t) {
      var e = this,
        n = function() {
          t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
        };
      return o(n.prototype, t), n.extend = this.extend, n.superCall = er, n.superApply = nr, h(n, this), n.superClass = e, n
    }
  }

  function tr(t) {
    var e = ["__\x00is_clz", eg++, Math.random().toFixed(3)].join("_");
    t.prototype[e] = !0, t.isInstance = function(t) {
      return !(!t || !t[e])
    }
  }

  function er(t, e) {
    var n = P(arguments, 2);
    return this.superClass.prototype[e].apply(t, n)
  }

  function nr(t, e, n) {
    return this.superClass.prototype[e].apply(t, n)
  }

  function ir(t, e) {
    function n(t) {
      var e = i[t.main];
      return e && e[tg] || (e = i[t.main] = {}, e[tg] = !0), e
    }
    e = e || {};
    var i = {};
    if (t.registerClass = function(t, e) {
        if (e)
          if (Qi(e), e = Ki(e), e.sub) {
            if (e.sub !== tg) {
              var r = n(e);
              r[e.sub] = t
            }
          } else i[e.main] = t;
        return t
      }, t.getClass = function(t, e, n) {
        var r = i[t];
        if (r && r[tg] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
        return r
      }, t.getClassesByMainType = function(t) {
        t = Ki(t);
        var e = [],
          n = i[t.main];
        return n && n[tg] ? f(n, function(t, n) {
          n !== tg && e.push(t)
        }) : e.push(n), e
      }, t.hasClass = function(t) {
        return t = Ki(t), !!i[t.main]
      }, t.getAllClassMainTypes = function() {
        var t = [];
        return f(i, function(e, n) {
          t.push(n)
        }), t
      }, t.hasSubTypes = function(t) {
        t = Ki(t);
        var e = i[t.main];
        return e && e[tg]
      }, t.parseClassType = Ki, e.registerWhenExtend) {
      var r = t.extend;
      r && (t.extend = function(e) {
        var n = r.call(this, e);
        return t.registerClass(n, e.type)
      })
    }
    return t
  }

  function rr(t) {
    return t > -ug && ug > t
  }

  function ar(t) {
    return t > ug || -ug > t
  }

  function or(t, e, n, i, r) {
    var a = 1 - r;
    return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
  }

  function sr(t, e, n, i, r) {
    var a = 1 - r;
    return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
  }

  function lr(t, e, n, i, r, a) {
    var o = i + 3 * (e - n) - t,
      s = 3 * (n - 2 * e + t),
      l = 3 * (e - t),
      u = t - r,
      h = s * s - 3 * o * l,
      c = s * l - 9 * o * u,
      d = l * l - 3 * s * u,
      f = 0;
    if (rr(h) && rr(c))
      if (rr(s)) a[0] = 0;
      else {
        var p = -l / s;
        p >= 0 && 1 >= p && (a[f++] = p)
      }
    else {
      var g = c * c - 4 * h * d;
      if (rr(g)) {
        var v = c / h,
          p = -s / o + v,
          m = -v / 2;
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m)
      } else if (g > 0) {
        var y = lg(g),
          x = h * s + 1.5 * o * (-c + y),
          _ = h * s + 1.5 * o * (-c - y);
        x = 0 > x ? -sg(-x, dg) : sg(x, dg), _ = 0 > _ ? -sg(-_, dg) : sg(_, dg);
        var p = (-s - (x + _)) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p)
      } else {
        var w = (2 * h * s - 3 * o * c) / (2 * lg(h * h * h)),
          b = Math.acos(w) / 3,
          S = lg(h),
          M = Math.cos(b),
          p = (-s - 2 * S * M) / (3 * o),
          m = (-s + S * (M + cg * Math.sin(b))) / (3 * o),
          I = (-s + S * (M - cg * Math.sin(b))) / (3 * o);
        p >= 0 && 1 >= p && (a[f++] = p), m >= 0 && 1 >= m && (a[f++] = m), I >= 0 && 1 >= I && (a[f++] = I)
      }
    }
    return f
  }

  function ur(t, e, n, i, r) {
    var a = 6 * n - 12 * e + 6 * t,
      o = 9 * e + 3 * i - 3 * t - 9 * n,
      s = 3 * e - 3 * t,
      l = 0;
    if (rr(o)) {
      if (ar(a)) {
        var u = -s / a;
        u >= 0 && 1 >= u && (r[l++] = u)
      }
    } else {
      var h = a * a - 4 * o * s;
      if (rr(h)) r[0] = -a / (2 * o);
      else if (h > 0) {
        var c = lg(h),
          u = (-a + c) / (2 * o),
          d = (-a - c) / (2 * o);
        u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d)
      }
    }
    return l
  }

  function hr(t, e, n, i, r, a) {
    var o = (e - t) * r + t,
      s = (n - e) * r + e,
      l = (i - n) * r + n,
      u = (s - o) * r + o,
      h = (l - s) * r + s,
      c = (h - u) * r + u;
    a[0] = t, a[1] = o, a[2] = u, a[3] = c, a[4] = c, a[5] = h, a[6] = l, a[7] = i
  }

  function cr(t, e, n, i, r, a, o, s, l, u, h) {
    var c, d, f, p, g, v = .005,
      m = 1 / 0;
    fg[0] = l, fg[1] = u;
    for (var y = 0; 1 > y; y += .05) pg[0] = or(t, n, r, o, y), pg[1] = or(e, i, a, s, y), p = uf(fg, pg), m > p && (c = y, m = p);
    m = 1 / 0;
    for (var x = 0; 32 > x && !(hg > v); x++) d = c - v, f = c + v, pg[0] = or(t, n, r, o, d), pg[1] = or(e, i, a, s, d), p = uf(pg, fg), d >= 0 && m > p ? (c = d, m = p) : (gg[0] = or(t, n, r, o, f), gg[1] = or(e, i, a, s, f), g = uf(gg, fg), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
    return h && (h[0] = or(t, n, r, o, c), h[1] = or(e, i, a, s, c)), lg(m)
  }

  function dr(t, e, n, i) {
    var r = 1 - i;
    return r * (r * t + 2 * i * e) + i * i * n
  }

  function fr(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e))
  }

  function pr(t, e, n, i, r) {
    var a = t - 2 * e + n,
      o = 2 * (e - t),
      s = t - i,
      l = 0;
    if (rr(a)) {
      if (ar(o)) {
        var u = -s / o;
        u >= 0 && 1 >= u && (r[l++] = u)
      }
    } else {
      var h = o * o - 4 * a * s;
      if (rr(h)) {
        var u = -o / (2 * a);
        u >= 0 && 1 >= u && (r[l++] = u)
      } else if (h > 0) {
        var c = lg(h),
          u = (-o + c) / (2 * a),
          d = (-o - c) / (2 * a);
        u >= 0 && 1 >= u && (r[l++] = u), d >= 0 && 1 >= d && (r[l++] = d)
      }
    }
    return l
  }

  function gr(t, e, n) {
    var i = t + n - 2 * e;
    return 0 === i ? .5 : (t - e) / i
  }

  function vr(t, e, n, i, r) {
    var a = (e - t) * i + t,
      o = (n - e) * i + e,
      s = (o - a) * i + a;
    r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n
  }

  function mr(t, e, n, i, r, a, o, s, l) {
    var u, h = .005,
      c = 1 / 0;
    fg[0] = o, fg[1] = s;
    for (var d = 0; 1 > d; d += .05) {
      pg[0] = dr(t, n, r, d), pg[1] = dr(e, i, a, d);
      var f = uf(fg, pg);
      c > f && (u = d, c = f)
    }
    c = 1 / 0;
    for (var p = 0; 32 > p && !(hg > h); p++) {
      var g = u - h,
        v = u + h;
      pg[0] = dr(t, n, r, g), pg[1] = dr(e, i, a, g);
      var f = uf(pg, fg);
      if (g >= 0 && c > f) u = g, c = f;
      else {
        gg[0] = dr(t, n, r, v), gg[1] = dr(e, i, a, v);
        var m = uf(gg, fg);
        1 >= v && c > m ? (u = v, c = m) : h *= .5
      }
    }
    return l && (l[0] = dr(t, n, r, u), l[1] = dr(e, i, a, u)), lg(c)
  }

  function yr(t, e, n) {
    if (0 !== t.length) {
      var i, r = t[0],
        a = r[0],
        o = r[0],
        s = r[1],
        l = r[1];
      for (i = 1; i < t.length; i++) r = t[i], a = vg(a, r[0]), o = mg(o, r[0]), s = vg(s, r[1]), l = mg(l, r[1]);
      e[0] = a, e[1] = s, n[0] = o, n[1] = l
    }
  }

  function xr(t, e, n, i, r, a) {
    r[0] = vg(t, n), r[1] = vg(e, i), a[0] = mg(t, n), a[1] = mg(e, i)
  }

  function _r(t, e, n, i, r, a, o, s, l, u) {
    var h, c = ur,
      d = or,
      f = c(t, n, r, o, Mg);
    for (l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0, h = 0; f > h; h++) {
      var p = d(t, n, r, o, Mg[h]);
      l[0] = vg(p, l[0]), u[0] = mg(p, u[0])
    }
    for (f = c(e, i, a, s, Ig), h = 0; f > h; h++) {
      var g = d(e, i, a, s, Ig[h]);
      l[1] = vg(g, l[1]), u[1] = mg(g, u[1])
    }
    l[0] = vg(t, l[0]), u[0] = mg(t, u[0]), l[0] = vg(o, l[0]), u[0] = mg(o, u[0]), l[1] = vg(e, l[1]), u[1] = mg(e, u[1]), l[1] = vg(s, l[1]), u[1] = mg(s, u[1])
  }

  function wr(t, e, n, i, r, a, o, s) {
    var l = gr,
      u = dr,
      h = mg(vg(l(t, n, r), 1), 0),
      c = mg(vg(l(e, i, a), 1), 0),
      d = u(t, n, r, h),
      f = u(e, i, a, c);
    o[0] = vg(t, r, d), o[1] = vg(e, a, f), s[0] = mg(t, r, d), s[1] = mg(e, a, f)
  }

  function br(t, e, n, i, r, a, o, s, l) {
    var u = oe,
      h = se,
      c = Math.abs(r - a);
    if (1e-4 > c % _g && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void(l[1] = e + i);
    if (wg[0] = xg(r) * n + t, wg[1] = yg(r) * i + e, bg[0] = xg(a) * n + t, bg[1] = yg(a) * i + e, u(s, wg, bg), h(l, wg, bg), r %= _g, 0 > r && (r += _g), a %= _g, 0 > a && (a += _g), r > a && !o ? a += _g : a > r && o && (r += _g), o) {
      var d = a;
      a = r, r = d
    }
    for (var f = 0; a > f; f += Math.PI / 2) f > r && (Sg[0] = xg(f) * n + t, Sg[1] = yg(f) * i + e, u(s, Sg, s), h(l, Sg, l))
  }

  function Sr(t, e, n, i, r, a, o) {
    if (0 === r) return !1;
    var s = r,
      l = 0,
      u = t;
    if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;
    if (t === n) return Math.abs(a - t) <= s / 2;
    l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
    var h = l * a - o + u,
      c = h * h / (l * l + 1);
    return s / 2 * s / 2 >= c
  }

  function Mr(t, e, n, i, r, a, o, s, l, u, h) {
    if (0 === l) return !1;
    var c = l;
    if (h > e + c && h > i + c && h > a + c && h > s + c || e - c > h && i - c > h && a - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > o + c || t - c > u && n - c > u && r - c > u && o - c > u) return !1;
    var d = cr(t, e, n, i, r, a, o, s, u, h, null);
    return c / 2 >= d
  }

  function Ir(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;
    var u = o;
    if (l > e + u && l > i + u && l > a + u || e - u > l && i - u > l && a - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return !1;
    var h = mr(t, e, n, i, r, a, s, l, null);
    return u / 2 >= h
  }

  function Tr(t) {
    return t %= Ng, 0 > t && (t += Ng), t
  }

  function Cr(t, e, n, i, r, a, o, s, l) {
    if (0 === o) return !1;
    var u = o;
    s -= t, l -= e;
    var h = Math.sqrt(s * s + l * l);
    if (h - u > n || n > h + u) return !1;
    if (Math.abs(i - r) % Hg < 1e-4) return !0;
    if (a) {
      var c = i;
      i = Tr(r), r = Tr(c)
    } else i = Tr(i), r = Tr(r);
    i > r && (r += Hg);
    var d = Math.atan2(l, s);
    return 0 > d && (d += Hg), d >= i && r >= d || d + Hg >= i && r >= d + Hg
  }

  function kr(t, e, n, i, r, a) {
    if (a > e && a > i || e > a && i > a) return 0;
    if (i === e) return 0;
    var o = e > i ? 1 : -1,
      s = (a - e) / (i - e);
    (1 === s || 0 === s) && (o = e > i ? .5 : -.5);
    var l = s * (n - t) + t;
    return l === r ? 1 / 0 : l > r ? o : 0
  }

  function Dr(t, e) {
    return Math.abs(t - e) < Wg
  }

  function Ar() {
    var t = jg[0];
    jg[0] = jg[1], jg[1] = t
  }

  function Pr(t, e, n, i, r, a, o, s, l, u) {
    if (u > e && u > i && u > a && u > s || e > u && i > u && a > u && s > u) return 0;
    var h = lr(e, i, a, s, u, Xg);
    if (0 === h) return 0;
    for (var c, d, f = 0, p = -1, g = 0; h > g; g++) {
      var v = Xg[g],
        m = 0 === v || 1 === v ? .5 : 1,
        y = or(t, n, r, o, v);
      l > y || (0 > p && (p = ur(e, i, a, s, jg), jg[1] < jg[0] && p > 1 && Ar(), c = or(e, i, a, s, jg[0]), p > 1 && (d = or(e, i, a, s, jg[1]))), f += 2 == p ? v < jg[0] ? e > c ? m : -m : v < jg[1] ? c > d ? m : -m : d > s ? m : -m : v < jg[0] ? e > c ? m : -m : c > s ? m : -m)
    }
    return f
  }

  function Or(t, e, n, i, r, a, o, s) {
    if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;
    var l = pr(e, i, a, s, Xg);
    if (0 === l) return 0;
    var u = gr(e, i, a);
    if (u >= 0 && 1 >= u) {
      for (var h = 0, c = dr(e, i, a, u), d = 0; l > d; d++) {
        var f = 0 === Xg[d] || 1 === Xg[d] ? .5 : 1,
          p = dr(t, n, r, Xg[d]);
        o > p || (h += Xg[d] < u ? e > c ? f : -f : c > a ? f : -f)
      }
      return h
    }
    var f = 0 === Xg[0] || 1 === Xg[0] ? .5 : 1,
      p = dr(t, n, r, Xg[0]);
    return o > p ? 0 : e > a ? f : -f
  }

  function Lr(t, e, n, i, r, a, o, s) {
    if (s -= e, s > n || -n > s) return 0;
    var l = Math.sqrt(n * n - s * s);
    Xg[0] = -l, Xg[1] = l;
    var u = Math.abs(i - r);
    if (1e-4 > u) return 0;
    if (1e-4 > u % Gg) {
      i = 0, r = Gg;
      var h = a ? 1 : -1;
      return o >= Xg[0] + t && o <= Xg[1] + t ? h : 0
    }
    if (a) {
      var l = i;
      i = Tr(r), r = Tr(l)
    } else i = Tr(i), r = Tr(r);
    i > r && (r += Gg);
    for (var c = 0, d = 0; 2 > d; d++) {
      var f = Xg[d];
      if (f + t > o) {
        var p = Math.atan2(s, f),
          h = a ? 1 : -1;
        0 > p && (p = Gg + p), (p >= i && r >= p || p + Gg >= i && r >= p + Gg) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (h = -h), c += h)
      }
    }
    return c
  }

  function Br(t, e, n, i, r) {
    for (var a = 0, o = 0, s = 0, l = 0, u = 0, h = 0; h < t.length;) {
      var c = t[h++];
      switch (c === Vg.M && h > 1 && (n || (a += kr(o, s, l, u, i, r))), 1 == h && (o = t[h], s = t[h + 1], l = o, u = s), c) {
        case Vg.M:
          l = t[h++], u = t[h++], o = l, s = u;
          break;
        case Vg.L:
          if (n) {
            if (Sr(o, s, t[h], t[h + 1], e, i, r)) return !0
          } else a += kr(o, s, t[h], t[h + 1], i, r) || 0;
          o = t[h++], s = t[h++];
          break;
        case Vg.C:
          if (n) {
            if (Mr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
          } else a += Pr(o, s, t[h++], t[h++], t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
          o = t[h++], s = t[h++];
          break;
        case Vg.Q:
          if (n) {
            if (Ir(o, s, t[h++], t[h++], t[h], t[h + 1], e, i, r)) return !0
          } else a += Or(o, s, t[h++], t[h++], t[h], t[h + 1], i, r) || 0;
          o = t[h++], s = t[h++];
          break;
        case Vg.A:
          var d = t[h++],
            f = t[h++],
            p = t[h++],
            g = t[h++],
            v = t[h++],
            m = t[h++],
            y = (t[h++], 1 - t[h++]),
            x = Math.cos(v) * p + d,
            _ = Math.sin(v) * g + f;
          h > 1 ? a += kr(o, s, x, _, i, r) : (l = x, u = _);
          var w = (i - d) * g / p + d;
          if (n) {
            if (Cr(d, f, g, v, v + m, y, e, w, r)) return !0
          } else a += Lr(d, f, g, v, v + m, y, w, r);
          o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
          break;
        case Vg.R:
          l = o = t[h++], u = s = t[h++];
          var b = t[h++],
            S = t[h++],
            x = l + b,
            _ = u + S;
          if (n) {
            if (Sr(l, u, x, u, e, i, r) || Sr(x, u, x, _, e, i, r) || Sr(x, _, l, _, e, i, r) || Sr(l, _, l, u, e, i, r)) return !0
          } else a += kr(x, u, x, _, i, r), a += kr(l, _, l, u, i, r);
          break;
        case Vg.Z:
          if (n) {
            if (Sr(o, s, l, u, e, i, r)) return !0
          } else a += kr(o, s, l, u, i, r);
          o = l, s = u
      }
    }
    return n || Dr(s, u) || (a += kr(o, s, l, u, i, r) || 0), 0 !== a
  }

  function Er(t, e, n) {
    return Br(t, 0, !1, e, n)
  }

  function zr(t, e, n, i) {
    return Br(t, e, !0, n, i)
  }

  function Rr(t) {
    gi.call(this, t), this.path = null
  }

  function Fr(t, e, n, i, r, a, o, s, l, u, h) {
    var c = l * (iv / 180),
      d = nv(c) * (t - n) / 2 + ev(c) * (e - i) / 2,
      f = -1 * ev(c) * (t - n) / 2 + nv(c) * (e - i) / 2,
      p = d * d / (o * o) + f * f / (s * s);
    p > 1 && (o *= tv(p), s *= tv(p));
    var g = (r === a ? -1 : 1) * tv((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0,
      v = g * o * f / s,
      m = g * -s * d / o,
      y = (t + n) / 2 + nv(c) * v - ev(c) * m,
      x = (e + i) / 2 + ev(c) * v + nv(c) * m,
      _ = ov([1, 0], [(d - v) / o, (f - m) / s]),
      w = [(d - v) / o, (f - m) / s],
      b = [(-1 * d - v) / o, (-1 * f - m) / s],
      S = ov(w, b);
    av(w, b) <= -1 && (S = iv), av(w, b) >= 1 && (S = 0), 0 === a && S > 0 && (S -= 2 * iv), 1 === a && 0 > S && (S += 2 * iv), h.addData(u, y, x, o, s, _, S, c, a)
  }

  function Nr(t) {
    if (!t) return new Fg;
    for (var e, n = 0, i = 0, r = n, a = i, o = new Fg, s = Fg.CMD, l = t.match(sv), u = 0; u < l.length; u++) {
      for (var h, c = l[u], d = c.charAt(0), f = c.match(lv) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
      for (var v = 0; p > v;) {
        var m, y, x, _, w, b, S, M = n,
          I = i;
        switch (d) {
          case "l":
            n += f[v++], i += f[v++], h = s.L, o.addData(h, n, i);
            break;
          case "L":
            n = f[v++], i = f[v++], h = s.L, o.addData(h, n, i);
            break;
          case "m":
            n += f[v++], i += f[v++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "l";
            break;
          case "M":
            n = f[v++], i = f[v++], h = s.M, o.addData(h, n, i), r = n, a = i, d = "L";
            break;
          case "h":
            n += f[v++], h = s.L, o.addData(h, n, i);
            break;
          case "H":
            n = f[v++], h = s.L, o.addData(h, n, i);
            break;
          case "v":
            i += f[v++], h = s.L, o.addData(h, n, i);
            break;
          case "V":
            i = f[v++], h = s.L, o.addData(h, n, i);
            break;
          case "C":
            h = s.C, o.addData(h, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), n = f[v - 2], i = f[v - 1];
            break;
          case "c":
            h = s.C, o.addData(h, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i), n += f[v - 2], i += f[v - 1];
            break;
          case "S":
            m = n, y = i;
            var T = o.len(),
              C = o.data;
            e === s.C && (m += n - C[T - 4], y += i - C[T - 3]), h = s.C, M = f[v++], I = f[v++], n = f[v++], i = f[v++], o.addData(h, m, y, M, I, n, i);
            break;
          case "s":
            m = n, y = i;
            var T = o.len(),
              C = o.data;
            e === s.C && (m += n - C[T - 4], y += i - C[T - 3]), h = s.C, M = n + f[v++], I = i + f[v++], n += f[v++], i += f[v++], o.addData(h, m, y, M, I, n, i);
            break;
          case "Q":
            M = f[v++], I = f[v++], n = f[v++], i = f[v++], h = s.Q, o.addData(h, M, I, n, i);
            break;
          case "q":
            M = f[v++] + n, I = f[v++] + i, n += f[v++], i += f[v++], h = s.Q, o.addData(h, M, I, n, i);
            break;
          case "T":
            m = n, y = i;
            var T = o.len(),
              C = o.data;
            e === s.Q && (m += n - C[T - 4], y += i - C[T - 3]), n = f[v++], i = f[v++], h = s.Q, o.addData(h, m, y, n, i);
            break;
          case "t":
            m = n, y = i;
            var T = o.len(),
              C = o.data;
            e === s.Q && (m += n - C[T - 4], y += i - C[T - 3]), n += f[v++], i += f[v++], h = s.Q, o.addData(h, m, y, n, i);
            break;
          case "A":
            x = f[v++], _ = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, I = i, n = f[v++], i = f[v++], h = s.A, Fr(M, I, n, i, b, S, x, _, w, h, o);
            break;
          case "a":
            x = f[v++], _ = f[v++], w = f[v++], b = f[v++], S = f[v++], M = n, I = i, n += f[v++], i += f[v++], h = s.A, Fr(M, I, n, i, b, S, x, _, w, h, o)
        }
      }("z" === d || "Z" === d) && (h = s.Z, o.addData(h), n = r, i = a), e = h
    }
    return o.toStatic(), o
  }

  function Hr(t, e) {
    var n = Nr(t);
    return e = e || {}, e.buildPath = function(t) {
      if (t.setData) {
        t.setData(n.data);
        var e = t.getContext();
        e && t.rebuildPath(e)
      } else {
        var e = t;
        n.rebuildPath(e)
      }
    }, e.applyTransform = function(t) {
      Jg(n, t), this.dirty(!0)
    }, e
  }

  function Vr(t, e) {
    return new Rr(Hr(t, e))
  }

  function Gr(t, e) {
    return Rr.extend(Hr(t, e))
  }

  function Wr(t, e) {
    for (var n = [], i = t.length, r = 0; i > r; r++) {
      var a = t[r];
      a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path)
    }
    var o = new Rr(e);
    return o.createPathProxy(), o.buildPath = function(t) {
      t.appendPath(n);
      var e = t.getContext();
      e && t.rebuildPath(e)
    }, o
  }

  function Xr(t, e, n, i, r, a, o) {
    var s = .5 * (n - t),
      l = .5 * (i - e);
    return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
  }

  function jr(t, e, n) {
    var i = e.points,
      r = e.smooth;
    if (i && i.length >= 2) {
      if (r && "spline" !== r) {
        var a = vv(i, r, n, e.smoothConstraint);
        t.moveTo(i[0][0], i[0][1]);
        for (var o = i.length, s = 0;
          (n ? o : o - 1) > s; s++) {
          var l = a[2 * s],
            u = a[2 * s + 1],
            h = i[(s + 1) % o];
          t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
        }
      } else {
        "spline" === r && (i = gv(i, n)), t.moveTo(i[0][0], i[0][1]);
        for (var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1])
      }
      n && t.closePath()
    }
  }

  function Yr(t, e, n) {
    var i = t.cpx2,
      r = t.cpy2;
    return null === i || null === r ? [(n ? sr : or)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? sr : or)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? fr : dr)(t.x1, t.cpx1, t.x2, e), (n ? fr : dr)(t.y1, t.cpy1, t.y2, e)]
  }

  function qr(t) {
    gi.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
  }

  function Ur(t) {
    return Rr.extend(t)
  }

  function Zr(t, e) {
    return Gr(t, e)
  }

  function $r(t, e, n, i) {
    var r = Vr(t, e);
    return n && ("center" === i && (n = Qr(n, r.getBoundingRect())), Jr(r, n)), r
  }

  function Kr(t, e, n) {
    var i = new vi({
      style: {
        image: t,
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height
      },
      onload: function(t) {
        if ("center" === n) {
          var r = {
            width: t.width,
            height: t.height
          };
          i.setStyle(Qr(e, r))
        }
      }
    });
    return i
  }

  function Qr(t, e) {
    var n, i = e.width / e.height,
      r = t.height * i;
    r <= t.width ? n = t.height : (r = t.width, n = r / i);
    var a = t.x + t.width / 2,
      o = t.y + t.height / 2;
    return {
      x: a - r / 2,
      y: o - n / 2,
      width: r,
      height: n
    }
  }

  function Jr(t, e) {
    if (t.applyTransform) {
      var n = t.getBoundingRect(),
        i = n.calculateTransform(e);
      t.applyTransform(i)
    }
  }

  function ta(t) {
    var e = t.shape,
      n = t.style.lineWidth;
    return Dv(2 * e.x1) === Dv(2 * e.x2) && (e.x1 = e.x2 = na(e.x1, n, !0)), Dv(2 * e.y1) === Dv(2 * e.y2) && (e.y1 = e.y2 = na(e.y1, n, !0)), t
  }

  function ea(t) {
    var e = t.shape,
      n = t.style.lineWidth,
      i = e.x,
      r = e.y,
      a = e.width,
      o = e.height;
    return e.x = na(e.x, n, !0), e.y = na(e.y, n, !0), e.width = Math.max(na(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(na(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t
  }

  function na(t, e, n) {
    var i = Dv(2 * t);
    return (i + Dv(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
  }

  function ia(t) {
    return null != t && "none" !== t
  }

  function ra(t) {
    if ("string" != typeof t) return t;
    var e = Bv.get(t);
    return e || (e = je(t, -.1), 1e4 > Ev && (Bv.set(t, e), Ev++)), e
  }

  function aa(t) {
    if (t.__hoverStlDirty) {
      t.__hoverStlDirty = !1;
      var e = t.__hoverStl;
      if (!e) return void(t.__normalStl = null);
      var n = t.__normalStl = {},
        i = t.style;
      for (var r in e) null != e[r] && (n[r] = i[r]);
      n.fill = i.fill, n.stroke = i.stroke
    }
  }

  function oa(t) {
    var e = t.__hoverStl;
    if (e && !t.__highlighted) {
      var n = t.useHoverLayer;
      t.__highlighted = n ? "layer" : "plain";
      var i = t.__zr;
      if (i || !n) {
        var r = t,
          a = t.style;
        n && (r = i.addHover(t), a = r.style), Ca(a), n || aa(r), a.extendFrom(e), sa(a, e, "fill"), sa(a, e, "stroke"), Ta(a), n || (t.dirty(!1), t.z2 += 1)
      }
    }
  }

  function sa(t, e, n) {
    !ia(e[n]) && ia(t[n]) && (t[n] = ra(t[n]))
  }

  function la(t) {
    t.__highlighted && (ua(t), t.__highlighted = !1)
  }

  function ua(t) {
    var e = t.__highlighted;
    if ("layer" === e) t.__zr && t.__zr.removeHover(t);
    else if (e) {
      var n = t.style,
        i = t.__normalStl;
      i && (Ca(n), t.setStyle(i), Ta(n), t.z2 -= 1)
    }
  }

  function ha(t, e) {
    t.isGroup ? t.traverse(function(t) {
      !t.isGroup && e(t)
    }) : e(t)
  }

  function ca(t, e) {
    e = t.__hoverStl = e !== !1 && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (la(t), oa(t))
  }

  function da(t) {
    return t && t.__isEmphasisEntered
  }

  function fa(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && ha(this, oa)
  }

  function pa(t) {
    this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && ha(this, la)
  }

  function ga() {
    this.__isEmphasisEntered = !0, ha(this, oa)
  }

  function va() {
    this.__isEmphasisEntered = !1, ha(this, la)
  }

  function ma(t, e, n) {
    t.isGroup ? t.traverse(function(t) {
      !t.isGroup && ca(t, t.hoverStyle || e)
    }) : ca(t, t.hoverStyle || e), ya(t, n)
  }

  function ya(t, e) {
    var n = e === !1;
    if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
      var i = n ? "off" : "on";
      t[i]("mouseover", fa)[i]("mouseout", pa), t[i]("emphasis", ga)[i]("normal", va), t.__hoverStyleTrigger = !n
    }
  }

  function xa(t, e, n, i, r, a, o) {
    r = r || Ov;
    var s, l = r.labelFetcher,
      u = r.labelDataIndex,
      h = r.labelDimIndex,
      c = n.getShallow("show"),
      d = i.getShallow("show");
    (c || d) && (l && (s = l.getFormattedLabel(u, "normal", null, h)), null == s && (s = w(r.defaultText) ? r.defaultText(u, r) : r.defaultText));
    var f = c ? s : null,
      p = d ? D(l ? l.getFormattedLabel(u, "emphasis", null, h) : null, s) : null;
    (null != f || null != p) && (_a(t, n, a, r), _a(e, i, o, r, !0)), t.text = f, e.text = p
  }

  function _a(t, e, n, i, r) {
    return ba(t, e, i, r), n && o(t, n), t
  }

  function wa(t, e, n) {
    var i, r = {
      isRectText: !0
    };
    n === !1 ? i = !0 : r.autoColor = n, ba(t, e, r, i)
  }

  function ba(t, e, n, i) {
    if (n = n || Ov, n.isRectText) {
      var r = e.getShallow("position") || (i ? null : "inside");
      "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
      var a = e.getShallow("rotate");
      null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = D(e.getShallow("distance"), i ? null : 5)
    }
    var o, s = e.ecModel,
      l = s && s.option.textStyle,
      u = Sa(e);
    if (u) {
      o = {};
      for (var h in u)
        if (u.hasOwnProperty(h)) {
          var c = e.getModel(["rich", h]);
          Ma(o[h] = {}, c, l, n, i)
        }
    }
    return t.rich = o, Ma(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
  }

  function Sa(t) {
    for (var e; t && t !== t.ecModel;) {
      var n = (t.option || Ov).rich;
      if (n) {
        e = e || {};
        for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
      }
      t = t.parentModel
    }
    return e
  }

  function Ma(t, e, n, i, r, a) {
    n = !r && n || Ov, t.textFill = Ia(e.getShallow("color"), i) || n.color, t.textStroke = Ia(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = D(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, r || (a && (t.insideRollbackOpt = i, Ta(t)), null == t.textFill && (t.textFill = i.autoColor)), t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Ia(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Ia(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
  }

  function Ia(t, e) {
    return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
  }

  function Ta(t) {
    var e = t.insideRollbackOpt;
    if (e && null == t.textFill) {
      var n, i = e.useInsideStyle,
        r = t.insideRawTextPosition,
        a = e.autoColor;
      i !== !1 && (i === !0 || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = {
        textFill: null,
        textStroke: t.textStroke,
        textStrokeWidth: t.textStrokeWidth
      }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (n = {
        textFill: null
      }, t.textFill = a), n && (t.insideRollback = n)
    }
  }

  function Ca(t) {
    var e = t.insideRollback;
    e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, t.insideRollback = null)
  }

  function ka(t, e) {
    var n = e || e.getModel("textStyle");
    return B([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
  }

  function Da(t, e, n, i, r, a) {
    "function" == typeof r && (a = r, r = null);
    var o = i && i.isAnimationEnabled();
    if (o) {
      var s = t ? "Update" : "",
        l = i.getShallow("animationDuration" + s),
        u = i.getShallow("animationEasing" + s),
        h = i.getShallow("animationDelay" + s);
      "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof l && (l = l(r)), l > 0 ? e.animateTo(n, l, h || 0, u, a, !!a) : (e.stopAnimation(), e.attr(n), a && a())
    } else e.stopAnimation(), e.attr(n), a && a()
  }

  function Aa(t, e, n, i, r) {
    Da(!0, t, e, n, i, r)
  }

  function Pa(t, e, n, i, r) {
    Da(!1, t, e, n, i, r)
  }

  function Oa(t, e) {
    for (var n = be([]); t && t !== e;) Me(n, t.getLocalTransform(), n), t = t.parent;
    return n
  }

  function La(t, e, n) {
    return e && !d(e) && (e = Sf.getLocalTransform(e)), n && (e = ke([], e)), ae([], t, e)
  }

  function Ba(t, e, n) {
    var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
      r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
      a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
    return a = La(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
  }

  function Ea(t, e, n) {
    function i(t) {
      var e = {};
      return t.traverse(function(t) {
        !t.isGroup && t.anid && (e[t.anid] = t)
      }), e
    }

    function r(t) {
      var e = {
        position: W(t.position),
        rotation: t.rotation
      };
      return t.shape && (e.shape = o({}, t.shape)), e
    }
    if (t && e) {
      var a = i(t);
      e.traverse(function(t) {
        if (!t.isGroup && t.anid) {
          var e = a[t.anid];
          if (e) {
            var i = r(t);
            t.attr(r(e)), Aa(t, i, n, t.dataIndex)
          }
        }
      })
    }
  }

  function za(t, e) {
    return p(t, function(t) {
      var n = t[0];
      n = Av(n, e.x), n = Pv(n, e.x + e.width);
      var i = t[1];
      return i = Av(i, e.y), i = Pv(i, e.y + e.height), [n, i]
    })
  }

  function Ra(t, e) {
    var n = Av(t.x, e.x),
      i = Pv(t.x + t.width, e.x + e.width),
      r = Av(t.y, e.y),
      a = Pv(t.y + t.height, e.y + e.height);
    return i >= n && a >= r ? {
      x: n,
      y: r,
      width: i - n,
      height: a - r
    } : void 0
  }

  function Fa(t, e, n) {
    e = o({
      rectHover: !0
    }, e);
    var i = e.style = {
      strokeNoScale: !0
    };
    return n = n || {
      x: -1,
      y: -1,
      width: 2,
      height: 2
    }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new vi(e)) : $r(t.replace("path://", ""), e, n, "center") : void 0
  }

  function Na(t, e, n) {
    this.parentModel = e, this.ecModel = n, this.option = t
  }

  function Ha(t, e, n) {
    for (var i = 0; i < e.length && (!e[i] || (t = t && "object" == typeof t ? t[e[i]] : null, null != t)); i++);
    return null == t && n && (t = n.get(e)), t
  }

  function Va(t, e) {
    var n = Gv(t).getParent;
    return n ? n.call(t, e) : t.parentModel
  }

  function Ga(t) {
    return [t || "", Wv++, Math.random().toFixed(5)].join("_")
  }

  function Wa(t) {
    var e = {};
    return t.registerSubTypeDefaulter = function(t, n) {
      t = Ki(t), e[t.main] = n
    }, t.determineSubType = function(n, i) {
      var r = i.type;
      if (!r) {
        var a = Ki(n).main;
        t.hasSubTypes(n) && e[a] && (r = e[a](i))
      }
      return r
    }, t
  }

  function Xa(t, e) {
    function n(t) {
      var n = {},
        a = [];
      return f(t, function(o) {
        var s = i(n, o),
          l = s.originalDeps = e(o),
          h = r(l, t);
        s.entryCount = h.length, 0 === s.entryCount && a.push(o), f(h, function(t) {
          u(s.predecessor, t) < 0 && s.predecessor.push(t);
          var e = i(n, t);
          u(e.successor, t) < 0 && e.successor.push(o)
        })
      }), {
        graph: n,
        noEntryList: a
      }
    }

    function i(t, e) {
      return t[e] || (t[e] = {
        predecessor: [],
        successor: []
      }), t[e]
    }

    function r(t, e) {
      var n = [];
      return f(t, function(t) {
        u(e, t) >= 0 && n.push(t)
      }), n
    }
    t.topologicalTravel = function(t, e, i, r) {
      function a(t) {
        l[t].entryCount--, 0 === l[t].entryCount && u.push(t)
      }

      function o(t) {
        h[t] = !0, a(t)
      }
      if (t.length) {
        var s = n(e),
          l = s.graph,
          u = s.noEntryList,
          h = {};
        for (f(t, function(t) {
            h[t] = !0
          }); u.length;) {
          var c = u.pop(),
            d = l[c],
            p = !!h[c];
          p && (i.call(r, c, d.originalDeps.slice()), delete h[c]), f(d.successor, p ? o : a)
        }
        f(h, function() {
          throw new Error("Circle dependency may exists")
        })
      }
    }
  }

  function ja(t) {
    return t.replace(/^\s+/, "").replace(/\s+$/, "")
  }

  function Ya(t, e, n, i) {
    var r = e[1] - e[0],
      a = n[1] - n[0];
    if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
    if (i)
      if (r > 0) {
        if (t <= e[0]) return n[0];
        if (t >= e[1]) return n[1]
      } else {
        if (t >= e[0]) return n[0];
        if (t <= e[1]) return n[1]
      }
    else {
      if (t === e[0]) return n[0];
      if (t === e[1]) return n[1]
    }
    return (t - e[0]) / r * a + n[0]
  }

  function qa(t, e) {
    switch (t) {
      case "center":
      case "middle":
        t = "50%";
        break;
      case "left":
      case "top":
        t = "0%";
        break;
      case "right":
      case "bottom":
        t = "100%"
    }
    return "string" == typeof t ? ja(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
  }

  function Ua(t, e, n) {
    return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
  }

  function Za(t) {
    return t.sort(function(t, e) {
      return t - e
    }), t
  }

  function $a(t) {
    if (t = +t, isNaN(t)) return 0;
    for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
    return n
  }

  function Ka(t) {
    var e = t.toString(),
      n = e.indexOf("e");
    if (n > 0) {
      var i = +e.slice(n + 1);
      return 0 > i ? -i : 0
    }
    var r = e.indexOf(".");
    return 0 > r ? 0 : e.length - 1 - r
  }

  function Qa(t, e) {
    var n = Math.log,
      i = Math.LN10,
      r = Math.floor(n(t[1] - t[0]) / i),
      a = Math.round(n(Math.abs(e[1] - e[0])) / i),
      o = Math.min(Math.max(-r + a, 0), 20);
    return isFinite(o) ? o : 20
  }

  function Ja(t, e, n) {
    if (!t[e]) return 0;
    var i = g(t, function(t, e) {
      return t + (isNaN(e) ? 0 : e)
    }, 0);
    if (0 === i) return 0;
    for (var r = Math.pow(10, n), a = p(t, function(t) {
        return (isNaN(t) ? 0 : t) / i * r * 100
      }), o = 100 * r, s = p(a, function(t) {
        return Math.floor(t)
      }), l = g(s, function(t, e) {
        return t + e
      }, 0), u = p(a, function(t, e) {
        return t - s[e]
      }); o > l;) {
      for (var h = Number.NEGATIVE_INFINITY, c = null, d = 0, f = u.length; f > d; ++d) u[d] > h && (h = u[d], c = d);
      ++s[c], u[c] = 0, ++l
    }
    return s[e] / r
  }

  function to(t) {
    var e = 2 * Math.PI;
    return (t % e + e) % e
  }

  function eo(t) {
    return t > -Xv && Xv > t
  }

  function no(t) {
    if (t instanceof Date) return t;
    if ("string" == typeof t) {
      var e = Yv.exec(t);
      if (!e) return new Date(0 / 0);
      if (e[8]) {
        var n = +e[4] || 0;
        return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
      }
      return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
    }
    return new Date(null == t ? 0 / 0 : Math.round(t))
  }

  function io(t) {
    return Math.pow(10, ro(t))
  }

  function ro(t) {
    return Math.floor(Math.log(t) / Math.LN10)
  }

  function ao(t, e) {
    var n, i = ro(t),
      r = Math.pow(10, i),
      a = t / r;
    return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
  }

  function oo(t, e) {
    var n = (t.length - 1) * e + 1,
      i = Math.floor(n),
      r = +t[i - 1],
      a = n - i;
    return a ? r + a * (t[i] - r) : r
  }

  function so(t) {
    function e(t, n, i) {
      return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1))
    }
    t.sort(function(t, n) {
      return e(t, n, 0) ? -1 : 1
    });
    for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
      for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= n && (a[s] = n, o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];
      a[0] === a[1] && o[0] * o[1] !== 1 ? t.splice(r, 1) : r++
    }
    return t
  }

  function lo(t) {
    return t - parseFloat(t) >= 0
  }

  function uo(t) {
    return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
  }

  function ho(t, e) {
    return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
      return e.toUpperCase()
    }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
  }

  function co(t) {
    return null == t ? "" : (t + "").replace(Zv, function(t, e) {
      return $v[e]
    })
  }

  function fo(t, e, n) {
    _(e) || (e = [e]);
    var i = e.length;
    if (!i) return "";
    for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
      var o = Kv[a];
      t = t.replace(Qv(o), Qv(o, 0))
    }
    for (var s = 0; i > s; s++)
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]];
        t = t.replace(Qv(Kv[l], s), n ? co(u) : u)
      }
    return t
  }

  function po(t, e, n) {
    return f(e, function(e, i) {
      t = t.replace("{" + i + "}", n ? co(e) : e)
    }), t
  }

  function go(t, e) {
    t = b(t) ? {
      color: t,
      extraCssText: e
    } : t || {};
    var n = t.color,
      i = t.type,
      e = t.extraCssText,
      r = t.renderMode || "html",
      a = t.markerId || "X";
    return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + co(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + co(n) + ";" + (e || "") + '"></span>' : {
      renderMode: r,
      content: "{marker" + a + "|}  ",
      style: {
        color: n
      }
    } : ""
  }

  function vo(t, e) {
    return t += "", "0000".substr(0, e - t.length) + t
  }

  function mo(t, e, n) {
    ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
    var i = no(e),
      r = n ? "UTC" : "",
      a = i["get" + r + "FullYear"](),
      o = i["get" + r + "Month"]() + 1,
      s = i["get" + r + "Date"](),
      l = i["get" + r + "Hours"](),
      u = i["get" + r + "Minutes"](),
      h = i["get" + r + "Seconds"](),
      c = i["get" + r + "Milliseconds"]();
    return t = t.replace("MM", vo(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", vo(s, 2)).replace("d", s).replace("hh", vo(l, 2)).replace("h", l).replace("mm", vo(u, 2)).replace("m", u).replace("ss", vo(h, 2)).replace("s", h).replace("SSS", vo(c, 3))
  }

  function yo(t) {
    return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
  }

  function xo(t, e, n, i, r) {
    var a = 0,
      o = 0;
    null == i && (i = 1 / 0), null == r && (r = 1 / 0);
    var s = 0;
    e.eachChild(function(l, u) {
      var h, c, d = l.position,
        f = l.getBoundingRect(),
        p = e.childAt(u + 1),
        g = p && p.getBoundingRect();
      if ("horizontal" === t) {
        var v = f.width + (g ? -g.x + f.x : 0);
        h = a + v, h > i || l.newline ? (a = 0, h = v, o += s + n, s = f.height) : s = Math.max(s, f.height)
      } else {
        var m = f.height + (g ? -g.y + f.y : 0);
        c = o + m, c > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width)
      }
      l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = h + n : o = c + n)
    })
  }

  function _o(t, e, n) {
    n = Uv(n || 0);
    var i = e.width,
      r = e.height,
      a = qa(t.left, i),
      o = qa(t.top, r),
      s = qa(t.right, i),
      l = qa(t.bottom, r),
      u = qa(t.width, i),
      h = qa(t.height, r),
      c = n[2] + n[0],
      d = n[1] + n[3],
      f = t.aspect;
    switch (isNaN(u) && (u = i - s - d - a), isNaN(h) && (h = r - l - c - o), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(a) && (a = i - s - u - d), isNaN(o) && (o = r - l - h - c), t.left || t.right) {
      case "center":
        a = i / 2 - u / 2 - n[3];
        break;
      case "right":
        a = i - u - d
    }
    switch (t.top || t.bottom) {
      case "middle":
      case "center":
        o = r / 2 - h / 2 - n[0];
        break;
      case "bottom":
        o = r - h - c
    }
    a = a || 0, o = o || 0, isNaN(u) && (u = i - d - a - (s || 0)), isNaN(h) && (h = r - c - o - (l || 0));
    var p = new gn(a + n[3], o + n[0], u, h);
    return p.margin = n, p
  }

  function wo(t, e, n) {
    function i(n, i) {
      var o = {},
        l = 0,
        u = {},
        h = 0,
        c = 2;
      if (nm(n, function(e) {
          u[e] = t[e]
        }), nm(n, function(t) {
          r(e, t) && (o[t] = u[t] = e[t]), a(o, t) && l++, a(u, t) && h++
        }), s[i]) return a(e, n[1]) ? u[n[2]] = null : a(e, n[2]) && (u[n[1]] = null), u;
      if (h !== c && l) {
        if (l >= c) return o;
        for (var d = 0; d < n.length; d++) {
          var f = n[d];
          if (!r(o, f) && r(t, f)) {
            o[f] = t[f];
            break
          }
        }
        return o
      }
      return u
    }

    function r(t, e) {
      return t.hasOwnProperty(e)
    }

    function a(t, e) {
      return null != t[e] && "auto" !== t[e]
    }

    function o(t, e, n) {
      nm(t, function(t) {
        e[t] = n[t]
      })
    }!S(n) && (n = {});
    var s = n.ignoreSize;
    !_(s) && (s = [s, s]);
    var l = i(rm[0], 0),
      u = i(rm[1], 1);
    o(rm[0], t, l), o(rm[1], t, u)
  }

  function bo(t) {
    return So({}, t)
  }

  function So(t, e) {
    return e && t && nm(im, function(n) {
      e.hasOwnProperty(n) && (t[n] = e[n])
    }), t
  }

  function Mo(t) {
    var e = [];
    return f(lm.getClassesByMainType(t), function(t) {
      e = e.concat(t.prototype.dependencies || [])
    }), e = p(e, function(t) {
      return Ki(t).main
    }), "dataset" !== t && u(e, "dataset") <= 0 && e.unshift("dataset"), e
  }

  function Io(t, e) {
    for (var n = t.length, i = 0; n > i; i++)
      if (t[i].length > e) return t[i];
    return t[n - 1]
  }

  function To(t) {
    var e = t.get("coordinateSystem"),
      n = {
        coordSysName: e,
        coordSysDims: [],
        axisMap: F(),
        categoryAxisMap: F()
      },
      i = fm[e];
    return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
  }

  function Co(t) {
    return "category" === t.get("type")
  }

  function ko(t) {
    this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === mm ? {} : []), this.sourceFormat = t.sourceFormat || ym, this.seriesLayoutBy = t.seriesLayoutBy || _m, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && F(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
  }

  function Do(t) {
    var e = t.option.source,
      n = ym;
    if (I(e)) n = xm;
    else if (_(e)) {
      0 === e.length && (n = gm);
      for (var i = 0, r = e.length; r > i; i++) {
        var a = e[i];
        if (null != a) {
          if (_(a)) {
            n = gm;
            break
          }
          if (S(a)) {
            n = vm;
            break
          }
        }
      }
    } else if (S(e)) {
      for (var o in e)
        if (e.hasOwnProperty(o) && d(e[o])) {
          n = mm;
          break
        }
    } else if (null != e) throw new Error("Invalid data");
    bm(t).sourceFormat = n
  }

  function Ao(t) {
    return bm(t).source
  }

  function Po(t) {
    bm(t).datasetMap = F()
  }

  function Oo(t) {
    var e = t.option,
      n = e.data,
      i = I(n) ? xm : pm,
      r = !1,
      a = e.seriesLayoutBy,
      o = e.sourceHeader,
      s = e.dimensions,
      l = Fo(t);
    if (l) {
      var u = l.option;
      n = u.source, i = bm(l).sourceFormat, r = !0, a = a || u.seriesLayoutBy, null == o && (o = u.sourceHeader), s = s || u.dimensions
    }
    var h = Lo(n, i, a, o, s),
      c = e.encode;
    !c && l && (c = Ro(t, l, n, i, a, h)), bm(t).source = new ko({
      data: n,
      fromDataset: r,
      seriesLayoutBy: a,
      sourceFormat: i,
      dimensionsDefine: h.dimensionsDefine,
      startIndex: h.startIndex,
      dimensionsDetectCount: h.dimensionsDetectCount,
      encodeDefine: c
    })
  }

  function Lo(t, e, n, i, r) {
    if (!t) return {
      dimensionsDefine: Bo(r)
    };
    var a, o, s;
    if (e === gm) "auto" === i || null == i ? Eo(function(t) {
      null != t && "-" !== t && (b(t) ? null == o && (o = 1) : o = 0)
    }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], Eo(function(t, e) {
      r[e] = null != t ? t : ""
    }, n, t)), a = r ? r.length : n === wm ? t.length : t[0] ? t[0].length : null;
    else if (e === vm) r || (r = zo(t), s = !0);
    else if (e === mm) r || (r = [], s = !0, f(t, function(t, e) {
      r.push(e)
    }));
    else if (e === pm) {
      var l = Fi(t[0]);
      a = _(l) && l.length || 1
    }
    var u;
    return s && f(r, function(t, e) {
      "name" === (S(t) ? t.name : t) && (u = e)
    }), {
      startIndex: o,
      dimensionsDefine: Bo(r),
      dimensionsDetectCount: a,
      potentialNameDimIndex: u
    }
  }

  function Bo(t) {
    if (t) {
      var e = F();
      return p(t, function(t) {
        if (t = o({}, S(t) ? t : {
            name: t
          }), null == t.name) return t;
        t.name += "", null == t.displayName && (t.displayName = t.name);
        var n = e.get(t.name);
        return n ? t.name += "-" + n.count++ : e.set(t.name, {
          count: 1
        }), t
      })
    }
  }

  function Eo(t, e, n, i) {
    if (null == i && (i = 1 / 0), e === wm)
      for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r);
    else
      for (var a = n[0] || [], r = 0; r < a.length && i > r; r++) t(a[r], r)
  }

  function zo(t) {
    for (var e, n = 0; n < t.length && !(e = t[n++]););
    if (e) {
      var i = [];
      return f(e, function(t, e) {
        i.push(e)
      }), i
    }
  }

  function Ro(t, e, n, i, r, a) {
    var o = To(t),
      s = {},
      l = [],
      u = [],
      h = t.subType,
      c = F(["pie", "map", "funnel"]),
      d = F(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
    if (o && null != d.get(h)) {
      var p = t.ecModel,
        g = bm(p).datasetMap,
        v = e.uid + "_" + r,
        m = g.get(v) || g.set(v, {
          categoryWayDim: 1,
          valueWayDim: 0
        });
      f(o.coordSysDims, function(t) {
        if (null == o.firstCategoryDimIndex) {
          var e = m.valueWayDim++;
          s[t] = e, u.push(e)
        } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);
        else {
          var e = m.categoryWayDim++;
          s[t] = e, u.push(e)
        }
      })
    } else if (null != c.get(h)) {
      for (var y, x = 0; 5 > x && null == y; x++) Ho(n, i, r, a.dimensionsDefine, a.startIndex, x) || (y = x);
      if (null != y) {
        s.value = y;
        var _ = a.potentialNameDimIndex || Math.max(y - 1, 0);
        u.push(_), l.push(_)
      }
    }
    return l.length && (s.itemName = l), u.length && (s.seriesName = u), s
  }

  function Fo(t) {
    var e = t.option,
      n = e.data;
    return n ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0)
  }

  function No(t, e) {
    return Ho(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
  }

  function Ho(t, e, n, i, r, a) {
    function o(t) {
      return null != t && isFinite(t) && "" !== t ? !1 : b(t) && "-" !== t ? !0 : void 0
    }
    var s, l = 5;
    if (I(t)) return !1;
    var u;
    if (i && (u = i[a], u = S(u) ? u.name : u), e === gm)
      if (n === wm) {
        for (var h = t[a], c = 0; c < (h || []).length && l > c; c++)
          if (null != (s = o(h[r + c]))) return s
      } else
        for (var c = 0; c < t.length && l > c; c++) {
          var d = t[r + c];
          if (d && null != (s = o(d[a]))) return s
        } else if (e === vm) {
          if (!u) return;
          for (var c = 0; c < t.length && l > c; c++) {
            var f = t[c];
            if (f && null != (s = o(f[u]))) return s
          }
        } else if (e === mm) {
      if (!u) return;
      var h = t[u];
      if (!h || I(h)) return !1;
      for (var c = 0; c < h.length && l > c; c++)
        if (null != (s = o(h[c]))) return s
    } else if (e === pm)
      for (var c = 0; c < t.length && l > c; c++) {
        var f = t[c],
          p = Fi(f);
        if (!_(p)) return !1;
        if (null != (s = o(p[a]))) return s
      }
    return !1
  }

  function Vo(t, e) {
    if (e) {
      var n = e.seiresIndex,
        i = e.seriesId,
        r = e.seriesName;
      return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
    }
  }

  function Go(t, e) {
    var n = t.color && !t.colorLayer;
    f(e, function(e, a) {
      "colorLayer" === a && n || lm.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? r(t[a], e, !1) : i(e) : null == t[a] && (t[a] = e))
    })
  }

  function Wo(t) {
    t = t, this.option = {}, this.option[Sm] = 1, this._componentsMap = F({
      series: []
    }), this._seriesIndices, this._seriesIndicesMap, Go(t, this._theme.option), r(t, hm, !1), this.mergeOption(t)
  }

  function Xo(t, e) {
    _(e) || (e = e ? [e] : []);
    var n = {};
    return f(e, function(e) {
      n[e] = (t.get(e) || []).slice()
    }), n
  }

  function jo(t, e, n) {
    var i = e.type ? e.type : n ? n.subType : lm.determineSubType(t, e);
    return i
  }

  function Yo(t, e) {
    t._seriesIndicesMap = F(t._seriesIndices = p(e, function(t) {
      return t.componentIndex
    }) || [])
  }

  function qo(t, e) {
    return e.hasOwnProperty("subType") ? v(t, function(t) {
      return t.subType === e.subType
    }) : t
  }

  function Uo(t) {
    f(Im, function(e) {
      this[e] = y(t[e], t)
    }, this)
  }

  function Zo() {
    this._coordinateSystems = []
  }

  function $o(t) {
    this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
  }

  function Ko(t, e, n) {
    var i, r, a = [],
      o = [],
      s = t.timeline;
    if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
      r = r || {};
      var l = t.media;
      Cm(l, function(t) {
        t && t.option && (t.query ? o.push(t) : i || (i = t))
      })
    }
    return r || (r = t), r.timeline || (r.timeline = s), Cm([r].concat(a).concat(p(o, function(t) {
      return t.option
    })), function(t) {
      Cm(e, function(e) {
        e(t, n)
      })
    }), {
      baseOption: r,
      timelineOptions: a,
      mediaDefault: i,
      mediaList: o
    }
  }

  function Qo(t, e, n) {
    var i = {
        width: e,
        height: n,
        aspectratio: e / n
      },
      r = !0;
    return f(t, function(t, e) {
      var n = e.match(Pm);
      if (n && n[1] && n[2]) {
        var a = n[1],
          o = n[2].toLowerCase();
        Jo(i[o], t, a) || (r = !1)
      }
    }), r
  }

  function Jo(t, e, n) {
    return "min" === n ? t >= e : "max" === n ? e >= t : t === e
  }

  function ts(t, e) {
    return t.join(",") === e.join(",")
  }

  function es(t, e) {
    e = e || {}, Cm(e, function(e, n) {
      if (null != e) {
        var i = t[n];
        if (lm.hasClass(n)) {
          e = zi(e), i = zi(i);
          var r = Hi(i, e);
          t[n] = Dm(r, function(t) {
            return t.option && t.exist ? Am(t.exist, t.option, !0) : t.exist || t.option
          })
        } else t[n] = Am(i, e, !0)
      }
    })
  }

  function ns(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0, i = Bm.length; i > n; n++) {
        var a = Bm[n],
          o = e.normal,
          s = e.emphasis;
        o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
      }
  }

  function is(t, e, n) {
    if (t && t[e] && (t[e].normal || t[e].emphasis)) {
      var i = t[e].normal,
        r = t[e].emphasis;
      i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
    }
  }

  function rs(t) {
    is(t, "itemStyle"), is(t, "lineStyle"), is(t, "areaStyle"), is(t, "label"), is(t, "labelLine"), is(t, "upperLabel"), is(t, "edgeLabel")
  }

  function as(t, e) {
    var n = Lm(t) && t[e],
      i = Lm(n) && n.textStyle;
    if (i)
      for (var r = 0, a = Kp.length; a > r; r++) {
        var e = Kp[r];
        i.hasOwnProperty(e) && (n[e] = i[e])
      }
  }

  function os(t) {
    t && (rs(t), as(t, "label"), t.emphasis && as(t.emphasis, "label"))
  }

  function ss(t) {
    if (Lm(t)) {
      ns(t), rs(t), as(t, "label"), as(t, "upperLabel"), as(t, "edgeLabel"), t.emphasis && (as(t.emphasis, "label"), as(t.emphasis, "upperLabel"), as(t.emphasis, "edgeLabel"));
      var e = t.markPoint;
      e && (ns(e), os(e));
      var n = t.markLine;
      n && (ns(n), os(n));
      var i = t.markArea;
      i && os(i);
      var r = t.data;
      if ("graph" === t.type) {
        r = r || t.nodes;
        var a = t.links || t.edges;
        if (a && !I(a))
          for (var o = 0; o < a.length; o++) os(a[o]);
        f(t.categories, function(t) {
          rs(t)
        })
      }
      if (r && !I(r))
        for (var o = 0; o < r.length; o++) os(r[o]);
      var e = t.markPoint;
      if (e && e.data)
        for (var s = e.data, o = 0; o < s.length; o++) os(s[o]);
      var n = t.markLine;
      if (n && n.data)
        for (var l = n.data, o = 0; o < l.length; o++) _(l[o]) ? (os(l[o][0]), os(l[o][1])) : os(l[o]);
      "gauge" === t.type ? (as(t, "axisLabel"), as(t, "title"), as(t, "detail")) : "treemap" === t.type ? (is(t.breadcrumb, "itemStyle"), f(t.levels, function(t) {
        rs(t)
      })) : "tree" === t.type && rs(t.leaves)
    }
  }

  function ls(t) {
    return _(t) ? t : t ? [t] : []
  }

  function us(t) {
    return (_(t) ? t[0] : t) || {}
  }

  function hs(t, e) {
    e = e.split(",");
    for (var n = t, i = 0; i < e.length && (n = n && n[e[i]], null != n); i++);
    return n
  }

  function cs(t, e, n, i) {
    e = e.split(",");
    for (var r, a = t, o = 0; o < e.length - 1; o++) r = e[o], null == a[r] && (a[r] = {}), a = a[r];
    (i || null == a[e[o]]) && (a[e[o]] = n)
  }

  function ds(t) {
    f(zm, function(e) {
      e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
    })
  }

  function fs(t) {
    f(t, function(e, n) {
      var i = [],
        r = [0 / 0, 0 / 0],
        a = [e.stackResultDimension, e.stackedOverDimension],
        o = e.data,
        s = e.isStackedByIndex,
        l = o.map(a, function(a, l, u) {
          var h = o.get(e.stackedDimension, u);
          if (isNaN(h)) return r;
          var c, d;
          s ? d = o.getRawIndex(u) : c = o.get(e.stackedByDimension, u);
          for (var f = 0 / 0, p = n - 1; p >= 0; p--) {
            var g = t[p];
            if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
              var v = g.data.getByRawIndex(g.stackResultDimension, d);
              if (h >= 0 && v > 0 || 0 >= h && 0 > v) {
                h += v, f = v;
                break
              }
            }
          }
          return i[0] = h, i[1] = f, i
        });
      o.hostModel.setData(l), e.data = l
    })
  }

  function ps(t, e) {
    ko.isInstance(t) || (t = ko.seriesDataToSource(t)), this._source = t;
    var n = this._data = t.data,
      i = t.sourceFormat;
    i === xm && (this._offset = 0, this._dimSize = e, this._data = n);
    var r = Vm[i === gm ? i + "_" + t.seriesLayoutBy : i];
    o(this, r)
  }

  function gs() {
    return this._data.length
  }

  function vs(t) {
    return this._data[t]
  }

  function ms(t) {
    for (var e = 0; e < t.length; e++) this._data.push(t[e])
  }

  function ys(t, e, n) {
    return null != n ? t[n] : t
  }

  function xs(t, e, n, i) {
    return _s(t[i], this._dimensionInfos[e])
  }

  function _s(t, e) {
    var n = e && e.type;
    if ("ordinal" === n) {
      var i = e && e.ordinalMeta;
      return i ? i.parseAndCollect(t) : t
    }
    return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +no(t)), null == t || "" === t ? 0 / 0 : +t
  }

  function ws(t, e, n) {
    if (t) {
      var i = t.getRawDataItem(e);
      if (null != i) {
        var r, a, o = t.getProvider().getSource().sourceFormat,
          s = t.getDimensionInfo(n);
        return s && (r = s.name, a = s.index), Gm[o](i, e, a, r)
      }
    }
  }

  function bs(t) {
    return new Ss(t)
  }

  function Ss(t) {
    t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
  }

  function Ms(t, e, n, i, r, a) {
    qm.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({
      start: n,
      end: i,
      count: i - n,
      next: qm.next
    }, t.context)
  }

  function Is(t, e) {
    t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
    var n, i;
    !e && t._reset && (n = t._reset(t.context), n && n.progress && (i = n.forceFirstProgress, n = n.progress), _(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
    var r = t._downstream;
    return r && r.dirty(), i
  }

  function Ts(t) {
    var e = t.name;
    Gi(t) || (t.name = Cs(t) || e)
  }

  function Cs(t) {
    var e = t.getRawData(),
      n = e.mapDimension("seriesName", !0),
      i = [];
    return f(n, function(t) {
      var n = e.getDimensionInfo(t);
      n.displayName && i.push(n.displayName)
    }), i.join(" ")
  }

  function ks(t) {
    return t.model.getRawData().count()
  }

  function Ds(t) {
    var e = t.model;
    return e.setData(e.getRawData().cloneShallow()), As
  }

  function As(t, e) {
    t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
  }

  function Ps(t, e) {
    f(t.CHANGABLE_METHODS, function(n) {
      t.wrapMethod(n, x(Os, e))
    })
  }

  function Os(t) {
    var e = Ls(t);
    e && e.setOutputEnd(this.count())
  }

  function Ls(t) {
    var e = (t.ecModel || {}).scheduler,
      n = e && e.getPipeline(t.uid);
    if (n) {
      var i = n.currentTask;
      if (i) {
        var r = i.agentStubMap;
        r && (i = r.get(t.uid))
      }
      return i
    }
  }

  function Bs() {
    this.group = new Qf, this.uid = Ga("viewChart"), this.renderTask = bs({
      plan: Rs,
      reset: Fs
    }), this.renderTask.context = {
      view: this
    }
  }

  function Es(t, e) {
    if (t && (t.trigger(e), "group" === t.type))
      for (var n = 0; n < t.childCount(); n++) Es(t.childAt(n), e)
  }

  function zs(t, e, n) {
    var i = Xi(t, e);
    null != i ? f(zi(i), function(e) {
      Es(t.getItemGraphicEl(e), n)
    }) : t.eachItemGraphicEl(function(t) {
      Es(t, n)
    })
  }

  function Rs(t) {
    return ty(t.model)
  }

  function Fs(t) {
    var e = t.model,
      n = t.ecModel,
      i = t.api,
      r = t.payload,
      a = e.pipelineContext.progressiveRender,
      o = t.view,
      s = r && Jm(r).updateMethod,
      l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
    return "render" !== l && o[l](e, n, i, r), ny[l]
  }

  function Ns(t, e, n) {
    function i() {
      h = (new Date).getTime(), c = null, t.apply(o, s || [])
    }
    var r, a, o, s, l, u = 0,
      h = 0,
      c = null;
    e = e || 0;
    var d = function() {
      r = (new Date).getTime(), o = this, s = arguments;
      var t = l || e,
        d = l || n;
      l = null, a = r - (d ? u : h) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), u = r
    };
    return d.clear = function() {
      c && (clearTimeout(c), c = null)
    }, d.debounceNextCall = function(t) {
      l = t
    }, d
  }

  function Hs(t, e, n, i) {
    var r = t[e];
    if (r) {
      var a = r[iy] || r,
        o = r[ay],
        s = r[ry];
      if (s !== n || o !== i) {
        if (null == n || !i) return t[e] = a;
        r = t[e] = Ns(a, n, "debounce" === i), r[iy] = a, r[ay] = i, r[ry] = n
      }
      return r
    }
  }

  function Vs(t, e, n, i) {
    this.ecInstance = t, this.api = e, this.unfinished;
    var n = this._dataProcessorHandlers = n.slice(),
      i = this._visualHandlers = i.slice();
    this._allHandlers = n.concat(i), this._stageTaskMap = F()
  }

  function Gs(t, e, n, i, r) {
    function a(t, e) {
      return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
    }
    r = r || {};
    var o;
    f(e, function(e) {
      if (!r.visualType || r.visualType === e.visualType) {
        var s = t._stageTaskMap.get(e.uid),
          l = s.seriesTaskMap,
          u = s.overallTask;
        if (u) {
          var h, c = u.agentStubMap;
          c.each(function(t) {
            a(r, t) && (t.dirty(), h = !0)
          }), h && u.dirty(), dy(u, i);
          var d = t.getPerformArgs(u, r.block);
          c.each(function(t) {
            t.perform(d)
          }), o |= u.perform(d)
        } else l && l.each(function(s) {
          a(r, s) && s.dirty();
          var l = t.getPerformArgs(s, r.block);
          l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), dy(s, i), o |= s.perform(l)
        })
      }
    }), t.unfinished |= o
  }

  function Ws(t, e, n, i, r) {
    function a(n) {
      var a = n.uid,
        s = o.get(a) || o.set(a, bs({
          plan: Zs,
          reset: $s,
          count: Qs
        }));
      s.context = {
        model: n,
        ecModel: i,
        api: r,
        useClearVisual: e.isVisual && !e.isLayout,
        plan: e.plan,
        reset: e.reset,
        scheduler: t
      }, Js(t, n, s)
    }
    var o = n.seriesTaskMap || (n.seriesTaskMap = F()),
      s = e.seriesType,
      l = e.getTargetSeries;
    e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
    var u = t._pipelineMap;
    o.each(function(t, e) {
      u.get(e) || (t.dispose(), o.removeKey(e))
    })
  }

  function Xs(t, e, n, i, r) {
    function a(e) {
      var n = e.uid,
        i = s.get(n);
      i || (i = s.set(n, bs({
        reset: Ys,
        onDirty: Us
      })), o.dirty()), i.context = {
        model: e,
        overallProgress: h,
        modifyOutputEnd: c
      }, i.agent = o, i.__block = h, Js(t, e, i)
    }
    var o = n.overallTask = n.overallTask || bs({
      reset: js
    });
    o.context = {
      ecModel: i,
      api: r,
      overallReset: e.overallReset,
      scheduler: t
    };
    var s = o.agentStubMap = o.agentStubMap || F(),
      l = e.seriesType,
      u = e.getTargetSeries,
      h = !0,
      c = e.modifyOutputEnd;
    l ? i.eachRawSeriesByType(l, a) : u ? u(i, r).each(a) : (h = !1, f(i.getSeries(), a));
    var d = t._pipelineMap;
    s.each(function(t, e) {
      d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
    })
  }

  function js(t) {
    t.overallReset(t.ecModel, t.api, t.payload)
  }

  function Ys(t) {
    return t.overallProgress && qs
  }

  function qs() {
    this.agent.dirty(), this.getDownstream().dirty()
  }

  function Us() {
    this.agent && this.agent.dirty()
  }

  function Zs(t) {
    return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
  }

  function $s(t) {
    t.useClearVisual && t.data.clearAllVisual();
    var e = t.resetDefines = zi(t.reset(t.model, t.ecModel, t.api, t.payload));
    return e.length > 1 ? p(e, function(t, e) {
      return Ks(e)
    }) : fy
  }

  function Ks(t) {
    return function(e, n) {
      var i = n.data,
        r = n.resetDefines[t];
      if (r && r.dataEach)
        for (var a = e.start; a < e.end; a++) r.dataEach(i, a);
      else r && r.progress && r.progress(e, i)
    }
  }

  function Qs(t) {
    return t.data.count()
  }

  function Js(t, e, n) {
    var i = e.uid,
      r = t._pipelineMap.get(i);
    !r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r
  }

  function tl(t) {
    py = null;
    try {
      t(gy, vy)
    } catch (e) {}
    return py
  }

  function el(t, e) {
    for (var n in e.prototype) t[n] = H
  }

  function nl(t) {
    if (b(t)) {
      var e = new DOMParser;
      t = e.parseFromString(t, "text/xml")
    }
    for (9 === t.nodeType && (t = t.firstChild);
      "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType;) t = t.nextSibling;
    return t
  }

  function il() {
    this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1
  }

  function rl(t, e) {
    for (var n = t.firstChild; n;) {
      if (1 === n.nodeType) {
        var i = n.getAttribute("offset");
        i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
        var r = n.getAttribute("stop-color") || "#000000";
        e.addColorStop(i, r)
      }
      n = n.nextSibling
    }
  }

  function al(t, e) {
    t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle))
  }

  function ol(t) {
    for (var e = B(t).split(My), n = [], i = 0; i < e.length; i += 2) {
      var r = parseFloat(e[i]),
        a = parseFloat(e[i + 1]);
      n.push([r, a])
    }
    return n
  }

  function sl(t, e, n, i) {
    var r = e.__inheritedStyle || {},
      a = "text" === e.type;
    if (1 === t.nodeType && (ul(t, e), o(r, hl(t)), !i))
      for (var s in Cy)
        if (Cy.hasOwnProperty(s)) {
          var l = t.getAttribute(s);
          null != l && (r[Cy[s]] = l)
        }
    var u = a ? "textFill" : "fill",
      h = a ? "textStroke" : "stroke";
    e.style = e.style || new ap;
    var c = e.style;
    null != r.fill && c.set(u, ll(r.fill, n)), null != r.stroke && c.set(h, ll(r.stroke, n)), f(["lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize"], function(t) {
      var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
      null != r[t] && c.set(e, parseFloat(r[t]))
    }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), "end" === r.textAlign && (r.textAlign = "right"), f(["lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline"], function(t) {
      null != r[t] && c.set(t, r[t])
    }), r.lineDash && (e.style.lineDash = B(r.lineDash).split(My)), c[h] && "none" !== c[h] && (e[h] = !0), e.__inheritedStyle = r
  }

  function ll(t, e) {
    var n = e && t && t.match(ky);
    if (n) {
      var i = B(n[1]),
        r = e[i];
      return r
    }
    return t
  }

  function ul(t, e) {
    var n = t.getAttribute("transform");
    if (n) {
      n = n.replace(/,/g, " ");
      var i = null,
        r = [];
      n.replace(Dy, function(t, e, n) {
        r.push(e, n)
      });
      for (var a = r.length - 1; a > 0; a -= 2) {
        var o = r[a],
          s = r[a - 1];
        switch (i = i || we(), s) {
          case "translate":
            o = B(o).split(My), Ie(i, i, [parseFloat(o[0]), parseFloat(o[1] || 0)]);
            break;
          case "scale":
            o = B(o).split(My), Ce(i, i, [parseFloat(o[0]), parseFloat(o[1] || o[0])]);
            break;
          case "rotate":
            o = B(o).split(My), Te(i, i, parseFloat(o[0]));
            break;
          case "skew":
            o = B(o).split(My), console.warn("Skew transform is not supported yet");
            break;
          case "matrix":
            var o = B(o).split(My);
            i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5])
        }
      }
    }
    e.setLocalTransform(i)
  }

  function hl(t) {
    var e = t.getAttribute("style"),
      n = {};
    if (!e) return n;
    var i = {};
    Ay.lastIndex = 0;
    for (var r; null != (r = Ay.exec(e));) i[r[1]] = r[2];
    for (var a in Cy) Cy.hasOwnProperty(a) && null != i[a] && (n[Cy[a]] = i[a]);
    return n
  }

  function cl(t, e, n) {
    var i = e / t.width,
      r = n / t.height,
      a = Math.min(i, r),
      o = [a, a],
      s = [-(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2];
    return {
      scale: o,
      position: s
    }
  }

  function dl(t) {
    return function(e, n, i) {
      e = e && e.toLowerCase(), df.prototype[t].call(this, e, n, i)
    }
  }

  function fl() {
    df.call(this)
  }

  function pl(t, e, n) {
    function r(t, e) {
      return t.__prio - e.__prio
    }
    n = n || {}, "string" == typeof e && (e = lx[e]), this.id, this.group, this._dom = t;
    var a = "canvas",
      o = this._zr = Pi(t, {
        renderer: n.renderer || a,
        devicePixelRatio: n.devicePixelRatio,
        width: n.width,
        height: n.height
      });
    this._throttledZrFlush = Ns(y(o.flush, o), 17);
    var e = i(e);
    e && Fm(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Zo;
    var s = this._api = Ol(this);
    Sn(sx, r), Sn(rx, r), this._scheduler = new Vs(this, s, rx, sx), df.call(this, this._ecEventProcessor = new Ll), this._messageCenter = new fl, this._initEvents(), this.resize = y(this.resize, this), this._pendingActions = [], o.animation.on("frame", this._onframe, this), bl(o, this), E(this)
  }

  function gl(t, e, n) {
    var i, r = this._model,
      a = this._coordSysMgr.getCoordinateSystems();
    e = Yi(r, e);
    for (var o = 0; o < a.length; o++) {
      var s = a[o];
      if (s[t] && null != (i = s[t](r, e, n))) return i
    }
  }

  function vl(t) {
    var e = t._model,
      n = t._scheduler;
    n.restorePipelines(e), n.prepareStageTasks(), Sl(t, "component", e, n), Sl(t, "chart", e, n), n.plan()
  }

  function ml(t, e, n, i, r) {
    function a(i) {
      i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
    }
    var o = t._model;
    if (!i) return void Ey(t._componentsViews.concat(t._chartsViews), a);
    var s = {};
    s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
    var l = {
      mainType: i,
      query: s
    };
    r && (l.subType = r);
    var u = n.excludeSeriesId;
    null != u && (u = F(zi(u))), o && o.eachComponent(l, function(e) {
      u && null != u.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
    }, t)
  }

  function yl(t, e) {
    var n = t._chartsMap,
      i = t._scheduler;
    e.eachSeries(function(t) {
      i.updateStreamModes(t, n[t.__viewId])
    })
  }

  function xl(t, e) {
    var n = t.type,
      i = t.escapeConnect,
      r = nx[n],
      a = r.actionInfo,
      l = (a.update || "update").split(":"),
      u = l.pop();
    l = null != l[0] && Fy(l[0]), this[$y] = !0;
    var h = [t],
      c = !1;
    t.batch && (c = !0, h = p(t.batch, function(e) {
      return e = s(o({}, e), t), e.batch = null, e
    }));
    var d, f = [],
      g = "highlight" === n || "downplay" === n;
    Ey(h, function(t) {
      d = r.action(t, this._model, this._api), d = d || o({}, t), d.type = a.event || d.type, f.push(d), g ? ml(this, u, t, "series") : l && ml(this, u, t, l.main, l.sub)
    }, this), "none" === u || g || l || (this[Ky] ? (vl(this), tx.update.call(this, t), this[Ky] = !1) : tx[u].call(this, t)), d = c ? {
      type: a.event || n,
      escapeConnect: i,
      batch: f
    } : f[0], this[$y] = !1, !e && this._messageCenter.trigger(d.type, d)
  }

  function _l(t) {
    for (var e = this._pendingActions; e.length;) {
      var n = e.shift();
      xl.call(this, n, t)
    }
  }

  function wl(t) {
    !t && this.trigger("updated")
  }

  function bl(t, e) {
    t.on("rendered", function() {
      e.trigger("rendered"), !t.animation.isFinished() || e[Ky] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
    })
  }

  function Sl(t, e, n, i) {
    function r(t) {
      var e = "_ec_" + t.id + "_" + t.type,
        r = s[e];
      if (!r) {
        var h = Fy(t.type),
          c = a ? $m.getClass(h.main, h.sub) : Bs.getClass(h.sub);
        r = new c, r.init(n, u), s[e] = r, o.push(r), l.add(r.group)
      }
      t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
        mainType: t.mainType,
        index: t.componentIndex
      }, !a && i.prepareView(r, t, n, u)
    }
    for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, u = t._api, h = 0; h < o.length; h++) o[h].__alive = !1;
    a ? n.eachComponent(function(t, e) {
      "series" !== t && r(e)
    }) : n.eachSeries(r);
    for (var h = 0; h < o.length;) {
      var c = o[h];
      c.__alive ? h++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, u), o.splice(h, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
    }
  }

  function Ml(t) {
    t.clearColorPalette(), t.eachSeries(function(t) {
      t.clearColorPalette()
    })
  }

  function Il(t, e, n, i) {
    Tl(t, e, n, i), Ey(t._chartsViews, function(t) {
      t.__alive = !1
    }), Cl(t, e, n, i), Ey(t._chartsViews, function(t) {
      t.__alive || t.remove(e, n)
    })
  }

  function Tl(t, e, n, i, r) {
    Ey(r || t._componentsViews, function(t) {
      var r = t.__model;
      t.render(r, e, n, i), Pl(r, t)
    })
  }

  function Cl(t, e, n, i, r) {
    var a, o = t._scheduler;
    e.eachSeries(function(e) {
      var n = t._chartsMap[e.__viewId];
      n.__alive = !0;
      var s = n.renderTask;
      o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), Pl(e, n), Al(e, n)
    }), o.unfinished |= a, Dl(t._zr, e), ly(t._zr.dom, e)
  }

  function kl(t, e) {
    Ey(ox, function(n) {
      n(t, e)
    })
  }

  function Dl(t, e) {
    var n = t.storage,
      i = 0;
    n.traverse(function(t) {
      t.isGroup || i++
    }), i > e.get("hoverLayerThreshold") && !Wd.node && n.traverse(function(t) {
      t.isGroup || (t.useHoverLayer = !0)
    })
  }

  function Al(t, e) {
    var n = t.get("blendMode") || null;
    e.group.traverse(function(t) {
      t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
        t.setStyle("blend", n)
      })
    })
  }

  function Pl(t, e) {
    var n = t.get("z"),
      i = t.get("zlevel");
    e.group.traverse(function(t) {
      "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
    })
  }

  function Ol(t) {
    var e = t._coordSysMgr;
    return o(new Uo(t), {
      getCoordinateSystems: y(e.getCoordinateSystems, e),
      getComponentByElement: function(e) {
        for (; e;) {
          var n = e.__ecComponentInfo;
          if (null != n) return t._model.getComponent(n.mainType, n.index);
          e = e.parent
        }
      }
    })
  }

  function Ll() {
    this.eventInfo
  }

  function Bl(t) {
    function e(t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i[a] = e
      }
    }
    var n = 0,
      i = 1,
      r = 2,
      a = "__connectUpdateStatus";
    Ey(ix, function(o, s) {
      t._messageCenter.on(s, function(o) {
        if (cx[t.group] && t[a] !== n) {
          if (o && o.escapeConnect) return;
          var s = t.makeActionFromEvent(o),
            l = [];
          Ey(hx, function(e) {
            e !== t && e.group === t.group && l.push(e)
          }), e(l, n), Ey(l, function(t) {
            t[a] !== i && t.dispatchAction(s)
          }), e(l, r)
        }
      })
    })
  }

  function El(t, e, n) {
    var i = Nl(t);
    if (i) return i;
    var r = new pl(t, e, n);
    return r.id = "ec_" + dx++, hx[r.id] = r, Ui(t, px, r.id), Bl(r), r
  }

  function zl(t) {
    if (_(t)) {
      var e = t;
      t = null, Ey(e, function(e) {
        null != e.group && (t = e.group)
      }), t = t || "g_" + fx++, Ey(e, function(e) {
        e.group = t
      })
    }
    return cx[t] = !0, t
  }

  function Rl(t) {
    cx[t] = !1
  }

  function Fl(t) {
    "string" == typeof t ? t = hx[t] : t instanceof pl || (t = Nl(t)), t instanceof pl && !t.isDisposed() && t.dispose()
  }

  function Nl(t) {
    return hx[Zi(t, px)]
  }

  function Hl(t) {
    return hx[t]
  }

  function Vl(t, e) {
    lx[t] = e
  }

  function Gl(t) {
    ax.push(t)
  }

  function Wl(t, e) {
    $l(rx, t, e, Gy)
  }

  function Xl(t) {
    ox.push(t)
  }

  function jl(t, e, n) {
    "function" == typeof e && (n = e, e = "");
    var i = Ry(t) ? t.type : [t, t = {
      event: e
    }][0];
    t.event = (t.event || i).toLowerCase(), e = t.event, By(Qy.test(i) && Qy.test(e)), nx[i] || (nx[i] = {
      action: n,
      actionInfo: t
    }), ix[e] = i
  }

  function Yl(t, e) {
    Zo.register(t, e)
  }

  function ql(t) {
    var e = Zo.get(t);
    return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
  }

  function Ul(t, e) {
    $l(sx, t, e, Xy, "layout")
  }

  function Zl(t, e) {
    $l(sx, t, e, Yy, "visual")
  }

  function $l(t, e, n, i, r) {
    (zy(e) || Ry(e)) && (n = e, e = i);
    var a = Vs.wrapStageHandler(n, r);
    return a.__prio = e, a.__raw = n, t.push(a), a
  }

  function Kl(t, e) {
    ux[t] = e
  }

  function Ql(t) {
    return lm.extend(t)
  }

  function Jl(t) {
    return $m.extend(t)
  }

  function tu(t) {
    return Zm.extend(t)
  }

  function eu(t) {
    return Bs.extend(t)
  }

  function nu(t) {
    n("createCanvas", t)
  }

  function iu(t, e, n) {
    Oy.registerMap(t, e, n)
  }

  function ru(t) {
    var e = Oy.retrieveMap(t);
    return e && e[0] && {
      geoJson: e[0].geoJSON,
      specialAreas: e[0].specialAreas
    }
  }

  function au(t) {
    return t
  }

  function ou(t, e, n, i, r) {
    this._old = t, this._new = e, this._oldKeyGetter = n || au, this._newKeyGetter = i || au, this.context = r
  }

  function su(t, e, n, i, r) {
    for (var a = 0; a < t.length; a++) {
      var o = "_ec_" + r[i](t[a], a),
        s = e[o];
      null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
    }
  }

  function lu(t) {
    var e = {},
      n = e.encode = {},
      i = F(),
      r = [],
      a = [];
    f(t.dimensions, function(e) {
      var o = t.getDimensionInfo(e),
        s = o.coordDim;
      if (s) {
        var l = n[s];
        n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), hu(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e)
      }
      mx.each(function(t, e) {
        var i = n[e];
        n.hasOwnProperty(e) || (i = n[e] = []);
        var r = o.otherDims[e];
        null != r && r !== !1 && (i[r] = o.name)
      })
    });
    var o = [],
      s = {};
    i.each(function(t, e) {
      var i = n[e];
      s[e] = i[0], o = o.concat(i)
    }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
    var l = n.label;
    l && l.length && (r = l.slice());
    var u = n.tooltip;
    return u && u.length ? a = u.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e
  }

  function uu(t) {
    return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
  }

  function hu(t) {
    return !("ordinal" === t || "time" === t)
  }

  function cu(t) {
    return t._rawCount > 65535 ? Sx : Mx
  }

  function du(t) {
    var e = t.constructor;
    return e === Array ? t.slice() : new e(t)
  }

  function fu(t, e) {
    f(Ix.concat(e.__wrappedMethods || []), function(n) {
      e.hasOwnProperty(n) && (t[n] = e[n])
    }), t.__wrappedMethods = e.__wrappedMethods, f(Tx, function(n) {
      t[n] = i(e[n])
    }), t._calculationInfo = o(e._calculationInfo)
  }

  function pu(t) {
    var e = t._invertedIndicesMap;
    f(e, function(n, i) {
      var r = t._dimensionInfos[i],
        a = r.ordinalMeta;
      if (a) {
        n = e[i] = new Sx(a.categories.length);
        for (var o = 0; o < n.length; o++) n[o] = 0 / 0;
        for (var o = 0; o < t._count; o++) n[t.get(i, o)] = o
      }
    })
  }

  function gu(t, e, n) {
    var i;
    if (null != e) {
      var r = t._chunkSize,
        a = Math.floor(n / r),
        o = n % r,
        s = t.dimensions[e],
        l = t._storage[s][a];
      if (l) {
        i = l[o];
        var u = t._dimensionInfos[s].ordinalMeta;
        u && u.categories.length && (i = u.categories[i])
      }
    }
    return i
  }

  function vu(t) {
    return t
  }

  function mu(t) {
    return t < this._count && t >= 0 ? this._indices[t] : -1
  }

  function yu(t, e) {
    var n = t._idList[e];
    return null == n && (n = gu(t, t._idDimIdx, e)), null == n && (n = _x + e), n
  }

  function xu(t) {
    return _(t) || (t = [t]), t
  }

  function _u(t, e) {
    var n = t.dimensions,
      i = new Cx(p(n, t.getDimensionInfo, t), t.hostModel);
    fu(i, t);
    for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
      var s = n[o];
      a[s] && (u(e, s) >= 0 ? (r[s] = wu(a[s]), i._rawExtent[s] = bu(), i._extent[s] = null) : r[s] = a[s])
    }
    return i
  }

  function wu(t) {
    for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = du(t[n]);
    return e
  }

  function bu() {
    return [1 / 0, -1 / 0]
  }

  function Su(t, e, n) {
    function r(t, e, n) {
      null != mx.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, h.set(e, !0))
    }
    ko.isInstance(e) || (e = ko.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();
    for (var a = (n.dimsDef || []).slice(), l = F(n.encodeDef), u = F(), h = F(), c = [], d = Mu(e, t, a, n.dimCount), p = 0; d > p; p++) {
      var g = a[p] = o({}, S(a[p]) ? a[p] : {
          name: a[p]
        }),
        v = g.name,
        m = c[p] = {
          otherDims: {}
        };
      null != v && null == u.get(v) && (m.name = m.displayName = v, u.set(v, p)), null != g.type && (m.type = g.type), null != g.displayName && (m.displayName = g.displayName)
    }
    l.each(function(t, e) {
      if (t = zi(t).slice(), 1 === t.length && t[0] < 0) return void l.set(e, !1);
      var n = l.set(e, []);
      f(t, function(t, i) {
        b(t) && (t = u.get(t)), null != t && d > t && (n[i] = t, r(c[t], e, i))
      })
    });
    var y = 0;
    f(t, function(t) {
      var e, t, n, a;
      if (b(t)) e = t, t = {};
      else {
        e = t.name;
        var o = t.ordinalMeta;
        t.ordinalMeta = null, t = i(t), t.ordinalMeta = o, n = t.dimsDef, a = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
      }
      var u = l.get(e);
      if (u !== !1) {
        var u = zi(u);
        if (!u.length)
          for (var h = 0; h < (n && n.length || 1); h++) {
            for (; y < c.length && null != c[y].coordDim;) y++;
            y < c.length && u.push(y++)
          }
        f(u, function(i, o) {
          var l = c[i];
          if (r(s(l, t), e, o), null == l.name && n) {
            var u = n[o];
            !S(u) && (u = {
              name: u
            }), l.name = l.displayName = u.name, l.defaultTooltip = u.defaultTooltip
          }
          a && s(l.otherDims, a)
        })
      }
    });
    var x = n.generateCoord,
      _ = n.generateCoordCount,
      w = null != _;
    _ = x ? _ || 1 : 0;
    for (var M = x || "value", I = 0; d > I; I++) {
      var m = c[I] = c[I] || {},
        T = m.coordDim;
      null == T && (m.coordDim = Iu(M, h, w), m.coordDimIndex = 0, (!x || 0 >= _) && (m.isExtraCoord = !0), _--), null == m.name && (m.name = Iu(m.coordDim, u)), null == m.type && No(e, I, m.name) && (m.type = "ordinal")
    }
    return c
  }

  function Mu(t, e, n, i) {
    var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
    return f(e, function(t) {
      var e = t.dimsDef;
      e && (r = Math.max(r, e.length))
    }), r
  }

  function Iu(t, e, n) {
    if (n || null != e.get(t)) {
      for (var i = 0; null != e.get(t + i);) i++;
      t += i
    }
    return e.set(t, !0), t
  }

  function Tu(t, e, n) {
    n = n || {};
    var i, r, a, o, s = n.byIndex,
      l = n.stackedCoordDimension,
      u = !(!t || !t.get("stack"));
    if (f(e, function(t, n) {
        b(t) && (e[n] = t = {
          name: t
        }), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
      }), !r || s || i || (s = !0), r) {
      a = "__\x00ecstackresult", o = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);
      var h = r.coordDim,
        c = r.type,
        d = 0;
      f(e, function(t) {
        t.coordDim === h && d++
      }), e.push({
        name: a,
        coordDim: h,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      }), d++, e.push({
        name: o,
        coordDim: o,
        coordDimIndex: d,
        type: c,
        isExtraCoord: !0,
        isCalculationCoord: !0
      })
    }
    return {
      stackedDimension: r && r.name,
      stackedByDimension: i && i.name,
      isStackedByIndex: s,
      stackedOverDimension: o,
      stackResultDimension: a
    }
  }

  function Cu(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension")
  }

  function ku(t, e) {
    return Cu(t, e) ? t.getCalculationInfo("stackResultDimension") : e
  }

  function Du(t, e, n) {
    n = n || {}, ko.isInstance(t) || (t = ko.seriesDataToSource(t));
    var i, r = e.get("coordinateSystem"),
      a = Zo.get(r),
      o = To(e);
    o && (i = p(o.coordSysDims, function(t) {
      var e = {
          name: t
        },
        n = o.axisMap.get(t);
      if (n) {
        var i = n.get("type");
        e.type = uu(i)
      }
      return e
    })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
    var s, l, u = Ax(t, {
      coordDimensions: i,
      generateCoord: n.generateCoord
    });
    o && f(u, function(t, e) {
      var n = t.coordDim,
        i = o.categoryAxisMap.get(n);
      i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
    }), l || null == s || (u[s].otherDims.itemName = 0);
    var h = Tu(e, u),
      c = new Cx(u, e);
    c.setCalculationInfo(h);
    var d = null != s && Au(t) ? function(t, e, n, i) {
      return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
    } : null;
    return c.hasItemOption = !1, c.initData(t, null, d), c
  }

  function Au(t) {
    if (t.sourceFormat === pm) {
      var e = Pu(t.data || []);
      return null != e && !_(Fi(e))
    }
  }

  function Pu(t) {
    for (var e = 0; e < t.length && null == t[e];) e++;
    return t[e]
  }

  function Ou(t) {
    this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
  }

  function Lu(t) {
    this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
  }

  function Bu(t) {
    return t._map || (t._map = F(t.categories))
  }

  function Eu(t) {
    return S(t) && null != t.value ? t.value : t + ""
  }

  function zu(t, e, n, i) {
    var r = {},
      a = t[1] - t[0],
      o = r.interval = ao(a / e, !0);
    null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
    var s = r.intervalPrecision = Ru(o),
      l = r.niceTickExtent = [Bx(Math.ceil(t[0] / o) * o, s), Bx(Math.floor(t[1] / o) * o, s)];
    return Nu(l, t), r
  }

  function Ru(t) {
    return Ka(t) + 2
  }

  function Fu(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0])
  }

  function Nu(t, e) {
    !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Fu(t, 0, e), Fu(t, 1, e), t[0] > t[1] && (t[0] = t[1])
  }

  function Hu(t, e, n, i) {
    var r = [];
    if (!t) return r;
    var a = 1e4;
    e[0] < n[0] && r.push(e[0]);
    for (var o = n[0]; o <= n[1] && (r.push(o), o = Bx(o + t, i), o !== r[r.length - 1]);)
      if (r.length > a) return [];
    return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
  }

  function Vu(t) {
    return t.get("stack") || Rx + t.seriesIndex
  }

  function Gu(t) {
    return t.dim + t.index
  }

  function Wu(t, e) {
    var n = [];
    return e.eachSeriesByType(t, function(t) {
      qu(t) && !Uu(t) && n.push(t)
    }), n
  }

  function Xu(t) {
    var e = [];
    return f(t, function(t) {
      var n = t.getData(),
        i = t.coordinateSystem,
        r = i.getBaseAxis(),
        a = r.getExtent(),
        o = "category" === r.type ? r.getBandWidth() : Math.abs(a[1] - a[0]) / n.count(),
        s = qa(t.get("barWidth"), o),
        l = qa(t.get("barMaxWidth"), o),
        u = t.get("barGap"),
        h = t.get("barCategoryGap");
      e.push({
        bandWidth: o,
        barWidth: s,
        barMaxWidth: l,
        barGap: u,
        barCategoryGap: h,
        axisKey: Gu(r),
        stackId: Vu(t)
      })
    }), ju(e)
  }

  function ju(t) {
    var e = {};
    f(t, function(t) {
      var n = t.axisKey,
        i = t.bandWidth,
        r = e[n] || {
          bandWidth: i,
          remainedWidth: i,
          autoWidthCount: 0,
          categoryGap: "20%",
          gap: "30%",
          stacks: {}
        },
        a = r.stacks;
      e[n] = r;
      var o = t.stackId;
      a[o] || r.autoWidthCount++, a[o] = a[o] || {
        width: 0,
        maxWidth: 0
      };
      var s = t.barWidth;
      s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
      var l = t.barMaxWidth;
      l && (a[o].maxWidth = l);
      var u = t.barGap;
      null != u && (r.gap = u);
      var h = t.barCategoryGap;
      null != h && (r.categoryGap = h)
    });
    var n = {};
    return f(e, function(t, e) {
      n[e] = {};
      var i = t.stacks,
        r = t.bandWidth,
        a = qa(t.categoryGap, r),
        o = qa(t.gap, 1),
        s = t.remainedWidth,
        l = t.autoWidthCount,
        u = (s - a) / (l + (l - 1) * o);
      u = Math.max(u, 0), f(i, function(t) {
        var e = t.maxWidth;
        e && u > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, t.width = e, l--)
      }), u = (s - a) / (l + (l - 1) * o), u = Math.max(u, 0);
      var h, c = 0;
      f(i, function(t) {
        t.width || (t.width = u), h = t, c += t.width * (1 + o)
      }), h && (c -= h.width * o);
      var d = -c / 2;
      f(i, function(t, i) {
        n[e][i] = n[e][i] || {
          offset: d,
          width: t.width
        }, d += t.width * (1 + o)
      })
    }), n
  }

  function Yu(t, e, n) {
    if (t && e) {
      var i = t[Gu(e)];
      return null != i && null != n && (i = i[Vu(n)]), i
    }
  }

  function qu(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
  }

  function Uu(t) {
    return t.pipelineContext && t.pipelineContext.large
  }

  function Zu(t, e) {
    var n, i, r = e.getGlobalExtent();
    r[0] > r[1] ? (n = r[1], i = r[0]) : (n = r[0], i = r[1]);
    var a = e.toGlobalCoord(e.dataToCoord(0));
    return n > a && (a = n), a > i && (a = i), a
  }

  function $u(t, e) {
    return Jx(t, Qx(e))
  }

  function Ku(t, e) {
    var n, i, r, a = t.type,
      o = e.getMin(),
      s = e.getMax(),
      l = null != o,
      u = null != s,
      h = t.getExtent();
    "ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), _(i) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = qa(i[0], 1), i[1] = qa(i[1], 1), r = h[1] - h[0] || Math.abs(h[0])), null == o && (o = "ordinal" === a ? n ? 0 : 0 / 0 : h[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : 0 / 0 : h[1] + i[1] * r), "dataMin" === o ? o = h[0] : "function" == typeof o && (o = o({
      min: h[0],
      max: h[1]
    })), "dataMax" === s ? s = h[1] : "function" == typeof s && (s = s({
      min: h[0],
      max: h[1]
    })), (null == o || !isFinite(o)) && (o = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), t.setBlank(C(o) || C(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !u && (s = 0));
    var c = e.ecModel;
    if (c && "time" === a) {
      var d, p = Wu("bar", c);
      if (f(p, function(t) {
          d |= t.getBaseAxis() === e.axis
        }), d) {
        var g = Xu(p),
          v = Qu(o, s, e, g);
        o = v.min, s = v.max
      }
    }
    return [o, s]
  }

  function Qu(t, e, n, i) {
    var r = n.axis.getExtent(),
      a = r[1] - r[0],
      o = Yu(i, n.axis);
    if (void 0 === o) return {
      min: t,
      max: e
    };
    var s = 1 / 0;
    f(o, function(t) {
      s = Math.min(t.offset, s)
    });
    var l = -1 / 0;
    f(o, function(t) {
      l = Math.max(t.offset + t.width, l)
    }), s = Math.abs(s), l = Math.abs(l);
    var u = s + l,
      h = e - t,
      c = 1 - (s + l) / a,
      d = h / c - h;
    return e += d * (l / u), t -= d * (s / u), {
      min: t,
      max: e
    }
  }

  function Ju(t, e) {
    var n = Ku(t, e),
      i = null != e.getMin(),
      r = null != e.getMax(),
      a = e.get("splitNumber");
    "log" === t.type && (t.base = e.get("logBase"));
    var o = t.type;
    t.setExtent(n[0], n[1]), t.niceExtent({
      splitNumber: a,
      fixMin: i,
      fixMax: r,
      minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
      maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
    });
    var s = e.get("interval");
    null != s && t.setInterval && t.setInterval(s)
  }

  function th(t, e) {
    if (e = e || t.get("type")) switch (e) {
      case "category":
        return new Lx(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
      case "value":
        return new zx;
      default:
        return (Ou.getClass(e) || zx).create(t)
    }
  }

  function eh(t) {
    var e = t.scale.getExtent(),
      n = e[0],
      i = e[1];
    return !(n > 0 && i > 0 || 0 > n && 0 > i)
  }

  function nh(t) {
    var e = t.getLabelModel().get("formatter"),
      n = "category" === t.type ? t.scale.getExtent()[0] : null;
    return "string" == typeof e ? e = function(e) {
      return function(n) {
        return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "")
      }
    }(e) : "function" == typeof e ? function(i, r) {
      return null != n && (r = i - n), e(ih(t, i), r)
    } : function(e) {
      return t.scale.getLabel(e)
    }
  }

  function ih(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e
  }

  function rh(t) {
    var e = t.model,
      n = t.scale;
    if (e.get("axisLabel.show") && !n.isBlank()) {
      var i, r, a = "category" === t.type,
        o = n.getExtent();
      a ? r = n.count() : (i = n.getTicks(), r = i.length);
      var s, l = t.getLabelModel(),
        u = nh(t),
        h = 1;
      r > 40 && (h = Math.ceil(r / 40));
      for (var c = 0; r > c; c += h) {
        var d = i ? i[c] : o[0] + c,
          f = u(d),
          p = l.getTextRect(f),
          g = ah(p, l.get("rotate") || 0);
        s ? s.union(g) : s = g
      }
      return s
    }
  }

  function ah(t, e) {
    var n = e * Math.PI / 180,
      i = t.plain(),
      r = i.width,
      a = i.height,
      o = r * Math.cos(n) + a * Math.sin(n),
      s = r * Math.sin(n) + a * Math.cos(n),
      l = new gn(i.x, i.y, o, s);
    return l
  }

  function oh(t, e) {
    if ("image" !== this.type) {
      var n = this.style,
        i = this.shape;
      i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
    }
  }

  function sh(t, e, n, i, r, a, o) {
    var s = 0 === t.indexOf("empty");
    s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
    var l;
    return l = 0 === t.indexOf("image://") ? Kr(t.slice(8), new gn(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? $r(t.slice(7), {}, new gn(e, n, i, r), o ? "center" : "cover") : new f_({
      shape: {
        symbolType: t,
        x: e,
        y: n,
        width: i,
        height: r
      }
    }), l.__isEmptyBrush = s, l.setColor = oh, l.setColor(a), l
  }

  function lh(t) {
    return Du(t.getSource(), t)
  }

  function uh(t, e) {
    var n = e;
    Na.isInstance(e) || (n = new Na(e), c(n, a_));
    var i = th(n);
    return i.setExtent(t[0], t[1]), Ju(i, n), i
  }

  function hh(t) {
    c(t, a_)
  }

  function ch(t, e) {
    return Math.abs(t - e) < v_
  }

  function dh(t, e, n) {
    var i = 0,
      r = t[0];
    if (!r) return !1;
    for (var a = 1; a < t.length; a++) {
      var o = t[a];
      i += kr(r[0], r[1], o[0], o[1], e, n), r = o
    }
    var s = t[0];
    return ch(r[0], s[0]) && ch(r[1], s[1]) || (i += kr(r[0], r[1], s[0], s[1], e, n)), 0 !== i
  }

  function fh(t, e, n) {
    if (this.name = t, this.geometries = e, n) n = [n[0], n[1]];
    else {
      var i = this.getBoundingRect();
      n = [i.x + i.width / 2, i.y + i.height / 2]
    }
    this.center = n
  }

  function ph(t) {
    if (!t.UTF8Encoding) return t;
    var e = t.UTF8Scale;
    null == e && (e = 1024);
    for (var n = t.features, i = 0; i < n.length; i++)
      for (var r = n[i], a = r.geometry, o = a.coordinates, s = a.encodeOffsets, l = 0; l < o.length; l++) {
        var u = o[l];
        if ("Polygon" === a.type) o[l] = gh(u, s[l], e);
        else if ("MultiPolygon" === a.type)
          for (var h = 0; h < u.length; h++) {
            var c = u[h];
            u[h] = gh(c, s[l][h], e)
          }
      }
    return t.UTF8Encoding = !1, t
  }

  function gh(t, e, n) {
    for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
      var s = t.charCodeAt(o) - 64,
        l = t.charCodeAt(o + 1) - 64;
      s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += a, r = s, a = l, i.push([s / n, l / n])
    }
    return i
  }

  function vh(t) {
    return "category" === t.type ? yh(t) : wh(t)
  }

  function mh(t, e) {
    return "category" === t.type ? _h(t, e) : {
      ticks: t.scale.getTicks()
    }
  }

  function yh(t) {
    var e = t.getLabelModel(),
      n = xh(t, e);
    return !e.get("show") || t.scale.isBlank() ? {
      labels: [],
      labelCategoryInterval: n.labelCategoryInterval
    } : n
  }

  function xh(t, e) {
    var n = bh(t, "labels"),
      i = Ah(e),
      r = Sh(n, i);
    if (r) return r;
    var a, o;
    return w(i) ? a = Dh(t, i) : (o = "auto" === i ? Ih(t) : i, a = kh(t, o)), Mh(n, i, {
      labels: a,
      labelCategoryInterval: o
    })
  }

  function _h(t, e) {
    var n = bh(t, "ticks"),
      i = Ah(e),
      r = Sh(n, i);
    if (r) return r;
    var a, o;
    if ((!e.get("show") || t.scale.isBlank()) && (a = []), w(i)) a = Dh(t, i, !0);
    else if ("auto" === i) {
      var s = xh(t, t.getLabelModel());
      o = s.labelCategoryInterval, a = p(s.labels, function(t) {
        return t.tickValue
      })
    } else o = i, a = kh(t, o, !0);
    return Mh(n, i, {
      ticks: a,
      tickCategoryInterval: o
    })
  }

  function wh(t) {
    var e = t.scale.getTicks(),
      n = nh(t);
    return {
      labels: p(e, function(e, i) {
        return {
          formattedLabel: n(e, i),
          rawLabel: t.scale.getLabel(e),
          tickValue: e
        }
      })
    }
  }

  function bh(t, e) {
    return y_(t)[e] || (y_(t)[e] = [])
  }

  function Sh(t, e) {
    for (var n = 0; n < t.length; n++)
      if (t[n].key === e) return t[n].value
  }

  function Mh(t, e, n) {
    return t.push({
      key: e,
      value: n
    }), n
  }

  function Ih(t) {
    var e = y_(t).autoInterval;
    return null != e ? e : y_(t).autoInterval = t.calculateCategoryInterval()
  }

  function Th(t) {
    var e = Ch(t),
      n = nh(t),
      i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
      r = t.scale,
      a = r.getExtent(),
      o = r.count();
    if (a[1] - a[0] < 1) return 0;
    var s = 1;
    o > 40 && (s = Math.max(1, Math.floor(o / 40)));
    for (var l = a[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
      var p = 0,
        g = 0,
        v = Bn(n(l), e.font, "center", "top");
      p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7)
    }
    var m = d / h,
      y = f / c;
    isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
    var x = Math.max(0, Math.floor(Math.min(m, y))),
      _ = y_(t.model),
      w = _.lastAutoInterval,
      b = _.lastTickCount;
    return null != w && null != b && Math.abs(w - x) <= 1 && Math.abs(b - o) <= 1 && w > x ? x = w : (_.lastTickCount = o, _.lastAutoInterval = x), x
  }

  function Ch(t) {
    var e = t.getLabelModel();
    return {
      axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
      labelRotate: e.get("rotate") || 0,
      font: e.getFont()
    }
  }

  function kh(t, e, n) {
    function i(t) {
      l.push(n ? t : {
        formattedLabel: r(t),
        rawLabel: a.getLabel(t),
        tickValue: t
      })
    }
    var r = nh(t),
      a = t.scale,
      o = a.getExtent(),
      s = t.getLabelModel(),
      l = [],
      u = Math.max((e || 0) + 1, 1),
      h = o[0],
      c = a.count();
    0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
    var d = {
      min: s.get("showMinLabel"),
      max: s.get("showMaxLabel")
    };
    d.min && h !== o[0] && i(o[0]);
    for (var f = h; f <= o[1]; f += u) i(f);
    return d.max && f !== o[1] && i(o[1]), l
  }

  function Dh(t, e, n) {
    var i = t.scale,
      r = nh(t),
      a = [];
    return f(i.getTicks(), function(t) {
      var o = i.getLabel(t);
      e(t, o) && a.push(n ? t : {
        formattedLabel: r(t),
        rawLabel: o,
        tickValue: t
      })
    }), a
  }

  function Ah(t) {
    var e = t.get("interval");
    return null == e ? "auto" : e
  }

  function Ph(t, e) {
    var n = t[1] - t[0],
      i = e,
      r = n / i / 2;
    t[0] += r, t[1] -= r
  }

  function Oh(t, e, n, i, r) {
    function a(t, e) {
      return h ? t > e : e > t
    }
    var o = e.length;
    if (t.onBand && !i && o) {
      var s, l = t.getExtent();
      if (1 === o) e[0].coord = l[0], s = e[1] = {
        coord: l[0]
      };
      else {
        var u = e[1].coord - e[0].coord;
        f(e, function(t) {
          t.coord -= u / 2;
          var e = e || 0;
          e % 2 > 0 && (t.coord -= u / (2 * (e + 1)))
        }), s = {
          coord: e[o - 1].coord + u
        }, e.push(s)
      }
      var h = l[0] > l[1];
      a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
        coord: l[0]
      }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
        coord: l[1]
      })
    }
  }

  function Lh(t, e) {
    var n = t.mapDimension("defaultedLabel", !0),
      i = n.length;
    if (1 === i) return ws(t, e, n[0]);
    if (i) {
      for (var r = [], a = 0; a < n.length; a++) {
        var o = ws(t, e, n[a]);
        r.push(o)
      }
      return r.join(" ")
    }
  }

  function Bh(t, e, n) {
    Qf.call(this), this.updateData(t, e, n)
  }

  function Eh(t) {
    return [t[0] / 2, t[1] / 2]
  }

  function zh(t, e) {
    this.parent.drift(t, e)
  }

  function Rh() {
    !da(this) && Nh.call(this)
  }

  function Fh() {
    !da(this) && Hh.call(this)
  }

  function Nh() {
    if (!this.incremental && !this.useHoverLayer) {
      var t = this.__symbolOriginalScale,
        e = t[1] / t[0];
      this.animateTo({
        scale: [Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e)]
      }, 400, "elasticOut")
    }
  }

  function Hh() {
    this.incremental || this.useHoverLayer || this.animateTo({
      scale: this.__symbolOriginalScale
    }, 400, "elasticOut")
  }

  function Vh(t) {
    this.group = new Qf, this._symbolCtor = t || Bh
  }

  function Gh(t, e, n, i) {
    return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"))
  }

  function Wh(t) {
    return null == t || S(t) || (t = {
      isIgnore: t
    }), t || {}
  }

  function Xh(t) {
    var e = t.hostModel;
    return {
      itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
      hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
      symbolRotate: e.get("symbolRotate"),
      symbolOffset: e.get("symbolOffset"),
      hoverAnimation: e.get("hoverAnimation"),
      labelModel: e.getModel("label"),
      hoverLabelModel: e.getModel("emphasis.label"),
      cursorStyle: e.get("cursor")
    }
  }

  function jh(t, e, n) {
    var i, r = t.getBaseAxis(),
      a = t.getOtherAxis(r),
      o = Yh(a, n),
      s = r.dim,
      l = a.dim,
      u = e.mapDimension(l),
      h = e.mapDimension(s),
      c = "x" === l || "radius" === l ? 1 : 0,
      d = p(t.dimensions, function(t) {
        return e.mapDimension(t)
      }),
      f = e.getCalculationInfo("stackResultDimension");
    return (i |= Cu(e, d[0])) && (d[0] = f), (i |= Cu(e, d[1])) && (d[1] = f), {
      dataDimsForPoint: d,
      valueStart: o,
      valueAxisDim: l,
      baseAxisDim: s,
      stacked: !!i,
      valueDim: u,
      baseDim: h,
      baseDataOffset: c,
      stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
    }
  }

  function Yh(t, e) {
    var n = 0,
      i = t.scale.getExtent();
    return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n
  }

  function qh(t, e, n, i) {
    var r = 0 / 0;
    t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);
    var a = t.baseDataOffset,
      o = [];
    return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o)
  }

  function Uh(t, e) {
    var n = [];
    return e.diff(t).add(function(t) {
      n.push({
        cmd: "+",
        idx: t
      })
    }).update(function(t, e) {
      n.push({
        cmd: "=",
        idx: e,
        idx1: t
      })
    }).remove(function(t) {
      n.push({
        cmd: "-",
        idx: t
      })
    }).execute(), n
  }

  function Zh(t) {
    return isNaN(t[0]) || isNaN(t[1])
  }

  function $h(t, e, n, i, r, a, o, s, l, u) {
    return "none" !== u && u ? Kh.apply(this, arguments) : Qh.apply(this, arguments)
  }

  function Kh(t, e, n, i, r, a, o, s, l, u, h) {
    for (var c = 0, d = n, f = 0; i > f; f++) {
      var p = e[d];
      if (d >= r || 0 > d) break;
      if (Zh(p)) {
        if (h) {
          d += a;
          continue
        }
        break
      }
      if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);
      else if (l > 0) {
        var g = e[c],
          v = "y" === u ? 1 : 0,
          m = (p[v] - g[v]) * l;
        E_(R_, g), R_[v] = g[v] + m, E_(F_, p), F_[v] = p[v] - m, t.bezierCurveTo(R_[0], R_[1], F_[0], F_[1], p[0], p[1])
      } else t.lineTo(p[0], p[1]);
      c = d, d += a
    }
    return f
  }

  function Qh(t, e, n, i, r, a, o, s, l, u, h) {
    for (var c = 0, d = n, f = 0; i > f; f++) {
      var p = e[d];
      if (d >= r || 0 > d) break;
      if (Zh(p)) {
        if (h) {
          d += a;
          continue
        }
        break
      }
      if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), E_(R_, p);
      else if (l > 0) {
        var g = d + a,
          v = e[g];
        if (h)
          for (; v && Zh(e[g]);) g += a, v = e[g];
        var m = .5,
          y = e[c],
          v = e[g];
        if (!v || Zh(v)) E_(F_, p);
        else {
          Zh(v) && !h && (v = p), q(z_, v, y);
          var x, _;
          if ("x" === u || "y" === u) {
            var w = "x" === u ? 0 : 1;
            x = Math.abs(p[w] - y[w]), _ = Math.abs(p[w] - v[w])
          } else x = lf(p, y), _ = lf(p, v);
          m = _ / (_ + x), B_(F_, p, z_, -l * (1 - m))
        }
        O_(R_, R_, s), L_(R_, R_, o), O_(F_, F_, s), L_(F_, F_, o), t.bezierCurveTo(R_[0], R_[1], F_[0], F_[1], p[0], p[1]), B_(R_, p, z_, l * m)
      } else t.lineTo(p[0], p[1]);
      c = d, d += a
    }
    return f
  }

  function Jh(t, e) {
    var n = [1 / 0, 1 / 0],
      i = [-1 / 0, -1 / 0];
    if (e)
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1])
      }
    return {
      min: e ? n : i,
      max: e ? i : n
    }
  }

  function tc(t, e) {
    if (t.length === e.length) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = e[n];
        if (i[0] !== r[0] || i[1] !== r[1]) return
      }
      return !0
    }
  }

  function ec(t) {
    return "number" == typeof t ? t : t ? .5 : 0
  }

  function nc(t) {
    var e = t.getGlobalExtent();
    if (t.onBand) {
      var n = t.getBandWidth() / 2 - 1,
        i = e[1] > e[0] ? 1 : -1;
      e[0] += i * n, e[1] -= i * n
    }
    return e
  }

  function ic(t, e, n) {
    if (!n.valueDim) return [];
    for (var i = [], r = 0, a = e.count(); a > r; r++) i.push(qh(n, t, e, r));
    return i
  }

  function rc(t, e, n, i) {
    var r = nc(t.getAxis("x")),
      a = nc(t.getAxis("y")),
      o = t.getBaseAxis().isHorizontal(),
      s = Math.min(r[0], r[1]),
      l = Math.min(a[0], a[1]),
      u = Math.max(r[0], r[1]) - s,
      h = Math.max(a[0], a[1]) - l;
    if (n) s -= .5, u += .5, l -= .5, h += .5;
    else {
      var c = i.get("lineStyle.width") || 2,
        d = i.get("clipOverflow") ? c / 2 : Math.max(u, h);
      o ? (l -= d, h += 2 * d) : (s -= d, u += 2 * d)
    }
    var f = new xv({
      shape: {
        x: s,
        y: l,
        width: u,
        height: h
      }
    });
    return e && (f.shape[o ? "width" : "height"] = 0, Pa(f, {
      shape: {
        width: u,
        height: h
      }
    }, i)), f
  }

  function ac(t, e, n, i) {
    var r = t.getAngleAxis(),
      a = t.getRadiusAxis(),
      o = a.getExtent().slice();
    o[0] > o[1] && o.reverse();
    var s = r.getExtent(),
      l = Math.PI / 180;
    n && (o[0] -= .5, o[1] += .5);
    var u = new fv({
      shape: {
        cx: Ua(t.cx, 1),
        cy: Ua(t.cy, 1),
        r0: Ua(o[0], 1),
        r: Ua(o[1], 1),
        startAngle: -s[0] * l,
        endAngle: -s[1] * l,
        clockwise: r.inverse
      }
    });
    return e && (u.shape.endAngle = -s[0] * l, Pa(u, {
      shape: {
        endAngle: -s[1] * l
      }
    }, i)), u
  }

  function oc(t, e, n, i) {
    return "polar" === t.type ? ac(t, e, n, i) : rc(t, e, n, i)
  }

  function sc(t, e, n) {
    for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
      var s = t[o + 1],
        l = t[o];
      a.push(l);
      var u = [];
      switch (n) {
        case "end":
          u[r] = s[r], u[1 - r] = l[1 - r], a.push(u);
          break;
        case "middle":
          var h = (l[r] + s[r]) / 2,
            c = [];
          u[r] = c[r] = h, u[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(u), a.push(c);
          break;
        default:
          u[r] = l[r], u[1 - r] = s[1 - r], a.push(u)
      }
    }
    return t[o] && a.push(t[o]), a
  }

  function lc(t, e) {
    var n = t.getVisual("visualMeta");
    if (n && n.length && t.count() && "cartesian2d" === e.type) {
      for (var i, r, a = n.length - 1; a >= 0; a--) {
        var o = n[a].dimension,
          s = t.dimensions[o],
          l = t.getDimensionInfo(s);
        if (i = l && l.coordDim, "x" === i || "y" === i) {
          r = n[a];
          break
        }
      }
      if (r) {
        var u = e.getAxis(i),
          h = p(r.stops, function(t) {
            return {
              coord: u.toGlobalCoord(u.dataToCoord(t.value)),
              color: t.color
            }
          }),
          c = h.length,
          d = r.outerColors.slice();
        c && h[0].coord > h[c - 1].coord && (h.reverse(), d.reverse());
        var g = 10,
          v = h[0].coord - g,
          m = h[c - 1].coord + g,
          y = m - v;
        if (.001 > y) return "transparent";
        f(h, function(t) {
          t.offset = (t.coord - v) / y
        }), h.push({
          offset: c ? h[c - 1].offset : .5,
          color: d[1] || "transparent"
        }), h.unshift({
          offset: c ? h[0].offset : .5,
          color: d[0] || "transparent"
        });
        var x = new Tv(0, 0, 0, 0, h, !0);
        return x[i] = v, x[i + "2"] = m, x
      }
    }
  }

  function uc(t, e, n) {
    var i = t.get("showAllSymbol"),
      r = "auto" === i;
    if (!i || r) {
      var a = n.getAxesByScale("ordinal")[0];
      if (a && (!r || !hc(a, e))) {
        var o = e.mapDimension(a.dim),
          s = {};
        return f(a.getViewLabels(), function(t) {
            s[t.tickValue] = 1
          }),
          function(t) {
            return !s.hasOwnProperty(e.get(o, t))
          }
      }
    }
  }

  function hc(t, e) {
    var n = t.getExtent(),
      i = Math.abs(n[1] - n[0]) / t.scale.count();
    isNaN(i) && (i = 0);
    for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a)
      if (1.5 * Bh.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;
    return !0
  }

  function cc(t) {
    return this._axes[t]
  }

  function dc(t) {
    Y_.call(this, t)
  }

  function fc(t, e) {
    return e.type || (e.data ? "category" : "value")
  }

  function pc(t, e) {
    return t.getCoordSysModel() === e
  }

  function gc(t, e, n) {
    this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t
  }

  function vc(t, e, n, i) {
    function r(t) {
      return t.dim + "_" + t.index
    }
    n.getAxesOnZeroOf = function() {
      return a ? [a] : []
    };
    var a, o = t[e],
      s = n.model,
      l = s.get("axisLine.onZero"),
      u = s.get("axisLine.onZeroAxisIndex");
    if (l) {
      if (null != u) mc(o[u]) && (a = o[u]);
      else
        for (var h in o)
          if (o.hasOwnProperty(h) && mc(o[h]) && !i[r(o[h])]) {
            a = o[h];
            break
          }
      a && (i[r(a)] = !0)
    }
  }

  function mc(t) {
    return t && "category" !== t.type && "time" !== t.type && eh(t)
  }

  function yc(t, e) {
    var n = t.getExtent(),
      i = n[0] + n[1];
    t.toGlobalCoord = "x" === t.dim ? function(t) {
      return t + e
    } : function(t) {
      return i - t + e
    }, t.toLocalCoord = "x" === t.dim ? function(t) {
      return t - e
    } : function(t) {
      return i - t + e
    }
  }

  function xc(t) {
    return p(ew, function(e) {
      var n = t.getReferringComponents(e)[0];
      return n
    })
  }

  function _c(t) {
    return "cartesian2d" === t.get("coordinateSystem")
  }

  function wc(t) {
    var e = {
      componentType: t.mainType,
      componentIndex: t.componentIndex
    };
    return e[t.mainType + "Index"] = t.componentIndex, e
  }

  function bc(t, e, n, i) {
    var r, a, o = to(n - t.rotation),
      s = i[0] > i[1],
      l = "start" === e && !s || "start" !== e && s;
    return eo(o - nw / 2) ? (a = l ? "bottom" : "top", r = "center") : eo(o - 1.5 * nw) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = 1.5 * nw > o && o > nw / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
      rotation: o,
      textAlign: r,
      textVerticalAlign: a
    }
  }

  function Sc(t) {
    var e = t.get("tooltip");
    return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
  }

  function Mc(t, e, n) {
    var i = t.get("axisLabel.showMinLabel"),
      r = t.get("axisLabel.showMaxLabel");
    e = e || [], n = n || [];
    var a = e[0],
      o = e[1],
      s = e[e.length - 1],
      l = e[e.length - 2],
      u = n[0],
      h = n[1],
      c = n[n.length - 1],
      d = n[n.length - 2];
    i === !1 ? (Ic(a), Ic(u)) : Tc(a, o) && (i ? (Ic(o), Ic(h)) : (Ic(a), Ic(u))), r === !1 ? (Ic(s), Ic(c)) : Tc(l, s) && (r ? (Ic(l), Ic(d)) : (Ic(s), Ic(c)))
  }

  function Ic(t) {
    t && (t.ignore = !0)
  }

  function Tc(t, e) {
    var n = t && t.getBoundingRect().clone(),
      i = e && e.getBoundingRect().clone();
    if (n && i) {
      var r = be([]);
      return Te(r, r, -t.rotation), n.applyTransform(Me([], r, t.getLocalTransform())), i.applyTransform(Me([], r, e.getLocalTransform())), n.intersect(i)
    }
  }

  function Cc(t) {
    return "middle" === t || "center" === t
  }

  function kc(t, e, n) {
    var i = e.axis;
    if (e.get("axisTick.show") && !i.scale.isBlank()) {
      for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), u = [], h = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
        var p = l[f].coord;
        u[0] = p, u[1] = 0, h[0] = p, h[1] = n.tickDirection * o, c && (ae(u, u, c), ae(h, h, c));
        var g = new _v(ta({
          anid: "tick_" + l[f].tickValue,
          shape: {
            x1: u[0],
            y1: u[1],
            x2: h[0],
            y2: h[1]
          },
          style: s(a.getLineStyle(), {
            stroke: e.get("axisLine.lineStyle.color")
          }),
          z2: 2,
          silent: !0
        }));
        t.group.add(g), d.push(g)
      }
      return d
    }
  }

  function Dc(t, e, n) {
    var i = e.axis,
      r = k(n.axisLabelShow, e.get("axisLabel.show"));
    if (r && !i.scale.isBlank()) {
      var a = e.getModel("axisLabel"),
        o = a.get("margin"),
        s = i.getViewLabels(),
        l = (k(n.labelRotate, a.get("rotate")) || 0) * nw / 180,
        u = aw(n.rotation, l, n.labelDirection),
        h = e.getCategories(!0),
        c = [],
        d = Sc(e),
        p = e.get("triggerEvent");
      return f(s, function(r, s) {
        var l = r.tickValue,
          f = r.formattedLabel,
          g = r.rawLabel,
          v = a;
        h && h[l] && h[l].textStyle && (v = new Na(h[l].textStyle, a, e.ecModel));
        var m = v.getTextColor() || e.get("axisLine.lineStyle.color"),
          y = i.dataToCoord(l),
          x = [y, n.labelOffset + n.labelDirection * o],
          _ = new uv({
            anid: "label_" + l,
            position: x,
            rotation: u.rotation,
            silent: d,
            z2: 10
          });
        _a(_.style, v, {
          text: f,
          textAlign: v.getShallow("align", !0) || u.textAlign,
          textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || u.textVerticalAlign,
          textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? l + "" : l, s) : m
        }), p && (_.eventData = wc(e), _.eventData.targetType = "axisLabel", _.eventData.value = g), t._dumbGroup.add(_), _.updateTransform(), c.push(_), t.group.add(_), _.decomposeTransform()
      }), c
    }
  }

  function Ac(t, e) {
    var n = {
      axesInfo: {},
      seriesInvolved: !1,
      coordSysAxesInfo: {},
      coordSysMap: {}
    };
    return Pc(n, t, e), n.seriesInvolved && Lc(n, t), n
  }

  function Pc(t, e, n) {
    var i = e.getComponent("tooltip"),
      r = e.getComponent("axisPointer"),
      a = r.get("link", !0) || [],
      o = [];
    ow(n.getCoordinateSystems(), function(n) {
      function s(i, s, l) {
        var h = l.model.getModel("axisPointer", r),
          d = h.get("show");
        if (d && ("auto" !== d || i || Nc(h))) {
          null == s && (s = h.get("triggerTooltip")), h = i ? Oc(l, c, r, e, i, s) : h;
          var f = h.get("snap"),
            p = Hc(l.model),
            g = s || f || "category" === l.type,
            v = t.axesInfo[p] = {
              key: p,
              axis: l,
              coordSys: n,
              axisPointerModel: h,
              triggerTooltip: s,
              involveSeries: g,
              snap: f,
              useHandle: Nc(h),
              seriesModels: []
            };
          u[p] = v, t.seriesInvolved |= g;
          var m = Bc(a, l);
          if (null != m) {
            var y = o[m] || (o[m] = {
              axesInfo: {}
            });
            y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y
          }
        }
      }
      if (n.axisPointerEnabled) {
        var l = Hc(n.model),
          u = t.coordSysAxesInfo[l] = {};
        t.coordSysMap[l] = n;
        var h = n.model,
          c = h.getModel("tooltip", i);
        if (ow(n.getAxes(), sw(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
          var d = "axis" === c.get("trigger"),
            f = "cross" === c.get("axisPointer.type"),
            p = n.getTooltipAxes(c.get("axisPointer.axis"));
          (d || f) && ow(p.baseAxes, sw(s, f ? "cross" : !0, d)), f && ow(p.otherAxes, sw(s, "cross", !1))
        }
      }
    })
  }

  function Oc(t, e, n, r, a, o) {
    var l = e.getModel("axisPointer"),
      u = {};
    ow(["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"], function(t) {
      u[t] = i(l.get(t))
    }), u.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (u.type = "line");
    var h = u.label || (u.label = {});
    if (null == h.show && (h.show = !1), "cross" === a) {
      var c = l.get("label.show");
      if (h.show = null != c ? c : !0, !o) {
        var d = u.lineStyle = l.get("crossStyle");
        d && s(h, d.textStyle)
      }
    }
    return t.model.getModel("axisPointer", new Na(u, n, r))
  }

  function Lc(t, e) {
    e.eachSeries(function(e) {
      var n = e.coordinateSystem,
        i = e.get("tooltip.trigger", !0),
        r = e.get("tooltip.show", !0);
      n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get("axisPointer.show", !0) !== !1 && ow(t.coordSysAxesInfo[Hc(n.model)], function(t) {
        var i = t.axis;
        n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
      })
    }, this)
  }

  function Bc(t, e) {
    for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
      var a = t[r] || {};
      if (Ec(a[i + "AxisId"], n.id) || Ec(a[i + "AxisIndex"], n.componentIndex) || Ec(a[i + "AxisName"], n.name)) return r
    }
  }

  function Ec(t, e) {
    return "all" === t || _(t) && u(t, e) >= 0 || t === e
  }

  function zc(t) {
    var e = Rc(t);
    if (e) {
      var n = e.axisPointerModel,
        i = e.axis.scale,
        r = n.option,
        a = n.get("status"),
        o = n.get("value");
      null != o && (o = i.parse(o));
      var s = Nc(n);
      null == a && (r.status = s ? "show" : "hide");
      var l = i.getExtent().slice();
      l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
    }
  }

  function Rc(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return e && e.axesInfo[Hc(t)]
  }

  function Fc(t) {
    var e = Rc(t);
    return e && e.axisPointerModel
  }

  function Nc(t) {
    return !!t.get("handle.show")
  }

  function Hc(t) {
    return t.type + "||" + t.id
  }

  function Vc(t, e, n, i, r, a) {
    var o = lw.getAxisPointerClass(t.axisPointerClass);
    if (o) {
      var s = Fc(e);
      s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, i, a) : Gc(t, i)
    }
  }

  function Gc(t, e, n) {
    var i = t._axisPointer;
    i && i.dispose(e, n), t._axisPointer = null
  }

  function Wc(t, e, n) {
    n = n || {};
    var i = t.coordinateSystem,
      r = e.axis,
      a = {},
      o = r.getAxesOnZeroOf()[0],
      s = r.position,
      l = o ? "onZero" : s,
      u = r.dim,
      h = i.getRect(),
      c = [h.x, h.x + h.width, h.y, h.y + h.height],
      d = {
        left: 0,
        right: 1,
        top: 0,
        bottom: 1,
        onZero: 2
      },
      f = e.get("offset") || 0,
      p = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
    if (o) {
      var g = o.toGlobalCoord(o.dataToCoord(0));
      p[d.onZero] = Math.max(Math.min(g, p[1]), p[0])
    }
    a.position = ["y" === u ? p[d[l]] : c[0], "x" === u ? p[d[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
    var v = {
      top: -1,
      bottom: 1,
      left: -1,
      right: 1
    };
    a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), k(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
    var m = e.get("axisLabel.rotate");
    return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a
  }

  function Xc(t, e, n) {
    var i, r = {},
      a = "toggleSelected" === t;
    return n.eachComponent("legend", function(n) {
      a && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name));
      var o = n.getData();
      f(o, function(t) {
        var e = t.get("name");
        if ("\n" !== e && "" !== e) {
          var i = n.isSelected(e);
          r[e] = r.hasOwnProperty(e) ? r[e] && i : i
        }
      })
    }), {
      name: e.name,
      selected: r
    }
  }

  function jc(t, e) {
    var n = Uv(e.get("padding")),
      i = e.getItemStyle(["color", "opacity"]);
    i.fill = e.get("backgroundColor");
    var t = new xv({
      shape: {
        x: t.x - n[3],
        y: t.y - n[0],
        width: t.width + n[1] + n[3],
        height: t.height + n[0] + n[2],
        r: e.get("borderRadius")
      },
      style: i,
      silent: !0,
      z2: -1
    });
    return t
  }

  function Yc(t, e) {
    e.dispatchAction({
      type: "legendToggleSelect",
      name: t
    })
  }

  function qc(t, e, n, i) {
    var r = n.getZr().storage.getDisplayList()[0];
    r && r.useHoverLayer || n.dispatchAction({
      type: "highlight",
      seriesName: t,
      name: e,
      excludeSeriesId: i
    })
  }

  function Uc(t, e, n, i) {
    var r = n.getZr().storage.getDisplayList()[0];
    r && r.useHoverLayer || n.dispatchAction({
      type: "downplay",
      seriesName: t,
      name: e,
      excludeSeriesId: i
    })
  }

  function Zc(t, e, n) {
    var i = t.getOrient(),
      r = [1, 1];
    r[i.index] = 0, wo(e, n, {
      type: "box",
      ignoreSize: r
    })
  }

  function $c(t, e, n, i, r) {
    var a = t.axis;
    if (!a.scale.isBlank() && a.containData(e)) {
      if (!t.involveSeries) return void n.showPointer(t, e);
      var s = Kc(e, t),
        l = s.payloadBatch,
        u = s.snapToValue;
      l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(u) && null != u && (e = u), n.showPointer(t, e, l, r), n.showTooltip(t, s, u)
    }
  }

  function Kc(t, e) {
    var n = e.axis,
      i = n.dim,
      r = t,
      a = [],
      o = Number.MAX_VALUE,
      s = -1;
    return Iw(e.seriesModels, function(e) {
      var l, u, h = e.getData().mapDimension(i, !0);
      if (e.getAxisTooltipData) {
        var c = e.getAxisTooltipData(h, t, n);
        u = c.dataIndices, l = c.nestestValue
      } else {
        if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;
        l = e.getData().get(h[0], u[0])
      }
      if (null != l && isFinite(l)) {
        var d = t - l,
          f = Math.abs(d);
        o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), Iw(u, function(t) {
          a.push({
            seriesIndex: e.seriesIndex,
            dataIndexInside: t,
            dataIndex: e.getData().getRawIndex(t)
          })
        }))
      }
    }), {
      payloadBatch: a,
      snapToValue: r
    }
  }

  function Qc(t, e, n, i) {
    t[e.key] = {
      value: n,
      payloadBatch: i
    }
  }

  function Jc(t, e, n, i) {
    var r = n.payloadBatch,
      a = e.axis,
      o = a.model,
      s = e.axisPointerModel;
    if (e.triggerTooltip && r.length) {
      var l = e.coordSys.model,
        u = Hc(l),
        h = t.map[u];
      h || (h = t.map[u] = {
        coordSysId: l.id,
        coordSysIndex: l.componentIndex,
        coordSysType: l.type,
        coordSysMainType: l.mainType,
        dataByAxis: []
      }, t.list.push(h)), h.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: o.componentIndex,
        axisType: o.type,
        axisId: o.id,
        value: i,
        valueLabelOpt: {
          precision: s.get("label.precision"),
          formatter: s.get("label.formatter")
        },
        seriesDataIndices: r.slice()
      })
    }
  }

  function td(t, e, n) {
    var i = n.axesInfo = [];
    Iw(e, function(e, n) {
      var r = e.axisPointerModel.option,
        a = t[n];
      a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
        axisDim: e.axis.dim,
        axisIndex: e.axis.model.componentIndex,
        value: r.value
      })
    })
  }

  function ed(t, e, n, i) {
    if (ad(e) || !t.list.length) return void i({
      type: "hideTip"
    });
    var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
    i({
      type: "showTip",
      escapeConnect: !0,
      x: e[0],
      y: e[1],
      tooltipOption: n.tooltipOption,
      position: n.position,
      dataIndexInside: r.dataIndexInside,
      dataIndex: r.dataIndex,
      seriesIndex: r.seriesIndex,
      dataByCoordSys: t.list
    })
  }

  function nd(t, e, n) {
    var i = n.getZr(),
      r = "axisPointerLastHighlights",
      a = Cw(i)[r] || {},
      o = Cw(i)[r] = {};
    Iw(t, function(t) {
      var e = t.axisPointerModel.option;
      "show" === e.status && Iw(e.seriesDataIndices, function(t) {
        var e = t.seriesIndex + " | " + t.dataIndex;
        o[e] = t
      })
    });
    var s = [],
      l = [];
    f(a, function(t, e) {
      !o[e] && l.push(t)
    }), f(o, function(t, e) {
      !a[e] && s.push(t)
    }), l.length && n.dispatchAction({
      type: "downplay",
      escapeConnect: !0,
      batch: l
    }), s.length && n.dispatchAction({
      type: "highlight",
      escapeConnect: !0,
      batch: s
    })
  }

  function id(t, e) {
    for (var n = 0; n < (t || []).length; n++) {
      var i = t[n];
      if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
    }
  }

  function rd(t) {
    var e = t.axis.model,
      n = {},
      i = n.axisDim = t.axis.dim;
    return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
  }

  function ad(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
  }

  function od(t, e, n) {
    if (!Wd.node) {
      var i = e.getZr();
      Dw(i).records || (Dw(i).records = {}), sd(i, e);
      var r = Dw(i).records[t] || (Dw(i).records[t] = {});
      r.handler = n
    }
  }

  function sd(t, e) {
    function n(n, i) {
      t.on(n, function(n) {
        var r = cd(e);
        Aw(Dw(t).records, function(t) {
          t && i(t, n, r.dispatchAction)
        }), ld(r.pendings, e)
      })
    }
    Dw(t).initialized || (Dw(t).initialized = !0, n("click", x(hd, "click")), n("mousemove", x(hd, "mousemove")), n("globalout", ud))
  }

  function ld(t, e) {
    var n, i = t.showTip.length,
      r = t.hideTip.length;
    i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
  }

  function ud(t, e, n) {
    t.handler("leave", null, n)
  }

  function hd(t, e, n, i) {
    e.handler(t, n, i)
  }

  function cd(t) {
    var e = {
        showTip: [],
        hideTip: []
      },
      n = function(i) {
        var r = e[i.type];
        r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
      };
    return {
      dispatchAction: n,
      pendings: e
    }
  }

  function dd(t, e) {
    if (!Wd.node) {
      var n = e.getZr(),
        i = (Dw(n).records || {})[t];
      i && (Dw(n).records[t] = null)
    }
  }

  function fd() {}

  function pd(t, e, n, i) {
    gd(Ow(n).lastProp, i) || (Ow(n).lastProp = i, e ? Aa(n, i, t) : (n.stopAnimation(), n.attr(i)))
  }

  function gd(t, e) {
    if (S(t) && S(e)) {
      var n = !0;
      return f(e, function(e, i) {
        n = n && gd(t[i], e)
      }), !!n
    }
    return t === e
  }

  function vd(t, e) {
    t[e.get("label.show") ? "show" : "hide"]()
  }

  function md(t) {
    return {
      position: t.position.slice(),
      rotation: t.rotation || 0
    }
  }

  function yd(t, e, n) {
    var i = e.get("z"),
      r = e.get("zlevel");
    t && t.traverse(function(t) {
      "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
    })
  }

  function xd(t) {
    var e, n = t.get("type"),
      i = t.getModel(n + "Style");
    return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e
  }

  function _d(t, e, n, i, r) {
    var a = n.get("value"),
      o = bd(a, e.axis, e.ecModel, n.get("seriesDataIndices"), {
        precision: n.get("label.precision"),
        formatter: n.get("label.formatter")
      }),
      s = n.getModel("label"),
      l = Uv(s.get("padding") || 0),
      u = s.getFont(),
      h = Bn(o, u),
      c = r.position,
      d = h.width + l[1] + l[3],
      f = h.height + l[0] + l[2],
      p = r.align;
    "right" === p && (c[0] -= d), "center" === p && (c[0] -= d / 2);
    var g = r.verticalAlign;
    "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), wd(c, d, f, i);
    var v = s.get("backgroundColor");
    v && "auto" !== v || (v = e.get("axisLine.lineStyle.color")), t.label = {
      shape: {
        x: 0,
        y: 0,
        width: d,
        height: f,
        r: s.get("borderRadius")
      },
      position: c.slice(),
      style: {
        text: o,
        textFont: u,
        textFill: s.getTextColor(),
        textPosition: "inside",
        fill: v,
        stroke: s.get("borderColor") || "transparent",
        lineWidth: s.get("borderWidth") || 0,
        shadowBlur: s.get("shadowBlur"),
        shadowColor: s.get("shadowColor"),
        shadowOffsetX: s.get("shadowOffsetX"),
        shadowOffsetY: s.get("shadowOffsetY")
      },
      z2: 10
    }
  }

  function wd(t, e, n, i) {
    var r = i.getWidth(),
      a = i.getHeight();
    t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
  }

  function bd(t, e, n, i, r) {
    t = e.scale.parse(t);
    var a = e.scale.getLabel(t, {
        precision: r.precision
      }),
      o = r.formatter;
    if (o) {
      var s = {
        value: ih(e, t),
        seriesData: []
      };
      f(i, function(t) {
        var e = n.getSeriesByIndex(t.seriesIndex),
          i = t.dataIndexInside,
          r = e && e.getDataParams(i);
        r && s.seriesData.push(r)
      }), b(o) ? a = o.replace("{value}", a) : w(o) && (a = o(s))
    }
    return a
  }

  function Sd(t, e, n) {
    var i = we();
    return Te(i, i, n.rotation), Ie(i, i, n.position), La([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
  }

  function Md(t, e, n, i, r, a) {
    var o = iw.innerTextLayout(n.rotation, 0, n.labelDirection);
    n.labelMargin = r.get("label.margin"), _d(e, i, r, a, {
      position: Sd(i.axis, t, n),
      align: o.textAlign,
      verticalAlign: o.textVerticalAlign
    })
  }

  function Id(t, e, n) {
    return n = n || 0, {
      x1: t[n],
      y1: t[1 - n],
      x2: e[n],
      y2: e[1 - n]
    }
  }

  function Td(t, e, n) {
    return n = n || 0, {
      x: t[n],
      y: t[1 - n],
      width: e[n],
      height: e[1 - n]
    }
  }

  function Cd(t, e) {
    var n = {};
    return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
  }

  function kd(t) {
    return "x" === t.dim ? 0 : 1
  }

  function Dd(t) {
    var e = "cubic-bezier(0.23, 1, 0.32, 1)",
      n = "left " + t + "s " + e + ",top " + t + "s " + e;
    return p(Nw, function(t) {
      return t + "transition:" + n
    }).join(";")
  }

  function Ad(t) {
    var e = [],
      n = t.get("fontSize"),
      i = t.getTextColor();
    return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), Rw(["decoration", "align"], function(n) {
      var i = t.get(n);
      i && e.push("text-" + n + ":" + i)
    }), e.join(";")
  }

  function Pd(t) {
    var e = [],
      n = t.get("transitionDuration"),
      i = t.get("backgroundColor"),
      r = t.getModel("textStyle"),
      a = t.get("padding");
    return n && e.push(Dd(n)), i && (Wd.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Ye(i)), e.push("filter:alpha(opacity=70)"))), Rw(["width", "color", "radius"], function(n) {
      var i = "border-" + n,
        r = Fw(i),
        a = t.get(r);
      null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"))
    }), e.push(Ad(r)), null != a && e.push("padding:" + Uv(a).join("px ") + "px"), e.join(";") + ";"
  }

  function Od(t, e) {
    if (Wd.wxa) return null;
    var n = document.createElement("div"),
      i = this._zr = e.getZr();
    this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), this._container = t, this._show = !1, this._hideTimeout;
    var r = this;
    n.onmouseenter = function() {
      r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0
    }, n.onmousemove = function(e) {
      if (e = e || window.event, !r._enterable) {
        var n = i.handler;
        pe(t, e, !0), n.dispatch("mousemove", e)
      }
    }, n.onmouseleave = function() {
      r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1
    }
  }

  function Ld(t) {
    this._zr = t.getZr(), this._show = !1, this._hideTimeout
  }

  function Bd(t) {
    for (var e = t.pop(); t.length;) {
      var n = t.pop();
      n && (Na.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {
        formatter: n
      }), e = new Na(n, e, e.ecModel))
    }
    return e
  }

  function Ed(t, e) {
    return t.dispatchAction || y(e.dispatchAction, e)
  }

  function zd(t, e, n, i, r, a, o) {
    var s = n.getOuterSize(),
      l = s.width,
      u = s.height;
    return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + u + o > r ? e -= u + o : e += o), [t, e]
  }

  function Rd(t, e, n, i, r) {
    var a = n.getOuterSize(),
      o = a.width,
      s = a.height;
    return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
  }

  function Fd(t, e, n) {
    var i = n[0],
      r = n[1],
      a = 5,
      o = 0,
      s = 0,
      l = e.width,
      u = e.height;
    switch (t) {
      case "inside":
        o = e.x + l / 2 - i / 2, s = e.y + u / 2 - r / 2;
        break;
      case "top":
        o = e.x + l / 2 - i / 2, s = e.y - r - a;
        break;
      case "bottom":
        o = e.x + l / 2 - i / 2, s = e.y + u + a;
        break;
      case "left":
        o = e.x - i - a, s = e.y + u / 2 - r / 2;
        break;
      case "right":
        o = e.x + l + a, s = e.y + u / 2 - r / 2
    }
    return [o, s]
  }

  function Nd(t) {
    return "center" === t || "middle" === t
  }
  var Hd = 2311,
    Vd = function() {
      return Hd++
    },
    Gd = {};
  Gd = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
    browser: {},
    os: {},
    node: !1,
    wxa: !0,
    canvasSupported: !0,
    svgSupported: !1,
    touchEventsSupported: !0,
    domSupported: !1
  } : "undefined" == typeof document && "undefined" != typeof self ? {
    browser: {},
    os: {},
    node: !1,
    worker: !0,
    canvasSupported: !0,
    domSupported: !1
  } : "undefined" == typeof navigator ? {
    browser: {},
    os: {},
    node: !0,
    worker: !1,
    canvasSupported: !0,
    svgSupported: !0,
    domSupported: !1
  } : e(navigator.userAgent);
  var Wd = Gd,
    Xd = {
      "[object Function]": 1,
      "[object RegExp]": 1,
      "[object Date]": 1,
      "[object Error]": 1,
      "[object CanvasGradient]": 1,
      "[object CanvasPattern]": 1,
      "[object Image]": 1,
      "[object Canvas]": 1
    },
    jd = {
      "[object Int8Array]": 1,
      "[object Uint8Array]": 1,
      "[object Uint8ClampedArray]": 1,
      "[object Int16Array]": 1,
      "[object Uint16Array]": 1,
      "[object Int32Array]": 1,
      "[object Uint32Array]": 1,
      "[object Float32Array]": 1,
      "[object Float64Array]": 1
    },
    Yd = Object.prototype.toString,
    qd = Array.prototype,
    Ud = qd.forEach,
    Zd = qd.filter,
    $d = qd.slice,
    Kd = qd.map,
    Qd = qd.reduce,
    Jd = {},
    tf = function() {
      return Jd.createCanvas()
    };
  Jd.createCanvas = function() {
    return document.createElement("canvas")
  };
  var ef, nf = "__ec_primitive__";
  R.prototype = {
    constructor: R,
    get: function(t) {
      return this.data.hasOwnProperty(t) ? this.data[t] : null
    },
    set: function(t, e) {
      return this.data[t] = e
    },
    each: function(t, e) {
      void 0 !== e && (t = y(t, e));
      for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n)
    },
    removeKey: function(t) {
      delete this.data[t]
    }
  };
  var rf = (Object.freeze || Object)({
      $override: n,
      clone: i,
      merge: r,
      mergeAll: a,
      extend: o,
      defaults: s,
      createCanvas: tf,
      getContext: l,
      indexOf: u,
      inherits: h,
      mixin: c,
      isArrayLike: d,
      each: f,
      map: p,
      reduce: g,
      filter: v,
      find: m,
      bind: y,
      curry: x,
      isArray: _,
      isFunction: w,
      isString: b,
      isObject: S,
      isBuiltInObject: M,
      isTypedArray: I,
      isDom: T,
      eqNaN: C,
      retrieve: k,
      retrieve2: D,
      retrieve3: A,
      slice: P,
      normalizeCssArray: O,
      assert: L,
      trim: B,
      setAsPrimitive: E,
      isPrimitive: z,
      createHashMap: F,
      concatArray: N,
      noop: H
    }),
    af = "undefined" == typeof Float32Array ? Array : Float32Array,
    of = U,
    sf = Z,
    lf = ee,
    uf = ne,
    hf = (Object.freeze || Object)({
      create: V,
      copy: G,
      clone: W,
      set: X,
      add: j,
      scaleAndAdd: Y,
      sub: q,
      len: U,
      length: of ,
      lenSquare: Z,
      lengthSquare: sf,
      mul: $,
      div: K,
      dot: Q,
      scale: J,
      normalize: te,
      distance: ee,
      dist: lf,
      distanceSquare: ne,
      distSquare: uf,
      negate: ie,
      lerp: re,
      applyTransform: ae,
      min: oe,
      max: se
    });
  le.prototype = {
    constructor: le,
    _dragStart: function(t) {
      var e = t.target;
      e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(ue(e, t), "dragstart", t.event))
    },
    _drag: function(t) {
      var e = this._draggingTarget;
      if (e) {
        var n = t.offsetX,
          i = t.offsetY,
          r = n - this._x,
          a = i - this._y;
        this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(ue(e, t), "drag", t.event);
        var o = this.findHover(n, i, e).target,
          s = this._dropTarget;
        this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(ue(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(ue(o, t), "dragenter", t.event))
      }
    },
    _dragEnd: function(t) {
      var e = this._draggingTarget;
      e && (e.dragging = !1), this.dispatchToElement(ue(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(ue(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
    }
  };
  var cf = Array.prototype.slice,
    df = function(t) {
      this._$handlers = {}, this._$eventProcessor = t
    };
  df.prototype = {
    constructor: df,
    one: function(t, e, n, i) {
      var r = this._$handlers;
      if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
      e = he(this, e), r[t] || (r[t] = []);
      for (var a = 0; a < r[t].length; a++)
        if (r[t][a].h === n) return this;
      return r[t].push({
        h: n,
        one: !0,
        query: e,
        ctx: i || this
      }), this
    },
    on: function(t, e, n, i) {
      var r = this._$handlers;
      if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
      e = he(this, e), r[t] || (r[t] = []);
      for (var a = 0; a < r[t].length; a++)
        if (r[t][a].h === n) return this;
      return r[t].push({
        h: n,
        one: !1,
        query: e,
        ctx: i || this
      }), this
    },
    isSilent: function(t) {
      var e = this._$handlers;
      return e[t] && e[t].length
    },
    off: function(t, e) {
      var n = this._$handlers;
      if (!t) return this._$handlers = {}, this;
      if (e) {
        if (n[t]) {
          for (var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h !== e && i.push(n[t][r]);
          n[t] = i
        }
        n[t] && 0 === n[t].length && delete n[t]
      } else delete n[t];
      return this
    },
    trigger: function(t) {
      var e = this._$handlers[t],
        n = this._$eventProcessor;
      if (e) {
        var i = arguments,
          r = i.length;
        r > 3 && (i = cf.call(i, 1));
        for (var a = e.length, o = 0; a > o;) {
          var s = e[o];
          if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++;
          else {
            switch (r) {
              case 1:
                s.h.call(s.ctx);
                break;
              case 2:
                s.h.call(s.ctx, i[1]);
                break;
              case 3:
                s.h.call(s.ctx, i[1], i[2]);
                break;
              default:
                s.h.apply(s.ctx, i)
            }
            s.one ? (e.splice(o, 1), a--) : o++
          }
        }
      }
      return n && n.afterTrigger && n.afterTrigger(t), this
    },
    triggerWithContext: function(t) {
      var e = this._$handlers[t],
        n = this._$eventProcessor;
      if (e) {
        var i = arguments,
          r = i.length;
        r > 4 && (i = cf.call(i, 1, i.length - 1));
        for (var a = i[i.length - 1], o = e.length, s = 0; o > s;) {
          var l = e[s];
          if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++;
          else {
            switch (r) {
              case 1:
                l.h.call(a);
                break;
              case 2:
                l.h.call(a, i[1]);
                break;
              case 3:
                l.h.call(a, i[1], i[2]);
                break;
              default:
                l.h.apply(a, i)
            }
            l.one ? (e.splice(s, 1), o--) : s++
          }
        }
      }
      return n && n.afterTrigger && n.afterTrigger(t), this
    }
  };
  var ff = "undefined" != typeof window && !!window.addEventListener,
    pf = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    gf = ff ? function(t) {
      t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
    } : function(t) {
      t.returnValue = !1, t.cancelBubble = !0
    },
    vf = "silent";
  xe.prototype.dispose = function() {};
  var mf = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    yf = function(t, e, n, i) {
      df.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new xe, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, le.call(this), this.setHandlerProxy(n)
    };
  yf.prototype = {
    constructor: yf,
    setHandlerProxy: function(t) {
      this.proxy && this.proxy.dispose(), t && (f(mf, function(e) {
        t.on && t.on(e, this[e], this)
      }, this), t.handler = this), this.proxy = t
    },
    mousemove: function(t) {
      var e = t.zrX,
        n = t.zrY,
        i = this._hovered,
        r = i.target;
      r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
      var a = this._hovered = this.findHover(e, n),
        o = a.target,
        s = this.proxy;
      s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t)
    },
    mouseout: function(t) {
      this.dispatchToElement(this._hovered, "mouseout", t);
      var e, n = t.toElement || t.relatedTarget;
      do n = n && n.parentNode; while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
      !e && this.trigger("globalout", {
        event: t
      })
    },
    resize: function() {
      this._hovered = {}
    },
    dispatch: function(t, e) {
      var n = this[t];
      n && n.call(this, e)
    },
    dispose: function() {
      this.proxy.dispose(), this.storage = this.proxy = this.painter = null
    },
    setCursorStyle: function(t) {
      var e = this.proxy;
      e.setCursor && e.setCursor(t)
    },
    dispatchToElement: function(t, e, n) {
      t = t || {};
      var i = t.target;
      if (!i || !i.silent) {
        for (var r = "on" + e, a = me(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble););
        a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(t) {
          "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
        }))
      }
    },
    findHover: function(t, e, n) {
      for (var i = this.storage.getDisplayList(), r = {
          x: t,
          y: e
        }, a = i.length - 1; a >= 0; a--) {
        var o;
        if (i[a] !== n && !i[a].ignore && (o = _e(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== vf)) {
          r.target = i[a];
          break
        }
      }
      return r
    }
  }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
    yf.prototype[t] = function(e) {
      var n = this.findHover(e.zrX, e.zrY),
        i = n.target;
      if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;
      else if ("mouseup" === t) this._upEl = i;
      else if ("click" === t) {
        if (this._downEl !== this._upEl || !this._downPoint || lf(this._downPoint, [e.zrX, e.zrY]) > 4) return;
        this._downPoint = null
      }
      this.dispatchToElement(n, t, e)
    }
  }), c(yf, df), c(yf, le);
  var xf = "undefined" == typeof Float32Array ? Array : Float32Array,
    _f = (Object.freeze || Object)({
      create: we,
      identity: be,
      copy: Se,
      mul: Me,
      translate: Ie,
      rotate: Te,
      scale: Ce,
      invert: ke,
      clone: De
    }),
    wf = be,
    bf = 5e-5,
    Sf = function(t) {
      t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
    },
    Mf = Sf.prototype;
  Mf.transform = null, Mf.needLocalTransform = function() {
    return Ae(this.rotation) || Ae(this.position[0]) || Ae(this.position[1]) || Ae(this.scale[0] - 1) || Ae(this.scale[1] - 1)
  };
  var If = [];
  Mf.updateTransform = function() {
    var t = this.parent,
      e = t && t.transform,
      n = this.needLocalTransform(),
      i = this.transform;
    if (!n && !e) return void(i && wf(i));
    i = i || we(), n ? this.getLocalTransform(i) : wf(i), e && (n ? Me(i, t.transform, i) : Se(i, t.transform)), this.transform = i;
    var r = this.globalScaleRatio;
    if (null != r && 1 !== r) {
      this.getGlobalScale(If);
      var a = If[0] < 0 ? -1 : 1,
        o = If[1] < 0 ? -1 : 1,
        s = ((If[0] - a) * r + a) / If[0] || 0,
        l = ((If[1] - o) * r + o) / If[1] || 0;
      i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l
    }
    this.invTransform = this.invTransform || we(), ke(this.invTransform, i)
  }, Mf.getLocalTransform = function(t) {
    return Sf.getLocalTransform(this, t)
  }, Mf.setTransform = function(t) {
    var e = this.transform,
      n = t.dpr || 1;
    e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
  }, Mf.restoreTransform = function(t) {
    var e = t.dpr || 1;
    t.setTransform(e, 0, 0, e, 0, 0)
  };
  var Tf = [],
    Cf = we();
  Mf.setLocalTransform = function(t) {
    if (t) {
      var e = t[0] * t[0] + t[1] * t[1],
        n = t[2] * t[2] + t[3] * t[3],
        i = this.position,
        r = this.scale;
      Ae(e - 1) && (e = Math.sqrt(e)), Ae(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e)
    }
  }, Mf.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent,
        e = this.transform;
      t && t.transform && (Me(Tf, t.invTransform, e), e = Tf);
      var n = this.origin;
      n && (n[0] || n[1]) && (Cf[4] = n[0], Cf[5] = n[1], Me(Tf, e, Cf), Tf[4] -= n[0], Tf[5] -= n[1], e = Tf), this.setLocalTransform(e)
    }
  }, Mf.getGlobalScale = function(t) {
    var e = this.transform;
    return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
  }, Mf.transformCoordToLocal = function(t, e) {
    var n = [t, e],
      i = this.invTransform;
    return i && ae(n, n, i), n
  }, Mf.transformCoordToGlobal = function(t, e) {
    var n = [t, e],
      i = this.transform;
    return i && ae(n, n, i), n
  }, Sf.getLocalTransform = function(t, e) {
    e = e || [], wf(e);
    var n = t.origin,
      i = t.scale || [1, 1],
      r = t.rotation || 0,
      a = t.position || [0, 0];
    return n && (e[4] -= n[0], e[5] -= n[1]), Ce(e, e, i), r && Te(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e
  };
  var kf = {
    linear: function(t) {
      return t
    },
    quadraticIn: function(t) {
      return t * t
    },
    quadraticOut: function(t) {
      return t * (2 - t)
    },
    quadraticInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
    },
    cubicIn: function(t) {
      return t * t * t
    },
    cubicOut: function(t) {
      return --t * t * t + 1
    },
    cubicInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
    },
    quarticIn: function(t) {
      return t * t * t * t
    },
    quarticOut: function(t) {
      return 1 - --t * t * t * t
    },
    quarticInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
    },
    quinticIn: function(t) {
      return t * t * t * t * t
    },
    quinticOut: function(t) {
      return --t * t * t * t * t + 1
    },
    quinticInOut: function(t) {
      return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
    },
    sinusoidalIn: function(t) {
      return 1 - Math.cos(t * Math.PI / 2)
    },
    sinusoidalOut: function(t) {
      return Math.sin(t * Math.PI / 2)
    },
    sinusoidalInOut: function(t) {
      return .5 * (1 - Math.cos(Math.PI * t))
    },
    exponentialIn: function(t) {
      return 0 === t ? 0 : Math.pow(1024, t - 1)
    },
    exponentialOut: function(t) {
      return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    },
    exponentialInOut: function(t) {
      return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
    },
    circularIn: function(t) {
      return 1 - Math.sqrt(1 - t * t)
    },
    circularOut: function(t) {
      return Math.sqrt(1 - --t * t)
    },
    circularInOut: function(t) {
      return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    },
    elasticIn: function(t) {
      var e, n = .1,
        i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
    },
    elasticOut: function(t) {
      var e, n = .1,
        i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
    },
    elasticInOut: function(t) {
      var e, n = .1,
        i = .4;
      return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
    },
    backIn: function(t) {
      var e = 1.70158;
      return t * t * ((e + 1) * t - e)
    },
    backOut: function(t) {
      var e = 1.70158;
      return --t * t * ((e + 1) * t + e) + 1
    },
    backInOut: function(t) {
      var e = 2.5949095;
      return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
    },
    bounceIn: function(t) {
      return 1 - kf.bounceOut(1 - t)
    },
    bounceOut: function(t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    },
    bounceInOut: function(t) {
      return .5 > t ? .5 * kf.bounceIn(2 * t) : .5 * kf.bounceOut(2 * t - 1) + .5
    }
  };
  Pe.prototype = {
    constructor: Pe,
    step: function(t, e) {
      if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void(this._pausedTime += e);
      var n = (t - this._startTime - this._pausedTime) / this._life;
      if (!(0 > n)) {
        n = Math.min(n, 1);
        var i = this.easing,
          r = "string" == typeof i ? kf[i] : i,
          a = "function" == typeof r ? r(n) : n;
        return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
      }
    },
    restart: function(t) {
      var e = (t - this._startTime - this._pausedTime) % this._life;
      this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
    },
    fire: function(t, e) {
      t = "on" + t, this[t] && this[t](this._target, e)
    },
    pause: function() {
      this._paused = !0
    },
    resume: function() {
      this._paused = !1
    }
  };
  var Df = function() {
      this.head = null, this.tail = null, this._len = 0
    },
    Af = Df.prototype;
  Af.insert = function(t) {
    var e = new Pf(t);
    return this.insertEntry(e), e
  }, Af.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
  }, Af.remove = function(t) {
    var e = t.prev,
      n = t.next;
    e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
  }, Af.len = function() {
    return this._len
  }, Af.clear = function() {
    this.head = this.tail = null, this._len = 0
  };
  var Pf = function(t) {
      this.value = t, this.next, this.prev
    },
    Of = function(t) {
      this._list = new Df, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
    },
    Lf = Of.prototype;
  Lf.put = function(t, e) {
    var n = this._list,
      i = this._map,
      r = null;
    if (null == i[t]) {
      var a = n.len(),
        o = this._lastRemovedEntry;
      if (a >= this._maxSize && a > 0) {
        var s = n.head;
        n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
      }
      o ? o.value = e : o = new Pf(e), o.key = t, n.insertEntry(o), i[t] = o
    }
    return r
  }, Lf.get = function(t) {
    var e = this._map[t],
      n = this._list;
    return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
  }, Lf.clear = function() {
    this._list.clear(), this._map = {}
  };
  var Bf = {
      transparent: [0, 0, 0, 0],
      aliceblue: [240, 248, 255, 1],
      antiquewhite: [250, 235, 215, 1],
      aqua: [0, 255, 255, 1],
      aquamarine: [127, 255, 212, 1],
      azure: [240, 255, 255, 1],
      beige: [245, 245, 220, 1],
      bisque: [255, 228, 196, 1],
      black: [0, 0, 0, 1],
      blanchedalmond: [255, 235, 205, 1],
      blue: [0, 0, 255, 1],
      blueviolet: [138, 43, 226, 1],
      brown: [165, 42, 42, 1],
      burlywood: [222, 184, 135, 1],
      cadetblue: [95, 158, 160, 1],
      chartreuse: [127, 255, 0, 1],
      chocolate: [210, 105, 30, 1],
      coral: [255, 127, 80, 1],
      cornflowerblue: [100, 149, 237, 1],
      cornsilk: [255, 248, 220, 1],
      crimson: [220, 20, 60, 1],
      cyan: [0, 255, 255, 1],
      darkblue: [0, 0, 139, 1],
      darkcyan: [0, 139, 139, 1],
      darkgoldenrod: [184, 134, 11, 1],
      darkgray: [169, 169, 169, 1],
      darkgreen: [0, 100, 0, 1],
      darkgrey: [169, 169, 169, 1],
      darkkhaki: [189, 183, 107, 1],
      darkmagenta: [139, 0, 139, 1],
      darkolivegreen: [85, 107, 47, 1],
      darkorange: [255, 140, 0, 1],
      darkorchid: [153, 50, 204, 1],
      darkred: [139, 0, 0, 1],
      darksalmon: [233, 150, 122, 1],
      darkseagreen: [143, 188, 143, 1],
      darkslateblue: [72, 61, 139, 1],
      darkslategray: [47, 79, 79, 1],
      darkslategrey: [47, 79, 79, 1],
      darkturquoise: [0, 206, 209, 1],
      darkviolet: [148, 0, 211, 1],
      deeppink: [255, 20, 147, 1],
      deepskyblue: [0, 191, 255, 1],
      dimgray: [105, 105, 105, 1],
      dimgrey: [105, 105, 105, 1],
      dodgerblue: [30, 144, 255, 1],
      firebrick: [178, 34, 34, 1],
      floralwhite: [255, 250, 240, 1],
      forestgreen: [34, 139, 34, 1],
      fuchsia: [255, 0, 255, 1],
      gainsboro: [220, 220, 220, 1],
      ghostwhite: [248, 248, 255, 1],
      gold: [255, 215, 0, 1],
      goldenrod: [218, 165, 32, 1],
      gray: [128, 128, 128, 1],
      green: [0, 128, 0, 1],
      greenyellow: [173, 255, 47, 1],
      grey: [128, 128, 128, 1],
      honeydew: [240, 255, 240, 1],
      hotpink: [255, 105, 180, 1],
      indianred: [205, 92, 92, 1],
      indigo: [75, 0, 130, 1],
      ivory: [255, 255, 240, 1],
      khaki: [240, 230, 140, 1],
      lavender: [230, 230, 250, 1],
      lavenderblush: [255, 240, 245, 1],
      lawngreen: [124, 252, 0, 1],
      lemonchiffon: [255, 250, 205, 1],
      lightblue: [173, 216, 230, 1],
      lightcoral: [240, 128, 128, 1],
      lightcyan: [224, 255, 255, 1],
      lightgoldenrodyellow: [250, 250, 210, 1],
      lightgray: [211, 211, 211, 1],
      lightgreen: [144, 238, 144, 1],
      lightgrey: [211, 211, 211, 1],
      lightpink: [255, 182, 193, 1],
      lightsalmon: [255, 160, 122, 1],
      lightseagreen: [32, 178, 170, 1],
      lightskyblue: [135, 206, 250, 1],
      lightslategray: [119, 136, 153, 1],
      lightslategrey: [119, 136, 153, 1],
      lightsteelblue: [176, 196, 222, 1],
      lightyellow: [255, 255, 224, 1],
      lime: [0, 255, 0, 1],
      limegreen: [50, 205, 50, 1],
      linen: [250, 240, 230, 1],
      magenta: [255, 0, 255, 1],
      maroon: [128, 0, 0, 1],
      mediumaquamarine: [102, 205, 170, 1],
      mediumblue: [0, 0, 205, 1],
      mediumorchid: [186, 85, 211, 1],
      mediumpurple: [147, 112, 219, 1],
      mediumseagreen: [60, 179, 113, 1],
      mediumslateblue: [123, 104, 238, 1],
      mediumspringgreen: [0, 250, 154, 1],
      mediumturquoise: [72, 209, 204, 1],
      mediumvioletred: [199, 21, 133, 1],
      midnightblue: [25, 25, 112, 1],
      mintcream: [245, 255, 250, 1],
      mistyrose: [255, 228, 225, 1],
      moccasin: [255, 228, 181, 1],
      navajowhite: [255, 222, 173, 1],
      navy: [0, 0, 128, 1],
      oldlace: [253, 245, 230, 1],
      olive: [128, 128, 0, 1],
      olivedrab: [107, 142, 35, 1],
      orange: [255, 165, 0, 1],
      orangered: [255, 69, 0, 1],
      orchid: [218, 112, 214, 1],
      palegoldenrod: [238, 232, 170, 1],
      palegreen: [152, 251, 152, 1],
      paleturquoise: [175, 238, 238, 1],
      palevioletred: [219, 112, 147, 1],
      papayawhip: [255, 239, 213, 1],
      peachpuff: [255, 218, 185, 1],
      peru: [205, 133, 63, 1],
      pink: [255, 192, 203, 1],
      plum: [221, 160, 221, 1],
      powderblue: [176, 224, 230, 1],
      purple: [128, 0, 128, 1],
      red: [255, 0, 0, 1],
      rosybrown: [188, 143, 143, 1],
      royalblue: [65, 105, 225, 1],
      saddlebrown: [139, 69, 19, 1],
      salmon: [250, 128, 114, 1],
      sandybrown: [244, 164, 96, 1],
      seagreen: [46, 139, 87, 1],
      seashell: [255, 245, 238, 1],
      sienna: [160, 82, 45, 1],
      silver: [192, 192, 192, 1],
      skyblue: [135, 206, 235, 1],
      slateblue: [106, 90, 205, 1],
      slategray: [112, 128, 144, 1],
      slategrey: [112, 128, 144, 1],
      snow: [255, 250, 250, 1],
      springgreen: [0, 255, 127, 1],
      steelblue: [70, 130, 180, 1],
      tan: [210, 180, 140, 1],
      teal: [0, 128, 128, 1],
      thistle: [216, 191, 216, 1],
      tomato: [255, 99, 71, 1],
      turquoise: [64, 224, 208, 1],
      violet: [238, 130, 238, 1],
      wheat: [245, 222, 179, 1],
      white: [255, 255, 255, 1],
      whitesmoke: [245, 245, 245, 1],
      yellow: [255, 255, 0, 1],
      yellowgreen: [154, 205, 50, 1]
    },
    Ef = new Of(20),
    zf = null,
    Rf = qe,
    Ff = Ue,
    Nf = (Object.freeze || Object)({
      parse: Ge,
      lift: je,
      toHex: Ye,
      fastLerp: qe,
      fastMapToColor: Rf,
      lerp: Ue,
      mapToColor: Ff,
      modifyHSL: Ze,
      modifyAlpha: $e,
      stringify: Ke
    }),
    Hf = Array.prototype.slice,
    Vf = function(t, e, n, i) {
      this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Qe, this._setter = i || Je, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
    };
  Vf.prototype = {
    when: function(t, e) {
      var n = this._tracks;
      for (var i in e)
        if (e.hasOwnProperty(i)) {
          if (!n[i]) {
            n[i] = [];
            var r = this._getter(this._target, i);
            if (null == r) continue;
            0 !== t && n[i].push({
              time: 0,
              value: ln(r)
            })
          }
          n[i].push({
            time: t,
            value: e[i]
          })
        }
      return this
    },
    during: function(t) {
      return this._onframeList.push(t), this
    },
    pause: function() {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
      this._paused = !0
    },
    resume: function() {
      for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
      this._paused = !1
    },
    isPaused: function() {
      return !!this._paused
    },
    _doneCallback: function() {
      this._tracks = {}, this._clipList.length = 0;
      for (var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this)
    },
    start: function(t, e) {
      var n, i = this,
        r = 0,
        a = function() {
          r--, r || i._doneCallback()
        };
      for (var o in this._tracks)
        if (this._tracks.hasOwnProperty(o)) {
          var s = cn(this, t, a, this._tracks[o], o, e);
          s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), n = s)
        }
      if (n) {
        var l = n.onframe;
        n.onframe = function(t, e) {
          l(t, e);
          for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
        }
      }
      return r || this._doneCallback(), this
    },
    stop: function(t) {
      for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
        var r = e[i];
        t && r.onframe(this._target, 1), n && n.removeClip(r)
      }
      e.length = 0
    },
    delay: function(t) {
      return this._delay = t, this
    },
    done: function(t) {
      return t && this._doneList.push(t), this
    },
    getClips: function() {
      return this._clipList
    }
  };
  var Gf = 1;
  "undefined" != typeof window && (Gf = Math.max(window.devicePixelRatio || 1, 1));
  var Wf = 0,
    Xf = Gf,
    jf = function() {};
  1 === Wf ? jf = function() {
    for (var t in arguments) throw new Error(arguments[t])
  } : Wf > 1 && (jf = function() {
    for (var t in arguments) console.log(arguments[t])
  });
  var Yf = jf,
    qf = function() {
      this.animators = []
    };
  qf.prototype = {
    constructor: qf,
    animate: function(t, e) {
      var n, i = !1,
        r = this,
        a = this.__zr;
      if (t) {
        var o = t.split("."),
          s = r;
        i = "shape" === o[0];
        for (var l = 0, h = o.length; h > l; l++) s && (s = s[o[l]]);
        s && (n = s)
      } else n = r;
      if (!n) return void Yf('Property "' + t + '" is not existed in element ' + r.id);
      var c = r.animators,
        d = new Vf(n, e);
      return d.during(function() {
        r.dirty(i)
      }).done(function() {
        c.splice(u(c, d), 1)
      }), c.push(d), a && a.animation.addAnimator(d), d
    },
    stopAnimation: function(t) {
      for (var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);
      return e.length = 0, this
    },
    animateTo: function(t, e, n, i, r, a) {
      dn(this, t, e, n, i, r, a)
    },
    animateFrom: function(t, e, n, i, r, a) {
      dn(this, t, e, n, i, r, a, !0)
    }
  };
  var Uf = function(t) {
    Sf.call(this, t), df.call(this, t), qf.call(this, t), this.id = t.id || Vd()
  };
  Uf.prototype = {
    type: "element",
    name: "",
    __zr: null,
    ignore: !1,
    clipPath: null,
    isGroup: !1,
    drift: function(t, e) {
      switch (this.draggable) {
        case "horizontal":
          e = 0;
          break;
        case "vertical":
          t = 0
      }
      var n = this.transform;
      n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
    },
    beforeUpdate: function() {},
    afterUpdate: function() {},
    update: function() {
      this.updateTransform()
    },
    traverse: function() {},
    attrKV: function(t, e) {
      if ("position" === t || "scale" === t || "origin" === t) {
        if (e) {
          var n = this[t];
          n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
        }
      } else this[t] = e
    },
    hide: function() {
      this.ignore = !0, this.__zr && this.__zr.refresh()
    },
    show: function() {
      this.ignore = !1, this.__zr && this.__zr.refresh()
    },
    attr: function(t, e) {
      if ("string" == typeof t) this.attrKV(t, e);
      else if (S(t))
        for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
      return this.dirty(!1), this
    },
    setClipPath: function(t) {
      var e = this.__zr;
      e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
    },
    removeClipPath: function() {
      var t = this.clipPath;
      t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
    },
    addSelfToZr: function(t) {
      this.__zr = t;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
      this.clipPath && this.clipPath.addSelfToZr(t)
    },
    removeSelfFromZr: function(t) {
      this.__zr = null;
      var e = this.animators;
      if (e)
        for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
      this.clipPath && this.clipPath.removeSelfFromZr(t)
    }
  }, c(Uf, qf), c(Uf, Sf), c(Uf, df);
  var Zf = ae,
    $f = Math.min,
    Kf = Math.max;
  gn.prototype = {
    constructor: gn,
    union: function(t) {
      var e = $f(t.x, this.x),
        n = $f(t.y, this.y);
      this.width = Kf(t.x + t.width, this.x + this.width) - e, this.height = Kf(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
    },
    applyTransform: function() {
      var t = [],
        e = [],
        n = [],
        i = [];
      return function(r) {
        if (r) {
          t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, Zf(t, t, r), Zf(e, e, r), Zf(n, n, r), Zf(i, i, r), this.x = $f(t[0], e[0], n[0], i[0]), this.y = $f(t[1], e[1], n[1], i[1]);
          var a = Kf(t[0], e[0], n[0], i[0]),
            o = Kf(t[1], e[1], n[1], i[1]);
          this.width = a - this.x, this.height = o - this.y
        }
      }
    }(),
    calculateTransform: function(t) {
      var e = this,
        n = t.width / e.width,
        i = t.height / e.height,
        r = we();
      return Ie(r, r, [-e.x, -e.y]), Ce(r, r, [n, i]), Ie(r, r, [t.x, t.y]), r
    },
    intersect: function(t) {
      if (!t) return !1;
      t instanceof gn || (t = gn.create(t));
      var e = this,
        n = e.x,
        i = e.x + e.width,
        r = e.y,
        a = e.y + e.height,
        o = t.x,
        s = t.x + t.width,
        l = t.y,
        u = t.y + t.height;
      return !(o > i || n > s || l > a || r > u)
    },
    contain: function(t, e) {
      var n = this;
      return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
    },
    clone: function() {
      return new gn(this.x, this.y, this.width, this.height)
    },
    copy: function(t) {
      this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
    },
    plain: function() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      }
    }
  }, gn.create = function(t) {
    return new gn(t.x, t.y, t.width, t.height)
  };
  var Qf = function(t) {
    t = t || {}, Uf.call(this, t);
    for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
    this._children = [], this.__storage = null, this.__dirty = !0
  };
  Qf.prototype = {
    constructor: Qf,
    isGroup: !0,
    type: "group",
    silent: !1,
    children: function() {
      return this._children.slice()
    },
    childAt: function(t) {
      return this._children[t]
    },
    childOfName: function(t) {
      for (var e = this._children, n = 0; n < e.length; n++)
        if (e[n].name === t) return e[n]
    },
    childCount: function() {
      return this._children.length
    },
    add: function(t) {
      return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
    },
    addBefore: function(t, e) {
      if (t && t !== this && t.parent !== this && e && e.parent === this) {
        var n = this._children,
          i = n.indexOf(e);
        i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
      }
      return this
    },
    _doAdd: function(t) {
      t.parent && t.parent.remove(t), t.parent = this;
      var e = this.__storage,
        n = this.__zr;
      e && e !== t.__storage && (e.addToStorage(t), t instanceof Qf && t.addChildrenToStorage(e)), n && n.refresh()
    },
    remove: function(t) {
      var e = this.__zr,
        n = this.__storage,
        i = this._children,
        r = u(i, t);
      return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof Qf && t.delChildrenFromStorage(n)), e && e.refresh(), this)
    },
    removeAll: function() {
      var t, e, n = this._children,
        i = this.__storage;
      for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof Qf && t.delChildrenFromStorage(i)), t.parent = null;
      return n.length = 0, this
    },
    eachChild: function(t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];
        t.call(e, r, i)
      }
      return this
    },
    traverse: function(t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n];
        t.call(e, i), "group" === i.type && i.traverse(t, e)
      }
      return this
    },
    addChildrenToStorage: function(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];
        t.addToStorage(n), n instanceof Qf && n.addChildrenToStorage(t)
      }
    },
    delChildrenFromStorage: function(t) {
      for (var e = 0; e < this._children.length; e++) {
        var n = this._children[e];
        t.delFromStorage(n), n instanceof Qf && n.delChildrenFromStorage(t)
      }
    },
    dirty: function() {
      return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
    },
    getBoundingRect: function(t) {
      for (var e = null, n = new gn(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
        var o = i[a];
        if (!o.ignore && !o.invisible) {
          var s = o.getBoundingRect(),
            l = o.getLocalTransform(r);
          l ? (n.copy(s), n.applyTransform(l), e = e || n.clone(), e.union(n)) : (e = e || s.clone(), e.union(s))
        }
      }
      return e || n
    }
  }, h(Qf, Uf);
  var Jf = 32,
    tp = 7,
    ep = function() {
      this._roots = [], this._displayList = [], this._displayListLen = 0
    };
  ep.prototype = {
    constructor: ep,
    traverse: function(t, e) {
      for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
    },
    getDisplayList: function(t, e) {
      return e = e || !1, t && this.updateDisplayList(e), this._displayList
    },
    updateDisplayList: function(t) {
      this._displayListLen = 0;
      for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
      n.length = this._displayListLen, Wd.canvasSupported && Sn(n, Mn)
    },
    _updateAndAddDisplayable: function(t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
        var i = t.clipPath;
        if (i) {
          e = e ? e.slice() : [];
          for (var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
        }
        if (t.isGroup) {
          for (var o = t._children, s = 0; s < o.length; s++) {
            var l = o[s];
            t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
          }
          t.__dirty = !1
        } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
      }
    },
    addRoot: function(t) {
      t.__storage !== this && (t instanceof Qf && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
    },
    delRoot: function(t) {
      if (null == t) {
        for (var e = 0; e < this._roots.length; e++) {
          var n = this._roots[e];
          n instanceof Qf && n.delChildrenFromStorage(this)
        }
        return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
      }
      if (t instanceof Array)
        for (var e = 0, i = t.length; i > e; e++) this.delRoot(t[e]);
      else {
        var r = u(this._roots, t);
        r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Qf && t.delChildrenFromStorage(this))
      }
    },
    addToStorage: function(t) {
      return t && (t.__storage = this, t.dirty(!1)), this
    },
    delFromStorage: function(t) {
      return t && (t.__storage = null), this
    },
    dispose: function() {
      this._renderList = this._roots = null
    },
    displayableSortFunc: Mn
  };
  var np = {
      shadowBlur: 1,
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      textShadowBlur: 1,
      textShadowOffsetX: 1,
      textShadowOffsetY: 1,
      textBoxShadowBlur: 1,
      textBoxShadowOffsetX: 1,
      textBoxShadowOffsetY: 1
    },
    ip = function(t, e, n) {
      return np.hasOwnProperty(e) ? n *= t.dpr : n
    },
    rp = [
      ["shadowBlur", 0],
      ["shadowOffsetX", 0],
      ["shadowOffsetY", 0],
      ["shadowColor", "#000"],
      ["lineCap", "butt"],
      ["lineJoin", "miter"],
      ["miterLimit", 10]
    ],
    ap = function(t) {
      this.extendFrom(t, !1)
    };
  ap.prototype = {
    constructor: ap,
    fill: "#000",
    stroke: null,
    opacity: 1,
    fillOpacity: null,
    strokeOpacity: null,
    lineDash: null,
    lineDashOffset: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    lineWidth: 1,
    strokeNoScale: !1,
    text: null,
    font: null,
    textFont: null,
    fontStyle: null,
    fontWeight: null,
    fontSize: null,
    fontFamily: null,
    textTag: null,
    textFill: "#000",
    textStroke: null,
    textWidth: null,
    textHeight: null,
    textStrokeWidth: 0,
    textLineHeight: null,
    textPosition: "inside",
    textRect: null,
    textOffset: null,
    textAlign: null,
    textVerticalAlign: null,
    textDistance: 5,
    textShadowColor: "transparent",
    textShadowBlur: 0,
    textShadowOffsetX: 0,
    textShadowOffsetY: 0,
    textBoxShadowColor: "transparent",
    textBoxShadowBlur: 0,
    textBoxShadowOffsetX: 0,
    textBoxShadowOffsetY: 0,
    transformText: !1,
    textRotation: 0,
    textOrigin: null,
    textBackgroundColor: null,
    textBorderColor: null,
    textBorderWidth: 0,
    textBorderRadius: 0,
    textPadding: null,
    rich: null,
    truncate: null,
    blend: null,
    bind: function(t, e, n) {
      for (var i = this, r = n && n.style, a = !r, o = 0; o < rp.length; o++) {
        var s = rp[o],
          l = s[0];
        (a || i[l] !== r[l]) && (t[l] = ip(t, l, i[l] || s[1]))
      }
      if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
        var u = i.lineWidth;
        t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
      }
    },
    hasFill: function() {
      var t = this.fill;
      return null != t && "none" !== t
    },
    hasStroke: function() {
      var t = this.stroke;
      return null != t && "none" !== t && this.lineWidth > 0
    },
    extendFrom: function(t, e) {
      if (t)
        for (var n in t) !t.hasOwnProperty(n) || e !== !0 && (e === !1 ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
    },
    set: function(t, e) {
      "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
    },
    clone: function() {
      var t = new this.constructor;
      return t.extendFrom(this, !0), t
    },
    getGradient: function(t, e, n) {
      for (var i = "radial" === e.type ? Tn : In, r = i(t, e, n), a = e.colorStops, o = 0; o < a.length; o++) r.addColorStop(a[o].offset, a[o].color);
      return r
    }
  };
  for (var op = ap.prototype, sp = 0; sp < rp.length; sp++) {
    var lp = rp[sp];
    lp[0] in op || (op[lp[0]] = lp[1])
  }
  ap.getGradient = op.getGradient;
  var up = function(t, e) {
    this.image = t, this.repeat = e, this.type = "pattern"
  };
  up.prototype.getCanvasPattern = function(t) {
    return t.createPattern(this.image, this.repeat || "repeat")
  };
  var hp = function(t, e, n) {
    var i;
    n = n || Xf, "string" == typeof t ? i = kn(t, e, n) : S(t) && (i = t, t = i.id), this.id = t, this.dom = i;
    var r = i.style;
    r && (i.onselectstart = Cn, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
  };
  hp.prototype = {
    constructor: hp,
    __dirty: !0,
    __used: !1,
    __drawIndex: 0,
    __startIndex: 0,
    __endIndex: 0,
    incremental: !1,
    getElementCount: function() {
      return this.__endIndex - this.__startIndex
    },
    initContext: function() {
      this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
    },
    createBackBuffer: function() {
      var t = this.dpr;
      this.domBack = kn("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
    },
    resize: function(t, e) {
      var n = this.dpr,
        i = this.dom,
        r = i.style,
        a = this.domBack;
      r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n))
    },
    clear: function(t, e) {
      var n = this.dom,
        i = this.ctx,
        r = n.width,
        a = n.height,
        e = e || this.clearColor,
        o = this.motionBlur && !t,
        s = this.lastFrameAlpha,
        l = this.dpr;
      if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
        var u;
        e.colorStops ? (u = e.__canvasGradient || ap.getGradient(i, e, {
          x: 0,
          y: 0,
          width: r,
          height: a
        }), e.__canvasGradient = u) : e.image && (u = up.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = u || e, i.fillRect(0, 0, r, a), i.restore()
      }
      if (o) {
        var h = this.domBack;
        i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, r, a), i.restore()
      }
    }
  };
  var cp = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
      setTimeout(t, 16)
    },
    dp = new Of(50),
    fp = {},
    pp = 0,
    gp = 5e3,
    vp = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
    mp = "12px sans-serif",
    yp = {};
  yp.measureText = function(t, e) {
    var n = l();
    return n.font = e || mp, n.measureText(t)
  };
  var xp = {
      left: 1,
      right: 1,
      center: 1
    },
    _p = {
      top: 1,
      bottom: 1,
      middle: 1
    },
    wp = [
      ["textShadowBlur", "shadowBlur", 0],
      ["textShadowOffsetX", "shadowOffsetX", 0],
      ["textShadowOffsetY", "shadowOffsetY", 0],
      ["textShadowColor", "shadowColor", "transparent"]
    ],
    bp = new gn,
    Sp = function() {};
  Sp.prototype = {
    constructor: Sp,
    drawRectText: function(t, e) {
      var n = this.style;
      e = n.textRect || e, this.__dirty && Kn(n, !0);
      var i = n.text;
      if (null != i && (i += ""), pi(i, n)) {
        t.save();
        var r = this.transform;
        n.transformText ? this.setTransform(t) : r && (bp.copy(e), bp.applyTransform(r), e = bp), Jn(this, t, i, n, e), t.restore()
      }
    }
  }, gi.prototype = {
    constructor: gi,
    type: "displayable",
    __dirty: !0,
    invisible: !1,
    z: 0,
    z2: 0,
    zlevel: 0,
    draggable: !1,
    dragging: !1,
    silent: !1,
    culling: !1,
    cursor: "pointer",
    rectHover: !1,
    progressive: !1,
    incremental: !1,
    globalScaleRatio: 1,
    beforeBrush: function() {},
    afterBrush: function() {},
    brush: function() {},
    getBoundingRect: function() {},
    contain: function(t, e) {
      return this.rectContain(t, e)
    },
    traverse: function(t, e) {
      t.call(e, this)
    },
    rectContain: function(t, e) {
      var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect();
      return i.contain(n[0], n[1])
    },
    dirty: function() {
      this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh()
    },
    animateStyle: function(t) {
      return this.animate("style", t)
    },
    attrKV: function(t, e) {
      "style" !== t ? Uf.prototype.attrKV.call(this, t, e) : this.style.set(e)
    },
    setStyle: function(t, e) {
      return this.style.set(t, e), this.dirty(!1), this
    },
    useStyle: function(t) {
      return this.style = new ap(t, this), this.dirty(!1), this
    }
  }, h(gi, Uf), c(gi, Sp), vi.prototype = {
    constructor: vi,
    type: "image",
    brush: function(t, e) {
      var n = this.style,
        i = n.image;
      n.bind(t, this, e);
      var r = this._image = An(i, this._image, this, this.onload);
      if (r && On(r)) {
        var a = n.x || 0,
          o = n.y || 0,
          s = n.width,
          l = n.height,
          u = r.width / r.height;
        if (null == s && null != l ? s = l * u : null == l && null != s ? l = s / u : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
          var h = n.sx || 0,
            c = n.sy || 0;
          t.drawImage(r, h, c, n.sWidth, n.sHeight, a, o, s, l)
        } else if (n.sx && n.sy) {
          var h = n.sx,
            c = n.sy,
            d = s - h,
            f = l - c;
          t.drawImage(r, h, c, d, f, a, o, s, l)
        } else t.drawImage(r, a, o, s, l);
        null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
      }
    },
    getBoundingRect: function() {
      var t = this.style;
      return this._rect || (this._rect = new gn(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
    }
  }, h(vi, gi);
  var Mp = 1e5,
    Ip = 314159,
    Tp = .01,
    Cp = .001,
    kp = new gn(0, 0, 0, 0),
    Dp = new gn(0, 0, 0, 0),
    Ap = function(t, e, n) {
      this.type = "canvas";
      var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
      this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Xf, this._singleCanvas = i, this.root = t;
      var r = t.style;
      r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
      var a = this._zlevelList = [],
        s = this._layers = {};
      if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
        var l = t.width,
          u = t.height;
        null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = u * this.dpr, this._width = l, this._height = u;
        var h = new hp(t, this, this.dpr);
        h.__builtin__ = !0, h.initContext(), s[Ip] = h, h.zlevel = Ip, a.push(Ip), this._domRoot = t
      } else {
        this._width = this._getSize(0), this._height = this._getSize(1);
        var c = this._domRoot = bi(this._width, this._height);
        t.appendChild(c)
      }
      this._hoverlayer = null, this._hoverElements = []
    };
  Ap.prototype = {
    constructor: Ap,
    getType: function() {
      return "canvas"
    },
    isSingleCanvas: function() {
      return this._singleCanvas
    },
    getViewportRoot: function() {
      return this._domRoot
    },
    getViewportRootOffset: function() {
      var t = this.getViewportRoot();
      return t ? {
        offsetLeft: t.offsetLeft || 0,
        offsetTop: t.offsetTop || 0
      } : void 0
    },
    refresh: function(t) {
      var e = this.storage.getDisplayList(!0),
        n = this._zlevelList;
      this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
      for (var i = 0; i < n.length; i++) {
        var r = n[i],
          a = this._layers[r];
        if (!a.__builtin__ && a.refresh) {
          var o = 0 === i ? this._backgroundColor : null;
          a.refresh(o)
        }
      }
      return this.refreshHover(), this
    },
    addHover: function(t, e) {
      if (!t.__hoverMir) {
        var n = new t.constructor({
          style: t.style,
          shape: t.shape,
          z: t.z,
          z2: t.z2,
          silent: t.silent
        });
        return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), n
      }
    },
    removeHover: function(t) {
      var e = t.__hoverMir,
        n = this._hoverElements,
        i = u(n, e);
      i >= 0 && n.splice(i, 1), t.__hoverMir = null
    },
    clearHover: function() {
      for (var t = this._hoverElements, e = 0; e < t.length; e++) {
        var n = t[e].__from;
        n && (n.__hoverMir = null)
      }
      t.length = 0
    },
    refreshHover: function() {
      var t = this._hoverElements,
        e = t.length,
        n = this._hoverlayer;
      if (n && n.clear(), e) {
        Sn(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(Mp));
        var i = {};
        n.ctx.save();
        for (var r = 0; e > r;) {
          var a = t[r],
            o = a.__from;
          o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--)
        }
        n.ctx.restore()
      }
    },
    getHoverLayer: function() {
      return this.getLayer(Mp)
    },
    _paintList: function(t, e, n) {
      if (this._redrawId === n) {
        e = e || !1, this._updateLayerStatus(t);
        var i = this._doPaintList(t, e);
        if (this._needsManuallyCompositing && this._compositeManually(), !i) {
          var r = this;
          cp(function() {
            r._paintList(t, e, n)
          })
        }
      }
    },
    _compositeManually: function() {
      var t = this.getLayer(Ip).ctx,
        e = this._domRoot.width,
        n = this._domRoot.height;
      t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
        i.virtual && t.drawImage(i.dom, 0, 0, e, n)
      })
    },
    _doPaintList: function(t, e) {
      for (var n = [], i = 0; i < this._zlevelList.length; i++) {
        var r = this._zlevelList[i],
          a = this._layers[r];
        a.__builtin__ && a !== this._hoverlayer && (a.__dirty || e) && n.push(a)
      }
      for (var o = !0, s = 0; s < n.length; s++) {
        var a = n[s],
          l = a.ctx,
          u = {};
        l.save();
        var h = e ? a.__startIndex : a.__drawIndex,
          c = !e && a.incremental && Date.now,
          d = c && Date.now(),
          p = a.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
        if (a.__startIndex === a.__endIndex) a.clear(!1, p);
        else if (h === a.__startIndex) {
          var g = t[h];
          g.incremental && g.notClear && !e || a.clear(!1, p)
        } - 1 === h && (console.error("For some unknown reason. drawIndex is -1"), h = a.__startIndex);
        for (var v = h; v < a.__endIndex; v++) {
          var m = t[v];
          if (this._doPaintEl(m, a, e, u), m.__dirty = m.__dirtyText = !1, c) {
            var y = Date.now() - d;
            if (y > 15) break
          }
        }
        a.__drawIndex = v, a.__drawIndex < a.__endIndex && (o = !1), u.prevElClipPaths && l.restore(), l.restore()
      }
      return Wd.wxa && f(this._layers, function(t) {
        t && t.ctx && t.ctx.draw && t.ctx.draw()
      }), o
    },
    _doPaintEl: function(t, e, n, i) {
      var r = e.ctx,
        a = t.transform;
      if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && xi(t, this._width, this._height))) {
        var o = t.__clipPaths;
        (!i.prevElClipPaths || _i(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), wi(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
      }
    },
    getLayer: function(t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = Ip);
      var n = this._layers[t];
      return n || (n = new hp("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
    },
    insertLayer: function(t, e) {
      var n = this._layers,
        i = this._zlevelList,
        r = i.length,
        a = null,
        o = -1,
        s = this._domRoot;
      if (n[t]) return void Yf("ZLevel " + t + " has been used already");
      if (!yi(e)) return void Yf("Layer of zlevel " + t + " is not valid");
      if (r > 0 && t > i[0]) {
        for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++);
        a = n[i[o]]
      }
      if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual)
        if (a) {
          var l = a.dom;
          l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
        } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
    },
    eachLayer: function(t, e) {
      var n, i, r = this._zlevelList;
      for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
    },
    eachBuiltinLayer: function(t, e) {
      var n, i, r, a = this._zlevelList;
      for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ && t.call(e, n, i)
    },
    eachOtherLayer: function(t, e) {
      var n, i, r, a = this._zlevelList;
      for (r = 0; r < a.length; r++) i = a[r], n = this._layers[i], n.__builtin__ || t.call(e, n, i)
    },
    getLayers: function() {
      return this._layers
    },
    _updateLayerStatus: function(t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t)
      }
      if (this.eachBuiltinLayer(function(t) {
          t.__dirty = t.__used = !1
        }), this._singleCanvas)
        for (var n = 1; n < t.length; n++) {
          var i = t[n];
          if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
            this._needsManuallyCompositing = !0;
            break
          }
        }
      for (var r = null, a = 0, n = 0; n < t.length; n++) {
        var o, i = t[n],
          s = i.zlevel;
        i.incremental ? (o = this.getLayer(s + Cp, this._needsManuallyCompositing), o.incremental = !0, a = 1) : o = this.getLayer(s + (a > 0 ? Tp : 0), this._needsManuallyCompositing), o.__builtin__ || Yf("ZLevel " + s + " has been used by unkown layer " + o.id), o !== r && (o.__used = !0, o.__startIndex !== n && (o.__dirty = !0), o.__startIndex = n, o.__drawIndex = o.incremental ? -1 : n, e(n), r = o), i.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = n))
      }
      e(n), this.eachBuiltinLayer(function(t) {
        !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
      })
    },
    clear: function() {
      return this.eachBuiltinLayer(this._clearLayer), this
    },
    _clearLayer: function(t) {
      t.clear()
    },
    setBackgroundColor: function(t) {
      this._backgroundColor = t
    },
    configLayer: function(t, e) {
      if (e) {
        var n = this._layerConfig;
        n[t] ? r(n[t], e, !0) : n[t] = e;
        for (var i = 0; i < this._zlevelList.length; i++) {
          var a = this._zlevelList[i];
          if (a === t || a === t + Tp) {
            var o = this._layers[a];
            r(o, n[t], !0)
          }
        }
      }
    },
    delLayer: function(t) {
      var e = this._layers,
        n = this._zlevelList,
        i = e[t];
      i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(u(n, t), 1))
    },
    resize: function(t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot;
        n.style.display = "none";
        var i = this._opts;
        if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
          n.style.width = t + "px", n.style.height = e + "px";
          for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
          f(this._progressiveLayers, function(n) {
            n.resize(t, e)
          }), this.refresh(!0)
        }
        this._width = t, this._height = e
      } else {
        if (null == t || null == e) return;
        this._width = t, this._height = e, this.getLayer(Ip).resize(t, e)
      }
      return this
    },
    clearLayer: function(t) {
      var e = this._layers[t];
      e && e.clear()
    },
    dispose: function() {
      this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
    },
    getRenderedCanvas: function(t) {
      if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[Ip].dom;
      var e = new hp("image", this, t.pixelRatio || this.dpr);
      if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
        this.refresh();
        var n = e.dom.width,
          i = e.dom.height,
          r = e.ctx;
        this.eachLayer(function(t) {
          t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
        })
      } else
        for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
          var l = o[s];
          this._doPaintEl(l, e, !0, a)
        }
      return e.dom
    },
    getWidth: function() {
      return this._width
    },
    getHeight: function() {
      return this._height
    },
    _getSize: function(t) {
      var e = this._opts,
        n = ["width", "height"][t],
        i = ["clientWidth", "clientHeight"][t],
        r = ["paddingLeft", "paddingTop"][t],
        a = ["paddingRight", "paddingBottom"][t];
      if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
      var o = this.root,
        s = document.defaultView.getComputedStyle(o);
      return (o[i] || mi(s[n]) || mi(o.style[n])) - (mi(s[r]) || 0) - (mi(s[a]) || 0) | 0
    },
    pathToImage: function(t, e) {
      e = e || this.dpr;
      var n = document.createElement("canvas"),
        i = n.getContext("2d"),
        r = t.getBoundingRect(),
        a = t.style,
        o = a.shadowBlur * e,
        s = a.shadowOffsetX * e,
        l = a.shadowOffsetY * e,
        u = a.hasStroke() ? a.lineWidth : 0,
        h = Math.max(u / 2, -s + o),
        c = Math.max(u / 2, s + o),
        d = Math.max(u / 2, -l + o),
        f = Math.max(u / 2, l + o),
        p = r.width + h + c,
        g = r.height + d + f;
      n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
      var v = {
        position: t.position,
        rotation: t.rotation,
        scale: t.scale
      };
      t.position = [h - r.x, d - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
      var m = vi,
        y = new m({
          style: {
            x: 0,
            y: 0,
            image: n
          }
        });
      return null != v.position && (y.position = t.position = v.position), null != v.rotation && (y.rotation = t.rotation = v.rotation), null != v.scale && (y.scale = t.scale = v.scale), y
    }
  };
  var Pp = function(t) {
    t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, df.call(this)
  };
  Pp.prototype = {
    constructor: Pp,
    addClip: function(t) {
      this._clips.push(t)
    },
    addAnimator: function(t) {
      t.animation = this;
      for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
    },
    removeClip: function(t) {
      var e = u(this._clips, t);
      e >= 0 && this._clips.splice(e, 1)
    },
    removeAnimator: function(t) {
      for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
      t.animation = null
    },
    _update: function() {
      for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
        var s = n[o],
          l = s.step(t, e);
        l && (r.push(l), a.push(s))
      }
      for (var o = 0; i > o;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
      i = r.length;
      for (var o = 0; i > o; o++) a[o].fire(r[o]);
      this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
    },
    _startLoop: function() {
      function t() {
        e._running && (cp(t), !e._paused && e._update())
      }
      var e = this;
      this._running = !0, cp(t)
    },
    start: function() {
      this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
    },
    stop: function() {
      this._running = !1
    },
    pause: function() {
      this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
    },
    resume: function() {
      this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
    },
    clear: function() {
      this._clips = []
    },
    isFinished: function() {
      return !this._clips.length
    },
    animate: function(t, e) {
      e = e || {};
      var n = new Vf(t, e.loop, e.getter, e.setter);
      return this.addAnimator(n), n
    }
  }, c(Pp, df);
  var Op = function() {
    this._track = []
  };
  Op.prototype = {
    constructor: Op,
    recognize: function(t, e, n) {
      return this._doTrack(t, e, n), this._recognize(t)
    },
    clear: function() {
      return this._track.length = 0, this
    },
    _doTrack: function(t, e, n) {
      var i = t.touches;
      if (i) {
        for (var r = {
            points: [],
            touches: [],
            target: e,
            event: t
          }, a = 0, o = i.length; o > a; a++) {
          var s = i[a],
            l = de(n, s, {});
          r.points.push([l.zrX, l.zrY]), r.touches.push(s)
        }
        this._track.push(r)
      }
    },
    _recognize: function(t) {
      for (var e in Lp)
        if (Lp.hasOwnProperty(e)) {
          var n = Lp[e](this._track, t);
          if (n) return n
        }
    }
  };
  var Lp = {
      pinch: function(t, e) {
        var n = t.length;
        if (n) {
          var i = (t[n - 1] || {}).points,
            r = (t[n - 2] || {}).points || i;
          if (r && r.length > 1 && i && i.length > 1) {
            var a = Si(i) / Si(r);
            !isFinite(a) && (a = 1), e.pinchScale = a;
            var o = Mi(i);
            return e.pinchX = o[0], e.pinchY = o[1], {
              type: "pinch",
              target: t[0].target,
              event: e
            }
          }
        }
      }
    },
    Bp = 300,
    Ep = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
    zp = ["touchstart", "touchend", "touchmove"],
    Rp = {
      pointerdown: 1,
      pointerup: 1,
      pointermove: 1,
      pointerout: 1
    },
    Fp = p(Ep, function(t) {
      var e = t.replace("mouse", "pointer");
      return Rp[e] ? e : t
    }),
    Np = {
      mousemove: function(t) {
        t = pe(this.dom, t), this.trigger("mousemove", t)
      },
      mouseout: function(t) {
        t = pe(this.dom, t);
        var e = t.toElement || t.relatedTarget;
        if (e != this.dom)
          for (; e && 9 != e.nodeType;) {
            if (e === this.dom) return;
            e = e.parentNode
          }
        this.trigger("mouseout", t)
      },
      touchstart: function(t) {
        t = pe(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, Ti(this, t, "start"), Np.mousemove.call(this, t), Np.mousedown.call(this, t), Ci(this)
      },
      touchmove: function(t) {
        t = pe(this.dom, t), t.zrByTouch = !0, Ti(this, t, "change"), Np.mousemove.call(this, t), Ci(this)
      },
      touchend: function(t) {
        t = pe(this.dom, t), t.zrByTouch = !0, Ti(this, t, "end"), Np.mouseup.call(this, t), +new Date - this._lastTouchMoment < Bp && Np.click.call(this, t), Ci(this)
      },
      pointerdown: function(t) {
        Np.mousedown.call(this, t)
      },
      pointermove: function(t) {
        ki(t) || Np.mousemove.call(this, t)
      },
      pointerup: function(t) {
        Np.mouseup.call(this, t)
      },
      pointerout: function(t) {
        ki(t) || Np.mouseout.call(this, t)
      }
    };
  f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(t) {
    Np[t] = function(e) {
      e = pe(this.dom, e), this.trigger(t, e)
    }
  });
  var Hp = Ai.prototype;
  Hp.dispose = function() {
    for (var t = Ep.concat(zp), e = 0; e < t.length; e++) {
      var n = t[e];
      ve(this.dom, Ii(n), this._handlers[n])
    }
  }, Hp.setCursor = function(t) {
    this.dom.style && (this.dom.style.cursor = t || "default")
  }, c(Ai, df);
  var Vp = !Wd.canvasSupported,
    Gp = {
      canvas: Ap
    },
    Wp = {},
    Xp = "4.0.5",
    jp = function(t, e, n) {
      n = n || {}, this.dom = e, this.id = t;
      var i = this,
        r = new ep,
        a = n.renderer;
      if (Vp) {
        if (!Gp.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
        a = "vml"
      } else a && Gp[a] || (a = "canvas");
      var o = new Gp[a](e, r, n, t);
      this.storage = r, this.painter = o;
      var s = Wd.node || Wd.worker ? null : new Ai(o.getViewportRoot());
      this.handler = new yf(r, o, s, o.root), this.animation = new Pp({
        stage: {
          update: y(this.flush, this)
        }
      }), this.animation.start(), this._needsRefresh;
      var l = r.delFromStorage,
        u = r.addToStorage;
      r.delFromStorage = function(t) {
        l.call(r, t), t && t.removeSelfFromZr(i)
      }, r.addToStorage = function(t) {
        u.call(r, t), t.addSelfToZr(i)
      }
    };
  jp.prototype = {
    constructor: jp,
    getId: function() {
      return this.id
    },
    add: function(t) {
      this.storage.addRoot(t), this._needsRefresh = !0
    },
    remove: function(t) {
      this.storage.delRoot(t), this._needsRefresh = !0
    },
    configLayer: function(t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
    },
    setBackgroundColor: function(t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
    },
    refreshImmediately: function() {
      this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
    },
    refresh: function() {
      this._needsRefresh = !0
    },
    flush: function() {
      var t;
      this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
    },
    addHover: function(t, e) {
      if (this.painter.addHover) {
        var n = this.painter.addHover(t, e);
        return this.refreshHover(), n
      }
    },
    removeHover: function(t) {
      this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
    },
    clearHover: function() {
      this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
    },
    refreshHover: function() {
      this._needsRefreshHover = !0
    },
    refreshHoverImmediately: function() {
      this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
    },
    resize: function(t) {
      t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
    },
    clearAnimation: function() {
      this.animation.clear()
    },
    getWidth: function() {
      return this.painter.getWidth()
    },
    getHeight: function() {
      return this.painter.getHeight()
    },
    pathToImage: function(t, e) {
      return this.painter.pathToImage(t, e)
    },
    setCursorStyle: function(t) {
      this.handler.setCursorStyle(t)
    },
    findHover: function(t, e) {
      return this.handler.findHover(t, e)
    },
    on: function(t, e, n) {
      this.handler.on(t, e, n)
    },
    off: function(t, e) {
      this.handler.off(t, e)
    },
    trigger: function(t, e) {
      this.handler.trigger(t, e)
    },
    clear: function() {
      this.storage.delRoot(), this.painter.clear()
    },
    dispose: function() {
      this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, Ei(this.id)
    }
  };
  var Yp = (Object.freeze || Object)({
      version: Xp,
      init: Pi,
      dispose: Oi,
      getInstance: Li,
      registerPainter: Bi
    }),
    qp = f,
    Up = S,
    Zp = _,
    $p = "series\x00",
    Kp = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
    Qp = 0,
    Jp = ".",
    tg = "___EC__COMPONENT__CONTAINER___",
    eg = 0,
    ng = function(t) {
      for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
      return function(e, n, i) {
        for (var r = {}, a = 0; a < t.length; a++) {
          var o = t[a][1];
          if (!(n && u(n, o) >= 0 || i && u(i, o) < 0)) {
            var s = e.getShallow(o);
            null != s && (r[t[a][0]] = s)
          }
        }
        return r
      }
    },
    ig = ng([
      ["lineWidth", "width"],
      ["stroke", "color"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"]
    ]),
    rg = {
      getLineStyle: function(t) {
        var e = ig(this, t),
          n = this.getLineDash(e.lineWidth);
        return n && (e.lineDash = n), e
      },
      getLineDash: function(t) {
        null == t && (t = 1);
        var e = this.get("type"),
          n = Math.max(t, 2),
          i = 4 * t;
        return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
      }
    },
    ag = ng([
      ["fill", "color"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["opacity"],
      ["shadowColor"]
    ]),
    og = {
      getAreaStyle: function(t, e) {
        return ag(this, t, e)
      }
    },
    sg = Math.pow,
    lg = Math.sqrt,
    ug = 1e-8,
    hg = 1e-4,
    cg = lg(3),
    dg = 1 / 3,
    fg = V(),
    pg = V(),
    gg = V(),
    vg = Math.min,
    mg = Math.max,
    yg = Math.sin,
    xg = Math.cos,
    _g = 2 * Math.PI,
    wg = V(),
    bg = V(),
    Sg = V(),
    Mg = [],
    Ig = [],
    Tg = {
      M: 1,
      L: 2,
      C: 3,
      Q: 4,
      A: 5,
      Z: 6,
      R: 7
    },
    Cg = [],
    kg = [],
    Dg = [],
    Ag = [],
    Pg = Math.min,
    Og = Math.max,
    Lg = Math.cos,
    Bg = Math.sin,
    Eg = Math.sqrt,
    zg = Math.abs,
    Rg = "undefined" != typeof Float32Array,
    Fg = function(t) {
      this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
    };
  Fg.prototype = {
    constructor: Fg,
    _xi: 0,
    _yi: 0,
    _x0: 0,
    _y0: 0,
    _ux: 0,
    _uy: 0,
    _len: 0,
    _lineDash: null,
    _dashOffset: 0,
    _dashIdx: 0,
    _dashSum: 0,
    setScale: function(t, e) {
      this._ux = zg(1 / Xf / t) || 0, this._uy = zg(1 / Xf / e) || 0
    },
    getContext: function() {
      return this._ctx
    },
    beginPath: function(t) {
      return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
    },
    moveTo: function(t, e) {
      return this.addData(Tg.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
    },
    lineTo: function(t, e) {
      var n = zg(t - this._xi) > this._ux || zg(e - this._yi) > this._uy || this._len < 5;
      return this.addData(Tg.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
    },
    bezierCurveTo: function(t, e, n, i, r, a) {
      return this.addData(Tg.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this
    },
    quadraticCurveTo: function(t, e, n, i) {
      return this.addData(Tg.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
    },
    arc: function(t, e, n, i, r, a) {
      return this.addData(Tg.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = Lg(r) * n + t, this._yi = Bg(r) * n + e, this
    },
    arcTo: function(t, e, n, i, r) {
      return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
    },
    rect: function(t, e, n, i) {
      return this._ctx && this._ctx.rect(t, e, n, i), this.addData(Tg.R, t, e, n, i), this
    },
    closePath: function() {
      this.addData(Tg.Z);
      var t = this._ctx,
        e = this._x0,
        n = this._y0;
      return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
    },
    fill: function(t) {
      t && t.fill(), this.toStatic()
    },
    stroke: function(t) {
      t && t.stroke(), this.toStatic()
    },
    setLineDash: function(t) {
      if (t instanceof Array) {
        this._lineDash = t, this._dashIdx = 0;
        for (var e = 0, n = 0; n < t.length; n++) e += t[n];
        this._dashSum = e
      }
      return this
    },
    setLineDashOffset: function(t) {
      return this._dashOffset = t, this
    },
    len: function() {
      return this._len
    },
    setData: function(t) {
      var e = t.length;
      this.data && this.data.length == e || !Rg || (this.data = new Float32Array(e));
      for (var n = 0; e > n; n++) this.data[n] = t[n];
      this._len = e
    },
    appendPath: function(t) {
      t instanceof Array || (t = [t]);
      for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
      Rg && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
      for (var r = 0; e > r; r++)
        for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
      this._len = i
    },
    addData: function(t) {
      if (this._saveData) {
        var e = this.data;
        this._len + arguments.length > e.length && (this._expandData(), e = this.data);
        for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
        this._prevCmd = t
      }
    },
    _expandData: function() {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
        this.data = t
      }
    },
    _needsDash: function() {
      return this._lineDash
    },
    _dashedLineTo: function(t, e) {
      var n, i, r = this._dashSum,
        a = this._dashOffset,
        o = this._lineDash,
        s = this._ctx,
        l = this._xi,
        u = this._yi,
        h = t - l,
        c = e - u,
        d = Eg(h * h + c * c),
        f = l,
        p = u,
        g = o.length;
      for (h /= d, c /= d, 0 > a && (a = r + a), a %= r, f -= a * h, p -= a * c; h > 0 && t >= f || 0 > h && f >= t || 0 == h && (c > 0 && e >= p || 0 > c && p >= e);) i = this._dashIdx, n = o[i], f += h * n, p += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > p || 0 > c && p > u || s[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? Pg(f, t) : Og(f, t), c >= 0 ? Pg(p, e) : Og(p, e));
      h = f - t, c = p - e, this._dashOffset = -Eg(h * h + c * c)
    },
    _dashedBezierTo: function(t, e, n, i, r, a) {
      var o, s, l, u, h, c = this._dashSum,
        d = this._dashOffset,
        f = this._lineDash,
        p = this._ctx,
        g = this._xi,
        v = this._yi,
        m = or,
        y = 0,
        x = this._dashIdx,
        _ = f.length,
        w = 0;
      for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += Eg(s * s + l * l);
      for (; _ > x && (w += f[x], !(w > d)); x++);
      for (o = (w - d) / y; 1 >= o;) u = m(g, t, n, r, o), h = m(v, e, i, a, o), x % 2 ? p.moveTo(u, h) : p.lineTo(u, h), o += f[x] / y, x = (x + 1) % _;
      x % 2 !== 0 && p.lineTo(r, a), s = r - u, l = a - h, this._dashOffset = -Eg(s * s + l * l)
    },
    _dashedQuadraticTo: function(t, e, n, i) {
      var r = n,
        a = i;
      n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a)
    },
    toStatic: function() {
      var t = this.data;
      t instanceof Array && (t.length = this._len, Rg && (this.data = new Float32Array(t)))
    },
    getBoundingRect: function() {
      Cg[0] = Cg[1] = Dg[0] = Dg[1] = Number.MAX_VALUE, kg[0] = kg[1] = Ag[0] = Ag[1] = -Number.MAX_VALUE;
      for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
        var o = t[a++];
        switch (1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {
          case Tg.M:
            i = t[a++], r = t[a++], e = i, n = r, Dg[0] = i, Dg[1] = r, Ag[0] = i, Ag[1] = r;
            break;
          case Tg.L:
            xr(e, n, t[a], t[a + 1], Dg, Ag), e = t[a++], n = t[a++];
            break;
          case Tg.C:
            _r(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Dg, Ag), e = t[a++], n = t[a++];
            break;
          case Tg.Q:
            wr(e, n, t[a++], t[a++], t[a], t[a + 1], Dg, Ag), e = t[a++], n = t[a++];
            break;
          case Tg.A:
            var s = t[a++],
              l = t[a++],
              u = t[a++],
              h = t[a++],
              c = t[a++],
              d = t[a++] + c,
              f = (t[a++], 1 - t[a++]);
            1 == a && (i = Lg(c) * u + s, r = Bg(c) * h + l), br(s, l, u, h, c, d, f, Dg, Ag), e = Lg(d) * u + s, n = Bg(d) * h + l;
            break;
          case Tg.R:
            i = e = t[a++], r = n = t[a++];
            var p = t[a++],
              g = t[a++];
            xr(i, r, i + p, r + g, Dg, Ag);
            break;
          case Tg.Z:
            e = i, n = r
        }
        oe(Cg, Cg, Dg), se(kg, kg, Ag)
      }
      return 0 === a && (Cg[0] = Cg[1] = kg[0] = kg[1] = 0), new gn(Cg[0], Cg[1], kg[0] - Cg[0], kg[1] - Cg[1])
    },
    rebuildPath: function(t) {
      for (var e, n, i, r, a, o, s = this.data, l = this._ux, u = this._uy, h = this._len, c = 0; h > c;) {
        var d = s[c++];
        switch (1 == c && (i = s[c], r = s[c + 1], e = i, n = r), d) {
          case Tg.M:
            e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
            break;
          case Tg.L:
            a = s[c++], o = s[c++], (zg(a - i) > l || zg(o - r) > u || c === h - 1) && (t.lineTo(a, o), i = a, r = o);
            break;
          case Tg.C:
            t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
            break;
          case Tg.Q:
            t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
            break;
          case Tg.A:
            var f = s[c++],
              p = s[c++],
              g = s[c++],
              v = s[c++],
              m = s[c++],
              y = s[c++],
              x = s[c++],
              _ = s[c++],
              w = g > v ? g : v,
              b = g > v ? 1 : g / v,
              S = g > v ? v / g : 1,
              M = Math.abs(g - v) > .001,
              I = m + y;
            M ? (t.translate(f, p), t.rotate(x), t.scale(b, S), t.arc(0, 0, w, m, I, 1 - _), t.scale(1 / b, 1 / S), t.rotate(-x), t.translate(-f, -p)) : t.arc(f, p, w, m, I, 1 - _), 1 == c && (e = Lg(m) * g + f, n = Bg(m) * v + p), i = Lg(I) * g + f, r = Bg(I) * v + p;
            break;
          case Tg.R:
            e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
            break;
          case Tg.Z:
            t.closePath(), i = e, r = n
        }
      }
    }
  }, Fg.CMD = Tg;
  var Ng = 2 * Math.PI,
    Hg = 2 * Math.PI,
    Vg = Fg.CMD,
    Gg = 2 * Math.PI,
    Wg = 1e-4,
    Xg = [-1, -1, -1],
    jg = [-1, -1],
    Yg = up.prototype.getCanvasPattern,
    qg = Math.abs,
    Ug = new Fg(!0);
  Rr.prototype = {
    constructor: Rr,
    type: "path",
    __dirtyPath: !0,
    strokeContainThreshold: 5,
    brush: function(t, e) {
      var n = this.style,
        i = this.path || Ug,
        r = n.hasStroke(),
        a = n.hasFill(),
        o = n.fill,
        s = n.stroke,
        l = a && !!o.colorStops,
        u = r && !!s.colorStops,
        h = a && !!o.image,
        c = r && !!s.image;
      if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
        var d;
        l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), u && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d))
      }
      l ? t.fillStyle = this._fillGradient : h && (t.fillStyle = Yg.call(o, t)), u ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Yg.call(s, t));
      var f = n.lineDash,
        p = n.lineDashOffset,
        g = !!t.setLineDash,
        v = this.getGlobalScale();
      if (i.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a)
        if (null != n.fillOpacity) {
          var m = t.globalAlpha;
          t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m
        } else i.fill(t);
      if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r)
        if (null != n.strokeOpacity) {
          var m = t.globalAlpha;
          t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m
        } else i.stroke(t);
      f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
    },
    buildPath: function() {},
    createPathProxy: function() {
      this.path = new Fg
    },
    getBoundingRect: function() {
      var t = this._rect,
        e = this.style,
        n = !t;
      if (n) {
        var i = this.path;
        i || (i = this.path = new Fg), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
      }
      if (this._rect = t, e.hasStroke()) {
        var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
        if (this.__dirty || n) {
          r.copy(t);
          var a = e.lineWidth,
            o = e.strokeNoScale ? this.getLineScale() : 1;
          e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
        }
        return r
      }
      return t
    },
    contain: function(t, e) {
      var n = this.transformCoordToLocal(t, e),
        i = this.getBoundingRect(),
        r = this.style;
      if (t = n[0], e = n[1], i.contain(t, e)) {
        var a = this.path.data;
        if (r.hasStroke()) {
          var o = r.lineWidth,
            s = r.strokeNoScale ? this.getLineScale() : 1;
          if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), zr(a, o / s, t, e))) return !0
        }
        if (r.hasFill()) return Er(a, t, e)
      }
      return !1
    },
    dirty: function(t) {
      null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
    },
    animateShape: function(t) {
      return this.animate("shape", t)
    },
    attrKV: function(t, e) {
      "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : gi.prototype.attrKV.call(this, t, e)
    },
    setShape: function(t, e) {
      var n = this.shape;
      if (n) {
        if (S(t))
          for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        else n[t] = e;
        this.dirty(!0)
      }
      return this
    },
    getLineScale: function() {
      var t = this.transform;
      return t && qg(t[0] - 1) > 1e-10 && qg(t[3] - 1) > 1e-10 ? Math.sqrt(qg(t[0] * t[3] - t[2] * t[1])) : 1
    }
  }, Rr.extend = function(t) {
    var e = function(e) {
      Rr.call(this, e), t.style && this.style.extendFrom(t.style, !1);
      var n = t.shape;
      if (n) {
        this.shape = this.shape || {};
        var i = this.shape;
        for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
      }
      t.init && t.init.call(this, e)
    };
    h(e, Rr);
    for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
    return e
  }, h(Rr, gi);
  var Zg = Fg.CMD,
    $g = [
      [],
      [],
      []
    ],
    Kg = Math.sqrt,
    Qg = Math.atan2,
    Jg = function(t, e) {
      var n, i, r, a, o, s, l = t.data,
        u = Zg.M,
        h = Zg.C,
        c = Zg.L,
        d = Zg.R,
        f = Zg.A,
        p = Zg.Q;
      for (r = 0, a = 0; r < l.length;) {
        switch (n = l[r++], a = r, i = 0, n) {
          case u:
            i = 1;
            break;
          case c:
            i = 1;
            break;
          case h:
            i = 3;
            break;
          case p:
            i = 2;
            break;
          case f:
            var g = e[4],
              v = e[5],
              m = Kg(e[0] * e[0] + e[1] * e[1]),
              y = Kg(e[2] * e[2] + e[3] * e[3]),
              x = Qg(-e[1] / y, e[0] / m);
            l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += x, l[r++] += x, r += 2, a = r;
            break;
          case d:
            s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
        }
        for (o = 0; i > o; o++) {
          var s = $g[o];
          s[0] = l[r++], s[1] = l[r++], ae(s, s, e), l[a++] = s[0], l[a++] = s[1]
        }
      }
    },
    tv = Math.sqrt,
    ev = Math.sin,
    nv = Math.cos,
    iv = Math.PI,
    rv = function(t) {
      return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    },
    av = function(t, e) {
      return (t[0] * e[0] + t[1] * e[1]) / (rv(t) * rv(e))
    },
    ov = function(t, e) {
      return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(av(t, e))
    },
    sv = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    lv = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g,
    uv = function(t) {
      gi.call(this, t)
    };
  uv.prototype = {
    constructor: uv,
    type: "text",
    brush: function(t, e) {
      var n = this.style;
      this.__dirty && Kn(n, !0), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
      var i = n.text;
      null != i && (i += ""), pi(i, n) && (this.setTransform(t), Jn(this, t, i, n, null, e), this.restoreTransform(t))
    },
    getBoundingRect: function() {
      var t = this.style;
      if (this.__dirty && Kn(t, !0), !this._rect) {
        var e = t.text;
        null != e ? e += "" : e = "";
        var n = Bn(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
        if (n.x += t.x || 0, n.y += t.y || 0, hi(t.textStroke, t.textStrokeWidth)) {
          var i = t.textStrokeWidth;
          n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
        }
        this._rect = n
      }
      return this._rect
    }
  }, h(uv, gi);
  var hv = Rr.extend({
      type: "circle",
      shape: {
        cx: 0,
        cy: 0,
        r: 0
      },
      buildPath: function(t, e, n) {
        n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
      }
    }),
    cv = [
      ["shadowBlur", 0],
      ["shadowColor", "#000"],
      ["shadowOffsetX", 0],
      ["shadowOffsetY", 0]
    ],
    dv = function(t) {
      return Wd.browser.ie && Wd.browser.version >= 11 ? function() {
        var e, n = this.__clipPaths,
          i = this.style;
        if (n)
          for (var r = 0; r < n.length; r++) {
            var a = n[r],
              o = a && a.shape,
              s = a && a.type;
            if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
              for (var l = 0; l < cv.length; l++) cv[l][2] = i[cv[l][0]], i[cv[l][0]] = cv[l][1];
              e = !0;
              break
            }
          }
        if (t.apply(this, arguments), e)
          for (var l = 0; l < cv.length; l++) i[cv[l][0]] = cv[l][2]
      } : t
    },
    fv = Rr.extend({
      type: "sector",
      shape: {
        cx: 0,
        cy: 0,
        r0: 0,
        r: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        clockwise: !0
      },
      brush: dv(Rr.prototype.brush),
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r0 || 0, 0),
          a = Math.max(e.r, 0),
          o = e.startAngle,
          s = e.endAngle,
          l = e.clockwise,
          u = Math.cos(o),
          h = Math.sin(o);
        t.moveTo(u * r + n, h * r + i), t.lineTo(u * a + n, h * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath()
      }
    }),
    pv = Rr.extend({
      type: "ring",
      shape: {
        cx: 0,
        cy: 0,
        r: 0,
        r0: 0
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = 2 * Math.PI;
        t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
      }
    }),
    gv = function(t, e) {
      for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) r += ee(t[a - 1], t[a]);
      var o = r / 2;
      o = n > o ? n : o;
      for (var a = 0; o > a; a++) {
        var s, l, u, h = a / (o - 1) * (e ? n : n - 1),
          c = Math.floor(h),
          d = h - c,
          f = t[c % n];
        e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], u = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], u = t[c > n - 3 ? n - 1 : c + 2]);
        var p = d * d,
          g = d * p;
        i.push([Xr(s[0], f[0], l[0], u[0], d, p, g), Xr(s[1], f[1], l[1], u[1], d, p, g)])
      }
      return i
    },
    vv = function(t, e, n, i) {
      var r, a, o, s, l = [],
        u = [],
        h = [],
        c = [];
      if (i) {
        o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
        for (var d = 0, f = t.length; f > d; d++) oe(o, o, t[d]), se(s, s, t[d]);
        oe(o, o, i[0]), se(s, s, i[1])
      }
      for (var d = 0, f = t.length; f > d; d++) {
        var p = t[d];
        if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f];
        else {
          if (0 === d || d === f - 1) {
            l.push(W(t[d]));
            continue
          }
          r = t[d - 1], a = t[d + 1]
        }
        q(u, a, r), J(u, u, e);
        var g = ee(p, r),
          v = ee(p, a),
          m = g + v;
        0 !== m && (g /= m, v /= m), J(h, u, -g), J(c, u, v);
        var y = j([], p, h),
          x = j([], p, c);
        i && (se(y, y, o), oe(y, y, s), se(x, x, o), oe(x, x, s)), l.push(y), l.push(x)
      }
      return n && l.push(l.shift()), l
    },
    mv = Rr.extend({
      type: "polygon",
      shape: {
        points: null,
        smooth: !1,
        smoothConstraint: null
      },
      buildPath: function(t, e) {
        jr(t, e, !0)
      }
    }),
    yv = Rr.extend({
      type: "polyline",
      shape: {
        points: null,
        smooth: !1,
        smoothConstraint: null
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        jr(t, e, !1)
      }
    }),
    xv = Rr.extend({
      type: "rect",
      shape: {
        r: 0,
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.x,
          i = e.y,
          r = e.width,
          a = e.height;
        e.r ? $n(t, e) : t.rect(n, i, r, a), t.closePath()
      }
    }),
    _v = Rr.extend({
      type: "line",
      shape: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        percent: 1
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.percent;
        0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a))
      },
      pointAt: function(t) {
        var e = this.shape;
        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
      }
    }),
    wv = [],
    bv = Rr.extend({
      type: "bezier-curve",
      shape: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        cpx1: 0,
        cpy1: 0,
        percent: 1
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        var n = e.x1,
          i = e.y1,
          r = e.x2,
          a = e.y2,
          o = e.cpx1,
          s = e.cpy1,
          l = e.cpx2,
          u = e.cpy2,
          h = e.percent;
        0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (vr(n, o, r, h, wv), o = wv[1], r = wv[2], vr(i, s, a, h, wv), s = wv[1], a = wv[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > h && (hr(n, o, l, r, h, wv), o = wv[1], l = wv[2], r = wv[3], hr(i, s, u, a, h, wv), s = wv[1], u = wv[2], a = wv[3]), t.bezierCurveTo(o, s, l, u, r, a)))
      },
      pointAt: function(t) {
        return Yr(this.shape, t, !1)
      },
      tangentAt: function(t) {
        var e = Yr(this.shape, t, !0);
        return te(e, e)
      }
    }),
    Sv = Rr.extend({
      type: "arc",
      shape: {
        cx: 0,
        cy: 0,
        r: 0,
        startAngle: 0,
        endAngle: 2 * Math.PI,
        clockwise: !0
      },
      style: {
        stroke: "#000",
        fill: null
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = Math.max(e.r, 0),
          a = e.startAngle,
          o = e.endAngle,
          s = e.clockwise,
          l = Math.cos(a),
          u = Math.sin(a);
        t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, a, o, !s)
      }
    }),
    Mv = Rr.extend({
      type: "compound",
      shape: {
        paths: null
      },
      _updatePathDirty: function() {
        for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
        this.__dirtyPath = t, this.__dirty = this.__dirty || t
      },
      beforeBrush: function() {
        this._updatePathDirty();
        for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
      },
      buildPath: function(t, e) {
        for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
      },
      afterBrush: function() {
        for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
      },
      getBoundingRect: function() {
        return this._updatePathDirty(), Rr.prototype.getBoundingRect.call(this)
      }
    }),
    Iv = function(t) {
      this.colorStops = t || []
    };
  Iv.prototype = {
    constructor: Iv,
    addColorStop: function(t, e) {
      this.colorStops.push({
        offset: t,
        color: e
      })
    }
  };
  var Tv = function(t, e, n, i, r, a) {
    this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, Iv.call(this, r)
  };
  Tv.prototype = {
    constructor: Tv
  }, h(Tv, Iv);
  var Cv = function(t, e, n, i, r) {
    this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, Iv.call(this, i)
  };
  Cv.prototype = {
    constructor: Cv
  }, h(Cv, Iv), qr.prototype.incremental = !0, qr.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
  }, qr.prototype.addDisplayable = function(t, e) {
    e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
  }, qr.prototype.addDisplayables = function(t, e) {
    e = e || !1;
    for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
  }, qr.prototype.eachPendingDisplayable = function(t) {
    for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
    for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
  }, qr.prototype.update = function() {
    this.updateTransform();
    for (var t = this._cursor; t < this._displayables.length; t++) {
      var e = this._displayables[t];
      e.parent = this, e.update(), e.parent = null
    }
    for (var t = 0; t < this._temporaryDisplayables.length; t++) {
      var e = this._temporaryDisplayables[t];
      e.parent = this, e.update(), e.parent = null
    }
  }, qr.prototype.brush = function(t) {
    for (var e = this._cursor; e < this._displayables.length; e++) {
      var n = this._displayables[e];
      n.beforeBrush && n.beforeBrush(t), n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t)
    }
    this._cursor = e;
    for (var e = 0; e < this._temporaryDisplayables.length; e++) {
      var n = this._temporaryDisplayables[e];
      n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), n.afterBrush && n.afterBrush(t)
    }
    this._temporaryDisplayables = [], this.notClear = !0
  };
  var kv = [];
  qr.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var t = new gn(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
        var n = this._displayables[e],
          i = n.getBoundingRect().clone();
        n.needLocalTransform() && i.applyTransform(n.getLocalTransform(kv)), t.union(i)
      }
      this._rect = t
    }
    return this._rect
  }, qr.prototype.contain = function(t, e) {
    var n = this.transformCoordToLocal(t, e),
      i = this.getBoundingRect();
    if (i.contain(n[0], n[1]))
      for (var r = 0; r < this._displayables.length; r++) {
        var a = this._displayables[r];
        if (a.contain(t, e)) return !0
      }
    return !1
  }, h(qr, gi);
  var Dv = Math.round,
    Av = Math.max,
    Pv = Math.min,
    Ov = {},
    Lv = Wr,
    Bv = F(),
    Ev = 0,
    zv = (Object.freeze || Object)({
      extendShape: Ur,
      extendPath: Zr,
      makePath: $r,
      makeImage: Kr,
      mergePath: Lv,
      resizePath: Jr,
      subPixelOptimizeLine: ta,
      subPixelOptimizeRect: ea,
      subPixelOptimize: na,
      setElementHoverStyle: ca,
      isInEmphasis: da,
      setHoverStyle: ma,
      setAsHoverStyleTrigger: ya,
      setLabelStyle: xa,
      setTextStyle: _a,
      setText: wa,
      getFont: ka,
      updateProps: Aa,
      initProps: Pa,
      getTransform: Oa,
      applyTransform: La,
      transformDirection: Ba,
      groupTransition: Ea,
      clipPointsByRect: za,
      clipRectByRect: Ra,
      createIcon: Fa,
      Group: Qf,
      Image: vi,
      Text: uv,
      Circle: hv,
      Sector: fv,
      Ring: pv,
      Polygon: mv,
      Polyline: yv,
      Rect: xv,
      Line: _v,
      BezierCurve: bv,
      Arc: Sv,
      IncrementalDisplayable: qr,
      CompoundPath: Mv,
      LinearGradient: Tv,
      RadialGradient: Cv,
      BoundingRect: gn
    }),
    Rv = ["textStyle", "color"],
    Fv = {
      getTextColor: function(t) {
        var e = this.ecModel;
        return this.getShallow("color") || (!t && e ? e.get(Rv) : null)
      },
      getFont: function() {
        return ka({
          fontStyle: this.getShallow("fontStyle"),
          fontWeight: this.getShallow("fontWeight"),
          fontSize: this.getShallow("fontSize"),
          fontFamily: this.getShallow("fontFamily")
        }, this.ecModel)
      },
      getTextRect: function(t) {
        return Bn(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
      }
    },
    Nv = ng([
      ["fill", "color"],
      ["stroke", "borderColor"],
      ["lineWidth", "borderWidth"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"],
      ["textPosition"],
      ["textAlign"]
    ]),
    Hv = {
      getItemStyle: function(t, e) {
        var n = Nv(this, t, e),
          i = this.getBorderLineDash();
        return i && (n.lineDash = i), n
      },
      getBorderLineDash: function() {
        var t = this.get("borderType");
        return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
      }
    },
    Vv = c,
    Gv = ji();
  Na.prototype = {
    constructor: Na,
    init: null,
    mergeOption: function(t) {
      r(this.option, t, !0)
    },
    get: function(t, e) {
      return null == t ? this.option : Ha(this.option, this.parsePath(t), !e && Va(this, t))
    },
    getShallow: function(t, e) {
      var n = this.option,
        i = null == n ? n : n[t],
        r = !e && Va(this, t);
      return null == i && r && (i = r.getShallow(t)), i
    },
    getModel: function(t, e) {
      var n, i = null == t ? this.option : Ha(this.option, t = this.parsePath(t));
      return e = e || (n = Va(this, t)) && n.getModel(t), new Na(i, e, this.ecModel)
    },
    isEmpty: function() {
      return null == this.option
    },
    restoreData: function() {},
    clone: function() {
      var t = this.constructor;
      return new t(i(this.option))
    },
    setReadOnly: function() {},
    parsePath: function(t) {
      return "string" == typeof t && (t = t.split(".")), t
    },
    customizeGetParent: function(t) {
      Gv(this).getParent = t
    },
    isAnimationEnabled: function() {
      if (!Wd.node) {
        if (null != this.option.animation) return !!this.option.animation;
        if (this.parentModel) return this.parentModel.isAnimationEnabled()
      }
    }
  }, Ji(Na), tr(Na), Vv(Na, rg), Vv(Na, og), Vv(Na, Fv), Vv(Na, Hv);
  var Wv = 0,
    Xv = 1e-4,
    jv = 9007199254740991,
    Yv = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
    qv = (Object.freeze || Object)({
      linearMap: Ya,
      parsePercent: qa,
      round: Ua,
      asc: Za,
      getPrecision: $a,
      getPrecisionSafe: Ka,
      getPixelPrecision: Qa,
      getPercentWithPrecision: Ja,
      MAX_SAFE_INTEGER: jv,
      remRadian: to,
      isRadianAroundZero: eo,
      parseDate: no,
      quantity: io,
      nice: ao,
      quantile: oo,
      reformIntervals: so,
      isNumeric: lo
    }),
    Uv = O,
    Zv = /([&<>"'])/g,
    $v = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    },
    Kv = ["a", "b", "c", "d", "e", "f", "g"],
    Qv = function(t, e) {
      return "{" + t + (null == e ? "" : e) + "}"
    },
    Jv = Hn,
    tm = Bn,
    em = (Object.freeze || Object)({
      addCommas: uo,
      toCamelCase: ho,
      normalizeCssArray: Uv,
      encodeHTML: co,
      formatTpl: fo,
      formatTplSimple: po,
      getTooltipMarker: go,
      formatTime: mo,
      capitalFirst: yo,
      truncateText: Jv,
      getTextRect: tm
    }),
    nm = f,
    im = ["left", "right", "top", "bottom", "width", "height"],
    rm = [
      ["width", "left", "right"],
      ["height", "top", "bottom"]
    ],
    am = xo,
    om = (x(xo, "vertical"), x(xo, "horizontal"), {
      getBoxLayoutParams: function() {
        return {
          left: this.get("left"),
          top: this.get("top"),
          right: this.get("right"),
          bottom: this.get("bottom"),
          width: this.get("width"),
          height: this.get("height")
        }
      }
    }),
    sm = ji(),
    lm = Na.extend({
      type: "component",
      id: "",
      name: "",
      mainType: "",
      subType: "",
      componentIndex: 0,
      defaultOption: null,
      ecModel: null,
      dependentModels: [],
      uid: null,
      layoutMode: null,
      $constructor: function(t, e, n, i) {
        Na.call(this, t, e, n, i), this.uid = Ga("ec_cpt_model")
      },
      init: function(t, e, n) {
        this.mergeDefaultAndTheme(t, n)
      },
      mergeDefaultAndTheme: function(t, e) {
        var n = this.layoutMode,
          i = n ? bo(t) : {},
          a = e.getTheme();
        r(t, a.get(this.mainType)), r(t, this.getDefaultOption()), n && wo(t, i, n)
      },
      mergeOption: function(t) {
        r(this.option, t, !0);
        var e = this.layoutMode;
        e && wo(this.option, t, e)
      },
      optionUpdated: function() {},
      getDefaultOption: function() {
        var t = sm(this);
        if (!t.defaultOption) {
          for (var e = [], n = this.constructor; n;) {
            var i = n.prototype.defaultOption;
            i && e.push(i), n = n.superClass
          }
          for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
          t.defaultOption = a
        }
        return t.defaultOption
      },
      getReferringComponents: function(t) {
        return this.ecModel.queryComponents({
          mainType: t,
          index: this.get(t + "Index", !0),
          id: this.get(t + "Id", !0)
        })
      }
    });
  ir(lm, {
    registerWhenExtend: !0
  }), Wa(lm), Xa(lm, Mo), c(lm, om);
  var um = "";
  "undefined" != typeof navigator && (um = navigator.platform || "");
  var hm = {
      color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
      gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
      textStyle: {
        fontFamily: um.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal"
      },
      blendMode: null,
      animation: "auto",
      animationDuration: 1e3,
      animationDurationUpdate: 300,
      animationEasing: "exponentialOut",
      animationEasingUpdate: "cubicOut",
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1
    },
    cm = ji(),
    dm = {
      clearColorPalette: function() {
        cm(this).colorIdx = 0, cm(this).colorNameMap = {}
      },
      getColorFromPalette: function(t, e, n) {
        e = e || this;
        var i = cm(e),
          r = i.colorIdx || 0,
          a = i.colorNameMap = i.colorNameMap || {};
        if (a.hasOwnProperty(t)) return a[t];
        var o = zi(this.get("color", !0)),
          s = this.get("colorLayer", !0),
          l = null != n && s ? Io(s, n) : o;
        if (l = l || o, l && l.length) {
          var u = l[r];
          return t && (a[t] = u), i.colorIdx = (r + 1) % l.length, u
        }
      }
    },
    fm = {
      cartesian2d: function(t, e, n, i) {
        var r = t.getReferringComponents("xAxis")[0],
          a = t.getReferringComponents("yAxis")[0];
        e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), Co(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), Co(a) && (i.set("y", a), e.firstCategoryDimIndex = 1)
      },
      singleAxis: function(t, e, n, i) {
        var r = t.getReferringComponents("singleAxis")[0];
        e.coordSysDims = ["single"], n.set("single", r), Co(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
      },
      polar: function(t, e, n, i) {
        var r = t.getReferringComponents("polar")[0],
          a = r.findAxisModel("radiusAxis"),
          o = r.findAxisModel("angleAxis");
        e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), Co(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), Co(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1)
      },
      geo: function(t, e) {
        e.coordSysDims = ["lng", "lat"]
      },
      parallel: function(t, e, n, i) {
        var r = t.ecModel,
          a = r.getComponent("parallel", t.get("parallelIndex")),
          o = e.coordSysDims = a.dimensions.slice();
        f(a.parallelAxisIndex, function(t, a) {
          var s = r.getComponent("parallelAxis", t),
            l = o[a];
          n.set(l, s), Co(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a)
        })
      }
    },
    pm = "original",
    gm = "arrayRows",
    vm = "objectRows",
    mm = "keyedColumns",
    ym = "unknown",
    xm = "typedArray",
    _m = "column",
    wm = "row";
  ko.seriesDataToSource = function(t) {
    return new ko({
      data: t,
      sourceFormat: I(t) ? xm : pm,
      fromDataset: !1
    })
  }, tr(ko);
  var bm = ji(),
    Sm = "\x00_ec_inner",
    Mm = Na.extend({
      init: function(t, e, n, i) {
        n = n || {}, this.option = null, this._theme = new Na(n), this._optionManager = i
      },
      setOption: function(t, e) {
        L(!(Sm in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
      },
      resetOption: function(t) {
        var e = !1,
          n = this._optionManager;
        if (!t || "recreate" === t) {
          var i = n.mountOption("recreate" === t);
          this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Wo.call(this, i), e = !0
        }
        if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
          var r = n.getTimelineOption(this);
          r && (this.mergeOption(r), e = !0)
        }
        if (!t || "recreate" === t || "media" === t) {
          var a = n.getMediaOption(this, this._api);
          a.length && f(a, function(t) {
            this.mergeOption(t, e = !0)
          }, this)
        }
        return e
      },
      mergeOption: function(t) {
        function e(e, i) {
          var r = zi(t[e]),
            s = Hi(a.get(e), r);
          Vi(s), f(s, function(t) {
            var n = t.option;
            S(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = jo(e, n, t.exist))
          });
          var l = Xo(a, i);
          n[e] = [], a.set(e, []), f(s, function(t, i) {
            var r = t.exist,
              s = t.option;
            if (L(S(s) || r, "Empty component definition"), s) {
              var u = lm.getClass(e, t.keyInfo.subType, !0);
              if (r && r instanceof u) r.name = t.keyInfo.name, r.mergeOption(s, this), r.optionUpdated(s, !1);
              else {
                var h = o({
                  dependentModels: l,
                  componentIndex: i
                }, t.keyInfo);
                r = new u(s, this, this, h), o(r, h), r.init(s, this, this, h), r.optionUpdated(null, !0)
              }
            } else r.mergeOption({}, this), r.optionUpdated({}, !1);
            a.get(e)[i] = r, n[e][i] = r.option
          }, this), "series" === e && Yo(this, a.get("series"))
        }
        var n = this.option,
          a = this._componentsMap,
          s = [];
        Po(this), f(t, function(t, e) {
          null != t && (lm.hasClass(e) ? e && s.push(e) : n[e] = null == n[e] ? i(t) : r(n[e], t, !0))
        }), lm.topologicalTravel(s, lm.getAllClassMainTypes(), e, this), this._seriesIndicesMap = F(this._seriesIndices = this._seriesIndices || [])
      },
      getOption: function() {
        var t = i(this.option);
        return f(t, function(e, n) {
          if (lm.hasClass(n)) {
            for (var e = zi(e), i = e.length - 1; i >= 0; i--) Wi(e[i]) && e.splice(i, 1);
            t[n] = e
          }
        }), delete t[Sm], t
      },
      getTheme: function() {
        return this._theme
      },
      getComponent: function(t, e) {
        var n = this._componentsMap.get(t);
        return n ? n[e || 0] : void 0
      },
      queryComponents: function(t) {
        var e = t.mainType;
        if (!e) return [];
        var n = t.index,
          i = t.id,
          r = t.name,
          a = this._componentsMap.get(e);
        if (!a || !a.length) return [];
        var o;
        if (null != n) _(n) || (n = [n]), o = v(p(n, function(t) {
          return a[t]
        }), function(t) {
          return !!t
        });
        else if (null != i) {
          var s = _(i);
          o = v(a, function(t) {
            return s && u(i, t.id) >= 0 || !s && t.id === i
          })
        } else if (null != r) {
          var l = _(r);
          o = v(a, function(t) {
            return l && u(r, t.name) >= 0 || !l && t.name === r
          })
        } else o = a.slice();
        return qo(o, t)
      },
      findComponents: function(t) {
        function e(t) {
          var e = r + "Index",
            n = r + "Id",
            i = r + "Name";
          return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
            mainType: r,
            index: t[e],
            id: t[n],
            name: t[i]
          }
        }

        function n(e) {
          return t.filter ? v(e, t.filter) : e
        }
        var i = t.query,
          r = t.mainType,
          a = e(i),
          o = a ? this.queryComponents(a) : this._componentsMap.get(r);
        return n(qo(o, t))
      },
      eachComponent: function(t, e, n) {
        var i = this._componentsMap;
        if ("function" == typeof t) n = e, e = t, i.each(function(t, i) {
          f(t, function(t, r) {
            e.call(n, i, t, r)
          })
        });
        else if (b(t)) f(i.get(t), e, n);
        else if (S(t)) {
          var r = this.findComponents(t);
          f(r, e, n)
        }
      },
      getSeriesByName: function(t) {
        var e = this._componentsMap.get("series");
        return v(e, function(e) {
          return e.name === t
        })
      },
      getSeriesByIndex: function(t) {
        return this._componentsMap.get("series")[t]
      },
      getSeriesByType: function(t) {
        var e = this._componentsMap.get("series");
        return v(e, function(e) {
          return e.subType === t
        })
      },
      getSeries: function() {
        return this._componentsMap.get("series").slice()
      },
      getSeriesCount: function() {
        return this._componentsMap.get("series").length
      },
      eachSeries: function(t, e) {
        f(this._seriesIndices, function(n) {
          var i = this._componentsMap.get("series")[n];
          t.call(e, i, n)
        }, this)
      },
      eachRawSeries: function(t, e) {
        f(this._componentsMap.get("series"), t, e)
      },
      eachSeriesByType: function(t, e, n) {
        f(this._seriesIndices, function(i) {
          var r = this._componentsMap.get("series")[i];
          r.subType === t && e.call(n, r, i)
        }, this)
      },
      eachRawSeriesByType: function(t, e, n) {
        return f(this.getSeriesByType(t), e, n)
      },
      isSeriesFiltered: function(t) {
        return null == this._seriesIndicesMap.get(t.componentIndex)
      },
      getCurrentSeriesIndices: function() {
        return (this._seriesIndices || []).slice()
      },
      filterSeries: function(t, e) {
        var n = v(this._componentsMap.get("series"), t, e);
        Yo(this, n)
      },
      restoreData: function(t) {
        var e = this._componentsMap;
        Yo(this, e.get("series"));
        var n = [];
        e.each(function(t, e) {
          n.push(e)
        }), lm.topologicalTravel(n, lm.getAllClassMainTypes(), function(n) {
          f(e.get(n), function(e) {
            ("series" !== n || !Vo(e, t)) && e.restoreData()
          })
        })
      }
    });
  c(Mm, dm);
  var Im = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
    Tm = {};
  Zo.prototype = {
    constructor: Zo,
    create: function(t, e) {
      var n = [];
      f(Tm, function(i) {
        var r = i.create(t, e);
        n = n.concat(r || [])
      }), this._coordinateSystems = n
    },
    update: function(t, e) {
      f(this._coordinateSystems, function(n) {
        n.update && n.update(t, e)
      })
    },
    getCoordinateSystems: function() {
      return this._coordinateSystems.slice()
    }
  }, Zo.register = function(t, e) {
    Tm[t] = e
  }, Zo.get = function(t) {
    return Tm[t]
  };
  var Cm = f,
    km = i,
    Dm = p,
    Am = r,
    Pm = /^(min|max)?(.+)$/;
  $o.prototype = {
    constructor: $o,
    setOption: function(t, e) {
      t && f(zi(t.series), function(t) {
        t && t.data && I(t.data) && E(t.data)
      }), t = km(t, !0);
      var n = this._optionBackup,
        i = Ko.call(this, t, e, !n);
      this._newBaseOption = i.baseOption, n ? (es(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
    },
    mountOption: function(t) {
      var e = this._optionBackup;
      return this._timelineOptions = Dm(e.timelineOptions, km), this._mediaList = Dm(e.mediaList, km), this._mediaDefault = km(e.mediaDefault), this._currentMediaIndices = [], km(t ? e.baseOption : this._newBaseOption)
    },
    getTimelineOption: function(t) {
      var e, n = this._timelineOptions;
      if (n.length) {
        var i = t.getComponent("timeline");
        i && (e = km(n[i.getCurrentIndex()], !0))
      }
      return e
    },
    getMediaOption: function() {
      var t = this._api.getWidth(),
        e = this._api.getHeight(),
        n = this._mediaList,
        i = this._mediaDefault,
        r = [],
        a = [];
      if (!n.length && !i) return a;
      for (var o = 0, s = n.length; s > o; o++) Qo(n[o].query, t, e) && r.push(o);
      return !r.length && i && (r = [-1]), r.length && !ts(r, this._currentMediaIndices) && (a = Dm(r, function(t) {
        return km(-1 === t ? i.option : n[t].option)
      })), this._currentMediaIndices = r, a
    }
  };
  var Om = f,
    Lm = S,
    Bm = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
    Em = function(t, e) {
      Om(ls(t.series), function(t) {
        Lm(t) && ss(t)
      });
      var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
      e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Om(n, function(e) {
        Om(ls(t[e]), function(t) {
          t && (as(t, "axisLabel"), as(t.axisPointer, "label"))
        })
      }), Om(ls(t.parallel), function(t) {
        var e = t && t.parallelAxisDefault;
        as(e, "axisLabel"), as(e && e.axisPointer, "label")
      }), Om(ls(t.calendar), function(t) {
        is(t, "itemStyle"), as(t, "dayLabel"), as(t, "monthLabel"), as(t, "yearLabel")
      }), Om(ls(t.radar), function(t) {
        as(t, "name")
      }), Om(ls(t.geo), function(t) {
        Lm(t) && (os(t), Om(ls(t.regions), function(t) {
          os(t)
        }))
      }), Om(ls(t.timeline), function(t) {
        os(t), is(t, "label"), is(t, "itemStyle"), is(t, "controlStyle", !0);
        var e = t.data;
        _(e) && f(e, function(t) {
          S(t) && (is(t, "label"), is(t, "itemStyle"))
        })
      }), Om(ls(t.toolbox), function(t) {
        is(t, "iconStyle"), Om(t.feature, function(t) {
          is(t, "iconStyle")
        })
      }), as(us(t.axisPointer), "label"), as(us(t.tooltip).axisPointer, "label")
    },
    zm = [
      ["x", "left"],
      ["y", "top"],
      ["x2", "right"],
      ["y2", "bottom"]
    ],
    Rm = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
    Fm = function(t, e) {
      Em(t, e), t.series = zi(t.series), f(t.series, function(t) {
        if (S(t)) {
          var e = t.type;
          if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
            var n = hs(t, "pointer.color");
            null != n && cs(t, "itemStyle.normal.color", n)
          }
          ds(t)
        }
      }), t.dataRange && (t.visualMap = t.dataRange), f(Rm, function(e) {
        var n = t[e];
        n && (_(n) || (n = [n]), f(n, function(t) {
          ds(t)
        }))
      })
    },
    Nm = function(t) {
      var e = F();
      t.eachSeries(function(t) {
        var n = t.get("stack");
        if (n) {
          var i = e.get(n) || e.set(n, []),
            r = t.getData(),
            a = {
              stackResultDimension: r.getCalculationInfo("stackResultDimension"),
              stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
              stackedDimension: r.getCalculationInfo("stackedDimension"),
              stackedByDimension: r.getCalculationInfo("stackedByDimension"),
              isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
              data: r,
              seriesModel: t
            };
          if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
          i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a)
        }
      }), e.each(fs)
    },
    Hm = ps.prototype;
  Hm.pure = !1, Hm.persistent = !0, Hm.getSource = function() {
    return this._source
  };
  var Vm = {
      arrayRows_column: {
        pure: !0,
        count: function() {
          return Math.max(0, this._data.length - this._source.startIndex)
        },
        getItem: function(t) {
          return this._data[t + this._source.startIndex]
        },
        appendData: ms
      },
      arrayRows_row: {
        pure: !0,
        count: function() {
          var t = this._data[0];
          return t ? Math.max(0, t.length - this._source.startIndex) : 0
        },
        getItem: function(t) {
          t += this._source.startIndex;
          for (var e = [], n = this._data, i = 0; i < n.length; i++) {
            var r = n[i];
            e.push(r ? r[t] : null)
          }
          return e
        },
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
        }
      },
      objectRows: {
        pure: !0,
        count: gs,
        getItem: vs,
        appendData: ms
      },
      keyedColumns: {
        pure: !0,
        count: function() {
          var t = this._source.dimensionsDefine[0].name,
            e = this._data[t];
          return e ? e.length : 0
        },
        getItem: function(t) {
          for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
            var r = this._data[n[i].name];
            e.push(r ? r[t] : null)
          }
          return e
        },
        appendData: function(t) {
          var e = this._data;
          f(t, function(t, n) {
            for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
          })
        }
      },
      original: {
        count: gs,
        getItem: vs,
        appendData: ms
      },
      typedArray: {
        persistent: !1,
        pure: !0,
        count: function() {
          return this._data ? this._data.length / this._dimSize : 0
        },
        getItem: function(t, e) {
          t -= this._offset, e = e || [];
          for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
          return e
        },
        appendData: function(t) {
          this._data = t
        },
        clean: function() {
          this._offset += this.count(), this._data = null
        }
      }
    },
    Gm = {
      arrayRows: ys,
      objectRows: function(t, e, n, i) {
        return null != n ? t[i] : t
      },
      keyedColumns: ys,
      original: function(t, e, n) {
        var i = Fi(t);
        return null != n && i instanceof Array ? i[n] : i
      },
      typedArray: ys
    },
    Wm = {
      arrayRows: xs,
      objectRows: function(t, e) {
        return _s(t[e], this._dimensionInfos[e])
      },
      keyedColumns: xs,
      original: function(t, e, n, i) {
        var r = t && (null == t.value ? t : t.value);
        return !this._rawData.pure && Ni(t) && (this.hasItemOption = !0), _s(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
      },
      typedArray: function(t, e, n, i) {
        return t[i]
      }
    },
    Xm = /\{@(.+?)\}/g,
    jm = {
      getDataParams: function(t, e) {
        var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          a = n.getName(t),
          o = n.getRawDataItem(t),
          s = n.getItemVisual(t, "color"),
          l = this.ecModel.getComponent("tooltip"),
          u = l && l.get("renderMode"),
          h = $i(u),
          c = this.mainType,
          d = "series" === c;
        return {
          componentType: c,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: d ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: d ? this.id : null,
          seriesName: d ? this.name : null,
          name: a,
          dataIndex: r,
          data: o,
          dataType: e,
          value: i,
          color: s,
          marker: go({
            color: s,
            renderMode: h
          }),
          $vars: ["seriesName", "name", "value"]
        }
      },
      getFormattedLabel: function(t, e, n, i, r) {
        e = e || "normal";
        var a = this.getData(n),
          o = a.getItemModel(t),
          s = this.getDataParams(t, n);
        null != i && s.value instanceof Array && (s.value = s.value[i]);
        var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
        if ("function" == typeof l) return s.status = e, l(s);
        if ("string" == typeof l) {
          var u = fo(l, s);
          return u.replace(Xm, function(e, n) {
            var i = n.length;
            return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), ws(a, t, n)
          })
        }
      },
      getRawValue: function(t, e) {
        return ws(this.getData(e), t)
      },
      formatTooltip: function() {}
    },
    Ym = Ss.prototype;
  Ym.perform = function(t) {
    function e(t) {
      return !(t >= 1) && (t = 1), t
    }
    var n = this._upstream,
      i = t && t.skip;
    if (this._dirty && n) {
      var r = this.context;
      r.data = r.outputData = n.context.outputData
    }
    this.__pipeline && (this.__pipeline.currentTask = this);
    var a;
    this._plan && !i && (a = this._plan(this.context));
    var o = e(this._modBy),
      s = this._modDataCount || 0,
      l = e(t && t.modBy),
      u = t && t.modDataCount || 0;
    (o !== l || s !== u) && (a = "reset");
    var h;
    (this._dirty || "reset" === a) && (this._dirty = !1, h = Is(this, i)), this._modBy = l, this._modDataCount = u;
    var c = t && t.step;
    if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
      var d = this._dueIndex,
        f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
      if (!i && (h || f > d)) {
        var p = this._progress;
        if (_(p))
          for (var g = 0; g < p.length; g++) Ms(this, p[g], d, f, l, u);
        else Ms(this, p, d, f, l, u)
      }
      this._dueIndex = f;
      var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
      this._outputDueEnd = v
    } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
    return this.unfinished()
  };
  var qm = function() {
    function t() {
      return n > i ? i++ : null
    }

    function e() {
      var t = i % o * r + Math.ceil(i / o),
        e = i >= n ? null : a > t ? t : i;
      return i++, e
    }
    var n, i, r, a, o, s = {
      reset: function(l, u, h, c) {
        i = l, n = u, r = h, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t
      }
    };
    return s
  }();
  Ym.dirty = function() {
    this._dirty = !0, this._onDirty && this._onDirty(this.context)
  }, Ym.unfinished = function() {
    return this._progress && this._dueIndex < this._dueEnd
  }, Ym.pipe = function(t) {
    (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
  }, Ym.dispose = function() {
    this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
  }, Ym.getUpstream = function() {
    return this._upstream
  }, Ym.getDownstream = function() {
    return this._downstream
  }, Ym.setOutputEnd = function(t) {
    this._outputDueEnd = this._settedOutputEnd = t
  };
  var Um = ji(),
    Zm = lm.extend({
      type: "series.__base__",
      seriesIndex: 0,
      coordinateSystem: null,
      defaultOption: null,
      legendDataProvider: null,
      visualColorAccessPath: "itemStyle.color",
      layoutMode: null,
      init: function(t, e, n) {
        this.seriesIndex = this.componentIndex, this.dataTask = bs({
          count: ks,
          reset: Ds
        }), this.dataTask.context = {
          model: this
        }, this.mergeDefaultAndTheme(t, n), Oo(this);
        var i = this.getInitialData(t, n);
        Ps(i, this), this.dataTask.context.data = i, Um(this).dataBeforeProcessed = i, Ts(this)
      },
      mergeDefaultAndTheme: function(t, e) {
        var n = this.layoutMode,
          i = n ? bo(t) : {},
          a = this.subType;
        lm.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), Ri(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && wo(t, i, n)
      },
      mergeOption: function(t, e) {
        t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
        var n = this.layoutMode;
        n && wo(this.option, t, n), Oo(this);
        var i = this.getInitialData(t, e);
        Ps(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, Um(this).dataBeforeProcessed = i, Ts(this)
      },
      fillDataTextStyle: function(t) {
        if (t && !I(t))
          for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && Ri(t[n], "label", e)
      },
      getInitialData: function() {},
      appendData: function(t) {
        var e = this.getRawData();
        e.appendData(t.data)
      },
      getData: function(t) {
        var e = Ls(this);
        if (e) {
          var n = e.context.data;
          return null == t ? n : n.getLinkedData(t)
        }
        return Um(this).data
      },
      setData: function(t) {
        var e = Ls(this);
        if (e) {
          var n = e.context;
          n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t)
        }
        Um(this).data = t
      },
      getSource: function() {
        return Ao(this)
      },
      getRawData: function() {
        return Um(this).dataBeforeProcessed
      },
      getBaseAxis: function() {
        var t = this.coordinateSystem;
        return t && t.getBaseAxis && t.getBaseAxis()
      },
      formatTooltip: function(t, e, n, i) {
        function r(n) {
          function r(t, n) {
            var r = c.getDimensionInfo(n);
            if (r && r.otherDims.tooltip !== !1) {
              var d = r.type,
                f = "sub" + o.seriesIndex + "at" + h,
                p = go({
                  color: y,
                  type: "subItem",
                  renderMode: i,
                  markerId: f
                }),
                g = "string" == typeof p ? p : p.content,
                v = (a ? g + co(r.displayName || "-") + ": " : "") + co("ordinal" === d ? t + "" : "time" === d ? e ? "" : mo("yyyy/MM/dd hh:mm:ss", t) : uo(t));
              v && s.push(v), l && (u[f] = y, ++h)
            }
          }
          var a = g(n, function(t, e, n) {
              var i = c.getDimensionInfo(n);
              return t |= i && i.tooltip !== !1 && null != i.displayName
            }, 0),
            s = [];
          d.length ? f(d, function(e) {
            r(ws(c, t, e), e)
          }) : f(n, r);
          var p = a ? l ? "\n" : "<br/>" : "",
            v = p + s.join(p || ", ");
          return {
            renderMode: i,
            content: v,
            style: u
          }
        }

        function a(t) {
          return {
            renderMode: i,
            content: co(uo(t)),
            style: u
          }
        }
        var o = this;
        i = i || "html";
        var s = "html" === i ? "<br/>" : "\n",
          l = "richText" === i,
          u = {},
          h = 0,
          c = this.getData(),
          d = c.mapDimension("defaultedTooltip", !0),
          p = d.length,
          v = this.getRawValue(t),
          m = _(v),
          y = c.getItemVisual(t, "color");
        S(y) && y.colorStops && (y = (y.colorStops[0] || {}).color), y = y || "transparent";
        var x = p > 1 || m && !p ? r(v) : a(p ? ws(c, t, d[0]) : m ? v[0] : v),
          w = x.content,
          b = o.seriesIndex + "at" + h,
          M = go({
            color: y,
            type: "item",
            renderMode: i,
            markerId: b
          });
        u[b] = y, ++h;
        var I = c.getName(t),
          T = this.name;
        Gi(this) || (T = ""), T = T ? co(T) + (e ? ": " : s) : "";
        var C = "string" == typeof M ? M : M.content,
          k = e ? C + T + w : T + C + (I ? co(I) + ": " + w : w);
        return {
          html: k,
          markers: u
        }
      },
      isAnimationEnabled: function() {
        if (Wd.node) return !1;
        var t = this.getShallow("animation");
        return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
      },
      restoreData: function() {
        this.dataTask.dirty()
      },
      getColorFromPalette: function(t, e, n) {
        var i = this.ecModel,
          r = dm.getColorFromPalette.call(this, t, e, n);
        return r || (r = i.getColorFromPalette(t, e, n)), r
      },
      coordDimToDataDim: function(t) {
        return this.getRawData().mapDimension(t, !0)
      },
      getProgressive: function() {
        return this.get("progressive")
      },
      getProgressiveThreshold: function() {
        return this.get("progressiveThreshold")
      },
      getAxisTooltipData: null,
      getTooltipPosition: null,
      pipeTask: null,
      preventIncremental: null,
      pipelineContext: null
    });
  c(Zm, jm), c(Zm, dm);
  var $m = function() {
    this.group = new Qf, this.uid = Ga("viewComponent")
  };
  $m.prototype = {
    constructor: $m,
    init: function() {},
    render: function() {},
    dispose: function() {},
    filterForExposedEvent: null
  };
  var Km = $m.prototype;
  Km.updateView = Km.updateLayout = Km.updateVisual = function() {}, Ji($m), ir($m, {
    registerWhenExtend: !0
  });
  var Qm = function() {
      var t = ji();
      return function(e) {
        var n = t(e),
          i = e.pipelineContext,
          r = n.large,
          a = n.progressiveRender,
          o = n.large = i.large,
          s = n.progressiveRender = i.progressiveRender;
        return !!(r ^ o || a ^ s) && "reset"
      }
    },
    Jm = ji(),
    ty = Qm();
  Bs.prototype = {
    type: "chart",
    init: function() {},
    render: function() {},
    highlight: function(t, e, n, i) {
      zs(t.getData(), i, "emphasis")
    },
    downplay: function(t, e, n, i) {
      zs(t.getData(), i, "normal")
    },
    remove: function() {
      this.group.removeAll()
    },
    dispose: function() {},
    incrementalPrepareRender: null,
    incrementalRender: null,
    updateTransform: null,
    filterForExposedEvent: null
  };
  var ey = Bs.prototype;
  ey.updateView = ey.updateLayout = ey.updateVisual = function(t, e, n, i) {
    this.render(t, e, n, i)
  }, Ji(Bs, ["dispose"]), ir(Bs, {
    registerWhenExtend: !0
  }), Bs.markUpdateMethod = function(t, e) {
    Jm(t).updateMethod = e
  };
  var ny = {
      incrementalPrepareRender: {
        progress: function(t, e) {
          e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
        }
      },
      render: {
        forceFirstProgress: !0,
        progress: function(t, e) {
          e.view.render(e.model, e.ecModel, e.api, e.payload)
        }
      }
    },
    iy = "\x00__throttleOriginMethod",
    ry = "\x00__throttleRate",
    ay = "\x00__throttleType",
    oy = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function(t, e) {
        var n = t.getData(),
          i = (t.visualColorAccessPath || "itemStyle.color").split("."),
          r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
        if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
          "function" != typeof r || r instanceof Iv || n.each(function(e) {
            n.setItemVisual(e, "color", r(t.getDataParams(e)))
          });
          var a = function(t, e) {
            var n = t.getItemModel(e),
              r = n.get(i, !0);
            null != r && t.setItemVisual(e, "color", r)
          };
          return {
            dataEach: n.hasItemOption ? a : null
          }
        }
      }
    },
    sy = {
      toolbox: {
        brush: {
          title: {
            rect: "矩形选择",
            polygon: "圈选",
            lineX: "横向选择",
            lineY: "纵向选择",
            keep: "保持选择",
            clear: "清除选择"
          }
        },
        dataView: {
          title: "数据视图",
          lang: ["数据视图", "关闭", "刷新"]
        },
        dataZoom: {
          title: {
            zoom: "区域缩放",
            back: "区域缩放还原"
          }
        },
        magicType: {
          title: {
            line: "切换为折线图",
            bar: "切换为柱状图",
            stack: "切换为堆叠",
            tiled: "切换为平铺"
          }
        },
        restore: {
          title: "还原"
        },
        saveAsImage: {
          title: "保存为图片",
          lang: ["右键另存为图片"]
        }
      },
      series: {
        typeNames: {
          pie: "饼图",
          bar: "柱状图",
          line: "折线图",
          scatter: "散点图",
          effectScatter: "涟漪散点图",
          radar: "雷达图",
          tree: "树图",
          treemap: "矩形树图",
          boxplot: "箱型图",
          candlestick: "K线图",
          k: "K线图",
          heatmap: "热力图",
          map: "地图",
          parallel: "平行坐标图",
          lines: "线图",
          graph: "关系图",
          sankey: "桑基图",
          funnel: "漏斗图",
          gauge: "仪表盘图",
          pictorialBar: "象形柱图",
          themeRiver: "主题河流图",
          sunburst: "旭日图"
        }
      },
      aria: {
        general: {
          withTitle: "这是一个关于“{title}”的图表。",
          withoutTitle: "这是一个图表，"
        },
        series: {
          single: {
            prefix: "",
            withName: "图表类型是{seriesType}，表示{seriesName}。",
            withoutName: "图表类型是{seriesType}。"
          },
          multiple: {
            prefix: "它由{seriesCount}个图表系列组成。",
            withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
            withoutName: "第{seriesId}个系列是一个{seriesType}，",
            separator: {
              middle: "；",
              end: "。"
            }
          }
        },
        data: {
          allData: "其数据是——",
          partialData: "其中，前{displayCnt}项是——",
          withName: "{name}的数据是{value}",
          withoutName: "{value}",
          separator: {
            middle: "，",
            end: ""
          }
        }
      }
    },
    ly = function(t, e) {
      function n(t, e) {
        if ("string" != typeof t) return t;
        var n = t;
        return f(e, function(t, e) {
          n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
        }), n
      }

      function i(t) {
        var e = o.get(t);
        if (null == e) {
          for (var n = t.split("."), i = sy.aria, r = 0; r < n.length; ++r) i = i[n[r]];
          return i
        }
        return e
      }

      function r() {
        var t = e.getModel("title").option;
        return t && t.length && (t = t[0]), t && t.text
      }

      function a(t) {
        return sy.series.typeNames[t] || "自定义图"
      }
      var o = e.getModel("aria");
      if (o.get("show")) {
        if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
        var s = 0;
        e.eachSeries(function() {
          ++s
        }, this);
        var l, u = o.get("data.maxCount") || 10,
          h = o.get("series.maxCount") || 10,
          c = Math.min(s, h);
        if (!(1 > s)) {
          var d = r();
          l = d ? n(i("general.withTitle"), {
            title: d
          }) : i("general.withoutTitle");
          var p = [],
            g = s > 1 ? "series.multiple.prefix" : "series.single.prefix";
          l += n(i(g), {
            seriesCount: s
          }), e.eachSeries(function(t, e) {
            if (c > e) {
              var r, o = t.get("name"),
                l = "series." + (s > 1 ? "multiple" : "single") + ".";
              r = i(o ? l + "withName" : l + "withoutName"), r = n(r, {
                seriesId: t.seriesIndex,
                seriesName: t.get("name"),
                seriesType: a(t.subType)
              });
              var h = t.getData();
              window.data = h, r += h.count() > u ? n(i("data.partialData"), {
                displayCnt: u
              }) : i("data.allData");
              for (var d = [], f = 0; f < h.count(); f++)
                if (u > f) {
                  var g = h.getName(f),
                    v = ws(h, f);
                  d.push(n(i(g ? "data.withName" : "data.withoutName"), {
                    name: g,
                    value: v
                  }))
                }
              r += d.join(i("data.separator.middle")) + i("data.separator.end"), p.push(r)
            }
          }), l += p.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", l)
        }
      }
    },
    uy = Math.PI,
    hy = function(t, e) {
      e = e || {}, s(e, {
        text: "loading",
        color: "#c23531",
        textColor: "#000",
        maskColor: "rgba(255, 255, 255, 0.8)",
        zlevel: 0
      });
      var n = new xv({
          style: {
            fill: e.maskColor
          },
          zlevel: e.zlevel,
          z: 1e4
        }),
        i = new Sv({
          shape: {
            startAngle: -uy / 2,
            endAngle: -uy / 2 + .1,
            r: 10
          },
          style: {
            stroke: e.color,
            lineCap: "round",
            lineWidth: 5
          },
          zlevel: e.zlevel,
          z: 10001
        }),
        r = new xv({
          style: {
            fill: "none",
            text: e.text,
            textPosition: "right",
            textDistance: 10,
            textFill: e.textColor
          },
          zlevel: e.zlevel,
          z: 10001
        });
      i.animateShape(!0).when(1e3, {
        endAngle: 3 * uy / 2
      }).start("circularInOut"), i.animateShape(!0).when(1e3, {
        startAngle: 3 * uy / 2
      }).delay(300).start("circularInOut");
      var a = new Qf;
      return a.add(i), a.add(r), a.add(n), a.resize = function() {
        var e = t.getWidth() / 2,
          a = t.getHeight() / 2;
        i.setShape({
          cx: e,
          cy: a
        });
        var o = i.shape.r;
        r.setShape({
          x: e - o,
          y: a - o,
          width: 2 * o,
          height: 2 * o
        }), n.setShape({
          x: 0,
          y: 0,
          width: t.getWidth(),
          height: t.getHeight()
        })
      }, a.resize(), a
    },
    cy = Vs.prototype;
  cy.restoreData = function(t, e) {
    t.restoreData(e), this._stageTaskMap.each(function(t) {
      var e = t.overallTask;
      e && e.dirty()
    })
  }, cy.getPerformArgs = function(t, e) {
    if (t.__pipeline) {
      var n = this._pipelineMap.get(t.__pipeline.id),
        i = n.context,
        r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
        a = r ? n.step : null,
        o = i && i.modDataCount,
        s = null != o ? Math.ceil(o / a) : null;
      return {
        step: a,
        modBy: s,
        modDataCount: o
      }
    }
  }, cy.getPipeline = function(t) {
    return this._pipelineMap.get(t)
  }, cy.updateStreamModes = function(t, e) {
    var n = this._pipelineMap.get(t.uid),
      i = t.getData(),
      r = i.count(),
      a = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
      o = t.get("large") && r >= t.get("largeThreshold"),
      s = "mod" === t.get("progressiveChunkMode") ? r : null;
    t.pipelineContext = n.context = {
      progressiveRender: a,
      modDataCount: s,
      large: o
    }
  }, cy.restorePipelines = function(t) {
    var e = this,
      n = e._pipelineMap = F();
    t.eachSeries(function(t) {
      var i = t.getProgressive(),
        r = t.uid;
      n.set(r, {
        id: r,
        head: null,
        tail: null,
        threshold: t.getProgressiveThreshold(),
        progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
        blockIndex: -1,
        step: Math.round(i || 700),
        count: 0
      }), Js(e, t, t.dataTask)
    })
  }, cy.prepareStageTasks = function() {
    var t = this._stageTaskMap,
      e = this.ecInstance.getModel(),
      n = this.api;
    f(this._allHandlers, function(i) {
      var r = t.get(i.uid) || t.set(i.uid, []);
      i.reset && Ws(this, i, r, e, n), i.overallReset && Xs(this, i, r, e, n)
    }, this)
  }, cy.prepareView = function(t, e, n, i) {
    var r = t.renderTask,
      a = r.context;
    a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, Js(this, e, r)
  }, cy.performDataProcessorTasks = function(t, e) {
    Gs(this, this._dataProcessorHandlers, t, e, {
      block: !0
    })
  }, cy.performVisualTasks = function(t, e, n) {
    Gs(this, this._visualHandlers, t, e, n)
  }, cy.performSeriesTasks = function(t) {
    var e;
    t.eachSeries(function(t) {
      e |= t.dataTask.perform()
    }), this.unfinished |= e
  }, cy.plan = function() {
    this._pipelineMap.each(function(t) {
      var e = t.tail;
      do {
        if (e.__block) {
          t.blockIndex = e.__idxInPipeline;
          break
        }
        e = e.getUpstream()
      } while (e)
    })
  };
  var dy = cy.updatePayload = function(t, e) {
      "remain" !== e && (t.context.payload = e)
    },
    fy = Ks(0);
  Vs.wrapStageHandler = function(t, e) {
    return w(t) && (t = {
      overallReset: t,
      seriesType: tl(t)
    }), t.uid = Ga("stageHandler"), e && (t.visualType = e), t
  };
  var py, gy = {},
    vy = {};
  el(gy, Mm), el(vy, Uo), gy.eachSeriesByType = gy.eachRawSeriesByType = function(t) {
    py = t
  }, gy.eachComponent = function(t) {
    "series" === t.mainType && t.subType && (py = t.subType)
  };
  var my = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
    yy = {
      color: my,
      colorLayer: [
        ["#37A2DA", "#ffd85c", "#fd7b5f"],
        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
        ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], my
      ]
    },
    xy = "#eee",
    _y = function() {
      return {
        axisLine: {
          lineStyle: {
            color: xy
          }
        },
        axisTick: {
          lineStyle: {
            color: xy
          }
        },
        axisLabel: {
          textStyle: {
            color: xy
          }
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "#aaa"
          }
        },
        splitArea: {
          areaStyle: {
            color: xy
          }
        }
      }
    },
    wy = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
    by = {
      color: wy,
      backgroundColor: "#333",
      tooltip: {
        axisPointer: {
          lineStyle: {
            color: xy
          },
          crossStyle: {
            color: xy
          }
        }
      },
      legend: {
        textStyle: {
          color: xy
        }
      },
      textStyle: {
        color: xy
      },
      title: {
        textStyle: {
          color: xy
        }
      },
      toolbox: {
        iconStyle: {
          normal: {
            borderColor: xy
          }
        }
      },
      dataZoom: {
        textStyle: {
          color: xy
        }
      },
      visualMap: {
        textStyle: {
          color: xy
        }
      },
      timeline: {
        lineStyle: {
          color: xy
        },
        itemStyle: {
          normal: {
            color: wy[1]
          }
        },
        label: {
          normal: {
            textStyle: {
              color: xy
            }
          }
        },
        controlStyle: {
          normal: {
            color: xy,
            borderColor: xy
          }
        }
      },
      timeAxis: _y(),
      logAxis: _y(),
      valueAxis: _y(),
      categoryAxis: _y(),
      line: {
        symbol: "circle"
      },
      graph: {
        color: wy
      },
      gauge: {
        title: {
          textStyle: {
            color: xy
          }
        }
      },
      candlestick: {
        itemStyle: {
          normal: {
            color: "#FD1050",
            color0: "#0CF49B",
            borderColor: "#FD1050",
            borderColor0: "#0CF49B"
          }
        }
      }
    };
  by.categoryAxis.splitLine.show = !1, lm.extend({
    type: "dataset",
    defaultOption: {
      seriesLayoutBy: _m,
      sourceHeader: null,
      dimensions: null,
      source: null
    },
    optionUpdated: function() {
      Do(this)
    }
  }), $m.extend({
    type: "dataset"
  });
  var Sy = Rr.extend({
      type: "ellipse",
      shape: {
        cx: 0,
        cy: 0,
        rx: 0,
        ry: 0
      },
      buildPath: function(t, e) {
        var n = .5522848,
          i = e.cx,
          r = e.cy,
          a = e.rx,
          o = e.ry,
          s = a * n,
          l = o * n;
        t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), t.closePath()
      }
    }),
    My = /[\s,]+/;
  il.prototype.parse = function(t, e) {
    e = e || {};
    var n = nl(t);
    if (!n) throw new Error("Illegal svg");
    var i = new Qf;
    this._root = i;
    var r = n.getAttribute("viewBox") || "",
      a = parseFloat(n.getAttribute("width") || e.width),
      o = parseFloat(n.getAttribute("height") || e.height);
    isNaN(a) && (a = null), isNaN(o) && (o = null), sl(n, i, null, !0);
    for (var s = n.firstChild; s;) this._parseNode(s, i), s = s.nextSibling;
    var l, u;
    if (r) {
      var h = B(r).split(My);
      h.length >= 4 && (l = {
        x: parseFloat(h[0] || 0),
        y: parseFloat(h[1] || 0),
        width: parseFloat(h[2]),
        height: parseFloat(h[3])
      })
    }
    if (l && null != a && null != o && (u = cl(l, a, o), !e.ignoreViewBox)) {
      var c = i;
      i = new Qf, i.add(c), c.scale = u.scale.slice(), c.position = u.position.slice()
    }
    return e.ignoreRootClip || null == a || null == o || i.setClipPath(new xv({
      shape: {
        x: 0,
        y: 0,
        width: a,
        height: o
      }
    })), {
      root: i,
      width: a,
      height: o,
      viewBoxRect: l,
      viewBoxTransform: u
    }
  }, il.prototype._parseNode = function(t, e) {
    var n = t.nodeName.toLowerCase();
    "defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);
    var i;
    if (this._isDefine) {
      var r = Ty[n];
      if (r) {
        var a = r.call(this, t),
          o = t.getAttribute("id");
        o && (this._defs[o] = a)
      }
    } else {
      var r = Iy[n];
      r && (i = r.call(this, t, e), e.add(i))
    }
    for (var s = t.firstChild; s;) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), s = s.nextSibling;
    "defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1)
  }, il.prototype._parseText = function(t, e) {
    if (1 === t.nodeType) {
      var n = t.getAttribute("dx") || 0,
        i = t.getAttribute("dy") || 0;
      this._textX += parseFloat(n), this._textY += parseFloat(i)
    }
    var r = new uv({
      style: {
        text: t.textContent,
        transformText: !0
      },
      position: [this._textX || 0, this._textY || 0]
    });
    al(e, r), sl(t, r, this._defs);
    var a = r.style.fontSize;
    a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [1, 1], r.scale[0] *= a / 9, r.scale[1] *= a / 9);
    var o = r.getBoundingRect();
    return this._textX += o.width, e.add(r), r
  };
  var Iy = {
      g: function(t, e) {
        var n = new Qf;
        return al(e, n), sl(t, n, this._defs), n
      },
      rect: function(t, e) {
        var n = new xv;
        return al(e, n), sl(t, n, this._defs), n.setShape({
          x: parseFloat(t.getAttribute("x") || 0),
          y: parseFloat(t.getAttribute("y") || 0),
          width: parseFloat(t.getAttribute("width") || 0),
          height: parseFloat(t.getAttribute("height") || 0)
        }), n
      },
      circle: function(t, e) {
        var n = new hv;
        return al(e, n), sl(t, n, this._defs), n.setShape({
          cx: parseFloat(t.getAttribute("cx") || 0),
          cy: parseFloat(t.getAttribute("cy") || 0),
          r: parseFloat(t.getAttribute("r") || 0)
        }), n
      },
      line: function(t, e) {
        var n = new _v;
        return al(e, n), sl(t, n, this._defs), n.setShape({
          x1: parseFloat(t.getAttribute("x1") || 0),
          y1: parseFloat(t.getAttribute("y1") || 0),
          x2: parseFloat(t.getAttribute("x2") || 0),
          y2: parseFloat(t.getAttribute("y2") || 0)
        }), n
      },
      ellipse: function(t, e) {
        var n = new Sy;
        return al(e, n), sl(t, n, this._defs), n.setShape({
          cx: parseFloat(t.getAttribute("cx") || 0),
          cy: parseFloat(t.getAttribute("cy") || 0),
          rx: parseFloat(t.getAttribute("rx") || 0),
          ry: parseFloat(t.getAttribute("ry") || 0)
        }), n
      },
      polygon: function(t, e) {
        var n = t.getAttribute("points");
        n && (n = ol(n));
        var i = new mv({
          shape: {
            points: n || []
          }
        });
        return al(e, i), sl(t, i, this._defs), i
      },
      polyline: function(t, e) {
        var n = new Rr;
        al(e, n), sl(t, n, this._defs);
        var i = t.getAttribute("points");
        i && (i = ol(i));
        var r = new yv({
          shape: {
            points: i || []
          }
        });
        return r
      },
      image: function(t, e) {
        var n = new vi;
        return al(e, n), sl(t, n, this._defs), n.setStyle({
          image: t.getAttribute("xlink:href"),
          x: t.getAttribute("x"),
          y: t.getAttribute("y"),
          width: t.getAttribute("width"),
          height: t.getAttribute("height")
        }), n
      },
      text: function(t, e) {
        var n = t.getAttribute("x") || 0,
          i = t.getAttribute("y") || 0,
          r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0;
        this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);
        var o = new Qf;
        return al(e, o), sl(t, o, this._defs), o
      },
      tspan: function(t, e) {
        var n = t.getAttribute("x"),
          i = t.getAttribute("y");
        null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
        var r = t.getAttribute("dx") || 0,
          a = t.getAttribute("dy") || 0,
          o = new Qf;
        return al(e, o), sl(t, o, this._defs), this._textX += r, this._textY += a, o
      },
      path: function(t, e) {
        var n = t.getAttribute("d") || "",
          i = Vr(n);
        return al(e, i), sl(t, i, this._defs), i
      }
    },
    Ty = {
      lineargradient: function(t) {
        var e = parseInt(t.getAttribute("x1") || 0, 10),
          n = parseInt(t.getAttribute("y1") || 0, 10),
          i = parseInt(t.getAttribute("x2") || 10, 10),
          r = parseInt(t.getAttribute("y2") || 0, 10),
          a = new Tv(e, n, i, r);
        return rl(t, a), a
      },
      radialgradient: function() {}
    },
    Cy = {
      fill: "fill",
      stroke: "stroke",
      "stroke-width": "lineWidth",
      opacity: "opacity",
      "fill-opacity": "fillOpacity",
      "stroke-opacity": "strokeOpacity",
      "stroke-dasharray": "lineDash",
      "stroke-dashoffset": "lineDashOffset",
      "stroke-linecap": "lineCap",
      "stroke-linejoin": "lineJoin",
      "stroke-miterlimit": "miterLimit",
      "font-family": "fontFamily",
      "font-size": "fontSize",
      "font-style": "fontStyle",
      "font-weight": "fontWeight",
      "text-align": "textAlign",
      "alignment-baseline": "textBaseline"
    },
    ky = /url\(\s*#(.*?)\)/,
    Dy = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g,
    Ay = /([^\s:;]+)\s*:\s*([^:;]+)/g,
    Py = F(),
    Oy = {
      registerMap: function(t, e, n) {
        var i;
        return _(e) ? i = e : e.svg ? i = [{
          type: "svg",
          source: e.svg,
          specialAreas: e.specialAreas
        }] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [{
          type: "geoJSON",
          source: e,
          specialAreas: n
        }]), f(i, function(t) {
          var e = t.type;
          "geoJson" === e && (e = t.type = "geoJSON");
          var n = Ly[e];
          n(t)
        }), Py.set(t, i)
      },
      retrieveMap: function(t) {
        return Py.get(t)
      }
    },
    Ly = {
      geoJSON: function(t) {
        var e = t.source;
        t.geoJSON = b(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
      },
      svg: function(t) {
        t.svgXML = nl(t.source)
      }
    },
    By = L,
    Ey = f,
    zy = w,
    Ry = S,
    Fy = lm.parseClassType,
    Ny = "4.2.0",
    Hy = {
      zrender: "4.0.5"
    },
    Vy = 1,
    Gy = 1e3,
    Wy = 5e3,
    Xy = 1e3,
    jy = 2e3,
    Yy = 3e3,
    qy = 4e3,
    Uy = 5e3,
    Zy = {
      PROCESSOR: {
        FILTER: Gy,
        STATISTIC: Wy
      },
      VISUAL: {
        LAYOUT: Xy,
        GLOBAL: jy,
        CHART: Yy,
        COMPONENT: qy,
        BRUSH: Uy
      }
    },
    $y = "__flagInMainProcess",
    Ky = "__optionUpdated",
    Qy = /^[a-zA-Z0-9_]+$/;
  fl.prototype.on = dl("on"), fl.prototype.off = dl("off"), fl.prototype.one = dl("one"), c(fl, df);
  var Jy = pl.prototype;
  Jy._onframe = function() {
    if (!this._disposed) {
      var t = this._scheduler;
      if (this[Ky]) {
        var e = this[Ky].silent;
        this[$y] = !0, vl(this), tx.update.call(this), this[$y] = !1, this[Ky] = !1, _l.call(this, e), wl.call(this, e)
      } else if (t.unfinished) {
        var n = Vy,
          i = this._model,
          r = this._api;
        t.unfinished = !1;
        do {
          var a = +new Date;
          t.performSeriesTasks(i), t.performDataProcessorTasks(i), yl(this, i), t.performVisualTasks(i), Cl(this, this._model, r, "remain"), n -= +new Date - a
        } while (n > 0 && t.unfinished);
        t.unfinished || this._zr.flush()
      }
    }
  }, Jy.getDom = function() {
    return this._dom
  }, Jy.getZr = function() {
    return this._zr
  }, Jy.setOption = function(t, e, n) {
    var i;
    if (Ry(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[$y] = !0, !this._model || e) {
      var r = new $o(this._api),
        a = this._theme,
        o = this._model = new Mm(null, null, a, r);
      o.scheduler = this._scheduler, o.init(null, null, a, r)
    }
    this._model.setOption(t, ax), n ? (this[Ky] = {
      silent: i
    }, this[$y] = !1) : (vl(this), tx.update.call(this), this._zr.flush(), this[Ky] = !1, this[$y] = !1, _l.call(this, i), wl.call(this, i))
  }, Jy.setTheme = function() {
    console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
  }, Jy.getModel = function() {
    return this._model
  }, Jy.getOption = function() {
    return this._model && this._model.getOption()
  }, Jy.getWidth = function() {
    return this._zr.getWidth()
  }, Jy.getHeight = function() {
    return this._zr.getHeight()
  }, Jy.getDevicePixelRatio = function() {
    return this._zr.painter.dpr || window.devicePixelRatio || 1
  }, Jy.getRenderedCanvas = function(t) {
    if (Wd.canvasSupported) {
      t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
      var e = this._zr;
      return e.painter.getRenderedCanvas(t)
    }
  }, Jy.getSvgDataUrl = function() {
    if (Wd.svgSupported) {
      var t = this._zr,
        e = t.storage.getDisplayList();
      return f(e, function(t) {
        t.stopAnimation(!0)
      }), t.painter.pathToDataUrl()
    }
  }, Jy.getDataURL = function(t) {
    t = t || {};
    var e = t.excludeComponents,
      n = this._model,
      i = [],
      r = this;
    Ey(e, function(t) {
      n.eachComponent({
        mainType: t
      }, function(t) {
        var e = r._componentsMap[t.__viewId];
        e.group.ignore || (i.push(e), e.group.ignore = !0)
      })
    });
    var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
    return Ey(i, function(t) {
      t.group.ignore = !1
    }), a
  }, Jy.getConnectedDataURL = function(t) {
    if (Wd.canvasSupported) {
      var e = this.group,
        n = Math.min,
        r = Math.max,
        a = 1 / 0;
      if (cx[e]) {
        var o = a,
          s = a,
          l = -a,
          u = -a,
          h = [],
          c = t && t.pixelRatio || 1;
        f(hx, function(a) {
          if (a.group === e) {
            var c = a.getRenderedCanvas(i(t)),
              d = a.getDom().getBoundingClientRect();
            o = n(d.left, o), s = n(d.top, s), l = r(d.right, l), u = r(d.bottom, u), h.push({
              dom: c,
              left: d.left,
              top: d.top
            })
          }
        }), o *= c, s *= c, l *= c, u *= c;
        var d = l - o,
          p = u - s,
          g = tf();
        g.width = d, g.height = p;
        var v = Pi(g);
        return Ey(h, function(t) {
          var e = new vi({
            style: {
              x: t.left * c - o,
              y: t.top * c - s,
              image: t.dom
            }
          });
          v.add(e)
        }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
      }
      return this.getDataURL(t)
    }
  }, Jy.convertToPixel = x(gl, "convertToPixel"), Jy.convertFromPixel = x(gl, "convertFromPixel"), Jy.containPixel = function(t, e) {
    var n, i = this._model;
    return t = Yi(i, t), f(t, function(t, i) {
      i.indexOf("Models") >= 0 && f(t, function(t) {
        var r = t.coordinateSystem;
        if (r && r.containPoint) n |= !!r.containPoint(e);
        else if ("seriesModels" === i) {
          var a = this._chartsMap[t.__viewId];
          a && a.containPoint && (n |= a.containPoint(e, t))
        }
      }, this)
    }, this), !!n
  }, Jy.getVisual = function(t, e) {
    var n = this._model;
    t = Yi(n, t, {
      defaultMainType: "series"
    });
    var i = t.seriesModel,
      r = i.getData(),
      a = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? r.indexOfRawIndex(t.dataIndex) : null;
    return null != a ? r.getItemVisual(a, e) : r.getVisual(e)
  }, Jy.getViewOfComponentModel = function(t) {
    return this._componentsMap[t.__viewId]
  }, Jy.getViewOfSeriesModel = function(t) {
    return this._chartsMap[t.__viewId]
  };
  var tx = {
    prepareAndUpdate: function(t) {
      vl(this), tx.update.call(this, t)
    },
    update: function(t) {
      var e = this._model,
        n = this._api,
        i = this._zr,
        r = this._coordSysMgr,
        a = this._scheduler;
      if (e) {
        a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), yl(this, e), r.update(e, n), Ml(e), a.performVisualTasks(e, t), Il(this, e, n, t);
        var o = e.get("backgroundColor") || "transparent";
        if (Wd.canvasSupported) i.setBackgroundColor(o);
        else {
          var s = Ge(o);
          o = Ke(s, "rgb"), 0 === s[3] && (o = "transparent")
        }
        kl(e, n)
      }
    },
    updateTransform: function(t) {
      var e = this._model,
        n = this,
        i = this._api;
      if (e) {
        var r = [];
        e.eachComponent(function(a, o) {
          var s = n.getViewOfComponentModel(o);
          if (s && s.__alive)
            if (s.updateTransform) {
              var l = s.updateTransform(o, e, i, t);
              l && l.update && r.push(s)
            } else r.push(s)
        });
        var a = F();
        e.eachSeries(function(r) {
          var o = n._chartsMap[r.__viewId];
          if (o.updateTransform) {
            var s = o.updateTransform(r, e, i, t);
            s && s.update && a.set(r.uid, 1)
          } else a.set(r.uid, 1)
        }), Ml(e), this._scheduler.performVisualTasks(e, t, {
          setDirty: !0,
          dirtyMap: a
        }), Cl(n, e, i, t, a), kl(e, this._api)
      }
    },
    updateView: function(t) {
      var e = this._model;
      e && (Bs.markUpdateMethod(t, "updateView"), Ml(e), this._scheduler.performVisualTasks(e, t, {
        setDirty: !0
      }), Il(this, this._model, this._api, t), kl(e, this._api))
    },
    updateVisual: function(t) {
      tx.update.call(this, t)
    },
    updateLayout: function(t) {
      tx.update.call(this, t)
    }
  };
  Jy.resize = function(t) {
    this._zr.resize(t);
    var e = this._model;
    if (this._loadingFX && this._loadingFX.resize(), e) {
      var n = e.resetOption("media"),
        i = t && t.silent;
      this[$y] = !0, n && vl(this), tx.update.call(this), this[$y] = !1, _l.call(this, i), wl.call(this, i)
    }
  }, Jy.showLoading = function(t, e) {
    if (Ry(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), ux[t]) {
      var n = ux[t](this._api, e),
        i = this._zr;
      this._loadingFX = n, i.add(n)
    }
  }, Jy.hideLoading = function() {
    this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
  }, Jy.makeActionFromEvent = function(t) {
    var e = o({}, t);
    return e.type = ix[t.type], e
  }, Jy.dispatchAction = function(t, e) {
    if (Ry(e) || (e = {
        silent: !!e
      }), nx[t.type] && this._model) {
      if (this[$y]) return void this._pendingActions.push(t);
      xl.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && Wd.browser.weChat && this._throttledZrFlush(), _l.call(this, e.silent), wl.call(this, e.silent)
    }
  }, Jy.appendData = function(t) {
    var e = t.seriesIndex,
      n = this.getModel(),
      i = n.getSeriesByIndex(e);
    i.appendData(t), this._scheduler.unfinished = !0
  }, Jy.on = dl("on"), Jy.off = dl("off"), Jy.one = dl("one");
  var ex = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
  Jy._initEvents = function() {
    Ey(ex, function(t) {
      this._zr.on(t, function(e) {
        var n, i = this.getModel(),
          r = e.target,
          a = "globalout" === t;
        if (a) n = {};
        else if (r && null != r.dataIndex) {
          var s = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
          n = s && s.getDataParams(r.dataIndex, r.dataType, r) || {}
        } else r && r.eventData && (n = o({}, r.eventData));
        if (n) {
          var l = n.componentType,
            u = n.componentIndex;
          ("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", u = n.seriesIndex);
          var h = l && null != u && i.getComponent(l, u),
            c = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];
          n.event = e, n.type = t, this._ecEventProcessor.eventInfo = {
            targetEl: r,
            packedEvent: n,
            model: h,
            view: c
          }, this.trigger(t, n)
        }
      }, this)
    }, this), Ey(ix, function(t, e) {
      this._messageCenter.on(e, function(t) {
        this.trigger(e, t)
      }, this)
    }, this)
  }, Jy.isDisposed = function() {
    return this._disposed
  }, Jy.clear = function() {
    this.setOption({
      series: []
    }, !0)
  }, Jy.dispose = function() {
    if (!this._disposed) {
      this._disposed = !0, Ui(this.getDom(), px, "");
      var t = this._api,
        e = this._model;
      Ey(this._componentsViews, function(n) {
        n.dispose(e, t)
      }), Ey(this._chartsViews, function(n) {
        n.dispose(e, t)
      }), this._zr.dispose(), delete hx[this.id]
    }
  }, c(pl, df), Ll.prototype = {
    constructor: Ll,
    normalizeQuery: function(t) {
      var e = {},
        n = {},
        i = {};
      if (b(t)) {
        var r = Fy(t);
        e.mainType = r.main || null, e.subType = r.sub || null
      } else {
        var a = ["Index", "Name", "Id"],
          o = {
            name: 1,
            dataIndex: 1,
            dataType: 1
          };
        f(t, function(t, r) {
          for (var s = !1, l = 0; l < a.length; l++) {
            var u = a[l],
              h = r.lastIndexOf(u);
            if (h > 0 && h === r.length - u.length) {
              var c = r.slice(0, h);
              "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
            }
          }
          o.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t)
        })
      }
      return {
        cptQuery: e,
        dataQuery: n,
        otherQuery: i
      }
    },
    filter: function(t, e) {
      function n(t, e, n, i) {
        return null == t[n] || e[i || n] === t[n]
      }
      var i = this.eventInfo;
      if (!i) return !0;
      var r = i.targetEl,
        a = i.packedEvent,
        o = i.model,
        s = i.view;
      if (!o || !s) return !0;
      var l = e.cptQuery,
        u = e.dataQuery;
      return n(l, o, "mainType") && n(l, o, "subType") && n(l, o, "index", "componentIndex") && n(l, o, "name") && n(l, o, "id") && n(u, a, "name") && n(u, a, "dataIndex") && n(u, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a))
    },
    afterTrigger: function() {
      this.eventInfo = null
    }
  };
  var nx = {},
    ix = {},
    rx = [],
    ax = [],
    ox = [],
    sx = [],
    lx = {},
    ux = {},
    hx = {},
    cx = {},
    dx = new Date - 0,
    fx = new Date - 0,
    px = "_echarts_instance_",
    gx = Rl;
  Zl(jy, oy), Gl(Fm), Wl(Wy, Nm), Kl("default", hy), jl({
    type: "highlight",
    event: "highlight",
    update: "highlight"
  }, H), jl({
    type: "downplay",
    event: "downplay",
    update: "downplay"
  }, H), Vl("light", yy), Vl("dark", by);
  var vx = {};
  ou.prototype = {
    constructor: ou,
    add: function(t) {
      return this._add = t, this
    },
    update: function(t) {
      return this._update = t, this
    },
    remove: function(t) {
      return this._remove = t, this
    },
    execute: function() {
      var t, e = this._old,
        n = this._new,
        i = {},
        r = {},
        a = [],
        o = [];
      for (su(e, i, a, "_oldKeyGetter", this), su(n, r, o, "_newKeyGetter", this), t = 0; t < e.length; t++) {
        var s = a[t],
          l = r[s];
        if (null != l) {
          var u = l.length;
          u ? (1 === u && (r[s] = null), l = l.unshift()) : r[s] = null, this._update && this._update(l, t)
        } else this._remove && this._remove(t)
      }
      for (var t = 0; t < o.length; t++) {
        var s = o[t];
        if (r.hasOwnProperty(s)) {
          var l = r[s];
          if (null == l) continue;
          if (l.length)
            for (var h = 0, u = l.length; u > h; h++) this._add && this._add(l[h]);
          else this._add && this._add(l)
        }
      }
    }
  };
  var mx = F(["tooltip", "label", "itemName", "itemId", "seriesName"]),
    yx = S,
    xx = "undefined",
    _x = "e\x00\x00",
    bx = {
      "float": typeof Float64Array === xx ? Array : Float64Array,
      "int": typeof Int32Array === xx ? Array : Int32Array,
      ordinal: Array,
      number: Array,
      time: Array
    },
    Sx = typeof Uint32Array === xx ? Array : Uint32Array,
    Mx = typeof Uint16Array === xx ? Array : Uint16Array,
    Ix = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
    Tx = ["_extent", "_approximateExtent", "_rawExtent"],
    Cx = function(t, e) {
      t = t || ["x", "y"];
      for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
        var o = t[a];
        b(o) && (o = {
          name: o
        });
        var s = o.name;
        o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = [])
      }
      this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = lu(this), this._invertedIndicesMap = r, this._calculationInfo = {}
    },
    kx = Cx.prototype;
  kx.type = "list", kx.hasItemOption = !0, kx.getDimension = function(t) {
    return isNaN(t) || (t = this.dimensions[t] || t), t
  }, kx.getDimensionInfo = function(t) {
    return this._dimensionInfos[this.getDimension(t)]
  }, kx.getDimensionsOnCoord = function() {
    return this._dimensionsSummary.dataDimsOnCoord.slice()
  }, kx.mapDimension = function(t, e) {
    var n = this._dimensionsSummary;
    if (null == e) return n.encodeFirstDimNotExtra[t];
    var i = n.encode[t];
    return e === !0 ? (i || []).slice() : i && i[e]
  }, kx.initData = function(t, e, n) {
    var i = ko.isInstance(t) || d(t);
    i && (t = new ps(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = Wm[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
  }, kx.getProvider = function() {
    return this._rawData
  }, kx.appendData = function(t) {
    var e = this._rawData,
      n = this.count();
    e.appendData(t);
    var i = e.count();
    e.persistent || (i += n), this._initDataFromProvider(n, i)
  }, kx._initDataFromProvider = function(t, e) {
    if (!(t >= e)) {
      for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, u = this._nameList, h = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s > g; g++) {
        var v = o[g];
        c[v] || (c[v] = bu());
        var m = l[v];
        0 === m.otherDims.itemName && (n = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
        var y = bx[m.type];
        a[v] || (a[v] = []);
        var x = a[v][p];
        if (x && x.length < i) {
          for (var _ = new y(Math.min(e - p * i, i)), w = 0; w < x.length; w++) _[w] = x[w];
          a[v][p] = _
        }
        for (var b = f * i; e > b; b += i) a[v].push(new y(Math.min(e - b, i)));
        this._chunkCount = a[v].length
      }
      for (var S = new Array(s), M = t; e > M; M++) {
        S = r.getItem(M, S);
        for (var I = Math.floor(M / i), T = M % i, b = 0; s > b; b++) {
          var v = o[b],
            C = a[v][I],
            k = this._dimValueGetter(S, v, M, b);
          C[T] = k;
          var D = c[v];
          k < D[0] && (D[0] = k), k > D[1] && (D[1] = k)
        }
        if (!r.pure) {
          var A = u[M];
          if (S && null == A)
            if (null != S.name) u[M] = A = S.name;
            else if (null != n) {
            var P = o[n],
              O = a[P][I];
            if (O) {
              A = O[T];
              var L = l[P].ordinalMeta;
              L && L.categories.length && (A = L.categories[A])
            }
          }
          var B = null == S ? null : S.id;
          null == B && null != A && (d[A] = d[A] || 0, B = A, d[A] > 0 && (B += "__ec__" + d[A]), d[A]++), null != B && (h[M] = B)
        }
      }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, pu(this)
    }
  }, kx.count = function() {
    return this._count
  }, kx.getIndices = function() {
    var t, e = this._indices;
    if (e) {
      var n = e.constructor,
        i = this._count;
      if (n === Array) {
        t = new n(i);
        for (var r = 0; i > r; r++) t[r] = e[r]
      } else t = new n(e.buffer, 0, i)
    } else
      for (var n = cu(this), t = new n(this.count()), r = 0; r < t.length; r++) t[r] = r;
    return t
  }, kx.get = function(t, e) {
    if (!(e >= 0 && e < this._count)) return 0 / 0;
    var n = this._storage;
    if (!n[t]) return 0 / 0;
    e = this.getRawIndex(e);
    var i = Math.floor(e / this._chunkSize),
      r = e % this._chunkSize,
      a = n[t][i],
      o = a[r];
    return o
  }, kx.getByRawIndex = function(t, e) {
    if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
    var n = this._storage[t];
    if (!n) return 0 / 0;
    var i = Math.floor(e / this._chunkSize),
      r = e % this._chunkSize,
      a = n[i];
    return a[r]
  }, kx._getFast = function(t, e) {
    var n = Math.floor(e / this._chunkSize),
      i = e % this._chunkSize,
      r = this._storage[t][n];
    return r[i]
  }, kx.getValues = function(t, e) {
    var n = [];
    _(t) || (e = t, t = this.dimensions);
    for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
    return n
  }, kx.hasValue = function(t) {
    for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++)
      if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
    return !0
  }, kx.getDataExtent = function(t) {
    t = this.getDimension(t);
    var e = this._storage[t],
      n = bu();
    if (!e) return n;
    var i, r = this.count(),
      a = !this._indices;
    if (a) return this._rawExtent[t].slice();
    if (i = this._extent[t]) return i.slice();
    i = n;
    for (var o = i[0], s = i[1], l = 0; r > l; l++) {
      var u = this._getFast(t, this.getRawIndex(l));
      o > u && (o = u), u > s && (s = u)
    }
    return i = [o, s], this._extent[t] = i, i
  }, kx.getApproximateExtent = function(t) {
    return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
  }, kx.setApproximateExtent = function(t, e) {
    e = this.getDimension(e), this._approximateExtent[e] = t.slice()
  }, kx.getCalculationInfo = function(t) {
    return this._calculationInfo[t]
  }, kx.setCalculationInfo = function(t, e) {
    yx(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e
  }, kx.getSum = function(t) {
    var e = this._storage[t],
      n = 0;
    if (e)
      for (var i = 0, r = this.count(); r > i; i++) {
        var a = this.get(t, i);
        isNaN(a) || (n += a)
      }
    return n
  }, kx.getMedian = function(t) {
    var e = [];
    this.each(t, function(t) {
      isNaN(t) || e.push(t)
    });
    var n = [].concat(e).sort(function(t, e) {
        return t - e
      }),
      i = this.count();
    return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
  }, kx.rawIndexOf = function(t, e) {
    var n = t && this._invertedIndicesMap[t],
      i = n[e];
    return null == i || isNaN(i) ? -1 : i
  }, kx.indexOfName = function(t) {
    for (var e = 0, n = this.count(); n > e; e++)
      if (this.getName(e) === t) return e;
    return -1
  }, kx.indexOfRawIndex = function(t) {
    if (!this._indices) return t;
    if (t >= this._rawCount || 0 > t) return -1;
    var e = this._indices,
      n = e[t];
    if (null != n && n < this._count && n === t) return t;
    for (var i = 0, r = this._count - 1; r >= i;) {
      var a = (i + r) / 2 | 0;
      if (e[a] < t) i = a + 1;
      else {
        if (!(e[a] > t)) return a;
        r = a - 1
      }
    }
    return -1
  }, kx.indicesOfNearest = function(t, e, n) {
    var i = this._storage,
      r = i[t],
      a = [];
    if (!r) return a;
    null == n && (n = 1 / 0);
    for (var o = Number.MAX_VALUE, s = -1, l = 0, u = this.count(); u > l; l++) {
      var h = e - this.get(t, l),
        c = Math.abs(h);
      n >= h && o >= c && ((o > c || h >= 0 && 0 > s) && (o = c, s = h, a.length = 0), a.push(l))
    }
    return a
  }, kx.getRawIndex = vu, kx.getRawDataItem = function(t) {
    if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
    for (var e = [], n = 0; n < this.dimensions.length; n++) {
      var i = this.dimensions[n];
      e.push(this.get(i, t))
    }
    return e
  }, kx.getName = function(t) {
    var e = this.getRawIndex(t);
    return this._nameList[e] || gu(this, this._nameDimIdx, e) || ""
  }, kx.getId = function(t) {
    return yu(this, this.getRawIndex(t))
  }, kx.each = function(t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(xu(t), this.getDimension, this);
      for (var r = t.length, a = 0; a < this.count(); a++) switch (r) {
        case 0:
          e.call(n, a);
          break;
        case 1:
          e.call(n, this.get(t[0], a), a);
          break;
        case 2:
          e.call(n, this.get(t[0], a), this.get(t[1], a), a);
          break;
        default:
          for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
          s[o] = a, e.apply(n, s)
      }
    }
  }, kx.filterSelf = function(t, e, n, i) {
    if (this._count) {
      "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(xu(t), this.getDimension, this);
      for (var r = this.count(), a = cu(this), o = new a(r), s = [], l = t.length, u = 0, h = t[0], c = 0; r > c; c++) {
        var d, f = this.getRawIndex(c);
        if (0 === l) d = e.call(n, c);
        else if (1 === l) {
          var g = this._getFast(h, f);
          d = e.call(n, g, c)
        } else {
          for (var v = 0; l > v; v++) s[v] = this._getFast(h, f);
          s[v] = c, d = e.apply(n, s)
        }
        d && (o[u++] = f)
      }
      return r > u && (this._indices = o), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? mu : vu, this
    }
  }, kx.selectRange = function(t) {
    if (this._count) {
      var e = [];
      for (var n in t) t.hasOwnProperty(n) && e.push(n);
      var i = e.length;
      if (i) {
        var r = this.count(),
          a = cu(this),
          o = new a(r),
          s = 0,
          l = e[0],
          u = t[l][0],
          h = t[l][1],
          c = !1;
        if (!this._indices) {
          var d = 0;
          if (1 === i) {
            for (var f = this._storage[e[0]], p = 0; p < this._chunkCount; p++)
              for (var g = f[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m];
                (y >= u && h >= y || isNaN(y)) && (o[s++] = d), d++
              }
            c = !0
          } else if (2 === i) {
            for (var f = this._storage[l], x = this._storage[e[1]], _ = t[e[1]][0], w = t[e[1]][1], p = 0; p < this._chunkCount; p++)
              for (var g = f[p], b = x[p], v = Math.min(this._count - p * this._chunkSize, this._chunkSize), m = 0; v > m; m++) {
                var y = g[m],
                  S = b[m];
                (y >= u && h >= y || isNaN(y)) && (S >= _ && w >= S || isNaN(S)) && (o[s++] = d), d++
              }
            c = !0
          }
        }
        if (!c)
          if (1 === i)
            for (var m = 0; r > m; m++) {
              var M = this.getRawIndex(m),
                y = this._getFast(l, M);
              (y >= u && h >= y || isNaN(y)) && (o[s++] = M)
            } else
              for (var m = 0; r > m; m++) {
                for (var I = !0, M = this.getRawIndex(m), p = 0; i > p; p++) {
                  var T = e[p],
                    y = this._getFast(n, M);
                  (y < t[T][0] || y > t[T][1]) && (I = !1)
                }
                I && (o[s++] = this.getRawIndex(m))
              }
        return r > s && (this._indices = o), this._count = s, this._extent = {}, this.getRawIndex = this._indices ? mu : vu, this
      }
    }
  }, kx.mapArray = function(t, e, n, i) {
    "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
    var r = [];
    return this.each(t, function() {
      r.push(e && e.apply(this, arguments))
    }, n), r
  }, kx.map = function(t, e, n, i) {
    n = n || i || this, t = p(xu(t), this.getDimension, this);
    var r = _u(this, t);
    r._indices = this._indices, r.getRawIndex = r._indices ? mu : vu;
    for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, u = this.count(), h = [], c = r._rawExtent, d = 0; u > d; d++) {
      for (var f = 0; l > f; f++) h[f] = this.get(t[f], d);
      h[l] = d;
      var g = e && e.apply(n, h);
      if (null != g) {
        "object" != typeof g && (o[0] = g, g = o);
        for (var v = this.getRawIndex(d), m = Math.floor(v / s), y = v % s, x = 0; x < g.length; x++) {
          var _ = t[x],
            w = g[x],
            b = c[_],
            S = a[_];
          S && (S[m][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
        }
      }
    }
    return r
  }, kx.downSample = function(t, e, n, i) {
    for (var r = _u(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], u = this.count(), h = this._chunkSize, c = r._rawExtent[t], d = new(cu(this))(u), f = 0, p = 0; u > p; p += s) {
      s > u - p && (s = u - p, o.length = s);
      for (var g = 0; s > g; g++) {
        var v = this.getRawIndex(p + g),
          m = Math.floor(v / h),
          y = v % h;
        o[g] = l[m][y]
      }
      var x = n(o),
        _ = this.getRawIndex(Math.min(p + i(o, x) || 0, u - 1)),
        w = Math.floor(_ / h),
        b = _ % h;
      l[w][b] = x, x < c[0] && (c[0] = x), x > c[1] && (c[1] = x), d[f++] = _
    }
    return r._count = f, r._indices = d, r.getRawIndex = mu, r
  }, kx.getItemModel = function(t) {
    var e = this.hostModel;
    return new Na(this.getRawDataItem(t), e, e && e.ecModel)
  }, kx.diff = function(t) {
    var e = this;
    return new ou(t ? t.getIndices() : [], this.getIndices(), function(e) {
      return yu(t, e)
    }, function(t) {
      return yu(e, t)
    })
  }, kx.getVisual = function(t) {
    var e = this._visual;
    return e && e[t]
  }, kx.setVisual = function(t, e) {
    if (yx(t))
      for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
    else this._visual = this._visual || {}, this._visual[t] = e
  }, kx.setLayout = function(t, e) {
    if (yx(t))
      for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
    else this._layout[t] = e
  }, kx.getLayout = function(t) {
    return this._layout[t]
  }, kx.getItemLayout = function(t) {
    return this._itemLayouts[t]
  }, kx.setItemLayout = function(t, e, n) {
    this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e
  }, kx.clearItemLayouts = function() {
    this._itemLayouts.length = 0
  }, kx.getItemVisual = function(t, e, n) {
    var i = this._itemVisuals[t],
      r = i && i[e];
    return null != r || n ? r : this.getVisual(e)
  }, kx.setItemVisual = function(t, e, n) {
    var i = this._itemVisuals[t] || {},
      r = this.hasItemVisual;
    if (this._itemVisuals[t] = i, yx(e))
      for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
    else i[e] = n, r[e] = !0
  }, kx.clearAllVisual = function() {
    this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
  };
  var Dx = function(t) {
    t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
  };
  kx.setItemGraphicEl = function(t, e) {
    var n = this.hostModel;
    e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(Dx, e)), this._graphicEls[t] = e
  }, kx.getItemGraphicEl = function(t) {
    return this._graphicEls[t]
  }, kx.eachItemGraphicEl = function(t, e) {
    f(this._graphicEls, function(n, i) {
      n && t && t.call(e, n, i)
    })
  }, kx.cloneShallow = function(t) {
    if (!t) {
      var e = p(this.dimensions, this.getDimensionInfo, this);
      t = new Cx(e, this.hostModel)
    }
    if (t._storage = this._storage, fu(t, this), this._indices) {
      var n = this._indices.constructor;
      t._indices = new n(this._indices)
    } else t._indices = null;
    return t.getRawIndex = t._indices ? mu : vu, t
  }, kx.wrapMethod = function(t, e) {
    var n = this[t];
    "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
      var t = n.apply(this, arguments);
      return e.apply(this, [t].concat(P(arguments)))
    })
  }, kx.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], kx.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
  var Ax = function(t, e) {
    return e = e || {}, Su(e.coordDimensions || [], t, {
      dimsDef: e.dimensionsDefine || t.dimensionsDefine,
      encodeDef: e.encodeDefine || t.encodeDefine,
      dimCount: e.dimensionsCount,
      generateCoord: e.generateCoord,
      generateCoordCount: e.generateCoordCount
    })
  };
  Ou.prototype.parse = function(t) {
    return t
  }, Ou.prototype.getSetting = function(t) {
    return this._setting[t]
  }, Ou.prototype.contain = function(t) {
    var e = this._extent;
    return t >= e[0] && t <= e[1]
  }, Ou.prototype.normalize = function(t) {
    var e = this._extent;
    return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
  }, Ou.prototype.scale = function(t) {
    var e = this._extent;
    return t * (e[1] - e[0]) + e[0]
  }, Ou.prototype.unionExtent = function(t) {
    var e = this._extent;
    t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
  }, Ou.prototype.unionExtentFromData = function(t, e) {
    this.unionExtent(t.getApproximateExtent(e))
  }, Ou.prototype.getExtent = function() {
    return this._extent.slice()
  }, Ou.prototype.setExtent = function(t, e) {
    var n = this._extent;
    isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
  }, Ou.prototype.isBlank = function() {
    return this._isBlank
  }, Ou.prototype.setBlank = function(t) {
    this._isBlank = t
  }, Ou.prototype.getLabel = null, Ji(Ou), ir(Ou, {
    registerWhenExtend: !0
  }), Lu.createByAxisModel = function(t) {
    var e = t.option,
      n = e.data,
      i = n && p(n, Eu);
    return new Lu({
      categories: i,
      needCollect: !i,
      deduplication: e.dedplication !== !1
    })
  };
  var Px = Lu.prototype;
  Px.getOrdinal = function(t) {
    return Bu(this).get(t)
  }, Px.parseAndCollect = function(t) {
    var e, n = this._needCollect;
    if ("string" != typeof t && !n) return t;
    if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
    var i = Bu(this);
    return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e
  };
  var Ox = Ou.prototype,
    Lx = Ou.extend({
      type: "ordinal",
      init: function(t, e) {
        (!t || _(t)) && (t = new Lu({
          categories: t
        })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
      },
      parse: function(t) {
        return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
      },
      contain: function(t) {
        return t = this.parse(t), Ox.contain.call(this, t) && null != this._ordinalMeta.categories[t]
      },
      normalize: function(t) {
        return Ox.normalize.call(this, this.parse(t))
      },
      scale: function(t) {
        return Math.round(Ox.scale.call(this, t))
      },
      getTicks: function() {
        for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
        return t
      },
      getLabel: function(t) {
        return this.isBlank() ? void 0 : this._ordinalMeta.categories[t]
      },
      count: function() {
        return this._extent[1] - this._extent[0] + 1
      },
      unionExtentFromData: function(t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      },
      getOrdinalMeta: function() {
        return this._ordinalMeta
      },
      niceTicks: H,
      niceExtent: H
    });
  Lx.create = function() {
    return new Lx
  };
  var Bx = Ua,
    Ex = Ua,
    zx = Ou.extend({
      type: "interval",
      _interval: 0,
      _intervalPrecision: 2,
      setExtent: function(t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
      },
      unionExtent: function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), zx.prototype.setExtent.call(this, e[0], e[1])
      },
      getInterval: function() {
        return this._interval
      },
      setInterval: function(t) {
        this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Ru(t)
      },
      getTicks: function() {
        return Hu(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
      },
      getLabel: function(t, e) {
        if (null == t) return "";
        var n = e && e.precision;
        return null == n ? n = Ka(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = Ex(t, n, !0), uo(t)
      },
      niceTicks: function(t, e, n) {
        t = t || 5;
        var i = this._extent,
          r = i[1] - i[0];
        if (isFinite(r)) {
          0 > r && (r = -r, i.reverse());
          var a = zu(i, t, e, n);
          this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
        }
      },
      niceExtent: function(t) {
        var e = this._extent;
        if (e[0] === e[1])
          if (0 !== e[0]) {
            var n = e[0];
            t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
          } else e[1] = 1;
        var i = e[1] - e[0];
        isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        var r = this._interval;
        t.fixMin || (e[0] = Ex(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Ex(Math.ceil(e[1] / r) * r))
      }
    });
  zx.create = function() {
    return new zx
  };
  var Rx = "__ec_stack_",
    Fx = .5,
    Nx = "undefined" != typeof Float32Array ? Float32Array : Array,
    Hx = ({
      seriesType: "bar",
      plan: Qm(),
      reset: function(t) {
        function e(t, e) {
          for (var n, c = new Nx(2 * t.count), d = [], f = [], p = 0; null != (n = t.next());) f[u] = e.get(o, n), f[1 - u] = e.get(s, n), d = i.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];
          e.setLayout({
            largePoints: c,
            barWidth: h,
            valueAxisStart: Zu(r, a, !1),
            valueAxisHorizontal: l
          })
        }
        if (qu(t) && Uu(t)) {
          var n = t.getData(),
            i = t.coordinateSystem,
            r = i.getBaseAxis(),
            a = i.getOtherAxis(r),
            o = n.mapDimension(a.dim),
            s = n.mapDimension(r.dim),
            l = a.isHorizontal(),
            u = l ? 0 : 1,
            h = Yu(Xu([t]), r, t).width;
          return h > Fx || (h = Fx), {
            progress: e
          }
        }
      }
    }, zx.prototype),
    Vx = Math.ceil,
    Gx = Math.floor,
    Wx = 1e3,
    Xx = 60 * Wx,
    jx = 60 * Xx,
    Yx = 24 * jx,
    qx = function(t, e, n, i) {
      for (; i > n;) {
        var r = n + i >>> 1;
        t[r][1] < e ? n = r + 1 : i = r
      }
      return n
    },
    Ux = zx.extend({
      type: "time",
      getLabel: function(t) {
        var e = this._stepLvl,
          n = new Date(t);
        return mo(e[0], n, this.getSetting("useUTC"))
      },
      niceExtent: function(t) {
        var e = this._extent;
        if (e[0] === e[1] && (e[0] -= Yx, e[1] += Yx), e[1] === -1 / 0 && 1 / 0 === e[0]) {
          var n = new Date;
          e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - Yx
        }
        this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        var i = this._interval;
        t.fixMin || (e[0] = Ua(Gx(e[0] / i) * i)), t.fixMax || (e[1] = Ua(Vx(e[1] / i) * i))
      },
      niceTicks: function(t, e, n) {
        t = t || 10;
        var i = this._extent,
          r = i[1] - i[0],
          a = r / t;
        null != e && e > a && (a = e), null != n && a > n && (a = n);
        var o = Zx.length,
          s = qx(Zx, a, 0, o),
          l = Zx[Math.min(s, o - 1)],
          u = l[1];
        if ("year" === l[0]) {
          var h = r / u,
            c = ao(h / t, !0);
          u *= c
        }
        var d = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
          f = [Math.round(Vx((i[0] - d) / u) * u + d), Math.round(Gx((i[1] - d) / u) * u + d)];
        Nu(f, i), this._stepLvl = l, this._interval = u, this._niceExtent = f
      },
      parse: function(t) {
        return +no(t)
      }
    });
  f(["contain", "normalize"], function(t) {
    Ux.prototype[t] = function(e) {
      return Hx[t].call(this, this.parse(e))
    }
  });
  var Zx = [
    ["hh:mm:ss", Wx],
    ["hh:mm:ss", 5 * Wx],
    ["hh:mm:ss", 10 * Wx],
    ["hh:mm:ss", 15 * Wx],
    ["hh:mm:ss", 30 * Wx],
    ["hh:mm\nMM-dd", Xx],
    ["hh:mm\nMM-dd", 5 * Xx],
    ["hh:mm\nMM-dd", 10 * Xx],
    ["hh:mm\nMM-dd", 15 * Xx],
    ["hh:mm\nMM-dd", 30 * Xx],
    ["hh:mm\nMM-dd", jx],
    ["hh:mm\nMM-dd", 2 * jx],
    ["hh:mm\nMM-dd", 6 * jx],
    ["hh:mm\nMM-dd", 12 * jx],
    ["MM-dd\nyyyy", Yx],
    ["MM-dd\nyyyy", 2 * Yx],
    ["MM-dd\nyyyy", 3 * Yx],
    ["MM-dd\nyyyy", 4 * Yx],
    ["MM-dd\nyyyy", 5 * Yx],
    ["MM-dd\nyyyy", 6 * Yx],
    ["week", 7 * Yx],
    ["MM-dd\nyyyy", 10 * Yx],
    ["week", 14 * Yx],
    ["week", 21 * Yx],
    ["month", 31 * Yx],
    ["week", 42 * Yx],
    ["month", 62 * Yx],
    ["week", 70 * Yx],
    ["quarter", 95 * Yx],
    ["month", 31 * Yx * 4],
    ["month", 31 * Yx * 5],
    ["half-year", 380 * Yx / 2],
    ["month", 31 * Yx * 8],
    ["month", 31 * Yx * 10],
    ["year", 380 * Yx]
  ];
  Ux.create = function(t) {
    return new Ux({
      useUTC: t.ecModel.get("useUTC")
    })
  };
  var $x = Ou.prototype,
    Kx = zx.prototype,
    Qx = Ka,
    Jx = Ua,
    t_ = Math.floor,
    e_ = Math.ceil,
    n_ = Math.pow,
    i_ = Math.log,
    r_ = Ou.extend({
      type: "log",
      base: 10,
      $constructor: function() {
        Ou.apply(this, arguments), this._originalScale = new zx
      },
      getTicks: function() {
        var t = this._originalScale,
          e = this._extent,
          n = t.getExtent();
        return p(Kx.getTicks.call(this), function(i) {
          var r = Ua(n_(this.base, i));
          return r = i === e[0] && t.__fixMin ? $u(r, n[0]) : r, r = i === e[1] && t.__fixMax ? $u(r, n[1]) : r
        }, this)
      },
      getLabel: Kx.getLabel,
      scale: function(t) {
        return t = $x.scale.call(this, t), n_(this.base, t)
      },
      setExtent: function(t, e) {
        var n = this.base;
        t = i_(t) / i_(n), e = i_(e) / i_(n), Kx.setExtent.call(this, t, e)
      },
      getExtent: function() {
        var t = this.base,
          e = $x.getExtent.call(this);
        e[0] = n_(t, e[0]), e[1] = n_(t, e[1]);
        var n = this._originalScale,
          i = n.getExtent();
        return n.__fixMin && (e[0] = $u(e[0], i[0])), n.__fixMax && (e[1] = $u(e[1], i[1])), e
      },
      unionExtent: function(t) {
        this._originalScale.unionExtent(t);
        var e = this.base;
        t[0] = i_(t[0]) / i_(e), t[1] = i_(t[1]) / i_(e), $x.unionExtent.call(this, t)
      },
      unionExtentFromData: function(t, e) {
        this.unionExtent(t.getApproximateExtent(e))
      },
      niceTicks: function(t) {
        t = t || 10;
        var e = this._extent,
          n = e[1] - e[0];
        if (!(1 / 0 === n || 0 >= n)) {
          var i = io(n),
            r = t / n * i;
          for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
          var a = [Ua(e_(e[0] / i) * i), Ua(t_(e[1] / i) * i)];
          this._interval = i, this._niceExtent = a
        }
      },
      niceExtent: function(t) {
        Kx.niceExtent.call(this, t);
        var e = this._originalScale;
        e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
      }
    });
  f(["contain", "normalize"], function(t) {
    r_.prototype[t] = function(e) {
      return e = i_(e) / i_(this.base), $x[t].call(this, e)
    }
  }), r_.create = function() {
    return new r_
  };
  var a_ = {
      getMin: function(t) {
        var e = this.option,
          n = t || null == e.rangeStart ? e.min : e.rangeStart;
        return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n
      },
      getMax: function(t) {
        var e = this.option,
          n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
        return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !C(n) && (n = this.axis.scale.parse(n)), n
      },
      getNeedCrossZero: function() {
        var t = this.option;
        return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
      },
      getCoordSysModel: H,
      setRange: function(t, e) {
        this.option.rangeStart = t, this.option.rangeEnd = e
      },
      resetRange: function() {
        this.option.rangeStart = this.option.rangeEnd = null
      }
    },
    o_ = Ur({
      type: "triangle",
      shape: {
        cx: 0,
        cy: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;
        t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath()
      }
    }),
    s_ = Ur({
      type: "diamond",
      shape: {
        cx: 0,
        cy: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          a = e.height / 2;
        t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath()
      }
    }),
    l_ = Ur({
      type: "pin",
      shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.x,
          i = e.y,
          r = e.width / 5 * 3,
          a = Math.max(r, e.height),
          o = r / 2,
          s = o * o / (a - o),
          l = i - a + o + s,
          u = Math.asin(s / o),
          h = Math.cos(u) * o,
          c = Math.sin(u),
          d = Math.cos(u),
          f = .6 * o,
          p = .7 * o;
        t.moveTo(n - h, l + s), t.arc(n, l, o, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + d * f, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - h + c * f, l + s + d * f, n - h, l + s), t.closePath()
      }
    }),
    u_ = Ur({
      type: "arrow",
      shape: {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      buildPath: function(t, e) {
        var n = e.height,
          i = e.width,
          r = e.x,
          a = e.y,
          o = i / 3 * 2;
        t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath()
      }
    }),
    h_ = {
      line: _v,
      rect: xv,
      roundRect: xv,
      square: xv,
      circle: hv,
      diamond: s_,
      pin: l_,
      arrow: u_,
      triangle: o_
    },
    c_ = {
      line: function(t, e, n, i, r) {
        r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
      },
      rect: function(t, e, n, i, r) {
        r.x = t, r.y = e, r.width = n, r.height = i
      },
      roundRect: function(t, e, n, i, r) {
        r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
      },
      square: function(t, e, n, i, r) {
        var a = Math.min(n, i);
        r.x = t, r.y = e, r.width = a, r.height = a
      },
      circle: function(t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
      },
      diamond: function(t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
      },
      pin: function(t, e, n, i, r) {
        r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
      },
      arrow: function(t, e, n, i, r) {
        r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
      },
      triangle: function(t, e, n, i, r) {
        r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
      }
    },
    d_ = {};
  f(h_, function(t, e) {
    d_[e] = new t
  });
  var f_ = Ur({
      type: "symbol",
      shape: {
        symbolType: "",
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      beforeBrush: function() {
        var t = this.style,
          e = this.shape;
        "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
      },
      buildPath: function(t, e, n) {
        var i = e.symbolType,
          r = d_[i];
        "none" !== e.symbolType && (r || (i = "rect", r = d_[i]), c_[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
      }
    }),
    p_ = {
      isDimensionStacked: Cu,
      enableDataStack: Tu,
      getStackedDimension: ku
    },
    g_ = (Object.freeze || Object)({
      createList: lh,
      getLayoutRect: _o,
      dataStack: p_,
      createScale: uh,
      mixinAxisModelCommonMethods: hh,
      completeDimensions: Su,
      createDimensions: Ax,
      createSymbol: sh
    }),
    v_ = 1e-8;
  fh.prototype = {
    constructor: fh,
    properties: null,
    getBoundingRect: function() {
      var t = this._rect;
      if (t) return t;
      for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++)
        if ("polygon" === o[s].type) {
          var l = o[s].exterior;
          yr(l, r, a), oe(n, n, r), se(i, i, a)
        }
      return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new gn(n[0], n[1], i[0] - n[0], i[1] - n[1])
    },
    contain: function(t) {
      var e = this.getBoundingRect(),
        n = this.geometries;
      if (!e.contain(t[0], t[1])) return !1;
      t: for (var i = 0, r = n.length; r > i; i++)
        if ("polygon" === n[i].type) {
          var a = n[i].exterior,
            o = n[i].interiors;
          if (dh(a, t[0], t[1])) {
            for (var s = 0; s < (o ? o.length : 0); s++)
              if (dh(o[s])) continue t;
            return !0
          }
        }
      return !1
    },
    transformTo: function(t, e, n, i) {
      var r = this.getBoundingRect(),
        a = r.width / r.height;
      n ? i || (i = n / a) : n = a * i;
      for (var o = new gn(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, u = 0; u < l.length; u++)
        if ("polygon" === l[u].type) {
          for (var h = l[u].exterior, c = l[u].interiors, d = 0; d < h.length; d++) ae(h[d], h[d], s);
          for (var f = 0; f < (c ? c.length : 0); f++)
            for (var d = 0; d < c[f].length; d++) ae(c[f][d], c[f][d], s)
        }
      r = this._rect, r.copy(o), this.center = [r.x + r.width / 2, r.y + r.height / 2]
    },
    cloneShallow: function(t) {
      null == t && (t = this.name);
      var e = new fh(t, this.geometries, this.center);
      return e._rect = this._rect, e.transformTo = null, e
    }
  };
  var m_ = function(t) {
      return ph(t), p(v(t.features, function(t) {
        return t.geometry && t.properties && t.geometry.coordinates.length > 0
      }), function(t) {
        var e = t.properties,
          n = t.geometry,
          i = n.coordinates,
          r = [];
        "Polygon" === n.type && r.push({
          type: "polygon",
          exterior: i[0],
          interiors: i.slice(1)
        }), "MultiPolygon" === n.type && f(i, function(t) {
          t[0] && r.push({
            type: "polygon",
            exterior: t[0],
            interiors: t.slice(1)
          })
        });
        var a = new fh(e.name, r, e.cp);
        return a.properties = e, a
      })
    },
    y_ = ji(),
    x_ = [0, 1],
    __ = function(t, e, n) {
      this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
    };
  __.prototype = {
    constructor: __,
    contain: function(t) {
      var e = this._extent,
        n = Math.min(e[0], e[1]),
        i = Math.max(e[0], e[1]);
      return t >= n && i >= t
    },
    containData: function(t) {
      return this.contain(this.dataToCoord(t))
    },
    getExtent: function() {
      return this._extent.slice()
    },
    getPixelPrecision: function(t) {
      return Qa(t || this.scale.getExtent(), this._extent)
    },
    setExtent: function(t, e) {
      var n = this._extent;
      n[0] = t, n[1] = e
    },
    dataToCoord: function(t, e) {
      var n = this._extent,
        i = this.scale;
      return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), Ph(n, i.count())), Ya(t, x_, n, e)
    },
    coordToData: function(t, e) {
      var n = this._extent,
        i = this.scale;
      this.onBand && "ordinal" === i.type && (n = n.slice(), Ph(n, i.count()));
      var r = Ya(t, n, x_, e);
      return this.scale.scale(r)
    },
    pointToData: function() {},
    getTicksCoords: function(t) {
      t = t || {};
      var e = t.tickModel || this.getTickModel(),
        n = mh(this, e),
        i = n.ticks,
        r = p(i, function(t) {
          return {
            coord: this.dataToCoord(t),
            tickValue: t
          }
        }, this),
        a = e.get("alignWithLabel");
      return Oh(this, r, n.tickCategoryInterval, a, t.clamp), r
    },
    getViewLabels: function() {
      return vh(this).labels
    },
    getLabelModel: function() {
      return this.model.getModel("axisLabel")
    },
    getTickModel: function() {
      return this.model.getModel("axisTick")
    },
    getBandWidth: function() {
      var t = this._extent,
        e = this.scale.getExtent(),
        n = e[1] - e[0] + (this.onBand ? 1 : 0);
      0 === n && (n = 1);
      var i = Math.abs(t[1] - t[0]);
      return Math.abs(i) / n
    },
    isHorizontal: null,
    getRotate: null,
    calculateCategoryInterval: function() {
      return Th(this)
    }
  };
  var w_ = m_,
    b_ = {};
  f(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge"], function(t) {
    b_[t] = rf[t]
  });
  var S_ = {};
  f(["extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect"], function(t) {
    S_[t] = zv[t]
  }), Zm.extend({
    type: "series.line",
    dependencies: ["grid", "polar"],
    getInitialData: function() {
      return Du(this.getSource(), this)
    },
    defaultOption: {
      zlevel: 0,
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      hoverAnimation: !0,
      clipOverflow: !0,
      label: {
        position: "top"
      },
      lineStyle: {
        width: 2,
        type: "solid"
      },
      step: !1,
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: !0,
      showAllSymbol: "auto",
      connectNulls: !1,
      sampling: "none",
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: 1 / 0
    }
  });
  var M_ = Bh.prototype,
    I_ = Bh.getSymbolSize = function(t, e) {
      var n = t.getItemVisual(e, "symbolSize");
      return n instanceof Array ? n.slice() : [+n, +n]
    };
  M_._createSymbol = function(t, e, n, i, r) {
    this.removeAll();
    var a = e.getItemVisual(n, "color"),
      o = sh(t, -1, -1, 2, 2, a, r);
    o.attr({
      z2: 100,
      culling: !0,
      scale: Eh(i)
    }), o.drift = zh, this._symbolType = t, this.add(o)
  }, M_.stopSymbolAnimation = function(t) {
    this.childAt(0).stopAnimation(t)
  }, M_.getSymbolPath = function() {
    return this.childAt(0)
  }, M_.getScale = function() {
    return this.childAt(0).scale
  }, M_.highlight = function() {
    this.childAt(0).trigger("emphasis")
  }, M_.downplay = function() {
    this.childAt(0).trigger("normal")
  }, M_.setZ = function(t, e) {
    var n = this.childAt(0);
    n.zlevel = t, n.z = e
  }, M_.setDraggable = function(t) {
    var e = this.childAt(0);
    e.draggable = t, e.cursor = t ? "move" : "pointer"
  }, M_.updateData = function(t, e, n) {
    this.silent = !1;
    var i = t.getItemVisual(e, "symbol") || "circle",
      r = t.hostModel,
      a = I_(t, e),
      o = i !== this._symbolType;
    if (o) {
      var s = t.getItemVisual(e, "symbolKeepAspect");
      this._createSymbol(i, t, e, a, s)
    } else {
      var l = this.childAt(0);
      l.silent = !1, Aa(l, {
        scale: Eh(a)
      }, r, e)
    }
    if (this._updateCommon(t, e, a, n), o) {
      var l = this.childAt(0),
        u = n && n.fadeIn,
        h = {
          scale: l.scale.slice()
        };
      u && (h.style = {
        opacity: l.style.opacity
      }), l.scale = [0, 0], u && (l.style.opacity = 0), Pa(l, h, r, e)
    }
    this._seriesModel = r
  };
  var T_ = ["itemStyle"],
    C_ = ["emphasis", "itemStyle"],
    k_ = ["label"],
    D_ = ["emphasis", "label"];
  M_._updateCommon = function(t, e, n, i) {
    function r(e) {
      return b ? t.getName(e) : Lh(t, e)
    }
    var a = this.childAt(0),
      s = t.hostModel,
      l = t.getItemVisual(e, "color");
    "image" !== a.type && a.useStyle({
      strokeNoScale: !0
    });
    var u = i && i.itemStyle,
      h = i && i.hoverItemStyle,
      c = i && i.symbolRotate,
      d = i && i.symbolOffset,
      f = i && i.labelModel,
      p = i && i.hoverLabelModel,
      g = i && i.hoverAnimation,
      v = i && i.cursorStyle;
    if (!i || t.hasItemOption) {
      var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);
      u = m.getModel(T_).getItemStyle(["color"]), h = m.getModel(C_).getItemStyle(), c = m.getShallow("symbolRotate"), d = m.getShallow("symbolOffset"), f = m.getModel(k_), p = m.getModel(D_), g = m.getShallow("hoverAnimation"), v = m.getShallow("cursor")
    } else h = o({}, h);
    var y = a.style;
    a.attr("rotation", (c || 0) * Math.PI / 180 || 0), d && a.attr("position", [qa(d[0], n[0]), qa(d[1], n[1])]), v && a.attr("cursor", v), a.setColor(l, i && i.symbolInnerColor), a.setStyle(u);
    var x = t.getItemVisual(e, "opacity");
    null != x && (y.opacity = x);
    var _ = t.getItemVisual(e, "liftZ"),
      w = a.__z2Origin;
    null != _ ? null == w && (a.__z2Origin = a.z2, a.z2 += _) : null != w && (a.z2 = w, a.__z2Origin = null);
    var b = i && i.useNameLabel;
    xa(y, h, f, p, {
      labelFetcher: s,
      labelDataIndex: e,
      defaultText: r,
      isRectText: !0,
      autoColor: l
    }), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), a.hoverStyle = h, ma(a), a.__symbolOriginalScale = Eh(n), g && s.isAnimationEnabled() && a.on("mouseover", Rh).on("mouseout", Fh).on("emphasis", Nh).on("normal", Hh)
  }, M_.fadeOut = function(t, e) {
    var n = this.childAt(0);
    this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), Aa(n, {
      style: {
        opacity: 0
      },
      scale: [0, 0]
    }, this._seriesModel, this.dataIndex, t)
  }, h(Bh, Qf);
  var A_ = Vh.prototype;
  A_.updateData = function(t, e) {
    e = Wh(e);
    var n = this.group,
      i = t.hostModel,
      r = this._data,
      a = this._symbolCtor,
      o = Xh(t);
    r || n.removeAll(), t.diff(r).add(function(i) {
      var r = t.getItemLayout(i);
      if (Gh(t, r, i, e)) {
        var s = new a(t, i, o);
        s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s)
      }
    }).update(function(s, l) {
      var u = r.getItemGraphicEl(l),
        h = t.getItemLayout(s);
      return Gh(t, h, s, e) ? (u ? (u.updateData(t, s, o), Aa(u, {
        position: h
      }, i)) : (u = new a(t, s), u.attr("position", h)), n.add(u), void t.setItemGraphicEl(s, u)) : void n.remove(u)
    }).remove(function(t) {
      var e = r.getItemGraphicEl(t);
      e && e.fadeOut(function() {
        n.remove(e)
      })
    }).execute(), this._data = t
  }, A_.isPersistent = function() {
    return !0
  }, A_.updateLayout = function() {
    var t = this._data;
    t && t.eachItemGraphicEl(function(e, n) {
      var i = t.getItemLayout(n);
      e.attr("position", i)
    })
  }, A_.incrementalPrepareUpdate = function(t) {
    this._seriesScope = Xh(t), this._data = null, this.group.removeAll()
  }, A_.incrementalUpdate = function(t, e, n) {
    function i(t) {
      t.isGroup || (t.incremental = t.useHoverLayer = !0)
    }
    n = Wh(n);
    for (var r = t.start; r < t.end; r++) {
      var a = e.getItemLayout(r);
      if (Gh(e, a, r, n)) {
        var o = new this._symbolCtor(e, r, this._seriesScope);
        o.traverse(i), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o)
      }
    }
  }, A_.remove = function(t) {
    var e = this.group,
      n = this._data;
    n && t ? n.eachItemGraphicEl(function(t) {
      t.fadeOut(function() {
        e.remove(t)
      })
    }) : e.removeAll()
  };
  var P_ = function(t, e, n, i, r, a, o, s) {
      for (var l = Uh(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], v = jh(r, e, o), m = jh(a, t, s), y = 0; y < l.length; y++) {
        var x = l[y],
          _ = !0;
        switch (x.cmd) {
          case "=":
            var w = t.getItemLayout(x.idx),
              b = e.getItemLayout(x.idx1);
            (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), u.push(w), h.push(b), c.push(n[x.idx]), d.push(i[x.idx1]), g.push(e.getRawIndex(x.idx1));
            break;
          case "+":
            var S = x.idx;
            u.push(r.dataToPoint([e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S)])), h.push(e.getItemLayout(S).slice()), c.push(qh(v, r, e, S)), d.push(i[S]), g.push(e.getRawIndex(S));
            break;
          case "-":
            var S = x.idx,
              M = t.getRawIndex(S);
            M !== S ? (u.push(t.getItemLayout(S)), h.push(a.dataToPoint([t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S)])), c.push(n[S]), d.push(qh(m, a, t, S)), g.push(M)) : _ = !1
        }
        _ && (f.push(x), p.push(p.length))
      }
      p.sort(function(t, e) {
        return g[t] - g[e]
      });
      for (var I = [], T = [], C = [], k = [], D = [], y = 0; y < p.length; y++) {
        var S = p[y];
        I[y] = u[S], T[y] = h[S], C[y] = c[S], k[y] = d[S], D[y] = f[S]
      }
      return {
        current: I,
        next: T,
        stackedOnCurrent: C,
        stackedOnNext: k,
        status: D
      }
    },
    O_ = oe,
    L_ = se,
    B_ = Y,
    E_ = G,
    z_ = [],
    R_ = [],
    F_ = [],
    N_ = Rr.extend({
      type: "ec-polyline",
      shape: {
        points: [],
        smooth: 0,
        smoothConstraint: !0,
        smoothMonotone: null,
        connectNulls: !1
      },
      style: {
        fill: null,
        stroke: "#000"
      },
      brush: dv(Rr.prototype.brush),
      buildPath: function(t, e) {
        var n = e.points,
          i = 0,
          r = n.length,
          a = Jh(n, e.smoothConstraint);
        if (e.connectNulls) {
          for (; r > 0 && Zh(n[r - 1]); r--);
          for (; r > i && Zh(n[i]); i++);
        }
        for (; r > i;) i += $h(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
      }
    }),
    H_ = Rr.extend({
      type: "ec-polygon",
      shape: {
        points: [],
        stackedOnPoints: [],
        smooth: 0,
        stackedOnSmooth: 0,
        smoothConstraint: !0,
        smoothMonotone: null,
        connectNulls: !1
      },
      brush: dv(Rr.prototype.brush),
      buildPath: function(t, e) {
        var n = e.points,
          i = e.stackedOnPoints,
          r = 0,
          a = n.length,
          o = e.smoothMonotone,
          s = Jh(n, e.smoothConstraint),
          l = Jh(i, e.smoothConstraint);
        if (e.connectNulls) {
          for (; a > 0 && Zh(n[a - 1]); a--);
          for (; a > r && Zh(n[r]); r++);
        }
        for (; a > r;) {
          var u = $h(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
          $h(t, i, r + u - 1, u, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += u + 1, t.closePath()
        }
      }
    });
  Bs.extend({
    type: "line",
    init: function() {
      var t = new Qf,
        e = new Vh;
      this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
    },
    render: function(t, e, n) {
      var i = t.coordinateSystem,
        r = this.group,
        a = t.getData(),
        o = t.getModel("lineStyle"),
        l = t.getModel("areaStyle"),
        u = a.mapArray(a.getItemLayout),
        h = "polar" === i.type,
        c = this._coordSys,
        d = this._symbolDraw,
        f = this._polyline,
        p = this._polygon,
        g = this._lineGroup,
        v = t.get("animation"),
        m = !l.isEmpty(),
        y = l.get("origin"),
        x = jh(i, a, y),
        _ = ic(i, a, x),
        w = t.get("showSymbol"),
        b = w && !h && uc(t, a, i),
        S = this._data;
      S && S.eachItemGraphicEl(function(t, e) {
        t.__temp && (r.remove(t), S.setItemGraphicEl(e, null))
      }), w || d.remove(), r.add(g);
      var M = !h && t.get("step");
      f && c.type === i.type && M === this._step ? (m && !p ? p = this._newPolygon(u, _, i, v) : p && !m && (g.remove(p), p = this._polygon = null), g.setClipPath(oc(i, !1, !1, t)), w && d.updateData(a, {
        isIgnore: b,
        clipShape: oc(i, !1, !0, t)
      }), a.eachItemGraphicEl(function(t) {
        t.stopAnimation(!0)
      }), tc(this._stackedOnPoints, _) && tc(this._points, u) || (v ? this._updateAnimation(a, _, i, n, M, y) : (M && (u = sc(u, i, M), _ = sc(_, i, M)), f.setShape({
        points: u
      }), p && p.setShape({
        points: u,
        stackedOnPoints: _
      })))) : (w && d.updateData(a, {
        isIgnore: b,
        clipShape: oc(i, !1, !0, t)
      }), M && (u = sc(u, i, M), _ = sc(_, i, M)), f = this._newPolyline(u, i, v), m && (p = this._newPolygon(u, _, i, v)), g.setClipPath(oc(i, !0, !1, t)));
      var I = lc(a, i) || a.getVisual("color");
      f.useStyle(s(o.getLineStyle(), {
        fill: "none",
        stroke: I,
        lineJoin: "bevel"
      }));
      var T = t.get("smooth");
      if (T = ec(t.get("smooth")), f.setShape({
          smooth: T,
          smoothMonotone: t.get("smoothMonotone"),
          connectNulls: t.get("connectNulls")
        }), p) {
        var C = a.getCalculationInfo("stackedOnSeries"),
          k = 0;
        p.useStyle(s(l.getAreaStyle(), {
          fill: I,
          opacity: .7,
          lineJoin: "bevel"
        })), C && (k = ec(C.get("smooth"))), p.setShape({
          smooth: T,
          stackedOnSmooth: k,
          smoothMonotone: t.get("smoothMonotone"),
          connectNulls: t.get("connectNulls")
        })
      }
      this._data = a, this._coordSys = i, this._stackedOnPoints = _, this._points = u, this._step = M, this._valueOrigin = y
    },
    dispose: function() {},
    highlight: function(t, e, n, i) {
      var r = t.getData(),
        a = Xi(r, i);
      if (!(a instanceof Array) && null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);
        if (!o) {
          var s = r.getItemLayout(a);
          if (!s) return;
          o = new Bh(r, a), o.position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o)
        }
        o.highlight()
      } else Bs.prototype.highlight.call(this, t, e, n, i)
    },
    downplay: function(t, e, n, i) {
      var r = t.getData(),
        a = Xi(r, i);
      if (null != a && a >= 0) {
        var o = r.getItemGraphicEl(a);
        o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
      } else Bs.prototype.downplay.call(this, t, e, n, i)
    },
    _newPolyline: function(t) {
      var e = this._polyline;
      return e && this._lineGroup.remove(e), e = new N_({
        shape: {
          points: t
        },
        silent: !0,
        z2: 10
      }), this._lineGroup.add(e), this._polyline = e, e
    },
    _newPolygon: function(t, e) {
      var n = this._polygon;
      return n && this._lineGroup.remove(n), n = new H_({
        shape: {
          points: t,
          stackedOnPoints: e
        },
        silent: !0
      }), this._lineGroup.add(n), this._polygon = n, n
    },
    _updateAnimation: function(t, e, n, i, r, a) {
      var o = this._polyline,
        s = this._polygon,
        l = t.hostModel,
        u = P_(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
        h = u.current,
        c = u.stackedOnCurrent,
        d = u.next,
        f = u.stackedOnNext;
      r && (h = sc(u.current, n, r), c = sc(u.stackedOnCurrent, n, r), d = sc(u.next, n, r), f = sc(u.stackedOnNext, n, r)), o.shape.__points = u.current, o.shape.points = h, Aa(o, {
        shape: {
          points: d
        }
      }, l), s && (s.setShape({
        points: h,
        stackedOnPoints: c
      }), Aa(s, {
        shape: {
          points: d,
          stackedOnPoints: f
        }
      }, l));
      for (var p = [], g = u.status, v = 0; v < g.length; v++) {
        var m = g[v].cmd;
        if ("=" === m) {
          var y = t.getItemGraphicEl(g[v].idx1);
          y && p.push({
            el: y,
            ptIdx: v
          })
        }
      }
      o.animators && o.animators.length && o.animators[0].during(function() {
        for (var t = 0; t < p.length; t++) {
          var e = p[t].el;
          e.attr("position", o.shape.__points[p[t].ptIdx])
        }
      })
    },
    remove: function() {
      var t = this.group,
        e = this._data;
      this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function(n, i) {
        n.__temp && (t.remove(n), e.setItemGraphicEl(i, null))
      }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
    }
  });
  var V_ = function(t, e, n) {
      return {
        seriesType: t,
        performRawSeries: !0,
        reset: function(t, i) {
          function r(e, n) {
            if ("function" == typeof s) {
              var i = t.getRawValue(n),
                r = t.getDataParams(n);
              e.setItemVisual(n, "symbolSize", s(i, r))
            }
            if (e.hasItemOption) {
              var a = e.getItemModel(n),
                o = a.getShallow("symbol", !0),
                l = a.getShallow("symbolSize", !0),
                u = a.getShallow("symbolKeepAspect", !0);
              null != o && e.setItemVisual(n, "symbol", o), null != l && e.setItemVisual(n, "symbolSize", l), null != u && e.setItemVisual(n, "symbolKeepAspect", u)
            }
          }
          var a = t.getData(),
            o = t.get("symbol") || e,
            s = t.get("symbolSize"),
            l = t.get("symbolKeepAspect");
          if (a.setVisual({
              legendSymbol: n || o,
              symbol: o,
              symbolSize: s,
              symbolKeepAspect: l
            }), !i.isSeriesFiltered(t)) {
            var u = "function" == typeof s;
            return {
              dataEach: a.hasItemOption || u ? r : null
            }
          }
        }
      }
    },
    G_ = function(t) {
      return {
        seriesType: t,
        plan: Qm(),
        reset: function(t) {
          function e(t, e) {
            for (var n = t.end - t.start, r = a && new Float32Array(n * s), l = t.start, u = 0, h = [], c = []; l < t.end; l++) {
              var d;
              if (1 === s) {
                var f = e.get(o[0], l);
                d = !isNaN(f) && i.dataToPoint(f, null, c)
              } else {
                var f = h[0] = e.get(o[0], l),
                  p = h[1] = e.get(o[1], l);
                d = !isNaN(f) && !isNaN(p) && i.dataToPoint(h, null, c)
              }
              a ? (r[u++] = d ? d[0] : 0 / 0, r[u++] = d ? d[1] : 0 / 0) : e.setItemLayout(l, d && d.slice() || [0 / 0, 0 / 0])
            }
            a && e.setLayout("symbolPoints", r)
          }
          var n = t.getData(),
            i = t.coordinateSystem,
            r = t.pipelineContext,
            a = r.large;
          if (i) {
            var o = p(i.dimensions, function(t) {
                return n.mapDimension(t)
              }).slice(0, 2),
              s = o.length,
              l = n.getCalculationInfo("stackResultDimension");
            return Cu(n, o[0]) && (o[0] = l), Cu(n, o[1]) && (o[1] = l), s && {
              progress: e
            }
          }
        }
      }
    },
    W_ = {
      average: function(t) {
        for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
        return 0 === n ? 0 / 0 : e / n
      },
      sum: function(t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
        return e
      },
      max: function(t) {
        for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
        return isFinite(e) ? e : 0 / 0
      },
      min: function(t) {
        for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
        return isFinite(e) ? e : 0 / 0
      },
      nearest: function(t) {
        return t[0]
      }
    },
    X_ = function(t) {
      return Math.round(t.length / 2)
    },
    j_ = function(t) {
      return {
        seriesType: t,
        modifyOutputEnd: !0,
        reset: function(t) {
          var e = t.getData(),
            n = t.get("sampling"),
            i = t.coordinateSystem;
          if ("cartesian2d" === i.type && n) {
            var r = i.getBaseAxis(),
              a = i.getOtherAxis(r),
              o = r.getExtent(),
              s = o[1] - o[0],
              l = Math.round(e.count() / s);
            if (l > 1) {
              var u;
              "string" == typeof n ? u = W_[n] : "function" == typeof n && (u = n), u && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, u, X_))
            }
          }
        }
      }
    },
    Y_ = function(t) {
      this._axes = {}, this._dimList = [], this.name = t || ""
    };
  Y_.prototype = {
    constructor: Y_,
    type: "cartesian",
    getAxis: function(t) {
      return this._axes[t]
    },
    getAxes: function() {
      return p(this._dimList, cc, this)
    },
    getAxesByScale: function(t) {
      return t = t.toLowerCase(), v(this.getAxes(), function(e) {
        return e.scale.type === t
      })
    },
    addAxis: function(t) {
      var e = t.dim;
      this._axes[e] = t, this._dimList.push(e)
    },
    dataToCoord: function(t) {
      return this._dataCoordConvert(t, "dataToCoord")
    },
    coordToData: function(t) {
      return this._dataCoordConvert(t, "coordToData")
    },
    _dataCoordConvert: function(t, e) {
      for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
        var a = n[r],
          o = this._axes[a];
        i[a] = o[e](t[a])
      }
      return i
    }
  }, dc.prototype = {
    constructor: dc,
    type: "cartesian2d",
    dimensions: ["x", "y"],
    getBaseAxis: function() {
      return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
    },
    containPoint: function(t) {
      var e = this.getAxis("x"),
        n = this.getAxis("y");
      return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
    },
    containData: function(t) {
      return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
    },
    dataToPoint: function(t, e, n) {
      var i = this.getAxis("x"),
        r = this.getAxis("y");
      return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n
    },
    clampData: function(t, e) {
      var n = this.getAxis("x").scale,
        i = this.getAxis("y").scale,
        r = n.getExtent(),
        a = i.getExtent(),
        o = n.parse(t[0]),
        s = i.parse(t[1]);
      return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e
    },
    pointToData: function(t, e) {
      var n = this.getAxis("x"),
        i = this.getAxis("y");
      return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e
    },
    getOtherAxis: function(t) {
      return this.getAxis("x" === t.dim ? "y" : "x")
    }
  }, h(dc, Y_);
  var q_ = function(t, e, n, i, r) {
    __.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom"
  };
  q_.prototype = {
    constructor: q_,
    index: 0,
    getAxesOnZeroOf: null,
    model: null,
    isHorizontal: function() {
      var t = this.position;
      return "top" === t || "bottom" === t
    },
    getGlobalExtent: function(t) {
      var e = this.getExtent();
      return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
    },
    getOtherAxis: function() {
      this.grid.getOtherAxis()
    },
    pointToData: function(t, e) {
      return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
    },
    toLocalCoord: null,
    toGlobalCoord: null
  }, h(q_, __);
  var U_ = {
      show: !0,
      zlevel: 0,
      z: 0,
      inverse: !1,
      name: "",
      nameLocation: "end",
      nameRotate: null,
      nameTruncate: {
        maxWidth: null,
        ellipsis: "...",
        placeholder: "."
      },
      nameTextStyle: {},
      nameGap: 15,
      silent: !1,
      triggerEvent: !1,
      tooltip: {
        show: !1
      },
      axisPointer: {},
      axisLine: {
        show: !0,
        onZero: !0,
        onZeroAxisIndex: null,
        lineStyle: {
          color: "#333",
          width: 1,
          type: "solid"
        },
        symbol: ["none", "none"],
        symbolSize: [10, 15]
      },
      axisTick: {
        show: !0,
        inside: !1,
        length: 5,
        lineStyle: {
          width: 1
        }
      },
      axisLabel: {
        show: !0,
        inside: !1,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12
      },
      splitLine: {
        show: !0,
        lineStyle: {
          color: ["#ccc"],
          width: 1,
          type: "solid"
        }
      },
      splitArea: {
        show: !1,
        areaStyle: {
          color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
        }
      }
    },
    Z_ = {};
  Z_.categoryAxis = r({
    boundaryGap: !0,
    deduplication: null,
    splitLine: {
      show: !1
    },
    axisTick: {
      alignWithLabel: !1,
      interval: "auto"
    },
    axisLabel: {
      interval: "auto"
    }
  }, U_), Z_.valueAxis = r({
    boundaryGap: [0, 0],
    splitNumber: 5
  }, U_), Z_.timeAxis = s({
    scale: !0,
    min: "dataMin",
    max: "dataMax"
  }, Z_.valueAxis), Z_.logAxis = s({
    scale: !0,
    logBase: 10
  }, Z_.valueAxis);
  var $_ = ["value", "category", "time", "log"],
    K_ = function(t, e, n, i) {
      f($_, function(o) {
        e.extend({
          type: t + "Axis." + o,
          mergeDefaultAndTheme: function(e, i) {
            var a = this.layoutMode,
              s = a ? bo(e) : {},
              l = i.getTheme();
            r(e, l.get(o + "Axis")), r(e, this.getDefaultOption()), e.type = n(t, e), a && wo(e, s, a)
          },
          optionUpdated: function() {
            var t = this.option;
            "category" === t.type && (this.__ordinalMeta = Lu.createByAxisModel(this))
          },
          getCategories: function(t) {
            var e = this.option;
            return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0
          },
          getOrdinalMeta: function() {
            return this.__ordinalMeta
          },
          defaultOption: a([{}, Z_[o + "Axis"], i], !0)
        })
      }), lm.registerSubTypeDefaulter(t + "Axis", x(n, t))
    },
    Q_ = lm.extend({
      type: "cartesian2dAxis",
      axis: null,
      init: function() {
        Q_.superApply(this, "init", arguments), this.resetRange()
      },
      mergeOption: function() {
        Q_.superApply(this, "mergeOption", arguments), this.resetRange()
      },
      restoreData: function() {
        Q_.superApply(this, "restoreData", arguments), this.resetRange()
      },
      getCoordSysModel: function() {
        return this.ecModel.queryComponents({
          mainType: "grid",
          index: this.option.gridIndex,
          id: this.option.gridId
        })[0]
      }
    });
  r(Q_.prototype, a_);
  var J_ = {
    offset: 0
  };
  K_("x", Q_, fc, J_), K_("y", Q_, fc, J_), lm.extend({
    type: "grid",
    dependencies: ["xAxis", "yAxis"],
    layoutMode: "box",
    coordinateSystem: null,
    defaultOption: {
      show: !1,
      zlevel: 0,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 60,
      containLabel: !1,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc"
    }
  });
  var tw = gc.prototype;
  tw.type = "grid", tw.axisPointerEnabled = !0, tw.getRect = function() {
    return this._rect
  }, tw.update = function(t, e) {
    var n = this._axesMap;
    this._updateScale(t, this.model), f(n.x, function(t) {
      Ju(t.scale, t.model)
    }), f(n.y, function(t) {
      Ju(t.scale, t.model)
    });
    var i = {};
    f(n.x, function(t) {
      vc(n, "y", t, i)
    }), f(n.y, function(t) {
      vc(n, "x", t, i)
    }), this.resize(this.model, e)
  }, tw.resize = function(t, e, n) {
    function i() {
      f(a, function(t) {
        var e = t.isHorizontal(),
          n = e ? [0, r.width] : [0, r.height],
          i = t.inverse ? 1 : 0;
        t.setExtent(n[i], n[1 - i]), yc(t, e ? r.x : r.y)
      })
    }
    var r = _o(t.getBoxLayoutParams(), {
      width: e.getWidth(),
      height: e.getHeight()
    });
    this._rect = r;
    var a = this._axesList;
    i(), !n && t.get("containLabel") && (f(a, function(t) {
      if (!t.model.get("axisLabel.inside")) {
        var e = rh(t);
        if (e) {
          var n = t.isHorizontal() ? "height" : "width",
            i = t.model.get("axisLabel.margin");
          r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i)
        }
      }
    }), i())
  }, tw.getAxis = function(t, e) {
    var n = this._axesMap[t];
    if (null != n) {
      if (null == e)
        for (var i in n)
          if (n.hasOwnProperty(i)) return n[i];
      return n[e]
    }
  }, tw.getAxes = function() {
    return this._axesList.slice()
  }, tw.getCartesian = function(t, e) {
    if (null != t && null != e) {
      var n = "x" + t + "y" + e;
      return this._coordsMap[n]
    }
    S(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
    for (var i = 0, r = this._coordsList; i < r.length; i++)
      if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
  }, tw.getCartesians = function() {
    return this._coordsList.slice()
  }, tw.convertToPixel = function(t, e, n) {
    var i = this._findConvertTarget(t, e);
    return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
  }, tw.convertFromPixel = function(t, e, n) {
    var i = this._findConvertTarget(t, e);
    return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
  }, tw._findConvertTarget = function(t, e) {
    var n, i, r = e.seriesModel,
      a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
      o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
      s = e.gridModel,
      l = this._coordsList;
    if (r) n = r.coordinateSystem, u(l, n) < 0 && (n = null);
    else if (a && o) n = this.getCartesian(a.componentIndex, o.componentIndex);
    else if (a) i = this.getAxis("x", a.componentIndex);
    else if (o) i = this.getAxis("y", o.componentIndex);
    else if (s) {
      var h = s.coordinateSystem;
      h === this && (n = this._coordsList[0])
    }
    return {
      cartesian: n,
      axis: i
    }
  }, tw.containPoint = function(t) {
    var e = this._coordsList[0];
    return e ? e.containPoint(t) : void 0
  }, tw._initCartesian = function(t, e) {
    function n(n) {
      return function(o, s) {
        if (pc(o, t, e)) {
          var l = o.get("position");
          "x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", i[l] && (l = "left" === l ? "right" : "left")), i[l] = !0;
          var u = new q_(n, th(o), [0, 0], o.get("type"), l),
            h = "category" === u.type;
          u.onBand = h && o.get("boundaryGap"), u.inverse = o.get("inverse"), o.axis = u, u.model = o, u.grid = this, u.index = s, this._axesList.push(u), r[n][s] = u, a[n]++
        }
      }
    }
    var i = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      },
      r = {
        x: {},
        y: {}
      },
      a = {
        x: 0,
        y: 0
      };
    return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), a.x && a.y ? (this._axesMap = r, void f(r.x, function(e, n) {
      f(r.y, function(i, r) {
        var a = "x" + n + "y" + r,
          o = new dc(a);
        o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i)
      }, this)
    }, this)) : (this._axesMap = {}, void(this._axesList = []))
  }, tw._updateScale = function(t, e) {
    function n(t, e) {
      f(t.mapDimension(e.dim, !0), function(n) {
        e.scale.unionExtentFromData(t, ku(t, n))
      })
    }
    f(this._axesList, function(t) {
      t.scale.setExtent(1 / 0, -1 / 0)
    }), t.eachSeries(function(i) {
      if (_c(i)) {
        var r = xc(i, t),
          a = r[0],
          o = r[1];
        if (!pc(a, e, t) || !pc(o, e, t)) return;
        var s = this.getCartesian(a.componentIndex, o.componentIndex),
          l = i.getData(),
          u = s.getAxis("x"),
          h = s.getAxis("y");
        "list" === l.type && (n(l, u, i), n(l, h, i))
      }
    }, this)
  }, tw.getTooltipAxes = function(t) {
    var e = [],
      n = [];
    return f(this.getCartesians(), function(i) {
      var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
        a = i.getOtherAxis(r);
      u(e, r) < 0 && e.push(r), u(n, a) < 0 && n.push(a)
    }), {
      baseAxes: e,
      otherAxes: n
    }
  };
  var ew = ["xAxis", "yAxis"];
  gc.create = function(t, e) {
    var n = [];
    return t.eachComponent("grid", function(i, r) {
      var a = new gc(i, t, e);
      a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a)
    }), t.eachSeries(function(e) {
      if (_c(e)) {
        var n = xc(e, t),
          i = n[0],
          r = n[1],
          a = i.getCoordSysModel(),
          o = a.coordinateSystem;
        e.coordinateSystem = o.getCartesian(i.componentIndex, r.componentIndex)
      }
    }), n
  }, gc.dimensions = gc.prototype.dimensions = dc.prototype.dimensions, Zo.register("cartesian2d", gc);
  var nw = Math.PI,
    iw = function(t, e) {
      this.opt = e, this.axisModel = t, s(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0
      }), this.group = new Qf;
      var n = new Qf({
        position: e.position.slice(),
        rotation: e.rotation
      });
      n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
    };
  iw.prototype = {
    constructor: iw,
    hasBuilder: function(t) {
      return !!rw[t]
    },
    add: function(t) {
      rw[t].call(this)
    },
    getGroup: function() {
      return this.group
    }
  };
  var rw = {
      axisLine: function() {
        var t = this.opt,
          e = this.axisModel;
        if (e.get("axisLine.show")) {
          var n = this.axisModel.axis.getExtent(),
            i = this._transform,
            r = [n[0], 0],
            a = [n[1], 0];
          i && (ae(r, r, i), ae(a, a, i));
          var s = o({
            lineCap: "round"
          }, e.getModel("axisLine.lineStyle").getLineStyle());
          this.group.add(new _v(ta({
            anid: "line",
            shape: {
              x1: r[0],
              y1: r[1],
              x2: a[0],
              y2: a[1]
            },
            style: s,
            strokeContainThreshold: t.strokeContainThreshold || 5,
            silent: !0,
            z2: 1
          })));
          var l = e.get("axisLine.symbol"),
            u = e.get("axisLine.symbolSize"),
            h = e.get("axisLine.symbolOffset") || 0;
          if ("number" == typeof h && (h = [h, h]), null != l) {
            "string" == typeof l && (l = [l, l]), ("string" == typeof u || "number" == typeof u) && (u = [u, u]);
            var c = u[0],
              d = u[1];
            f([{
              rotate: t.rotation + Math.PI / 2,
              offset: h[0],
              r: 0
            }, {
              rotate: t.rotation - Math.PI / 2,
              offset: h[1],
              r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
            }], function(e, n) {
              if ("none" !== l[n] && null != l[n]) {
                var i = sh(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
                  a = e.r + e.offset,
                  o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                i.attr({
                  rotation: e.rotate,
                  position: o,
                  silent: !0
                }), this.group.add(i)
              }
            }, this)
          }
        }
      },
      axisTickLabel: function() {
        var t = this.axisModel,
          e = this.opt,
          n = kc(this, t, e),
          i = Dc(this, t, e);
        Mc(t, i, n)
      },
      axisName: function() {
        var t = this.opt,
          e = this.axisModel,
          n = k(t.axisName, e.get("name"));
        if (n) {
          var i, r = e.get("nameLocation"),
            a = t.nameDirection,
            s = e.getModel("nameTextStyle"),
            l = e.get("nameGap") || 0,
            u = this.axisModel.axis.getExtent(),
            h = u[0] > u[1] ? -1 : 1,
            c = ["start" === r ? u[0] - h * l : "end" === r ? u[1] + h * l : (u[0] + u[1]) / 2, Cc(r) ? t.labelOffset + a * l : 0],
            d = e.get("nameRotate");
          null != d && (d = d * nw / 180);
          var f;
          Cc(r) ? i = aw(t.rotation, null != d ? d : t.rotation, a) : (i = bc(t, r, d || 0, u), f = t.axisNameAvailableWidth, null != f && (f = Math.abs(f / Math.sin(i.rotation)), !isFinite(f) && (f = null)));
          var p = s.getFont(),
            g = e.get("nameTruncate", !0) || {},
            v = g.ellipsis,
            m = k(t.nameTruncateMaxWidth, g.maxWidth, f),
            y = null != v && null != m ? Jv(n, m, p, v, {
              minChar: 2,
              placeholder: g.placeholder
            }) : n,
            x = e.get("tooltip", !0),
            _ = e.mainType,
            w = {
              componentType: _,
              name: n,
              $vars: ["name"]
            };
          w[_ + "Index"] = e.componentIndex;
          var b = new uv({
            anid: "name",
            __fullText: n,
            __truncatedText: y,
            position: c,
            rotation: i.rotation,
            silent: Sc(e),
            z2: 1,
            tooltip: x && x.show ? o({
              content: n,
              formatter: function() {
                return n
              },
              formatterParams: w
            }, x) : null
          });
          _a(b.style, s, {
            text: y,
            textFont: p,
            textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
            textAlign: i.textAlign,
            textVerticalAlign: i.textVerticalAlign
          }), e.get("triggerEvent") && (b.eventData = wc(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
        }
      }
    },
    aw = iw.innerTextLayout = function(t, e, n) {
      var i, r, a = to(e - t);
      return eo(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : eo(a - nw) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && nw > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
        rotation: a,
        textAlign: i,
        textVerticalAlign: r
      }
    },
    ow = f,
    sw = x,
    lw = Jl({
      type: "axis",
      _axisPointer: null,
      axisPointerClass: null,
      render: function(t, e, n, i) {
        this.axisPointerClass && zc(t), lw.superApply(this, "render", arguments), Vc(this, t, e, n, i, !0)
      },
      updateAxisPointer: function(t, e, n, i) {
        Vc(this, t, e, n, i, !1)
      },
      remove: function(t, e) {
        var n = this._axisPointer;
        n && n.remove(e), lw.superApply(this, "remove", arguments)
      },
      dispose: function(t, e) {
        Gc(this, e), lw.superApply(this, "dispose", arguments)
      }
    }),
    uw = [];
  lw.registerAxisPointerClass = function(t, e) {
    uw[t] = e
  }, lw.getAxisPointerClass = function(t) {
    return t && uw[t]
  };
  var hw = ["axisLine", "axisTickLabel", "axisName"],
    cw = ["splitArea", "splitLine"],
    dw = lw.extend({
      type: "cartesianAxis",
      axisPointerClass: "CartesianAxisPointer",
      render: function(t, e, n, i) {
        this.group.removeAll();
        var r = this._axisGroup;
        if (this._axisGroup = new Qf, this.group.add(this._axisGroup), t.get("show")) {
          var a = t.getCoordSysModel(),
            o = Wc(a, t),
            s = new iw(t, o);
          f(hw, s.add, s), this._axisGroup.add(s.getGroup()), f(cw, function(e) {
            t.get(e + ".show") && this["_" + e](t, a)
          }, this), Ea(r, this._axisGroup, t), dw.superCall(this, "render", t, e, n, i)
        }
      },
      remove: function() {
        this._splitAreaColors = null
      },
      _splitLine: function(t, e) {
        var n = t.axis;
        if (!n.scale.isBlank()) {
          var i = t.getModel("splitLine"),
            r = i.getModel("lineStyle"),
            a = r.get("color");
          a = _(a) ? a : [a];
          for (var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), u = 0, h = n.getTicksCoords({
              tickModel: i
            }), c = [], d = [], f = r.getLineStyle(), p = 0; p < h.length; p++) {
            var g = n.toGlobalCoord(h[p].coord);
            l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, d[0] = o.x + o.width, d[1] = g);
            var v = u++ % a.length,
              m = h[p].tickValue;
            this._axisGroup.add(new _v(ta({
              anid: null != m ? "line_" + h[p].tickValue : null,
              shape: {
                x1: c[0],
                y1: c[1],
                x2: d[0],
                y2: d[1]
              },
              style: s({
                stroke: a[v]
              }, f),
              silent: !0
            })))
          }
        }
      },
      _splitArea: function(t, e) {
        var n = t.axis;
        if (!n.scale.isBlank()) {
          var i = t.getModel("splitArea"),
            r = i.getModel("areaStyle"),
            a = r.get("color"),
            o = e.coordinateSystem.getRect(),
            l = n.getTicksCoords({
              tickModel: i,
              clamp: !0
            });
          if (l.length) {
            var u = a.length,
              h = this._splitAreaColors,
              c = F(),
              d = 0;
            if (h)
              for (var f = 0; f < l.length; f++) {
                var p = h.get(l[f].tickValue);
                if (null != p) {
                  d = (p + (u - 1) * f) % u;
                  break
                }
              }
            var g = n.toGlobalCoord(l[0].coord),
              v = r.getAreaStyle();
            a = _(a) ? a : [a];
            for (var f = 1; f < l.length; f++) {
              var m, y, x, w, b = n.toGlobalCoord(l[f].coord);
              n.isHorizontal() ? (m = g, y = o.y, x = b - m, w = o.height, g = m + x) : (m = o.x, y = g, x = o.width, w = b - y, g = y + w);
              var S = l[f - 1].tickValue;
              null != S && c.set(S, d), this._axisGroup.add(new xv({
                anid: null != S ? "area_" + S : null,
                shape: {
                  x: m,
                  y: y,
                  width: x,
                  height: w
                },
                style: s({
                  fill: a[d]
                }, v),
                silent: !0
              })), d = (d + 1) % u
            }
            this._splitAreaColors = c
          }
        }
      }
    });
  dw.extend({
    type: "xAxis"
  }), dw.extend({
    type: "yAxis"
  }), Jl({
    type: "grid",
    render: function(t) {
      this.group.removeAll(), t.get("show") && this.group.add(new xv({
        shape: t.coordinateSystem.getRect(),
        style: s({
          fill: t.get("backgroundColor")
        }, t.getItemStyle()),
        silent: !0,
        z2: -1
      }))
    }
  }), Gl(function(t) {
    t.xAxis && t.yAxis && !t.grid && (t.grid = {})
  }), Zl(V_("line", "circle", "line")), Ul(G_("line")), Wl(Zy.PROCESSOR.STATISTIC, j_("line")), Ql({
    type: "title",
    layoutMode: {
      type: "box",
      ignoreSize: !0
    },
    defaultOption: {
      zlevel: 0,
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: {
        fontSize: 18,
        fontWeight: "bolder",
        color: "#333"
      },
      subtextStyle: {
        color: "#aaa"
      }
    }
  }), Jl({
    type: "title",
    render: function(t, e, n) {
      if (this.group.removeAll(), t.get("show")) {
        var i = this.group,
          r = t.getModel("textStyle"),
          a = t.getModel("subtextStyle"),
          o = t.get("textAlign"),
          s = t.get("textBaseline"),
          l = new uv({
            style: _a({}, r, {
              text: t.get("text"),
              textFill: r.getTextColor()
            }, {
              disableBox: !0
            }),
            z2: 10
          }),
          u = l.getBoundingRect(),
          h = t.get("subtext"),
          c = new uv({
            style: _a({}, a, {
              text: h,
              textFill: a.getTextColor(),
              y: u.height + t.get("itemGap"),
              textVerticalAlign: "top"
            }, {
              disableBox: !0
            }),
            z2: 10
          }),
          d = t.get("link"),
          f = t.get("sublink"),
          p = t.get("triggerEvent", !0);
        l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function() {
          window.open(d, "_" + t.get("target"))
        }), f && c.on("click", function() {
          window.open(f, "_" + t.get("subtarget"))
        }), l.eventData = c.eventData = p ? {
          componentType: "title",
          componentIndex: t.componentIndex
        } : null, i.add(l), h && i.add(c);
        var g = i.getBoundingRect(),
          v = t.getBoxLayoutParams();
        v.width = g.width, v.height = g.height;
        var m = _o(v, {
          width: n.getWidth(),
          height: n.getHeight()
        }, t.get("padding"));
        o || (o = t.get("left") || t.get("right"), "middle" === o && (o = "center"), "right" === o ? m.x += m.width : "center" === o && (m.x += m.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? m.y += m.height : "middle" === s && (m.y += m.height / 2), s = s || "top"), i.attr("position", [m.x, m.y]);
        var y = {
          textAlign: o,
          textVerticalAlign: s
        };
        l.setStyle(y), c.setStyle(y), g = i.getBoundingRect();
        var x = m.margin,
          _ = t.getItemStyle(["color", "opacity"]);
        _.fill = t.get("backgroundColor");
        var w = new xv({
          shape: {
            x: g.x - x[3],
            y: g.y - x[0],
            width: g.width + x[1] + x[3],
            height: g.height + x[0] + x[2],
            r: t.get("borderRadius")
          },
          style: _,
          silent: !0
        });
        ea(w), i.add(w)
      }
    }
  });
  var fw = Ql({
    type: "legend.plain",
    dependencies: ["series"],
    layoutMode: {
      type: "box",
      ignoreSize: !0
    },
    init: function(t, e, n) {
      this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}
    },
    mergeOption: function(t) {
      fw.superCall(this, "mergeOption", t)
    },
    optionUpdated: function() {
      this._updateData(this.ecModel);
      var t = this._data;
      if (t[0] && "single" === this.get("selectedMode")) {
        for (var e = !1, n = 0; n < t.length; n++) {
          var i = t[n].get("name");
          if (this.isSelected(i)) {
            this.select(i), e = !0;
            break
          }
        }!e && this.select(t[0].get("name"))
      }
    },
    _updateData: function(t) {
      var e = [],
        n = [];
      t.eachRawSeries(function(i) {
        var r = i.name;
        n.push(r);
        var a;
        if (i.legendDataProvider) {
          var o = i.legendDataProvider(),
            s = o.mapArray(o.getName);
          t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : a = !0
        } else a = !0;
        a && Gi(i) && e.push(i.name)
      }), this._availableNames = n;
      var i = this.get("data") || e,
        r = p(i, function(t) {
          return ("string" == typeof t || "number" == typeof t) && (t = {
            name: t
          }), new Na(t, this, this.ecModel)
        }, this);
      this._data = r
    },
    getData: function() {
      return this._data
    },
    select: function(t) {
      var e = this.option.selected,
        n = this.get("selectedMode");
      if ("single" === n) {
        var i = this._data;
        f(i, function(t) {
          e[t.get("name")] = !1
        })
      }
      e[t] = !0
    },
    unSelect: function(t) {
      "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
    },
    toggleSelected: function(t) {
      var e = this.option.selected;
      e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
    },
    isSelected: function(t) {
      var e = this.option.selected;
      return !(e.hasOwnProperty(t) && !e[t]) && u(this._availableNames, t) >= 0
    },
    defaultOption: {
      zlevel: 0,
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      top: 0,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      inactiveColor: "#ccc",
      textStyle: {
        color: "#333"
      },
      selectedMode: !0,
      tooltip: {
        show: !1
      }
    }
  });
  jl("legendToggleSelect", "legendselectchanged", x(Xc, "toggleSelected")), jl("legendSelect", "legendselected", x(Xc, "select")), jl("legendUnSelect", "legendunselected", x(Xc, "unSelect"));
  var pw = x,
    gw = f,
    vw = Qf,
    mw = Jl({
      type: "legend.plain",
      newlineDisabled: !1,
      init: function() {
        this.group.add(this._contentGroup = new vw), this._backgroundEl
      },
      getContentGroup: function() {
        return this._contentGroup
      },
      render: function(t, e, n) {
        if (this.resetInner(), t.get("show", !0)) {
          var i = t.get("align");
          i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), this.renderInner(i, t, e, n);
          var r = t.getBoxLayoutParams(),
            a = {
              width: n.getWidth(),
              height: n.getHeight()
            },
            o = t.get("padding"),
            l = _o(r, a, o),
            u = this.layoutInner(t, i, l),
            h = _o(s({
              width: u.width,
              height: u.height
            }, r), a, o);
          this.group.attr("position", [h.x - u.x, h.y - u.y]), this.group.add(this._backgroundEl = jc(u, t))
        }
      },
      resetInner: function() {
        this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl)
      },
      renderInner: function(t, e, n, i) {
        var r = this.getContentGroup(),
          a = F(),
          o = e.get("selectedMode"),
          s = [];
        n.eachRawSeries(function(t) {
          !t.get("legendHoverLink") && s.push(t.id)
        }), gw(e.getData(), function(l, u) {
          var h = l.get("name");
          if (!this.newlineDisabled && ("" === h || "\n" === h)) return void r.add(new vw({
            newline: !0
          }));
          var c = n.getSeriesByName(h)[0];
          if (!a.get(h))
            if (c) {
              var d = c.getData(),
                f = d.getVisual("color");
              "function" == typeof f && (f = f(c.getDataParams(0)));
              var p = d.getVisual("legendSymbol") || "roundRect",
                g = d.getVisual("symbol"),
                v = this._createItem(h, u, l, e, p, g, t, f, o);
              v.on("click", pw(Yc, h, i)).on("mouseover", pw(qc, c.name, null, i, s)).on("mouseout", pw(Uc, c.name, null, i, s)), a.set(h, !0)
            } else n.eachRawSeries(function(n) {
              if (!a.get(h) && n.legendDataProvider) {
                var r = n.legendDataProvider(),
                  c = r.indexOfName(h);
                if (0 > c) return;
                var d = r.getItemVisual(c, "color"),
                  f = "roundRect",
                  p = this._createItem(h, u, l, e, f, null, t, d, o);
                p.on("click", pw(Yc, h, i)).on("mouseover", pw(qc, null, h, i, s)).on("mouseout", pw(Uc, null, h, i, s)), a.set(h, !0)
              }
            }, this)
        }, this)
      },
      _createItem: function(t, e, n, i, r, a, s, l, u) {
        var h = i.get("itemWidth"),
          c = i.get("itemHeight"),
          d = i.get("inactiveColor"),
          f = i.get("symbolKeepAspect"),
          p = i.isSelected(t),
          g = new vw,
          v = n.getModel("textStyle"),
          m = n.get("icon"),
          y = n.getModel("tooltip"),
          x = y.parentModel;
        if (r = m || r, g.add(sh(r, 0, 0, h, c, p ? l : d, null == f ? !0 : f)), !m && a && (a !== r || "none" === a)) {
          var _ = .8 * c;
          "none" === a && (a = "circle"), g.add(sh(a, (h - _) / 2, (c - _) / 2, _, _, p ? l : d, null == f ? !0 : f))
        }
        var w = "left" === s ? h + 5 : -5,
          b = s,
          S = i.get("formatter"),
          M = t;
        "string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" == typeof S && (M = S(t)), g.add(new uv({
          style: _a({}, v, {
            text: M,
            x: w,
            y: c / 2,
            textFill: p ? v.getTextColor() : d,
            textAlign: b,
            textVerticalAlign: "middle"
          })
        }));
        var I = new xv({
          shape: g.getBoundingRect(),
          invisible: !0,
          tooltip: y.get("show") ? o({
            content: t,
            formatter: x.get("formatter", !0) || function() {
              return t
            },
            formatterParams: {
              componentType: "legend",
              legendIndex: i.componentIndex,
              name: t,
              $vars: ["name"]
            }
          }, y.option) : null
        });
        return g.add(I), g.eachChild(function(t) {
          t.silent = !0
        }), I.silent = !u, this.getContentGroup().add(g), ma(g), g.__legendDataIndex = e, g
      },
      layoutInner: function(t, e, n) {
        var i = this.getContentGroup();
        am(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
        var r = i.getBoundingRect();
        return i.attr("position", [-r.x, -r.y]), this.group.getBoundingRect()
      }
    }),
    yw = function(t) {
      var e = t.findComponents({
        mainType: "legend"
      });
      e && e.length && t.filterSeries(function(t) {
        for (var n = 0; n < e.length; n++)
          if (!e[n].isSelected(t.name)) return !1;
        return !0
      })
    };
  Wl(yw), lm.registerSubTypeDefaulter("legend", function() {
    return "plain"
  });
  var xw = fw.extend({
      type: "legend.scroll",
      setScrollDataIndex: function(t) {
        this.option.scrollDataIndex = t
      },
      defaultOption: {
        scrollDataIndex: 0,
        pageButtonItemGap: 5,
        pageButtonGap: null,
        pageButtonPosition: "end",
        pageFormatter: "{current}/{total}",
        pageIcons: {
          horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
          vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
        },
        pageIconColor: "#2f4554",
        pageIconInactiveColor: "#aaa",
        pageIconSize: 15,
        pageTextStyle: {
          color: "#333"
        },
        animationDurationUpdate: 800
      },
      init: function(t, e, n, i) {
        var r = bo(t);
        xw.superCall(this, "init", t, e, n, i), Zc(this, t, r)
      },
      mergeOption: function(t, e) {
        xw.superCall(this, "mergeOption", t, e), Zc(this, this.option, t)
      },
      getOrient: function() {
        return "vertical" === this.get("orient") ? {
          index: 1,
          name: "vertical"
        } : {
          index: 0,
          name: "horizontal"
        }
      }
    }),
    _w = Qf,
    ww = ["width", "height"],
    bw = ["x", "y"],
    Sw = mw.extend({
      type: "legend.scroll",
      newlineDisabled: !0,
      init: function() {
        Sw.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new _w), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new _w), this._showController
      },
      resetInner: function() {
        Sw.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
      },
      renderInner: function(t, e, n, i) {
        function r(t, n) {
          var r = t + "DataIndex",
            l = Fa(e.get("pageIcons", !0)[e.getOrient().name][n], {
              onclick: y(a._pageGo, a, r, e, i)
            }, {
              x: -s[0] / 2,
              y: -s[1] / 2,
              width: s[0],
              height: s[1]
            });
          l.name = t, o.add(l)
        }
        var a = this;
        Sw.superCall(this, "renderInner", t, e, n, i);
        var o = this._controllerGroup,
          s = e.get("pageIconSize", !0);
        _(s) || (s = [s, s]), r("pagePrev", 0);
        var l = e.getModel("pageTextStyle");
        o.add(new uv({
          name: "pageText",
          style: {
            textFill: l.getTextColor(),
            font: l.getFont(),
            textVerticalAlign: "middle",
            textAlign: "center"
          },
          silent: !0
        })), r("pageNext", 1)
      },
      layoutInner: function(t, e, n) {
        var i = this.getContentGroup(),
          r = this._containerGroup,
          a = this._controllerGroup,
          o = t.getOrient().index,
          s = ww[o],
          l = ww[1 - o],
          u = bw[1 - o];
        am(t.get("orient"), i, t.get("itemGap"), o ? n.width : null, o ? null : n.height), am("horizontal", a, t.get("pageButtonItemGap", !0));
        var h = i.getBoundingRect(),
          c = a.getBoundingRect(),
          d = this._showController = h[s] > n[s],
          f = [-h.x, -h.y];
        f[o] = i.position[o];
        var p = [0, 0],
          g = [-c.x, -c.y],
          v = D(t.get("pageButtonGap", !0), t.get("itemGap", !0));
        if (d) {
          var m = t.get("pageButtonPosition", !0);
          "end" === m ? g[o] += n[s] - c[s] : p[o] += c[s] + v
        }
        g[1 - o] += h[l] / 2 - c[l] / 2, i.attr("position", f), r.attr("position", p), a.attr("position", g);
        var y = this.group.getBoundingRect(),
          y = {
            x: 0,
            y: 0
          };
        if (y[s] = d ? n[s] : h[s], y[l] = Math.max(h[l], c[l]), y[u] = Math.min(0, c[u] + g[1 - o]), r.__rectSize = n[s], d) {
          var x = {
            x: 0,
            y: 0
          };
          x[s] = Math.max(n[s] - c[s] - v, 0), x[l] = y[l], r.setClipPath(new xv({
            shape: x
          })), r.__rectSize = x[s]
        } else a.eachChild(function(t) {
          t.attr({
            invisible: !0,
            silent: !0
          })
        });
        var _ = this._getPageInfo(t);
        return null != _.pageIndex && Aa(i, {
          position: _.contentPosition
        }, d ? t : !1), this._updatePageInfoView(t, _), y
      },
      _pageGo: function(t, e, n) {
        var i = this._getPageInfo(e)[t];
        null != i && n.dispatchAction({
          type: "legendScroll",
          scrollDataIndex: i,
          legendId: e.id
        })
      },
      _updatePageInfoView: function(t, e) {
        var n = this._controllerGroup;
        f(["pagePrev", "pageNext"], function(i) {
          var r = null != e[i + "DataIndex"],
            a = n.childOfName(i);
          a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = r ? "pointer" : "default")
        });
        var i = n.childOfName("pageText"),
          r = t.get("pageFormatter"),
          a = e.pageIndex,
          o = null != a ? a + 1 : 0,
          s = e.pageCount;
        i && r && i.setStyle("text", b(r) ? r.replace("{current}", o).replace("{total}", s) : r({
          current: o,
          total: s
        }))
      },
      _getPageInfo: function(t) {
        function e(t) {
          var e = t.getBoundingRect().clone();
          return e[f] += t.position[h], e
        }
        var n, i, r, a, o = t.get("scrollDataIndex", !0),
          s = this.getContentGroup(),
          l = s.getBoundingRect(),
          u = this._containerGroup.__rectSize,
          h = t.getOrient().index,
          c = ww[h],
          d = ww[1 - h],
          f = bw[h],
          p = s.position.slice();
        this._showController ? s.eachChild(function(t) {
          t.__legendDataIndex === o && (a = t)
        }) : a = s.childAt(0);
        var g = u ? Math.ceil(l[c] / u) : 0;
        if (a) {
          var v = a.getBoundingRect(),
            m = a.position[h] + v[f];
          p[h] = -m - l[f], n = Math.floor(g * (m + v[f] + u / 2) / l[c]), n = l[c] && g ? Math.max(0, Math.min(g - 1, n)) : -1;
          var y = {
            x: 0,
            y: 0
          };
          y[c] = u, y[d] = l[d], y[f] = -p[h] - l[f];
          var x, _ = s.children();
          if (s.eachChild(function(t, n) {
              var i = e(t);
              i.intersect(y) && (null == x && (x = n), r = t.__legendDataIndex), n === _.length - 1 && i[f] + i[c] <= y[f] + y[c] && (r = null)
            }), null != x) {
            var w = _[x],
              b = e(w);
            if (y[f] = b[f] + b[c] - y[c], 0 >= x && b[f] >= y[f]) i = null;
            else {
              for (; x > 0 && e(_[x - 1]).intersect(y);) x--;
              i = _[x].__legendDataIndex
            }
          }
        }
        return {
          contentPosition: p,
          pageIndex: n,
          pageCount: g,
          pagePrevDataIndex: i,
          pageNextDataIndex: r
        }
      }
    });
  jl("legendScroll", "legendscroll", function(t, e) {
    var n = t.scrollDataIndex;
    null != n && e.eachComponent({
      mainType: "legend",
      subType: "scroll",
      query: t
    }, function(t) {
      t.setScrollDataIndex(n)
    })
  });
  var Mw = function(t, e) {
      var n, i = [],
        r = t.seriesIndex;
      if (null == r || !(n = e.getSeriesByIndex(r))) return {
        point: []
      };
      var a = n.getData(),
        o = Xi(a, t);
      if (null == o || 0 > o || _(o)) return {
        point: []
      };
      var s = a.getItemGraphicEl(o),
        l = n.coordinateSystem;
      if (n.getTooltipPosition) i = n.getTooltipPosition(o) || [];
      else if (l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function(t) {
        return a.mapDimension(t)
      }), o, !0)) || [];
      else if (s) {
        var u = s.getBoundingRect().clone();
        u.applyTransform(s.transform), i = [u.x + u.width / 2, u.y + u.height / 2]
      }
      return {
        point: i,
        el: s
      }
    },
    Iw = f,
    Tw = x,
    Cw = ji(),
    kw = function(t, e, n) {
      var i = t.currTrigger,
        r = [t.x, t.y],
        a = t,
        o = t.dispatchAction || y(n.dispatchAction, n),
        s = e.getComponent("axisPointer").coordSysAxesInfo;
      if (s) {
        ad(r) && (r = Mw({
          seriesIndex: a.seriesIndex,
          dataIndex: a.dataIndex
        }, e).point);
        var l = ad(r),
          u = a.axesInfo,
          h = s.axesInfo,
          c = "leave" === i || ad(r),
          d = {},
          f = {},
          p = {
            list: [],
            map: {}
          },
          g = {
            showPointer: Tw(Qc, f),
            showTooltip: Tw(Jc, p)
          };
        Iw(s.coordSysMap, function(t, e) {
          var n = l || t.containPoint(r);
          Iw(s.coordSysAxesInfo[e], function(t) {
            var e = t.axis,
              i = id(u, t);
            if (!c && n && (!u || i)) {
              var a = i && i.value;
              null != a || l || (a = e.pointToData(r)), null != a && $c(t, a, g, !1, d)
            }
          })
        });
        var v = {};
        return Iw(h, function(t, e) {
          var n = t.linkGroup;
          n && !f[e] && Iw(n.axesInfo, function(e, i) {
            var r = f[i];
            if (e !== t && r) {
              var a = r.value;
              n.mapper && (a = t.axis.scale.parse(n.mapper(a, rd(e), rd(t)))), v[t.key] = a
            }
          })
        }), Iw(v, function(t, e) {
          $c(h[e], t, g, !0, d)
        }), td(f, h, d), ed(p, r, t, o), nd(h, o, n), d
      }
    },
    Dw = (Ql({
      type: "axisPointer",
      coordSysAxesInfo: null,
      defaultOption: {
        show: "auto",
        triggerOn: null,
        zlevel: 0,
        z: 50,
        type: "line",
        snap: !1,
        triggerTooltip: !0,
        value: null,
        status: null,
        link: [],
        animation: null,
        animationDurationUpdate: 200,
        lineStyle: {
          color: "#aaa",
          width: 1,
          type: "solid"
        },
        shadowStyle: {
          color: "rgba(150,150,150,0.3)"
        },
        label: {
          show: !0,
          formatter: null,
          precision: "auto",
          margin: 3,
          color: "#fff",
          padding: [5, 7, 5, 7],
          backgroundColor: "auto",
          borderColor: null,
          borderWidth: 0,
          shadowBlur: 3,
          shadowColor: "#aaa"
        },
        handle: {
          show: !1,
          icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
          size: 45,
          margin: 50,
          color: "#333",
          shadowBlur: 3,
          shadowColor: "#aaa",
          shadowOffsetX: 0,
          shadowOffsetY: 2,
          throttle: 40
        }
      }
    }), ji()),
    Aw = f,
    Pw = Jl({
      type: "axisPointer",
      render: function(t, e, n) {
        var i = e.getComponent("tooltip"),
          r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
        od("axisPointer", n, function(t, e, n) {
          "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
            type: "updateAxisPointer",
            currTrigger: t,
            x: e && e.offsetX,
            y: e && e.offsetY
          })
        })
      },
      remove: function(t, e) {
        dd(e.getZr(), "axisPointer"), Pw.superApply(this._model, "remove", arguments)
      },
      dispose: function(t, e) {
        dd("axisPointer", e), Pw.superApply(this._model, "dispose", arguments)
      }
    }),
    Ow = ji(),
    Lw = i,
    Bw = y;
  fd.prototype = {
    _group: null,
    _lastGraphicKey: null,
    _handle: null,
    _dragging: !1,
    _lastValue: null,
    _lastStatus: null,
    _payloadInfo: null,
    animationThreshold: 15,
    render: function(t, e, n, i) {
      var r = e.get("value"),
        a = e.get("status");
      if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== a) {
        this._lastValue = r, this._lastStatus = a;
        var o = this._group,
          s = this._handle;
        if (!a || "hide" === a) return o && o.hide(), void(s && s.hide());
        o && o.show(), s && s.show();
        var l = {};
        this.makeElOption(l, r, t, e, n);
        var u = l.graphicKey;
        u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
        var h = this._moveAnimation = this.determineAnimation(t, e);
        if (o) {
          var c = x(pd, e, h);
          this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e)
        } else o = this._group = new Qf, this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), n.getZr().add(o);
        yd(o, e, !0), this._renderHandle(r)
      }
    },
    remove: function(t) {
      this.clear(t)
    },
    dispose: function(t) {
      this.clear(t)
    },
    determineAnimation: function(t, e) {
      var n = e.get("animation"),
        i = t.axis,
        r = "category" === i.type,
        a = e.get("snap");
      if (!a && !r) return !1;
      if ("auto" === n || null == n) {
        var o = this.animationThreshold;
        if (r && i.getBandWidth() > o) return !0;
        if (a) {
          var s = Rc(t).seriesDataCount,
            l = i.getExtent();
          return Math.abs(l[0] - l[1]) / s > o
        }
        return !1
      }
      return n === !0
    },
    makeElOption: function() {},
    createPointerEl: function(t, e) {
      var n = e.pointer;
      if (n) {
        var i = Ow(t).pointerEl = new zv[n.type](Lw(e.pointer));
        t.add(i)
      }
    },
    createLabelEl: function(t, e, n, i) {
      if (e.label) {
        var r = Ow(t).labelEl = new xv(Lw(e.label));
        t.add(r), vd(r, i)
      }
    },
    updatePointerEl: function(t, e, n) {
      var i = Ow(t).pointerEl;
      i && (i.setStyle(e.pointer.style), n(i, {
        shape: e.pointer.shape
      }))
    },
    updateLabelEl: function(t, e, n, i) {
      var r = Ow(t).labelEl;
      r && (r.setStyle(e.label.style), n(r, {
        shape: e.label.shape,
        position: e.label.position
      }), vd(r, i))
    },
    _renderHandle: function(t) {
      if (!this._dragging && this.updateHandleTransform) {
        var e = this._axisPointerModel,
          n = this._api.getZr(),
          i = this._handle,
          r = e.getModel("handle"),
          a = e.get("status");
        if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void(this._handle = null);
        var o;
        this._handle || (o = !0, i = this._handle = Fa(r.get("icon"), {
          cursor: "move",
          draggable: !0,
          onmousemove: function(t) {
            gf(t.event)
          },
          onmousedown: Bw(this._onHandleDragMove, this, 0, 0),
          drift: Bw(this._onHandleDragMove, this),
          ondragend: Bw(this._onHandleDragEnd, this)
        }), n.add(i)), yd(i, e, !1);
        var s = ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
        i.setStyle(r.getItemStyle(null, s));
        var l = r.get("size");
        _(l) || (l = [l, l]), i.attr("scale", [l[0] / 2, l[1] / 2]), Hs(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, o)
      }
    },
    _moveHandleToValue: function(t, e) {
      pd(this._axisPointerModel, !e && this._moveAnimation, this._handle, md(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
    },
    _onHandleDragMove: function(t, e) {
      var n = this._handle;
      if (n) {
        this._dragging = !0;
        var i = this.updateHandleTransform(md(n), [t, e], this._axisModel, this._axisPointerModel);
        this._payloadInfo = i, n.stopAnimation(), n.attr(md(i)), Ow(n).lastProp = null, this._doDispatchAxisPointer()
      }
    },
    _doDispatchAxisPointer: function() {
      var t = this._handle;
      if (t) {
        var e = this._payloadInfo,
          n = this._axisModel;
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: e.cursorPoint[0],
          y: e.cursorPoint[1],
          tooltipOption: e.tooltipOption,
          axesInfo: [{
            axisDim: n.axis.dim,
            axisIndex: n.componentIndex
          }]
        })
      }
    },
    _onHandleDragEnd: function() {
      this._dragging = !1;
      var t = this._handle;
      if (t) {
        var e = this._axisPointerModel.get("value");
        this._moveHandleToValue(e), this._api.dispatchAction({
          type: "hideTip"
        })
      }
    },
    getHandleTransform: null,
    updateHandleTransform: null,
    clear: function(t) {
      this._lastValue = null, this._lastStatus = null;
      var e = t.getZr(),
        n = this._group,
        i = this._handle;
      e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
    },
    doClear: function() {},
    buildLabel: function(t, e, n) {
      return n = n || 0, {
        x: t[n],
        y: t[1 - n],
        width: e[n],
        height: e[1 - n]
      }
    }
  }, fd.prototype.constructor = fd, Ji(fd);
  var Ew = fd.extend({
      makeElOption: function(t, e, n, i, r) {
        var a = n.axis,
          o = a.grid,
          s = i.get("type"),
          l = Cd(o, a).getOtherAxis(a).getGlobalExtent(),
          u = a.toGlobalCoord(a.dataToCoord(e, !0));
        if (s && "none" !== s) {
          var h = xd(i),
            c = zw[s](a, u, l, h);
          c.style = h, t.graphicKey = c.type, t.pointer = c
        }
        var d = Wc(o.model, n);
        Md(e, t, d, n, i, r)
      },
      getHandleTransform: function(t, e, n) {
        var i = Wc(e.axis.grid.model, e, {
          labelInside: !1
        });
        return i.labelMargin = n.get("handle.margin"), {
          position: Sd(e.axis, t, i),
          rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
        }
      },
      updateHandleTransform: function(t, e, n) {
        var i = n.axis,
          r = i.grid,
          a = i.getGlobalExtent(!0),
          o = Cd(r, i).getOtherAxis(i).getGlobalExtent(),
          s = "x" === i.dim ? 0 : 1,
          l = t.position;
        l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
        var u = (o[1] + o[0]) / 2,
          h = [u, u];
        h[s] = l[s];
        var c = [{
          verticalAlign: "middle"
        }, {
          align: "center"
        }];
        return {
          position: l,
          rotation: t.rotation,
          cursorPoint: h,
          tooltipOption: c[s]
        }
      }
    }),
    zw = {
      line: function(t, e, n, i) {
        var r = Id([e, n[0]], [e, n[1]], kd(t));
        return ta({
          shape: r,
          style: i
        }), {
          type: "Line",
          shape: r
        }
      },
      shadow: function(t, e, n) {
        var i = Math.max(1, t.getBandWidth()),
          r = n[1] - n[0];
        return {
          type: "Rect",
          shape: Td([e - i / 2, n[0]], [i, r], kd(t))
        }
      }
    };
  lw.registerAxisPointerClass("CartesianAxisPointer", Ew), Gl(function(t) {
    if (t) {
      (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
      var e = t.axisPointer.link;
      e && !_(e) && (t.axisPointer.link = [e])
    }
  }), Wl(Zy.PROCESSOR.STATISTIC, function(t, e) {
    t.getComponent("axisPointer").coordSysAxesInfo = Ac(t, e)
  }), jl({
    type: "updateAxisPointer",
    event: "updateAxisPointer",
    update: ":updateAxisPointer"
  }, kw), Ql({
    type: "tooltip",
    dependencies: ["axisPointer"],
    defaultOption: {
      zlevel: 0,
      z: 60,
      show: !0,
      showContent: !0,
      trigger: "item",
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      renderMode: "auto",
      confine: !1,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: .4,
      enterable: !1,
      backgroundColor: "rgba(50,50,50,0.7)",
      borderColor: "#333",
      borderRadius: 4,
      borderWidth: 0,
      padding: 5,
      extraCssText: "",
      axisPointer: {
        type: "line",
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: {
          color: "#999",
          width: 1,
          type: "dashed",
          textStyle: {}
        }
      },
      textStyle: {
        color: "#fff",
        fontSize: 14
      }
    }
  });
  var Rw = f,
    Fw = ho,
    Nw = ["", "-webkit-", "-moz-", "-o-"],
    Hw = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
  Od.prototype = {
    constructor: Od,
    _enterable: !0,
    update: function() {
      var t = this._container,
        e = t.currentStyle || document.defaultView.getComputedStyle(t),
        n = t.style;
      "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative")
    },
    show: function(t) {
      clearTimeout(this._hideTimeout);
      var e = this.el;
      e.style.cssText = Hw + Pd(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0
    },
    setContent: function(t) {
      this.el.innerHTML = null == t ? "" : t
    },
    setEnterable: function(t) {
      this._enterable = t
    },
    getSize: function() {
      var t = this.el;
      return [t.clientWidth, t.clientHeight]
    },
    moveTo: function(t, e) {
      var n, i = this._zr;
      i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, e += n.offsetTop);
      var r = this.el.style;
      r.left = t + "px", r.top = e + "px", this._x = t, this._y = e
    },
    hide: function() {
      this.el.style.display = "none", this._show = !1
    },
    hideLater: function(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
    },
    isShow: function() {
      return this._show
    },
    getOuterSize: function() {
      var t = this.el.clientWidth,
        e = this.el.clientHeight;
      if (document.defaultView && document.defaultView.getComputedStyle) {
        var n = document.defaultView.getComputedStyle(this.el);
        n && (t += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10))
      }
      return {
        width: t,
        height: e
      }
    }
  }, Ld.prototype = {
    constructor: Ld,
    _enterable: !0,
    update: function() {},
    show: function() {
      this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), this._show = !0
    },
    setContent: function(t, e, n) {
      this.el && this._zr.remove(this.el);
      for (var i = {}, r = t, a = "{marker", o = "|}", s = r.indexOf(a); s >= 0;) {
        var l = r.indexOf(o),
          u = r.substr(s + a.length, l - s - a.length);
        i["marker" + u] = u.indexOf("sub") > -1 ? {
          textWidth: 4,
          textHeight: 4,
          textBorderRadius: 2,
          textBackgroundColor: e[u],
          textOffset: [3, 0]
        } : {
          textWidth: 10,
          textHeight: 10,
          textBorderRadius: 5,
          textBackgroundColor: e[u]
        }, r = r.substr(l + 1), s = r.indexOf("{marker")
      }
      this.el = new uv({
        style: {
          rich: i,
          text: t,
          textLineHeight: 20,
          textBackgroundColor: n.get("backgroundColor"),
          textBorderRadius: n.get("borderRadius"),
          textFill: n.get("textStyle.color"),
          textPadding: n.get("padding")
        },
        z: n.get("z")
      }), this._zr.add(this.el);
      var h = this;
      this.el.on("mouseover", function() {
        h._enterable && (clearTimeout(h._hideTimeout), h._show = !0), h._inContent = !0
      }), this.el.on("mouseout", function() {
        h._enterable && h._show && h.hideLater(h._hideDelay), h._inContent = !1
      })
    },
    setEnterable: function(t) {
      this._enterable = t
    },
    getSize: function() {
      var t = this.el.getBoundingRect();
      return [t.width, t.height]
    },
    moveTo: function(t, e) {
      this.el && this.el.attr("position", [t, e])
    },
    hide: function() {
      this.el.hide(), this._show = !1
    },
    hideLater: function(t) {
      !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(y(this.hide, this), t)) : this.hide())
    },
    isShow: function() {
      return this._show
    },
    getOuterSize: function() {
      return this.getSize()
    }
  };
  var Vw = y,
    Gw = f,
    Ww = qa,
    Xw = new xv({
      shape: {
        x: -1,
        y: -1,
        width: 2,
        height: 2
      }
    });
  Jl({
    type: "tooltip",
    init: function(t, e) {
      if (!Wd.node) {
        var n = t.getComponent("tooltip"),
          i = n.get("renderMode");
        this._renderMode = $i(i);
        var r;
        "html" === this._renderMode ? (r = new Od(e.getDom(), e), this._newLine = "<br/>") : (r = new Ld(e), this._newLine = "\n"), this._tooltipContent = r
      }
    },
    render: function(t, e, n) {
      if (!Wd.node) {
        this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
        var i = this._tooltipContent;
        i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
      }
    },
    _initGlobalListener: function() {
      var t = this._tooltipModel,
        e = t.get("triggerOn");
      od("itemTooltip", this._api, Vw(function(t, n, i) {
        "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i))
      }, this))
    },
    _keepShow: function() {
      var t = this._tooltipModel,
        e = this._ecModel,
        n = this._api;
      if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
        var i = this;
        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
          i.manuallyShowTip(t, e, n, {
            x: i._lastX,
            y: i._lastY
          })
        })
      }
    },
    manuallyShowTip: function(t, e, n, i) {
      if (i.from !== this.uid && !Wd.node) {
        var r = Ed(i, n);
        this._ticket = "";
        var a = i.dataByCoordSys;
        if (i.tooltip && null != i.x && null != i.y) {
          var o = Xw;
          o.position = [i.x, i.y], o.update(), o.tooltip = i.tooltip, this._tryShow({
            offsetX: i.x,
            offsetY: i.y,
            target: o
          }, r)
        } else if (a) this._tryShow({
          offsetX: i.x,
          offsetY: i.y,
          position: i.position,
          event: {},
          dataByCoordSys: i.dataByCoordSys,
          tooltipOption: i.tooltipOption
        }, r);
        else if (null != i.seriesIndex) {
          if (this._manuallyAxisShowTip(t, e, n, i)) return;
          var s = Mw(i, e),
            l = s.point[0],
            u = s.point[1];
          null != l && null != u && this._tryShow({
            offsetX: l,
            offsetY: u,
            position: i.position,
            target: s.el,
            event: {}
          }, r)
        } else null != i.x && null != i.y && (n.dispatchAction({
          type: "updateAxisPointer",
          x: i.x,
          y: i.y
        }), this._tryShow({
          offsetX: i.x,
          offsetY: i.y,
          position: i.position,
          target: n.getZr().findHover(i.x, i.y).target,
          event: {}
        }, r))
      }
    },
    manuallyHideTip: function(t, e, n, i) {
      var r = this._tooltipContent;
      !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = null, i.from !== this.uid && this._hide(Ed(i, n))
    },
    _manuallyAxisShowTip: function(t, e, n, i) {
      var r = i.seriesIndex,
        a = i.dataIndex,
        o = e.getComponent("axisPointer").coordSysAxesInfo;
      if (null != r && null != a && null != o) {
        var s = e.getSeriesByIndex(r);
        if (s) {
          var l = s.getData(),
            t = Bd([l.getItemModel(a), s, (s.coordinateSystem || {}).model, t]);
          if ("axis" === t.get("trigger")) return n.dispatchAction({
            type: "updateAxisPointer",
            seriesIndex: r,
            dataIndex: a,
            position: i.position
          }), !0
        }
      }
    },
    _tryShow: function(t, e) {
      var n = t.target,
        i = this._tooltipModel;
      if (i) {
        this._lastX = t.offsetX, this._lastY = t.offsetY;
        var r = t.dataByCoordSys;
        r && r.length ? this._showAxisTooltip(r, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
      }
    },
    _showOrMove: function(t, e) {
      var n = t.get("showDelay");
      e = y(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
    },
    _showAxisTooltip: function(t, e) {
      var n = this._ecModel,
        i = this._tooltipModel,
        a = [e.offsetX, e.offsetY],
        o = [],
        s = [],
        l = Bd([e.tooltipOption, i]),
        u = this._renderMode,
        h = this._newLine,
        c = {};
      Gw(t, function(t) {
        Gw(t.dataByAxis, function(t) {
          var e = n.getComponent(t.axisDim + "Axis", t.axisIndex),
            i = t.value,
            a = [];
          if (e && null != i) {
            var l = bd(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
            f(t.seriesDataIndices, function(o) {
              var h = n.getSeriesByIndex(o.seriesIndex),
                d = o.dataIndexInside,
                f = h && h.getDataParams(d);
              if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = ih(e.axis, i), f.axisValueLabel = l, f) {
                s.push(f);
                var p, g = h.formatTooltip(d, !0, null, u);
                if (S(g)) {
                  p = g.html;
                  var v = g.markers;
                  r(c, v)
                } else p = g;
                a.push(p)
              }
            });
            var d = l;
            o.push("html" !== u ? a.join(h) : (d ? co(d) + h : "") + a.join(h))
          }
        })
      }, this), o.reverse(), o = o.join(this._newLine + this._newLine);
      var d = e.position;
      this._showOrMove(l, function() {
        this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c)
      })
    },
    _showSeriesItemTooltip: function(t, e, n) {
      var i = this._ecModel,
        r = e.seriesIndex,
        a = i.getSeriesByIndex(r),
        o = e.dataModel || a,
        s = e.dataIndex,
        l = e.dataType,
        u = o.getData(),
        h = Bd([u.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel]),
        c = h.get("trigger");
      if (null == c || "item" === c) {
        var d, f, p = o.getDataParams(s, l),
          g = o.formatTooltip(s, !1, l, this._renderMode);
        S(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
        var v = "item_" + o.name + "_" + s;
        this._showOrMove(h, function() {
          this._showTooltipContent(h, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f)
        }), n({
          type: "showTip",
          dataIndexInside: s,
          dataIndex: u.getRawIndex(s),
          seriesIndex: r,
          from: this.uid
        })
      }
    },
    _showComponentItemTooltip: function(t, e, n) {
      var i = e.tooltip;
      if ("string" == typeof i) {
        var r = i;
        i = {
          content: r,
          formatter: r
        }
      }
      var a = new Na(i, this._tooltipModel, this._ecModel),
        o = a.get("content"),
        s = Math.random();
      this._showOrMove(a, function() {
        this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e)
      }), n({
        type: "showTip",
        from: this.uid
      })
    },
    _showTooltipContent: function(t, e, n, i, r, a, o, s, l) {
      if (this._ticket = "", t.get("showContent") && t.get("show")) {
        var u = this._tooltipContent,
          h = t.get("formatter");
        o = o || t.get("position");
        var c = e;
        if (h && "string" == typeof h) c = fo(h, n, !0);
        else if ("function" == typeof h) {
          var d = Vw(function(e, i) {
            e === this._ticket && (u.setContent(i, l, t), this._updatePosition(t, o, r, a, u, n, s))
          }, this);
          this._ticket = i, c = h(n, i, d)
        }
        u.setContent(c, l, t), u.show(t), this._updatePosition(t, o, r, a, u, n, s)
      }
    },
    _updatePosition: function(t, e, n, i, r, a, o) {
      var s = this._api.getWidth(),
        l = this._api.getHeight();
      e = e || t.get("position");
      var u = r.getSize(),
        h = t.get("align"),
        c = t.get("verticalAlign"),
        d = o && o.getBoundingRect().clone();
      if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([n, i], a, r.el, d, {
          viewSize: [s, l],
          contentSize: u.slice()
        })), _(e)) n = Ww(e[0], s), i = Ww(e[1], l);
      else if (S(e)) {
        e.width = u[0], e.height = u[1];
        var f = _o(e, {
          width: s,
          height: l
        });
        n = f.x, i = f.y, h = null, c = null
      } else if ("string" == typeof e && o) {
        var p = Fd(e, d, u);
        n = p[0], i = p[1]
      } else {
        var p = zd(n, i, r, s, l, h ? null : 20, c ? null : 20);
        n = p[0], i = p[1]
      }
      if (h && (n -= Nd(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= Nd(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), t.get("confine")) {
        var p = Rd(n, i, r, s, l);
        n = p[0], i = p[1]
      }
      r.moveTo(n, i)
    },
    _updateContentNotChangedOnAxis: function(t) {
      var e = this._lastDataByCoordSys,
        n = !!e && e.length === t.length;
      return n && Gw(e, function(e, i) {
        var r = e.dataByAxis || {},
          a = t[i] || {},
          o = a.dataByAxis || [];
        n &= r.length === o.length, n && Gw(r, function(t, e) {
          var i = o[e] || {},
            r = t.seriesDataIndices || [],
            a = i.seriesDataIndices || [];
          n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === a.length, n && Gw(r, function(t, e) {
            var i = a[e];
            n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
          })
        })
      }), this._lastDataByCoordSys = t, !!n
    },
    _hide: function(t) {
      this._lastDataByCoordSys = null, t({
        type: "hideTip",
        from: this.uid
      })
    },
    dispose: function(t, e) {
      Wd.node || (this._tooltipContent.hide(), dd("itemTooltip", e))
    }
  }), jl({
    type: "showTip",
    event: "showTip",
    update: "tooltip:manuallyShowTip"
  }, function() {}), jl({
    type: "hideTip",
    event: "hideTip",
    update: "tooltip:manuallyHideTip"
  }, function() {}), t.version = Ny, t.dependencies = Hy, t.PRIORITY = Zy, t.init = El, t.connect = zl, t.disConnect = Rl, t.disconnect = gx, t.dispose = Fl, t.getInstanceByDom = Nl, t.getInstanceById = Hl, t.registerTheme = Vl, t.registerPreprocessor = Gl, t.registerProcessor = Wl, t.registerPostUpdate = Xl, t.registerAction = jl, t.registerCoordinateSystem = Yl, t.getCoordinateSystemDimensions = ql, t.registerLayout = Ul, t.registerVisual = Zl, t.registerLoading = Kl, t.extendComponentModel = Ql, t.extendComponentView = Jl, t.extendSeriesModel = tu, t.extendChartView = eu, t.setCanvasCreator = nu, t.registerMap = iu, t.getMap = ru, t.dataTool = vx, t.zrender = Yp, t.number = qv, t.format = em, t.throttle = Ns, t.helper = g_, t.matrix = _f, t.vector = hf, t.color = Nf, t.parseGeoJSON = m_, t.parseGeoJson = w_, t.util = b_, t.graphic = S_, t.List = Cx, t.Model = Na, t.Axis = __, t.env = Wd
});