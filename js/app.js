$(document).ready(function(){
	$(document).keydown(function(e){
		if (e.keyCode == 88) {
			$('.ryu-stand').hide();
			$('.ryu-move').hide();
			$('.ryu-cool').show();
		};
	}).keyup(function(e){
		if (e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-stand').show();
		};
	});
	$('.ryu').mouseenter(function(){
		$('.ryu-stand').hide();
		$('.ryu-move').show();
	});
	$('.ryu').mouseleave(function(){
		$('.ryu-move').hide();
		$('.ryu-stand').show();
	});
	$('.ryu').mousedown(function(){
		$('.ryu-stand').hide();
		$('.ryu-move').hide();
		$('.ryu-attack').show();
		$('.hadouken').show();
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
