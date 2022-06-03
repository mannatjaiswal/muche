img="";
function preload(){
    img=loadImage('muche.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}x=0;y=0;
function modelLoaded(){
    console.log('modelLoaded');
}
function gotPoses(results){
if(results.length >0){
    console.log(results)
 x=results[0].pose.nose.x-20;
 y=results[0].pose.nose.y;
}
}
function draw(){
 image (video,0,0,300,300);
 image (img,x,y,50,30)
}
function take_snapshot(){
    save ('mypicture.jpg');
}
