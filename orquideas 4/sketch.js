let x = 600;
let y =400;
let easing = 0.05;
var circle;

let registro = [20,8,5,10,15,10];
let posse = 0;
let sorteio1 = [20,39,-10,20,-30,30,30,40,20,-30,10,0,0,-1,23,-31,3,8,40,20,30,10,10,30,-10,20,-30,30,30,40,20,30,10,10,30,-10,20,-30,30,30,40,20,30,10];
let sorteio2 = [-4,2,5,-2,1,-3,2,4,2,3,-1,2,5,-2,1,-3,2,4,2,3,-1,-4,2,5,-2,1,-3,2,4,2,3,-1,2,5,-2,1,-3,2,4,2,3,-1,];
let play = false;
let intro;
let intro2;

let x1 = 150;
let x2 = 700;
let x3 = 1100;
let x4 = 950;
let x5 = 610;
let x6 = 230;
let click = false;


let collect;
let entrar;
let vitoria;


let myFont;

let posse0 = 0; 
let posse1 = 0;
let posse2 = 0;  
let posse3 = 0;
let posse4 = 0;
let posse5 = 0;

let conta;

x7 = x;
y7 = y;

let onOff;

let fase =  0;

function preload(){
  
  loadBorboleta();
  loadOrq1();
  loadOrq2();
  loadOrq3();
  loadOrq4();
  loadOrq5();
  loadOrq6();
  
  intro = loadImage('assets/intro.png');
  intro2 = loadImage('assets/intro2.png');
  fim = loadImage('assets/fim.png');
  //polen = loadImage('assets/polen.png');

  myFont = loadFont('assets/BebasNeue_Bold.otf');

  collect = loadSound('assets/Collect_Mariposa_05.ogg');
  entrar =  loadSound('assets/entrar.ogg');
  vitoria = loadSound('assets/Victory_Mariposa_01.ogg');


}

function setup() {
  createCanvas(1200, 800); 
  onOff=true;

}

function draw() { 
  background(235,222,193);

  animation(orq1, x1,150);
  animation(orq2, x2,100);
  animation(orq3, x3,330);
  animation(orq4, x4,650);
  animation(orq5, x5,650);
  animation(orq6, x6,630);
 
  //print("X:"+mouseX+"//"+"Y:"+mouseY);
  tint(255,255);
  fill(255,255,255);
  noStroke();


  if(fase == 0){
    imageMode(CENTER);

    if(mouseX>480 && mouseX<730 && mouseY>280 && mouseY<520){
      if(entrar.isPlaying()==false){
          entrar.play();
        }
          image(intro2,width/2,height/2,250,250);
          cursor(HAND);
          if(mouseIsPressed){
          fase = 1;
        }

    }
    else{
        image(intro,width/2,height/2,250,250);
        cursor(ARROW);
    }
 

  }


  else if(fase == 1){  
   if(play == true){
     circle.goToFrame(0);
   }
   else{
     circle.goToFrame(circle.getLastFrame());
   }
  
 desenharPlacar();

  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;
  
  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;
  //ellipse(x, y, 66, 66);
  
  
  
   //desenharPolen();
   //print("Registro:"+registro);
   //print("Posse:"+posse);

   if(posse==68){
     fase=2;
   }
  
  
  //orquidea 1:
  if(x >80 && x<250 && y>40 && y<200){
    if(collect.isPlaying()==false){
      collect.play();
    }
    noStroke();
    fill(235,222,193,180);
    rect(0,0,400,400);
    x1 =  x1 + sin(frameCount) * 1.5;
    if(registro[0]>0){
    registro[0] =  registro[0] -1;
    posse++;
    posse0++;
    }
  }


  //orquidea 2:
  if(x >670 && x<770 && y>40 && y<230){
    if(collect.isPlaying()==false){
      collect.play();
    }
    noStroke();
    fill(235,222,193,180);
    rect(650,0,150,260);
    x2 =  x2 + sin(frameCount) * 1.5;
    if(registro[1]>0){
    registro[1] =  registro[1] -1;
    posse++;
    posse1++;
    }
  }

  //orquidea 3:
  if(x >1028 && x<1175 && y>210 && y<350){
    if(collect.isPlaying()==false){
      collect.play();
    }
    noStroke();
    fill(235,222,193,180);
    rect(900,100,300,400);
    x3 =  x3 + sin(frameCount) * 1.5;
    if(registro[2]>0){
    registro[2] =  registro[2] -1;
    posse++;
    posse2++;
    }
  }


   //orquidea 4:
  if(x >850 && x<1050 && y>480 && y<700){
    if(collect.isPlaying()==false){
      collect.play();
    }
    noStroke();
    fill(235,222,193,180);
    rect(850,480,200,300);
    x4 =  x4 + sin(frameCount) * 1.5;
    if(registro[3]>0){
    registro[3] =  registro[3] -1;
    posse++;
    posse3++;
    }
  }

    //orquidea 5:
  if(x >500 && x<630 && y>471 && y<700){
    if(collect.isPlaying()==false){
      collect.play();
    }
    noStroke();
    fill(235,222,193,180);
    rect(500,471,250,300);
    x5 =  x5 + sin(frameCount) * 1.5;
    if(registro[4]>0){
    registro[4] =  registro[4] -1;
    posse++;
    posse4++;
    }
  }

  //orquidea 6:
  if(x >147 && x<240 && y>460 && y<550){
    if(collect.isPlaying()==false){
      collect.play();
    }
    noStroke();
    fill(235,222,193,180);
    rect(130,430,250,400);
    x6 =  x6 + sin(frameCount) * 1.5;
    if(registro[5]>0){
    registro[5] =  registro[5] -1;
    posse++;
    posse5++;
    }
  }


  tint(255,255);
  animation(circle, x, y);
  noStroke();


  for(let i=0;i<posse0;i++){
    fill(255,0,130);
    ellipse(x+random(-sorteio1[i],sorteio1[i]),y+random(-sorteio1[i],sorteio1[i]),5,5);
  }

    for(let i=0;i<posse1;i++){
       fill(151,55,90);
     ellipse(x+random(-sorteio1[i],sorteio1[i]),y+random(-sorteio1[i],sorteio1[i]),5,5);
  }

     for(let i=0;i<posse2;i++){
       fill(255,0,130);
     ellipse(x+random(-sorteio1[i],sorteio1[i]),y+random(-sorteio1[i],sorteio1[i]),5,5);
  }

       for(let i=0;i<posse3;i++){
       fill(255,118,0);
      ellipse(x+random(-sorteio1[i],sorteio1[i]),y+random(-sorteio1[i],sorteio1[i]),5,5);
  }

       for(let i=0;i<posse4;i++){
       fill(214,154);
       ellipse(x+random(-sorteio1[i],sorteio1[i]),y+random(-sorteio1[i],sorteio1[i]),5,5);
  }

       for(let i=0;i<posse4;i++){
       fill(133,0,34);
       ellipse(x+random(-sorteio1[i],sorteio1[i]),y+random(-sorteio1[i],sorteio1[i]),5,5);
  }


 
  if(movedX || movedY){
  if(play==false){
    play = true;
  }
  else{
    play = false;
  }
  }
  }

  else if(fase==2){
    imageMode(CENTER);
    image(fim,width/2,height/2,350,350);
    print("GANHOU!");

    if(vitoria.isPlaying()==false){
    vitoria.play();
  }

    if(mouseIsPressed){
      fase=0;
      posse = 0;
      posse0 = 0;
      posse1 = 0;
      posse2 = 0;
      posse3 = 0;
      posse4 = 0;
      posse5 = 0;
      registro = [20,8,5,10,15,10];
      x = 600;
      y =400;
    }
  }

}

function desenharPlacar(){
  textAlign(CENTER);
  fill('rgb(255,118,0)');
  textFont(myFont);
  textSize(30);
  conta = 68 - posse;
  larg = map(posse,0,68,0,160)
  text("Pólen coletado: "+posse,600,370);
  text("Pólen restante: "+conta,600,400);


  rect(520,420,larg,20);

  stroke('rgb(255,118,0)');
  strokeWeight(3);
  noFill(); 
  rect(520,420,160,20);
}



function desenharPolen(){
  noStroke();
  for(let i=0;i<registro.length; i++){
    if(i==0){
      for(let j=0;j<registro[i]; j++){
        ellipse(150+j*sorteio1[j],120+j+sorteio2[j],5,5);
      }
    }
    else if(i==1){
    for(let j=0;j<registro[i]; j++){
        ellipse(730+j*sorteio1[j],150+j+sorteio2[j],5,5);
      }
    }
     else if(i==2){
    for(let j=0;j<registro[i]; j++){
        ellipse(1060+j*sorteio1[j],278+j+sorteio2[j],5,5);
      }
    }
    else if(i==3){
    for(let j=0;j<registro[i]; j++){
        ellipse(930+j*sorteio1[j],570+j+sorteio2[j],5,5);
      }
    }
    else if(i==4){
    for(let j=0;j<registro[i]; j++){
        ellipse(575+j*sorteio1[j],525+j+sorteio2[j],5,5);
      }
    }
    else if(i==5){
    for(let j=0;j<registro[i]; j++){
        ellipse(210+j*sorteio1[j],477+j+sorteio2[j],5,5);
      }
    }    
  }
  
}

 // function mousePressed(){
 //  if(fase==0){
 //    fase=1;
 //    }
 //  else{
 //    fase=0;
 //  } 

 // }


 function loadBorboleta(){

 circle = loadAnimation(
 'assets/borboleta-02_00012.png',            
 'assets/borboleta-02_00013.png',
 'assets/borboleta-02_00014.png',     
 'assets/borboleta-02_00015.png',    
 'assets/borboleta-02_00016.png', 
  'assets/borboleta-02_00017.png',
   'assets/borboleta-02_00018.png', 
    'assets/borboleta-02_00019.png'      
    );
  circle.looping = false;


 }


 function loadOrq1(){

 orq1 = loadAnimation(
 'assets/orq1/orq1_00000.png',
 'assets/orq1/orq1_00001.png',
 'assets/orq1/orq1_00002.png',
 'assets/orq1/orq1_00003.png',  
 'assets/orq1/orq1_00004.png',
 'assets/orq1/orq1_00005.png',  
 'assets/orq1/orq1_00006.png',
 'assets/orq1/orq1_00007.png',  
 'assets/orq1/orq1_00008.png',
 'assets/orq1/orq1_00009.png',
 'assets/orq1/orq1_00010.png',
 'assets/orq1/orq1_00011.png', 
 'assets/orq1/orq1_00012.png',
 'assets/orq1/orq1_00013.png',
 'assets/orq1/orq1_00014.png', 
 'assets/orq1/orq1_00015.png',
 'assets/orq1/orq1_00016.png', 
 'assets/orq1/orq1_00017.png', 
 'assets/orq1/orq1_00018.png',
 'assets/orq1/orq1_00019.png',
 'assets/orq1/orq1_00020.png',
 'assets/orq1/orq1_00021.png', 
 'assets/orq1/orq1_00022.png',
 'assets/orq1/orq1_00023.png',
 'assets/orq1/orq1_00024.png', 
 'assets/orq1/orq1_00025.png',
 'assets/orq1/orq1_00026.png', 
 'assets/orq1/orq1_00027.png', 
 'assets/orq1/orq1_00028.png',
 'assets/orq1/orq1_00029.png',
 'assets/orq1/orq1_00030.png',
 'assets/orq1/orq1_00031.png', 
 'assets/orq1/orq1_00032.png',
 'assets/orq1/orq1_00033.png',
 'assets/orq1/orq1_00034.png'
    );

  
 }

  function loadOrq2(){

 orq2 = loadAnimation(
 'assets/orq2/orq1_00000.png',
 'assets/orq2/orq1_00001.png',
 'assets/orq2/orq1_00002.png',
 'assets/orq2/orq1_00003.png',  
 'assets/orq2/orq1_00004.png',
 'assets/orq2/orq1_00005.png',  
 'assets/orq2/orq1_00006.png',
 'assets/orq2/orq1_00007.png',  
 'assets/orq2/orq1_00008.png',
 'assets/orq2/orq1_00009.png',
 'assets/orq2/orq1_00010.png',
 'assets/orq2/orq1_00011.png', 
 'assets/orq2/orq1_00012.png',
 'assets/orq2/orq1_00013.png',
 'assets/orq2/orq1_00014.png', 
 'assets/orq2/orq1_00015.png',
 'assets/orq2/orq1_00016.png', 
 'assets/orq2/orq1_00017.png', 
 'assets/orq2/orq1_00018.png',
 'assets/orq2/orq1_00019.png',
 'assets/orq2/orq1_00020.png',
 'assets/orq2/orq1_00021.png', 
 'assets/orq2/orq1_00022.png',
 'assets/orq2/orq1_00023.png',
 'assets/orq2/orq1_00024.png', 
 'assets/orq2/orq1_00025.png',
 'assets/orq2/orq1_00026.png', 
 'assets/orq2/orq1_00027.png', 
 'assets/orq2/orq1_00028.png',
 'assets/orq2/orq1_00029.png',
 'assets/orq2/orq1_00030.png',
 'assets/orq2/orq1_00031.png', 
 'assets/orq2/orq1_00032.png',
 'assets/orq2/orq1_00033.png',
 'assets/orq2/orq1_00034.png'
    );

  
 }

  function loadOrq3(){

 orq3 = loadAnimation(
 'assets/orq3/orq1_00000.png',
 'assets/orq3/orq1_00001.png',
 'assets/orq3/orq1_00002.png',
 'assets/orq3/orq1_00003.png',  
 'assets/orq3/orq1_00004.png',
 'assets/orq3/orq1_00005.png',  
 'assets/orq3/orq1_00006.png',
 'assets/orq3/orq1_00007.png',  
 'assets/orq3/orq1_00008.png',
 'assets/orq3/orq1_00009.png',
 'assets/orq3/orq1_00010.png',
 'assets/orq3/orq1_00011.png', 
 'assets/orq3/orq1_00012.png',
 'assets/orq3/orq1_00013.png',
 'assets/orq3/orq1_00014.png', 
 'assets/orq3/orq1_00015.png',
 'assets/orq3/orq1_00016.png', 
 'assets/orq3/orq1_00017.png', 
 'assets/orq3/orq1_00018.png',
 'assets/orq3/orq1_00019.png',
 'assets/orq3/orq1_00020.png',
 'assets/orq3/orq1_00021.png', 
 'assets/orq3/orq1_00022.png',
 'assets/orq3/orq1_00023.png',
 'assets/orq3/orq1_00024.png', 
 'assets/orq3/orq1_00025.png',
 'assets/orq3/orq1_00026.png', 
 'assets/orq3/orq1_00027.png', 
 'assets/orq3/orq1_00028.png',
 'assets/orq3/orq1_00029.png',
 'assets/orq3/orq1_00030.png',
 'assets/orq3/orq1_00031.png', 
 'assets/orq3/orq1_00032.png',
 'assets/orq3/orq1_00033.png',
 'assets/orq3/orq1_00034.png'
    );

  
 }

  function loadOrq4(){

 orq4 = loadAnimation(
 'assets/orq4/orq1_00000.png',
 'assets/orq4/orq1_00001.png',
 'assets/orq4/orq1_00002.png',
 'assets/orq4/orq1_00003.png',  
 'assets/orq4/orq1_00004.png',
 'assets/orq4/orq1_00005.png',  
 'assets/orq4/orq1_00006.png',
 'assets/orq4/orq1_00007.png',  
 'assets/orq4/orq1_00008.png',
 'assets/orq4/orq1_00009.png',
 'assets/orq4/orq1_00010.png',
 'assets/orq4/orq1_00011.png', 
 'assets/orq4/orq1_00012.png',
 'assets/orq4/orq1_00013.png',
 'assets/orq4/orq1_00014.png', 
 'assets/orq4/orq1_00015.png',
 'assets/orq4/orq1_00016.png', 
 'assets/orq4/orq1_00017.png', 
 'assets/orq4/orq1_00018.png',
 'assets/orq4/orq1_00019.png',
 'assets/orq4/orq1_00020.png',
 'assets/orq4/orq1_00021.png', 
 'assets/orq4/orq1_00022.png',
 'assets/orq4/orq1_00023.png',
 'assets/orq4/orq1_00024.png', 
 'assets/orq4/orq1_00025.png',
 'assets/orq4/orq1_00026.png', 
 'assets/orq4/orq1_00027.png', 
 'assets/orq4/orq1_00028.png',
 'assets/orq4/orq1_00029.png',
 'assets/orq4/orq1_00030.png',
 'assets/orq4/orq1_00031.png', 
 'assets/orq4/orq1_00032.png',
 'assets/orq4/orq1_00033.png',
 'assets/orq4/orq1_00034.png'
    );

  
 }


   function loadOrq5(){

 orq5 = loadAnimation(
 'assets/orq5/orq1_00000.png',
 'assets/orq5/orq1_00001.png',
 'assets/orq5/orq1_00002.png',
 'assets/orq5/orq1_00003.png',  
 'assets/orq5/orq1_00004.png',
 'assets/orq5/orq1_00005.png',  
 'assets/orq5/orq1_00006.png',
 'assets/orq5/orq1_00007.png',  
 'assets/orq5/orq1_00008.png',
 'assets/orq5/orq1_00009.png',
 'assets/orq5/orq1_00010.png',
 'assets/orq5/orq1_00011.png', 
 'assets/orq5/orq1_00012.png',
 'assets/orq5/orq1_00013.png',
 'assets/orq5/orq1_00014.png', 
 'assets/orq5/orq1_00015.png',
 'assets/orq5/orq1_00016.png', 
 'assets/orq5/orq1_00017.png', 
 'assets/orq5/orq1_00018.png',
 'assets/orq5/orq1_00019.png',
 'assets/orq5/orq1_00020.png',
 'assets/orq5/orq1_00021.png', 
 'assets/orq5/orq1_00022.png',
 'assets/orq5/orq1_00023.png',
 'assets/orq5/orq1_00024.png', 
 'assets/orq5/orq1_00025.png',
 'assets/orq5/orq1_00026.png', 
 'assets/orq5/orq1_00027.png', 
 'assets/orq5/orq1_00028.png',
 'assets/orq5/orq1_00029.png',
 'assets/orq5/orq1_00030.png',
 'assets/orq5/orq1_00031.png', 
 'assets/orq5/orq1_00032.png',
 'assets/orq5/orq1_00033.png',
 'assets/orq5/orq1_00034.png'
    );

  
 }



   function loadOrq6(){

 orq6 = loadAnimation(
 'assets/orq6/orq1_00000.png',
 'assets/orq6/orq1_00001.png',
 'assets/orq6/orq1_00002.png',
 'assets/orq6/orq1_00003.png',  
 'assets/orq6/orq1_00004.png',
 'assets/orq6/orq1_00005.png',  
 'assets/orq6/orq1_00006.png',
 'assets/orq6/orq1_00007.png',  
 'assets/orq6/orq1_00008.png',
 'assets/orq6/orq1_00009.png',
 'assets/orq6/orq1_00010.png',
 'assets/orq6/orq1_00011.png', 
 'assets/orq6/orq1_00012.png',
 'assets/orq6/orq1_00013.png',
 'assets/orq6/orq1_00014.png', 
 'assets/orq6/orq1_00015.png',
 'assets/orq6/orq1_00016.png', 
 'assets/orq6/orq1_00017.png', 
 'assets/orq6/orq1_00018.png',
 'assets/orq6/orq1_00019.png',
 'assets/orq6/orq1_00020.png',
 'assets/orq6/orq1_00021.png', 
 'assets/orq6/orq1_00022.png',
 'assets/orq6/orq1_00023.png',
 'assets/orq6/orq1_00024.png', 
 'assets/orq6/orq1_00025.png',
 'assets/orq6/orq1_00026.png', 
 'assets/orq6/orq1_00027.png', 
 'assets/orq6/orq1_00028.png',
 'assets/orq6/orq1_00029.png',
 'assets/orq6/orq1_00030.png',
 'assets/orq6/orq1_00031.png', 
 'assets/orq6/orq1_00032.png',
 'assets/orq6/orq1_00033.png',
 'assets/orq6/orq1_00034.png'
    );

  
 }

 function keyPressed(){
  print("Posse0: "+posse0);
  print("Posse1: "+posse1);
  print("Posse2: "+posse2);
  print("Posse3: "+posse3);
  print("Posse4: "+posse4);
  print("Posse5: "+posse5);

 }



 







