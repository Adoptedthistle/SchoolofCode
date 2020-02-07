
setTimeout(function(square) {
    console.log("square");
    setTimeout(function(circle) {
        console.log("circle");
    } 2000;
        setTimeout(function(circle) {
        console.log("green");
        } 3000;
            setTimeout(function(square) {
            console.log("green");
            } 4000;

}), 1000;


setInterval (function()