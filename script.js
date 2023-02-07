/* Declare variables below to save the different sections (divs) of your story*/
let option1screen = document.querySelector(".option-one-screen")
let button1 = document.querySelector(".option-one")
let option2screen = document.querySelector(".option-two-screen")
let button2 = document.querySelector(".option-two")

let op = document.querySelector(".story-opening")
let option3screen = document.querySelector(".option-three-screen")
let button3 = document.querySelector(".option-three")
let button4 = document.querySelector(".option-four")

let option4screen = document.querySelector(".option-four-screen")
let option5screen = document.querySelector(".option-five-screen")
let button5 = document.querySelector(".option-five")
let button6 = document.querySelector(".option-six")
let button = document.querySelector(".buttons")
let option6screen = document.querySelector(".option-six-screen")
let button7 = document.querySelector(".option-seven")
let button8 = document.querySelector(".option-eight")

let option7screen = document.querySelector(".option-seven-screen")
let option8screen = document.querySelector(".option-eight-screen")
let jump = document.querySelector(".jump")
let title = document.querySelector(".title")
// Chris, double check your function on line 11. Compare it to the slides we used in class. -Michael
button1.onclick = function() {
  option1screen.style.display = "block";
  op.style.display = "none";
  button.style.display = "none"
}

button2.onclick = function() {
  option2screen.style.display = "block";
  op.style.display = "none";
  button.style.display = "none"
}

button3.onclick = function() {
  option3screen.style.display = "block";
  option1screen.style.display = "none";

}

button5.onclick = function() {
  option4screen.style.display = "block";
  option2screen.style.display = "none";
  button.style.display = "none"
}

button4.onclick = function() {
  option5screen.style.display = "block";
  option1screen.style.display = "none";

}

button6.onclick = function() {
  option6screen.style.display = "block";
  option2screen.style.display = "none";

}

button7.onclick = function() {
  option8screen.style.display = "block";
  option3screen.style.display = "none";
  button.style.display = "none"
}

button8.onclick = function() {
  option7screen.style.display = "block";
  option4screen.style.display = "none";
  button.style.display = "none"
}


setTimeout(() => {
  jump.style.display = "block";
  op.style.display = "none"
  button.style.display = "none"
title.style.display = "none"
  option1screen.style.display = "none"
  option2screen.style.display = "none"
  option3screen.style.display = "none"
  option4screen.style.display = "none"
  option5screen.style.display = "none"
  option6screen.style.display = "none"
  option7screen.style.display = "none"
  option8screen.style.display = "none"
}, 1000000)
  ;

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
