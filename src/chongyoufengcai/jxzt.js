// 大按钮移动效果
var transList = [75, 280, 485, 690];
$('.mt-t').click(function() {
	$('.mt-t').removeClass('ACTIVE');
	$(this).addClass('ACTIVE');
	$('#zhibiao').css('transform', 'translate(' + transList[$(this).attr('a')] + 'px, 103px)');
	$('#zhibiao').css({
		'background': 'url(./images/zhibiao' + (($(this).attr('a')=='2' || $(this).attr('a')=='0') ? '-G' : '') + '-min.png) no-repeat',
		'background-size': 'contain'
	});

	var _this = this;
	$('.mm').removeClass('SHOW');
	$($('.mm')[$(this).attr('a')]).addClass('SHOW');
	$('#mm' + (parseInt($(this).attr('a')) + 1) + ' .m3t-li').eq(0).click();

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
$('.mt-t').get(0).click();










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
		if ($(_this).attr('a') == '0') {
			$('#mm3m-fl').show();
		}else {
			$('#mm3m-fl').css('opacity', 0);
			setTimeout(function() {
				$('#mm3m-fl').hide();
			}, 200)
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




$.ajax({
	url: './data/m.txt',
	success: function(e) {
		window._sorgData = $.parseJSON(e).Data;
		window._sorgData.forEach(function(a, b, c) {
			a.el = '';
			a.el += '<div class="mm3m-h">' + a.name + '</div>';
			a.el += '<div class="mm3m-p">' + a.resume + '</div>';
			a.department.forEach(function(_a, _b, _c) {
				a.el += '<div class="mm3m-h">' + _a.name + '</div>';
				a.el += '<div class="mm3m-p">' + _a.resume + '</div>';
			})
		})
		$('#mm3m-0').html(_sorgData[0].el);
	}
});

$('#mm3m-fl .orgtit').click(function(e) {
	if (e.target.className == 'orgtit') {
		$('#mm3m-fl .orgtit').removeClass('ACTIVE');
		$(this).addClass('ACTIVE');
		$('#mm3m-0').css('opacity', 0);
		var _this = this;
		setTimeout(function() {
			$('#mm3m-0').html(_sorgData[$(_this).attr('a')].el);
			$('#mm3m-0').css('opacity', 1);
		}, 200);
	}
});
var l3tlist2 = [152, 543];
$('#mm3 .m3t-li').click(function() {
	$('.m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('.m3t-biao').css('transform', 'translate(' + l3tlist2[$(this).attr('a')] + 'px, 67px)');
	$('.mm5m').css('opacity', 0);
	var _this = this;
	setTimeout(function() {
		$('.mm5m').hide();
		$('#mm5m-' + $(_this).attr('a')).css('display', 'block');
		setTimeout(function() {
			if ($(_this).attr('a') == '0') {
				$('#mm5m-fl').css('opacity', 1);
			}
			$('#mm5m-' + $(_this).attr('a')).css('opacity', '1');
		}, 10)
	}, 200)
});












$('.orgtit[a=2]').click({
	target: {
		className: 'orgtit'
	}
});



// 
// 
// 
// 
// 
// 
// 
// 
$.ajax({
	url: './data/x.txt',
	success: function(e) {
		var e = $.parseJSON(e);
		console.log(e);
		window._xueSheng = new Vue({
			el: '#mm5m-1',
			data: {
				item: e.Data
			}
		})
	}
})






