$(function(){
	
	// 定义文档加载第一张图片显示
	$('.imgBox li').eq(0).show();

	// 实现图片切换
	$('.num li').mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');

		var index=$(this).index();
		i=index;
		$('.imgBox li').eq(index).fadeIn().siblings().fadeOut();
	})

	var i=0;

	// 定时器实行自动轮播
	var t=setInterval(move,1500)

	// 封装函数
	function move(){
		i++;
		if(i==4){
			i=0;
		}
		$('.num li').eq(i).addClass('active').siblings().removeClass('active');
		$('.imgBox li').eq(i).fadeIn().siblings().fadeOut();
	}

	// 向左移动
	function moveL(){
		i--;
		if(i==-1){
			i=3;
		}
		$('.num li').eq(i).addClass('active').siblings().removeClass('active');
		$('.imgBox li').eq(i).fadeIn().siblings().fadeOut();
	}

	// 鼠标放进容器 自动切换停止
	$('.banner_bar').hover(function(){
		clearInterval(t)
	},function(){
		t=setInterval(move,1500);
	})


	// 左右切换功能实现
	$('.banner_bar .left').click(function(){
		moveL();
	})

	$('.banner_bar .right').click(function(){
		move();
	})

})