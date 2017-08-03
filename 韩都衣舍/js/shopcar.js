$(function(){
	//网站导航隐藏显示
	$('#site-nav-display').mouseenter(function () {
		$(this).find('.site-nav').css('display','block');
	})
	$('#site-nav-display').mouseleave(function () {
		$(this).find('.site-nav').css('display','none');
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
		    if(t>450){
		    $("#float-right").fadeIn();
		    } else {
		    	$("#float-right").hide();
		    }
		})
		$('#float-right .five').click(function(){
		    $("html, body").animate({'scrollTop':0},320);
	})
//	移除购物车商品	
	$('.div5 .a2').click(function(){
		$(this).parent().parent().parent().remove();
	})
	
	//cookie
    var str = document.cookie;
//  console.log(str);
    //getCookie
    function getCookie(name){
        var str = document.cookie;
        var arr = str.split("; ");
        for(var i = 0; i < arr.length; i++) {
            var address = arr[i].indexOf("=");
            var name1 = arr[i].slice(0,address);
            var value = arr[i].slice(address+1);
            if(name == name1){ 
               return value;
            }
        }
          return;
    }
	var amount = getCookie("cartNum");//调用cookie,amount是随意命的名，此处代表购买的数量
	$(".div3 input").val( amount || num);//input中的购买数量
	$(".div4 span").html(389*amount );	//小计,有BUG只能计算从商品详情页中加入的小计
	$('td b').html(389* amount);
	$('td span').html( amount);
	$('.sum b span').html(389* amount - 50);//满减

})
