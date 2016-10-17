'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uncss = require('gulp-uncss');

gulp.task('uncss', function () {
    return gulp.src('style.css')
        .pipe(uncss({

            html: [
                'http://www.zdorov.online/bolezni/',
                'http://www.zdorov.online/bolezni/rak-limfouzlov-na-shee/',
                'http://www.zdorov.online/bolezni/rak-limfouzlov/',
                'http://www.zdorov.online/bolezni/zheltuha/',
                'http://www.zdorov.online/bolezni/artroz/tazobedrennogo-sustava-3-stepeni/',
                'http://www.zdorov.online/bolezni/artroz/tazobedrennogo-sustava-1-stepeni/',
                'http://www.zdorov.online/bolezni/artroz/tazobedrennogo-sustava-2-stepeni/',
                'http://www.zdorov.online/bolezni/artroz/tazobedrennogo-sustava/',
                'http://www.zdorov.online/bolezni/zheltuha/u-novorozhdennyh/',
                'http://www.zdorov.online/bolezni/zheltuha/patologicheskaya-zheltuha-novorozhdennyh/',
                'http://www.zdorov.online/bolezni/zheltuha/gemoliticheskaya-zheltuha-novorozhdennyh/',
                'http://www.zdorov.online/bolezni/zheltuha/yadernaya-zheltuha-novorozhdennyh/',
                'http://www.zdorov.online/bolezni/zheltuha/konyugatsionnaya-zheltuha-novorozhdennyh/',
                'http://www.zdorov.online/bolezni/zheltuha/karotinovaya/',
                'http://www.zdorov.online/bolezni/zheltuha/holestaticheskaya/',
                'http://www.zdorov.online/bolezni/artroz/lechenie-artroza-plechevogo-sustava/',
                'http://www.zdorov.online/bolezni/tremor/golovy/',
                'http://www.zdorov.online/bolezni/tremor/lechenie-tremora-ruk/',
                'http://www.zdorov.online/bolezni/artroz/plechevogo-sustava/',
                'http://www.zdorov.online/bolezni/artroz/deformiruyushchiy-plechevogo-sustava/',
                'http://www.zdorov.online/bolezni/impotentsiya/lechenie-impotentsii/',
                'http://www.zdorov.online/bolezni/artroz/golenostopnogo-sustava/',
                'http://www.zdorov.online/bolezni/impotentsiya/',
                'http://www.zdorov.online/bolezni/gastrit/',
                'http://www.zdorov.online/bolezni/gastrit/lechenie-narodnymi-sredstvami/',
                'http://www.zdorov.online/bolezni/gastrit/lechenie/',
                'http://www.zdorov.online/bolezni/gastrit/ostriy-lechenie/',
                'http://www.zdorov.online/bolezni/gastrit/ostryy/',
                'http://www.zdorov.online/bolezni/gastrit/lechenie-pri-obostrenii/',
            ]
        }))
        .pipe(gulp.dest('css/bolezni'));
});

var conf = {
    css: './css/',
    scss: './scss/'
};

gulp.task('sass', function () {
    gulp.src(conf.scss+'*.scss')
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(gulp.dest(conf.css))
        .pipe(gulp.dest('css'))
});

gulp.task('prefix', function () {
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 10 versions', '>1%', 'ie 9'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('img',function(){
    gulp.src('./images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./images/'));
});

gulp.task('default', function () {
    livereload.listen();
    gulp.watch(conf.scss+'*.scss', ['sass']).on('change', livereload.changed);
    gulp.watch('*.html').on('change', livereload.changed);
});