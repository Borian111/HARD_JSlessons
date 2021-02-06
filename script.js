'use strict'
//часть 1
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
    'ru': "понедельник, вторник, среда, четверг, пятница, суббота, воскресенье",
    'en': "monday, tuesday, wednesday, Thursday, friday, satterday, sunday"
     }
console.log(dayArray[lang]);

//часть 2
let namePerson='жека';

namePerson==='Артём' ? console.log('Директор') : console.log('');
namePerson==='Максим' ? console.log('преподаватель') : console.log('');
namePerson!=='Максим' || 'Артём' ? console.log('студент') : console.log('');