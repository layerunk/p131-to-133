
function setup(){
    canvas = createCanvas(600 , 400);
    canvas.position(500, 200);
    objectdec = ml5.objectDetector("cocossd", fine);
}

function preload(){
    img = loadImage("tree.jpg");
}

objects = 0;
object = [];

santa = "";

function fine() {

    santa = "t";
    console.log("EVRYTHING IS FINEEEEE");
    objectdec.detect(img, justgettheresult);
}

function justgettheresult(error, result) {
    if (error) {
        console.error("you know its a error so solve it already fine this is the problem = " + error);
    }

    console.log(result);

    objects = result.length;
    object = result;
}

function draw() {
    image(img, 0, 0, 600, 400);

    if (santa != "") {
        for (i = 0; i < objects; i++) {

            fill("red");
            text(object[i].label, object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);

        }
    }
}

function back(){
    window.location = "index.html";
}