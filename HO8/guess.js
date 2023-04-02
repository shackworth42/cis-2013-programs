//variables
var intMax, intMin, intRandom, intGuess, intCount, intAttempts, intScore;
var intSentinel = 999;


//minimum prompt
var intMin = prompt("Please enter the minimum of your guessing range (must be at least 0): ");
    if (isNaN(intMin) || intMin < 0) {
        alert("You must enter a number greater than or equal to 0");
    }
    //while (intMin != intSentinel) {
//maximum prompt
var intMax = prompt("Please enter the maximum of your guessing range (must be at least 2 more than the minimum): ");
    if (isNaN(intMax) || intMax < 2) {
        alert("You must enter a number greater than or equal to 2 more than the minimum");
    }
//random number generator
//intRandom = Math.floor(Math.random() * (intMax - intMin + 1)) + intMin;
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);


// set the loop counter
intCount = 0;

// prompt for the user's guess
intGuess = prompt("Your score is determined by a function of your range and your attempts. \n Please enter your guess between " + intMin + " and " + intMax + ": ");
    if  (isNaN(intGuess) || intGuess < intMin || intGuess > intMax) {
        alert("You must enter a number between " + intMin + " and " + intMax);
    }

//main loop
while (intGuess != intRandom) {
    if (intGuess < intRandom) {
        intGuess = prompt("Your guess is too low. Please try again: ");
    } else {
        intGuess = prompt("Your guess is too high. Please try again: ");
    }
    intCount++;
    intAttempts = intCount + 1;
}
// //calc score
//  intScore = (((intMax - intMin) / intAttempts)*100).toFixed(2);
// }

// //quit message
// if (intMin == intSentinel) {
//     alert("Thank you for playing!");
// }

// provides final output upon successful guessing with sentinel verification

if (intMin!==intSentinel) {
alert("Congratulations!!! You guessed the correct number (" + intRandom +").\n" +
		"You got a score of " + intScore + " in " + intAttempts + " attempts.\n" +
        "Play again to improve your score or enter " + intSentinel + " into the minimum range to quit.");
}



