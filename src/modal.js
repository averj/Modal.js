$('.toggle-modal').click(function() {
	$('.toggle-modal').each(function() {
		var id = '#' + $(this).attr('target');
		$(id).hide();
	});
	var id = '#' + $(this).attr('target');
	if ($(id).css('display') == 'none') {
		$(id).fadeIn('300');
	} else {
		$(id).fadeOut('300');
	}
});

$('.modal .close').click(function() {
	$(this).parent().fadeOut('300');
});
