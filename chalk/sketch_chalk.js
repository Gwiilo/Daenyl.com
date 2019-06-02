var n = 256;
var minRad = 50;
var maxRad = 600;
var nfAng = 0.01;
var nfTime = 0.005;

function setup() {
    createCanvas(window.innerWidth - 2, window.innerHeight - 2);
    background(255,99);
    noFill();
    stroke(0, 15);
};

function draw() 
{
  translate(width/2, height/2);
  rotate(0.001*frameCount);
  beginShape();
  for (var i=0; i<n; i++) {
    var ang = map(i, 0, n, 0, 6.283);
    var rad = map(noise(i*nfAng, frameCount*nfTime), 0, 1, minRad, maxRad);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);
};