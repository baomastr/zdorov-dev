var timer;
$(document).ready(function () {
    var i = 0;
    var toHover = $('.st-pic__wrap:first-child .st-b > a');
    timer = function () {
        var art = toHover.eq(i);
        art.toggleClass('hover');
        // console.log(art);
        // console.log('hover+');
        setTimeout(function(){
            art.toggleClass('hover');
            // console.log(art);
            // console.log('hover-');
        },1000);
        i++;
        if(i >= 8) i = 0;
    };
    var interval = setInterval(timer, 2000);
    toHover.hover(function () {
        clearInterval(interval);
        // console.log('stop')
    });
});