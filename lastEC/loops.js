//DOM bc im a masochist
var $ = function (id) 
{
    return document.getElementById(id);
};
//Task 1
var Task1 = function (){
var arrayNames = new Array('John', 'Robert', 'Jimmy', 'Bonzo');
var arrayInstruments = [];
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";
var stringMessage = "";
var intCount;
for (intCount = 0; intCount < arrayNames.length; intCount++)
{
stringMessage = stringMessage + arrayNames[intCount] + " plays " + arrayInstruments[intCount] +"\n";
}
alert(stringMessage);
}
//task 2
var Task2 = function (){
    var i = 1;
    var j = 0;
    var numbers = new Array();
    while (i < 13){
        for (j = 1; j < 13; j++){
            numbers.push(i * j);
            
        }
        i++;
        numbers.push("\n");
    }
    var stringMessage = numbers.join(" ");
    alert(stringMessage);
}
//task 3
var Task3 = function (){
    var i = 1;
    var j = 0;
    var numbers = new Array();
    while (i < 13){
        for (j = 1; j < 13; j++){
            if (i % 2 != 0){
                break;
            }
            numbers.push(i * j);
        }
        i++;
        numbers.push("\n");
    }
    var stringMessage = numbers.join(" ");
    alert(stringMessage);
}
//onload function
window.onload = function(){
    $("task1").onclick = Task1;
    $("task2").onclick = Task2;
    $("task3").onclick = Task3;
}
