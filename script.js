//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var Career1Score = 0;
var Career2Score = 0;
var Career3Score = 0;
var Career4Score = 0;







//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2= document.getElementById("q1a2");
var q1a3=document.getElementById("q1a3");
var q1a4=document.getElementById("q1a4");
var q2a1=document.getElementById("q2a1");
var q2a2=document.getElementById("q2a2");
var q2a3=document.getElementById("q2a3");
var q2a4=document.getElementById("q2a4");
var q3a1=document.getElementById("q3a1");
var q3a2=document.getElementById("q3a2");
var q3a3=document.getElementById("q3a3");
var q3a4=document.getElementById("q3a4");
var q4a1=document.getElementById("q4a1");
var q4a2=document.getElementById("q4a2");
var q4a3=document.getElementById("q4a3");
var q4a4=document.getElementById("q4a4");
var result =document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", director);
q1a2.addEventListener("click", thinker);
q1a3.addEventListener("click", the_socializlier);
q1a4.addEventListener("click", the_supporter);
q2a1.addEventListener("click", director);
q2a2.addEventListener("click", the_socializlier);
q2a3.addEventListener("click", the_supporter);
q2a4.addEventListener("click", thinker);
q3a1.addEventListener("click", the_supporter);
q3a2.addEventListener("click", director);
q3a3.addEventListener("click", thinker);
q3a4.addEventListener("click", the_socializlier);
q4a1.addEventListener("click", the_socializlier);
q4a2.addEventListener("click", director);
q4a3.addEventListener("click", the_supporter);
q4a4.addEventListener("click", thinker);








//#TODO: Define quiz functions here
function director(){
  Career1Score += 1;
  questionCount += 1;
  if (questionCount >= 4){
    updateResult();
  }
}
function thinker(){
  Career2Score += 1;
  questionCount += 1;
if (questionCount >= 4){
  updateResult();
}  
}
function the_socializlier(){
  Career3Score += 1;
  questionCount += 1;
  if (questionCount >= 4){
    updateResult();
  }
}
function the_supporter(){
Career4Score += 1;
  questionCount += 1;
  if (questionCount >= 4){
    updateResult();
  }
}
function updateResult(){

if (Career1Score >= 4) {
  result.innerHTML="";
}
else if (Career2Score >=4){
  result.innerHTML="You love your friends and family, a really optimistic person who loves a lot of sugar";
  }
else if (Career3Score >= 4){
  result.innerHTML="You love to eat food! and you have really food choices you like spicy food better"
}
  else if (Career4Score >= 4){
    result.innerHTML= "You are an awesome person that cares for everyone! you love both spicy and sugar equally";
  } 
  else {
    result.innerHTML="You aren't really a morning person :( ";
  }
}
