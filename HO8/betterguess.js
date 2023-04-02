window.onload = function () {
var $ = function(id) { return document.getElementById(id); };
$("start").onclick = game;//start 
$("quit").onclick = quit;//quit function
};

var quit = function() {
    window.location.href = "https://shackworth42.githib.io/cis-2013-programs/HO8/stare.jpg";
    //redirect to a blank stare, because you shouldnt have to quit an HTML DOM game
}

var game = function() {
    
    
    var intRandom, intCount, intGuess, intGuesses, intScore, intMin, intMax, intSentinel = 999;//set sentinel value and dec all vars


    var quit = function() {
        window.location.href = "https://shackworth42.github.io/cis-2013-programs/HO8/stare.jpg";
    }
    var $ = function(id) { return document.getElementById(id); };
    var intMin = parseInt($("min").value);
    var intMax = parseInt($("max").value);//re declare important vars



if (isNaN(intMin) || isNaN(intMax)) {
    alert("You must enter a number for both the minimum and maximum range.");
    return;
}

if (intMin > intMax) {
    alert("The minimum range must be less than the maximum range.");
    return;
}
//small verification steps


if (intMin == intSentinel) {//sentinel if, duh
    quit();
}
//my spacing and grouping here is atrocious i wish a professional could see whatever mess this is
  
    intRandom = parseInt(Math.floor(Math.random() * (intMax - intMin + 1)) + intMin);//pray the random number generator works
    //for some reason im testing this a day later and it works 100% of the time now. I dont know why.
    
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
    
    if ((intMax - intMin) < 20 ) { //collassal if statement for score, if the difference between the max and min is less than 20, there is a harsher grading system
        switch (intGuesses) {//i enjoy writing switch statements, i understand its ugly
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

        $("min").value = '';//nulls out input boxes. not sure if i could do them earlier but here is safest
        $("max").value = '';
   
}