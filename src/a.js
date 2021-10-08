function randomRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//color
var colorInc = randomRange(0.5, 3); // Color change speed
var sat = randomRange(10, 100); // saturation max 100

//just black and white
var sat = 0;

var brt = 100; // brightness max 100
var alph = 9; // alpha max 100

var numbPart = randomRange(100, 1000); // number of particles
var partStroke = randomRange(0.5, 1); // line width
var angMult = randomRange(20, 60); // 0.1 = straighter lines; 25+ = sharp curves
var angTurn = randomRange(20, 100); // adjust angle for straight lines (after adjusting angMult)
var zOffInc = randomRange(0.001, 20); // speed of vector changes
var inc = 0.1;
var scl = 10;
var cols, rows;
var zoff = 0;
var fr;

var particles = [];
//*
var particles1 = [];

var flowfield;
//*
var flowfield1;
var hu = 2;
var p = 1;

function setup() {
  //change canvas width and height
  createCanvas(400, 600); //windowWidth-20, windowHeight-20);
  colorMode(HSB, 359, 100, 100, 100);

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP("");

  flowfield = new Array(cols * rows);
  //*
  flowfield1 = new Array(cols * rows);

  for (var i = 0; i < numbPart; i++) {
    particles[i] = new Particle();
    //*
    particles1[i] = new Particle();
  }
  background(10);
}

function draw() {
  //alternate blendmodes?
  //blendMode(MULTIPLY);//Variation 1
  //blendMode(EXCLUSION);//Variation 2
  //blendMode(DIFFERENCE);//Variation 3; with background(90),to get pure greyscale
  if (p > 0) {
    var yoff = 0;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        var index = x + y * cols;
        var angle = noise(xoff, yoff, zoff) * angMult + angTurn;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
        // stroke(100, 50);
        // push();
        // translate(x * scl, y * scl);
        // rotate(v.heading());
        // strokeWeight(1);
        // line(0, 0, scl, 0);
        // pop();
      }
      yoff += inc;

      zoff += zOffInc;
    }
    check = 0;
    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();

      if (brt > 100) {
        check = 0;
      }

      if (brt < 0) {
        check = 1;
      }

      if (check == 1) {
        brt = brt + 0.005;
      } else if (check == 0) {
        brt = brt - 0.001;
      }

      //particles1[i].follow(flowfield1);
      //particles1[i].update();
      //particles1[i].edges();
      //particles1[i].show();
    }

    // fr.html(floor(frameRate()));
    hu += colorInc;
    if (hu > 359) {
      hu = 0;
    }
  }
}
function mousePressed() {
  p = p * -1;
}
// Save art as jpg.
function keyTyped() {
  if (key === "s") {
    save("SiteofWebs.jpg");
  }
}
