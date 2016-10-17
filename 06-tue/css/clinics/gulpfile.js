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
                'http://www.zdorov.online/clinics/',
                'http://www.zdorov.online/kt/golovi/deti/',
                'http://www.zdorov.online/rentgen-v-moskve/legkih/rebenku/',
                'http://www.zdorov.online/rentgen-v-moskve/zuba/3d/',
                'http://www.zdorov.online/mrt-v-moskve/golovnogo-mozga/sosudov/',
                'http://www.zdorov.online/mrt-v-moskve/golovnogo-mozga/angiografiya/',
                'http://www.zdorov.online/mrt-v-moskve/golovnogo-mozga/s-kontrastom/',
                'http://www.zdorov.online/mrt-v-moskve/golovnogo-mozga/rebenku/',
                'http://www.zdorov.online/mrt-v-moskve/golovi/cena/',
                'http://www.zdorov.online/mrt-v-moskve/pozvonochnika/nedorogo/',
                'http://www.zdorov.online/mrt-v-moskve/malogo-taza/jenshin/',
                'http://www.zdorov.online/mrt-v-moskve/malogo-taza/mujchin/',
                'http://www.zdorov.online/uzi/pochek/sosudov/',
                'http://www.zdorov.online/kt/kishechnika/',
                'http://www.zdorov.online/kt/kolennogo-sustava/',
                'http://www.zdorov.online/kt/kolonoskopiya/',
                'http://www.zdorov.online/kt/kostei-taza/',
                'http://www.zdorov.online/rentgen-v-moskve/nedorogo/',
                'http://www.zdorov.online/rentgen-v-moskve/na-domu/',
                'http://www.zdorov.online/rentgen-v-moskve/pochek/',
                'http://www.zdorov.online/mrt-v-moskve/pochek/',
                'http://www.zdorov.online/mrt-v-moskve/podjeludochnoi-jelezi/',
                'http://www.zdorov.online/mrt-v-moskve/nadpochechnikov/',
                'http://www.zdorov.online/mrt-v-moskve/malogo-taza/',
                'http://www.zdorov.online/mrt-v-moskve/prostati/',
                'http://www.zdorov.online/mrt-v-moskve/pecheni/',
                'http://www.zdorov.online/mrt-v-moskve/jelchnogo-puzirya/',
                'http://www.zdorov.online/mrt-v-moskve/mochevogo-puzirya/',
                'http://www.zdorov.online/mskt/pecheni/',
                'http://www.zdorov.online/mskt/nadpochechnikov/',
                'http://www.zdorov.online/mskt/shei/',
                'http://www.zdorov.online/mskt/plechevogo-sustava/',
                'http://www.zdorov.online/mskt/loktevogo-sustava/',
                'http://www.zdorov.online/mskt/nosa/',
                'http://www.zdorov.online/biopsiya/kostnogo-mozga/',
                'http://www.zdorov.online/vedenie-beremennosti/kliniki/',
                'http://www.zdorov.online/vedenie-beremennosti/kontract-programma/',
                'http://www.zdorov.online/kt/',
                'http://www.zdorov.online/rentgen-v-moskve/',
                'http://www.zdorov.online/dermatoskopiya/',
                'http://www.zdorov.online/vulvoskopiya/',
                'http://www.zdorov.online/spermogramma/',
                'http://www.zdorov.online/biopsiya/',
                'http://www.zdorov.online/fototrihogramma/',
                'http://www.zdorov.online/trihoskopiya/',
                'http://www.zdorov.online/podoskipiya/',
                'http://www.zdorov.online/rinoskopiya/',
            ]
        }))
        .pipe(gulp.dest('css/clinics/'));
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