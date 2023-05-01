
{//Проверка
var ball = 0;
var estimation = 0;
var percent = 0;
var numder = 1;
function true_answer(){
    ball++;
}
function proverit(){
    //Разбаловка
    if(ball <= 4){
        estimation = 2;
    }
    if(ball >= 5 && ball <=6){
        estimation = 3;
    }
    if(ball >= 7 && ball <=8){
        estimation = 4;
    }
    if(ball >= 9){
        estimation = 5;
    }
    switch (estimation) {
        case 2:
            document.getElementById('estimation_2').style.display = "block";
            break;
        case 3:
            document.getElementById('estimation_3').style.display = "block";
            break;
        case 4:
            document.getElementById('estimation_4').style.display = "block";
            break;  
        case 5:
            document.getElementById('estimation_5').style.display = "block";
            break;
        default:
    }
    {//Таблица результата
    document.getElementById('ball_box_2').innerHTML = ball;
    document.getElementById('ball_box_3').innerHTML = ball;
    document.getElementById('ball_box_4').innerHTML = ball;
    document.getElementById('ball_box_5').innerHTML = ball;
    percent = ball / 10 * 100;
    document.getElementById('proc_box').innerHTML = percent;}
}
}
{//Вопрос и вариант ответа
//Вводные вопросы
var vopros_1 = "Что такое интернет-мошенничество ?";
    var answer_1_1 = "Вид деятельности в киберспорте";
    var answer_1_2 = "Обман граждан в своих корыстных целях";
    var answer_1_3 = "Кража чужого имущества в интернете";
    var answer_1_4 = "Проверка пользователей на безопастность в интернете";
var vopros_2 = "Какой основной мотив злоумышленников ?";
    var answer_2_1 = "Получение данных";
    var answer_2_2 = "Финансовая выгода";
    var answer_2_3 = "Кибервойна";
    var answer_2_4 = "Все вышеперечисленное ";
var vopros_3 = "Какие организации наиболее часть сталкиваются с интрнет-мошеннчеством ?";
    var answer_3_1 = "Госучяереждения";
    var answer_3_2 = "Соцсети";
    var answer_3_3 = "Медицинские организации";
    var answer_3_4 = "Образовательные оганизации";
var vopros_4 = "Признаками мошенничества являются ?";
    var answer_4_1 = "Требование ввода ваших персональных данных на сомнительных ресурсах";
    var answer_4_2 = "Незнакомы сайт";
    var answer_4_3 = "Странная, навязчивая картинка на сайте";
    var answer_4_4 = "Онлайн консультант, предлагающий сови услуги";
var vopros_5 = "Из-за чего чаще всего людт попадаются на обман ?";
    var answer_5_1 = "Заработок легких денег";
    var answer_5_2 = "Поиск работы ";
    var answer_5_3 = "Посещение сомнительных сайтов";
    var answer_5_4 = "Просмотр нелегального контента";
//Теоретические вопросы
var vopros_6 = "Что такое фишинг ?";
    var answer_6_1 = "Вид атаки подразумевает обращение злоумышленника в компанию по корпоративному телефону ";
    var answer_6_2 = "Вид интернет-мошенничества, целью которого является получение доступа к конфиденциальным данным пользователей ";
    var answer_6_3 = "Регистрация доменных имён, содержащих торговую марку, принадлежащую другому лицу";
    var answer_6_4 = "Распространённый вид мошенничества, получивший наибольшее развитие с появлением массовых рассылок по электронной почте";
var vopros_7 = "Что обознгачает статья 272 УК РФ ?";
    var answer_7_1 ="Неправомерный доступ к компьютерной информации";
    var answer_7_2 = "Создание, использование и распространение вредоносных программ";
    var answer_7_3 = "Нарушение правил эксплуатации средств хранения, обработки или передачи компьютерной информации ";
    var answer_7_4 = "Оскорбление в интеренете";
var vopros_8 = "Что такое 'Нигеричские письма' ?";
    var answer_8_1 = "Вид интернет-мошенничества, целью которого является получение доступа к конфиденциальным данным пользователей с проведение массовых рассылок писем.";
    var answer_8_2 = "Регистрация доменных имён, близких по написанию с адресами популярных сайтов в расчёте на ошибку части пользователей.";
    var answer_8_3 = "Письма счастья, получивший наибольшее развитие с появлением массовых рассылок по электронной почте.";
    var answer_8_4 = "Атака, в которой злоумышленник представляется другим человеком и по заранее подготовленному сценарию узнает конфиденциальную информацию."; 
// Практические вопросы
var vopros_9 = "Вы хотите купить смартфон в интернет-магазине. Как определить, что этому магазину можно доверять ?";
    var answer_9_1 = "Посоветовать магазин другу, который тоже собирается купить смартфон, и проверить на нём надежность сайта.";
    var answer_9_2 = "Проверить, предлагает ли магазин гарантию на смартфон.";
    var answer_9_3 = "Поискать отзывы о магазине на других ресурсах (например, на Яндекс.Маркете).";
    var answer_9_4 = "Почитать отзывы на сайте самого магазина.";
var vopros_10 = "Что нужно, чтобы максимально обезопасить свой электронный кошелёк?";
    var answer_10_1 = "Не хранить деньги в электронном кошельке, а пополнять его непосредственно перед платежом и сразу тратить всю сумму.";
    var answer_10_2 = "Придумать пароль для доступа к кошельку не менее чем из 16 символов.";
    var answer_10_3 = "Пользоваться одноразовыми платежными паролями для подтверждения операций.";
    var answer_10_4 = "Каждый месяц задавать новый пароль для входа на сервис."; 
}
document.addEventListener('DOMContentLoaded', function(){ //Вывод вопроса и ответа на экран
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
    document.getElementById('a_1_1').innerHTML = answer_1_1;
    document.getElementById('a_1_2').innerHTML = answer_1_2;
    document.getElementById('a_1_3').innerHTML = answer_1_3;
    document.getElementById('a_1_4').innerHTML = answer_1_4;
    document.getElementById('a_2_1').innerHTML = answer_2_1;
    document.getElementById('a_2_2').innerHTML = answer_2_2;
    document.getElementById('a_2_3').innerHTML = answer_2_3;
    document.getElementById('a_2_4').innerHTML = answer_2_4;
    document.getElementById('a_3_1').innerHTML = answer_3_1;
    document.getElementById('a_3_2').innerHTML = answer_3_2;
    document.getElementById('a_3_3').innerHTML = answer_3_3;
    document.getElementById('a_3_4').innerHTML = answer_3_4;
    document.getElementById('a_4_1').innerHTML = answer_4_1;
    document.getElementById('a_4_2').innerHTML = answer_4_2;
    document.getElementById('a_4_3').innerHTML = answer_4_3;
    document.getElementById('a_4_4').innerHTML = answer_4_4;
    document.getElementById('a_5_1').innerHTML = answer_5_1;
    document.getElementById('a_5_2').innerHTML = answer_5_2;
    document.getElementById('a_5_3').innerHTML = answer_5_3;
    document.getElementById('a_5_4').innerHTML = answer_5_4;
    document.getElementById('a_6_1').innerHTML = answer_6_1;
    document.getElementById('a_6_2').innerHTML = answer_6_2;
    document.getElementById('a_6_3').innerHTML = answer_6_3;
    document.getElementById('a_6_4').innerHTML = answer_6_4;
    document.getElementById('a_7_1').innerHTML = answer_7_1;
    document.getElementById('a_7_2').innerHTML = answer_7_2;
    document.getElementById('a_7_3').innerHTML = answer_7_3;
    document.getElementById('a_7_4').innerHTML = answer_7_4;
    document.getElementById('a_8_1').innerHTML = answer_8_1;
    document.getElementById('a_8_2').innerHTML = answer_8_2;
    document.getElementById('a_8_3').innerHTML = answer_8_3;
    document.getElementById('a_8_4').innerHTML = answer_8_4;
    document.getElementById('a_9_1').innerHTML = answer_9_1;
    document.getElementById('a_9_2').innerHTML = answer_9_2;
    document.getElementById('a_9_3').innerHTML = answer_9_3;
    document.getElementById('a_9_4').innerHTML = answer_9_4;
    document.getElementById('a_10_1').innerHTML = answer_10_1;
    document.getElementById('a_10_2').innerHTML = answer_10_2;
    document.getElementById('a_10_3').innerHTML = answer_10_3;
    document.getElementById('a_10_4').innerHTML = answer_10_4;

   
});
document.addEventListener('DOMContentLoaded', function(){ //Вывод вариантов ответа на экран
    document.getElementById('z_1').innerHTML = answer_1;
    document.getElementById('z_2').innerHTML = answer_2;
    document.getElementById('z_3').innerHTML = answer_3;
    document.getElementById('z_4').innerHTML = answer_4;
    document.getElementById('z_5').innerHTML = answer_5;
    document.getElementById('z_6').innerHTML = answer_6;
    document.getElementById('z_7').innerHTML = answer_7;
    document.getElementById('z_8').innerHTML = answer_8;
    document.getElementById('z_9').innerHTML = answer_9;
    document.getElementById('z_10').innerHTML = answer_10;
    document.getElementById('z_11').innerHTML = answer_11;
    document.getElementById('z_12').innerHTML = answer_12;
    document.getElementById('z_13').innerHTML = answer_13;
    document.getElementById('z_14').innerHTML = answer_14;
    document.getElementById('z_15').innerHTML = answer_15;
    document.getElementById('z_16').innerHTML = answer_16;
    document.getElementById('z_17').innerHTML = answer_17;
    document.getElementById('z_18').innerHTML = answer_18;
    document.getElementById('z_19').innerHTML = answer_19;
    document.getElementById('z_20').innerHTML = answer_20;
    document.getElementById('z_21').innerHTML = answer_21;
    document.getElementById('z_22').innerHTML = answer_22;
    document.getElementById('z_23').innerHTML = answer_23;
    document.getElementById('z_24').innerHTML = answer_24;
    document.getElementById('z_25').innerHTML = answer_25;
    document.getElementById('z_26').innerHTML = answer_26;
    document.getElementById('z_27').innerHTML = answer_27;
    document.getElementById('z_28').innerHTML = answer_28;
    document.getElementById('z_29').innerHTML = answer_29;
    document.getElementById('z_30').innerHTML = answer_30;
    document.getElementById('z_31').innerHTML = answer_31;
    document.getElementById('z_32').innerHTML = answer_32;
    document.getElementById('z_33').innerHTML = answer_33;
    document.getElementById('z_34').innerHTML = answer_34;
    document.getElementById('z_35').innerHTML = answer_35;
    document.getElementById('z_36').innerHTML = answer_36;
    document.getElementById('z_37').innerHTML = answer_37;
    document.getElementById('z_38').innerHTML = answer_38;
    document.getElementById('z_39').innerHTML = answer_39;
    document.getElementById('z_40').innerHTML = answer_40;
});
function sled_vopr(){ //Кнопка "Следующий вопрос"
    numder++;
    //Вопросы
    if(document.getElementById('vopros9').style.display == "block"){
        document.getElementById('vopros9').style.display = "none";
        document.getElementById('vopros10').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_nz').style.marginRight = "235px";
        document.getElementById('kn_pr').style.display = "block";
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
    //Ответы
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
function nazad(){ //Кнопка "Назад"
    numder--;
    //Вопросы
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
    //Ответы
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
        document.getElementById('kn_sl').style.display = "block";
        document.getElementById('kn_pr').style.display = "none";
    }
}
window.onload = function(){ //Прогрузка функций
    sled_vopr;
    nazad;
    document.getElementById('num').innerHTML = numder;
}; 
function kn_close(){
    if(document.getElementById('estimation_2').style.display == "block"){
        document.getElementById('estimation_2').style.display = "none";
    }
    if(document.getElementById('estimation_3').style.display == "block"){
        document.getElementById('estimation_3').style.display = "none";
    }
    if(document.getElementById('estimation_4').style.display == "block"){
        document.getElementById('estimation_4').style.display = "none";
    }
    if(document.getElementById('estimation_5').style.display == "block"){
        document.getElementById('estimation_5').style.display = "none";
    }
}