var doIt = function() {
for(var count = 0 ; count <= 100 ; count++) {
    if(count % 3 == 0 && count % 5 == 0) {
        console.log("FizzBuzz");
    } else if(count % 3 == 0) {
        console.log("Fizz");
    } else if(count % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(count);
    }
}
alert("To Infinity and Beyond!");
};
window.onclick = doIt;


// var count = 0;
// while(count <= 100) {
//     if(count % 3 == 0 && count % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if(count % 3 == 0) {
//         console.log("Fizz");
//     } else if(count % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(count);
//     }
//     count++;
// }