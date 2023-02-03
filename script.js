var floatMiles, floatGallons, floatMpg, strMessage;
floatMiles= prompt('Enter Miles Driven');
floatGallons= prompt('Enter Gallons Used');
floatMpg= floatMiles/floatGallons
/*
if (floatMpg < 10) {strMessage= 'IN THIS ECONOMY?.'}
if (floatMpg ) {strMessage= 'A true American.'}
if (17.1 < floatMpg < 28) {strMessage= 'Respectable but a little slow.'}
if (28.5 < floatMpg < 50) {strMessage= 'Okay grandpa, let someone else drive.'}
if (51 < floatMpg < 100) {strMessage= 'Get off your bike.'}
*/
alert('Your MPG was = ' + floatMpg)// + "  " + strMessage)