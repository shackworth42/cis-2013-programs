//DOM function
var $ = function (id) 
{
    return document.getElementById(id);
};

//rect area
function floatRectArea (floatRectHeight,floatRectWidth) {  
        var floatRectWidth = parseFloat($("rect_width").value);
	    var floatRectHeight = parseFloat($("rect_height").value);
        if(floatRectHeight == ''||floatRectWidth == ''){
            alert("Please enter valid measurements.");
            return;
        }
        window.rectarea = (floatRectWidth * floatRectHeight).toFixed(2);
		alert ("The rectangle area is: " + rectarea)
    };

//rect perim
function floatRectPerim (floatRectHeight,floatRectWidth) {
        var floatRectWidth = parseFloat($("rect_width").value);
	    var floatRectHeight = parseFloat($("rect_height").value);
        if(floatRectHeight == ''||floatRectWidth == ''){
            alert("Please enter valid measurements.");
            return;
        }
        window.rectperim = (2 * floatRectWidth + 2 * floatRectHeight).toFixed(2);
		alert ("The rectangle perimeter is: " + rectperim)
    };


//tri area	
function floatTriangleArea (floatS,floatTriSide1,floatTriSide2,floatTriSide3){
        var floatTriSide1 = parseFloat($("tri_side1").value);
	    var floatTriSide2 = parseFloat($("tri_side2").value);
        var floatTriSide3 = parseFloat($("tri_side3").value);
        if(floatTriSide1 == ''||floatTriSide2 == ''||floatTriSide3 == ''){
            alert("Please enter valid measurements.");
            return;
        }
		floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3)/2;
		window.triarea =  (Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)))).toFixed(2);
		alert ("The triangle's perimeter is: " + triarea)
    };
//tri perim
function floatTrianglePerim (floatTriSide1,floatTriSide2,floatTriSide3) {
        var floatTriSide1 = parseFloat($("tri_side1").value);
	    var floatTriSide2 = parseFloat($("tri_side2").value);
        var floatTriSide3 = parseFloat($("tri_side3").value);
        if(floatTriSide1 == ''||floatTriSide2 == ''||floatTriSide3 == ''){
            alert("Please enter valid measurements.");
            return;
        }
        window.triperim = floatTriSide1 + floatTriSide2 + floatTriSide3;
		alert ("The triangle's perimeter: " + triperim)
    };

//circle area	
function floatCircleArea (floatRadius) {
        var floatRadius = parseFloat($("radius").value);
        if(floatRadius == ''){
            alert("Please enter valid measurments");
            return;
        }
        window.circarea = (Math.PI * Math.pow(floatRadius,2)).toFixed(2);
		alert("The circle's area is: " + circarea)
    };
	
//circumpherence	
function floatCircleCircum (floatRadius) { 
        var floatRadius = parseFloat($("radius").value);
        window.circcirc = (2 * (Math.PI * floatRadius)).toFixed(2);
		alert ("The circle's circumpherence is: " + circcirc)
    };  
	
//do it
var do_it = function () 
		{
        //vars.
        var floatRectWidth = parseFloat($("rect_width").value);
	    var floatRectHeight = parseFloat($("rect_height").value);
        var floatTriSide1 = parseFloat($("tri_side1").value);
	    var floatTriSide2 = parseFloat($("tri_side2").value);
        var floatTriSide3 = parseFloat($("tri_side3").value);
        var floatRadius = parseFloat($("radius").value);
        //verification
        if(floatRectWidth == ''||floatRectHeight == ''||floatTriSide1 == ''||floatTriSide2 == ''||floatTriSide3 == ''||floatRadius== ''){
            alert("You have one or more values missing");
            return;
        }
        //calcs
        var rectarea = (floatRectWidth * floatRectHeight).toFixed(2);
        var rectperim = (2 * floatRectWidth + 2 * floatRectHeight).toFixed(2);
		    floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3)/2;
		var triarea =  (Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)))).toFixed(2);
        var triperim = floatTriSide1 + floatTriSide2 + floatTriSide3;
        var circarea = (Math.PI * Math.pow(floatRadius,2)).toFixed(2);
        var circcirc = (2 * (Math.PI * floatRadius)).toFixed(2);
        //alert
            alert ("The Rectangle area is " + rectarea + ", and the perimeter is " + rectperim + 
		"\n\n" + "The Triangle area is " + 	triarea + ", and the perimeter is " + 
		triperim + "\n\n" + "The Circle area is " + circarea + ", and the circumference is " + circcirc);

       
	};



window.onload = function () 
{
    //lines 59-64 clear the DOM values..
    $("rect_width").value = "";
    $("rect_height").value = "";
    $("tri_side1").value = "";
    $("tri_side2").value = "";
    $("tri_side3").value = "";
    $("radius").value = "";
    $("rect_width").focus(); 
	$("calc_all").onclick = do_it;
    $("calc_rect_area").onclick = floatRectArea;
    $("calc_rect_perim").onclick = floatRectPerim;
    $("calc_tri_area").onclick = floatTriangleArea;
    $("calc_tri_perim").onclick = floatTrianglePerim;
    $("calc_circle_area").onclick = floatCircleArea;
    $("calc_circle_circum").onclick = floatCircleCircum;
};