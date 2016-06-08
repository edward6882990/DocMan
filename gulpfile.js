var gulp       = require('gulp');
var fs         = require('fs');
var browserify = require('browserify');
var watchify   = require('watchify');

gulp.task('default', function(){
  gulp.start('watch');
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
