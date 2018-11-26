var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// gulp.task('watch', function () {
// 	// gulp.watch('app/scss/**/*.scss', ['sass'])
// 	//https://stackoverflow.com/questions/39665773/gulp-error-watch-task-has-to-be-a-function
// 	gulp.watch('app/scss/**/*.scss', ['browserSync'], gulp.series('sass'))
// })

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss',
		gulp.series('sass'),
		gulp.series('browserSync'))
});

gulp.task('hello', function (done) {
	console.log("hello zello")
	done()
});

// gulp.task('sass', function () {
// 	return gulp.src('app/scss/styles.scss')
// 		.pipe(sass())
// 		.pipe(gulp.dest('app/css'))
// });

// --- OR ----
// note, this creates a subdirectory under 'app/css/' called /scss

gulp.task('sass', function () {
	return gulp.src('app/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})
})