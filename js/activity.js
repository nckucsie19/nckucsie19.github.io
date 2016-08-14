$.fn.wait = function(time, type) {
        time = time || 1000;
        type = type || "fx";
        return this.queue(type, function() {
            var self = this;
            setTimeout(function() {
                $(self).dequeue();
            }, time);
        });
    };


$(document).ready(function() {
	var before_banner = document.getElementById('head-contain').children;
	console.log(before_banner);
	for (var i = 0; i < before_banner.length; i++) {
		$(before_banner[i]).click(function(event) {
			/* Act on the event */
			for (var j = 0; j < before_banner.length; j++) {
				if(before_banner[j] === this) {
					$(before_banner[j]).wait().animate({opacity: 0, "top": "-500px"},500);
				}else{
					$(before_banner[j]).animate({opacity: 0, "top": "-400px"},500);
				}
			}
			$("#contain").wait(1500).animate({"left": "0px"}, 500);
			$("#left-rect").wait(1500).animate({"left": "0px"}, 500);
		});
	}

	var left_rect = document.getElementById('left-rect').children;

	function show_contain(i) {
		var contain = document.getElementById('contain').children;
		for (var j = 1; j < contain.length; j++) {
			if(j == i + 1) {
				$(left_rect[j-1]).animate({width: "100px", "font-size": "20px"}, 500);
				if(contain[j].style.opacity == 0) {
					$(contain[j]).wait(800).animate({opacity: 1}, 500);
				}
			}else {
				$(contain[j]).animate({opacity: 0}, 500);
				$(left_rect[j-1]).animate({width: "50px", "font-size": "15px"}, 500);
			}
		}
	}

	/*-----------this one i have no idea--------------*/
	$(before_banner[0]).click(function(event) {
		/* Act on the event */
		show_contain(0);
	});

	$(before_banner[1]).click(function(event) {
		/* Act on the event */
		show_contain(1);
	});

	$(before_banner[2]).click(function(event) {
		/* Act on the event */
		show_contain(2);
	});

	$(before_banner[3]).click(function(event) {
		/* Act on the event */
		show_contain(3);
	});

	$(before_banner[4]).click(function(event) {
		/* Act on the event */
		show_contain(4);
	});

	$(before_banner[5]).click(function(event) {
		/* Act on the event */
		show_contain(5);
	});

	$(before_banner[6]).click(function(event) {
		/* Act on the event */
		show_contain(6);
	});

	/*-------------the same---------------------*/
	$(left_rect[0]).click(function(event) {
		/* Act on the event */
		show_contain(0);
	});

	$(left_rect[1]).click(function(event) {
		/* Act on the event */
		show_contain(1);
	});

	$(left_rect[2]).click(function(event) {
		/* Act on the event */
		show_contain(2);
	});

	$(left_rect[3]).click(function(event) {
		/* Act on the event */
		show_contain(3);
	});

	$(left_rect[4]).click(function(event) {
		/* Act on the event */
		show_contain(4);
	});

	$(left_rect[5]).click(function(event) {
		/* Act on the event */
		show_contain(5);
	});

	$(left_rect[6]).click(function(event) {
		/* Act on the event */
		show_contain(6);
	});

	/*---------------------------------------------*/
});