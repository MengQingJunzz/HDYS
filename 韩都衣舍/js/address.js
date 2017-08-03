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
//	input框颜色变化
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
	//	所在地区
	$("#distpicker2").distpicker({
			  province: "---- 所在省 ----",
			  city: "---- 所在市 ----",
			  district: "---- 所在区 ----"
	})
	//点击添加新地址
	$('.user-right h1 span').click(function(){
		$('.add-address').css('display','block');
	})
	$('.add-address .p1 span').hover(function(){
		$(this).css({background:' url(img/dia2.jpg) no-repeat right center'});
	},function(){
		$(this).css({background:  'url(img/dialog_close_button.png) no-repeat right bottom'});
	})
	$('.add-address .p1 span').click(function(){
		$('.add-address').css('display','none');
	})
	$('.close-btn').click(function(){
		$('.add-address').css('display','none');
	})
//	点击确定按钮
	$('.save-btn').click(function(){
		$('.warm-tip').css('display','block');
		if (!/^[1-3]\d{10}$/.test($(".phone").val())) {
			$('.warm-tip .tip-info .p2').html("");
			$('.warm-tip .tip-info .p2').html("你输入的手机号格式不正确");
		}
		if (!/^\d{17}(\d|X)$/.test($(".ID").val())) {
			$('.warm-tip .tip-info .p2').html("");
			$('.warm-tip .tip-info .p2').html("你输入的身份证格式不正确");
		}
		if($('.name').val() == '' ){
			$('.warm-tip .tip-info .p2').html("");
			$('.warm-tip .tip-info .p2').html("请填写收货人");
		}
		if($('#distpicker2').html() == ''){
			$('.warm-tip .tip-info .p2').html("");
			$('.warm-tip .tip-info .p2').html("请选择地区");
		}
		if($('.address').val() == ''){
			$('.warm-tip .tip-info .p2').html("");
			$('.warm-tip .tip-info .p2').html("请填写详细地址");
		}
		if(/^[1-3]\d{10}$/.test($(".phone").val()) && /^\d{17}(\d|X)$/.test($(".ID").val())
		 	&& $('.name').val() != '' && $('#distpicker2').html() != '' && $('.address').val() != '') {			
		 	
			var _name = $('.name').val();
			var _adress=$('.address').val()
			var _phone = $('.phone').val();
			//动态创建tr和td
			var $tr = $('<tr></tr>');
			var $td1 = $('<td>' + _name + '</td>');
			var $td2 = $('<td>' + _adress + '</td>');
			var $td3 = $('<td>' + _phone + '</td>');
			var $td4 = $("<td class='handle'>"+
				"<strong>设为默认地址</strong>"+
				"<span>"+
				"<a class='a1'>修改</a>"+
				"<a class='a2'>删除</a>"+
				"</span>"+
				"</td>");
			//将td存放到tr中
			$tr.append($td1);
			$tr.append($td2);
			$tr.append($td3);
			$tr.append($td4);
			$('tbody').append($tr);
			$('.warm-tip').css('display','none');
			$('.success-tip').show().delay(1500).fadeOut(300);
			$('.add-address').delay(2000).fadeOut(600);
			//点击设为默认地址
			$('strong').click(function(){
				$('strong').html('设为默认地址').css('font-weight','normal');
				$(this).html('默认地址').css('font-weight','bold');
			})
			//点击修改按钮
			$('.a1').click(function(){
				$('.add-address').css('display','block');
			})
			//	点击删除按钮
			$(".a2").click(function () {
				$(this).parent().parent().parent().remove();
			})
//			if($('.check').prop('checked') == true){
//				$('strong').html('默认地址').css('font-weight','bold');
//			}
		}		 			
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