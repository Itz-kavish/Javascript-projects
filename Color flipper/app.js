const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//var randomNumber = Math.floor(Math.random()*colors.length)

function generateRandomNum(){
    return Math.floor(Math.random()*colors.length);
}

document.getElementById("btn").addEventListener("click", function(){
    let randomNumber = generateRandomNum();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementsByClassName("color")[0].style.color = colors[randomNumber];
    document.getElementsByClassName("color")[0].innerHTML = colors[randomNumber];
})
