leftWristX=0;
leftWristY=0;
song="";
rightWristX=0;
rightWristY=0;
function setup()
{
    canvas=createCanvas(900,700);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes)
}
function draw()
{
    image(video,0,0,900,700);
}
function preload()
{
    song=loadSound("24kGoldn - Mood Ringtone.mp3");
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelloaded()
{
    console.log('poseNet is initiailized');
}
function gotposes(results)
{
   if(results.length > 0)
   {
       console.log(results);
       leftWristX=results[0].pose.leftWrist.x;
       leftWristY=results[0].pose.leftWrist.y;
       console.log("leftWristX = "+leftWristX);
       console.log("leftWristY = "+leftWristY);

       rightWristX=results[0].pose.rightWrist.x;
       rightWristY=results[0].pose.rightWrist.y;
       console.log("rightWristX = "+rightWristX);
       console.log("rightWristY = "+rightWristY);
   }
}
