let gulp = require('gulp'),
	less = require('gulp-less'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

gulp.task('default', _=> {
	gulp.watch('./src/youzigonglue/jxzt.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('./src/youzigonglue'));
	});
	gulp.watch('./src/junxunzhuanti/jxzt.less', (e)=> {
		gulp.src(e.path).pipe(less()).pipe(gulp.dest('./src/junxunzhuanti'));
	});
	gulp.src('./src/images/*.*').pipe(imagemin({progressive: true, use: [pngquant({quality: '65-80'})]})).pipe(gulp.dest('./src/sss'));
})
