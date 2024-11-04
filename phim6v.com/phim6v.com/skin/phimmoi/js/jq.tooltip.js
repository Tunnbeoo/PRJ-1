this.tooltip_ip = function () {
  xOffset = 10;
  yOffset = 20;
  $("a.tooltip").hover(
    function (a) {
      var b = $(this).attr("rel");
      $("body").append('<div id="tooltip">Loading...</div>');
      $.post(
        "/index.php",
        { tooltip: 1, film_id: b, showimg: showimg },
        function (b) {
          $("#tooltip").html(b);
          $("#tooltip")
            .css("top", a.pageY - xOffset + "px")
            .css("left", a.pageX + yOffset + "px")
            .fadeIn("fast");
        }
      );
    },
    function () {
      this.phimid = "";
      $("#tooltip").remove();
    }
  );
  $("a.tooltip").mousemove(function (a) {
    $("#tooltip")
      .css("top", a.pageY - xOffset + "px")
      .css("left", a.pageX + yOffset + "px");
  });
};
$(document).ready(function () {
  tooltip_ip();
});
