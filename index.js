var readlineSync = require('readline-sync');

console.log("Please tell what is your good name: ")

var userIp = readlineSync.question()

var score = 0

function greetings(userIp){
  console.log("Hi "+userIp+"\n"+"Welcome to Big Bang Theory quiz")
}

function qna(question) {
  for (var i = 0; i < question.length; i++) {
    console.log(question[i].question)
    var userAnswer = readlineSync.question();
    if (question[i].answer === userAnswer.toUpperCase()) {
      console.log("your answer " + userAnswer + " is correct")
      score = score + 1
    }
    else {
      console.log("your answer is incorrect!!!")
    }
    console.log("Your Score is ", score,"\n")
    console.log("----------------")
  }
}


var questions = [{
  question: "How many times does Sheldon have to knock on a door and say a person's name before he'll go in? ",
  answer: "THREE"
}, {
  question: "Sheldon hosts a YouTube show during the series. What is it called? ",
  answer: "SHELDON COOPER PRESENTS: FUN WITH FLAGS"
}, {
  question: "Where do Sheldon, Amy, Raj, Howard, and Leonard work? ",
  answer: "CALTECH"
}, {
  question: "Who does Leonard marry on the show? ",
  answer: "PENNY"
}, {
  question: "Where did Howard get his engineering degree? ",
  answer: "MIT"
}]

greetings(userIp)
qna(questions)


//Mistakes I did:
// 1) questions I wrote seperately than I club them in one single array