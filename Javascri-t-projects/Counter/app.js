//setting all the variables to get element from the html file
let counterJS = 0;
const decrease = document.getElementsByClassName("decrease")[0];
const reset = document.getElementsByClassName("reset")[0];
const increase = document.getElementsByClassName("increase")[0];
const counter = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")){
            counterJS--
        }
        else if(styles.contains("increase")){
            counterJS++;
        }
        else{
            counterJS = 0;
        }
        if(counterJS>0){
            counter.style.color = 'green';
        } 
        else if (counterJS<0){
            counter.style.color = "red";
        }
        else{
            counter.style.color = 'black';
        }
    counter.textContent = counterJS;
    })
})

//The code below is easy to understand, uncomment to use it and comment the upper portion starting from the forEach.

/*decrease.onclick = function(){
    counter.innerHTML--;
    counterJS--;
    if (counterJS < 0){
        counter.style.color = 'red';}
    if (counterJS == 0){
        counter.style.color = 'black';
    }
}

reset.onclick = function(){
    counter.innerHTML = 0;
    counterJS = 0;
    if (counterJS == 0){
        counter.style.color = 'black';}
}

increase.onclick = function(){
    counter.innerHTML++;
    counterJS++;
    if (counterJS > 0){
        counter.style.color = 'green';
    }
    if (counterJS == 0){
        counter.style.color = 'black';
    }
}*/


