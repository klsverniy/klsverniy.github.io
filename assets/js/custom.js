$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(2500);
	
	$("a.hewo").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(2500, redirectPage);		
	});
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
