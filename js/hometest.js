function init () {
	$("#Box1").click(function(){
		$("#Box1").css("background-color","pink");
	});

	$(".box-2").click(function(){
		$(this).toggleClass("togAct");
		$("h2").text("What's up bitch");
	});

	var x = document.getElementsByClassName("demo");
	for (var i = 0; i < x.length; i++) {
		x[i].innerHTML = " Test about how add text by js..";
	}

	/* Sticky Header*/

	$(window).scroll(function() {
		if ($(this).scrollTop() > 50){  
			$('header').addClass("sticky");
		}
		else{
			$('header').removeClass("sticky");
		}
	});

	/* End of Sticky Header */


}

$(document).ready(function(){
	init();
});

