module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
        'fonts/**/*.{woff,woff2}',
        'img/**',
        '*.html',
        'external_library/**'
      ], {
        base: '.'
      })
      .pipe($.gulp.dest('build'));
  });
};