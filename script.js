let week = ['воскресенье ', 'понедельник ', 'вторник ', 'среда ', 'четверг ', 'пятница ', 'суббота '];

let d = new Date();
let n = d.getDay();


for(let i=0; i<7; i++){
  if (i !==n) {
     let newP = document.createElement("p");
        newP.innerHTML = "<i>"+week[i]+"</i>";
        document.body.append(newP);
  } else {
    let newP = document.createElement("p");
        newP.innerHTML = "<b>"+week[i]+"</b>";
        document.body.append(newP);
  }
};