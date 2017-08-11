let gulp = require('gulp'),
	less = require('gulp-less');

gulp.task('default', _=> {
	gulp.watch('./src/youzigonglue/jxzt.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('./src/youzigonglue'));
		console.log('12321');
	});
	gulp.watch('./src/junxunzhuanti/jxzt.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('./src/junxunzhuanti'));
	});
	gulp.watch('./src/chongyoufengcai/jxzt.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('./src/chongyoufengcai'));
	});
	gulp.watch('./src/xx.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('./src'));
	});
})
