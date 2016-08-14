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
	$('#dorm-contain').hide();
	$('#map-contain').hide();


	var dorm_contain = document.getElementById('dorm-contain');
	var map_contain = document.getElementById('map-contain');

	$('#dorm').click(function(event) {
		/* Act on the event */
		if(map_contain.style.display == "block") {
			$('#map-contain').slideUp(500);
			$('#dorm-contain').wait(650).slideDown(500);
		}else{
			$('#dorm-contain').slideToggle(500);
		}
	});

	$('#map').click(function(event) {
		/* Act on the event */
		if(dorm_contain.style.display == "block") {
			$('#dorm-contain').slideUp(500);
			$('#map-contain').wait(650).slideDown(500);
		}else{
			$('#map-contain').slideToggle(500);
		}
	});

	var contain_element = document.getElementById('dorm-contain').children;

	for (var i = 0; i < contain_element.length; i++) {
		var contain_title = contain_element[i].children;
		$(contain_title[1]).hide();
	}

	for (var i = 0; i < contain_element.length; i++) {
		var contain_title = contain_element[i].children;
		$(contain_title[0]).click(function(event) {
			/* Act on the event */
			console.log(this);
			$(this).next().slideToggle(500);
		});
	}
});