/**
 * Created by EDZ on 2018/10/16.
 */
    //三角图动态渐出
var imgcenter = document.querySelector('.img-center');
imgcenter.style = 'margin-top:9%;transition:all 1.7s;opacity:1';

//越了解越健康字体效果
var longimg = document.querySelector('.long-img2-1');
longimg.style='margin-top: 25%;transform: translateX(0%);transition:all .7s';
setTimeout(function () {
    longimg.style='margin-top: 25%;transform: translateX(10%);transition:all .5s';
    setTimeout(function () {
        longimg.style='margin-top: 25%;transform: translateX(0%);transition:all 2s';
    },400);
},500);

//每次刷新页面指定跳转路径
window.onload = function () {
    location.href = "#div1";
};
var nav1 = document.querySelector('#nav-a1');
var nav2 = document.querySelector('#nav-a2');
var nav3 = document.querySelector('#nav-a3');
var nav4 = document.querySelector('#nav-a4');
var nav5 = document.querySelector('#nav-a4');
//a标签点击高亮效果
$('#nav-a1').click(function () {
    nav1.style = 'color:yellow;';
    nav2.style = 'color:black;';
    nav3.style = 'color:black;';
    nav4.style = 'color:black;';
    nav5.style = 'color:black;';
});
$('#nav-a2').click(function () {
    nav2.style = 'color:yellow;';
    nav1.style = 'color:black;';
    nav3.style = 'color:black;';
    nav4.style = 'color:black;';
    nav5.style = 'color:black;';
});
$('#nav-a3').click(function () {
    nav3.style = 'color:yellow;';
    nav1.style = 'color:black;';
    nav2.style = 'color:black;';
    nav4.style = 'color:black;';
    nav5.style = 'color:black;';
});
$('#nav-a4').click(function () {
    setTimeout(function () {
        nav4.style = 'color:yellow;';
    },10);
    nav1.style = 'color:black;';
    nav3.style = 'color:black;';
    nav2.style = 'color:black;';
    nav5.style = 'color:black;';
});
$('#nav-a5').click(function () {
    nav5.style = 'color:yellow;';
    nav1.style = 'color:black;';
    nav3.style = 'color:black;';
    nav2.style = 'color:black;';
    nav4.style = 'color:black;';
});

//禁止用户对页面放大缩小

$(document).ready(function () {
    // chrome 浏览器直接加上下面这个样式就行了，但是ff不识别
    $('body').css('zoom', 'reset');
    $(document).keydown(function (event) {
        //event.metaKey mac的command键
        if ((event.ctrlKey === true || event.metaKey === true) && (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187 || event.which === 189)) {
            event.preventDefault();
        }
    });
    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.ctrlKey === true || event.metaKey) {
            event.preventDefault();
        }
    });
});
