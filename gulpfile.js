var gulp = require('gulp');
var concat = require('gulp-concat');
 
gulp.task('jsbundle', function() {

	var injectJsFiles = [
        './js/app.module.creditCard.js',
        './js/app.ccLogo.js',
        './js/app.ccLogoDirectiveController.js'
    ];

  return gulp.src(injectJsFiles)
    .pipe(concat('egen_cclogo.js'))
    .pipe(gulp.dest('./dist/'));
});