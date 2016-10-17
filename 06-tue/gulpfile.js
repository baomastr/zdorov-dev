
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
                'http://www.zdorov.online/',
                'http://zdorov.online/term/',
                'http://zdorov.online/contacts/',
                'http://zdorov.online/about/',
                'http://zdorov.online/dlya-klinik/',
                'http://zdorov.online/adv/',
                'http://zdorov.online/novosti/',
                'http://zdorov.online/clinics/kliniki-po-diagnostike/', 
                'http://zdorov.online/personal/', 
                'http://zdorov.online/personal/orders/', 
                'http://zdorov.online/personal/voprosy/', 
                'http://zdorov.online/auth/', 
                'http://zdorov.online/reg/', 
                'http://zdorov.online/search/',
                
                'http://www.zdorov.online/vrach/akusher/',
                'http://www.zdorov.online/vrach/allergolog/',
                'http://www.zdorov.online/vrach/angiolog/',
                'http://www.zdorov.online/vrach/androlog/',
                'http://www.zdorov.online/vrach/venerolog/',
                // 'http://www.zdorov.online/vrach/gastroenterolog/',
                // 'http://www.zdorov.online/vrach/gematolog/',
                // 'http://www.zdorov.online/vrach/genetik/',
                // 'http://www.zdorov.online/vrach/gepatolog/',
                // 'http://www.zdorov.online/vrach/ginekolog/',
                // 'http://www.zdorov.online/vrach/gomeopat/',
                // 'http://www.zdorov.online/vrach/dermatolog/',
                // 'http://www.zdorov.online/vrach/dietolog/',
                // 'http://www.zdorov.online/vrach/immunolog/',
                // 'http://www.zdorov.online/vrach/infekcionist/',
                // 'http://www.zdorov.online/vrach/kardiolog/',
                // 'http://www.zdorov.online/vrach/kardiohirurg/',
                // 'http://www.zdorov.online/vrach/kosmetolog/',
                // 'http://www.zdorov.online/vrach/logoped/',
                // 'http://www.zdorov.online/vrach/lor-otolaringolog/',
                // 'http://www.zdorov.online/vrach/mammolog/',
                // 'http://www.zdorov.online/vrach/manualnyy-terapevt/',
                // 'http://www.zdorov.online/vrach/massazhist/',
                // 'http://www.zdorov.online/vrach/narkolog/',
                // 'http://www.zdorov.online/vrach/nevrolog/',
                // 'http://www.zdorov.online/vrach/neyrohirurg/',
                // 'http://www.zdorov.online/vrach/neonatolog/',
                // 'http://www.zdorov.online/vrach/nefrolog/',
                // 'http://www.zdorov.online/vrach/onkodermatolog/',
                // 'http://www.zdorov.online/vrach/onkolog/',
                // 'http://www.zdorov.online/vrach/ortoped/',
                // 'http://www.zdorov.online/vrach/otolaringolog/',
                // 'http://www.zdorov.online/vrach/oftalmolog/',
                // 'http://www.zdorov.online/vrach/parodontolog/',
                // 'http://www.zdorov.online/vrach/pediatr/',
                // 'http://www.zdorov.online/vrach/plasticheskiy-hirurg/',
                // 'http://www.zdorov.online/vrach/psikhiatr/',
                // 'http://www.zdorov.online/vrach/psikholog/',
                // 'http://www.zdorov.online/vrach/psikhoterapevt/',
                // 'http://www.zdorov.online/vrach/pulmonolog/',
                // 'http://www.zdorov.online/vrach/revmatolog/',
                // 'http://www.zdorov.online/vrach/seksolog/',
                // 'http://www.zdorov.online/vrach/stomatolog/',
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
                // 'http://www.zdorov.online/vrach/urolog-androlog/',
                // 'http://www.zdorov.online/vrach/bakteriolog/',
                // 'http://www.zdorov.online/vrach/dermatolog-venerolog/',
                // 'http://www.zdorov.online/vrach/virusolog-immunolog/',
                // 'http://www.zdorov.online/vrach/kosmetolog-dermatolog/',
                // 'http://www.zdorov.online/vrach/onkolog-mammolog/',
                // 'http://www.zdorov.online/vrach/somnolog/',
                // 'http://www.zdorov.online/vrach/girudolog/',
                // 'http://www.zdorov.online/vrach/ftiziator/',
                // 'http://www.zdorov.online/vrach/proktolog/',
                // 'http://www.zdorov.online/vrach/endoskopist/',
                // 'http://www.zdorov.online/vrach/osteopat/',
                // 'http://www.zdorov.online/vrach/sosudistii-hirurg/',
                // 'http://www.zdorov.online/vrach/diabetolog/',
                // 'http://www.zdorov.online/vrach/hirurg-proktolog/',
                // 'http://www.zdorov.online/vrach/hirurg-flebolog/',
                // 'http://www.zdorov.online/vrach/refleksoterapevt/',
                // 'http://www.zdorov.online/vrach/moskalets-aleksandr-yurevich/',
                // 'http://www.zdorov.online/vrach/sumerova-natalya-mikhaylovna/',
                // 'http://www.zdorov.online/vrach/korolyeva-ekaterina-vladimirovna/',
                // 'http://www.zdorov.online/vrach/natroshvili-aleksandr-givievich/',
                // 'http://www.zdorov.online/vrach/khozyainova-natalya-yurevna/',
                // 'http://www.zdorov.online/vrach/balakireva-elena-evgenevna/',
                // 'http://www.zdorov.online/vrach/bunchuk-nikolay-vasilevich/',
                // 'http://www.zdorov.online/vrach/malygina-marina-aleksandrovna/',
                // 'http://www.zdorov.online/vrach/tkacheva-mariya-viktorovna/',
                // 'http://www.zdorov.online/vrach/sidelnikov-artur-igorevich/',
                // 'http://www.zdorov.online/vrach/lokotkova-olga-igorevna/',
                // 'http://www.zdorov.online/vrach/lunyushkin-igor-nikolaevich/',
                // 'http://www.zdorov.online/vrach/abdurakhmanov-yunus-khasanovich/',
                // 'http://www.zdorov.online/vrach/novruzshoeva-firuza-davutshoevna/',
                // 'http://www.zdorov.online/vrach/verizhnikova-olga-sergeevna/',
                // 'http://www.zdorov.online/vrach/kira-evgeniy-fedorovich/',
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
                'http://www.zdorov.online/selftest/',
                'http://www.zdorov.online/selftest/j/',
                'http://www.zdorov.online/selftest/j/golova/',
                'http://www.zdorov.online/selftest/j/golova/zalysiny-u-zhenshchin/',
                // 'http://www.zdorov.online/selftest/j/golova/sedina-v-molodom-vozraste/',
                // 'http://www.zdorov.online/selftest/j/golova/lomkost-volos/',
                // 'http://www.zdorov.online/selftest/j/golova/redkie-volosy/',
                // 'http://www.zdorov.online/selftest/j/golova/tusklye-volosy/',
                // 'http://www.zdorov.online/selftest/j/golova/volosy-sekutsya/',
                // 'http://www.zdorov.online/selftest/j/golova/vypadenie-volos/',
                // 'http://www.zdorov.online/selftest/j/golova/narushenie-yasnosti-soznaniya/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/',
                'http://www.zdorov.online/selftest/j/grudnaya_kletka/pokrasnenie-grud/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/zud-grudi/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/oshchushchenie-goreniya/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/volosy-vokrug-soskov/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/pokrasnenie-grudi/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/izmenenie-razmera/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/boli-v-molochnykh-zhelezakh-ili-podmyshechnykh-oblastyakh/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/syp/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/obrazovanie-komkov-v-grudi/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/deformatsiya-soska/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/otek-ili-pokrasnenie-grudi/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/kozha-grudi-stala-morshchinistoy/',
                // 'http://www.zdorov.online/selftest/j/grudnaya_kletka/vydelenie-zhidkosti-iz-soska/',
                'http://www.zdorov.online/selftest/j/jivot/',
                'http://www.zdorov.online/selftest/j/jivot/vzdutie-zhivota-kishechnaya-dispepsiya-m/',
                // 'http://www.zdorov.online/selftest/j/jivot/krov-v-stule-m/',
                // 'http://www.zdorov.online/selftest/j/jivot/ponosy4246/',
                // 'http://www.zdorov.online/selftest/j/jivot/otryzhka-m/',
                // 'http://www.zdorov.online/selftest/j/jivot/izzhoga-m/',
                // 'http://www.zdorov.online/selftest/j/jivot/zapory-m/',
                'http://www.zdorov.online/selftest/j/nogi/',
                'http://www.zdorov.online/selftest/j/nogi/potemnenie-kozhi/',
                // 'http://www.zdorov.online/selftest/j/nogi/uplotnenie-nog/',
                // 'http://www.zdorov.online/selftest/j/nogi/yazvy-na-nogakh/',
                // 'http://www.zdorov.online/selftest/j/nogi/ostraya-bol-posle-travmy-padeniya/',
                // 'http://www.zdorov.online/selftest/j/nogi/ogranichenie-dvizheniya-v-sustave/',
                // 'http://www.zdorov.online/selftest/j/nogi/shchelkaet-sustav/',
                // 'http://www.zdorov.online/selftest/j/nogi/bol-v-sustave-pri-dvizhenii/',
                // 'http://www.zdorov.online/selftest/j/nogi/shchelkaet-bedro-sustav-khrustit/',
                // 'http://www.zdorov.online/selftest/j/nogi/bol-v-tazobedrennom/',
                'http://www.zdorov.online/selftest/j/pah/',
                'http://www.zdorov.online/selftest/j/pah/tyanushchie-boli-vnizu-zhivota-temperatura/',
                // 'http://www.zdorov.online/selftest/j/pah/tyanushchie-boli-vnizu-zhivota-toshnota/',
                // 'http://www.zdorov.online/selftest/j/pah/otsutsvie-smazki-pri-sekse/',
                // 'http://www.zdorov.online/selftest/j/pah/boleznennost-posle-polovogo-akta/',
                // 'http://www.zdorov.online/selftest/j/pah/vysypaniya-seks/',
                // 'http://www.zdorov.online/selftest/j/pah/krovyanistye-vydeleniya-seks/',
                // 'http://www.zdorov.online/selftest/j/pah/boleznennost-pri-polovykh-aktakh/',
                'http://www.zdorov.online/selftest/j/poyastnica/',
                'http://www.zdorov.online/selftest/j/poyastnica/ostraya-bol-v-poyasnitse-otdayushchaya-v-zhivot/',
                // 'http://www.zdorov.online/selftest/j/poyastnica/ostraya-bol-v-poyasnitse/',
                // 'http://www.zdorov.online/selftest/j/poyastnica/boleznennye-vysypaniya-v-poyasnichnom-otdele/',
                'http://www.zdorov.online/selftest/j/ruki/',
                // 'http://www.zdorov.online/selftest/j/ruki/zud-kozhi-ruk/',
                // 'http://www.zdorov.online/selftest/j/ruki/shelushenie-otsloyka-kozhi-ruk/',
                // 'http://www.zdorov.online/selftest/j/ruki/pokrasnenie-na-kozhe-ruk/',
                // 'http://www.zdorov.online/selftest/j/ruki/yazvy-na-kozhe-ruk/',
                // 'http://www.zdorov.online/selftest/j/ruki/zud-zhzhenie-i-shelushenie-kozhi-ruk/',
                // 'http://www.zdorov.online/selftest/j/sheya/',
                // 'http://www.zdorov.online/selftest/j/sheya/myshechnye-spazmy/',
                // 'http://www.zdorov.online/selftest/j/sheya/bol-pri-dvijenii-shei/',
                // 'http://www.zdorov.online/selftest/j/sheya/bol-pri-povorote-golovy/',
                // 'http://www.zdorov.online/selftest/j/sheya/bol-shei-sleva/',
                // 'http://www.zdorov.online/selftest/j/sheya/bol-otdayushchaya-v-golovu/',
                'http://www.zdorov.online/selftest/j/spina/',
                // 'http://www.zdorov.online/selftest/j/spina/noyushchaya-bol-v-plechevom-poyase/',
                // 'http://www.zdorov.online/selftest/j/spina/rezkaya-bol-v-plechevom-poyase/',
                // 'http://www.zdorov.online/selftest/j/spina/noyushchaya-bol-v-plechevom-poyase/',
                // 'http://www.zdorov.online/selftest/j/spina/rezkaya-bol-v-plechevom-poyase/',
                'http://www.zdorov.online/selftest/j/yagodicy/',
                // 'http://www.zdorov.online/selftest/j/yagodicy/oshchushchenie-kholoda-v-yagodichnoy-oblasti/',
                // 'http://www.zdorov.online/selftest/j/yagodicy/uplotnenie-v-yagoditse/',
                // 'http://www.zdorov.online/selftest/j/yagodicy/bol-v-tazobedrennom-sustave/',
                // 'http://www.zdorov.online/selftest/j/yagodicy/onemenie-v-yagoditse/',
                // 'http://www.zdorov.online/selftest/j/yagodicy/pokrasnenie-otek-lokalnaya-boleznennost/',
                // 'http://www.zdorov.online/selftest/j/yagodicy/bol-v-yagoditse/',
                // 'http://www.zdorov.online/selftest/j/yagodicy/oshchushchenie-kholoda-v-yagodichnoy-oblasti/',
                'http://www.zdorov.online/selftest/m/',
                'http://www.zdorov.online/selftest/m/golova/',
                // 'http://www.zdorov.online/selftest/m/golova/lomkost-volos-m/',
                // 'http://www.zdorov.online/selftest/m/golova/sedina-v-molodom-vozraste-m/',
                // 'http://www.zdorov.online/selftest/m/golova/redkie-volosy-m/',
                // 'http://www.zdorov.online/selftest/m/golova/tusklye-volosy-m/',
                // 'http://www.zdorov.online/selftest/m/golova/volosy-sekutsya-m/',
                // 'http://www.zdorov.online/selftest/m/golova/vypadenie-volos-m/',
                // 'http://www.zdorov.online/selftest/m/golova/zalysiny/',
                // 'http://www.zdorov.online/selftest/m/golova/tusklye-volosy/',
                // 'http://www.zdorov.online/selftest/m/golova/shishki-pod-kozhey-m/',
                // 'http://www.zdorov.online/selftest/m/golova/borodavki-m/',
                // 'http://www.zdorov.online/selftest/m/grudnaya_kletka/',
                // 'http://www.zdorov.online/selftest/m/grudnaya_kletka/postoyannaya-bol-sleva-nad-grudyu-m/',
                // 'http://www.zdorov.online/selftest/m/grudnaya_kletka/tyanushchaya-bol-sleva-nad-grudyu-m/',
                // 'http://www.zdorov.online/selftest/m/grudnaya_kletka/rezkie-boli-sleva-nad-grudyu-m/',
                'http://www.zdorov.online/selftest/m/jivot/',
                // 'http://www.zdorov.online/selftest/m/jivot/pokrasnenie-na-kozhe-zhivota/',
                // 'http://www.zdorov.online/selftest/m/jivot/shelushenie-kozhi-zhivota/',
                // 'http://www.zdorov.online/selftest/m/jivot/zud-kozhi-zhivota/',
                'http://www.zdorov.online/selftest/m/nogi/',
                // 'http://www.zdorov.online/selftest/m/nogi/zud-nog-m/',
                // 'http://www.zdorov.online/selftest/m/nogi/yazvy-na-nogakh-m/',
                // 'http://www.zdorov.online/selftest/m/nogi/uplotnenie-nog-m/',
                // 'http://www.zdorov.online/selftest/m/nogi/potemnenie-kozhi-m/',
                'http://www.zdorov.online/selftest/m/pah/',
                // 'http://www.zdorov.online/selftest/m/pah/prezhdevremennaya-eyakulyatsiya/',
                // 'http://www.zdorov.online/selftest/m/pah/zamedlennaya-eyakulyatsiya/',
                // 'http://www.zdorov.online/selftest/m/pah/bol-v-polovom-chlene-posle-seksa/',
                // 'http://www.zdorov.online/selftest/m/pah/bol-v-oblasti-polovogo-chlena-pri-polovom-akte/',
                'http://www.zdorov.online/selftest/r/',
                'http://www.zdorov.online/selftest/r/golova/',
                // 'http://www.zdorov.online/selftest/r/golova/zalysiny-u-zhenshchin-deti/',
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
                // 'http://www.zdorov.online/qa/148357_shelushitsya_kozha_na_stope_eto/',
                // 'http://www.zdorov.online/qa/148358_opukhla_rodinka_chto_eto_/',
                // 'http://www.zdorov.online/qa/148359_zamuchal_sukhoy_kashel_pomogite_chem/',
                // 'http://www.zdorov.online/qa/148360_chem_mazat_sinyaki_chtob_bystree/',
                // 'http://www.zdorov.online/qa/148361_posle_epilyatsii_poshlo_razdrazhenie_na/',
                // 'http://www.zdorov.online/qa/148362_k_kakomu_vrachu_obratitsya_esli/',
                // 'http://www.zdorov.online/qa/148363_bolyat_paltsy_vnutri_chem_lechit/',
                // 'http://www.zdorov.online/qa/148364_tyazhelo_podnimat_ruki_vverkh_chto/',
                // 'http://www.zdorov.online/qa/148365_podskazhite_temperatura_derzhitsya_uzhe_neskolko/',
                // 'http://www.zdorov.online/qa/148366_poyavilis_pervye_simptomy_vulvita_a/',
                // 'http://www.zdorov.online/qa/148367_poluchila_ozheg_na_spine_posle/',
                // 'http://www.zdorov.online/qa/148368_silno_vospalilsya_nos_i_nizhnyaya/',
                // 'http://www.zdorov.online/qa/148369_bolit_v_rayone_pecheni_chto/',
                // 'http://www.zdorov.online/qa/148370_ochen_bespokoit_kashel_po_nocham_/',
                // 'http://www.zdorov.online/qa/148371_chasto_byvayut_pristupy_toshnoty_i/',
                // 'http://www.zdorov.online/qa/148372_razbila_kulak_i_on_opukh/',
                // 'http://www.zdorov.online/qa/148373_zdravstvuyte_ochen_bolit_v_oblasti/',
                // 'http://www.zdorov.online/qa/148374_stal_glokhnut_na_odno_ukho/',
                // 'http://www.zdorov.online/qa/148375_strashno_li_delat_koagulyatsiyu_glaza/',
                // 'http://www.zdorov.online/qa/148376_kollega_na_rabote_zabolel_gepatitom/',
                // 'http://www.zdorov.online/qa/148377_vyvikhnula_nogu_teper_bolit_nuzhno/',
                // 'http://www.zdorov.online/qa/148378_kakie_vidy_deyatelnosti_pomogayut_rebenka/',
                // 'http://www.zdorov.online/qa/148379_bespokoit_gemorroy_kak_ego_lechit/',
                // 'http://www.zdorov.online/qa/148380_pozheltela_kozha_chto_teper_delat/',
                // 'http://www.zdorov.online/qa/148381_postoyanno_nosom_silno_vydykhayu_oshchushchenie/',
                // 'http://www.zdorov.online/qa/148382_khodila_gulyat_i_menya_ukusila/',
                // 'http://www.zdorov.online/qa/148383_zanimaemsya_nezashchishchennym_seksom_mozhet_li/',
                // 'http://www.zdorov.online/qa/148384_postoyanno_nakhozhus_v_stressovom_sostoyanii/',
                // 'http://www.zdorov.online/qa/148385_udarilsya_ob_armaturu_teper_bolit/',
                // 'http://www.zdorov.online/qa/148386_posle_zanyatiy_sportom_vsegda_bolyat_/',
                // 'http://www.zdorov.online/qa/148387_u_menya_ochen_svoeobraznaya_pokhodka_podprygivayu/',
                // 'http://www.zdorov.online/qa/148388_nachala_zamechat_chto_konchiki_na/',
                // 'http://www.zdorov.online/qa/148389_noyut_nogi_massazh_pomozhet_izbavitsya/',
                // 'http://www.zdorov.online/qa/148390_slezyatsya_glaza_blizhe_k_vecheru/',
                // 'http://www.zdorov.online/qa/148391_ya_na_6_mesyatse_beremennosti_/',
                // 'http://www.zdorov.online/qa/148392_u_menya_skazali_chto_gastrit/',
                // 'http://www.zdorov.online/qa/148393_nedavno_sluchilsya_pervyy_pristup_epilepsii/',
                // 'http://www.zdorov.online/qa/148394_bolit_legkoe_kogda_delayu_vdokh/',
                // 'http://www.zdorov.online/qa/148395_bespokoit_postoyannaya_chesotka_nikak_ne_mogu/',
                // 'http://www.zdorov.online/qa/148396_problema_s_vesom_ne_mogu/',
                // 'http://www.zdorov.online/qa/148397_poyavilis_strannye_obrazovaniya_na_kozhe/',
                // 'http://www.zdorov.online/qa/148398_upal_s_kryshi_garazha_bolit/',
                // 'http://www.zdorov.online/qa/148399_iz_za_chego_mozhet_vospalitsya_zhelchnyy/',
                // 'http://www.zdorov.online/qa/148400_kazhdyy_raz_poyavlyayutsya_boli_pri/',
                // 'http://www.zdorov.online/qa/150470_zdravstvuyte_obyazatelno_li_delat_operatsiyu/',
                // 'http://www.zdorov.online/qa/153049_vot_prosto_interesno_stalo_mozhno/',
                // 'http://www.zdorov.online/qa/159265_chto_delat_esli_bolit_koleno_pri_khodbe_nachalo_bolet_vnezapno_i_teper_kazhdyy_raz_posle_sideniya_na/',
                // 'http://www.zdorov.online/qa/161840_gustaya_krov_stala_1_god_nazad/',
                // 'http://www.zdorov.online/qa/165261_posle_tyazheloy_kontuzii_glaza_byla_proizvedena_vitrektomiya_v_oblastnoy_bolnitse_krov_rassosalas_no/',
                // 'http://www.zdorov.online/qa/168925_posle_odnogo_dnya_v_neudobnoy_/',
                // 'http://www.zdorov.online/qa/169660_zdravstvuyte_ya_chuvstvuyu_one/',
                // 'http://www.zdorov.online/qa/170623_podskazhite_pozhaluysta_effekt/',
                // 'http://www.zdorov.online/qa/171481_posle_upotrebleniya_pomidor_i_/',
                // 'http://www.zdorov.online/qa/171503_zdravstvuyte_ya_by_khotela_uzn/',
                'http://www.zdorov.online/clinics/',
                'http://www.zdorov.online/kt/golovi/deti/',
                'http://www.zdorov.online/rentgen-v-moskve/legkih/rebenku/',
                'http://www.zdorov.online/rentgen-v-moskve/zuba/3d/',
                'http://www.zdorov.online/mrt-v-moskve/golovnogo-mozga/sosudov/',
                // 'http://www.zdorov.online/mrt-v-moskve/golovnogo-mozga/angiografiya/',
                // 'http://www.zdorov.online/mrt-v-moskve/golovnogo-mozga/s-kontrastom/',
                // 'http://www.zdorov.online/mrt-v-moskve/golovnogo-mozga/rebenku/',
                // 'http://www.zdorov.online/mrt-v-moskve/golovi/cena/',
                // 'http://www.zdorov.online/mrt-v-moskve/pozvonochnika/nedorogo/',
                'http://www.zdorov.online/mrt-v-moskve/malogo-taza/jenshin/',
                'http://www.zdorov.online/mrt-v-moskve/malogo-taza/mujchin/',
                'http://www.zdorov.online/uzi/pochek/sosudov/',
                'http://www.zdorov.online/kt/kishechnika/',
                // 'http://www.zdorov.online/kt/kolennogo-sustava/',
                // 'http://www.zdorov.online/kt/kolonoskopiya/',
                // 'http://www.zdorov.online/kt/kostei-taza/',
                // 'http://www.zdorov.online/rentgen-v-moskve/nedorogo/',
                // 'http://www.zdorov.online/rentgen-v-moskve/na-domu/',
                // 'http://www.zdorov.online/rentgen-v-moskve/pochek/',
                // 'http://www.zdorov.online/mrt-v-moskve/pochek/',
                // 'http://www.zdorov.online/mrt-v-moskve/podjeludochnoi-jelezi/',
                // 'http://www.zdorov.online/mrt-v-moskve/nadpochechnikov/',
                // 'http://www.zdorov.online/mrt-v-moskve/malogo-taza/',
                // 'http://www.zdorov.online/mrt-v-moskve/prostati/',
                // 'http://www.zdorov.online/mrt-v-moskve/pecheni/',
                // 'http://www.zdorov.online/mrt-v-moskve/jelchnogo-puzirya/',
                'http://www.zdorov.online/mrt-v-moskve/mochevogo-puzirya/',
                'http://www.zdorov.online/mskt/pecheni/',
                'http://www.zdorov.online/mskt/nadpochechnikov/',
                // 'http://www.zdorov.online/mskt/shei/',
                // 'http://www.zdorov.online/mskt/plechevogo-sustava/',
                // 'http://www.zdorov.online/mskt/loktevogo-sustava/',
                // 'http://www.zdorov.online/mskt/nosa/',
                // 'http://www.zdorov.online/biopsiya/kostnogo-mozga/',
                // 'http://www.zdorov.online/vedenie-beremennosti/kliniki/',
                // 'http://www.zdorov.online/vedenie-beremennosti/kontract-programma/',
                // 'http://www.zdorov.online/kt/',
                // 'http://www.zdorov.online/rentgen-v-moskve/',
                // 'http://www.zdorov.online/dermatoskopiya/',
                // 'http://www.zdorov.online/vulvoskopiya/',
                // 'http://www.zdorov.online/spermogramma/',
                // 'http://www.zdorov.online/biopsiya/',
                // 'http://www.zdorov.online/fototrihogramma/',
                'http://www.zdorov.online/trihoskopiya/',
                'http://www.zdorov.online/podoskipiya/',
                'http://www.zdorov.online/rinoskopiya/',
                'http://www.zdorov.online/bolezni/',
                'http://www.zdorov.online/bolezni/rak-limfouzlov-na-shee/',
                'http://www.zdorov.online/bolezni/rak-limfouzlov/',
                'http://www.zdorov.online/bolezni/zheltuha/',
                'http://www.zdorov.online/bolezni/artroz/tazobedrennogo-sustava-3-stepeni/',
                'http://www.zdorov.online/bolezni/artroz/tazobedrennogo-sustava-1-stepeni/',
                // 'http://www.zdorov.online/bolezni/artroz/tazobedrennogo-sustava-2-stepeni/',
                // 'http://www.zdorov.online/bolezni/artroz/tazobedrennogo-sustava/',
                // 'http://www.zdorov.online/bolezni/zheltuha/u-novorozhdennyh/',
                // 'http://www.zdorov.online/bolezni/zheltuha/patologicheskaya-zheltuha-novorozhdennyh/',
                // 'http://www.zdorov.online/bolezni/zheltuha/gemoliticheskaya-zheltuha-novorozhdennyh/',
                // 'http://www.zdorov.online/bolezni/zheltuha/yadernaya-zheltuha-novorozhdennyh/',
                // 'http://www.zdorov.online/bolezni/zheltuha/konyugatsionnaya-zheltuha-novorozhdennyh/',
                // 'http://www.zdorov.online/bolezni/zheltuha/karotinovaya/',
                // 'http://www.zdorov.online/bolezni/zheltuha/holestaticheskaya/',
                // 'http://www.zdorov.online/bolezni/artroz/lechenie-artroza-plechevogo-sustava/',
                // 'http://www.zdorov.online/bolezni/tremor/golovy/',
                // 'http://www.zdorov.online/bolezni/tremor/lechenie-tremora-ruk/',
                // 'http://www.zdorov.online/bolezni/artroz/plechevogo-sustava/',
                // 'http://www.zdorov.online/bolezni/artroz/deformiruyushchiy-plechevogo-sustava/',
                // 'http://www.zdorov.online/bolezni/impotentsiya/lechenie-impotentsii/',
                'http://www.zdorov.online/bolezni/artroz/golenostopnogo-sustava/',
                'http://www.zdorov.online/bolezni/impotentsiya/',
                'http://www.zdorov.online/bolezni/gastrit/',
                // 'http://www.zdorov.online/bolezni/gastrit/lechenie-narodnymi-sredstvami/',
                // 'http://www.zdorov.online/bolezni/gastrit/lechenie/',
                // 'http://www.zdorov.online/bolezni/gastrit/ostriy-lechenie/',
                // 'http://www.zdorov.online/bolezni/gastrit/ostryy/',
                'http://www.zdorov.online/bolezni/gastrit/lechenie-pri-obostrenii/'
            ]
        }))
        .pipe(gulp.dest('css/all/'));
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