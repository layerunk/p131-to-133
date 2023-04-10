
function setup(){
    canvas = createCanvas(600 , 500);
    canvas.position(500, 200);
}

function preload(){
    img = loadImage("sonicplushy.webp");
}

place = "";
xcoord = 0;
ycoord = 0;
tex = "";
oh = 0;
ow = 0;

function draw(){
    image(img, 0, 0, 600, 500);
    stroke("red");
    fill("red");
    text("SONIC PLUSHY", 200, 50);
    noFill();
    rect(100, 70, 420, 420);
}

function back(){
    window.location = "index.html";
}