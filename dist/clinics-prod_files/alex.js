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
	$.post("/algo/processing/bookFormBootstrap.php", {'docid':docid, 'cliid': cliid, 'sid': sid, 'price': price, 'actname':actname}, function(resp){
		var r = JSON.parse(resp); 
		$('#f_photo').attr('src', r.who.avatar);
		$('.doctor-popup__title').text(r.who.name);
		if(r.doc !== undefined)
		{
			$('input[name=docid]').val(r.doc.eid);
			$('#doctxt').html(r.doc.text);
		}
		if(r.cli !== undefined)
		{
			$('input[name=cliid]').val(r.cli.eid);
			$('.form-title__text').text('Онлайн-запись в клинику');
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
			$('#servtxt').text(r.service.name + r.service.price);
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