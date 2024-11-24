'use strict';
const task4=document.querySelector('#task4');
let num_list=[];
let number;
while (number!==0){
  number= +prompt('Enter a number');
  num_list.push(number);
}
for (let i = 0; i < num_list.length; i++) {
  num_list.sort((a,b) => a - b);
}
task4.innerHTML=`${num_list.reverse()}`;