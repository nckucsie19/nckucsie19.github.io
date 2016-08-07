$(document).ready(function() {
	var contain_left_data = [
		0,1200,2400,3600,4800,6000,7200,8400
	];

	var contain_height_data = [
		1000, 1500, 1100, 1100, 1620 ,1100, 570, 570
	];

	var cur = 0;

	function left_slide () {
		var contain = document.getElementById('team-contain').children;
		if(cur != 0) {
			cur = cur - 1;
			for (var i = 0; i < contain.length; i++) {
				contain_left_data[i] = contain_left_data[i] + 1200;
			}
			for (var i = 0; i < contain.length; i++) {
				$(contain[i]).animate({left: contain_left_data[i]}, 500);
			}
			$('#team-contain').animate({height: contain_height_data[cur]}, 500);
		}
	}

	function right_slide (speed) {
		var contain = document.getElementById('team-contain').children;
		if(cur != 7) {
			cur = cur + 1;
			for (var i = 0; i < contain.length; i++) {
				contain_left_data[i] = contain_left_data[i] - 1200;
			}
			for (var i = 0; i < contain.length; i++) {
				$(contain[i]).animate({left: contain_left_data[i]}, speed);
			}
			$('#team-contain').animate({height: contain_height_data[cur]}, speed);
		}
	}

	$('#left-button').click(function(event) {
		/* Act on the event */
		left_slide();
	});
	$('#right-button').click(function(event) {
		/* Act on the event */
		right_slide(500);
	});

	var button_contain = document.getElementById('contain').children;
	for (var i = 0; i < button_contain.length; i++) {
		$(button_contain[i]).click(function(event) {
			/* Act on the event */
			$('#contain').slideUp(500);
			$('#team-contain').slideDown(500);
		});
	}
	//I have no idea, so do it for 7 times
	$(button_contain[1]).click(function(event) {
		/* Act on the event */
		right_slide(250);
		right_slide(250);
	});

	$(button_contain[2]).delay(500).click(function(event) {
		/* Act on the event */
		right_slide(125);
		right_slide(125);
		right_slide(125);
		right_slide(125);
	});

	$(button_contain[3]).click(function(event) {
		/* Act on the event */
		right_slide(83);
		right_slide(83);
		right_slide(83);
		right_slide(83);
		right_slide(83);
		right_slide(83);
	});

	$(button_contain[4]).click(function(event) {
		/* Act on the event */
		right_slide(500);
	});

	$(button_contain[5]).click(function(event) {
		/* Act on the event */
		right_slide(166);
		right_slide(166);
		right_slide(166);
	});

	$(button_contain[6]).click(function(event) {
		/* Act on the event */
		right_slide(100);
		right_slide(100);
		right_slide(100);
		right_slide(100);
		right_slide(100);
	});

	$(button_contain[7]).click(function(event) {
		/* Act on the event */
		right_slide(71);
		right_slide(71);
		right_slide(71);
		right_slide(71);
		right_slide(71);
		right_slide(71);
		right_slide(71);
		right_slide(71);
	});
});