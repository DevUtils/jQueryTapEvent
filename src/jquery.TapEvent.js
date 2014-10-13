var TjQueryTapEvent = null;

$(document).ready(function() {

	TjQueryTapEvent = 
	{
		element : null,
		start : function()
		{
			$(document).on
			(
				'touchstart.TjQueryTapEvent',
				function(e)
				{
					this.element = e.srcElement;
				}
			);

			$(document).on
			(
				'touchend.TjQueryTapEvent',
				function(e)
				{
					if (this.element == e.srcElement)
					{
						var p_event = jQuery.Event('tap');
						$(e.srcElement).trigger(p_event);
					}
				}
			);

			$(document).on
			(
				'touchleave.TjQueryTapEvent, touchcancel.TjQueryTapEvent, touchmove.TjQueryTapEvent',
				function(e)
				{
					this.element = null;
				}
			);
		}
	};

	TjQueryTapEvent.start();

});