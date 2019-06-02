function setup() {
  createCanvas(window.innerWidth - 2, window.innerHeight - 2);
}

//If you want to remove the text, it's at the bottom line
//The top numbers will change until they reach the value of the bottom numbers.
//If the top numbers are bigger than the bottom number, they will +=1 -1
//If the top numbers are smaller than the bottom number, they will += 1
//The RBG of the program is defined by the top numbers

//Choose the range in which they change by changing these variables right below:
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
function draw() {
    background(R,B,G);
    randomChange = floor(random(0,probability));
    if (randomChange === 1)
    {
    Rchoose = round(random(smallerChange,largerChange));
    Gchoose = round(random(smallerChange,largerChange));
    Bchoose = round(random(smallerChange,largerChange));
    }
    
    if (mouseIsPressed)
    {
        Rchoose = round(random(smallerChange,largerChange));
        Gchoose = round(random(smallerChange,largerChange));
        Bchoose = round(random(smallerChange,largerChange));
    }
    
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
    
    //text(Rchoose + " " + Bchoose + " " + Gchoose,15,15,1000,1000);
    //text("R: " + round(R),15,30,1000,1000);
    //text("B: " + round(B),15,45,1000,1000);
    //text("G: " + round(G),15,60,1000,1000);
}
