function preload()
{

}

function draw()
{

}

function setup()
{
    canvas=createCanvas(495,400);
    canvas.position(900, 230);
    video=createCapture(VIDEO);
    video.size(550,550);
    video.position(100,167);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

    }
}

function modelLoaded()
{
 console .log("poseNet is loaded. blah blah blah ")
}