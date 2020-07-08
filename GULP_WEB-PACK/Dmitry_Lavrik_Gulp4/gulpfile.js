const gulp = require('gulp'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    browserSync = require('browser-sync').create();

const cssFiles = [
    './node_modules/normalize.css/normalize.css',
    './src/css/some.css',
    './src/css/other.css'
]

const jsFiles = [
    './src/js/lib.js',
    './src/js/some.js'
]

function styles() {
    return gulp.src(cssFiles)
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['> 0.1%'],
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function script() {
    return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./src",

        },
        tunnel: true
    });
    gulp.watch('./src/css/**/*.css', styles);
    gulp.watch('./src/js/**/*.js', script);
    gulp.watch('./*.html', browserSync.reload);
}


function clean() {
    return del(['build/*']);
}

gulp.task('styles', styles);
gulp.task('script', script);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, script)));
gulp.task('dev', gulp.series('build', 'watch'));