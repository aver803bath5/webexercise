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

	$(window).resize(function(event) {
		if ($(window).width()<=768){
			$('#subproduct_intro').css({
				top: '150px',
				left: '140px'
			});
		}else{
			$('#subproduct_intro').css({
				top: '110px',
				left: '355px'
			});
		}
	});
	
	if ($(window).width()<=768) {
		$('#subproduct_intro').css({
				top: '150px',
				left: '140px'
		});
		$('#product_intro').click(function(e) {
				e.preventDefault();
				$('#subproduct_intro').show();
		});
	}

})