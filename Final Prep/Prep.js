function $(id) {
    return document.getElementById(id);
}
var boxes = {

};
function calculate(color, height, width, length){
    color = $("color").value;
    height = $("height").value;
    width = $("width").value;
    length = $("length").value;
   class box {
       constructor(height, width, length, color){
            this.height = height;
            this.width = width;
            this.length = length;
            this.color = color;
       }
       volume(){
           return this.height * this.width * this.length;
       }
    }
    let newBox = new box(height, width, length, color);
    let volume = newBox.volume();
    Object.assign(boxes, {[color]: volume});
    console.log(boxes);
    $("color").value = "";
    $("height").value = "";
    $("width").value = "";
    $("length").value = "";
    $("color").focus();
}

let sortable = [];
function display(){
    for (var color in boxes) {
        sortable.push([color, boxes[color]]);
    }
    sortable.sort(function(a, b) {
        return b[1] - a[1];
    });
    var output = "";
    var set = new Set(sortable);
    console.log(set);

    for (var i = 0; i < set.size; i++) {
        output += "<li>" + sortable[i][0] + " " + sortable[i][1] + "</li>";
    }
    console.log(output);
    $("list").innerHTML = output;
}