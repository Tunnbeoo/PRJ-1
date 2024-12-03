/*
 Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function () {
  function q(a, f, d, b) {
    if (!a.isReadOnly() && !a.equals(d.editable())) {
      CKEDITOR.dom.element.setMarker(b, a, "bidi_processed", 1);
      b = a;
      for (var c = d.editable(); (b = b.getParent()) && !b.equals(c); )
        if (b.getCustomData("bidi_processed")) {
          a.removeStyle("direction");
          a.removeAttribute("dir");
          return;
        }
      b = "useComputedState" in d.config ? d.config.useComputedState : 1;
      (b
        ? a.getComputedStyle("direction")
        : a.getStyle("direction") || a.hasAttribute("dir")) != f &&
        (a.removeStyle("direction"),
        b
          ? (a.removeAttribute("dir"),
            f != a.getComputedStyle("direction") && a.setAttribute("dir", f))
          : a.setAttribute("dir", f),
        d.forceNextSelectionCheck());
    }
  }
  function v(a, f, d) {
    var b = a.getCommonAncestor(!1, !0);
    a = a.clone();
    a.enlarge(
      d == CKEDITOR.ENTER_BR
        ? CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS
        : CKEDITOR.ENLARGE_BLOCK_CONTENTS
    );
    if (
      a.checkBoundaryOfElement(b, CKEDITOR.START) &&
      a.checkBoundaryOfElement(b, CKEDITOR.END)
    ) {
      for (
        var c;
        b &&
        b.type == CKEDITOR.NODE_ELEMENT &&
        (c = b.getParent()) &&
        1 == c.getChildCount() &&
        !(b.getName() in f);

      )
        b = c;
      return b.type == CKEDITOR.NODE_ELEMENT && b.getName() in f && b;
    }
  }
  function p(a) {
    return {
      context: "p",
      allowedContent: {
        "h1 h2 h3 h4 h5 h6 table ul ol blockquote div tr p div li td": {
          propertiesOnly: !0,
          attributes: "dir",
        },
      },
      requiredContent: "p[dir]",
      refresh: function (a, d) {
        var b = a.config.useComputedState,
          c,
          b = void 0 === b || b;
        if (!b) {
          c = d.lastElement;
          for (
            var h = a.editable();
            c && !(c.getName() in u || c.equals(h));

          ) {
            var e = c.getParent();
            if (!e) break;
            c = e;
          }
        }
        c = c || d.block || d.blockLimit;
        c.equals(a.editable()) &&
          (h = a.getSelection().getRanges()[0].getEnclosedNode()) &&
          h.type == CKEDITOR.NODE_ELEMENT &&
          (c = h);
        c &&
          ((b = b
            ? c.getComputedStyle("direction")
            : c.getStyle("direction") || c.getAttribute("dir")),
          a
            .getCommand("bidirtl")
            .setState(
              "rtl" == b ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF
            ),
          a
            .getCommand("bidiltr")
            .setState(
              "ltr" == b ? CKEDITOR.TRISTATE_ON : CKEDITOR.TRISTATE_OFF
            ));
        b = (d.block || d.blockLimit || a.editable()).getDirection(1);
        b != (a._.selDir || a.lang.dir) &&
          ((a._.selDir = b), a.fire("contentDirChanged", b));
      },
      exec: function (f) {
        var d = f.getSelection(),
          b = f.config.enterMode,
          c = d.getRanges();
        if (c && c.length) {
          for (
            var h = {},
              e = d.createBookmarks(),
              c = c.createIterator(),
              g,
              l = 0;
            (g = c.getNextRange(1));

          ) {
            var k = g.getEnclosedNode();
            (k &&
              (!k || (k.type == CKEDITOR.NODE_ELEMENT && k.getName() in r))) ||
              (k = v(g, t, b));
            k && q(k, a, f, h);
            var m = new CKEDITOR.dom.walker(g),
              n = e[l].startNode,
              p = e[l++].endNode;
            m.evaluator = function (a) {
              var c = b == CKEDITOR.ENTER_P ? "p" : "div",
                d;
              if (
                (d =
                  (a ? a.type == CKEDITOR.NODE_ELEMENT : !1) &&
                  a.getName() in t)
              ) {
                if ((c = a.is(c)))
                  c = (c = a.getParent())
                    ? c.type == CKEDITOR.NODE_ELEMENT
                    : !1;
                d = !(c && a.getParent().is("blockquote"));
              }
              return !!(
                d &&
                a.getPosition(n) & CKEDITOR.POSITION_FOLLOWING &&
                (a.getPosition(p) &
                  (CKEDITOR.POSITION_PRECEDING + CKEDITOR.POSITION_CONTAINS)) ==
                  CKEDITOR.POSITION_PRECEDING
              );
            };
            for (; (k = m.next()); ) q(k, a, f, h);
            g = g.createIterator();
            for (
              g.enlargeBr = b != CKEDITOR.ENTER_BR;
              (k = g.getNextParagraph(b == CKEDITOR.ENTER_P ? "p" : "div"));

            )
              q(k, a, f, h);
          }
          CKEDITOR.dom.element.clearAllMarkers(h);
          f.forceNextSelectionCheck();
          d.selectBookmarks(e);
          f.focus();
        }
      },
    };
  }
  function w(a) {
    var f = a == l.setAttribute,
      d = a == l.removeAttribute,
      b = /\bdirection\s*:\s*(.*?)\s*(:?$|;)/;
    return function (c, h) {
      if (!this.isReadOnly()) {
        var e;
        if (
          (e =
            c == (f || d ? "dir" : "direction") ||
            ("style" == c && (d || b.test(h))))
        ) {
          a: {
            e = this;
            for (var g = e.getDocument().getBody().getParent(); e; ) {
              if (e.equals(g)) {
                e = !1;
                break a;
              }
              e = e.getParent();
            }
            e = !0;
          }
          e = !e;
        }
        if (
          e &&
          ((e = this.getDirection(1)),
          (g = a.apply(this, arguments)),
          e != this.getDirection(1))
        )
          return this.getDocument().fire("dirChanged", this), g;
      }
      return a.apply(this, arguments);
    };
  }
  var t = { table: 1, ul: 1, ol: 1, blockquote: 1, div: 1 },
    r = {},
    u = {};
  CKEDITOR.tools.extend(r, t, { tr: 1, p: 1, div: 1, li: 1 });
  CKEDITOR.tools.extend(u, r, { td: 1 });
  CKEDITOR.plugins.add("bidi", {
    lang: "af,ar,bg,bn,bs,ca,cs,cy,da,de,de-ch,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",
    icons: "bidiltr,bidirtl",
    hidpi: !0,
    init: function (a) {
      function f(b, c, d, e, f) {
        a.addCommand(d, new CKEDITOR.command(a, e));
        a.ui.addButton &&
          a.ui.addButton(b, { label: c, command: d, toolbar: "bidi," + f });
      }
      if (!a.blockless) {
        var d = a.lang.bidi;
        f("BidiLtr", d.ltr, "bidiltr", p("ltr"), 10);
        f("BidiRtl", d.rtl, "bidirtl", p("rtl"), 20);
        a.on("contentDom", function () {
          a.document.on("dirChanged", function (b) {
            a.fire("dirChanged", { node: b.data, dir: b.data.getDirection(1) });
          });
        });
        a.on("contentDirChanged", function (b) {
          b = (a.lang.dir != b.data ? "add" : "remove") + "Class";
          var c = a.ui.space(a.config.toolbarLocation);
          if (c) c[b]("cke_mixed_dir_content");
        });
      }
    },
  });
  for (
    var l = CKEDITOR.dom.element.prototype,
      n = ["setStyle", "removeStyle", "setAttribute", "removeAttribute"],
      m = 0;
    m < n.length;
    m++
  )
    l[n[m]] = CKEDITOR.tools.override(l[n[m]], w);
})();
