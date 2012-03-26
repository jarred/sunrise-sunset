SSSS = window.SunriseSunset ||= {}
SSSS =
	init: ->
		SSSS.$reflection = $('#sea')
		SSSS.$scroll = $('#scroll')
		SSSS.$blackness = $("#blackness")
		SSSS.$sun = $('#sky')
		$(window).bind 'resize', @onResize
		@onResize()		
		@int = setInterval @onScroll, 10
		return

	onScroll: (e) ->
		y = $(document).scrollTop()
		perc = SSSS.constrainNumber 1-(y/(SSSS.windowHeight)), 0, 1
		SSSS.$blackness.css
			opacity: SSSS.constrainNumber perc, 0, 1
		SSSS.$sun.css
			marginTop: "#{Math.round(-300 * (1 - perc))}px"
		SSSS.$reflection.css
			marginTop: "#{-92 + Math.round(300 * (1 - perc))}px"
		return

	onResize: ->
		height = $(window).height() * 2
		SSSS.windowHeight = $(window).height()
		SSSS.$scroll.css
			height: "#{height}px"
		return

	constrainNumber: (value, min, max) ->
		if value < min
			return min
		else if value > max
			return max
		else
			return value

SSSS.init()