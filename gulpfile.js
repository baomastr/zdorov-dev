var gulp = require ('gulp'),
  watch = require ('gulp-watch'),
  connect = require ('gulp-connect'),
  jade = require ('gulp-jade'),
  stylus = require ('gulp-stylus'),
  nib = require('nib'),
  spritesmith = require('gulp.spritesmith'),
  // autoprefixer = require('gulp-autoprefixer');
  uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");

gulp.task('js', function() {
    gulp.src('dist/js/app.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/jsmin'))
});

gulp.task('sprite', function() {
  var spriteData = 
    gulp.src('assets/images/sprite/*.png') 
      .pipe(spritesmith({
          imgName: 'sprite2.png',
          cssName: 'sprite.styl',
          cssFormat: 'stylus',
          algorithm: 'binary-tree',
          padding: 10,
          cssTemplate: 'stylus.template.mustache',
          cssVarMap: function(sprite) {
              sprite.name = 'sprite-' + sprite.name
          }
      }));
  spriteData.img.pipe(gulp.dest('dist/images/')); 
  spriteData.css.pipe(gulp.dest('stylus')); 
});

gulp.task('connect',function(){
  connect.server({
    root: './dist',
    livereload: true,
    port: 1338
    })
  });

gulp.task('jade',function(){
  gulp.src('jade/*.jade')
    .pipe(jade({
      pretty: true
      }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
  });

gulp.task('stylus', function(){
  gulp.src('stylus/*.styl')
    .pipe(stylus({
      use: nib(),
      compress: true
      }))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
  });

gulp.task('watch',function(){
  gulp.watch('stylus/*.styl',['stylus']);
  gulp.watch('jade/*.jade',['jade']);
    gulp.watch('js/*.js',['js']);
  // gulp.watch('dist/css/*.css',['prefix']);
  gulp.watch('assets/images/sprite/*.*',['sprite']);
  watch('dist/*.').pipe(connect.reload());
});

gulp.task('default',['connect', 'jade', 'js', 'sprite', 'stylus', 'watch']);