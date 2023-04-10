
function setup(){
    canvas = createCanvas(600 , 500);
    canvas.position(500, 200);
}

function preload(){
    img = loadImage("doggy.png");
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
    text("DOG", 200, 100);
    noFill();
    rect(100, 70, 400, 400);
}

function back(){
    window.location = "index.html";
}