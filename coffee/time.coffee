SSSS = window.SunriseSunset ||= {}
SSSS =
	init: ->
		SSSS.windowHeight = $(window).height()
		SSSS.$reflection = $('#sea')
		SSSS.$blackness = $("#blackness")
		@int = setInterval @onScroll, 10
		return

	onScroll: (e) ->
		y = $(document).scrollTop()
		perc = 1-(y/SSSS.windowHeight)
		SSSS.$blackness.css
			opacity: perc
		SSSS.$reflection.css
			top: "#{y}px"
		return


SSSS.init()