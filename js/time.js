(function() {
  var SSSS;

  SSSS = window.SunriseSunset || (window.SunriseSunset = {});

  SSSS = {
    init: function() {
      console.log(this);
      SSSS.reflection = $('#sea');
      console.log(this);
      $(document).bind('scroll', this.onScroll);
    },
    onScroll: function(e) {
      var y;
      y = $(document).scrollTop();
      SSSS.reflection.css({
        top: "" + y + "px"
      });
    }
  };

  SSSS.init();

}).call(this);
