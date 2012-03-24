SSSS = window.SunriseSunset ||= {}
SSSS =
	init: ->
		console.log @
		SSSS.windowHeight = $(window).height()
		SSSS.$reflection = $('#sea')
		SSSS.$blackness = $("#blackness")
		console.log @
		$(document).bind 'scroll', @onScroll
		return

	onScroll: (e) ->
		y = $(document).scrollTop()
		perc = 1-(y/SSSS.windowHeight)
		console.log perc
		SSSS.$blackness.css
			opacity: perc
		SSSS.$reflection.css
			top: "#{y}px"
		return


SSSS.init()