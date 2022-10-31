function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}

function preload() {
    filter = loadImage('https://i.postimg.cc/sDzt0dg0/Mustache.png');
}

nose_x = 0;
nose_y = 0;

function draw() {
    image(video, 0, 0, 300, 300);
    image(filter_nose, nose_x, nose_y, 30, 30);
}

function modelLoaded() {
    console.log("Model is started");
    }


function snapshot(){
    save("clown_picture.png");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x =" + nose_x);
        console.log("nose y =" + nose_y)

    }
}