var $ = function (id) 
{
    return document.getElementById(id);
}
var length = function (){
    var phrase = $("phrase").value;
    var output = $("output");
    var count = 0;
    for (var i = 0; i < phrase.length; i++) {
        if (phrase.charAt(i) != " ") {
            count++;
        }
    }
    output.value = count.toLocaleString();
}
var vowels = function (){
    var phrase = $("phrase").value;
    var output = $("output");
    var count = 0;
    for (var i = 0; i < phrase.length; i++) {
        if (phrase.charAt(i) == "a" || phrase.charAt(i) == "e" || phrase.charAt(i) == "i" || phrase.charAt(i) == "o" || phrase.charAt(i) == "u") {
            count++;
        }
    }
    output.value = count.toLocaleString();
}
var consonants = function () 
{
    var phrase = $("phrase").value;
    var output = $("output");
    var count = 0;
    for (var i = 0; i < phrase.length; i++) {
        if (phrase.charAt(i) == "b" || phrase.charAt(i) == "c" || phrase.charAt(i) == "d" || phrase.charAt(i) == "f" || phrase.charAt(i) == "g" || phrase.charAt(i) == "h" || phrase.charAt(i) == "j" || phrase.charAt(i) == "k" || phrase.charAt(i) == "l" || phrase.charAt(i) == "m" || phrase.charAt(i) == "n" || phrase.charAt(i) == "p" || phrase.charAt(i) == "q" || phrase.charAt(i) == "r" || phrase.charAt(i) == "s" || phrase.charAt(i) == "t" || phrase.charAt(i) == "v" || phrase.charAt(i) == "w" || phrase.charAt(i) == "x" || phrase.charAt(i) == "y" || phrase.charAt(i) == "z") {
            count++;
        }
    }
    output.value = count.toLocaleString();
}
var reverse = function () 
{
    var phrase = $("phrase").value;
    var output = $("output");
    var reverse = "";
    for (var i = phrase.length - 1; i >= 0; i--) {
        reverse += phrase.charAt(i);
    }
    output.value = reverse.toLocaleString();
}
var clear = function () 
{
	$("phrase").value = "";
    $("output").value = "";
}
window.onload = function () 
{
    //the following five lines of code make sure the values on the DOM are cleared.
    $("phrase").value = "";
    $("output").value = "";
    $("length").onclick = length; //runs the calculate_click function when clicked
    $("vowels").onclick = vowels; //runs the calculate_click function when clicked
    $("consonants").onclick = consonants; //runs the calculate_click function when clicked
    $("reverse").onclick = reverse; //runs the calculate_click function when clicked
    $("clear").onclick = clear; //runs the calculate_click function when clicked    
    $("phrase").focus();
}  