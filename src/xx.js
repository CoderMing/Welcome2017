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
$('#nav .ni-r li:gt(0)').on('click', function() {
	$('#nav .ni-r li').each(function() {
		$(this).removeClass('ACTIVE')
	});
	$(this).addClass('ACTIVE');
	
	var toFrame = ($('#car').offset().top + $('#car').height() - 50) - $(window).scrollTop(),
		flag = 0,
		Inter = setInterval(function() {
		$(window).scrollTop($(window).scrollTop() + toFrame/15);
		if (++flag >= 15) {
			clearInterval(Inter);
		}
	}, 15);
});

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
function iframeOnload () {
	console.log('123');
	$('#child').contents().mousemove(changeShan);		
}

function changeShan(e) {
	function move(s, x, y) {
		s.css('transform', 'translate(' + e.originalEvent.screenX*x/10000 + 'vw,' + e.originalEvent.screenY*y/10000 + 'vw)');
	}
 	move($('#shan'), -8, -5);
 	move($('#lantian'), -13, -10);
	move($('#taiyang'), -23, -20);
	move($('#flyman'), 13, 8);
}
$(window).mousemove(changeShan);


// 中间iframe

function iframeLoad() {
	$('#child').height($('#child').contents()[0].body.scrollHeight);
};
setTimeout(function() {
	iframeOnload();
	iframeLoad();
}, 1000);
$('iframe').hover(function() {
	console.log('123');
	$(this).click();
})

// 返回顶部
$('#fanhuidingbu').click(function() {
	console.log('123');
	var top = $(window).scrollTop(),
		interval = setInterval(function() {
			$(window).scrollTop($(window).scrollTop() - top/15);
			if ($(window).scrollTop() <= 0) {
				clearInterval(interval);
			}
		}, 15); 
})

































