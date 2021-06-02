var hr, min, sec, hrAngle , minAngle, secAngle;

function setup() {
  createCanvas(800,800);
  
  //createSprite(400, 200, 50, 50);
  
  angleMode(DEGREES) ;
}

function draw() {
  background(0); 
  hr = hour();
  min = minute();
  sec = second();
  hrAngle = map(hr%12,0,12,0,360);
  minAngle = map(min,0,60,0,360);
  secAngle = map(sec,0,60,0,360);
  translate(400,400);
  rotate(-90);
  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop()
  push();
  rotate(minAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,160,0);
  pop()
  push();
  rotate(secAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop()
  //point(0,0);
  stroke(0,255,0);
  strokeWeight(7);
  noFill();
  arc(0,0,550,550,0,secAngle);
  
  stroke(0,0,255);
  strokeWeight(7);
  noFill();
  arc(0,0,500,500,0,minAngle);

  stroke(255,0,0);
  strokeWeight(7);
  noFill();
  arc(0,0,450,450,0,hrAngle);
  drawSprites();
}