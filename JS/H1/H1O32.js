var R; var G; var B;

function setup() {
  var myCanvas = createCanvas(451,451);
  myCanvas.parent('processing');
  frameRate(5);
}

function draw() {
  for (var rij = 0;rij < 450;rij += 50) {
      R = random(0,255);
      G = random(0,255);
      B = random(0,255);
    for (var kolom = 0;kolom < 450;kolom += 50) {
      fill(R,G,B);
      rect(kolom,rij,50,50);
    }
  }
}