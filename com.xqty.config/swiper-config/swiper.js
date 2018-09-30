var mySwiper = new Swiper ('.swiper-container', {
    //监听swiper偏移量
    on:{
        setTranslate: function(translate){
            if(translate=='-657'){
                var nav = document.querySelector('#nav-a2');
                nav.style='color:yellow';
                var nav = document.querySelector('#nav-a1');
                nav.style='color:block';
            }else if(translate=='0'){
                var nav = document.querySelector('#nav-a2');
                nav.style='color:block';
                var nav = document.querySelector('#nav-a1');
                nav.style='color:yellow';
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
    mousewheel:true,
    //点击切换速度
    speed:1000,
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
    }
    // 如果需要前进后退按钮
   /* navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },*/
});
