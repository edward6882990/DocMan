var gulp       = require('gulp');
var fs         = require('fs');
var browserify = require('browserify');
var watchify   = require('watchify');
var sass       = require('gulp-ruby-sass');

gulp.task('default', function(){
  gulp.start('watch');
  gulp.start('styles');

  gulp.watch('www/scss/**/*.scss', { interval: 500 }, ['styles']);
});

gulp.task('watch', function(){
  var b = browserify({
    entries      : ['www/entry.js'],
    cache        : {},
    packageCache : {},
    plugin       : [watchify]
  });

  var bundle = function(){
    b.bundle().pipe(fs.createWriteStream('./www/js/main.js'));
  };

  b.on('update', bundle);
  bundle();
});

gulp.task('styles', function(){
  return sass('www/scss/**/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css'));
});
