/**
 * Created by Administrator on 2016/11/7.
 * 公共页面样式
 * (页头页尾侧栏固定)
 */

if (!wzWeb) {
  var wzWeb = {};
}

$(function () {
  wzWeb.subNavigation();
  wzWeb.headerFixed();
  wzWeb.sideBar();
});

//二级菜单
wzWeb.subNavigation = function () {
  "use strict";
  //获取所有一级导航
  var navList = $('.nav', '#navBar').find('li');
  $.each(navList, function () {
    var sub = $(this).find('.sub');
    if (sub.length > 0) {
      $(this).hover(function () {
        $(this).find('.sub').fadeIn();
      }, function () {
        $(this).find('.sub').fadeOut();
      });
    }
  });
};

//固定导航
wzWeb.headerFixed = function () {
  //获取要定位元素距离浏览器顶部的距离;
  var header = document.querySelector("#header");
  var navH = $(header).offset().top;
  //滚动条事件
  $(window).scroll(function () {
    //获取滚动条的滑动距离
    var scroH = $(this).scrollTop();
    //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
    if (scroH >= navH) {
      $(header).css({"position": "fixed", "box-shadow": "0 3px 3px rgba(63,63,63,.24)"});
    }
    if (scroH < navH || scroH == 0) {
      $(header).css({"position": "relative", "box-shadow": "none"});
    }
  })
};


wzWeb.sideBar = function () {
  var sideBar = $("#sideBar");
  var sideItem = sideBar.find("li");
  
  var backTop = sideBar.find(".icon-backtop");
  var backTopBtn = backTop.parent('li');
  var qrCodeBtn = sideItem.eq(2);  //微信
  var $qrCodePic = qrCodeBtn.find(".qrImg");
  
  $.each(sideItem, function () {
    var $oSpan = $(this).find("span");
    var timer = null;
    if ($oSpan.length > 0) {
      $(this).hover(function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
          $oSpan.animate({left: "-110px"}, "300").show();
        }, 400);
      }, function () {
        clearTimeout(timer);
        $oSpan.animate({left: "50px"}, "300").show();
      })
    }
  });
  
  qrCodeBtn.hover(
    function () {
      $qrCodePic.animate({right: "50px"}, "300").show();
    }, function () {
      $qrCodePic.animate({right: "-160px"}, "300").hide();
    }
  );
  
  //返回顶部
  $(window).scroll(
    function () {
      var sTop = $(this).scrollTop();
      if (sTop > 760) {
        $(backTopBtn).fadeIn()
      } else {
        $(backTopBtn).fadeOut();
      }
    }
  )
  $(backTopBtn).click(function () {
    if (scroll === "off") {
      return;
    }
    $("html,body").animate({scrollTop: 0}, 300);
  });
};


