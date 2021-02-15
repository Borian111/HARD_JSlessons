let week = ['воскресенье ', 'понедельник ', 'вторник ', 'среда ', 'четверг ', 'пятница ', 'суббота '];

let d = new Date();
let n = d.getDay();


for(let i=0; i<7; i++){
  if ((i===n && i===0)||( i===n && i===6)) {
     let newP = document.createElement("p");
        newP.innerHTML = "<b><i>"+week[i]+"</i></b>";
        document.body.append(newP);
 } else if(i===0 || i===6){
    let newP = document.createElement("p");
        newP.innerHTML = "<i>"+week[i]+"</i>";
        document.body.append(newP);
  } else if(i===n){
    let newP = document.createElement("p");
        newP.innerHTML = "<b>"+week[i]+"</b>";
        document.body.append(newP);
  } else if (0<i<6){
    let newP = document.createElement("p");
        newP.innerHTML = week[i];
        document.body.append(newP);
  }
}