var gulp = require('gulp');

gulp.task('copy', function() {
	gulp.src('src/images/*', function() {
		console.log('copy images successed!\n');
	}).pipe(gulp.dest('dist/images'));

	gulp.src('src/vue/*', function() {
		console.log('copy js successed!');
	}).pipe(gulp.dest('dist'));
});