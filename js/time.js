(function() {
  var SSSS;

  SSSS = window.SunriseSunset || (window.SunriseSunset = {});

  SSSS = {
    init: function() {
      SSSS.$reflection = $('#sea');
      SSSS.$scroll = $('#scroll');
      SSSS.$blackness = $("#blackness");
      SSSS.$sun = $('#sky');
      $(window).bind('resize', this.onResize);
      this.onResize();
      this.int = setInterval(this.onScroll, 10);
    },
    onScroll: function(e) {
      var perc, y;
      y = $(document).scrollTop();
      perc = SSSS.constrainNumber(1 - (y / SSSS.windowHeight), 0, 1);
      SSSS.$blackness.css({
        opacity: SSSS.constrainNumber(perc, 0, 1)
      });
      SSSS.$sun.css({
        marginTop: "" + (Math.round(-300 * (1 - perc))) + "px"
      });
      SSSS.$reflection.css({
        marginTop: "" + (-92 + Math.round(300 * (1 - perc))) + "px"
      });
    },
    onResize: function() {
      var height;
      height = $(window).height() * 2;
      SSSS.windowHeight = $(window).height();
      console.log(height);
      SSSS.$scroll.css({
        height: "" + height + "px"
      });
    },
    constrainNumber: function(value, min, max) {
      if (value < min) {
        return min;
      } else if (value > max) {
        return max;
      } else {
        return value;
      }
    }
  };

  SSSS.init();

}).call(this);
