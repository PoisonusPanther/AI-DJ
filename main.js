song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(1000,600);
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function gotPoses(results){
    console.log(results);
    if (results.length > 0){
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX:"+leftWristX+" leftWristY:"+leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX:"+rightWristX+" rightWristY:"+rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 600);
    
    fill("#F50000");
    stroke("#F50000");
    
    circle(leftWristX, leftWristY, 20);
    circle(rightWristX, rightWristY, 20);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
