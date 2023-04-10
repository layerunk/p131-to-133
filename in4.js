
function setup(){
    canvas = createCanvas(600 , 400);
    canvas.position(500, 200);
}

function preload(){
    img = loadImage("evil.legacy");
}

place = "";
xcoord = 0;
ycoord = 0;
tex = "";
oh = 0;
ow = 0;

function draw(){
    image(img, 0, 0, 600, 400);
    stroke("red");
    fill("red");
    text("EVIL SPACESHIP", 200, 50);
    noFill();
    rect(80, 70, 470, 300);
}

function back(){
    window.location = "index.html";
}