function myButton(){
   //code here
   //document.write ("Hey there");
   var score = 0;
   var myAnswer1 = document.init.quiz1.value;
   var myAnswer2 = document.init.quiz2.value;
   var myAnswer3 = document.init.quiz3.value;
   var myAnswer4 = document.init.quiz4.value;
   var myAnswer5 = document.init.quiz5.value;
   var result = document.getElementById("close");
   if (myAnswer1==="Null"){score+=20};
   if (myAnswer2===";"){score+=20};
   if (myAnswer3==="%"){score+=20};
   if (myAnswer4==="All the words must start with a capital letter"){score+=20};
   if (myAnswer5==="Addition"){score+=20};
   result.textContent= score;

   if (score==100){
      result.textContent = "Your score is 100%. Excellently passed!";
   }else if (score==80) {
      result.textContent = "Your score is 80%. Excellently passed!";
   }else if (score==60) {
      result.textContent = "Your score is 60%. Fairly passed!";
   }else if (score==40) {
      result.textContent = "Your score is 40%. Poor retake test!";
   }else if (score==20) {
      result.textContent = "Your score is 20%. Poor retake test!";
   }


}

