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
//导航栏按钮节点
var nav1 = document.querySelector('#nav-a1');
var nav2 = document.querySelector('#nav-a2');
var nav3 = document.querySelector('#nav-a3');
var nav4 = document.querySelector('#nav-a4');
var nav5 = document.querySelector('#nav-a4');
//关于我们文字节点
var aboutus8p0 = document.querySelector('.about-us8-p0');
var aboutus8p = document.querySelector('.about-us8-p');
var aboutus8p1 = document.querySelector('.about-us8-p1');
var aboutusp2 = document.querySelector('.about-us-p2');
//健康监测文字节点
var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var p3 = document.querySelector('#p3');
var p4 = document.querySelector('#p4');
var p5 = document.querySelector('#p5');
var p6 = document.querySelector('#p6');
var p7 = document.querySelector('#p7');
//a标签点击高亮效果
$('#nav-a1').click(function () {
    nav1.style = 'color:yellow;';
    nav2.style = 'color:black;';
    nav3.style = 'color:black;';
    nav4.style = 'color:black;';
    nav5.style = 'color:black;';
    //点击关于我们时执行此项
    aboutus8p0.style='margin-left:0;transition:all .7s';
    aboutus8p.style='margin-left:0;transition:all .9s';
    aboutus8p1.style='margin-left:0;transition:all 1.1s';
    aboutusp2.style='margin-left:0;transition:all 1.3s';
});
$('#nav-a2').click(function () {
    nav2.style = 'color:yellow;';
    nav1.style = 'color:black;';
    nav3.style = 'color:black;';
    nav4.style = 'color:black;';
    nav5.style = 'color:black;';
    //文字渐淡渐出效果
    setTimeout(function () {
        p1.style='opacity:1;transition:all 1s';
        p2.style='opacity:1;transition:all 1.3s';
        p3.style='opacity:1;transition:all 1.6s';
        p4.style='opacity:1;transition:all 1.9s';
        p5.style='opacity:1;transition:all 2.2s';
        p6.style='opacity:1;transition:all 2.5s';
        p7.style='opacity:1;transition:all 2.8s';
    },200);
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
/*$(document).ready(function () {
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
});*/

//判断浏览器缩放程度(进入页面执行一次)
/* if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
 {
 winHeight = document.documentElement.clientHeight;
 console.log('winHeight='+winHeight);
 winWidth = document.documentElement.clientWidth;
 console.log('winWidth='+winWidth);
 if(winWidth>='1500'&&winWidth<=1600){
 longimg4.style='margin-left:10.52%';
 longimg2.style='height:790px';
 navdiv4.style='margin-right:240px';
 }
 }*/

//监听浏览器缩放比例
/*window.onresize = function(){
 alert('此时浏览器宽度'+this.innerWidth+'此时浏览器高度'+this.innerHeight);

 if(this.innerWidth>='1500'&&this.innerWidth<='1600'){
 alert('此时浏览器宽度'+this.innerWidth+'此时浏览器高度'+this.innerHeight);
 longimg4.style='margin-left:10.52%';
 longimg2.style='height:790px';
 navdiv4.style='margin-right:240px';
 }else if(this.innerWidth>='1300'&&this.innerWidth<='1400'){
 alert('此时浏览器宽度'+this.innerWidth+'此时浏览器高度'+this.innerHeight);
 longimg4.style='margin-left:6.1%';
 longimg2.style='height:735px';
 navdiv4.style='margin-right:159px';
 }else if(this.innerWidth>='1650'&&this.innerWidth<='1750'){
 alert('此时浏览器宽度'+this.innerWidth+'此时浏览器高度'+this.innerHeight);
 }
 };*/

function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        console.log('phone');
    } else {
        console.log('pc');
    }
}
browserRedirect();

//判断浏览器类型
function myBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }
    //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    }
    //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    }
    //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }
    ; //判断是否IE浏览器
}

//以下是调用上面的函数
var mb = myBrowser();
if ("IE" == mb) {
    console.log('IE浏览器');
    var longimg4 = document.getElementsByClassName('.long-img4');
    longimg4.style = 'margin-left:8.3%';
    var longimg6 = document.getElementsByClassName('.long-img6');
    longimg6.style = 'margin-left:-33px;margin-top:-173px;opacity:1';
    var longimg7 = document.getElementsByClassName('.long-img7');
    longimg7.style = 'margin-left:217.9%;margin-top:-37px;';
}
if ("FF" == mb) {
    console.log("Firefox浏览器");
}
if ("Chrome" == mb) {
    console.log("Chrome浏览器");
}
if ("Opera" == mb) {
    console.log("Opera浏览器");
}
if ("Safari" == mb) {
    console.log("Safari浏览器");
}