'use strict';
const task3=document.querySelector('#task3')
let dog_list=[];
for (let i=0;i<7;i++){
  name=prompt('Enter name of six dogs: ');
  dog_list.push(name);
}
dog_list.sort();
task3.innerHTML=dog_list.toReversed();