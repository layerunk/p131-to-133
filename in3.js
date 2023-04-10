
function setup(){
    canvas = createCanvas(600 , 400);
    canvas.position(500, 200);
}

function preload(){
    img = loadImage("coin.avif");
}

place = "";
xcoord = 0;
ycoord = 0;
tex = "";
oh = 0;
ow = 0;

function copy(){
    place = document.getElementById("linky").value ;
    img = loadImage(place);
}

function draw(){
    image(img, 0, 0, 600, 400);
    stroke("red");
    fill("red");
    text("COIN", 400, 180);
    noFill();
    rect(360, 10, 120, 150);
}

function back(){
    window.location = "index.html";
}