(function (z) {
  z.fn.carousel = function (a) {
    var a = z.extend(
      {
        direction: "horizontal",
        loop: false,
        dispItems: 1,
        pagination: false,
        paginationPosition: "inside",
        nextBtn: "<a>",
        prevBtn: "<a>",
        btnsPosition: "inside",
        nextBtnInsert: "insertAfter",
        prevBtnInsert: "insertBefore",
        nextBtnInsertFn: false,
        prevBtnInsertFn: false,
        autoSlide: false,
        autoSlideInterval: 3000,
        delayAutoSlide: false,
        combinedClasses: false,
        effect: "slide",
        slideEasing: "swing",
        animSpeed: 300,
        equalWidths: "true",
        verticalMargin: 0,
        callback: function () {},
        useAddress: false,
        adressIdentifier: "carousel",
        tabLabel: function (b) {
          return b;
        },
        showEmptyItems: true,
        ajaxMode: false,
        ajaxUrl: "",
        stopSlideBtn: false,
        stopSlideTextPause: "Pause",
        stopSlideTextPlay: "Play",
      },
      a
    );
    if (a.btnsPosition == "outside") {
      a.prevBtnInsert = "insertBefore";
      a.nextBtnInsert = "insertAfter";
    }
    a.delayAutoSlide = 0 + a.delayAutoSlide;
    return this.each(function () {
      var b = { $elts: {}, params: a, launchOnLoad: [] };
      b.$elts.carousel = z(this).addClass("js");
      b.$elts.content = z(this)
        .children()
        .css({ position: "absolute", top: 0 });
      b.$elts.wrap = b.$elts.content
        .wrap('<div class="carousel-wrap"></div>')
        .parent()
        .css({ position: "relative" });
      b.steps = { first: 0, count: b.$elts.content.children().length };
      b.$elts.loader = z('<div class="loader"></div>').css({
        position: "absolute",
      });
      b.steps.last = b.steps.count - 1;
      if (b.params.pagination) {
        r(b);
      }
      if (z.isFunction(b.params.prevBtnInsertFn)) {
        b.$elts.prevBtn = b.params.prevBtnInsertFn(b.$elts);
      } else {
        if (a.btnsPosition == "outside") {
          b.$elts.prevBtn = z(a.prevBtn)[a.prevBtnInsert](b.$elts.carousel);
        } else {
          b.$elts.prevBtn = z(a.prevBtn)[a.prevBtnInsert](b.$elts.wrap);
        }
      }
      if (z.isFunction(b.params.nextBtnInsertFn)) {
        b.$elts.nextBtn = b.params.nextBtnInsertFn(b.$elts);
      } else {
        if (a.btnsPosition == "outside") {
          b.$elts.nextBtn = z(a.nextBtn)[a.nextBtnInsert](b.$elts.carousel);
        } else {
          b.$elts.nextBtn = z(a.nextBtn)[a.nextBtnInsert](b.$elts.wrap);
        }
      }
      b.$elts.nextBtn.addClass("carousel-control next carousel-next");
      b.$elts.prevBtn.addClass("carousel-control previous carousel-previous");
      b.lastItemsToLoad;
      C(b);
      b.$elts.carousel
        .attr("tabindex", 0)
        .add(b.$elts.carousel.children())
        .bind({
          focus: function (c) {
            z(document).bind("keypress", function (d) {
              switch (d.keyCode) {
                case 39:
                  b.$elts.nextBtn.click();
                  break;
                case 37:
                  b.$elts.prevBtn.click();
                  break;
              }
              switch (d.charCode) {
                case 110:
                  b.$elts.nextBtn.click();
                  break;
                case 112:
                  b.$elts.prevBtn.click();
                  break;
              }
            });
          },
          blur: function () {
            z(document).unbind("keypress");
          },
        });
      s(b);
      z(function () {
        D(b);
        z.each(b.launchOnLoad, function (d, c) {
          c();
        });
        if (b.params.autoSlide) {
          A(b);
        }
        if (a.stopSlideBtn == true) {
          b.$elts.stopSlideBtn = z(
            '<button type="button" class="slide-control play">' +
              a.stopSlideTextPause +
              "</button>"
          );
          F(b);
        }
      });
    });
  };
  function D(b) {
    var a = b.$elts.content.children();
    var c = 0;
    a.each(function () {
      $item = z(this);
      $itemHeight = $item.outerHeight();
      if ($itemHeight > c) {
        c = $itemHeight;
      }
    });
    if (b.params.verticalMargin > 0) {
      c = c + b.params.verticalMargin;
    }
    a.height(c);
    var d = b.$elts.content.children(":first");
    b.itemWidth = d.outerWidth();
    if (b.params.direction == "vertical") {
      b.contentWidth = b.itemWidth;
    } else {
      if (b.params.equalWidths) {
        b.contentWidth = b.itemWidth * b.steps.count;
      } else {
        b.contentWidth = (function () {
          var e = 0;
          b.$elts.content.children().each(function () {
            e += z(this).outerWidth();
          });
          return e;
        })();
      }
    }
    b.$elts.content.width(b.contentWidth);
    b.itemHeight = c;
    if (b.params.direction == "vertical") {
      b.$elts.content.css({ height: b.itemHeight * b.steps.count + "px" });
      b.$elts.content
        .parent()
        .css({ height: b.itemHeight * b.params.dispItems + "px" });
    } else {
      b.$elts.content.parent().css({ height: b.itemHeight + "px" });
    }
    x(b);
  }
  function C(a) {
    a.$elts.nextBtn
      .add(a.$elts.prevBtn)
      .bind("enable", function () {
        var b = z(this)
          .unbind("click")
          .bind("click", function () {
            if (
              a.params.ajaxMode &&
              b.is(".next") &&
              E(a) == q(a) - 1 &&
              !a.lastItemsToLoad
            ) {
              y(a);
              a.$elts.content.ajaxSuccess(function () {});
            } else {
              B(a, w(a, b.is(".next") ? "next" : "prev"));
              if (a.params.stopSlideBtn == true) {
                a.$elts.stopSlideBtn.trigger("pause");
              } else {
                t(a);
              }
            }
          })
          .removeClass("disabled")
          .removeAttr("disabled");
        if (a.params.combinedClasses) {
          b.removeClass("next-disabled previous-disabled").removeAttr(
            "disabled"
          );
        }
      })
      .bind("disable", function () {
        var b = z(this)
          .unbind("click")
          .addClass("disabled")
          .attr("disabled", "disabled");
        if (a.params.combinedClasses) {
          if (b.is(".next")) {
            b.addClass("next-disabled");
          } else {
            if (b.is(".previous")) {
              b.addClass("previous-disabled");
            }
          }
        }
      })
      .hover(function () {
        z(this).toggleClass("hover");
      });
  }
  function r(a) {
    a.$elts.pagination = z(
      '<div class="center-wrap"><div class="carousel-pagination"><p></p></div></div>'
    )
      [a.params.paginationPosition == "outside" ? "insertAfter" : "appendTo"](
        a.$elts.carousel
      )
      .find("p");
    a.$elts.paginationBtns = z([]);
    a.$elts.content.find("li").each(function (b) {
      if (b % a.params.dispItems == 0) {
        v(a, b);
      }
    });
  }
  function v(a, b) {
    if (a.params.pagination) {
      a.$elts.paginationBtns = a.$elts.paginationBtns
        .add(
          z(
            '<a role="button"><span>' +
              a.params.tabLabel(a.$elts.paginationBtns.length + 1) +
              "</span></a>"
          ).data("firstStep", b)
        )
        .appendTo(a.$elts.pagination);
      a.$elts.paginationBtns.slice(0, 1).addClass("active");
      a.$elts.paginationBtns.click(function (c) {
        B(a, z(this).data("firstStep"));
        if (a.params.stopSlideBtn == true) {
          a.$elts.stopSlideBtn.trigger("pause");
        } else {
          t(a);
        }
      });
    }
  }
  function s(a) {
    if (a.params.useAddress && z.isFunction(z.fn.address)) {
      z.address
        .init(function (b) {
          var c = z.address.pathNames();
          if (c[0] === a.params.adressIdentifier && !!c[1]) {
            B(a, c[1] - 1);
          } else {
            z.address.value("/" + a.params.adressIdentifier + "/1");
          }
        })
        .change(function (b) {
          var c = z.address.pathNames();
          if (c[0] === a.params.adressIdentifier && !!c[1]) {
            B(a, c[1] - 1);
          }
        });
    } else {
      a.params.useAddress = false;
    }
  }
  function B(b, a) {
    b.params.callback(a);
    u(b, a);
    b.steps.first = a;
    x(b);
    if (b.params.useAddress) {
      z.address.value("/" + b.params.adressIdentifier + "/" + (a + 1));
    }
  }
  function w(a, b) {
    if (b == "prev") {
      if (!a.params.showEmptyItems) {
        if (a.steps.first == 0) {
          return a.params.loop ? a.steps.count - a.params.dispItems : false;
        } else {
          return Math.max(0, a.steps.first - a.params.dispItems);
        }
      } else {
        if (a.steps.first - a.params.dispItems >= 0) {
          return a.steps.first - a.params.dispItems;
        } else {
          return a.params.loop ? a.steps.count - a.params.dispItems : false;
        }
      }
    } else {
      if (b == "next") {
        if (a.steps.first + a.params.dispItems < a.steps.count) {
          if (!a.params.showEmptyItems) {
            return Math.min(
              a.steps.first + a.params.dispItems,
              a.steps.count - a.params.dispItems
            );
          } else {
            return a.steps.first + a.params.dispItems;
          }
        } else {
          return a.params.loop ? 0 : false;
        }
      }
    }
  }
  function u(b, a) {
    switch (b.params.effect) {
      case "no":
        if (b.params.direction == "vertical") {
          b.$elts.content.css("top", -(b.itemHeight * a) + "px");
        } else {
          b.$elts.content.css("left", -(b.itemWidth * a) + "px");
        }
        break;
      case "fade":
        if (b.params.direction == "vertical") {
          b.$elts.content
            .hide()
            .css("top", -(b.itemHeight * a) + "px")
            .fadeIn(b.params.animSpeed);
        } else {
          b.$elts.content
            .hide()
            .css("left", -(b.itemWidth * a) + "px")
            .fadeIn(b.params.animSpeed);
        }
        break;
      default:
        if (b.params.direction == "vertical") {
          b.$elts.content
            .stop()
            .animate(
              { top: -(b.itemHeight * a) + "px" },
              b.params.animSpeed,
              b.params.slideEasing
            );
        } else {
          b.$elts.content
            .stop()
            .animate(
              { left: -(b.itemWidth * a) + "px" },
              b.params.animSpeed,
              b.params.slideEasing
            );
        }
        break;
    }
  }
  function x(a) {
    if (w(a, "prev") !== false) {
      a.$elts.prevBtn.trigger("enable");
    } else {
      a.$elts.prevBtn.trigger("disable");
    }
    if (w(a, "next") !== false) {
      a.$elts.nextBtn.trigger("enable");
    } else {
      a.$elts.nextBtn.trigger("disable");
    }
    if (a.params.pagination) {
      a.$elts.paginationBtns
        .removeClass("active")
        .filter(function () {
          return z(this).data("firstStep") == a.steps.first;
        })
        .addClass("active");
    }
  }
  function A(a) {
    a.delayAutoSlide = window.setTimeout(function () {
      a.autoSlideInterval = window.setInterval(function () {
        B(a, w(a, "next"));
      }, a.params.autoSlideInterval);
    }, a.params.delayAutoSlide);
  }
  function t(a) {
    window.clearTimeout(a.delayAutoSlide);
    window.clearInterval(a.autoSlideInterval);
    a.params.delayAutoSlide = 0;
  }
  function F(a) {
    var b = a.$elts.stopSlideBtn;
    b.bind({
      play: function () {
        A(a);
        b.removeClass("pause")
          .addClass("play")
          .html(a.params.stopSlideTextPause);
      },
      pause: function () {
        t(a);
        b.removeClass("play")
          .addClass("pause")
          .html(a.params.stopSlideTextPlay);
      },
    });
    b.click(function (c) {
      if (b.is(".play")) {
        b.trigger("pause");
      } else {
        if (b.is(".pause")) {
          b.trigger("play");
        }
      }
    });
    b.prependTo(a.$elts.wrap);
  }
  function q(a) {
    return a.$elts.pagination.children().length;
  }
  function E(a) {
    return a.steps.first / a.params.dispItems;
  }
  function y(a) {
    a.$elts.carousel.prepend(a.$elts.loader);
    z.ajax({
      url: a.params.ajaxUrl,
      dataType: "json",
      success: function (b) {
        a.lastItemsToLoad = b.bLastItemsToLoad;
        z(a.$elts.content).append(b.shtml);
        a.steps = {
          first: a.steps.first + a.params.dispItems,
          count: a.$elts.content.children().length,
        };
        a.steps.last = a.steps.count - 1;
        D(a);
        v(a, a.steps.first);
        B(a, a.steps.first);
        if (a.params.stopSlideBtn == true) {
          a.$elts.stopSlideBtn.trigger("pause");
        } else {
          t(a);
        }
        a.$elts.loader.remove();
      },
    });
  }
})(jQuery);
