
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

		//吸顶
	$(document).scroll(function() {
		if($(document).scrollTop() >900){
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
		
//banner轮播图
	var $index=0;
	var oBannerTimer=null;
	$(".banner-nav li").eq(0).addClass("active");
	$(".banner-pic li").eq(0).fadeIn(1000);
	function bannermove(index){
			
		$(".banner-nav li").eq(index).addClass("active").siblings().removeClass("active");
		$(".banner-pic li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		
	}
	//自动轮播
	oBannerTimer=setInterval(function(){		
		$index++;
		if($index==4){
			$index=0;
		}
		bannermove($index);		
	},2000);
	//鼠标悬停
	$("#banner").hover(
		function(){
			clearInterval(oBannerTimer);
		},
		function(){
			oBannerTimer=setInterval(function(){
				$index++;
				if($index==4){
					$index=0;
				}
				bannermove($index);				
			},2000);
		}
	);
	//轮播导航鼠标滑过时间
	$(".banner-nav li").on("mouseenter",function(){
		bannermove($(this).index());	
	})
	
	//换一批
	var index_01 = 0;
	var llength = $(".firstp").length;
	var imge = $(".hd-msg-left .firstp");
		imge.hide();
		imge.eq(0).show();	
	$(".change").click(function(){
	//点击换一批的时候自动轮播暂时停用
	    clearInterval(timer_01);
	    index_01++;
		if (index_01 < llength) {
			imge.hide();
			imge.eq(index_01).show();		
		}else{
			index_01 = 0;
			imge.hide();
			imge.eq(index_01).show();		
		}	
	})
	// 换一批 鼠标滑过 切换图片
	$('.firstp ul li').hover(function(){
		$(this).children('img').toggle()
	})

	//自动轮播方法	
	function autoRun(){
		if(index_01 < llength-1){
			index_01 = index_01+1;
		}else{
			index_01 = 0;
		}		
		imge.hide();
		imge.eq(index_01).show();
	}
	var timer_01 = setInterval(autoRun,5000);
	$(".firstp ul li").hover(function(){
		clearInterval(timer_01);
	},function(){
		timer_01 = setInterval(autoRun,5000);
	})	
	
	//选项卡
	$('.hd-msg-right ul li').mouseenter(function() {
		$(this).addClass("show").siblings().removeClass("show");
		//注意此处的>千万不能忘
        $("#tab>div:eq("+$(this).index()+")").addClass("active").siblings().removeClass("active");
	})

	//新品上市轮播图
	var $index1=0;
	var oTimer=null;
	$(".list-nav li").eq(0).addClass("show");
	$(".new-list-con ul").eq(0).fadeIn(1000);
	function arrivalmove(index){
		
		$(".list-nav li").eq(index).siblings().removeClass("show");
		$(".new-list-con ul").eq(index).siblings().fadeOut(1000);
		
		
		$(".list-nav li").eq(index).addClass("show");
		$(".new-list-con ul").eq(index).fadeIn(1000);
		
	}
	//自动轮播
	oTimer=setInterval(function(){		
		$index1++;
		if($index1==5){
			$index1=0;
		}
		arrivalmove($index1);
		
	},2000);
	//鼠标悬停
	$("#new-list").hover(
		function(){
			clearInterval(oTimer);
		},
		function(){
			oTimer=setInterval(function(){
				$index1++;
				if($index1==5){
					$index1=0;
				}
				arrivalmove($index1);
				
			},2000);
		}
	);
	//轮播导航鼠标滑过时间
	$(".list-nav li").on("mouseenter",function(){
		arrivalmove($(this).index())
	
	})
	
	// 导航左侧栏js效果 
	
	$('.goods').mouseenter(function () {
		$(this).find('.list').stop().fadeIn();
	})
	$('.goods').mouseleave(function () {
		$(this).find('.list').css('display','block');
	})
	$('.list .aaa').hover(function() {
		$(this).children('.list-hide').stop().fadeIn();
	},function() {
		$(this).children('.list-hide').stop().fadeOut();
	})

//热销排行榜选项卡
	$('.l1').hover(function() {
		$(this).children('.p1').addClass("hide");
		$(this).children('.u2').addClass("active");
		$(this).siblings().children('.p1').removeClass('hide');
		$(this).siblings().children(".u2").removeClass('active');
	})
	
//尾部友情链接
	$("#friend-links").append($("#friend-links").html());
	var speed = 1;
	var timer1 = setInterval(moveLeft,30);
	function moveLeft(){
		if ($("#ul-wraper").scrollLeft() >= $("#friend-links").innerWidth()/2) {
			$("#ul-wraper").scrollLeft(0);
		}else if($("#ul-wraper").scrollLeft() <= 0){
			$("#ul-wraper").scrollLeft($("#friend-links").innerWidth()/2);
		}
		$("#ul-wraper").scrollLeft($("#ul-wraper").scrollLeft() + speed);
	}
	$("#ul-wraper").hover(function () {
		clearInterval(timer1);
	},function () {
		timer1 = setInterval(moveLeft,30);
	})	
	//右侧悬浮菜单
	$(window).scroll(function(){
		    var t = document.documentElement.scrollTop||document.body.scrollTop;
		    if(t>700){
		    $("#float-right").fadeIn();
		    } else {
		    	$("#float-right").hide();
		    }
		})
		$('#float-right .five').click(function(){
		    $("html, body").animate({'scrollTop':0},320);
	})
	
})