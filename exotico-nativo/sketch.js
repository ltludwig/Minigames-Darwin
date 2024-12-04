// Click and Drag an object

let shapes = [];
let shape;
let cartelas = [];
let success = false;
let rodada;
let cartas = [];
let order = [0,1,2,3];
let gabarito = [1,1,0,1,0,0];

//EXOTICO --> 0
//NATIVO --> 1

let botao = true;
let placar = 0;
let titulo;
let final;
let clicado =false;
let myFont;
let botao_dir = false;
let botao_esq = false;
let c;
let fase = 0;

function preload(){
    for(let i = 0; i<6; i++){
        cartas[i] = loadImage("assets/0"+i+".png");
     }

     cartelas[0] =  loadImage("assets/maracuja_cartela.png");
     cartelas[1] =  loadImage("assets/abacaxi_cartela.png");
     cartelas[2] =  loadImage("assets/banana_cartela.png");
     cartelas[3] =  loadImage("assets/caju_cartela.png");
     cartelas[4] =  loadImage("assets/jaca_cartela.png");
     cartelas[5] =  loadImage("assets/laranja_cartela.png");

     titulo =  loadImage("assets/titulo.png");
     maozinha_dir =  loadImage("assets/maozinha-dir.png");
     maozinha_esq =  loadImage("assets/maozinha-esq.png");
     final =  loadImage("assets/final-14.png");
     myFont = loadFont('fonts/BebasNeue_Bold.otf');
     effect = loadSound('assets/exotic1.ogg');
     effect2 = loadSound('assets/exotic2.ogg');





}

function setup() {

  var canvas = createCanvas(1200, 800);
  imageMode(CORNER);
  canvas.parent('sketch-holder');
  textFont(myFont);
  textSize(40);
  rodada = 5;

  shapes[0] = new Draggable(cartas[0],width/2, 200, 380, 480,0,1);
  shapes[1] = new Draggable(cartas[1],width/2, 200, 380, 480,1,1);
  shapes[2] = new Draggable(cartas[2],width/2, 200, 380, 480,2,0);
  shapes[3] = new Draggable(cartas[3],width/2, 200, 380, 480,3,1);
  shapes[4] = new Draggable(cartas[4],width/2, 200, 380, 480,4,0);
  shapes[5] = new Draggable(cartas[5],width/2, 200, 380, 480,5,0);


  angleMode(DEGREES);
}

function draw() {

  background(153, 130, 72);
  imageMode(CENTER);
  image(titulo,width/2,120,1257/1.5,109/1.5);
  image(maozinha_dir,width-160,400);
  image(maozinha_esq,160,400);
  imageMode(CORNER);


  if(rodada < 0){
  imageMode(CENTER);  
  textAlign(CENTER);
  image(final,width/2,400);
  fill(0,90,167);
  noStroke();
  text("Você acertou "+ placar +" das 6 frutas", 500, 380, 200, 500)
  fill(0,190,90);
  text("Recomeçar", 500, 500, 200, 500)

  imageMode(CORNER);

    if(clicado){
      rodada = 5;
      placar = 0;

      shapes[0] = new Draggable(cartas[0],width/2, 200, 380, 480,0,1);
      shapes[1] = new Draggable(cartas[1],width/2, 200, 380, 480,1,1);
      shapes[2] = new Draggable(cartas[2],width/2, 200, 380, 480,2,0);
      shapes[3] = new Draggable(cartas[3],width/2, 200, 380, 480,3,1);
      shapes[4] = new Draggable(cartas[4],width/2, 200, 380, 480,4,0);
      shapes[5] = new Draggable(cartas[5],width/2, 200, 380, 480,5,0);
    }



 }

 else{

  shapes[0].show();
  shapes[1].show();
  shapes[2].show();
  shapes[3].show();
  shapes[4].show();
  shapes[5].show();

 }

}

function mouseClicked(){
    clicado = true;
}

function keyPressed(){

  print("rodada: "+rodada);
  print("placar: "+placar);
}





