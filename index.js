var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomNum2 = Math.floor(Math.random()*6) + 1;

var imgName1 = "images/dice" + randomNum1 + ".png";
var imgName2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , imgName1);
document.querySelectorAll("img")[1].setAttribute("src" , imgName2);

if(randomNum1 > randomNum2){
    document.querySelector("h1").textContent = "🚩Player 1 is win!";
}
else if(randomNum1 < randomNum2){
    document.querySelector("h1").textContent = "Player 2 is win!🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!!" ;
}