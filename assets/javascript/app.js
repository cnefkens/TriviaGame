
$(document).ready(function() {
 
var timeout=10;
var questionInterval=4000;
var correctCnt=0;
var incorrectCnt=0;
var questionIndex=0;
var intervalId;

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
            $("#AnswerDiv").html("<span>Incorrect answer. </span>" + arrQuiz[questionIndex-1].answerText);
            $("#ScoreDiv").html(correctCnt + " out of " + (questionIndex) + " questions correct");
          
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
    $("#ScoreDiv").text("0 out of 0 questions correct");
   nextQuestion();
   $("#btnStart").css("display","none");
};


function nextQuestion() {
    console.log(questionIndex);
   if (questionIndex < (totalQuestions)) {

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
      
      timer.reset();
      timer.start();
      questionIndex++;
   }
   else {
     timer.stop();
   }

};

$("#btnStart").click(startGame);
$("#btnReset").on("click", function() {
      location.reload();
   });

});





