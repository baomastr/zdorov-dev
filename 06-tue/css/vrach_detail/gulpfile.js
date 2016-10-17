
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
                'http://www.zdorov.online/vrach/moskalets-aleksandr-yurevich/',
                'http://www.zdorov.online/vrach/sumerova-natalya-mikhaylovna/',
                'http://www.zdorov.online/vrach/korolyeva-ekaterina-vladimirovna/',
                'http://www.zdorov.online/vrach/natroshvili-aleksandr-givievich/',
                'http://www.zdorov.online/vrach/khozyainova-natalya-yurevna/',
                'http://www.zdorov.online/vrach/balakireva-elena-evgenevna/',
                'http://www.zdorov.online/vrach/bunchuk-nikolay-vasilevich/',
                'http://www.zdorov.online/vrach/malygina-marina-aleksandrovna/',
                'http://www.zdorov.online/vrach/tkacheva-mariya-viktorovna/',
                'http://www.zdorov.online/vrach/sidelnikov-artur-igorevich/',
                'http://www.zdorov.online/vrach/lokotkova-olga-igorevna/',
                'http://www.zdorov.online/vrach/lunyushkin-igor-nikolaevich/',
                'http://www.zdorov.online/vrach/abdurakhmanov-yunus-khasanovich/',
                'http://www.zdorov.online/vrach/novruzshoeva-firuza-davutshoevna/',
                'http://www.zdorov.online/vrach/verizhnikova-olga-sergeevna/',
                'http://www.zdorov.online/vrach/kira-evgeniy-fedorovich/',
                'http://www.zdorov.online/vrach/trunev-evgeniy-valerievich/',
                'http://www.zdorov.online/vrach/maslak-andrey-anatolevich/',
                'http://www.zdorov.online/vrach/pushkarev-igor/',
                'http://www.zdorov.online/vrach/ryabov-dmitriy-vitalevich/',
                'http://www.zdorov.online/vrach/smolyarchuk-maksim/',
                'http://www.zdorov.online/vrach/shilenina-elena-nikolaevna/',
                'http://www.zdorov.online/vrach/novik-svetlana-ivanovna/',
                'http://www.zdorov.online/vrach/manumanon-barsegovna-askariya/',
                'http://www.zdorov.online/vrach/sergey-viktorovich-protskiy/',
                'http://www.zdorov.online/vrach/sizarev-andrey-vladislavovich/',
                'http://www.zdorov.online/vrach/belokopytova-ekaterina-yurevna/',
            ]
        }))
        .pipe(gulp.dest('css/vrach_detail/'));
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