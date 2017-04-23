
$(document).ready(function() {
 
var timeout=10;
var questionInterval=4000;
var correctCnt=0;
var incorrectCnt=0;
var questionIndex=0;
var intervalId;
var optionClicked=false;
var boolReset=false;

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
              ,{
                questionText:"What South Pacific inspired cocktail's ingredients include lime juice, orange curacao, almond syrup, and rum?",
                questionOptions:["mai tai", "pina colada", "rum runner", "bahama mama"] ,
                answer:"mai tai",
                answerText:"The mai tai -- Tahitian for \"the very best\" -- consists of rum, lime, orange curacao and almond syrup." ,
                imageSrc:"assets/images/mai_tai.jpg" 
              }
              ,{
                questionText:"What sweet red syrup would you pair with tequila to make a tequila sunrise?",
                questionOptions:["orgeat", "grenadine", "Campari", "Sambuca"] ,
                answer:"grenadine",
                answerText:"Layers of grenadine, tequila and orange juice team up to create a tequila sunrise." ,
                imageSrc:"assets/images/tequila_sunrise.jpg"  
              }
              ,{
                questionText:"What liquor can be found in a mojito?",
                questionOptions:["gin","vodka","rum","whiskey"] ,
                answer:"rum",
                answerText:"The minty-fresh mojito is made using rum, lime, sugar, mint and soda water." ,
                imageSrc:"assets/images/mojito.jpg"  
              }
              ,{
                questionText:"Which classic cocktail is made from cognac, triple sec and lime?",
                questionOptions:["americano","old fashioned","manhattan","sidecar"] ,
                answer:"sidecar",
                answerText:"The sidecar, a Prohibition-era beverage, contains cognac, triple sec and lime.",
                imageSrc:"assets/images/sidecar.jpeg"   
              }
              ,{
                questionText:"What’s the difference between a white and black Russian?",
                questionOptions:["use of heavy cream","addition of freshly brewed coffee","serving temperature","molasses"] ,
                answer:"use of heavy cream",
                answerText:"The white Russian, a drink made famous in the 1998 film \"The Big Lebowski,\" consists of vodka, coffee liqueur and heavy cream. Want to make it a black Russian instead? Simply leave out the cream.",
                imageSrc:"assets/images/white_russian.jpg"   
              }
              ,{
                questionText:"Which of the following liquors is NOT traditionally found in a Long Island iced tea",
                questionOptions:["rum","vodka","gin","whiskey"],
                answer:"whiskey",
                answerText:"The alcohol-heavy Long Island iced tea contains vodka, gin, rum, tequila and triple sec, with lemon juice, simple syrup and a dash of cola added to complement all that alcohol.",
                imageSrc:"assets/images/long_island_iced_tea.jpg"   
              }
            
              ,{
                questionText:"Which of the following drinks shares the name of a beach and an iron mine near Santiago, Cuba?",
                questionOptions:["Cuba Libre","Daiquiri","Playa Azul","Oro Blanco"] ,
                answer:"Daiquiri",
                answerText:"The Daiquiri was supposedly invented by American mining engineers in Santiago, Cuba around 1905. A Daiquiri contains white rum, lime juice, Gomme syrup and cracked or crushed ice. Variations of Daiquiri include the Strawberry and Banana Daiquiri.",
                imageSrc:"assets/images/daiquiri.jpg"   
              }
                ,{
                questionText:"What ingredient is added to gin, simple syrup, lemon juice, and a lemon twist to make a French 75?",
                questionOptions:["chardonnary","champagne","cassis","lillet"] ,
                answer:"champagne",
                answerText:"The recipe for the French 75 first appeared in the 1919 edition of Harry MacElhone’s 'Harry’s ABC of Mixing Cocktails'. As the story goes, a bartender took the Tom Collins recipe and substituted champagne for soda.",
                imageSrc:"assets/images/french75.jpg"   
              }  
              ,{
                questionText:"What drink was originally known as the milano-torino when it was created around the time of Prohibition?",
                questionOptions:["Manhattan", "mai tai", "americano","aperol spritz"] ,
                answer:"americano",
                answerText:"The Campari used in the americano comes from Milan, while the sweet vermouth hails from Torino, Italy, giving the americano its original moniker.",
                imageSrc:"assets/images/americano.jpg"   
              }
               ,{
                questionText:"What liquor traditionally serves as the base in a Manhattan?",
                questionOptions:["rum","vodka","whiskey","scotch"] ,
                answer:"whiskey",
                answerText:"A classic Manhattan contains bourbon whiskey, vermouth and bitters, with a cherry on top for luck.",
                imageSrc:"assets/images/manhattan.jpg"   
              }
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
    if (boolReset===false) {  
      if (timer.time === 0) {
          timer.stop();
          timer.reset();
          incorrectCnt++;
          
          if (questionIndex - 1 < totalQuestions) {
            $("#AnswerDiv").html("<b>Incorrect answer.</b><p>Correct answer is " + arrQuiz[questionIndex-1].answer + ". " + arrQuiz[questionIndex-1].answerText + "</p>");
            // $("#ScoreDiv").html(correctCnt + " out of " + (questionIndex) + " questions correct");
          
          setTimeout(nextQuestion,questionInterval);
          }
        }
          // timer.reset;  
      else { 
          timer.time--;
          var result = timer.timeConverter(timer.time);
          $("#Timer").html("<p>Time Remaining: " + result + " seconds</p>");
          }
  }
  else {
    timer.stop();
    timer.reset();
  }
  }
,

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
  timer.stop();
  timer.reset();
  boolReset=false;
  correctCnt = 0;
  incorrectCnt = 0;
  questionIndex = 0;
  optionClicked = false;
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
    // console.log(questionIndex);
  if (boolReset === false) {  
   if (questionIndex < (totalQuestions)) {
       optionClicked=false;
       timer.reset();
       var questionNum=questionIndex+1;

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
      timer.start();
   }

   else {
     optionClicked = false;
     timer.stop();
     timer.reset();
     $("#ScoreDiv").html("<p><b>Game over!</b></p><p>You answered " + correctCnt + " out of " + (questionIndex) + " questions correctly. Click Reset button to start over.</p>");
   }
 }
 else {
     // alert ("reset next question");
     correctCnt=0;
      incorrectCnt=0;
      questionIndex=0;
      optionClicked=false;
      timer.stop();
     timer.reset();
   }  
    // optionClicked=false;
    // boolReset=false;

};

var optionClick=function() {
  if (optionClicked === false) {
    optionClicked = true;
    timer.stop();
 
  if ($(this).attr("value") === arrQuiz[questionIndex-1].answer) {
     correctCnt++;
     $("#AnswerDiv").html("<b>Correct answer!</b><p> " + arrQuiz[questionIndex-1].answerText) + "</p>";
    }
  else {
     incorrectCnt++;
     $("#AnswerDiv").html("<b>Incorrect answer.</b><p>Correct answer is " + arrQuiz[questionIndex-1].answer + ". " + arrQuiz[questionIndex-1].answerText + "</p>");
    }


  
    timer.reset();
   
   if (questionIndex-1 < totalQuestions && boolReset === false) {
          setTimeout(nextQuestion,questionInterval);
          }
          // timer.reset
      else {
            boolReset=true;
            timer.stop();
            timer.reset();
          $("#ScoreDiv").html("<p><b>Game over!</b></p?<p>You answered " + correctCnt + " out of " + (questionIndex) + " questions correctly. Click Reset button to start over.</p>");
          }

}
};
 

$(".options").click(optionClick);
$("#btnStart").click(startGame);
$("#btnReset").on("click", function() {
      boolReset=true;
      correctCnt=0;
      incorrectCnt=0;
      questionIndex=0;
      timer.stop();
      timer.time=0;
      optionClicked=false;
      
      

      // $("#QuestionForm").trigger("reset");
     
      $("#QuestionPicDiv").css("background","none");
      $("#QuestionImg").css("background","none");
      $("#QuestionImg").attr("src","");
      $("#QuestionDiv").css("background","none");
      $("#QuestionNum").html("");
      $("#QuestionText").html("");
      $("#option1").text("");
      $("#option2").text("");
      $("#option3").text("");
      $("#option4").text("");
      $("#option1Label").text("");
      $("#option2Label").text("");
      $("#option3Label").text("");
      $("#option4Label").text("");
      $(".options").css("display","none");
        $("#ScoreDiv").html("");
      $("#AnswerDiv").html("");
      $("#Timer").text("");
       $("#btnStart").css("display","inline");
       timer.reset();
      $("#btnReset").css("display","none");
      
 });

});





