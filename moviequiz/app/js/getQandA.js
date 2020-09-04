/*Copyright 2020 Theodore Odeluga

Permission is hereby granted, free of charge, to any person 
obtaining a copy of this software and associated documentation files 
(the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, 
merge, publish, distribute, sublicense, and/or sell copies 
of the Software, and to permit persons to whom the Software 
is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice 
shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE 
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

let questionpanel;
let randomoption;
let randomanswer;
let opt1view;
let opt2view;
let opt3view;
let nextq = -1;
let score = 0;
let chosenoption = 0;
let correct = 0;
let endofquiz = 18;
let mymessage;
let potentialanswer1;
let potentialanswer2;
let potentialanswer3;
let a = -1; 
 
 
 //Generate questions and answers
 
 function QuestionsAndAnswers(){
	 
	    nextq++;
	    a++;
		correct = 0;
		
		questionpanel = document.getElementById("question");
		questionpanel.innerHTML = QuestionList[nextq].question.qtext;
		//questionpanel.innerHTML = QuestionList[q].question.qtext;

		randomoption = Math.ceil(Math.random()*2);
		randomanswer = Math.ceil(Math.random()*2);
		
		opt1view = document.getElementById("option1");
		opt2view = document.getElementById("option2");
		opt3view = document.getElementById("option3");	

		opt1view.innerHTML = ' ' + optionone[randomoption] + ' '; 
		opt2view.innerHTML = ' ' + optiontwo[randomoption] + ' ';
		opt3view.innerHTML = ' ' + optionthree[randomoption] + ' ';
		
		switch(randomanswer){
			
			case 0:
			     opt1view.innerHTML = AnswerList[a].answer.atext;
				 correct = 1;
			break;
			
			case 1:
			     opt2view.innerHTML = AnswerList[a].answer.atext;
                 correct = 2;				 
			break;
			
			case 2:
			     opt3view.innerHTML = AnswerList[a].answer.atext;
                 correct = 3;				 
			break;
		
		}
		if(nextq > endofquiz){
		   FinalScore();
		}
		
	}
	
	
    //Inform the user of a correct or incorrect answer	
	
	function NotificationMessage(){ 
	   $(function(){
		 $("#message").fadeIn();
		});
	  $(function(){
		$("#message").fadeOut(1500); 
	   });
	  }
	
	
	function checkAnswer(){
	   
	   //answerchosen++;
	   
	   if(chosenoption == correct){	
		 score++;   
		 mymessage = document.getElementById("message");
		 mymessage.innerHTML = "Correct!"; 
		 NotificationMessage();
		 }
	  
	  if(chosenoption != correct){
		 mymessage = document.getElementById("message");
		 mymessage.innerHTML = "Sorry, that is incorrect."; 
		 NotificationMessage();
		 }
	
      //Penalise player for double option selection
	  
	  /*if(answerchosen > 1){
			score = score-=1;
		}*/
	}
	
	//Get the next set of questions and answers
	
	$(document).ready(function(){
       $("#next").on("click",function(event){
	     NextMultipleChoice();
		 QuestionsAndAnswers();
		  });
      });

   
   //Select a multiple choice option
   
   $(document).ready(function(){
		$("#option1").on("click",function(event){
			chosenoption = 1;
			checkAnswer();
			  });
		  });
	$(document).ready(function(){
		$("#option2").on("click",function(event){
			chosenoption = 2;
			checkAnswer();
			 });
		  });
	$(document).ready(function(){
		$("#option3").on("click",function(event){
			chosenoption = 3;
			checkAnswer();
			 });
		  });

function FinalScore(){
	if(nextq > endofquiz){
	questionpanel.innerHTML = 'Your final score is: ' + ' ' + score + ' ';
	opt1view.innerHTML = 'End of quiz';
	opt2view.innerHTML = 'End of quiz';
    opt3view.innerHTML = 'End of quiz'; 	
	}
}
