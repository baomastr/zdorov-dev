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
                'http://www.zdorov.online/selftest/',
                'http://www.zdorov.online/selftest/j/',
                'http://www.zdorov.online/selftest/j/golova/',
                'http://www.zdorov.online/selftest/j/golova/zalysiny-u-zhenshchin/',
                'http://www.zdorov.online/selftest/j/golova/sedina-v-molodom-vozraste/',
                'http://www.zdorov.online/selftest/j/golova/lomkost-volos/',
                'http://www.zdorov.online/selftest/j/golova/redkie-volosy/',
                'http://www.zdorov.online/selftest/j/golova/tusklye-volosy/',
                'http://www.zdorov.online/selftest/j/golova/volosy-sekutsya/',
                'http://www.zdorov.online/selftest/j/golova/vypadenie-volos/',
                'http://www.zdorov.online/selftest/j/golova/narushenie-yasnosti-soznaniya/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/pokrasnenie-grud/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/zud-grudi/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/oshchushchenie-goreniya/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/volosy-vokrug-soskov/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/pokrasnenie-grudi/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/izmenenie-razmera/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/boli-v-molochnykh-zhelezakh-ili-podmyshechnykh-oblastyakh/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/syp/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/obrazovanie-komkov-v-grudi/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/deformatsiya-soska/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/otek-ili-pokrasnenie-grudi/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/kozha-grudi-stala-morshchinistoy/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/vydelenie-zhidkosti-iz-soska/',
                'http://www.zdorov.online/selftest/j/jivot/',
                'http://www.zdorov.online/selftest/j/jivot/vzdutie-zhivota-kishechnaya-dispepsiya-m/',
                'http://www.zdorov.online/selftest/j/jivot/krov-v-stule-m/',
                'http://www.zdorov.online/selftest/j/jivot/ponosy4246/',
                'http://www.zdorov.online/selftest/j/jivot/otryzhka-m/',
                'http://www.zdorov.online/selftest/j/jivot/izzhoga-m/',
                'http://www.zdorov.online/selftest/j/jivot/zapory-m/',
                'http://www.zdorov.online/selftest/j/nogi/',
                'http://www.zdorov.online/selftest/j/nogi/potemnenie-kozhi/',
                'http://www.zdorov.online/selftest/j/nogi/uplotnenie-nog/',
                'http://www.zdorov.online/selftest/j/nogi/yazvy-na-nogakh/',
                'http://www.zdorov.online/selftest/j/nogi/ostraya-bol-posle-travmy-padeniya/',
                'http://www.zdorov.online/selftest/j/nogi/ogranichenie-dvizheniya-v-sustave/',
                'http://www.zdorov.online/selftest/j/nogi/shchelkaet-sustav/',
                'http://www.zdorov.online/selftest/j/nogi/bol-v-sustave-pri-dvizhenii/',
                'http://www.zdorov.online/selftest/j/nogi/shchelkaet-bedro-sustav-khrustit/',
                'http://www.zdorov.online/selftest/j/nogi/bol-v-tazobedrennom/',
                'http://www.zdorov.online/selftest/j/pah/',
                'http://www.zdorov.online/selftest/j/pah/tyanushchie-boli-vnizu-zhivota-temperatura/',
                'http://www.zdorov.online/selftest/j/pah/tyanushchie-boli-vnizu-zhivota-toshnota/',
                'http://www.zdorov.online/selftest/j/pah/otsutsvie-smazki-pri-sekse/',
                'http://www.zdorov.online/selftest/j/pah/boleznennost-posle-polovogo-akta/',
                'http://www.zdorov.online/selftest/j/pah/vysypaniya-seks/',
                'http://www.zdorov.online/selftest/j/pah/krovyanistye-vydeleniya-seks/',
                'http://www.zdorov.online/selftest/j/pah/boleznennost-pri-polovykh-aktakh/',
                'http://www.zdorov.online/selftest/j/poyastnica/',
                'http://www.zdorov.online/selftest/j/poyastnica/ostraya-bol-v-poyasnitse-otdayushchaya-v-zhivot/',
                'http://www.zdorov.online/selftest/j/poyastnica/ostraya-bol-v-poyasnitse/',
                'http://www.zdorov.online/selftest/j/poyastnica/boleznennye-vysypaniya-v-poyasnichnom-otdele/',
                'http://www.zdorov.online/selftest/j/ruki/',
                'http://www.zdorov.online/selftest/j/ruki/zud-kozhi-ruk/',
                'http://www.zdorov.online/selftest/j/ruki/shelushenie-otsloyka-kozhi-ruk/',
                'http://www.zdorov.online/selftest/j/ruki/pokrasnenie-na-kozhe-ruk/',
                'http://www.zdorov.online/selftest/j/ruki/yazvy-na-kozhe-ruk/',
                'http://www.zdorov.online/selftest/j/ruki/zud-zhzhenie-i-shelushenie-kozhi-ruk/',
                'http://www.zdorov.online/selftest/j/sheya/',
                'http://www.zdorov.online/selftest/j/sheya/myshechnye-spazmy/',
                'http://www.zdorov.online/selftest/j/sheya/bol-pri-dvijenii-shei/',
                'http://www.zdorov.online/selftest/j/sheya/bol-pri-povorote-golovy/',
                'http://www.zdorov.online/selftest/j/sheya/bol-shei-sleva/',
                'http://www.zdorov.online/selftest/j/sheya/bol-otdayushchaya-v-golovu/',
                'http://www.zdorov.online/selftest/j/spina/',
                'http://www.zdorov.online/selftest/j/spina/noyushchaya-bol-v-plechevom-poyase/',
                'http://www.zdorov.online/selftest/j/spina/rezkaya-bol-v-plechevom-poyase/',
                'http://www.zdorov.online/selftest/j/spina/noyushchaya-bol-v-plechevom-poyase/',
                'http://www.zdorov.online/selftest/j/spina/rezkaya-bol-v-plechevom-poyase/',
                'http://www.zdorov.online/selftest/j/yagodicy/',
                'http://www.zdorov.online/selftest/j/yagodicy/oshchushchenie-kholoda-v-yagodichnoy-oblasti/',
                'http://www.zdorov.online/selftest/j/yagodicy/uplotnenie-v-yagoditse/',
                'http://www.zdorov.online/selftest/j/yagodicy/bol-v-tazobedrennom-sustave/',
                'http://www.zdorov.online/selftest/j/yagodicy/onemenie-v-yagoditse/',
                'http://www.zdorov.online/selftest/j/yagodicy/pokrasnenie-otek-lokalnaya-boleznennost/',
                'http://www.zdorov.online/selftest/j/yagodicy/bol-v-yagoditse/',
                'http://www.zdorov.online/selftest/j/yagodicy/oshchushchenie-kholoda-v-yagodichnoy-oblasti/',
                'http://www.zdorov.online/selftest/m/',
                'http://www.zdorov.online/selftest/m/golova/',
                'http://www.zdorov.online/selftest/m/golova/lomkost-volos-m/',
                'http://www.zdorov.online/selftest/m/golova/sedina-v-molodom-vozraste-m/',
                'http://www.zdorov.online/selftest/m/golova/redkie-volosy-m/',
                'http://www.zdorov.online/selftest/m/golova/tusklye-volosy-m/',
                'http://www.zdorov.online/selftest/m/golova/volosy-sekutsya-m/',
                'http://www.zdorov.online/selftest/m/golova/vypadenie-volos-m/',
                'http://www.zdorov.online/selftest/m/golova/zalysiny/',
                'http://www.zdorov.online/selftest/m/golova/tusklye-volosy/',
                'http://www.zdorov.online/selftest/m/golova/shishki-pod-kozhey-m/',
                'http://www.zdorov.online/selftest/m/golova/borodavki-m/',
                'http://www.zdorov.online/selftest/m/grudnaya_kletka/',
                'http://www.zdorov.online/selftest/m/grudnaya_kletka/postoyannaya-bol-sleva-nad-grudyu-m/',
                'http://www.zdorov.online/selftest/m/grudnaya_kletka/tyanushchaya-bol-sleva-nad-grudyu-m/',
                'http://www.zdorov.online/selftest/m/grudnaya_kletka/rezkie-boli-sleva-nad-grudyu-m/',
                'http://www.zdorov.online/selftest/m/jivot/',
                'http://www.zdorov.online/selftest/m/jivot/pokrasnenie-na-kozhe-zhivota/',
                'http://www.zdorov.online/selftest/m/jivot/shelushenie-kozhi-zhivota/',
                'http://www.zdorov.online/selftest/m/jivot/zud-kozhi-zhivota/',
                'http://www.zdorov.online/selftest/m/nogi/',
                'http://www.zdorov.online/selftest/m/nogi/zud-nog-m/',
                'http://www.zdorov.online/selftest/m/nogi/yazvy-na-nogakh-m/',
                'http://www.zdorov.online/selftest/m/nogi/uplotnenie-nog-m/',
                'http://www.zdorov.online/selftest/m/nogi/potemnenie-kozhi-m/',
                'http://www.zdorov.online/selftest/m/pah/',
                'http://www.zdorov.online/selftest/m/pah/prezhdevremennaya-eyakulyatsiya/',
                'http://www.zdorov.online/selftest/m/pah/zamedlennaya-eyakulyatsiya/',
                'http://www.zdorov.online/selftest/m/pah/bol-v-polovom-chlene-posle-seksa/',
                'http://www.zdorov.online/selftest/m/pah/bol-v-oblasti-polovogo-chlena-pri-polovom-akte/',
                'http://www.zdorov.online/selftest/r/',
                'http://www.zdorov.online/selftest/r/golova/',
                'http://www.zdorov.online/selftest/r/golova/zalysiny-u-zhenshchin-deti/',
            ]
        }))
        .pipe(gulp.dest('css/selftest/'));
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

