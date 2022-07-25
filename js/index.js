

// let randomNumber1 = Math.floor(Math.random()*6) ;  //Range will we from 0 to 5
let randomNumber1 = Math.floor(Math.random()*6) + 1;  //Range will we from 1 to 6
let randomDiceImg1 = "dice" + randomNumber1 + ".png";  //dice-1 to dice-6
let randomDiceSource1 = "images/" + randomDiceImg1;  //images/dice1.png - images/dice6.png

let leftImage = document.querySelectorAll("img")[0];
leftImage.setAttribute("src", randomDiceSource1);


// ****************************************************************************************************************

let randomNumber2 = (Math.floor(Math.random()*6) + 1)
let randomDiceSource2 = "images/dice"+ randomNumber2 + ".png";

let rightImage = document.querySelectorAll("img")[1];
rightImage.setAttribute("src", randomDiceSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}

function refreshPage(){
    window.location.reload();
} 