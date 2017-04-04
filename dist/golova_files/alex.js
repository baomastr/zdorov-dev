function bookFormShow(docid, cliid = false, sid = '', price = '', actname = '')
{
	$(".popup1").show();
	$(".popup2").hide();
	$(".popup3").hide();
	$('.p-pop3').text('');
	$('input[name=sms]').val('');
	$(".pop-up-review-doc").removeClass("pop-up");
	$(".pop-up").fadeIn(300);
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
			console.log(r.actname);
			$('#acttxt').text(r.actname); 
		}
		//console.log(resp);
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
        Share.popup(url);
    },
    odnoklassniki: function(purl, ptitle, pimg, text) {
        url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl='    + encodeURIComponent(purl);
        Share.popup(url);
    },
    facebook: function(purl, ptitle, pimg, text) {
        url  = 'https://www.facebook.com/sharer/sharer.php?app_id=1179943218748712&u='+encodeURIComponent(location.href);
        Share.popup(url);
    },
    twitter: function(purl, ptitle, pimg, text) {
        url  = 'http://twitter.com/share?';
        url += 'text='      + encodeURIComponent(text);
        url += '&url='      + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    google: function(purl, ptitle, pimg, text) {
        url  = 'https://plus.google.com/share?';
        url += 'url='          + encodeURIComponent(purl);
        //url += '&title='       + encodeURIComponent(ptitle);
        //url += '&description=' + encodeURIComponent(text);
        //url += '&imageurl='    + encodeURIComponent(pimg);
        Share.popup(url)
    },
    livejornal: function(purl, ptitle, pimg, text) {
        url  = 'http://www.livejournal.com/update.bml?';
        url += 'subject='       + encodeURIComponent(purl) + encodeURIComponent(ptitle);
        url += '&event='   + encodeURIComponent(text);
        Share.popup(url)
    },

    popup: function(url) {
        window.open(url,'','toolbar=0,status=0,width=626,height=436');
    }
};