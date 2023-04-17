let optionOneScreen = document.querySelector(".title");
let optionTwoScreen = document.querySelector(".option-two-screen")
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");
let resultOne = document.querySelector(".result-one");
let resultTwo = document.querySelector(".result-two");
let resultThree = document.querySelector(".result-three");
let resultFour = document.querySelector(".result-four");
let button1 = document.querySelector(".option-one");
let button2 = document.querySelector(".option-two");
let button3 = document.querySelector(".option-three");
let button4 = document.querySelector(".option-four");


button1.onclick = function(){
  optionTwoScreen.style.display ='block';
  button2.style.display = 'none';
}

button3.onclick = function(){
  resultOne.style.display ='block';
  optionOneScreen.style.display = 'none';
  optionTwoScreen.style.display = 'none';
  button4.style.display = 'none';
  resultTwo.style.display = 'none';
}

button4.onclick = function(){
  resultOne.style.display ='none';
  optionOneScreen.style.display = 'none';
  optionTwoScreen.style.display = 'none';
  button3.style.display = 'none';
  resultTwo.style.display = 'block';
}

button2.onclick = function(){
  optionTwoScreen.style.display ='block';
  button1.style.display = 'none';
}

button3.onclick = function(){
  optionTwoScreen.style.display ='none';
  optionOneScreen.style.display = 'none';
  button4.style.display = 'none';
  resultThree.style.display = 'block';
}

button4.onclick = function(){
  optionTwoScreen.style.display ='none';
  optionOneScreen.style.display = 'none';
  button3.style.display = 'none';
  resultFour.style.display = 'block';
}










 
