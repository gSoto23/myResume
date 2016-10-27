var gulp = require('gulp'),
	uglyfly = require('gulp-uglyfly');

gulp.task('default', function(){
	gulp.src('js/*.js')
	.pipe(uglyfly())
	.pipe(gulp.dest('minjs'))
});