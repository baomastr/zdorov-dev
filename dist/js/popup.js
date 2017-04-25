
$(document).ready(function () {

    var sendflag = true;
    function check()
    {
        var fio = $('input[name=fio]').val();
        var tel = $('input[name=tel]').val();
        var email = $('input[id=email-popup]').val();
        var flag = true;
        if(fio == '')
        {
            $('input[name=fio]').css('border', '1px solid red');
            flag = false;
        }
        if(tel == '')
        {
            $('input[name=tel]').css('border', '1px solid red');
            flag = false;
        }
        if(email == '')
        {
            $('input[name=email]').css('border', '1px solid red');
            flag = false;
        }
        if(flag)
            return true;
        else
            return false;
    }

    $("#phone-popup").mask("+7 (999) 999 - 99 - 99");

    $(".popup3").hide();

    $(".choose-time").click(function () {
        if ($("#select2-chosen-2").text() == "Выберите клинику") {
            $(".qw-select2 .select-qw a").addClass("input-error-popup");


        } else {
            $(".popup1").hide();
            $(".popup2").show();
            $(".qw-select2 a").removeClass("input-error-popup");
        }
    });

    $(".sms_f").click(function () {
        if(check())
        {
            var phone = $("#phone-popup").val();
            $('.name-popup3').html('<p>' + $('input[name=fio]').val() + '</p>');
            $.post('/algo/processing/sms.php',{'phone':phone},function(resp){
                $(".sms_f").removeClass('sms_f');
                var r = JSON.parse(resp);
                if(r.status == 'ok')
                {
                    $(".popup1").hide();
                    $(".popup2").hide();
                    $(".popup3").show();
                }
                else
                {
                    alert(r.msg);
                    $(".close-popup").click();
                }
            });
        }
    });

    $(".book_f").click(function(){
        var that = $(this);
        if(sendflag === true)
        {
            that.removeClass('book_f');
            $('.p-pop3').html("<div style='position:relative;'><img style='position:absolute;top:-120px;left:-190px;' src='/img/util/loading-07.gif' /></div>");
            var data = $('form').serialize();
            $.post('/algo/processing/bookForm.php',{'data':data},function(resp){
                var r = JSON.parse(resp);
					//$('.bottom-popup').addClass('success');
                $('.p-pop3').text(r.msg);
                if(r.status == 'ok')
                {
                    sendflag = false;
					$('a.clinic-btn.but.book_f').click();
                    setTimeout(function(){
                        $(".pop-up").fadeOut(300);
                        //$(".popup1").show();
                        $(".popup2").hide();
                        $(".popup3").hide();
                    }, 3000);
                }
                else
                {
                    that.addClass('book_f');
                    $('input[name=sms]').val('');
                }
            });
        }
    });

    $(".close-popup").click(function () {
        $(".pop-up").fadeOut(300);
        $(".popup1").show();
        $(".popup2").hide();
        $(".popup3").hide();
    });

    $('#pop-up__order').click(function(e){
        if (e.target.id != 'pop-up__order'){return false;}
        $(this).fadeOut(500);
    });
});