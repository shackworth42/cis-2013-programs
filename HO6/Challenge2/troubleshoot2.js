var $ = function (id) {
    return document.getElementById(id);
};

var fixPrinter = function() {
    var stringOutput = "";  //declares stringOutput inital value to be blank

    //define the individual troubleshooting tips per the chart
    var stringMessage1 = "Check the power cable.";
    var stringMessage2 = "Check the printer-computer cable.";
    var stringMessage3 = "Ensure printer software is installed.";
    var stringMessage4 = "Check / replace ink.";
    var stringMessage5 = "Check for paper jam.";
    var stringMessage6 = "Looks like everything is working fine!";

    var boolPrinting = $("not_printing").selected;  
    var boolRedLight = $("yes_redlight").selected;  
    var boolRecognised = $("not_recognised").selected;  

    
switch(boolRedLight){
    case boolPrinting == true && boolRedLight == false && boolRecognised == false:
        $("output").value = stringMessage5;
        break;
    case boolPrinting == true && boolRedLight == true && boolRecognised == false:
         $("output").value = stringMessage5 + "\n" + stringMessage4;
        break;
    case boolPrinting == true && boolRedLight == true && boolRecognised == true:
         $("output").value = stringMessage2 + "\n" + stringMessage3 + "\n" + stringMessage4;
        break;
    case boolPrinting == true && boolRedLight == false && boolRecognised == true:
         $("output").value = stringMessage1 + "\n" + stringMessage2 + "\n" + stringMessage3;
        break;
    case boolPrinting == false && boolRedLight == false && boolRecognised == false:
         $("output").value = stringMessage6;
        break;
    case boolPrinting == false && boolRedLight == false && boolRecognised == true:
         $("output").value = stringMessage3;
        break;
    case boolPrinting == true && boolRedLight == true && boolRecognised == false:
         $("output").value = stringMessage4;
        break;
    case boolPrinting == true && boolRedLight == true && boolRecognised == true:
         $("output").value = stringMessage3 + "\n" + stringMessage4;
        break;
}

}
window.onload = function () {
    $("troubleshoot").onclick = fixPrinter;
}
