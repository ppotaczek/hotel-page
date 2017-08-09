var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function(){
  return gulp.src('scss/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({errLogToConsole: true}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
})
gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['default']);
})
