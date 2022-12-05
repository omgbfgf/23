
leftWristX=0;
rightWristX=0;
difference=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log("dont use this app");

}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
   
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    }
}

function draw(){
    background("grey");
    document.getElementById("square_side").innerHTML="width and height of a square will be= "+difference+"px";
    fill("red");
    stroke("blue");
   textSize(difference);
   text("hi",50,500);
}