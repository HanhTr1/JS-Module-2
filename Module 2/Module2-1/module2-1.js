'use strict';
const task1=document.querySelector('#task1');
let array1=[];

for (let i = 0; i < 5; i++) {
  console.log('Enter 5 numbers!');
  let num = parseFloat(prompt(`Enter number ${i + 1}:`));
  array1.push(num);

}
 let reversed_order ='Reversed order:';
for (let i = array1.length -1; i >= 0; i--) {

  reversed_order += array1[i];

}
  task1.innerHTML=reversed_order;
