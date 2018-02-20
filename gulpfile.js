var gulp               = require('gulp'),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		autoprefixer   = require('gulp-autoprefixer')

gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(autoprefixer(['last 15 versions']))
		.pipe(gulp.dest('app'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {gulp
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});


gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('app/scss/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);

