'use strict';
const task6=document.querySelector('#task6');
  const diceList=[];
  let dice;
function diceRoll(){
  while (dice!==6){
      dice= Math.ceil(Math.random()*6);
      diceList.push(dice);
    }

}
diceRoll();
task6.innerHTML=`${diceList}`;
