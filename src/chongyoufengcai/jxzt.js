// 大按钮移动效果
var transList = [75, 280, 485, 690];
$('.mt-t').click(function() {
	$('.mt-t').removeClass('ACTIVE');
	$(this).addClass('ACTIVE');
	$('#zhibiao').css('transform', 'translate(' + transList[$(this).attr('a')] + 'px, 103px)');
	$('#zhibiao').css({
		'background': 'url(./images/zhibiao' + (($(this).attr('a')=='2') ? '-G' : '') + '-min.png) no-repeat',
		'background-size': 'contain'
	});

	var _this = this;
	$('.mm').removeClass('SHOW');
	$($('.mm')[$(this).attr('a')]).addClass('SHOW');
	setTimeout(function() {
		$('#mm3m-fl').css('opacity', 0);
		$('.mm').css('opacity', 0);
		setTimeout(function() {
			$('.mm').hide();
			$('#mm3m-fl').hide();
			if ($(_this).attr('a') == '0') {
				$($('.mm')[$(_this).attr('a')]).find('.m3t-li').eq(0).click();
			}
			$($('.mm')[$(_this).attr('a')]).show().css('opacity', 0);
			setTimeout(function() {
				$($('.mm')[$(_this).attr('a')]).css('opacity', 1)
			}, 1)
		}, 200)
	}, 0)
});
$('.mt-t').get(3).click();










var l3tlist = [88, 348, 610];
$('#mm1 .m3t-li').click(function() {
	$('.m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('.m3t-biao').css('transform', 'translate(' + l3tlist[$(this).attr('a')] + 'px, 67px)');
	$('.mm3m').css('opacity', 0);
	if ($(this).attr('a') == '0') {
		$('#mm3m-fl').css('opacity', 0);
	}
	var _this = this;
	setTimeout(function() {
		$('.mm3m').hide();
		$('#mm3m-fl').hide();
		if ($(_this).attr('a') == '0') {
			$('#mm3m-fl').show();
		}
		$('#mm3m-' + $(_this).attr('a')).css('display', 'block');
		setTimeout(function() {
			if ($(_this).attr('a') == '0') {
				$('#mm3m-fl').css('opacity', 1);
			}
			$('#mm3m-' + $(_this).attr('a')).css('opacity', '1');
		}, 10)
	}, 200)
});
$('#mm1 .m3t-li').eq(0).click();














