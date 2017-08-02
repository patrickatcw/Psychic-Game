    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];  //letter choices

    var wins = 0;
    var loses = 0;
    var guessesRemaining = 10;
    var guessessoFar = [];                                           
    var showGuess = document.getElementById("guess");

    
    /*var showguesRemain = document.getElementById("guesremain");
    var showguessoFar = document.getElementById("guessofar"); */    //prevented letter populating in these 2 area when entered letter, saved through git bash

    console.log("linked to html showing up in console");    //checks html linking to javascript

    document.onkeyup = function(event) {      
    showGuess.textContent = event.key;                      //variable to capute user's guess     
    showguesRemain.textContent = event.key; 
    showguessoFar.textContent = event.key;

    showGuess.push(guess);                                  //This is suppose to capture letters entered by the user   
    computerChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    showGuess.textContent=guess;
    showguesRemain.textContent=guesrmain;
    showguessoFar.textContent=guessofar;


    //conditional statements
    if (userGuess === computerChoices) 
     {
        wins++;
    }                                       
       
     else (userGuess != computerChoices)
      {
        loses++;
    }
      
     };
   

          
 
    

    
