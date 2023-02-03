var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
floatAge=prompt("How old are you in years?")
floatDays=(floatAge*365.25).toFixed(2)
intWeeks=parseInt(floatAge*52)
floatMonths=parseFloat(floatAge*12).toFixed(2)
intFortnights=parseInt(floatDays/14)
alert("You are: " + '\n' + floatDays +  ' Days Old' + '\n' + intWeeks + ' Weeks Old' + '\n' + floatMonths + ' Months Old' + '\n' + intFortnights + ' Fortnights Old!' + '\n' +  'Wow thats really old...')
