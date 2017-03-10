var gulp=require('gulp'),
	uglify=require('gulp-uglify'),
	sass=require('gulp-sass'),
	concat=require('gulp-concat'),
	webserver=require('gulp-webserver'),
	compress=require('gulp-compress');

gulp.task('compress',function(){
	gulp.src('./index.js')
	.pipe(uglify())
	.pipe(gulp.dest('./css'))
})

gulp.task('sass',function(){
	gulp.src('scss/index.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
})
gulp.task('concat',function(){
	gulp.src(['index.js','index2.js'])
	.pipe(concat('concat.js'))
	.pipe(uglify())
	.pipe(gulp.dest('css'))
})
gulp.task('webserver',['default'],function(){
	gulp.src('./')
	.pipe(webserver({
		/*port:8088,*/
		open:true,
		livereload:true,
		directoryListing:true/*{
			enable:true,
			path:'./css'
		}*/
	}))
})

gulp.task('default',function(){
	gulp.watch('./scss/*.scss',['sass'])
	
})