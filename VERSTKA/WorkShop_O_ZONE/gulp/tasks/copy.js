module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
        'fonts/**/*.{woff,woff2,OTF}',
        'img/**',
        '*.html',
        'db/**',
        'favicon/**'
      ], {
        base: '.'
      })
      .pipe($.gulp.dest('build'));
  });
};