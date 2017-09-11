$(document).ready(function() {

	// $("video").css('opacity', 0).animate( { opacity: 1 }, 'fast');

	$('video').bind('ended', function(){
	   $(this).fadeOut(2000);
	});

});