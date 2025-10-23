//my fat cat generator

//variables
let GenerateCreature = false;
let creatureWidth;
let creatureHeight;
let creatureColor;
let creatureEyeColor;
let creatureEarHeight;
let creatureChestFluffColor;
let creatureTailSize;
let creatureInsideEarColor;
angleMode(DEGREES);

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(251, 224, 234);
  translate(width / 2, height / 2);
  fill(0);
  strokeWeight(2);
  textSize(30);
  text("Click to generate a new cat!", -400, 480);

  //my custom function creature generator
  if (GenerateCreature) {
    CreatureGenerator(creatureWidth, creatureHeight, creatureColor, creatureEyeColor, creatureEarHeight, creatureChestFluffColor, creatureTailSize, creatureInsideEarColor);
  }
}

  function CreatureGenerator (creatureWidth, creatureHeight, creatureColor, creatureEyeColor, creatureEarHeight, creatureChestFluffColor, creatureTailSize, creatureInsideEarColor) {

    //tail
    fill(creatureColor);
    push();
    translate(-creatureWidth / 2, creatureHeight / 8);
    rotate(-10);
    ellipse(-50, 70, 40, creatureTailSize);
    pop();
    
    //back legs
    fill(creatureColor);
    ellipse(-creatureWidth / 2.5, creatureHeight / 5, creatureWidth / 3.5, creatureHeight / 2);
    ellipse(creatureWidth / 2.5, creatureHeight / 5, creatureWidth / 3.5, creatureHeight / 2);

    //back paws
    fill(creatureColor);
    ellipse(-creatureWidth / 3, creatureHeight / 2.2, creatureWidth / 4, creatureHeight / 8);
    ellipse(creatureWidth / 3, creatureHeight / 2.2, creatureWidth / 4, creatureHeight / 8);

    //body
    fill(creatureColor);
    ellipse(0, 0, creatureWidth, creatureHeight);

    //ears
    fill(creatureColor);

    // Left ear
    push();
    rotate(-0.3);
    translate(20, -creatureHeight/2 - 45); 
    triangle( -40, 0,0, -creatureEarHeight * 50, 50, 0);
    pop();

    // Right ear
    push();
    rotate(0.3);
    translate(-30, -creatureHeight/2 - 45);
    triangle(-40, 0, 0, -creatureEarHeight * 50, 50, 0);
    pop();

    //small pink triangles inside of ears
    fill(creatureInsideEarColor);

    // Left ear inner triangle  
    push();
    rotate(-0.3);
    translate(20, -creatureHeight/2 - 45);
    triangle(-30, 0, 0, -creatureEarHeight * 35, 40, 0);
    pop();

    // Right ear inner triangle
    push();
    rotate(0.3);
    translate(-30, -creatureHeight/2 - 45);
    triangle(-30, 0, 0, -creatureEarHeight * 35, 40, 0);
    pop();

    //chest fluff
    push();
    fill(creatureChestFluffColor);
    translate(0, -70);
    ellipse(0, creatureHeight / 3, creatureWidth / 2, creatureHeight / 1.5);
    pop();

    //head
    fill(creatureColor);
    ellipse(0, -creatureHeight / 2 + creatureHeight / 16, 230);

    //eyes
    fill(creatureEyeColor);
    ellipse(-creatureWidth / 8, -creatureHeight / 2 + creatureHeight / 16, 30);
    ellipse(creatureWidth / 8, -creatureHeight / 2 + creatureHeight / 16, 30);

    //pupils
    fill(0)
    ellipse(-creatureWidth / 8, -creatureHeight / 2 + creatureHeight / 16, 10, 20);
    ellipse(creatureWidth / 8, -creatureHeight / 2 + creatureHeight / 16, 10, 20);

    //nose
    fill(0);
    triangle (0, -creatureHeight / 2 + creatureHeight / 5.5,  -15, -creatureHeight / 2 + creatureHeight / 7,  15, -creatureHeight / 2 + creatureHeight / 7);

    //mouth
    push();
    textSize(50);
    rotate(PI / 2);
    textFont("trebuchet MS");
    textAlign(CENTER, CENTER);
    text("3", -creatureHeight / 4, 4);
    pop();

    //front paws
    fill(creatureColor);
    ellipse(-creatureWidth / 6, creatureHeight / 2.2, creatureWidth / 4, creatureHeight / 8);
    ellipse(creatureWidth / 6, creatureHeight / 2.2, creatureWidth / 4, creatureHeight / 8);

  }
    //mouse pressed to generate new creature function
    function mousePressed() {
    GenerateCreature = true;
    creatureWidth = random(200, 500);
    creatureHeight = random(200, 500);
    creatureColor = color(random(255), random(255), random(255));
    creatureEyeColor = color(random(255), random(255), random(255));
    creatureEarHeight = random(1.5, 3);
    creatureChestFluffColor = color(random(255), random(255), random(255));
    creatureTailSize = random(50, 350);
    creatureInsideEarColor = color(random(255), random(255), random(255));
    }

