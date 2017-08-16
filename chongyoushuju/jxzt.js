// 大按钮移动效果
var transList = [110, 385, 655];
$('.mt-t').click(function() {
	$('.mt-t').removeClass('ACTIVE');
	$(this).addClass('ACTIVE');
	$('#zhibiao').css('transform', 'translate(' + transList[$(this).attr('a')] + 'px, 103px)');
	$('#zhibiao').css('background-image', 'url(./images/zhibiao' + ($(this).attr('a') == '2' ? '' : '-G' ) + '-min.png')

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





var a = document.createElement('script')
a.src = './data/x.txt';
$('body').append(a);
function WorkRatio(e) {
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
						rotate: 18,
						interval: 0,
						textStyle: {
							color: '#ef9267',
							fontSize: 10
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


var _b = document.createElement('script')
_b.src = 'http://hongyan.cqupt.edu.cn/welcome/2017/api/apiForFE.php?RequestType=SexRatio_FE';
$('body').append(_b);
function SexRatio(e) {
	var college = [],
		radio = [];
	e.Data.forEach(function(a, b, c) {
		college.push(a.college);
		radio.push({
			value: parseFloat(a.WomenRatio),
			itemStyle: {
			}
		})
	})

	var xx = echarts.init($('#charts-1')[0]);

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
					rotate: 18,
					interval: 0,
					textStyle: {
						color: '#ef9267',
						fontSize: 10
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
				name: '女生占比',
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
		        animationDelay: function (idx) {
		            return idx * 10;
		        }
			}],
			animationEasing: 'elasticOut'
		})

}









$.ajax({
	url: './data/m.txt',
	success: function(e) {
		e = $.parseJSON(e);
		var tt = echarts.init($('#charts-3')[0]);
		var college = [],
			radio = [];
		e.Data.forEach(function(a, b, c) {
			a.major.forEach(function(_a, _b, _c) {
				college.push(a.college + '-' + _a.major);
				radio.push(_a.course);
			})
		})
		var _picker = '';
		college.forEach(function(a, b, c) {
			_picker += ' <option value ="' + b + '">' + a + '</option>';
		})
		$('#picker').html(_picker);
		$('#picker').change(function(e) {
			var xx = [],
				mm = [];

			radio[$(this).val()].forEach(function(a, b, c) {
				xx.push(a.course);
				mm.push(parseFloat(a.ratio));
			})
			tt.setOption({
				title: {
					text: ''
				},
				tooltip: {},
				xAxis: {
					axisTick: {
						show: false
					},
					name: '课程名称',
					nameTextStyle: {
						color: '#98cf67',
					},
					gird: {
						bottom: 100
					},
					data: xx,
					axisLabel: {
						rotate: 18,
						interval: 0,
						textStyle: {
							color: '#ef9267',
							fontSize: 10
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
					name: '65分以下频率',
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
					data: mm,
					barWidth: '80px',
					itemStyle: {
						normal: {
							barBorderRadius: [10, 10, 0, 0],
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
			        animationDelay: function (idx) {
			            return idx * 10;
			        }
				}],
				animationEasing: 'elasticOut'
			})
		});
		$('#picker').change();
	}
})


























var l3tlist2 = [152, 543];
$('#mm1 .m3t-li').click(function() {
	$('.m3t-li').removeClass('ACTIVE').filter(this).addClass('ACTIVE');
	$('.m3t-biao').css('transform', 'translate(' + l3tlist2[$(this).attr('a')] + 'px, 67px)');
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









