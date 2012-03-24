SSSS = window.SunriseSunset ||= {}
SSSS =
	init: ->
		console.log @
		SSSS.reflection = $('#sea')
		console.log @
		$(document).bind 'scroll', @onScroll
		return

	onScroll: (e) ->
		y = $(document).scrollTop()
		SSSS.reflection.css
			top: "#{y}px"
		return


SSSS.init()