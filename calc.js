var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
floatAge=prompt("How old are you in years?")
floatDays=(floatAge*365.25).toFixed(2)
intWeeks=parseInt(floatAge*52).toFixed(2)
floatMonths=parseFloat(floatAge*12).toFixed(2)
intFortnights=parseInt(floatDays/14).toFixed(2)
alert("You are: " + '\n' + floatDays +  ' Days Old' + '\n' + intWeeks + ' Weeks Old' + '\n' + floatMonths + ' Months Old' + '\n' + intFortnights + ' Fortnights Old! Wow thats really old...')
