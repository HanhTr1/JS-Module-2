'use strict';
const task8=document.querySelector('#task8');


function concat(stringArray){
  let result='';
for(let i=0;i<stringArray.length;i++){
   result +=stringArray[i];
}
return result;
}
const names = ['Johnny', 'DeeDee', 'Joey', 'Marky'];

task8.innerHTML = `${concat(names)}`;