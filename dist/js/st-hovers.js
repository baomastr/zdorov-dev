var timer;
$(document).ready(function(){

    var i = 0;

    timer = function(){

        var toHover = $('.st-b > a');

        var objs = toHover.map(function(){
            return this;
        }).get();

        var art = objs[i++];

        var toggleFunction = function () {
            art.toggleClass('hover');
        };

        // objs[i].toggleClass('hover');

        // console.log(objs[i]);
        // console.log(art);
        // objs[i].

        if(i >= objs.length) i = 0;

    };
    var interval = setInterval(timer, 1000);

    toggleFunction();
});


var i = 0;
setInterval(function() {

    var toHover = $('.st-b > a');

    var objs = toHover.map(function(){
        return this;
    }).get();

    var art = objs[i++];

    art.toggleClass('hover');

    console.log(art);

    // console.log(objs[i]);

    // objs[i].

    if(i >= objs.length) i = 0;

}, 2000);

setInterval(function() {
    var toHover = $('.st-b > a');

    var objs = toHover.map(function(){
        return this;
    }).get();

    $(arts).each(function(){
        doSomethingWith(this);
    });
}, 2000);

var timer;
$(document).ready(function () {

    var i = 0;
    var toHover = $('.st-b > a');

    timer = function () {
        var art = toHover.eq(i);

        art.toggleClass('hover');
        console.log(art);
        console.log('hover+');

        setTimeout(function(){

            art.toggleClass('hover');
            console.log(art);
            console.log('hover-');
        },1000);

        i++;
        if(i >= 16) i = 0;
    };

    var interval = setInterval(timer, 2000);

    // setInterval(function(){
    //
    //     var art = toHover.eq(i);
    //
    //     art.toggleClass('hover');
    //     console.log(art);
    //     console.log('hover+');
    //
    //     setTimeout(function(){
    //
    //         art.toggleClass('hover');
    //         console.log(art);
    //         console.log('hover-');
    //     },1000);
    //
    //     i++;
    //     if(i >= 16) i = 0;
    //
    // },3000);

    toHover.hover(function () {
        clearInterval(interval);
        // console.log('stop')
    });
});

    var i = 0;

    setInterval(function(){

        var toHover = $('.st-b > a');

        var objs = toHover.map(function(){
            return this;
        }).get();

        var art = objs[i++];

        $(art).toggleClass('hover');
        console.log(art);
        console.log('hover+');

        setTimeout(function(){

            $(art).toggleClass('hover');
            console.log(art);
            console.log('hover-');
        },1000);

        if(i >= objs.length) i = 0;

    },3000);


