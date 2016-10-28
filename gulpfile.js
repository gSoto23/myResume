var gulp = require('gulp'),
uglyfly = require('gulp-uglyfly');
sass = require('gulp-sass');
autoprefixer = require('gulp-autoprefixer')
sourcemaps = require('gulp-sourcemaps');


//Scripts Task
//Uglyfly
gulp.task('scripts', function(){
	gulp.src('js/*.js')
	.pipe(uglyfly())
	.pipe(gulp.dest('minjs'))
});

// //Autoprefix Task
// //Autoprefixer
// gulp.task('autoprefix', function(){
// 	gulp.src('./stylesheets/*.css')
// 	.pipe(autoprefixer({
// 		browsers: ['last 2 versions'],
// 		cascade: false
// 	}))
// 	.pipe(gulp.dest('./stylesheets'))
// });


//Task Sourcemap
//Sourcemap
gulp.task('smap', function(){
	gulp.src('./sass/**/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./stylesheets'))
});

//Style Task CSS
//Sass style
gulp.task('style', function(){
	gulp.src('./sass/**/*.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./stylesheets'))
});


//Gulp Watch 
gulp.task('watch', function(){
	gulp.watch('./js/*.js', ['scripts']);
	gulp.watch('./sass/**/*.scss', ['style']);
});

//Default Task
gulp.task('default', ['smap','scripts', 'style', 'watch']);


