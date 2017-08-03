-+$(function() {
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
               $('.search .search-content').html(str);

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

	//注册选项卡
	$(".register-fs a").on("click",function(){
        $(this).removeClass().addClass("telbtn").siblings().removeClass().addClass("mailbtn");
     	$(".reg-msg-container ul").eq($(this).index()).css({display:"block"}).siblings().css({display:"none"});
     	$('.prompt span').eq($(this).index()).css({display:"block"}).siblings().css({display:"none"});
	})
	//验证码的获取
    $(window).load(function(){
        var str="";
        for (var i=0;i<4;i++){
            str += mathFn();
        }
        $("#random_code").html(str);
    });
	//随机得到一个数  得到四个随机的验证码
    function mathFn(){
        var k =parseInt(Math.random()*100)%10;
        return k;
    }
    //验证码的点击事件
    $("#random_code").click(function(){
        var str="";
        for (var i=0;i<4;i++){
            str += mathFn();
        }
        $("#random_code").html(str);
    });
    //验证注册数据是否合法
    function check(rules,str){
        var reg = new RegExp(rules);
        return reg.test(str);
    }  
    var a=null;
    var b=null;
    var c=null;
    var d=null;
    //验证用户名是否正确,电子邮件( xxxxx @ xxxx(.xxxx)+)
    $('#email').blur(function(){
        var value=$(this).val();
        var reg=/^\w+@\w+(\.\w+)+$/;
        if(!check(reg,value)){
        	$(".errMsg").eq(0).html("");
        	$('.errMsg').eq(0).css('background', 'none');
            $('.errMsg').eq(0).html('Email格式不正确').css("display","block");
        }
        if(value==""){
           $(".errMsg").eq(0).html("");
           $('.errMsg').eq(0).css('background', 'none');
           $('.errMsg').eq(0).html('请填写E-mail').css("display","block");
        }
        if(check(reg,value)){
        	$(".errMsg").eq(0).html("");
			$('.errMsg').eq(0).css({
				background:'url(img/reg1.jpg) no-repeat left center',
				display:"block"
			})
        	a=1;
        }
    })
    
    //验证密码，两次密码输入必须一致，密码必须为8-24位字母与数字组合
	$("#pwd").blur(function() {
		var value=$(this).val();
        var reg=/^.{8,24}$/;
        if(!check(reg,value)){
        	$(".errMsg").eq(1).html("");
        	$('.errMsg').eq(1).css('background', 'none');
            $('.errMsg').eq(1).html('密码必须为8-24位字母与数字组合').css("display","block");
        }
        if(value==""){
           $(".errMsg").eq(1).html("");
           $('.errMsg').eq(1).css('background', 'none');
           $('.errMsg').eq(1).html('密码长度不能小于8位').css("display","block");
        }
        if(check(reg,value)){
        	$(".errMsg").eq(1).html("");
        	$('.errMsg').eq(1).css({
				background:'url(img/reg1.jpg) no-repeat left center',
				display:"block"
			})
        	b=1;
        }   
   })
	//再次输入密码
	$("#rePwd").blur(function() {
		var value=$(this).val();
		if ($("#pwd").val() != value){
			$(".errMsg").eq(2).html("");
			$('.errMsg').eq(2).css('background', 'none');
            $('.errMsg').eq(2).html('两次输入的密码不一致').css('display','block');
        }
		if(value == ""){
		   $(".errMsg").eq(2).html("");
		   $('.errMsg').eq(2).css('background', 'none');
           $('.errMsg').eq(2).html('密码长度不能小于8位').css("display","block");
        }
		if($("#pwd").val() == value && value != ''){
			$(".errMsg").eq(2).html("");
			$('.errMsg').eq(2).css({
				background:'url(img/reg1.jpg) no-repeat left center',
				display:"block"
			})          
			c=1;
       } 		
	})
	//验证码的判断
	$("#code_input").blur(function() {
		var value=$(this).val();
		if(value==""){
			$(".errMsg1").eq(0).html("");
			$('.errMsg1').eq(0).css('background', 'none');
           $('.errMsg1').eq(0).html('请输入验证码').css("display","block");
        }
		if ($("#random_code").html() != value){
			$(".errMsg1").eq(0).html("");
			$('.errMsg1').eq(0).css('background', 'none');
            $('.errMsg1').eq(0).html('验证码有误').css('display','block');
        }
		if ($("#random_code").html() == value){
			$(".errMsg1").eq(0).html("");
            $('.errMsg1').eq(0).css({
				background:'url(img/reg1.jpg) no-repeat left center',
				display:"block"
			}) 
            d=1;
        }
		
	})

		//cookie的设置
		$('.register-list-submit').click(function(){
			if(a==1&&b==1&&c==1&&d==1&&$('.register-list-protocol').find('.accept').prop('checked')==true){
				alert('恭喜您注册成功');
				var tmpJSON = {
				id:'user',
				name:$('#email').val(),
				password:$('#pwd').val()
			};
			var tmpStr = JSON.stringify(tmpJSON);
			$.cookie("user",tmpStr,{expires:30});
				window.location.href="login.html"
			}else{
				$(".errMsg").eq(0).html("");
				$('.errMsg').eq(0).css('background', 'none');
				$('.errMsg').eq(0).html('请完善信息').css("display","block");
			}
		})


})