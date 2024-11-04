/* jQuery PowerTip Plugin v1.1.0 http://stevenbenner.github.com/jquery-powertip/ Copyright 2012 Steven Benner (http://stevenbenner.com/) Released under the MIT license. <https://raw.github.com/stevenbenner/jquery-powertip/master/LICENSE.txt> */ (function (
  a,
  b
) {
  function cy(a) {
    return f.isWindow(a)
      ? a
      : a.nodeType === 9
      ? a.defaultView || a.parentWindow
      : !1;
  }
  function cu(a) {
    if (!cj[a]) {
      var b = c.body,
        d = f("<" + a + ">").appendTo(b),
        e = d.css("display");
      d.remove();
      if (e === "none" || e === "") {
        ck ||
          ((ck = c.createElement("iframe")),
          (ck.frameBorder = ck.width = ck.height = 0)),
          b.appendChild(ck);
        if (!cl || !ck.createElement)
          (cl = (ck.contentWindow || ck.contentDocument).document),
            cl.write(
              (f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"
            ),
            cl.close();
        (d = cl.createElement(a)),
          cl.body.appendChild(d),
          (e = f.css(d, "display")),
          b.removeChild(ck);
      }
      cj[a] = e;
    }
    return cj[a];
  }
  function ct(a, b) {
    var c = {};
    f.each(cp.concat.apply([], cp.slice(0, b)), function () {
      c[this] = a;
    });
    return c;
  }
  function cs() {
    cq = b;
  }
  function cr() {
    setTimeout(cs, 0);
    return (cq = f.now());
  }
  function ci() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  function ch() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function cb(a, c) {
    a.dataFilter && (c = a.dataFilter(c, a.dataType));
    var d = a.dataTypes,
      e = {},
      g,
      h,
      i = d.length,
      j,
      k = d[0],
      l,
      m,
      n,
      o,
      p;
    for (g = 1; g < i; g++) {
      if (g === 1)
        for (h in a.converters)
          typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
      (l = k), (k = d[g]);
      if (k === "*") k = l;
      else if (l !== "*" && l !== k) {
        (m = l + " " + k), (n = e[m] || e["* " + k]);
        if (!n) {
          p = b;
          for (o in e) {
            j = o.split(" ");
            if (j[0] === l || j[0] === "*") {
              p = e[j[1] + " " + k];
              if (p) {
                (o = e[o]), o === !0 ? (n = p) : p === !0 && (n = o);
                break;
              }
            }
          }
        }
        !n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
          n !== !0 && (c = n ? n(c) : p(o(c)));
      }
    }
    return c;
  }
  function ca(a, c, d) {
    var e = a.contents,
      f = a.dataTypes,
      g = a.responseFields,
      h,
      i,
      j,
      k;
    for (i in g) i in d && (c[g[i]] = d[i]);
    while (f[0] === "*")
      f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
    if (h)
      for (i in e)
        if (e[i] && e[i].test(h)) {
          f.unshift(i);
          break;
        }
    if (f[0] in d) j = f[0];
    else {
      for (i in d) {
        if (!f[0] || a.converters[i + " " + f[0]]) {
          j = i;
          break;
        }
        k || (k = i);
      }
      j = j || k;
    }
    if (j) {
      j !== f[0] && f.unshift(j);
      return d[j];
    }
  }
  function b_(a, b, c, d) {
    if (f.isArray(b))
      f.each(b, function (b, e) {
        c || bD.test(a)
          ? d(a, e)
          : b_(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d);
      });
    else if (!c && f.type(b) === "object")
      for (var e in b) b_(a + "[" + e + "]", b[e], c, d);
    else d(a, b);
  }
  function b$(a, c) {
    var d,
      e,
      g = f.ajaxSettings.flatOptions || {};
    for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
    e && f.extend(!0, a, e);
  }
  function bZ(a, c, d, e, f, g) {
    (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
    var h = a[f],
      i = 0,
      j = h ? h.length : 0,
      k = a === bS,
      l;
    for (; i < j && (k || !l); i++)
      (l = h[i](c, d, e)),
        typeof l == "string" &&
          (!k || g[l]
            ? (l = b)
            : (c.dataTypes.unshift(l), (l = bZ(a, c, d, e, l, g))));
    (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
    return l;
  }
  function bY(a) {
    return function (b, c) {
      typeof b != "string" && ((c = b), (b = "*"));
      if (f.isFunction(c)) {
        var d = b.toLowerCase().split(bO),
          e = 0,
          g = d.length,
          h,
          i,
          j;
        for (; e < g; e++)
          (h = d[e]),
            (j = /^\+/.test(h)),
            j && (h = h.substr(1) || "*"),
            (i = a[h] = a[h] || []),
            i[j ? "unshift" : "push"](c);
      }
    };
  }
  function bB(a, b, c) {
    var d = b === "width" ? a.offsetWidth : a.offsetHeight,
      e = b === "width" ? 1 : 0,
      g = 4;
    if (d > 0) {
      if (c !== "border")
        for (; e < g; e += 2)
          c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0),
            c === "margin"
              ? (d += parseFloat(f.css(a, c + bx[e])) || 0)
              : (d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0);
      return d + "px";
    }
    d = by(a, b);
    if (d < 0 || d == null) d = a.style[b];
    if (bt.test(d)) return d;
    d = parseFloat(d) || 0;
    if (c)
      for (; e < g; e += 2)
        (d += parseFloat(f.css(a, "padding" + bx[e])) || 0),
          c !== "padding" &&
            (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0),
          c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
    return d + "px";
  }
  function bo(a) {
    var b = c.createElement("div");
    bh.appendChild(b), (b.innerHTML = a.outerHTML);
    return b.firstChild;
  }
  function bn(a) {
    var b = (a.nodeName || "").toLowerCase();
    b === "input"
      ? bm(a)
      : b !== "script" &&
        typeof a.getElementsByTagName != "undefined" &&
        f.grep(a.getElementsByTagName("input"), bm);
  }
  function bm(a) {
    if (a.type === "checkbox" || a.type === "radio")
      a.defaultChecked = a.checked;
  }
  function bl(a) {
    return typeof a.getElementsByTagName != "undefined"
      ? a.getElementsByTagName("*")
      : typeof a.querySelectorAll != "undefined"
      ? a.querySelectorAll("*")
      : [];
  }
  function bk(a, b) {
    var c;
    b.nodeType === 1 &&
      (b.clearAttributes && b.clearAttributes(),
      b.mergeAttributes && b.mergeAttributes(a),
      (c = b.nodeName.toLowerCase()),
      c === "object"
        ? (b.outerHTML = a.outerHTML)
        : c !== "input" || (a.type !== "checkbox" && a.type !== "radio")
        ? c === "option"
          ? (b.selected = a.defaultSelected)
          : c === "input" || c === "textarea"
          ? (b.defaultValue = a.defaultValue)
          : c === "script" && b.text !== a.text && (b.text = a.text)
        : (a.checked && (b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value)),
      b.removeAttribute(f.expando),
      b.removeAttribute("_submit_attached"),
      b.removeAttribute("_change_attached"));
  }
  function bj(a, b) {
    if (b.nodeType === 1 && !!f.hasData(a)) {
      var c,
        d,
        e,
        g = f._data(a),
        h = f._data(b, g),
        i = g.events;
      if (i) {
        delete h.handle, (h.events = {});
        for (c in i)
          for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d]);
      }
      h.data && (h.data = f.extend({}, h.data));
    }
  }
  function bi(a, b) {
    return f.nodeName(a, "table")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function U(a) {
    var b = V.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  function T(a, b, c) {
    b = b || 0;
    if (f.isFunction(b))
      return f.grep(a, function (a, d) {
        var e = !!b.call(a, d, a);
        return e === c;
      });
    if (b.nodeType)
      return f.grep(a, function (a, d) {
        return (a === b) === c;
      });
    if (typeof b == "string") {
      var d = f.grep(a, function (a) {
        return a.nodeType === 1;
      });
      if (O.test(b)) return f.filter(b, d, !c);
      b = f.filter(b, d);
    }
    return f.grep(a, function (a, d) {
      return f.inArray(a, b) >= 0 === c;
    });
  }
  function S(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11;
  }
  function K() {
    return !0;
  }
  function J() {
    return !1;
  }
  function n(a, b, c) {
    var d = b + "defer",
      e = b + "queue",
      g = b + "mark",
      h = f._data(a, d);
    h &&
      (c === "queue" || !f._data(a, e)) &&
      (c === "mark" || !f._data(a, g)) &&
      setTimeout(function () {
        !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire());
      }, 0);
  }
  function m(a) {
    for (var b in a) {
      if (b === "data" && f.isEmptyObject(a[b])) continue;
      if (b !== "toJSON") return !1;
    }
    return !0;
  }
  function l(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = "data-" + c.replace(k, "-$1").toLowerCase();
      d = a.getAttribute(e);
      if (typeof d == "string") {
        try {
          d =
            d === "true"
              ? !0
              : d === "false"
              ? !1
              : d === "null"
              ? null
              : f.isNumeric(d)
              ? +d
              : j.test(d)
              ? f.parseJSON(d)
              : d;
        } catch (g) {}
        f.data(a, c, d);
      } else d = b;
    }
    return d;
  }
  function h(a) {
    var b = (g[a] = {}),
      c,
      d;
    a = a.split(/\s+/);
    for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
    return b;
  }
  var c = a.document,
    d = a.navigator,
    e = a.location,
    f = (function () {
      function J() {
        if (!e.isReady) {
          try {
            c.documentElement.doScroll("left");
          } catch (a) {
            setTimeout(J, 1);
            return;
          }
          e.ready();
        }
      }
      var e = function (a, b) {
          return new e.fn.init(a, b, h);
        },
        f = a.jQuery,
        g = a.$,
        h,
        i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        j = /\S/,
        k = /^\s+/,
        l = /\s+$/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = /-([a-z]|[0-9])/gi,
        w = /^-ms-/,
        x = function (a, b) {
          return (b + "").toUpperCase();
        },
        y = d.userAgent,
        z,
        A,
        B,
        C = Object.prototype.toString,
        D = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        F = Array.prototype.slice,
        G = String.prototype.trim,
        H = Array.prototype.indexOf,
        I = {};
      (e.fn = e.prototype =
        {
          constructor: e,
          init: function (a, d, f) {
            var g, h, j, k;
            if (!a) return this;
            if (a.nodeType) {
              (this.context = this[0] = a), (this.length = 1);
              return this;
            }
            if (a === "body" && !d && c.body) {
              (this.context = c),
                (this[0] = c.body),
                (this.selector = a),
                (this.length = 1);
              return this;
            }
            if (typeof a == "string") {
              a.charAt(0) !== "<" ||
              a.charAt(a.length - 1) !== ">" ||
              a.length < 3
                ? (g = i.exec(a))
                : (g = [null, a, null]);
              if (g && (g[1] || !d)) {
                if (g[1]) {
                  (d = d instanceof e ? d[0] : d),
                    (k = d ? d.ownerDocument || d : c),
                    (j = m.exec(a)),
                    j
                      ? e.isPlainObject(d)
                        ? ((a = [c.createElement(j[1])]),
                          e.fn.attr.call(a, d, !0))
                        : (a = [k.createElement(j[1])])
                      : ((j = e.buildFragment([g[1]], [k])),
                        (a = (j.cacheable ? e.clone(j.fragment) : j.fragment)
                          .childNodes));
                  return e.merge(this, a);
                }
                h = c.getElementById(g[2]);
                if (h && h.parentNode) {
                  if (h.id !== g[2]) return f.find(a);
                  (this.length = 1), (this[0] = h);
                }
                (this.context = c), (this.selector = a);
                return this;
              }
              return !d || d.jquery
                ? (d || f).find(a)
                : this.constructor(d).find(a);
            }
            if (e.isFunction(a)) return f.ready(a);
            a.selector !== b &&
              ((this.selector = a.selector), (this.context = a.context));
            return e.makeArray(a, this);
          },
          selector: "",
          jquery: "1.7.2",
          length: 0,
          size: function () {
            return this.length;
          },
          toArray: function () {
            return F.call(this, 0);
          },
          get: function (a) {
            return a == null
              ? this.toArray()
              : a < 0
              ? this[this.length + a]
              : this[a];
          },
          pushStack: function (a, b, c) {
            var d = this.constructor();
            e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
              (d.prevObject = this),
              (d.context = this.context),
              b === "find"
                ? (d.selector = this.selector + (this.selector ? " " : "") + c)
                : b && (d.selector = this.selector + "." + b + "(" + c + ")");
            return d;
          },
          each: function (a, b) {
            return e.each(this, a, b);
          },
          ready: function (a) {
            e.bindReady(), A.add(a);
            return this;
          },
          eq: function (a) {
            a = +a;
            return a === -1 ? this.slice(a) : this.slice(a, a + 1);
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          slice: function () {
            return this.pushStack(
              F.apply(this, arguments),
              "slice",
              F.call(arguments).join(",")
            );
          },
          map: function (a) {
            return this.pushStack(
              e.map(this, function (b, c) {
                return a.call(b, c, b);
              })
            );
          },
          end: function () {
            return this.prevObject || this.constructor(null);
          },
          push: E,
          sort: [].sort,
          splice: [].splice,
        }),
        (e.fn.init.prototype = e.fn),
        (e.extend = e.fn.extend =
          function () {
            var a,
              c,
              d,
              f,
              g,
              h,
              i = arguments[0] || {},
              j = 1,
              k = arguments.length,
              l = !1;
            typeof i == "boolean" &&
              ((l = i), (i = arguments[1] || {}), (j = 2)),
              typeof i != "object" && !e.isFunction(i) && (i = {}),
              k === j && ((i = this), --j);
            for (; j < k; j++)
              if ((a = arguments[j]) != null)
                for (c in a) {
                  (d = i[c]), (f = a[c]);
                  if (i === f) continue;
                  l && f && (e.isPlainObject(f) || (g = e.isArray(f)))
                    ? (g
                        ? ((g = !1), (h = d && e.isArray(d) ? d : []))
                        : (h = d && e.isPlainObject(d) ? d : {}),
                      (i[c] = e.extend(l, h, f)))
                    : f !== b && (i[c] = f);
                }
            return i;
          }),
        e.extend({
          noConflict: function (b) {
            a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
            return e;
          },
          isReady: !1,
          readyWait: 1,
          holdReady: function (a) {
            a ? e.readyWait++ : e.ready(!0);
          },
          ready: function (a) {
            if ((a === !0 && !--e.readyWait) || (a !== !0 && !e.isReady)) {
              if (!c.body) return setTimeout(e.ready, 1);
              e.isReady = !0;
              if (a !== !0 && --e.readyWait > 0) return;
              A.fireWith(c, [e]),
                e.fn.trigger && e(c).trigger("ready").off("ready");
            }
          },
          bindReady: function () {
            if (!A) {
              A = e.Callbacks("once memory");
              if (c.readyState === "complete") return setTimeout(e.ready, 1);
              if (c.addEventListener)
                c.addEventListener("DOMContentLoaded", B, !1),
                  a.addEventListener("load", e.ready, !1);
              else if (c.attachEvent) {
                c.attachEvent("onreadystatechange", B),
                  a.attachEvent("onload", e.ready);
                var b = !1;
                try {
                  b = a.frameElement == null;
                } catch (d) {}
                c.documentElement.doScroll && b && J();
              }
            }
          },
          isFunction: function (a) {
            return e.type(a) === "function";
          },
          isArray:
            Array.isArray ||
            function (a) {
              return e.type(a) === "array";
            },
          isWindow: function (a) {
            return a != null && a == a.window;
          },
          isNumeric: function (a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
          },
          type: function (a) {
            return a == null ? String(a) : I[C.call(a)] || "object";
          },
          isPlainObject: function (a) {
            if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))
              return !1;
            try {
              if (
                a.constructor &&
                !D.call(a, "constructor") &&
                !D.call(a.constructor.prototype, "isPrototypeOf")
              )
                return !1;
            } catch (c) {
              return !1;
            }
            var d;
            for (d in a);
            return d === b || D.call(a, d);
          },
          isEmptyObject: function (a) {
            for (var b in a) return !1;
            return !0;
          },
          error: function (a) {
            throw new Error(a);
          },
          parseJSON: function (b) {
            if (typeof b != "string" || !b) return null;
            b = e.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (n.test(b.replace(o, "@").replace(p, "]").replace(q, "")))
              return new Function("return " + b)();
            e.error("Invalid JSON: " + b);
          },
          parseXML: function (c) {
            if (typeof c != "string" || !c) return null;
            var d, f;
            try {
              a.DOMParser
                ? ((f = new DOMParser()),
                  (d = f.parseFromString(c, "text/xml")))
                : ((d = new ActiveXObject("Microsoft.XMLDOM")),
                  (d.async = "false"),
                  d.loadXML(c));
            } catch (g) {
              d = b;
            }
            (!d ||
              !d.documentElement ||
              d.getElementsByTagName("parsererror").length) &&
              e.error("Invalid XML: " + c);
            return d;
          },
          noop: function () {},
          globalEval: function (b) {
            b &&
              j.test(b) &&
              (
                a.execScript ||
                function (b) {
                  a.eval.call(a, b);
                }
              )(b);
          },
          camelCase: function (a) {
            return a.replace(w, "ms-").replace(v, x);
          },
          nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
          },
          each: function (a, c, d) {
            var f,
              g = 0,
              h = a.length,
              i = h === b || e.isFunction(a);
            if (d)
              if (i)
                for (f in a) {
                  if (c.apply(a[f], d) === !1) break;
                }
              else
                for (; g < h; ) {
                  if (c.apply(a[g++], d) === !1) break;
                }
            else if (i)
              for (f in a) {
                if (c.call(a[f], f, a[f]) === !1) break;
              }
            else for (; g < h; ) if (c.call(a[g], g, a[g++]) === !1) break;
            return a;
          },
          trim: G
            ? function (a) {
                return a == null ? "" : G.call(a);
              }
            : function (a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "");
              },
          makeArray: function (a, b) {
            var c = b || [];
            if (a != null) {
              var d = e.type(a);
              a.length == null ||
              d === "string" ||
              d === "function" ||
              d === "regexp" ||
              e.isWindow(a)
                ? E.call(c, a)
                : e.merge(c, a);
            }
            return c;
          },
          inArray: function (a, b, c) {
            var d;
            if (b) {
              if (H) return H.call(b, a, c);
              (d = b.length), (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0);
              for (; c < d; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
          },
          merge: function (a, c) {
            var d = a.length,
              e = 0;
            if (typeof c.length == "number")
              for (var f = c.length; e < f; e++) a[d++] = c[e];
            else while (c[e] !== b) a[d++] = c[e++];
            a.length = d;
            return a;
          },
          grep: function (a, b, c) {
            var d = [],
              e;
            c = !!c;
            for (var f = 0, g = a.length; f < g; f++)
              (e = !!b(a[f], f)), c !== e && d.push(a[f]);
            return d;
          },
          map: function (a, c, d) {
            var f,
              g,
              h = [],
              i = 0,
              j = a.length,
              k =
                a instanceof e ||
                (j !== b &&
                  typeof j == "number" &&
                  ((j > 0 && a[0] && a[j - 1]) || j === 0 || e.isArray(a)));
            if (k)
              for (; i < j; i++)
                (f = c(a[i], i, d)), f != null && (h[h.length] = f);
            else
              for (g in a) (f = c(a[g], g, d)), f != null && (h[h.length] = f);
            return h.concat.apply([], h);
          },
          guid: 1,
          proxy: function (a, c) {
            if (typeof c == "string") {
              var d = a[c];
              (c = a), (a = d);
            }
            if (!e.isFunction(a)) return b;
            var f = F.call(arguments, 2),
              g = function () {
                return a.apply(c, f.concat(F.call(arguments)));
              };
            g.guid = a.guid = a.guid || g.guid || e.guid++;
            return g;
          },
          access: function (a, c, d, f, g, h, i) {
            var j,
              k = d == null,
              l = 0,
              m = a.length;
            if (d && typeof d == "object") {
              for (l in d) e.access(a, c, l, d[l], 1, h, f);
              g = 1;
            } else if (f !== b) {
              (j = i === b && e.isFunction(f)),
                k &&
                  (j
                    ? ((j = c),
                      (c = function (a, b, c) {
                        return j.call(e(a), c);
                      }))
                    : (c.call(a, f), (c = null)));
              if (c)
                for (; l < m; l++)
                  c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
              g = 1;
            }
            return g ? a : k ? c.call(a) : m ? c(a[0], d) : h;
          },
          now: function () {
            return new Date().getTime();
          },
          uaMatch: function (a) {
            a = a.toLowerCase();
            var b =
              r.exec(a) ||
              s.exec(a) ||
              t.exec(a) ||
              (a.indexOf("compatible") < 0 && u.exec(a)) ||
              [];
            return { browser: b[1] || "", version: b[2] || "0" };
          },
          sub: function () {
            function a(b, c) {
              return new a.fn.init(b, c);
            }
            e.extend(!0, a, this),
              (a.superclass = this),
              (a.fn = a.prototype = this()),
              (a.fn.constructor = a),
              (a.sub = this.sub),
              (a.fn.init = function (d, f) {
                f && f instanceof e && !(f instanceof a) && (f = a(f));
                return e.fn.init.call(this, d, f, b);
              }),
              (a.fn.init.prototype = a.fn);
            var b = a(c);
            return a;
          },
          browser: {},
        }),
        e.each(
          "Boolean Number String Function Array Date RegExp Object".split(" "),
          function (a, b) {
            I["[object " + b + "]"] = b.toLowerCase();
          }
        ),
        (z = e.uaMatch(y)),
        z.browser &&
          ((e.browser[z.browser] = !0), (e.browser.version = z.version)),
        e.browser.webkit && (e.browser.safari = !0),
        j.test(" ") && ((k = /^[\s\xA0]+/), (l = /[\s\xA0]+$/)),
        (h = e(c)),
        c.addEventListener
          ? (B = function () {
              c.removeEventListener("DOMContentLoaded", B, !1), e.ready();
            })
          : c.attachEvent &&
            (B = function () {
              c.readyState === "complete" &&
                (c.detachEvent("onreadystatechange", B), e.ready());
            });
      return e;
    })(),
    g = {};
  f.Callbacks = function (a) {
    a = a ? g[a] || h(a) : {};
    var c = [],
      d = [],
      e,
      i,
      j,
      k,
      l,
      m,
      n = function (b) {
        var d, e, g, h, i;
        for (d = 0, e = b.length; d < e; d++)
          (g = b[d]),
            (h = f.type(g)),
            h === "array"
              ? n(g)
              : h === "function" && (!a.unique || !p.has(g)) && c.push(g);
      },
      o = function (b, f) {
        (f = f || []),
          (e = !a.memory || [b, f]),
          (i = !0),
          (j = !0),
          (m = k || 0),
          (k = 0),
          (l = c.length);
        for (; c && m < l; m++)
          if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
            e = !0;
            break;
          }
        (j = !1),
          c &&
            (a.once
              ? e === !0
                ? p.disable()
                : (c = [])
              : d && d.length && ((e = d.shift()), p.fireWith(e[0], e[1])));
      },
      p = {
        add: function () {
          if (c) {
            var a = c.length;
            n(arguments),
              j ? (l = c.length) : e && e !== !0 && ((k = a), o(e[0], e[1]));
          }
          return this;
        },
        remove: function () {
          if (c) {
            var b = arguments,
              d = 0,
              e = b.length;
            for (; d < e; d++)
              for (var f = 0; f < c.length; f++)
                if (b[d] === c[f]) {
                  j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                  if (a.unique) break;
                }
          }
          return this;
        },
        has: function (a) {
          if (c) {
            var b = 0,
              d = c.length;
            for (; b < d; b++) if (a === c[b]) return !0;
          }
          return !1;
        },
        empty: function () {
          c = [];
          return this;
        },
        disable: function () {
          c = d = e = b;
          return this;
        },
        disabled: function () {
          return !c;
        },
        lock: function () {
          (d = b), (!e || e === !0) && p.disable();
          return this;
        },
        locked: function () {
          return !d;
        },
        fireWith: function (b, c) {
          d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
          return this;
        },
        fire: function () {
          p.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!i;
        },
      };
    return p;
  };
  var i = [].slice;
  f.extend({
    Deferred: function (a) {
      var b = f.Callbacks("once memory"),
        c = f.Callbacks("once memory"),
        d = f.Callbacks("memory"),
        e = "pending",
        g = { resolve: b, reject: c, notify: d },
        h = {
          done: b.add,
          fail: c.add,
          progress: d.add,
          state: function () {
            return e;
          },
          isResolved: b.fired,
          isRejected: c.fired,
          then: function (a, b, c) {
            i.done(a).fail(b).progress(c);
            return this;
          },
          always: function () {
            i.done.apply(i, arguments).fail.apply(i, arguments);
            return this;
          },
          pipe: function (a, b, c) {
            return f
              .Deferred(function (d) {
                f.each(
                  {
                    done: [a, "resolve"],
                    fail: [b, "reject"],
                    progress: [c, "notify"],
                  },
                  function (a, b) {
                    var c = b[0],
                      e = b[1],
                      g;
                    f.isFunction(c)
                      ? i[a](function () {
                          (g = c.apply(this, arguments)),
                            g && f.isFunction(g.promise)
                              ? g.promise().then(d.resolve, d.reject, d.notify)
                              : d[e + "With"](this === i ? d : this, [g]);
                        })
                      : i[a](d[e]);
                  }
                );
              })
              .promise();
          },
          promise: function (a) {
            if (a == null) a = h;
            else for (var b in h) a[b] = h[b];
            return a;
          },
        },
        i = h.promise({}),
        j;
      for (j in g) (i[j] = g[j].fire), (i[j + "With"] = g[j].fireWith);
      i
        .done(
          function () {
            e = "resolved";
          },
          c.disable,
          d.lock
        )
        .fail(
          function () {
            e = "rejected";
          },
          b.disable,
          d.lock
        ),
        a && a.call(i, i);
      return i;
    },
    when: function (a) {
      function m(a) {
        return function (b) {
          (e[a] = arguments.length > 1 ? i.call(arguments, 0) : b),
            j.notifyWith(k, e);
        };
      }
      function l(a) {
        return function (c) {
          (b[a] = arguments.length > 1 ? i.call(arguments, 0) : c),
            --g || j.resolveWith(j, b);
        };
      }
      var b = i.call(arguments, 0),
        c = 0,
        d = b.length,
        e = Array(d),
        g = d,
        h = d,
        j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
        k = j.promise();
      if (d > 1) {
        for (; c < d; c++)
          b[c] && b[c].promise && f.isFunction(b[c].promise)
            ? b[c].promise().then(l(c), j.reject, m(c))
            : --g;
        g || j.resolveWith(j, b);
      } else j !== a && j.resolveWith(j, d ? [a] : []);
      return k;
    },
  }),
    (f.support = (function () {
      var b,
        d,
        e,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p = c.createElement("div"),
        q = c.documentElement;
      p.setAttribute("className", "t"),
        (p.innerHTML =
          " <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
        (d = p.getElementsByTagName("*")),
        (e = p.getElementsByTagName("a")[0]);
      if (!d || !d.length || !e) return {};
      (g = c.createElement("select")),
        (h = g.appendChild(c.createElement("option"))),
        (i = p.getElementsByTagName("input")[0]),
        (b = {
          leadingWhitespace: p.firstChild.nodeType === 3,
          tbody: !p.getElementsByTagName("tbody").length,
          htmlSerialize: !!p.getElementsByTagName("link").length,
          style: /top/.test(e.getAttribute("style")),
          hrefNormalized: e.getAttribute("href") === "/a",
          opacity: /^0.55/.test(e.style.opacity),
          cssFloat: !!e.style.cssFloat,
          checkOn: i.value === "on",
          optSelected: h.selected,
          getSetAttribute: p.className !== "t",
          enctype: !!c.createElement("form").enctype,
          html5Clone:
            c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          pixelMargin: !0,
        }),
        (f.boxModel = b.boxModel = c.compatMode === "CSS1Compat"),
        (i.checked = !0),
        (b.noCloneChecked = i.cloneNode(!0).checked),
        (g.disabled = !0),
        (b.optDisabled = !h.disabled);
      try {
        delete p.test;
      } catch (r) {
        b.deleteExpando = !1;
      }
      !p.addEventListener &&
        p.attachEvent &&
        p.fireEvent &&
        (p.attachEvent("onclick", function () {
          b.noCloneEvent = !1;
        }),
        p.cloneNode(!0).fireEvent("onclick")),
        (i = c.createElement("input")),
        (i.value = "t"),
        i.setAttribute("type", "radio"),
        (b.radioValue = i.value === "t"),
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        p.appendChild(i),
        (j = c.createDocumentFragment()),
        j.appendChild(p.lastChild),
        (b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = i.checked),
        j.removeChild(i),
        j.appendChild(p);
      if (p.attachEvent)
        for (n in { submit: 1, change: 1, focusin: 1 })
          (m = "on" + n),
            (o = m in p),
            o ||
              (p.setAttribute(m, "return;"), (o = typeof p[m] == "function")),
            (b[n + "Bubbles"] = o);
      j.removeChild(p),
        (j = g = h = p = i = null),
        f(function () {
          var d,
            e,
            g,
            h,
            i,
            j,
            l,
            m,
            n,
            q,
            r,
            s,
            t,
            u = c.getElementsByTagName("body")[0];
          !u ||
            ((m = 1),
            (t = "padding:0;margin:0;border:"),
            (r = "position:absolute;top:0;left:0;width:1px;height:1px;"),
            (s = t + "0;visibility:hidden;"),
            (n = "style='" + r + t + "5px solid #000;"),
            (q =
              "<div " +
              n +
              "display:block;'><div style='" +
              t +
              "0;display:block;overflow:hidden;'></div></div>" +
              "<table " +
              n +
              "' cellpadding='0' cellspacing='0'>" +
              "<tr><td></td></tr></table>"),
            (d = c.createElement("div")),
            (d.style.cssText =
              s +
              "width:0;height:0;position:static;top:0;margin-top:" +
              m +
              "px"),
            u.insertBefore(d, u.firstChild),
            (p = c.createElement("div")),
            d.appendChild(p),
            (p.innerHTML =
              "<table><tr><td style='" +
              t +
              "0;display:none'></td><td>t</td></tr></table>"),
            (k = p.getElementsByTagName("td")),
            (o = k[0].offsetHeight === 0),
            (k[0].style.display = ""),
            (k[1].style.display = "none"),
            (b.reliableHiddenOffsets = o && k[0].offsetHeight === 0),
            a.getComputedStyle &&
              ((p.innerHTML = ""),
              (l = c.createElement("div")),
              (l.style.width = "0"),
              (l.style.marginRight = "0"),
              (p.style.width = "2px"),
              p.appendChild(l),
              (b.reliableMarginRight =
                (parseInt(
                  (a.getComputedStyle(l, null) || { marginRight: 0 })
                    .marginRight,
                  10
                ) || 0) === 0)),
            typeof p.style.zoom != "undefined" &&
              ((p.innerHTML = ""),
              (p.style.width = p.style.padding = "1px"),
              (p.style.border = 0),
              (p.style.overflow = "hidden"),
              (p.style.display = "inline"),
              (p.style.zoom = 1),
              (b.inlineBlockNeedsLayout = p.offsetWidth === 3),
              (p.style.display = "block"),
              (p.style.overflow = "visible"),
              (p.innerHTML = "<div style='width:5px;'></div>"),
              (b.shrinkWrapBlocks = p.offsetWidth !== 3)),
            (p.style.cssText = r + s),
            (p.innerHTML = q),
            (e = p.firstChild),
            (g = e.firstChild),
            (i = e.nextSibling.firstChild.firstChild),
            (j = {
              doesNotAddBorder: g.offsetTop !== 5,
              doesAddBorderForTableAndCells: i.offsetTop === 5,
            }),
            (g.style.position = "fixed"),
            (g.style.top = "20px"),
            (j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15),
            (g.style.position = g.style.top = ""),
            (e.style.overflow = "hidden"),
            (e.style.position = "relative"),
            (j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5),
            (j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m),
            a.getComputedStyle &&
              ((p.style.marginTop = "1%"),
              (b.pixelMargin =
                (a.getComputedStyle(p, null) || { marginTop: 0 }).marginTop !==
                "1%")),
            typeof d.style.zoom != "undefined" && (d.style.zoom = 1),
            u.removeChild(d),
            (l = p = d = null),
            f.extend(b, j));
        });
      return b;
    })());
  var j = /^(?:\{.*\}|\[.*\])$/,
    k = /([A-Z])/g;
  f.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (a) {
      a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
      return !!a && !m(a);
    },
    data: function (a, c, d, e) {
      if (!!f.acceptData(a)) {
        var g,
          h,
          i,
          j = f.expando,
          k = typeof c == "string",
          l = a.nodeType,
          m = l ? f.cache : a,
          n = l ? a[j] : a[j] && j,
          o = c === "events";
        if ((!n || !m[n] || (!o && !e && !m[n].data)) && k && d === b) return;
        n || (l ? (a[j] = n = ++f.uuid) : (n = j)),
          m[n] || ((m[n] = {}), l || (m[n].toJSON = f.noop));
        if (typeof c == "object" || typeof c == "function")
          e ? (m[n] = f.extend(m[n], c)) : (m[n].data = f.extend(m[n].data, c));
        (g = h = m[n]),
          e || (h.data || (h.data = {}), (h = h.data)),
          d !== b && (h[f.camelCase(c)] = d);
        if (o && !h[c]) return g.events;
        k ? ((i = h[c]), i == null && (i = h[f.camelCase(c)])) : (i = h);
        return i;
      }
    },
    removeData: function (a, b, c) {
      if (!!f.acceptData(a)) {
        var d,
          e,
          g,
          h = f.expando,
          i = a.nodeType,
          j = i ? f.cache : a,
          k = i ? a[h] : h;
        if (!j[k]) return;
        if (b) {
          d = c ? j[k] : j[k].data;
          if (d) {
            f.isArray(b) ||
              (b in d
                ? (b = [b])
                : ((b = f.camelCase(b)),
                  b in d ? (b = [b]) : (b = b.split(" "))));
            for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
            if (!(c ? m : f.isEmptyObject)(d)) return;
          }
        }
        if (!c) {
          delete j[k].data;
          if (!m(j[k])) return;
        }
        f.support.deleteExpando || !j.setInterval ? delete j[k] : (j[k] = null),
          i &&
            (f.support.deleteExpando
              ? delete a[h]
              : a.removeAttribute
              ? a.removeAttribute(h)
              : (a[h] = null));
      }
    },
    _data: function (a, b, c) {
      return f.data(a, b, c, !0);
    },
    acceptData: function (a) {
      if (a.nodeName) {
        var b = f.noData[a.nodeName.toLowerCase()];
        if (b) return b !== !0 && a.getAttribute("classid") === b;
      }
      return !0;
    },
  }),
    f.fn.extend({
      data: function (a, c) {
        var d,
          e,
          g,
          h,
          i,
          j = this[0],
          k = 0,
          m = null;
        if (a === b) {
          if (this.length) {
            m = f.data(j);
            if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
              g = j.attributes;
              for (i = g.length; k < i; k++)
                (h = g[k].name),
                  h.indexOf("data-") === 0 &&
                    ((h = f.camelCase(h.substring(5))), l(j, h, m[h]));
              f._data(j, "parsedAttrs", !0);
            }
          }
          return m;
        }
        if (typeof a == "object")
          return this.each(function () {
            f.data(this, a);
          });
        (d = a.split(".", 2)),
          (d[1] = d[1] ? "." + d[1] : ""),
          (e = d[1] + "!");
        return f.access(
          this,
          function (c) {
            if (c === b) {
              (m = this.triggerHandler("getData" + e, [d[0]])),
                m === b && j && ((m = f.data(j, a)), (m = l(j, a, m)));
              return m === b && d[1] ? this.data(d[0]) : m;
            }
            (d[1] = c),
              this.each(function () {
                var b = f(this);
                b.triggerHandler("setData" + e, d),
                  f.data(this, a, c),
                  b.triggerHandler("changeData" + e, d);
              });
          },
          null,
          c,
          arguments.length > 1,
          null,
          !1
        );
      },
      removeData: function (a) {
        return this.each(function () {
          f.removeData(this, a);
        });
      },
    }),
    f.extend({
      _mark: function (a, b) {
        a &&
          ((b = (b || "fx") + "mark"), f._data(a, b, (f._data(a, b) || 0) + 1));
      },
      _unmark: function (a, b, c) {
        a !== !0 && ((c = b), (b = a), (a = !1));
        if (b) {
          c = c || "fx";
          var d = c + "mark",
            e = a ? 0 : (f._data(b, d) || 1) - 1;
          e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"));
        }
      },
      queue: function (a, b, c) {
        var d;
        if (a) {
          (b = (b || "fx") + "queue"),
            (d = f._data(a, b)),
            c &&
              (!d || f.isArray(c)
                ? (d = f._data(a, b, f.makeArray(c)))
                : d.push(c));
          return d || [];
        }
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = f.queue(a, b),
          d = c.shift(),
          e = {};
        d === "inprogress" && (d = c.shift()),
          d &&
            (b === "fx" && c.unshift("inprogress"),
            f._data(a, b + ".run", e),
            d.call(
              a,
              function () {
                f.dequeue(a, b);
              },
              e
            )),
          c.length ||
            (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"));
      },
    }),
    f.fn.extend({
      queue: function (a, c) {
        var d = 2;
        typeof a != "string" && ((c = a), (a = "fx"), d--);
        if (arguments.length < d) return f.queue(this[0], a);
        return c === b
          ? this
          : this.each(function () {
              var b = f.queue(this, a, c);
              a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a);
            });
      },
      dequeue: function (a) {
        return this.each(function () {
          f.dequeue(this, a);
        });
      },
      delay: function (a, b) {
        (a = f.fx ? f.fx.speeds[a] || a : a), (b = b || "fx");
        return this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, c) {
        function m() {
          --h || d.resolveWith(e, [e]);
        }
        typeof a != "string" && ((c = a), (a = b)), (a = a || "fx");
        var d = f.Deferred(),
          e = this,
          g = e.length,
          h = 1,
          i = a + "defer",
          j = a + "queue",
          k = a + "mark",
          l;
        while (g--)
          if (
            (l =
              f.data(e[g], i, b, !0) ||
              ((f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) &&
                f.data(e[g], i, f.Callbacks("once memory"), !0)))
          )
            h++, l.add(m);
        m();
        return d.promise(c);
      },
    });
  var o = /[\n\t\r]/g,
    p = /\s+/,
    q = /\r/g,
    r = /^(?:button|input)$/i,
    s = /^(?:button|input|object|select|textarea)$/i,
    t = /^a(?:rea)?$/i,
    u =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    v = f.support.getSetAttribute,
    w,
    x,
    y;
  f.fn.extend({
    attr: function (a, b) {
      return f.access(this, f.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        f.removeAttr(this, a);
      });
    },
    prop: function (a, b) {
      return f.access(this, f.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      a = f.propFix[a] || a;
      return this.each(function () {
        try {
          (this[a] = b), delete this[a];
        } catch (c) {}
      });
    },
    addClass: function (a) {
      var b, c, d, e, g, h, i;
      if (f.isFunction(a))
        return this.each(function (b) {
          f(this).addClass(a.call(this, b, this.className));
        });
      if (a && typeof a == "string") {
        b = a.split(p);
        for (c = 0, d = this.length; c < d; c++) {
          e = this[c];
          if (e.nodeType === 1)
            if (!e.className && b.length === 1) e.className = a;
            else {
              g = " " + e.className + " ";
              for (h = 0, i = b.length; h < i; h++)
                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
              e.className = f.trim(g);
            }
        }
      }
      return this;
    },
    removeClass: function (a) {
      var c, d, e, g, h, i, j;
      if (f.isFunction(a))
        return this.each(function (b) {
          f(this).removeClass(a.call(this, b, this.className));
        });
      if ((a && typeof a == "string") || a === b) {
        c = (a || "").split(p);
        for (d = 0, e = this.length; d < e; d++) {
          g = this[d];
          if (g.nodeType === 1 && g.className)
            if (a) {
              h = (" " + g.className + " ").replace(o, " ");
              for (i = 0, j = c.length; i < j; i++)
                h = h.replace(" " + c[i] + " ", " ");
              g.className = f.trim(h);
            } else g.className = "";
        }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = typeof b == "boolean";
      if (f.isFunction(a))
        return this.each(function (c) {
          f(this).toggleClass(a.call(this, c, this.className, b), b);
        });
      return this.each(function () {
        if (c === "string") {
          var e,
            g = 0,
            h = f(this),
            i = b,
            j = a.split(p);
          while ((e = j[g++]))
            (i = d ? i : !h.hasClass(e)), h[i ? "addClass" : "removeClass"](e);
        } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), (this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || "");
      });
    },
    hasClass: function (a) {
      var b = " " + a + " ",
        c = 0,
        d = this.length;
      for (; c < d; c++)
        if (
          this[c].nodeType === 1 &&
          (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1
        )
          return !0;
      return !1;
    },
    val: function (a) {
      var c,
        d,
        e,
        g = this[0];
      if (!!arguments.length) {
        e = f.isFunction(a);
        return this.each(function (d) {
          var g = f(this),
            h;
          if (this.nodeType === 1) {
            e ? (h = a.call(this, d, g.val())) : (h = a),
              h == null
                ? (h = "")
                : typeof h == "number"
                ? (h += "")
                : f.isArray(h) &&
                  (h = f.map(h, function (a) {
                    return a == null ? "" : a + "";
                  })),
              (c =
                f.valHooks[this.type] ||
                f.valHooks[this.nodeName.toLowerCase()]);
            if (!c || !("set" in c) || c.set(this, h, "value") === b)
              this.value = h;
          }
        });
      }
      if (g) {
        c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
        if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
        d = g.value;
        return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d;
      }
    },
  }),
    f.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text;
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e,
              g = a.selectedIndex,
              h = [],
              i = a.options,
              j = a.type === "select-one";
            if (g < 0) return null;
            (c = j ? g : 0), (d = j ? g + 1 : i.length);
            for (; c < d; c++) {
              e = i[c];
              if (
                e.selected &&
                (f.support.optDisabled
                  ? !e.disabled
                  : e.getAttribute("disabled") === null) &&
                (!e.parentNode.disabled ||
                  !f.nodeName(e.parentNode, "optgroup"))
              ) {
                b = f(e).val();
                if (j) return b;
                h.push(b);
              }
            }
            if (j && !h.length && i.length) return f(i[g]).val();
            return h;
          },
          set: function (a, b) {
            var c = f.makeArray(b);
            f(a)
              .find("option")
              .each(function () {
                this.selected = f.inArray(f(this).val(), c) >= 0;
              }),
              c.length || (a.selectedIndex = -1);
            return c;
          },
        },
      },
      attrFn: {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
      },
      attr: function (a, c, d, e) {
        var g,
          h,
          i,
          j = a.nodeType;
        if (!!a && j !== 3 && j !== 8 && j !== 2) {
          if (e && c in f.attrFn) return f(a)[c](d);
          if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
          (i = j !== 1 || !f.isXMLDoc(a)),
            i &&
              ((c = c.toLowerCase()),
              (h = f.attrHooks[c] || (u.test(c) ? x : w)));
          if (d !== b) {
            if (d === null) {
              f.removeAttr(a, c);
              return;
            }
            if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
            a.setAttribute(c, "" + d);
            return d;
          }
          if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
          g = a.getAttribute(c);
          return g === null ? b : g;
        }
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e,
          g,
          h,
          i = 0;
        if (b && a.nodeType === 1) {
          (d = b.toLowerCase().split(p)), (g = d.length);
          for (; i < g; i++)
            (e = d[i]),
              e &&
                ((c = f.propFix[e] || e),
                (h = u.test(e)),
                h || f.attr(a, e, ""),
                a.removeAttribute(v ? e : c),
                h && c in a && (a[c] = !1));
        }
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (r.test(a.nodeName) && a.parentNode)
              f.error("type property can't be changed");
            else if (
              !f.support.radioValue &&
              b === "radio" &&
              f.nodeName(a, "input")
            ) {
              var c = a.value;
              a.setAttribute("type", b), c && (a.value = c);
              return b;
            }
          },
        },
        value: {
          get: function (a, b) {
            if (w && f.nodeName(a, "button")) return w.get(a, b);
            return b in a ? a.value : null;
          },
          set: function (a, b, c) {
            if (w && f.nodeName(a, "button")) return w.set(a, b, c);
            a.value = b;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (a, c, d) {
        var e,
          g,
          h,
          i = a.nodeType;
        if (!!a && i !== 3 && i !== 8 && i !== 2) {
          (h = i !== 1 || !f.isXMLDoc(a)),
            h && ((c = f.propFix[c] || c), (g = f.propHooks[c]));
          return d !== b
            ? g && "set" in g && (e = g.set(a, d, c)) !== b
              ? e
              : (a[c] = d)
            : g && "get" in g && (e = g.get(a, c)) !== null
            ? e
            : a[c];
        }
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = a.getAttributeNode("tabindex");
            return c && c.specified
              ? parseInt(c.value, 10)
              : s.test(a.nodeName) || (t.test(a.nodeName) && a.href)
              ? 0
              : b;
          },
        },
      },
    }),
    (f.attrHooks.tabindex = f.propHooks.tabIndex),
    (x = {
      get: function (a, c) {
        var d,
          e = f.prop(a, c);
        return e === !0 ||
          (typeof e != "boolean" &&
            (d = a.getAttributeNode(c)) &&
            d.nodeValue !== !1)
          ? c.toLowerCase()
          : b;
      },
      set: function (a, b, c) {
        var d;
        b === !1
          ? f.removeAttr(a, c)
          : ((d = f.propFix[c] || c),
            d in a && (a[d] = !0),
            a.setAttribute(c, c.toLowerCase()));
        return c;
      },
    }),
    v ||
      ((y = { name: !0, id: !0, coords: !0 }),
      (w = f.valHooks.button =
        {
          get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && (y[c] ? d.nodeValue !== "" : d.specified)
              ? d.nodeValue
              : b;
          },
          set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || ((e = c.createAttribute(d)), a.setAttributeNode(e));
            return (e.nodeValue = b + "");
          },
        }),
      (f.attrHooks.tabindex.set = w.set),
      f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
          set: function (a, c) {
            if (c === "") {
              a.setAttribute(b, "auto");
              return c;
            }
          },
        });
      }),
      (f.attrHooks.contenteditable = {
        get: w.get,
        set: function (a, b, c) {
          b === "" && (b = "false"), w.set(a, b, c);
        },
      })),
    f.support.hrefNormalized ||
      f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
          get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d;
          },
        });
      }),
    f.support.style ||
      (f.attrHooks.style = {
        get: function (a) {
          return a.style.cssText.toLowerCase() || b;
        },
        set: function (a, b) {
          return (a.style.cssText = "" + b);
        },
      }),
    f.support.optSelected ||
      (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
          return null;
        },
      })),
    f.support.enctype || (f.propFix.enctype = "encoding"),
    f.support.checkOn ||
      f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
          get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value;
          },
        };
      }),
    f.each(["radio", "checkbox"], function () {
      f.valHooks[this] = f.extend(f.valHooks[this], {
        set: function (a, b) {
          if (f.isArray(b)) return (a.checked = f.inArray(f(a).val(), b) >= 0);
        },
      });
    });
  var z = /^(?:textarea|input|select)$/i,
    A = /^([^\.]*)?(?:\.(.+))?$/,
    B = /(?:^|\s)hover(\.\S+)?\b/,
    C = /^key/,
    D = /^(?:mouse|contextmenu)|click/,
    E = /^(?:focusinfocus|focusoutblur)$/,
    F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    G = function (a) {
      var b = F.exec(a);
      b &&
        ((b[1] = (b[1] || "").toLowerCase()),
        (b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")));
      return b;
    },
    H = function (a, b) {
      var c = a.attributes || {};
      return (
        (!b[1] || a.nodeName.toLowerCase() === b[1]) &&
        (!b[2] || (c.id || {}).value === b[2]) &&
        (!b[3] || b[3].test((c["class"] || {}).value))
      );
    },
    I = function (a) {
      return f.event.special.hover
        ? a
        : a.replace(B, "mouseenter$1 mouseleave$1");
    };
  (f.event = {
    add: function (a, c, d, e, g) {
      var h, i, j, k, l, m, n, o, p, q, r, s;
      if (
        !(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))
      ) {
        d.handler && ((p = d), (d = p.handler), (g = p.selector)),
          d.guid || (d.guid = f.guid++),
          (j = h.events),
          j || (h.events = j = {}),
          (i = h.handle),
          i ||
            ((h.handle = i =
              function (a) {
                return typeof f != "undefined" &&
                  (!a || f.event.triggered !== a.type)
                  ? f.event.dispatch.apply(i.elem, arguments)
                  : b;
              }),
            (i.elem = a)),
          (c = f.trim(I(c)).split(" "));
        for (k = 0; k < c.length; k++) {
          (l = A.exec(c[k]) || []),
            (m = l[1]),
            (n = (l[2] || "").split(".").sort()),
            (s = f.event.special[m] || {}),
            (m = (g ? s.delegateType : s.bindType) || m),
            (s = f.event.special[m] || {}),
            (o = f.extend(
              {
                type: m,
                origType: l[1],
                data: e,
                handler: d,
                guid: d.guid,
                selector: g,
                quick: g && G(g),
                namespace: n.join("."),
              },
              p
            )),
            (r = j[m]);
          if (!r) {
            (r = j[m] = []), (r.delegateCount = 0);
            if (!s.setup || s.setup.call(a, e, n, i) === !1)
              a.addEventListener
                ? a.addEventListener(m, i, !1)
                : a.attachEvent && a.attachEvent("on" + m, i);
          }
          s.add &&
            (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
            g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
            (f.event.global[m] = !0);
        }
        a = null;
      }
    },
    global: {},
    remove: function (a, b, c, d, e) {
      var g = f.hasData(a) && f._data(a),
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s;
      if (!!g && !!(o = g.events)) {
        b = f.trim(I(b || "")).split(" ");
        for (h = 0; h < b.length; h++) {
          (i = A.exec(b[h]) || []), (j = k = i[1]), (l = i[2]);
          if (!j) {
            for (j in o) f.event.remove(a, j + b[h], c, d, !0);
            continue;
          }
          (p = f.event.special[j] || {}),
            (j = (d ? p.delegateType : p.bindType) || j),
            (r = o[j] || []),
            (m = r.length),
            (l = l
              ? new RegExp(
                  "(^|\\.)" +
                    l.split(".").sort().join("\\.(?:.*\\.)?") +
                    "(\\.|$)"
                )
              : null);
          for (n = 0; n < r.length; n++)
            (s = r[n]),
              (e || k === s.origType) &&
                (!c || c.guid === s.guid) &&
                (!l || l.test(s.namespace)) &&
                (!d || d === s.selector || (d === "**" && s.selector)) &&
                (r.splice(n--, 1),
                s.selector && r.delegateCount--,
                p.remove && p.remove.call(a, s));
          r.length === 0 &&
            m !== r.length &&
            ((!p.teardown || p.teardown.call(a, l) === !1) &&
              f.removeEvent(a, j, g.handle),
            delete o[j]);
        }
        f.isEmptyObject(o) &&
          ((q = g.handle),
          q && (q.elem = null),
          f.removeData(a, ["events", "handle"], !0));
      }
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (c, d, e, g) {
      if (!e || (e.nodeType !== 3 && e.nodeType !== 8)) {
        var h = c.type || c,
          i = [],
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s;
        if (E.test(h + f.event.triggered)) return;
        h.indexOf("!") >= 0 && ((h = h.slice(0, -1)), (k = !0)),
          h.indexOf(".") >= 0 &&
            ((i = h.split(".")), (h = i.shift()), i.sort());
        if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
        (c =
          typeof c == "object"
            ? c[f.expando]
              ? c
              : new f.Event(h, c)
            : new f.Event(h)),
          (c.type = h),
          (c.isTrigger = !0),
          (c.exclusive = k),
          (c.namespace = i.join(".")),
          (c.namespace_re = c.namespace
            ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)")
            : null),
          (o = h.indexOf(":") < 0 ? "on" + h : "");
        if (!e) {
          j = f.cache;
          for (l in j)
            j[l].events &&
              j[l].events[h] &&
              f.event.trigger(c, d, j[l].handle.elem, !0);
          return;
        }
        (c.result = b),
          c.target || (c.target = e),
          (d = d != null ? f.makeArray(d) : []),
          d.unshift(c),
          (p = f.event.special[h] || {});
        if (p.trigger && p.trigger.apply(e, d) === !1) return;
        r = [[e, p.bindType || h]];
        if (!g && !p.noBubble && !f.isWindow(e)) {
          (s = p.delegateType || h),
            (m = E.test(s + h) ? e : e.parentNode),
            (n = null);
          for (; m; m = m.parentNode) r.push([m, s]), (n = m);
          n &&
            n === e.ownerDocument &&
            r.push([n.defaultView || n.parentWindow || a, s]);
        }
        for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
          (m = r[l][0]),
            (c.type = r[l][1]),
            (q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle")),
            q && q.apply(m, d),
            (q = o && m[o]),
            q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
        (c.type = h),
          !g &&
            !c.isDefaultPrevented() &&
            (!p._default || p._default.apply(e.ownerDocument, d) === !1) &&
            (h !== "click" || !f.nodeName(e, "a")) &&
            f.acceptData(e) &&
            o &&
            e[h] &&
            ((h !== "focus" && h !== "blur") || c.target.offsetWidth !== 0) &&
            !f.isWindow(e) &&
            ((n = e[o]),
            n && (e[o] = null),
            (f.event.triggered = h),
            e[h](),
            (f.event.triggered = b),
            n && (e[o] = n));
        return c.result;
      }
    },
    dispatch: function (c) {
      c = f.event.fix(c || a.event);
      var d = (f._data(this, "events") || {})[c.type] || [],
        e = d.delegateCount,
        g = [].slice.call(arguments, 0),
        h = !c.exclusive && !c.namespace,
        i = f.event.special[c.type] || {},
        j = [],
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u;
      (g[0] = c), (c.delegateTarget = this);
      if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
        if (e && (!c.button || c.type !== "click")) {
          (n = f(this)), (n.context = this.ownerDocument || this);
          for (m = c.target; m != this; m = m.parentNode || this)
            if (m.disabled !== !0) {
              (p = {}), (r = []), (n[0] = m);
              for (k = 0; k < e; k++)
                (s = d[k]),
                  (t = s.selector),
                  p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)),
                  p[t] && r.push(s);
              r.length && j.push({ elem: m, matches: r });
            }
        }
        d.length > e && j.push({ elem: this, matches: d.slice(e) });
        for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
          (q = j[k]), (c.currentTarget = q.elem);
          for (
            l = 0;
            l < q.matches.length && !c.isImmediatePropagationStopped();
            l++
          ) {
            s = q.matches[l];
            if (
              h ||
              (!c.namespace && !s.namespace) ||
              (c.namespace_re && c.namespace_re.test(s.namespace))
            )
              (c.data = s.data),
                (c.handleObj = s),
                (o = (
                  (f.event.special[s.origType] || {}).handle || s.handler
                ).apply(q.elem, g)),
                o !== b &&
                  ((c.result = o),
                  o === !1 && (c.preventDefault(), c.stopPropagation()));
          }
        }
        i.postDispatch && i.postDispatch.call(this, c);
        return c.result;
      }
    },
    props:
      "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        a.which == null &&
          (a.which = b.charCode != null ? b.charCode : b.keyCode);
        return a;
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, d) {
        var e,
          f,
          g,
          h = d.button,
          i = d.fromElement;
        a.pageX == null &&
          d.clientX != null &&
          ((e = a.target.ownerDocument || c),
          (f = e.documentElement),
          (g = e.body),
          (a.pageX =
            d.clientX +
            ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
            ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
          (a.pageY =
            d.clientY +
            ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
            ((f && f.clientTop) || (g && g.clientTop) || 0))),
          !a.relatedTarget &&
            i &&
            (a.relatedTarget = i === a.target ? d.toElement : i),
          !a.which &&
            h !== b &&
            (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
        return a;
      },
    },
    fix: function (a) {
      if (a[f.expando]) return a;
      var d,
        e,
        g = a,
        h = f.event.fixHooks[a.type] || {},
        i = h.props ? this.props.concat(h.props) : this.props;
      a = f.Event(g);
      for (d = i.length; d; ) (e = i[--d]), (a[e] = g[e]);
      a.target || (a.target = g.srcElement || c),
        a.target.nodeType === 3 && (a.target = a.target.parentNode),
        a.metaKey === b && (a.metaKey = a.ctrlKey);
      return h.filter ? h.filter(a, g) : a;
    },
    special: {
      ready: { setup: f.bindReady },
      load: { noBubble: !0 },
      focus: { delegateType: "focusin" },
      blur: { delegateType: "focusout" },
      beforeunload: {
        setup: function (a, b, c) {
          f.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function (a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = f.extend(new f.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (f.event.handle = f.event.dispatch),
    (f.removeEvent = c.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          a.detachEvent && a.detachEvent("on" + b, c);
        }),
    (f.Event = function (a, b) {
      if (!(this instanceof f.Event)) return new f.Event(a, b);
      a && a.type
        ? ((this.originalEvent = a),
          (this.type = a.type),
          (this.isDefaultPrevented =
            a.defaultPrevented ||
            a.returnValue === !1 ||
            (a.getPreventDefault && a.getPreventDefault())
              ? K
              : J))
        : (this.type = a),
        b && f.extend(this, b),
        (this.timeStamp = (a && a.timeStamp) || f.now()),
        (this[f.expando] = !0);
    }),
    (f.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = K;
        var a = this.originalEvent;
        !a || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = K;
        var a = this.originalEvent;
        !a || (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = K), this.stopPropagation();
      },
      isDefaultPrevented: J,
      isPropagationStopped: J,
      isImmediatePropagationStopped: J,
    }),
    f.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (a, b) {
        f.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c = this,
              d = a.relatedTarget,
              e = a.handleObj,
              g = e.selector,
              h;
            if (!d || (d !== c && !f.contains(c, d)))
              (a.type = e.origType),
                (h = e.handler.apply(this, arguments)),
                (a.type = b);
            return h;
          },
        };
      }
    ),
    f.support.submitBubbles ||
      (f.event.special.submit = {
        setup: function () {
          if (f.nodeName(this, "form")) return !1;
          f.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target,
              d =
                f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
            d &&
              !d._submit_attached &&
              (f.event.add(d, "submit._submit", function (a) {
                a._submit_bubble = !0;
              }),
              (d._submit_attached = !0));
          });
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              f.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          if (f.nodeName(this, "form")) return !1;
          f.event.remove(this, "._submit");
        },
      }),
    f.support.changeBubbles ||
      (f.event.special.change = {
        setup: function () {
          if (z.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio")
              f.event.add(this, "propertychange._change", function (a) {
                a.originalEvent.propertyName === "checked" &&
                  (this._just_changed = !0);
              }),
                f.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    ((this._just_changed = !1),
                    f.event.simulate("change", this, a, !0));
                });
            return !1;
          }
          f.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            z.test(b.nodeName) &&
              !b._change_attached &&
              (f.event.add(b, "change._change", function (a) {
                this.parentNode &&
                  !a.isSimulated &&
                  !a.isTrigger &&
                  f.event.simulate("change", this.parentNode, a, !0);
              }),
              (b._change_attached = !0));
          });
        },
        handle: function (a) {
          var b = a.target;
          if (
            this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            (b.type !== "radio" && b.type !== "checkbox")
          )
            return a.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          f.event.remove(this, "._change");
          return z.test(this.nodeName);
        },
      }),
    f.support.focusinBubbles ||
      f.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var d = 0,
          e = function (a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0);
          };
        f.event.special[b] = {
          setup: function () {
            d++ === 0 && c.addEventListener(a, e, !0);
          },
          teardown: function () {
            --d === 0 && c.removeEventListener(a, e, !0);
          },
        };
      }),
    f.fn.extend({
      on: function (a, c, d, e, g) {
        var h, i;
        if (typeof a == "object") {
          typeof c != "string" && ((d = d || c), (c = b));
          for (i in a) this.on(i, c, d, a[i], g);
          return this;
        }
        d == null && e == null
          ? ((e = c), (d = c = b))
          : e == null &&
            (typeof c == "string"
              ? ((e = d), (d = b))
              : ((e = d), (d = c), (c = b)));
        if (e === !1) e = J;
        else if (!e) return this;
        g === 1 &&
          ((h = e),
          (e = function (a) {
            f().off(a);
            return h.apply(this, arguments);
          }),
          (e.guid = h.guid || (h.guid = f.guid++)));
        return this.each(function () {
          f.event.add(this, a, e, d, c);
        });
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, c, d) {
        if (a && a.preventDefault && a.handleObj) {
          var e = a.handleObj;
          f(a.delegateTarget).off(
            e.namespace ? e.origType + "." + e.namespace : e.origType,
            e.selector,
            e.handler
          );
          return this;
        }
        if (typeof a == "object") {
          for (var g in a) this.off(g, c, a[g]);
          return this;
        }
        if (c === !1 || typeof c == "function") (d = c), (c = b);
        d === !1 && (d = J);
        return this.each(function () {
          f.event.remove(this, a, d, c);
        });
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      live: function (a, b, c) {
        f(this.context).on(a, this.selector, b, c);
        return this;
      },
      die: function (a, b) {
        f(this.context).off(a, this.selector || "**", b);
        return this;
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c);
      },
      trigger: function (a, b) {
        return this.each(function () {
          f.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        if (this[0]) return f.event.trigger(a, b, this[0], !0);
      },
      toggle: function (a) {
        var b = arguments,
          c = a.guid || f.guid++,
          d = 0,
          e = function (c) {
            var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
            f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
            return b[e].apply(this, arguments) || !1;
          };
        e.guid = c;
        while (d < b.length) b[d++].guid = c;
        return this.click(e);
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    f.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        (f.fn[b] = function (a, c) {
          c == null && ((c = a), (a = null));
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        }),
          f.attrFn && (f.attrFn[b] = !0),
          C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
          D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks);
      }
    ),
    (function () {
      function x(a, b, c, e, f, g) {
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h];
          if (j) {
            var k = !1;
            j = j[a];
            while (j) {
              if (j[d] === c) {
                k = e[j.sizset];
                break;
              }
              if (j.nodeType === 1) {
                g || ((j[d] = c), (j.sizset = h));
                if (typeof b != "string") {
                  if (j === b) {
                    k = !0;
                    break;
                  }
                } else if (m.filter(b, [j]).length > 0) {
                  k = j;
                  break;
                }
              }
              j = j[a];
            }
            e[h] = k;
          }
        }
      }
      function w(a, b, c, e, f, g) {
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h];
          if (j) {
            var k = !1;
            j = j[a];
            while (j) {
              if (j[d] === c) {
                k = e[j.sizset];
                break;
              }
              j.nodeType === 1 && !g && ((j[d] = c), (j.sizset = h));
              if (j.nodeName.toLowerCase() === b) {
                k = j;
                break;
              }
              j = j[a];
            }
            e[h] = k;
          }
        }
      }
      var a =
          /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        d = "sizcache" + (Math.random() + "").replace(".", ""),
        e = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        k = /\r\n/g,
        l = /\W/;
      [0, 0].sort(function () {
        i = !1;
        return 0;
      });
      var m = function (b, d, e, f) {
        (e = e || []), (d = d || c);
        var h = d;
        if (d.nodeType !== 1 && d.nodeType !== 9) return [];
        if (!b || typeof b != "string") return e;
        var i,
          j,
          k,
          l,
          n,
          q,
          r,
          t,
          u = !0,
          v = m.isXML(d),
          w = [],
          x = b;
        do {
          a.exec(""), (i = a.exec(x));
          if (i) {
            (x = i[3]), w.push(i[1]);
            if (i[2]) {
              l = i[3];
              break;
            }
          }
        } while (i);
        if (w.length > 1 && p.exec(b))
          if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
          else {
            j = o.relative[w[0]] ? [d] : m(w.shift(), d);
            while (w.length)
              (b = w.shift()),
                o.relative[b] && (b += w.shift()),
                (j = y(b, j, f));
          }
        else {
          !f &&
            w.length > 1 &&
            d.nodeType === 9 &&
            !v &&
            o.match.ID.test(w[0]) &&
            !o.match.ID.test(w[w.length - 1]) &&
            ((n = m.find(w.shift(), d, v)),
            (d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]));
          if (d) {
            (n = f
              ? { expr: w.pop(), set: s(f) }
              : m.find(
                  w.pop(),
                  w.length === 1 &&
                    (w[0] === "~" || w[0] === "+") &&
                    d.parentNode
                    ? d.parentNode
                    : d,
                  v
                )),
              (j = n.expr ? m.filter(n.expr, n.set) : n.set),
              w.length > 0 ? (k = s(j)) : (u = !1);
            while (w.length)
              (q = w.pop()),
                (r = q),
                o.relative[q] ? (r = w.pop()) : (q = ""),
                r == null && (r = d),
                o.relative[q](k, r, v);
          } else k = w = [];
        }
        k || (k = j), k || m.error(q || b);
        if (g.call(k) === "[object Array]")
          if (!u) e.push.apply(e, k);
          else if (d && d.nodeType === 1)
            for (t = 0; k[t] != null; t++)
              k[t] &&
                (k[t] === !0 || (k[t].nodeType === 1 && m.contains(d, k[t]))) &&
                e.push(j[t]);
          else
            for (t = 0; k[t] != null; t++)
              k[t] && k[t].nodeType === 1 && e.push(j[t]);
        else s(k, e);
        l && (m(l, h, e, f), m.uniqueSort(e));
        return e;
      };
      (m.uniqueSort = function (a) {
        if (u) {
          (h = i), a.sort(u);
          if (h)
            for (var b = 1; b < a.length; b++)
              a[b] === a[b - 1] && a.splice(b--, 1);
        }
        return a;
      }),
        (m.matches = function (a, b) {
          return m(a, null, null, b);
        }),
        (m.matchesSelector = function (a, b) {
          return m(b, null, null, [a]).length > 0;
        }),
        (m.find = function (a, b, c) {
          var d, e, f, g, h, i;
          if (!a) return [];
          for (e = 0, f = o.order.length; e < f; e++) {
            h = o.order[e];
            if ((g = o.leftMatch[h].exec(a))) {
              (i = g[1]), g.splice(1, 1);
              if (i.substr(i.length - 1) !== "\\") {
                (g[1] = (g[1] || "").replace(j, "")), (d = o.find[h](g, b, c));
                if (d != null) {
                  a = a.replace(o.match[h], "");
                  break;
                }
              }
            }
          }
          d ||
            (d =
              typeof b.getElementsByTagName != "undefined"
                ? b.getElementsByTagName("*")
                : []);
          return { set: d, expr: a };
        }),
        (m.filter = function (a, c, d, e) {
          var f,
            g,
            h,
            i,
            j,
            k,
            l,
            n,
            p,
            q = a,
            r = [],
            s = c,
            t = c && c[0] && m.isXML(c[0]);
          while (a && c.length) {
            for (h in o.filter)
              if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                (k = o.filter[h]), (l = f[1]), (g = !1), f.splice(1, 1);
                if (l.substr(l.length - 1) === "\\") continue;
                s === r && (r = []);
                if (o.preFilter[h]) {
                  f = o.preFilter[h](f, s, d, r, e, t);
                  if (!f) g = i = !0;
                  else if (f === !0) continue;
                }
                if (f)
                  for (n = 0; (j = s[n]) != null; n++)
                    j &&
                      ((i = k(j, f, n, s)),
                      (p = e ^ i),
                      d && i != null
                        ? p
                          ? (g = !0)
                          : (s[n] = !1)
                        : p && (r.push(j), (g = !0)));
                if (i !== b) {
                  d || (s = r), (a = a.replace(o.match[h], ""));
                  if (!g) return [];
                  break;
                }
              }
            if (a === q)
              if (g == null) m.error(a);
              else break;
            q = a;
          }
          return s;
        }),
        (m.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        });
      var n = (m.getText = function (a) {
          var b,
            c,
            d = a.nodeType,
            e = "";
          if (d)
            if (d === 1 || d === 9 || d === 11) {
              if (typeof a.textContent == "string") return a.textContent;
              if (typeof a.innerText == "string")
                return a.innerText.replace(k, "");
              for (a = a.firstChild; a; a = a.nextSibling) e += n(a);
            } else {
              if (d === 3 || d === 4) return a.nodeValue;
            }
          else for (b = 0; (c = a[b]); b++) c.nodeType !== 8 && (e += n(c));
          return e;
        }),
        o = (m.selectors = {
          order: ["ID", "NAME", "TAG"],
          match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD:
              /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO:
              /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
          },
          leftMatch: {},
          attrMap: { class: "className", for: "htmlFor" },
          attrHandle: {
            href: function (a) {
              return a.getAttribute("href");
            },
            type: function (a) {
              return a.getAttribute("type");
            },
          },
          relative: {
            "+": function (a, b) {
              var c = typeof b == "string",
                d = c && !l.test(b),
                e = c && !d;
              d && (b = b.toLowerCase());
              for (var f = 0, g = a.length, h; f < g; f++)
                if ((h = a[f])) {
                  while ((h = h.previousSibling) && h.nodeType !== 1);
                  a[f] =
                    e || (h && h.nodeName.toLowerCase() === b)
                      ? h || !1
                      : h === b;
                }
              e && m.filter(b, a, !0);
            },
            ">": function (a, b) {
              var c,
                d = typeof b == "string",
                e = 0,
                f = a.length;
              if (d && !l.test(b)) {
                b = b.toLowerCase();
                for (; e < f; e++) {
                  c = a[e];
                  if (c) {
                    var g = c.parentNode;
                    a[e] = g.nodeName.toLowerCase() === b ? g : !1;
                  }
                }
              } else {
                for (; e < f; e++)
                  (c = a[e]),
                    c && (a[e] = d ? c.parentNode : c.parentNode === b);
                d && m.filter(b, a, !0);
              }
            },
            "": function (a, b, c) {
              var d,
                f = e++,
                g = x;
              typeof b == "string" &&
                !l.test(b) &&
                ((b = b.toLowerCase()), (d = b), (g = w)),
                g("parentNode", b, f, a, d, c);
            },
            "~": function (a, b, c) {
              var d,
                f = e++,
                g = x;
              typeof b == "string" &&
                !l.test(b) &&
                ((b = b.toLowerCase()), (d = b), (g = w)),
                g("previousSibling", b, f, a, d, c);
            },
          },
          find: {
            ID: function (a, b, c) {
              if (typeof b.getElementById != "undefined" && !c) {
                var d = b.getElementById(a[1]);
                return d && d.parentNode ? [d] : [];
              }
            },
            NAME: function (a, b) {
              if (typeof b.getElementsByName != "undefined") {
                var c = [],
                  d = b.getElementsByName(a[1]);
                for (var e = 0, f = d.length; e < f; e++)
                  d[e].getAttribute("name") === a[1] && c.push(d[e]);
                return c.length === 0 ? null : c;
              }
            },
            TAG: function (a, b) {
              if (typeof b.getElementsByTagName != "undefined")
                return b.getElementsByTagName(a[1]);
            },
          },
          preFilter: {
            CLASS: function (a, b, c, d, e, f) {
              a = " " + a[1].replace(j, "") + " ";
              if (f) return a;
              for (var g = 0, h; (h = b[g]) != null; g++)
                h &&
                  (e ^
                  (h.className &&
                    (" " + h.className + " ")
                      .replace(/[\t\n\r]/g, " ")
                      .indexOf(a) >= 0)
                    ? c || d.push(h)
                    : c && (b[g] = !1));
              return !1;
            },
            ID: function (a) {
              return a[1].replace(j, "");
            },
            TAG: function (a, b) {
              return a[1].replace(j, "").toLowerCase();
            },
            CHILD: function (a) {
              if (a[1] === "nth") {
                a[2] || m.error(a[0]), (a[2] = a[2].replace(/^\+|\s*/g, ""));
                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                  (a[2] === "even" && "2n") ||
                    (a[2] === "odd" && "2n+1") ||
                    (!/\D/.test(a[2]) && "0n+" + a[2]) ||
                    a[2]
                );
                (a[2] = b[1] + (b[2] || 1) - 0), (a[3] = b[3] - 0);
              } else a[2] && m.error(a[0]);
              a[0] = e++;
              return a;
            },
            ATTR: function (a, b, c, d, e, f) {
              var g = (a[1] = a[1].replace(j, ""));
              !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                (a[4] = (a[4] || a[5] || "").replace(j, "")),
                a[2] === "~=" && (a[4] = " " + a[4] + " ");
              return a;
            },
            PSEUDO: function (b, c, d, e, f) {
              if (b[1] === "not")
                if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))
                  b[3] = m(b[3], null, null, c);
                else {
                  var g = m.filter(b[3], c, d, !0 ^ f);
                  d || e.push.apply(e, g);
                  return !1;
                }
              else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                return !0;
              return b;
            },
            POS: function (a) {
              a.unshift(!0);
              return a;
            },
          },
          filters: {
            enabled: function (a) {
              return a.disabled === !1 && a.type !== "hidden";
            },
            disabled: function (a) {
              return a.disabled === !0;
            },
            checked: function (a) {
              return a.checked === !0;
            },
            selected: function (a) {
              a.parentNode && a.parentNode.selectedIndex;
              return a.selected === !0;
            },
            parent: function (a) {
              return !!a.firstChild;
            },
            empty: function (a) {
              return !a.firstChild;
            },
            has: function (a, b, c) {
              return !!m(c[3], a).length;
            },
            header: function (a) {
              return /h\d/i.test(a.nodeName);
            },
            text: function (a) {
              var b = a.getAttribute("type"),
                c = a.type;
              return (
                a.nodeName.toLowerCase() === "input" &&
                "text" === c &&
                (b === c || b === null)
              );
            },
            radio: function (a) {
              return a.nodeName.toLowerCase() === "input" && "radio" === a.type;
            },
            checkbox: function (a) {
              return (
                a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
              );
            },
            file: function (a) {
              return a.nodeName.toLowerCase() === "input" && "file" === a.type;
            },
            password: function (a) {
              return (
                a.nodeName.toLowerCase() === "input" && "password" === a.type
              );
            },
            submit: function (a) {
              var b = a.nodeName.toLowerCase();
              return (b === "input" || b === "button") && "submit" === a.type;
            },
            image: function (a) {
              return a.nodeName.toLowerCase() === "input" && "image" === a.type;
            },
            reset: function (a) {
              var b = a.nodeName.toLowerCase();
              return (b === "input" || b === "button") && "reset" === a.type;
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase();
              return (b === "input" && "button" === a.type) || b === "button";
            },
            input: function (a) {
              return /input|select|textarea|button/i.test(a.nodeName);
            },
            focus: function (a) {
              return a === a.ownerDocument.activeElement;
            },
          },
          setFilters: {
            first: function (a, b) {
              return b === 0;
            },
            last: function (a, b, c, d) {
              return b === d.length - 1;
            },
            even: function (a, b) {
              return b % 2 === 0;
            },
            odd: function (a, b) {
              return b % 2 === 1;
            },
            lt: function (a, b, c) {
              return b < c[3] - 0;
            },
            gt: function (a, b, c) {
              return b > c[3] - 0;
            },
            nth: function (a, b, c) {
              return c[3] - 0 === b;
            },
            eq: function (a, b, c) {
              return c[3] - 0 === b;
            },
          },
          filter: {
            PSEUDO: function (a, b, c, d) {
              var e = b[1],
                f = o.filters[e];
              if (f) return f(a, c, b, d);
              if (e === "contains")
                return (
                  (a.textContent || a.innerText || n([a]) || "").indexOf(
                    b[3]
                  ) >= 0
                );
              if (e === "not") {
                var g = b[3];
                for (var h = 0, i = g.length; h < i; h++)
                  if (g[h] === a) return !1;
                return !0;
              }
              m.error(e);
            },
            CHILD: function (a, b) {
              var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = b[1],
                l = a;
              switch (k) {
                case "only":
                case "first":
                  while ((l = l.previousSibling))
                    if (l.nodeType === 1) return !1;
                  if (k === "first") return !0;
                  l = a;
                case "last":
                  while ((l = l.nextSibling)) if (l.nodeType === 1) return !1;
                  return !0;
                case "nth":
                  (c = b[2]), (e = b[3]);
                  if (c === 1 && e === 0) return !0;
                  (f = b[0]), (g = a.parentNode);
                  if (g && (g[d] !== f || !a.nodeIndex)) {
                    i = 0;
                    for (l = g.firstChild; l; l = l.nextSibling)
                      l.nodeType === 1 && (l.nodeIndex = ++i);
                    g[d] = f;
                  }
                  j = a.nodeIndex - e;
                  return c === 0 ? j === 0 : j % c === 0 && j / c >= 0;
              }
            },
            ID: function (a, b) {
              return a.nodeType === 1 && a.getAttribute("id") === b;
            },
            TAG: function (a, b) {
              return (
                (b === "*" && a.nodeType === 1) ||
                (!!a.nodeName && a.nodeName.toLowerCase() === b)
              );
            },
            CLASS: function (a, b) {
              return (
                (" " + (a.className || a.getAttribute("class")) + " ").indexOf(
                  b
                ) > -1
              );
            },
            ATTR: function (a, b) {
              var c = b[1],
                d = m.attr
                  ? m.attr(a, c)
                  : o.attrHandle[c]
                  ? o.attrHandle[c](a)
                  : a[c] != null
                  ? a[c]
                  : a.getAttribute(c),
                e = d + "",
                f = b[2],
                g = b[4];
              return d == null
                ? f === "!="
                : !f && m.attr
                ? d != null
                : f === "="
                ? e === g
                : f === "*="
                ? e.indexOf(g) >= 0
                : f === "~="
                ? (" " + e + " ").indexOf(g) >= 0
                : g
                ? f === "!="
                  ? e !== g
                  : f === "^="
                  ? e.indexOf(g) === 0
                  : f === "$="
                  ? e.substr(e.length - g.length) === g
                  : f === "|="
                  ? e === g || e.substr(0, g.length + 1) === g + "-"
                  : !1
                : e && d !== !1;
            },
            POS: function (a, b, c, d) {
              var e = b[2],
                f = o.setFilters[e];
              if (f) return f(a, c, b, d);
            },
          },
        }),
        p = o.match.POS,
        q = function (a, b) {
          return "\\" + (b - 0 + 1);
        };
      for (var r in o.match)
        (o.match[r] = new RegExp(
          o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source
        )),
          (o.leftMatch[r] = new RegExp(
            /(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q)
          ));
      o.match.globalPOS = p;
      var s = function (a, b) {
        a = Array.prototype.slice.call(a, 0);
        if (b) {
          b.push.apply(b, a);
          return b;
        }
        return a;
      };
      try {
        Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType;
      } catch (t) {
        s = function (a, b) {
          var c = 0,
            d = b || [];
          if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
          else if (typeof a.length == "number")
            for (var e = a.length; c < e; c++) d.push(a[c]);
          else for (; a[c]; c++) d.push(a[c]);
          return d;
        };
      }
      var u, v;
      c.documentElement.compareDocumentPosition
        ? (u = function (a, b) {
            if (a === b) {
              h = !0;
              return 0;
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)
              return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1;
          })
        : ((u = function (a, b) {
            if (a === b) {
              h = !0;
              return 0;
            }
            if (a.sourceIndex && b.sourceIndex)
              return a.sourceIndex - b.sourceIndex;
            var c,
              d,
              e = [],
              f = [],
              g = a.parentNode,
              i = b.parentNode,
              j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), (j = j.parentNode);
            j = i;
            while (j) f.unshift(j), (j = j.parentNode);
            (c = e.length), (d = f.length);
            for (var k = 0; k < c && k < d; k++)
              if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1);
          }),
          (v = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
              if (d === b) return -1;
              d = d.nextSibling;
            }
            return 1;
          })),
        (function () {
          var a = c.createElement("div"),
            d = "script" + new Date().getTime(),
            e = c.documentElement;
          (a.innerHTML = "<a name='" + d + "'/>"),
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) &&
              ((o.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                  var e = c.getElementById(a[1]);
                  return e
                    ? e.id === a[1] ||
                      (typeof e.getAttributeNode != "undefined" &&
                        e.getAttributeNode("id").nodeValue === a[1])
                      ? [e]
                      : b
                    : [];
                }
              }),
              (o.filter.ID = function (a, b) {
                var c =
                  typeof a.getAttributeNode != "undefined" &&
                  a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b;
              })),
            e.removeChild(a),
            (e = a = null);
        })(),
        (function () {
          var a = c.createElement("div");
          a.appendChild(c.createComment("")),
            a.getElementsByTagName("*").length > 0 &&
              (o.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                  var d = [];
                  for (var e = 0; c[e]; e++)
                    c[e].nodeType === 1 && d.push(c[e]);
                  c = d;
                }
                return c;
              }),
            (a.innerHTML = "<a href='#'></a>"),
            a.firstChild &&
              typeof a.firstChild.getAttribute != "undefined" &&
              a.firstChild.getAttribute("href") !== "#" &&
              (o.attrHandle.href = function (a) {
                return a.getAttribute("href", 2);
              }),
            (a = null);
        })(),
        c.querySelectorAll &&
          (function () {
            var a = m,
              b = c.createElement("div"),
              d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (
              !b.querySelectorAll ||
              b.querySelectorAll(".TEST").length !== 0
            ) {
              m = function (b, e, f, g) {
                e = e || c;
                if (!g && !m.isXML(e)) {
                  var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                  if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                    if (h[1]) return s(e.getElementsByTagName(b), f);
                    if (h[2] && o.find.CLASS && e.getElementsByClassName)
                      return s(e.getElementsByClassName(h[2]), f);
                  }
                  if (e.nodeType === 9) {
                    if (b === "body" && e.body) return s([e.body], f);
                    if (h && h[3]) {
                      var i = e.getElementById(h[3]);
                      if (!i || !i.parentNode) return s([], f);
                      if (i.id === h[3]) return s([i], f);
                    }
                    try {
                      return s(e.querySelectorAll(b), f);
                    } catch (j) {}
                  } else if (
                    e.nodeType === 1 &&
                    e.nodeName.toLowerCase() !== "object"
                  ) {
                    var k = e,
                      l = e.getAttribute("id"),
                      n = l || d,
                      p = e.parentNode,
                      q = /^\s*[+~]/.test(b);
                    l ? (n = n.replace(/'/g, "\\$&")) : e.setAttribute("id", n),
                      q && p && (e = e.parentNode);
                    try {
                      if (!q || p)
                        return s(
                          e.querySelectorAll("[id='" + n + "'] " + b),
                          f
                        );
                    } catch (r) {
                    } finally {
                      l || k.removeAttribute("id");
                    }
                  }
                }
                return a(b, e, f, g);
              };
              for (var e in a) m[e] = a[e];
              b = null;
            }
          })(),
        (function () {
          var a = c.documentElement,
            b =
              a.matchesSelector ||
              a.mozMatchesSelector ||
              a.webkitMatchesSelector ||
              a.msMatchesSelector;
          if (b) {
            var d = !b.call(c.createElement("div"), "div"),
              e = !1;
            try {
              b.call(c.documentElement, "[test!='']:sizzle");
            } catch (f) {
              e = !0;
            }
            m.matchesSelector = function (a, c) {
              c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
              if (!m.isXML(a))
                try {
                  if (e || (!o.match.PSEUDO.test(c) && !/!=/.test(c))) {
                    var f = b.call(a, c);
                    if (f || !d || (a.document && a.document.nodeType !== 11))
                      return f;
                  }
                } catch (g) {}
              return m(c, null, null, [a]).length > 0;
            };
          }
        })(),
        (function () {
          var a = c.createElement("div");
          a.innerHTML = "<div class='test e'></div><div class='test'></div>";
          if (
            !!a.getElementsByClassName &&
            a.getElementsByClassName("e").length !== 0
          ) {
            a.lastChild.className = "e";
            if (a.getElementsByClassName("e").length === 1) return;
            o.order.splice(1, 0, "CLASS"),
              (o.find.CLASS = function (a, b, c) {
                if (typeof b.getElementsByClassName != "undefined" && !c)
                  return b.getElementsByClassName(a[1]);
              }),
              (a = null);
          }
        })(),
        c.documentElement.contains
          ? (m.contains = function (a, b) {
              return a !== b && (a.contains ? a.contains(b) : !0);
            })
          : c.documentElement.compareDocumentPosition
          ? (m.contains = function (a, b) {
              return !!(a.compareDocumentPosition(b) & 16);
            })
          : (m.contains = function () {
              return !1;
            }),
        (m.isXML = function (a) {
          var b = (a ? a.ownerDocument || a : 0).documentElement;
          return b ? b.nodeName !== "HTML" : !1;
        });
      var y = function (a, b, c) {
        var d,
          e = [],
          f = "",
          g = b.nodeType ? [b] : b;
        while ((d = o.match.PSEUDO.exec(a)))
          (f += d[0]), (a = a.replace(o.match.PSEUDO, ""));
        a = o.relative[a] ? a + "*" : a;
        for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
        return m.filter(f, e);
      };
      (m.attr = f.attr),
        (m.selectors.attrMap = {}),
        (f.find = m),
        (f.expr = m.selectors),
        (f.expr[":"] = f.expr.filters),
        (f.unique = m.uniqueSort),
        (f.text = m.getText),
        (f.isXMLDoc = m.isXML),
        (f.contains = m.contains);
    })();
  var L = /Until$/,
    M = /^(?:parents|prevUntil|prevAll)/,
    N = /,/,
    O = /^.[^:#\[\.,]*$/,
    P = Array.prototype.slice,
    Q = f.expr.match.globalPOS,
    R = { children: !0, contents: !0, next: !0, prev: !0 };
  f.fn.extend({
    find: function (a) {
      var b = this,
        c,
        d;
      if (typeof a != "string")
        return f(a).filter(function () {
          for (c = 0, d = b.length; c < d; c++)
            if (f.contains(b[c], this)) return !0;
        });
      var e = this.pushStack("", "find", a),
        g,
        h,
        i;
      for (c = 0, d = this.length; c < d; c++) {
        (g = e.length), f.find(a, this[c], e);
        if (c > 0)
          for (h = g; h < e.length; h++)
            for (i = 0; i < g; i++)
              if (e[i] === e[h]) {
                e.splice(h--, 1);
                break;
              }
      }
      return e;
    },
    has: function (a) {
      var b = f(a);
      return this.filter(function () {
        for (var a = 0, c = b.length; a < c; a++)
          if (f.contains(this, b[a])) return !0;
      });
    },
    not: function (a) {
      return this.pushStack(T(this, a, !1), "not", a);
    },
    filter: function (a) {
      return this.pushStack(T(this, a, !0), "filter", a);
    },
    is: function (a) {
      return (
        !!a &&
        (typeof a == "string"
          ? Q.test(a)
            ? f(a, this.context).index(this[0]) >= 0
            : f.filter(a, this).length > 0
          : this.filter(a).length > 0)
      );
    },
    closest: function (a, b) {
      var c = [],
        d,
        e,
        g = this[0];
      if (f.isArray(a)) {
        var h = 1;
        while (g && g.ownerDocument && g !== b) {
          for (d = 0; d < a.length; d++)
            f(g).is(a[d]) && c.push({ selector: a[d], elem: g, level: h });
          (g = g.parentNode), h++;
        }
        return c;
      }
      var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
      for (d = 0, e = this.length; d < e; d++) {
        g = this[d];
        while (g) {
          if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
            c.push(g);
            break;
          }
          g = g.parentNode;
          if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break;
        }
      }
      c = c.length > 1 ? f.unique(c) : c;
      return this.pushStack(c, "closest", a);
    },
    index: function (a) {
      if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
      if (typeof a == "string") return f.inArray(this[0], f(a));
      return f.inArray(a.jquery ? a[0] : a, this);
    },
    add: function (a, b) {
      var c =
          typeof a == "string"
            ? f(a, b)
            : f.makeArray(a && a.nodeType ? [a] : a),
        d = f.merge(this.get(), c);
      return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d));
    },
    andSelf: function () {
      return this.add(this.prevObject);
    },
  }),
    f.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && b.nodeType !== 11 ? b : null;
        },
        parents: function (a) {
          return f.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return f.dir(a, "parentNode", c);
        },
        next: function (a) {
          return f.nth(a, 2, "nextSibling");
        },
        prev: function (a) {
          return f.nth(a, 2, "previousSibling");
        },
        nextAll: function (a) {
          return f.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return f.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return f.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return f.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return f.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return f.sibling(a.firstChild);
        },
        contents: function (a) {
          return f.nodeName(a, "iframe")
            ? a.contentDocument || a.contentWindow.document
            : f.makeArray(a.childNodes);
        },
      },
      function (a, b) {
        f.fn[a] = function (c, d) {
          var e = f.map(this, b, c);
          L.test(a) || (d = c),
            d && typeof d == "string" && (e = f.filter(d, e)),
            (e = this.length > 1 && !R[a] ? f.unique(e) : e),
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
          return this.pushStack(e, a, P.call(arguments).join(","));
        };
      }
    ),
    f.extend({
      filter: function (a, b, c) {
        c && (a = ":not(" + a + ")");
        return b.length === 1
          ? f.find.matchesSelector(b[0], a)
            ? [b[0]]
            : []
          : f.find.matches(a, b);
      },
      dir: function (a, c, d) {
        var e = [],
          g = a[c];
        while (
          g &&
          g.nodeType !== 9 &&
          (d === b || g.nodeType !== 1 || !f(g).is(d))
        )
          g.nodeType === 1 && e.push(g), (g = g[c]);
        return e;
      },
      nth: function (a, b, c, d) {
        b = b || 1;
        var e = 0;
        for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
        return a;
      },
      sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
        return c;
      },
    });
  var V =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    W = / jQuery\d+="(?:\d+|null)"/g,
    X = /^\s+/,
    Y =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Z = /<([\w:]+)/,
    $ = /<tbody/i,
    _ = /<|&#?\w+;/,
    ba = /<(?:script|style)/i,
    bb = /<(?:script|object|embed|option|style)/i,
    bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
    bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
    be = /\/(java|ecma)script/i,
    bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
    bg = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    bh = U(c);
  (bg.optgroup = bg.option),
    (bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead),
    (bg.th = bg.td),
    f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]),
    f.fn.extend({
      text: function (a) {
        return f.access(
          this,
          function (a) {
            return a === b
              ? f.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || c).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      wrapAll: function (a) {
        if (f.isFunction(a))
          return this.each(function (b) {
            f(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        if (f.isFunction(a))
          return this.each(function (b) {
            f(this).wrapInner(a.call(this, b));
          });
        return this.each(function () {
          var b = f(this),
            c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a);
        });
      },
      wrap: function (a) {
        var b = f.isFunction(a);
        return this.each(function (c) {
          f(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            f.nodeName(this, "body") || f(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (a) {
          this.nodeType === 1 && this.appendChild(a);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          this.nodeType === 1 && this.insertBefore(a, this.firstChild);
        });
      },
      before: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this);
          });
        if (arguments.length) {
          var a = f.clean(arguments);
          a.push.apply(a, this.toArray());
          return this.pushStack(a, "before", arguments);
        }
      },
      after: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling);
          });
        if (arguments.length) {
          var a = this.pushStack(this, "after", arguments);
          a.push.apply(a, f.clean(arguments));
          return a;
        }
      },
      remove: function (a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++)
          if (!a || f.filter(a, [d]).length)
            !b &&
              d.nodeType === 1 &&
              (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])),
              d.parentNode && d.parentNode.removeChild(d);
        return this;
      },
      empty: function () {
        for (var a = 0, b; (b = this[a]) != null; a++) {
          b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
          while (b.firstChild) b.removeChild(b.firstChild);
        }
        return this;
      },
      clone: function (a, b) {
        (a = a == null ? !1 : a), (b = b == null ? a : b);
        return this.map(function () {
          return f.clone(this, a, b);
        });
      },
      html: function (a) {
        return f.access(
          this,
          function (a) {
            var c = this[0] || {},
              d = 0,
              e = this.length;
            if (a === b)
              return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;
            if (
              typeof a == "string" &&
              !ba.test(a) &&
              (f.support.leadingWhitespace || !X.test(a)) &&
              !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(Y, "<$1></$2>");
              try {
                for (; d < e; d++)
                  (c = this[d] || {}),
                    c.nodeType === 1 &&
                      (f.cleanData(c.getElementsByTagName("*")),
                      (c.innerHTML = a));
                c = 0;
              } catch (g) {}
            }
            c && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function (a) {
        if (this[0] && this[0].parentNode) {
          if (f.isFunction(a))
            return this.each(function (b) {
              var c = f(this),
                d = c.html();
              c.replaceWith(a.call(this, b, d));
            });
          typeof a != "string" && (a = f(a).detach());
          return this.each(function () {
            var b = this.nextSibling,
              c = this.parentNode;
            f(this).remove(), b ? f(b).before(a) : f(c).append(a);
          });
        }
        return this.length
          ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a)
          : this;
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, c, d) {
        var e,
          g,
          h,
          i,
          j = a[0],
          k = [];
        if (
          !f.support.checkClone &&
          arguments.length === 3 &&
          typeof j == "string" &&
          bd.test(j)
        )
          return this.each(function () {
            f(this).domManip(a, c, d, !0);
          });
        if (f.isFunction(j))
          return this.each(function (e) {
            var g = f(this);
            (a[0] = j.call(this, e, c ? g.html() : b)), g.domManip(a, c, d);
          });
        if (this[0]) {
          (i = j && j.parentNode),
            f.support.parentNode &&
            i &&
            i.nodeType === 11 &&
            i.childNodes.length === this.length
              ? (e = { fragment: i })
              : (e = f.buildFragment(a, this, k)),
            (h = e.fragment),
            h.childNodes.length === 1
              ? (g = h = h.firstChild)
              : (g = h.firstChild);
          if (g) {
            c = c && f.nodeName(g, "tr");
            for (var l = 0, m = this.length, n = m - 1; l < m; l++)
              d.call(
                c ? bi(this[l], g) : this[l],
                e.cacheable || (m > 1 && l < n) ? f.clone(h, !0, !0) : h
              );
          }
          k.length &&
            f.each(k, function (a, b) {
              b.src
                ? f.ajax({
                    type: "GET",
                    global: !1,
                    url: b.src,
                    async: !1,
                    dataType: "script",
                  })
                : f.globalEval(
                    (b.text || b.textContent || b.innerHTML || "").replace(
                      bf,
                      "/*$0*/"
                    )
                  ),
                b.parentNode && b.parentNode.removeChild(b);
            });
        }
        return this;
      },
    }),
    (f.buildFragment = function (a, b, d) {
      var e,
        g,
        h,
        i,
        j = a[0];
      b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        a.length === 1 &&
          typeof j == "string" &&
          j.length < 512 &&
          i === c &&
          j.charAt(0) === "<" &&
          !bb.test(j) &&
          (f.support.checkClone || !bd.test(j)) &&
          (f.support.html5Clone || !bc.test(j)) &&
          ((g = !0), (h = f.fragments[j]), h && h !== 1 && (e = h)),
        e || ((e = i.createDocumentFragment()), f.clean(a, i, e, d)),
        g && (f.fragments[j] = h ? e : 1);
      return { fragment: e, cacheable: g };
    }),
    (f.fragments = {}),
    f.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        f.fn[a] = function (c) {
          var d = [],
            e = f(c),
            g = this.length === 1 && this[0].parentNode;
          if (
            g &&
            g.nodeType === 11 &&
            g.childNodes.length === 1 &&
            e.length === 1
          ) {
            e[b](this[0]);
            return this;
          }
          for (var h = 0, i = e.length; h < i; h++) {
            var j = (h > 0 ? this.clone(!0) : this).get();
            f(e[h])[b](j), (d = d.concat(j));
          }
          return this.pushStack(d, a, e.selector);
        };
      }
    ),
    f.extend({
      clone: function (a, b, c) {
        var d,
          e,
          g,
          h =
            f.support.html5Clone ||
            f.isXMLDoc(a) ||
            !bc.test("<" + a.nodeName + ">")
              ? a.cloneNode(!0)
              : bo(a);
        if (
          (!f.support.noCloneEvent || !f.support.noCloneChecked) &&
          (a.nodeType === 1 || a.nodeType === 11) &&
          !f.isXMLDoc(a)
        ) {
          bk(a, h), (d = bl(a)), (e = bl(h));
          for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g]);
        }
        if (b) {
          bj(a, h);
          if (c) {
            (d = bl(a)), (e = bl(h));
            for (g = 0; d[g]; ++g) bj(d[g], e[g]);
          }
        }
        d = e = null;
        return h;
      },
      clean: function (a, b, d, e) {
        var g,
          h,
          i,
          j = [];
        (b = b || c),
          typeof b.createElement == "undefined" &&
            (b = b.ownerDocument || (b[0] && b[0].ownerDocument) || c);
        for (var k = 0, l; (l = a[k]) != null; k++) {
          typeof l == "number" && (l += "");
          if (!l) continue;
          if (typeof l == "string")
            if (!_.test(l)) l = b.createTextNode(l);
            else {
              l = l.replace(Y, "<$1></$2>");
              var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                n = bg[m] || bg._default,
                o = n[0],
                p = b.createElement("div"),
                q = bh.childNodes,
                r;
              b === c ? bh.appendChild(p) : U(b).appendChild(p),
                (p.innerHTML = n[1] + l + n[2]);
              while (o--) p = p.lastChild;
              if (!f.support.tbody) {
                var s = $.test(l),
                  t =
                    m === "table" && !s
                      ? p.firstChild && p.firstChild.childNodes
                      : n[1] === "<table>" && !s
                      ? p.childNodes
                      : [];
                for (i = t.length - 1; i >= 0; --i)
                  f.nodeName(t[i], "tbody") &&
                    !t[i].childNodes.length &&
                    t[i].parentNode.removeChild(t[i]);
              }
              !f.support.leadingWhitespace &&
                X.test(l) &&
                p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild),
                (l = p.childNodes),
                p &&
                  (p.parentNode.removeChild(p),
                  q.length > 0 &&
                    ((r = q[q.length - 1]),
                    r && r.parentNode && r.parentNode.removeChild(r)));
            }
          var u;
          if (!f.support.appendChecked)
            if (l[0] && typeof (u = l.length) == "number")
              for (i = 0; i < u; i++) bn(l[i]);
            else bn(l);
          l.nodeType ? j.push(l) : (j = f.merge(j, l));
        }
        if (d) {
          g = function (a) {
            return !a.type || be.test(a.type);
          };
          for (k = 0; j[k]; k++) {
            h = j[k];
            if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type)))
              e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
            else {
              if (h.nodeType === 1) {
                var v = f.grep(h.getElementsByTagName("script"), g);
                j.splice.apply(j, [k + 1, 0].concat(v));
              }
              d.appendChild(h);
            }
          }
        }
        return j;
      },
      cleanData: function (a) {
        var b,
          c,
          d = f.cache,
          e = f.event.special,
          g = f.support.deleteExpando;
        for (var h = 0, i; (i = a[h]) != null; h++) {
          if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
          c = i[f.expando];
          if (c) {
            b = d[c];
            if (b && b.events) {
              for (var j in b.events)
                e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
              b.handle && (b.handle.elem = null);
            }
            g
              ? delete i[f.expando]
              : i.removeAttribute && i.removeAttribute(f.expando),
              delete d[c];
          }
        }
      },
    });
  var bp = /alpha\([^)]*\)/i,
    bq = /opacity=([^)]*)/,
    br = /([A-Z]|^ms)/g,
    bs = /^[\-+]?(?:\d*\.)?\d+$/i,
    bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
    bu = /^([\-+])=([\-+.\de]+)/,
    bv = /^margin/,
    bw = { position: "absolute", visibility: "hidden", display: "block" },
    bx = ["Top", "Right", "Bottom", "Left"],
    by,
    bz,
    bA;
  (f.fn.css = function (a, c) {
    return f.access(
      this,
      function (a, c, d) {
        return d !== b ? f.style(a, c, d) : f.css(a, c);
      },
      a,
      c,
      arguments.length > 1
    );
  }),
    f.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = by(a, "opacity");
              return c === "" ? "1" : c;
            }
            return a.style.opacity;
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: f.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (a, c, d, e) {
        if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
          var g,
            h,
            i = f.camelCase(c),
            j = a.style,
            k = f.cssHooks[i];
          c = f.cssProps[i] || i;
          if (d === b) {
            if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
            return j[c];
          }
          (h = typeof d),
            h === "string" &&
              (g = bu.exec(d)) &&
              ((d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c))),
              (h = "number"));
          if (d == null || (h === "number" && isNaN(d))) return;
          h === "number" && !f.cssNumber[i] && (d += "px");
          if (!k || !("set" in k) || (d = k.set(a, d)) !== b)
            try {
              j[c] = d;
            } catch (l) {}
        }
      },
      css: function (a, c, d) {
        var e, g;
        (c = f.camelCase(c)),
          (g = f.cssHooks[c]),
          (c = f.cssProps[c] || c),
          c === "cssFloat" && (c = "float");
        if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
        if (by) return by(a, c);
      },
      swap: function (a, b, c) {
        var d = {},
          e,
          f;
        for (f in b) (d[f] = a.style[f]), (a.style[f] = b[f]);
        e = c.call(a);
        for (f in b) a.style[f] = d[f];
        return e;
      },
    }),
    (f.curCSS = f.css),
    c.defaultView &&
      c.defaultView.getComputedStyle &&
      (bz = function (a, b) {
        var c,
          d,
          e,
          g,
          h = a.style;
        (b = b.replace(br, "-$1").toLowerCase()),
          (d = a.ownerDocument.defaultView) &&
            (e = d.getComputedStyle(a, null)) &&
            ((c = e.getPropertyValue(b)),
            c === "" &&
              !f.contains(a.ownerDocument.documentElement, a) &&
              (c = f.style(a, b))),
          !f.support.pixelMargin &&
            e &&
            bv.test(b) &&
            bt.test(c) &&
            ((g = h.width), (h.width = c), (c = e.width), (h.width = g));
        return c;
      }),
    c.documentElement.currentStyle &&
      (bA = function (a, b) {
        var c,
          d,
          e,
          f = a.currentStyle && a.currentStyle[b],
          g = a.style;
        f == null && g && (e = g[b]) && (f = e),
          bt.test(f) &&
            ((c = g.left),
            (d = a.runtimeStyle && a.runtimeStyle.left),
            d && (a.runtimeStyle.left = a.currentStyle.left),
            (g.left = b === "fontSize" ? "1em" : f),
            (f = g.pixelLeft + "px"),
            (g.left = c),
            d && (a.runtimeStyle.left = d));
        return f === "" ? "auto" : f;
      }),
    (by = bz || bA),
    f.each(["height", "width"], function (a, b) {
      f.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return a.offsetWidth !== 0
              ? bB(a, b, d)
              : f.swap(a, bw, function () {
                  return bB(a, b, d);
                });
        },
        set: function (a, b) {
          return bs.test(b) ? b + "px" : b;
        },
      };
    }),
    f.support.opacity ||
      (f.cssHooks.opacity = {
        get: function (a, b) {
          return bq.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? parseFloat(RegExp.$1) / 100 + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
            g = (d && d.filter) || c.filter || "";
          c.zoom = 1;
          if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
            c.removeAttribute("filter");
            if (d && !d.filter) return;
          }
          c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e;
        },
      }),
    f(function () {
      f.support.reliableMarginRight ||
        (f.cssHooks.marginRight = {
          get: function (a, b) {
            return f.swap(a, { display: "inline-block" }, function () {
              return b ? by(a, "margin-right") : a.style.marginRight;
            });
          },
        });
    }),
    f.expr &&
      f.expr.filters &&
      ((f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
          c = a.offsetHeight;
        return (
          (b === 0 && c === 0) ||
          (!f.support.reliableHiddenOffsets &&
            ((a.style && a.style.display) || f.css(a, "display")) === "none")
        );
      }),
      (f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a);
      })),
    f.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      f.cssHooks[a + b] = {
        expand: function (c) {
          var d,
            e = typeof c == "string" ? c.split(" ") : [c],
            f = {};
          for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
          return f;
        },
      };
    });
  var bC = /%20/g,
    bD = /\[\]$/,
    bE = /\r?\n/g,
    bF = /#.*$/,
    bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    bH =
      /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    bJ = /^(?:GET|HEAD)$/,
    bK = /^\/\//,
    bL = /\?/,
    bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bN = /^(?:select|textarea)/i,
    bO = /\s+/,
    bP = /([?&])_=[^&]*/,
    bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bR = f.fn.load,
    bS = {},
    bT = {},
    bU,
    bV,
    bW = ["*/"] + ["*"];
  try {
    bU = e.href;
  } catch (bX) {
    (bU = c.createElement("a")), (bU.href = ""), (bU = bU.href);
  }
  (bV = bQ.exec(bU.toLowerCase()) || []),
    f.fn.extend({
      load: function (a, c, d) {
        if (typeof a != "string" && bR) return bR.apply(this, arguments);
        if (!this.length) return this;
        var e = a.indexOf(" ");
        if (e >= 0) {
          var g = a.slice(e, a.length);
          a = a.slice(0, e);
        }
        var h = "GET";
        c &&
          (f.isFunction(c)
            ? ((d = c), (c = b))
            : typeof c == "object" &&
              ((c = f.param(c, f.ajaxSettings.traditional)), (h = "POST")));
        var i = this;
        f.ajax({
          url: a,
          type: h,
          dataType: "html",
          data: c,
          complete: function (a, b, c) {
            (c = a.responseText),
              a.isResolved() &&
                (a.done(function (a) {
                  c = a;
                }),
                i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)),
              d && i.each(d, [c, b, a]);
          },
        });
        return this;
      },
      serialize: function () {
        return f.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? f.makeArray(this.elements) : this;
        })
          .filter(function () {
            return (
              this.name &&
              !this.disabled &&
              (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            );
          })
          .map(function (a, b) {
            var c = f(this).val();
            return c == null
              ? null
              : f.isArray(c)
              ? f.map(c, function (a, c) {
                  return { name: b.name, value: a.replace(bE, "\r\n") };
                })
              : { name: b.name, value: c.replace(bE, "\r\n") };
          })
          .get();
      },
    }),
    f.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (a, b) {
        f.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    f.each(["get", "post"], function (a, c) {
      f[c] = function (a, d, e, g) {
        f.isFunction(d) && ((g = g || e), (e = d), (d = b));
        return f.ajax({ type: c, url: a, data: d, success: e, dataType: g });
      };
    }),
    f.extend({
      getScript: function (a, c) {
        return f.get(a, b, c, "script");
      },
      getJSON: function (a, b, c) {
        return f.get(a, b, c, "json");
      },
      ajaxSetup: function (a, b) {
        b ? b$(a, f.ajaxSettings) : ((b = a), (a = f.ajaxSettings)), b$(a, b);
        return a;
      },
      ajaxSettings: {
        url: bU,
        isLocal: bI.test(bV[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": bW,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": a.String,
          "text html": !0,
          "text json": f.parseJSON,
          "text xml": f.parseXML,
        },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: bY(bS),
      ajaxTransport: bY(bT),
      ajax: function (a, c) {
        function w(a, c, l, m) {
          if (s !== 2) {
            (s = 2),
              q && clearTimeout(q),
              (p = b),
              (n = m || ""),
              (v.readyState = a > 0 ? 4 : 0);
            var o,
              r,
              u,
              w = c,
              x = l ? ca(d, v, l) : b,
              y,
              z;
            if ((a >= 200 && a < 300) || a === 304) {
              if (d.ifModified) {
                if ((y = v.getResponseHeader("Last-Modified")))
                  f.lastModified[k] = y;
                if ((z = v.getResponseHeader("Etag"))) f.etag[k] = z;
              }
              if (a === 304) (w = "notmodified"), (o = !0);
              else
                try {
                  (r = cb(d, x)), (w = "success"), (o = !0);
                } catch (A) {
                  (w = "parsererror"), (u = A);
                }
            } else {
              u = w;
              if (!w || a) (w = "error"), a < 0 && (a = 0);
            }
            (v.status = a),
              (v.statusText = "" + (c || w)),
              o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
              v.statusCode(j),
              (j = b),
              t &&
                g.trigger("ajax" + (o ? "Success" : "Error"), [
                  v,
                  d,
                  o ? r : u,
                ]),
              i.fireWith(e, [v, w]),
              t &&
                (g.trigger("ajaxComplete", [v, d]),
                --f.active || f.event.trigger("ajaxStop"));
          }
        }
        typeof a == "object" && ((c = a), (a = b)), (c = c || {});
        var d = f.ajaxSetup({}, c),
          e = d.context || d,
          g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
          h = f.Deferred(),
          i = f.Callbacks("once memory"),
          j = d.statusCode || {},
          k,
          l = {},
          m = {},
          n,
          o,
          p,
          q,
          r,
          s = 0,
          t,
          u,
          v = {
            readyState: 0,
            setRequestHeader: function (a, b) {
              if (!s) {
                var c = a.toLowerCase();
                (a = m[c] = m[c] || a), (l[a] = b);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return s === 2 ? n : null;
            },
            getResponseHeader: function (a) {
              var c;
              if (s === 2) {
                if (!o) {
                  o = {};
                  while ((c = bG.exec(n))) o[c[1].toLowerCase()] = c[2];
                }
                c = o[a.toLowerCase()];
              }
              return c === b ? null : c;
            },
            overrideMimeType: function (a) {
              s || (d.mimeType = a);
              return this;
            },
            abort: function (a) {
              (a = a || "abort"), p && p.abort(a), w(0, a);
              return this;
            },
          };
        h.promise(v),
          (v.success = v.done),
          (v.error = v.fail),
          (v.complete = i.add),
          (v.statusCode = function (a) {
            if (a) {
              var b;
              if (s < 2) for (b in a) j[b] = [j[b], a[b]];
              else (b = a[v.status]), v.then(b, b);
            }
            return this;
          }),
          (d.url = ((a || d.url) + "")
            .replace(bF, "")
            .replace(bK, bV[1] + "//")),
          (d.dataTypes = f
            .trim(d.dataType || "*")
            .toLowerCase()
            .split(bO)),
          d.crossDomain == null &&
            ((r = bQ.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !r ||
              (r[1] == bV[1] &&
                r[2] == bV[2] &&
                (r[3] || (r[1] === "http:" ? 80 : 443)) ==
                  (bV[3] || (bV[1] === "http:" ? 80 : 443)))
            ))),
          d.data &&
            d.processData &&
            typeof d.data != "string" &&
            (d.data = f.param(d.data, d.traditional)),
          bZ(bS, d, c, v);
        if (s === 2) return !1;
        (t = d.global),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !bJ.test(d.type)),
          t && f.active++ === 0 && f.event.trigger("ajaxStart");
        if (!d.hasContent) {
          d.data &&
            ((d.url += (bL.test(d.url) ? "&" : "?") + d.data), delete d.data),
            (k = d.url);
          if (d.cache === !1) {
            var x = f.now(),
              y = d.url.replace(bP, "$1_=" + x);
            d.url =
              y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "");
          }
        }
        ((d.data && d.hasContent && d.contentType !== !1) || c.contentType) &&
          v.setRequestHeader("Content-Type", d.contentType),
          d.ifModified &&
            ((k = k || d.url),
            f.lastModified[k] &&
              v.setRequestHeader("If-Modified-Since", f.lastModified[k]),
            f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
          v.setRequestHeader(
            "Accept",
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "")
              : d.accepts["*"]
          );
        for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
        if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
          v.abort();
          return !1;
        }
        for (u in { success: 1, error: 1, complete: 1 }) v[u](d[u]);
        p = bZ(bT, d, c, v);
        if (!p) w(-1, "No Transport");
        else {
          (v.readyState = 1),
            t && g.trigger("ajaxSend", [v, d]),
            d.async &&
              d.timeout > 0 &&
              (q = setTimeout(function () {
                v.abort("timeout");
              }, d.timeout));
          try {
            (s = 1), p.send(l, w);
          } catch (z) {
            if (s < 2) w(-1, z);
            else throw z;
          }
        }
        return v;
      },
      param: function (a, c) {
        var d = [],
          e = function (a, b) {
            (b = f.isFunction(b) ? b() : b),
              (d[d.length] =
                encodeURIComponent(a) + "=" + encodeURIComponent(b));
          };
        c === b && (c = f.ajaxSettings.traditional);
        if (f.isArray(a) || (a.jquery && !f.isPlainObject(a)))
          f.each(a, function () {
            e(this.name, this.value);
          });
        else for (var g in a) b_(g, a[g], c, e);
        return d.join("&").replace(bC, "+");
      },
    }),
    f.extend({ active: 0, lastModified: {}, etag: {} });
  var cc = f.now(),
    cd = /(\=)\?(&|$)|\?\?/i;
  f.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      return f.expando + "_" + cc++;
    },
  }),
    f.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e =
        typeof b.data == "string" &&
        /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
      if (
        b.dataTypes[0] === "jsonp" ||
        (b.jsonp !== !1 && (cd.test(b.url) || (e && cd.test(b.data))))
      ) {
        var g,
          h = (b.jsonpCallback = f.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          i = a[h],
          j = b.url,
          k = b.data,
          l = "$1" + h + "$2";
        b.jsonp !== !1 &&
          ((j = j.replace(cd, l)),
          b.url === j &&
            (e && (k = k.replace(cd, l)),
            b.data === k &&
              (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
          (b.url = j),
          (b.data = k),
          (a[h] = function (a) {
            g = [a];
          }),
          d.always(function () {
            (a[h] = i), g && f.isFunction(i) && a[h](g[0]);
          }),
          (b.converters["script json"] = function () {
            g || f.error(h + " was not called");
            return g[0];
          }),
          (b.dataTypes[0] = "json");
        return "script";
      }
    }),
    f.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text script": function (a) {
          f.globalEval(a);
          return a;
        },
      },
    }),
    f.ajaxPrefilter("script", function (a) {
      a.cache === b && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    f.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var d,
          e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
        return {
          send: function (f, g) {
            (d = c.createElement("script")),
              (d.async = "async"),
              a.scriptCharset && (d.charset = a.scriptCharset),
              (d.src = a.url),
              (d.onload = d.onreadystatechange =
                function (a, c) {
                  if (
                    c ||
                    !d.readyState ||
                    /loaded|complete/.test(d.readyState)
                  )
                    (d.onload = d.onreadystatechange = null),
                      e && d.parentNode && e.removeChild(d),
                      (d = b),
                      c || g(200, "success");
                }),
              e.insertBefore(d, e.firstChild);
          },
          abort: function () {
            d && d.onload(0, 1);
          },
        };
      }
    });
  var ce = a.ActiveXObject
      ? function () {
          for (var a in cg) cg[a](0, 1);
        }
      : !1,
    cf = 0,
    cg;
  (f.ajaxSettings.xhr = a.ActiveXObject
    ? function () {
        return (!this.isLocal && ch()) || ci();
      }
    : ch),
    (function (a) {
      f.extend(f.support, { ajax: !!a, cors: !!a && "withCredentials" in a });
    })(f.ajaxSettings.xhr()),
    f.support.ajax &&
      f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
          var d;
          return {
            send: function (e, g) {
              var h = c.xhr(),
                i,
                j;
              c.username
                ? h.open(c.type, c.url, c.async, c.username, c.password)
                : h.open(c.type, c.url, c.async);
              if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
              c.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(c.mimeType),
                !c.crossDomain &&
                  !e["X-Requested-With"] &&
                  (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (j in e) h.setRequestHeader(j, e[j]);
              } catch (k) {}
              h.send((c.hasContent && c.data) || null),
                (d = function (a, e) {
                  var j, k, l, m, n;
                  try {
                    if (d && (e || h.readyState === 4)) {
                      (d = b),
                        i &&
                          ((h.onreadystatechange = f.noop), ce && delete cg[i]);
                      if (e) h.readyState !== 4 && h.abort();
                      else {
                        (j = h.status),
                          (l = h.getAllResponseHeaders()),
                          (m = {}),
                          (n = h.responseXML),
                          n && n.documentElement && (m.xml = n);
                        try {
                          m.text = h.responseText;
                        } catch (a) {}
                        try {
                          k = h.statusText;
                        } catch (o) {
                          k = "";
                        }
                        !j && c.isLocal && !c.crossDomain
                          ? (j = m.text ? 200 : 404)
                          : j === 1223 && (j = 204);
                      }
                    }
                  } catch (p) {
                    e || g(-1, p);
                  }
                  m && g(j, k, m, l);
                }),
                !c.async || h.readyState === 4
                  ? d()
                  : ((i = ++cf),
                    ce && (cg || ((cg = {}), f(a).unload(ce)), (cg[i] = d)),
                    (h.onreadystatechange = d));
            },
            abort: function () {
              d && d(0, 1);
            },
          };
        }
      });
  var cj = {},
    ck,
    cl,
    cm = /^(?:toggle|show|hide)$/,
    cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    co,
    cp = [
      ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
      ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
      ["opacity"],
    ],
    cq;
  f.fn.extend({
    show: function (a, b, c) {
      var d, e;
      if (a || a === 0) return this.animate(ct("show", 3), a, b, c);
      for (var g = 0, h = this.length; g < h; g++)
        (d = this[g]),
          d.style &&
            ((e = d.style.display),
            !f._data(d, "olddisplay") &&
              e === "none" &&
              (e = d.style.display = ""),
            ((e === "" && f.css(d, "display") === "none") ||
              !f.contains(d.ownerDocument.documentElement, d)) &&
              f._data(d, "olddisplay", cu(d.nodeName)));
      for (g = 0; g < h; g++) {
        d = this[g];
        if (d.style) {
          e = d.style.display;
          if (e === "" || e === "none")
            d.style.display = f._data(d, "olddisplay") || "";
        }
      }
      return this;
    },
    hide: function (a, b, c) {
      if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
      var d,
        e,
        g = 0,
        h = this.length;
      for (; g < h; g++)
        (d = this[g]),
          d.style &&
            ((e = f.css(d, "display")),
            e !== "none" &&
              !f._data(d, "olddisplay") &&
              f._data(d, "olddisplay", e));
      for (g = 0; g < h; g++) this[g].style && (this[g].style.display = "none");
      return this;
    },
    _toggle: f.fn.toggle,
    toggle: function (a, b, c) {
      var d = typeof a == "boolean";
      f.isFunction(a) && f.isFunction(b)
        ? this._toggle.apply(this, arguments)
        : a == null || d
        ? this.each(function () {
            var b = d ? a : f(this).is(":hidden");
            f(this)[b ? "show" : "hide"]();
          })
        : this.animate(ct("toggle", 3), a, b, c);
      return this;
    },
    fadeTo: function (a, b, c, d) {
      return this.filter(":hidden")
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: b }, a, c, d);
    },
    animate: function (a, b, c, d) {
      function g() {
        e.queue === !1 && f._mark(this);
        var b = f.extend({}, e),
          c = this.nodeType === 1,
          d = c && f(this).is(":hidden"),
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q;
        b.animatedProperties = {};
        for (i in a) {
          (g = f.camelCase(i)), i !== g && ((a[g] = a[i]), delete a[i]);
          if ((k = f.cssHooks[g]) && "expand" in k) {
            (l = k.expand(a[g])), delete a[g];
            for (i in l) i in a || (a[i] = l[i]);
          }
        }
        for (g in a) {
          (h = a[g]),
            f.isArray(h)
              ? ((b.animatedProperties[g] = h[1]), (h = a[g] = h[0]))
              : (b.animatedProperties[g] =
                  (b.specialEasing && b.specialEasing[g]) ||
                  b.easing ||
                  "swing");
          if ((h === "hide" && d) || (h === "show" && !d))
            return b.complete.call(this);
          c &&
            (g === "height" || g === "width") &&
            ((b.overflow = [
              this.style.overflow,
              this.style.overflowX,
              this.style.overflowY,
            ]),
            f.css(this, "display") === "inline" &&
              f.css(this, "float") === "none" &&
              (!f.support.inlineBlockNeedsLayout ||
              cu(this.nodeName) === "inline"
                ? (this.style.display = "inline-block")
                : (this.style.zoom = 1)));
        }
        b.overflow != null && (this.style.overflow = "hidden");
        for (i in a)
          (j = new f.fx(this, b, i)),
            (h = a[i]),
            cm.test(h)
              ? ((q =
                  f._data(this, "toggle" + i) ||
                  (h === "toggle" ? (d ? "show" : "hide") : 0)),
                q
                  ? (f._data(
                      this,
                      "toggle" + i,
                      q === "show" ? "hide" : "show"
                    ),
                    j[q]())
                  : j[h]())
              : ((m = cn.exec(h)),
                (n = j.cur()),
                m
                  ? ((o = parseFloat(m[2])),
                    (p = m[3] || (f.cssNumber[i] ? "" : "px")),
                    p !== "px" &&
                      (f.style(this, i, (o || 1) + p),
                      (n = ((o || 1) / j.cur()) * n),
                      f.style(this, i, n + p)),
                    m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n),
                    j.custom(n, o, p))
                  : j.custom(n, h, ""));
        return !0;
      }
      var e = f.speed(b, c, d);
      if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
      a = f.extend({}, a);
      return e.queue === !1 ? this.each(g) : this.queue(e.queue, g);
    },
    stop: function (a, c, d) {
      typeof a != "string" && ((d = c), (c = a), (a = b)),
        c && a !== !1 && this.queue(a || "fx", []);
      return this.each(function () {
        function h(a, b, c) {
          var e = b[c];
          f.removeData(a, c, !0), e.stop(d);
        }
        var b,
          c = !1,
          e = f.timers,
          g = f._data(this);
        d || f._unmark(!0, this);
        if (a == null)
          for (b in g)
            g[b] &&
              g[b].stop &&
              b.indexOf(".run") === b.length - 4 &&
              h(this, g, b);
        else g[(b = a + ".run")] && g[b].stop && h(this, g, b);
        for (b = e.length; b--; )
          e[b].elem === this &&
            (a == null || e[b].queue === a) &&
            (d ? e[b](!0) : e[b].saveState(), (c = !0), e.splice(b, 1));
        (!d || !c) && f.dequeue(this, a);
      });
    },
  }),
    f.each(
      {
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        f.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    f.extend({
      speed: function (a, b, c) {
        var d =
          a && typeof a == "object"
            ? f.extend({}, a)
            : {
                complete: c || (!c && b) || (f.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !f.isFunction(b) && b),
              };
        d.duration = f.fx.off
          ? 0
          : typeof d.duration == "number"
          ? d.duration
          : d.duration in f.fx.speeds
          ? f.fx.speeds[d.duration]
          : f.fx.speeds._default;
        if (d.queue == null || d.queue === !0) d.queue = "fx";
        (d.old = d.complete),
          (d.complete = function (a) {
            f.isFunction(d.old) && d.old.call(this),
              d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this);
          });
        return d;
      },
      easing: {
        linear: function (a) {
          return a;
        },
        swing: function (a) {
          return -Math.cos(a * Math.PI) / 2 + 0.5;
        },
      },
      timers: [],
      fx: function (a, b, c) {
        (this.options = b),
          (this.elem = a),
          (this.prop = c),
          (b.orig = b.orig || {});
      },
    }),
    (f.fx.prototype = {
      update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this),
          (f.fx.step[this.prop] || f.fx.step._default)(this);
      },
      cur: function () {
        if (
          this.elem[this.prop] != null &&
          (!this.elem.style || this.elem.style[this.prop] == null)
        )
          return this.elem[this.prop];
        var a,
          b = f.css(this.elem, this.prop);
        return isNaN((a = parseFloat(b))) ? (!b || b === "auto" ? 0 : b) : a;
      },
      custom: function (a, c, d) {
        function h(a) {
          return e.step(a);
        }
        var e = this,
          g = f.fx;
        (this.startTime = cq || cr()),
          (this.end = c),
          (this.now = this.start = a),
          (this.pos = this.state = 0),
          (this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px")),
          (h.queue = this.options.queue),
          (h.elem = this.elem),
          (h.saveState = function () {
            f._data(e.elem, "fxshow" + e.prop) === b &&
              (e.options.hide
                ? f._data(e.elem, "fxshow" + e.prop, e.start)
                : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end));
          }),
          h() &&
            f.timers.push(h) &&
            !co &&
            (co = setInterval(g.tick, g.interval));
      },
      show: function () {
        var a = f._data(this.elem, "fxshow" + this.prop);
        (this.options.orig[this.prop] = a || f.style(this.elem, this.prop)),
          (this.options.show = !0),
          a !== b
            ? this.custom(this.cur(), a)
            : this.custom(
                this.prop === "width" || this.prop === "height" ? 1 : 0,
                this.cur()
              ),
          f(this.elem).show();
      },
      hide: function () {
        (this.options.orig[this.prop] =
          f._data(this.elem, "fxshow" + this.prop) ||
          f.style(this.elem, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0);
      },
      step: function (a) {
        var b,
          c,
          d,
          e = cq || cr(),
          g = !0,
          h = this.elem,
          i = this.options;
        if (a || e >= i.duration + this.startTime) {
          (this.now = this.end),
            (this.pos = this.state = 1),
            this.update(),
            (i.animatedProperties[this.prop] = !0);
          for (b in i.animatedProperties)
            i.animatedProperties[b] !== !0 && (g = !1);
          if (g) {
            i.overflow != null &&
              !f.support.shrinkWrapBlocks &&
              f.each(["", "X", "Y"], function (a, b) {
                h.style["overflow" + b] = i.overflow[a];
              }),
              i.hide && f(h).hide();
            if (i.hide || i.show)
              for (b in i.animatedProperties)
                f.style(h, b, i.orig[b]),
                  f.removeData(h, "fxshow" + b, !0),
                  f.removeData(h, "toggle" + b, !0);
            (d = i.complete), d && ((i.complete = !1), d.call(h));
          }
          return !1;
        }
        i.duration == Infinity
          ? (this.now = e)
          : ((c = e - this.startTime),
            (this.state = c / i.duration),
            (this.pos = f.easing[i.animatedProperties[this.prop]](
              this.state,
              c,
              0,
              1,
              i.duration
            )),
            (this.now = this.start + (this.end - this.start) * this.pos)),
          this.update();
        return !0;
      },
    }),
    f.extend(f.fx, {
      tick: function () {
        var a,
          b = f.timers,
          c = 0;
        for (; c < b.length; c++)
          (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
        b.length || f.fx.stop();
      },
      interval: 13,
      stop: function () {
        clearInterval(co), (co = null);
      },
      speeds: { slow: 600, fast: 200, _default: 400 },
      step: {
        opacity: function (a) {
          f.style(a.elem, "opacity", a.now);
        },
        _default: function (a) {
          a.elem.style && a.elem.style[a.prop] != null
            ? (a.elem.style[a.prop] = a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    f.each(cp.concat.apply([], cp), function (a, b) {
      b.indexOf("margin") &&
        (f.fx.step[b] = function (a) {
          f.style(a.elem, b, Math.max(0, a.now) + a.unit);
        });
    }),
    f.expr &&
      f.expr.filters &&
      (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
          return a === b.elem;
        }).length;
      });
  var cv,
    cw = /^t(?:able|d|h)$/i,
    cx = /^(?:body|html)$/i;
  "getBoundingClientRect" in c.documentElement
    ? (cv = function (a, b, c, d) {
        try {
          d = a.getBoundingClientRect();
        } catch (e) {}
        if (!d || !f.contains(c, a))
          return d ? { top: d.top, left: d.left } : { top: 0, left: 0 };
        var g = b.body,
          h = cy(b),
          i = c.clientTop || g.clientTop || 0,
          j = c.clientLeft || g.clientLeft || 0,
          k =
            h.pageYOffset || (f.support.boxModel && c.scrollTop) || g.scrollTop,
          l =
            h.pageXOffset ||
            (f.support.boxModel && c.scrollLeft) ||
            g.scrollLeft,
          m = d.top + k - i,
          n = d.left + l - j;
        return { top: m, left: n };
      })
    : (cv = function (a, b, c) {
        var d,
          e = a.offsetParent,
          g = a,
          h = b.body,
          i = b.defaultView,
          j = i ? i.getComputedStyle(a, null) : a.currentStyle,
          k = a.offsetTop,
          l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
          if (f.support.fixedPosition && j.position === "fixed") break;
          (d = i ? i.getComputedStyle(a, null) : a.currentStyle),
            (k -= a.scrollTop),
            (l -= a.scrollLeft),
            a === e &&
              ((k += a.offsetTop),
              (l += a.offsetLeft),
              f.support.doesNotAddBorder &&
                (!f.support.doesAddBorderForTableAndCells ||
                  !cw.test(a.nodeName)) &&
                ((k += parseFloat(d.borderTopWidth) || 0),
                (l += parseFloat(d.borderLeftWidth) || 0)),
              (g = e),
              (e = a.offsetParent)),
            f.support.subtractsBorderForOverflowNotVisible &&
              d.overflow !== "visible" &&
              ((k += parseFloat(d.borderTopWidth) || 0),
              (l += parseFloat(d.borderLeftWidth) || 0)),
            (j = d);
        }
        if (j.position === "relative" || j.position === "static")
          (k += h.offsetTop), (l += h.offsetLeft);
        f.support.fixedPosition &&
          j.position === "fixed" &&
          ((k += Math.max(c.scrollTop, h.scrollTop)),
          (l += Math.max(c.scrollLeft, h.scrollLeft)));
        return { top: k, left: l };
      }),
    (f.fn.offset = function (a) {
      if (arguments.length)
        return a === b
          ? this
          : this.each(function (b) {
              f.offset.setOffset(this, a, b);
            });
      var c = this[0],
        d = c && c.ownerDocument;
      if (!d) return null;
      if (c === d.body) return f.offset.bodyOffset(c);
      return cv(c, d, d.documentElement);
    }),
    (f.offset = {
      bodyOffset: function (a) {
        var b = a.offsetTop,
          c = a.offsetLeft;
        f.support.doesNotIncludeMarginInBodyOffset &&
          ((b += parseFloat(f.css(a, "marginTop")) || 0),
          (c += parseFloat(f.css(a, "marginLeft")) || 0));
        return { top: b, left: c };
      },
      setOffset: function (a, b, c) {
        var d = f.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = f(a),
          g = e.offset(),
          h = f.css(a, "top"),
          i = f.css(a, "left"),
          j =
            (d === "absolute" || d === "fixed") &&
            f.inArray("auto", [h, i]) > -1,
          k = {},
          l = {},
          m,
          n;
        j
          ? ((l = e.position()), (m = l.top), (n = l.left))
          : ((m = parseFloat(h) || 0), (n = parseFloat(i) || 0)),
          f.isFunction(b) && (b = b.call(a, c, g)),
          b.top != null && (k.top = b.top - g.top + m),
          b.left != null && (k.left = b.left - g.left + n),
          "using" in b ? b.using.call(a, k) : e.css(k);
      },
    }),
    f.fn.extend({
      position: function () {
        if (!this[0]) return null;
        var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = cx.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
        (c.top -= parseFloat(f.css(a, "marginTop")) || 0),
          (c.left -= parseFloat(f.css(a, "marginLeft")) || 0),
          (d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0),
          (d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0);
        return { top: c.top - d.top, left: c.left - d.left };
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || c.body;
          while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static")
            a = a.offsetParent;
          return a;
        });
      },
    }),
    f.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, c) {
        var d = /Y/.test(c);
        f.fn[a] = function (e) {
          return f.access(
            this,
            function (a, e, g) {
              var h = cy(a);
              if (g === b)
                return h
                  ? c in h
                    ? h[c]
                    : (f.support.boxModel && h.document.documentElement[e]) ||
                      h.document.body[e]
                  : a[e];
              h
                ? h.scrollTo(
                    d ? f(h).scrollLeft() : g,
                    d ? g : f(h).scrollTop()
                  )
                : (a[e] = g);
            },
            a,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    f.each({ Height: "height", Width: "width" }, function (a, c) {
      var d = "client" + a,
        e = "scroll" + a,
        g = "offset" + a;
      (f.fn["inner" + a] = function () {
        var a = this[0];
        return a
          ? a.style
            ? parseFloat(f.css(a, c, "padding"))
            : this[c]()
          : null;
      }),
        (f.fn["outer" + a] = function (a) {
          var b = this[0];
          return b
            ? b.style
              ? parseFloat(f.css(b, c, a ? "margin" : "border"))
              : this[c]()
            : null;
        }),
        (f.fn[c] = function (a) {
          return f.access(
            this,
            function (a, c, h) {
              var i, j, k, l;
              if (f.isWindow(a)) {
                (i = a.document), (j = i.documentElement[d]);
                return (f.support.boxModel && j) || (i.body && i.body[d]) || j;
              }
              if (a.nodeType === 9) {
                i = a.documentElement;
                if (i[d] >= i[e]) return i[d];
                return Math.max(a.body[e], i[e], a.body[g], i[g]);
              }
              if (h === b) {
                (k = f.css(a, c)), (l = parseFloat(k));
                return f.isNumeric(l) ? l : k;
              }
              f(a).css(c, h);
            },
            c,
            a,
            arguments.length,
            null
          );
        });
    }),
    (a.jQuery = a.$ = f),
    typeof define == "function" &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return f;
      });
})(window);
(function ($) {
  if ($.fn.carouFredSel) return;
  $.fn.caroufredsel = $.fn.carouFredSel = function (u, w) {
    if (this.length == 0) {
      debug(true, 'No element found for "' + this.selector + '".');
      return this;
    }
    if (this.length > 1)
      return this.each(function () {
        $(this).carouFredSel(u, w);
      });
    var y = this,
      $tt0 = this[0],
      starting_position = false;
    if (y.data("_cfs_isCarousel")) {
      starting_position = y.triggerHandler(
        "_cfs_triggerEvent",
        "currentPosition"
      );
      y.trigger("_cfs_triggerEvent", ["destroy", true]);
    }
    y._cfs_init = function (o, a, b) {
      o = go_getObject($tt0, o);
      o.items = go_getItemsObject($tt0, o.items);
      o.scroll = go_getScrollObject($tt0, o.scroll);
      o.auto = go_getAutoObject($tt0, o.auto);
      o.prev = go_getPrevNextObject($tt0, o.prev);
      o.next = go_getPrevNextObject($tt0, o.next);
      o.pagination = go_getPaginationObject($tt0, o.pagination);
      o.swipe = go_getSwipeObject($tt0, o.swipe);
      o.mousewheel = go_getMousewheelObject($tt0, o.mousewheel);
      if (a) opts_orig = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
      opts = $.extend(true, {}, $.fn.carouFredSel.defaults, o);
      opts.d = cf_getDimensions(opts);
      z.direction =
        opts.direction == "up" || opts.direction == "left" ? "next" : "prev";
      var c = y.children(),
        avail_primary = ms_getParentSize($wrp, opts, "width");
      if (is_true(opts.cookie))
        opts.cookie = "caroufredsel_cookie_" + conf.serialNumber;
      opts.maxDimension = ms_getMaxDimension(opts, avail_primary);
      opts.items = in_complementItems(opts.items, opts, c, b);
      opts[opts.d["width"]] = in_complementPrimarySize(
        opts[opts.d["width"]],
        opts,
        c
      );
      opts[opts.d["height"]] = in_complementSecondarySize(
        opts[opts.d["height"]],
        opts,
        c
      );
      if (opts.responsive)
        if (!is_percentage(opts[opts.d["width"]]))
          opts[opts.d["width"]] = "100%";
      if (is_percentage(opts[opts.d["width"]])) {
        z.upDateOnWindowResize = true;
        z.primarySizePercentage = opts[opts.d["width"]];
        opts[opts.d["width"]] = ms_getPercentage(
          avail_primary,
          z.primarySizePercentage
        );
        if (!opts.items.visible) opts.items.visibleConf.variable = true;
      }
      if (opts.responsive) {
        opts.usePadding = false;
        opts.padding = [0, 0, 0, 0];
        opts.align = false;
        opts.items.visibleConf.variable = false;
      } else {
        if (!opts.items.visible)
          opts = in_complementVisibleItems(opts, avail_primary);
        if (!opts[opts.d["width"]])
          if (
            !opts.items.visibleConf.variable &&
            is_number(opts.items[opts.d["width"]]) &&
            opts.items.filter == "*"
          ) {
            opts[opts.d["width"]] =
              opts.items.visible * opts.items[opts.d["width"]];
            opts.align = false;
          } else opts[opts.d["width"]] = "variable";
        if (is_undefined(opts.align))
          opts.align = is_number(opts[opts.d["width"]]) ? "center" : false;
        if (opts.items.visibleConf.variable)
          opts.items.visible = gn_getVisibleItemsNext(c, opts, 0);
      }
      if (opts.items.filter != "*" && !opts.items.visibleConf.variable) {
        opts.items.visibleConf.org = opts.items.visible;
        opts.items.visible = gn_getVisibleItemsNextFilter(c, opts, 0);
      }
      opts.items.visible = cf_getItemsAdjust(
        opts.items.visible,
        opts,
        opts.items.visibleConf.adjust,
        $tt0
      );
      opts.items.visibleConf.old = opts.items.visible;
      if (opts.responsive) {
        if (!opts.items.visibleConf.min)
          opts.items.visibleConf.min = opts.items.visible;
        if (!opts.items.visibleConf.max)
          opts.items.visibleConf.max = opts.items.visible;
        opts = in_getResponsiveValues(opts, c, avail_primary);
      } else {
        opts.padding = cf_getPadding(opts.padding);
        if (opts.align == "top") opts.align = "left";
        else if (opts.align == "bottom") opts.align = "right";
        switch (opts.align) {
          case "center":
          case "left":
          case "right":
            if (opts[opts.d["width"]] != "variable") {
              opts = in_getAlignPadding(opts, c);
              opts.usePadding = true;
            }
            break;
          default:
            opts.align = false;
            opts.usePadding =
              opts.padding[0] == 0 &&
              opts.padding[1] == 0 &&
              opts.padding[2] == 0 &&
              opts.padding[3] == 0
                ? false
                : true;
            break;
        }
      }
      if (!is_number(opts.scroll.duration)) opts.scroll.duration = 500;
      if (is_undefined(opts.scroll.items))
        opts.scroll.items =
          opts.responsive ||
          opts.items.visibleConf.variable ||
          opts.items.filter != "*"
            ? "visible"
            : opts.items.visible;
      opts.auto = $.extend(true, {}, opts.scroll, opts.auto);
      opts.prev = $.extend(true, {}, opts.scroll, opts.prev);
      opts.next = $.extend(true, {}, opts.scroll, opts.next);
      opts.pagination = $.extend(true, {}, opts.scroll, opts.pagination);
      opts.auto = go_complementAutoObject($tt0, opts.auto);
      opts.prev = go_complementPrevNextObject($tt0, opts.prev);
      opts.next = go_complementPrevNextObject($tt0, opts.next);
      opts.pagination = go_complementPaginationObject($tt0, opts.pagination);
      opts.swipe = go_complementSwipeObject($tt0, opts.swipe);
      opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel);
      if (opts.synchronise) opts.synchronise = cf_getSynchArr(opts.synchronise);
      if (opts.auto.onPauseStart) {
        opts.auto.onTimeoutStart = opts.auto.onPauseStart;
        deprecated("auto.onPauseStart", "auto.onTimeoutStart");
      }
      if (opts.auto.onPausePause) {
        opts.auto.onTimeoutPause = opts.auto.onPausePause;
        deprecated("auto.onPausePause", "auto.onTimeoutPause");
      }
      if (opts.auto.onPauseEnd) {
        opts.auto.onTimeoutEnd = opts.auto.onPauseEnd;
        deprecated("auto.onPauseEnd", "auto.onTimeoutEnd");
      }
      if (opts.auto.pauseDuration) {
        opts.auto.timeoutDuration = opts.auto.pauseDuration;
        deprecated("auto.pauseDuration", "auto.timeoutDuration");
      }
    };
    y._cfs_build = function () {
      y.data("_cfs_isCarousel", true);
      var a = y.children(),
        orgCSS = in_mapCss(y, [
          "textAlign",
          "float",
          "position",
          "top",
          "right",
          "bottom",
          "left",
          "zIndex",
          "width",
          "height",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
        ]),
        newPosition = "relative";
      switch (orgCSS.position) {
        case "absolute":
        case "fixed":
          newPosition = orgCSS.position;
          break;
      }
      $wrp.css(orgCSS).css({ overflow: "hidden", position: newPosition });
      y.data("_cfs_origCss", orgCSS).css({
        textAlign: "left",
        float: "none",
        position: "absolute",
        top: 0,
        right: "auto",
        bottom: "auto",
        left: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
      });
      sz_storeMargin(a, opts);
      sz_storeSizes(a, opts);
      if (opts.responsive) sz_setResponsiveSizes(opts, a);
    };
    y._cfs_bind_events = function () {
      y._cfs_unbind_events();
      y.bind(cf_e("stop", conf), function (e, a) {
        e.stopPropagation();
        if (!z.isStopped)
          if (opts.auto.button)
            opts.auto.button.addClass(cf_c("stopped", conf));
        z.isStopped = true;
        if (opts.auto.play) {
          opts.auto.play = false;
          y.trigger(cf_e("pause", conf), a);
        }
        return true;
      });
      y.bind(cf_e("finish", conf), function (e) {
        e.stopPropagation();
        if (z.isScrolling) sc_stopScroll(scrl);
        return true;
      });
      y.bind(cf_e("pause", conf), function (e, a, b) {
        e.stopPropagation();
        tmrs = sc_clearTimers(tmrs);
        if (a && z.isScrolling) {
          scrl.isStopped = true;
          var c = getTime() - scrl.startTime;
          scrl.duration -= c;
          if (scrl.pre) scrl.pre.duration -= c;
          if (scrl.post) scrl.post.duration -= c;
          sc_stopScroll(scrl, false);
        }
        if (!z.isPaused && !z.isScrolling)
          if (b) tmrs.timePassed += getTime() - tmrs.startTime;
        if (!z.isPaused)
          if (opts.auto.button) opts.auto.button.addClass(cf_c("paused", conf));
        z.isPaused = true;
        if (opts.auto.onTimeoutPause) {
          var d = opts.auto.timeoutDuration - tmrs.timePassed,
            perc = 100 - Math.ceil((d * 100) / opts.auto.timeoutDuration);
          opts.auto.onTimeoutPause.call($tt0, perc, d);
        }
        return true;
      });
      y.bind(cf_e("play", conf), function (e, b, c, d) {
        e.stopPropagation();
        tmrs = sc_clearTimers(tmrs);
        var v = [b, c, d],
          t = ["string", "number", "boolean"],
          a = cf_sortParams(v, t);
        b = a[0];
        c = a[1];
        d = a[2];
        if (b != "prev" && b != "next") b = z.direction;
        if (!is_number(c)) c = 0;
        if (!is_boolean(d)) d = false;
        if (d) {
          z.isStopped = false;
          opts.auto.play = true;
        }
        if (!opts.auto.play) {
          e.stopImmediatePropagation();
          return debug(conf, "Carousel stopped: Not scrolling.");
        }
        if (z.isPaused)
          if (opts.auto.button) {
            opts.auto.button.removeClass(cf_c("stopped", conf));
            opts.auto.button.removeClass(cf_c("paused", conf));
          }
        z.isPaused = false;
        tmrs.startTime = getTime();
        var f = opts.auto.timeoutDuration + c;
        dur2 = f - tmrs.timePassed;
        perc = 100 - Math.ceil((dur2 * 100) / f);
        if (opts.auto.progress)
          tmrs.progress = setInterval(function () {
            var a = getTime() - tmrs.startTime + tmrs.timePassed,
              perc = Math.ceil((a * 100) / f);
            opts.auto.progress.updater.call(opts.auto.progress.bar[0], perc);
          }, opts.auto.progress.interval);
        tmrs.auto = setTimeout(function () {
          if (opts.auto.progress)
            opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100);
          if (opts.auto.onTimeoutEnd)
            opts.auto.onTimeoutEnd.call($tt0, perc, dur2);
          if (z.isScrolling) y.trigger(cf_e("play", conf), b);
          else y.trigger(cf_e(b, conf), opts.auto);
        }, dur2);
        if (opts.auto.onTimeoutStart)
          opts.auto.onTimeoutStart.call($tt0, perc, dur2);
        return true;
      });
      y.bind(cf_e("resume", conf), function (e) {
        e.stopPropagation();
        if (scrl.isStopped) {
          scrl.isStopped = false;
          z.isPaused = false;
          z.isScrolling = true;
          scrl.startTime = getTime();
          sc_startScroll(scrl);
        } else y.trigger(cf_e("play", conf));
        return true;
      });
      y.bind(
        cf_e("prev", conf) + " " + cf_e("next", conf),
        function (e, b, f, g, h) {
          e.stopPropagation();
          if (z.isStopped || y.is(":hidden")) {
            e.stopImmediatePropagation();
            return debug(conf, "Carousel stopped or hidden: Not scrolling.");
          }
          var i = is_number(opts.items.minimum)
            ? opts.items.minimum
            : opts.items.visible + 1;
          if (i > itms.total) {
            e.stopImmediatePropagation();
            return debug(
              conf,
              "Not enough items (" +
                itms.total +
                " total, " +
                i +
                " needed): Not scrolling."
            );
          }
          var v = [b, f, g, h],
            t = ["object", "number/string", "function", "boolean"],
            a = cf_sortParams(v, t);
          b = a[0];
          f = a[1];
          g = a[2];
          h = a[3];
          var k = e.type.slice(conf.events.prefix.length);
          if (!is_object(b)) b = {};
          if (is_function(g)) b.onAfter = g;
          if (is_boolean(h)) b.queue = h;
          b = $.extend(true, {}, opts[k], b);
          if (b.conditions && !b.conditions.call($tt0, k)) {
            e.stopImmediatePropagation();
            return debug(conf, 'Callback "conditions" returned false.');
          }
          if (!is_number(f)) {
            if (opts.items.filter != "*") f = "visible";
            else {
              var m = [f, b.items, opts[k].items];
              for (var a = 0, l = m.length; a < l; a++)
                if (is_number(m[a]) || m[a] == "page" || m[a] == "visible") {
                  f = m[a];
                  break;
                }
            }
            switch (f) {
              case "page":
                e.stopImmediatePropagation();
                return y.triggerHandler(cf_e(k + "Page", conf), [b, g]);
                break;
              case "visible":
                if (
                  !opts.items.visibleConf.variable &&
                  opts.items.filter == "*"
                )
                  f = opts.items.visible;
                break;
            }
          }
          if (scrl.isStopped) {
            y.trigger(cf_e("resume", conf));
            y.trigger(cf_e("queue", conf), [k, [b, f, g]]);
            e.stopImmediatePropagation();
            return debug(conf, "Carousel resumed scrolling.");
          }
          if (b.duration > 0)
            if (z.isScrolling) {
              if (b.queue) y.trigger(cf_e("queue", conf), [k, [b, f, g]]);
              e.stopImmediatePropagation();
              return debug(conf, "Carousel currently scrolling.");
            }
          tmrs.timePassed = 0;
          y.trigger(cf_e("slide_" + k, conf), [b, f]);
          if (opts.synchronise) {
            var s = opts.synchronise,
              c = [b, f];
            for (var j = 0, l = s.length; j < l; j++) {
              var d = k;
              if (!s[j][2]) d = d == "prev" ? "next" : "prev";
              if (!s[j][1])
                c[0] = s[j][0].triggerHandler("_cfs_triggerEvent", [
                  "configuration",
                  d,
                ]);
              c[1] = f + s[j][3];
              s[j][0].trigger("_cfs_triggerEvent", ["slide_" + d, c]);
            }
          }
          return true;
        }
      );
      y.bind(cf_e("slide_prev", conf), function (e, b, c) {
        e.stopPropagation();
        var d = y.children();
        if (!opts.circular)
          if (itms.first == 0) {
            if (opts.infinite) y.trigger(cf_e("next", conf), itms.total - 1);
            return e.stopImmediatePropagation();
          }
        sz_resetMargin(d, opts);
        if (!is_number(c)) {
          if (opts.items.visibleConf.variable)
            c = gn_getVisibleItemsPrev(d, opts, itms.total - 1);
          else if (opts.items.filter != "*") {
            var f = is_number(b.items) ? b.items : gn_getVisibleOrg(y, opts);
            c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, f);
          } else c = opts.items.visible;
          c = cf_getAdjust(c, opts, b.items, $tt0);
        }
        if (!opts.circular)
          if (itms.total - c < itms.first) c = itms.total - itms.first;
        opts.items.visibleConf.old = opts.items.visible;
        if (opts.items.visibleConf.variable) {
          var g = cf_getItemsAdjust(
            gn_getVisibleItemsNext(d, opts, itms.total - c),
            opts,
            opts.items.visibleConf.adjust,
            $tt0
          );
          if (opts.items.visible + c <= g && c < itms.total) {
            c++;
            g = cf_getItemsAdjust(
              gn_getVisibleItemsNext(d, opts, itms.total - c),
              opts,
              opts.items.visibleConf.adjust,
              $tt0
            );
          }
          opts.items.visible = g;
        } else if (opts.items.filter != "*") {
          var g = gn_getVisibleItemsNextFilter(d, opts, itms.total - c);
          opts.items.visible = cf_getItemsAdjust(
            g,
            opts,
            opts.items.visibleConf.adjust,
            $tt0
          );
        }
        sz_resetMargin(d, opts, true);
        if (c == 0) {
          e.stopImmediatePropagation();
          return debug(conf, "0 items to scroll: Not scrolling.");
        }
        debug(conf, "Scrolling " + c + " items backward.");
        itms.first += c;
        while (itms.first >= itms.total) itms.first -= itms.total;
        if (!opts.circular) {
          if (itms.first == 0 && b.onEnd) b.onEnd.call($tt0, "prev");
          if (!opts.infinite) nv_enableNavi(opts, itms.first, conf);
        }
        y.children()
          .slice(itms.total - c, itms.total)
          .prependTo(y);
        if (itms.total < opts.items.visible + c)
          y.children()
            .slice(0, opts.items.visible + c - itms.total)
            .clone(true)
            .appendTo(y);
        var d = y.children(),
          i_old = gi_getOldItemsPrev(d, opts, c),
          i_new = gi_getNewItemsPrev(d, opts),
          i_cur_l = d.eq(c - 1),
          i_old_l = i_old.last(),
          i_new_l = i_new.last();
        sz_resetMargin(d, opts);
        var h = 0,
          pR = 0;
        if (opts.align) {
          var p = cf_getAlignPadding(i_new, opts);
          h = p[0];
          pR = p[1];
        }
        var i = h < 0 ? opts.padding[opts.d[3]] : 0;
        var j = false,
          i_skp = $();
        if (opts.items.visible < c) {
          i_skp = d.slice(opts.items.visibleConf.old, c);
          if (b.fx == "directscroll") {
            var k = opts.items[opts.d["width"]];
            j = i_skp;
            i_cur_l = i_new_l;
            sc_hideHiddenItems(j);
            opts.items[opts.d["width"]] = "variable";
          }
        }
        var l = false,
          i_siz = ms_getTotalSize(d.slice(0, c), opts, "width"),
          w_siz = cf_mapWrapperSizes(
            ms_getSizes(i_new, opts, true),
            opts,
            !opts.usePadding
          ),
          i_siz_vis = 0,
          a_cfs = {},
          a_wsz = {},
          a_cur = {},
          a_old = {},
          a_new = {},
          a_lef = {},
          a_lef_vis = {},
          a_dur = sc_getDuration(b, opts, c, i_siz);
        switch (b.fx) {
          case "cover":
          case "cover-fade":
            i_siz_vis = ms_getTotalSize(
              d.slice(0, opts.items.visible),
              opts,
              "width"
            );
            break;
        }
        if (j) opts.items[opts.d["width"]] = k;
        sz_resetMargin(d, opts, true);
        if (pR >= 0) sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);
        if (h >= 0) sz_resetMargin(i_cur_l, opts, opts.padding[opts.d[3]]);
        if (opts.align) {
          opts.padding[opts.d[1]] = pR;
          opts.padding[opts.d[3]] = h;
        }
        a_lef[opts.d["left"]] = -(i_siz - i);
        a_lef_vis[opts.d["left"]] = -(i_siz_vis - i);
        a_wsz[opts.d["left"]] = w_siz[opts.d["width"]];
        var m = function () {},
          _a_wrapper = function () {},
          _s_paddingold = function () {},
          _a_paddingold = function () {},
          _s_paddingnew = function () {},
          _a_paddingnew = function () {},
          _s_paddingcur = function () {},
          _a_paddingcur = function () {},
          _onafter = function () {},
          _moveitems = function () {},
          _position = function () {};
        switch (b.fx) {
          case "crossfade":
          case "cover":
          case "cover-fade":
          case "uncover":
          case "uncover-fade":
            l = y.clone(true).appendTo($wrp);
            break;
        }
        switch (b.fx) {
          case "crossfade":
          case "uncover":
          case "uncover-fade":
            l.children().slice(0, c).remove();
            l.children().slice(opts.items.visibleConf.old).remove();
            break;
          case "cover":
          case "cover-fade":
            l.children().slice(opts.items.visible).remove();
            l.css(a_lef_vis);
            break;
        }
        y.css(a_lef);
        scrl = sc_setScroll(a_dur, b.easing);
        a_cfs[opts.d["left"]] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
        if (
          opts[opts.d["width"]] == "variable" ||
          opts[opts.d["height"]] == "variable"
        ) {
          m = function () {
            $wrp.css(w_siz);
          };
          _a_wrapper = function () {
            scrl.anims.push([$wrp, w_siz]);
          };
        }
        if (opts.usePadding) {
          if (i_new_l.not(i_cur_l).length) {
            a_cur[opts.d["marginRight"]] = i_cur_l.data("_cfs_origCssMargin");
            if (h < 0) i_cur_l.css(a_cur);
            else {
              _s_paddingcur = function () {
                i_cur_l.css(a_cur);
              };
              _a_paddingcur = function () {
                scrl.anims.push([i_cur_l, a_cur]);
              };
            }
          }
          switch (b.fx) {
            case "cover":
            case "cover-fade":
              l.children()
                .eq(c - 1)
                .css(a_cur);
              break;
          }
          if (i_new_l.not(i_old_l).length) {
            a_old[opts.d["marginRight"]] = i_old_l.data("_cfs_origCssMargin");
            _s_paddingold = function () {
              i_old_l.css(a_old);
            };
            _a_paddingold = function () {
              scrl.anims.push([i_old_l, a_old]);
            };
          }
          if (pR >= 0) {
            a_new[opts.d["marginRight"]] =
              i_new_l.data("_cfs_origCssMargin") + opts.padding[opts.d[1]];
            _s_paddingnew = function () {
              i_new_l.css(a_new);
            };
            _a_paddingnew = function () {
              scrl.anims.push([i_new_l, a_new]);
            };
          }
        }
        _position = function () {
          y.css(a_cfs);
        };
        var n = opts.items.visible + c - itms.total;
        _moveitems = function () {
          if (n > 0) {
            y.children().slice(itms.total).remove();
            i_old = $(
              y
                .children()
                .slice(itms.total - (opts.items.visible - n))
                .get()
                .concat(y.children().slice(0, n).get())
            );
          }
          sc_showHiddenItems(j);
          if (opts.usePadding) {
            var a = y.children().eq(opts.items.visible + c - 1);
            a.css(opts.d["marginRight"], a.data("_cfs_origCssMargin"));
          }
        };
        var o = sc_mapCallbackArguments(
          i_old,
          i_skp,
          i_new,
          c,
          "prev",
          a_dur,
          w_siz
        );
        _onafter = function () {
          sc_afterScroll(y, l, b);
          z.isScrolling = false;
          clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", o, clbk);
          queu = sc_fireQueue(y, queu, conf);
          if (!z.isPaused) y.trigger(cf_e("play", conf));
        };
        z.isScrolling = true;
        tmrs = sc_clearTimers(tmrs);
        clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", o, clbk);
        switch (b.fx) {
          case "none":
            y.css(a_cfs);
            m();
            _s_paddingold();
            _s_paddingnew();
            _s_paddingcur();
            _position();
            _moveitems();
            _onafter();
            break;
          case "fade":
            scrl.anims.push([
              y,
              { opacity: 0 },
              function () {
                m();
                _s_paddingold();
                _s_paddingnew();
                _s_paddingcur();
                _position();
                _moveitems();
                scrl = sc_setScroll(a_dur, b.easing);
                scrl.anims.push([y, { opacity: 1 }, _onafter]);
                sc_startScroll(scrl);
              },
            ]);
            break;
          case "crossfade":
            y.css({ opacity: 0 });
            scrl.anims.push([l, { opacity: 0 }]);
            scrl.anims.push([y, { opacity: 1 }, _onafter]);
            _a_wrapper();
            _s_paddingold();
            _s_paddingnew();
            _s_paddingcur();
            _position();
            _moveitems();
            break;
          case "cover":
            scrl.anims.push([
              l,
              a_cfs,
              function () {
                _s_paddingold();
                _s_paddingnew();
                _s_paddingcur();
                _position();
                _moveitems();
                _onafter();
              },
            ]);
            _a_wrapper();
            break;
          case "cover-fade":
            scrl.anims.push([y, { opacity: 0 }]);
            scrl.anims.push([
              l,
              a_cfs,
              function () {
                y.css({ opacity: 1 });
                _s_paddingold();
                _s_paddingnew();
                _s_paddingcur();
                _position();
                _moveitems();
                _onafter();
              },
            ]);
            _a_wrapper();
            break;
          case "uncover":
            scrl.anims.push([l, a_wsz, _onafter]);
            _a_wrapper();
            _s_paddingold();
            _s_paddingnew();
            _s_paddingcur();
            _position();
            _moveitems();
            break;
          case "uncover-fade":
            y.css({ opacity: 0 });
            scrl.anims.push([y, { opacity: 1 }]);
            scrl.anims.push([l, a_wsz, _onafter]);
            _a_wrapper();
            _s_paddingold();
            _s_paddingnew();
            _s_paddingcur();
            _position();
            _moveitems();
            break;
          default:
            scrl.anims.push([
              y,
              a_cfs,
              function () {
                _moveitems();
                _onafter();
              },
            ]);
            _a_wrapper();
            _a_paddingold();
            _a_paddingnew();
            _a_paddingcur();
            break;
        }
        sc_startScroll(scrl);
        cf_setCookie(opts.cookie, y, conf);
        y.trigger(cf_e("updatePageStatus", conf), [false, w_siz]);
        return true;
      });
      y.bind(cf_e("slide_next", conf), function (e, c, d) {
        e.stopPropagation();
        var f = y.children();
        if (!opts.circular)
          if (itms.first == opts.items.visible) {
            if (opts.infinite) y.trigger(cf_e("prev", conf), itms.total - 1);
            return e.stopImmediatePropagation();
          }
        sz_resetMargin(f, opts);
        if (!is_number(d)) {
          if (opts.items.filter != "*") {
            var g = is_number(c.items) ? c.items : gn_getVisibleOrg(y, opts);
            d = gn_getScrollItemsNextFilter(f, opts, 0, g);
          } else d = opts.items.visible;
          d = cf_getAdjust(d, opts, c.items, $tt0);
        }
        var h = itms.first == 0 ? itms.total : itms.first;
        if (!opts.circular) {
          if (opts.items.visibleConf.variable)
            var i = gn_getVisibleItemsNext(f, opts, d),
              g = gn_getVisibleItemsPrev(f, opts, h - 1);
          else
            var i = opts.items.visible,
              g = opts.items.visible;
          if (d + i > h) d = h - g;
        }
        opts.items.visibleConf.old = opts.items.visible;
        if (opts.items.visibleConf.variable) {
          var i = cf_getItemsAdjust(
            gn_getVisibleItemsNextTestCircular(f, opts, d, h),
            opts,
            opts.items.visibleConf.adjust,
            $tt0
          );
          while (opts.items.visible - d >= i && d < itms.total) {
            d++;
            i = cf_getItemsAdjust(
              gn_getVisibleItemsNextTestCircular(f, opts, d, h),
              opts,
              opts.items.visibleConf.adjust,
              $tt0
            );
          }
          opts.items.visible = i;
        } else if (opts.items.filter != "*") {
          var i = gn_getVisibleItemsNextFilter(f, opts, d);
          opts.items.visible = cf_getItemsAdjust(
            i,
            opts,
            opts.items.visibleConf.adjust,
            $tt0
          );
        }
        sz_resetMargin(f, opts, true);
        if (d == 0) {
          e.stopImmediatePropagation();
          return debug(conf, "0 items to scroll: Not scrolling.");
        }
        debug(conf, "Scrolling " + d + " items forward.");
        itms.first -= d;
        while (itms.first < 0) itms.first += itms.total;
        if (!opts.circular) {
          if (itms.first == opts.items.visible && c.onEnd)
            c.onEnd.call($tt0, "next");
          if (!opts.infinite) nv_enableNavi(opts, itms.first, conf);
        }
        if (itms.total < opts.items.visible + d)
          y.children()
            .slice(0, opts.items.visible + d - itms.total)
            .clone(true)
            .appendTo(y);
        var f = y.children(),
          i_old = gi_getOldItemsNext(f, opts),
          i_new = gi_getNewItemsNext(f, opts, d),
          i_cur_l = f.eq(d - 1),
          i_old_l = i_old.last(),
          i_new_l = i_new.last();
        sz_resetMargin(f, opts);
        var j = 0,
          pR = 0;
        if (opts.align) {
          var p = cf_getAlignPadding(i_new, opts);
          j = p[0];
          pR = p[1];
        }
        var k = false,
          i_skp = $();
        if (opts.items.visibleConf.old < d) {
          i_skp = f.slice(opts.items.visibleConf.old, d);
          if (c.fx == "directscroll") {
            var l = opts.items[opts.d["width"]];
            k = i_skp;
            i_cur_l = i_old_l;
            sc_hideHiddenItems(k);
            opts.items[opts.d["width"]] = "variable";
          }
        }
        var m = false,
          i_siz = ms_getTotalSize(f.slice(0, d), opts, "width"),
          w_siz = cf_mapWrapperSizes(
            ms_getSizes(i_new, opts, true),
            opts,
            !opts.usePadding
          ),
          i_siz_vis = 0,
          a_cfs = {},
          a_cfs_vis = {},
          a_cur = {},
          a_old = {},
          a_lef = {},
          a_dur = sc_getDuration(c, opts, d, i_siz);
        switch (c.fx) {
          case "uncover":
          case "uncover-fade":
            i_siz_vis = ms_getTotalSize(
              f.slice(0, opts.items.visibleConf.old),
              opts,
              "width"
            );
            break;
        }
        if (k) opts.items[opts.d["width"]] = l;
        if (opts.align)
          if (opts.padding[opts.d[1]] < 0) opts.padding[opts.d[1]] = 0;
        sz_resetMargin(f, opts, true);
        sz_resetMargin(i_old_l, opts, opts.padding[opts.d[1]]);
        if (opts.align) {
          opts.padding[opts.d[1]] = pR;
          opts.padding[opts.d[3]] = j;
        }
        a_lef[opts.d["left"]] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
        var n = function () {},
          _a_wrapper = function () {},
          _s_paddingold = function () {},
          _a_paddingold = function () {},
          _s_paddingcur = function () {},
          _a_paddingcur = function () {},
          _onafter = function () {},
          _moveitems = function () {},
          _position = function () {};
        switch (c.fx) {
          case "crossfade":
          case "cover":
          case "cover-fade":
          case "uncover":
          case "uncover-fade":
            m = y.clone(true).appendTo($wrp);
            m.children().slice(opts.items.visibleConf.old).remove();
            break;
        }
        switch (c.fx) {
          case "crossfade":
          case "cover":
          case "cover-fade":
            y.css("zIndex", 1);
            m.css("zIndex", 0);
            break;
        }
        scrl = sc_setScroll(a_dur, c.easing);
        a_cfs[opts.d["left"]] = -i_siz;
        a_cfs_vis[opts.d["left"]] = -i_siz_vis;
        if (j < 0) a_cfs[opts.d["left"]] += j;
        if (
          opts[opts.d["width"]] == "variable" ||
          opts[opts.d["height"]] == "variable"
        ) {
          n = function () {
            $wrp.css(w_siz);
          };
          _a_wrapper = function () {
            scrl.anims.push([$wrp, w_siz]);
          };
        }
        if (opts.usePadding) {
          var o = i_new_l.data("_cfs_origCssMargin");
          if (pR >= 0) o += opts.padding[opts.d[1]];
          i_new_l.css(opts.d["marginRight"], o);
          if (i_cur_l.not(i_old_l).length)
            a_old[opts.d["marginRight"]] = i_old_l.data("_cfs_origCssMargin");
          _s_paddingold = function () {
            i_old_l.css(a_old);
          };
          _a_paddingold = function () {
            scrl.anims.push([i_old_l, a_old]);
          };
          var q = i_cur_l.data("_cfs_origCssMargin");
          if (j > 0) q += opts.padding[opts.d[3]];
          a_cur[opts.d["marginRight"]] = q;
          _s_paddingcur = function () {
            i_cur_l.css(a_cur);
          };
          _a_paddingcur = function () {
            scrl.anims.push([i_cur_l, a_cur]);
          };
        }
        _position = function () {
          y.css(a_lef);
        };
        var r = opts.items.visible + d - itms.total;
        _moveitems = function () {
          if (r > 0) y.children().slice(itms.total).remove();
          var a = y.children().slice(0, d).appendTo(y).last();
          if (r > 0) i_new = gi_getCurrentItems(f, opts);
          sc_showHiddenItems(k);
          if (opts.usePadding) {
            if (itms.total < opts.items.visible + d) {
              var b = y.children().eq(opts.items.visible - 1);
              b.css(
                opts.d["marginRight"],
                b.data("_cfs_origCssMargin") + opts.padding[opts.d[3]]
              );
            }
            a.css(opts.d["marginRight"], a.data("_cfs_origCssMargin"));
          }
        };
        var s = sc_mapCallbackArguments(
          i_old,
          i_skp,
          i_new,
          d,
          "next",
          a_dur,
          w_siz
        );
        _onafter = function () {
          y.css("zIndex", y.data("_cfs_origCss").zIndex);
          sc_afterScroll(y, m, c);
          z.isScrolling = false;
          clbk.onAfter = sc_fireCallbacks($tt0, c, "onAfter", s, clbk);
          queu = sc_fireQueue(y, queu, conf);
          if (!z.isPaused) y.trigger(cf_e("play", conf));
        };
        z.isScrolling = true;
        tmrs = sc_clearTimers(tmrs);
        clbk.onBefore = sc_fireCallbacks($tt0, c, "onBefore", s, clbk);
        switch (c.fx) {
          case "none":
            y.css(a_cfs);
            n();
            _s_paddingold();
            _s_paddingcur();
            _position();
            _moveitems();
            _onafter();
            break;
          case "fade":
            scrl.anims.push([
              y,
              { opacity: 0 },
              function () {
                n();
                _s_paddingold();
                _s_paddingcur();
                _position();
                _moveitems();
                scrl = sc_setScroll(a_dur, c.easing);
                scrl.anims.push([y, { opacity: 1 }, _onafter]);
                sc_startScroll(scrl);
              },
            ]);
            break;
          case "crossfade":
            y.css({ opacity: 0 });
            scrl.anims.push([m, { opacity: 0 }]);
            scrl.anims.push([y, { opacity: 1 }, _onafter]);
            _a_wrapper();
            _s_paddingold();
            _s_paddingcur();
            _position();
            _moveitems();
            break;
          case "cover":
            y.css(opts.d["left"], $wrp[opts.d["width"]]());
            scrl.anims.push([y, a_lef, _onafter]);
            _a_wrapper();
            _s_paddingold();
            _s_paddingcur();
            _moveitems();
            break;
          case "cover-fade":
            y.css(opts.d["left"], $wrp[opts.d["width"]]());
            scrl.anims.push([m, { opacity: 0 }]);
            scrl.anims.push([y, a_lef, _onafter]);
            _a_wrapper();
            _s_paddingold();
            _s_paddingcur();
            _moveitems();
            break;
          case "uncover":
            scrl.anims.push([m, a_cfs_vis, _onafter]);
            _a_wrapper();
            _s_paddingold();
            _s_paddingcur();
            _position();
            _moveitems();
            break;
          case "uncover-fade":
            y.css({ opacity: 0 });
            scrl.anims.push([y, { opacity: 1 }]);
            scrl.anims.push([m, a_cfs_vis, _onafter]);
            _a_wrapper();
            _s_paddingold();
            _s_paddingcur();
            _position();
            _moveitems();
            break;
          default:
            scrl.anims.push([
              y,
              a_cfs,
              function () {
                _position();
                _moveitems();
                _onafter();
              },
            ]);
            _a_wrapper();
            _a_paddingold();
            _a_paddingcur();
            break;
        }
        sc_startScroll(scrl);
        cf_setCookie(opts.cookie, y, conf);
        y.trigger(cf_e("updatePageStatus", conf), [false, w_siz]);
        return true;
      });
      y.bind(cf_e("slideTo", conf), function (e, b, c, d, f, g, h) {
        e.stopPropagation();
        var v = [b, c, d, f, g, h],
          t = [
            "string/number/object",
            "number",
            "boolean",
            "object",
            "string",
            "function",
          ],
          a = cf_sortParams(v, t);
        f = a[3];
        g = a[4];
        h = a[5];
        b = gn_getItemIndex(a[0], a[1], a[2], itms, y);
        if (b == 0) return false;
        if (!is_object(f)) f = false;
        if (z.isScrolling) if (!is_object(f) || f.duration > 0) return false;
        if (g != "prev" && g != "next")
          if (opts.circular) g = b <= itms.total / 2 ? "next" : "prev";
          else g = itms.first == 0 || itms.first > b ? "next" : "prev";
        if (g == "prev") b = itms.total - b;
        y.trigger(cf_e(g, conf), [f, b, h]);
        return true;
      });
      y.bind(cf_e("prevPage", conf), function (e, a, b) {
        e.stopPropagation();
        var c = y.triggerHandler(cf_e("currentPage", conf));
        return y.triggerHandler(cf_e("slideToPage", conf), [
          c - 1,
          a,
          "prev",
          b,
        ]);
      });
      y.bind(cf_e("nextPage", conf), function (e, a, b) {
        e.stopPropagation();
        var c = y.triggerHandler(cf_e("currentPage", conf));
        return y.triggerHandler(cf_e("slideToPage", conf), [
          c + 1,
          a,
          "next",
          b,
        ]);
      });
      y.bind(cf_e("slideToPage", conf), function (e, a, b, c, d) {
        e.stopPropagation();
        if (!is_number(a)) a = y.triggerHandler(cf_e("currentPage", conf));
        var f = opts.pagination.items || opts.items.visible,
          max = Math.ceil(itms.total / f) - 1;
        if (a < 0) a = max;
        if (a > max) a = 0;
        return y.triggerHandler(cf_e("slideTo", conf), [
          a * f,
          0,
          true,
          b,
          c,
          d,
        ]);
      });
      y.bind(cf_e("jumpToStart", conf), function (e, s) {
        e.stopPropagation();
        if (s) s = gn_getItemIndex(s, 0, true, itms, y);
        else s = 0;
        s += itms.first;
        if (s != 0) {
          if (itms.total > 0) while (s > itms.total) s -= itms.total;
          y.prepend(y.children().slice(s, itms.total));
        }
        return true;
      });
      y.bind(cf_e("synchronise", conf), function (e, s) {
        e.stopPropagation();
        if (s) s = cf_getSynchArr(s);
        else if (opts.synchronise) s = opts.synchronise;
        else return debug(conf, "No carousel to synchronise.");
        var n = y.triggerHandler(cf_e("currentPosition", conf)),
          x = true;
        for (var j = 0, l = s.length; j < l; j++)
          if (
            !s[j][0].triggerHandler(cf_e("slideTo", conf), [n, s[j][3], true])
          )
            x = false;
        return x;
      });
      y.bind(cf_e("queue", conf), function (e, a, b) {
        e.stopPropagation();
        if (is_function(a)) a.call($tt0, queu);
        else if (is_array(a)) queu = a;
        else if (!is_undefined(a)) queu.push([a, b]);
        return queu;
      });
      y.bind(cf_e("insertItem", conf), function (e, b, c, d, f) {
        e.stopPropagation();
        var v = [b, c, d, f],
          t = ["string/object", "string/number/object", "boolean", "number"],
          a = cf_sortParams(v, t);
        b = a[0];
        c = a[1];
        d = a[2];
        f = a[3];
        if (is_object(b) && !is_jquery(b)) b = $(b);
        else if (is_string(b)) b = $(b);
        if (!is_jquery(b) || b.length == 0)
          return debug(conf, "Not a valid object.");
        if (is_undefined(c)) c = "end";
        sz_storeMargin(b, opts);
        sz_storeSizes(b, opts);
        var g = c,
          before = "before";
        if (c == "end")
          if (d) {
            if (itms.first == 0) {
              c = itms.total - 1;
              before = "after";
            } else {
              c = itms.first;
              itms.first += b.length;
            }
            if (c < 0) c = 0;
          } else {
            c = itms.total - 1;
            before = "after";
          }
        else c = gn_getItemIndex(c, f, d, itms, y);
        var h = y.children().eq(c);
        if (h.length) h[before](b);
        else {
          debug(
            conf,
            "Correct insert-position not found! Appending item to the end."
          );
          y.append(b);
        }
        if (g != "end" && !d) if (c < itms.first) itms.first += b.length;
        itms.total = y.children().length;
        if (itms.first >= itms.total) itms.first -= itms.total;
        y.trigger(cf_e("updateSizes", conf));
        y.trigger(cf_e("linkAnchors", conf));
        return true;
      });
      y.bind(cf_e("removeItem", conf), function (e, c, d, f) {
        e.stopPropagation();
        var v = [c, d, f],
          t = ["string/number/object", "boolean", "number"],
          a = cf_sortParams(v, t);
        c = a[0];
        d = a[1];
        f = a[2];
        var g = false;
        if (c instanceof $ && c.length > 1) {
          h = $();
          c.each(function (i, a) {
            var b = y.trigger(cf_e("removeItem", conf), [$(this), d, f]);
            if (b) h = h.add(b);
          });
          return h;
        }
        if (is_undefined(c) || c == "end") h = y.children().last();
        else {
          c = gn_getItemIndex(c, f, d, itms, y);
          var h = y.children().eq(c);
          if (h.length) if (c < itms.first) itms.first -= h.length;
        }
        if (h && h.length) {
          h.detach();
          itms.total = y.children().length;
          y.trigger(cf_e("updateSizes", conf));
        }
        return h;
      });
      y.bind(
        cf_e("onBefore", conf) + " " + cf_e("onAfter", conf),
        function (e, a) {
          e.stopPropagation();
          var b = e.type.slice(conf.events.prefix.length);
          if (is_array(a)) clbk[b] = a;
          if (is_function(a)) clbk[b].push(a);
          return clbk[b];
        }
      );
      y.bind(cf_e("currentPosition", conf), function (e, a) {
        e.stopPropagation();
        if (itms.first == 0) var b = 0;
        else var b = itms.total - itms.first;
        if (is_function(a)) a.call($tt0, b);
        return b;
      });
      y.bind(cf_e("currentPage", conf), function (e, a) {
        e.stopPropagation();
        var b = opts.pagination.items || opts.items.visible,
          max = Math.ceil(itms.total / b - 1),
          nr;
        if (itms.first == 0) nr = 0;
        else if (itms.first < itms.total % b) nr = 0;
        else if (itms.first == b && !opts.circular) nr = max;
        else nr = Math.round((itms.total - itms.first) / b);
        if (nr < 0) nr = 0;
        if (nr > max) nr = max;
        if (is_function(a)) a.call($tt0, nr);
        return nr;
      });
      y.bind(cf_e("currentVisible", conf), function (e, a) {
        e.stopPropagation();
        var b = gi_getCurrentItems(y.children(), opts);
        if (is_function(a)) a.call($tt0, b);
        return b;
      });
      y.bind(cf_e("slice", conf), function (e, f, l, b) {
        e.stopPropagation();
        if (itms.total == 0) return false;
        var v = [f, l, b],
          t = ["number", "number", "function"],
          a = cf_sortParams(v, t);
        f = is_number(a[0]) ? a[0] : 0;
        l = is_number(a[1]) ? a[1] : itms.total;
        b = a[2];
        f += itms.first;
        l += itms.first;
        if (items.total > 0) {
          while (f > itms.total) f -= itms.total;
          while (l > itms.total) l -= itms.total;
          while (f < 0) f += itms.total;
          while (l < 0) l += itms.total;
        }
        var c = y.children(),
          $i;
        if (l > f) $i = c.slice(f, l);
        else $i = $(c.slice(f, itms.total).get().concat(c.slice(0, l).get()));
        if (is_function(b)) b.call($tt0, $i);
        return $i;
      });
      y.bind(
        cf_e("isPaused", conf) +
          " " +
          cf_e("isStopped", conf) +
          " " +
          cf_e("isScrolling", conf),
        function (e, a) {
          e.stopPropagation();
          var b = e.type.slice(conf.events.prefix.length),
            value = z[b];
          if (is_function(a)) a.call($tt0, value);
          return value;
        }
      );
      y.bind(cf_e("configuration", conf), function (e, a, b, c) {
        e.stopPropagation();
        var d = false;
        if (is_function(a)) a.call($tt0, opts);
        else if (is_object(a)) {
          opts_orig = $.extend(true, {}, opts_orig, a);
          if (b !== false) d = true;
          else opts = $.extend(true, {}, opts, a);
        } else if (!is_undefined(a))
          if (is_function(b)) {
            var f = eval("opts." + a);
            if (is_undefined(f)) f = "";
            b.call($tt0, f);
          } else if (!is_undefined(b)) {
            if (typeof c !== "boolean") c = true;
            eval("opts_orig." + a + " = b");
            if (c !== false) d = true;
            else eval("opts." + a + " = b");
          } else return eval("opts." + a);
        if (d) {
          sz_resetMargin(y.children(), opts);
          y._cfs_init(opts_orig);
          y._cfs_bind_buttons();
          var g = sz_setSizes(y, opts);
          y.trigger(cf_e("updatePageStatus", conf), [true, g]);
        }
        return opts;
      });
      y.bind(cf_e("linkAnchors", conf), function (e, a, b) {
        e.stopPropagation();
        if (is_undefined(a)) a = $("body");
        else if (is_string(a)) a = $(a);
        if (!is_jquery(a) || a.length == 0)
          return debug(conf, "Not a valid object.");
        if (!is_string(b)) b = "a.caroufredsel";
        a.find(b).each(function () {
          var h = this.hash || "";
          if (h.length > 0 && y.children().index($(h)) != -1)
            $(this)
              .unbind("click")
              .click(function (e) {
                e.preventDefault();
                y.trigger(cf_e("slideTo", conf), h);
              });
        });
        return true;
      });
      y.bind(cf_e("updatePageStatus", conf), function (e, b, c) {
        e.stopPropagation();
        if (!opts.pagination.container) return;
        var d = opts.pagination.items || opts.items.visible,
          pgs = Math.ceil(itms.total / d);
        if (b) {
          if (opts.pagination.anchorBuilder) {
            opts.pagination.container.children().remove();
            opts.pagination.container.each(function () {
              for (var a = 0; a < pgs; a++) {
                var i = y
                  .children()
                  .eq(gn_getItemIndex(a * d, 0, true, itms, y));
                $(this).append(opts.pagination.anchorBuilder.call(i[0], a + 1));
              }
            });
          }
          opts.pagination.container.each(function () {
            $(this)
              .children()
              .unbind(opts.pagination.event)
              .each(function (a) {
                $(this).bind(opts.pagination.event, function (e) {
                  e.preventDefault();
                  y.trigger(cf_e("slideTo", conf), [
                    a * d,
                    -opts.pagination.deviation,
                    true,
                    opts.pagination,
                  ]);
                });
              });
          });
        }
        var f =
          y.triggerHandler(cf_e("currentPage", conf)) +
          opts.pagination.deviation;
        if (f >= pgs) f = 0;
        if (f < 0) f = pgs - 1;
        opts.pagination.container.each(function () {
          $(this)
            .children()
            .removeClass(cf_c("selected", conf))
            .eq(f)
            .addClass(cf_c("selected", conf));
        });
        return true;
      });
      y.bind(cf_e("updateSizes", conf), function (e) {
        var a = opts.items.visible,
          a_itm = y.children(),
          avail_primary = ms_getParentSize($wrp, opts, "width");
        itms.total = a_itm.length;
        opts.maxDimension = ms_getMaxDimension(opts, avail_primary);
        if (z.primarySizePercentage)
          opts[opts.d["width"]] = ms_getPercentage(
            avail_primary,
            z.primarySizePercentage
          );
        if (opts.responsive) {
          opts.items.width = opts.items.sizesConf.width;
          opts.items.height = opts.items.sizesConf.height;
          opts = in_getResponsiveValues(opts, a_itm, avail_primary);
          a = opts.items.visible;
          sz_setResponsiveSizes(opts, a_itm);
        } else if (opts.items.visibleConf.variable)
          a = gn_getVisibleItemsNext(a_itm, opts, 0);
        else if (opts.items.filter != "*")
          a = gn_getVisibleItemsNextFilter(a_itm, opts, 0);
        if (!opts.circular && itms.first != 0 && a > itms.first) {
          if (opts.items.visibleConf.variable)
            var b =
              gn_getVisibleItemsPrev(a_itm, opts, itms.first) - itms.first;
          else if (opts.items.filter != "*")
            var b =
              gn_getVisibleItemsPrevFilter(a_itm, opts, itms.first) -
              itms.first;
          else var b = opts.items.visible - itms.first;
          debug(
            conf,
            "Preventing non-circular: sliding " + b + " items backward."
          );
          y.trigger(cf_e("prev", conf), b);
        }
        opts.items.visible = cf_getItemsAdjust(
          a,
          opts,
          opts.items.visibleConf.adjust,
          $tt0
        );
        opts.items.visibleConf.old = opts.items.visible;
        opts = in_getAlignPadding(opts, a_itm);
        var c = sz_setSizes(y, opts);
        y.trigger(cf_e("updatePageStatus", conf), [true, c]);
        nv_showNavi(opts, itms.total, conf);
        nv_enableNavi(opts, itms.first, conf);
        return c;
      });
      y.bind(cf_e("destroy", conf), function (e, a) {
        e.stopPropagation();
        tmrs = sc_clearTimers(tmrs);
        y.data("_cfs_isCarousel", false);
        y.trigger(cf_e("finish", conf));
        if (a) y.trigger(cf_e("jumpToStart", conf));
        sz_resetMargin(y.children(), opts);
        if (opts.responsive)
          y.children().each(function () {
            $(this).css($(this).data("_cfs_origCssSizes"));
          });
        y.css(y.data("_cfs_origCss"));
        y._cfs_unbind_events();
        y._cfs_unbind_buttons();
        $wrp.replaceWith(y);
        return true;
      });
      y.bind(cf_e("debug", conf), function (e) {
        debug(conf, "Carousel width: " + opts.width);
        debug(conf, "Carousel height: " + opts.height);
        debug(conf, "Item widths: " + opts.items.width);
        debug(conf, "Item heights: " + opts.items.height);
        debug(conf, "Number of items visible: " + opts.items.visible);
        if (opts.auto.play)
          debug(
            conf,
            "Number of items scrolled automatically: " + opts.auto.items
          );
        if (opts.prev.button)
          debug(conf, "Number of items scrolled backward: " + opts.prev.items);
        if (opts.next.button)
          debug(conf, "Number of items scrolled forward: " + opts.next.items);
        return conf.debug;
      });
      y.bind("_cfs_triggerEvent", function (e, n, o) {
        e.stopPropagation();
        return y.triggerHandler(cf_e(n, conf), o);
      });
    };
    y._cfs_unbind_events = function () {
      y.unbind(cf_e("", conf));
      y.unbind(cf_e("", conf, false));
      y.unbind("_cfs_triggerEvent");
    };
    y._cfs_bind_buttons = function () {
      y._cfs_unbind_buttons();
      nv_showNavi(opts, itms.total, conf);
      nv_enableNavi(opts, itms.first, conf);
      if (opts.auto.pauseOnHover) {
        var b = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
        $wrp
          .bind(cf_e("mouseenter", conf, false), function () {
            y.trigger(cf_e("pause", conf), b);
          })
          .bind(cf_e("mouseleave", conf, false), function () {
            y.trigger(cf_e("resume", conf));
          });
      }
      if (opts.auto.button)
        opts.auto.button.bind(cf_e(opts.auto.event, conf, false), function (e) {
          e.preventDefault();
          var a = false,
            b = null;
          if (z.isPaused) a = "play";
          else if (opts.auto.pauseOnEvent) {
            a = "pause";
            b = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent);
          }
          if (a) y.trigger(cf_e(a, conf), b);
        });
      if (opts.prev.button) {
        opts.prev.button.bind(cf_e(opts.prev.event, conf, false), function (e) {
          e.preventDefault();
          y.trigger(cf_e("prev", conf));
        });
        if (opts.prev.pauseOnHover) {
          var b = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
          opts.prev.button
            .bind(cf_e("mouseenter", conf, false), function () {
              y.trigger(cf_e("pause", conf), b);
            })
            .bind(cf_e("mouseleave", conf, false), function () {
              y.trigger(cf_e("resume", conf));
            });
        }
      }
      if (opts.next.button) {
        opts.next.button.bind(cf_e(opts.next.event, conf, false), function (e) {
          e.preventDefault();
          y.trigger(cf_e("next", conf));
        });
        if (opts.next.pauseOnHover) {
          var b = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
          opts.next.button
            .bind(cf_e("mouseenter", conf, false), function () {
              y.trigger(cf_e("pause", conf), b);
            })
            .bind(cf_e("mouseleave", conf, false), function () {
              y.trigger(cf_e("resume", conf));
            });
        }
      }
      if (opts.pagination.container)
        if (opts.pagination.pauseOnHover) {
          var b = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
          opts.pagination.container
            .bind(cf_e("mouseenter", conf, false), function () {
              y.trigger(cf_e("pause", conf), b);
            })
            .bind(cf_e("mouseleave", conf, false), function () {
              y.trigger(cf_e("resume", conf));
            });
        }
      if (opts.prev.key || opts.next.key)
        $(document).bind(cf_e("keyup", conf, false, true, true), function (e) {
          var k = e.keyCode;
          if (k == opts.next.key) {
            e.preventDefault();
            y.trigger(cf_e("next", conf));
          }
          if (k == opts.prev.key) {
            e.preventDefault();
            y.trigger(cf_e("prev", conf));
          }
        });
      if (opts.pagination.keys)
        $(document).bind(cf_e("keyup", conf, false, true, true), function (e) {
          var k = e.keyCode;
          if (k >= 49 && k < 58) {
            k = (k - 49) * opts.items.visible;
            if (k <= itms.total) {
              e.preventDefault();
              y.trigger(cf_e("slideTo", conf), [k, 0, true, opts.pagination]);
            }
          }
        });
      if (opts.prev.wipe || opts.next.wipe) {
        deprecated("the touchwipe-plugin", "the touchSwipe-plugin");
        if ($.fn.touchwipe) {
          var c = opts.prev.wipe
              ? function () {
                  y.trigger(cf_e("prev", conf));
                }
              : null,
            wN = opts.next.wipe
              ? function () {
                  y.trigger(cf_e("next", conf));
                }
              : null;
          if (wN || wN)
            if (!z.touchwipe) {
              z.touchwipe = true;
              var d = {
                min_move_x: 30,
                min_move_y: 30,
                preventDefaultEvents: true,
              };
              switch (opts.direction) {
                case "up":
                case "down":
                  d.wipeUp = c;
                  d.wipeDown = wN;
                  break;
                default:
                  d.wipeLeft = wN;
                  d.wipeRight = c;
              }
              $wrp.touchwipe(d);
            }
        }
      }
      if ($.fn.swipe) {
        var f = "ontouchstart" in window;
        if ((f && opts.swipe.onTouch) || (!f && opts.swipe.onMouse)) {
          var g = $.extend(true, {}, opts.prev, opts.swipe),
            scN = $.extend(true, {}, opts.next, opts.swipe),
            swP = function () {
              y.trigger(cf_e("prev", conf), [g]);
            },
            swN = function () {
              y.trigger(cf_e("next", conf), [scN]);
            };
          switch (opts.direction) {
            case "up":
            case "down":
              opts.swipe.options.swipeUp = swN;
              opts.swipe.options.swipeDown = swP;
              break;
            default:
              opts.swipe.options.swipeLeft = swN;
              opts.swipe.options.swipeRight = swP;
          }
          if (z.swipe) y.swipe("destroy");
          $wrp.swipe(opts.swipe.options);
          $wrp.css("cursor", "move");
          z.swipe = true;
        }
      }
      if ($.fn.mousewheel) {
        if (opts.prev.mousewheel) {
          deprecated(
            "The prev.mousewheel option",
            "the mousewheel configuration object"
          );
          opts.prev.mousewheel = null;
          opts.mousewheel = {
            items: bt_mousesheelNumber(opts.prev.mousewheel),
          };
        }
        if (opts.next.mousewheel) {
          deprecated(
            "The next.mousewheel option",
            "the mousewheel configuration object"
          );
          opts.next.mousewheel = null;
          opts.mousewheel = {
            items: bt_mousesheelNumber(opts.next.mousewheel),
          };
        }
        if (opts.mousewheel) {
          var h = $.extend(true, {}, opts.prev, opts.mousewheel),
            mcN = $.extend(true, {}, opts.next, opts.mousewheel);
          if (z.mousewheel) $wrp.unbind(cf_e("mousewheel", conf, false));
          $wrp.bind(cf_e("mousewheel", conf, false), function (e, a) {
            e.preventDefault();
            if (a > 0) y.trigger(cf_e("prev", conf), [h]);
            else y.trigger(cf_e("next", conf), [mcN]);
          });
          z.mousewheel = true;
        }
      }
      if (opts.auto.play) y.trigger(cf_e("play", conf), opts.auto.delay);
      if (z.upDateOnWindowResize) {
        var i = $(window),
          _windowWidth = 0,
          _windowHeight = 0;
        i.bind(cf_e("resize", conf, false, true, true), function (e) {
          var a = i.width(),
            nh = i.height();
          if (a != _windowWidth || nh != _windowHeight) {
            y.trigger(cf_e("finish", conf));
            if (opts.auto.pauseOnResize && !z.isPaused)
              y.trigger(cf_e("play", conf));
            sz_resetMargin(y.children(), opts);
            y.trigger(cf_e("updateSizes", conf));
            _windowWidth = a;
            _windowHeight = nh;
          }
        });
      }
    };
    y._cfs_unbind_buttons = function () {
      var a = cf_e("", conf),
        ns2 = cf_e("", conf, false);
      ns3 = cf_e("", conf, false, true, true);
      $(document).unbind(ns3);
      $(window).unbind(ns3);
      $wrp.unbind(ns2);
      if (opts.auto.button) opts.auto.button.unbind(ns2);
      if (opts.prev.button) opts.prev.button.unbind(ns2);
      if (opts.next.button) opts.next.button.unbind(ns2);
      if (opts.pagination.container) {
        opts.pagination.container.unbind(ns2);
        if (opts.pagination.anchorBuilder)
          opts.pagination.container.children().remove();
      }
      if (z.swipe) {
        y.swipe("destroy");
        $wrp.css("cursor", "default");
        z.swipe = false;
      }
      if (z.mousewheel) z.mousewheel = false;
      nv_showNavi(opts, "hide", conf);
      nv_enableNavi(opts, "removeClass", conf);
    };
    if (is_boolean(w)) w = { debug: w };
    var z = {
        direction: "next",
        isPaused: true,
        isScrolling: false,
        isStopped: false,
        mousewheel: false,
        swipe: false,
      },
      itms = { total: y.children().length, first: 0 },
      tmrs = {
        auto: null,
        progress: null,
        startTime: getTime(),
        timePassed: 0,
      },
      scrl = {
        isStopped: false,
        duration: 0,
        startTime: 0,
        easing: "",
        anims: [],
      },
      clbk = { onBefore: [], onAfter: [] },
      queu = [],
      conf = $.extend(true, {}, $.fn.carouFredSel.configs, w),
      opts = {},
      opts_orig = $.extend(true, {}, u),
      $wrp = y
        .wrap(
          "<" +
            conf.wrapper.element +
            ' class="' +
            conf.wrapper.classname +
            '" />'
        )
        .parent();
    conf.selector = y.selector;
    conf.serialNumber = $.fn.carouFredSel.serialNumber++;
    y._cfs_init(opts_orig, true, starting_position);
    y._cfs_build();
    y._cfs_bind_events();
    y._cfs_bind_buttons();
    if (is_array(opts.items.start)) var A = opts.items.start;
    else {
      var A = [];
      if (opts.items.start != 0) A.push(opts.items.start);
    }
    if (opts.cookie) A.unshift(parseInt(cf_getCookie(opts.cookie), 10));
    if (A.length > 0)
      for (var a = 0, l = A.length; a < l; a++) {
        var s = A[a];
        if (s == 0) continue;
        if (s === true) {
          s = window.location.hash;
          if (s.length < 1) continue;
        } else if (s === "random") s = Math.floor(Math.random() * itms.total);
        if (
          y.triggerHandler(cf_e("slideTo", conf), [s, 0, true, { fx: "none" }])
        )
          break;
      }
    var B = sz_setSizes(y, opts),
      itm = gi_getCurrentItems(y.children(), opts);
    if (opts.onCreate)
      opts.onCreate.call($tt0, {
        width: B.width,
        height: B.height,
        items: itm,
      });
    y.trigger(cf_e("updatePageStatus", conf), [true, B]);
    y.trigger(cf_e("linkAnchors", conf));
    if (conf.debug) y.trigger(cf_e("debug", conf));
    return y;
  };
  $.fn.carouFredSel.serialNumber = 1;
  $.fn.carouFredSel.defaults = {
    synchronise: false,
    infinite: true,
    circular: true,
    responsive: false,
    direction: "left",
    items: { start: 0 },
    scroll: {
      easing: "swing",
      duration: 500,
      pauseOnHover: false,
      event: "click",
      queue: false,
    },
  };
  $.fn.carouFredSel.configs = {
    debug: false,
    events: { prefix: "", namespace: "cfs" },
    wrapper: { element: "div", classname: "caroufredsel_wrapper" },
    classnames: {},
  };
  $.fn.carouFredSel.pageAnchorBuilder = function (a) {
    return '<a href="#"><span>' + a + "</span></a>";
  };
  $.fn.carouFredSel.progressbarUpdater = function (a) {
    $(this).css("width", a + "%");
  };
  $.fn.carouFredSel.cookie = {
    get: function (n) {
      n += "=";
      var b = document.cookie.split(";");
      for (var a = 0, l = b.length; a < l; a++) {
        var c = b[a];
        while (c.charAt(0) == " ") c = c.slice(1);
        if (c.indexOf(n) == 0) return c.slice(n.length);
      }
      return 0;
    },
    set: function (n, v, d) {
      var e = "";
      if (d) {
        var a = new Date();
        a.setTime(a.getTime() + d * 24 * 60 * 60 * 1e3);
        e = "; expires=" + a.toGMTString();
      }
      document.cookie = n + "=" + v + e + "; path=/";
    },
    remove: function (n) {
      $.fn.carouFredSel.cookie.set(n, "", -1);
    },
  };
  function sc_setScroll(d, e) {
    return {
      anims: [],
      duration: d,
      orgDuration: d,
      easing: e,
      startTime: getTime(),
    };
  }
  function sc_startScroll(s) {
    if (is_object(s.pre)) sc_startScroll(s.pre);
    for (var a = 0, l = s.anims.length; a < l; a++) {
      var b = s.anims[a];
      if (!b) continue;
      if (b[3]) b[0].stop();
      b[0].animate(b[1], {
        complete: b[2],
        duration: s.duration,
        easing: s.easing,
      });
    }
    if (is_object(s.post)) sc_startScroll(s.post);
  }
  function sc_stopScroll(s, c) {
    if (!is_boolean(c)) c = true;
    if (is_object(s.pre)) sc_stopScroll(s.pre, c);
    for (var a = 0, l = s.anims.length; a < l; a++) {
      var b = s.anims[a];
      b[0].stop(true);
      if (c) {
        b[0].css(b[1]);
        if (is_function(b[2])) b[2]();
      }
    }
    if (is_object(s.post)) sc_stopScroll(s.post, c);
  }
  function sc_afterScroll(a, b, o) {
    if (b) b.remove();
    switch (o.fx) {
      case "fade":
      case "crossfade":
      case "cover-fade":
      case "uncover-fade":
        a.css("filter", "");
        break;
    }
  }
  function sc_fireCallbacks(d, o, b, a, c) {
    if (o[b]) o[b].call(d, a);
    if (c[b].length)
      for (var i = 0, l = c[b].length; i < l; i++) c[b][i].call(d, a);
    return [];
  }
  function sc_fireQueue(a, q, c) {
    if (q.length) {
      a.trigger(cf_e(q[0][0], c), q[0][1]);
      q.shift();
    }
    return q;
  }
  function sc_hideHiddenItems(b) {
    b.each(function () {
      var a = $(this);
      a.data("_cfs_isHidden", a.is(":hidden")).hide();
    });
  }
  function sc_showHiddenItems(b) {
    if (b)
      b.each(function () {
        var a = $(this);
        if (!a.data("_cfs_isHidden")) a.show();
      });
  }
  function sc_clearTimers(t) {
    if (t.auto) clearTimeout(t.auto);
    if (t.progress) clearInterval(t.progress);
    return t;
  }
  function sc_mapCallbackArguments(a, b, c, d, e, f, g) {
    return {
      width: g.width,
      height: g.height,
      items: { old: a, skipped: b, visible: c, new: c },
      scroll: { items: d, direction: e, duration: f },
    };
  }
  function sc_getDuration(a, o, b, c) {
    var d = a.duration;
    if (a.fx == "none") return 0;
    if (d == "auto") d = (o.scroll.duration / o.scroll.items) * b;
    else if (d < 10) d = c / d;
    if (d < 1) return 0;
    if (a.fx == "fade") d = d / 2;
    return Math.round(d);
  }
  function nv_showNavi(o, t, c) {
    var a = is_number(o.items.minimum) ? o.items.minimum : o.items.visible + 1;
    if (t == "show" || t == "hide") var f = t;
    else if (a > t) {
      debug(
        c,
        "Not enough items (" +
          t +
          " total, " +
          a +
          " needed): Hiding navigation."
      );
      var f = "hide";
    } else var f = "show";
    var s = f == "show" ? "removeClass" : "addClass",
      h = cf_c("hidden", c);
    if (o.auto.button) o.auto.button[f]()[s](h);
    if (o.prev.button) o.prev.button[f]()[s](h);
    if (o.next.button) o.next.button[f]()[s](h);
    if (o.pagination.container) o.pagination.container[f]()[s](h);
  }
  function nv_enableNavi(o, f, c) {
    if (o.circular || o.infinite) return;
    var a = f == "removeClass" || f == "addClass" ? f : false,
      di = cf_c("disabled", c);
    if (o.auto.button && a) o.auto.button[a](di);
    if (o.prev.button) {
      var b = a || f == 0 ? "addClass" : "removeClass";
      o.prev.button[b](di);
    }
    if (o.next.button) {
      var b = a || f == o.items.visible ? "addClass" : "removeClass";
      o.next.button[b](di);
    }
  }
  function go_getObject(a, b) {
    if (is_function(b)) b = b.call(a);
    else if (is_undefined(b)) b = {};
    return b;
  }
  function go_getItemsObject(a, b) {
    b = go_getObject(a, b);
    if (is_number(b)) b = { visible: b };
    else if (b == "variable") b = { visible: b, width: b, height: b };
    else if (!is_object(b)) b = {};
    return b;
  }
  function go_getScrollObject(a, b) {
    b = go_getObject(a, b);
    if (is_number(b))
      if (b <= 50) b = { items: b };
      else b = { duration: b };
    else if (is_string(b)) b = { easing: b };
    else if (!is_object(b)) b = {};
    return b;
  }
  function go_getNaviObject(a, b) {
    b = go_getObject(a, b);
    if (is_string(b)) {
      var c = cf_getKeyCode(b);
      if (c == -1) b = $(b);
      else b = c;
    }
    return b;
  }
  function go_getAutoObject(a, b) {
    b = go_getNaviObject(a, b);
    if (is_jquery(b)) b = { button: b };
    else if (is_boolean(b)) b = { play: b };
    else if (is_number(b)) b = { timeoutDuration: b };
    if (b.progress)
      if (is_string(b.progress) || is_jquery(b.progress))
        b.progress = { bar: b.progress };
    return b;
  }
  function go_complementAutoObject(a, b) {
    if (is_function(b.button)) b.button = b.button.call(a);
    if (is_string(b.button)) b.button = $(b.button);
    if (!is_boolean(b.play)) b.play = true;
    if (!is_number(b.delay)) b.delay = 0;
    if (is_undefined(b.pauseOnEvent)) b.pauseOnEvent = true;
    if (!is_boolean(b.pauseOnResize)) b.pauseOnResize = true;
    if (!is_number(b.timeoutDuration))
      b.timeoutDuration = b.duration < 10 ? 2500 : b.duration * 5;
    if (b.progress) {
      if (is_function(b.progress.bar)) b.progress.bar = b.progress.bar.call(a);
      if (is_string(b.progress.bar)) b.progress.bar = $(b.progress.bar);
      if (b.progress.bar) {
        if (!is_function(b.progress.updater))
          b.progress.updater = $.fn.carouFredSel.progressbarUpdater;
        if (!is_number(b.progress.interval)) b.progress.interval = 50;
      } else b.progress = false;
    }
    return b;
  }
  function go_getPrevNextObject(a, b) {
    b = go_getNaviObject(a, b);
    if (is_jquery(b)) b = { button: b };
    else if (is_number(b)) b = { key: b };
    return b;
  }
  function go_complementPrevNextObject(a, b) {
    if (is_function(b.button)) b.button = b.button.call(a);
    if (is_string(b.button)) b.button = $(b.button);
    if (is_string(b.key)) b.key = cf_getKeyCode(b.key);
    return b;
  }
  function go_getPaginationObject(a, b) {
    b = go_getNaviObject(a, b);
    if (is_jquery(b)) b = { container: b };
    else if (is_boolean(b)) b = { keys: b };
    return b;
  }
  function go_complementPaginationObject(a, b) {
    if (is_function(b.container)) b.container = b.container.call(a);
    if (is_string(b.container)) b.container = $(b.container);
    if (!is_number(b.items)) b.items = false;
    if (!is_boolean(b.keys)) b.keys = false;
    if (!is_function(b.anchorBuilder) && !is_false(b.anchorBuilder))
      b.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder;
    if (!is_number(b.deviation)) b.deviation = 0;
    return b;
  }
  function go_getSwipeObject(a, b) {
    if (is_function(b)) b = b.call(a);
    if (is_undefined(b)) b = { onTouch: false };
    if (is_true(b)) b = { onTouch: b };
    else if (is_number(b)) b = { items: b };
    return b;
  }
  function go_complementSwipeObject(a, b) {
    if (!is_boolean(b.onTouch)) b.onTouch = true;
    if (!is_boolean(b.onMouse)) b.onMouse = false;
    if (!is_object(b.options)) b.options = {};
    if (!is_boolean(b.options.triggerOnTouchEnd))
      b.options.triggerOnTouchEnd = false;
    return b;
  }
  function go_getMousewheelObject(a, b) {
    if (is_function(b)) b = b.call(a);
    if (is_true(b)) b = {};
    else if (is_number(b)) b = { items: b };
    else if (is_undefined(b)) b = false;
    return b;
  }
  function go_complementMousewheelObject(a, b) {
    return b;
  }
  function gn_getItemIndex(a, b, c, d, e) {
    if (is_string(a)) a = $(a, e);
    if (is_object(a)) a = $(a, e);
    if (is_jquery(a)) {
      a = e.children().index(a);
      if (!is_boolean(c)) c = false;
    } else if (!is_boolean(c)) c = true;
    if (!is_number(a)) a = 0;
    if (!is_number(b)) b = 0;
    if (c) a += d.first;
    a += b;
    if (d.total > 0) {
      while (a >= d.total) a -= d.total;
      while (a < 0) a += d.total;
    }
    return a;
  }
  function gn_getVisibleItemsPrev(i, o, s) {
    var t = 0,
      x = 0;
    for (var a = s; a >= 0; a--) {
      var j = i.eq(a);
      t += j.is(":visible") ? j[o.d["outerWidth"]](true) : 0;
      if (t > o.maxDimension) return x;
      if (a == 0) a = i.length;
      x++;
    }
  }
  function gn_getVisibleItemsPrevFilter(i, o, s) {
    return gn_getItemsPrevFilter(i, o.items.filter, o.items.visibleConf.org, s);
  }
  function gn_getScrollItemsPrevFilter(i, o, s, m) {
    return gn_getItemsPrevFilter(i, o.items.filter, m, s);
  }
  function gn_getItemsPrevFilter(i, f, m, s) {
    var t = 0,
      x = 0;
    for (var a = s, l = i.length; a >= 0; a--) {
      x++;
      if (x == l) return x;
      var j = i.eq(a);
      if (j.is(f)) {
        t++;
        if (t == m) return x;
      }
      if (a == 0) a = l;
    }
  }
  function gn_getVisibleOrg(a, o) {
    return (
      o.items.visibleConf.org ||
      a.children().slice(0, o.items.visible).filter(o.items.filter).length
    );
  }
  function gn_getVisibleItemsNext(i, o, s) {
    var t = 0,
      x = 0;
    for (var a = s, l = i.length - 1; a <= l; a++) {
      var j = i.eq(a);
      t += j.is(":visible") ? j[o.d["outerWidth"]](true) : 0;
      if (t > o.maxDimension) return x;
      x++;
      if (x == l + 1) return x;
      if (a == l) a = -1;
    }
  }
  function gn_getVisibleItemsNextTestCircular(i, o, s, l) {
    var v = gn_getVisibleItemsNext(i, o, s);
    if (!o.circular) if (s + v > l) v = l - s;
    return v;
  }
  function gn_getVisibleItemsNextFilter(i, o, s) {
    return gn_getItemsNextFilter(
      i,
      o.items.filter,
      o.items.visibleConf.org,
      s,
      o.circular
    );
  }
  function gn_getScrollItemsNextFilter(i, o, s, m) {
    return gn_getItemsNextFilter(i, o.items.filter, m + 1, s, o.circular) - 1;
  }
  function gn_getItemsNextFilter(i, f, m, s, c) {
    var t = 0,
      x = 0;
    for (var a = s, l = i.length - 1; a <= l; a++) {
      x++;
      if (x >= l) return x;
      var j = i.eq(a);
      if (j.is(f)) {
        t++;
        if (t == m) return x;
      }
      if (a == l) a = -1;
    }
  }
  function gi_getCurrentItems(i, o) {
    return i.slice(0, o.items.visible);
  }
  function gi_getOldItemsPrev(i, o, n) {
    return i.slice(n, o.items.visibleConf.old + n);
  }
  function gi_getNewItemsPrev(i, o) {
    return i.slice(0, o.items.visible);
  }
  function gi_getOldItemsNext(i, o) {
    return i.slice(0, o.items.visibleConf.old);
  }
  function gi_getNewItemsNext(i, o, n) {
    return i.slice(n, o.items.visible + n);
  }
  function sz_storeMargin(i, o, d) {
    if (o.usePadding) {
      if (!is_string(d)) d = "_cfs_origCssMargin";
      i.each(function () {
        var j = $(this),
          m = parseInt(j.css(o.d["marginRight"]), 10);
        if (!is_number(m)) m = 0;
        j.data(d, m);
      });
    }
  }
  function sz_resetMargin(i, o, m) {
    if (o.usePadding) {
      var x = is_boolean(m) ? m : false;
      if (!is_number(m)) m = 0;
      sz_storeMargin(i, o, "_cfs_tempCssMargin");
      i.each(function () {
        var j = $(this);
        j.css(
          o.d["marginRight"],
          x ? j.data("_cfs_tempCssMargin") : m + j.data("_cfs_origCssMargin")
        );
      });
    }
  }
  function sz_storeSizes(i, o) {
    if (o.responsive)
      i.each(function () {
        var j = $(this),
          s = in_mapCss(j, ["width", "height"]);
        j.data("_cfs_origCssSizes", s);
      });
  }
  function sz_setResponsiveSizes(o, b) {
    var c = o.items.visible,
      newS = o.items[o.d["width"]],
      seco = o[o.d["height"]],
      secp = is_percentage(seco);
    b.each(function () {
      var a = $(this),
        nw = newS - ms_getPaddingBorderMargin(a, o, "Width");
      a[o.d["width"]](nw);
      if (secp) a[o.d["height"]](ms_getPercentage(nw, seco));
    });
  }
  function sz_setSizes(a, o) {
    var b = a.parent(),
      $i = a.children(),
      $v = gi_getCurrentItems($i, o),
      sz = cf_mapWrapperSizes(ms_getSizes($v, o, true), o, false);
    b.css(sz);
    if (o.usePadding) {
      var p = o.padding,
        r = p[o.d[1]];
      if (o.align && r < 0) r = 0;
      var c = $v.last();
      c.css(o.d["marginRight"], c.data("_cfs_origCssMargin") + r);
      a.css(o.d["top"], p[o.d[0]]);
      a.css(o.d["left"], p[o.d[3]]);
    }
    a.css(o.d["width"], sz[o.d["width"]] + ms_getTotalSize($i, o, "width") * 2);
    a.css(o.d["height"], ms_getLargestSize($i, o, "height"));
    return sz;
  }
  function ms_getSizes(i, o, a) {
    return [
      ms_getTotalSize(i, o, "width", a),
      ms_getLargestSize(i, o, "height", a),
    ];
  }
  function ms_getLargestSize(i, o, a, b) {
    if (!is_boolean(b)) b = false;
    if (is_number(o[o.d[a]]) && b) return o[o.d[a]];
    if (is_number(o.items[o.d[a]])) return o.items[o.d[a]];
    a = a.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight";
    return ms_getTrueLargestSize(i, o, a);
  }
  function ms_getTrueLargestSize(i, o, b) {
    var s = 0;
    for (var a = 0, l = i.length; a < l; a++) {
      var j = i.eq(a);
      var m = j.is(":visible") ? j[o.d[b]](true) : 0;
      if (s < m) s = m;
    }
    return s;
  }
  function ms_getTotalSize(i, o, b, c) {
    if (!is_boolean(c)) c = false;
    if (is_number(o[o.d[b]]) && c) return o[o.d[b]];
    if (is_number(o.items[o.d[b]])) return o.items[o.d[b]] * i.length;
    var d =
        b.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight",
      s = 0;
    for (var a = 0, l = i.length; a < l; a++) {
      var j = i.eq(a);
      s += j.is(":visible") ? j[o.d[d]](true) : 0;
    }
    return s;
  }
  function ms_getParentSize(a, o, d) {
    var b = a.is(":visible");
    if (b) a.hide();
    var s = a.parent()[o.d[d]]();
    if (b) a.show();
    return s;
  }
  function ms_getMaxDimension(o, a) {
    return is_number(o[o.d["width"]]) ? o[o.d["width"]] : a;
  }
  function ms_hasVariableSizes(i, o, b) {
    var s = false,
      v = false;
    for (var a = 0, l = i.length; a < l; a++) {
      var j = i.eq(a);
      var c = j.is(":visible") ? j[o.d[b]](true) : 0;
      if (s === false) s = c;
      else if (s != c) v = true;
      if (s == 0) v = true;
    }
    return v;
  }
  function ms_getPaddingBorderMargin(i, o, d) {
    return i[o.d["outer" + d]](true) - i[o.d[d.toLowerCase()]]();
  }
  function ms_getPercentage(s, o) {
    if (is_percentage(o)) {
      o = parseInt(o.slice(0, -1), 10);
      if (!is_number(o)) return s;
      s *= o / 100;
    }
    return s;
  }
  function cf_e(n, c, a, b, d) {
    if (!is_boolean(a)) a = true;
    if (!is_boolean(b)) b = true;
    if (!is_boolean(d)) d = false;
    if (a) n = c.events.prefix + n;
    if (b) n = n + "." + c.events.namespace;
    if (b && d) n += c.serialNumber;
    return n;
  }
  function cf_c(n, c) {
    return is_string(c.classnames[n]) ? c.classnames[n] : n;
  }
  function cf_mapWrapperSizes(a, o, p) {
    if (!is_boolean(p)) p = true;
    var b = o.usePadding && p ? o.padding : [0, 0, 0, 0];
    var c = {};
    c[o.d["width"]] = a[0] + b[1] + b[3];
    c[o.d["height"]] = a[1] + b[0] + b[2];
    return c;
  }
  function cf_sortParams(c, d) {
    var e = [];
    for (var a = 0, l1 = c.length; a < l1; a++)
      for (var b = 0, l2 = d.length; b < l2; b++)
        if (d[b].indexOf(typeof c[a]) > -1 && is_undefined(e[b])) {
          e[b] = c[a];
          break;
        }
    return e;
  }
  function cf_getPadding(p) {
    if (is_undefined(p)) return [0, 0, 0, 0];
    if (is_number(p)) return [p, p, p, p];
    if (is_string(p))
      p = p.split("px").join("").split("em").join("").split(" ");
    if (!is_array(p)) return [0, 0, 0, 0];
    for (var i = 0; i < 4; i++) p[i] = parseInt(p[i], 10);
    switch (p.length) {
      case 0:
        return [0, 0, 0, 0];
      case 1:
        return [p[0], p[0], p[0], p[0]];
      case 2:
        return [p[0], p[1], p[0], p[1]];
      case 3:
        return [p[0], p[1], p[2], p[1]];
      default:
        return [p[0], p[1], p[2], p[3]];
    }
  }
  function cf_getAlignPadding(a, o) {
    var x = is_number(o[o.d["width"]])
      ? Math.ceil(o[o.d["width"]] - ms_getTotalSize(a, o, "width"))
      : 0;
    switch (o.align) {
      case "left":
        return [0, x];
      case "right":
        return [x, 0];
      case "center":
      default:
        return [Math.ceil(x / 2), Math.floor(x / 2)];
    }
  }
  function cf_getDimensions(o) {
    var a = [
      [
        "width",
        "innerWidth",
        "outerWidth",
        "height",
        "innerHeight",
        "outerHeight",
        "left",
        "top",
        "marginRight",
        0,
        1,
        2,
        3,
      ],
      [
        "height",
        "innerHeight",
        "outerHeight",
        "width",
        "innerWidth",
        "outerWidth",
        "top",
        "left",
        "marginBottom",
        3,
        2,
        1,
        0,
      ],
    ];
    var b = a[0].length,
      dx = o.direction == "right" || o.direction == "left" ? 0 : 1;
    var c = {};
    for (var d = 0; d < b; d++) c[a[0][d]] = a[dx][d];
    return c;
  }
  function cf_getAdjust(x, o, a, b) {
    var v = x;
    if (is_function(a)) v = a.call(b, v);
    else if (is_string(a)) {
      var p = a.split("+"),
        m = a.split("-");
      if (m.length > p.length)
        var c = true,
          sta = m[0],
          adj = m[1];
      else
        var c = false,
          sta = p[0],
          adj = p[1];
      switch (sta) {
        case "even":
          v = x % 2 == 1 ? x - 1 : x;
          break;
        case "odd":
          v = x % 2 == 0 ? x - 1 : x;
          break;
        default:
          v = x;
          break;
      }
      adj = parseInt(adj, 10);
      if (is_number(adj)) {
        if (c) adj = -adj;
        v += adj;
      }
    }
    if (!is_number(v) || v < 1) v = 1;
    return v;
  }
  function cf_getItemsAdjust(x, o, a, b) {
    return cf_getItemAdjustMinMax(
      cf_getAdjust(x, o, a, b),
      o.items.visibleConf
    );
  }
  function cf_getItemAdjustMinMax(v, i) {
    if (is_number(i.min) && v < i.min) v = i.min;
    if (is_number(i.max) && v > i.max) v = i.max;
    if (v < 1) v = 1;
    return v;
  }
  function cf_getSynchArr(s) {
    if (!is_array(s)) s = [[s]];
    if (!is_array(s[0])) s = [s];
    for (var j = 0, l = s.length; j < l; j++) {
      if (is_string(s[j][0])) s[j][0] = $(s[j][0]);
      if (!is_boolean(s[j][1])) s[j][1] = true;
      if (!is_boolean(s[j][2])) s[j][2] = true;
      if (!is_number(s[j][3])) s[j][3] = 0;
    }
    return s;
  }
  function cf_getKeyCode(k) {
    if (k == "right") return 39;
    if (k == "left") return 37;
    if (k == "up") return 38;
    if (k == "down") return 40;
    return -1;
  }
  function cf_setCookie(n, a, c) {
    if (n) {
      var v = a.triggerHandler(cf_e("currentPosition", c));
      $.fn.carouFredSel.cookie.set(n, v);
    }
  }
  function cf_getCookie(n) {
    var c = $.fn.carouFredSel.cookie.get(n);
    return c == "" ? 0 : c;
  }
  function in_mapCss(a, b) {
    var c = {},
      prop;
    for (var p = 0, l = b.length; p < l; p++) {
      prop = b[p];
      c[prop] = a.css(prop);
    }
    return c;
  }
  function in_complementItems(a, b, c, d) {
    if (!is_object(a.visibleConf)) a.visibleConf = {};
    if (!is_object(a.sizesConf)) a.sizesConf = {};
    if (a.start == 0 && is_number(d)) a.start = d;
    if (is_object(a.visible)) {
      a.visibleConf.min = a.visible.min;
      a.visibleConf.max = a.visible.max;
      a.visible = false;
    } else if (is_string(a.visible)) {
      if (a.visible == "variable") a.visibleConf.variable = true;
      else a.visibleConf.adjust = a.visible;
      a.visible = false;
    } else if (is_function(a.visible)) {
      a.visibleConf.adjust = a.visible;
      a.visible = false;
    }
    if (!is_string(a.filter))
      a.filter = c.filter(":hidden").length > 0 ? ":visible" : "*";
    if (!a[b.d["width"]])
      if (b.responsive) {
        debug(true, "Set a " + b.d["width"] + " for the items!");
        a[b.d["width"]] = ms_getTrueLargestSize(c, b, "outerWidth");
      } else
        a[b.d["width"]] = ms_hasVariableSizes(c, b, "outerWidth")
          ? "variable"
          : c[b.d["outerWidth"]](true);
    if (!a[b.d["height"]])
      a[b.d["height"]] = ms_hasVariableSizes(c, b, "outerHeight")
        ? "variable"
        : c[b.d["outerHeight"]](true);
    a.sizesConf.width = a.width;
    a.sizesConf.height = a.height;
    return a;
  }
  function in_complementVisibleItems(a, b) {
    if (a.items[a.d["width"]] == "variable")
      a.items.visibleConf.variable = true;
    if (!a.items.visibleConf.variable) {
      if (is_number(a[a.d["width"]]))
        a.items.visible = Math.floor(a[a.d["width"]] / a.items[a.d["width"]]);
      else {
        a.items.visible = Math.floor(b / a.items[a.d["width"]]);
        a[a.d["width"]] = a.items.visible * a.items[a.d["width"]];
        if (!a.items.visibleConf.adjust) a.align = false;
      }
      if (a.items.visible == "Infinity" || a.items.visible < 1) {
        debug(true, 'Not a valid number of visible items: Set to "variable".');
        a.items.visibleConf.variable = true;
      }
    }
    return a;
  }
  function in_complementPrimarySize(a, b, c) {
    if (a == "auto") a = ms_getTrueLargestSize(c, b, "outerWidth");
    return a;
  }
  function in_complementSecondarySize(a, b, c) {
    if (a == "auto") a = ms_getTrueLargestSize(c, b, "outerHeight");
    if (!a) a = b.items[b.d["height"]];
    return a;
  }
  function in_getAlignPadding(o, a) {
    var p = cf_getAlignPadding(gi_getCurrentItems(a, o), o);
    o.padding[o.d[1]] = p[1];
    o.padding[o.d[3]] = p[0];
    return o;
  }
  function in_getResponsiveValues(o, a, b) {
    var c = cf_getItemAdjustMinMax(
      Math.ceil(o[o.d["width"]] / o.items[o.d["width"]]),
      o.items.visibleConf
    );
    if (c > a.length) c = a.length;
    var d = Math.floor(o[o.d["width"]] / c);
    o.items.visible = c;
    o.items[o.d["width"]] = d;
    o[o.d["width"]] = c * d;
    return o;
  }
  function bt_pauseOnHoverConfig(p) {
    if (is_string(p))
      var i = p.indexOf("immediate") > -1 ? true : false,
        r = p.indexOf("resume") > -1 ? true : false;
    else var i = (r = false);
    return [i, r];
  }
  function bt_mousesheelNumber(a) {
    return is_number(a) ? a : null;
  }
  function is_null(a) {
    return a === null;
  }
  function is_undefined(a) {
    return (
      is_null(a) || typeof a == "undefined" || a === "" || a === "undefined"
    );
  }
  function is_array(a) {
    return a instanceof Array;
  }
  function is_jquery(a) {
    return a instanceof jQuery;
  }
  function is_object(a) {
    return (
      (a instanceof Object || typeof a == "object") &&
      !is_null(a) &&
      !is_jquery(a) &&
      !is_array(a)
    );
  }
  function is_number(a) {
    return (a instanceof Number || typeof a == "number") && !isNaN(a);
  }
  function is_string(a) {
    return (
      (a instanceof String || typeof a == "string") &&
      !is_undefined(a) &&
      !is_true(a) &&
      !is_false(a)
    );
  }
  function is_function(a) {
    return a instanceof Function || typeof a == "function";
  }
  function is_boolean(a) {
    return (
      a instanceof Boolean || typeof a == "boolean" || is_true(a) || is_false(a)
    );
  }
  function is_true(a) {
    return a === true || a === "true";
  }
  function is_false(a) {
    return a === false || a === "false";
  }
  function is_percentage(x) {
    return is_string(x) && x.slice(-1) == "%";
  }
  function getTime() {
    return new Date().getTime();
  }
  function deprecated(o, n) {
    debug(
      true,
      o +
        " is DEPRECATED, support for it will be removed. Use " +
        n +
        " instead."
    );
  }
  function debug(d, m) {
    if (is_object(d)) {
      var s = " (" + d.selector + ")";
      d = d.debug;
    } else var s = "";
    if (!d) return false;
    if (is_string(m)) m = "carouFredSel" + s + ": " + m;
    else m = ["carouFredSel" + s + ":", m];
    if (window.console && window.console.log) window.console.log(m);
    return false;
  }
  $.extend($.easing, {
    quadratic: function (t) {
      var a = t * t;
      return t * (-a * t + 4 * a - 6 * t + 4);
    },
    cubic: function (t) {
      return t * (4 * t * t - 9 * t + 6);
    },
    elastic: function (t) {
      var a = t * t;
      return t * (33 * a * a - 106 * a * t + 126 * a - 67 * t + 15);
    },
  });
})(jQuery);
(function (b) {
  b.fn.extend({
    autocomplete: function (a, c) {
      var r = "string" == typeof a;
      c = b.extend(
        {},
        b.Autocompleter.defaults,
        {
          url: r ? a : null,
          data: r ? null : a,
          delay: r ? b.Autocompleter.defaults.delay : 10,
          max: c && !c.scroll ? 10 : 150,
        },
        c
      );
      c.highlight =
        c.highlight ||
        function (a) {
          return a;
        };
      c.formatMatch = c.formatMatch || c.formatItem;
      return this.each(function () {
        new b.Autocompleter(this, c);
      });
    },
    result: function (a) {
      return this.bind("result", a);
    },
    search: function (a) {
      return this.trigger("search", [a]);
    },
    flushCache: function () {
      return this.trigger("flushCache");
    },
    setOptions: function (a) {
      return this.trigger("setOptions", [a]);
    },
    unautocomplete: function () {
      return this.trigger("unautocomplete");
    },
  });
  b.Autocompleter = function (a, c) {
    function r() {
      var v = l.selected();
      if (!v) return !1;
      var d = v.result;
      m = d;
      if (c.multiple) {
        var e = q(f.val());
        if (1 < e.length) {
          var h = c.multipleSeparator.length,
            j = b(a).selection().start,
            k,
            g = 0;
          b.each(e, function (a, c) {
            g += c.length;
            if (j <= g) return (k = a), !1;
            g += h;
          });
          e[k] = d;
          d = e.join(c.multipleSeparator);
        }
        d += c.multipleSeparator;
      }
      f.val(d);
      p();
      f.trigger("result", [v.data, v.value]);
      return !0;
    }
    function n(a, b) {
      if (w == h.DEL) l.hide();
      else {
        var j = f.val();
        if (b || j != m)
          (m = j),
            (j = g(j)),
            j.length >= c.minChars
              ? (f.addClass(c.loadingClass),
                c.matchCase || (j = j.toLowerCase()),
                e(j, d, p))
              : (f.removeClass(c.loadingClass), l.hide());
      }
    }
    function q(a) {
      return !a
        ? [""]
        : !c.multiple
        ? [b.trim(a)]
        : b.map(a.split(c.multipleSeparator), function (c) {
            return b.trim(a).length ? b.trim(c) : null;
          });
    }
    function g(d) {
      if (!c.multiple) return d;
      var j = q(d);
      if (1 == j.length) return j[0];
      j = b(a).selection().start;
      j = j == d.length ? q(d) : q(d.replace(d.substring(j), ""));
      return j[j.length - 1];
    }
    function p() {
      l.visible();
      l.hide();
      clearTimeout(s);
      f.removeClass(c.loadingClass);
      c.mustMatch &&
        f.search(function (a) {
          a ||
            (c.multiple
              ? ((a = q(f.val()).slice(0, -1)),
                f.val(
                  a.join(c.multipleSeparator) +
                    (a.length ? c.multipleSeparator : "")
                ))
              : (f.val(""), f.trigger("result", null)));
        });
    }
    function d(d, e) {
      if (e && e.length && j) {
        f.removeClass(c.loadingClass);
        l.display(e, d);
        var k = e[0].value;
        c.autoFill &&
          g(f.val()).toLowerCase() == d.toLowerCase() &&
          w != h.BACKSPACE &&
          (f.val(f.val() + k.substring(g(m).length)),
          b(a).selection(m.length, m.length + k.length));
        l.show();
      } else p();
    }
    function e(d, j, e) {
      c.matchCase || (d = d.toLowerCase());
      var h = k.load(d);
      if (h && h.length) j(d, h);
      else if ("string" == typeof c.url && 0 < c.url.length) {
        var f = { timestamp: +new Date() };
        b.each(c.extraParams, function (a, d) {
          f[a] = "function" == typeof d ? d() : d;
        });
        b.ajax({
          mode: "abort",
          port: "autocomplete" + a.name,
          dataType: c.dataType,
          url: c.url,
          data: b.extend({ q: g(d), limit: c.max }, f),
          success: function (a) {
            var e;
            if (!(e = c.parse && c.parse(a))) {
              e = [];
              a = a.split("\n");
              for (var h = 0; h < a.length; h++) {
                var f = b.trim(a[h]);
                f &&
                  ((f = f.split("|")),
                  (e[e.length] = {
                    data: f,
                    value: f[0],
                    result: (c.formatResult && c.formatResult(f, f[0])) || f[0],
                  }));
              }
            }
            k.add(d, e);
            j(d, e);
          },
        });
      } else l.emptyList(), e(d);
    }
    var h = {
        UP: 38,
        DOWN: 40,
        DEL: 46,
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        COMMA: 188,
        PAGEUP: 33,
        PAGEDOWN: 34,
        BACKSPACE: 8,
      },
      f = b(a).attr("autocomplete", "off").addClass(c.inputClass),
      s,
      m = "",
      k = b.Autocompleter.Cache(c),
      j = 0,
      w,
      u = { mouseDownOnSelect: !1 },
      l = b.Autocompleter.Select(c, a, r, u),
      t;
    b.browser.opera &&
      b(a.form).bind("submit.autocomplete", function () {
        if (t) return (t = !1);
      });
    f.bind(
      (b.browser.opera ? "keypress" : "keydown") + ".autocomplete",
      function (a) {
        j = 1;
        w = a.keyCode;
        switch (a.keyCode) {
          case h.UP:
            a.preventDefault();
            l.visible() ? l.prev() : n(0, !0);
            break;
          case h.DOWN:
            a.preventDefault();
            l.visible() ? l.next() : n(0, !0);
            break;
          case h.PAGEUP:
            a.preventDefault();
            l.visible() ? l.pageUp() : n(0, !0);
            break;
          case h.PAGEDOWN:
            a.preventDefault();
            l.visible() ? l.pageDown() : n(0, !0);
            break;
          case c.multiple && "," == b.trim(c.multipleSeparator) && h.COMMA:
          case h.TAB:
          case h.RETURN:
            if (r()) return a.preventDefault(), (t = !0), !1;
            break;
          case h.ESC:
            l.hide();
            break;
          default:
            clearTimeout(s), (s = setTimeout(n, c.delay));
        }
      }
    )
      .focus(function () {
        j++;
      })
      .blur(function () {
        j = 0;
        u.mouseDownOnSelect || (clearTimeout(s), (s = setTimeout(p, 200)));
      })
      .click(function () {
        1 < j++ && !l.visible() && n(0, !0);
      })
      .bind("search", function () {
        function a(c, e) {
          var j;
          if (e && e.length)
            for (var b = 0; b < e.length; b++)
              if (e[b].result.toLowerCase() == c.toLowerCase()) {
                j = e[b];
                break;
              }
          "function" == typeof d
            ? d(j)
            : f.trigger("result", j && [j.data, j.value]);
        }
        var d = 1 < arguments.length ? arguments[1] : null;
        b.each(q(f.val()), function (d, c) {
          e(c, a, a);
        });
      })
      .bind("flushCache", function () {
        k.flush();
      })
      .bind("setOptions", function (a, d) {
        b.extend(c, d);
        "data" in d && k.populate();
      })
      .bind("unautocomplete", function () {
        l.unbind();
        f.unbind();
        b(a.form).unbind(".autocomplete");
      });
  };
  b.Autocompleter.defaults = {
    inputClass: "ac_input",
    resultsClass: "search-autocomplete",
    loadingClass: "tgt-autocomplete-loading",
    minChars: 2,
    delay: 400,
    matchCase: !1,
    matchSubset: !0,
    matchContains: !1,
    cacheLength: 10,
    max: 100,
    mustMatch: !1,
    extraParams: {},
    selectFirst: !0,
    formatItem: function (a) {
      return a[0];
    },
    formatMatch: null,
    autoFill: !1,
    width: 0,
    multiple: !1,
    multipleSeparator: ", ",
    highlight: function (a, c) {
      return a.replace(
        RegExp(
          "(?![^&;]+;)(?!<[^<>]*)(" +
            c.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") +
            ")(?![^<>]*>)(?![^&;]+;)",
          "gi"
        ),
        "<strong>$1</strong>"
      );
    },
    scroll: !0,
    scrollHeight: 180,
  };
  b.Autocompleter.Cache = function (a) {
    function c(d, c) {
      a.matchCase || (d = d.toLowerCase());
      var b = d.indexOf(c);
      "word" == a.matchContains &&
        (b = d.toLowerCase().search("\\b" + c.toLowerCase()));
      return -1 == b ? !1 : 0 == b || a.matchContains;
    }
    function r(d, c) {
      p > a.cacheLength && q();
      g[d] || p++;
      g[d] = c;
    }
    function n() {
      if (!a.data) return !1;
      var d = {},
        c = 0;
      a.url || (a.cacheLength = 1);
      d[""] = [];
      for (var h = 0, f = a.data.length; h < f; h++) {
        var g = a.data[h],
          g = "string" == typeof g ? [g] : g,
          m = a.formatMatch(g, h + 1, a.data.length);
        if (!1 !== m) {
          var k = m.charAt(0).toLowerCase();
          d[k] || (d[k] = []);
          g = {
            value: m,
            data: g,
            result: (a.formatResult && a.formatResult(g)) || m,
          };
          d[k].push(g);
          c++ < a.max && d[""].push(g);
        }
      }
      b.each(d, function (d, c) {
        a.cacheLength++;
        r(d, c);
      });
    }
    function q() {
      g = {};
      p = 0;
    }
    var g = {},
      p = 0;
    setTimeout(n, 25);
    return {
      flush: q,
      add: r,
      populate: n,
      load: function (d) {
        if (!a.cacheLength || !p) return null;
        if (!a.url && a.matchContains) {
          var e = [],
            h;
          for (h in g)
            if (0 < h.length) {
              var f = g[h];
              b.each(f, function (a, b) {
                c(b.value, d) && e.push(b);
              });
            }
          return e;
        }
        if (g[d]) return g[d];
        if (a.matchSubset)
          for (h = d.length - 1; h >= a.minChars; h--)
            if ((f = g[d.substr(0, h)]))
              return (
                (e = []),
                b.each(f, function (a, b) {
                  c(b.value, d) && (e[e.length] = b);
                }),
                e
              );
        return null;
      },
    };
  };
  b.Autocompleter.Select = function (a, c, r, n) {
    function q(a) {
      for (a = a.target; a && "LI" != a.tagName; ) a = a.parentNode;
      return !a ? [] : a;
    }
    function g(c) {
      d.slice(e, e + 1).removeClass(p.ACTIVE);
      e += c;
      0 > e ? (e = d.size() - 1) : e >= d.size() && (e = 0);
      c = d.slice(e, e + 1).addClass(p.ACTIVE);
      if (a.scroll) {
        var b = 0;
        d.slice(0, e).each(function () {
          b += this.offsetHeight;
        });
        b + c[0].offsetHeight - k.scrollTop() > k[0].clientHeight
          ? k.scrollTop(b + c[0].offsetHeight - k.innerHeight())
          : b < k.scrollTop() && k.scrollTop(b);
      }
    }
    var p = { ACTIVE: "tgt-autocomplete-activeItem" },
      d,
      e = -1,
      h,
      f = "",
      s = !0,
      m,
      k;
    return {
      display: function (j, g) {
        s &&
          ((m = b("<div/>")
            .hide()
            .addClass(a.resultsClass)
            .css("position", "absolute")
            .appendTo(document.body)),
          (k = b("<div/>")
            .appendTo(m)
            .mouseover(function (a) {
              q(a).nodeName &&
                "LI" == q(a).nodeName.toUpperCase() &&
                ((e = b("li", k).removeClass(p.ACTIVE).index(q(a))),
                b(q(a)).addClass(p.ACTIVE));
            })
            .click(function (a) {
              b(q(a)).addClass(p.ACTIVE);
              r();
              c.focus();
              return !0;
            })
            .mousedown(function () {
              n.mouseDownOnSelect = !0;
            })
            .mouseup(function () {
              n.mouseDownOnSelect = !1;
            })),
          0 < a.width && m.css("width", a.width),
          (s = !1));
        h = j;
        f = g;
        k.empty();
        for (
          var u = a.max && a.max < h.length ? a.max : h.length, l = 0;
          l < u;
          l++
        )
          if (h[l]) {
            var t = a.formatItem(h[l].data, l + 1, u, h[l].value, f);
            !1 !== t &&
              ((t = b("<p/>")
                .html(a.highlight(t, f))
                .addClass("search-item")
                .appendTo(k)[0]),
              b.data(t, "ac_data", h[l]));
          }
        d = k.find("li");
        a.selectFirst && (d.slice(0, 1).addClass(p.ACTIVE), (e = 0));
        b.fn.bgiframe && k.bgiframe();
      },
      next: function () {
        g(1);
      },
      prev: function () {
        g(-1);
      },
      pageUp: function () {
        0 != e && 0 > e - 8 ? g(-e) : g(-8);
      },
      pageDown: function () {
        e != d.size() - 1 && e + 8 > d.size() ? g(d.size() - 1 - e) : g(8);
      },
      hide: function () {
        m && m.hide();
        d && d.removeClass(p.ACTIVE);
        e = -1;
      },
      visible: function () {
        return m && m.is(":visible");
      },
      current: function () {
        return (
          this.visible() &&
          (d.filter("." + p.ACTIVE)[0] || (a.selectFirst && d[0]))
        );
      },
      show: function () {
        var e = b(c).offset();
        m.css({
          width:
            "string" == typeof a.width || 0 < a.width ? a.width : b(c).width(),
          top: e.top + c.offsetHeight,
          left: e.left,
        }).show();
        if (
          a.scroll &&
          (k.scrollTop(0),
          k.css({ maxHeight: a.scrollHeight, overflow: "auto" }),
          b.browser.msie &&
            "undefined" === typeof document.body.style.maxHeight)
        ) {
          var f = 0;
          d.each(function () {
            f += this.offsetHeight;
          });
          e = f > a.scrollHeight;
          k.css("height", e ? a.scrollHeight : f);
          e ||
            d.width(
              k.width() -
                parseInt(d.css("padding-left")) -
                parseInt(d.css("padding-right"))
            );
        }
      },
      selected: function () {
        var a = d && d.filter("." + p.ACTIVE).removeClass(p.ACTIVE);
        return a && a.length && b.data(a[0], "ac_data");
      },
      emptyList: function () {
        k && k.empty();
      },
      unbind: function () {
        m && m.remove();
      },
    };
  };
  b.fn.selection = function (a, c) {
    if (void 0 !== a)
      return this.each(function () {
        if (this.createTextRange) {
          var b = this.createTextRange();
          void 0 === c || a == c
            ? b.move("character", a)
            : (b.collapse(!0),
              b.moveStart("character", a),
              b.moveEnd("character", c));
          b.select();
        } else this.setSelectionRange ? this.setSelectionRange(a, c) : this.selectionStart && ((this.selectionStart = a), (this.selectionEnd = c));
      });
    var b = this[0];
    if (b.createTextRange) {
      var n = document.selection.createRange(),
        q = b.value,
        g = n.text.length;
      n.text = "<->";
      n = b.value.indexOf("<->");
      b.value = q;
      this.selection(n, n + g);
      return { start: n, end: n + g };
    }
    if (void 0 !== b.selectionStart)
      return { start: b.selectionStart, end: b.selectionEnd };
  };
})(jQuery);
var Cufon = (function () {
  var m = function () {
    return m.replace.apply(null, arguments);
  };
  var x = (m.DOM = {
    ready: (function () {
      var C = false,
        E = { loaded: 1, complete: 1 };
      var B = [],
        D = function () {
          if (C) return;
          C = true;
          for (var F; (F = B.shift()); F());
        };
      if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", D, false);
        window.addEventListener("pageshow", D, false);
      }
      if (!window.opera && document.readyState)
        (function () {
          E[document.readyState] ? D() : setTimeout(arguments.callee, 10);
        })();
      if (document.readyState && document.createStyleSheet)
        (function () {
          try {
            document.body.doScroll("left");
            D();
          } catch (F) {
            setTimeout(arguments.callee, 1);
          }
        })();
      q(window, "load", D);
      return function (F) {
        if (!arguments.length) D();
        else C ? F() : B.push(F);
      };
    })(),
    root: function () {
      return document.documentElement || document.body;
    },
  });
  var n = (m.CSS = {
    Size: function (C, B) {
      this.value = parseFloat(C);
      this.unit = String(C).match(/[a-z%]*$/)[0] || "px";
      this.convert = function (D) {
        return (D / B) * this.value;
      };
      this.convertFrom = function (D) {
        return (D / this.value) * B;
      };
      this.toString = function () {
        return this.value + this.unit;
      };
    },
    addClass: function (C, B) {
      var D = C.className;
      C.className = D + (D && " ") + B;
      return C;
    },
    color: j(function (C) {
      var B = {};
      B.color = C.replace(/^rgba\((.*?),\s*([\d.]+)\)/, function (E, D, F) {
        B.opacity = parseFloat(F);
        return "rgb(" + D + ")";
      });
      return B;
    }),
    fontStretch: j(function (B) {
      if (typeof B == "number") return B;
      if (/%$/.test(B)) return parseFloat(B) / 100;
      return (
        {
          "ultra-condensed": 0.5,
          "extra-condensed": 0.625,
          condensed: 0.75,
          "semi-condensed": 0.875,
          "semi-expanded": 1.125,
          expanded: 1.25,
          "extra-expanded": 1.5,
          "ultra-expanded": 2,
        }[B] || 1
      );
    }),
    getStyle: function (C) {
      var B = document.defaultView;
      if (B && B.getComputedStyle) return new a(B.getComputedStyle(C, null));
      if (C.currentStyle) return new a(C.currentStyle);
      return new a(C.style);
    },
    gradient: j(function (F) {
      var G = { id: F, type: F.match(/^-([a-z]+)-gradient\(/)[1], stops: [] },
        C = F.substr(F.indexOf("(")).match(
          /([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/gi
        );
      for (var E = 0, B = C.length, D; E < B; ++E) {
        D = C[E].split("=", 2).reverse();
        G.stops.push([D[1] || E / (B - 1), D[0]]);
      }
      return G;
    }),
    quotedList: j(function (E) {
      var D = [],
        C = /\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g,
        B;
      while ((B = C.exec(E))) D.push(B[3] || B[1]);
      return D;
    }),
    recognizesMedia: j(function (G) {
      var E = document.createElement("style"),
        D,
        C,
        B;
      E.type = "text/css";
      E.media = G;
      try {
        E.appendChild(document.createTextNode("/**/"));
      } catch (F) {}
      C = g("head")[0];
      C.insertBefore(E, C.firstChild);
      D = E.sheet || E.styleSheet;
      B = D && !D.disabled;
      C.removeChild(E);
      return B;
    }),
    removeClass: function (D, C) {
      var B = RegExp("(?:^|\\s+)" + C + "(?=\\s|$)", "g");
      D.className = D.className.replace(B, "");
      return D;
    },
    supports: function (D, C) {
      var B = document.createElement("span").style;
      if (B[D] === undefined) return false;
      B[D] = C;
      return B[D] === C;
    },
    textAlign: function (E, D, B, C) {
      if (D.get("textAlign") == "right") {
        if (B > 0) E = " " + E;
      } else if (B < C - 1) E += " ";
      return E;
    },
    textShadow: j(function (F) {
      if (F == "none") return null;
      var E = [],
        G = {},
        B,
        C = 0;
      var D = /(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/gi;
      while ((B = D.exec(F)))
        if (B[0] == ",") {
          E.push(G);
          G = {};
          C = 0;
        } else if (B[1]) G.color = B[1];
        else G[["offX", "offY", "blur"][C++]] = B[2];
      E.push(G);
      return E;
    }),
    textTransform: (function () {
      var B = {
        uppercase: function (C) {
          return C.toUpperCase();
        },
        lowercase: function (C) {
          return C.toLowerCase();
        },
        capitalize: function (C) {
          return C.replace(/\b./g, function (D) {
            return D.toUpperCase();
          });
        },
      };
      return function (E, D) {
        var C = B[D.get("textTransform")];
        return C ? C(E) : E;
      };
    })(),
    whiteSpace: (function () {
      var D = { inline: 1, "inline-block": 1, "run-in": 1 };
      var C = /^\s+/,
        B = /\s+$/;
      return function (H, F, G, E) {
        if (E) if (E.nodeName.toLowerCase() == "br") H = H.replace(C, "");
        if (D[F.get("display")]) return H;
        if (!G.previousSibling) H = H.replace(C, "");
        if (!G.nextSibling) H = H.replace(B, "");
        return H;
      };
    })(),
  });
  n.ready = (function () {
    var B = !n.recognizesMedia("all"),
      E = false;
    var D = [],
      H = function () {
        B = true;
        for (var K; (K = D.shift()); K());
      };
    var I = g("link"),
      J = g("style");
    function C(K) {
      return K.disabled || G(K.sheet, K.media || "screen");
    }
    function G(M, P) {
      if (!n.recognizesMedia(P || "all")) return true;
      if (!M || M.disabled) return false;
      try {
        var Q = M.cssRules,
          O;
        if (Q)
          search: for (var L = 0, K = Q.length; (O = Q[L]), L < K; ++L)
            switch (O.type) {
              case 2:
                break;
              case 3:
                if (!G(O.styleSheet, O.media.mediaText)) return false;
                break;
              default:
                break search;
            }
      } catch (N) {}
      return true;
    }
    function F() {
      if (document.createStyleSheet) return true;
      var L, K;
      for (K = 0; (L = I[K]); ++K)
        if (L.rel.toLowerCase() == "stylesheet" && !C(L)) return false;
      for (K = 0; (L = J[K]); ++K) if (!C(L)) return false;
      return true;
    }
    x.ready(function () {
      if (!E) E = n.getStyle(document.body).isUsable();
      if (B || (E && F())) H();
      else setTimeout(arguments.callee, 10);
    });
    return function (K) {
      if (B) K();
      else D.push(K);
    };
  })();
  function s(D) {
    var C = (this.face = D.face),
      B = { " ": 1, "\u00a0": 1, "\u3000": 1 };
    this.glyphs = D.glyphs;
    this.w = D.w;
    this.baseSize = parseInt(C["units-per-em"], 10);
    this.family = C["font-family"].toLowerCase();
    this.weight = C["font-weight"];
    this.style = C["font-style"] || "normal";
    this.viewBox = (function () {
      var F = C.bbox.split(/\s+/);
      var E = {
        minX: parseInt(F[0], 10),
        minY: parseInt(F[1], 10),
        maxX: parseInt(F[2], 10),
        maxY: parseInt(F[3], 10),
      };
      E.width = E.maxX - E.minX;
      E.height = E.maxY - E.minY;
      E.toString = function () {
        return [this.minX, this.minY, this.width, this.height].join(" ");
      };
      return E;
    })();
    this.ascent = -parseInt(C.ascent, 10);
    this.descent = -parseInt(C.descent, 10);
    this.height = -this.ascent + this.descent;
    this.spacing = function (L, N, E) {
      var O = this.glyphs,
        M,
        K,
        G,
        P = [],
        F = 0,
        J = -1,
        I = -1,
        H;
      while ((H = L[++J])) {
        M = O[H] || this.missingGlyph;
        if (!M) continue;
        if (K) {
          F -= G = K[H] || 0;
          P[I] -= G;
        }
        F += P[++I] = ~~(M.w || this.w) + N + (B[H] ? E : 0);
        K = M.k;
      }
      P.total = F;
      return P;
    };
  }
  function f() {
    var C = {},
      B = { oblique: "italic", italic: "oblique" };
    this.add = function (D) {
      (C[D.style] || (C[D.style] = {}))[D.weight] = D;
    };
    this.get = function (H, I) {
      var G = C[H] || C[B[H]] || C.normal || C.italic || C.oblique;
      if (!G) return null;
      I = { normal: 400, bold: 700 }[I] || parseInt(I, 10);
      if (G[I]) return G[I];
      var E = { 1: 1, 99: 0 }[I % 100],
        K = [],
        F,
        D;
      if (E === undefined) E = I > 400;
      if (I == 500) I = 400;
      for (var J in G) {
        if (!k(G, J)) continue;
        J = parseInt(J, 10);
        if (!F || J < F) F = J;
        if (!D || J > D) D = J;
        K.push(J);
      }
      if (I < F) I = F;
      if (I > D) I = D;
      K.sort(function (M, L) {
        return (
          E
            ? M >= I && L >= I
              ? M < L
              : M > L
            : M <= I && L <= I
            ? M > L
            : M < L
        )
          ? -1
          : 1;
      });
      return G[K[0]];
    };
  }
  function r() {
    function D(F, G) {
      if (F.contains) return F.contains(G);
      return F.compareDocumentPosition(G) & 16;
    }
    function B(G) {
      var F = G.relatedTarget;
      if (!F || D(this, F)) return;
      C(this, G.type == "mouseover");
    }
    function E(F) {
      C(this, F.type == "mouseenter");
    }
    function C(F, G) {
      setTimeout(function () {
        var H = d.get(F).options;
        m.replace(F, G ? h(H, H.hover) : H, true);
      }, 10);
    }
    this.attach = function (F) {
      if (F.onmouseenter === undefined) {
        q(F, "mouseover", B);
        q(F, "mouseout", B);
      } else {
        q(F, "mouseenter", E);
        q(F, "mouseleave", E);
      }
    };
  }
  function u() {
    var C = [],
      D = {};
    function B(H) {
      var E = [],
        G;
      for (var F = 0; (G = H[F]); ++F) E[F] = C[D[G]];
      return E;
    }
    this.add = function (F, E) {
      D[F] = C.push(E) - 1;
    };
    this.repeat = function () {
      var E = arguments.length ? B(arguments) : C,
        F;
      for (var G = 0; (F = E[G++]); ) m.replace(F[0], F[1], true);
    };
  }
  function A() {
    var D = {},
      B = 0;
    function C(E) {
      return E.cufid || (E.cufid = ++B);
    }
    this.get = function (E) {
      var F = C(E);
      return D[F] || (D[F] = {});
    };
  }
  function a(B) {
    var D = {},
      C = {};
    this.extend = function (E) {
      for (var F in E) if (k(E, F)) D[F] = E[F];
      return this;
    };
    this.get = function (E) {
      return D[E] != undefined ? D[E] : B[E];
    };
    this.getSize = function (F, E) {
      return C[F] || (C[F] = new n.Size(this.get(F), E));
    };
    this.isUsable = function () {
      return !!B;
    };
  }
  function q(C, B, D) {
    if (C.addEventListener) C.addEventListener(B, D, false);
    else if (C.attachEvent)
      C.attachEvent("on" + B, function () {
        return D.call(C, window.event);
      });
  }
  function v(C, B) {
    var D = d.get(C);
    if (D.options) return C;
    if (B.hover && B.hoverables[C.nodeName.toLowerCase()]) b.attach(C);
    D.options = B;
    return C;
  }
  function j(B) {
    var C = {};
    return function (D) {
      if (!k(C, D)) C[D] = B.apply(null, arguments);
      return C[D];
    };
  }
  function c(F, E) {
    var B = n.quotedList(E.get("fontFamily").toLowerCase()),
      D;
    for (var C = 0; (D = B[C]); ++C)
      if (i[D]) return i[D].get(E.get("fontStyle"), E.get("fontWeight"));
    return null;
  }
  function g(B) {
    return document.getElementsByTagName(B);
  }
  function k(C, B) {
    return C.hasOwnProperty(B);
  }
  function h() {
    var C = {},
      B,
      F;
    for (var E = 0, D = arguments.length; (B = arguments[E]), E < D; ++E)
      for (F in B) if (k(B, F)) C[F] = B[F];
    return C;
  }
  function o(E, M, C, N, F, D) {
    var K = document.createDocumentFragment(),
      H;
    if (M === "") return K;
    var L = N.separate;
    var I = M.split(p[L]),
      B = L == "words";
    if (B && t) {
      if (/^\s/.test(M)) I.unshift("");
      if (/\s$/.test(M)) I.push("");
    }
    for (var J = 0, G = I.length; J < G; ++J) {
      H = z[N.engine](
        E,
        B ? n.textAlign(I[J], C, J, G) : I[J],
        C,
        N,
        F,
        D,
        J < G - 1
      );
      if (H) K.appendChild(H);
    }
    return K;
  }
  function l(D, M) {
    var C = D.nodeName.toLowerCase();
    if (M.ignore[C]) return;
    var E = !M.textless[C];
    var B = n.getStyle(v(D, M)).extend(M);
    var F = c(D, B),
      G,
      K,
      I,
      H,
      L,
      J;
    if (!F) return;
    for (G = D.firstChild; G; G = I) {
      K = G.nodeType;
      I = G.nextSibling;
      if (E && K == 3) {
        if (H) {
          H.appendData(G.data);
          D.removeChild(G);
        } else H = G;
        if (I) continue;
      }
      if (H) {
        D.replaceChild(o(F, n.whiteSpace(H.data, B, H, J), B, M, G, D), H);
        H = null;
      }
      if (K == 1) {
        if (G.firstChild)
          if (G.nodeName.toLowerCase() == "cufon")
            z[M.engine](F, null, B, M, G, D);
          else arguments.callee(G, M);
        J = G;
      }
    }
  }
  var t = " ".split(/\s+/).length == 0;
  var d = new A();
  var b = new r();
  var y = new u();
  var e = false;
  var z = {},
    i = {},
    w = {
      autoDetect: false,
      engine: null,
      forceHitArea: false,
      hover: false,
      hoverables: { a: true },
      ignore: {
        applet: 1,
        canvas: 1,
        col: 1,
        colgroup: 1,
        head: 1,
        iframe: 1,
        map: 1,
        optgroup: 1,
        option: 1,
        script: 1,
        select: 1,
        style: 1,
        textarea: 1,
        title: 1,
        pre: 1,
      },
      printable: true,
      selector:
        window.Sizzle ||
        (window.jQuery &&
          function (B) {
            return jQuery(B);
          }) ||
        (window.dojo && dojo.query) ||
        (window.Ext && Ext.query) ||
        (window.YAHOO &&
          YAHOO.util &&
          YAHOO.util.Selector &&
          YAHOO.util.Selector.query) ||
        (window.$$ &&
          function (B) {
            return $$(B);
          }) ||
        (window.$ &&
          function (B) {
            return $(B);
          }) ||
        (document.querySelectorAll &&
          function (B) {
            return document.querySelectorAll(B);
          }) ||
        g,
      separate: "words",
      textless: {
        dl: 1,
        html: 1,
        ol: 1,
        table: 1,
        tbody: 1,
        thead: 1,
        tfoot: 1,
        tr: 1,
        ul: 1,
      },
      textShadow: "none",
    };
  var p = {
    words: /\s/.test("\u00a0") ? /[^\S\u00a0]+/ : /\s+/,
    characters: "",
    none: /^/,
  };
  m.now = function () {
    x.ready();
    return m;
  };
  m.refresh = function () {
    y.repeat.apply(y, arguments);
    return m;
  };
  m.registerEngine = function (C, B) {
    if (!B) return m;
    z[C] = B;
    return m.set("engine", C);
  };
  m.registerFont = function (D) {
    if (!D) return m;
    var B = new s(D),
      C = B.family;
    if (!i[C]) i[C] = new f();
    i[C].add(B);
    return m.set("fontFamily", '"' + C + '"');
  };
  m.replace = function (D, C, B) {
    C = h(w, C);
    if (!C.engine) return m;
    if (!e) {
      n.addClass(x.root(), "cufon-active cufon-loading");
      n.ready(function () {
        n.addClass(n.removeClass(x.root(), "cufon-loading"), "cufon-ready");
      });
      e = true;
    }
    if (C.hover) C.forceHitArea = true;
    if (C.autoDetect) delete C.fontFamily;
    if (typeof C.textShadow == "string")
      C.textShadow = n.textShadow(C.textShadow);
    if (typeof C.color == "string" && /^-/.test(C.color))
      C.textGradient = n.gradient(C.color);
    else delete C.textGradient;
    if (!B) y.add(D, arguments);
    if (D.nodeType || typeof D == "string") D = [D];
    n.ready(function () {
      for (var F = 0, E = D.length; F < E; ++F) {
        var G = D[F];
        if (typeof G == "string") m.replace(C.selector(G), C, true);
        else l(G, C);
      }
    });
    return m;
  };
  m.set = function (B, C) {
    w[B] = C;
    return m;
  };
  return m;
})();
Cufon.registerEngine(
  "vml",
  (function () {
    var e = document.namespaces;
    if (!e) return;
    e.add("cvml", "urn:schemas-microsoft-com:vml");
    e = null;
    var b = document.createElement("cvml:shape");
    b.style.behavior = "url(#default#VML)";
    if (!b.coordsize) return;
    b = null;
    var h = (document.documentMode || 0) < 8;
    document.write(
      (
        '<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:' +
        (h ? "middle" : "text-bottom") +
        ";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>"
      ).replace(/;/g, "!important;")
    );
    function c(i, j) {
      return a(i, /(?:em|ex|%)$|^[a-z-]+$/i.test(j) ? "1em" : j);
    }
    function a(l, m) {
      if (m === "0") return 0;
      if (/px$/i.test(m)) return parseFloat(m);
      var k = l.style.left,
        j = l.runtimeStyle.left;
      l.runtimeStyle.left = l.currentStyle.left;
      l.style.left = m.replace("%", "em");
      var i = l.style.pixelLeft;
      l.style.left = k;
      l.runtimeStyle.left = j;
      return i;
    }
    function f(l, k, j, n) {
      var i = "computed" + n,
        m = k[i];
      if (isNaN(m)) {
        m = k.get(n);
        k[i] = m = m == "normal" ? 0 : ~~j.convertFrom(a(l, m));
      }
      return m;
    }
    var g = {};
    function d(p) {
      var q = p.id;
      if (!g[q]) {
        var n = p.stops,
          o = document.createElement("cvml:fill"),
          i = [];
        o.type = "gradient";
        o.angle = 180;
        o.focus = "0";
        o.method = "sigma";
        o.color = n[0][1];
        for (var m = 1, l = n.length - 1; m < l; ++m)
          i.push(n[m][0] * 100 + "% " + n[m][1]);
        o.colors = i.join(",");
        o.color2 = n[l][1];
        g[q] = o;
      }
      return g[q];
    }
    return function (ac, G, Y, C, K, ad, W) {
      var n = G === null;
      if (n) G = K.alt;
      var I = ac.viewBox;
      var p =
        Y.computedFontSize ||
        (Y.computedFontSize = new Cufon.CSS.Size(
          c(ad, Y.get("fontSize")) + "px",
          ac.baseSize
        ));
      var y, q;
      if (n) {
        y = K;
        q = K.firstChild;
      } else {
        y = document.createElement("cufon");
        y.className = "cufon cufon-vml";
        y.alt = G;
        q = document.createElement("cufoncanvas");
        y.appendChild(q);
        if (C.printable) {
          var Z = document.createElement("cufontext");
          Z.appendChild(document.createTextNode(G));
          y.appendChild(Z);
        }
        if (!W) y.appendChild(document.createElement("cvml:shape"));
      }
      var ai = y.style;
      var R = q.style;
      var l = p.convert(I.height),
        af = Math.ceil(l);
      var V = af / l;
      var P = V * Cufon.CSS.fontStretch(Y.get("fontStretch"));
      var U = I.minX,
        T = I.minY;
      R.height = af;
      R.top = Math.round(p.convert(T - ac.ascent));
      R.left = Math.round(p.convert(U));
      ai.height = p.convert(ac.height) + "px";
      var F = Y.get("color");
      var ag = Cufon.CSS.textTransform(G, Y).split("");
      var L = ac.spacing(
        ag,
        f(ad, Y, p, "letterSpacing"),
        f(ad, Y, p, "wordSpacing")
      );
      if (!L.length) return null;
      var k = L.total;
      var x = -U + k + (I.width - L[L.length - 1]);
      var ah = p.convert(x * P),
        X = Math.round(ah);
      var O = x + "," + I.height,
        m;
      var J = "r" + O + "ns";
      var u = C.textGradient && d(C.textGradient);
      var o = ac.glyphs,
        S = 0;
      var H = C.textShadow;
      var ab = -1,
        aa = 0,
        w;
      while ((w = ag[++ab])) {
        var D = o[ag[ab]] || ac.missingGlyph,
          v;
        if (!D) continue;
        if (n) {
          v = q.childNodes[aa];
          while (v.firstChild) v.removeChild(v.firstChild);
        } else {
          v = document.createElement("cvml:shape");
          q.appendChild(v);
        }
        v.stroked = "f";
        v.coordsize = O;
        v.coordorigin = m = U - S + "," + T;
        v.path = (D.d ? "m" + D.d + "xe" : "") + "m" + m + J;
        v.fillcolor = F;
        if (u) v.appendChild(u.cloneNode(false));
        var ae = v.style;
        ae.width = X;
        ae.height = af;
        if (H) {
          var s = H[0],
            r = H[1];
          var B = Cufon.CSS.color(s.color),
            z;
          var N = document.createElement("cvml:shadow");
          N.on = "t";
          N.color = B.color;
          N.offset = s.offX + "," + s.offY;
          if (r) {
            z = Cufon.CSS.color(r.color);
            N.type = "double";
            N.color2 = z.color;
            N.offset2 = r.offX + "," + r.offY;
          }
          N.opacity = B.opacity || (z && z.opacity) || 1;
          v.appendChild(N);
        }
        S += L[aa++];
      }
      var M = v.nextSibling,
        t,
        A;
      if (C.forceHitArea) {
        if (!M) {
          M = document.createElement("cvml:rect");
          M.stroked = "f";
          M.className = "cufon-vml-cover";
          t = document.createElement("cvml:fill");
          t.opacity = 0;
          M.appendChild(t);
          q.appendChild(M);
        }
        A = M.style;
        A.width = X;
        A.height = af;
      } else if (M) q.removeChild(M);
      ai.width = Math.max(Math.ceil(p.convert(k * P)), 0);
      if (h) {
        var Q = Y.computedYAdjust;
        if (Q === undefined) {
          var E = Y.get("lineHeight");
          if (E == "normal") E = "1em";
          else if (!isNaN(E)) E += "em";
          Y.computedYAdjust = Q = 0.5 * (a(ad, E) - parseFloat(ai.height));
        }
        if (Q) {
          ai.marginTop = Math.ceil(Q) + "px";
          ai.marginBottom = Q + "px";
        }
      }
      return y;
    };
  })()
);
Cufon.registerEngine(
  "canvas",
  (function () {
    var b = document.createElement("canvas");
    if (!b || !b.getContext || !b.getContext.apply) return;
    b = null;
    var a = Cufon.CSS.supports("display", "inline-block");
    var e =
      !a &&
      (document.compatMode == "BackCompat" ||
        /frameset|transitional/i.test(document.doctype.publicId));
    var f = document.createElement("style");
    f.type = "text/css";
    f.appendChild(
      document.createTextNode(
        (
          "cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;" +
          (e ? "" : "font-size:1px;line-height:1px;") +
          "}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}" +
          (a
            ? "cufon canvas{position:relative;}"
            : "cufon canvas{position:absolute;}") +
          "}@media print{cufon{padding:0;}cufon canvas{display:none;}}"
        ).replace(/;/g, "!important;")
      )
    );
    document.getElementsByTagName("head")[0].appendChild(f);
    function d(p, h) {
      var n = 0,
        m = 0;
      var g = [],
        o = /([mrvxe])([^a-z]*)/g,
        k;
      generate: for (var j = 0; (k = o.exec(p)); ++j) {
        var l = k[2].split(",");
        switch (k[1]) {
          case "v":
            g[j] = {
              m: "bezierCurveTo",
              a: [
                n + ~~l[0],
                m + ~~l[1],
                n + ~~l[2],
                m + ~~l[3],
                (n += ~~l[4]),
                (m += ~~l[5]),
              ],
            };
            break;
          case "r":
            g[j] = { m: "lineTo", a: [(n += ~~l[0]), (m += ~~l[1])] };
            break;
          case "m":
            g[j] = { m: "moveTo", a: [(n = ~~l[0]), (m = ~~l[1])] };
            break;
          case "x":
            g[j] = { m: "closePath" };
            break;
          case "e":
            break generate;
        }
        h[g[j].m].apply(h, g[j].a);
      }
      return g;
    }
    function c(m, k) {
      for (var j = 0, h = m.length; j < h; ++j) {
        var g = m[j];
        k[g.m].apply(k, g.a);
      }
    }
    return function (V, w, P, t, C, W) {
      var k = w === null;
      if (k) w = C.getAttribute("alt");
      var A = V.viewBox;
      var m = P.getSize("fontSize", V.baseSize);
      var B = 0,
        O = 0,
        N = 0,
        u = 0;
      var z = t.textShadow,
        L = [];
      if (z)
        for (var U = z.length; U--; ) {
          var F = z[U];
          var K = m.convertFrom(parseFloat(F.offX));
          var I = m.convertFrom(parseFloat(F.offY));
          L[U] = [K, I];
          if (I < B) B = I;
          if (K > O) O = K;
          if (I > N) N = I;
          if (K < u) u = K;
        }
      var Z = Cufon.CSS.textTransform(w, P).split("");
      var E = V.spacing(
        Z,
        ~~m.convertFrom(parseFloat(P.get("letterSpacing")) || 0),
        ~~m.convertFrom(parseFloat(P.get("wordSpacing")) || 0)
      );
      if (!E.length) return null;
      var h = E.total;
      O += A.width - E[E.length - 1];
      u += A.minX;
      var s, n;
      if (k) {
        s = C;
        n = C.firstChild;
      } else {
        s = document.createElement("cufon");
        s.className = "cufon cufon-canvas";
        s.setAttribute("alt", w);
        n = document.createElement("canvas");
        s.appendChild(n);
        if (t.printable) {
          var S = document.createElement("cufontext");
          S.appendChild(document.createTextNode(w));
          s.appendChild(S);
        }
      }
      var aa = s.style;
      var H = n.style;
      var j = m.convert(A.height);
      var Y = Math.ceil(j);
      var M = Y / j;
      var G = M * Cufon.CSS.fontStretch(P.get("fontStretch"));
      var J = h * G;
      var Q = Math.ceil(m.convert(J + O - u));
      var o = Math.ceil(m.convert(A.height - B + N));
      n.width = Q;
      n.height = o;
      H.width = Q + "px";
      H.height = o + "px";
      B += A.minY;
      H.top = Math.round(m.convert(B - V.ascent)) + "px";
      H.left = Math.round(m.convert(u)) + "px";
      var r = Math.max(Math.ceil(m.convert(J)), 0) + "px";
      if (a) {
        aa.width = r;
        aa.height = m.convert(V.height) + "px";
      } else {
        aa.paddingLeft = r;
        aa.paddingBottom = m.convert(V.height) - 1 + "px";
      }
      var X = n.getContext("2d"),
        D = j / A.height;
      X.scale(D, D * M);
      X.translate(-u, -B);
      X.save();
      function T() {
        var x = V.glyphs,
          ab,
          l = -1,
          g = -1,
          y;
        X.scale(G, 1);
        while ((y = Z[++l])) {
          var ab = x[Z[l]] || V.missingGlyph;
          if (!ab) continue;
          if (ab.d) {
            X.beginPath();
            if (ab.code) c(ab.code, X);
            else ab.code = d("m" + ab.d, X);
            X.fill();
          }
          X.translate(E[++g], 0);
        }
        X.restore();
      }
      if (z)
        for (var U = z.length; U--; ) {
          var F = z[U];
          X.save();
          X.fillStyle = F.color;
          X.translate.apply(X, L[U]);
          T();
        }
      var q = t.textGradient;
      if (q) {
        var v = q.stops,
          p = X.createLinearGradient(0, A.minY, 0, A.maxY);
        for (var U = 0, R = v.length; U < R; ++U) p.addColorStop.apply(p, v[U]);
        X.fillStyle = p;
      } else X.fillStyle = P.get("color");
      T();
      return s;
    };
  })()
);
jQuery.base64 = (function ($) {
  var _PADCHAR = "=",
    _ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    _VERSION = "1.0";
  function _getbyte64(s, i) {
    var idx = _ALPHA.indexOf(s.charAt(i));
    if (idx === -1) throw "Cannot decode base64";
    return idx;
  }
  function _decode(s) {
    var pads = 0,
      i,
      b10,
      imax = s.length,
      x = [];
    s = String(s);
    if (imax === 0) return s;
    if (imax % 4 !== 0) throw "Cannot decode base64";
    if (s.charAt(imax - 1) === _PADCHAR) {
      pads = 1;
      if (s.charAt(imax - 2) === _PADCHAR) pads = 2;
      imax -= 4;
    }
    for (i = 0; i < imax; i += 4) {
      b10 =
        (_getbyte64(s, i) << 18) |
        (_getbyte64(s, i + 1) << 12) |
        (_getbyte64(s, i + 2) << 6) |
        _getbyte64(s, i + 3);
      x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255, b10 & 255));
    }
    switch (pads) {
      case 1:
        b10 =
          (_getbyte64(s, i) << 18) |
          (_getbyte64(s, i + 1) << 12) |
          (_getbyte64(s, i + 2) << 6);
        x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 255));
        break;
      case 2:
        b10 = (_getbyte64(s, i) << 18) | (_getbyte64(s, i + 1) << 12);
        x.push(String.fromCharCode(b10 >> 16));
        break;
    }
    return x.join("");
  }
  function _getbyte(s, i) {
    var x = s.charCodeAt(i);
    if (x > 255) throw "INVALID_CHARACTER_ERR: DOM Exception 5";
    return x;
  }
  function _encode(s) {
    if (arguments.length !== 1)
      throw "SyntaxError: exactly one argument required";
    s = String(s);
    var i,
      b10,
      x = [],
      imax = s.length - (s.length % 3);
    if (s.length === 0) return s;
    for (i = 0; i < imax; i += 3) {
      b10 =
        (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8) | _getbyte(s, i + 2);
      x.push(_ALPHA.charAt(b10 >> 18));
      x.push(_ALPHA.charAt((b10 >> 12) & 63));
      x.push(_ALPHA.charAt((b10 >> 6) & 63));
      x.push(_ALPHA.charAt(b10 & 63));
    }
    switch (s.length - imax) {
      case 1:
        b10 = _getbyte(s, i) << 16;
        x.push(
          _ALPHA.charAt(b10 >> 18) +
            _ALPHA.charAt((b10 >> 12) & 63) +
            _PADCHAR +
            _PADCHAR
        );
        break;
      case 2:
        b10 = (_getbyte(s, i) << 16) | (_getbyte(s, i + 1) << 8);
        x.push(
          _ALPHA.charAt(b10 >> 18) +
            _ALPHA.charAt((b10 >> 12) & 63) +
            _ALPHA.charAt((b10 >> 6) & 63) +
            _PADCHAR
        );
        break;
    }
    return x.join("");
  }
  return { decode: _decode, encode: _encode, VERSION: _VERSION };
})(jQuery);
(function ($) {
  $.alerts = {
    verticalOffset: -75,
    horizontalOffset: 0,
    repositionOnResize: true,
    overlayOpacity: 0.01,
    overlayColor: "#FFF",
    draggable: true,
    okButton: " \u0110\u1ed3ng \u00fd ",
    cancelButton: " H\u1ee7y b\u1ecf ",
    dialogClass: null,
    alert: function (message, title, callback) {
      if (title == null) title = "Th\u00f4ng b\u00e1o";
      $.alerts._show(title, message, null, "alert", function (result) {
        if (callback) callback(result);
      });
    },
    confirm: function (message, title, callback) {
      if (title == null) title = "Confirm";
      $.alerts._show(title, message, null, "confirm", function (result) {
        if (callback) callback(result);
      });
    },
    prompt: function (message, value, title, callback) {
      if (title == null) title = "Prompt";
      $.alerts._show(title, message, value, "prompt", function (result) {
        if (callback) callback(result);
      });
    },
    _show: function (title, msg, value, type, callback) {
      $.alerts._hide();
      $.alerts._overlay("show");
      $("BODY").append(
        '<div id="popup_container">' +
          '<h1 id="popup_title"></h1>' +
          '<div id="popup_content">' +
          '<div id="popup_message"></div>' +
          "</div>" +
          "</div>"
      );
      if ($.alerts.dialogClass)
        $("#popup_container").addClass($.alerts.dialogClass);
      var pos =
        $.browser.msie && parseInt($.browser.version) <= 6
          ? "absolute"
          : "fixed";
      $("#popup_container").css({
        position: pos,
        zIndex: 99999,
        padding: 0,
        margin: 0,
      });
      $("#popup_title").text(title);
      $("#popup_content").addClass(type);
      $("#popup_message").text(msg);
      $("#popup_message").html(
        $("#popup_message").text().replace(/\n/g, "<br />")
      );
      $("#popup_container").css({
        minWidth: $("#popup_container").outerWidth(),
        maxWidth: $("#popup_container").outerWidth(),
      });
      $.alerts._reposition();
      $.alerts._maintainPosition(true);
      switch (type) {
        case "alert":
          $("#popup_message").after(
            '<div id="popup_panel"><input type="button" value="' +
              $.alerts.okButton +
              '" id="popup_ok" class="button btn btn-primary" /></div>'
          );
          $("#popup_ok").click(function () {
            $.alerts._hide();
            callback(true);
          });
          $("#popup_ok")
            .focus()
            .keypress(function (e) {
              if (e.keyCode == 13 || e.keyCode == 27)
                $("#popup_ok").trigger("click");
            });
          break;
        case "confirm":
          $("#popup_message").after(
            '<div id="popup_panel"><input type="button" value="' +
              $.alerts.okButton +
              '" id="popup_ok" class="button btn btn-primary" /> <input type="button" value="' +
              $.alerts.cancelButton +
              '" id="popup_cancel" class="button btn btn-warning" /></div>'
          );
          $("#popup_ok").click(function () {
            $.alerts._hide();
            if (callback) callback(true);
          });
          $("#popup_cancel").click(function () {
            $.alerts._hide();
            if (callback) callback(false);
          });
          $("#popup_ok").focus();
          $("#popup_ok, #popup_cancel").keypress(function (e) {
            if (e.keyCode == 13) $("#popup_ok").trigger("click");
            if (e.keyCode == 27) $("#popup_cancel").trigger("click");
          });
          break;
        case "prompt":
          $("#popup_message")
            .append(
              '<br /><input type="text" class="text" size="30" id="popup_prompt" />'
            )
            .after(
              '<div id="popup_panel"><input type="button" value="' +
                $.alerts.okButton +
                '" id="popup_ok" class="button" /> <input type="button" value="' +
                $.alerts.cancelButton +
                '" id="popup_cancel class="button" " /></div>'
            );
          $("#popup_prompt").width($("#popup_message").width());
          $("#popup_ok").click(function () {
            var val = $("#popup_prompt").val();
            $.alerts._hide();
            if (callback) callback(val);
          });
          $("#popup_cancel").click(function () {
            $.alerts._hide();
            if (callback) callback(null);
          });
          $("#popup_prompt, #popup_ok, #popup_cancel").keypress(function (e) {
            if (e.keyCode == 13) $("#popup_ok").trigger("click");
            if (e.keyCode == 27) $("#popup_cancel").trigger("click");
          });
          if (value) $("#popup_prompt").val(value);
          $("#popup_prompt").focus().select();
          break;
      }
      if ($.alerts.draggable)
        try {
          $("#popup_container").draggable({ handle: $("#popup_title") });
          $("#popup_title").css({ cursor: "move" });
        } catch (e) {}
    },
    _hide: function () {
      $("#popup_container").remove();
      $.alerts._overlay("hide");
      $.alerts._maintainPosition(false);
    },
    _overlay: function (status) {
      switch (status) {
        case "show":
          $.alerts._overlay("hide");
          $("BODY").append('<div id="popup_overlay"></div>');
          $("#popup_overlay").css({
            position: "absolute",
            zIndex: 99998,
            top: "0px",
            left: "0px",
            width: "100%",
            height: $(document).height(),
            background: $.alerts.overlayColor,
            opacity: $.alerts.overlayOpacity,
          });
          break;
        case "hide":
          $("#popup_overlay").remove();
          break;
      }
    },
    _reposition: function () {
      var top =
        $(window).height() / 2 -
        $("#popup_container").outerHeight() / 2 +
        $.alerts.verticalOffset;
      var left =
        $(window).width() / 2 -
        $("#popup_container").outerWidth() / 2 +
        $.alerts.horizontalOffset;
      if (top < 0) top = 0;
      if (left < 0) left = 0;
      if ($.browser.msie && parseInt($.browser.version) <= 6)
        top = top + $(window).scrollTop();
      $("#popup_container").css({ top: top + "px", left: left + "px" });
      $("#popup_overlay").height($(document).height());
    },
    _maintainPosition: function (status) {
      if ($.alerts.repositionOnResize)
        switch (status) {
          case true:
            $(window).bind("resize", $.alerts._reposition);
            break;
          case false:
            $(window).unbind("resize", $.alerts._reposition);
            break;
        }
    },
  };
  jAlert = function (message, title, callback) {
    $.alerts.alert(message, title, callback);
  };
  jConfirm = function (message, title, callback) {
    $.alerts.confirm(message, title, callback);
  };
  jPrompt = function (message, value, title, callback) {
    $.alerts.prompt(message, value, title, callback);
  };
})(jQuery);
(function ($) {
  $.jNotify = {
    defaults: {
      autoHide: true,
      clickOverlay: false,
      MinWidth: 200,
      TimeShown: 1500,
      ShowTimeEffect: 200,
      HideTimeEffect: 200,
      LongTrip: 15,
      HorizontalPosition: "right",
      VerticalPosition: "bottom",
      ShowOverlay: true,
      ColorOverlay: "#000",
      OpacityOverlay: 0.3,
      onClosed: null,
      onCompleted: null,
    },
    init: function (msg, options, id) {
      opts = $.extend({}, $.jNotify.defaults, options);
      if ($("#" + id).length == 0) $Div = $.jNotify._construct(id, msg);
      WidthDoc = parseInt($(window).width());
      HeightDoc = parseInt($(window).height());
      ScrollTop = parseInt($(window).scrollTop());
      ScrollLeft = parseInt($(window).scrollLeft());
      posTop = $.jNotify.vPos(opts.VerticalPosition);
      posLeft = $.jNotify.hPos(opts.HorizontalPosition);
      if (opts.ShowOverlay && $("#jOverlay").length == 0)
        $.jNotify._showOverlay($Div);
      $.jNotify._show(msg);
    },
    _construct: function (id, msg) {
      $Div = $('<div id="' + id + '"/>')
        .css({ opacity: 0, minWidth: opts.MinWidth })
        .html(msg)
        .appendTo("body");
      return $Div;
    },
    vPos: function (pos) {
      switch (pos) {
        case "top":
          var vPos = ScrollTop + parseInt($Div.outerHeight(true) / 2);
          break;
        case "center":
          var vPos =
            ScrollTop + HeightDoc / 2 - parseInt($Div.outerHeight(true)) / 2;
          break;
        case "bottom":
          var vPos = ScrollTop + HeightDoc - parseInt($Div.outerHeight(true));
          break;
      }
      return vPos;
    },
    hPos: function (pos) {
      switch (pos) {
        case "left":
          var hPos = ScrollLeft;
          break;
        case "center":
          var hPos =
            ScrollLeft + WidthDoc / 2 - parseInt($Div.outerWidth(true)) / 2;
          break;
        case "right":
          var hPos = ScrollLeft + WidthDoc - parseInt($Div.outerWidth(true));
          break;
      }
      return hPos;
    },
    _show: function (msg) {
      $Div.css({ top: posTop, left: posLeft });
      switch (opts.VerticalPosition) {
        case "top":
          $Div.animate(
            { top: posTop + opts.LongTrip, opacity: 1 },
            opts.ShowTimeEffect,
            function () {
              if (opts.onCompleted) opts.onCompleted();
            }
          );
          if (opts.autoHide) $.jNotify._close();
          else
            $Div.css("cursor", "pointer").click(function (e) {
              $.jNotify._close();
            });
          break;
        case "center":
          $Div.animate({ opacity: 1 }, opts.ShowTimeEffect, function () {
            if (opts.onCompleted) opts.onCompleted();
          });
          if (opts.autoHide) $.jNotify._close();
          else
            $Div.css("cursor", "pointer").click(function (e) {
              $.jNotify._close();
            });
          break;
        case "bottom":
          $Div.animate(
            { top: posTop - opts.LongTrip, opacity: 1 },
            opts.ShowTimeEffect,
            function () {
              if (opts.onCompleted) opts.onCompleted();
            }
          );
          if (opts.autoHide) $.jNotify._close();
          else
            $Div.css("cursor", "pointer").click(function (e) {
              $.jNotify._close();
            });
          break;
      }
    },
    _showOverlay: function (el) {
      var overlay = $('<div id="jOverlay" />')
        .css({
          backgroundColor: opts.ColorOverlay,
          opacity: opts.OpacityOverlay,
        })
        .appendTo("body")
        .show();
      if (opts.clickOverlay)
        overlay.click(function (e) {
          e.preventDefault();
          opts.TimeShown = 0;
          $.jNotify._close();
        });
    },
    _close: function () {
      switch (opts.VerticalPosition) {
        case "top":
          if (!opts.autoHide) opts.TimeShown = 0;
          $Div
            .stop(true, true)
            .delay(opts.TimeShown)
            .animate(
              { top: posTop - opts.LongTrip, opacity: 0 },
              opts.HideTimeEffect,
              function () {
                $(this).remove();
                if (opts.ShowOverlay && $("#jOverlay").length > 0)
                  $("#jOverlay").remove();
                if (opts.onClosed) opts.onClosed();
              }
            );
          break;
        case "center":
          if (!opts.autoHide) opts.TimeShown = 0;
          $Div
            .stop(true, true)
            .delay(opts.TimeShown)
            .animate({ opacity: 0 }, opts.HideTimeEffect, function () {
              $(this).remove();
              if (opts.ShowOverlay && $("#jOverlay").length > 0)
                $("#jOverlay").remove();
              if (opts.onClosed) opts.onClosed();
            });
          break;
        case "bottom":
          if (!opts.autoHide) opts.TimeShown = 0;
          $Div
            .stop(true, true)
            .delay(opts.TimeShown)
            .animate(
              { top: posTop + opts.LongTrip, opacity: 0 },
              opts.HideTimeEffect,
              function () {
                $(this).remove();
                if (opts.ShowOverlay && $("#jOverlay").length > 0)
                  $("#jOverlay").remove();
                if (opts.onClosed) opts.onClosed();
              }
            );
          break;
      }
    },
    _isReadable: function (id) {
      if ($("#" + id).length > 0) return false;
      else return true;
    },
  };
  jNotify = function (msg, options) {
    if ($.jNotify._isReadable("jNotify"))
      $.jNotify.init(msg, options, "jNotify");
  };
  jSuccess = function (msg, options) {
    if ($.jNotify._isReadable("jSuccess"))
      $.jNotify.init(msg, options, "jSuccess");
  };
  jError = function (msg, options) {
    if ($.jNotify._isReadable("jError")) $.jNotify.init(msg, options, "jError");
  };
})(jQuery);
(function ($) {
  $.tiny = $.tiny || {};
  $.tiny.carousel = {
    options: {
      start: 1,
      display: 1,
      axis: "x",
      controls: true,
      pager: false,
      interval: false,
      intervaltime: 3e3,
      rewind: false,
      animation: true,
      duration: 1e3,
      callback: null,
    },
  };
  $.fn.tinycarousel = function (options) {
    var options = $.extend({}, $.tiny.carousel.options, options);
    this.each(function () {
      $(this).data("tcl", new Carousel($(this), options));
    });
    return this;
  };
  $.fn.tinycarousel_start = function () {
    $(this).data("tcl").start();
  };
  $.fn.tinycarousel_stop = function () {
    $(this).data("tcl").stop();
  };
  $.fn.tinycarousel_move = function (iNum) {
    $(this)
      .data("tcl")
      .move(iNum - 1, true);
  };
  function Carousel(root, options) {
    var oSelf = this;
    var oViewport = $(".viewport:first", root);
    var oContent = $(".overview:first", root);
    var oPages = oContent.children();
    var oBtnNext = $(".next:first", root);
    var oBtnPrev = $(".prev:first", root);
    var oPager = $(".pager:first", root);
    var iPageSize,
      iSteps,
      iCurrent,
      oTimer,
      bPause,
      bForward = true,
      bAxis = options.axis == "x";
    function initialize() {
      iPageSize = bAxis
        ? $(oPages[0]).outerWidth(true)
        : $(oPages[0]).outerHeight(true);
      var iLeftover = Math.ceil(
        (bAxis ? oViewport.outerWidth() : oViewport.outerHeight()) /
          (iPageSize * options.display) -
          1
      );
      iSteps = Math.max(
        1,
        Math.ceil(oPages.length / options.display) - iLeftover
      );
      iCurrent = Math.min(iSteps, Math.max(1, options.start)) - 2;
      oContent.css(bAxis ? "width" : "height", iPageSize * oPages.length);
      oSelf.move(1);
      setEvents();
    }
    function setEvents() {
      if (options.controls && oBtnPrev.length > 0 && oBtnNext.length > 0) {
        oBtnPrev.click(function () {
          oSelf.move(-1);
          return false;
        });
        oBtnNext.click(function () {
          oSelf.move(1);
          return false;
        });
      }
      if (options.interval) root.hover(oSelf.stop, oSelf.start);
      if (options.pager && oPager.length > 0) $("a", oPager).click(setPager);
    }
    function setButtons() {
      if (options.controls) {
        oBtnPrev.toggleClass("disable", !(iCurrent > 0));
        oBtnNext.toggleClass("disable", !(iCurrent + 1 < iSteps));
      }
      if (options.pager) {
        var oNumbers = $(".pagenum", oPager);
        oNumbers.removeClass("active");
        $(oNumbers[iCurrent]).addClass("active");
      }
    }
    function setPager(oEvent) {
      if ($(this).hasClass("pagenum")) oSelf.move(parseInt(this.rel), true);
      return false;
    }
    function setTimer() {
      if (options.interval && !bPause) {
        clearTimeout(oTimer);
        oTimer = setTimeout(function () {
          iCurrent = iCurrent + 1 == iSteps ? -1 : iCurrent;
          bForward =
            iCurrent + 1 == iSteps ? false : iCurrent == 0 ? true : bForward;
          oSelf.move(bForward ? 1 : -1);
        }, options.intervaltime);
      }
    }
    this.stop = function () {
      clearTimeout(oTimer);
      bPause = true;
    };
    this.start = function () {
      bPause = false;
      setTimer();
    };
    this.move = function (iDirection, bPublic) {
      iCurrent = bPublic ? iDirection : (iCurrent += iDirection);
      if (iCurrent > -1 && iCurrent < iSteps) {
        var oPosition = {};
        oPosition[bAxis ? "left" : "top"] = -(
          iCurrent *
          iPageSize *
          options.display
        );
        oContent.animate(oPosition, {
          queue: false,
          duration: options.animation ? options.duration : 0,
          complete: function () {
            if (typeof options.callback == "function")
              options.callback.call(this, oPages[iCurrent], iCurrent);
          },
        });
        setButtons();
        setTimer();
      }
    };
    return initialize();
  }
})(jQuery);
(function (b) {
  var a = b.document;
  if (!("imdb" in b)) b.imdb = {};
  imdb.rating = { response: {}, elems: {} };
  imdb.rating.setResponse = function (c) {
    if (typeof c === "object") this.response = c.resource;
    else {
      this.response.rating = "N/A";
      this.response.ratingCount = 0;
    }
  };
  imdb.rating.run = function (c) {
    this.setResponse(c);
    if (
      this.response.rating != undefined &&
      this.response.ratingCount != undefined
    ) {
      make_rating(this.response.rating, this.response.ratingCount);
      var fid = $(".imdbRatingPlugin").attr("data-film");
      var f_s = $(".imdbRatingPlugin").attr("data-save");
      var f_i = $(".imdbRatingPlugin").attr("data-imdb");
      if (f_s == 1 && f_i != this.response.rating)
        save_imdb(fid, this.response.rating);
    } else make_rating(0, 0);
  };
})(window);
(function ($, window, document) {
  var ie6 = false;
  if ($.browser.msie && $.browser.version.substr(0, 1) < 7) ie6 = true;
  else
    document.documentElement.className =
      document.documentElement.className + " dk_fouc";
  var methods = {},
    lists = [],
    keyMap = { left: 37, up: 38, right: 39, down: 40, enter: 13 },
    dropdownTemplate = [
      '<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}">',
      '<a class="dk_toggle">',
      '<span class="dk_label">{{ label }}</span>',
      "</a>",
      '<div class="dk_options">',
      '<ul class="dk_options_inner">',
      "</ul>",
      "</div>",
      "</div>",
    ].join(""),
    optionTemplate =
      '<li class="{{ current }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',
    defaults = { startSpeed: 1e3, theme: false, change: false },
    keysBound = false;
  methods.init = function (settings) {
    settings = $.extend({}, defaults, settings);
    return this.each(function () {
      var $select = $(this),
        $original = $select.find(":selected").first(),
        $options = $select.find("option"),
        data = $select.data("dropkick") || {},
        id = $select.attr("id") || $select.attr("name"),
        width = settings.width || $select.outerWidth(),
        tabindex = $select.attr("tabindex") ? $select.attr("tabindex") : "",
        $dk = false,
        theme;
      if (data.id) return $select;
      else {
        data.settings = settings;
        data.tabindex = tabindex;
        data.id = id;
        data.$original = $original;
        data.$select = $select;
        data.value =
          _notBlank($select.val()) || _notBlank($original.attr("value"));
        data.label = $original.text();
        data.options = $options;
      }
      $dk = _build(dropdownTemplate, data);
      $dk.find(".dk_toggle").css({ width: width + "px" });
      $select.before($dk);
      $dk = $("#dk_container_" + id).fadeIn(settings.startSpeed);
      theme = settings.theme ? settings.theme : "default";
      $dk.addClass("dk_theme_" + theme);
      data.theme = theme;
      data.$dk = $dk;
      $select.data("dropkick", data);
      $dk.data("dropkick", data);
      lists[lists.length] = $select;
      $dk
        .bind("focus.dropkick", function (e) {
          $dk.addClass("dk_focus");
        })
        .bind("blur.dropkick", function (e) {
          $dk.removeClass("dk_open dk_focus");
        });
      setTimeout(function () {
        $select.hide();
      }, 0);
    });
  };
  methods.theme = function (newTheme) {
    var $select = $(this),
      list = $select.data("dropkick"),
      $dk = list.$dk,
      oldtheme = "dk_theme_" + list.theme;
    $dk.removeClass(oldtheme).addClass("dk_theme_" + newTheme);
    list.theme = newTheme;
  };
  methods.reset = function () {
    for (var i = 0, l = lists.length; i < l; i++) {
      var listData = lists[i].data("dropkick"),
        $dk = listData.$dk,
        $current = $dk.find("li").first();
      $dk.find(".dk_label").text(listData.label);
      $dk.find(".dk_options_inner").animate({ scrollTop: 0 }, 0);
      _setCurrent($current, $dk);
      _updateFields($current, $dk, true);
    }
  };
  $.fn.dropkick = function (method) {
    if (!ie6)
      if (methods[method])
        return methods[method].apply(
          this,
          Array.prototype.slice.call(arguments, 1)
        );
      else if (typeof method === "object" || !method)
        return methods.init.apply(this, arguments);
  };
  function _handleKeyBoardNav(e, $dk) {
    var code = e.keyCode,
      data = $dk.data("dropkick"),
      options = $dk.find(".dk_options"),
      open = $dk.hasClass("dk_open"),
      current = $dk.find(".dk_option_current"),
      first = options.find("li").first(),
      last = options.find("li").last(),
      next,
      prev;
    switch (code) {
      case keyMap.enter:
        if (open) {
          _updateFields(current.find("a"), $dk);
          _closeDropdown($dk);
        } else _openDropdown($dk);
        e.preventDefault();
        break;
      case keyMap.up:
        prev = current.prev("li");
        if (open)
          if (prev.length) _setCurrent(prev, $dk);
          else _setCurrent(last, $dk);
        else _openDropdown($dk);
        e.preventDefault();
        break;
      case keyMap.down:
        if (open) {
          next = current.next("li").first();
          if (next.length) _setCurrent(next, $dk);
          else _setCurrent(first, $dk);
        } else _openDropdown($dk);
        e.preventDefault();
        break;
      default:
        break;
    }
  }
  function _updateFields(option, $dk, reset) {
    var value, label, data;
    value = option.attr("data-dk-dropdown-value");
    label = option.text();
    data = $dk.data("dropkick");
    $select = data.$select;
    $select.val(value);
    $dk.find(".dk_label").text(label);
    reset = reset || false;
    if (data.settings.change && !reset)
      data.settings.change.call($select, value, label);
  }
  function _setCurrent($current, $dk) {
    $dk.find(".dk_option_current").removeClass("dk_option_current");
    $current.addClass("dk_option_current");
    _setScrollPos($dk, $current);
  }
  function _setScrollPos($dk, anchor) {
    var height =
      anchor.prevAll("li").outerHeight() * anchor.prevAll("li").length;
    $dk.find(".dk_options_inner").animate({ scrollTop: height + "px" }, 0);
  }
  function _closeDropdown($dk) {
    $dk.removeClass("dk_open");
  }
  function _openDropdown($dk) {
    var data = $dk.data("dropkick");
    $dk
      .find(".dk_options")
      .css({ top: $dk.find(".dk_toggle").outerHeight() - 1 });
    $dk.toggleClass("dk_open");
  }
  function _build(tpl, view) {
    var template = tpl,
      options = [],
      $dk;
    template = template.replace("{{ id }}", view.id);
    template = template.replace("{{ label }}", view.label);
    template = template.replace("{{ tabindex }}", view.tabindex);
    if (view.options && view.options.length)
      for (var i = 0, l = view.options.length; i < l; i++) {
        var $option = $(view.options[i]),
          current = "dk_option_current",
          oTemplate = optionTemplate;
        oTemplate = oTemplate.replace("{{ value }}", $option.val());
        oTemplate = oTemplate.replace(
          "{{ current }}",
          _notBlank($option.val()) === view.value ? current : ""
        );
        oTemplate = oTemplate.replace("{{ text }}", $option.text());
        options[options.length] = oTemplate;
      }
    $dk = $(template);
    $dk.find(".dk_options_inner").html(options.join(""));
    return $dk;
  }
  function _notBlank(text) {
    return $.trim(text).length > 0 ? text : false;
  }
  $(function () {
    $(".dk_toggle").live("click", function (e) {
      var $dk = $(this).parents(".dk_container").first();
      _openDropdown($dk);
      if ("ontouchstart" in window) {
        $dk.addClass("dk_touch");
        $dk.find(".dk_options_inner").addClass("scrollable vertical");
      }
      e.preventDefault();
      return false;
    });
    $(".dk_options a").live(
      $.browser.msie ? "mousedown" : "click",
      function (e) {
        var $option = $(this),
          $dk = $option.parents(".dk_container").first(),
          data = $dk.data("dropkick");
        _closeDropdown($dk);
        _updateFields($option, $dk);
        _setCurrent($option.parent(), $dk);
        e.preventDefault();
        return false;
      }
    );
    $(document).bind("keydown.dk_nav", function (e) {
      var $open = $(".dk_container.dk_open"),
        $focused = $(".dk_container.dk_focus"),
        $dk = null;
      if ($open.length) $dk = $open;
      else if ($focused.length && !$open.length) $dk = $focused;
      if ($dk) _handleKeyBoardNav(e, $dk);
    });
  });
})(jQuery, window, document);
(function ($) {
  $.fn.hoverIntent = function (f, g) {
    var cfg = { sensitivity: 7, interval: 100, timeout: 0 };
    cfg = $.extend(cfg, g ? { over: f, out: g } : f);
    var cX, cY, pX, pY;
    var track = function (ev) {
      cX = ev.pageX;
      cY = ev.pageY;
    };
    var compare = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      if (Math.abs(pX - cX) + Math.abs(pY - cY) < cfg.sensitivity) {
        $(ob).unbind("mousemove", track);
        ob.hoverIntent_s = 1;
        return cfg.over.apply(ob, [ev]);
      } else {
        pX = cX;
        pY = cY;
        ob.hoverIntent_t = setTimeout(function () {
          compare(ev, ob);
        }, cfg.interval);
      }
    };
    var delay = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      ob.hoverIntent_s = 0;
      return cfg.out.apply(ob, [ev]);
    };
    var handleHover = function (e) {
      var ev = jQuery.extend({}, e);
      var ob = this;
      if (ob.hoverIntent_t) ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      if (e.type == "mouseenter") {
        pX = ev.pageX;
        pY = ev.pageY;
        $(ob).bind("mousemove", track);
        if (ob.hoverIntent_s != 1)
          ob.hoverIntent_t = setTimeout(function () {
            compare(ev, ob);
          }, cfg.interval);
      } else {
        $(ob).unbind("mousemove", track);
        if (ob.hoverIntent_s == 1)
          ob.hoverIntent_t = setTimeout(function () {
            delay(ev, ob);
          }, cfg.timeout);
      }
    };
    return this.bind("mouseenter", handleHover).bind("mouseleave", handleHover);
  };
})(jQuery);
!(function (a) {
  var b = function (a, b) {
    this.init("tooltip", a, b);
  };
  (b.prototype = {
    constructor: b,
    init: function (b, c, d) {
      var e, f;
      (this.type = b),
        (this.$element = a(c)),
        (this.options = this.getOptions(d)),
        (this.enabled = !0),
        this.options.trigger == "click"
          ? this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            )
          : this.options.trigger != "manual" &&
            ((e = this.options.trigger == "hover" ? "mouseenter" : "focus"),
            (f = this.options.trigger == "hover" ? "mouseleave" : "blur"),
            this.$element.on(
              e + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
            this.$element.on(
              f + "." + this.type,
              this.options.selector,
              a.proxy(this.leave, this)
            )),
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
    },
    getOptions: function (b) {
      return (
        (b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data())),
        b.delay &&
          typeof b.delay == "number" &&
          (b.delay = { show: b.delay, hide: b.delay }),
        b
      );
    },
    enter: function (b) {
      var c = a(b.currentTarget)[this.type](this._options).data(this.type);
      if (!c.options.delay || !c.options.delay.show) return c.show();
      clearTimeout(this.timeout),
        (c.hoverState = "in"),
        (this.timeout = setTimeout(function () {
          c.hoverState == "in" && c.show();
        }, c.options.delay.show));
    },
    leave: function (b) {
      var c = a(b.currentTarget)[this.type](this._options).data(this.type);
      this.timeout && clearTimeout(this.timeout);
      if (!c.options.delay || !c.options.delay.hide) return c.hide();
      (c.hoverState = "out"),
        (this.timeout = setTimeout(function () {
          c.hoverState == "out" && c.hide();
        }, c.options.delay.hide));
    },
    show: function () {
      var a, b, c, d, e, f, g;
      if (this.hasContent() && this.enabled) {
        (a = this.tip()),
          this.setContent(),
          this.options.animation && a.addClass("fade"),
          (f =
            typeof this.options.placement == "function"
              ? this.options.placement.call(this, a[0], this.$element[0])
              : this.options.placement),
          (b = /in/.test(f)),
          a
            .remove()
            .css({ top: 0, left: 0, display: "block" })
            .appendTo(b ? this.$element : document.body),
          (c = this.getPosition(b)),
          (d = a[0].offsetWidth),
          (e = a[0].offsetHeight);
        switch (b ? f.split(" ")[1] : f) {
          case "bottom":
            g = { top: c.top + c.height, left: c.left + c.width / 2 - d / 2 };
            break;
          case "top":
            g = { top: c.top - e, left: c.left + c.width / 2 - d / 2 };
            break;
          case "left":
            g = { top: c.top + c.height / 2 - e / 2, left: c.left - d };
            break;
          case "right":
            g = { top: c.top + c.height / 2 - e / 2, left: c.left + c.width };
        }
        a.css(g).addClass(f).addClass("in");
      }
    },
    setContent: function () {
      var a = this.tip(),
        b = this.getTitle();
      a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
        a.removeClass("fade in top bottom left right");
    },
    hide: function () {
      function d() {
        var b = setTimeout(function () {
          c.off(a.support.transition.end).remove();
        }, 500);
        c.one(a.support.transition.end, function () {
          clearTimeout(b), c.remove();
        });
      }
      var b = this,
        c = this.tip();
      return (
        c.removeClass("in"),
        a.support.transition && this.$tip.hasClass("fade") ? d() : c.remove(),
        this
      );
    },
    fixTitle: function () {
      var a = this.$element;
      (a.attr("title") || typeof a.attr("data-original-title") != "string") &&
        a
          .attr("data-original-title", a.attr("title") || "")
          .removeAttr("title");
    },
    hasContent: function () {
      return this.getTitle();
    },
    getPosition: function (b) {
      return a.extend({}, b ? { top: 0, left: 0 } : this.$element.offset(), {
        width: this.$element[0].offsetWidth,
        height: this.$element[0].offsetHeight,
      });
    },
    getTitle: function () {
      var a,
        b = this.$element,
        c = this.options;
      return (
        (a =
          b.attr("data-original-title") ||
          (typeof c.title == "function" ? c.title.call(b[0]) : c.title)),
        a
      );
    },
    tip: function () {
      return (this.$tip = this.$tip || a(this.options.template));
    },
    validate: function () {
      this.$element[0].parentNode ||
        (this.hide(), (this.$element = null), (this.options = null));
    },
    enable: function () {
      this.enabled = !0;
    },
    disable: function () {
      this.enabled = !1;
    },
    toggleEnabled: function () {
      this.enabled = !this.enabled;
    },
    toggle: function () {
      this[this.tip().hasClass("in") ? "hide" : "show"]();
    },
    destroy: function () {
      this.hide()
        .$element.off("." + this.type)
        .removeData(this.type);
    },
  }),
    (a.fn.tooltip = function (c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("tooltip"),
          f = typeof c == "object" && c;
        e || d.data("tooltip", (e = new b(this, f))),
          typeof c == "string" && e[c]();
      });
    }),
    (a.fn.tooltip.Constructor = b),
    (a.fn.tooltip.defaults = {
      animation: !0,
      placement: "top",
      selector: !1,
      template:
        '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover",
      title: "",
      delay: 0,
      html: !0,
    });
})(window.jQuery);
(function ($) {
  var $document = $(document),
    $window = $(window),
    $body = $("body");
  var session = {
    isPopOpen: false,
    isFixedPopOpen: false,
    isClosing: false,
    popOpenImminent: false,
    activeHover: null,
    currentX: 0,
    currentY: 0,
    previousX: 0,
    previousY: 0,
    desyncTimeout: null,
    mouseTrackingActive: false,
  };
  $.fn.powerTip = function (opts) {
    if (!this.length) return this;
    var options = $.extend({}, $.fn.powerTip.defaults, opts),
      tipController = new TooltipController(options);
    initMouseTracking();
    this.each(function () {
      var $this = $(this),
        dataPowertip = $this.data("powertip"),
        dataElem = $this.data("powertipjq"),
        dataTarget = $this.data("powertiptarget"),
        title = $this.attr("title");
      if (options.typetip == 1) {
        var sdata = $this.parent().find(".stip");
        if (sdata.length != 0) {
          var stitle = sdata.data("title") ? sdata.data("title") : "";
          var stitle_en = sdata.data("title-en") ? sdata.data("title-en") : "";
          var stime = sdata.data("time") ? sdata.data("time") : "";
          var syear = sdata.data("year") ? sdata.data("year") : "";
          var scat = sdata.data("cat") ? sdata.data("cat") : "";
          var scountry = sdata.data("country") ? sdata.data("country") : "";
          var simdb = sdata.data("imdb") ? sdata.data("imdb") : "";
          var sactor = sdata.data("actor") ? sdata.data("actor") : "";
          var sdirector = sdata.data("director") ? sdata.data("director") : "";
          var supdate = sdata.data("update") ? sdata.data("update") : "";
          var sinfo = sdata.html() ? sdata.html() : "";
          var strailer = sdata.data("trailer")
            ? '<a rel="popup_trailer" onclick="load_trailer(' +
              sdata.data("film") +
              ')" class="poplight btn btn-primary" style="position: absolute;right: 5px;top: 5px;width: 61px;text-decoration: none;z-index: 302;">Xem trailer</a>'
            : "";
          var sb =
            scat +
            (scountry ? " | " + scountry : "") +
            (stime ? " | " + stime : "");
          title =
            '<div class="f-description"><div class="in"><h3>' +
            stitle +
            (syear ? " (" + syear + ")" : "") +
            (supdate ? " - " + supdate : "") +
            "</h3>" +
            strailer +
            '<div class="below-title"><div>' +
            stitle_en +
            "</div>" +
            (simdb
              ? ' <div>\u0110i\u1ec3m IMDB: <font color="#FFFF00">' +
                simdb +
                "</font></div>"
              : "") +
            "<div>\u0110\u1ea1o di\u1ec5n: " +
            sdirector +
            "</div><div>Di\u1ec5n vi\u1ec5n: " +
            sactor +
            "</div><div>" +
            sb +
            "</div></div><p>" +
            sinfo +
            "</p></div></div>";
        }
      }
      if (options.typetip == 2) {
        var sdata = $this;
        var sname = sdata.data("name") ? sdata.data("name") : "";
        var sactor = sdata.data("actor") ? sdata.data("actor") : "";
        var snameo = sdata.data("name-other") ? sdata.data("name-other") : "";
        var sbirth = sdata.data("birth") ? sdata.data("birth") : "";
        var send = sdata.data("end") ? sdata.data("end") : "";
        var splace = sdata.data("place") ? sdata.data("place") : "";
        var sheight = sdata.data("height") ? sdata.data("height") : "";
        var sinfo = sdata.data("info") ? sdata.data("info") : "";
        var simg = sdata.data("img");
        title =
          '<div class="f-description"><div class="top-thumb"><img src="' +
          simg +
          '" /></div><div class="top-info"><div class="in"><h3>' +
          sname +
          (snameo ? " (" + snameo + ")" : "") +
          '</h3><div class="below-title"><div>' +
          sactor +
          "</div>" +
          (sbirth ? " <div>Ng\u00e0y sinh: " + sbirth + "</div>" : "") +
          (send ? " <div>Ng\u00e0y m\u1ea5t: " + send + "</div>" : "") +
          (splace ? " <div>N\u01a1i sinh: " + splace + "</div>" : "") +
          (sheight ? " <div>Chi\u1ec1u cao: " + sheight + "</div>" : "") +
          "</div><p>" +
          sinfo +
          "</p></div></div></div>";
      }
      if (options.typetip == 3) {
        var sdata = $this.find(".tc_thumb_toolstips");
        if (sdata.length != 0)
          title = '<div class="f-description">' + sdata.html() + "</div>";
      }
      if (!dataPowertip && !dataTarget && !dataElem && title) {
        $this.data("powertip", title);
        $this.removeAttr("title");
      }
      $this.data(
        "displayController",
        new DisplayController($this, options, tipController)
      );
    });
    return this.on({
      mouseenter: function (event) {
        trackMouse(event);
        session.previousX = event.pageX;
        session.previousY = event.pageY;
        $(this).data("displayController").show();
      },
      mouseleave: function () {
        $(this).data("displayController").hide();
      },
      focus: function () {
        var element = $(this);
        if (!isMouseOver(element)) element.data("displayController").show(true);
      },
      blur: function () {
        $(this).data("displayController").hide(true);
      },
    });
  };
  $.fn.powerTip.defaults = {
    fadeInTime: 50,
    fadeOutTime: 100,
    followMouse: false,
    popupId: "powerTip",
    intentSensitivity: 7,
    intentPollInterval: 100,
    closeDelay: 100,
    placement: "se",
    smartPlacement: true,
    offset: 10,
    mouseOnToPopup: true,
    typetip: 0,
  };
  $.fn.powerTip.smartPlacementLists = {
    n: ["n", "ne", "nw", "s"],
    e: ["e", "ne", "se", "w", "nw", "sw", "n", "s", "e"],
    s: ["s", "se", "sw", "n"],
    w: ["w", "nw", "sw", "e", "ne", "se", "n", "s", "w"],
    nw: ["nw", "w", "sw", "n", "s", "se", "nw"],
    ne: ["ne", "e", "se", "n", "s", "sw", "ne"],
    sw: ["sw", "w", "nw", "s", "n", "ne", "sw"],
    se: ["se", "ne", "s", "n", "nw", "se"],
  };
  $.powerTip = {
    showTip: function (element) {
      $.powerTip.closeTip();
      element = element.first();
      if (!isMouseOver(element))
        element.data("displayController").show(true, true);
    },
    closeTip: function () {
      $document.triggerHandler("closePowerTip");
    },
  };
  function DisplayController(element, options, tipController) {
    var hoverTimer = null;
    function openTooltip(immediate, forceOpen) {
      cancelTimer();
      if (!element.data("hasActiveHover"))
        if (!immediate) {
          session.popOpenImminent = true;
          hoverTimer = setTimeout(function () {
            hoverTimer = null;
            checkForIntent(element);
          }, options.intentPollInterval);
        } else {
          if (forceOpen) element.data("forcedOpen", true);
          tipController.showTip(element);
        }
    }
    function closeTooltip(disableDelay) {
      cancelTimer();
      if (element.data("hasActiveHover")) {
        session.popOpenImminent = false;
        element.data("forcedOpen", false);
        if (!disableDelay)
          hoverTimer = setTimeout(function () {
            hoverTimer = null;
            tipController.hideTip(element);
          }, options.closeDelay);
        else tipController.hideTip(element);
      }
    }
    function checkForIntent() {
      var xDifference = Math.abs(session.previousX - session.currentX),
        yDifference = Math.abs(session.previousY - session.currentY),
        totalDifference = xDifference + yDifference;
      if (totalDifference < options.intentSensitivity)
        tipController.showTip(element);
      else {
        session.previousX = session.currentX;
        session.previousY = session.currentY;
        openTooltip();
      }
    }
    function cancelTimer() {
      hoverTimer = clearTimeout(hoverTimer);
    }
    return { show: openTooltip, hide: closeTooltip, cancel: cancelTimer };
  }
  function TooltipController(options) {
    var tipElement = $("#" + options.popupId);
    if (tipElement.length === 0) {
      tipElement = $("<div></div>", { id: options.popupId });
      if ($body.length === 0) $body = $("body");
      $body.append(tipElement);
    }
    if (options.followMouse) {
      if (!tipElement.data("hasMouseMove"))
        $document.on({
          mousemove: positionTipOnCursor,
          scroll: positionTipOnCursor,
        });
      tipElement.data("hasMouseMove", true);
    }
    if (options.followMouse || options.mouseOnToPopup)
      tipElement.on({
        mouseenter: function () {
          if (
            tipElement.data("followMouse") ||
            tipElement.data("mouseOnToPopup")
          )
            if (session.activeHover)
              session.activeHover.data("displayController").cancel();
        },
        mouseleave: function () {
          if (tipElement.data("mouseOnToPopup"))
            if (session.activeHover)
              session.activeHover.data("displayController").hide();
        },
      });
    function beginShowTip(element) {
      element.data("hasActiveHover", true);
      tipElement.queue(function (next) {
        showTip(element);
        next();
      });
    }
    function showTip(element) {
      if (!element.data("hasActiveHover")) return;
      if (session.isPopOpen) {
        if (!session.isClosing) hideTip(session.activeHover);
        tipElement.delay(100).queue(function (next) {
          showTip(element);
          next();
        });
        return;
      }
      element.trigger("powerTipPreRender");
      var tipText = element.data("powertip"),
        tipTarget = element.data("powertiptarget"),
        tipElem = element.data("powertipjq"),
        tipContent = tipTarget ? $("#" + tipTarget) : [];
      if (tipText) tipElement.html(tipText);
      else if (tipElem && tipElem.length > 0) {
        tipElement.empty();
        tipElem.clone(true, true).appendTo(tipElement);
      } else if (tipContent && tipContent.length > 0)
        tipElement.html($("#" + tipTarget).html());
      else return;
      element.trigger("powerTipRender");
      $document.on("closePowerTip", function () {
        element.data("displayController").hide(true);
      });
      session.activeHover = element;
      session.isPopOpen = true;
      tipElement.data("followMouse", options.followMouse);
      tipElement.data("mouseOnToPopup", options.mouseOnToPopup);
      if (!options.followMouse) {
        positionTipOnElement(element);
        session.isFixedPopOpen = true;
      } else positionTipOnCursor();
      tipElement.fadeIn(options.fadeInTime, function () {
        if (!session.desyncTimeout)
          session.desyncTimeout = setInterval(closeDesyncedTip, 500);
        element.trigger("powerTipOpen");
      });
    }
    function hideTip(element) {
      session.isClosing = true;
      element.data("hasActiveHover", false);
      element.data("forcedOpen", false);
      session.activeHover = null;
      session.isPopOpen = false;
      session.desyncTimeout = clearInterval(session.desyncTimeout);
      $document.off("closePowerTip");
      tipElement.fadeOut(options.fadeOutTime, function () {
        session.isClosing = false;
        session.isFixedPopOpen = false;
        tipElement.removeClass();
        setTipPosition(
          session.currentX + options.offset,
          session.currentY + options.offset
        );
        element.trigger("powerTipClose");
      });
    }
    function closeDesyncedTip() {
      if (session.isPopOpen && !session.isClosing) {
        var isDesynced = false;
        if (session.activeHover.data("hasActiveHover") === false)
          isDesynced = true;
        else if (
          !isMouseOver(session.activeHover) &&
          !session.activeHover.is(":focus") &&
          !session.activeHover.data("forcedOpen")
        )
          if (tipElement.data("mouseOnToPopup")) {
            if (!isMouseOver(tipElement)) isDesynced = true;
          } else isDesynced = true;
        if (isDesynced) hideTip(session.activeHover);
      }
    }
    function positionTipOnCursor() {
      if (
        (session.isPopOpen && !session.isFixedPopOpen) ||
        (session.popOpenImminent &&
          !session.isFixedPopOpen &&
          tipElement.data("hasMouseMove"))
      ) {
        var scrollTop = $window.scrollTop(),
          windowWidth = $window.width(),
          windowHeight = $window.height(),
          popWidth = tipElement.outerWidth(),
          popHeight = tipElement.outerHeight(),
          x = 0,
          y = 0;
        if (popWidth + session.currentX + options.offset < windowWidth)
          x = session.currentX + options.offset;
        else x = windowWidth - popWidth;
        if (
          popHeight + session.currentY + options.offset <
          scrollTop + windowHeight
        )
          y = session.currentY + options.offset;
        else y = scrollTop + windowHeight - popHeight;
        setTipPosition(x, y);
      }
    }
    function positionTipOnElement(element) {
      var tipWidth = tipElement.outerWidth(),
        tipHeight = tipElement.outerHeight(),
        priorityList,
        placementCoords,
        finalPlacement,
        collisions;
      if (options.smartPlacement) {
        priorityList = $.fn.powerTip.smartPlacementLists[options.placement];
        $.each(priorityList, function (idx, pos) {
          placementCoords = computePlacementCoords(
            element,
            pos,
            tipWidth,
            tipHeight
          );
          finalPlacement = pos;
          collisions = getViewportCollisions(
            placementCoords,
            tipWidth,
            tipHeight
          );
          if (collisions.length === 0) return false;
        });
      } else {
        placementCoords = computePlacementCoords(
          element,
          options.placement,
          tipWidth,
          tipHeight
        );
        finalPlacement = options.placement;
      }
      tipElement.addClass(finalPlacement);
      setTipPosition(placementCoords.x, placementCoords.y);
    }
    function computePlacementCoords(element, placement, popWidth, popHeight) {
      var objectOffset = element.offset(),
        objectWidth = element.outerWidth(),
        objectHeight = element.outerHeight(),
        x = 0,
        y = 0;
      switch (placement) {
        case "n":
          x = objectOffset.left + objectWidth / 2 - popWidth / 2;
          y = objectOffset.top - popHeight - options.offset;
          break;
        case "e":
          x = objectOffset.left + objectWidth + options.offset;
          y = objectOffset.top + objectHeight / 2 - popHeight / 2;
          break;
        case "s":
          x = objectOffset.left + objectWidth / 2 - popWidth / 2;
          y = objectOffset.top + objectHeight + options.offset;
          break;
        case "w":
          x = objectOffset.left - popWidth - options.offset;
          y = objectOffset.top + objectHeight / 2 - popHeight / 2;
          break;
        case "nw":
          x = objectOffset.left - popWidth + 20;
          y = objectOffset.top - popHeight - options.offset;
          break;
        case "ne":
          x = objectOffset.left + objectWidth - 20;
          y = objectOffset.top - popHeight - options.offset;
          break;
        case "sw":
          x = objectOffset.left - popWidth + 20;
          y = objectOffset.top + objectHeight + options.offset;
          break;
        case "se":
          x = objectOffset.left + objectWidth - 20;
          y = objectOffset.top + objectHeight + options.offset;
          break;
      }
      return { x: Math.round(x), y: Math.round(y) };
    }
    function setTipPosition(x, y) {
      tipElement.css("left", x + "px");
      tipElement.css("top", y + "px");
    }
    return { showTip: beginShowTip, hideTip: hideTip };
  }
  function initMouseTracking() {
    var lastScrollX = 0,
      lastScrollY = 0;
    if (!session.mouseTrackingActive) {
      session.mouseTrackingActive = true;
      $(function () {
        lastScrollX = $document.scrollLeft();
        lastScrollY = $document.scrollTop();
      });
      $document.on({
        mousemove: trackMouse,
        scroll: function () {
          var x = $document.scrollLeft(),
            y = $document.scrollTop();
          if (x !== lastScrollX) {
            session.currentX += x - lastScrollX;
            lastScrollX = x;
          }
          if (y !== lastScrollY) {
            session.currentY += y - lastScrollY;
            lastScrollY = y;
          }
        },
      });
    }
  }
  function trackMouse(event) {
    session.currentX = event.pageX;
    session.currentY = event.pageY;
  }
  function isMouseOver(element) {
    var elementPosition = element.offset();
    return (
      session.currentX >= elementPosition.left &&
      session.currentX <= elementPosition.left + element.outerWidth() &&
      session.currentY >= elementPosition.top &&
      session.currentY <= elementPosition.top + element.outerHeight()
    );
  }
  function getViewportCollisions(coords, elementWidth, elementHeight) {
    var scrollLeft = $window.scrollLeft(),
      scrollTop = $window.scrollTop(),
      windowWidth = $window.width(),
      windowHeight = $window.height(),
      collisions = [];
    if (coords.y < scrollTop) collisions.push("top");
    if (coords.y + elementHeight > scrollTop + windowHeight)
      collisions.push("bottom");
    if (coords.x < scrollLeft) collisions.push("left");
    if (coords.x + elementWidth > scrollLeft + windowWidth)
      collisions.push("right");
    return collisions;
  }
})(jQuery);
(function (a, b, c, d) {
  var e = a(b);
  (a.fn.lazyload = function (c) {
    function i() {
      var b = 0;
      f.each(function () {
        var c = a(this);
        if (h.skip_invisible && !c.is(":visible")) return;
        if (!a.abovethetop(this, h) && !a.leftofbegin(this, h))
          if (!a.belowthefold(this, h) && !a.rightoffold(this, h))
            c.trigger("appear"), (b = 0);
          else if (++b > h.failure_limit) return !1;
      });
    }
    var f = this,
      g,
      h = {
        threshold: 0,
        failure_limit: 0,
        event: "scroll",
        effect: "show",
        container: b,
        data_attribute: "original",
        skip_invisible: !0,
        appear: null,
        load: null,
      };
    return (
      c &&
        (d !== c.failurelimit &&
          ((c.failure_limit = c.failurelimit), delete c.failurelimit),
        d !== c.effectspeed &&
          ((c.effect_speed = c.effectspeed), delete c.effectspeed),
        a.extend(h, c)),
      (g = h.container === d || h.container === b ? e : a(h.container)),
      0 === h.event.indexOf("scroll") &&
        g.bind(h.event, function (a) {
          return i();
        }),
      this.each(function () {
        var b = this,
          c = a(b);
        (b.loaded = !1),
          c.one("appear", function () {
            if (!this.loaded) {
              if (h.appear) {
                var d = f.length;
                h.appear.call(b, d, h);
              }
              a("<img />")
                .bind("load", function () {
                  c
                    .hide()
                    .attr("src", c.data(h.data_attribute))
                    [h.effect](h.effect_speed),
                    (b.loaded = !0);
                  var d = a.grep(f, function (a) {
                    return !a.loaded;
                  });
                  f = a(d);
                  if (h.load) {
                    var e = f.length;
                    h.load.call(b, e, h);
                  }
                })
                .attr("src", c.data(h.data_attribute));
            }
          }),
          0 !== h.event.indexOf("scroll") &&
            c.bind(h.event, function (a) {
              b.loaded || c.trigger("appear");
            });
      }),
      e.bind("resize", function (a) {
        i();
      }),
      /iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion) &&
        e.bind("pageshow", function (b) {
          b.originalEvent.persisted &&
            f.each(function () {
              a(this).trigger("appear");
            });
        }),
      a(b).load(function () {
        i();
      }),
      this
    );
  }),
    (a.belowthefold = function (c, f) {
      var g;
      return (
        f.container === d || f.container === b
          ? (g = e.height() + e.scrollTop())
          : (g = a(f.container).offset().top + a(f.container).height()),
        g <= a(c).offset().top - f.threshold
      );
    }),
    (a.rightoffold = function (c, f) {
      var g;
      return (
        f.container === d || f.container === b
          ? (g = e.width() + e.scrollLeft())
          : (g = a(f.container).offset().left + a(f.container).width()),
        g <= a(c).offset().left - f.threshold
      );
    }),
    (a.abovethetop = function (c, f) {
      var g;
      return (
        f.container === d || f.container === b
          ? (g = e.scrollTop())
          : (g = a(f.container).offset().top),
        g >= a(c).offset().top + f.threshold + a(c).height()
      );
    }),
    (a.leftofbegin = function (c, f) {
      var g;
      return (
        f.container === d || f.container === b
          ? (g = e.scrollLeft())
          : (g = a(f.container).offset().left),
        g >= a(c).offset().left + f.threshold + a(c).width()
      );
    }),
    (a.inviewport = function (b, c) {
      return (
        !a.rightoffold(b, c) &&
        !a.leftofbegin(b, c) &&
        !a.belowthefold(b, c) &&
        !a.abovethetop(b, c)
      );
    }),
    a.extend(a.expr[":"], {
      "below-the-fold": function (b) {
        return a.belowthefold(b, { threshold: 0 });
      },
      "above-the-top": function (b) {
        return !a.belowthefold(b, { threshold: 0 });
      },
      "right-of-screen": function (b) {
        return a.rightoffold(b, { threshold: 0 });
      },
      "left-of-screen": function (b) {
        return !a.rightoffold(b, { threshold: 0 });
      },
      "in-viewport": function (b) {
        return a.inviewport(b, { threshold: 0 });
      },
      "above-the-fold": function (b) {
        return !a.belowthefold(b, { threshold: 0 });
      },
      "right-of-fold": function (b) {
        return a.rightoffold(b, { threshold: 0 });
      },
      "left-of-fold": function (b) {
        return !a.rightoffold(b, { threshold: 0 });
      },
    });
})(jQuery, window, document);
$(document).ready(function () {
  $("#searchInput").autocomplete("search.php", {
    width: 600,
    max: 30,
    highlight: !1,
    scroll: !1,
  });
  $("ul.main-nav li").hoverIntent(
    function () {
      $(this).children("ul").slideDown(200);
    },
    function () {
      $(this).children("ul").slideUp(200);
    }
  );
  $(".tc_meta").powerTip({ typetip: 3, placement: "e" });
  $(".kyt-wrap-tc .top_chart_col:nth-child(3)").addClass("last-child");
  $(".tc_other_number li").last().css("border", "none");
  $("#keyword").focusout(function () {
    var value = $(this).val();
    if (value == "")
      $(this).val("Nh\u1eadp t\u1eeb kh\u00f3a t\u00ecm ki\u1ebfm...");
  });
  $(".top-list-items").carouFredSel({
    prev: { key: "left", button: ".slide_prev" },
    next: { key: "right", button: ".slide_next" },
    items: 5,
    circular: true,
    infinite: true,
    auto: false,
    effect: "fade",
  });
  $(".toolstip").hover(
    function () {
      $(this).parent().find(".popover").stop().fadeIn("fast");
    },
    function () {
      $(this).parent().find(".popover").stop().fadeOut("fast");
    }
  );
  $("#top-movies li").hover(
    function () {
      $(this).stop();
      $(this)
        .find(".shadow")
        .css("display", "block")
        .stop()
        .animate({ bottom: "-30px" }, 100);
      $(this).find(".overlay").stop().fadeIn();
    },
    function () {
      $(this)
        .find(".shadow")
        .css("display", "none")
        .stop()
        .animate({ bottom: "40px" }, 100);
      $(this).find(".overlay").stop().fadeOut();
    }
  );
  $("[rel=tooltip]").tooltip({ placement: "top", trigger: "hover" });
  Cufon.replace(".cufont");
  $("img.lazy").lazyload({ effect: "fadeIn" });
  $(".movie-thumbnail").hover(
    function (e) {
      $(this).find("div.fade").css("display", "block");
    },
    function (e) {
      $(this).find("div.fade").css("display", "none");
    }
  );
  $(".movie-thumbnail").powerTip({ typetip: 1, offset: -50 });
});
function EnterKey(a) {
  13 == (window.event ? window.event.keyCode : a.which) && do_search();
}
function do_search(a) {
  if ((searchid = $(".tgt-autocomplete-activeItem a").attr("href")))
    return (window.location.href = searchid), !1;
  1 == a &&
    ((query = $("input[name='q']").val()),
    (window.location.href =
      "http://phimoke.com/tim-kiem/" + query + "/trang-1.html"));
  return !1;
}
function dienvien(page) {
  $.post("index.php", { dienvien: 1, page: page }, function (data) {
    html = data.split("{***}");
    $("#dien-vien-show").append(html[0]);
    if (html[1]) $("#show-actor-click").html(html[1]);
    else $("#show-actor-click").remove();
  });
}
function filmdienvien(key, page) {
  $.post(
    "index.php",
    { filmdienvien: 1, key: key, page: page },
    function (data) {
      $("#show-film-click").remove();
      $("#dien-vien-show-film").append(data);
    }
  );
  return false;
}
var show_part = 0;
var zoomp = false;
function zoom_player() {
  if (zoomp) {
    $("#l").css({ width: "960px" });
    $("#r").css({ top: "0", border: "none", "min-height": "100%" });
    $(".block-col1").css({ width: "auto" });
    if (show_part == 1) {
      //$('#player_wrapper').css({'height':'400px'});
      $(".slider_part .ulz").css({ width: "535px" });
    }
    zoomp = false;
  } else {
    $("#l").css({ width: "960px" });
    $(".block-col1").css({ width: "645px" });
    if (show_part == 1) {
      $("#r").css({
        top: "714px",
        "border-top": "1px solid #000000",
        "min-height": "50%",
      });
      //$('#player_wrapper').css({'height':'500px'});
      $(".slider_part .ulz").css({ width: "830px" });
    } else {
      $("#r").css({
        top: "604px",
        "border-top": "1px solid #000000",
        "min-height": "50%",
      });
    }
    zoomp = true;
  }
  $("html, body").animate(
    {
      scrollTop: $("#l").offset().top,
    },
    500
  );
}
function _light() {
  if ($(".r a._jwbt").text() == "T\u1eaft \u0111\u00e8n") {
    $("div.light_on").css("display", "block");
    $("a._light").html("B\u1eadt \u0111\u00e8n");
  } else {
    $("div.light_on").css("display", "none");
    $("a._light").html("T\u1eaft \u0111\u00e8n");
  }
}
