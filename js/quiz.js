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
         }
         //determines the result based on highest number of tallies
      if (pos >= are && pos >= dio && pos >= aph && pos >= dem && pos >= zeu &&pos > 0) {
         // pos is the highest
         result = "POSEIDON";
      }
      if (are > pos && are >= dio && are >= aph && are>= dem && are>= zeu && are > 0) {
         // are is the highest
         result = "ARES";
      }
      if (dio >= pos && dio >= are && dio >= aph && dio >= dem && dio >= zeu &&dio > 0) {
         // dio is the highest
         result = "DIONYSOS";
      }
      if (aph >= pos && aph >= are && aph >= dio && aph >= dem && aph >= zeu && aph > 0) {
         // aph is the highest
         result = "APHRODITE";
      }
       if (dem >= pos && dem >= are && dem >= dio && dem >= aph && dem >= zeu && dem > 0) {
         // dem is the highest
         result = "DEMETER";
      }
       if (zeu >= pos && zeu >= are && zeu >= dio && zeu >= aph && zeu >= dem && zeu > 0) {
         // zeu is the highest
         result = "ZEUS";
      }


      //show the result and the number of tallies for each value
         document.getElementById("result").innerHTML = "You are " + result  + " POSEIDON:" + pos + " ARES:" + are + " DIONYSOS:" + dio + " APHRODITE:" + aph + " DEMETER:" + dem + " ZEUS:" + zeu;
         //open page of the result
           //window.location = result + ".htm";


   function reset(){
         a = 0;
         b = 0;
         c = 0;
         d = 0;
console.log("reset working");

      }
   };  




