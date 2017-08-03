$(function() {
	//	搜索
	var arrCont = [];
    $('.search .txt').keyup(function(){
        $('.search .search-content').show();
        var text =  $('.search .txt').val();
        $.getJSON(
            "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+text+"&cb=?",
            function(data) {
                arrCont = data.s;
                var str = '';
                for(var i = 0;i<arrCont.length; i++ ){
                    console.log(arrCont[i]);

                    str += '<li>' + arrCont[i] + '</li>'

                }
               $('.search .search-content').html('');
                $('.search .search-content').append(str);
            }
        )
    });

   	$('.search .txt').blur(function(){
        $('.search .search-content').hide();
   	})
	//网站导航隐藏显示
	$('#site-nav-display').mouseenter(function () {
		$(this).find('.site-nav').css('display','block');
	})
	$('#site-nav-display').mouseleave(function () {
		$(this).find('.site-nav').css('display','none');
	})	
	
	$('.index-nav-fr li').mouseenter(function () {
		$(this).find('ul').css('display','block');
	})
	$('.index-nav-fr li').mouseleave(function () {
		$(this).find('ul').css('display','none');
	})

	// 导航左侧栏js效果 start
	$('.goods').mouseenter(function () {
		$(this).find('.list').stop().fadeIn();
	})
	$('.goods').mouseleave(function () {
		$(this).find('.list').stop().fadeOut();
	})
	$('.list .aaa').hover(function() {
		$(this).children('.list-hide').stop().fadeIn();
	},function() {
		$(this).children('.list-hide').stop().fadeOut();
	})
//	放大镜
	$('.glass-left .small-pic li').click(function(){
		$(this).addClass("show").siblings().removeClass("show");
		$(".bigPad>li:eq("+$(this).index()+")").addClass("active").siblings().removeClass("active");
		$(".zoomWindow-con>li:eq("+$(this).index()+")").addClass("active").siblings().removeClass("active");
	})
//显示隐藏效果
	$(".big-pic").hover(function(){		
		$(".control").css({display:"block"});
		$(".zoomWindow").fadeIn();
	},function(){
		$(".control").css({display:"none"});
		$(".zoomWindow").fadeOut();
	})

	$(".big-pic").on("mousemove",function(){
		var iLeft=event.clientX-$(".big-pic").offset().left-$(".control").width()/2;
		var	iTop=event.clientY-$(".big-pic").offset().top-$(".control").height()/2+$(window).scrollTop();
			
		// 左侧范围做限定
		if(iLeft < 0) {
			iLeft = 0;
		}
		// 顶侧范围做限定
		if(iTop < 0) {
			iTop = 0;
		}
		// 右侧范围做限定
		if(iLeft > $(".big-pic").width() - $(".control").width()) {
			iLeft = $(".big-pic").width() - $(".control").width();
		}
		// 下侧范围做限定
		if(iTop >  $(".big-pic").height() - $(".control").height()) {
			iTop = $(".big-pic").height() - $(".control").height();
		}
		//遮罩层位置
		$(".control").css({left:iLeft,top:iTop});
		var imgLeft=-iLeft;
		var imgTop=-iTop;
		$(".zoomWindow-con").find('img').css({left:imgLeft,top:imgTop});
		
	})
		//商品详情
	$('.detail-nav .ulnav li').click(function(){
		$(this).addClass("show").siblings().removeClass("show");
		$(".detail-pic>div:eq("+$(this).index()+")").addClass("active").siblings().removeClass("active");
	})
	
	//加的效果
	$(".add").click(function(){
		var n=$(this).prev().val();
		var num=parseInt(n)+1;
		if(num==0){ return;}
		$(this).prev().val(num);
	});
	//减的效果
	$(".jian").click(function(){
		var n=$(this).next().val();
		var num=parseInt(n)-1;
		if(num==0){ return}
		$(this).next().val(num);
	})
	//右侧悬浮菜单
	$(window).scroll(function(){
		    var t = document.documentElement.scrollTop||document.body.scrollTop;
		    if(t>250){
		    $("#float-right").fadeIn();
		    } else {
		    	$("#float-right").hide();
		    }
		})
		$('#float-right .five').click(function(){
		    $("html, body").animate({'scrollTop':0},320);
	})
		$('.div1 li').click(function() {
			$(this).addClass('show').siblings().removeClass('show');
			$('.tip b').text($(this).text());
		})
		$('.div2 img').click(function() {
			$(this).toggleClass('show');
			$('.tip i').text('黑色');
		})
			//吸顶
	$(document).scroll(function() {
		if($(document).scrollTop() >800){
			$('#Mounting-box').css({
				position:'fixed',
				top:0,
				display:'block'
			})
		} else {
			$('#Mounting-box').css({
				position:'absolute',
				top:'700px',
				display:'none'
			})
		}
	})
		
//		cookie
	$('.div4 .a2').click(function () {
	    var cartNum = $('.num').val();
	    document.cookie="cartNum="+cartNum+";path=/";
	    //document.cookie="username="+userName+";path=/";
	})


	

})
