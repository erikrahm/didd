// gulpfile.js
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var source      = require('vinyl-source-stream');
var babelify    = require('babelify');
var watchify    = require('watchify');
var browserify  = require('browserify');
var browserSync = require('browser-sync').create();

watchify.args.debug = true;

// dat bundler
var bundler = watchify(browserify('./src/scripts/script.js', watchify.args));

bundler.transform(babelify.configure({
  presets: ["es2015", "react"]
}));

bundler.on('update', bundle);

// The function that bundles
function bundle() {

  gutil.log('Bundling dat shittttt...');

  return bundler.bundle()
    .on('error', function (err) {
      gutil.log('Oh shit waddup');
      gutil.log(err.message);
      this.emit("end");
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream({ once: true }));
}

gulp.task('bundle', function () {
  return bundle();
});

// change damn you
gulp.task('default', ['bundle'], function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch('index.html', function() {
    browserSync.reload();
  })
});