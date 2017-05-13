var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');

gulp.task('styles', function(){
	gulp.src('src/assets/src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/'));
});

gulp.task('images', function(){
	gulp.src('src/assets/src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('src/assets/images/'));
});

gulp.task('default', function(){
	gulp.watch('src/assets/src/scss/**/*.scss', ['styles', 'images']);
});