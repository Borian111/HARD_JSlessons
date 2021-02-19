'use strict'

let clock = function(){
  
  let week = ['воскресенье ', 'понедельник ', 'вторник ', 'среда ', 'четверг ', 'пятница ', 'суббота '];
  let time = new Date;
  let year = time.getFullYear(),
  month = time.getMonth(),
  date = time.getDate(),
  day = time.getDay(),
  hours = time.getHours(),
  min = time.getMinutes(),
  sec = time.getSeconds(),
  xHours='',
  xMin='',
  xSec='',
  newP = document.createElement("p"),
  newP2 = document.createElement("p"),
  ruMonth = ['января ', 'февраля ', 'марта ', 'апреля ', 'мая ', 'июня ', 'июля ', 'августа ', 'сентября ', 'октября ', 'ноября ', 'декабря '];
  
  if(hours === 1||hours === 21){
    xHours = 'час';
  }else if(hours === 2||hours === 3||hours === 4||hours === 22||hours === 23||hours === 24){
    xHours = 'часа';
  }else xHours = 'часов';
  if(min === 1||min === 21||min === 31||min === 41||min === 51){
    xMin = 'минута';
  }else if(min === 2||min === 3||min === 4||min === 22||min === 23||min === 24||min === 32||min === 33||min === 34||min === 42||min === 43||min === 44||min === 52||min === 53||min === 54){
    xMin = 'минуты';
  }else xMin = 'минут';
  if(sec === 1||sec === 21||sec === 31||sec === 41||sec === 51){
    xSec = 'cекунда';
  }else if(sec === 2||sec === 3||sec === 4||sec === 22||sec === 23||sec === 24||sec === 32||sec === 33||sec === 34||sec === 42||sec === 43||sec === 44||sec === 52||sec === 53||sec === 54){
    xSec = 'секунды';
  }else xSec = 'секунд';
   
    newP.innerHTML = "Сегодня "+week[day]+date+" "+ruMonth[month]+year+" года, "+hours+" "+xHours+" "+min+" "+xMin+" "+sec+" "+xSec;
    document.body.append(newP);

  let fullTime=[date, month, year, hours, min, sec];
    for(let i=0; i<7; i++){
      if (fullTime[i]<10){
          fullTime[i]="0"+fullTime[i];
      }
    }   
    newP2.innerHTML = fullTime[0]+":"+fullTime[1]+":"+fullTime[2]+"-"+fullTime[3]+":"+fullTime[4]+":"+fullTime[5];
    document.body.append(newP2);   
};

setInterval(clock, 1000);
