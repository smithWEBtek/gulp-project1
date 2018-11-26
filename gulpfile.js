var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('watch', function () {
	// gulp.watch('app/scss/**/*.scss', ['sass'])
	//https://stackoverflow.com/questions/39665773/gulp-error-watch-task-has-to-be-a-function
	gulp.watch('app/scss/**/*.scss', gulp.series('sass'))
})

gulp.task('hello', function (done) {
	console.log("hello zell")
	done()
});

// gulp.task('sass', function () {
// 	return gulp.src('app/scss/styles.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('app/css'))
// });

gulp.task('sass', function () {
	return gulp.src('app/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});