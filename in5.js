
function setup(){
    canvas = createCanvas(600 , 400);
    canvas.position(500, 200);
}

function preload(){
    img = loadImage("easter.jpg");
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
    text("EASTER EGGS", 200, 100);
    noFill();
    rect(100, 70, 400, 300);
}

function back(){
    window.location = "index.html";
}