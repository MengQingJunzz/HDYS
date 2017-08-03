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
	// 导航左侧栏js效果 
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
    	
	var a=null;
	var b=null;
	//验证用户名是否正确,电子邮件( xxxxx @ xxxx(.xxxx)+)
    $('#user_name').blur(function(){
    	//获取Cookie	
		var tmpVal = $.cookie('user');
		var tmpJSON = JSON.parse(tmpVal);
        var value=$(this).val();
		if(value == tmpJSON.name){
			$('.errMsg').html('用户名正确').css("display","block");
			a=1;
		}
		if(value != tmpJSON.name){
			$('.errMsg').html('用户名不正确').css("display","block");
		}
  })
     //验证密码，两次密码输入必须一致，密码必须为8-24位字母与数字组合
    $("#rePwd").blur(function() {
    	//获取Cookie	
		var tmpVal = $.cookie('user');
		var tmpJSON = JSON.parse(tmpVal);
		var value=$(this).val();
        if(value!=tmpJSON.password){
           $('.errMsg').html('密码不相等').css("display","block");
        }
        if(value==tmpJSON.password){
           $('.errMsg').html('密码正确').css("display","block");
           b=1;
        }
    })
		
    //验证码的判断   
    $("#code_input").blur(function() {
		var value=$(this).val();
		if ($("#random_code").html() != value){
            $('.errMsg').html('验证码有误').css("display","block");
        }
		if ($("#random_code").html() == value){
          $('.errMsg').html('验证码正确').css("display","block");
      }
		
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
	//获取cookie
		var tmpVal = $.cookie('user');
	    var tmpJSON = JSON.parse(tmpVal);
		$('#user_name').val(tmpJSON.name)
		$('#rePwd').val(tmpJSON.password)
		$('.btn').click(function(){
			if(a==1&&b==1&&$('.remember').prop('checked') == true&&$("#random_code").html() == $("#code_input").val()){
				window.location.href='user.html';
				$('#user_name').val("")
				$('#rePwd').val("")
				$("#code_input").val("")
			
			}else{
				alert("请仔细核对信息")

			}
		})
})
	