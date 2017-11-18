//main.js

var xOff = undefined;
var yOff = undefined;

function adjustPoints(input){
    for(let i=0; i<input.length; i++){
        input[i].y = -input[i].y;
        console.log("inverteu");
    }

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    for (let i=0; i<input.length; i++){
        if (input[i].x > maxX)
            maxX = input[i].x;
        if (input[i].x < minX)
            minX = input[i].x; 
        if (input[i].y > maxY)
            maxY = input[i].y;
        if (input[i].y < minY)
            minY = input[i].y;
    }

    console.log(minX,  + " " + maxX);
    console.log(minY,  + " " + maxY);

if (xOff==undefined){
    xOff = Math.ceil(((maxX -minX)/2)+minX);
    yOff = Math.ceil(((maxY -minY)/2)+minY);
}

    for (let i=0; i<input.length; i++){
        input[i].x -= xOff; 
        input[i].y -= yOff;
    }
}

function printCorrectly(input){
    //MoveL Offs(p0, x, y, 0),v1000, z1, tool0;
    adjustPoints(input);

    let out = "<pre>";

    for(let i=0; i<input.length; i++){
        out += "<p>MoveL Offs(p0," + input[i].x + "," + input[i].y + ",0),v1000, z1, tool0;</p>"; 
    }
    out +="<p>MoveL Offs(p0," + input[0].x + "," + input[0].y + "," + 150),v1000, z1, tool0;</p>"; 
    out +="</pre>";

    document.getElementById("output").innerHTML += out;
}

function main(){
    printCorrectly(inputPoints);
    console.log(inputPoints);
}
