$(document).ready(function() {

	// $("video").css('opacity', 0).animate( { opacity: 1 }, 'fast');

	$('#video-background').bind('ended', function(){
	   $(this).fadeOut(2000);
	});

});