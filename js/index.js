$(function(){
	$('.nav').hover(
		function(){
			$(this).animate({
				left: 0
			},1000);
			$('.container').animate({
				left: 200,
				transform: 'rotate(30deg)'
			},1000);
		},
		function(){
			$(this).animate({
				left: -190
			},1000)
			$('.container').animate({
				left: -10,
				transform: 'rotate(0deg)'
			},1000)
		}
	)
})