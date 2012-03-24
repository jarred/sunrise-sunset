(function() {
  var SSSS;

  SSSS = window.SunriseSunset || (window.SunriseSunset = {});

  SSSS = {
    init: function() {
      console.log(this);
      SSSS.windowHeight = $(window).height();
      SSSS.$reflection = $('#sea');
      SSSS.$blackness = $("#blackness");
      console.log(this);
      $(document).bind('scroll', this.onScroll);
    },
    onScroll: function(e) {
      var perc, y;
      y = $(document).scrollTop();
      perc = 1 - (y / SSSS.windowHeight);
      console.log(perc);
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
