const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('es', () => {
    return gulp.src('./src/es6/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./src/js'));
});