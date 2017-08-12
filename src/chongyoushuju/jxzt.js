// 大按钮移动效果
var transList = [110, 385, 655];
$('.mt-t').click(function() {
	$('.mt-t').removeClass('ACTIVE');
	$(this).addClass('ACTIVE');
	$('#zhibiao').css('transform', 'translate(' + transList[$(this).attr('a')] + 'px, 103px)');


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


var _WorkRatio = []
var a = document.createElement('script')
a.src = 'http://www.yangruixin.com/test/test.php?RequestType=WorkRatio_FE';
$('body').append(a);
function WorkRatio(e) {
	_WorkRatio = e.Data;
	var xx = echarts.init($('#charts-6')[0]);
	var college = [],
		radio = [];
	e.Data.forEach(function(a, b, c) {
		college.push(a.college);
		radio.push({
			value:parseFloat(a.ratio),
			itemStyle: {
			}
		})
	})
	console.log(e);

	$('.mt-t[a=2]')[0].addEventListener('click',function() {
		setTimeout(function() {
			xx.setOption({
				title: {
					text: ''
				},
				tooltip: {},
				xAxis: {
					axisTick: {
						show: false
					},
					name: '学院名字',
					nameTextStyle: {
						color: '#98cf67'
					},
					data: college,
					axisLabel: {
						rotate: 25,
						interval: 0,
						textStyle: {
							color: '#ef9267'
						}
					},
					axisLine:{
		                lineStyle:{
		                    color:'#f6a439',
		                    width:4,
		                }
		            },
		            splitLine: {
		            	show: false
		            }
				},
				yAxis: {
					axisTick: {
						show: false
					},
					name: '就业率',
					nameTextStyle: {
						color: '#98cf67'
					},
					axisLabel: {
						interval: 0,
						textStyle: {
							color: '#ef9267'
						}
					},
					axisLine:{
		                lineStyle:{
		                    color:'#f6a439',
		                    width:4,
		                }
		            },
		            splitLine: {
		            	show: false
		            }
				},
				series: [{
					type: 'bar',
					data: radio,
					barWidth: '20px',
		            // label: {
		            // 	normal: {
		            // 		show: true,
		            // 		position: 'top'
		            // 	}

		            // },
					itemStyle: {
						normal: {
							barBorderRadius: [5, 5, 0, 0],
							shadowColor: 'rgba(0, 0, 0, .0001)',
							shadowBlur: 30,
							color: new echarts.graphic.LinearGradient(
								0, 0, 0, 1,
								 [
		                            {offset: 1, color: '#f6a439'},
		                            {offset: 0.5, color: '#f6a439'},
		                            {offset: 0, color: '#ffc750'}
		                        ]
							)
						},
						emphasis: {
							color: '#f6a439',
			                shadowBlur: 50,
			                shadowColor: 'rgba(0, 0, 0, 0.1)'
						}
					},
					// markPoint: {
			  //           data: [
			  //               {type: 'max', name: '最大值'},
			  //               {type: 'min', name: '最小值'}
			  //           ]
			  //       },
			        animationDelay: function (idx) {
			            return idx * 10;
			        }
				}],
				animationEasing: 'elasticOut'
			})

		},300)
	});
}










































var l3tlist2 = [152, 543];
$('#mm1 .m3t-li').click(function() {
	$('.m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('.m3t-biao').css('transform', 'translate(' + l3tlist2[$(this).attr('a')] + 'px, 67px)');
	$('.mm3m').css('opacity', 0);
	var _this = this;
	console.log($(_this).attr('a'));
	setTimeout(function() {
		$('.mm3m').hide();
		$('#mm3m-' + $(_this).attr('a')).css('display', 'block');
		setTimeout(function() {
			$('#mm3m-' + $(_this).attr('a')).css('opacity', '1');
		}, 10)
	}, 200)
});
$('#mm1 .m3t-li').eq(0).click();




$('#mm2 .m3t-li').click(function() {
	$('.m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('.m3t-biao').css('transform', 'translate(' + l3tlist2[$(this).attr('a')] + 'px, 67px)');
	$('.mm4m').css('opacity', 0);
	var _this = this;
	setTimeout(function() {
		$('.mm4m').hide();
		$('#mm4m-' + $(_this).attr('a')).css('display', 'block');
		setTimeout(function() {
			$('#mm4m-' + $(_this).attr('a')).css('opacity', '1');
		}, 10)
	}, 200)
});
$('#mm2 .m3t-li').eq(0).click();











