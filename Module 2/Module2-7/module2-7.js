'use strict';
const task7=document.querySelector('#task7');
let diceList=[];
let dice;
let numOfSide= parseInt(prompt('Enter numbers of side: '))
function diceRoll(numOfSide){
  while (dice!==numOfSide){
      dice= Math.ceil(Math.random()*numOfSide);
      diceList.push(dice);
    }
}

diceRoll(numOfSide);
task7.innerHTML=`${diceList}`;