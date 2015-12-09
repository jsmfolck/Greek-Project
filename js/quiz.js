   var question;
      var pos;
      var are;
      var dio;
      var aph;
      var dem;
      var zeu;
   
      question = 1;
      pos = 0;
      are = 0;
      dio = 0;
      aph = 0;
      dem = 0;
      zeu = 0;
      result = "";

      var choice;
      var result;

   function quiz()
   {
      
      //specify number of questions
      for (question = 1; question <= 7; question++) {
         //cycle through each question and mark what the choice was
         var q = document.forms['quiz'].elements['q'+question];
            for (var i = 0; i < q.length; i++) {
               if (q[i].checked) {
                  choice = q[i].value;
               }
            }
         }   
               //each value is tallied when its chosen
            
               if (choice == "pos") {
                  pos++;
               }
               if (choice == "are") {
                  are++;
               }
               if (choice == "dio") {
                  dio++;
               }
               if (choice == "aph") {
                  aph++;
               }
               if (choice == "dem") {
                  dem++;
               }
               if (choice == "zeu") {
                  zeu++;
               }
         
         //determines the result based on highest number of tallies

      if (pos >= are && pos >= dio && pos >= aph && pos >= dem && pos >= zeu &&pos > 0) {
         // pos is the highest
         result = "Poseidon";
      }
      if (are > pos && are >= dio && are >= aph && are>= dem && are>= zeu && are > 0) {
         // are is the highest
         result = "Ares";
      }
      if (dio >= pos && dio >= are && dio >= aph && dio >= dem && dio >= zeu &&dio > 0) {
         // dio is the highest
         result = "Dionysus";
      }
      if (aph >= pos && aph >= are && aph >= dio && aph >= dem && aph >= zeu && aph > 0) {
         // aph is the highest
         result = "Aphrodite";
      }
       if (dem >= pos && dem >= are && dem >= dio && dem >= aph && dem >= zeu && dem > 0) {
         // dem is the highest
         result = "Demeter";
      }
       if (zeu >= pos && zeu >= are && zeu >= dio && zeu >= aph && zeu >= dem && zeu > 0) {
         // zeu is the highest
         result = "Zeus";
      }

      


 document.getElementById("tallies").innerHTML = " POSEIDON:" + pos + " ARES:" + are + " DIONYSUS:" + dio + " APHRODITE:" + aph + " DEMETER:" + dem + " ZEUS:" + zeu;

   };  



     


$(function(){

   $('#q1,#q2,#q3,#q4,#q5,#q6,#q7,.next,.quiz-nav,.answers').hide();
      // $("input[value='pos']+label").hide();
      // $("input[value='are']+label").hide();
      // $("input[value='dio']+label").hide();
      // $("input[value='aph']+label").hide();
      // $("input[value='dem']+label").hide();
      // $("input[value='zeu']+label").hide();

  }) 

 // function showAnswers() {
 //         $("input[value='pos']+label").fadeIn(500);
 //         $("input[value='are']+label").fadeIn(800);
 //         $("input[value='dio']+label").fadeIn(1100);
 //         $("input[value='aph']+label").fadeIn(1400);
 //         $("input[value='dem']+label").fadeIn(1700);
 //         $("input[value='zeu']+label").fadeIn(2000);

 //      };

  $(document).ready(function(){ 
  // $(this).showAnswers();
   $('#q1,.quiz-nav,.answers').fadeIn(800);
         // $("input[value='pos']+label").fadeIn(500);
         // $("input[value='are']+label").fadeIn(800);
         // $("input[value='dio']+label").fadeIn(1100);
         // $("input[value='aph']+label").fadeIn(1400);
         // $("input[value='dem']+label").fadeIn(1700);
         // $("input[value='zeu']+label").fadeIn(2000);





   $('.answers>input').on("click", function(){
      $('.next').fadeIn().on("click", function(){

      var id = $(this).parent().parent().hide()
         .next().fadeIn(1000).index();

         $('.next').hide();


         $(".quiz-nav li").eq(id).addClass("quiz-nav-selected");

      })


   })

 



    $('#reset').on("click", function(){
      pos = 0;
      are = 0;
      dio = 0;
      aph = 0;
      dem = 0;
      zeu = 0;
      location.reload();
      
console.log("reset working");
console.log(pos);

      })

    $('#submit').on("click", function(){


      //show the result and the number of tallies for each value
         // document.getElementById("result").innerHTML = "You are " + result;
         //open page of the result
           window.location = result + ".html";

    })

});

