song = "";

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.size(300,300);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses());
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function gotPoses(error, result){}

function draw(){
    image(video, 0, 0, 300, 300);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
