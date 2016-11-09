$(document).ready(function(){
    $('.book').mouseenter(function(){
        goalParams.clinic = $(this).attr('clinic');
    });
    $('#src').click(function(){
        var metro = [];
        $('.select2-search-choice').each(function(){
            metro.push($(this).children('div').text());
        });
        var p = (metro.length != 0)? '?metro=' + metro : '';
        window.location.assign("http://zdorov.online" + '<?=$cp?>' + p);
    });
    $('.select-deseales').change(function(){
        var m = '<?=(isset($_GET['metro']))? '?metro='.$_GET['metro'] : '';?>';
        var d = $(this).val();
        window.location.assign("http://zdorov.online/clinics/" + d + '/');
    });

    $.post("/include/right_clinics_lechenie.php", {'bolezn':'<?=$arParams['sa']['UF_NAME']?>', 'doc':'<?=$arResult['docspec_ru']?>', 'link':'<?=$arResult['docspec_en']?>'}, function(resp){
        $('#rdocs').html(resp);
    });

    var StickyElement = function(node){
        var doc = $(document),
            fixed = false,
            anchor = node.find('.sticky-anchor'),
            content = node.find('.sticky-content');

        var onScroll = function(e){
            var docTop = doc.scrollTop(),
                anchorTop = anchor.offset().top;

            if(docTop > anchorTop){
                if(!fixed){
                    anchor.height(content.outerHeight());
                    content.addClass('fixed');
                    fixed = true;
                }
            }  else   {
                if(fixed){
                    anchor.height(0);
                    content.removeClass('fixed');
                    fixed = false;
                }
            }
        };

        $(window).on('scroll', onScroll);
    };

    var demo = new StickyElement($('#sticky'));
});