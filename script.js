let ruMonth = ['января ', 'февраля ', 'марта ', 'апреля ', 'мая ', 'июня ', 'июля ', 'августа ', 'сентября ', 'октября ', 'ноября ', 'декабря '];
let week = ['воскресенье ', 'понедельник ', 'вторник ', 'среда ', 'четверг ', 'пятница ', 'суббота '];
let time = new Date;
let year = time.getFullYear(),
    month = time.getMonth(),
    date = time.getDate(),
    day = time.getDay(),
    hours = time.getHours(),
    min = time.getMinutes(),
    sec = time.getSeconds();

let clock = function(){

   if(hours === 1||hours === 21){
     xHours = 'часа';
   }else if(hours === 2||hours === 3||hours === 4||hours === 22||hours === 23||hours === 24){
     xHours = 'часа';
   }else xHours = 'часов'

   let newP = document.createElement("p");
      newP.innerHTML = "Сегодня "+week[day]+date+" "+ruMonth[month]+year+" года, "+hours+" "+xHours+" "+min+" минут"+" "+sec+"  секунд";
      document.body.append(newP);
   
   let fullTime=[date, month, year, hours, min, sec]   
   for(let i=0; i<7; i++){     
      if (fullTime[i]<10){
          fullTime[i]="0"+fullTime[i];
      }
   }
    let newP2 = document.createElement("p");
    newP2.innerHTML = fullTime[0]+":"+fullTime[1]+":"+fullTime[2]+"-"+fullTime[3]+":"+fullTime[4]+":"+fullTime[5];
    document.body.append(newP2);
}

clock();










