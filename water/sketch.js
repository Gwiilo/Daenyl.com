var cols, rows;
var scl = 50;
var w = 800;
var h = 400;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(window.innerWidth - 2, window.innerHeight - 2, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {
  
  orbitControl();
  //if(mouseIsPressed){flying -= 0.01;}
  flying -= 0.01
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -50, 20);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(255,255,255);
  translate(0, 50);
  rotateX(90);
  fill(23, 194, 241,60);
  translate(-w/2.1, -h/2.1);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}