var ball_pinki = 0; -
var ball_iskorka = 0;   +
var ball_rariti = 0;    -
var ball_radyga = 0;    *
var ball_flotershai = 0;    3
var ball_appledgek = 0; *
var ball_selestei = 0;  +
var ball_spaik = 0; 3
var ball_bigmaki = 0;   /
var ball_grannysimt = 0;    /

var poni = "popa";

var chislo = 1;

function z_1(){
    ball_pinki++;
}
function z_2(){
    ball_pinki--;
}
function z_3(){
    ball_iskorka++;
}
function z_5(){
    ball_rariti++;
}
function z_6(){
    ball_rariti--;
}
function z_7(){
    ball_radyga++;
}
function z_8(){
    ball_radyga--;
}
function z_9(){
    ball_flotershai++;
}
function z_10(){
    ball_flotershai--;
}
function z_11(){
    ball_appledgek++;
}
function z_12(){
    ball_appledgek--;
}
function z_13(){
    ball_selestei++;
}
function z_14(){
    ball_selestei--;
}
function z_15(){
    ball_spaik++;
}
function z_16(){
    ball_spaik--;
}
function z_17(){
    ball_bigmaki++;
}
function z_18(){
    ball_bigmaki--;
}
function z_19(){
    ball_grannysimt ++;
}
function z_20(){
    ball_grannysimt--;
}
function proverit(){
    /*alert(ball_pinki);
    alert(ball_iskorka);
    alert(ball_rariti);
    alert(ball_radyga);
    alert(ball_flotershai);
    alert(ball_appledgek);
    alert(ball_selestei);
    alert(ball_spaik);
    alert(ball_bigmaki);
    alert(ball_grannysimt);*/
    if (ball_pinki >= 3){
    poni = "pinki";}
    if (ball_iskorka >= 3){
    poni = "iskorka";}
    if (ball_rariti >= 3){
    poni = "rariti";}
    if (ball_radyga >= 3){
    poni = "radyga";}
    if (ball_flotershai >= 3){
    poni = "flotershai";}
    if (ball_appledgek >= 3){
    poni = "appledgek";}
    if (ball_selestei >= 3){
    poni = "selestei";}
    if (ball_spaik >= 3){
    poni = "spaik";}
    if (ball_bigmaki >= 3){
    poni = "bigmaki";}
    if (ball_grannysimt >= 3){
    poni = "grannysimt";}
    switch (poni) {
  case "pinki":
    document.getElementById('pinki').style.display = "block";
    break;
  case "iskorka":
    document.getElementById('iskorka').style.display = "block";
    break;
  case "rariti":
    document.getElementById('rariti').style.display = "block";
    break;
  case "radyga":
    document.getElementById('radyga').style.display = "block";
    break;
  case "flotershai":
    document.getElementById('flotershai').style.display = "block";
    break;
  case "appledgek":
    document.getElementById('appledgek').style.display = "block";
    break;
  case "selestei":
    document.getElementById('selestei').style.display = "block";
    break;
  case "spaik":
    document.getElementById('spaik').style.display = "block";
    break;
  case "bigmaki":
    document.getElementById('bigmaki').style.display = "block";
    break;
  case "grannysimt":
    document.getElementById('grannysimt').style.display = "block";
    break;
  default:
    document.getElementById('syperpopa').style.display = "block";
    }
}
var vopros_1 = "Вам нравятся шумные вечеринки, и часто вы находитесь в центре внимания ?";
var vopros_2 = "Вы считаете себя супер активной в любой деятельности и не можете сидеть на месте ?";
var vopros_3 = "Вы всегда ищете позитив, даже в самых сложных и деприссивных ситуациях ?";
var vopros_4 = "Вам комфортнее провести вечер за книжекой, нежели в шумной компании ?";
var vopros_5 = "Часто у вас сильная тяга к знаниям, достижению истины ?";
var vopros_6 = "В солжных ситуациях вы сможете взять инициативу и привести команду к победе ?";
var vopros_7 = "Хорошо развитая моторика рук - это про вас. Вам очень нравится рукодельничать ?";
var vopros_8 = "Вы любите командовать другими ?";
var vopros_9 = "Часто вы бываете напористыми в своих действиях ?";
var vopros_10 = "Вы не можете жить без спорта ?";
var vopros_11 = "Вам очень нравится соревноваться и доказывать свою правоту ?";
var vopros_12 = "Порой вы проявляете агрессию ?";
var vopros_13 = "В любой ситуации  вы стараетесть решить все мирным путем ?";
var vopros_14 = "Вы едины с природой ?";
var vopros_15 = "Вы считаете себя мягкой личностью, которая никого не обдит ?";
var vopros_16 = "Вы готовы трудиться в поте лица ?";
var vopros_17 = "Вы умеете хорошо готовить ?";
var vopros_18 = "Вы готовы отдать все ради других";
var vopros_19 = "Вы можете взять ответственность за других ?";
var vopros_20 = "У вас большой жизненнный опыт, которым вы можете поделиться ?";
var vopros_21 = "Вы считаете, что у вас будет великое будущее ?";
var vopros_22 = "Вы влюбчивый, но дейстовоавть не готовы ?";
var vopros_23 = "Вы хотите поменять что-либо в жизни, он не рискуете выйти из зоны комфорта ?";
var vopros_24 = "По жизни вас используют как мальчика на побегушках ?";
var vopros_25 = "Вы больше предпочитаете грубую силу ?";
var vopros_26 = "Порой вы ленивы, апатия твой лучший друг ?";
var vopros_27 = "Вы часто делаете поспешные и необдуманные решения ?";
var vopros_28 = "По отношению к некоторым вы чувствуете себя мамой или бабушкой ?";
var vopros_29 = "У вас побаливает спина, не смотря на возраст вы считаете себя старушкой ?";
var vopros_30 = "Вы устали от  активной жизни и для вас главное покой ?";
document.addEventListener('DOMContentLoaded', function(){ 
    document.getElementById('v_1').innerHTML = vopros_1;
    document.getElementById('v_2').innerHTML = vopros_2;
    document.getElementById('v_3').innerHTML = vopros_3;
    document.getElementById('v_4').innerHTML = vopros_4;
    document.getElementById('v_5').innerHTML = vopros_5;
    document.getElementById('v_6').innerHTML = vopros_6;
    document.getElementById('v_7').innerHTML = vopros_7;
    document.getElementById('v_8').innerHTML = vopros_8;
    document.getElementById('v_9').innerHTML = vopros_9;
    document.getElementById('v_10').innerHTML = vopros_10;
    document.getElementById('v_11').innerHTML = vopros_11;
    document.getElementById('v_12').innerHTML = vopros_12;
    document.getElementById('v_13').innerHTML = vopros_13;
    document.getElementById('v_14').innerHTML = vopros_14;
    document.getElementById('v_15').innerHTML = vopros_15;
    document.getElementById('v_16').innerHTML = vopros_16;
    document.getElementById('v_17').innerHTML = vopros_17;
    document.getElementById('v_18').innerHTML = vopros_18;
    document.getElementById('v_19').innerHTML = vopros_19;
    document.getElementById('v_20').innerHTML = vopros_20;
    document.getElementById('v_21').innerHTML = vopros_21;
    document.getElementById('v_22').innerHTML = vopros_22;
    document.getElementById('v_23').innerHTML = vopros_23;
    document.getElementById('v_24').innerHTML = vopros_24;
    document.getElementById('v_25').innerHTML = vopros_25;
    document.getElementById('v_26').innerHTML = vopros_26;
    document.getElementById('v_27').innerHTML = vopros_27;
    document.getElementById('v_28').innerHTML = vopros_28;
    document.getElementById('v_29').innerHTML = vopros_29;
    document.getElementById('v_30').innerHTML = vopros_30;
});
function sled_vopr(){
    if(document.getElementById('vopros29').style.display == "block"){
        document.getElementById('vopros29').style.display = "none";
        document.getElementById('vopros30').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
    }
    if(document.getElementById('vopros28').style.display == "block"){
        document.getElementById('vopros28').style.display = "none";
        document.getElementById('vopros29').style.display = "block";
    }
    if(document.getElementById('vopros27').style.display == "block"){
        document.getElementById('vopros27').style.display = "none";
        document.getElementById('vopros28').style.display = "block";
    }
    if(document.getElementById('vopros26').style.display == "block"){
        document.getElementById('vopros26').style.display = "none";
        document.getElementById('vopros27').style.display = "block";
    }
    if(document.getElementById('vopros25').style.display == "block"){
        document.getElementById('vopros25').style.display = "none";
        document.getElementById('vopros26').style.display = "block";
    }
    if(document.getElementById('vopros24').style.display == "block"){
        document.getElementById('vopros24').style.display = "none";
        document.getElementById('vopros25').style.display = "block";
    }
    if(document.getElementById('vopros23').style.display == "block"){
        document.getElementById('vopros23').style.display = "none";
        document.getElementById('vopros24').style.display = "block";
    }
    if(document.getElementById('vopros22').style.display == "block"){
        document.getElementById('vopros22').style.display = "none";
        document.getElementById('vopros23').style.display = "block";
    }
    if(document.getElementById('vopros21').style.display == "block"){
        document.getElementById('vopros21').style.display = "none";
        document.getElementById('vopros22').style.display = "block";
    }
    if(document.getElementById('vopros20').style.display == "block"){
        document.getElementById('vopros20').style.display = "none";
        document.getElementById('vopros21').style.display = "block";
    }
    if(document.getElementById('vopros19').style.display == "block"){
        document.getElementById('vopros19').style.display = "none";
        document.getElementById('vopros20').style.display = "block";
    }
    if(document.getElementById('vopros18').style.display == "block"){
        document.getElementById('vopros18').style.display = "none";
        document.getElementById('vopros19').style.display = "block";
    }
    if(document.getElementById('vopros17').style.display == "block"){
        document.getElementById('vopros17').style.display = "none";
        document.getElementById('vopros18').style.display = "block";
    }
    if(document.getElementById('vopros16').style.display == "block"){
        document.getElementById('vopros16').style.display = "none";
        document.getElementById('vopros17').style.display = "block";
    }
    if(document.getElementById('vopros15').style.display == "block"){
        document.getElementById('vopros15').style.display = "none";
        document.getElementById('vopros16').style.display = "block";
    }
    if(document.getElementById('vopros14').style.display == "block"){
        document.getElementById('vopros14').style.display = "none";
        document.getElementById('vopros15').style.display = "block";
    }
    if(document.getElementById('vopros13').style.display == "block"){
        document.getElementById('vopros13').style.display = "none";
        document.getElementById('vopros14').style.display = "block";
    }
    if(document.getElementById('vopros12').style.display == "block"){
        document.getElementById('vopros12').style.display = "none";
        document.getElementById('vopros13').style.display = "block";
    }
    if(document.getElementById('vopros11').style.display == "block"){
        document.getElementById('vopros11').style.display = "none";
        document.getElementById('vopros12').style.display = "block";
    }
    if(document.getElementById('vopros10').style.display == "block"){
        document.getElementById('vopros10').style.display = "none";
        document.getElementById('vopros11').style.display = "block";
    }
    if(document.getElementById('vopros9').style.display == "block"){
        document.getElementById('vopros9').style.display = "none";
        document.getElementById('vopros10').style.display = "block";
    }
    if(document.getElementById('vopros8').style.display == "block"){
        document.getElementById('vopros8').style.display = "none";
        document.getElementById('vopros9').style.display = "block";
    }
    if(document.getElementById('vopros7').style.display == "block"){
        document.getElementById('vopros7').style.display = "none";
        document.getElementById('vopros8').style.display = "block";
    }
    if(document.getElementById('vopros6').style.display == "block"){
        document.getElementById('vopros6').style.display = "none";
        document.getElementById('vopros7').style.display = "block";
    }
    if(document.getElementById('vopros5').style.display == "block"){
        document.getElementById('vopros5').style.display = "none";
        document.getElementById('vopros6').style.display = "block";
    }
    if(document.getElementById('vopros4').style.display == "block"){
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
    }
    if(document.getElementById('vopros3').style.display == "block"){
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
    }
    if(document.getElementById('vopros2').style.display == "block"){
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
    }
    if(document.getElementById('vopros1').style.display == "block"){
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
    }
    
    if(document.getElementById('answer29').style.display == "block"){
        document.getElementById('answer29').style.display = "none";
        document.getElementById('answer30').style.display = "block";
        /*document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";*/
    }
    if(document.getElementById('answer28').style.display == "block"){
        document.getElementById('answer28').style.display = "none";
        document.getElementById('answer29').style.display = "block";
    }
    if(document.getElementById('answer27').style.display == "block"){
        document.getElementById('answer27').style.display = "none";
        document.getElementById('answer28').style.display = "block";
    }
    if(document.getElementById('answer26').style.display == "block"){
        document.getElementById('answer26').style.display = "none";
        document.getElementById('answer27').style.display = "block";
    }
    if(document.getElementById('answer25').style.display == "block"){
        document.getElementById('answer25').style.display = "none";
        document.getElementById('answer26').style.display = "block";
    }
    if(document.getElementById('answer24').style.display == "block"){
        document.getElementById('answer24').style.display = "none";
        document.getElementById('answer25').style.display = "block";
    }
    if(document.getElementById('answer23').style.display == "block"){
        document.getElementById('answer23').style.display = "none";
        document.getElementById('answer24').style.display = "block";
    }
    if(document.getElementById('answer22').style.display == "block"){
        document.getElementById('answer22').style.display = "none";
        document.getElementById('answer23').style.display = "block";
    }
    if(document.getElementById('answer21').style.display == "block"){
        document.getElementById('answer21').style.display = "none";
        document.getElementById('answer22').style.display = "block";
    }
    if(document.getElementById('answer20').style.display == "block"){
        document.getElementById('answer20').style.display = "none";
        document.getElementById('answer21').style.display = "block";
    }
    if(document.getElementById('answer19').style.display == "block"){
        document.getElementById('answer19').style.display = "none";
        document.getElementById('answer20').style.display = "block";
    }
    if(document.getElementById('answer18').style.display == "block"){
        document.getElementById('answer18').style.display = "none";
        document.getElementById('answer19').style.display = "block";
    }
    if(document.getElementById('answer17').style.display == "block"){
        document.getElementById('answer17').style.display = "none";
        document.getElementById('answer18').style.display = "block";
    }
    if(document.getElementById('answer16').style.display == "block"){
        document.getElementById('answer16').style.display = "none";
        document.getElementById('answer17').style.display = "block";
    }
    if(document.getElementById('answer15').style.display == "block"){
        document.getElementById('answer15').style.display = "none";
        document.getElementById('answer16').style.display = "block";
    }
    if(document.getElementById('answer14').style.display == "block"){
        document.getElementById('answer14').style.display = "none";
        document.getElementById('answer15').style.display = "block";
    }
    if(document.getElementById('answer13').style.display == "block"){
        document.getElementById('answer13').style.display = "none";
        document.getElementById('answer14').style.display = "block";
    }
    if(document.getElementById('answer12').style.display == "block"){
        document.getElementById('answer12').style.display = "none";
        document.getElementById('answer13').style.display = "block";
    }
    if(document.getElementById('answer11').style.display == "block"){
        document.getElementById('answer11').style.display = "none";
        document.getElementById('answer12').style.display = "block";
    }
    if(document.getElementById('answer10').style.display == "block"){
        document.getElementById('answer10').style.display = "none";
        document.getElementById('answer11').style.display = "block";
    }
    if(document.getElementById('answer9').style.display == "block"){
        document.getElementById('answer9').style.display = "none";
        document.getElementById('answer10').style.display = "block";
    }
    if(document.getElementById('answer8').style.display == "block"){
        document.getElementById('answer8').style.display = "none";
        document.getElementById('answer9').style.display = "block";
    }
    if(document.getElementById('answer7').style.display == "block"){
        document.getElementById('answer7').style.display = "none";
        document.getElementById('answer8').style.display = "block";
    }
    if(document.getElementById('answer6').style.display == "block"){
        document.getElementById('answer6').style.display = "none";
        document.getElementById('answer7').style.display = "block";
    }
    if(document.getElementById('answer5').style.display == "block"){
        document.getElementById('answer5').style.display = "none";
        document.getElementById('answer6').style.display = "block";
    }
    if(document.getElementById('answer4').style.display == "block"){
        document.getElementById('answer4').style.display = "none";
        document.getElementById('answer5').style.display = "block";
    }
    if(document.getElementById('answer3').style.display == "block"){
        document.getElementById('answer3').style.display = "none";
        document.getElementById('answer4').style.display = "block";
    }
    if(document.getElementById('answer2').style.display == "block"){
        document.getElementById('answer2').style.display = "none";
        document.getElementById('answer3').style.display = "block";
    }
    if(document.getElementById('answer1').style.display == "block"){
        document.getElementById('answer1').style.display = "none";
        document.getElementById('answer2').style.display = "block";
    }
}
function nazad(){
    if(document.getElementById('answer2').style.display == "block"){
        document.getElementById('answer2').style.display = "none";
        document.getElementById('answer1').style.display = "block";
    }
    if(document.getElementById('answer3').style.display == "block"){
        document.getElementById('answer3').style.display = "none";
        document.getElementById('answer2').style.display = "block";
    }
    if(document.getElementById('answer4').style.display == "block"){
        document.getElementById('answer4').style.display = "none";
        document.getElementById('answer3').style.display = "block";
    }
    if(document.getElementById('answer5').style.display == "block"){
        document.getElementById('answer5').style.display = "none";
        document.getElementById('answer4').style.display = "block";
    }
    if(document.getElementById('answer6').style.display == "block"){
        document.getElementById('answer6').style.display = "none";
        document.getElementById('answer5').style.display = "block";
    }
    if(document.getElementById('answer7').style.display == "block"){
        document.getElementById('answer7').style.display = "none";
        document.getElementById('answer6').style.display = "block";
    }
    if(document.getElementById('answer8').style.display == "block"){
        document.getElementById('answer8').style.display = "none";
        document.getElementById('answer7').style.display = "block";
    }
    if(document.getElementById('answer9').style.display == "block"){
        document.getElementById('answer9').style.display = "none";
        document.getElementById('answer8').style.display = "block";
    }
    if(document.getElementById('answer10').style.display == "block"){
        document.getElementById('answer10').style.display = "none";
        document.getElementById('answer9').style.display = "block";
    }
    if(document.getElementById('answer11').style.display == "block"){
        document.getElementById('answer11').style.display = "none";
        document.getElementById('answer10').style.display = "block";
    }
    if(document.getElementById('answer12').style.display == "block"){
        document.getElementById('answer12').style.display = "none";
        document.getElementById('answer11').style.display = "block";
    }
    if(document.getElementById('answer13').style.display == "block"){
        document.getElementById('answer13').style.display = "none";
        document.getElementById('answer12').style.display = "block";
    }
    if(document.getElementById('answer14').style.display == "block"){
        document.getElementById('answer14').style.display = "none";
        document.getElementById('answer13').style.display = "block";
    }
    if(document.getElementById('answer15').style.display == "block"){
        document.getElementById('answer15').style.display = "none";
        document.getElementById('answer14').style.display = "block";
    }
    if(document.getElementById('answer16').style.display == "block"){
        document.getElementById('answer16').style.display = "none";
        document.getElementById('answer15').style.display = "block";
    }
    if(document.getElementById('answer17').style.display == "block"){
        document.getElementById('answer17').style.display = "none";
        document.getElementById('answer16').style.display = "block";
    }
    if(document.getElementById('answer18').style.display == "block"){
        document.getElementById('answer18').style.display = "none";
        document.getElementById('answer17').style.display = "block";
    }
    if(document.getElementById('answer19').style.display == "block"){
        document.getElementById('answer19').style.display = "none";
        document.getElementById('answer18').style.display = "block";
    }
    if(document.getElementById('answer20').style.display == "block"){
        document.getElementById('answer20').style.display = "none";
        document.getElementById('answer19').style.display = "block";
    }
    if(document.getElementById('answer21').style.display == "block"){
        document.getElementById('answer21').style.display = "none";
        document.getElementById('answer20').style.display = "block";
    }
    if(document.getElementById('answer22').style.display == "block"){
        document.getElementById('answer22').style.display = "none";
        document.getElementById('answer21').style.display = "block";
    }
    if(document.getElementById('answer23').style.display == "block"){
        document.getElementById('answer23').style.display = "none";
        document.getElementById('answer22').style.display = "block";
    }
    if(document.getElementById('answer24').style.display == "block"){
        document.getElementById('answer24').style.display = "none";
        document.getElementById('answer23').style.display = "block";
    }
    if(document.getElementById('answer25').style.display == "block"){
        document.getElementById('answer25').style.display = "none";
        document.getElementById('answer24').style.display = "block";
    }
    if(document.getElementById('answer26').style.display == "block"){
        document.getElementById('answer26').style.display = "none";
        document.getElementById('answer25').style.display = "block";
    }
    if(document.getElementById('answer27').style.display == "block"){
        document.getElementById('answer27').style.display = "none";
        document.getElementById('answer26').style.display = "block";
    }
    if(document.getElementById('answer28').style.display == "block"){
        document.getElementById('answer28').style.display = "none";
        document.getElementById('answer27').style.display = "block";
    }
    if(document.getElementById('answer29').style.display == "block"){
        document.getElementById('answer29').style.display = "none";
        document.getElementById('answer28').style.display = "block";
    }
    if(document.getElementById('answer30').style.display == "block"){
        document.getElementById('answer30').style.display = "none";
        document.getElementById('answer29').style.display = "block";
    }
    if(document.getElementById('vopros2').style.display == "block"){
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros1').style.display = "block";
    }
    if(document.getElementById('vopros3').style.display == "block"){
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
    }
    if(document.getElementById('vopros4').style.display == "block"){
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
    }
    if(document.getElementById('vopros5').style.display == "block"){
        document.getElementById('vopros5').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
    }
    if(document.getElementById('vopros6').style.display == "block"){
        document.getElementById('vopros6').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
    }
    if(document.getElementById('vopros7').style.display == "block"){
        document.getElementById('vopros7').style.display = "none";
        document.getElementById('vopros6').style.display = "block";
    }
    if(document.getElementById('vopros8').style.display == "block"){
        document.getElementById('vopros8').style.display = "none";
        document.getElementById('vopros7').style.display = "block";
    }
    if(document.getElementById('vopros9').style.display == "block"){
        document.getElementById('vopros9').style.display = "none";
        document.getElementById('vopros8').style.display = "block";
    }
    if(document.getElementById('vopros10').style.display == "block"){
        document.getElementById('vopros10').style.display = "none";
        document.getElementById('vopros9').style.display = "block";
    }
    if(document.getElementById('vopros11').style.display == "block"){
        document.getElementById('vopros11').style.display = "none";
        document.getElementById('vopros10').style.display = "block";
    }
    if(document.getElementById('vopros12').style.display == "block"){
        document.getElementById('vopros12').style.display = "none";
        document.getElementById('vopros11').style.display = "block";
    }
    if(document.getElementById('vopros13').style.display == "block"){
        document.getElementById('vopros13').style.display = "none";
        document.getElementById('vopros12').style.display = "block";
    }
    if(document.getElementById('vopros14').style.display == "block"){
        document.getElementById('vopros14').style.display = "none";
        document.getElementById('vopros13').style.display = "block";
    }
    if(document.getElementById('vopros15').style.display == "block"){
        document.getElementById('vopros15').style.display = "none";
        document.getElementById('vopros14').style.display = "block";
    }
    if(document.getElementById('vopros16').style.display == "block"){
        document.getElementById('vopros16').style.display = "none";
        document.getElementById('vopros15').style.display = "block";
    }
    if(document.getElementById('vopros17').style.display == "block"){
        document.getElementById('vopros17').style.display = "none";
        document.getElementById('vopros16').style.display = "block";
    }
    if(document.getElementById('vopros18').style.display == "block"){
        document.getElementById('vopros18').style.display = "none";
        document.getElementById('vopros17').style.display = "block";
    }
    if(document.getElementById('vopros19').style.display == "block"){
        document.getElementById('vopros19').style.display = "none";
        document.getElementById('vopros18').style.display = "block";
    }
    if(document.getElementById('vopros20').style.display == "block"){
        document.getElementById('vopros20').style.display = "none";
        document.getElementById('vopros19').style.display = "block";
    }
    if(document.getElementById('vopros21').style.display == "block"){
        document.getElementById('vopros21').style.display = "none";
        document.getElementById('vopros20').style.display = "block";
    }
    if(document.getElementById('vopros22').style.display == "block"){
        document.getElementById('vopros22').style.display = "none";
        document.getElementById('vopros21').style.display = "block";
    }
    if(document.getElementById('vopros23').style.display == "block"){
        document.getElementById('vopros23').style.display = "none";
        document.getElementById('vopros22').style.display = "block";
    }
    if(document.getElementById('vopros24').style.display == "block"){
        document.getElementById('vopros24').style.display = "none";
        document.getElementById('vopros23').style.display = "block";
    }
    if(document.getElementById('vopros25').style.display == "block"){
        document.getElementById('vopros25').style.display = "none";
        document.getElementById('vopros24').style.display = "block";
    }
    if(document.getElementById('vopros26').style.display == "block"){
        document.getElementById('vopros26').style.display = "none";
        document.getElementById('vopros25').style.display = "block";
    }
    if(document.getElementById('vopros27').style.display == "block"){
        document.getElementById('vopros27').style.display = "none";
        document.getElementById('vopros26').style.display = "block";
    }
    if(document.getElementById('vopros28').style.display == "block"){
        document.getElementById('vopros28').style.display = "none";
        document.getElementById('vopros27').style.display = "block";
    }
    if(document.getElementById('vopros29').style.display == "block"){
        document.getElementById('vopros29').style.display = "none";
        document.getElementById('vopros28').style.display = "block";
    }
    if(document.getElementById('vopros30').style.display == "block"){
        document.getElementById('vopros30').style.display = "none";
        document.getElementById('vopros29').style.display = "block";
    }
}