
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
                'http://www.zdorov.online/vrach/akusher/',
                'http://www.zdorov.online/vrach/allergolog/',
                'http://www.zdorov.online/vrach/angiolog/',
                'http://www.zdorov.online/vrach/androlog/',
                'http://www.zdorov.online/vrach/venerolog/',
                'http://www.zdorov.online/vrach/gastroenterolog/',
                'http://www.zdorov.online/vrach/gematolog/',
                'http://www.zdorov.online/vrach/genetik/',
                'http://www.zdorov.online/vrach/gepatolog/',
                'http://www.zdorov.online/vrach/ginekolog/',
                'http://www.zdorov.online/vrach/gomeopat/',
                'http://www.zdorov.online/vrach/dermatolog/',
                'http://www.zdorov.online/vrach/dietolog/',
                'http://www.zdorov.online/vrach/immunolog/',
                'http://www.zdorov.online/vrach/infekcionist/',
                'http://www.zdorov.online/vrach/kardiolog/',
                'http://www.zdorov.online/vrach/kardiohirurg/',
                'http://www.zdorov.online/vrach/kosmetolog/',
                'http://www.zdorov.online/vrach/logoped/',
                'http://www.zdorov.online/vrach/lor-otolaringolog/',
                'http://www.zdorov.online/vrach/mammolog/',
                'http://www.zdorov.online/vrach/manualnyy-terapevt/',
                'http://www.zdorov.online/vrach/massazhist/',
                'http://www.zdorov.online/vrach/narkolog/',
                'http://www.zdorov.online/vrach/nevrolog/',
                'http://www.zdorov.online/vrach/neyrohirurg/',
                'http://www.zdorov.online/vrach/neonatolog/',
                'http://www.zdorov.online/vrach/nefrolog/',
                'http://www.zdorov.online/vrach/onkodermatolog/',
                'http://www.zdorov.online/vrach/onkolog/',
                'http://www.zdorov.online/vrach/ortoped/',
                'http://www.zdorov.online/vrach/otolaringolog/',
                'http://www.zdorov.online/vrach/oftalmolog/',
                'http://www.zdorov.online/vrach/parodontolog/',
                'http://www.zdorov.online/vrach/pediatr/',
                'http://www.zdorov.online/vrach/plasticheskiy-hirurg/',
                'http://www.zdorov.online/vrach/psikhiatr/',
                'http://www.zdorov.online/vrach/psikholog/',
                'http://www.zdorov.online/vrach/psikhoterapevt/',
                'http://www.zdorov.online/vrach/pulmonolog/',
                'http://www.zdorov.online/vrach/revmatolog/',
                'http://www.zdorov.online/vrach/seksolog/',
                'http://www.zdorov.online/vrach/stomatolog/',
                'http://www.zdorov.online/vrach/stomatolog-ortodont/',
                'http://www.zdorov.online/vrach/stomatolog-terapevt/',
                'http://www.zdorov.online/vrach/stomatolog-hirurg/',
                'http://www.zdorov.online/vrach/surdolog/',
                'http://www.zdorov.online/vrach/terapevt/',
                'http://www.zdorov.online/vrach/travmatolog/',
                'http://www.zdorov.online/vrach/transfuziolog/',
                'http://www.zdorov.online/vrach/trikholog/',
                'http://www.zdorov.online/vrach/urolog/',
                'http://www.zdorov.online/vrach/fizioterapevt/',
                'http://www.zdorov.online/vrach/flebolog/',
                'http://www.zdorov.online/vrach/hirurg/',
                'http://www.zdorov.online/vrach/endokrinolog/',
                'http://www.zdorov.online/vrach/lfk/',
                'http://www.zdorov.online/vrach/travmatolog-ortoped/',
                'http://www.zdorov.online/vrach/dermatovenerolog/',
                'http://www.zdorov.online/vrach/vertebrolog/',
                'http://www.zdorov.online/vrach/akusher-ginekolog/',
                'http://www.zdorov.online/vrach/algolog/',
                'http://www.zdorov.online/vrach/allergolog-immunolog/',
                'http://www.zdorov.online/vrach/urolog-androlog/',
                'http://www.zdorov.online/vrach/bakteriolog/',
                'http://www.zdorov.online/vrach/dermatolog-venerolog/',
                'http://www.zdorov.online/vrach/virusolog-immunolog/',
                'http://www.zdorov.online/vrach/kosmetolog-dermatolog/',
                'http://www.zdorov.online/vrach/onkolog-mammolog/',
                'http://www.zdorov.online/vrach/somnolog/',
                'http://www.zdorov.online/vrach/girudolog/',
                'http://www.zdorov.online/vrach/ftiziator/',
                'http://www.zdorov.online/vrach/proktolog/',
                'http://www.zdorov.online/vrach/endoskopist/',
                'http://www.zdorov.online/vrach/osteopat/',
                'http://www.zdorov.online/vrach/sosudistii-hirurg/',
                'http://www.zdorov.online/vrach/diabetolog/',
                'http://www.zdorov.online/vrach/hirurg-proktolog/',
                'http://www.zdorov.online/vrach/hirurg-flebolog/',
                'http://www.zdorov.online/vrach/refleksoterapevt/',
            ]
        }))
        .pipe(gulp.dest('css/vrach_spec/'));
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