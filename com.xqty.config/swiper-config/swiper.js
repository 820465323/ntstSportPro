var mySwiper = new Swiper ('.swiper-container', {
    //切换方式
    effect : 'fade',
    //水平
    direction : 'vertical',
    hashNavigation: true,
    //鼠标切换
    mousewheel: true,
    //点击切换速度
    speed:1000,
    //自动切换速度
    autoplay : {
        delay:3000
    },
    loop: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        //分页器按钮
        dynamicBullets :true,
        clickable:true
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});