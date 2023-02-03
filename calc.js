var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
floatAge=prompt("How old are you in years?")
floatDays=(floatAge*365.25)
intWeeks=parseInt(floatAge*52)
floatMonths=parseFloat(floatAge*12)
intFortnights=parseInt(floatDays/14)
alert("You are: " + floatDays +  ' Days Old' + '\n' + intWeeks + ' Weeks Old' + '\n' + floatMonths + ' Months Old' + '\n' + intFortnights + ' Fortnights Old! Wow thats really old...')