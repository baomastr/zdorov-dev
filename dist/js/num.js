$(document).ready(function(){
    for (var i = 0; i < $('.ratebox').length; i++){
        $($('.ratebox')[i]).find('.ratebox__place > span').text(i+1);
    }
});