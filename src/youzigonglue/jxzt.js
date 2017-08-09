// 大按钮移动效果
$('.mt-t').click(function() {
	$('.mt-t').removeClass('ACTIVE');
	$(this).addClass('ACTIVE');

	var _this = this;
	$('.mm').removeClass('SHOW');
	$($('.mm')[$(this).attr('a')]).addClass('SHOW');
	setTimeout(function() {
		$('.mm').css('opacity', 0);
		setTimeout(function() {
			$('.mm').hide();
			$($('.mm')[$(_this).attr('a')]).show().css('opacity', 0);
			setTimeout(function() {
				$($('.mm')[$(_this).attr('a')]).css('opacity', 1)
			}, 1)
		}, 200)
	}, 0)
});
$('.mt-t').get(0).click();





var l3tlist = [55, 245, 440, 635]
$('#mm1 .m3t-li').click(function() {
	$('.m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('.m3t-biao').css('transform', 'translate(' + l3tlist[$(this).attr('a')] + 'px, 65px)');
	$('.mm3m').css('opacity', 0);
	var _this = this;
	setTimeout(function() {
		$('.mm3m').hide();
		$('#mm3m-' + $(_this).attr('a')).css('display', 'block');
		setTimeout(function() {
			$('#mm3m-' + $(_this).attr('a')).css('opacity', '1');
		}, 10)
	}, 200)
});
$('#mm1 .m3t-li').eq(0).click()


var l3tlist2 = [21, 150, 278, 407, 535, 663]
$('#mm3 .m3t-li').click(function() {
	$('#mm3 .m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('#mm3 .m3t-biao').css('transform', 'translate(' + l3tlist2[$(this).attr('a')] + 'px, 65px)');
	$('#mm3 .mm3m').css('opacity', 0);
	var _this = this;
	setTimeout(function() {
		$('.mm3m').hide();
		$('#mm3m-' + $(_this).attr('a')).css('display', 'block');
		setTimeout(function() {
			$('#mm3m-' + $(_this).attr('a')).css('opacity', '1');
		}, 10)
	}, 200)
});
$('.mt-t[a=2]').click(function(){$('#mm3 .m3t-li').eq(0).click();})
// var l3tlist3 = [55, 245, 450, 635]
// $('#mm3 .m3t-li').click(function() {
// 	$('.m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
// 	$('.m3t-biao').css('transform', 'translate(' + l3tlist[$(this).attr('a')] + 'px, 65px)');
// 	$('.mm3m').css('opacity', 0);
// 	var _this = this;
// 	setTimeout(function() {
// 		$('.mm3m').hide();
// 		$('#mm3m-' + $(_this).attr('a')).css('display', 'block');
// 		setTimeout(function() {
// 			$('#mm3m-' + $(_this).attr('a')).css('opacity', '1');
// 		}, 10)
// 	}, 200)
// });


$('.lunbo .lb-r').click(function() {
	var p1 = $(this).parents('.lunbo').children('.lb-in').children('.p1'),
		p2 = $(this).parents('.lunbo').children('.lb-in').children('.p2'),
		p3 = $(this).parents('.lunbo').children('.lb-in').children('.p3');
	p1.removeClass('p1').addClass('p2');
	p2.removeClass('p2').addClass('p3');
	p3.removeClass('p3').addClass('p1');
})
$('.lunbo .lb-l').click(function() {
	var p1 = $(this).parents('.lunbo').children('.lb-in').children('.p1'),
		p2 = $(this).parents('.lunbo').children('.lb-in').children('.p2'),
		p3 = $(this).parents('.lunbo').children('.lb-in').children('.p3');
	p1.removeClass('p1').addClass('p3');
	p2.removeClass('p2').addClass('p1');
	p3.removeClass('p3').addClass('p2');
})












