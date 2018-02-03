var log = console.log.bind(console);
$(document).ready(function() {
    $("input#inputSearch").focus(function(event) {
        $(this).addClass("focus");
        if ($(this).val() == this.defaultValue) { $(this).val(""); }
    }).blur(function(event) {
        $(this).removeClass('focus');
        if ($(this).val() == "") { $(this).val(this.defaultValue); }
    }).keyup(function(event) {
        if (event.which == 13) { alert("回车提交表单"); }
    });
});
$(document).ready(function() {
    var $li = $("#skin li");
    $li.click(function(event) {
        $(this).addClass('selected')
            .siblings().removeClass('selected');
        $("#cssfile").attr('href', 'styles/skin/' + this.id + '.css');
    });
});
$(document).ready(function() {
    $(".nav li").hover(function() {
        $(this).find('.jnNav').show();
    }, function() {
        $(this).find('.jnNav').hide();
    });
});
$(document).ready(function() {
    $(".jnCatainfo .promoted").append('<span class="hot"/>');
});
$(document).ready(function() {
    var $imgrolls = $("#jnImageroll");
    var $rolllist = $imgrolls.find('div a');
    var index = 0;
    $rolllist.css("opacity", "0.7");
    $rolllist.mouseover(function(event) {
        showImg($(this).index());
    }).eq(0).mouseover();
    $("#jnImageroll").hover(function() {
        if (this.adTimer) { clearInterval(this.adTimer); }
    }, function() {
        this.adTimer = setInterval(function(argument) {
            showImg(index);
            index++;
            if (index == $rolllist.length) { index = 0; }
        }, 5000)
    }).trigger('mouseleave');

    function showImg(index) {
        var imgList = $("#JS_imgWrap img");
        var newhref = $rolllist.eq(index).attr("href");
        $("#JS_imgWrap").attr("href", newhref)
        $rolllist.eq(index).addClass('chos').css("opacity", "1").siblings().removeClass('chos').css("opacity", "0.7");
        imgList.eq(index).fadeIn().siblings().fadeOut();
    }
});
$(document).ready(function() {
    function showBrandList(index) {
        $rollobj = $("#jnBrandList");
        $rollwidth = $rollobj.find('li').outerWidth();
        $rollobj.stop(true, true).animate({ 'left': -$rollwidth * 4 * index }, 1000);

    }
    $("#jnBrand li a").click(function(event) {
        $(this).parent().addClass('chos')
            .siblings().removeClass('chos');
        showBrandList($("#jnBrand li a").index(this));
        return false;
    }).eq(0).click();;
});
// 详情页的产品选项卡
$(document).ready(function() {
    $("div.tab_menu ul li").click(function(event) {
        $(this).addClass('selected').siblings().removeClass('selected');
        $(".tab_box>div").eq($(this).index()).show()
            .siblings().hide();
    });
});
// 尺寸选项卡切换
$(document).ready(function() {
    $(".pro_size ul li").click(function(event) {
        $(this).addClass('cur').siblings().removeClass('cur');
        $(this).parents("ul").siblings('strong').text($(this).text());
    });
});
// 总价
$(document).ready(function() {
    var price = $(".tbDetailPrice strong").text();
    $("#num_sort").change(function(event) {
        $(".pro_price strong").text($(this).val() * price);
    }).change();
});
//星星评级
$(document).ready(function() {
    $(".pro_rating ul li a").click(function(event) {
        var cl = $(this).parent().attr('class');
        $(this).parents("ul").removeClass().addClass('rating ' + cl + 'star');
        return false;
    });
});
/*最终购买输出*/
$(document).ready(function() {
    var $product = $(".jnProDetail");
    $("#cart a").click(function(e) {
        var pro_name = $product.find("h4:first").text();
        var pro_size = $product.find(".pro_size strong").text();
        var pro_color = $(".color_change strong").text();
        var pro_num = $product.find("#num_sort").val();
        var pro_price = $product.find(".pro_price strong").text();
        var dialog = "感谢您的购买。\n您购买的\n产品是：" + pro_name + "；\n" +
            "尺寸是：" + pro_size + "；\n" +
            "颜色是：" + pro_color + "；\n" +
            "数量是：" + pro_num + "；\n" +
            "总价是：" + pro_price + "元。";
        alert(dialog);
        return false; //避免页面跳转
    });
});
//产品颜色切换
$(document).ready(function() {
    $(".color_change ul li img").click(function(event) {
        $(this).addClass('hover').parent("li").siblings().find('img').removeClass('hover');
        var imgSrc = $(this).attr("src");
        var i = imgSrc.lastIndexOf(".");
        var unit = imgSrc.substring(i);
        imgSrc = imgSrc.substring(0, i);
        var imgSrc_small = imgSrc + "_one_small"+ unit;
		var imgSrc_big = imgSrc + "_one_big"+ unit;
		$("#bigImg").attr({"src": imgSrc_small });
		  $("#thickImg").attr("href", imgSrc_big);
		  var alt = $(this).attr("alt");
		  $(".color_change strong").text(alt);
		   var newImgSrc = imgSrc.replace("images/pro_img/","");
		  $("#jnProitem .imgList li").hide();
		  $("#jnProitem .imgList").find(".imgList_"+newImgSrc).show();
		  		  //解决问题：切换颜色后，放大图片还是显示原来的图片。
		  $("#jnProitem .imgList").find(".imgList_"+newImgSrc).eq(0).find("a").click();

    });
});
/* 点击左侧产品小图片切换大图 */
$(function(){
	$("#jnProitem ul.imgList li a").bind("click",function(){
		  var imgSrc = $(this).find("img").attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_big = imgSrc + "_big"+ unit;
		  $("#thickImg").attr("href" , imgSrc_big);
	});
});