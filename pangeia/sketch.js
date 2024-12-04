let tolerancia = 50;
let modo = 0;
let venceu1 = false;
let venceu2 = false;

let teste;

let taxa = 0.6;
let counter = 0;
let contador =0;

let shape1;
let shape2;

let back1;
let back2;

let botao = true;

let imagem1;
let imagem2;

let continentes = [];

let posicaoinicial = [[0,0],[0,0],[0,128],[0,236],[0,399],[0,131],[0,93],[600,84]];


let tamanhos = [[255,316],[143,219],[142,128],[245,236],[360,399],[154,131],[111,93],[122,84],
                [226,308],[132,206],[178,113],[217,235],[384,334],[145,142],[87,107],[118,81]
                ];


let gabaritos1 = [[345,257],[373,435],[532,299],[501,375],[601,236],[724,471],[651,390],[509,583],
                  [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]
                  ];



let gabaritos2 = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
                  [442,286],[482,438],[562,351],[527,391],[492,170],[580,528],[604, 477],[539,528]
                  ];


let certos = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let allTrue = false;

let pangeia;
let enunciado;
let terra_atual;
let embaralhar;
let resolver;

let pangeiabotao;
let terraatualbotao;

let imagens = [];

let parabens1;
let parabens2;

let myFont;

let played = false;

var sound = new Howl({
   src: ['assets/pangeiaOST.ogg'],
   autoplay: true,
   loop: true,
   onend: function() {
     console.log('Finished!');
   }
 });




function preload() {
  back1 = loadImage('assets/fundo1.png');
  back2 = loadImage('assets/fundo2.png');
  parabens1 = loadImage('assets/parabens1.png');
  parabens2 =loadImage('assets/parabens2.png');
  myFont = loadFont('assets/BebasNeueBold.otf');

  sound1 = loadSound('assets/colocarContinente1.ogg');
  sound2 = loadSound('assets/congratulations.ogg');
  sound3 = loadSound('assets/embaralhar.ogg');
  sound4 = loadSound('assets/pangeia.ogg');
  sound5 = loadSound('assets/pangeiaOST.ogg');
  sound6 = loadSound('assets/pegarContinente1.ogg');
  sound7 = loadSound('assets/resolver.ogg');
  sound8 = loadSound('assets/terraAtual.ogg');
  //sound10 = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  //sound11 = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  //sound12 = loadSound('assets/lucky_dragons_-_power_melody.mp3');
  //sound13 = loadSound('assets/lucky_dragons_-_power_melody.mp3');
 


}


function setup() {
  createCanvas(1200, 800);
  //sound5.play();


  for (let j = 0; j < 16; j++) {
    imagens[j] = loadImage("assets/pangeia-" + j + ".png");
  } 

  for (let i = 0; i < 16; i++) {
    if(i<8){
    continentes.push(new Draggable(imagens[i],random(100,width-200),random(100,height-200),tamanhos[i][0]*taxa,tamanhos[i][1]*taxa,
    gabaritos1[i][0],gabaritos1[i][1],gabaritos2[i][0],gabaritos2[i][1],0));
    //print(posicaoinicial[random(7)][1]);
  }
  else{
    continentes.push(new Draggable(imagens[i],random(100,width-200),random(100,height-200),tamanhos[i][0]*taxa,tamanhos[i][1]*taxa,
    gabaritos1[i][0],gabaritos1[i][1],gabaritos2[i][0],gabaritos2[i][1],1));
    }
  }


  pangeiabotao = select('#pangeia');
  pangeiabotao.mousePressed(virarpangeia);

  terraatualbotao = select('#terra_atual');
  terraatualbotao.mousePressed(virarterra);


  // e = createP('E A');
  // e.position(555, 5);

  // terra_atual = createA('#','TERRA ATUAL');
  // terra_atual.position(600, 40);
  // terra_atual.mousePressed(virarterra);






  terra_atual = select('#embaralhar');
  terra_atual.mousePressed(sorteio);

  resolver = select('#resolver');
  resolver.mousePressed(resolve);
  
}

function draw() {
   //print(certos)
  //MODO "TERRA ATUAL"



  if(modo == 0){

    background("#63CAE1");
    terraatualbotao.style('color', '#89371C');
    pangeiabotao.style('color', 'white');
    imageMode(CENTER);
    fill(255);
    noStroke();
    tint(255,255,255,255);
    image(back1,width/2,height/2,910*taxa,893*taxa);
    imageMode(CORNER);
  
    for (let i = 0; i < continentes.length; i++) {
      continentes[i].over();
      continentes[i].update();
      continentes[i].show1();
      continentes[i].check();
    }

  if(allTrue == true){
    imageMode(CENTER);
    tint(255,255,255,255);
    image(parabens1,width/2,height/2);
    if(sound2.isPlaying()==false){
      if(played ==false){
        sound2.play();
        played = true;
   }
  }
    }
    else{
played = false;

    }

  }

//MODO "PANGEIA"
else if(modo == 1){
    background("#63CAE1");
    pangeiabotao.style('color', '#89371C');
    terraatualbotao.style('color', 'white');
    imageMode(CENTER);
    fill(255);
    noStroke();
    tint(255,255,255,255);
    image(back2,width/2,height/2,911*taxa,893*taxa);
    imageMode(CORNER);

    for (let i = 0; i < continentes.length; i++) {
      continentes[i].over();
      continentes[i].update();
      continentes[i].show2();
      continentes[i].check();
    }

  if(allTrue == true){
    imageMode(CENTER);
    tint(255,255,255,255);
    image(parabens2,width/2,height/2);
    if(sound2.isPlaying()==false){
      if(played ==false){
        sound2.play();
        played = true;
   }
  }


    }

    else{
played = false;
      
    }

}
  creatingScore();
  checkWon1();
  //checkWon2();
  fill('#005BA7');
  noStroke();
  textFont(myFont);
  textAlign(CENTER);
  textSize(36);
  //text('MEXA AS PEÇAS Abaixo PARA RECRIAR A', width/2, 30);

}



function mousePressed() {
    for (let i = 0; i < continentes.length; i++) {
  continentes[i].pressed();
  continentes[i].pressed();
    }

    
}

function mouseReleased() {
   for (let i = 0; i < continentes.length; i++) {
  continentes[i].released();
  continentes[i].released();
  }

}

function creatingScore(){
  for(let i = 0; i < continentes.length; i++){
    if(continentes[i].certo){
      certos[i] = true;
    }
    else {
      certos[i]=false;
    }
  }
}

function checkWon1(contador){
  contador = 0;
  for(let i = 0; i < certos.length; i++){
      if(certos[i]==true){
        contador ++;
      if(contador == 8){
    allTrue = true;

  }
  else{
allTrue = false;
      }
    }
  }
}

function virarpangeia() {
  sound4.play();
for (let i = 0; i < continentes.length; i++) {
    certos[i]=false;
    continentes[i].sorteio1();
  }
   modo = 1;
   allTrue = false;

}

function virarterra() {
  sound8.play();
   for (let i = 0; i < continentes.length; i++) {
    certos[i]=false;
    continentes[i].sorteio1();
  }
    modo = 0;
    allTrue = false;
}


function sorteio() {
  sound3.play();
  if(modo ==0){
  for (let i = 0; i < continentes.length; i++) {
    certos[i]=false;
    continentes[i].sorteio1();
  }
   modo = 0;
   allTrue = false;
 }
else {
  for (let i = 0; i < continentes.length; i++) {
    certos[i]=false;
    continentes[i].sorteio1();
  }
   modo = 1;
   allTrue = false;

}

}


function resolve(){
  if(modo ==0){
     for (let i = 0; i < continentes.length; i++) {
      continentes[i].resolve1();
  }
}
else{
 for (let i = 0; i < continentes.length; i++) {
      continentes[i].resolve2();
  }

}

}

function soltaAudio(){



  }

  function keyPressed(){

      for(let i=0;i<continentes.length;i++){
  print("Continente: "+i)
  print("x: "+continentes[i].x);
  print("y: "+continentes[i].y);

}
  }




 // function telaVencedor(){
 //   if(allTrue == true){
 //   modo == 1;
 // }

 // }





