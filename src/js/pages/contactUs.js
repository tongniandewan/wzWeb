/**
 * Created by Antares on 2016/11/16.
 */

/**
 * Created by Administrator on 2016/10/10.
 * Depending on the jquery-1.11.3.min.js.
 * Depending on the style/shop.css.
 * To cite this document, always state the source as shown above.
 */

$(function () {
  $(".map-tags>li").on('mouseover', function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    var index = $(this).index();
    $(".box").eq(index).show().siblings(".box").hide();
    responseProvince();
  });
  //左右切换
  //点击左箭头
  $(".prev").on('click', function () {
    //获取当前左切换 父亲的 index
    var sideindexL = $(this).parents(".box").index();
    $(".box").hide();
    $(this).parents(".box").prev(".box").fadeIn();
    $(".map-tags li").eq(sideindexL - 1).addClass("active").siblings("li").removeClass("active");
    //当左切换为第一个时候  第一个显示
    if (sideindexL == 0) {
      $(".box:first").show();
      alert("前面没有了！");
      $(".map-tags li").eq(0).addClass("active").siblings("li").removeClass("active");
    }

    responseProvince();
  });

  //点击右箭头
  $(".next").on('click', function () {
    //获取页面全部.box 的数量
    var sideindexR = $(this).parents(".box").index();
    var len = $('.box').length;
    $(".box").hide();
    $(this).parents(".box").next(".box").fadeIn();
    $(".map-tags li").eq(sideindexR + 1).addClass("active").siblings("li").removeClass("active");
    if (sideindexR == len - 1) {//这里的数字 是你地图的个数减去1
      $(".box:last").show();
      alert("最后一个了！");
      // $(".map_tags li").eq(sidelenAll).addClass("active").siblings("li").removeClass("active");
    }
    responseProvince();
  });

  responseCity('#jiangsu', '#nanjing');
  responseCity('#zhejiang', '#wenzhou')
});

//点击市级对应省份
function responseProvince() {
  var jiangsuCity = hasActive('#nanjing') || hasActive('#suzhou') || hasActive('#wuxi');
  var zhejiangCity = hasActive('#wenzhou') || hasActive('#taizhou') || hasActive('#ningbo') || hasActive('#hangzhou')
    || hasActive('#shaoxing') || hasActive('#jiaxing');

  active(jiangsuCity, '#jiangsu');
  active(zhejiangCity, '#zhejiang');

  function active(arrCitys, province) {
    arrCitys ? $(province).addClass('active') : $(province).removeClass('active');
  }

  function hasActive(selector) {
    return $(selector).hasClass('active');
  }
}


//点击省份对应市级
function responseCity(province, city) {
  var arrLi = $('.map-tags').find('li');
  $(province).mouseover(function () {
    $(this).addClass('active').siblings('span').removeClass('active');
    $(city).addClass('active').click();
    arrLi.not(city).removeClass('active');
  })
}
