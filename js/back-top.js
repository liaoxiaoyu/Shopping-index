$(function(){

	// 实现返回顶部

	var backButton=$('.back-top');

	backButton.on('click',function(){
		$('html,body').animate({
			scrollTop:0
		},800)
	})

	$(window).on('scroll',function(){
		if($(window).scrollTop()>$(window).height()){
			backButton.fadeIn();
		}else{
			backButton.fadeOut();
		}
	})

	$(window).trigger('scroll');
})