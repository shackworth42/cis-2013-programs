//DOM
var $ = function (id) 
{
    return document.getElementById(id);
}
var generate = function () 
{
	var intCount = parseInt($("total_fib").value);  //gets user input from the DOM
		if (intCount < 2 ||  intCount > 100 || isNaN(intCount)) {
			alert("Please enter a number between 2 and 100")
			$("total_fib").focus();
			return;
		}
	//validate user input that intCount is a number and intCount is not less than 2 or intCount not greater than 100
	var i=0;  
	var j=1;  
	var k;    
	var Array = []; //trying arrays because it seemed easier when you were explaining it
	Array[0] = i; 
	Array[1] = j;
		for (var x=2; x<intCount; x++) { 
			k = i + j; 
			Array[x] = k; 
			i = j; 
			j = k;
			}

// number of fibonacci numbers and then post it to the html DOM 
// using the id of output
	$("output").value = Array;
	console.log(Array);
} 
// Push solution back to Output through DOM
window.onload = function () 
{
    $("total_fib").value = "";
   	$("output").value = "";
    $("generate").onclick = generate; //runs the generate function when clicked
	$("fib").focus();
}  