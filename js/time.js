(function() {
  var SSSS;

  SSSS = window.SunriseSunset || (window.SunriseSunset = {});

  SSSS = {
    init: function() {
      SSSS.windowHeight = $(window).height();
      SSSS.$reflection = $('#sea');
      SSSS.$blackness = $("#blackness");
      this.int = setInterval(this.onScroll, 10);
    },
    onScroll: function(e) {
      var perc, y;
      y = $(document).scrollTop();
      perc = 1 - (y / SSSS.windowHeight);
      SSSS.$blackness.css({
        opacity: perc
      });
      SSSS.$reflection.css({
        top: "" + y + "px"
      });
    }
  };

  SSSS.init();

}).call(this);
