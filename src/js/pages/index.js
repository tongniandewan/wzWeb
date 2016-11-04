/**
 * Created by Administrator on 2016/11/2.
 */

$(function () {
    var nav = $(".nav", "#header");
    var current = 0;
    var init = $(".m", "#navBar").eq(current);
    var block = $("#current", "#navBar");
    block.css({
        "left": init.position().left - 3
    });
    nav.hover(function () {
        },
        function () {
            block.stop().animate({
                    "left": init.position().left - 3
                },
                400);
        });
    $(".nav", "#header").slide({
        type: "menu",
        titCell: ".m",
        targetCell: ".sub",
        delayTime: 400,
        triggerTime: 0,
        returnDefault: true,
        defaultIndex: current,
        startFun: function (i, c, s, tit) {
            block.stop().animate({
                    "left": tit.eq(i).position().left - 3
                },
                300);
        }
    });
});


$(function () {
    var arrLiBox = $('.project-list', '#project');
    var arrLi = arrLiBox.find('li');

    $.each(arrLi, function () {
        $(this).mouseover(function () {
            var mask = $(this).find('.mask');
            var img = $(this).find('show-img');
            mask.show();
        }).mouseleave(function () {
            var mask = $(this).find('.mask');
            mask.hide();
        })
    })
});

//轮播图

$(function () {
    //初始化
    var size = $("li", ".img").size();  //获取图片的个数
    for (var i = 1; i <= size; i++) {	//创建图片个数相对应的底部数字个数
        var li = "<li>" + i + "</li>";	//创建li标签，并插入到页面中
        $(".num").append(li);
    }

    //手动控制图片轮播
    $("li", ".img").eq(0).show();	//显示第一张图片
    $("li", ".num").eq(0).addClass("active");	//第一张图片底部相对应的数字列表添加active类
    $("li", ".num").mouseover(function () {
        $(this).addClass("active").siblings().removeClass("active");  //鼠标在哪个数字上那个数字添加class为active
        var index = $(this).index();  //定义底部数字索引值
        i = index;  //底部数字索引值等于图片索引值
        $(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);	//鼠标移动到的数字上显示对应的图片
    });

    //自动控制图片轮播
    var i = 0,  //初始i=0
        t = setInterval(move, 4000);  //设置定时器，1.5秒切换下一站轮播图
    //向左切换函数
    function moveL() {
        i--;
        if (i == -1) {
            i = size - 1;  //如果这是第一张图片再按向左的按钮则切换到最后一张图
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
    }

    //向右切换函数
    function move() {
        i++;
        if (i == size) {
            i = 0;  //如果这是最后一张图片再按向右的按钮则切换到第一张图
        }
        $(".num li").eq(i).addClass("active").siblings().removeClass("active");  //对应底部数字添加背景
        $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);  //对应图片切换
    }

    //左按钮点击事件
    $(".out .left").click(function () {
        moveL();	//点击左键调用向左切换函数
    });
    //右按钮点击事件
    $(".out .right").click(function () {
        move();    //点击右键调用向右切换函数
    });
    //定时器开始与结束
    $(".out").hover(function () {
        clearInterval(t);	//鼠标放在轮播区域上时，清除定时器
    }, function () {
        t = setInterval(move, 4000);  //鼠标移开时定时器继续
    })
});
