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




var l3tlist = [55, 245, 440, 635];
var wenzimiaoshu = [{
	t: '兴业苑（17--23）：',
	p: '屹立于悠悠重邮高处，周边风景秀丽，分布在太极运动场周围，，周边有学校的兴业苑食堂及众多的超市、商铺，校车从这里穿过，内部均设有独立卫生间，并在一些楼层设有洗衣机供大家使用，根据每栋宿舍不同，楼层不同分为4人间、6人间两种。4人间都是上床下铺，而6人间则是上下铺与上床下桌的混搭。'
},{
	t: '知行苑（1—6，15,16）：',
	p: '位于中心食堂附近的1,5,6栋是学校现存最老的寝室，住宿条件比较差，整体情况是每层楼设有公用的卫生间、洗澡间，这也就意味着每个寝室都没有独立卫生间，没有阳台。处于校园中心，上课、生活都极其便利。楼栋周边环境一流，食堂与超市一应俱全，为学习生活提供不少的便利。'
},{
	t: '明理苑（24—31,39）：',
	p: '位于千喜鹤食堂正街上，可以俯瞰全校以及南山的部分美丽景色，这里也是重邮夏天最凉爽的地方。可以坐私家车直达寝室，周围有两个超市和上铺，并且校车穿过，每个寝室都为6人间，并设有独立卫生间，每一栋楼里面配置有洗衣机可供大家使用，应有尽有，可以尽情满足同学们的平日生活需求。'
},{
	t: '宁静苑（8—12，32--35）：',
	p: '坐落在美丽的情人坡旁，是妹子们散心聊天约会的好去处；篮球、网球、羽毛球这些周围球场为大家的锻炼提供了方便，与新校区紧连，周边分布有“千喜鹤”、“延生”等食堂。宿舍基本为6人间基本情况与22-24相同且有独立的阳台、卫浴，床铺是上下铺与上床下桌的混搭，人流量很少，环境比较清静。'
}]
$('#mm1 .m3t-li').click(function() {
	$('.m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('.m3t-biao').css('transform', 'translate(' + l3tlist[$(this).attr('a')] + 'px, 67px)');

	$('#mm1 .lunbo .lb-item div').html($(this).html());
	var _this = this;
	$('#mm1 .lunbo .lb-item').each(function(index, el) {
		$(el).css('background-image', 'url(./images/qinshi/' + (parseInt($(_this).attr('a')) + 1) + '/' + (index+1) + '.jpg'); 
	});
	$('#mm1 .lb-tit').html(wenzimiaoshu[$(_this).attr('a')].t);
	$('#mm1 .lb-p').html(wenzimiaoshu[$(_this).attr('a')].p);












});
$('#mm1 .m3t-li').eq(0).click()

var wenzimiaoshu2 = [{
	t: '兴业苑：',
	p: '位处红高粱之下，“快递一条街”之上，毗邻兴业苑宿舍，是兴业苑众多的男神女神便捷的就餐地点。而兴业苑的叔叔阿姨更是对饭菜份量绝对不含糊，深刻关心同学们的营养问题，那可是一勺就一勺，半分手不抖。打包速度之快，重邮就此一家，别无分号。这可是让明理苑、知行苑等的同学嫉妒兴业苑的地理位置得不行呢！'
}, {
	t: '千喜鹤：',
	p: '千喜鹤——上过微博热搜的网红食堂，地处明理苑片区，学生宿舍管理中心对面，与延生食堂是“上下层”关系。“五彩琉璃瓦，星光耀重邮。”作为开放到夜晚的千喜鹤食堂，华丽的八角灯和亮丽的小彩灯在五颜六色的高脚凳的映衬下特别有小酒吧的文艺清新范。而美食更多，不仅有水果烤肉套餐、麦嘉基炸鸡，还有文艺的过桥米线，更重要的是在千喜鹤你能享受到下午茶待遇，蛋糕和甜点绝对千喜鹤一大特色。而传说中的“别人家的食堂”现在就是你家的食堂啦！'
}, {
	t: '大西北：',
	p: '这，就是学校唯一的清真食堂啦！相对来说这里应该是重邮打包最为方便的地方，里面的阿姨也都是少数民族哟！如果有宗教信仰的小伙伴或者想尝尝大西北特色的同学一定不要错过这里。既然是大西北，西北的美食——兰州拉面也是最为出名的，但我们的大西北食堂同样不遑多让，不仅这里的面韧劲十足，这里的汤也是鲜美可口。如果去大西北，一定要点上一碗牛肉拉面尝尝这里的特色。'
}, {
	t: '红高粱：',
	p: '重邮流传着这样一句话：敢于从老校门到红高粱吃饭的人都是勇士，“高粱”之“高”在长长的阶梯之上，成功的使它荣获“重邮最高食堂”之称。因其与张艺谋大导演电影《红高粱》重名，不免让人联想到影后巩俐之美和高粱酒的美味，而在重邮红高粱，也是前有红高粱女神，后有红高粱美食。红高粱食堂不仅便宜美味，而且风景优美，尤其是当你爬过漫长阶梯，转身回望重邮，恍然升起一种“一览众山小”之感，其绝对是重邮一大特色食堂！'
}, {
	t: '中心食堂：',
	p: '中心，中心，听名字就知道位处于重邮中心，地理位置的优越不仅来源于它历史的悠久，更是因为中心特色小面的支持，这里一砖一瓦都沉淀着岁月的气息。由于离二教很近，所以也常常是同学们打包就餐的不二选择。早饭的选择是犹为多的，又大又好吃又便宜的素菜包子和肉花卷、馒头加豆浆，绝对会让你一天都精神饱满的去上课。当然每当早起时，在热闹非凡的雨红莲广场旁，吃着中心的小面，看着红房子，仿佛感受着无声的过去的故事，也是一种极好的感受。'
}, {
	t: '延生：',
	p: '千喜鹤之下的优秀食堂，美食窗口众多，各有特色，每年都会不断推陈出新，更重要的是性价比非常高，因此吸引了莘莘学子，客流量很大。来自”延生”不断的热情推出了石锅拌饭、冒菜，咖喱炒饭等特色。而食堂的剁椒拌面绝对符合重庆特色。如果你感觉很辣，那来杯西瓜汁降降火。食堂内有各种鲜榨果汁。军训那几天，喝上一杯延生西瓜汁，真是降火消暑又愉悦人心，睡上一个饱饱的午觉。嗯，该到延生吃饭了哟！'
}]
var l3tlist2 = [21, 150, 278, 407, 535, 663]
$('#mm3 .m3t-li').click(function() {
	$('#mm3 .m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('#mm3 .m3t-biao').css('transform', 'translate(' + l3tlist2[$(this).attr('a')] + 'px, 67px)');
	$('#mm3 .mm3m').css('opacity', 0);
	var _this = this;

	$('#mm3 .lunbo .lb-item').each(function(index, el) {
		$(el).css('background-image', 'url(./images/shitang/' + (parseInt($(_this).attr('a')) + 1) + '/' + (index+1) + '.jpg'); 
	}).find('div').html((wenzimiaoshu2[$(_this).attr('a')].t).split('：')[0]);
	$('#mm3 .lb-tit').html(wenzimiaoshu2[$(_this).attr('a')].t);
	$('#mm3 .lb-p').html(wenzimiaoshu2[$(_this).attr('a')].p);







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

var miaoshu = [{}, {
	x: '涂山湖',
	l: '新校门出去，向二外的方向。',
	p: '涂山湖公园分东西南北打造四季景色：湖东面参差的民居被错落有致的植被替代，构成“翠堤画屏”的春季意境；毗邻二外的北面，凸显“荷塘月色”的夏季意境；西面的黄桷垭文化广场延伸到湖边，体现“林木深秋”的秋季意境；南面则以大堤坝和游园为平台，形成冬日清晨“白雾青黛”的冬季意境……'
}, {
	x: '一棵树观景台',
	l: '老校门搭347/346到四中站下，步行1.2公里到一棵树观景台',
	p: '重庆南山一棵树观景台位于南岸区王家山脉临江半山腰处，与重庆主城区隔江相望，是重庆都市旅游的必到之地。在这里可以看见重庆城这座山水之城的起伏面貌。'
}, {
	x: '老君洞',
	l: '位于黄桷古道边',
	p: '老君洞道观是重庆主城区最大最主要的宫观，也是重庆市的重要道观。数百年来，每逢初一、十五或清明、中元等传统节日，香客朝香，游人登高，香火一时胜极。道观内香烟氤氲缭绕，山路上行人络绎不绝。'
}]

$('.lunbo .lb-r').click(function() {
	var p1 = $(this).parents('.lunbo').find('.p1'),
		p2 = $(this).parents('.lunbo').find('.p2'),
		p3 = $(this).parents('.lunbo').find('.p3')
	p1.removeClass('p1').addClass('p2');
	p3.removeClass('p3').addClass('p1');
	p2.removeClass('p2').addClass('p3');

	setTimeout(function() {
		$('#mm4 .lb-tit').html('地址：' + miaoshu[$('#mm4 .p2').attr('a')].l);
		$('#mm4 .lb-p').html('描述：' + miaoshu[$('#mm4 .p2').attr('a')].p);
	}, 100)
})
$('.lunbo .lb-l').click(function() {
	var p1 = $(this).parents('.lunbo').find('.p1'),
		p2 = $(this).parents('.lunbo').find('.p2'),
		p3 = $(this).parents('.lunbo').find('.p3');
	p1.removeClass('p1').addClass('p3');
	p2.removeClass('p2').addClass('p1');
	p3.removeClass('p3').addClass('p2');

	setTimeout(function() {
		$('#mm4 .lb-tit').html('地址：' + miaoshu[$('#mm4 .p2').attr('a')].l);
		$('#mm4 .lb-p').html('描述：' + miaoshu[$('#mm4 .p2').attr('a')].p);
	}, 100)
})









var _dfas = document.createElement('script');
_dfas.src = 'http://hongyan.cqupt.edu.cn/welcome/2017/api/apiForFE.php?RequestType=QQGroup_FE';
$('body').append(_dfas);
function QQGroup_FE(e) {
	var _list = '';
	_list += '<div class="lb-tit">学院新生群</div>';
	e.Data.college.forEach(function(a, b, c) {
		_list += '<div class="lb-p">' + a.GroupName + ': ' + a.Number + '</div>';
	});
	_list += '<div class="lb-tit">老乡群</div>';
	e.Data.homeland.forEach(function(a, b, c) {
		_list += '<div class="lb-p">' + a.GroupName + ': ' + a.Number + '</div>';
	});
	$('#mm5').html(_list);
}
























/*

		修bug的区域（orz


*/

//字多了换行bug
$('.showitem:even').css('clear', 'left')









