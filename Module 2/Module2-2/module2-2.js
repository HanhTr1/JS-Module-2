'use strict';
const task2= document.querySelector('#task2');
let num_participant=+prompt('Enter number of participants: ');
let name_list=[];
for (let i=0;i<num_participant; i++) {
  let names=prompt('Enter name of participants: ');
  name_list.push(names);
}
name_list=name_list.sort();
const ol = document.createElement("ol");
ol.textContent=name;
task2.innerHTML=name_list;
