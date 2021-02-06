'use strict'

function sTr(x) {
    if (typeof(x) !== "string") { //проверка на string
        console.log("Это не строка");
    }else if (typeof(x) === "string")
         x = x.toString();
         x = x.trim();//убираем пробелы
         
        if(x.length > 30) {
            x = x.substr(0, 30) + '...';
          }
console.log(x);
}
sTr('    123445335   ');