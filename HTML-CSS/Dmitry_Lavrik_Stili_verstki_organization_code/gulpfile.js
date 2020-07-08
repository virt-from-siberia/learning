const gulp = require('gulp');
const less = require('gulp-less');

function styles() {
    return gulp.src('./less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./css'));
}

function watch() {
    return gulp.watch('./less/**/*.less', styles);
}


gulp.task('css', styles);
gulp.task('watch', watch);