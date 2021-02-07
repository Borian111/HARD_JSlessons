'use strict'
let x='   13575fbfgffgbgb4752345243256546464564565464564564565465464645645656    ';
function sTr(x) {
    if (typeof(x) !== "string") { //проверка на string
        console.log("Это не строка");
    }else if (typeof(x) === "string"){
        x = x.trim();//убираем пробелы
    }     
    if(x.length > 30) {
        x = x.substr(0, 30) + '...';
    }
console.log(x);
}
sTr(x);