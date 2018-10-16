/**
 * Created by EDZ on 2018/10/16.
 */
    //三角图动态渐出
var imgcenter = document.querySelector('#img-center');
imgcenter.style = 'position: absolute;margin-top: -300px;margin-left: 139px;transform: translateY(-275px);transition:all 1.7s;opacity:1';
var longimg = document.querySelector('.long-img2-1');
longimg.style='transform: translateX(0%);transition:all 1.7s';
//每次刷新页面指定跳转路径
window.onload = function () {
    location.href = "#div1";
};

//a标签点击高亮效果
$('#nav-a1').click(function () {
    $('#nav-a1').style = 'color:yellow;';
});
$('#nav-a2').click(function () {
    $('#nav-a2').style = 'color:yellow;';
    $('#nav-a1').style = 'color: black;';
});
$('#nav-a3').click(function () {
    $('#nav-a3').style = 'color:yellow;';
    $('#nav-a2').style = 'color: black;';
});
$('#nav-a4').click(function () {
    $('#nav-a4').style = 'color:yellow;';
    $('#nav-a3').style = 'color: black;';
});
$('#nav-a5').click(function () {
    $('#nav-a5').style = 'color:yellow;';
    $('#nav-a4').style = 'color: black;';
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