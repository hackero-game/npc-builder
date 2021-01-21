const gulp = require('gulp');
const less = require('gulp-less');
const open = require('gulp-open');
const connect = require('gulp-connect');

/* -- BUILD -- */


/* -- WATCH -- */

// Gulp task to create a web server
function watch_connect() {
  connect.server({
    root: 'src',
    port: 8040,
    livereload: true
  });
};

// Gulp task to open the default web browser
function watch_open() {
  gulp.src('src/index.html')
    .pipe(open({ uri: 'http://127.0.0.1:8050/' }));
};


function watch_lessCompile(cb) {
  return gulp.src('./src/**/*.less')
    .pipe(less({
      paths: []
    }))
    .pipe(gulp.dest('./src/'));
  cb();
}

function watch(cb) {
  watch_connect()
  gulp.watch(['src/**/*.html', 'src/**/*.less'], gulp.series(watch_lessCompile));
}
exports.watch = watch;