$(function(){
	$('.shopclass_show > .showclass_item').hover(function(){
		var eq=$('.shopclass_show > .showclass_item').index(this);
			h=$('.shopclass_show').offset().top();
			i=$(this).offset().top();
			item=$(this).children('.sub').height();
			sort=$('.shopclass_show').height();
			
		if(item<sort){
			if(eq==0){
				$(this).children('sub').css('top','i-h');
			}else{
				$(this).children('sub').css('top','i-h1'+1);
			}
			
			$(this).addClass(hover);
			$(this).children('sub').css('display','block');
		}
	},function(){
		$(this).removeClass(hover);
		$(this).children('sub').css('display','none');
	})
})
