function draw() {
  draw2();
}
function draw2() {
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

      // zoff += zOffInc*randomRange(0.01,1);//salarchange
      zoff += zOffInc;

      console.log("zOffInc: ");
      console.log(zOffInc);
      console.log("numbPart: ");
      console.log(numbPart);
      console.log("zoff: ");

      console.log(zoff);
    }

    for (var i = 0; i < particles.length; i++) {
      particles[i].follow(flowfield);
      particles[i].update();
      particles[i].edges();
      particles[i].show();
    }

    // fr.html(floor(frameRate()));
    hu += colorInc;
    if (hu > 359) {
      hu = 0;
    }
  }
}
