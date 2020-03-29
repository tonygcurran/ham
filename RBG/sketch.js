
function setup() {
noCursor();
  createCanvas(windowWidth, windowHeight);
  //background(random(red,green,blue));
  x = random(5,height/4);
  y = random(5,height/4);
  gx1 = random(0, width)
  gy1 = random(0, height);
  gx2 = random(0, width)
  gy2 = random(0, height);
  gx3 = random(0, width)
  gy3 = random(0, height);
  gx4 = random(0, width)
  gy4 = random(0, height);
  gx5 = random(0, width)
  gy5 = random(0, height);
  gx6 = random(0, width)
  gy6 = random(0, height);
  gx7 = random(0, width)
  gy7 = random(0, height);
  gx8 = random(0, width)
  gy8 = random(0, height);
  gx9 = random(0, width)
  gy9 = random(0, height);
  gx10 = random(0, width)
  gy10 = random(0, height);
  gx11 = random(0, width)
  gy11 = random(0, height);
  gx12 = random(0, width)
  gy12 = random(0, height);
  
  bx1 = random(0, width)
  by1 = random(0, height);
  bx2 = random(0, width)
  by2 = random(0, height);
  bx3 = random(0, width)
  by3 = random(0, height);
  bx4 = random(0, width)
  by4 = random(0, height);
  bx5 = random(0, width)
  by5 = random(0, height);
  bx6 = random(0, width)
  by6 = random(0, height);
  bx7 = random(0, width)
  by7 = random(0, height);
  bx8 = random(0, width)
  by8 = random(0, height);
  bx9 = random(0, width)
  by9 = random(0, height);
  bx10 = random(0, width)
  by10 = random(0, height);
  bx11 = random(0, width)
  by11 = random(0, height);
  bx12 = random(0, width)
  by12 = random(0, height);
  
}

function draw() {
  
  x += random(-1,1);
  y += random(-1,1);
  

  background(0,255,0);

  strokeWeight(y);
  
  

stroke(0,0,255);
  strokeWeight(y);
  noFill();
beginShape();
curveVertex(bx1, by1);
curveVertex(bx2, by2);
curveVertex(bx3, by3);
curveVertex(bx4, by4);
curveVertex(bx5, by5);
curveVertex(bx6, by6);
curveVertex(bx7, by7);
curveVertex(bx8, by8);
curveVertex(bx9, by9);
curveVertex(bx10, by10);
curveVertex(bx11, by11);
curveVertex(bx12, by12);
endShape();

stroke(255,0,0);
strokeWeight(x);

noFill();
beginShape();
curveVertex(gx1, gy1);
curveVertex(gx2, gy2);
curveVertex(gx3, gy3);
curveVertex(gx4, gy4);
curveVertex(gx5, gy5);
curveVertex(gx6, gy6);
curveVertex(gx7, gy7);
curveVertex(gx8, gy8);
curveVertex(gx9, gy9);
curveVertex(gx10, gy10);
curveVertex(gx11, gy11);
curveVertex(gx12, gy12);
endShape();
  
  
  
  gx1 += random(-5, 5);
  gy1 += random(-5, 5);
  gx2 += random(-5, 5);
  gy2 += random(-5, 5);
  gx3 += random(-5, 5);
  gy3 += random(-5, 5);
  gx4 += random(-5, 5);
  gy4 += random(-5, 5);
  gx5 += random(-5, 5);
  gy5 += random(-5, 5);
  gx6 += random(-5, 5);
  gy6 += random(-5, 5);
  gx7 += random(-5, 5);
  gy7 += random(-5, 5);
  gx8 += random(-5, 5);
  gy8 += random(-5, 5);
  gx9 += random(-5, 5);
  gy9 += random(-5, 5);
  gx10 += random(-5, 5);
  gy10 += random(-5, 5);
  gx11 += random(-5, 5);
  gy11 += random(-5, 5);
  gx12 += random(-5, 5);
  gy12 += random(-5, 5);
  
  bx1 += random(-5, 5);
  by1 += random(-5, 5);
  bx2 += random(-5, 5);
  by2 += random(-5, 5);
  bx3 += random(-5, 5);
  by3 += random(-5, 5);
  bx4 += random(-5, 5);
  by4 += random(-5, 5);
  bx5 += random(-5, 5);
  by5 += random(-5, 5);
  bx6 += random(-5, 5);
  by6 += random(-5, 5);
  bx7 += random(-5, 5);
  by7 += random(-5, 5);
  bx8 += random(-5, 5);
  by8 += random(-5, 5);
  bx9 += random(-5, 5);
  by9 += random(-5, 5);
  bx10 += random(-5, 5);
  by10 += random(-5, 5);
  bx11 += random(-5, 5);
  by11 += random(-5, 5);
  bx12 += random(-5, 5);
  by12 += random(-5, 5);


  
  

}

function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
  }
