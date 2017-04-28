var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('app/assets/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css/'));
});

gulp.task('watch',function() {
    gulp.watch('app/assets/sass/*.scss',['styles']);
});