var mySwiper = new Swiper('.swiper-container', {
    //监听swiper偏移量
    on: {
        setTranslate: function (translate) {
            var nav1 = document.querySelector('#nav-a1');
            var nav2 = document.querySelector('#nav-a2');
            var nav3 = document.querySelector('#nav-a3');
            var nav4 = document.querySelector('#nav-a4');
            if (translate == '-765') {
                nav1.style = 'color:yellow';
                nav2.style = 'color:block';
            }else  if(translate=='-1530'){
                nav2.style = 'color:yellow';
                nav1.style = 'color:block';
                nav3.style = 'color:block';
            }else  if(translate=='-2295'){
                nav3.style = 'color:yellow';
                nav2.style = 'color:block';
                nav4.style = 'color:block';
            }else if(translate=='-3060'){
                nav4.style = 'color:yellow';
                nav3.style = 'color:block';
            }
            else if (translate == '0') {
                nav1.style = 'color:block';
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
