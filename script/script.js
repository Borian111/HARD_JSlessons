

// объявление переменных

let num = 266219;

//Вывести в консоль произведение (умножение) цифр этого числа

let numX = String(num);
console.log(numX.split(''));

let Arr = numX.split('');
let BArr = (Arr.length)
let sumM1 = 1;

for (let i = 0; i < BArr; i++) {
    sumM1 = sumM1*( Arr[i] );
};
//3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let su=sumM1**3;
console.log(su);
//4) Вывести на экран первые 2 цифры полученного числа
let SuX = String(su);
console.log(SuX.substring(0,2));




//4) Вывести на экран первые 2 цифры полученного числа

