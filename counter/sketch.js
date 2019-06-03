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




var seizure = 0






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
  textFont('Arial');
  fill(222,222,222);
  textAlign(CENTER, CENTER);
  r1 = random(0,256);
  r2 = random(0,256);
  r3 = random(0,256);
  r1choose = random(0,256);
  r2choose = random(0,256);
  r3choose = random(0,256);
  noStroke();
  filter(INVERT)
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
  push();
  textAlign(CENTER,CENTER)
  background(R-150,B-150,G-150,50);
  fill(R-50,B-50,G-50);
  textSize((width + height)/20 + 50);
  text("Counter",window.innerWidth/3-1,window.innerHeight/3-20,window.innerWidth/3,window.innerHeight/3-20)
  
  fill(R-50,B-50,G-50,75);
  textSize((width + height)/20 + 50);
  text("Counter",window.innerWidth/3-2,window.innerHeight/3-20,window.innerWidth/3,window.innerHeight/3-20)
  
  fill(R-50,B-50,G-50,50);
  textSize((width + height)/20 + 50);
  text("Counter",window.innerWidth/3-3,window.innerHeight/3-20,window.innerWidth/3,window.innerHeight/3-20)
  
  fill(R-50,B-50,G-50,25);
  textSize((width + height)/20 + 50);
  text("Counter",window.innerWidth/3-4,window.innerHeight/3-20,window.innerWidth/3,window.innerHeight/3-20)
  
  fill(R, B, G);
  textSize((width + height)/20 + 50);
  text("Counter",window.innerWidth/3,window.innerHeight/3-20,window.innerWidth/3,window.innerHeight/3-20)
  
  fill(R, B, G);
  textSize((width + height)/20 + 50);
  text("Counter",window.innerWidth/3,window.innerHeight/3-20,window.innerWidth/3,window.innerHeight/3-20)
  
  fill(R-50, B-50, G-50);
  textSize((width + height)/20);
  text(number,window.innerWidth/3-1,window.innerHeight/3,window.innerWidth/3,window.innerHeight/3)
  
  fill(R-50, B-50, G-50,75);
  textSize((width + height)/20);
  text(number,window.innerWidth/3-2,window.innerHeight/3,window.innerWidth/3,window.innerHeight/3)
  
  fill(R-50, B-50, G-50,50);
  textSize((width + height)/20);
  text(number,window.innerWidth/3-3,window.innerHeight/3,window.innerWidth/3,window.innerHeight/3)
  
  fill(R-50, B-50, G-50,25);
  textSize((width + height)/20);
  text(number,window.innerWidth/3-4,window.innerHeight/3,window.innerWidth/3,window.innerHeight/3)
  
  fill(R-smallerChange/2+50, B-smallerChange/2+50, G-smallerChange/2+50);
  textSize((width + height)/20);
  text(number,window.innerWidth/3,window.innerHeight/3,window.innerWidth/3,window.innerHeight/3)
  pop();
  fill(R-80,B-80,G-80,5);
  
  
  if (keyIsPressed && key == 's') {
    seizure = 1
  }
  
  if (keyIsPressed && key == 't') {
    seizure = 0
  }
  
  
  if (seizure === 1) {
    textSize((width + height)/100);
    textAlign(RIGHT,CENTER)
    fill(R-smallerChange/2+50, B-smallerChange/2+50, G-smallerChange/2+50,20);
    text("SEIZURE MODE ACTIVATED",window.innerWidth/1.5,window.innerHeight/1.4,window.innerWidth/3,window.innerHeight/3)
    text("'T' to deactivate",window.innerWidth/1.5,window.innerHeight/1.4 + 20,window.innerWidth/3,window.innerHeight/3)
  }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

function keyPressed() {
    if (keyCode == 32) {
    if (seizure == 1) {
      filter(INVERT,1)
    }
    number += 1;
    Rchoose = round(random(smallerChange,largerChange));
    Gchoose = round(random(smallerChange,largerChange));
    Bchoose = round(random(smallerChange,largerChange));
  }
}

function touchEnded() {
  if (seizure == 1) {
      filter(INVERT,1)
    }
  number += 1;
  Rchoose = round(random(smallerChange,largerChange));
  Gchoose = round(random(smallerChange,largerChange));
  Bchoose = round(random(smallerChange,largerChange));
}