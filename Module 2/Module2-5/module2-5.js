'use strict';
const task5=document.querySelector('#task5');
let numberList=[];
while(true){
  let number=parseFloat(prompt("Enter a number until the system stops:"));
  if(numberList.includes(number)){
    alert(`The number ${number} is duplicated. Stopping the program.`);
     break;
  }
  numberList.push(number);

}
numberList.sort((a,b) => a - b)
task5.innerHTML=`List of numbers: ${numberList}`;



