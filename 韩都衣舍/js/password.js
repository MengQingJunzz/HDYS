$(function(){
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
    
//  左侧菜单栏折叠部分
	$('.menu dt').click(function(){
		if($(this).next().is(':hidden')){
			$(this).removeClass('show');
			$(this).next().show();
		} else {
			$(this).addClass('show');
			$(this).next().hide();
		}		
	})
//	修改密码框
	$('.item .right input').focus(function(){
		$(this).css({
			border:"1px solid #000"
		})
	})
	$('.item .right input').blur(function(){
		$(this).css({
			border:"1px solid #ddd"
		})
	})
//	点击保存按钮
	$('.save-btn').click(function(){
		$('.warm-tip').css('display','block');
	})
	$('.p3').click(function(){
		$('.warm-tip').css('display','none');
	})
	$('.warm-tip .p1 span').click(function(){
		$('.warm-tip').fadeOut(600);
	})
	$('.warm-tip .p1 span').hover(function(){
		$(this).css({background:'url(img/off6.jpg) no-repeat right center'})
	},function(){
		$(this).css({background:'url(img/off5.jpg) no-repeat right center'})
	})
	
	$('.save-btn').click(function(){
		var tmpVal = $.cookie('user');
	    var tmpJSON = JSON.parse(tmpVal);
	    
	    if($('.old-pwd').val() != tmpJSON.password){
	    	$('.warm-tip .tip-info .p2').html("");
			$('.warm-tip .tip-info .p2').html("原密码不正确");
	    }
		if (!/^.{8,24}$/.test($(".new-pwd").val())) {
			$('.warm-tip .tip-info .p2').html("");
			$('.warm-tip .tip-info .p2').html("新密码的长度不能小于8位");
		}
		if($(".rePwd").val() != $(".new-pwd").val()){
			$('.warm-tip .tip-info .p2').html("");
			$('.warm-tip .tip-info .p2').html("输入的新密码与确认密码不一致");
		}
		if($(".rePwd").val() == $(".new-pwd").val() && $(".rePwd").val()!="" 
			&& $('.old-pwd').val() == tmpJSON.password){
			$('.warm-tip .tip-info .p2').html("");
			$('.warm-tip .tip-info .p2').html("修改成功");
		}
	})
	

//	拖拽
	//鼠标的按下事件
	$('.p1').mousedown(function(evt){
		//获取鼠标距离div的左边和上边的值
		var x = evt.offsetX,y = evt.offsetY;
		$(document).bind('mousemove',function(evt){
			$('.warm-tip').css('left',evt.clientX - x + "px");
			$('.warm-tip ').css('top',evt.clientY - y + "px");
		});					
		$(document).bind('mouseup',function(){
			$(document).unbind('mousemove');
		});
	})
	
	
})
