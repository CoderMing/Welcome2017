// 加载动画
if ($('#loading')) {
	setTimeout(function() {
		$('#loading').remove();
	}, 5500)
}

// header
$(window).scroll(function() {
	if ($(window).scrollTop() > 60) {
		$('#nav').addClass('toSmall')
	} else {
		$('#nav').removeClass('toSmall')
	}
	if ($(window).scrollTop() > 500) {
		$('#fanhuidingbu').css('opacity', '1')
		if ($(document).scrollTop() + $(window).height() >=  $(document).height() - 175) {
			$('#fanhuidingbu').css('bottom', '200px')
			$('#qrcode1, #qrcode2').css('top', '10vh')
		} else {
			$('#fanhuidingbu').css('bottom', '5vh')
			$('#qrcode1, #qrcode2').css('top', '30vh')
		}
	} else {
		$('#fanhuidingbu').css('opacity', '0')
	}
});


var originPath = location.origin + location.pathname;
$('#nav .ni-r li:gt(0)').on('click', function(e) {
	$('#nav .ni-r li').each(function() {
		$(this).removeClass('ACTIVE')
	});
	$(this).addClass('ACTIVE');
	
	// 高度跳转
	$(window).scrollTop($('#car').offset().top + $('#car').height() - 50)

	// iframe切换

	var _this = this;
	$('#child')
		.css({
			opacity: 0
 		});
	setTimeout(function() {
		$('#lc-loading').show(200);
 		$('#child').attr('src', $(_this).attr('goto'));
 		$('#child').height(1000);   //先降低iframe的高度 然后再使用offsetTop  此处默认iframe永远不低于1000px
	}, 300);
	$('#child').on('load', function() {
		if (e && e.gotoBBM) {
			$('iframe').contents().find('li.button2.xuezhangon').click();
		}
		$('#lc-loading').hide(200);
		// history.pushState({time: new Date().getTime()}, '',  originPath + $(_this).attr('goto').replace(/\.\/(.*?)\/index\.html/, '$1'))
 		setTimeout(function() {
 			iframeLoad();
 			$('#child').css('opacity', 1);
 		}, 100);
	});
});
$('#lc-loading').hide(100);
// 倒计时
setInterval(function() {
	// 开学当日时间
	var x = new Date(),
		startDate = 12, //9月该日零时开学
		list = [2.33, 11.7, 21.05, 30.4, 39.8, 49.2, 58.55, 68, 77.4, 87];
	var seconds = 59 - x.getSeconds(),
		minutes = 59 - x.getMinutes(),
		hours = 23 - x.getHours(),
		days = x.getMonth()==7?(startDate + 30)-x.getDate():(startDate - 1)-x.getDate();
	if(days < 0) {
		seconds = 0;
		minutes = 0;
		hours = 0;
		days = 0;
	};

	function change(s, m, t) {
		s.css('background-position', '40% ' + list[Math.floor(t/10)] + '%');
		m.css('background-position', '40% ' + list[t%10] + '%');
	}
	change($('#yishuzi1'), $('#yishuzi2'), days);
	change($('#yishuzi3'), $('#yishuzi4'), hours);
	change($('#yishuzi5'), $('#yishuzi6'), minutes);
	change($('#yishuzi7'), $('#yishuzi8'), seconds);
}, 1000);

// banner
function changeShan(e) {
	function move(s, x, y) {
		s.css('transform', 'translate(' + e.originalEvent.screenX*x/10000 + 'vw,' + e.originalEvent.screenY*y/10000 + 'vw)');
	}
 	move($('#shan'), -8, -5);
 	move($('#lantian'), -13, -10);
	move($('#taiyang'), -23, -20);
	// move($('#flyman'), 13, 8);
}
$(window).mousemove(changeShan);


// 中间iframe

function iframeLoad() {
	$('#child').height($('#child').contents().height());
	$('#child').contents().mousemove(changeShan);

	// item
	if ($('iframe').contents().find('.mm2t-item').length) {
		$('iframe').contents().find('.mm2t-item').click(function() {
			$('#cover img').attr('src', './junxunzhuanti/images/ldfc/' + $(this).attr('pi') + '.jpg');
			$('#cover .ca-tit').html($(this).find('div').html());
			$('#cover .ca-p').html($(this).attr('al'));
			$('#cover').show();
			setTimeout(function() {
				$('#cover').css('opacity', 1);
			}, 10);
		});
		$([$('#coverArt .guanbi')[0], $('#cover')[0]]).click(function() {
			$('#cover').css('opacity', 0);
			setTimeout(function() {
				$('#cover').hide();
			}, 200);
		});
	}
	$('#child').contents().find('.mes_mesinput1').click(function(){$('.ni-r li').eq(4).click()});
	$('#child').contents().find('.mes_mesinput2').click(function(){$('.ni-r li').eq(2).click()});
	$('#child').contents().find('.mes_mesinput3').click(function(){$('.ni-r li').eq(3).click()});
	$('#child').contents().find('.mes_mesinput4').click(function(){$('.ni-r li').eq(0).click()});
	$('#child').contents().find('.arm_input').click(function(){$('.ni-r li').eq(5).click()})
	$('#child').contents().find('.wel_learn1').click(function(){$('.ni-r li').eq(1).click()})
	$('#child').contents().find('.wel_learn2').click(function(){$('.ni-r li').eq(1).click({gotoBBM: true})})
};
setTimeout(function() {
	iframeLoad();
}, 1000);
$('iframe').hover(function() {
	$(this).click();
})






// 返回顶部
$('#fanhuidingbu').click(function() {
	var top = $(window).scrollTop(),
		interval = setInterval(function() {
			$(window).scrollTop($(window).scrollTop() - top/15);
			if ($(window).scrollTop() <= 0) {
				clearInterval(interval);
			}
		}, 15); 
})















console.log('%c ', 'line-height:500px;background-image:url("https://www.coderming.com/Welcome2017/src/1.jpg");background-repeat:no-repeat;background-size:100% 100%;padding:225px 405px;');
console.log('2017红岩网校PC端新生专题网项目组（从左到右）：匡俊嘉，彭时夏，卢帅，王佳，田秋怡，王弘毅，程浚哲，张德明 and尚未出镜的 龚梅，詹磊～')







