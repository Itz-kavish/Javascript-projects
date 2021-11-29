const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const button = document.getElementById("btn");
const color = document.getElementsByClassName("color")[0];

function generateRandomNum(){
    return Math.floor(Math.random()*hex.length);
}
//yoooooo
document.addEventListener('click', function(){
    let hexColor = '#';
    for(i=0;i<6;i++){
        hexColor += hex[generateRandomNum()];
    }
    console.log(hexColor);
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
})