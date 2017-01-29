var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('jsbundle', function() {
  return gulp.src('./js/*.js')
    .pipe(concat('egen_cc_logo.js'))
    .pipe(gulp.dest('./dist/'));
});