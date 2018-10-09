var mySwiper = new Swiper ('.swiper-container', {
    //监听swiper偏移量
    on:{
        setTranslate: function(translate){
            var nav1 = document.querySelector('#nav-a1');
            var nav2 = document.querySelector('#nav-a2');
            var pro1 = document.querySelector('#swiper-slide');
            var pro2 = document.querySelector('#swiper-slide2');
            if(translate=='-657'){
                nav2.style='color:yellow';
                pro1.style='transform: translateY(-100%);transition:all 1.5s;display:block';
                pro2.style='transform: translateX(100%);transition:all 1.9s;';
                nav1.style='color:block';
            }else if(translate=='0'){
                nav2.style='color:block';
                pro1.style='position: absolute;margin-top: 60%;border: 1px solid brown;width: 300px;height: 400px;';
                pro2.style='position: absolute;top: 20%;left: -30%;border: 1px solid brown;width: 300px;height: 400px;';
                nav1.style='color:yellow';
            }
        },
        slideChangeTransitionStart: function(){
            if(this.activeIndex==0){
                mySwiper.mousewheel.disable();
            }else if(this.activeIndex!=0){
                mySwiper.mousewheel.enable();
            }
        },
    },
    //切换方式
    effect : 'fade',
    fadeEffect: {
        crossFade: true,
    },
    //轮播顺序
    direction : 'vertical',
    hashNavigation: {
        watchState: true
    },
    loop:false,
    //点击切换速度
    speed:1000,
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
        dynamicBullets :true,
        clickable:true,
        hiddenClass : 'oneone'
    }
    // 如果需要前进后退按钮
   /* navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/
});
