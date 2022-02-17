noseX=0;
noseY=0;

function preload()
{
    clown_nose=loadImage('https://i.postimg.cc/wjrBLkhq/namish123444-removebg-preview.png');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.position(480, 200);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-35;
        noseY=results[0].pose.nose.y;
        console.log("nose x=",+noseX);
        console.log("nose y=",+noseY);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 75, 90);
}

function take_snapshot()
{
    save('Clown_Nose_Image.png');
}