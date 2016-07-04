$(document).ready(function(){
	$('#product_intro').hover(function() {
		$('#subproduct_intro').show();
	}, function() {
		$('#subproduct_intro').hide();
	});
	$('#subproduct_intro').mouseover(function(){
		$(this).show();
	});
	$('#subproduct_intro').mouseout(function(event) {
		$(this).hide();
	});
})