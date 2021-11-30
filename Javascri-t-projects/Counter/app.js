//setting all the variables to get element from the html file
let counter1 = 0;
const decrease = document.getElementsByClassName("decrease")[0];
const reset = document.getElementsByClassName("reset")[0];
const increase = document.getElementsByClassName("increase")[0];
const counter = document.getElementById("value");


decrease.onclick = function(){
    counter.innerHTML--;
    counter1--;
    if (counter1 < 0){
        counter.style.color = 'red';}
    if (counter1 == 0){
        counter.style.color = 'black';
    }
}

reset.onclick = function(){
    counter.innerHTML = 0;
    counter1 = 0;
    if (counter1 == 0){
        counter.style.color = 'black';}
}

increase.onclick = function(){
    counter.innerHTML++;
    counter1++;
    if (counter1 > 0){
        counter.style.color = 'green';
    }
    if (counter1 == 0){
        counter.style.color = 'black';
    }
}


