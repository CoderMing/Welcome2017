let gulp = require('gulp'),
	less = require('gulp-less');

gulp.task('default', _=> {
	gulp.watch('youzigonglue/jxzt.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('youzigonglue'));
		console.log('12321');
	});
	gulp.watch('junxunzhuanti/jxzt.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('junxunzhuanti'));
	});
	gulp.watch('chongyoufengcai/jxzt.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('chongyoufengcai'));
	});
	gulp.watch('chongyoushuju/jxzt.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('chongyoushuju'));
	});
	gulp.watch('xx.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest(''));
	});
})
