

/*Переменная lang может принимать 2 значения: 'ru' 'en'.

Написать условия при котором в зависимости от значения lang будут выводится дни недели
на русском или английском языке. Решите задачу
через if, 
через switch-case 
через многомерный массив без ифов и switch.*/

let lang='en';

if (lang==='ru') {
console.log('понедельник ', 'вторник ', 'среда ', 'четверг ', 'пятница ', 'суббота ', 'воскресенье');
}

if (lang==='en'){
console.log('monday ', 'tuesday ', 'wednesday ', 'Thursday ', 'friday ', 'satterday ', 'sunday');
}

switch(lang) {
case 'ru':
    console.log('понедельник ', 'вторник ', 'среда ', 'четверг ', 'пятница ', 'суббота ', 'воскресенье');  
break;
case 'en':
   console.log('monday ', 'tuesday ', 'wednesday ', 'Thursday ', 'friday ', 'satterday ', 'sunday'); 
break;
}

var dayArray = { 
    'ru': "понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
    ,'en': "monday, tuesday, wednesday, Thursday, friday, satterday, sunday"
     }
console.log(dayArray[lang]);





/*У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести
 в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, 
 с любым другим значением вывести в консоль “студент”.
    Решить задачу с помощью нескольких тернарных операторов, без использования if или switch*/
    
let namePerson='жека'

namePerson==='Артём' ? console.log('Директор') : console.log();
namePerson==='Максим' ? console.log('преподаватель') : console.log();
namePerson!=='Максим' || 'Артём' ? console.log('студент') : console.log();