
$(document).ready(function() {
 
var timeout=10;
var questionInterval=4000;
var correctCnt=0;
var incorrectCnt=0;
var questionIndex=0;
var intervalId;
var optionClicked=false;

var arrQuiz=[{  
                questionText:"Which fortified wine is added to a martini along with gin or vodka?",
                questionOptions:["Sherry","Vermouth","Marsala","Port"], 
                answer:"Vermouth",
                answerText:"<p>Vermouth, an aperitif fortified with extra wine to boost its strength, makes for a mean martini when blended with gin and garnished with an olive.</p>",
                imageSrc:"assets/images/martini.jpg"
              }
              ,{
                questionText:"One of the earliest uses of the term cocktail came in 1806 and described a drink made from which of the following four ingredients?",
                questionOptions:["liquor, triple sec, salt and water","sugar, soda, fruit and whiskey","spirits, sugar, water and bitters","whiskey, vermouth, grenadine, bitters"] ,
                answer:"spirits, sugar, water and bitters",
                answerText:"<p>Early definitions of cocktail called for spirits, sugar, water and bitters -- what we now know as an Old Fashioned.</p>",
                imageSrc:"assets/images/old-fashioned.jpg"}
              ,{
                questionText:"What liquor serves as the base for the classic cosmo?",
                questionOptions:["vodka","tequila","whisky","gin"] ,
                answer:"vodka",
                answerText:"<p>Made famous thanks to frequent appearances on \"Sex and the City,\" the cosmopolitan consists of vodka, triple sec, cranberry and lime.</p>",
                imageSrc:"assets/images/cosmo.jpg"   
              }
              ,{
                questionText:"What drink would you have if you combined gin, lemon juice, sugar and seltzer?",
                questionOptions:["margarita","americano","Tom Collins","gin fizz"],
                answer:"Tom Collins",
                answerText:"The gin-based Tom Collins was created back in 1874, inspired by a popular bar prank of the day. Looking for something slightly different? Swap the gin for whiskey, and you've got yourself a John Collins.",
                imageSrc:"assets/images/tom_collins.jpg"   
              }
              ,{
                questionText:"What beverage also goes by the names red snapper and bucket of blood?",
                questionOptions:["tequila sunrise", "Bloody Mary", "seabreeze","michelada"] ,
                answer:"Bloody Mary",
                answerText:"Crafted from a mix of vodka, tomato juice and various spices, the Bloody Mary once went by the less-than-appetizing title of bucket of blood. Some restaurants still refer to this morning-after favorite as a red snapper as well.",
                imageSrc:"assets/images/bloody_mary.jpg" 
              }
              // ,{
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"" ,
                // imageSrc:"" 
              // }
              // ,={
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"" ,
                // imageSrc:""  
              // }
              // ,{
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"" ,
                // imageSrc:""  
              // }
              // ,{
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"",
                // imageSrc:""   
              // }
              // ,{
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"",
                // imageSrc:""   
              // }
              // ,{
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"",
                // imageSrc:""   
              // }
              // ,{
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"",
                // imageSrc:""   
              // }
              // ,{
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"",
                // imageSrc:""   
              // }
              // ,{
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"",
                // imageSrc:""   
              // }
              // ,{
              //   questionText:"",
              //   questionOptions:["","","",""] ,
              //   answer:"",
              //   answerText:"",
                // imageSrc:""   
              // }   
              // }
              ];

 var totalQuestions=arrQuiz.length;

 var timer = {

  time: timeout,

  reset: function() {
    timer.time = timeout;
  },

  start: function() {
    intervalId = setInterval(timer.count,1000);
  },
  
  stop: function() {
    clearInterval(intervalId);
  },
  
  count: function() {
      if (timer.time === 0) {
          timer.stop();
          timer.reset();
          incorrectCnt++;
          
          if (questionIndex - 1 < totalQuestions) {
            $("#AnswerDiv").html("<span>Incorrect answer. Correct answer is " + arrQuiz[questionIndex-1].answer + ". " + arrQuiz[questionIndex-1].answerText + "</span>");
            // $("#ScoreDiv").html(correctCnt + " out of " + (questionIndex) + " questions correct");
          
          setTimeout(nextQuestion,questionInterval);
          }
          // timer.reset;
        }  
      else {
          timer.time--;
          var result = timer.timeConverter(timer.time);
          $("#Timer").html("<p>Time Remaining: " + result + " seconds</p>");
          }
  },

  timeConverter: function(t) {

    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};



function startGame()  {
   questionIndex = 0;
   $("#QuestionDiv").css("background","skyblue");
   $("#QuestionPicDiv").css("background","skyblue");
   $("#QuestionImg").css("background","skyblue");
   $("#QuestionDiv").css("background","skyblue");
   $(".options").css("display","inline");
   $("#ScoreDiv").text("");
   nextQuestion();
   $("#btnStart").css("display","none");
};


function nextQuestion() {
    console.log(questionIndex);
   if (questionIndex < (totalQuestions)) {
       optionClicked=false;
       var questionNum=questionIndex+1

    // $("#Timer").text("Time remaining: 00:10 seconds");
     $("#Timer").html("<p>Time Remaining: " + timer.timeConverter(timeout) + " seconds</p>");
     $("#QuestionNum").text("Question " + questionNum + ":");
     $("#QuestionText").html(arrQuiz[questionIndex].questionText);
     $("#option1Label").html("&nbsp" + arrQuiz[questionIndex].questionOptions[0]);
     $("#option1").attr("value",arrQuiz[questionIndex].questionOptions[0]);
     $("#option1").attr("checked",false);
     $("#option2Label").html("&nbsp" + arrQuiz[questionIndex].questionOptions[1]);
     $("#option2").attr("value",arrQuiz[questionIndex].questionOptions[1]);
     $("#option2").attr("checked",false);
     $("#option3Label").html("&nbsp" + arrQuiz[questionIndex].questionOptions[2]);
     $("#option3").attr("value",arrQuiz[questionIndex].questionOptions[2]);
     $("#option3").attr("checked",false);
     $("#option4Label").html("&nbsp" + arrQuiz[questionIndex].questionOptions[3]);
     $("#option4").attr("value",arrQuiz[questionIndex].questionOptions[3]);
     $("#option4").attr("checked",false);
     $("#QuestionImg").attr("src",arrQuiz[questionIndex].imageSrc);
      $("#AnswerDiv").html("");
    
      $("#btnReset").css("display","inline");
      questionIndex++;
      timer.reset();
      timer.start();
   }
   else {
     timer.stop();
     timer.reset();
     $("#ScoreDiv").html("<p>Game over!</p> <p>You answered " + correctCnt + " out of " + (questionIndex) + " questions correctly.</p> <p>Click Reset button to start over.</p>");
   }

};

var optionClick=function() {
  if (optionClicked === false) {
  optionClicked = true;  
  timer.stop();
  
  if ($(this).attr("value") === arrQuiz[questionIndex-1].answer) {
     correctCnt++;
     $("#AnswerDiv").html("<span>Correct answer! " + arrQuiz[questionIndex-1].answerText) + "</span>";
    }
  else {
     incorrectCnt++;
     $("#AnswerDiv").html("<span>Incorrect answer. Correct answer is " + arrQuiz[questionIndex-1].answer + ". " + arrQuiz[questionIndex-1].answerText + "</span>");
    }


  
    timer.reset();
   
   if (questionIndex-1 < totalQuestions) {
          setTimeout(nextQuestion,questionInterval);
          }
          // timer.reset
      else {
          $("#ScoreDiv").html("<p>Game over!</p> <p>You answered " + correctCnt + " out of " + (questionIndex) + " questions correctly.</p> <p>Click Reset button to start over.</p>");
          }

}
};
 

$(".options").click(optionClick);
$("#btnStart").click(startGame);
$("#btnReset").on("click", function() {
      timer.stop();
      questionIndex = totalQuestions;
      // timer.reset();
    
      // $("#QuestionForm").trigger("reset");
     
      $("#QuestionPicDiv").css("background","none");
      $("#QuestionImg").css("background","none");
      $("#QuestionImg").attr("src","");
      $(".options").css("display","none");
      $("#btnStart").css("display","inline");
      $("#btnReset").css("display","none");
      $("#QuestionDiv").css("background","none");
      $("#QuestionNum").html("");
      $("#QuestionText").html("");
      $("#option1").html("");
      $("#option2").html("");
      $("#option3").html("");
      $("#option4").html("");
        $("#ScoreDiv").html("");
      $("#AnswerDiv").html("");
      $("#Timer").text("");
 });

});





