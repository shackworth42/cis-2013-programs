window.onload = function () {
var $ = function(id) { return document.getElementById(id); };
$("start").onclick = game;//game start  
};


var game = function() {
    
    var intRandom, intCount, intGuess, intGuesses, intScore, intMin, intMax, intSentinel = 999;//set sentinel value
    
    var $ = function(id) { return document.getElementById(id); };
    var intMin = parseInt($("min").value);//declare locally
    var intMax = parseInt($("max").value);

//while loop for sentinel
    while (intMin != intSentinel) {
    intRandom = parseInt(Math.floor(Math.random() * (intMax - intMin + 1)) + intMin);//pray the random number generator works
    
    intCount = 0;
    
    intGuess = prompt("Your score is determined by a function of your range and your attempts. \n Please enter your guess between " + intMin + " and " + intMax + ": ");
    
    if (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) {
        alert("You must enter a number between " + intMin + " and " + intMax);
    }
    
    while (intGuess != intRandom) {
        if (intGuess < intRandom) {
            intGuess = prompt("Your guess is too low. Please try again: ");
        } else {
            intGuess = prompt("Your guess is too high. Please try again: ");
        }
        intCount++;
        intGuesses = intCount + 1;
    }
    
    if ((intMax - intMin) < 20 ) { //collassal if statement for score
        switch (intGuesses) {
        case 1:
            intScore = 100;
            break;
        case 2:
            intScore = 90;
            break;
        case 3:
            intScore = 80;
            break;
        case 4:
            intScore = 70;
            break;
        case 5:
            intScore = 60;
            break;
        case 6:
            intScore = 50;
            break;
        case 7:
            intScore = 40;
            break;
        case 8:
            intScore = 30;
            break;
        case 9:
            intScore = 20;
            break;
        case 10:
            intScore = 10;
            break;
        default:
            intScore = 0;
        }
    } else {
        switch (intGuesses) {
        case 1:
            intScore = 100;
            break;
        case 2:
            intScore = 95;
            break;
        case 3:
            intScore = 90;
            break;
        case 4:
            intScore = 85;
            break;
        case 5:
            intScore = 80;
            break;
        case 6:
            intScore = 75;
            break;
        case 7:
            intScore = 70;
            break;
        case 8:
            intScore = 65;
            break;
        case 9:
            intScore = 60;
            break;
        case 10:
            intScore = 55;
            break;
        case 11:    
            intScore = 50;
            break;
        default:
            intScore = 0;
        }
   
    }
   
   
   
   
   
        alert("Congratulations!!! You guessed the correct number (" + intRandom + ").\n" +
        "You got a score of " + intScore + " in " + intGuesses + " attempts.\n" +
        "Play again to improve your score or enter " + intSentinel + " into the minimum range to quit.");
}
alert ("Tada.")//sentinel message
}

