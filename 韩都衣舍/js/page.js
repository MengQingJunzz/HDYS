$(function(){
	//存放所有的商品
	var productData = [];
	//每页的显示的行数
	var pageRows = 16;
	
	var $proList = $('#main ul');
	$.get("json/product.json",function(res){
//		console.log(res.length);

		productData = res;
		//计算总页数
		var pageCount = Math.ceil(productData.length / pageRows);
//		alert(pageCount);
		
		addData(1);  //显示第一页的数据   ：10条
		
		$('.pages').createPage({
			pageCount:pageCount,
			current:1,
			backFn:function(page){
				addData(page);
			}
		})
	})
	
	function addData(page){
		var iNum = (page - 1) * pageRows;
		var str = '';
		for(var i = 0;i < pageRows;i++){
			if(!productData[iNum + i]){
				break;
			}
			
			str += '<li>'+
						'<a href="">' + '<img src="'+productData[iNum + i].imgSrc+'" />'+'</a>'+
						'<p >'+ '<b>￥' + productData[iNum + i].price + '</b>' +
						'<span>$'+ productData[iNum + i ].sellNum+'</span></p>'+
						'<div class="addCart">' + productData[iNum + i ].addTo + '</div>' +
						'<input type="hidden" value=" '+ productData[iNum + i].ID+' "/>'+
					'</li>';
		}
		$proList.html(str);
		
		//将商品信息存放到cookie中
//		$(document).on('click',".addCart",function () {
//			//获取商品ID
//			var id = $(this).next().val();
//			//console.log(id)
//			//获取商品图片
//			var imgPath = $(this).prev().prev().children(0).attr("src");
//			//获取商品名称
//			//console.log(imgPath)
////			var goodsName = $(this).prev().prev().prev().prev().children("a").text();
//			//console.log(goodsName)
//			//获取商品价格
//			var price = $(this).prev().children("b").text();
//			var sellNum = $(this).prev().children("span").text();
//			//console.log(price)
//			var count = 1;
//			//console.log(count)
//			//存放
//			new CartHelper().Add(id,count, price,sellNum, imgPath);
//		})
	}
	
		
//	分页图片
	$('#main ul').on("mouseenter","li",function() {
		$(this).css('border-color','#CD0F35');
		$("#main ul li>.addCart:eq("+$(this).index()+")").css('display','block');
	})
	$('#main ul').on("mouseleave","li",function() {
		$(this).css('border-color','#DDDDDD');
		$("#main ul li>.addCart:eq("+$(this).index()+")").css('display','none');
	})
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
		    if(t>300){
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
	
//	导航特效
	$('.sort-set li').hover(function() {
		$(this).addClass('active').siblings().removeClass('active');
	},function() {
		$(this).removeClass('active');
	})	
	$('.price-select').click(function(){
		$('.btn').css('display','block');
	})
	$('.btn .clear').click(function(){
		$('.price-select input').val('');		
	})
	$('.btn .yes').click(function(){
		$('.price-select input').val();
		$('.btn').css('display','none');
	})
	
	//左侧微信
	$(window).scroll(function(){
		    var t = document.documentElement.scrollTop||document.body.scrollTop;
		    if(t>700){
		    $("#float-left").fadeIn();
		    } else {
		    	$("#float-left").hide();
		    }
		})	
		
	
})
