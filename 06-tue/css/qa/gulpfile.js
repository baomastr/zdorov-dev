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
                'http://www.zdorov.online/qa/',
                'http://www.zdorov.online/qa/143771_znal_odnogo_cheloveka_kak_vypet/',
                'http://www.zdorov.online/qa/143794_u_menya_kak_to_privkus_zheleza/',
                'http://www.zdorov.online/qa/148315_udarilas_ob_stol_i_teper/',
                'http://www.zdorov.online/qa/148328_upala_s_velika_bolit_kolenka/',
                'http://www.zdorov.online/qa/148329_cheshetsya_kozha_i_vysypala_syp/',
                'http://www.zdorov.online/qa/148330_podskazhite_bolit_gorlo_chem_lechit/',
                'http://www.zdorov.online/qa/148331_posle_edy_bolit_zhivot_i/',
                'http://www.zdorov.online/qa/148334_kolit_v_rayone_serdtsa_i/',
                'http://www.zdorov.online/qa/148336_dergaetsya_brov_chto_delat_kazhdyy/',
                'http://www.zdorov.online/qa/148337_sorvala_nogot_i_palets_nemnogo/',
                'http://www.zdorov.online/qa/148338_khodila_na_ochistku_zubov_no/',
                'http://www.zdorov.online/qa/148339_dobryy_den_podskazhite_pozhaluysta_kak/',
                'http://www.zdorov.online/qa/148340_noet_i_raskalyvaetsya_golova_pered/',
                'http://www.zdorov.online/qa/148341_otvalilas_plomba_ot_zuba_i/',
                'http://www.zdorov.online/qa/148357_shelushitsya_kozha_na_stope_eto/',
                'http://www.zdorov.online/qa/148358_opukhla_rodinka_chto_eto_/',
                'http://www.zdorov.online/qa/148359_zamuchal_sukhoy_kashel_pomogite_chem/',
                'http://www.zdorov.online/qa/148360_chem_mazat_sinyaki_chtob_bystree/',
                'http://www.zdorov.online/qa/148361_posle_epilyatsii_poshlo_razdrazhenie_na/',
                'http://www.zdorov.online/qa/148362_k_kakomu_vrachu_obratitsya_esli/',
                'http://www.zdorov.online/qa/148363_bolyat_paltsy_vnutri_chem_lechit/',
                'http://www.zdorov.online/qa/148364_tyazhelo_podnimat_ruki_vverkh_chto/',
                'http://www.zdorov.online/qa/148365_podskazhite_temperatura_derzhitsya_uzhe_neskolko/',
                'http://www.zdorov.online/qa/148366_poyavilis_pervye_simptomy_vulvita_a/',
                'http://www.zdorov.online/qa/148367_poluchila_ozheg_na_spine_posle/',
                'http://www.zdorov.online/qa/148368_silno_vospalilsya_nos_i_nizhnyaya/',
                'http://www.zdorov.online/qa/148369_bolit_v_rayone_pecheni_chto/',
                'http://www.zdorov.online/qa/148370_ochen_bespokoit_kashel_po_nocham_/',
                'http://www.zdorov.online/qa/148371_chasto_byvayut_pristupy_toshnoty_i/',
                'http://www.zdorov.online/qa/148372_razbila_kulak_i_on_opukh/',
                'http://www.zdorov.online/qa/148373_zdravstvuyte_ochen_bolit_v_oblasti/',
                'http://www.zdorov.online/qa/148374_stal_glokhnut_na_odno_ukho/',
                'http://www.zdorov.online/qa/148375_strashno_li_delat_koagulyatsiyu_glaza/',
                'http://www.zdorov.online/qa/148376_kollega_na_rabote_zabolel_gepatitom/',
                'http://www.zdorov.online/qa/148377_vyvikhnula_nogu_teper_bolit_nuzhno/',
                'http://www.zdorov.online/qa/148378_kakie_vidy_deyatelnosti_pomogayut_rebenka/',
                'http://www.zdorov.online/qa/148379_bespokoit_gemorroy_kak_ego_lechit/',
                'http://www.zdorov.online/qa/148380_pozheltela_kozha_chto_teper_delat/',
                'http://www.zdorov.online/qa/148381_postoyanno_nosom_silno_vydykhayu_oshchushchenie/',
                'http://www.zdorov.online/qa/148382_khodila_gulyat_i_menya_ukusila/',
                'http://www.zdorov.online/qa/148383_zanimaemsya_nezashchishchennym_seksom_mozhet_li/',
                'http://www.zdorov.online/qa/148384_postoyanno_nakhozhus_v_stressovom_sostoyanii/',
                'http://www.zdorov.online/qa/148385_udarilsya_ob_armaturu_teper_bolit/',
                'http://www.zdorov.online/qa/148386_posle_zanyatiy_sportom_vsegda_bolyat_/',
                'http://www.zdorov.online/qa/148387_u_menya_ochen_svoeobraznaya_pokhodka_podprygivayu/',
                'http://www.zdorov.online/qa/148388_nachala_zamechat_chto_konchiki_na/',
                'http://www.zdorov.online/qa/148389_noyut_nogi_massazh_pomozhet_izbavitsya/',
                'http://www.zdorov.online/qa/148390_slezyatsya_glaza_blizhe_k_vecheru/',
                'http://www.zdorov.online/qa/148391_ya_na_6_mesyatse_beremennosti_/',
                'http://www.zdorov.online/qa/148392_u_menya_skazali_chto_gastrit/',
                'http://www.zdorov.online/qa/148393_nedavno_sluchilsya_pervyy_pristup_epilepsii/',
                'http://www.zdorov.online/qa/148394_bolit_legkoe_kogda_delayu_vdokh/',
                'http://www.zdorov.online/qa/148395_bespokoit_postoyannaya_chesotka_nikak_ne_mogu/',
                'http://www.zdorov.online/qa/148396_problema_s_vesom_ne_mogu/',
                'http://www.zdorov.online/qa/148397_poyavilis_strannye_obrazovaniya_na_kozhe/',
                'http://www.zdorov.online/qa/148398_upal_s_kryshi_garazha_bolit/',
                'http://www.zdorov.online/qa/148399_iz_za_chego_mozhet_vospalitsya_zhelchnyy/',
                'http://www.zdorov.online/qa/148400_kazhdyy_raz_poyavlyayutsya_boli_pri/',
                'http://www.zdorov.online/qa/150470_zdravstvuyte_obyazatelno_li_delat_operatsiyu/',
                'http://www.zdorov.online/qa/153049_vot_prosto_interesno_stalo_mozhno/',
                'http://www.zdorov.online/qa/159265_chto_delat_esli_bolit_koleno_pri_khodbe_nachalo_bolet_vnezapno_i_teper_kazhdyy_raz_posle_sideniya_na/',
                'http://www.zdorov.online/qa/161840_gustaya_krov_stala_1_god_nazad/',
                'http://www.zdorov.online/qa/165261_posle_tyazheloy_kontuzii_glaza_byla_proizvedena_vitrektomiya_v_oblastnoy_bolnitse_krov_rassosalas_no/',
                'http://www.zdorov.online/qa/168925_posle_odnogo_dnya_v_neudobnoy_/',
                'http://www.zdorov.online/qa/169660_zdravstvuyte_ya_chuvstvuyu_one/',
                'http://www.zdorov.online/qa/170623_podskazhite_pozhaluysta_effekt/',
                'http://www.zdorov.online/qa/171481_posle_upotrebleniya_pomidor_i_/',
                'http://www.zdorov.online/qa/171503_zdravstvuyte_ya_by_khotela_uzn/',
            ]
        }))
        .pipe(gulp.dest('css/qa/'));
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