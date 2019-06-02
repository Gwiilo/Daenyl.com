var smallerChange = 75;
var largerChange = 215;
///The variables will change inbetween these 2 variables above

//Choose the probability that they will change by changing the below integer:
var probability = 100;
//The lower the probability, the higher the odds are that it changes. It's basically 1 in probability

//You can also change the speed, I personally like 0.5
var speed = 1;
//Try to make the speed numbers even, or else it won't be able to reach the specified values and it glitches out

//Made by Daenyl Bean, scroll down to see the code for it :3
//Made as an example for my friend Sam because he made it work on HTML so I made it in javascript for fun

//Check out my site if you want to, https://Daenyl.net <3











var Rchoose = 0;
var Gchoose = 0;
var Bchoose = 0;
var Rchoose1 = 1;
var Bchoose1 = 1;
var Gchoose1 = 1;
var R = 256;
var B = 266;
var G = 256;
var randomChange = 1;

var number = 0;

let inconsolata;
function preload() {
  //inconsolata = loadFont('assets/inconsolata.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //textFont(inconsolata);
  textSize(20);
  fill(222,222,222);
  textAlign(CENTER, CENTER);
  r1 = random(0,256);
  r2 = random(0,256);
  r3 = random(0,256);
  r1choose = random(0,256);
  r2choose = random(0,256);
  r3choose = random(0,256);
  noStroke();
}

function draw() {
  
  fill(R,B,G);
    
    if (R !== Rchoose)
    {
        R += Rchoose1;
    }
    if (R < Rchoose)
    {
        Rchoose1 = speed;
    }
    if (R > Rchoose)
    {
        Rchoose1 = -speed;
    }
    
    if (B !== Bchoose)
    {
        B += Bchoose1;
    }
    if (B < Bchoose)
    {
        Bchoose1 = speed;
    }
    if (B > Bchoose)
    {
        Bchoose1 = -speed;
    }
    
    if (G !== Gchoose)
    {
        G += Gchoose1;
    }
    if (G < Gchoose)
    {
        Gchoose1 = speed;
    }
    if (G > Gchoose)
    {
        Gchoose1 = -speed;
    }
    fill(R-smallerChange/2+50, B-smallerChange/2+50, G-smallerChange/2+50);
  background(R-180,B-180,G-180,50);
  textSize((width + height)/20 + 50);
  text("Counter",window.innerWidth/3,window.innerHeight/3-20,window.innerWidth/3,window.innerHeight/3-20)
  textSize((width + height)/20);
  textAlign(CENTER, CENTER);
  text(number,window.innerWidth/3,window.innerHeight/3,window.innerWidth/3,window.innerHeight/3)
  ellipse(mouseX,mouseY,2,2)
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function keyPressed() {
  number += 1;
  Rchoose = round(random(smallerChange,largerChange));
  Gchoose = round(random(smallerChange,largerChange));
  Bchoose = round(random(smallerChange,largerChange));
}

function touchEnded() {
  number += 1;
  Rchoose = round(random(smallerChange,largerChange));
  Gchoose = round(random(smallerChange,largerChange));
  Bchoose = round(random(smallerChange,largerChange));
}