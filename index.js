                        // Player 1

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomNumberImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomNumberImageSource);

// if(randomNumber1 === 1){
//   document.querySelector("img.img1").setAttribute("src","images/dice1.png");
// }
//
// else if(randomNumber1 === 2){
//   document.querySelector("img.img1").setAttribute("src","images/dice2.png");
// }
//
// else if(randomNumber1 === 3){
//   document.querySelector("img.img1").setAttribute("src","images/dice3.png");
// }
//
// else if(randomNumber1 === 4){
//   document.querySelector("img.img1").setAttribute("src","images/dice4.png");
// }
//
// else if(randomNumber1 === 5){
//   document.querySelector("img.img1").setAttribute("src","images/dice5.png");
// }
//
// else{
//   document.querySelector("img.img1").setAttribute("src","images/dice6.png");
// }


                      // Player 2


var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomNumberImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomNumberImageSource2);

// if(randomNumber2 === 1){
//   document.querySelector("img.img2").setAttribute("src","images/dice1.png");
// }
//
// else if(randomNumber2 === 2){
//   document.querySelector("img.img2").setAttribute("src","images/dice2.png");
// }
//
// else if(randomNumber2 === 3){
//   document.querySelector("img.img2").setAttribute("src","images/dice3.png");
// }
//
// else if(randomNumber2 === 4){
//   document.querySelector("img.img2").setAttribute("src","images/dice4.png");
// }
//
// else if(randomNumber2 === 5){
//   document.querySelector("img.img2").setAttribute("src","images/dice5.png");
// }
//
// else{
//   document.querySelector("img.img2").setAttribute("src","images/dice6.png");
// }

                        // Heading Declaration Section

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else {
  document.querySelector("h1").innerHTML = "Draw";
}
