var gulp = require('gulp');
// add the browserSync module reference
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  browserSync.init({
    server: "./"
  });
});