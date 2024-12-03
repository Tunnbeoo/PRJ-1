/*
 Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function () {
  function p(a) {
    this.editor = a;
    this.registered = {};
    this.instances = {};
    this.selected = [];
    this.widgetHoldingFocusedEditable = this.focused = null;
    this._ = { nextId: 0, upcasts: [], upcastCallbacks: [], filters: {} };
    F(this);
    G(this);
    this.on("checkWidgets", H);
    this.editor.on("contentDomInvalidated", this.checkWidgets, this);
    I(this);
    J(this);
    K(this);
    L(this);
    M(this);
  }
  function g(a, b, c, d, e) {
    var f = a.editor;
    CKEDITOR.tools.extend(
      this,
      d,
      {
        editor: f,
        id: b,
        inline: "span" == c.getParent().getName(),
        element: c,
        data: CKEDITOR.tools.extend(
          {},
          "function" == typeof d.defaults ? d.defaults() : d.defaults
        ),
        dataReady: !1,
        inited: !1,
        ready: !1,
        edit: g.prototype.edit,
        focusedEditable: null,
        definition: d,
        repository: a,
        draggable: !1 !== d.draggable,
        _: {
          downcastFn:
            d.downcast && "string" == typeof d.downcast
              ? d.downcasts[d.downcast]
              : d.downcast,
        },
      },
      !0
    );
    a.fire("instanceCreated", this);
    N(this, d);
    this.init && this.init();
    this.inited = !0;
    (a = this.element.data("cke-widget-data")) &&
      this.setData(JSON.parse(decodeURIComponent(a)));
    e && this.setData(e);
    this.data.classes || this.setData("classes", this.getClasses());
    this.dataReady = !0;
    r(this);
    this.fire("data", this.data);
    this.isInited() &&
      f.editable().contains(this.wrapper) &&
      ((this.ready = !0), this.fire("ready"));
  }
  function q(a, b, c) {
    CKEDITOR.dom.element.call(this, b.$);
    this.editor = a;
    this._ = {};
    b = this.filter = c.filter;
    CKEDITOR.dtd[this.getName()].p
      ? ((this.enterMode = b
          ? b.getAllowedEnterMode(a.enterMode)
          : a.enterMode),
        (this.shiftEnterMode = b
          ? b.getAllowedEnterMode(a.shiftEnterMode, !0)
          : a.shiftEnterMode))
      : (this.enterMode = this.shiftEnterMode = CKEDITOR.ENTER_BR);
  }
  function O(a, b) {
    a.addCommand(b.name, {
      exec: function (a, d) {
        function e() {
          a.widgets.finalizeCreation(k);
        }
        var f = a.widgets.focused;
        if (f && f.name == b.name) f.edit();
        else if (b.insert) b.insert();
        else if (b.template) {
          var f = "function" == typeof b.defaults ? b.defaults() : b.defaults,
            f = CKEDITOR.dom.element.createFromHtml(b.template.output(f)),
            h,
            l = a.widgets.wrapElement(f, b.name),
            k = new CKEDITOR.dom.documentFragment(l.getDocument());
          k.append(l);
          (h = a.widgets.initOn(f, b, d && d.startupData))
            ? ((f = h.once(
                "edit",
                function (b) {
                  if (b.data.dialog)
                    h.once("dialog", function (b) {
                      b = b.data;
                      var d, f;
                      d = b.once("ok", e, null, null, 20);
                      f = b.once("cancel", function (b) {
                        (b.data && !1 === b.data.hide) ||
                          a.widgets.destroy(h, !0);
                      });
                      b.once("hide", function () {
                        d.removeListener();
                        f.removeListener();
                      });
                    });
                  else e();
                },
                null,
                null,
                999
              )),
              h.edit(),
              f.removeListener())
            : e();
        }
      },
      allowedContent: b.allowedContent,
      requiredContent: b.requiredContent,
      contentForms: b.contentForms,
      contentTransformations: b.contentTransformations,
    });
  }
  function P(a, b) {
    function c(c, b, d) {
      var e = CKEDITOR.tools.getIndex(a._.upcasts, function (a) {
        return a[2] > d;
      });
      0 > e && (e = a._.upcasts.length);
      a._.upcasts.splice(e, 0, [c, b, d]);
    }
    var d = b.upcast,
      e = b.upcastPriority || 10;
    if (d)
      if ("string" == typeof d)
        for (d = d.split(","); d.length; ) c(b.upcasts[d.pop()], b.name, e);
      else c(d, b.name, e);
  }
  function t(a, b) {
    a.focused = null;
    if (b.isInited()) {
      var c = b.editor.checkDirty();
      a.fire("widgetBlurred", { widget: b });
      b.setFocused(!1);
      !c && b.editor.resetDirty();
    }
  }
  function H(a) {
    a = a.data;
    if ("wysiwyg" == this.editor.mode) {
      var b = this.editor.editable(),
        c = this.instances,
        d,
        e,
        f,
        h;
      if (b) {
        for (d in c)
          c[d].isReady() && !b.contains(c[d].wrapper) && this.destroy(c[d], !0);
        if (a && a.initOnlyNew) c = this.initOnAll();
        else {
          var l = b.find(".cke_widget_wrapper"),
            c = [];
          d = 0;
          for (e = l.count(); d < e; d++) {
            f = l.getItem(d);
            if ((h = !this.getByElement(f, !0))) {
              a: {
                h = Q;
                for (var k = f; (k = k.getParent()); )
                  if (h(k)) {
                    h = !0;
                    break a;
                  }
                h = !1;
              }
              h = !h;
            }
            h &&
              b.contains(f) &&
              (f.addClass("cke_widget_new"),
              c.push(this.initOn(f.getFirst(g.isDomWidgetElement))));
          }
        }
        a && a.focusInited && 1 == c.length && c[0].focus();
      }
    }
  }
  function u(a, b, c) {
    if (!c.allowedContent) return null;
    var d = this._.filters[a];
    d || (this._.filters[a] = d = {});
    (a = d[b]) || (d[b] = a = new CKEDITOR.filter(c.allowedContent));
    return a;
  }
  function R(a) {
    var b = [],
      c = a._.upcasts,
      d = a._.upcastCallbacks;
    return {
      toBeWrapped: b,
      iterator: function (a) {
        var f, h, l, k, m;
        if ("data-cke-widget-wrapper" in a.attributes)
          return (a = a.getFirst(g.isParserWidgetElement)) && b.push([a]), !1;
        if ("data-widget" in a.attributes) return b.push([a]), !1;
        if ((m = c.length)) {
          if (a.attributes["data-cke-widget-upcasted"]) return !1;
          k = 0;
          for (f = d.length; k < f; ++k) if (!1 === d[k](a)) return;
          for (k = 0; k < m; ++k)
            if (((f = c[k]), (l = {}), (h = f[0](a, l))))
              return (
                h instanceof CKEDITOR.htmlParser.element && (a = h),
                (a.attributes["data-cke-widget-data"] = encodeURIComponent(
                  JSON.stringify(l)
                )),
                (a.attributes["data-cke-widget-upcasted"] = 1),
                b.push([a, f[1]]),
                !1
              );
        }
      },
    };
  }
  function v(a) {
    return {
      tabindex: -1,
      contenteditable: "false",
      "data-cke-widget-wrapper": 1,
      "data-cke-filter": "off",
      class:
        "cke_widget_wrapper cke_widget_new cke_widget_" +
        (a ? "inline" : "block"),
    };
  }
  function w(a, b, c) {
    if (a.type == CKEDITOR.NODE_ELEMENT) {
      var d = CKEDITOR.dtd[a.name];
      if (d && !d[c.name]) {
        var d = a.split(b),
          e = a.parent;
        b = d.getIndex();
        a.children.length || (--b, a.remove());
        d.children.length || d.remove();
        return w(e, b, c);
      }
    }
    a.add(c, b);
  }
  function x(a, b) {
    return "boolean" == typeof a.inline ? a.inline : !!CKEDITOR.dtd.$inline[b];
  }
  function Q(a) {
    return a.hasAttribute("data-cke-temp");
  }
  function n(a, b, c, d) {
    var e = a.editor;
    e.fire("lockSnapshot");
    c
      ? ((d = c.data("cke-widget-editable")),
        (d = b.editables[d]),
        (a.widgetHoldingFocusedEditable = b),
        (b.focusedEditable = d),
        c.addClass("cke_widget_editable_focused"),
        d.filter && e.setActiveFilter(d.filter),
        e.setActiveEnterMode(d.enterMode, d.shiftEnterMode))
      : (d || b.focusedEditable.removeClass("cke_widget_editable_focused"),
        (b.focusedEditable = null),
        (a.widgetHoldingFocusedEditable = null),
        e.setActiveFilter(null),
        e.setActiveEnterMode(null, null));
    e.fire("unlockSnapshot");
  }
  function S(a) {
    a.contextMenu &&
      a.contextMenu.addListener(function (b) {
        if ((b = a.widgets.getByElement(b, !0)))
          return b.fire("contextMenu", {});
      });
  }
  function T(a, b) {
    return CKEDITOR.tools.trim(b);
  }
  function L(a) {
    var b = a.editor,
      c = CKEDITOR.plugins.lineutils;
    b.on("dragstart", function (c) {
      var e = c.data.target;
      g.isDomDragHandler(e) &&
        ((e = a.getByElement(e)),
        c.data.dataTransfer.setData("cke/widget-id", e.id),
        b.focus(),
        e.focus());
    });
    b.on("drop", function (c) {
      var e = c.data.dataTransfer,
        f = e.getData("cke/widget-id"),
        h = e.getTransferType(b),
        e = b.createRange();
      "" !== f && h === CKEDITOR.DATA_TRANSFER_CROSS_EDITORS
        ? c.cancel()
        : "" !== f &&
          h == CKEDITOR.DATA_TRANSFER_INTERNAL &&
          (f = a.instances[f]) &&
          (e.setStartBefore(f.wrapper),
          e.setEndAfter(f.wrapper),
          (c.data.dragRange = e),
          delete CKEDITOR.plugins.clipboard.dragStartContainerChildCount,
          delete CKEDITOR.plugins.clipboard.dragEndContainerChildCount,
          c.data.dataTransfer.setData(
            "text/html",
            b.editable().getHtmlFromRange(e).getHtml()
          ),
          b.widgets.destroy(f, !0));
    });
    b.on("contentDom", function () {
      var d = b.editable();
      CKEDITOR.tools.extend(
        a,
        {
          finder: new c.finder(b, {
            lookups: {
              default: function (c) {
                if (
                  !c.is(CKEDITOR.dtd.$listItem) &&
                  c.is(CKEDITOR.dtd.$block) &&
                  !g.isDomNestedEditable(c) &&
                  !a._.draggedWidget.wrapper.contains(c)
                ) {
                  var b = g.getNestedEditable(d, c);
                  if (b) {
                    c = a._.draggedWidget;
                    if (a.getByElement(b) == c) return;
                    b = CKEDITOR.filter.instances[b.data("cke-filter")];
                    c = c.requiredContent;
                    if (b && c && !b.check(c)) return;
                  }
                  return CKEDITOR.LINEUTILS_BEFORE | CKEDITOR.LINEUTILS_AFTER;
                }
              },
            },
          }),
          locator: new c.locator(b),
          liner: new c.liner(b, {
            lineStyle: {
              cursor: "move !important",
              "border-top-color": "#666",
            },
            tipLeftStyle: { "border-left-color": "#666" },
            tipRightStyle: { "border-right-color": "#666" },
          }),
        },
        !0
      );
    });
  }
  function J(a) {
    var b = a.editor;
    b.on("contentDom", function () {
      var c = b.editable(),
        d = c.isInline() ? c : b.document,
        e,
        f;
      c.attachListener(d, "mousedown", function (c) {
        var d = c.data.getTarget();
        if (!d.type) return !1;
        e = a.getByElement(d);
        f = 0;
        e &&
          (e.inline &&
          d.type == CKEDITOR.NODE_ELEMENT &&
          d.hasAttribute("data-cke-widget-drag-handler")
            ? ((f = 1), a.focused != e && b.getSelection().removeAllRanges())
            : g.getNestedEditable(e.wrapper, d)
            ? (e = null)
            : (c.data.preventDefault(), CKEDITOR.env.ie || e.focus()));
      });
      c.attachListener(d, "mouseup", function () {
        f && e && e.wrapper && ((f = 0), e.focus());
      });
      CKEDITOR.env.ie &&
        c.attachListener(d, "mouseup", function () {
          setTimeout(function () {
            e && e.wrapper && c.contains(e.wrapper) && (e.focus(), (e = null));
          });
        });
    });
    b.on(
      "doubleclick",
      function (c) {
        var b = a.getByElement(c.data.element);
        if (b && !g.getNestedEditable(b.wrapper, c.data.element))
          return b.fire("doubleclick", { element: c.data.element });
      },
      null,
      null,
      1
    );
  }
  function K(a) {
    a.editor.on(
      "key",
      function (b) {
        var c = a.focused,
          d = a.widgetHoldingFocusedEditable,
          e;
        c
          ? (e = c.fire("key", { keyCode: b.data.keyCode }))
          : d &&
            ((c = b.data.keyCode),
            (b = d.focusedEditable),
            c == CKEDITOR.CTRL + 65
              ? ((c = b.getBogus()),
                (d = d.editor.createRange()),
                d.selectNodeContents(b),
                c && d.setEndAt(c, CKEDITOR.POSITION_BEFORE_START),
                d.select(),
                (e = !1))
              : 8 == c || 46 == c
              ? ((e = d.editor.getSelection().getRanges()),
                (d = e[0]),
                (e = !(
                  1 == e.length &&
                  d.collapsed &&
                  d.checkBoundaryOfElement(
                    b,
                    CKEDITOR[8 == c ? "START" : "END"]
                  )
                )))
              : (e = void 0));
        return e;
      },
      null,
      null,
      1
    );
  }
  function M(a) {
    function b(c) {
      a.focused && y(a.focused, "cut" == c.name);
    }
    var c = a.editor;
    c.on("contentDom", function () {
      var a = c.editable();
      a.attachListener(a, "copy", b);
      a.attachListener(a, "cut", b);
    });
  }
  function I(a) {
    var b = a.editor;
    b.on("selectionCheck", function () {
      a.fire("checkSelection");
    });
    a.on("checkSelection", a.checkSelection, a);
    b.on("selectionChange", function (c) {
      var d =
          (c = g.getNestedEditable(
            b.editable(),
            c.data.selection.getStartElement()
          )) && a.getByElement(c),
        e = a.widgetHoldingFocusedEditable;
      e
        ? (e === d && e.focusedEditable.equals(c)) ||
          (n(a, e, null), d && c && n(a, d, c))
        : d && c && n(a, d, c);
    });
    b.on("dataReady", function () {
      z(a).commit();
    });
    b.on("blur", function () {
      var c;
      (c = a.focused) && t(a, c);
      (c = a.widgetHoldingFocusedEditable) && n(a, c, null);
    });
  }
  function G(a) {
    var b = a.editor,
      c = {};
    b.on(
      "toDataFormat",
      function (b) {
        var e = CKEDITOR.tools.getNextNumber(),
          f = [];
        b.data.downcastingSessionId = e;
        c[e] = f;
        b.data.dataValue.forEach(
          function (c) {
            var b = c.attributes,
              d;
            if ("data-cke-widget-id" in b) {
              if ((b = a.instances[b["data-cke-widget-id"]]))
                (d = c.getFirst(g.isParserWidgetElement)),
                  f.push({ wrapper: c, element: d, widget: b, editables: {} }),
                  "1" != d.attributes["data-cke-widget-keep-attr"] &&
                    delete d.attributes["data-widget"];
            } else if ("data-cke-widget-editable" in b)
              return (
                (f[f.length - 1].editables[b["data-cke-widget-editable"]] = c),
                !1
              );
          },
          CKEDITOR.NODE_ELEMENT,
          !0
        );
      },
      null,
      null,
      8
    );
    b.on(
      "toDataFormat",
      function (a) {
        if (a.data.downcastingSessionId) {
          a = c[a.data.downcastingSessionId];
          for (var b, f, h, l, g, m; (b = a.shift()); ) {
            f = b.widget;
            h = b.element;
            l = f._.downcastFn && f._.downcastFn.call(f, h);
            for (m in b.editables)
              (g = b.editables[m]),
                delete g.attributes.contenteditable,
                g.setHtml(f.editables[m].getData());
            l || (l = h);
            b.wrapper.replaceWith(l);
          }
        }
      },
      null,
      null,
      13
    );
    b.on("contentDomUnload", function () {
      a.destroyAll(!0);
    });
  }
  function F(a) {
    var b = a.editor,
      c,
      d;
    b.on(
      "toHtml",
      function (b) {
        var d = R(a),
          h;
        for (
          b.data.dataValue.forEach(d.iterator, CKEDITOR.NODE_ELEMENT, !0);
          (h = d.toBeWrapped.pop());

        ) {
          var l = h[0],
            k = l.parent;
          k.type == CKEDITOR.NODE_ELEMENT &&
            k.attributes["data-cke-widget-wrapper"] &&
            k.replaceWith(l);
          a.wrapElement(h[0], h[1]);
        }
        c = b.data.protectedWhitespaces
          ? 3 == b.data.dataValue.children.length &&
            g.isParserWidgetWrapper(b.data.dataValue.children[1])
          : 1 == b.data.dataValue.children.length &&
            g.isParserWidgetWrapper(b.data.dataValue.children[0]);
      },
      null,
      null,
      8
    );
    b.on("dataReady", function () {
      if (d)
        for (
          var c = b.editable().find(".cke_widget_wrapper"),
            f,
            h,
            l = 0,
            k = c.count();
          l < k;
          ++l
        )
          (f = c.getItem(l)),
            (h = f.getFirst(g.isDomWidgetElement)),
            h.type == CKEDITOR.NODE_ELEMENT && h.data("widget")
              ? (h.replace(f), a.wrapElement(h))
              : f.remove();
      d = 0;
      a.destroyAll(!0);
      a.initOnAll();
    });
    b.on(
      "loadSnapshot",
      function (c) {
        /data-cke-widget/.test(c.data) && (d = 1);
        a.destroyAll(!0);
      },
      null,
      null,
      9
    );
    b.on("paste", function (a) {
      a = a.data;
      a.dataValue = a.dataValue.replace(U, T);
      a.range &&
        (a = g.getNestedEditable(b.editable(), a.range.startContainer)) &&
        (a = CKEDITOR.filter.instances[a.data("cke-filter")]) &&
        b.setActiveFilter(a);
    });
    b.on("afterInsertHtml", function (d) {
      d.data.intoRange
        ? a.checkWidgets({ initOnlyNew: !0 })
        : (b.fire("lockSnapshot"),
          a.checkWidgets({ initOnlyNew: !0, focusInited: c }),
          b.fire("unlockSnapshot"));
    });
  }
  function z(a) {
    var b = a.selected,
      c = [],
      d = b.slice(0),
      e = null;
    return {
      select: function (a) {
        0 > CKEDITOR.tools.indexOf(b, a) && c.push(a);
        a = CKEDITOR.tools.indexOf(d, a);
        0 <= a && d.splice(a, 1);
        return this;
      },
      focus: function (a) {
        e = a;
        return this;
      },
      commit: function () {
        var f = a.focused !== e,
          h,
          g;
        a.editor.fire("lockSnapshot");
        for (f && (h = a.focused) && t(a, h); (h = d.pop()); )
          b.splice(CKEDITOR.tools.indexOf(b, h), 1),
            h.isInited() &&
              ((g = h.editor.checkDirty()),
              h.setSelected(!1),
              !g && h.editor.resetDirty());
        f &&
          e &&
          ((g = a.editor.checkDirty()),
          (a.focused = e),
          a.fire("widgetFocused", { widget: e }),
          e.setFocused(!0),
          !g && a.editor.resetDirty());
        for (; (h = c.pop()); ) b.push(h), h.setSelected(!0);
        a.editor.fire("unlockSnapshot");
      },
    };
  }
  function A(a, b, c) {
    var d = 0;
    b = B(b);
    var e = a.data.classes || {},
      f;
    if (b) {
      for (e = CKEDITOR.tools.clone(e); (f = b.pop()); )
        c ? e[f] || (d = e[f] = 1) : e[f] && (delete e[f], (d = 1));
      d && a.setData("classes", e);
    }
  }
  function C(a) {
    a.cancel();
  }
  function y(a, b) {
    var c = a.editor,
      d = c.document;
    if (!d.getById("cke_copybin")) {
      var e = c.blockless || CKEDITOR.env.ie ? "span" : "div",
        f = d.createElement(e),
        h = d.createElement(e),
        e = CKEDITOR.env.ie && 9 > CKEDITOR.env.version;
      h.setAttributes({ id: "cke_copybin", "data-cke-temp": "1" });
      f.setStyles({
        position: "absolute",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      });
      f.setStyle(
        "ltr" == c.config.contentsLangDirection ? "left" : "right",
        "-5000px"
      );
      var g = c.createRange();
      g.setStartBefore(a.wrapper);
      g.setEndAfter(a.wrapper);
      f.setHtml(
        '\x3cspan data-cke-copybin-start\x3d"1"\x3e​\x3c/span\x3e' +
          c.editable().getHtmlFromRange(g).getHtml() +
          '\x3cspan data-cke-copybin-end\x3d"1"\x3e​\x3c/span\x3e'
      );
      c.fire("saveSnapshot");
      c.fire("lockSnapshot");
      h.append(f);
      c.editable().append(h);
      var k = c.on("selectionChange", C, null, null, 0),
        m = a.repository.on("checkSelection", C, null, null, 0);
      if (e)
        var n = d.getDocumentElement().$,
          p = n.scrollTop;
      g = c.createRange();
      g.selectNodeContents(f);
      g.select();
      e && (n.scrollTop = p);
      setTimeout(function () {
        b || a.focus();
        h.remove();
        k.removeListener();
        m.removeListener();
        c.fire("unlockSnapshot");
        b && (a.repository.del(a), c.fire("saveSnapshot"));
      }, 100);
    }
  }
  function B(a) {
    return (a = (a = a.getDefinition().attributes) && a["class"])
      ? a.split(/\s+/)
      : null;
  }
  function D() {
    var a = CKEDITOR.document.getActive(),
      b = this.editor,
      c = b.editable();
    (c.isInline() ? c : b.document.getWindow().getFrame()).equals(a) &&
      b.focusManager.focus(c);
  }
  function E() {
    CKEDITOR.env.gecko && this.editor.unlockSelection();
    CKEDITOR.env.webkit ||
      (this.editor.forceNextSelectionCheck(), this.editor.selectionChange(1));
  }
  function V(a) {
    var b = null;
    a.on("data", function () {
      var a = this.data.classes,
        d;
      if (b != a) {
        for (d in b) (a && a[d]) || this.removeClass(d);
        for (d in a) this.addClass(d);
        b = a;
      }
    });
  }
  function W(a) {
    a.on(
      "data",
      function () {
        if (a.wrapper) {
          var b = this.getLabel
            ? this.getLabel()
            : this.editor.lang.widget.label.replace(
                /%1/,
                this.pathName || this.element.getName()
              );
          a.wrapper.setAttribute("role", "region");
          a.wrapper.setAttribute("aria-label", b);
        }
      },
      null,
      null,
      9999
    );
  }
  function X(a) {
    if (a.draggable) {
      var b = a.editor,
        c = a.wrapper.getLast(g.isDomDragHandlerContainer),
        d;
      c
        ? (d = c.findOne("img"))
        : ((c = new CKEDITOR.dom.element("span", b.document)),
          c.setAttributes({
            class: "cke_reset cke_widget_drag_handler_container",
            style:
              "background:rgba(220,220,220,0.5);background-image:url(" +
              b.plugins.widget.path +
              "images/handle.png)",
          }),
          (d = new CKEDITOR.dom.element("img", b.document)),
          d.setAttributes({
            class: "cke_reset cke_widget_drag_handler",
            "data-cke-widget-drag-handler": "1",
            src: CKEDITOR.tools.transparentImageData,
            width: 15,
            title: b.lang.widget.move,
            height: 15,
            role: "presentation",
          }),
          a.inline && d.setAttribute("draggable", "true"),
          c.append(d),
          a.wrapper.append(c));
      a.wrapper.on("dragover", function (a) {
        a.data.preventDefault();
      });
      a.wrapper.on("mouseenter", a.updateDragHandlerPosition, a);
      setTimeout(function () {
        a.on("data", a.updateDragHandlerPosition, a);
      }, 50);
      if (
        !a.inline &&
        (d.on("mousedown", Y, a), CKEDITOR.env.ie && 9 > CKEDITOR.env.version)
      )
        d.on("dragstart", function (a) {
          a.data.preventDefault(!0);
        });
      a.dragHandlerContainer = c;
    }
  }
  function Y(a) {
    function b() {
      var b;
      for (q.reset(); (b = g.pop()); ) b.removeListener();
      var c = k;
      b = a.sender;
      var d = this.repository.finder,
        e = this.repository.liner,
        f = this.editor,
        h = this.editor.editable();
      CKEDITOR.tools.isEmpty(e.visible) ||
        ((c = d.getRange(c[0])),
        this.focus(),
        f.fire("drop", { dropRange: c, target: c.startContainer }));
      h.removeClass("cke_widget_dragging");
      e.hideVisible();
      f.fire("dragend", { target: b });
    }
    var c = this.repository.finder,
      d = this.repository.locator,
      e = this.repository.liner,
      f = this.editor,
      h = f.editable(),
      g = [],
      k = [],
      m,
      n;
    this.repository._.draggedWidget = this;
    var p = c.greedySearch(),
      q = CKEDITOR.tools.eventsBuffer(50, function () {
        m = d.locate(p);
        k = d.sort(n, 1);
        k.length && (e.prepare(p, m), e.placeLine(k[0]), e.cleanup());
      });
    h.addClass("cke_widget_dragging");
    g.push(
      h.on("mousemove", function (a) {
        n = a.data.$.clientY;
        q.input();
      })
    );
    f.fire("dragstart", { target: a.sender });
    g.push(f.document.once("mouseup", b, this));
    h.isInline() || g.push(CKEDITOR.document.once("mouseup", b, this));
  }
  function Z(a) {
    var b,
      c,
      d = a.editables;
    a.editables = {};
    if (a.editables)
      for (b in d)
        (c = d[b]),
          a.initEditable(b, "string" == typeof c ? { selector: c } : c);
  }
  function aa(a) {
    if (a.mask) {
      var b = a.wrapper.findOne(".cke_widget_mask");
      b ||
        ((b = new CKEDITOR.dom.element("img", a.editor.document)),
        b.setAttributes({
          src: CKEDITOR.tools.transparentImageData,
          class: "cke_reset cke_widget_mask",
        }),
        a.wrapper.append(b));
      a.mask = b;
    }
  }
  function ba(a) {
    if (a.parts) {
      var b = {},
        c,
        d;
      for (d in a.parts) (c = a.wrapper.findOne(a.parts[d])), (b[d] = c);
      a.parts = b;
    }
  }
  function N(a, b) {
    ca(a);
    ba(a);
    Z(a);
    aa(a);
    X(a);
    V(a);
    W(a);
    if (CKEDITOR.env.ie && 9 > CKEDITOR.env.version)
      a.wrapper.on("dragstart", function (b) {
        var d = b.data.getTarget();
        g.getNestedEditable(a, d) ||
          (a.inline && g.isDomDragHandler(d)) ||
          b.data.preventDefault();
      });
    a.wrapper.removeClass("cke_widget_new");
    a.element.addClass("cke_widget_element");
    a.on(
      "key",
      function (b) {
        b = b.data.keyCode;
        if (13 == b) a.edit();
        else {
          if (b == CKEDITOR.CTRL + 67 || b == CKEDITOR.CTRL + 88) {
            y(a, b == CKEDITOR.CTRL + 88);
            return;
          }
          if (b in da || CKEDITOR.CTRL & b || CKEDITOR.ALT & b) return;
        }
        return !1;
      },
      null,
      null,
      999
    );
    a.on("doubleclick", function (b) {
      a.edit() && b.cancel();
    });
    if (b.data) a.on("data", b.data);
    if (b.edit) a.on("edit", b.edit);
  }
  function ca(a) {
    (a.wrapper = a.element.getParent()).setAttribute(
      "data-cke-widget-id",
      a.id
    );
  }
  function r(a) {
    a.element.data(
      "cke-widget-data",
      encodeURIComponent(JSON.stringify(a.data))
    );
  }
  CKEDITOR.plugins.add("widget", {
    lang: "af,ar,bg,ca,cs,cy,da,de,de-ch,el,en,en-gb,eo,es,eu,fa,fi,fr,gl,he,hr,hu,id,it,ja,km,ko,ku,lv,nb,nl,no,pl,pt,pt-br,ru,sk,sl,sq,sv,tr,tt,ug,uk,vi,zh,zh-cn",
    requires: "lineutils,clipboard",
    onLoad: function () {
      CKEDITOR.addCss(
        ".cke_widget_wrapper{position:relative;outline:none}.cke_widget_inline{display:inline-block}.cke_widget_wrapper:hover\x3e.cke_widget_element{outline:2px solid yellow;cursor:default}.cke_widget_wrapper:hover .cke_widget_editable{outline:2px solid yellow}.cke_widget_wrapper.cke_widget_focused\x3e.cke_widget_element,.cke_widget_wrapper .cke_widget_editable.cke_widget_editable_focused{outline:2px solid #ace}.cke_widget_editable{cursor:text}.cke_widget_drag_handler_container{position:absolute;width:15px;height:0;display:none;opacity:0.75;transition:height 0s 0.2s;line-height:0}.cke_widget_wrapper:hover\x3e.cke_widget_drag_handler_container{height:15px;transition:none}.cke_widget_drag_handler_container:hover{opacity:1}img.cke_widget_drag_handler{cursor:move;width:15px;height:15px;display:inline-block}.cke_widget_mask{position:absolute;top:0;left:0;width:100%;height:100%;display:block}.cke_editable.cke_widget_dragging, .cke_editable.cke_widget_dragging *{cursor:move !important}"
      );
    },
    beforeInit: function (a) {
      a.widgets = new p(a);
    },
    afterInit: function (a) {
      var b = a.widgets.registered,
        c,
        d,
        e;
      for (d in b)
        (c = b[d]),
          (e = c.button) &&
            a.ui.addButton &&
            a.ui.addButton(CKEDITOR.tools.capitalize(c.name, !0), {
              label: e,
              command: c.name,
              toolbar: "insert,10",
            });
      S(a);
    },
  });
  p.prototype = {
    MIN_SELECTION_CHECK_INTERVAL: 500,
    add: function (a, b) {
      b = CKEDITOR.tools.prototypedCopy(b);
      b.name = a;
      b._ = b._ || {};
      this.editor.fire("widgetDefinition", b);
      b.template && (b.template = new CKEDITOR.template(b.template));
      O(this.editor, b);
      P(this, b);
      return (this.registered[a] = b);
    },
    addUpcastCallback: function (a) {
      this._.upcastCallbacks.push(a);
    },
    checkSelection: function () {
      var a = this.editor.getSelection(),
        b = a.getSelectedElement(),
        c = z(this),
        d;
      if (b && (d = this.getByElement(b, !0)))
        return c.focus(d).select(d).commit();
      a = a.getRanges()[0];
      if (!a || a.collapsed) return c.commit();
      a = new CKEDITOR.dom.walker(a);
      for (a.evaluator = g.isDomWidgetWrapper; (b = a.next()); )
        c.select(this.getByElement(b));
      c.commit();
    },
    checkWidgets: function (a) {
      this.fire("checkWidgets", CKEDITOR.tools.copy(a || {}));
    },
    del: function (a) {
      if (this.focused === a) {
        var b = a.editor,
          c = b.createRange(),
          d;
        (d = c.moveToClosestEditablePosition(a.wrapper, !0)) ||
          (d = c.moveToClosestEditablePosition(a.wrapper, !1));
        d && b.getSelection().selectRanges([c]);
      }
      a.wrapper.remove();
      this.destroy(a, !0);
    },
    destroy: function (a, b) {
      this.widgetHoldingFocusedEditable === a && n(this, a, null, b);
      a.destroy(b);
      delete this.instances[a.id];
      this.fire("instanceDestroyed", a);
    },
    destroyAll: function (a, b) {
      var c,
        d,
        e = this.instances;
      if (b && !a) {
        d = b.find(".cke_widget_wrapper");
        for (var e = d.count(), f = 0; f < e; ++f)
          (c = this.getByElement(d.getItem(f), !0)) && this.destroy(c);
      } else for (d in e) (c = e[d]), this.destroy(c, a);
    },
    finalizeCreation: function (a) {
      (a = a.getFirst()) &&
        g.isDomWidgetWrapper(a) &&
        (this.editor.insertElement(a),
        (a = this.getByElement(a)),
        (a.ready = !0),
        a.fire("ready"),
        a.focus());
    },
    getByElement: (function () {
      function a(a) {
        return a.is(b) && a.data("cke-widget-id");
      }
      var b = { div: 1, span: 1 };
      return function (b, d) {
        if (!b) return null;
        var e = a(b);
        if (!d && !e) {
          var f = this.editor.editable();
          do b = b.getParent();
          while (b && !b.equals(f) && !(e = a(b)));
        }
        return this.instances[e] || null;
      };
    })(),
    initOn: function (a, b, c) {
      b
        ? "string" == typeof b && (b = this.registered[b])
        : (b = this.registered[a.data("widget")]);
      if (!b) return null;
      var d = this.wrapElement(a, b.name);
      return d
        ? d.hasClass("cke_widget_new")
          ? ((a = new g(this, this._.nextId++, a, b, c)),
            a.isInited() ? (this.instances[a.id] = a) : null)
          : this.getByElement(a)
        : null;
    },
    initOnAll: function (a) {
      a = (a || this.editor.editable()).find(".cke_widget_new");
      for (var b = [], c, d = a.count(); d--; )
        (c = this.initOn(a.getItem(d).getFirst(g.isDomWidgetElement))) &&
          b.push(c);
      return b;
    },
    onWidget: function (a) {
      var b = Array.prototype.slice.call(arguments);
      b.shift();
      for (var c in this.instances) {
        var d = this.instances[c];
        d.name == a && d.on.apply(d, b);
      }
      this.on("instanceCreated", function (c) {
        c = c.data;
        c.name == a && c.on.apply(c, b);
      });
    },
    parseElementClasses: function (a) {
      if (!a) return null;
      a = CKEDITOR.tools.trim(a).split(/\s+/);
      for (var b, c = {}, d = 0; (b = a.pop()); )
        -1 == b.indexOf("cke_") && (c[b] = d = 1);
      return d ? c : null;
    },
    wrapElement: function (a, b) {
      var c = null,
        d,
        e;
      if (a instanceof CKEDITOR.dom.element) {
        d = this.registered[b || a.data("widget")];
        if (!d) return null;
        if (
          (c = a.getParent()) &&
          c.type == CKEDITOR.NODE_ELEMENT &&
          c.data("cke-widget-wrapper")
        )
          return c;
        a.hasAttribute("data-cke-widget-keep-attr") ||
          a.data("cke-widget-keep-attr", a.data("widget") ? 1 : 0);
        b && a.data("widget", b);
        e = x(d, a.getName());
        c = new CKEDITOR.dom.element(e ? "span" : "div");
        c.setAttributes(v(e));
        c.data("cke-display-name", d.pathName ? d.pathName : a.getName());
        a.getParent(!0) && c.replace(a);
        a.appendTo(c);
      } else if (a instanceof CKEDITOR.htmlParser.element) {
        d = this.registered[b || a.attributes["data-widget"]];
        if (!d) return null;
        if (
          (c = a.parent) &&
          c.type == CKEDITOR.NODE_ELEMENT &&
          c.attributes["data-cke-widget-wrapper"]
        )
          return c;
        "data-cke-widget-keep-attr" in a.attributes ||
          (a.attributes["data-cke-widget-keep-attr"] = a.attributes[
            "data-widget"
          ]
            ? 1
            : 0);
        b && (a.attributes["data-widget"] = b);
        e = x(d, a.name);
        c = new CKEDITOR.htmlParser.element(e ? "span" : "div", v(e));
        c.attributes["data-cke-display-name"] = d.pathName
          ? d.pathName
          : a.name;
        d = a.parent;
        var f;
        d && ((f = a.getIndex()), a.remove());
        c.add(a);
        d && w(d, f, c);
      }
      return c;
    },
    _tests_createEditableFilter: u,
  };
  CKEDITOR.event.implementOn(p.prototype);
  g.prototype = {
    addClass: function (a) {
      this.element.addClass(a);
    },
    applyStyle: function (a) {
      A(this, a, 1);
    },
    checkStyleActive: function (a) {
      a = B(a);
      var b;
      if (!a) return !1;
      for (; (b = a.pop()); ) if (!this.hasClass(b)) return !1;
      return !0;
    },
    destroy: function (a) {
      this.fire("destroy");
      if (this.editables)
        for (var b in this.editables) this.destroyEditable(b, a);
      a ||
        ("0" == this.element.data("cke-widget-keep-attr") &&
          this.element.removeAttribute("data-widget"),
        this.element.removeAttributes([
          "data-cke-widget-data",
          "data-cke-widget-keep-attr",
        ]),
        this.element.removeClass("cke_widget_element"),
        this.element.replace(this.wrapper));
      this.wrapper = null;
    },
    destroyEditable: function (a, b) {
      var c = this.editables[a];
      c.removeListener("focus", E);
      c.removeListener("blur", D);
      this.editor.focusManager.remove(c);
      b ||
        (this.repository.destroyAll(!1, c),
        c.removeClass("cke_widget_editable"),
        c.removeClass("cke_widget_editable_focused"),
        c.removeAttributes([
          "contenteditable",
          "data-cke-widget-editable",
          "data-cke-enter-mode",
        ]));
      delete this.editables[a];
    },
    edit: function () {
      var a = { dialog: this.dialog },
        b = this;
      if (!1 === this.fire("edit", a) || !a.dialog) return !1;
      this.editor.openDialog(a.dialog, function (a) {
        var d, e;
        !1 !== b.fire("dialog", a) &&
          ((d = a.on("show", function () {
            a.setupContent(b);
          })),
          (e = a.on("ok", function () {
            var d,
              e = b.on(
                "data",
                function (a) {
                  d = 1;
                  a.cancel();
                },
                null,
                null,
                0
              );
            b.editor.fire("saveSnapshot");
            a.commitContent(b);
            e.removeListener();
            d && (b.fire("data", b.data), b.editor.fire("saveSnapshot"));
          })),
          a.once("hide", function () {
            d.removeListener();
            e.removeListener();
          }));
      });
      return !0;
    },
    getClasses: function () {
      return this.repository.parseElementClasses(
        this.element.getAttribute("class")
      );
    },
    hasClass: function (a) {
      return this.element.hasClass(a);
    },
    initEditable: function (a, b) {
      var c = this._findOneNotNested(b.selector);
      return c && c.is(CKEDITOR.dtd.$editable)
        ? ((c = new q(this.editor, c, {
            filter: u.call(this.repository, this.name, a, b),
          })),
          (this.editables[a] = c),
          c.setAttributes({
            contenteditable: "true",
            "data-cke-widget-editable": a,
            "data-cke-enter-mode": c.enterMode,
          }),
          c.filter && c.data("cke-filter", c.filter.id),
          c.addClass("cke_widget_editable"),
          c.removeClass("cke_widget_editable_focused"),
          b.pathName && c.data("cke-display-name", b.pathName),
          this.editor.focusManager.add(c),
          c.on("focus", E, this),
          CKEDITOR.env.ie && c.on("blur", D, this),
          (c._.initialSetData = !0),
          c.setData(c.getHtml()),
          !0)
        : !1;
    },
    _findOneNotNested: function (a) {
      a = this.wrapper.find(a);
      for (var b, c, d = 0; d < a.count(); d++)
        if (
          ((b = a.getItem(d)),
          (c = b.getAscendant(g.isDomWidgetWrapper)),
          this.wrapper.equals(c))
        )
          return b;
      return null;
    },
    isInited: function () {
      return !(!this.wrapper || !this.inited);
    },
    isReady: function () {
      return this.isInited() && this.ready;
    },
    focus: function () {
      var a = this.editor.getSelection();
      if (a) {
        var b = this.editor.checkDirty();
        a.fake(this.wrapper);
        !b && this.editor.resetDirty();
      }
      this.editor.focus();
    },
    removeClass: function (a) {
      this.element.removeClass(a);
    },
    removeStyle: function (a) {
      A(this, a, 0);
    },
    setData: function (a, b) {
      var c = this.data,
        d = 0;
      if ("string" == typeof a) c[a] !== b && ((c[a] = b), (d = 1));
      else {
        var e = a;
        for (a in e) c[a] !== e[a] && ((d = 1), (c[a] = e[a]));
      }
      d && this.dataReady && (r(this), this.fire("data", c));
      return this;
    },
    setFocused: function (a) {
      this.wrapper[a ? "addClass" : "removeClass"]("cke_widget_focused");
      this.fire(a ? "focus" : "blur");
      return this;
    },
    setSelected: function (a) {
      this.wrapper[a ? "addClass" : "removeClass"]("cke_widget_selected");
      this.fire(a ? "select" : "deselect");
      return this;
    },
    updateDragHandlerPosition: function () {
      var a = this.editor,
        b = this.element.$,
        c = this._.dragHandlerOffset,
        b = { x: b.offsetLeft, y: b.offsetTop - 15 };
      (c && b.x == c.x && b.y == c.y) ||
        ((c = a.checkDirty()),
        a.fire("lockSnapshot"),
        this.dragHandlerContainer.setStyles({
          top: b.y + "px",
          left: b.x + "px",
          display: "block",
        }),
        a.fire("unlockSnapshot"),
        !c && a.resetDirty(),
        (this._.dragHandlerOffset = b));
    },
  };
  CKEDITOR.event.implementOn(g.prototype);
  g.getNestedEditable = function (a, b) {
    return !b || b.equals(a)
      ? null
      : g.isDomNestedEditable(b)
      ? b
      : g.getNestedEditable(a, b.getParent());
  };
  g.isDomDragHandler = function (a) {
    return (
      a.type == CKEDITOR.NODE_ELEMENT &&
      a.hasAttribute("data-cke-widget-drag-handler")
    );
  };
  g.isDomDragHandlerContainer = function (a) {
    return (
      a.type == CKEDITOR.NODE_ELEMENT &&
      a.hasClass("cke_widget_drag_handler_container")
    );
  };
  g.isDomNestedEditable = function (a) {
    return (
      a.type == CKEDITOR.NODE_ELEMENT &&
      a.hasAttribute("data-cke-widget-editable")
    );
  };
  g.isDomWidgetElement = function (a) {
    return a.type == CKEDITOR.NODE_ELEMENT && a.hasAttribute("data-widget");
  };
  g.isDomWidgetWrapper = function (a) {
    return (
      a.type == CKEDITOR.NODE_ELEMENT &&
      a.hasAttribute("data-cke-widget-wrapper")
    );
  };
  g.isParserWidgetElement = function (a) {
    return a.type == CKEDITOR.NODE_ELEMENT && !!a.attributes["data-widget"];
  };
  g.isParserWidgetWrapper = function (a) {
    return (
      a.type == CKEDITOR.NODE_ELEMENT &&
      !!a.attributes["data-cke-widget-wrapper"]
    );
  };
  q.prototype = CKEDITOR.tools.extend(
    CKEDITOR.tools.prototypedCopy(CKEDITOR.dom.element.prototype),
    {
      setData: function (a) {
        this._.initialSetData || this.editor.widgets.destroyAll(!1, this);
        this._.initialSetData = !1;
        a = this.editor.dataProcessor.toHtml(a, {
          context: this.getName(),
          filter: this.filter,
          enterMode: this.enterMode,
        });
        this.setHtml(a);
        this.editor.widgets.initOnAll(this);
      },
      getData: function () {
        return this.editor.dataProcessor.toDataFormat(this.getHtml(), {
          context: this.getName(),
          filter: this.filter,
          enterMode: this.enterMode,
        });
      },
    }
  );
  var U =
      /^(?:<(?:div|span)(?: data-cke-temp="1")?(?: id="cke_copybin")?(?: data-cke-temp="1")?>)?(?:<(?:div|span)(?: style="[^"]+")?>)?<span [^>]*data-cke-copybin-start="1"[^>]*>.?<\/span>([\s\S]+)<span [^>]*data-cke-copybin-end="1"[^>]*>.?<\/span>(?:<\/(?:div|span)>)?(?:<\/(?:div|span)>)?$/i,
    da = { 37: 1, 38: 1, 39: 1, 40: 1, 8: 1, 46: 1 };
  (function () {
    function a() {}
    function b(a, b, e) {
      return e && this.checkElement(a)
        ? (a = e.widgets.getByElement(a, !0)) && a.checkStyleActive(this)
        : !1;
    }
    CKEDITOR.style.addCustomHandler({
      type: "widget",
      setup: function (a) {
        this.widget = a.widget;
      },
      apply: function (a) {
        a instanceof CKEDITOR.editor &&
          this.checkApplicable(a.elementPath(), a) &&
          a.widgets.focused.applyStyle(this);
      },
      remove: function (a) {
        a instanceof CKEDITOR.editor &&
          this.checkApplicable(a.elementPath(), a) &&
          a.widgets.focused.removeStyle(this);
      },
      checkActive: function (a, b) {
        return this.checkElementMatch(a.lastElement, 0, b);
      },
      checkApplicable: function (a, b) {
        return b instanceof CKEDITOR.editor
          ? this.checkElement(a.lastElement)
          : !1;
      },
      checkElementMatch: b,
      checkElementRemovable: b,
      checkElement: function (a) {
        return g.isDomWidgetWrapper(a)
          ? (a = a.getFirst(g.isDomWidgetElement)) &&
              a.data("widget") == this.widget
          : !1;
      },
      buildPreview: function (a) {
        return a || this._.definition.name;
      },
      toAllowedContentRules: function (a) {
        if (!a) return null;
        a = a.widgets.registered[this.widget];
        var b,
          e = {};
        if (!a) return null;
        if (a.styleableElements) {
          b = this.getClassesArray();
          if (!b) return null;
          e[a.styleableElements] = { classes: b, propertiesOnly: !0 };
          return e;
        }
        return a.styleToAllowedContentRules
          ? a.styleToAllowedContentRules(this)
          : null;
      },
      getClassesArray: function () {
        var a =
          this._.definition.attributes && this._.definition.attributes["class"];
        return a ? CKEDITOR.tools.trim(a).split(/\s+/) : null;
      },
      applyToRange: a,
      removeFromRange: a,
      applyToObject: a,
    });
  })();
  CKEDITOR.plugins.widget = g;
  g.repository = p;
  g.nestedEditable = q;
})();
