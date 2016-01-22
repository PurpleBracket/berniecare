var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gzip = require('gulp-gzip');
var compass = require('gulp-compass');


gulp.task('ui', function () {
    return gulp.src(['bundle.js','bower_components/jquery/dist/jquery.min.js','js/underscore152.js','js/stepify.js']) //select all javascript files under js/ and any subdirectory
    .pipe(concat('serve.js')) //the name of the resulting file
    .pipe(uglify())
    .pipe(gzip())
    .pipe(gulp.dest('dist/js')) //the destination folder
});

gulp.task('compass', function() {
  gulp.src('sass/app.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'stylesheets/',
      sass: 'sass/'
    }))
    .pipe(gzip())
    .pipe(gulp.dest('dist/css/'));
});


gulp.task('default', ['ui', 'compass']);
