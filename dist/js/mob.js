$(document).ready(function () {
    // var mql = window.matchMedia("(orientation: portrait)");
    var mql = window.matchMedia("(min-width: 415px)");
    // var mql = window.innerWidth(415);
    if (mql.matches) {
        // Портретная ориентация
        console.log('Портретная ориентация');
    } else {
        // Горизонтальная ориентация
        // console.log('Горизонтальная ориентация');
        console.log('Поверните утройство на 90" для корректного отображения раздела');
        // alert('Поверните утройство на 90" для корректного отображения раздела');
        $('#nav-icon3').click(function () {
            $(this).toggleClass('open');
            $('.header-main_menu').toggleClass('open');
        });
        $('#sub').click(function () {
            $(this).toggleClass('open');
            $('.main-submenu').toggleClass('open');
            $(this).find('a')
        });
        $('.swiper-wrapper').bxSlider({});
        $('.alphabet__title-letter').click(function () {
            if($(this).next().height() < 1){
                $(this).next().css('max-height', '100%'); //set max height
            }else{
                $(this).next().css('max-height', '0'); //delete attribute
            }
        });
        $('.more-text').click(function () {
            console.log('click');
            if ($(this).hasClass('closed')) {
                console.log('closed');
                $(this).removeClass('closed');
                $(this).addClass('opened');
                $(this).prevAll('.js-regaliya-xs').removeClass('js-regaliya-heght-xs');
                $(this).find('.js-more-text').text('Скрыть');
            } else {
                console.log('opened');
                $(this).removeClass('opened');
                $(this).addClass('closed');
                $(this).prevAll('.js-regaliya-xs').addClass('js-regaliya-heght-xs');
                $(this).find('.js-more-text').text('Подробнее');
            };
        });

    }

    // Прослушка события изменения ориентации
    mql.addListener(function(m) {
        if (m.matches) {
            // Изменено на портретный режим
            console.log('Изменено на портретный режим');
        } else {
            // Изменено на горизонтальный режим
            // console.log('Изменено на горизонтальный режим');
            console.log('Поверните утройство на 90" для корректного отображения раздела');
        }
    });

});