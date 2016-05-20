$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});

	$("#countdown").countdown({
			date: "01 january 2016 15:00:00",
			format: "on"
		},
		
		function() {
			// callback function
		});
});