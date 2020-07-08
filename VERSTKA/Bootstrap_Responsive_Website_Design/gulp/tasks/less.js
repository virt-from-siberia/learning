module.exports = function () {
    $.gulp.task('less', function () {
        return $.gulp.src('less/style.less')
            .pipe($.gp.plumber())
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.less())
            .pipe($.gp.autoprefixer({
                overrideBrowserslist: ['last 2 versions']
            }))
            .pipe($.gp.csso())
            .pipe($.gp.rename('style.min.less.css'))
            .pipe($.gp.sourcemaps.write(''))
            .pipe($.gulp.dest('build/css'))
            .pipe($.browserSync.stream());
    });
};