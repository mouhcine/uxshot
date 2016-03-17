$(document).ready(function(){

	// tracking

	$('#button-suggest_a_shot').on('click', function() {
  		ga('send', 'event', 'Link', 'click', 'Suggest a Shot');
	});

});
