$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-stand').hide();
		$('.ryu-move').show();
	});
	$('.ryu').mouseleave(function(){
		$('.ryu-move').hide();
		$('.ryu-stand').show();
	});
	$('.ryu').mousedown(function(){
		$('.ryu-move').hide();
		$('.ryu-attack').show();
		$('.hadouken').show().animate(

			);
	});
	$('.ryu').mouseup(function(){
		$('.ryu-attack').hide();
		$('.ryu-move').show();
    $('.hadouken').finish().show()
      .animate(
        {'left': '1020px'},
        500,
        function() {
          $(this).stop();
          $(this).hide();
          $(this).css('left', '560px');
        }
      );
	});
});
