$(document).ready(function() {
	var contain_element = document.getElementById('contain').children;

	for (var i = 1; i < contain_element.length; i++) {
		var contain_title = contain_element[i].children;
		$(contain_title[1]).hide();
	}

	for (var i = 1; i < contain_element.length; i++) {
		var contain_title = contain_element[i].children;
		$(contain_title[0]).click(function(event) {
			/* Act on the event */
			console.log(this);
			$(this).next().slideToggle(500);
		});
	}
});