// var $ = function (id) 
// {
//     return document.getElementById(id);
// }

var calculateIncome = function () 
{
    var $ = function (id) 
{
    return document.getElementById(id);
}
    var floatAnnualIncome = parseFloat($("annualIncome").value);
    var intUserAge = parseInt($('age').value);
    var floatTaxRate, floatAnnualTax;
    // switch(floatAnnualIncome){
    //     case floatAnnualIncome > 75000:
    //         floatTaxRate = .2;
    //         break;
    //     case floatAnnualIncome < 30000:
    //         if(intUserAge < 65){
    //             floatTaxRate = .05
    //         }else {
    //             floatTaxRate =.025
    //         }
    //         break;
    //         case floatAnnualIncome <=75000&&floatAnnualIncome>=30000:
    //             if(intUserAge < 65){
    //                 floatTaxRate = .1
    //             }else {
    //                 floatTaxRate =.05
    //             }
    //             break;
    // }
if(floatAnnualIncome > 75000){ 
    floatTaxRate = 20;
}else if(floatAnnualIncome < 30000){
    if(intUserAge < 65){
        floatTaxRate = 5
    }else {
        floatTaxRate =2.5
    }
}else if(floatAnnualIncome <=75000&&floatAnnualIncome>=30000){
    if(intUserAge < 65){
        floatTaxRate = 10
    }else {
        floatTaxRate = 5
    }
}




	floatAnnualTax = floatAnnualIncome * (floatTaxRate/100);

	$("annualTax").value = floatAnnualTax;


	alert ("Your income tax this year is: $" + floatAnnualTax  +"\nYour tax rate was: " + floatTaxRate + "% \nNote: Tax rate is based upon your income and age");


}
window.onload = function () 
{
    var $ = function (id) 
{
    return document.getElementById(id);
}
    $("annualIncome").value = "";
    $("age").value = "";
    $("annualTax").value = "";
    $("calculate").onclick = calculateIncome;
    $("annualIncome").focus();
}