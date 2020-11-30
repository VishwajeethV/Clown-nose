function preload() {
clown_image = loadImage("https://i.postimg.cc/j2P3m0hk/CLOWNNOSE.png");

}

function setup() {

    canvas = createCanvas(300,250);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,250);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getposes);
    
}

function modelLoaded()  {

    console.log("modelLoaded");
}

function getposes(result) {

    if(result.length>0){

        console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        console.log(nose_x);
        console.log(nose_y);
    }
}


function draw() {

image(video,0,0,300,250);
fill(130,12,0);
circle(nose_x,nose_y,20);
image(clown_image,nose_x,nose_y,30,30);
}

function take_snapshot() {

 save("clown_nose.jpg");
}