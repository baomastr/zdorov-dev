$(document).ready(function () {
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
        $('.header-main_menu').toggleClass('open');
    });
    $('#sub').click(function () {
        $(this).toggleClass('open');
        $('.main-submenu').toggleClass('open');
        $(this).find('a')
    });
//			$('.menu-search').click(function () {
//				$('.headerSearch').toggleClass('open');
//			})
    $('.alphabet__title-letter').click(function () {
        if($(this).next().height() < 1){
            $(this).next().css('max-height', '100%'); //set max height
        }else{
            $(this).next().css('max-height', '0'); //delete attribute
        }
    });
    $('.swiper-wrapper').bxSlider({

    });
    $('.clinic-main-about__img-slider').bxSlider();
});