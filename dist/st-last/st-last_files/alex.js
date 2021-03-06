var dates = [];
var ttable;

function bookOneStepShow(docid, cliid=false, sid = '', price = '') 
{
	$('.docspec').text('');
	$('.docprice').text('');
	$('.doc_avatar').attr("src",'/img/nophoto.png');
	$('.docfio').text('');
	$('.respok').fadeOut(0);
	$('.noresp').fadeIn(0);
	$('.docclinic').html('');
	
	$('.popup-onestep__wrapper').fadeIn(100);
	
	if(cliid != false)
	{
		$.post("/algo/processing/bookFormBootstrap.php", {'cliid':cliid}, function(resp){
			var r = JSON.parse(resp);
			$('.price_holder').fadeOut(0);
			$('.wall_cli-select').fadeOut(0);
			$('select[name=cli_list_select]').fadeOut(0);
			$('.ossbm').attr('cliid', r.cliid);
			$('.doc_avatar').attr("src",r.cli.avatar);
			$('.docfio').text(r.cli.name);
			$('.docmetro').text(r.cli.faddress.metro[0].name);
			$('.docaddress').text(r.cli.faddress.address);
			$('.ossbm').addClass('cli2');
			$('.ossbm').removeClass('doc2');
			$('.ossbm').addClass('cli2_1step');
			$('.ossbm').removeClass('doc2_1step');
			if(sid != '')
			{		
				$('#servtxt').text(sid);
				if(price != '')
					$('#servprice').text(price + ' руб.');
			}
		});
	} 
	else
	{
		$.post("/algo/processing/bookFormTimeBootstrap.php", {'docid':docid}, function(resp){
			var r = JSON.parse(resp);
			$('.price_holder').fadeIn(0);
			$('.ossbm').addClass('doc2');
			$('.ossbm').removeClass('cli2');
			$('.ossbm').addClass('doc2_1step');
			$('.ossbm').removeClass('cli2_1step');
			$('.cli_block').fadeIn(0);
			$('select[name=cli_list_select]').fadeIn(0);
			$('.docspec').text(r.doc.spec);
			$('.docprice').text(r.doc.price);
			$('.docaddress').text(r.doc.address[0].address);
			$('.docmetro').text(r.doc.address[0].metro[0].name);
			$('.ossbm').attr('docid', r.doc.eid);
			$('.doc_avatar').attr("src",r.doc.avatar);
			$('.docfio').text(r.doc.name);
			$('.docclinic').html(r.doc.cli_list); 
			
			console.log(r.doc);
		});
	}
}

function bookFormAdaptiveShow(docid, cliid=false) 
{
	$('.docspec').text('');
	$('.docprice').text('');
	$('#doc_avatar').attr("src",'/img/nophoto.png');
	$('.docfio').text('');
	$('.mf').fadeIn(0);
	$('#resp').html('');
	$('.resp').fadeOut(0);
	
	$('.order-xs').fadeIn(100);
	
	if(cliid != false)
	{
		$.post("/algo/processing/bookFormBootstrap.php", {'cliid':cliid}, function(resp){
			var r = JSON.parse(resp);
			console.log(r);
			$('.docspec').text(r.doc.spec);
			$('.docprice').text(r.doc.price);
			$('.order-xs__submit').attr('cliid', r.cliid);
			$('#doc_avatar').attr("src",r.cli.avatar);
			$('.docfio').text(r.cli.name);
			$('.ossbm').addClass('cli2_adaptive');
			$('.ossbm').removeClass('doc2_adaptive'); 
		
		});
	}
	else
	{
		$.post("/algo/processing/bookFormTimeBootstrap.php", {'docid':docid}, function(resp){
			var r = JSON.parse(resp);
	
			$('.docspec').text(r.doc.spec);
			$('.docprice').text(r.doc.price);
			$('.order-xs__submit').attr('docid', r.doc.eid);
			$('#doc_avatar').attr("src",r.doc.avatar);
			$('.docfio').text(r.doc.name);
			$('.ossbm').addClass('doc2_adaptive');
			$('.ossbm').removeClass('cli2_adaptive'); 
		
		});
	}
}
function bookFormTimeShow(docid)
{
					setTimeout(function() {
						$('#time-preloader').fadeOut('slow', function() {});
					}, 1000);
					setTimeout(function() {
						$('.app-form__time').fadeIn('slow', function() {});
					}, 400);
	$('.popup-appointment__wrapper').fadeIn(0);
	$('#timetable').fadeIn(0);
	$('#step2').fadeOut(0);
	$('#step3').fadeOut(0);
	$('#step123').fadeIn(0); 
	$('.app-form__time').html(''); 
	$('#cliinfo_right').fadeOut(0);
	//$('.bbtn').addClass('step1').removeClass('step2');
	$('.bbtn').fadeOut(0);
	$('.step0').fadeIn(0);
	$('input[name=docid]').val(docid);
	$('.app-form__success').fadeOut(0);
	$('#cartoon').fadeOut(0);
	$('#app-datepicker').removeAttr("disabled");
	$('input').css('border', '1px solid #d3d3d3');
	$('.bdatefooter').fadeOut(0);
	// $('#s1').text('Шаг 1');
	// $('#s2').text('Выбор дня и времени посещения врача');
	
	
	$.post("/algo/processing/bookFormTimeBootstrap.php", {'docid':docid}, function(resp){
		var r = JSON.parse(resp);

		var clinics = r.clinics;
		var clinum = 0;
		var cli_ids = [];
		var cli_html = [];
		$.each(clinics, function(i, v){
				cli_ids.push(v.eid);
				cli_html.push(v.html);
				clinum++;
			});
			
		if(clinum > 1)
		{
			$('#step123').fadeOut(0);
			$('#cliinfo_right').html(r.clinics_str);
			$('#cliinfo_right').fadeIn(0);
			$('#s1').text('');
			$('#s2').text('Пожалуйста выберите клинику');
		}
		else
		{
			$('#cliinfo').html(r.clinics_str);
			setTimeout(function(){
			$('.step0').fadeOut(0);
			$('.step1').fadeIn(0);
			$('#s1').text('');
			$('#s2').text('Выберите удобное время');
			},1000);
		}
			
		//$('#cliinfo').html(r.clinics_str);
		$('.docspec').text(r.doc.spec);
		$('.app-price').text(r.doc.price);
		$('#docavatar').fadeIn(function() {
    $(this).attr("src",r.doc.avatar).fadeIn('slow');
  });
		//$('.docfiopj').text(r.doc.namepj);
		$('.docfio').text(r.doc.name);

		ttable = r.doc.ttable;
		$.each(ttable, function(i, v){
			dates[i] = [];
			if(Object.keys(v).length > 0)
			{
				$.each(v, function(ii, vv){
					dates[i].push(ii);	
				});
			}
		});
		
	});
	
}
function clinic_select(eid)
{
	var clidates = [];
	var table = [];
	setTimeout(function(){
		clidates = dates[eid];
		table = ttable[eid];
	},100);

	
	$('#step2, #step3, .step2, .step3').fadeOut(0);
	// $('#s1').text('Шаг 1');
	// $('#s2').text('Выбор дня и времени посещения врача');
	//$('.step1').fadeIn(300);
	$('#timetable').fadeIn(300);
	$('#app-datepicker').attr('disabled', false);
	$('input[name=cliid]').val(eid);
	$('input[name=dtime]').val('');
	//$('.clinic_left').parent().css('border', '0px solid #ccc');
	//$('#cli_' + eid).parent().css('border', '1px solid #ccc');
	//$('input[type=radio]').attr('checked',false);
	$('.chkbox_img').attr('src','/img/radio_unchecked.jpg');
	$('#cli_' + eid).parent().children('.radio_holder').children('img').attr('src','/img/radio_checked.jpg');

	var cli_selected = $('#cli_' + eid).html();
	$('#cliinfo').html(cli_selected);
	$("#app-datepicker").datepicker("destroy");
	$("#app-datepicker").datepicker($.extend({
		inline: true
	},
	$.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		autoclose: true,
		prevText: '&#x3C;Пред',
		nextText: 'След&#x3E;',
		currentText: 'Сегодня',
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
			'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
			'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
		dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
		weekHeader: 'Нед',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: '',
		onSelect: function(dateText, inst){
			dateAsString = dateText;
			dt = $(this).datepicker('getDate');
			$('.app-form__time').html('');
			$('.app-form__time').append(ttable[eid][dateAsString]);
			
		},
		
			beforeShowDay: function(d) {
			var dat = $.datepicker.formatDate("dd-mm-yy", d);
			if(clidates.length > 0)
			{
				var idx = clidates.indexOf(dat);
				return (idx == -1)? [false] : [true];
			}
			else
				return [true]; 
		},
	}),
	$.datepicker.setDefaults($.datepicker.regional['ru']));
	$('#app-datepicker').datepicker( "option", "maxDate", "+3m" );
	$('#app-datepicker').datepicker( "option", "minDate", "+0d" );	
	$('.app-form__time').html('');
	setTimeout(function(){
		if(clidates.length > 0)
		{
			//alert(clidates);
			$( "#app-datepicker" ).val(clidates[0]);
			$('.app-form__time').append(table[clidates[0]]);
			//alert(table);
			$('.date_time_holder').fadeIn(0);
			$('#timetable').fadeIn(0);
			$('#step2').fadeOut(0);
			$('.bbtn').fadeOut(0);
			$('.step0').fadeIn(0);
			$('.step1').removeClass('no_ttable');
			// $('#s1').text('Шаг 1');
			// $('#s2').text('');
		}
		else
		{
			$('.date_time_holder').fadeOut(0);
			$('#timetable').fadeOut(0);
			$('#step2').fadeIn(0);
			$('.step1').addClass('no_ttable');
			//$('.bbtn').fadeOut(0);
			//$('.step2').fadeIn(0);
			//$('#s1').text('Шаг 2');
			//$('#s2').text('');
		}
	},300);

	// else
		// $( "#app-datepicker" ).val('<?=date('d-m-Y', time());?>');
}
function bookFormShow(docid, cliid = false, sid = '', price = '', actname = '')
{
	$(".popup1").show();
	$(".block-pop-up").show();
	$(".popup2").hide();
	$(".popup3").hide();
	$('.p-pop3').text('');
	$('#resp_info').text('');
	$('input[name=sms]').val('');
	$(".pop-up-review-doc").removeClass("pop-up");
	//$(".pop-up").fadeIn(300);
	$(".pop-up").addClass("block-pop-up");
	$('#servtxt').text(sid);
	$('#doctxt').html('');
	if(docid == 0 && cliid != false)
	{
		$('.form-title__text').text('Онлайн-запись в клинику');
		//$('.doc2').addClass('clinic2').removeClass('doc2');
		$('.doc2').fadeOut(0);
		$('.clinic2').fadeIn(0);
		$('.doc3').fadeOut(0);
		$('.clinic3').fadeIn(0);
		//$('.doc3').addClass('clinic3').removeClass('doc3');
		//$('.doc4').addClass('clinic4').removeClass('doc4');
	}
	else
	{
		$('.form-title__text').text('Онлайн-запись к врачу');
		//$('.clinic2').addClass('doc2').removeClass('clinic2');
		$('.doc2').fadeIn(0);
		$('.clinic2').fadeOut(0);
		$('.doc3').fadeIn(0);
		$('.clinic3').fadeOut(0);
		//$('.clinic3').addClass('doc3').removeClass('clinic3');
		//$('.clinic4').addClass('doc4').removeClass('clinic4');
	}
	
	
	$.post("/algo/processing/bookFormBootstrap.php", {'docid':docid, 'cliid': cliid, 'sid': sid, 'price': price, 'actname':actname}, function(resp){
		var r = JSON.parse(resp); 
		$('#f_photo').attr('src', r.who.avatar);
		$('input[name=treat]').val(r.treat);
		$('.doctor-popup__title').text(r.who.name);
		if(r.doc !== undefined)
		{
			$('input[name=docid]').val(r.doc.eid);
			$('#doctxt').html(r.doc.text);
		}
		if(r.cli !== undefined)
		{
			$('input[name=cliid]').val(r.cli.eid);
			//$('.form-title__text').text('Онлайн-запись в клинику');
		}
		if(r.act !== undefined)
		{
			$('#acttxt').text(r.act.text); 
		}
		if(r.docact !== undefined)
		{
			$('#actdoctxt').text(r.docact.text);
		}
		if(r.service !== undefined)
		{
			$('#servtxt').html(r.service.name + r.service.price);
			$('input[name=serviceName]').val(r.service.name);
			$('input[name=serviceId]').val(r.service.id);
		}
		if(r.actname !== undefined)
		{
			$('#acttxt').text(r.actname); 
		}
	});
}
Sharen = {
    vkontakte: function(purl, ptitle, pimg, text) {
        url  = 'http://vkontakte.ru/share.php?';
        url += 'url='          + encodeURIComponent(purl);
        url += '&title='       + encodeURIComponent(ptitle);
		url += '&image='	   + encodeURIComponent(pimg);
		url += '&description=' + encodeURIComponent(text);
        url += '&noparse=true';
        Sharen.popup(url);
    },
    odnoklassniki: function(purl, ptitle, pimg, text) {
        url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl='    + encodeURIComponent(purl);
        Sharen.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'https://www.facebook.com/sharer/sharer.php?app_id=1179943218748712&u='+encodeURIComponent(location.href);
        Sharen.popup(url);
    },
    twitter: function(purl, ptitle, pimg, text) {
        url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(text);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Sharen.popup(url);
    },
    google: function(purl, ptitle, pimg, text) {
        url  = 'https://plus.google.com/share?';
        url += 'url='          + encodeURIComponent(purl);
        //url += '&title='       + encodeURIComponent(ptitle);
        //url += '&description=' + encodeURIComponent(text);
        //url += '&imageurl='    + encodeURIComponent(pimg);
        Sharen.popup(url)
    },
    livejornal: function(purl, ptitle, pimg, text) {
        url  = 'http://www.livejournal.com/update.bml?';
        url += 'subject='       + encodeURIComponent(purl) + encodeURIComponent(ptitle);
        url += '&event='   + encodeURIComponent(text);
        Sharen.popup(url)
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};

$(document).ready(function(){
	$('input[name=q]').keyup(function(){
		var q = $(this).val();
		$('.search_tips').html('');
		$('.search_tips').fadeOut(300);
		if(q.length > 2 || q == 'кт')
		{
			$.post('/algo/processing/search.php', ({'msg':q}), function(resp){
				var r = JSON.parse(resp);
				if(r.status == 'ok')
				{
					$('.search_tips').html(r.msg);
					$('.search_tips').slideDown(300);
				}
			});
		}
	});
	$('input[name=q]').keydown(function(){
		$('.search_tips').fadeOut(300);
	});
	$('a').each(function(){
		var that = $(this);
		if(that.hasClass('bookFormMob') && that.hasClass('doc_1step'))
			that.removeClass('doc_1step').addClass('doc_adaptive'); 
		if(!that.hasClass('bookOneStep') && that.hasClass('cli_1step'))
			that.removeClass('cli_1step').addClass('cli_adaptive'); 
	});
	
// var StickyElement = function(node){
//   var doc = $(document),
//       fixed = false,
//       anchor = node.find('.sticky-anchor'),
//       content = node.find('.sticky-content');
//
//   var onScroll = function(e){
//     var docTop = doc.scrollTop(),
//         anchorTop = anchor.offset().top;
//
//     /*console.log('scroll', docTop, anchorTop);*/
//     if(docTop > anchorTop){
//       if(!fixed){
//         anchor.height(content.outerHeight());
//         content.addClass('fixed');
//         fixed = true;
//       }
//     }  else   {
//       if(fixed){
//         anchor.height(0);
//         content.removeClass('fixed');
//         fixed = false;
//       }
//     }
//   };
//   $(window).on('scroll', onScroll);
// };
// var demo = new StickyElement($('#sticky'));
//

	 

setTimeout(function(){
$.post("/algo/includeformonestep.php", {}, function(resp){
	$('#forformonestep').html(resp);
});
}, 2000);
});
function click_tip(tip)
{
	var ttext = $('#' + tip).text();

	$('input[name=q]').val(ttext);
	$('.search_tips').fadeOut(300);
}
