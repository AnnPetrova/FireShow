var main = function() {
	

	/*$('#donebut').click(function() {
		var showcase = $("#showcase");
		showcase.fadeIn( 1500 );
		
		$('.container').removeClass('animated zoomIn');
  		$('.container').addClass('animated zoomOut');
  		$('.done').removeClass('animated zoomOut');
  		$('.done').addClass('animated zoomIn');
  		$('.done').css({"z-index":"2"});
  		$('.zoomIn').css({"-webkit-animation-delay": "1s",
    "animation-delay": "1s"});
  		$('.zoomOut').css({"-webkit-animation-delay": "0s",
    "animation-delay": "0s"});
  		
	})*/

	/*$('#prevbut').click(function() {
		$('.container').removeClass('animated zoomOut');
		$('.container').addClass('animated zoomIn');
		$('.wrap').removeClass('animated zoomIn');
		$('.wrap').addClass('animated zoomOut');
		//$('.done').css({"z-index":"0"});
		//$('.donik').removeClass('animated zoomIn');
		//$('.donik').addClass('animated zoomOut');
		//$('.donik').css({"z-index":"0"});
		$('.zoomIn').css({"-webkit-animation-delay": "1s",
    "animation-delay": "1s"});
		$('.zoomOut').css({"-webkit-animation-delay": "0s",
    "animation-delay": "0s"});
	});*/

$('#donebut').click(function() {
	$('.wrap1').fadeIn(500);
	$('.content').animate({'opacity' : '0'}, 500);
	$('.contentik').animate({'opacity' : '0'}, 500);
	$('.contenti').animate({'opacity' : '0'}, 500);
	$('#donebut').animate({'opacity' : '0'}, 500);
})


	
}

$(document).ready(main);