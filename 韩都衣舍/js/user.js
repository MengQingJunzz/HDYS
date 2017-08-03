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
//	出生日期
	$.ms_DatePicker({
            YearSelector: ".sel_year",
            MonthSelector: ".sel_month",
            DaySelector: ".sel_day"
    })
//	所在地
	$("#distpicker2").distpicker({
			  province: "---- 所在省 ----",
			  city: "---- 所在市 ----",
			  district: "---- 所在区 ----"
	})
	
//	保存后的弹框
	function check(rules,str){
        var reg = new RegExp(rules);
        return reg.test(str);
    }  
	$('.btn').click(function() {
		var value=$('.email').val();
        var reg=/^\w+@\w+(\.\w+)+$/;
        if(!check(reg,value)){
            $(".errMsg1").show().delay(2000).hide(300);
        } else {
        	$(".errMsg2").show().delay(2000).hide(300);
        }
	})
	$('.change').click(function(){
		$('.screen').css('display','block');
		$('.dialog').css('display','block');
	})
	$('.dialog h3 span').click(function(){
		$('.screen').css('display','none');
		$('.dialog').css('display','none');			
	})
	$('.dialog h3 span').hover(function(){
		$(this).css({background:' url(img/dia2.jpg) no-repeat right center'});
	},function(){
		$(this).css({background:' url(img/dia1.jpg) no-repeat right center'});
	})
	$('.sub').click(function(){
		var _val=$('.choose').val();
		$(".imgface").attr("src", "img/"+_val); 
	})
	$('.password').click(function(){
		window.location.href='password.html';
	})
	$('.ad').click(function(){
		window.location.href='address.html';
	})

	
	
})
