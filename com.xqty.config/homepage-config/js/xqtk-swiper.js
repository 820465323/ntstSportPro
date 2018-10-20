var mySwiper = new Swiper('.swiper-container', {
    //监听swiper偏移量
    on: {
        setTranslate: function (translate) {
            var nav1 = document.querySelector('#nav-a1');
            var nav2 = document.querySelector('#nav-a2');
            var nav3 = document.querySelector('#nav-a3');
            var nav4 = document.querySelector('#nav-a4');
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
                if (translate >-800&&translate<-700) {
                        nav1.style = 'color:yellow';
                        nav2.style = 'color:block';
                        nav3.style = 'color:block';
                        nav4.style = 'color:block';
                        aboutus8p0.style='margin-left:0;transition:all .7s';
                        aboutus8p.style='margin-left:0;transition:all .9s';
                        aboutus8p1.style='margin-left:0;transition:all 1.1s';
                        aboutusp2.style='margin-left:0;transition:all 1.3s';
                }
                if(translate>-1600&&translate<-1500){
                    nav2.style = 'color:yellow';
                    nav1.style = 'color:block';
                    nav3.style = 'color:block';
                    nav4.style = 'color:block';
                    setTimeout(function () {
                        p1.style='opacity:1;transition:all 1s';
                        p2.style='opacity:1;transition:all 1.3s';
                        p3.style='opacity:1;transition:all 1.6s';
                        p4.style='opacity:1;transition:all 1.9s';
                        p5.style='opacity:1;transition:all 2.2s';
                        p6.style='opacity:1;transition:all 2.5s';
                        p7.style='opacity:1;transition:all 2.8s';
                    },200);
                }
                if(translate>-2300&&translate<-2200){
                    nav3.style = 'color:yellow';
                    nav1.style = 'color:block';
                    nav2.style = 'color:block';
                    nav4.style = 'color:block';
                }
                if(translate>-3100&&translate<-3000){
                    nav4.style = 'color:yellow';
                    nav1.style = 'color:block';
                    nav2.style = 'color:block';
                    nav3.style = 'color:block';
                }
                if (translate == 0) {
                    nav4.style = 'color:block';
                    nav1.style = 'color:block';
                    nav2.style = 'color:block';
                    nav3.style = 'color:block';
                }
                /*setTimeout(function () {
                 //获取当前模块的索引进行判断
                 if (mySwiper.activeIndex == 0) {
                 mySwiper.mousewheel.disable();
                 } else if (mySwiper.activeIndex != 0) {
                 console.log('!=0!=0');
                 mySwiper.mousewheel.enable();
                 }
                 }, 1);*/

        }
    },
    //切换方式
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    //轮播顺序
    direction: 'vertical',
    hashNavigation: {
        watchState: true
    },
    loop: false,
    //点击切换速度
    speed: 1000,
    //鼠标滑轮控制
    mousewheel: true,
    //自动切换速度
    /* autoplay : {
     delay:3000
     },*/
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        //分页器按钮
        dynamicBullets: true,
        clickable: true,
        hiddenClass: 'oneone'
    }
    // 如果需要前进后退按钮
    /* navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
     },*/
});
