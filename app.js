var readlineSync = require("readline-sync");

var userName = readlineSync.question("Helllo! What's your name? ");

//console.log("Namaste!");
console.log("Namaste! " + userName +" Lets see how much you know about F.R.I.E.N.D.S? ");

var score = 0;

function knowMe(question,answer){
  
  var userAnswer = readlineSync.question(question);
  var userAnswerLowerCase = userAnswer.toLowerCase();

  if( answer === userAnswerLowerCase){
    console.log("Bravoo!!!!! Right Answer!!");
    score+=1;
  }
  else {
    console.log("Wrong Answer!!");
    console.log("Correct answer is: "+answer);
    //console.log("NOTE: Remember the correct answer,i might ask you someday again!");
  }

  console.log("-----------------------");

}

var questionList = [ {q: "How many times has Ross been married? ",
ans: "3" },{q: "How many sisters does Joey have? ", ans: "7"},
{q: "Who was the last friend to find out about Monica and Chandler ? ",ans: "ross"}, {q: "Where does Chandler tell Janice he is moving? " ,ans: "yemen"} ,{q: "What was the name of Joey's stuffed penguin? ", ans: "huggsy"}]

for(var i=0; i<questionList.length; i++){
  knowMe(questionList[i].q,questionList[i].ans);
}

console.log(userName +" Your score out of 5 is: "+score);
console.log("share me the screenshot of your score now!!!!!!")
