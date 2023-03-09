function $ (id) {
    return document.getElementById(id);
};

//variables



var floatRectWidth = parseFloat($("rect_width").valueOf);


var floatRectHeight = parseFloat($("rect_height").value);	
var floatTriSide1 = parseFloat($("tri_side1").valueOf);
var floatTriSide2 = parseFloat($("tri_side2").valueOf);	
var floatTriSide3 = parseFloat($("tri_side3").valueOf);
var floatRadius = parseFloat($("radius").valueOf);
var floatRectArea;
var floatRectPerim;
var floatS;
var floatTriangleArea;
var floatTrianglePerim;
var floatCircleArea;
var floatCircleCircum;	


//do it
function do_it () 
{alert ("The Rectangle area is " + rectArea(floatRectWidth,floatRectHeight) + 
" and the perimeter is " + rectPerim (floatRectWidth,floatRectHeight) + 
"\n\n" + "The Triangle area is " + 	triArea(floatTriSide1,floatTriSide2,floatTriSide3) + 
" and the perimeter is " + 
    triperimm(floatTriSide1,floatTriSide2,floatTriSide3) + "\n\n" +
"The Circle area is " + circArea(floatRadius) + 
" and the circumference is " + circcirc(floatRadius));
}


    //rectangles
function rectArea (floatRectWidth,floatRectHeight){
    floatRectArea = floatRectWidth * floatRectHeight;
    alert ("The rectangle's area is: " + floatRectArea);
}
function rectPerim (floatRectWidth,floatRectHeight){
    floatRectPerim = 2 * floatRectWidth + 2 * floatRectHeight;
    alert ("The retangle's perimeter is: " + floatRectPerim)
}
//triangles	
function triArea (floatTriSide1,floatTriSide2,floatTriSide3){
    floatS = (floatTriSide2 + floatTriSide2 + floatTriSide3)/2;
	floatTriangleArea = Math.sqrt((floatS*(floatS-floatTriSide1)*(floatS-floatTriSide2)*(floatS-floatTriSide3)));
    alert ("The triangle's area is: " + floatTriangleArea);
}

function triperimm (floatTriSide1,floatTriSide2,floatTriSide3){
	floatTrianglePerim = floatTriSide1 + floatTriSide2 + floatTriSide3;
    alert ("The triangle's perimeter is: " + floatTrianglePerim);
}
//circles
function circArea (floatRadius){
    floatCircleArea = Math.PI * Math.pow(floatRadius,2);
    alert ("The circle's area is: " + floatCircleArea);
}	
function circcirc (floatRadius){
	floatCircleCircum = 2 * Math.PI * floatRadius;  
    alert ("The circle's circumpherence is: " + floatCircleCircum);
}	
/*alert ("The Rectangle area is " + floatRectArea.toFixed(2) + " and the perimeter is " + floatRectPerim.toFixed(2) + "\n\n" +
	"The Triangle area is " + floatTriangleArea.toFixed(2) + " and the perimeter is " + floatTrianglePerim.toFixed(2) + "\n\n" +
	"The Circle area is " + floatCircleArea.toFixed(2) + " and the circumference is " + floatCircleCircum.toFixed(2));*/


/*window.onload = function () 
{
   
    $("rect_width").value = "";
    $("rect_height").value = "";
    $("tri_side1").value = "";
    $("tri_side2").value = "";
    $("tri_side3").value = "";
    $("radius").value = "";
    $("rect_width").focus();}*/

    $("calc_all").onclick = do_it;
    $("calc_rect_area").onclick = rectArea;
    $("calc_rect_perim").onclick = rectPerim;
    $("calc_tri_area").onclick = triArea;
    $("calc_tri_perim").onclick = triperimm;
    $("calc_circle_area").onclick = circArea;
    $("calc_circle_circum").onclick = circcirc;
