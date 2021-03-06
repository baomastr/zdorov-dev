jQuery(document).ready(function($) {
    $(window).load(function() {
        setTimeout(function() {
            $('#rate-preloader').fadeOut('slow', function() {});
        }, 1000);

    });

    var $elements = $('.ratebox');
    var $target = $('.ratebox-wrapper');

    $elements.sort(function (a, b) {

        var testA = $(a).find($('.mark__inner'));
        var testB = $(b).find($('.mark__inner'));

        var $ratingA = testA[0].innerText;
        var $ratingB = testB[0].innerText;

        if ($ratingA < $ratingB) {
            return 1;
        }
        if ($ratingA > $ratingB) {
            return -1;
        }
        return 0;
    });

    $elements.detach().appendTo($target);


});