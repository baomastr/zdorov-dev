$(document).ready(function () {
    // var mql = window.matchMedia("(orientation: portrait)");
    var mql = window.matchMedia("(min-width: 415px)");
    // var mql = window.innerWidth(415);
    if (mql.matches) {
        // Горизонтальная ориентация
        console.log('Горизонтальная ориентация');

        if ($('.c-st-last').length){
            $('.swiper-wrapper').bxSlider({
                slideWidth: 276,
                minSlides: 2,
                maxSlides: 3,
                slideMargin: 13,
                nextSelector: '#slider-next',
                prevSelector: '#slider-prev',
                nextText: '',
                prevText: ''
            });
        }


        var onScroll = function(e) {
            var container = $('.scrollspy'),
                circle = $('.scrollspy__circle'),
                anchor = $('.scrollspy__anchor'),
                height = container.outerHeight(),
                fromTop = circle.offset().top,
                anchorFromTop = anchor.offset().top;

            if (anchorFromTop > (height + 50)) {
                circle.addClass('is-static');

            } else {
                circle.removeClass('is-static');
            }
        };

        $(window).on('scroll', onScroll);

        $('.js-selftest-docslider').bxSlider({
            controls: true,
            hideControlOnEnd: true,
            pager: false,
            adaptiveHeight: true,
            minSlides: 5,
            maxSlides: 5,
            slideWidth: 190,
            slideMargin: 20
        });


    } else {
        // Портретная ориентация
        console.log('Портретная ориентация');
        // console.log('Поверните утройство на 90" для корректного отображения раздела');
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

        // $('.swiper-wrapper').bxSlider({});

        // $('.clinic-main-about__img-slider').bxSlider({});

        $('.alphabet__title-letter').click(function () {
            if($(this).next().height() < 1){
                $(this).next().css('max-height', '100%'); //set max height
            }else{
                $(this).next().css('max-height', '0'); //delete attribute
            }
        });
        
        $('.kliniki-diagn-raspred__td > p').click(function () {
            $(this).parent().find('.kliniki-diagn-raspred__td').toggleClass('is-opened');
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

        /*замена атрибута onclick у кнопок вызова врача*/
        if ($('.bookFormTime').length){
            var bookBtn = $('.bookFormTime');
            bookBtn.each(
                function () {
                    var docId = $(this).attr('docid');
                    // $(this).attr('onclick', 'bookFormAdaptiveShow("' + docId + '");')
                    $(this).attr('onclick', "bookFormAdaptiveShow('" + docId + "');")
                }
            );
        }

        $('.st-list__title').click(function() {
            // console.log('click');
            $(this).parent().toggleClass("open").slow();
        });

        $('.st-pic__item').click(function () {
            // console.log('click');
//				$('html, body').animate({
//					scrollTop: $(".st-pic__item.active .st-list").offset().top }, 'slow');
            $('html, body').animate({
                scrollTop: $(window).scrollTop() + 500
            });
        });

        /*$('.bookFormTime').click(function () {
            console.log('popup-open');
            $('.FormAdaptiveContainer .order-xs').show();
        });*/

        if ($('.c-st-last').length){
            $('.swiper-wrapper').bxSlider({
                // slideWidth: 276,
                minSlides: 1,
                maxSlides: 1,
                // slideMargin: 13,
                nextSelector: '#slider-next',
                prevSelector: '#slider-prev',
                nextText: '',
                prevText: ''
            });
        } else {
            /*$('.swiper-wrapper').bxSlider({
             // slideWidth: 276,
             minSlides: 1,
             maxSlides: 1,
             // slideMargin: 13,
             // nextSelector: '#slider-next',
             // prevSelector: '#slider-prev',
             // nextText: '',
             // prevText: ''
             });*/
            $('.swiper-wrapper').bxSlider({});
        }

        $('.js-selftest-docslider').bxSlider({
            controls: true,
            hideControlOnEnd: true,
            pager: false,
            adaptiveHeight: true,
            minSlides: 1,
            maxSlides: 1,
            slideWidth: 190
            // slideMargin: 20
        });
    }

    // Прослушка события изменения ориентации
    mql.addListener(function(m) {
        if (m.matches) {
            // Изменено на горизонтальный режим
            console.log('Изменено на горизонтальный режим');
        } else {
            // Изменено на портретный режим
            console.log('Изменено на портретный режим');
            // console.log('Поверните утройство на 90" для корректного отображения раздела');
        }
    });

});