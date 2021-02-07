'use strict'
//part 1
let arr=[];
arr[0]='156489';
arr[1]='556489';
arr[2]='756489';
arr[3]='256489';
arr[4]='200489';
arr[5]='456489';
arr[6]='356489';

for (let i=0; i<arr.length; i++) {
    if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
        console.log(arr[i])
    };
}

//part 2
exit: for (let i = 1; i <=100; i++) { 
           let x=1
                for (let j=1; j < i; j++) { 
                    if (i % j == 0) {
                    x=x+1;
                    }

     
                 }
                if (x>2) continue exit;
                console.log(i + ' Делители этого числа: 1 и '+i); 
  
      }
