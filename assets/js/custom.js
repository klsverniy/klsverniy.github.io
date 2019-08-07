$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(3000);
	
	$("a.hewo").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(2000, redirectPage);		
	});
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
