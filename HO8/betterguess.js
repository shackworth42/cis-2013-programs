window.onload = function () {
var $ = function(id) { return document.getElementById(id); };
$("start").onclick = game;//start 
$("quit").onclick = quit;//quit function
$("min").focus();//focus on min input box
};

var quit = function() {
    window.location.href = "https://shackworth42.githib.io/cis-2013-programs/HO8/stare.jpg";
    //redirect to a blank stare, because you shouldnt have to quit an HTML DOM game
}

var game = function() {
    
    
    var intRandom, intCount, intGuess, intGuesses, intScore, intMin, intMax, intSentinel = -1;//set sentinel value and dec all vars


    var quit = function() {
        window.location.href = "https://shackworth42.github.io/cis-2013-programs/HO8/stare.jpg";
    }
    var $ = function(id) { return document.getElementById(id); };
    var intMin = (parseInt($("min").value)) + 1;//makes it so the max and min arent included
    var intMax = (parseInt($("max").value)) - 1;//re declare important vars bc im paranoid now after geometry functions


if (intMin == intSentinel) {
        quit();
    }

if (intMin == '' || intMax == '') {
    alert("You must enter a number for both the minimum and maximum range.");
    return;
}

if (intMin < 0 || intMax < 0) {
    alert("You must enter a positive number for both the minimum and maximum range.");
    return;
}

if (isNaN(intMin) || isNaN(intMax)) {
    alert("You must enter numbers for both the minimum and maximum range.");
    return;
}

if (intMin > intMax) {
    alert("The minimum range must be less than the maximum range.");
    return;
}

if (intMax - intMin == 0) {
    alert("Have some fun and enter a range greater than 1.");
    return;
}
//verification steps


if (intMin == intSentinel) {//sentinel if, duh
    quit();
}

    intRandom = parseInt(Math.floor(Math.random() * (intMax - intMin + 1)) + intMin);//pray the random number generator works
    //for some reason im testing this a day later and it works 100% of the time now. I dont know why.
    //now i have to add and subtract 1 to the min and max to make sure the random number is in the range bc im too scared to change this
    intCount = 0;
    
    intGuess = prompt("Please enter your guess between " + (intMin - 1) + " and " + (intMax + 1) + ": ");
    //prompt for guess
if (intGuess == intSentinel) {
    quit();
}
if (intGuess < intMin || intGuess > intMax) {
   intGuess = prompt("Your guess must be between " + (intMin - 1) + " and " + (intMax + 1) + ".");
}


    while (intGuess != intRandom) {//main game loop
        if (intGuess = '') {
            break;
        }
    
        else if (intGuess < intRandom) {
            intGuess = prompt("Your guess is too low. Please guess again: ");
        } else if (intGuess > intRandom) {
            intGuess = prompt("Your guess is too high. Please guess again: ");
        }
        else if (intGuess == 20) {
            intGuess = prompt("This is a little embarassing, isnt it?");
        }
        else if (intGuess == intSentinel) {
            quit();
        }


        intCount++;
    }
    intGuesses = intCount + 1;
    //core game loop
   if (intGuesses = 1) {
       intScore = "1,000,000";
   }
   else if ((intMax - intMin) < 20 ) {
        intScore = (100 - (intGuesses * 5));
    } else if ((intMax - intMin) < 50) {
        intScore = (150 - (intGuesses * 7));
    } else {
        intScore = (200 - (intGuesses * 10));
    }
   

        alert("Congratulations!!! You guessed the correct number (" + intRandom + ").\n" +
        "You got a score of " + intScore + " in " + intGuesses + " attempts.\n" +
        "Play again to improve your score or enter " + intSentinel + " into the minimum range to quit. \n You can also enter the sentinel into the guess box to quit at any time.");

        $("min").value = '';//nulls out input boxes. not sure if i could do them earlier but here is safest
        $("max").value = '';
        $("min").focus();//focuses on min input box
}
